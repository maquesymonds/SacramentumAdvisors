import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TopicPage from "@/components/topic/TopicPage";
import CapitalPage from "@/components/capital/CapitalPage";
import { LOCALES, TOPIC_IDS, isTopicId, pageLocales } from "@/lib/i18n";
import { topicContent } from "@/lib/topics";
import { pageMetadata, toLocale } from "@/lib/seo";
import { getTranslationOverrides } from "@/lib/translation-overrides";

// Reached only through the middleware rewrite of a localized slug
// (/es/residencia-en-uruguay → /es/topic/residency).
export function generateStaticParams() {
  return LOCALES.flatMap(locale =>
    TOPIC_IDS.filter(id => pageLocales(id).includes(locale)).map(topic => ({ locale, topic }))
  );
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: { locale: string; topic: string } }): Promise<Metadata> {
  if (!isTopicId(params.topic)) return {};
  const c = topicContent(params.topic, toLocale(params.locale), await getTranslationOverrides());
  return pageMetadata(params.topic, params.locale, {
    title:       c.metaTitle,
    description: c.metaDescription,
    absolute:    c.metaTitleAbsolute,
  });
}

export default function Page({ params }: { params: { locale: string; topic: string } }) {
  const locale = toLocale(params.locale);
  if (!isTopicId(params.topic) || !pageLocales(params.topic).includes(locale)) notFound();
  // Sacramentum Capital is a separate firm: its own page and look.
  if (params.topic === "sacramentum-capital") return <CapitalPage locale={locale} />;
  return <TopicPage id={params.topic} locale={locale} />;
}
