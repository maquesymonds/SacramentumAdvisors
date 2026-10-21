/* ─────────────────────────────────────────────────────────────────────────────
   CapitalPage — Sacramentum Capital
   Same type, components and spacing as the rest of the site (TopicPage);
   only the backgrounds change, to the firm's greens, so it reads as the
   group's investment banking firm. Server component: all copy and every
   transaction of the track-record chart are in the HTML.
   Body copy: data/capital.ts · metadata: data/topics/sacramentum-capital.ts.
   Sections with data-nav-dark switch the nav to its light-on-dark look.
   ─────────────────────────────────────────────────────────────────────────── */

import Image      from "next/image";
import Navigation from "@/components/layout/Navigation";
import Footer     from "@/components/layout/Footer";
import CountUp    from "@/components/ui/CountUp";
import { absoluteUrl, localePath, type Locale } from "@/lib/i18n";
import { CAPITAL, TRACK, type Sector } from "@/data/capital";

// Backgrounds of this page (the firm's greens); type and accents stay the site's
const BG = { deep: "#0C3B38", mint: "#EDF3F1" };
const ON_DARK = { text: "#FAFAF8", muted: "rgba(250,250,248,0.72)", line: "rgba(250,250,248,0.16)" };
const SECTOR_COLOR: Record<Sector, string> = { energy: "#4FA79B", infra: "#2B5E59", devbank: "#163A36", ma: "#84CCC4" };

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
  const W = 1200, H = 470, AXIS = 236, X0 = 70, X1 = 1130, Y0 = 2011.6, Y1 = 2026.9, STEM = 22;
  const ink = "#111F30", muted = "#4A5568", grid = "rgba(17,31,48,0.10)";
  const x = (y: number) => X0 + (y - Y0) * (X1 - X0) / (Y1 - Y0);
  const r = (v: number) => 3.3 * Math.sqrt(v);
  const years = Array.from({ length: 15 }, (_, i) => 2012 + i);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby="track-title" style={{ width: "100%", height: "auto", display: "block" }}>
      <title id="track-title">{t.heading}</title>
      {years.map(y => (
        <g key={y}>
          <line x1={x(y)} x2={x(y)} y1={24} y2={H - 34} stroke={grid} strokeWidth={y % 2 === 0 ? 1 : 0.5} strokeDasharray={y % 2 === 0 ? undefined : "2 4"} />
          {y % 2 === 0 && <text x={x(y)} y={H - 12} textAnchor="middle" fontSize="13" fill={muted} style={{ fontVariantNumeric: "tabular-nums" }}>{y}</text>}
        </g>
      ))}
      <line x1={X0 - 20} x2={X1 + 20} y1={AXIS} y2={AXIS} stroke={BG.deep} strokeWidth="2" />
      {TRACK.map(d => {
        const rr = r(d.value), cx = x(d.year);
        const cy = d.side === "up" ? AXIS - STEM - rr : AXIS + STEM + rr;
        // Name inside the bubble only when it fits (≈6.6 px per character at 12 px)
        const inside = rr >= 22 && d.label.length * 6.6 <= 2 * rr - 10;
        const txt = d.sector === "ma" ? ink : "#FFFFFF";
        const ty = d.side === "up" ? cy - rr - 18 : cy + rr + 16;
        return (
          <g key={d.label}>
            <title>{`${d.label} · ${Math.floor(d.year)} · USD ${d.value}M · ${t.sectors[d.sector]}`}</title>
            <line x1={cx} x2={cx} y1={AXIS} y2={d.side === "up" ? cy + rr : cy - rr} stroke={BG.deep} strokeWidth="1" opacity="0.45" />
            <circle cx={cx} cy={cy} r={rr} fill={SECTOR_COLOR[d.sector]} />
            {inside ? (
              <>
                <text x={cx} y={cy - 2} textAnchor="middle" fontSize="12" fontWeight="600" fill={txt}>{d.label}</text>
                <text x={cx} y={cy + 13} textAnchor="middle" fontSize="11" fill={txt} opacity="0.85">${d.value}M</text>
              </>
            ) : (
              <>
                <text x={cx} y={ty} textAnchor="middle" fontSize="12" fontWeight="600" fill={ink}>{d.label}</text>
                <text x={cx} y={ty + 14} textAnchor="middle" fontSize="11" fill={muted}>${d.value}M</text>
              </>
            )}
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
                  <span style={{ color: ON_DARK.text, fontSize: "clamp(2.6rem, 4vw, 4.2rem)", letterSpacing: "-0.03em", lineHeight: 1, whiteSpace: "nowrap" }}>
                    <CountUp value={s.value} />
                  </span>
                  <span style={{ color: ON_DARK.muted, fontSize: "0.95rem", lineHeight: 1.5 }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Track record ─────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#FFFFFF", paddingBlock: "clamp(4rem, 8vw, 7rem)" }}>
          <div className="container-site">
            <Eyebrow>{c.track.eyebrow}</Eyebrow>
            <div className="grid lg:grid-cols-[5fr_7fr] gap-6 lg:gap-16">
              <h2 className="font-normal text-ink" style={H2}>{c.track.heading}</h2>
              <p className="text-body text-ink-muted leading-relaxed">{c.track.intro}</p>
            </div>

            <div className="mt-10 overflow-x-auto" style={{ marginInline: "-1rem", paddingInline: "1rem" }}>
              <div style={{ minWidth: 880 }}><TrackChart locale={locale} /></div>
            </div>
            <p className="mt-2 text-caption text-ink-subtle md:hidden">{c.track.scrollHint} →</p>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 text-small text-ink-muted">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <span className="text-ink">{c.track.legend}</span>
                {(Object.keys(SECTOR_COLOR) as Sector[]).map(s => (
                  <span key={s} className="flex items-center gap-2">
                    <span className="inline-block rounded-full" style={{ width: 12, height: 12, backgroundColor: SECTOR_COLOR[s] }} />
                    {c.track.sectors[s]}
                  </span>
                ))}
              </div>
              <span>{c.track.sizeNote}</span>
            </div>

            {/* Featured transactions */}
            <h3 className="text-ink mt-16 mb-8" style={{ fontSize: "1.375rem", letterSpacing: "-0.01em" }}>{c.track.featured}</h3>
            <ul className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {c.deals.map((d, i) => (
                <li key={i} className="flex flex-col gap-3 pt-6" style={{ borderTop: "1px solid rgba(17,31,48,0.12)" }}>
                  <span className="text-eyebrow" style={{ color: "var(--color-warm)" }}>{d.year} · {d.amount}</span>
                  <h4 className="text-ink" style={{ fontSize: "1.15rem", lineHeight: 1.3 }}>{d.name}</h4>
                  <p className="text-ink-muted" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>{d.body}</p>
                  <span className="text-caption text-ink-subtle">{d.tags}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── What it does ─────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: BG.mint, paddingBlock: "clamp(4rem, 8vw, 7rem)" }}>
          <div className="container-site grid lg:grid-cols-[5fr_7fr] gap-6 lg:gap-16">
            <h2 className="font-normal text-ink" style={H2}>{c.focus.heading}</h2>
            <ul className="flex flex-col">
              {c.focus.items.map((it, i) => (
                <li key={i} className="flex flex-col gap-2 py-7" style={{ borderTop: i ? "1px solid rgba(17,31,48,0.12)" : undefined, paddingTop: i ? undefined : 0 }}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="text-ink" style={{ fontSize: "1.375rem", letterSpacing: "-0.01em" }}>{it.title}</h3>
                    <span className="text-eyebrow" style={{ color: "var(--color-warm)" }}>{it.stat}</span>
                  </div>
                  <p className="text-body text-ink-muted leading-relaxed">{it.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── How it works ─────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#FFFFFF", paddingBlock: "clamp(4rem, 8vw, 7rem)" }}>
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
        <section style={{ backgroundColor: BG.mint, paddingBlock: "clamp(4rem, 8vw, 7rem)" }}>
          <div className="container-site grid md:grid-cols-[4fr_8fr] gap-10 lg:gap-16 items-start">
            <div className="relative w-full max-w-sm overflow-hidden" style={{ aspectRatio: "1 / 1", borderRadius: 16 }}>
              <Image src="/images/pablo-mautone.jpg" alt={`${c.pablo.name}, ${c.pablo.role}`} fill sizes="(min-width: 768px) 384px, 90vw" className="object-cover" />
            </div>
            <div>
              <Eyebrow>{c.pablo.eyebrow}</Eyebrow>
              <h2 className="font-normal text-ink" style={{ ...H2, fontSize: "clamp(2rem, 3.2vw, 2.8rem)" }}>{c.pablo.name}</h2>
              <p className="mt-2 text-ink-subtle">{c.pablo.role}</p>
              <p className="mt-6 text-body text-ink-muted leading-relaxed" style={{ maxWidth: "60ch" }}>{c.pablo.intro}</p>
              <ul className="mt-6 flex flex-col gap-3 text-body text-ink-muted">
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

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section data-nav-dark style={{ backgroundColor: BG.deep, paddingBlock: "clamp(4.5rem, 9vw, 7.5rem)" }}>
          <div className="container-site flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-normal" style={{ color: ON_DARK.text, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
                {c.cta.heading}
              </h2>
              <p className="mt-4" style={{ color: ON_DARK.muted, lineHeight: 1.7 }}>{c.cta.body}</p>
            </div>
            <a href={localePath("contact", locale)} data-cta="topic-sacramentum-capital" className="btn-primary flex-shrink-0">{c.cta.label}</a>
          </div>
        </section>

      </main>
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
