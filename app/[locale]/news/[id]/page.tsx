import type { Metadata } from "next";
import { notFound }      from "next/navigation";
import ArticlePageClient from "./ArticlePageClient";
import { t }             from "@/data/translations";
import { fetchAdminContent } from "@/lib/admin-content";
import { clampDescription, pageMetadata, toLocale } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { localePath, pageLocales } from "@/lib/i18n";
import { ARTICLE_RELATED } from "@/lib/topic-links";
import { newsTopic } from "@/lib/news-topics";
import { relatedCard, TOPIC_UI } from "@/components/topic/TopicPage";
import { getTranslationOverrides } from "@/lib/translation-overrides";

export const dynamic = "force-dynamic";

// Kept out of Google (Maque, 25.10.2026): the news cards link straight to the
// original outlet, so these internal copies are thin pages under other media's
// titles. noindex,follow keeps the stage-1 URLs working without listing them.
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
  }, { sub: article.id, noindex: true });
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

  // Sector chosen in the admin (or mapped in lib/news-topics) first; ARTICLE_RELATED covers the stage-1 articles.
  const adminArticle = adminArticles?.find(a => a.id === params.id);
  const relId = (adminArticle && newsTopic(adminArticle)) || ARTICLE_RELATED[params.id];
  const card  = relId && pageLocales(relId).includes(locale)
    ? relatedCard(relId, locale, await getTranslationOverrides())
    : null;
  const related = card ? { ...card, eyebrow: TOPIC_UI[locale].related } : null;

  return (
    <>
      <ArticlePageClient id={params.id} adminArticles={adminArticles} related={related} />
      <JsonLd data={breadcrumbJsonLd(locale, [
        { name: t(locale).nav.news, path: localePath("news", locale) },
        { name: title,              path: localePath("news", locale, params.id) },
      ])} />
    </>
  );
}
