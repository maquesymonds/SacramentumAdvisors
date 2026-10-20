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
// `route` is the folder under app/[locale]/ ("" = home; topic pages share
// one renderer at topic/[topic]). `slugs` is what the visitor sees in the
// URL per locale. A page missing from a locale (`slugs[locale]` = null) is
// replaced by `fallback` in links and in the language switcher.

export type PageId =
  | "home" | "why-uruguay" | "services" | "news" | "blog" | "contact"
  // Functional pages (noindex, not in the sitemap)
  | "thank-you" | "privacy"
  // Sector pages (linked from Why Uruguay)
  | "real-estate" | "farmland" | "technology" | "special-situations"
  // Service pages (linked from Services)
  | "residency" | "tax-residency" | "second-passport" | "retire" | "family-office" | "sacramentum-capital";

export type TopicId = Exclude<PageId, "home" | "why-uruguay" | "services" | "news" | "blog" | "contact" | "thank-you" | "privacy">;

interface PageDef {
  route:     string;
  slugs:     Record<Locale, string | null>;
  fallback?: PageId;
  related?:  PageId[];
  /** noindex,follow — kept out of search results and the sitemap */
  noindex?:  boolean;
}

export const PAGES: Record<PageId, PageDef> = {
  "home":        { route: "",            slugs: { en: "",            es: "",                de: ""              } },
  "why-uruguay": { route: "why-uruguay", slugs: { en: "why-uruguay", es: "por-que-uruguay", de: "warum-uruguay" } },
  "services":    { route: "services",    slugs: { en: "services",    es: "servicios",       de: "leistungen"    } },
  "news":        { route: "news",        slugs: { en: "news",        es: "noticias",        de: "nachrichten"   } },
  "blog":        { route: "blog",        slugs: { en: "blog",        es: "blog",            de: "blog"          } },
  "contact":     { route: "contact",     slugs: { en: "contact",     es: "contacto",        de: "kontakt"       } },
  "thank-you":   { route: "thank-you",   slugs: { en: "thank-you",   es: "gracias",         de: "danke"         }, noindex: true },
  "privacy":     { route: "privacy",     slugs: { en: "privacy",     es: "privacidad",      de: "datenschutz"   }, noindex: true },

  "real-estate": {
    route: "topic/real-estate",
    slugs: { en: "uruguay-real-estate", es: "inmobiliario-punta-del-este-montevideo", de: "immobilien-uruguay" },
    related: ["residency", "tax-residency", "farmland"],
  },
  "farmland": {
    route: "topic/farmland",
    slugs: { en: "uruguay-farmland", es: "campos-y-chacras-en-uruguay", de: "landwirtschaft-uruguay" },
    related: ["family-office", "real-estate", "sacramentum-capital"],
  },
  "technology": {
    route: "topic/technology",
    slugs: { en: "technology", es: "tecnologia", de: "technologie" },
    related: ["sacramentum-capital", "residency", "family-office"],
  },
  "special-situations": {
    route: "topic/special-situations",
    slugs: { en: "special-projects", es: "proyectos-especiales", de: "sonderprojekte" },
    related: ["sacramentum-capital", "family-office", "real-estate"],
  },
  "residency": {
    route: "topic/residency",
    slugs: { en: "uruguay-residency", es: "residencia-en-uruguay", de: "auswandern-nach-uruguay" },
    related: ["tax-residency", "second-passport", "retire", "real-estate"],
  },
  "tax-residency": {
    route: "topic/tax-residency",
    slugs: { en: "uruguay-tax-residency", es: "residencia-fiscal-en-uruguay", de: "steuern-auswandern-uruguay" },
    related: ["residency", "real-estate", "family-office"],
  },
  "second-passport": {
    route: "topic/second-passport",
    slugs: { en: "uruguay-citizenship-second-passport", es: "pasaporte-uruguayo", de: "zweiter-reisepass-uruguay" },
    related: ["residency", "tax-residency"],
  },
  "retire": {
    route: "topic/retire",
    slugs: { en: "retire-in-uruguay", es: null, de: "als-rentner-nach-uruguay" },
    fallback: "residency",
    related: ["residency", "real-estate", "why-uruguay"],
  },
  "family-office": {
    route: "topic/family-office",
    slugs: { en: "family-office-uruguay", es: "family-office-patrimonio", de: "family-office-uruguay" },
    related: ["sacramentum-capital", "farmland", "real-estate", "tax-residency"],
  },
  "sacramentum-capital": {
    route: "topic/sacramentum-capital",
    slugs: { en: "sacramentum-capital", es: "sacramentum-capital", de: "sacramentum-capital" },
    related: ["family-office", "technology", "special-situations"],
  },
};

