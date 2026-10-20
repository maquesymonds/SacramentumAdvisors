/* ─────────────────────────────────────────────────────────────────────────────
   i18n — locales and the page registry
   One source of truth for every public page: its internal route segment and
   its public slug per locale. Routing (middleware), links, the language
   switcher, hreflang, canonicals and the sitemap all derive from PAGES.
   See docs/ARCHITECTURE.md.
   ─────────────────────────────────────────────────────────────────────────── */

export const LOCALES = ["en", "es", "de"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

// Locales published to search engines. German stays out (noindex, no
// hreflang, not in the sitemap) until its copy exists — today /de/ falls
// back to English text.
export const INDEXED_LOCALES: readonly Locale[] = ["en", "es"];

export const SITE_URL = "https://sacramentumadvisors.com";

export const LOCALE_COOKIE = "NEXT_LOCALE";

export const DATE_LOCALE: Record<Locale, string> = {
  en: "en-US",
  es: "es-UY",
  de: "de-DE",
};

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  es: "es_UY",
  de: "de_DE",
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

// ── Page registry ────────────────────────────────────────────────────────────
// `route` is the folder under app/[locale]/ ("" = home). `slugs` is what the
// visitor sees in the URL for each locale.

export type PageId = "home" | "why-uruguay" | "services" | "news" | "blog" | "contact";

interface PageDef {
  route: string;
  slugs: Record<Locale, string>;
}

export const PAGES: Record<PageId, PageDef> = {
  "home":        { route: "",            slugs: { en: "",            es: "",                de: ""               } },
  "why-uruguay": { route: "why-uruguay", slugs: { en: "why-uruguay", es: "por-que-uruguay", de: "warum-uruguay"  } },
  "services":    { route: "services",    slugs: { en: "services",    es: "servicios",       de: "leistungen"     } },
  "news":        { route: "news",        slugs: { en: "news",        es: "noticias",        de: "nachrichten"    } },
  "blog":        { route: "blog",        slugs: { en: "blog",        es: "blog",            de: "blog"           } },
  "contact":     { route: "contact",     slugs: { en: "contact",     es: "contacto",        de: "kontakt"        } },
};

const PAGE_IDS = Object.keys(PAGES) as PageId[];

/** Public path of a page, optionally with a sub-path (article slug). */
export function localePath(id: PageId, locale: Locale, sub?: string): string {
  const slug = PAGES[id].slugs[locale];
  const parts = [locale, slug, sub].filter(Boolean);
  return "/" + parts.join("/");
}

export function absoluteUrl(path: string): string {
  return SITE_URL + path;
}

/** Find the page a public slug belongs to in a given locale. */
export function pageFromSlug(locale: Locale, slug: string): PageId | null {
  return PAGE_IDS.find(id => PAGES[id].slugs[locale] === slug) ?? null;
}

/** Find the page whose internal route segment is `route`. */
export function pageFromRoute(route: string): PageId | null {
  return PAGE_IDS.find(id => PAGES[id].route === route) ?? null;
}

/**
 * Parse a public pathname ("/es/noticias/port") into locale, page and sub-path.
 * Returns null when the path is not a localized public page.
 */
export function parsePublicPath(pathname: string): { locale: Locale; page: PageId; sub?: string } | null {
  const [first, second, ...rest] = pathname.split("/").filter(Boolean);
  if (!isLocale(first)) return null;
  if (!second) return { locale: first, page: "home" };
  const page = pageFromSlug(first, second);
  if (!page) return null;
  return { locale: first, page, sub: rest.length ? rest.join("/") : undefined };
}

/** The same page in another locale — what the language switcher links to. */
export function switchLocalePath(pathname: string, target: Locale): string {
  const parsed = parsePublicPath(pathname);
  if (!parsed) return localePath("home", target);
  return localePath(parsed.page, target, parsed.sub);
}

export function isHomePath(pathname: string): boolean {
  const parsed = parsePublicPath(pathname);
  return parsed?.page === "home";
}

/**
 * Convert a site-relative href written without locale ("/invest",
 * "/services?card=x", "/news/port") into the localized public path.
 * Used for links stored in copy and admin content. External and
 * already-localized hrefs are returned unchanged.
 */
const LEGACY_ROUTES: Record<string, PageId> = {
  "":         "home",
  "invest":   "why-uruguay",
  "why-uruguay": "why-uruguay",
  "services": "services",
  "news":     "news",
  "blog":     "blog",
  "contact":  "contact",
};

export function localizeHref(href: string, locale: Locale): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const [pathPart, query = ""] = href.split("?");
  const [first, ...rest] = pathPart.split("/").filter(Boolean);
  if (isLocale(first)) return href;
  const page = LEGACY_ROUTES[first ?? ""];
  if (!page) return href;
  const path = localePath(page, locale, rest.length ? rest.join("/") : undefined);
  return query ? `${path}?${query}` : path;
}

/** x-default: the root for the home (it redirects by language), English elsewhere. */
export function xDefault(id: PageId, sub?: string): string {
  return id === "home" ? SITE_URL + "/" : absoluteUrl(localePath(id, DEFAULT_LOCALE, sub));
}

/**
 * hreflang alternates + canonical for a page. Only indexed locales appear;
 * x-default points to English.
 */
export function pageAlternates(id: PageId, locale: Locale, sub?: string) {
  const languages: Record<string, string> = {};
  for (const l of INDEXED_LOCALES) languages[l] = absoluteUrl(localePath(id, l, sub));
  languages["x-default"] = xDefault(id, sub);
  return {
    canonical: absoluteUrl(localePath(id, locale, sub)),
    languages: INDEXED_LOCALES.includes(locale) ? languages : undefined,
  };
}

export function robotsFor(locale: Locale, opts?: { noindex?: boolean }) {
  const index = INDEXED_LOCALES.includes(locale) && !opts?.noindex;
  return { index, follow: index };
}
