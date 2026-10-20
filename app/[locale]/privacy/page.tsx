import type { Metadata } from "next";
import SimplePage from "@/components/SimplePage";
import { PRIVACY } from "@/data/legal";
import { pageMetadata, toLocale } from "@/lib/seo";

// DRAFT privacy policy — pending legal review (see data/legal.ts). noindex,follow.
export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return pageMetadata("privacy", params.locale, { title: PRIVACY[toLocale(params.locale)].metaTitle });
}

export default function PrivacyPage({ params }: { params: { locale: string } }) {
  const c = PRIVACY[toLocale(params.locale)];
  return (
    <SimplePage title={c.title}>
      <p className="text-ink-subtle" style={{ fontSize: "0.85rem" }}>{c.updated}</p>
      {c.sections.map(s => (
        <section key={s.heading} className="flex flex-col gap-3 mt-4">
          <h2 className="text-ink" style={{ fontSize: "1.3rem" }}>{s.heading}</h2>
          {s.body.map((p, i) => <p key={i}>{p}</p>)}
        </section>
      ))}
    </SimplePage>
  );
}
