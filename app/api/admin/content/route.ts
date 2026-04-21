import { NextRequest, NextResponse } from "next/server";
import { put, list } from "@vercel/blob";
import fs from "fs";
import path from "path";
import { getFullAdminContent } from "@/lib/admin-content";

const BLOB_PATH    = "admin/content.json";
const CONTENT_FILE = path.join(process.cwd(), "data/admin-content.json");
const USE_BLOB     = !!process.env.BLOB_READ_WRITE_TOKEN;

function isAuth(req: NextRequest) {
  return req.cookies.get("admin_auth")?.value === "1";
}

async function readFromBlob(): Promise<object | null> {
  try {
    const { blobs } = await list({ prefix: BLOB_PATH, limit: 1 });
    if (!blobs.length) return null;
    const res = await fetch(blobs[0].url + "?t=" + Date.now(), { cache: "no-store" });
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
    await put(BLOB_PATH, JSON.stringify(body, null, 2), {
      access:          "public",
      addRandomSuffix: false,
      contentType:     "application/json",
    });
  } else {
    fs.writeFileSync(CONTENT_FILE, JSON.stringify(body, null, 2));
  }

  return NextResponse.json({ ok: true });
}
