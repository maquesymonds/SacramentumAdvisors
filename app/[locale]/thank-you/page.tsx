import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import { THANK_YOU } from "@/data/legal";
import { localePath, pageLocales, type TopicId } from "@/lib/i18n";
import { pageMetadata, toLocale } from "@/lib/seo";
import { topicContent } from "@/lib/topics";

// Conversion page after the contact form (GA4/GTM event in step 9). noindex.
export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return pageMetadata("thank-you", params.locale, { title: THANK_YOU[toLocale(params.locale)].metaTitle });
}

const NEXT: TopicId[] = ["residency", "real-estate", "family-office"];

export default function ThankYouPage({ params }: { params: { locale: string } }) {
  const locale = toLocale(params.locale);
  const c = THANK_YOU[locale];
  return (
    <SimplePage eyebrow={c.eyebrow} title={c.title}>
      <p>{c.body}</p>
      <p>{c.next}</p>
      <ul className="flex flex-col gap-2">
        {NEXT.filter(id => pageLocales(id).includes(locale)).map(id => (
          <li key={id}><a className="text-ink underline underline-offset-4" href={localePath(id, locale)}>{topicContent(id, locale).navLabel}</a></li>
        ))}
      </ul>
      <p><a className="btn-primary mt-4" href={localePath("home", locale)}>{c.home}</a></p>
    </SimplePage>
  );
}
