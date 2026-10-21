/* ─────────────────────────────────────────────────────────────────────────────
   CapitalPage — Sacramentum Capital, with its own visual identity
   (deep green and teal from the firm's presentation, serif headings) so it
   reads as a separate company inside the Sacramentum Advisors site.
   Server component: all copy and every transaction of the track-record chart
   are in the HTML. Body copy: data/capital.ts · metadata: data/topics/.
   Sections with data-nav-dark switch the nav to its light-on-dark look.
   ─────────────────────────────────────────────────────────────────────────── */

import Image      from "next/image";
import { Newsreader } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer     from "@/components/layout/Footer";
import CountUp    from "@/components/ui/CountUp";
import { absoluteUrl, localePath, type Locale } from "@/lib/i18n";
import { CAPITAL, TRACK, type Sector } from "@/data/capital";

const serif = Newsreader({ subsets: ["latin"], weight: ["400", "500"], display: "swap" });

// Palette taken from the Sacramentum Capital presentation
const C = {
  deep:     "#0C3B38",
  deep2:    "#124541",
  panel:    "#1A5752",
  teal:     "#3AAE9F",
  tealSoft: "#84CCC4",
  mint:     "#EDF3F1",
  card:     "#FFFFFF",
  ink:      "#0F2A28",
  muted:    "#4E6663",
  line:     "#D3E1DE",
};
const SECTOR_COLOR: Record<Sector, string> = { energy: "#4FA79B", infra: "#2B5E59", devbank: "#163A36", ma: "#84CCC4" };

const HOME: Record<Locale, string> = { en: "Home", es: "Inicio", de: "Startseite" };

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-4 mb-5">
      <span className="block h-px w-8 flex-shrink-0" style={{ backgroundColor: light ? C.tealSoft : C.teal }} />
      <span className="text-eyebrow" style={{ color: light ? C.tealSoft : C.teal }}>{children}</span>
    </div>
  );
}

// The firm's mark: a disc with one slice pulled out
function Mark({ size = 72 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="46" cy="54" r="40" fill={C.panel} />
      <path d="M46 54 L46 14 A40 40 0 0 1 84 41 Z" fill="#2C7A72" />
      <path d="M53 47 L53 8 A39 39 0 0 1 90 35 Z" fill={C.teal} stroke="#FFFFFF" strokeWidth="3.5" strokeLinejoin="round" />
    </svg>
  );
}

