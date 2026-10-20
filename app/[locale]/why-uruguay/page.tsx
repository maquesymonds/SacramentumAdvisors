import type { Metadata } from "next";
import InvestPageClient from "./InvestPageClient";
import { coreMetadata, toLocale } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { localePath } from "@/lib/i18n";
import { t } from "@/data/translations";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return coreMetadata("why-uruguay", params.locale);
}

export default function InvestPage({ params }: { params: { locale: string } }) {
  const locale = toLocale(params.locale);
  return <>
      <InvestPageClient />
      <JsonLd data={breadcrumbJsonLd(locale, [{ name: t(locale).nav.whyUruguay, path: localePath("why-uruguay", locale) }])} />
    </>;
}
