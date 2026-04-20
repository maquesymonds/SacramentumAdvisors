"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/data/translations";

const CARD_W = 340;
const CARD_H = 500;
const EASE   = [0.16, 1, 0.3, 1] as const;

const STACKED = [
  { x: -10, rotateZ: -4, scale: 0.94, zIndex: 1 },
  { x:   0, rotateZ:  0, scale: 1.00, zIndex: 3 },
  { x:  10, rotateZ:  4, scale: 0.94, zIndex: 2 },
] as const;

const SPREAD = [
  { x: -420, rotateZ: -5, scale: 1.00, zIndex: 2 },
  { x:    0, rotateZ:  0, scale: 1.00, zIndex: 3 },
  { x:  420, rotateZ:  5, scale: 1.00, zIndex: 2 },
] as const;

export default function WhySacramentum() {
  const { locale } = useLocale();
  const copy  = t(locale).whySacramentum;
  const cards = copy.cards;

  const [isSpread, setIsSpread] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsSpread(true); },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
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
            <h1
              className="font-normal text-ink"
              style={{
                fontSize:      "clamp(2.8rem, 5vw, 4.5rem)",
                letterSpacing: "-0.03em",
                lineHeight:    1.08,
              }}
            >
              {locale === "en" ? <>Why<br />Sacramentum?</> : <>¿Por qué<br />Sacramentum?</>}
            </h1>
          </div>
          <p className="text-body text-ink-muted leading-relaxed lg:pb-2">
            {copy.subheadline}
          </p>
        </div>
      </div>

      {/* ── Card deck — full-bleed background ─────────────────────── */}
      <div
        style={{
          backgroundImage:    "url('/images/campoextendido.png')",
          backgroundSize:     "cover",
          backgroundPosition: "center top",
          marginTop:          "-4rem",
          paddingTop:         "6.5rem",
          paddingBottom:      "var(--section-padding-y)",
        }}
      >
        <div className="container-site">
          <div
            style={{
              position:       "relative",
              height:         CARD_H + 60,
              display:        "flex",
              justifyContent: "center",
              alignItems:     "center",
              perspective:    "1200px",
            }}
          >
            {cards.map((card, i) => {
              const from = STACKED[i];
              const to   = SPREAD[i];

              return (
                <motion.article
                  key={card.id}
                  animate={{
                    x:       isSpread ? to.x       : from.x,
                    rotateZ: isSpread ? to.rotateZ  : from.rotateZ,
                    scale:   isSpread ? to.scale    : from.scale,
                    zIndex:  isSpread ? to.zIndex   : from.zIndex,
                  }}
                  transition={{
                    duration: 0.9,
                    ease:     EASE,
                    delay:    isSpread ? i * 0.07 : 0,
                  }}
                  style={{
                    position:      "absolute",
                    width:         CARD_W,
                    height:        CARD_H,
                    background:    "#FFFFFF",
                    border:        "1px solid rgba(31,41,51,0.06)",
                    borderRadius:  16,
                    boxShadow:     "0 1px 3px rgba(31,41,51,0.06), 0 8px 32px rgba(31,41,51,0.08)",
                    overflow:      "hidden",
                    display:       "flex",
                    flexDirection: "column",
                    cursor:        "default",
                  }}
                >
                  {/* Warm top border */}
                  <span
                    aria-hidden="true"
                    style={{
                      display:    "block",
                      height:     2,
                      flexShrink: 0,
                      background: "linear-gradient(90deg, rgba(204,168,124,0) 0%, rgba(204,168,124,0.9) 40%, rgba(204,168,124,0.9) 60%, rgba(204,168,124,0) 100%)",
                    }}
                  />

                  {/* Body */}
                  <div style={{ position: "relative", flex: 1, padding: "2.25rem 2.25rem 2rem", overflow: "hidden", display: "flex", flexDirection: "column" }}>

                    {/* Eyebrow */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
                      <span style={{ display: "block", height: 1, width: "1.75rem", flexShrink: 0, backgroundColor: "rgba(204,168,124,0.7)" }} />
                      <span className="text-eyebrow" style={{ color: "rgba(204,168,124,0.85)" }}>
                        {card.eyebrow}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontSize:      "1.375rem",
                        fontWeight:    400,
                        letterSpacing: "-0.01em",
                        lineHeight:    1.3,
                        color:         "var(--color-ink)",
                        marginBottom:  "1.25rem",
                      }}
                    >
                      {card.title}
                    </h3>

                    {/* Divider */}
                    <span
                      aria-hidden="true"
                      style={{ display: "block", height: 1, backgroundColor: "rgba(31,41,51,0.07)", marginBottom: "1.25rem", flexShrink: 0 }}
                    />

                    {/* Description */}
                    <p style={{ fontSize: "0.9375rem", lineHeight: 1.72, color: "var(--color-ink-subtle)", flex: 1 }}>
                      {card.description}
                    </p>

                    {/* Footer */}
                    <div
                      style={{
                        display:        "flex",
                        alignItems:     "center",
                        justifyContent: "space-between",
                        marginTop:      "1.5rem",
                        paddingTop:     "1.25rem",
                        borderTop:      "1px solid rgba(31,41,51,0.06)",
                        flexShrink:     0,
                      }}
                    >
                      <span style={{ fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(31,41,51,0.3)" }}>
                        Sacramentum Advisors
                      </span>
                      <img
                        src="/images/LogoBeige.png"
                        alt=""
                        aria-hidden="true"
                        style={{ height: 18, width: "auto", opacity: 0.55, flexShrink: 0 }}
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
