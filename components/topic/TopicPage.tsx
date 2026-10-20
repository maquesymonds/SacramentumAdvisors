/* ─────────────────────────────────────────────────────────────────────────────
   TopicPage — shared template for sector and service pages
   Server component: all copy is in the HTML (crawlable, citable by AI
   answers). Blocks: hero · image · facts · sections · steps · FAQ · related ·
   CTA. FAQ text and FAQPage JSON-LD come from the same data (parity).
   ─────────────────────────────────────────────────────────────────────────── */

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

const UI: Record<Locale, { home: string; faq: string; related: string; facts: string; source: string }> = {
  en: { home: "Home",       faq: "Frequently asked questions", related: "Related",       facts: "Key facts",      source: "Source" },
  es: { home: "Inicio",     faq: "Preguntas frecuentes",        related: "Relacionado",   facts: "Datos clave",    source: "Fuente" },
  de: { home: "Startseite", faq: "Häufige Fragen",              related: "Verwandte Themen", facts: "Eckdaten",   source: "Quelle" },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <span className="block h-px w-8 flex-shrink-0" style={{ backgroundColor: "var(--color-warm)" }} />
      <span className="text-eyebrow" style={{ color: "var(--color-warm)" }}>{children}</span>
    </div>
  );
}

function relatedCard(id: PageId, locale: Locale, overrides: Overrides): { href: string; title: string; text: string } | null {
  if (isTopicId(id)) {
    const c = topicContent(id, locale, overrides);
    return { href: localePath(id, locale), title: c.navLabel, text: c.cardText };
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
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-ink-subtle" style={{ fontSize: "0.75rem", letterSpacing: "0.06em" }}>
                <li><a href={localePath("home", locale)} className="hover:text-ink">{ui.home}</a></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-ink-muted">{c.navLabel}</li>
              </ol>
            </nav>

            <Eyebrow>{c.eyebrow}</Eyebrow>

            <div className="grid lg:grid-cols-2 lg:items-start gap-10">
              <h1
                className="font-normal text-ink"
                style={{ fontSize: "clamp(2.6rem, 4.6vw, 4.2rem)", letterSpacing: "-0.03em", lineHeight: 1.08 }}
              >
                {c.title}
              </h1>
              <div className="text-body text-ink-muted leading-relaxed lg:pb-2 flex flex-col gap-4">
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
                <div key={i} className="flex flex-col gap-2">
                  <span className="text-ink" style={{ fontSize: "clamp(2rem, 3.4vw, 2.8rem)", letterSpacing: "-0.02em", lineHeight: 1 }}>
                    {f.value}
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
        <section style={{ backgroundColor: "var(--color-surface-muted)", paddingBlock: "clamp(4rem, 8vw, 7rem)" }}>
          <div className="container-site grid lg:grid-cols-[5fr_7fr] gap-6 lg:gap-16">
            <h2 className="font-normal text-ink" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)", letterSpacing: "-0.02em" }}>
              {ui.faq}
            </h2>
            <div className="flex flex-col">
              {c.faqs.map((f, i) => (
                <details key={i} className="group py-5" style={{ borderBottom: "1px solid rgba(17,31,48,0.12)" }}>
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-ink" style={{ fontSize: "1.05rem", lineHeight: 1.45 }}>
                    <h3 className="font-normal">{f.q}</h3>
                    <span aria-hidden="true" className="mt-1 text-ink-subtle transition-transform duration-300 group-open:rotate-45" style={{ fontSize: "1.25rem", lineHeight: 1 }}>+</span>
                  </summary>
                  <p className="text-ink-muted mt-4" style={{ fontSize: "0.98rem", lineHeight: 1.7 }}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Related ──────────────────────────────────────────────────────── */}
        {related.length > 0 && (
          <section style={{ backgroundColor: "#FFFFFF", paddingBlock: "clamp(4rem, 8vw, 6rem)" }}>
            <div className="container-site">
              <Eyebrow>{ui.related}</Eyebrow>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {related.map(r => (
                  <a
                    key={r.href}
                    href={r.href}
                    className="flex flex-col gap-3 p-6 transition-colors duration-300 hover:bg-[var(--color-surface-muted)]"
                    style={{ border: "1px solid rgba(17,31,48,0.12)", borderRadius: 12 }}
                  >
                    <span className="text-ink" style={{ fontSize: "1.1rem" }}>{r.title} →</span>
                    <span className="text-ink-muted" style={{ fontSize: "0.9rem", lineHeight: 1.55 }}>{r.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "var(--color-dark)", paddingBlock: "clamp(4.5rem, 9vw, 7.5rem)" }}>
          <div className="container-site flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-normal" style={{ color: "#FAFAF8", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
                {c.cta.heading}
              </h2>
              <p className="mt-4" style={{ color: "rgba(250,250,248,0.7)", lineHeight: 1.7 }}>{c.cta.body}</p>
            </div>
            <a href={localePath("contact", locale)} className="btn-primary flex-shrink-0">{c.cta.label}</a>
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
