"use client";

/* ─────────────────────────────────────────────────────────────────────────────
   CapitalTeaser — home, right after "How we support you", whose last card is
   Sacramentum Capital: the story goes on to the financial side (Maque,
   26.10.2026). One screen tall like the other home sections: title and what
   the firm is on the left, the three figures large on the right with the
   button to its page under them. The track-record chart stays on the
   Capital page ("no es para la home").

   Copy: intro and figures from data/capital.ts (the client's presentation);
   the title is new and listed for Inés in the home's review notes.
   ─────────────────────────────────────────────────────────────────────────── */

import { useLocale, useLocalePath } from "@/lib/locale-context";
import { CAPITAL } from "@/data/capital";
import type { Locale } from "@/lib/i18n";
import SectionCta from "@/components/ui/SectionCta";

const BG   = "#0C3B38"; // Capital page colour
const LINE = "rgba(250,250,248,0.16)";

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
      className="flex items-center"
      style={{ backgroundColor: BG, minHeight: "100svh", paddingBlock: "clamp(5rem, 9vw, 8rem)" }}
    >
      <div className="container-site w-full grid gap-14 lg:grid-cols-[7fr_5fr] lg:gap-24 lg:items-center">
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
          <p className="mt-8" style={{ color: "rgba(250,250,248,0.78)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "46ch", textWrap: "pretty" }}>
            {c.hero.intro[0]}
          </p>
        </div>

        <div>
          <dl>
            {c.hero.stats.slice(0, 3).map(s => (
              <div key={s.label} className="flex flex-col gap-1 py-6" style={{ borderTop: `1px solid ${LINE}` }}>
                <dt className="order-2" style={{ color: "rgba(250,250,248,0.72)", fontSize: "0.95rem" }}>{s.label}</dt>
                <dd className="order-1" style={{ color: "#FAFAF8", fontSize: "clamp(2.8rem, 1.6rem + 3.4vw, 4.6rem)", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.value}</dd>
              </div>
            ))}
          </dl>
          <SectionCta id="home-capital" label={ui.link} href={path("sacramentum-capital")} align="start" onDark />
        </div>
      </div>
    </section>
  );
}
