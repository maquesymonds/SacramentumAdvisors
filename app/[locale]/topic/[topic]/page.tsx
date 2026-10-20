import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TopicPage from "@/components/topic/TopicPage";
import { LOCALES, TOPIC_IDS, isTopicId, pageLocales } from "@/lib/i18n";
import { topicContent } from "@/lib/topics";
import { pageMetadata, toLocale } from "@/lib/seo";

// Reached only through the middleware rewrite of a localized slug
// (/es/residencia-en-uruguay → /es/topic/residency).
export function generateStaticParams() {
  return LOCALES.flatMap(locale =>
    TOPIC_IDS.filter(id => pageLocales(id).includes(locale)).map(topic => ({ locale, topic }))
  );
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: { locale: string; topic: string } }): Metadata {
  if (!isTopicId(params.topic)) return {};
  const c = topicContent(params.topic, toLocale(params.locale));
  return pageMetadata(params.topic, params.locale, {
    title:       c.metaTitle,
    description: c.metaDescription,
    openGraph:   { title: c.metaTitle, description: c.metaDescription },
  });
}

export default function Page({ params }: { params: { locale: string; topic: string } }) {
  const locale = toLocale(params.locale);
  if (!isTopicId(params.topic) || !pageLocales(params.topic).includes(locale)) notFound();
  return <TopicPage id={params.topic} locale={locale} />;
}
