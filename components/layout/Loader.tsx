"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function Loader() {
  const [visible, setVisible] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const barRef     = useRef<HTMLDivElement>(null);
  const logoRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on first visit per session
    if (sessionStorage.getItem("loaderSeen")) return;
    sessionStorage.setItem("loaderSeen", "1");
    setVisible(true);

    const overlay = overlayRef.current;
    const bar     = barRef.current;
    const logo    = logoRef.current;
    if (!overlay || !bar || !logo) return;

    // Lock scroll while loader is active
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        setVisible(false);
      },
    });

    // 1. Logo fades in
    tl.from(logo, { opacity: 0, y: 16, duration: 0.7, ease: "power2.out" })
    // 2. Progress bar fills
      .to(bar, { scaleX: 1, duration: 1.1, ease: "power2.inOut" }, 0.3)
    // 3. Brief pause at full
      .to({}, { duration: 0.25 })
    // 4. Logo fades out
      .to(logo, { opacity: 0, y: -12, duration: 0.45, ease: "power2.in" })
    // 5. Overlay slides up to reveal page
      .to(overlay, { yPercent: -100, duration: 0.75, ease: "power3.inOut" }, "-=0.1");

  }, []);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      style={{
        position:        "fixed",
        inset:           0,
        zIndex:          9999,
        backgroundColor: "#111F30",
        display:         "flex",
        flexDirection:   "column",
        alignItems:      "center",
        justifyContent:  "center",
      }}
    >
      {/* Logo */}
      <div ref={logoRef}>
        <Image
          src="/images/Logo.png"
          alt="Sacramentum Advisors"
          width={200}
          height={54}
          priority
          style={{ height: 44, width: "auto", filter: "brightness(0) invert(1)" }}
        />
      </div>

      {/* Progress bar */}
      <div
        style={{
          position:  "absolute",
          bottom:    "2.5rem",
          left:      "clamp(2rem, 8vw, 6rem)",
          right:     "clamp(2rem, 8vw, 6rem)",
          height:    1,
          backgroundColor: "rgba(255,255,255,0.12)",
          borderRadius: 1,
          overflow:  "hidden",
        }}
      >
        <div
          ref={barRef}
          style={{
            width:           "100%",
            height:          "100%",
            backgroundColor: "#CCA87C",
            transformOrigin: "left center",
            transform:       "scaleX(0)",
          }}
        />
      </div>
    </div>
  );
}