// ── Track record: bubbles by year, area proportional to value ───────────────
function TrackChart({ locale }: { locale: Locale }) {
  const t = CAPITAL[locale].track;
  const W = 1200, H = 470, AXIS = 236, X0 = 70, X1 = 1130, Y0 = 2011.6, Y1 = 2026.9, STEM = 22;
  const x = (y: number) => X0 + (y - Y0) * (X1 - X0) / (Y1 - Y0);
  const r = (v: number) => 3.3 * Math.sqrt(v);
  const years = Array.from({ length: 15 }, (_, i) => 2012 + i);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby="track-title" style={{ width: "100%", height: "auto", display: "block" }}>
      <title id="track-title">{t.heading}</title>
      {years.map(y => (
        <g key={y}>
          <line x1={x(y)} x2={x(y)} y1={24} y2={H - 34} stroke={C.line} strokeWidth={y % 2 === 0 ? 1 : 0.5} strokeDasharray={y % 2 === 0 ? undefined : "2 4"} />
          {y % 2 === 0 && <text x={x(y)} y={H - 12} textAnchor="middle" fontSize="13" fill={C.muted} style={{ fontVariantNumeric: "tabular-nums" }}>{y}</text>}
        </g>
      ))}
      <line x1={X0 - 20} x2={X1 + 20} y1={AXIS} y2={AXIS} stroke={C.deep} strokeWidth="2" />
      {TRACK.map(d => {
        const rr = r(d.value), cx = x(d.year);
        const cy = d.side === "up" ? AXIS - STEM - rr : AXIS + STEM + rr;
        // Name inside the bubble only when it fits (≈6.6 px per character at 12 px)
        const inside = rr >= 22 && d.label.length * 6.6 <= 2 * rr - 10;
        const dark = d.sector === "ma";
        const txt = dark ? C.ink : "#FFFFFF";
        const ty = d.side === "up" ? cy - rr - 18 : cy + rr + 16;
        return (
          <g key={d.label}>
            <title>{`${d.label} · ${d.year | 0} · USD ${d.value}M · ${t.sectors[d.sector]}`}</title>
            <line x1={cx} x2={cx} y1={AXIS} y2={d.side === "up" ? cy + rr : cy - rr} stroke={C.deep} strokeWidth="1" opacity="0.5" />
            <circle cx={cx} cy={cy} r={rr} fill={SECTOR_COLOR[d.sector]} />
            {inside ? (
              <>
                <text x={cx} y={cy - 2} textAnchor="middle" fontSize="12" fontWeight="600" fill={txt}>{d.label}</text>
                <text x={cx} y={cy + 13} textAnchor="middle" fontSize="11" fill={txt} opacity="0.85">${d.value}M</text>
              </>
            ) : (
              <>
                <text x={cx} y={ty} textAnchor="middle" fontSize="12" fontWeight="600" fill={C.ink}>{d.label}</text>
                <text x={cx} y={ty + 14} textAnchor="middle" fontSize="11" fill={C.muted}>${d.value}M</text>
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
  const contact = localePath("contact", locale);
  const h = `${serif.className} font-normal`;

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
      description: c.hero.lead,
      url: absoluteUrl(localePath("sacramentum-capital", locale)),
      address: { "@type": "PostalAddress", addressLocality: "Montevideo", addressCountry: "UY" },
      founder: { "@type": "Person", name: "Pablo Mautone", jobTitle: c.pablo.role.split(" · ")[0] },
      foundingDate: "2010",
    },
  ];

  return (
    <>
      <Navigation />
      <main style={{ backgroundColor: C.mint, color: C.ink }}>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section
          data-nav-dark
          style={{
            backgroundColor: C.deep,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            paddingTop: "clamp(9rem, 16vw, 13rem)",
            paddingBottom: "clamp(3.5rem, 7vw, 6rem)",
          }}
        >
          <div className="container-site">
            <div className="flex flex-col items-center text-center">
              <Mark size={84} />
              <h1 className={`${h} mt-8`} style={{ color: "#FFFFFF", fontSize: "clamp(2.6rem, 5.4vw, 4.6rem)", letterSpacing: "0.04em", lineHeight: 1.05, textTransform: "uppercase" }}>
                {c.hero.title}
              </h1>
              <p className="mt-5 text-eyebrow" style={{ color: C.teal, letterSpacing: "0.32em" }}>{c.hero.eyebrow}</p>
              <span className="block mt-8 h-px w-40" style={{ backgroundColor: C.teal, opacity: 0.6 }} />
              <p className="mt-8 max-w-2xl" style={{ color: "rgba(255,255,255,0.82)", fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)", lineHeight: 1.6, textWrap: "balance" }}>
                {c.hero.lead}
              </p>
            </div>

            <div className="mt-14 grid sm:grid-cols-3" style={{ backgroundColor: C.panel }}>
              {c.hero.stats.map((s, i) => (
                <div key={i} className={`flex flex-col items-center text-center gap-2 px-6 py-8 ${i ? "border-t sm:border-t-0 sm:border-l" : ""}`} style={{ borderColor: "rgba(255,255,255,0.12)" }}>
                  <span className={h} style={{ color: "#FFFFFF", fontSize: "clamp(2.4rem, 4.4vw, 3.6rem)", lineHeight: 1, whiteSpace: "nowrap" }}><CountUp value={s.value} /></span>
                  <span className="text-small" style={{ color: C.tealSoft }}>{s.label}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-small" style={{ color: "rgba(255,255,255,0.45)" }}>{c.hero.place}</p>
          </div>
        </section>

        {/* ── Who we are ───────────────────────────────────────────────────── */}
        <section style={{ paddingBlock: "clamp(4rem, 8vw, 7rem)" }}>
          <div className="container-site grid lg:grid-cols-[7fr_5fr] gap-10 lg:gap-16 items-start">
            <div>
              <Kicker>{c.who.eyebrow}</Kicker>
              <h2 className={h} style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.8rem)", lineHeight: 1.15, letterSpacing: "-0.01em", textWrap: "balance" }}>{c.who.heading}</h2>
              {c.who.body.map((p, i) => <p key={i} className="mt-6 text-body" style={{ color: C.muted }}>{p}</p>)}
              <div className="mt-8 pt-6" style={{ borderTop: `1px solid ${C.line}` }}>
                <h3 className="font-semibold" style={{ fontSize: "1rem" }}>{c.who.relation.title}</h3>
                <p className="mt-2 text-small" style={{ color: C.muted, lineHeight: 1.7 }}>{c.who.relation.body}</p>
              </div>
            </div>
            <aside className="p-8 lg:mt-12" style={{ backgroundColor: C.deep, borderLeft: `4px solid ${C.teal}` }}>
              <h3 className={h} style={{ color: "#FFFFFF", fontSize: "1.6rem", lineHeight: 1.2 }}>{c.who.callout.title}</h3>
              <p className="mt-4" style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.7 }}>{c.who.callout.body}</p>
            </aside>
          </div>
        </section>

        {/* ── Why Sacramentum Capital ──────────────────────────────────────── */}
        <section style={{ backgroundColor: C.card, paddingBlock: "clamp(4rem, 8vw, 7rem)" }}>
          <div className="container-site">
            <Kicker>{c.why.eyebrow}</Kicker>
            <h2 className={h} style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.8rem)", lineHeight: 1.15, maxWidth: "24ch", textWrap: "balance" }}>{c.why.heading}</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {c.why.items.map((it, i) => (
                <article key={i} className="p-7 flex flex-col gap-3" style={{ backgroundColor: C.mint, borderBottom: `3px solid ${C.teal}` }}>
                  <span className="text-caption" style={{ color: C.teal, fontVariantNumeric: "tabular-nums" }}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className={h} style={{ fontSize: "1.35rem", lineHeight: 1.25 }}>{it.title}</h3>
                  <p className="text-small" style={{ color: C.muted, lineHeight: 1.7 }}>{it.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Areas of focus ───────────────────────────────────────────────── */}
        <section style={{ paddingBlock: "clamp(4rem, 8vw, 7rem)" }}>
          <div className="container-site">
            <Kicker>{c.focus.eyebrow}</Kicker>
            <h2 className={h} style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.8rem)", lineHeight: 1.15 }}>{c.focus.heading}</h2>
            <div className="mt-12 flex flex-col gap-5">
              {c.focus.items.map((it, i) => (
                <article key={i} className="grid md:grid-cols-[1fr_17rem]" style={{ backgroundColor: C.card, borderLeft: `4px solid ${C.panel}` }}>
                  <div className="p-7 lg:p-9">
                    <h3 className={h} style={{ fontSize: "1.6rem", lineHeight: 1.2 }}>{it.title}</h3>
                    <p className="mt-4 text-body" style={{ color: C.muted, fontSize: "1.05rem" }}>{it.body}</p>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center gap-2 p-8" style={{ backgroundColor: C.deep }}>
                    <span className={h} style={{ color: "#FFFFFF", fontSize: "clamp(1.9rem, 2.6vw, 2.4rem)", lineHeight: 1, whiteSpace: "nowrap" }}><CountUp value={it.stat.value} /></span>
                    <span className="text-small" style={{ color: C.tealSoft }}>{it.stat.label}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Track record ─────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: C.card, paddingBlock: "clamp(4rem, 8vw, 7rem)" }}>
          <div className="container-site">
            <Kicker>{c.track.eyebrow}</Kicker>
            <h2 className={h} style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.8rem)", lineHeight: 1.15 }}>{c.track.heading}</h2>
            <p className="mt-4 max-w-2xl" style={{ color: C.muted, lineHeight: 1.7 }}>{c.track.intro}</p>

            <div className="mt-10 overflow-x-auto" style={{ marginInline: "-1rem", paddingInline: "1rem" }}>
              <div style={{ minWidth: 880 }}><TrackChart locale={locale} /></div>
            </div>
            <p className="mt-2 text-caption md:hidden" style={{ color: C.muted }}>{c.track.scrollHint} →</p>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <span className="font-semibold text-small">{c.track.legend}</span>
                {(Object.keys(SECTOR_COLOR) as Sector[]).map(s => (
                  <span key={s} className="flex items-center gap-2 text-small" style={{ color: C.muted }}>
                    <span className="inline-block rounded-full" style={{ width: 14, height: 14, backgroundColor: SECTOR_COLOR[s] }} />
                    {c.track.sectors[s]}
                  </span>
                ))}
              </div>
              <span className="text-small" style={{ color: C.muted }}>{c.track.sizeNote}</span>
            </div>

            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {c.track.stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2 px-4 py-7" style={{ backgroundColor: C.deep }}>
                  <span className={h} style={{ color: "#FFFFFF", fontSize: "clamp(1.9rem, 3vw, 2.6rem)", lineHeight: 1, whiteSpace: "nowrap" }}><CountUp value={s.value} /></span>
                  <span className="text-small" style={{ color: C.tealSoft }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Selected transactions ────────────────────────────────────────── */}
        <section style={{ paddingBlock: "clamp(4rem, 8vw, 7rem)" }}>
          <div className="container-site">
            <Kicker>{c.deals.eyebrow}</Kicker>
            <h2 className={h} style={{ fontSize: "clamp(1.9rem, 3.2vw, 2.8rem)", lineHeight: 1.15 }}>{c.deals.heading}</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {c.deals.items.map((d, i) => (
                <article key={i} className="flex flex-col" style={{ backgroundColor: C.card }}>
                  <header className="flex items-baseline justify-between gap-3 px-6 py-4" style={{ backgroundColor: C.deep }}>
                    <h3 className={h} style={{ color: "#FFFFFF", fontSize: "1.15rem", lineHeight: 1.3 }}>
                      <span style={{ color: C.tealSoft, fontVariantNumeric: "tabular-nums" }}>{d.year}</span>{" "}{d.name}
                    </h3>
                    <span className="text-small flex-shrink-0" style={{ color: C.teal, whiteSpace: "nowrap" }}>{d.amount}</span>
                  </header>
                  <div className="px-6 py-5 flex flex-col gap-2">
                    <span className="text-caption" style={{ color: C.teal }}>{d.tags}</span>
                    <p className="text-small" style={{ color: C.muted, lineHeight: 1.7 }}>{d.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pablo Mautone ────────────────────────────────────────────────── */}
        <section data-nav-dark style={{ backgroundColor: C.deep, paddingBlock: "clamp(4.5rem, 9vw, 7.5rem)" }}>
          <div className="container-site grid lg:grid-cols-[4fr_8fr] gap-10 lg:gap-16 items-start">
            <div>
              <div className="relative w-full max-w-sm overflow-hidden" style={{ aspectRatio: "1 / 1", borderBottom: `4px solid ${C.teal}` }}>
                <Image src="/images/pablo.png" alt={`${c.pablo.name}, ${c.pablo.role}`} fill sizes="(min-width: 1024px) 384px, 90vw" className="object-cover" />
              </div>
            </div>
            <div>
              <Kicker light>{c.pablo.eyebrow}</Kicker>
              <h2 className={h} style={{ color: "#FFFFFF", fontSize: "clamp(2.2rem, 4vw, 3.4rem)", lineHeight: 1.05 }}>{c.pablo.name}</h2>
              <p className="mt-3" style={{ color: C.teal }}>{c.pablo.role}</p>
              <p className="mt-6 text-body" style={{ color: "rgba(255,255,255,0.8)", maxWidth: "60ch" }}>{c.pablo.intro}</p>

              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {c.pablo.points.map((p, i) => (
                  <li key={i} className="p-5 text-small" style={{ backgroundColor: C.deep2, borderLeft: `3px solid ${C.teal}`, color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>{p}</li>
                ))}
              </ul>

              <h3 className="mt-10 text-eyebrow" style={{ color: C.tealSoft }}>{c.pablo.careerTitle}</h3>
              <ol className="mt-5 grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
                {c.pablo.career.map((s, i) => (
                  <li key={i} className="flex flex-col gap-1 pt-4" style={{ borderTop: `1px solid ${i === c.pablo.career.length - 1 ? C.teal : "rgba(255,255,255,0.18)"}` }}>
                    <span className="text-caption" style={{ color: C.tealSoft, fontVariantNumeric: "tabular-nums" }}>{s.years}</span>
                    <span className={h} style={{ color: "#FFFFFF", fontSize: "1.15rem" }}>{s.org}</span>
                    <span className="text-small" style={{ color: "rgba(255,255,255,0.6)" }}>{s.role}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section style={{ paddingBlock: "clamp(4rem, 8vw, 6.5rem)" }}>
          <div className="container-site flex flex-col items-start gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className={h} style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.15 }}>{c.cta.heading}</h2>
              <p className="mt-4" style={{ color: C.muted, lineHeight: 1.7 }}>{c.cta.body}</p>
            </div>
            <a
              href={contact}
              data-cta="topic-sacramentum-capital"
              className="flex-shrink-0 rounded-full px-7 py-3 font-medium transition-colors duration-300 hover:opacity-90"
              style={{ backgroundColor: C.deep, color: "#FFFFFF" }}
            >
              {c.cta.label}
            </a>
          </div>
        </section>

      </main>
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
