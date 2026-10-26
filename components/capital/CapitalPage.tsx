/* ─────────────────────────────────────────────────────────────────────────────
   CapitalPage — Sacramentum Capital
   Same type, components and spacing as the rest of the site (TopicPage);
   only the backgrounds change, to the firm's greens, so it reads as the
   group's investment banking firm. Server component: all copy and every
   transaction of the track-record chart are in the HTML.
   Body copy: data/capital.ts · metadata: data/topics/sacramentum-capital.ts.
   Sections with data-nav-dark switch the nav to its light-on-dark look.
   data-amb = each section's state of the scroll-driven background
   (CapitalAmbient): the colours blend from section to section, no cuts.
   They alternate the hero's green and white, one change per topic (Maque,
   21.10.): hero · track record · what it does · how · Pablo · FAQ.
   ─────────────────────────────────────────────────────────────────────────── */

import Image      from "next/image";
import Navigation from "@/components/layout/Navigation";
import SectionCta from "@/components/ui/SectionCta";
import Footer     from "@/components/layout/Footer";
import TrackReveal from "@/components/capital/TrackReveal";
import { TrackChart, TrackLegend, dealColor } from "@/components/capital/TrackChart";
import HowRail    from "@/components/capital/HowRail";
import cs         from "@/components/capital/capital.module.css";
import CapitalAmbient from "@/components/capital/CapitalAmbient";
import FaqSection from "@/components/faq/FaqSection";
import CardDeck   from "@/components/ui/CardDeck";
import CapitalHero from "@/components/capital/CapitalHero";
import LinkedText from "@/components/ui/LinkedText";
import ScrubText  from "@/components/ui/ScrubText";
import FirmsDiagram from "@/components/capital/FirmsDiagram";
import { topicContent } from "@/lib/topics";
import { absoluteUrl, localePath, type Locale } from "@/lib/i18n";
import { CAPITAL } from "@/data/capital";

// Backgrounds of this page (the firm's greens); type and accents stay the site's
const BG = { deep: "#0C3B38", mint: "#EDF3F1" };
const ON_DARK = { text: "#FAFAF8", muted: "rgba(250,250,248,0.72)", line: "rgba(250,250,248,0.16)" };
// Behind the "what it does" cards: the deep green lifting toward the energy teal and back
const FOCUS_BAND = "linear-gradient(180deg, rgba(12,59,56,0) 0%, rgba(43,94,89,0.9) 30%, rgba(79,167,155,0.55) 62%, rgba(43,94,89,0.6) 85%, rgba(12,59,56,0) 100%)";

const HOME: Record<Locale, string> = { en: "Home", es: "Inicio", de: "Startseite" };

// The two firms, for the diagram under the statement (same draft as the
// statement: Capital is the firm with the track record, Advisors its arm).
// Capital's areas come from its presentation; Advisors' are its stage-1 services.
const RELATION: Record<Locale, { label: string; capital: string; advisors: string; capitalItems: string[]; advisorsItems: string[] }> = {
  en: { label: "Capital & Advisors", capital: "Investment banking, since 2010", advisors: "Investors and families in Uruguay",
        capitalItems: ["Cross-border M&A", "Structured finance", "Capital markets"],
        advisorsItems: ["Residency & relocation", "Market intelligence", "Strategic advisory"] },
  es: { label: "Capital y Advisors", capital: "Banca de inversión, desde 2010", advisors: "Inversores y familias en Uruguay",
        capitalItems: ["M&A transfronterizo", "Finanzas estructuradas", "Mercado de capitales"],
        advisorsItems: ["Residencia e instalación", "Inteligencia de mercado", "Asesoría estratégica"] },
  de: { label: "Capital und Advisors", capital: "Investmentbanking, seit 2010", advisors: "Investoren und Familien in Uruguay",
        capitalItems: ["Grenzüberschreitende M&A", "Strukturierte Finanzierungen", "Kapitalmärkte"],
        advisorsItems: ["Aufenthalt und Niederlassung", "Marktanalyse", "Strategische Beratung"] },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <span className="block h-px w-8 flex-shrink-0" style={{ backgroundColor: "var(--color-warm)" }} />
      <span className="text-eyebrow" style={{ color: "var(--color-warm)" }}>{children}</span>
    </div>
  );
}


