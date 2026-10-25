import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";
import { coreMetadata, toLocale } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { localePath } from "@/lib/i18n";
import { t } from "@/data/translations";
import FaqSection from "@/components/faq/FaqSection";
import { coreFaqs } from "@/data/faqs";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return coreMetadata("services", params.locale);
}

export default function ServicesPage({ params }: { params: { locale: string } }) {
  const locale = toLocale(params.locale);
  return (
    <>
      <ServicesPageClient faq={<FaqSection id="services" locale={locale} items={coreFaqs("services", locale)} />} />
      <JsonLd data={breadcrumbJsonLd(locale, [{ name: t(locale).nav.sectors, path: localePath("services", locale) }])} />
    </>
  );
}
