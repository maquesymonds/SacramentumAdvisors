import type { Metadata } from "next";
import { notFound }      from "next/navigation";
import ArticlePageClient from "./ArticlePageClient";
import { t }             from "@/data/translations";
import { getAdminArticles } from "@/lib/admin-content";

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const articles = getAdminArticles() ?? (t("en").news.articles as { id: string; title: string; excerpt: string }[]);
  const article  = articles.find(a => a.id === params.id);
  if (!article) return {};
  return {
    title:       `${article.title} | Sacramentum Advisors`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const adminArticles = getAdminArticles();
  const enArticles    = t("en").news.articles as { id: string }[];
  const validIds      = enArticles.map(a => a.id);

  if (!validIds.includes(params.id)) notFound();

  return <ArticlePageClient id={params.id} adminArticles={adminArticles} />;
}
