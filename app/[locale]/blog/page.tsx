import type { Metadata } from "next";
import BlogPageClient from "./BlogPageClient";
import { fetchAdminContent } from "@/lib/admin-content";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { localePath } from "@/lib/i18n";
import { t } from "@/data/translations";
import { coreMetadata, toLocale } from "@/lib/seo";

export const dynamic = "force-dynamic";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return coreMetadata("blog", params.locale);
}

export default async function BlogPage({ params }: { params: { locale: string } }) {
  const locale = toLocale(params.locale);
  const content = await fetchAdminContent();
  const published = (content.blog ?? []).filter(p => p.published !== false);
  return (
    <>
      <BlogPageClient posts={published} />
      <JsonLd data={breadcrumbJsonLd(locale, [{ name: t(locale).nav.blog, path: localePath("blog", locale) }])} />
    </>
  );
}
