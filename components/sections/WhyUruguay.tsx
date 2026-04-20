"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap }          from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocale }     from "@/lib/locale-context";
import { t }             from "@/data/translations";
import StatItem          from "@/components/ui/StatItem";
import { useScrollReveal } from "@/lib/use-scroll-reveal";
import { lenisRef }      from "@/lib/lenis-ref";

gsap.registerPlugin(ScrollTrigger);

// ── Card icon map ─────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, string> = {
  shield:   "/images/Trust.png",
  circuit:  "/images/Rayo.png",
  people:   "/images/Human.png",
  leaf:     "/images/Heart.png",
  globe:    "/images/Location.png",
  document: "/images/Money.png",
};

function CardIcon({ id }: { id: string }) {
  const src = ICON_MAP[id];
  if (!src) return null;
  return <Image src={src} alt="" width={28} height={28} className="flex-shrink-0" aria-hidden />;
}

// ── Individual card ───────────────────────────────────────────────────────────
interface CardProps {
  icon:        string;
  title:       string;
  description: string;
  cardRef:     React.RefCallback<HTMLElement>;
}

function PillarCard({ icon, title, description, cardRef }: CardProps) {
  return (
    <article
      ref={cardRef}
      className={[
        "group relative flex flex-col gap-5",
        "p-8 bg-white border border-ink/[0.06] rounded-2xl",
        "shadow-card",
        "transition-shadow transition-colors duration-500",
        "hover:border-brand-blue/30 hover:shadow-card-lg",
      ].join(" ")}
      style={{ willChange: "transform", minHeight: "280px" }}
    >

      <div className="flex items-start">
        <CardIcon id={icon} />
      </div>

      <h3 className="text-h4 font-normal text-ink leading-snug">
        {title}
      </h3>

      <p className="text-small text-ink-subtle leading-relaxed flex-1">
        {description}
      </p>
    </article>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function WhyUruguay() {
  const { locale } = useLocale();
  const copy = t(locale).whyUruguay;

  const statsRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const gridRef  = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current.filter((c): c is HTMLElement => c !== null);
    const grid  = gridRef.current;
    if (!grid || cards.length < 1) return;

    const lenis = lenisRef.current;
    if (lenis) lenis.on("scroll", ScrollTrigger.update);

    /*
     * Index2-inspired column-fan effect.
     *
     * Each column has a distinct transform-origin that acts as a "pivot base":
     *   Left  col — origin near lower-left  ("18% 95%")
     *               rotates negative, shifts left → top fans outward-left
     *   Center col — origin at dead center   ("50% 50%")
     *               barely moves, mild Y drift — stays "calm"
     *   Right col — origin near lower-right  ("82% 95%")
     *               rotates positive, shifts right → top fans outward-right
     *
     * from = natural position (no jump when card enters view)
     * to   = fully fanned state (reached as section scrolls through viewport)
     *
     * scrub: 1.5 gives the premium lag feel without losing responsiveness.
     */

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ── Desktop — full index2 fan ─────────────────────────────────────────
      mm.add("(min-width: 1024px)", () => {

        const DESKTOP = [
          {
            // Left column: pivot lower-left, fans outward-left
            origin: "18% 95%",
            from: { x:   0, y: 0, rotation:  0   },
            to:   { x: -28, y: -22, rotation: -7.5 },
          },
          {
            // Center column: calm, mild vertical drift
            origin: "50% 50%",
            from: { x: 0, y: 0,  rotation: 0 },
            to:   { x: 0, y: -18, rotation: 0 },
          },
          {
            // Right column: pivot lower-right, fans outward-right
            origin: "82% 95%",
            from: { x:  0, y: 0, rotation: 0   },
            to:   { x: 28, y: -22, rotation:  7.5 },
          },
        ];

        const ST = {
          trigger: grid,
          start:   "top bottom",
          end:     "bottom top",
          scrub:   1.5,
        };

        cards.forEach((card, i) => {
          const cfg = DESKTOP[i % 3];
          gsap.set(card, { transformOrigin: cfg.origin });
          gsap.fromTo(card, cfg.from, { ...cfg.to, ease: "none", scrollTrigger: ST });
        });
      });

      // ── Tablet — simplified two-column fan ───────────────────────────────
      mm.add("(min-width: 640px) and (max-width: 1023px)", () => {

        const TABLET = [
          {
            origin: "20% 95%",
            from: { x:   0, y: 0, rotation:  0   },
            to:   { x: -16, y: -14, rotation: -4.5 },
          },
          {
            origin: "80% 95%",
            from: { x:  0, y: 0, rotation: 0   },
            to:   { x: 16, y: -14, rotation:  4.5 },
          },
        ];

        const ST = {
          trigger: grid,
          start:   "top bottom",
          end:     "bottom top",
          scrub:   1.5,
        };

        cards.forEach((card, i) => {
          const cfg = TABLET[i % 2];
          gsap.set(card, { transformOrigin: cfg.origin });
          gsap.fromTo(card, cfg.from, { ...cfg.to, ease: "none", scrollTrigger: ST });
        });
      });

      // ── Mobile — very subtle Y drift only ───────────────────────────────
      mm.add("(max-width: 639px)", () => {
        gsap.set(cards, { transformOrigin: "50% 50%" });
        gsap.fromTo(
          cards,
          { y: 0 },
          {
            y: -10,
            ease: "none",
            scrollTrigger: {
              trigger: grid,
              start:   "top bottom",
              end:     "bottom top",
              scrub:   2,
            },
          }
        );
      });

    }, gridRef);

    return () => {
      ctx.revert();
      if (lenis) lenis.off("scroll", ScrollTrigger.update);
    };
  }, []);

  return (
    <section
      id="why-uruguay"
      aria-label="Why Uruguay"
      className="bg-surface"
      style={{ paddingTop: "var(--section-padding-y)" }}
    >
      {/* ── Header + Stats inside the container ─────────────────────── */}
      <div className="container-site">

        <div className="grid lg:grid-cols-2 lg:items-end gap-10 mb-10">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="block h-px w-8 bg-brand-warm flex-shrink-0" />
              <span className="text-eyebrow text-brand-warm">{copy.eyebrow}</span>
            </div>
            <h1
              className="font-normal text-ink"
              style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)", letterSpacing: "-0.03em", lineHeight: 1.08 }}
            >
              {copy.headline}
            </h1>
          </div>
          <p className="text-body text-ink-muted leading-relaxed lg:pb-2">
            {copy.subheadline}
          </p>
        </div>

        <div ref={statsRef} className="sr-hidden mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 pt-4 pb-12">
            {copy.stats.map((stat, i) => (
              <StatItem
                key={stat.label}
                value={stat.value}
                label={stat.label}
                index={i}
                theme="light"
              />
            ))}
          </div>
        </div>

      </div>

      {/* ── Card grid — full-bleed background ────────────────────────── */}
      <div
        style={{
          backgroundImage:    "url('/images/OlasLanding.png')",
          backgroundSize:     "cover",
          backgroundPosition: "center top",
          marginTop:          "-8rem",
          paddingTop:         "10.5rem",
          paddingBottom:      "var(--section-padding-y)",
        }}
      >
        <div className="container-site">
          <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {copy.cards.map((card, i) => (
              <PillarCard
                key={card.id}
                icon={card.icon}
                title={card.title}
                description={card.description}
                cardRef={el => { cardRefs.current[i] = el; }}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
