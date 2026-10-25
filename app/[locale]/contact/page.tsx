/* ─────────────────────────────────────────────────────────────────────────────
   /contact — Private Consultation page
   Server component: owns the <head> metadata.
   All interactive UI lives in ContactPageClient (client component).
   ─────────────────────────────────────────────────────────────────────────── */

import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
import { coreMetadata, toLocale } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { localePath } from "@/lib/i18n";
import { t } from "@/data/translations";
import FaqSection from "@/components/faq/FaqSection";
import { coreFaqs } from "@/data/faqs";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return coreMetadata("contact", params.locale);
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  const locale = toLocale(params.locale);
  return <>
      <ContactPageClient faq={<FaqSection id="contact" locale={locale} items={coreFaqs("contact", locale)} />} />
      <JsonLd data={breadcrumbJsonLd(locale, [{ name: t(locale).nav.contact, path: localePath("contact", locale) }])} />
    </>;
}
