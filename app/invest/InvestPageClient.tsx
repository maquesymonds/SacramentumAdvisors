"use client";

import { useEffect, useRef, useState } from "react";
import { motion }             from "framer-motion";
import { gsap }               from "gsap";
import { ScrollTrigger }      from "gsap/ScrollTrigger";
import Navigation             from "@/components/layout/Navigation";
import Footer                 from "@/components/layout/Footer";
import { useT }               from "@/lib/locale-context";
import { lenisRef }           from "@/lib/lenis-ref";

gsap.registerPlugin(ScrollTrigger);

const EASE_FM = [0.16, 1, 0.3, 1] as const;

const CHAPTER_BG = ["#004785", "#af8f6e", "#194418", "#4a2512"] as const;

function lerpColor(a: string, b: string, t: number): string {
  const p = (hex: string) => {
    const h = hex.replace("#", "");
    return [parseInt(h.slice(0,2),16), parseInt(h.slice(2,4),16), parseInt(h.slice(4,6),16)];
  };
  const [r1,g1,b1] = p(a);
  const [r2,g2,b2] = p(b);
  return `rgb(${Math.round(r1+(r2-r1)*t)},${Math.round(g1+(g2-g1)*t)},${Math.round(b1+(b2-b1)*t)})`;
}

// Static metadata for each chapter. The editable text copy lives in
// data/translations.ts (sections investRealEstate / investTechnology /
// investAgriculture / investSpecial) and is pulled in via useT() so the
// admin "Textos" panel can edit it. Images, colours and order stay in code.
const CHAPTERS = [
  { id: "real-estate",        image: "/images/RealEstate.webp",    key: "investRealEstate"  },
  { id: "technology",         image: "/images/tech.avif",          key: "investTechnology"  },
  { id: "agriculture",        image: "/images/woods.avif",         key: "investAgriculture" },
  { id: "special-situations", image: "/placeholders/colonia.avif", key: "investSpecial"     },
] as const;

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, margin: "-80px" },
  transition:  { duration: 0.9, ease: EASE_FM, delay },
});

