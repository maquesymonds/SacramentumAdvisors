"use client";

/* ─────────────────────────────────────────────────────────────────────────────
   CapitalTeaser — home, between "Why Sacramentum" and the team
   Says in one line what Sacramentum Capital is for (the question from its own
   page), then shows the track record: the bubble chart of the Capital page,
   built with the scroll, and three closed transactions by name (Maque,
   25.10.2026: "la persona tiene que entender perfecto de qué se trata").
   On Capital's light green: the chart's sector greens need a light ground.

   No new claims: question, intro, figures and deals come from data/capital.ts
   (the client's presentation). Publishing them is still to be confirmed by
   Inés (review list on the home).
   ─────────────────────────────────────────────────────────────────────────── */

import { useLocale, useLocalePath } from "@/lib/locale-context";
import { CAPITAL } from "@/data/capital";
import type { Locale } from "@/lib/i18n";
import SectionCta from "@/components/ui/SectionCta";
import TrackReveal from "@/components/capital/TrackReveal";
import { TrackChart, TrackLegend, dealColor } from "@/components/capital/TrackChart";

const BG = "#EDF3F1"; // Capital's light green

const UI: Record<Locale, string> = {
  en: "Explore Sacramentum Capital",
  es: "Conocer Sacramentum Capital",
  de: "Sacramentum Capital entdecken",
};

// Three closed deals from data/capital.ts deals[], oldest first: UTE bonds 2012,
// CAF fund 2016, INFRAM IPO 2025 (indices into the deals list)
const FEATURED = [3, 0, 4];

export default function CapitalTeaser() {
  const { locale } = useLocale();
  const { path }   = useLocalePath();
  const c = CAPITAL[locale] ?? CAPITAL.en;

  return (
    <section id="sacramentum-capital" aria-label="Sacramentum Capital" style={{ backgroundColor: BG, paddingBlock: "clamp(4.5rem, 9vw, 8rem)" }}>
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-[7fr_5fr] lg:gap-20 lg:items-end">
          <div>
            <p className="text-eyebrow mb-6 flex items-center gap-3" style={{ color: "var(--color-warm)" }}>
              <span className="block h-px w-8" style={{ backgroundColor: "var(--color-warm)" }} />
              {c.hero.eyebrow}
            </p>
            <h2
              className="font-normal text-ink"
              style={{ fontSize: "clamp(2.1rem, 3.8vw, 3.4rem)", letterSpacing: "-0.03em", lineHeight: 1.08, textWrap: "balance" }}
            >
              {c.hero.title}
            </h2>
          </div>
          <div>
            <p className="text-ink-muted" style={{ fontSize: "1.05rem", lineHeight: 1.7, textWrap: "pretty" }}>
              {c.hero.intro[0]}
            </p>
            <SectionCta id="home-capital" label={UI[locale]} href={path("sacramentum-capital")} align="start" />
          </div>
        </div>

        {/* Track record: the figures, then the chart building with the scroll */}
        <dl className="grid grid-cols-3" style={{ marginTop: "clamp(3rem, 6vw, 4.5rem)", borderTop: "1px solid rgba(12,59,56,0.15)" }}>
          {c.hero.stats.slice(0, 3).map((s, i) => (
            <div key={s.label} className={`flex flex-col gap-1 pt-6 ${i > 0 ? "pl-4 sm:pl-8 border-l" : ""}`} style={{ borderColor: "rgba(12,59,56,0.15)" }}>
              <dt className="order-2 text-ink-muted" style={{ fontSize: "0.9rem" }}>{s.label}</dt>
              <dd className="order-1 text-ink" style={{ fontSize: "clamp(1.6rem, 1rem + 2.2vw, 2.6rem)", letterSpacing: "-0.03em", lineHeight: 1.05 }}>{s.value}</dd>
            </div>
          ))}
        </dl>

        <TrackLegend locale={locale} className="mt-12" />
        <div className="mt-4 overflow-x-auto" style={{ marginInline: "-1rem", paddingInline: "1rem" }}>
          <div style={{ minWidth: 880 }}><TrackReveal><TrackChart locale={locale} titleId="home-track-title" /></TrackReveal></div>
        </div>
        <p className="mt-2 text-caption text-ink-subtle md:hidden">{c.track.scrollHint} →</p>

        {/* Three closed transactions by name */}
        <ul className="grid gap-6 sm:grid-cols-3" style={{ marginTop: "clamp(2rem, 4vw, 3rem)" }}>
          {FEATURED.map(i => {
            const d = c.deals[i];
            return (
              <li key={d.name} className="flex flex-col gap-1 pt-5" style={{ borderTop: `2px solid ${dealColor(i)}` }}>
                <span className="text-ink-subtle" style={{ fontSize: "0.85rem", fontVariantNumeric: "tabular-nums" }}>{d.year} · {d.amount}</span>
                <span className="text-ink" style={{ fontSize: "1.1rem", lineHeight: 1.3 }}>{d.name}</span>
                <span className="text-ink-muted" style={{ fontSize: "0.85rem" }}>{d.tags}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
