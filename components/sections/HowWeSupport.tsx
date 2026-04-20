"use client";

import React, { useRef, useEffect } from "react";
import { gsap }          from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocale }     from "@/lib/locale-context";
import { t }             from "@/data/translations";
import { padStart } from "@/lib/utils";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

export default function HowWeSupport() {
  const { locale } = useLocale();
  const router = useRouter();
  const copy  = t(locale).howWeSupport;
  const cards = copy.cards;

  const outerRef  = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLElement>(null);
  const trackRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer  = outerRef.current;
    const sticky = stickyRef.current;
    const track  = trackRef.current;
    if (!outer || !sticky || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const setHeight = () => {
        const scrollDist = track.scrollWidth - window.innerWidth;
        outer.style.height = `${scrollDist + window.innerHeight}px`;
      };

      setHeight();
      window.addEventListener("resize", setHeight);
      ScrollTrigger.refresh();

      const anim = gsap.to(track, {
        x:    () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger:             outer,
          start:               "top top",
          end:                 "bottom bottom",
          scrub:               1.2,
          invalidateOnRefresh: true,
          snap: {
            snapTo:   1 / (cards.length - 1),
            duration: { min: 0.3, max: 0.7 },
            delay:    0.05,
            ease:     "power2.inOut",
          },
        },
      });

      return () => {
        window.removeEventListener("resize", setHeight);
        anim.scrollTrigger?.kill();
        anim.kill();
        outer.style.height = "";
      };
    });

    return () => mm.revert();
  }, [cards.length]);

  return (
    <div ref={outerRef} id="how-we-support">

      <section
        ref={stickyRef}
        aria-label="How We Support Your Move"
        className="bg-surface-muted"
        style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}
      >

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div
          className="container-site flex-shrink-0"
          style={{ paddingTop: "clamp(3rem, 5vw, 5rem)", paddingBottom: "2.5rem" }}
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-24">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <span className="block h-px w-8 flex-shrink-0" style={{ backgroundColor: "var(--color-warm)" }} />
                <span className="text-eyebrow" style={{ color: "var(--color-warm)" }}>{copy.eyebrow}</span>
              </div>
              <h1
                className="font-normal text-ink"
                style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)", letterSpacing: "-0.03em", lineHeight: 1.08 }}
              >
                {copy.headline}
              </h1>
            </div>
            <div className="hidden lg:flex items-end">
              <p className="text-body text-ink-muted leading-relaxed">{copy.subheadline}</p>
            </div>
          </div>
        </div>

        {/* ── Track — GSAP animates x ─────────────────────────────────────── */}
        <div
          ref={trackRef}
          style={{
            display:      "flex",
            flexShrink:   0,
            gap:          "clamp(1rem, 1.5vw, 1.5rem)",
            paddingLeft:  "clamp(1.25rem, 3.5vw, 3rem)",
            paddingRight: "clamp(1.25rem, 3.5vw, 3rem)",
            width:        "max-content",
            flex:         1,
            alignItems:   "stretch",
            paddingBottom:"clamp(2.5rem, 4vw, 4rem)",
          }}
        >
          {cards.map((card, i) => (
            <article
              key={card.id}
              onClick={() => router.push("/contact")}
              style={{
                width:         "clamp(300px, 50vw, 580px)",
                flexShrink:    0,
                borderRadius:  16,
                overflow:      "hidden",
                background:    "white",
                display:       "flex",
                flexDirection: "column",
                boxShadow:     "0 4px 24px rgba(0,0,0,0.07)",
                cursor:        "pointer",
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", paddingBottom: "56%", overflow: "hidden", flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt={card.title}
                  draggable={false}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }}
                />
                <div
                  aria-hidden="true"
                  style={{ position: "absolute", inset: 0, background: "linear-gradient(175deg, rgba(31,41,51,0.0) 0%, rgba(31,41,51,0.18) 100%)", pointerEvents: "none" }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: "1.75rem 2rem 2rem", display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ display: "block", height: 1, width: "1.5rem", flexShrink: 0, backgroundColor: "var(--color-warm)" }} />
                  <span className="text-eyebrow" style={{ color: "var(--color-warm)", fontSize: "0.68rem" }}>
                    Step {padStart(i + 1)}
                  </span>
                </div>
                <h3 className="font-normal text-ink" style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.375rem)", letterSpacing: "-0.015em", lineHeight: 1.25 }}>
                  {card.title}
                </h3>
                <p className="text-ink-muted" style={{ fontSize: "0.9rem", lineHeight: 1.7, flex: 1 }}>
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </section>

      {/* ── CTA — below the sticky section ─────────────────────────────────── */}
      <div className="bg-surface-muted">
        <div className="container-site py-14">
          <div className="pt-10 border-t border-ink/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-body text-ink-muted max-w-[440px]">
              Every engagement begins with a private, no-commitment conversation about your objectives.
            </p>
            <button onClick={() => router.push("/contact")} className="btn-primary whitespace-nowrap flex-shrink-0">
              {copy.cta}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
