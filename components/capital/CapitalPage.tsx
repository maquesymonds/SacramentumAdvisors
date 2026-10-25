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
import CountUp    from "@/components/ui/CountUp";
import TrackReveal from "@/components/capital/TrackReveal";
import CapitalAmbient from "@/components/capital/CapitalAmbient";
import FaqSection from "@/components/faq/FaqSection";
import CardDeck   from "@/components/ui/CardDeck";
import LinkedText from "@/components/ui/LinkedText";
import { topicContent } from "@/lib/topics";
import { absoluteUrl, localePath, type Locale } from "@/lib/i18n";
import { CAPITAL, TRACK, type Sector } from "@/data/capital";

// Backgrounds of this page (the firm's greens); type and accents stay the site's
const BG = { deep: "#0C3B38", mint: "#EDF3F1" };
const ON_DARK = { text: "#FAFAF8", muted: "rgba(250,250,248,0.72)", line: "rgba(250,250,248,0.16)" };
const SECTOR_COLOR: Record<Sector, string> = { energy: "#4FA79B", infra: "#2B5E59", devbank: "#163A36", ma: "#84CCC4" };
// Behind the "what it does" cards: the deep green lifting toward the energy teal and back
const FOCUS_BAND = "linear-gradient(180deg, rgba(12,59,56,0) 0%, rgba(43,94,89,0.9) 30%, rgba(79,167,155,0.55) 62%, rgba(43,94,89,0.6) 85%, rgba(12,59,56,0) 100%)";

const HOME: Record<Locale, string> = { en: "Home", es: "Inicio", de: "Startseite" };

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <span className="block h-px w-8 flex-shrink-0" style={{ backgroundColor: "var(--color-warm)" }} />
      <span className="text-eyebrow" style={{ color: "var(--color-warm)" }}>{children}</span>
    </div>
  );
}

const H2 = { fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)", letterSpacing: "-0.02em", lineHeight: 1.2 } as const;