// Where each step sits in the curve band (fractions of its height): --c is
// the curve under the node, --n the node. As in christophbauer.de's
// three-step profile: the curve dives under the middle step and the nodes
// climb from left to right, so the masts grow longer along the route.
// One filled icon per "how it works" step, drawn in the style of the home's
// Why Uruguay card icons (solid shapes with cut-outs, not line art), white
// inside the green node; the step number moved in front of the title
// (Maque, 25.10.2026). Leader (person with tie) · discretion (lock) · institutions.
const RAIL_ICONS = [
  "M12 2.75a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5ZM3.5 21.25c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5c0 .55-.45 1-1 1h-15c-.55 0-1-.45-1-1ZM12 13.9l-1.25 1.55.85 4.85h.8l.85-4.85L12 13.9Z",
  "M7.25 10V7.5a4.75 4.75 0 0 1 9.5 0V10h-2.5V7.5a2.25 2.25 0 0 0-4.5 0V10h-2.5ZM6 10h12a2.25 2.25 0 0 1 2.25 2.25v7.5A2.25 2.25 0 0 1 18 22H6a2.25 2.25 0 0 1-2.25-2.25v-7.5A2.25 2.25 0 0 1 6 10Zm6 3.5a1.75 1.75 0 0 0-.85 3.28v1.97a.85.85 0 0 0 1.7 0v-1.97A1.75 1.75 0 0 0 12 13.5Z",
  "M11.55 2.1a1 1 0 0 1 .9 0l8.5 4.3c.34.17.55.52.55.9v.95c0 .55-.45 1-1 1h-17a1 1 0 0 1-1-1V7.3c0-.38.21-.73.55-.9l8.5-4.3ZM4.75 10.75h3v7.5h-3v-7.5Zm5.75 0h3v7.5h-3v-7.5Zm5.75 0h3v7.5h-3v-7.5ZM2.5 19.75h19c.55 0 1 .45 1 1v.75c0 .55-.45 1-1 1h-19c-.55 0-1-.45-1-1v-.75c0-.55.45-1 1-1Z",
];

