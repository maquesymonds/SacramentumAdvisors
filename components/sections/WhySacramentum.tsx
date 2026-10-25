"use client";

import React, { useRef } from "react";
import { useLocale, useT } from "@/lib/locale-context";
import SectionCta from "@/components/ui/SectionCta";
import CardDeck from "@/components/ui/CardDeck";
import { useCharReveal } from "@/hooks/useCharReveal";

export default function WhySacramentum() {
  const { locale } = useLocale();
  const t     = useT();
  const copy  = t.whySacramentum;
  const cards = copy.cards;

  const h1Ref = useRef<HTMLHeadingElement>(null);
  useCharReveal(h1Ref, locale);

  return (
    <section
      id="why-sacramentum"
      aria-label="Why Sacramentum"
      className="bg-surface-muted overflow-hidden"
      style={{ paddingTop: "calc(var(--section-padding-y) * 0.5)" }}
    >

      {/* ── Header ────────────────────────────────────────────────── */}
      <div className="container-site">
        <div className="grid lg:grid-cols-2 lg:items-end gap-10 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="block h-px w-8 flex-shrink-0" style={{ backgroundColor: "var(--color-warm)" }} />
              <span className="text-eyebrow" style={{ color: "var(--color-warm)" }}>{copy.eyebrow}</span>
            </div>
            <h2
              key={locale}
              ref={h1Ref}
              className="font-normal text-ink"
              style={{
                fontSize:      "clamp(2.8rem, 5vw, 4.5rem)",
                letterSpacing: "-0.03em",
                lineHeight:    1.08,
              }}
            >
              {locale === "en" ? <>Why<br />Sacramentum?</> : locale === "de" ? <>Warum<br />Sacramentum?</> : <>¿Por qué Sacramentum?</>}
            </h2>
          </div>
          <p className="text-body text-ink-muted leading-relaxed lg:pb-2">
            {copy.subheadline}
          </p>
        </div>
      </div>

      {/* ── Card deck — full-bleed background ─────────────────────── */}
      <div
        style={{
          backgroundImage:    "url('/images/campoextendido.webp')",
          backgroundSize:     "cover",
          backgroundPosition: "center top",
          marginTop:          "-4rem",
          paddingTop:         "6.5rem",
          paddingBottom:      "var(--section-padding-y)",
        }}
      >
        <CardDeck cards={cards} brand="Sacramentum Advisors">
          <SectionCta id="home-why-sacramentum" label={t.closingCta.cta} />
        </CardDeck>
      </div>

    </section>
  );
}
