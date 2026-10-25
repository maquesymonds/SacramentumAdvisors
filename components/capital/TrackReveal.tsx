"use client";

/* ─────────────────────────────────────────────────────────────────────────────
   TrackReveal — the track-record chart builds itself with the scroll
   Same idea as the numbered step rail (christophbauer): the axis draws left
   to right and each transaction comes out when the line reaches its year —
   stem grows out of the axis, the bubble lands (back.out(1.4)), its labels
   rise in. Scrubbed, so scrolling back up un-draws it.

   The SVG is server-rendered complete: only GSAP hides, at runtime. No JS, a
   crawler or reduced motion → the whole chart is simply there. A chart
   already past the start on load doesn't move.
   Hooks (set in TrackChart): data-track-axis · data-track-deal="<0..1 along
   the axis>" with data-side, and inside it data-stem · data-bubble · data-label.
   ─────────────────────────────────────────────────────────────────────────── */

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const START = "top 85%";
const END   = "bottom 65%";
const SCRUB = 0.7;
const LINE  = 0.9;  // share of the timeline the axis takes to draw; the rest lets the last bubble land

export default function TrackReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (root.getBoundingClientRect().top < window.innerHeight * 0.85) return;
    gsap.registerPlugin(ScrollTrigger);

    // transformOrigin goes in the FROM state: set on the way in, GSAP's
    // smoothOrigin would otherwise shift each SVG element to compensate.
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ scrollTrigger: { trigger: root, start: START, end: END, scrub: SCRUB } });
      tl.fromTo("[data-track-axis]", { scaleX: 0, transformOrigin: "0% 50%" }, { scaleX: 1, duration: LINE, ease: "none" }, 0);

      root.querySelectorAll<SVGGElement>("[data-track-deal]").forEach(deal => {
        const at = Number(deal.dataset.trackDeal) * LINE;
        const up = deal.dataset.side === "up";
        const q = (s: string) => deal.querySelectorAll(s);
        tl.fromTo(q("[data-stem]"),   { scaleY: 0, transformOrigin: up ? "50% 100%" : "50% 0%" }, { scaleY: 1, duration: 0.03, ease: "power2.out" }, at)
          .fromTo(q("[data-bubble]"), { scale: 0, opacity: 0, transformOrigin: "50% 50%" }, { scale: 1, opacity: 1, duration: 0.07, ease: "back.out(1.4)" }, at + 0.02)
          .fromTo(q("[data-label]"),  { opacity: 0, y: up ? 8 : -8 }, { opacity: 1, y: 0, duration: 0.06, ease: "power3.out", stagger: 0.01 }, at + 0.05);
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
