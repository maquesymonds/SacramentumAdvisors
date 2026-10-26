"use client";

/* ─────────────────────────────────────────────────────────────────────────────
   CapitalTeaser — home, between "Why Sacramentum" and the team
   Shows the firm behind the "Boutique Investment Banking" service: what
   Sacramentum Capital does, its track record and its three areas, with a link
   to its own page. In Capital's green, so it reads as the sister firm.

   No new claims: the headline is the approved service card's own phrase
   ("transacciones sofisticadas con precisión y criterio"); description,
   figures and areas come from data/capital.ts (the client's presentation).
   Figures and the relationship wording are still to be confirmed by Inés.
   ─────────────────────────────────────────────────────────────────────────── */

import { useLocale, useLocalePath } from "@/lib/locale-context";
import { usePageTransition } from "@/lib/transition-context";
import { CAPITAL } from "@/data/capital";
import type { Locale } from "@/lib/i18n";

const BG = "#0C3B38"; // Capital page colour

const UI: Record<Locale, { headline: string; areas: string; link: string }> = {
  en: { headline: "Sophisticated transactions, with precision and strategic clarity", areas: "Areas of focus",      link: "Explore Sacramentum Capital" },
  es: { headline: "Transacciones sofisticadas, con precisión y criterio",             areas: "Áreas de enfoque",    link: "Conocer Sacramentum Capital" },
  de: { headline: "Anspruchsvolle Transaktionen, mit Präzision und strategischer Klarheit", areas: "Schwerpunkte", link: "Sacramentum Capital entdecken" },
};

export default function CapitalTeaser() {
  const { locale } = useLocale();
  const { path }   = useLocalePath();
  const { navigate } = usePageTransition();
  const c  = CAPITAL[locale] ?? CAPITAL.en;
  const ui = UI[locale];
  const href = path("sacramentum-capital");

  return (
    <section id="sacramentum-capital" aria-label="Sacramentum Capital" style={{ backgroundColor: BG, paddingBlock: "clamp(4.5rem, 9vw, 8rem)" }}>
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[6fr_5fr] lg:gap-20 lg:items-end">
          <div>
            <p className="text-eyebrow mb-6 flex items-center gap-3" style={{ color: "var(--color-warm)" }}>
              <span className="block h-px w-8" style={{ backgroundColor: "var(--color-warm)" }} />
              {c.hero.eyebrow}
            </p>
            <h2
              className="font-normal"
              style={{ color: "#FAFAF8", fontSize: "clamp(2.2rem, 4vw, 3.6rem)", letterSpacing: "-0.03em", lineHeight: 1.08, textWrap: "balance" }}
            >
              {ui.headline}
            </h2>
          </div>
          <p style={{ color: "rgba(250,250,248,0.72)", fontSize: "1.05rem", lineHeight: 1.7 }}>
            {c.hero.intro[0]}
          </p>
        </div>

        {/* Track record */}
        <dl
          className="grid grid-cols-1 sm:grid-cols-3"
          style={{ marginTop: "clamp(3rem, 6vw, 4.5rem)", borderTop: "1px solid rgba(250,250,248,0.16)" }}
        >
          {c.hero.stats.slice(0, 3).map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col gap-2 pt-8 pb-2 ${i > 0 ? "sm:pl-8 sm:border-l" : ""}`}
              style={{ borderColor: "rgba(250,250,248,0.16)" }}
            >
              <dt className="order-2" style={{ color: "rgba(250,250,248,0.72)", fontSize: "0.92rem" }}>{s.label}</dt>
              <dd className="order-1" style={{ color: "#FAFAF8", fontSize: "clamp(2.4rem, 1.4rem + 3vw, 3.8rem)", letterSpacing: "-0.035em", lineHeight: 1 }}>
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Areas + link */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between" style={{ marginTop: "clamp(2.5rem, 5vw, 3.5rem)" }}>
          <ul className="flex flex-wrap gap-3" aria-label={ui.areas}>
            {c.focus.items.map(f => (
              <li
                key={f.title}
                className="rounded-full"
                style={{ border: "1px solid rgba(250,250,248,0.28)", color: "#FAFAF8", padding: "0.5rem 1.1rem", fontSize: "0.92rem" }}
              >
                {f.title}
              </li>
            ))}
          </ul>
          <a
            href={href}
            onClick={(e) => {
              if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
              e.preventDefault();
              navigate(href);
            }}
            className="inline-flex items-center gap-2 self-start rounded-full whitespace-nowrap"
            style={{ background: "#FAFAF8", color: BG, padding: "0.85rem 1.6rem", fontWeight: 500, fontSize: "0.95rem" }}
          >
            {ui.link}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
