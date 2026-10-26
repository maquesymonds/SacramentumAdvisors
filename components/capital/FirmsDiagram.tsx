"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cs from "@/components/capital/capital.module.css";

// Capital and Advisors as two nodes on one line, the hero's dot-and-line motif
// (Maque, 25.10.2026). Tied to the scroll (Maque, 26.10.2026): the line draws
// from Capital to Advisors as you scroll past it, Capital's node pops in when
// the line starts and Advisors' when the line reaches it, each with a ripple.
// Scrolling back up un-draws it. The line's progress is a CSS variable
// (--line), so the phone layout's vertical line (a ::after) follows it too.
// Without JS or with reduced motion: drawn. Decorative for screen readers:
// the statement above already says the same in words.
export interface Firm { name: string; tagline: string; items: string[] }

export default function FirmsDiagram({ firms }: { firms: [Firm, Firm] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const dots = root.querySelectorAll<HTMLElement>("[data-firm-dot]");
      const rings = root.querySelectorAll<HTMLElement>("[data-firm-ring]");
      const tl = gsap.timeline({
        scrollTrigger: { trigger: root, start: "top 80%", end: "top 35%", scrub: 0.6 },
      });
      tl.set(root, { "--line": 0 }, 0)
        .fromTo(dots[0], { scale: 0 }, { scale: 1, duration: 0.15, ease: "back.out(3)" }, 0)
        .fromTo(rings[0], { scale: 0.6, opacity: 0.8 }, { scale: 2.8, opacity: 0, duration: 0.3, ease: "power2.out", immediateRender: false }, 0.05)
        .to(root, { "--line": 1, duration: 0.7, ease: "none" }, 0.1)
        .fromTo(dots[1], { scale: 0 }, { scale: 1, duration: 0.15, ease: "back.out(3)" }, 0.8)
        .fromTo(rings[1], { scale: 0.6, opacity: 0.8 }, { scale: 2.8, opacity: 0, duration: 0.3, ease: "power2.out", immediateRender: false }, 0.85);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={cs.firms} aria-hidden="true">
      <span className={cs.firmsLine} />
      {firms.map(f => (
        <div key={f.name} className={cs.firm}>
          <span className={cs.firmDot} data-firm-dot />
          <span className={cs.firmRing} data-firm-ring />
          <b>{f.name}</b>
          <span className={cs.firmTagline}>{f.tagline}</span>
          <ul>{f.items.map(it => <li key={it}>{it}</li>)}</ul>
        </div>
      ))}
    </div>
  );
}