function RailIcon({ i }: { i: number }) {
  return (
    <svg className={cs.stepIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path d={RAIL_ICONS[i % RAIL_ICONS.length]} fill="currentColor" fillRule="evenodd" />
    </svg>
  );
}

const RAIL_PROFILE = [
  { "--c": 0.72, "--n": 0.42 },
  { "--c": 0.94, "--n": 0.26 },
  { "--c": 0.80, "--n": 0.1 },
];

/** "USD 300M" → small "USD" unit + the figure */
function Amount({ value }: { value: string }) {
  const m = value.match(/^([A-Z]{3})\s+(.+)$/);
  if (!m) return <>{value}</>;
  return <><span className={cs.unit}>{m[1]}</span>{m[2]}</>;
}


export default function CapitalPage({ locale }: { locale: Locale }) {
  const c = CAPITAL[locale];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: HOME[locale], item: absoluteUrl(localePath("home", locale)) },
        { "@type": "ListItem", position: 2, name: "Sacramentum Capital", item: absoluteUrl(localePath("sacramentum-capital", locale)) },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Sacramentum Capital",
      description: c.hero.intro[0],
      url: absoluteUrl(localePath("sacramentum-capital", locale)),
      address: { "@type": "PostalAddress", addressLocality: "Montevideo", addressCountry: "UY" },
      founder: { "@type": "Person", name: "Pablo Mautone" },
      foundingDate: "2010",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="[&_p]:[text-wrap:pretty] [&_li]:[text-wrap:pretty]">

        {/* ── Hero: one screen, after bauerchristoph.de/referenzen (CapitalHero) ── */}
        <CapitalHero title={c.hero.title} intro={c.hero.intro[0]} stats={c.hero.stats} />

        {/* ── Capital and Advisors: a big statement that lights up word by word
               on scroll, like SOCIO's home "Qué hacemos" (Maque, 25.10.2026),
               then the two firms as a small diagram ─────────────────────────── */}
        <section data-nav-dark data-amb="bosque" style={{ backgroundColor: BG.deep, paddingBlock: "clamp(6rem, 12vw, 10rem)" }}>
          <div className={`container-site ${cs.statement}`}>
            <h2 className={cs.statementLabel}>{RELATION[locale].label}</h2>
            <div>
              <ScrubText text={c.hero.intro[1]} className={cs.statementText} />
              <FirmsDiagram firms={[
                { name: "Sacramentum Capital",  tagline: RELATION[locale].capital,  items: RELATION[locale].capitalItems },
                { name: "Sacramentum Advisors", tagline: RELATION[locale].advisors, items: RELATION[locale].advisorsItems },
              ]} />
            </div>
          </div>
        </section>

        {/* ── Track record ─────────────────────────────────────────────────── */}
        <section data-amb="blanco" style={{ backgroundColor: "#FFFFFF", paddingBlock: "clamp(4rem, 8vw, 7rem)" }}>
          <div className="container-site">
            <Eyebrow>{c.track.eyebrow}</Eyebrow>
            <div className="grid lg:grid-cols-[5fr_7fr] gap-6 lg:gap-16">
              <h2 className={cs.bigTitle}>{c.track.heading}</h2>
              <p className="text-body text-ink-muted leading-relaxed">{c.track.intro}</p>
            </div>

            <TrackLegend locale={locale} className="mt-10" />

            <div className="mt-6 overflow-x-auto" style={{ marginInline: "-1rem", paddingInline: "1rem" }}>
              <div style={{ minWidth: 880 }}><TrackReveal><TrackChart locale={locale} /></TrackReveal></div>
            </div>
            <p className="mt-2 text-caption text-ink-subtle md:hidden">{c.track.scrollHint} →</p>
          </div>
        </section>

        {/* ── What it does ─────────────────────────────────────────────────── */}
        {/* Same card deck as the home's "Why Sacramentum" (Maque, 21.10.), on a
            green gradient band instead of the photo; the band fades in and out
            so it sits on the ambient green without edges. */}
        <section data-nav-dark data-amb="bosque" className="overflow-hidden" style={{ backgroundColor: BG.deep, paddingTop: "clamp(4rem, 8vw, 7rem)" }}>
          <div className="container-site">
            <h2 className={`${cs.bigTitle} mb-8 lg:mb-4`} style={{ color: ON_DARK.text }}>{c.focus.heading}</h2>
          </div>
          <div style={{ background: FOCUS_BAND, paddingTop: "clamp(2rem, 4vw, 3.5rem)", paddingBottom: "var(--section-padding-y)" }}>
            <CardDeck
              brand="Sacramentum Capital"
              cards={c.focus.items.map((it, i) => ({ id: `focus-${i}`, eyebrow: it.stat, title: it.title, description: it.body }))}
            >
              <SectionCta id="capital-focus" label={c.cta.label} onDark />
            </CardDeck>
          </div>
        </section>

        {/* ── How it works ─────────────────────────────────────────────────── */}
        {/* A route drawn by the scroll, after christophbauer.de's process
            section: the curve crosses the whole screen, a mast rises from it to
            each numbered node, the text sits centred below (HowRail). */}
        <section data-amb="blanco" className={cs.how} style={{ backgroundColor: "#FFFFFF", paddingBlock: "clamp(5rem, 10vw, 8rem)" }}>
          <div className="container-site">
            <h2 className={cs.bigTitle}>{c.how.heading}</h2>
            <HowRail>
              <ol className={cs.rail}>
                <li aria-hidden="true" className={cs.curveHolder}>
                  <svg className={cs.curve} data-rail-curve preserveAspectRatio="none">
                    <path fill="none" stroke="#0C3B38" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </li>
                <li className={cs.line} data-rail-line aria-hidden="true" />
                {c.how.items.map((it, i) => (
                  <li key={i} className={cs.step} data-rail-step style={RAIL_PROFILE[i % RAIL_PROFILE.length] as React.CSSProperties}>
                    <span className={cs.foot} data-rail-foot aria-hidden="true" />
                    <span className={cs.mast} data-rail-mast aria-hidden="true" />
                    <span className={cs.node} data-rail-node aria-hidden="true"><RailIcon i={i} /></span>
                    <div data-rail-text>
                      <h3 className={cs.stepTitle}><span className={cs.stepNum}>{String(i + 1).padStart(2, "0")}</span>{it.title}</h3>
                      <p className={cs.stepBody}>{it.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </HowRail>
          </div>
        </section>

        {/* ── Featured transactions ──────────────────────────────────────── */}
        {/* Its own section, after "how it works" (Maque, 25.10.2026): the largest deal
            as a lead card, the other five as rows. Each sector dot matches its
            bubble in the chart above. */}
        <section data-amb="blanco" style={{ backgroundColor: "#FFFFFF", paddingBlock: "clamp(5rem, 10vw, 8rem)" }}>
          <div className="container-site">
            <h2 className={cs.bigTitle}>{c.track.featured}</h2>
            <p className={cs.lede}>{c.track.featuredIntro}</p>
            <div className={cs.deals}>
              {c.deals.slice(0, 1).map((d, i) => (
                <article key={i} className={cs.lead}>
                  <span className={cs.leadAmount}><Amount value={d.amount} /></span>
                  <h3 className={cs.leadName}><LinkedText text={d.name} locale={locale} /></h3>
                  <p className={cs.leadBody}><LinkedText text={d.body} locale={locale} /></p>
                  <p className={cs.meta}>
                    <span className={cs.dot} style={{ backgroundColor: dealColor(0) }} aria-hidden="true" />
                    <span>{d.year}</span><span aria-hidden="true">·</span><span>{d.tags}</span>
                  </p>
                </article>
              ))}
              <ul className={cs.rows} data-reveal-items="">
                {c.deals.slice(1).map((d, i) => (
                  <li key={i} className={cs.row}>
                    <span className={cs.rowAmount}>
                      <span className={cs.dot} style={{ backgroundColor: dealColor(i + 1) }} aria-hidden="true" />
                      <span><Amount value={d.amount} /></span>
                    </span>
                    <div>
                      <h3 className={cs.rowName}><LinkedText text={d.name} locale={locale} /></h3>
                      <p className={cs.rowBody}><LinkedText text={d.body} locale={locale} /></p>
                      <p className={cs.rowTags}>{d.tags}</p>
                    </div>
                    <span className={cs.rowYear}>{d.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Pablo Mautone ────────────────────────────────────────────────── */}
        {/* Portrait (3:4) beside the name, a lead line and his career as a
            short route, the same dot-and-line motif as "how it works".
            No eyebrow (Maque, 25.10.2026). */}
        <section data-nav-dark data-amb="bosque" style={{ backgroundColor: BG.deep, paddingBlock: "clamp(5rem, 10vw, 8rem)" }}>
          <div className={`container-site ${cs.pablo}`}>
            <figure className={cs.portrait}>
              <Image src="/images/pablo-mautone-portrait.jpg" alt={`${c.pablo.name}, ${c.pablo.role}`} fill sizes="(min-width: 1024px) 440px, 90vw" className="object-cover" />
            </figure>
            <div>
              <h2 className={cs.bigTitle} style={{ color: ON_DARK.text }}>{c.pablo.name}</h2>
              <p className={cs.pabloRole}>{c.pablo.role}</p>
              <p className={cs.pabloIntro}>{c.pablo.intro}</p>
              <ul className={cs.career} data-reveal-items="">
                {c.pablo.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ: same block and copy source as the topic pages (data/topics/sacramentum-capital.ts) */}
        <FaqSection id="sacramentum-capital" locale={locale} items={topicContent("sacramentum-capital", locale).faqs} background="#FFFFFF" amb="blanco" />

      </main>
      {/* Closing CTA lives in the footer: centred, same colour (Maque, 21.10.). */}
      <Footer cta={{ heading: c.cta.heading, body: c.cta.body, label: c.cta.label, href: localePath("contact", locale), id: "topic-sacramentum-capital" }} />
      <CapitalAmbient />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
