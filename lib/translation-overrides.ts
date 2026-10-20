/* ─────────────────────────────────────────────────────────────────────────────
   Admin text overrides — read on the server
   The admin "Textos" panel saves overrides to Vercel Blob. Reading them here
   (instead of fetching from the browser after load) means crawlers and the
   first paint get the edited copy. Cached; the admin save route revalidates
   the tag so edits show immediately.
   ─────────────────────────────────────────────────────────────────────────── */

import { list } from "@vercel/blob";
import { unstable_cache } from "next/cache";

export const TRANSLATIONS_TAG = "translations";
const BLOB_PREFIX = "admin/translations";

export type Overrides = Record<string, Record<string, unknown>>;

async function readOverrides(): Promise<Overrides> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return {};
  try {
    const { blobs } = await list({ prefix: BLOB_PREFIX, limit: 10 });
    if (!blobs.length) return {};
    const newest = blobs.sort(
      (a, b) => new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
    )[0];
    const res = await fetch(newest.url, { cache: "no-store" });
    if (!res.ok) return {};
    const data = await res.json();
    return data && typeof data === "object" ? (data as Overrides) : {};
  } catch {
    return {};
  }
}

export const getTranslationOverrides = unstable_cache(readOverrides, [TRANSLATIONS_TAG], {
  tags: [TRANSLATIONS_TAG],
  revalidate: 300,
});
