import { NextRequest, NextResponse } from "next/server";
import { put, list, del } from "@vercel/blob";
import fs from "fs";
import path from "path";
import { getFullAdminContent } from "@/lib/admin-content";

const BLOB_PREFIX  = "admin/content";
const CONTENT_FILE = path.join(process.cwd(), "data/admin-content.json");
const USE_BLOB     = !!process.env.BLOB_READ_WRITE_TOKEN;

function isAuth(req: NextRequest) {
  return req.cookies.get("admin_auth")?.value === "1";
}

// Always get the most recently uploaded blob — never hits CDN cache
async function readFromBlob(): Promise<object | null> {
  try {
    const { blobs } = await list({ prefix: BLOB_PREFIX, limit: 10 });
    if (!blobs.length) return null;
    // Sort by uploadedAt descending, take newest
    const newest = blobs.sort((a, b) =>
      new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
    )[0];
    const res = await fetch(newest.url, { cache: "no-store" });
    if (res.ok) return await res.json();
  } catch {}
  return null;
}

export async function GET(req: NextRequest) {
  if (!isAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (USE_BLOB) {
    const data = await readFromBlob();
    if (data) return NextResponse.json(data);
  }

  return NextResponse.json(getFullAdminContent());
}

export async function POST(req: NextRequest) {
  if (!isAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();

  if (USE_BLOB) {
    // Save with random suffix → brand new URL, CDN has never seen it
    const filename = `${BLOB_PREFIX}-${Date.now()}.json`;
    await put(filename, JSON.stringify(body, null, 2), {
      access:      "public",
      contentType: "application/json",
    });
    // Clean up old blobs (keep only the one we just created)
    try {
      const { blobs } = await list({ prefix: BLOB_PREFIX, limit: 20 });
      const toDelete = blobs
        .sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime())
        .slice(1); // keep newest, delete the rest
      if (toDelete.length) await del(toDelete.map(b => b.url));
    } catch {}
  } else {
    fs.writeFileSync(CONTENT_FILE, JSON.stringify(body, null, 2));
  }

  return NextResponse.json({ ok: true });
}
