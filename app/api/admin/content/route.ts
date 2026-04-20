import { NextRequest, NextResponse } from "next/server";
import { put, head } from "@vercel/blob";
import fs from "fs";
import path from "path";
import { getFullAdminContent } from "@/lib/admin-content";

const BLOB_PATH     = "admin/content.json";
const CONTENT_FILE  = path.join(process.cwd(), "data/admin-content.json");
const USE_BLOB      = !!process.env.BLOB_READ_WRITE_TOKEN;

function isAuth(req: NextRequest) {
  return req.cookies.get("admin_auth")?.value === "1";
}

export async function GET(req: NextRequest) {
  if (!isAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  if (USE_BLOB) {
    try {
      const blob = await head(BLOB_PATH);
      if (blob) {
        const res = await fetch(blob.url, { cache: "no-store" });
        if (res.ok) return NextResponse.json(await res.json());
      }
    } catch {}
  }

  // Fallback: return default content from committed JSON / translations
  return NextResponse.json(getFullAdminContent());
}

export async function POST(req: NextRequest) {
  if (!isAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();

  if (USE_BLOB) {
    await put(BLOB_PATH, JSON.stringify(body, null, 2), {
      access:            "public",
      addRandomSuffix:   false,
      contentType:       "application/json",
    });
  } else {
    // Local dev: write to file
    fs.writeFileSync(CONTENT_FILE, JSON.stringify(body, null, 2));
  }

  return NextResponse.json({ ok: true });
}
