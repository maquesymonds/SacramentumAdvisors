/* ─────────────────────────────────────────────────────────────────────────────
   Admin text overrides — read on the server
   The admin "Textos" panel saves overrides to Vercel Blob. Reading them here
   (instead of fetching from the browser after load) means crawlers and the
   first paint get the edited copy. Cached; the admin save route revalidates
   the tag so edits show immediately.

   Resets: until 20.10.2026 the panel saved a full snapshot of every field, so
   any copy changed later in code stayed masked by the old snapshot. Sections
   whose copy was deliberately replaced in code are listed in RESETS: overrides
   for them saved before that date are ignored. Since then the panel saves only
   the fields that differ from the code copy.
   ─────────────────────────────────────────────────────────────────────────── */

import { list } from "@vercel/blob";
import { unstable_cache } from "next/cache";

export const TRANSLATIONS_TAG = "translations";
const BLOB_PREFIX = "admin/translations";

export type Overrides = Record<string, Record<string, unknown>>;

const RESETS: Record<string, string> = {
  // New client-approved Technology copy (docs/content/technology-en.md)
  investTechnology: "2026-10-20T00:00:00Z",
  // Stage-2 content review (25.10.2026): one name per service and sector,
  // "Reservar consulta" buttons, contact form options, usted, 97 % of the
  // electricity. The panel's real edits in these sections (EN hero
  // "Tailored", "hub", COMAP, quoted "lifestyle assets") were moved to code.
  hero:              "2026-10-26T00:00:00Z",
  whyUruguay:        "2026-10-26T00:00:00Z",
  howWeSupport:      "2026-10-26T00:00:00Z",
  closingCta:        "2026-10-26T00:00:00Z",
  contact:           "2026-10-26T00:00:00Z",
  contactPage:       "2026-10-26T00:00:00Z",
  footer:            "2026-10-26T00:00:00Z",
  investAgriculture: "2026-10-26T00:00:00Z",
  investRealEstate:  "2026-10-26T00:00:00Z",
  lifestyleAssets:   "2026-10-26T00:00:00Z",
  blog:              "2026-10-26T00:00:00Z",
};

function applyResets(data: Overrides, savedAt: Date): Overrides {
  const out: Overrides = {};
  for (const [locale, sections] of Object.entries(data)) {
    if (!sections || typeof sections !== "object") continue;
    const kept: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(sections)) {
      const resetAt = RESETS[key];
      if (resetAt && savedAt < new Date(resetAt)) continue;
      kept[key] = value;
    }
    out[locale] = kept;
  }
  return out;
}

/** Newest saved overrides from Blob, with resets applied. Uncached. */
export async function readOverridesFromBlob(): Promise<Overrides> {
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
    if (!data || typeof data !== "object") return {};
    return applyResets(data as Overrides, new Date(newest.uploadedAt));
  } catch {
    return {};
  }
}

export const getTranslationOverrides = unstable_cache(readOverridesFromBlob, [TRANSLATIONS_TAG], {
  tags: [TRANSLATIONS_TAG],
  revalidate: 300,
});
