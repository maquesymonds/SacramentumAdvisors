/* ─────────────────────────────────────────────────────────────────────────────
   TopicPage — shared template for sector and service pages
   Server component: all copy is in the HTML (crawlable, citable by AI
   answers). Blocks: hero · image · facts · sections · steps · FAQ · related ·
   CTA. FAQ text and FAQPage JSON-LD come from the same data (parity).
   ─────────────────────────────────────────────────────────────────────────── */

import CountUp    from "@/components/ui/CountUp";
import ItemReveal from "@/components/ui/ItemReveal";
import FaqHover   from "./FaqHover";
import s          from "./topic.module.css";
import Image      from "next/image";
import Navigation from "@/components/layout/Navigation";
import Footer     from "@/components/layout/Footer";
import {
  PAGES,
  absoluteUrl,
  isTopicId,
  localePath,
  pageLocales,
  type Locale,
  type PageId,
  type TopicId,
} from "@/lib/i18n";
import { PAGE_LABELS, topicContent, type Overrides, type TopicContent } from "@/lib/topics";
import { getTranslationOverrides } from "@/lib/translation-overrides";

const UI: Record<Locale, { home: string; faq: string; related: string; relatedTitle: string; facts: string; source: string }> = {
  en: { home: "Home",       faq: "Frequently asked questions", related: "Related",          relatedTitle: "Keep exploring",    facts: "Key facts", source: "Source" },
  es: { home: "Inicio",     faq: "Preguntas frecuentes",        related: "Relacionado",      relatedTitle: "Seguir explorando", facts: "Datos clave", source: "Fuente" },
  de: { home: "Startseite", faq: "Häufige Fragen",              related: "Verwandte Themen", relatedTitle: "Weiter entdecken",  facts: "Eckdaten", source: "Quelle" },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <span className="block h-px w-8 flex-shrink-0" style={{ backgroundColor: "var(--color-warm)" }} />
      <span className="text-eyebrow" style={{ color: "var(--color-warm)" }}>{children}</span>
    </div>
  );
}

function relatedCard(id: PageId, locale: Locale, overrides: Overrides): { href: string; title: string; text: string; image?: string } | null {
  if (isTopicId(id)) {
    const c = topicContent(id, locale, overrides);
    return { href: localePath(id, locale), title: c.navLabel, text: c.cardText, image: c.image.src };
  }
  const label = PAGE_LABELS[id]?.[locale];
  return label ? { href: localePath(id, locale), title: label.title, text: label.text } : null;
}

