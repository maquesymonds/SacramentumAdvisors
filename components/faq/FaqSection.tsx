/* ─────────────────────────────────────────────────────────────────────────────
   FaqSection — the FAQ block every page uses
   Katzer layout: centred title, one column of cards. Renders its own
   FAQPage JSON-LD from the same items (text and schema can't drift apart).
   No "use client": it renders on the server, also when passed as a prop to a
   client page. A shared `name` makes the <details> an accordion; it is
   spread because React 18's types don't know it on <details>.

   Also mounts ItemReveal, which animates every [data-reveal-items] group on
   the page (the FAQ list here, the related cards on topic pages) — one
   instance per page, so pages with a FaqSection don't mount their own.
   ─────────────────────────────────────────────────────────────────────────── */

import FaqHover   from "./FaqHover";
import FaqMore    from "./FaqMore";
import ItemReveal from "@/components/ui/ItemReveal";
import JsonLd     from "@/components/JsonLd";
import type { Locale } from "@/lib/i18n";
import s from "./faq.module.css";
import LinkedText from "@/components/ui/LinkedText";

export interface FaqItem { q: string; a: string }

const TITLE: Record<Locale, string> = {
  en: "Frequently asked questions",
  es: "Preguntas frecuentes",
  de: "Häufige Fragen",
};

/** Questions shown before the "+"; the rest open on click */
const VISIBLE = 3;
const MORE: Record<Locale, { more: string; less: string }> = {
  en: { more: "Show more questions",     less: "Show fewer questions" },
  es: { more: "Ver más preguntas",       less: "Ver menos preguntas" },
  de: { more: "Weitere Fragen anzeigen", less: "Weniger Fragen anzeigen" },
};

export default function FaqSection({
  id,
  locale,
  items,
  background = "var(--color-surface-muted)",
  amb,
}: {
  /** Unique per page: names the accordion group. */
  id:          string;
  locale:      Locale;
  items:       FaqItem[];
  background?: string;
  /** Scroll-driven background state, on pages that have one (CapitalAmbient). */
  amb?:        string;
}) {
  if (!items.length) return null;
  return (
    <section data-amb={amb} style={{ backgroundColor: background, paddingBlock: "clamp(4.5rem, 9vw, 8rem)" }}>
      <div className={`container-site ${s.faq}`}>
        <FaqHover />
        <h2 className={s.sectionTitle}>{TITLE[locale]}</h2>
        <div className={s.list} data-faq-list data-reveal-items=":scope > :not([data-faq-extra])">
          {items.map((f, i) => (
            <details key={i} {...{ name: `faq-${id}` }} className={s.item} data-faq-extra={i >= VISIBLE ? "" : undefined}>
              <summary className={s.question}>
                <span className={s.number} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3 className={s.questionText}>{f.q}</h3>
                <span className={s.knob} aria-hidden="true" />
              </summary>
              <p className={s.answer}><LinkedText text={f.a} locale={locale} /></p>
            </details>
          ))}
        </div>
        {items.length > VISIBLE && <FaqMore {...MORE[locale]} />}
      </div>
      <ItemReveal />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type":    "FAQPage",
          mainEntity: items.map(f => ({
            "@type": "Question",
            name:    f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </section>
  );
}
