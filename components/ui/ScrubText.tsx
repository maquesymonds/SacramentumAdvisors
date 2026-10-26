"use client";

import { useEffect, useRef } from "react";

// Big statement that lights up word by word as it scrolls through the viewport
// (ported from SOCIO's home "Qué hacemos", after trionn.com "About"). Scroll-
// scrubbed: scrolling back dims it again. The full text is in the HTML from the
// start (crawlable); only each word's --lit (0 → 1) changes. Reduced motion: fully lit.
const START = 0.85; // lighting starts when the text's top reaches this share of the viewport
const END   = 0.35; // …and is done when its bottom reaches this share

export default function ScrubText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(/\s+/);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>("[data-scrub-word]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      spans.forEach(s => s.style.setProperty("--lit", "1"));
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const r = el.getBoundingClientRect();
      const from = vh * START, to = vh * END - r.height; // top positions at start / end
      const p = Math.min(1, Math.max(0, (from - r.top) / (from - to)));
      const n = spans.length;
      spans.forEach((s, i) => s.style.setProperty("--lit", String(Math.min(1, Math.max(0, p * n - i)))));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} data-scrub-word="" style={{ opacity: "calc(0.18 + 0.82 * var(--lit, 0))" }}>
          {w}{i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