export const TOPIC_IDS = (Object.keys(PAGES) as PageId[]).filter(
  (id): id is TopicId => PAGES[id].route.startsWith("topic/")
);

export function isTopicId(value: string): value is TopicId {
  return (TOPIC_IDS as string[]).includes(value);
}

/** Locales a page exists in. */
export function pageLocales(id: PageId): Locale[] {
  return LOCALES.filter(l => PAGES[id].slugs[l] !== null);
}

const PAGE_IDS = Object.keys(PAGES) as PageId[];

/** Public path of a page, optionally with a sub-path (article slug). */
export function localePath(id: PageId, locale: Locale, sub?: string): string {
  const slug = PAGES[id].slugs[locale];
  if (slug === null) return localePath(PAGES[id].fallback ?? "home", locale);
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

/** Find the page a slug belongs to in any locale. */
export function pageFromAnySlug(slug: string): PageId | null {
  if (!slug) return null;
  return PAGE_IDS.find(id => LOCALES.some(l => PAGES[id].slugs[l] === slug)) ?? null;
}

/** Find the page whose internal route segment is `route`. */
export function pageFromRoute(route: string): PageId | null {
  if (!route) return null;
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
 * "/services?card=x", "/news/port") or a page reference ("page:residency")
 * into the localized public path.
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
  if (href.startsWith("page:")) {
    const id = href.slice(5) as PageId;
    return id in PAGES ? localePath(id, locale) : localePath("home", locale);
  }
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const [pathPart, query = ""] = href.split("?");
  const [first, ...rest] = pathPart.split("/").filter(Boolean);
  if (isLocale(first)) return href;
  const page = LEGACY_ROUTES[first ?? ""];
  if (!page) return href;
  const path = localePath(page, locale, rest.length ? rest.join("/") : undefined);
  return query ? `${path}?${query}` : path;
}

/** Indexed locales a page exists in. */
export function indexedLocales(id: PageId): Locale[] {
  return pageLocales(id).filter(l => INDEXED_LOCALES.includes(l));
}

/** x-default: the root for the home (it redirects by language), English elsewhere. */
export function xDefault(id: PageId, sub?: string): string {
  if (id === "home") return SITE_URL + "/";
  const target = pageLocales(id).includes(DEFAULT_LOCALE) ? DEFAULT_LOCALE : pageLocales(id)[0];
  return absoluteUrl(localePath(id, target, sub));
}

/**
 * hreflang alternates + canonical for a page. Only indexed locales appear;
 * x-default points to English.
 */
export function pageAlternates(id: PageId, locale: Locale, sub?: string) {
  const languages: Record<string, string> = {};
  for (const l of indexedLocales(id)) languages[l] = absoluteUrl(localePath(id, l, sub));
  languages["x-default"] = xDefault(id, sub);
  return {
    canonical: absoluteUrl(localePath(id, locale, sub)),
    languages: INDEXED_LOCALES.includes(locale) ? languages : undefined,
  };
}

export function robotsFor(locale: Locale, opts?: { noindex?: boolean }) {
  const indexedLocale = INDEXED_LOCALES.includes(locale);
  // noindex pages (thank-you, privacy) still let crawlers follow their links
  return { index: indexedLocale && !opts?.noindex, follow: indexedLocale };
}
