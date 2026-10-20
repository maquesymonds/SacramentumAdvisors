"use client";

import { useEffect } from "react";
import Image from "next/image";
import { lenisRef }      from "@/lib/lenis-ref";
import { useT, useLocalePath } from "@/lib/locale-context";
import { useRouter } from "next/navigation";

// ── Home hero — static, one layout for every width ───────────────────────────
// Replaced the scroll-driven "window" intro: the H1 is visible on first paint
// and the background goes through next/image (sized per screen, preloaded).
export default function IntroReveal() {
  const copy   = useT();
  const router = useRouter();
  const { path } = useLocalePath();

  useEffect(() => {
    // Links to Home from other pages still set skipIntro; the hero is at the top now
    if (sessionStorage.getItem("skipIntro") === "1") {
      sessionStorage.removeItem("skipIntro");
      const lenis = lenisRef.current;
      if (lenis) lenis.scrollTo(0, { immediate: true });
      else window.scrollTo({ top: 0 });
    }
    window.dispatchEvent(new CustomEvent("intro-nav-ready"));
  }, []);

  return (
    <div
      id="home"
      style={{
        position:       "relative",
        height:         "100vh",
        overflow:       "hidden",
        display:        "flex",
        alignItems:     "center",
        justifyContent: "center",
        textAlign:      "center",
        padding:        "0 clamp(1.25rem, 5vw, 4rem)",
      }}
    >
      {/* Background landscape */}
      <Image
        src="/images/uruguay.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={70}
        style={{ objectFit: "cover", objectPosition: "center 26%", zIndex: 0 }}
      />

      {/* Dark overlay */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1 }} />

      {/* Scroll hint */}
      <div
        aria-hidden="true"
        className="hidden lg:flex"
        style={{
          position:       "absolute",
          bottom:         "2.5rem",
          left:           "50%",
          transform:      "translateX(-50%)",
          zIndex:         3,
          flexDirection:  "column",
          alignItems:     "center",
          gap:            "0.5rem",
          color:          "rgba(255,255,255,0.7)",
          pointerEvents:  "none",
        }}
      >
        <span style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 500 }}>
          {copy.hero.scrollLabel}
        </span>
        <div style={{ width: 1, height: "2.5rem", background: "linear-gradient(to bottom, rgba(255,255,255,0.7), transparent)", animation: "scrollPulse 1.8s ease-in-out infinite" }} />
      </div>

      {/* Hero text */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "min(90vw, 1080px)", width: "100%" }}>

        <h1
          style={{
            fontWeight:    300,
            color:         "white",
            lineHeight:    1.1,
            marginBottom:  "1.5rem",
            fontSize:      "clamp(2.2rem, 5.5vw, 4.8rem)",
            letterSpacing: "-0.03em",
            whiteSpace:    "pre-line",
          }}
        >
          {copy.hero.headline}
        </h1>

        <p
          style={{
            color:        "white",
            lineHeight:   1.65,
            fontSize:     "clamp(1rem, 1.5vw, 1.2rem)",
            maxWidth:     "680px",
            margin:       "0 auto 2.5rem",
            opacity:      0.9,
          }}
        >
          {copy.hero.subheadline}
        </p>

        <button
          onClick={() => router.push(path("contact"))}
          className="hero-cta"
          style={{
            display:        "inline-flex",
            alignItems:     "center",
            gap:            "0.5rem",
            padding:        "1.1rem 2.5rem",
            color:          "#111F30",
            fontWeight:     500,
            fontSize:       "1rem",
            letterSpacing:  "0",
            fontFamily:     "inherit",
            borderRadius:   "50px",
            background:     "white",
            border:         "none",
            cursor:         "pointer",
            transition:     "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease",
            boxShadow:      "0 4px 20px rgba(0,0,0,0.15)",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget;
            el.style.transform  = "scale(1.08)";
            el.style.boxShadow  = "0 8px 32px rgba(0,0,0,0.22)";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget;
            el.style.transform  = "scale(1)";
            el.style.boxShadow  = "0 4px 20px rgba(0,0,0,0.15)";
          }}
        >
          {copy.hero.cta}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ transition: "transform 0.25s ease" }}>
            <path d="M2 12L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

      </div>
    </div>
  );
}
