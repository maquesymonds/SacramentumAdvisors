/* ─────────────────────────────────────────────────────────────────────────────
   TopicPage — shared template for sector and service pages
   Server component: all copy is in the HTML (crawlable, citable by AI
   answers). Blocks: hero · image · facts · sections · steps · FAQ · related ·
   CTA. FaqSection renders the FAQPage JSON-LD from the same data (parity).
   ─────────────────────────────────────────────────────────────────────────── */

import CountUp    from "@/components/ui/CountUp";
import StackSections from "./StackSections";
import LinkedText from "@/components/ui/LinkedText";
import FaqSection from "@/components/faq/FaqSection";
import ExportMap  from "./ExportMap";
import UruguayMap from "./UruguayMap";
import s          from "./topic.module.css";
import Image      from "next/image";
import Navigation from "@/components/layout/Navigation";
import Footer     from "@/components/layout/Footer";
import { SECTOR_COLOR } from "@/lib/topic-links";
import SectionCta from "@/components/ui/SectionCta";
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

export const TOPIC_UI: Record<Locale, { home: string; related: string; relatedTitle: string; facts: string; source: string }> = {
  en: { home: "Home",       related: "Related",          relatedTitle: "Keep exploring",    facts: "Key facts", source: "Source" },
  es: { home: "Inicio",     related: "Relacionado",      relatedTitle: "Seguir explorando", facts: "Datos clave", source: "Fuente" },
  de: { home: "Startseite", related: "Verwandte Themen", relatedTitle: "Weiter entdecken",  facts: "Eckdaten", source: "Quelle" },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <span className="block h-px w-8 flex-shrink-0" style={{ backgroundColor: "var(--color-warm)" }} />
      <span className="text-eyebrow" style={{ color: "var(--color-warm)" }}>{children}</span>
    </div>
  );
}

/** The title with its key phrases wrapped for the highlight bar (Frankonia's
    inline mark): each mark fills left to right after the title has risen,
    in reading order. Plain text when there are no marks. */
function MarkedText({ text, marks }: { text: string; marks?: string[] }) {
  if (!marks?.length) return <>{text}</>;
  const found = marks
    .map(m => ({ m, at: text.indexOf(m) }))
    .filter(x => x.at >= 0)
    .sort((a, b) => a.at - b.at);
  const parts: React.ReactNode[] = [];
  let pos = 0;
  found.forEach(({ m, at }, i) => {
    if (at < pos) return;
    parts.push(text.slice(pos, at));
    parts.push(<mark key={i} className={s.mark} style={{ animationDelay: `${0.9 + i * 0.55}s` }}>{m}</mark>);
    pos = at + m.length;
  });
  parts.push(text.slice(pos));
  return <>{parts}</>;
}

export function relatedCard(id: PageId, locale: Locale, overrides: Overrides): { href: string; title: string; text: string; image?: string } | null {
  if (isTopicId(id)) {
    const c = topicContent(id, locale, overrides);
    // Pre-sized card thumbnail (public/images/cards/<id>.webp, 960×720):
    // served as a static file, so the image optimizer never has to encode the
    // large hero source the first time someone scrolls to the cards.
    return { href: localePath(id, locale), title: c.navLabel, text: c.cardText, image: `/images/cards/${id}.webp` };
  }
  const label = PAGE_LABELS[id]?.[locale];
  return label ? { href: localePath(id, locale), title: label.title, text: label.text } : null;
}

