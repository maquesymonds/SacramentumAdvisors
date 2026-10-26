import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import SectionCta from "@/components/ui/SectionCta";
import { THANK_YOU } from "@/data/legal";
import { localePath } from "@/lib/i18n";
import { pageMetadata, toLocale } from "@/lib/seo";

// Conversion page after the contact form (GA4/GTM event in step 9). noindex.
export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return pageMetadata("thank-you", params.locale, { title: THANK_YOU[toLocale(params.locale)].metaTitle, description: THANK_YOU[toLocale(params.locale)].metaDescription });
}

export default function ThankYouPage({ params }: { params: { locale: string } }) {
  const locale = toLocale(params.locale);
  const c = THANK_YOU[locale];
  return (
    <SimplePage title={c.title} centered>
      <p>{c.body}</p>
      <SectionCta id="thank-you-home" label={c.home} href={localePath("home", locale)} />
    </SimplePage>
  );
}
