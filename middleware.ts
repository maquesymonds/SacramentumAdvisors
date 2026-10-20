/* ─────────────────────────────────────────────────────────────────────────────
   Middleware — locale routing
   1. "/"                 → the visitor's language (saved choice → browser → EN)
   2. legacy URLs         → 301 to the English page (old URLs only ever served EN)
   3. localized slugs     → rewritten to the internal route (/es/por-que-uruguay
                            → /es/why-uruguay); internal English slugs used in
                            another locale → 301 to the localized slug
   See docs/ARCHITECTURE.md §5 and §10.
   ─────────────────────────────────────────────────────────────────────────── */

import { NextResponse, type NextRequest } from "next/server";
import {
  DEFAULT_LOCALE,
  LOCALE_COOKIE,
  PAGES,
  isLocale,
  localePath,
  localizeHref,
  pageFromRoute,
  pageFromSlug,
  type Locale,
} from "@/lib/i18n";

function preferredLocale(req: NextRequest): Locale {
  const saved = req.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(saved)) return saved;

  const header = req.headers.get("accept-language") ?? "";
  const ranked = header
    .split(",")
    .map(part => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.toLowerCase().split("-")[0], q: q ? parseFloat(q) : 1 };
    })
    .filter(x => x.lang)
    .sort((a, b) => b.q - a.q);
  for (const { lang } of ranked) if (isLocale(lang)) return lang;
  return DEFAULT_LOCALE;
}

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  const [first, second, ...rest] = segments;

  // 1 · Entry point
  if (segments.length === 0) {
    const url = req.nextUrl.clone();
    url.pathname = localePath("home", preferredLocale(req));
    return NextResponse.redirect(url, 307);
  }

  // 2 · Legacy URLs without a locale prefix
  if (!isLocale(first)) {
    const target = localizeHref(pathname, DEFAULT_LOCALE);
    const url = req.nextUrl.clone();
    url.pathname = target === pathname ? `/${DEFAULT_LOCALE}${pathname}` : target;
    url.search = search;
    return NextResponse.redirect(url, 301);
  }

  // 3 · Localized URLs
  const locale = first;
  if (!second) return NextResponse.next();

  const page = pageFromSlug(locale, second);
  if (page) {
    const route = PAGES[page].route;
    if (route === second) return NextResponse.next();
    const url = req.nextUrl.clone();
    url.pathname = "/" + [locale, route, ...rest].join("/");
    return NextResponse.rewrite(url);
  }

  // An internal route name used with the wrong locale → its localized slug
  const byRoute = pageFromRoute(second);
  if (byRoute) {
    const url = req.nextUrl.clone();
    url.pathname = localePath(byRoute, locale, rest.length ? rest.join("/") : undefined);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Everything except Next internals, API routes, the admin and static files.
  matcher: ["/((?!_next|api|admin|.*\\..*).*)"],
};

