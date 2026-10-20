import { NextResponse } from "next/server";
import { readOverridesFromBlob } from "@/lib/translation-overrides";

export const dynamic = "force-dynamic";

// Kept for compatibility; the site now reads overrides on the server.
export async function GET() {
  return NextResponse.json(await readOverridesFromBlob(), {
    headers: { "Cache-Control": "no-store, max-age=0" },
  });
}