// ── Track record: bubbles by year, area proportional to value ───────────────
function TrackChart({ locale }: { locale: Locale }) {
  const t = CAPITAL[locale].track;
  const W = 1200, H = 400, AXIS = 166, X0 = 70, X1 = 1130, Y0 = 2011.6, Y1 = 2026.9, STEM = 22;
  const ink = "#111F30", muted = "#4A5568";
  const x = (y: number) => X0 + (y - Y0) * (X1 - X0) / (Y1 - Y0);
  const r = (v: number) => 3.3 * Math.sqrt(v);
  const years = Array.from({ length: 15 }, (_, i) => 2012 + i);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby="track-title" style={{ width: "100%", height: "auto", display: "block" }}>
      <title id="track-title">{t.heading}</title>
      {years.map(y => (
        <g key={y}>
          {y % 2 === 0 && <text x={x(y)} y={H - 12} textAnchor="middle" fontSize="13" fill={muted} style={{ fontVariantNumeric: "tabular-nums" }}>{y}</text>}
        </g>
      ))}
      <line data-track-axis x1={X0 - 20} x2={X1 + 20} y1={AXIS} y2={AXIS} stroke={BG.deep} strokeWidth="2" />
      {TRACK.map(d => {
        const rr = r(d.value), cx = x(d.year);
        const cy = d.side === "up" ? AXIS - STEM - rr : AXIS + STEM + rr;
        // Name and amount always outside the bubble: above it on the upper side, below on the lower
        const ty = d.side === "up" ? cy - rr - 18 : cy + rr + 16;
        // Where the axis line reaches this deal (0..1), for TrackReveal
        const at = ((cx - (X0 - 20)) / (X1 - X0 + 40)).toFixed(3);
        return (
          <g key={d.label} data-track-deal={at} data-side={d.side}>
            <title>{`${d.label} · ${Math.floor(d.year)} · USD ${d.value}M · ${t.sectors[d.sector]}`}</title>
            <line data-stem x1={cx} x2={cx} y1={AXIS} y2={d.side === "up" ? cy + rr : cy - rr} stroke={BG.deep} strokeWidth="1" opacity="0.45" />
            <circle data-bubble cx={cx} cy={cy} r={rr} fill={SECTOR_COLOR[d.sector]} />
            <text data-label x={cx} y={ty} textAnchor="middle" fontSize="12" fontWeight="600" fill={ink}>{d.label}</text>
            <text data-label x={cx} y={ty + 14} textAnchor="middle" fontSize="11" fill={muted}>${d.value}M</text>
          </g>
        );
      })}
    </svg>
  );
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

        {/* ── Hero + headline figures ──────────────────────────────────────── */}
        <section
          data-nav-dark
          data-amb="bosque"
          style={{ backgroundColor: BG.deep, paddingTop: "clamp(8rem, 14vw, 12rem)", paddingBottom: "clamp(3.5rem, 7vw, 6rem)" }}
        >
          <div className="container-site">
            <Eyebrow>{c.hero.eyebrow}</Eyebrow>
            <div className="grid lg:grid-cols-[7fr_5fr] lg:items-start gap-10 lg:gap-16">
              <h1 className="font-normal" style={{ color: ON_DARK.text, fontSize: "clamp(2.4rem, 3.6vw, 3.4rem)", letterSpacing: "-0.03em", lineHeight: 1.1, textWrap: "balance" }}>
                {c.hero.title}
              </h1>
              <div className="text-body leading-relaxed lg:pt-2 flex flex-col gap-4" style={{ color: ON_DARK.muted }}>
                {c.hero.intro.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 pt-12" style={{ marginTop: "clamp(3rem, 6vw, 5rem)", borderTop: `1px solid ${ON_DARK.line}` }}>
              {c.hero.stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2">
                  <span style={{ color: ON_DARK.text, fontSize: "clamp(3.4rem, 5.4vw, 5.6rem)", letterSpacing: "-0.03em", lineHeight: 1, whiteSpace: "nowrap" }}>
                    <CountUp value={s.value} />
                  </span>
                  <span style={{ color: ON_DARK.muted, fontSize: "0.95rem", lineHeight: 1.5 }}>{s.label}</span>
                </div>
              ))}
            </div>

            <SectionCta id="capital-hero" label={c.cta.label} onDark />
          </div>
        </section>

        {/* ── Track record ─────────────────────────────────────────────────── */}
        <section data-amb="blanco" style={{ backgroundColor: "#FFFFFF", paddingBlock: "clamp(4rem, 8vw, 7rem)" }}>
          <div className="container-site">
            <Eyebrow>{c.track.eyebrow}</Eyebrow>
            <div className="grid lg:grid-cols-[5fr_7fr] gap-6 lg:gap-16">
              <h2 className="font-normal text-ink" style={H2}>{c.track.heading}</h2>
              <p className="text-body text-ink-muted leading-relaxed">{c.track.intro}</p>
            </div>

            <div className="mt-10 flex justify-center text-small text-ink-muted">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <span className="text-ink">{c.track.legend}</span>
                {(Object.keys(SECTOR_COLOR) as Sector[]).map(s => (
                  <span key={s} className="flex items-center gap-2">
                    <span className="inline-block rounded-full" style={{ width: 12, height: 12, backgroundColor: SECTOR_COLOR[s] }} />
                    {c.track.sectors[s]}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 overflow-x-auto" style={{ marginInline: "-1rem", paddingInline: "1rem" }}>
              <div style={{ minWidth: 880 }}><TrackReveal><TrackChart locale={locale} /></TrackReveal></div>
            </div>
            <p className="mt-2 text-caption text-ink-subtle md:hidden">{c.track.scrollHint} →</p>

            {/* Featured transactions */}
            <h3 className="text-ink mt-16 mb-8" style={{ fontSize: "1.375rem", letterSpacing: "-0.01em" }}>{c.track.featured}</h3>
            <ul className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {c.deals.map((d, i) => (
                <li key={i} className="flex flex-col gap-3 pt-6" style={{ borderTop: "1px solid rgba(17,31,48,0.12)" }}>
                  <span className="text-eyebrow" style={{ color: "var(--color-warm)" }}>{d.year} · {d.amount}</span>
                  <h4 className="text-ink" style={{ fontSize: "1.15rem", lineHeight: 1.3 }}><LinkedText text={d.name} locale={locale} /></h4>
                  <p className="text-ink-muted" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}><LinkedText text={d.body} locale={locale} /></p>
                  <span className="text-caption text-ink-subtle">{d.tags}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── What it does ─────────────────────────────────────────────────── */}
        {/* Same card deck as the home's "Why Sacramentum" (Maque, 21.10.), on a
            green gradient band instead of the photo; the band fades in and out
            so it sits on the ambient green without edges. */}
        <section data-nav-dark data-amb="bosque" className="overflow-hidden" style={{ backgroundColor: BG.deep, paddingTop: "clamp(4rem, 8vw, 7rem)" }}>
          <div className="container-site">
            <h2 className="font-normal mb-8 lg:mb-4" style={{ ...H2, color: ON_DARK.text }}>{c.focus.heading}</h2>
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
        <section data-amb="blanco" style={{ backgroundColor: "#FFFFFF", paddingBlock: "clamp(4rem, 8vw, 7rem)" }}>
          <div className="container-site">
            <h2 className="font-normal text-ink mb-12" style={H2}>{c.how.heading}</h2>
            <ol className="grid gap-8 md:grid-cols-3">
              {c.how.items.map((it, i) => (
                <li key={i} className="flex flex-col gap-3 pt-6" style={{ borderTop: "1px solid rgba(17,31,48,0.12)" }}>
                  <span className="text-eyebrow" style={{ color: "var(--color-warm)" }}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-ink" style={{ fontSize: "1.15rem", lineHeight: 1.3 }}>{it.title}</h3>
                  <p className="text-ink-muted" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>{it.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Pablo Mautone ────────────────────────────────────────────────── */}
        <section data-nav-dark data-amb="bosque" style={{ backgroundColor: BG.deep, paddingBlock: "clamp(4rem, 8vw, 7rem)" }}>
          <div className="container-site grid md:grid-cols-[4fr_8fr] gap-10 lg:gap-16 items-start">
            <div className="relative w-full max-w-sm overflow-hidden" style={{ aspectRatio: "1 / 1", borderRadius: 16 }}>
              <Image src="/images/pablo-mautone.jpg" alt={`${c.pablo.name}, ${c.pablo.role}`} fill sizes="(min-width: 768px) 384px, 90vw" className="object-cover" />
            </div>
            <div>
              <Eyebrow>{c.pablo.eyebrow}</Eyebrow>
              <h2 className="font-normal" style={{ ...H2, color: ON_DARK.text, fontSize: "clamp(2rem, 3.2vw, 2.8rem)" }}>{c.pablo.name}</h2>
              <p className="mt-2" style={{ color: ON_DARK.muted }}>{c.pablo.role}</p>
              <p className="mt-6 text-body leading-relaxed" style={{ color: ON_DARK.muted, maxWidth: "60ch" }}>{c.pablo.intro}</p>
              <ul className="mt-6 flex flex-col gap-3 text-body" style={{ color: ON_DARK.muted }}>
                {c.pablo.points.map((p, i) => (
                  <li key={i} className="flex gap-3">
                    <span aria-hidden="true" className="mt-[0.7em] block h-px w-4 flex-shrink-0" style={{ backgroundColor: "var(--color-warm)" }} />
                    <span>{p}</span>
                  </li>
                ))}
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
