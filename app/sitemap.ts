import type { MetadataRoute } from "next";
import { fetchAdminContent } from "@/lib/admin-content";
import {
  INDEXED_LOCALES,
  PAGES,
  absoluteUrl,
  localePath,
  xDefault,
  type PageId,
} from "@/lib/i18n";

export const dynamic = "force-dynamic";

// Derived from the page registry — never edited by hand. Only indexed
// locales are listed; each entry carries its hreflang alternates.
function entry(id: PageId, sub?: string): MetadataRoute.Sitemap {
  const languages: Record<string, string> = {};
  for (const l of INDEXED_LOCALES) languages[l] = absoluteUrl(localePath(id, l, sub));
  languages["x-default"] = xDefault(id, sub);
  return INDEXED_LOCALES.map(locale => ({
    url:          absoluteUrl(localePath(id, locale, sub)),
    lastModified: new Date(),
    alternates:   { languages },
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const content  = await fetchAdminContent();
  const articles = (content.articles ?? []).filter(a => a.published !== false);
  const posts    = (content.blog ?? []).filter(p => p.published !== false);

  return [
    ...(Object.keys(PAGES) as PageId[]).flatMap(id => entry(id)),
    ...articles.flatMap(a => entry("news", a.id)),
    ...posts.flatMap(p => entry("blog", p.id)),
  ];
}
