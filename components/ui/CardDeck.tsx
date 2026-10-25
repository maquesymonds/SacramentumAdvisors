"use client";

/* ─────────────────────────────────────────────────────────────────────────────
   CardDeck — the home's "Why Sacramentum" cards, shared
   Desktop: three white cards stacked, they fan out when the deck enters the
   viewport. Mobile + tablet: snap carousel with dots and pause.
   Used by WhySacramentum (home) and the Sacramentum Capital page (Maque,
   21.10.): same card, only the eyebrow and the brand in the footer change.
   The caller owns the background behind the deck.
   ─────────────────────────────────────────────────────────────────────────── */

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

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

export type DeckCard = { id: string; eyebrow: string; title: string; description: string };

const CARD_STYLE: React.CSSProperties = {
  background:    "#FFFFFF",
  border:        "1px solid rgba(31,41,51,0.06)",
  borderRadius:  16,
  boxShadow:     "0 1px 3px rgba(31,41,51,0.06), 0 8px 32px rgba(31,41,51,0.08)",
  overflow:      "hidden",
  display:       "flex",
  flexDirection: "column",
};

function IconPause() {
  return (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="4" height="13" rx="1" fill="currentColor"/>
      <rect x="7.5" y="0.5" width="4" height="13" rx="1" fill="currentColor"/>
    </svg>
  );
}
function IconPlay() {
  return (
    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden="true">
      <path d="M1 1l10 6-10 6V1z" fill="currentColor"/>
    </svg>
  );
}

// Everything inside a card: warm top border, eyebrow, title, divider, text, brand footer
function CardBody({ card, brand }: { card: DeckCard; brand: string }) {
  return (
    <>
      {/* Warm top border */}
      <span aria-hidden="true" style={{ display: "block", height: 2, flexShrink: 0, background: "linear-gradient(90deg, rgba(204,168,124,0) 0%, rgba(204,168,124,0.9) 40%, rgba(204,168,124,0.9) 60%, rgba(204,168,124,0) 100%)" }} />

      <div style={{ position: "relative", flex: 1, padding: "2.25rem 2.25rem 2rem", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
          <span style={{ display: "block", height: 1, width: "1.75rem", flexShrink: 0, backgroundColor: "rgba(204,168,124,0.7)" }} />
          <span className="text-eyebrow" style={{ color: "rgba(204,168,124,0.85)" }}>{card.eyebrow}</span>
        </div>

        <h3 style={{ fontSize: "1.375rem", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.3, color: "var(--color-ink)", marginBottom: "1.25rem", textWrap: "balance" }}>
          {card.title}
        </h3>

        <span aria-hidden="true" style={{ display: "block", height: 1, backgroundColor: "rgba(31,41,51,0.07)", marginBottom: "1.25rem", flexShrink: 0 }} />

        <p style={{ fontSize: "0.9375rem", lineHeight: 1.72, color: "var(--color-ink-subtle)", flex: 1, textWrap: "pretty" }}>
          {card.description}
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: "1px solid rgba(31,41,51,0.06)", flexShrink: 0 }}>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(31,41,51,0.5)", fontWeight: 700 }}>{brand}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/LogoBeige.png" alt="" aria-hidden="true" style={{ height: 18, width: "auto", opacity: 0.55, flexShrink: 0 }} />
        </div>
      </div>
    </>
  );
}

function MobileCarousel({ cards, brand }: { cards: DeckCard[]; brand: string }) {
  const trackRef  = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  const activeRef = useRef(0);

  useEffect(() => { pausedRef.current = paused; }, [paused]);
  useEffect(() => { activeRef.current = active; }, [active]);

  const scrollTo = useCallback((idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cardW = track.children[0]?.getBoundingClientRect().width ?? track.scrollWidth / cards.length;
    track.scrollTo({ left: idx * (cardW + 16), behavior: "smooth" });
  }, [cards.length]);

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cardW = track.children[0]?.getBoundingClientRect().width ?? track.scrollWidth / cards.length;
    const idx = Math.min(Math.round(track.scrollLeft / (cardW + 16)), cards.length - 1);
    setActive(idx);
  }, [cards.length]);

  useEffect(() => {
    const id = setInterval(() => {
      if (pausedRef.current) return;
      scrollTo((activeRef.current + 1) % cards.length);
    }, 5000);
    return () => clearInterval(id);
  }, [cards.length, scrollTo]);

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={onScroll}
        style={{
          display:                 "flex",
          overflowX:               "auto",
          scrollSnapType:          "x mandatory",
          scrollbarWidth:          "none",
          gap:                     "1rem",
          paddingLeft:             "1.25rem",
          paddingBottom:           "0.5rem",
          scrollPaddingLeft:       "1.25rem",
          WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
        }}
      >
        {cards.map((card) => (
          <article
            key={card.id}
            style={{ ...CARD_STYLE, flexShrink: 0, width: "min(76vw, 400px)", scrollSnapAlign: "start" }}
          >
            <CardBody card={card} brand={brand} />
          </article>
        ))}
      </div>

      {/* Controls: dots + pause */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem", marginTop: "1.25rem" }}>
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to card ${i + 1}`}
            style={{
              width:        i === active ? "1.5rem" : "0.5rem",
              height:       "0.5rem",
              borderRadius: "9999px",
              background:   i === active ? "white" : "rgba(255,255,255,0.45)",
              border:       "none",
              cursor:       "pointer",
              padding:      0,
              transition:   "width 0.3s ease, background 0.3s ease",
            }}
          />
        ))}
        <button
          onClick={() => setPaused(p => !p)}
          aria-label={paused ? "Play" : "Pause"}
          style={{
            marginLeft: "0.5rem", width: "2rem", height: "2rem",
            borderRadius: "50%", background: "white", border: "none",
            cursor: "pointer", display: "flex", alignItems: "center",
            justifyContent: "center", color: "var(--color-ink)", flexShrink: 0,
          }}
        >
          {paused ? <IconPlay /> : <IconPause />}
        </button>
      </div>
    </div>
  );
}

export default function CardDeck({ cards, brand, children }: { cards: DeckCard[]; brand: string; children?: React.ReactNode }) {
  const [isSpread, setIsSpread] = useState(false);
  const deckRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = deckRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsSpread(true); },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile + tablet carousel */}
      <div className="lg:hidden mb-8">
        <MobileCarousel cards={cards} brand={brand} />
      </div>

      <div className="container-site hidden lg:block">
        <div
          ref={deckRef}
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
                style={{ ...CARD_STYLE, position: "absolute", width: CARD_W, height: CARD_H, cursor: "default" }}
              >
                <CardBody card={card} brand={brand} />
              </motion.article>
            );
          })}
        </div>

        {children}
      </div>
    </>
  );
}
