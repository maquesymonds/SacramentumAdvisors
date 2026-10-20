import type { Metadata } from "next";
import {
  DEFAULT_LOCALE,
  absoluteUrl,
  isLocale,
  localePath,
  pageAlternates,
  robotsFor,
  type Locale,
  type PageId,
} from "@/lib/i18n";

export function toLocale(param: string): Locale {
  return isLocale(param) ? param : DEFAULT_LOCALE;
}

/**
 * Per-page metadata: adds canonical, hreflang alternates, robots and the
 * Open Graph URL derived from the page registry. Titles and descriptions
 * are passed in by each page.
 */
export function pageMetadata(
  id: PageId,
  localeParam: string,
  base: Metadata,
  opts?: { sub?: string; noindex?: boolean }
): Metadata {
  const locale = toLocale(localeParam);
  return {
    ...base,
    alternates: pageAlternates(id, locale, opts?.sub),
    robots: robotsFor(locale, { noindex: opts?.noindex }),
    openGraph: {
      ...(base.openGraph ?? {}),
      url: absoluteUrl(localePath(id, locale, opts?.sub)),
    },
  };
}
