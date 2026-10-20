import type { Metadata } from "next";
import NewsPageClient from "./NewsPageClient";
import { fetchAdminContent } from "@/lib/admin-content";
import { pageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return pageMetadata("news", params.locale, {
  title: "Uruguay News",
  description:
    "A curated selection of stories and signals shaping Uruguay's rise as a strategic destination for investment, lifestyle, and long-term regional access.",
  });
}

export default async function NewsPage() {
  const content = await fetchAdminContent();
  const published = (content.articles ?? []).filter(a => a.published !== false);
  return <NewsPageClient adminArticles={published.length ? published : null} />;
}
