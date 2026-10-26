"use client";

/* ─────────────────────────────────────────────────────────────────────────────
   CapitalTeaser — home, after "Why Sacramentum" (Maque, 26.10.2026; right
   after the pinned "How we support you" the colour blend misbehaved).
   One screen tall like the other home sections: title, what the firm is and
   the button to its page on the left, the three figures large on the right.
   The track-record chart stays on the Capital page ("no es para la home").
   On the site's white, not Capital's green, and the figures count up as they
   scroll in, like the rest of the site (Maque, 26.10.2026).

   Copy: intro and figures from data/capital.ts (the client's presentation);
   the title is new and listed for Inés in the home's review notes.
   ─────────────────────────────────────────────────────────────────────────── */

import { useLocale, useLocalePath } from "@/lib/locale-context";
import { CAPITAL } from "@/data/capital";
import type { Locale } from "@/lib/i18n";
import SectionCta from "@/components/ui/SectionCta";
import CountUp    from "@/components/ui/CountUp";

const LINE = "rgba(17,31,48,0.12)";

const UI: Record<Locale, { title: string; link: string }> = {
  en: { title: "Buying, selling or financing a company", link: "Explore Sacramentum Capital" },
  es: { title: "Comprar, vender o financiar una empresa", link: "Conocer Sacramentum Capital" },
  de: { title: "Ein Unternehmen kaufen, verkaufen oder finanzieren", link: "Sacramentum Capital entdecken" },
};

export default function CapitalTeaser() {
  const { locale } = useLocale();
  const { path }   = useLocalePath();
  const c  = CAPITAL[locale] ?? CAPITAL.en;
  const ui = UI[locale];

  return (
    <section
      id="sacramentum-capital"
      aria-label="Sacramentum Capital"
      className="flex items-center bg-surface"
      style={{ minHeight: "100svh", paddingBlock: "clamp(5rem, 9vw, 8rem)" }}
    >
      <div className="container-site w-full grid gap-14 lg:grid-cols-[7fr_5fr] lg:gap-24 lg:items-center">
        <div>
          <p className="text-eyebrow mb-6 flex items-center gap-3" style={{ color: "var(--color-warm)" }}>
            <span className="block h-px w-8" style={{ backgroundColor: "var(--color-warm)" }} />
            {c.hero.eyebrow}
          </p>
          <h2
            className="font-normal text-ink"
            style={{ fontSize: "clamp(2.4rem, 4.6vw, 4.2rem)", letterSpacing: "-0.035em", lineHeight: 1.04, textWrap: "balance" }}
          >
            {ui.title}
          </h2>
          <p className="mt-8 text-ink-muted" style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "46ch", textWrap: "pretty" }}>
            {c.hero.intro[0]}
          </p>
          <SectionCta id="home-capital" label={ui.link} href={path("sacramentum-capital")} align="start" className="max-lg:hidden" />
        </div>

        <div>
          <dl>
            {c.hero.stats.slice(0, 3).map(s => (
              <div key={s.label} className="flex flex-col gap-2 py-7" style={{ borderTop: `1px solid ${LINE}` }}>
                <dt className="order-2 text-ink-muted" style={{ fontSize: "clamp(1.05rem, 0.9rem + 0.4vw, 1.25rem)" }}>{s.label}</dt>
                <dd className="order-1 text-ink" style={{ fontSize: "clamp(3.4rem, 2rem + 4vw, 5.8rem)", letterSpacing: "-0.045em", lineHeight: 0.95 }}><CountUp value={s.value} /></dd>
              </div>
            ))}
          </dl>
          {/* On phones the button comes after the figures */}
          <SectionCta id="home-capital" label={ui.link} href={path("sacramentum-capital")} align="start" className="lg:hidden" />
        </div>
      </div>
    </section>
  );
}
