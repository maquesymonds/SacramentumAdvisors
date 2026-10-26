"use client";

/* ScrollProgress — thin line along the top of the screen that fills as you
   scroll, in place of the browser's scrollbar (hidden in globals.css).
   Maque, 25.10.2026: "arriba, bien finita, horizontal, que se vaya
   rellenando". Writes a transform only, once per frame. */

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const write = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(write); };
    write();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={bar}
      aria-hidden="true"
      style={{
        position: "fixed", top: 0, left: 0, right: 0, height: 2, zIndex: 60,
        backgroundColor: "var(--color-warm)", transform: "scaleX(0)",
        transformOrigin: "0 50%", pointerEvents: "none",
      }}
    />
  );
}
