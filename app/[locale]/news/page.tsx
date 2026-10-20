import type { Metadata } from "next";
import NewsPageClient from "./NewsPageClient";
import { fetchAdminContent } from "@/lib/admin-content";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { localePath } from "@/lib/i18n";
import { t } from "@/data/translations";
import { coreMetadata, toLocale } from "@/lib/seo";

export const dynamic = "force-dynamic";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return coreMetadata("news", params.locale);
}

export default async function NewsPage({ params }: { params: { locale: string } }) {
  const locale = toLocale(params.locale);
  const content = await fetchAdminContent();
  const published = (content.articles ?? []).filter(a => a.published !== false);
  return (
    <>
      <NewsPageClient adminArticles={published.length ? published : null} />
      <JsonLd data={breadcrumbJsonLd(locale, [{ name: t(locale).nav.news, path: localePath("news", locale) }])} />
    </>
  );
}
