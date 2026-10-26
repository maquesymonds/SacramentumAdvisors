"use client";

/* ─────────────────────────────────────────────────────────────────────────────
   CapitalTeaser — home, right after "How we support you", whose last card is
   Sacramentum Capital: the story goes on to the financial side (Maque,
   26.10.2026). A short band, not a full screen: a clear title, what the firm
   is, three figures and the button to its page. The track-record chart stays
   on the Capital page ("no es para la home").

   Copy: intro and figures from data/capital.ts (the client's presentation);
   the title is new and listed for Inés in the home's review notes.
   ─────────────────────────────────────────────────────────────────────────── */

import { useLocale, useLocalePath } from "@/lib/locale-context";
import { CAPITAL } from "@/data/capital";
import type { Locale } from "@/lib/i18n";
import SectionCta from "@/components/ui/SectionCta";

const BG = "#0C3B38"; // Capital page colour

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
    <section id="sacramentum-capital" aria-label="Sacramentum Capital" data-nav-dark style={{ backgroundColor: BG, paddingBlock: "clamp(4rem, 7vw, 6rem)" }}>
      <div className="container-site grid gap-10 lg:grid-cols-[6fr_5fr] lg:gap-20 lg:items-center">
        <div>
          <p className="text-eyebrow mb-6 flex items-center gap-3" style={{ color: "var(--color-warm)" }}>
            <span className="block h-px w-8" style={{ backgroundColor: "var(--color-warm)" }} />
            {c.hero.eyebrow}
          </p>
          <h2
            className="font-normal"
            style={{ color: "#FAFAF8", fontSize: "clamp(2.4rem, 4.6vw, 4.2rem)", letterSpacing: "-0.035em", lineHeight: 1.04, textWrap: "balance" }}
          >
            {ui.title}
          </h2>
          <SectionCta id="home-capital" label={ui.link} href={path("sacramentum-capital")} align="start" onDark className="max-lg:hidden" />
        </div>

        <div>
          <p style={{ color: "rgba(250,250,248,0.78)", fontSize: "1.05rem", lineHeight: 1.7, textWrap: "pretty" }}>
            {c.hero.intro[0]}
          </p>
          <dl className="grid grid-cols-3 mt-8" style={{ borderTop: "1px solid rgba(250,250,248,0.16)" }}>
            {c.hero.stats.slice(0, 3).map((s, i) => (
              <div key={s.label} className={`flex flex-col gap-1 pt-5 ${i > 0 ? "pl-4 border-l" : ""}`} style={{ borderColor: "rgba(250,250,248,0.16)" }}>
                <dt className="order-2" style={{ color: "rgba(250,250,248,0.72)", fontSize: "0.85rem", lineHeight: 1.35 }}>{s.label}</dt>
                <dd className="order-1" style={{ color: "#FAFAF8", fontSize: "clamp(1.5rem, 1rem + 1.4vw, 2.2rem)", letterSpacing: "-0.03em", lineHeight: 1.05 }}>{s.value}</dd>
              </div>
            ))}
          </dl>
          <SectionCta id="home-capital" label={ui.link} href={path("sacramentum-capital")} align="start" onDark className="lg:hidden" />
        </div>
      </div>
    </section>
  );
}
