"use client";

/* ─────────────────────────────────────────────────────────────────────────────
   ItemReveal — list items and cards rise in one by one, tied to the scroll
   Same motion as FRANKONIA (item-reveal "strong") and Katzer (Auftritt.tsx):
   per item opacity 0→1, y 48→0, scale 0.97→1, blur(10px)→0, power3.out,
   scrub 0.6.

   A group opts in with `data-reveal-items` (value = selector of its items,
   empty = direct children). Each item gets its own trigger; items side by
   side in one row are staggered by STAGGER px of scroll per column.

   The visible state is the default: only GSAP hides, at runtime. No JS, a
   crawler or reduced motion → everything is simply there. Groups already in
   view on load don't move. The filter is cleared once done (a leftover
   filter keeps a compositing layer per element).
   ─────────────────────────────────────────────────────────────────────────── */

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FROM    = { opacity: 0, y: 48, scale: 0.97, filter: "blur(10px)" };
const START   = 85; // % of viewport: top of the item
const END     = 70;
const SCRUB   = 0.6;
const STAGGER = 56;

function itemsOf(group: HTMLElement): HTMLElement[] {
  const sel = (group.getAttribute("data-reveal-items") ?? "").trim();
  return Array.from(sel ? group.querySelectorAll<HTMLElement>(sel) : (group.children as HTMLCollectionOf<HTMLElement>));
}

/** Column index per item: items with (almost) the same top share a row. */
function columns(items: HTMLElement[]): number[] {
  const tops = items.map(t => t.getBoundingClientRect().top + window.scrollY);
  return tops.map((y, i) => {
    let k = 0;
    for (let j = 0; j < i; j++) if (Math.abs(tops[j] - y) < 8) k++;
    return k;
  });
}

export default function ItemReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const groups = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal-items]"));
    if (!groups.length) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      for (const group of groups) {
        if (group.getBoundingClientRect().top < window.innerHeight * (START / 100)) continue;
        const items = itemsOf(group);
        const col = columns(items);
        items.forEach((item, i) => {
          const clear = () => gsap.set(item, { clearProps: "filter" });
          gsap.fromTo(item, FROM, {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            ease: "power3.out",
            onComplete: clear,
            onUpdate() { if (this.progress() === 1) clear(); },
            scrollTrigger: {
              trigger: item,
              start:   `top+=${col[i] * STAGGER} ${START}%`,
              end:     `top+=${col[i] * STAGGER * 0.5} ${END}%`,
              scrub:   SCRUB,
              onLeave: clear,
              onRefresh: self => { if (self.progress === 1) clear(); },
            },
          });
        });
      }
    });

    // Opening an FAQ answer pushes everything below: re-measure the triggers
    // once the height has settled (the open transition is 420 ms).
    let timer: number | undefined;
    const ro = new ResizeObserver(() => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => ScrollTrigger.refresh(), 200);
    });
    ro.observe(document.body);

    return () => {
      window.clearTimeout(timer);
      ro.disconnect();
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
