"use client";

/* ─────────────────────────────────────────────────────────────────────────────
   HowRail — "How Sacramentum Capital works" as a route drawn by the scroll
   After christophbauer.de's process section ("So läuft es ab", process-path.js):
   ONE curve that enters from off-screen left, dives under the steps and leaves
   off-screen right. As the scroll draws it, each step comes out when the line
   reaches its x: the foot lands on the curve, the mast rises from it, the
   numbered node lands on top and the text below rises in. Scrubbed, so
   scrolling back up un-draws it.

   Kept lighter than the reference for three steps: no pin (CapitalAmbient
   measures the sections; a pin-spacer would shift them) and no sticky stage.

   Geometry is measured, never hardcoded: the curve passes through each foot
   (its x = the column's centre, its y = --c of the band), so German titles or
   any viewport keep foot, mast and node on one vertical.

   The markup is complete on the server: the curve is the only thing written
   here, and it is decoration. Reduced motion → the curve is drawn whole and
   nothing moves. Phone (< 768px): a straight vertical line, same reveal.
   Hooks: data-rail-curve (svg > path) · data-rail-line · data-rail-step >
   data-rail-node, data-rail-mast, data-rail-foot, data-rail-text.
   ─────────────────────────────────────────────────────────────────────────── */

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WIDE = "(min-width: 768px)";
const LINE = 0.9; // share of the timeline the line takes; the rest lets the last step land

type Pt = [number, number];

/** Catmull-Rom through the points, as cubic Béziers: a smooth curve that
    passes exactly through every foot. */
function smoothPath(p: Pt[]): string {
  let d = `M${p[0][0]},${p[0][1]}`;
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] ?? p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] ?? p2;
    const c1: Pt = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2: Pt = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0]},${c1[1]} ${c2[0]},${c2[1]} ${p2[0]},${p2[1]}`;
  }
  return d;
}

/** Length along the path where it reaches x (binary search). */
function lengthAtX(path: SVGPathElement, total: number, x: number): number {
  let lo = 0, hi = total;
  for (let i = 0; i < 24; i++) {
    const mid = (lo + hi) / 2;
    if (path.getPointAtLength(mid).x < x) lo = mid; else hi = mid;
  }
  return (lo + hi) / 2;
}

export default function HowRail({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    gsap.registerPlugin(ScrollTrigger);
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Already past the start on load: draw it, don't animate it
    const animate = !still && root.getBoundingClientRect().top > window.innerHeight * 0.95;
    let ctx: gsap.Context | null = null;

    const setup = () => {
      ctx?.revert();
      const wide = window.matchMedia(WIDE).matches;
      const steps = Array.from(root.querySelectorAll<HTMLElement>("[data-rail-step]"));
      const q = (s: HTMLElement, h: string) => s.querySelector<HTMLElement>(h);

      // ── Draw the curve (desktop) ──────────────────────────────────────────
      const svg = root.querySelector<SVGSVGElement>("[data-rail-curve]");
      const path = svg?.querySelector("path") ?? null;
      let at: number[] = [];
      if (wide && svg && path) {
        const box = svg.getBoundingClientRect();
        svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);
        const feet: Pt[] = steps.map(s => {
          const f = q(s, "[data-rail-foot]")!.getBoundingClientRect();
          return [f.left + f.width / 2 - box.left, f.top + f.height / 2 - box.top];
        });
        const h = box.height;
        const pts: Pt[] = [[-60, h * 0.5], ...feet, [box.width + 60, h * 0.62]];
        path.setAttribute("d", smoothPath(pts));
        const total = path.getTotalLength();
        at = feet.map(([x]) => (lengthAtX(path, total, x) / total) * LINE);
        path.style.strokeDasharray = `${total}`;
        path.style.strokeDashoffset = "0";
      } else {
        const line = root.querySelector<HTMLElement>("[data-rail-line]");
        if (line) {
          const lr = line.getBoundingClientRect();
          at = steps.map(s => {
            const n = q(s, "[data-rail-node]")!.getBoundingClientRect();
            return Math.min(1, Math.max(0, (n.top + n.height / 2 - lr.top) / Math.max(1, lr.height))) * LINE;
          });
        }
      }
      if (!animate) return;

      // ── Animate ───────────────────────────────────────────────────────────
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          // Earlier than before (Maque, 25.10.2026: "aparece muy tarde"): the
          // route is complete while the steps are still in the lower half.
          scrollTrigger: { trigger: root, start: wide ? "top 85%" : "top 90%", end: wide ? "top 38%" : "bottom 75%", scrub: 0.7 },
        });
        if (wide && path) {
          const total = path.getTotalLength();
          tl.fromTo(path, { strokeDashoffset: total }, { strokeDashoffset: 0, duration: 1, ease: "none" }, 0);
        } else {
          tl.fromTo("[data-rail-line]", { scaleY: 0, transformOrigin: "50% 0%" }, { scaleY: 1, duration: LINE, ease: "none" }, 0);
        }
        steps.forEach((s, i) => {
          const t = at[i] ?? (i / steps.length) * LINE;
          const foot = q(s, "[data-rail-foot]"), mast = q(s, "[data-rail-mast]");
          if (wide && foot && mast) {
            tl.fromTo(foot, { scale: 0 }, { scale: 1, duration: 0.03, ease: "back.out(2)" }, t)
              // the mast rises out of the curve: grows from its bottom
              .fromTo(mast, { scaleY: 0, transformOrigin: "50% 100%" }, { scaleY: 1, duration: 0.07, ease: "power2.out" }, t + 0.02);
          }
          tl.fromTo(q(s, "[data-rail-node]"), { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.06, ease: "back.out(1.6)" }, t + (wide ? 0.08 : 0))
            .fromTo(q(s, "[data-rail-text]"), { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.1, ease: "power3.out" }, t + (wide ? 0.1 : 0.04));
        });
      }, root);
    };

    setup();
    let timer: number | undefined;
    let lastW = window.innerWidth;
    const onResize = () => {
      if (window.innerWidth === lastW) return; // phones fire resize on scroll (toolbar)
      lastW = window.innerWidth;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => { setup(); ScrollTrigger.refresh(); }, 200);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("resize", onResize);
      ctx?.revert();
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