const fadeIn = (delay = 0) => ({
  initial:     { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport:    { once: true, margin: "-80px" },
  transition:  { duration: 0.85, ease: EASE_FM, delay },
});

export default function InvestPageClient() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tr = useT() as any;

  // ── Refs ───────────────────────────────────────────────────────────────────
  const chaptersSection = useRef<HTMLDivElement>(null);
  const imageRefs       = useRef<(HTMLDivElement | null)[]>([]);
  const imageInnerRefs  = useRef<(HTMLElement | null)[]>([]);
  const textPanelRefs   = useRef<(HTMLDivElement | null)[]>([]);

  // ── Live background colours ────────────────────────────────────────────────
  const [uiColors, setUiColors] = useState<string[]>([...CHAPTER_BG]);
  const bgColorsRef             = useRef<string[]>([...CHAPTER_BG]);
  const activeChapterRef        = useRef<number>(0);

  const handleColorChange = (idx: number, color: string) => {
    bgColorsRef.current[idx] = color;
    setUiColors(prev => { const n = [...prev]; n[idx] = color; return n; });
    // Apply immediately if this is the currently visible chapter
    if (idx === activeChapterRef.current && chaptersSection.current) {
      chaptersSection.current.style.backgroundColor = color;
    }
  };

  // ── GSAP ───────────────────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const lenis = lenisRef.current;
      if (lenis) lenis.on("scroll", ScrollTrigger.update);

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // Init: first panel visible + interactive, rest hidden + non-interactive
        textPanelRefs.current.forEach((el, i) => {
          if (el) {
            gsap.set(el, { opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 30 });
            el.style.pointerEvents = i === 0 ? "auto" : "none";
          }
        });

        // Init images: stacked, all fully visible (first on top)
        imageRefs.current.forEach((el, i) => {
          if (el) {
            el.style.zIndex = String(CHAPTERS.length - i);
            gsap.set(el, { clipPath: "inset(0 0 0% 0)" });
          }
        });

        // Pin entire section, scrub through (CHAPTERS.length - 1) screens
        const mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: chaptersSection.current,
            start:   "top top",
            end:     `+=${(CHAPTERS.length - 1) * 100}%`,
            pin:     true,
            scrub:   0.3,
            snap: {
              snapTo:    1 / (CHAPTERS.length - 1),
              duration:  { min: 0.5, max: 0.9 },
              delay:     0.08,
              ease:      "power2.inOut",
              inertia:   false,
            },
            onUpdate: (self) => {
              const total      = CHAPTERS.length - 1;
              const raw        = self.progress * total;
              const segIndex   = Math.min(Math.floor(raw), total - 1);
              const segProgress = raw - segIndex;
              const colorA  = bgColorsRef.current[segIndex];
              const colorB  = bgColorsRef.current[segIndex + 1];
              const blended = lerpColor(colorA, colorB, segProgress);
              if (chaptersSection.current) {
                chaptersSection.current.style.backgroundColor = blended;
              }
              const active = Math.round(raw);
              activeChapterRef.current = active;
              textPanelRefs.current.forEach((el, idx) => {
                if (el) el.style.pointerEvents = idx === active ? "auto" : "none";
              });
            },
          },
        });

        for (let i = 0; i < CHAPTERS.length - 1; i++) {
          const curr = textPanelRefs.current[i];
          const next = textPanelRefs.current[i + 1];
          const seg = gsap.timeline();
          seg.to(imageRefs.current[i], { clipPath: "inset(0 0 100% 0)", duration: 1, ease: "none" }, 0);
          seg.to(curr, { opacity: 0, y: -24, duration: 0.35, ease: "power2.in" }, 0);
          seg.fromTo(
            next,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
            0.5,
          );
          mainTl.add(seg);
        }

        setTimeout(() => ScrollTrigger.refresh(), 150);

        return () => {
          if (lenis) lenis.off("scroll", ScrollTrigger.update);
        };
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navigation />

      <main>

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section
          aria-label="Invest in Uruguay overview"
          style={{
            backgroundColor: "#FFFFFF",
            paddingTop:      "clamp(8rem, 14vw, 12rem)",
            paddingBottom:   "clamp(4rem, 8vw, 7rem)",
          }}
        >
          <div className="container-site">

            <motion.div {...fadeIn(0)} className="flex items-center gap-4 mb-5">
              <span className="block h-px w-8 flex-shrink-0" style={{ backgroundColor: "var(--color-warm)" }} />
              <span className="text-eyebrow" style={{ color: "var(--color-warm)" }}>
                {tr.investHero.eyebrow}
              </span>
            </motion.div>

            <div className="grid lg:grid-cols-2 lg:items-start gap-10 mb-10">
              <motion.h1
                {...fadeUp(0.06)}
                className="font-normal text-ink"
                style={{
                  fontSize:      "clamp(2.8rem, 5vw, 4.5rem)",
                  letterSpacing: "-0.03em",
                  lineHeight:    1.08,
                }}
              >
                {tr.investHero.headline}
              </motion.h1>

              <motion.div {...fadeUp(0.12)} className="text-body text-ink-muted leading-relaxed lg:pb-2 flex flex-col gap-4">
                <p>{tr.investHero.intro1}</p>
                <p>{tr.investHero.intro2}</p>
              </motion.div>
            </div>

            <motion.div {...fadeIn(0.3)} className="flex items-center gap-3 mt-8">
              <span className="text-ink-muted" style={{ fontSize: "0.75rem", letterSpacing: "0.06em" }}>
                {tr.investHero.scrollLabel}
              </span>
              <span style={{ display: "block", height: 1, width: "3rem", backgroundColor: "rgba(31,41,51,0.2)" }} />
            </motion.div>

          </div>
        </section>

        {/* ── Chapters — Desktop pinned ────────────────────────────────────── */}
        <div
          ref={chaptersSection}
          className="hidden lg:grid"
          style={{
            gridTemplateColumns: "1fr 1fr",
            gap:                 0,
            height:              "100vh",
            backgroundColor:     CHAPTER_BG[0],
          }}
        >

          {/* Left: absolutely stacked text panels */}
          <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
            {CHAPTERS.map((chapter, i) => {
              const copy = tr[chapter.key];
              return (
                <div
                  key={chapter.id}
                  ref={(el) => { textPanelRefs.current[i] = el; }}
                  style={{
                    position:      "absolute",
                    inset:         0,
                    display:       "flex",
                    flexDirection: "column",
                    justifyContent:"flex-start",
                    padding:       "clamp(5rem, 7vw, 7rem) clamp(2rem, 5vw, 5rem) clamp(2rem, 3vw, 3rem)",
                    overflowY:     "auto",
                  }}
                >
                  <p className="text-eyebrow mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {copy.eyebrow}
                  </p>

                  <h2
                    className="font-normal"
                    style={{
                      color:         "rgba(255,255,255,0.95)",
                      fontSize:      "clamp(1.9rem, 3.2vw, 2.9rem)",
                      letterSpacing: "-0.025em",
                      lineHeight:    1.1,
                      maxWidth:      "22ch",
                      marginBottom:  "0.5rem",
                    }}
                  >
                    {copy.headline}
                  </h2>

                  <span
                    aria-hidden="true"
                    style={{ display: "block", width: "2.5rem", height: 1, backgroundColor: "rgba(255,255,255,0.2)", marginBottom: "0.75rem" }}
                  />

                  {"pillars" in copy ? (
                    /* ── Technology: intro + three pillars ── */
                    <>
                      <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.95rem", lineHeight: 1.65, maxWidth: "52ch", marginBottom: "1.25rem" }}>
                        {copy.intro}
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem", marginBottom: "1.25rem" }}>
                        {copy.pillars.map((p: { heading: string; body: string }) => (
                          <div key={p.heading}>
                            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.35rem" }}>{p.heading}</p>
                            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.95rem", lineHeight: 1.65 }}>{p.body}</p>
                          </div>
                        ))}
                      </div>
                      <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.85)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, borderBottom: "1px solid rgba(255,255,255,0.25)", paddingBottom: "0.2rem", transition: "all 0.25s ease", width: "fit-content" }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = "white"; e.currentTarget.style.color = "white"; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}>
                        {copy.cta}
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true"><path d="M2 9L9 2M9 2H3.5M9 2V7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </a>
                    </>
                  ) : "keyDrivers" in copy ? (
                    /* ── Agriculture: key drivers + downloads ── */
                    <>
                      <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.95rem", lineHeight: 1.65, maxWidth: "52ch", marginBottom: "1.25rem" }}>{copy.body}</p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.25rem" }}>
                        {[
                          { heading: copy.keyFactorsLabel, items: copy.keyDrivers },
                          { heading: copy.highlightsLabel, items: copy.marketHighlights },
                        ].map(({ heading, items }) => (
                          <div key={heading}>
                            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>{heading}</p>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                              {items.map((item: { text: string }) => (
                                <li key={item.text} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start", color: "rgba(255,255,255,0.9)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                                  <span style={{ color: "rgba(204,168,124,0.7)", flexShrink: 0, marginTop: "0.25rem" }}>—</span>{item.text}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.82rem", lineHeight: 1.5, fontStyle: "italic", borderLeft: "2px solid rgba(204,168,124,0.3)", paddingLeft: "0.875rem", marginBottom: "1.25rem", maxWidth: "52ch" }}>{copy.legalNote}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "1.5rem" }}>
                        {copy.downloads.map((dl: { label: string; href: string }) => (
                          <a key={dl.label} href={dl.href} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", color: "rgba(255,255,255,0.75)", fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500, border: "1px solid rgba(255,255,255,0.18)", borderRadius: "50px", padding: "0.45rem 1rem", transition: "all 0.25s ease" }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(204,168,124,0.6)"; e.currentTarget.style.color = "rgba(204,168,124,0.9)"; }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M5 1v6M2 5l3 3 3-3M1 9h8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            {dl.label}
                          </a>
                        ))}
                      </div>
                      <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.85)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, borderBottom: "1px solid rgba(255,255,255,0.25)", paddingBottom: "0.2rem", transition: "all 0.25s ease", width: "fit-content" }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = "white"; e.currentTarget.style.color = "white"; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}>
                        {copy.cta}
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true"><path d="M2 9L9 2M9 2H3.5M9 2V7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </a>
                    </>
                  ) : (
                    /* ── Default: body + stat + cta ── */
                    <>
                      <div style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: "52ch", marginBottom: "2.25rem" }}>
                        {copy.body.split("\n\n").map((para: string, pi: number, arr: string[]) => (
                          <p key={pi} style={{ marginBottom: pi < arr.length - 1 ? "1rem" : 0 }}>{para}</p>
                        ))}
                      </div>
                      {copy.statValue && (
                        <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", padding: "1.25rem 1.5rem", borderLeft: "2px solid rgba(255,255,255,0.2)", backgroundColor: "rgba(255,255,255,0.06)", marginBottom: "2rem" }}>
                          <span style={{ color: "rgba(255,255,255,0.95)", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1 }}>{copy.statValue}</span>
                          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.78rem", letterSpacing: "0.04em", maxWidth: "24ch", lineHeight: 1.4 }}>{copy.statLabel}</span>
                        </div>
                      )}
                      <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "rgba(255,255,255,0.85)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 500, borderBottom: "1px solid rgba(255,255,255,0.25)", paddingBottom: "0.2rem", transition: "all 0.25s ease", width: "fit-content" }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = "white"; e.currentTarget.style.color = "white"; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}>
                        {copy.cta}
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true"><path d="M2 9L9 2M9 2H3.5M9 2V7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </a>
                    </>
                  )}


                </div>
              );
            })}
          </div>

          {/* Right: stacked image panels — pinned by GSAP */}
          <div style={{ position: "relative", overflow: "hidden", height: "100vh" }}>
            {CHAPTERS.map((chapter, i) => (
              <div
                key={chapter.id}
                ref={(el) => { imageRefs.current[i] = el; }}
                style={{ position: "absolute", inset: 0 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  ref={(el) => { imageInnerRefs.current[i] = el; }}
                  src={chapter.image}
                  alt={tr[chapter.key].eyebrow}
                  style={{ width: "100%", height: "115%", objectFit: "cover", marginTop: "-7.5%", display: "block" }}
                />
                <div
                  style={{
                    position:      "absolute",
                    bottom:        "2.5rem",
                    right:         "2.5rem",
                    color:         "rgba(255,255,255,0.25)",
                    fontSize:      "5rem",
                    fontWeight:    400,
                    letterSpacing: "-0.05em",
                    lineHeight:    1,
                    mixBlendMode:  "overlay",
                    pointerEvents: "none",
                    userSelect:    "none",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ── Chapters — Mobile stacked ────────────────────────────────────── */}
        <div className="lg:hidden">
          {CHAPTERS.map((chapter, i) => {
            const copy = tr[chapter.key];
            return (
              <div
                key={chapter.id}
                style={{ backgroundColor: CHAPTER_BG[i], padding: "clamp(3rem, 6vw, 5rem) 1.5rem" }}
              >
                <div style={{ aspectRatio: "16/10", overflow: "hidden", borderRadius: 2, marginBottom: "2rem" }}>
                  <img src={chapter.image} alt={copy.eyebrow} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <p className="text-eyebrow mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>{copy.eyebrow}</p>
                <h2 className="font-normal mb-5" style={{ color: "rgba(255,255,255,0.95)", fontSize: "clamp(1.6rem, 5vw, 2.4rem)", letterSpacing: "-0.025em", lineHeight: 1.1 }}>
                  {copy.headline}
                </h2>
                {"intro" in copy
                  ? <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>{copy.intro}</p>
                  : "body" in copy
                    ? <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: "1.5rem" }}>{copy.body}</p>
                    : null
                }
                {"keyDrivers" in copy ? (
                  <>
                    {[
                      { heading: copy.keyFactorsLabel, items: copy.keyDrivers },
                      { heading: copy.highlightsLabel, items: copy.marketHighlights },
                    ].map(({ heading, items }) => (
                      <div key={heading} style={{ marginBottom: "1.25rem" }}>
                        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.5rem" }}>{heading}</p>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                          {items.map((item: { text: string }) => (
                            <li key={item.text} style={{ display: "flex", gap: "0.5rem", color: "rgba(255,255,255,0.9)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                              <span style={{ color: "rgba(204,168,124,0.7)", flexShrink: 0 }}>—</span>{item.text}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.82rem", lineHeight: 1.6, fontStyle: "italic", borderLeft: "2px solid rgba(204,168,124,0.3)", paddingLeft: "0.75rem", marginBottom: "1.25rem" }}>
                      {copy.legalNote}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                      {copy.downloads.map((dl: { label: string; href: string }) => (
                        <a key={dl.label} href={dl.href} style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50px", padding: "0.4rem 0.875rem" }}>
                          {dl.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a href="/contact" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.3)", paddingBottom: "0.2rem" }}>
                    {copy.cta}
                  </a>
                )}
              </div>
            );
          })}
        </div>


      </main>

      <Footer />

      {/* ── Dev: colour picker ──────────────────────────────────────────── */}
      <div style={{
        display: "none",
        position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 9999,
        background: "rgba(15,15,15,0.92)", backdropFilter: "blur(8px)",
        border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12,
        padding: "1rem 1.25rem", color: "#fff", fontFamily: "monospace",
        fontSize: 12, width: 220, flexDirection: "column", gap: "0.75rem",
      }}>
        <div style={{ fontWeight: 700, letterSpacing: "0.08em", opacity: 0.5, fontSize: 10 }}>
          SECTION COLORS
        </div>
        {CHAPTERS.map((ch, i) => (
          <label key={ch.id} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <input
              type="color"
              value={uiColors[i]}
              onChange={e => handleColorChange(i, e.target.value)}
              style={{ width: 28, height: 28, border: "none", background: "none", cursor: "pointer", borderRadius: 4, padding: 0 }}
            />
            <span style={{ opacity: 0.7, fontSize: 11 }}>
              {`0${i + 1} · `}<strong style={{ color: "#f4c97a" }}>{uiColors[i]}</strong>
            </span>
          </label>
        ))}
        <div style={{ opacity: 0.4, fontSize: 10, lineHeight: 1.4 }}>
          Copia los hex y pegálos en CHAPTER_BG
        </div>
      </div>
    </>
  );
}
