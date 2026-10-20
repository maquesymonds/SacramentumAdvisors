import type { Metadata } from "next";
import { notFound }      from "next/navigation";
import ArticlePageClient from "./ArticlePageClient";
import { t }             from "@/data/translations";
import { fetchAdminContent } from "@/lib/admin-content";
import { clampDescription, pageMetadata, toLocale } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { localePath } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export async function generateMetadata(
  { params }: { params: { id: string; locale: string } }
): Promise<Metadata> {
  const content  = await fetchAdminContent();
  const articles = content.articles ?? (t("en").news.articles as { id: string; title: string; excerpt: string }[]);
  const article  = articles.find(a => a.id === params.id);
  if (!article) return {};
  return pageMetadata("news", params.locale, {
    title:       article.title,
    absolute:    true, // articles carry no brand suffix (web-seo-geo §2)
    description: clampDescription(article.excerpt),
  }, { sub: article.id });
}

export default async function ArticlePage({ params }: { params: { id: string; locale: string } }) {
  const locale = toLocale(params.locale);
  const content       = await fetchAdminContent();
  const adminArticles = content.articles ?? null;
  const enArticles    = t("en").news.articles as { id: string }[];
  const allIds        = [
    ...enArticles.map(a => a.id),
    ...(adminArticles?.map(a => a.id) ?? []),
  ];

  if (!allIds.includes(params.id)) notFound();

  const all = [...(adminArticles ?? []), ...(t(locale).news.articles as { id: string; title: string }[])];
  const title = all.find(a => a.id === params.id)?.title ?? params.id;
  return (
    <>
      <ArticlePageClient id={params.id} adminArticles={adminArticles} />
      <JsonLd data={breadcrumbJsonLd(locale, [
        { name: t(locale).nav.news, path: localePath("news", locale) },
        { name: title,              path: localePath("news", locale, params.id) },
      ])} />
    </>
  );
}