export default async function TopicPage({ id, locale }: { id: TopicId; locale: Locale }) {
  // Admin edits (EN/ES) are applied on top of the code copy.
  const overrides = await getTranslationOverrides();
  const c: TopicContent = topicContent(id, locale, overrides);
  const ui = UI[locale];
  const related = (PAGES[id].related ?? [])
    .filter(r => pageLocales(r).includes(locale))
    .map(r => relatedCard(r, locale, overrides))
    .filter((r): r is NonNullable<typeof r> => r !== null);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type":    "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: ui.home,    item: absoluteUrl(localePath("home", locale)) },
        { "@type": "ListItem", position: 2, name: c.navLabel, item: absoluteUrl(localePath(id, locale)) },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type":    "FAQPage",
      mainEntity: c.faqs.map(f => ({
        "@type": "Question",
        name:    f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <Navigation />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: "#FFFFFF",
            paddingTop:      "clamp(8rem, 14vw, 12rem)",
            paddingBottom:   "clamp(3rem, 6vw, 5rem)",
          }}
        >
          <div className="container-site">
            <Eyebrow>{c.eyebrow}</Eyebrow>

            {/* Title left, intro right on the same row; the title size is set so it fits in 2–3 lines */}
            <div className="grid lg:grid-cols-[7fr_5fr] lg:items-start gap-10 lg:gap-16">
              <h1
                className="font-normal text-ink"
                style={{ fontSize: "clamp(2.4rem, 3.6vw, 3.4rem)", letterSpacing: "-0.03em", lineHeight: 1.1, textWrap: "balance" }}
              >
                {c.title}
              </h1>
              <div className="text-body text-ink-muted leading-relaxed lg:pt-2 flex flex-col gap-4">
                {c.intro.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          </div>
        </section>

        {/* ── Image ────────────────────────────────────────────────────────── */}
        <div className="container-site" style={{ paddingBottom: "clamp(3rem, 6vw, 5rem)", backgroundColor: "#FFFFFF" }}>
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21 / 9", borderRadius: 16 }}>
            <Image src={c.image.src} alt={c.image.alt} fill sizes="(min-width: 1440px) 1344px, 100vw" className="object-cover" priority />
          </div>
        </div>

        {/* ── Facts ────────────────────────────────────────────────────────── */}
        {c.facts && c.facts.length > 0 && (
          <section aria-label={ui.facts} style={{ backgroundColor: "var(--color-surface-muted)", paddingBlock: "clamp(3rem, 6vw, 5rem)" }}>
            <div className="container-site grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {c.facts.map((f, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2">
                  <span className="text-ink" style={{ fontSize: "clamp(3rem, 4.4vw, 4.75rem)", letterSpacing: "-0.03em", lineHeight: 1, whiteSpace: "nowrap" }}>
                    <CountUp value={f.value} />
                  </span>
                  <span className="text-ink-muted" style={{ fontSize: "0.95rem", lineHeight: 1.5 }}>{f.label}</span>
                  {f.source && (
                    <a href={f.source.href} target="_blank" rel="noopener noreferrer" className="text-ink-subtle hover:text-ink" style={{ fontSize: "0.75rem" }}>
                      {ui.source}: {f.source.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Sections ─────────────────────────────────────────────────────── */}
        <div style={{ backgroundColor: "var(--color-surface)", paddingBlock: "clamp(4rem, 8vw, 7rem)" }}>
          <div className="container-site flex flex-col" style={{ gap: "clamp(3.5rem, 7vw, 6rem)" }}>
            {c.sections.map((s, i) => (
              <section key={i} className="grid lg:grid-cols-[5fr_7fr] gap-6 lg:gap-16">
                <h2 className="font-normal text-ink" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                  {s.heading}
                </h2>
                <div className="text-body text-ink-muted leading-relaxed flex flex-col gap-4">
                  {s.body.map((p, j) => <p key={j}>{p}</p>)}
                  {s.bullets && (
                    <ul className="flex flex-col gap-3 mt-2">
                      {s.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3">
                          <span aria-hidden="true" className="mt-[0.7em] block h-px w-4 flex-shrink-0" style={{ backgroundColor: "var(--color-warm)" }} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* ── Steps ────────────────────────────────────────────────────────── */}
        {c.steps && (
          <section style={{ backgroundColor: "#FFFFFF", paddingBlock: "clamp(4rem, 8vw, 7rem)" }}>
            <div className="container-site">
              <h2 className="font-normal text-ink mb-12" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)", letterSpacing: "-0.02em" }}>
                {c.steps.heading}
              </h2>
              <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {c.steps.items.map((step, i) => (
                  <li key={i} className="flex flex-col gap-3 pt-6" style={{ borderTop: "1px solid rgba(17,31,48,0.12)" }}>
                    <span className="text-eyebrow" style={{ color: "var(--color-warm)" }}>{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-ink" style={{ fontSize: "1.15rem", lineHeight: 1.3 }}>{step.title}</h3>
                    <p className="text-ink-muted" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        {/* Katzer layout: centred title, one column of cards. A shared `name`
            makes the <details> an accordion (one open at a time); it is
            spread because React 18's types don't know it on <details>. */}
        <section style={{ backgroundColor: "var(--color-surface-muted)", paddingBlock: "clamp(4.5rem, 9vw, 8rem)" }}>
          <div className={`container-site ${s.faq}`}>
            <FaqHover />
            <h2 className={s.sectionTitle}>{ui.faq}</h2>
            <div className={s.list} data-faq-list data-reveal-items="">
              {c.faqs.map((f, i) => (
                <details key={i} {...{ name: `faq-${id}` }} className={s.item}>
                  <summary className={s.question}>
                    <span className={s.number} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className={s.questionText}>{f.q}</h3>
                    <span className={s.knob} aria-hidden="true" />
                  </summary>
                  <p className={s.answer}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related ──────────────────────────────────────────────────────── */}
        {related.length > 0 && (
          <section style={{ backgroundColor: "#FFFFFF", paddingBlock: "clamp(4.5rem, 9vw, 8rem)" }}>
            <div className={`container-site ${s.related}`}>
              <div>
                <div className={`text-eyebrow ${s.eyebrow}`}>{ui.related}</div>
                <h2 className={s.sectionTitle}>{ui.relatedTitle}</h2>
              </div>
              <div className={s.cards} data-reveal-items="">
                {related.map(r => (
                  <a key={r.href} href={r.href} className={s.card}>
                    {r.image && (
                      <div className={s.cardImage}>
                        <Image src={r.image} alt="" fill sizes="(min-width: 1024px) 384px, 100vw" className="object-cover" />
                      </div>
                    )}
                    <div className={s.cardBody}>
                      <h3 className={s.cardTitle}>{r.title}</h3>
                      <p className={s.cardText}>{r.text}</p>
                      <div className={s.cardFoot}>
                        <span className={s.arrow} aria-hidden="true">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <ItemReveal />

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "var(--color-dark)", paddingBlock: "clamp(4.5rem, 9vw, 7.5rem)" }}>
          <div className="container-site flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-normal" style={{ color: "#FAFAF8", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
                {c.cta.heading}
              </h2>
              <p className="mt-4" style={{ color: "rgba(250,250,248,0.7)", lineHeight: 1.7 }}>{c.cta.body}</p>
            </div>
            <a href={localePath("contact", locale)} data-cta={`topic-${id}`} className="btn-primary flex-shrink-0">{c.cta.label}</a>
          </div>
        </section>

      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
