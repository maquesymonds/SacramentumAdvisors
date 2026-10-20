import type { Metadata } from "next";
import {
  DEFAULT_LOCALE,
  OG_LOCALE,
  PAGES,
  absoluteUrl,
  indexedLocales,
  isLocale,
  localePath,
  pageAlternates,
  robotsFor,
  type Locale,
  type PageId,
} from "@/lib/i18n";
import { PAGE_META, type CorePage } from "@/lib/page-meta";

export function toLocale(param: string): Locale {
  return isLocale(param) ? param : DEFAULT_LOCALE;
}

const BRAND = "Sacramentum Advisors";

/**
 * Per-page metadata: title, description, canonical, hreflang, robots and
 * Open Graph — og:title/og:description always mirror the page's own title and
 * description (web-seo-geo §3). og:image is omitted until a real image exists.
 */
export function pageMetadata(
  id: PageId,
  localeParam: string,
  meta: { title?: string; description?: string; absolute?: boolean },
  opts?: { sub?: string; noindex?: boolean }
): Metadata {
  const locale = toLocale(localeParam);
  const fullTitle = meta.title ? (meta.absolute ? meta.title : `${meta.title} | ${BRAND}`) : undefined;
  return {
    ...(meta.title ? { title: meta.absolute ? { absolute: meta.title } : meta.title } : {}),
    ...(meta.description ? { description: meta.description } : {}),
    alternates: pageAlternates(id, locale, opts?.sub),
    robots: robotsFor(locale, { noindex: opts?.noindex || PAGES[id].noindex }),
    openGraph: {
      type:            "website",
      siteName:        BRAND,
      locale:          OG_LOCALE[locale],
      alternateLocale: indexedLocales(id).filter(l => l !== locale).map(l => OG_LOCALE[l]),
      url:             absoluteUrl(localePath(id, locale, opts?.sub)),
      ...(fullTitle ? { title: fullTitle } : {}),
      ...(meta.description ? { description: meta.description } : {}),
    },
    twitter: {
      card: "summary",
      ...(fullTitle ? { title: fullTitle } : {}),
      ...(meta.description ? { description: meta.description } : {}),
    },
  };
}

/** Metadata for the non-topic pages, from lib/page-meta.ts. */
export function coreMetadata(id: CorePage, localeParam: string): Metadata {
  return pageMetadata(id, localeParam, PAGE_META[id][toLocale(localeParam)]);
}

/**
 * Descriptions that come from editable content (article excerpts) are cut at a
 * word boundary so they stay inside the ~960 px snippet width (≈155 chars).
 */
export function clampDescription(text: string | undefined, max = 155): string | undefined {
  if (!text) return text;
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\s–—-]+$/, "") + "…";
}