export default async function TopicPage({ id, locale }: { id: TopicId; locale: Locale }) {
  // Sector pages take their Why Uruguay colour, with white text (.topic-theme in globals.css)
  const bg = SECTOR_COLOR[id];
  // Admin edits (EN/ES) are applied on top of the code copy.
  const overrides = await getTranslationOverrides();
  const c: TopicContent = topicContent(id, locale, overrides);
  const ui = TOPIC_UI[locale];
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
  ];

  // The hero visual, when the page has one: Technology's export map, or a map
  // of Uruguay on Real estate (the places) and Farmland (the productive
  // share). With it, the hero takes the map layout and the photo below is dropped.
  const heroMap = c.exportMap
    ? <ExportMap origin={c.exportMap.origin} links={c.exportMap.links} />
    : c.uruguayMap ? <UruguayMap {...c.uruguayMap} /> : null;

  return (
    <>
      <Navigation />
      <main className={bg ? "topic-theme" : undefined} style={bg ? ({ "--topic-bg": bg } as React.CSSProperties) : undefined}>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section
          style={{
            backgroundColor: "var(--topic-bg, #FFFFFF)",
            overflowX:       heroMap ? "clip" : undefined, // the map can run off the right edge
            paddingTop:      "clamp(8rem, 14vw, 12rem)",
            paddingBottom:   "clamp(3rem, 6vw, 5rem)",
          }}
        >
          <div className="container-site">
            <Eyebrow>{c.eyebrow}</Eyebrow>

            {heroMap ? (
              /* Technology: Inés' opening line as a two-tier title, her intro as
                 a lead and a list (same words), and the export map, larger than
                 its column, running off the right edge (ExportMap). */
              <div className="grid lg:grid-cols-[6fr_6fr] lg:items-start gap-10 lg:gap-8">
                <div className="relative z-[1]">
                  {/* One size, medium-large (Maque, 25.10.2026), right under the
                      eyebrow: the text block starts at the top, not centred
                      against the map */}
                  <h1
                    className="font-normal text-ink"
                    style={{ fontSize: "clamp(2.1rem, 1.2rem + 2vw, 3.1rem)", letterSpacing: "-0.03em", lineHeight: 1.1, textWrap: "balance", maxWidth: "22ch" }}
                  >
                    <span className={s.heroRise}><MarkedText text={c.title} marks={c.titleMarks} /></span>
                  </h1>
                  {c.introList ? (
                    <div className="mt-8" style={{ maxWidth: "46ch" }}>
                      <p className="text-ink-muted" style={{ fontSize: "0.98rem", lineHeight: 1.6 }}>{c.introList.lead}</p>
                      <ul className="mt-4 flex flex-col gap-2.5">
                        {c.introList.items.map((it, i) => (
                          <li key={i} className="flex items-baseline gap-3 text-ink" style={{ fontSize: "1rem", lineHeight: 1.45 }}>
                            <span aria-hidden="true" className="block h-1.5 w-1.5 flex-shrink-0 rounded-full translate-y-[-0.15em]" style={{ backgroundColor: "#CCA87C" }} />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="mt-8 text-body text-ink-muted leading-relaxed flex flex-col gap-4" style={{ maxWidth: "52ch" }}>
                      {c.intro.map((p, i) => <p key={i}><LinkedText text={p} locale={locale} /></p>)}
                    </div>
                  )}
                </div>
                {heroMap}
              </div>
            ) : (
              /* Title left, intro right on the same row; the title size is set so it fits in 2–3 lines */
              <div className="grid lg:grid-cols-[7fr_5fr] lg:items-start gap-10 lg:gap-16">
                <h1
                  className="font-normal text-ink"
                  style={{ fontSize: "clamp(2.4rem, 3.6vw, 3.4rem)", letterSpacing: "-0.03em", lineHeight: 1.1, textWrap: "balance" }}
                >
                  {c.title}
                </h1>
                <div className="text-body text-ink-muted leading-relaxed lg:pt-2 flex flex-col gap-4">
                  {c.intro.map((p, i) => <p key={i}><LinkedText text={p} locale={locale} /></p>)}
                </div>
              </div>
            )}

            {/* Key facts right under the intro, before the image: the figures are
                the first thing a visitor wants (Maque, 21.10.2026). Figure and
                label centred in each cell (Maque, 25.10.2026). */}
            {c.facts && c.facts.length > 0 && (
              <dl
                aria-label={ui.facts}
                className="grid grid-cols-2 lg:grid-cols-4 gap-y-10"
                style={{ marginTop: "clamp(3rem, 6vw, 4.5rem)", borderTop: "1px solid var(--topic-line, rgba(17,31,48,0.1))" }}
              >
                {c.facts.map((f, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-center text-center gap-3 pt-8 px-4 lg:px-6 ${i % 2 ? "border-l" : i > 0 ? "lg:border-l" : ""}`}
                    style={{ borderColor: "var(--topic-line, rgba(17,31,48,0.1))" }}
                  >
                    {/* Label is the <dt>, figure the <dd>; CSS order puts the figure on top. */}
                    <dt className="text-ink-muted order-2 font-normal mx-auto" style={{ fontSize: "0.92rem", lineHeight: 1.55, maxWidth: "28ch" }}>
                      {f.label}
                      {f.source && (
                        <a href={f.source.href} target="_blank" rel="noopener noreferrer" className="block mt-2 text-ink-subtle hover:text-ink" style={{ fontSize: "0.75rem" }}>
                          {ui.source}: {f.source.label}
                        </a>
                      )}
                    </dt>
                    {/* Long figures ("US$ 3.700 M") get a smaller size so they never overflow their column */}
                    <dd className="text-ink order-1" style={{ fontSize: f.value.length > 7 ? "clamp(1.9rem, 0.9rem + 2.6vw, 3.4rem)" : "clamp(2.3rem, 1rem + 4vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 1, whiteSpace: "nowrap", minHeight: "clamp(2.3rem, 1rem + 4vw, 5rem)", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                      <CountUp value={f.value} />
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </section>

        {/* ── Image ────────────────────────────────────────────────────────── */}
        {/* Not on Technology: the export map is its hero visual, and the stock
            photo below the figures said nothing about Uruguay (Maque, 25.10.2026).
            c.image stays in the data (other pages use their own card thumbnail). */}
        {!heroMap && (
          <div className="container-site" style={{ paddingBottom: "clamp(3rem, 6vw, 5rem)", backgroundColor: "var(--topic-bg, #FFFFFF)" }}>
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "21 / 9", borderRadius: 16 }}>
              <Image src={c.image.src} alt={c.image.alt} fill sizes="(min-width: 1440px) 1344px, 100vw" className="object-cover" priority />
            </div>
          </div>
        )}

        {/* ── Sections: stacked cards (Web System S7) ─────────────────────── */}
        {c.sections.length > 0 && <StackSections locale={locale} heading={c.sectionsHeading} sections={c.sections} />}
        {!c.steps && (
          <div className="container-site">
            <SectionCta id={`topic-${id}-sections`} label={c.cta.label} className="pb-[var(--section-padding-y)]" onDark={!!bg} />
          </div>
        )}

        {/* ── Steps ────────────────────────────────────────────────────────── */}
        {c.steps && (
          <section style={{ backgroundColor: "var(--topic-bg, #FFFFFF)", paddingBlock: "clamp(4rem, 8vw, 7rem)" }}>
            <div className="container-site">
              <h2 className="font-normal text-ink mb-12" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)", letterSpacing: "-0.02em" }}>
                {c.steps.heading}
              </h2>
              <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {c.steps.items.map((step, i) => (
                  <li key={i} className="flex flex-col gap-3 pt-6" style={{ borderTop: "1px solid var(--topic-line, rgba(17,31,48,0.12))" }}>
                    <span className="text-eyebrow" style={{ color: "var(--color-warm)" }}>{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-ink" style={{ fontSize: "1.15rem", lineHeight: 1.3 }}>{step.title}</h3>
                    <p className="text-ink-muted" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}><LinkedText text={step.body} locale={locale} /></p>
                  </li>
                ))}
              </ol>
              <SectionCta id={`topic-${id}-steps`} label={c.cta.label} align="start" onDark={!!bg} />
            </div>
          </section>
        )}

        {/* ── Related (before the FAQ, Maque 25.10.2026) ──────────────────────────────────────────────────────── */}
        {related.length > 0 && (
          <section style={{ backgroundColor: "var(--topic-bg, #FFFFFF)", paddingBlock: "clamp(4.5rem, 9vw, 8rem)" }}>
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
                        <Image src={r.image} alt="" fill unoptimized className="object-cover" />
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

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <FaqSection id={id} locale={locale} items={c.faqs} background={bg ? "transparent" : undefined} />

      </main>
      {/* Closing CTA lives in the footer: centred, same colour (Maque, 21.10.). */}
      <Footer cta={{ heading: c.cta.heading, body: c.cta.body, label: c.cta.label, href: localePath("contact", locale), id: `topic-${id}` }} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
