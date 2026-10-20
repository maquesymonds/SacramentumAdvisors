import { NextRequest, NextResponse } from "next/server";
import { put, list, del } from "@vercel/blob";
import { revalidateTag } from "next/cache";
import { TRANSLATIONS_TAG, readOverridesFromBlob } from "@/lib/translation-overrides";

const BLOB_PREFIX = "admin/translations";
const USE_BLOB    = !!process.env.BLOB_READ_WRITE_TOKEN;

function isAuth(req: NextRequest) {
  return req.cookies.get("admin_auth")?.value === "1";
}

export async function GET(req: NextRequest) {
  if (!isAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  // Same reader as the public site (resets applied), never cached here.
  if (USE_BLOB) return NextResponse.json(await readOverridesFromBlob());
  return NextResponse.json({});
}

export async function POST(req: NextRequest) {
  if (!isAuth(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();

  if (USE_BLOB) {
    const filename = `${BLOB_PREFIX}-${Date.now()}.json`;
    await put(filename, JSON.stringify(body, null, 2), {
      access:      "public",
      contentType: "application/json",
    });
    try {
      const { blobs } = await list({ prefix: BLOB_PREFIX, limit: 20 });
      const toDelete = blobs
        .sort((a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime())
        .slice(1);
      if (toDelete.length) await del(toDelete.map(b => b.url));
    } catch {}
  }

  revalidateTag(TRANSLATIONS_TAG);
  return NextResponse.json({ ok: true });
}
