"use client";

/* ─────────────────────────────────────────────────────────────────────────────
   ExportMap — the Technology hero's visual: Uruguay as a platform
   A dot map of the Americas and Western Europe; from Montevideo a line draws
   to each market Inés names in her approved copy (docs/content/
   technology-en.md): the United States, Canada, the UK, Spain and Chile,
   all drawn alike (Maque, 25.10.2026: no line or figure singled out). The
   map is larger than its column and runs off the right edge of the screen.

   Plays once on load (it is the hero, already on screen). The SVG is complete
   on the server: only GSAP hides, at runtime. No JS or reduced motion →
   the finished map. Hooks: data-map-dots · data-map-line · data-map-end ·
   data-map-label.
   ─────────────────────────────────────────────────────────────────────────── */

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { MAP_DOTS, MAP_PINS, MAP_W, type MapPin } from "@/data/tech-export-map";
import s from "./export-map.module.css";

export interface ExportLink { pin: Exclude<MapPin, "mvd">; name: string }

// Vertical crop: from northern Canada to just below Montevideo. The Arctic
// and the tip of Patagonia carry no line, and the full height made the hero
// taller than the screen.
const VIEW_Y0 = 6, VIEW_H = 57;

const DOTS = MAP_DOTS.split(" ").map(p => p.split(",").map(Number) as [number, number]);

/** How far each arc bulges sideways (share of its length; negative = the
    other side): Canada bends west so it never runs on top of the US line. */
// The UK bends one way and Spain the other, so both are curves like the rest
// and their two lines never run on top of each other.
const BEND: Partial<Record<MapPin, number>> = { us: 0.22, ca: -0.18, uk: 0.3, es: -0.14, cl: 0.45 };

/** A quadratic arc from Montevideo */
function arc(to: MapPin): string {
  const [x1, y1] = MAP_PINS.mvd, [x2, y2] = MAP_PINS[to];
  const dx = x2 - x1, dy = y2 - y1, k = BEND[to] ?? 0.2;
  const cx = (x1 + x2) / 2 - dy * k, cy = (y1 + y2) / 2 + dx * k;
  return `M${x1},${y1} Q${cx},${cy} ${x2},${y2}`;
}

/** Label beside the end point; Europe's labels sit left of the pin so they stay on the map */
function labelAt(pin: MapPin): { x: number; y: number; anchor: "start" | "end" } {
  const [x, y] = MAP_PINS[pin];
  if (pin === "uk" || pin === "es") return { x: x - 2.2, y: y + 0.45, anchor: "end" };
  if (pin === "cl") return { x: x - 2.2, y: y + 0.45, anchor: "end" };
  return { x: x + 2.2, y: y + 0.45, anchor: "start" };
}

export default function ExportMap({ origin, links }: { origin: string; links: ExportLink[] }) {
  const ref = useRef<SVGSVGElement>(null);

  // Each label sits in a pill: size the rect to the text's real box (the font
  // size changes on phones, so it can't be estimated in the markup).
  useLayoutEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const fit = () => svg.querySelectorAll<SVGGElement>("[data-map-label]").forEach(g => {
      const text = g.querySelector("text"), rect = g.querySelector("rect");
      if (!text || !rect) return;
      const b = text.getBBox(), px = 0.9, py = 0.45;
      rect.setAttribute("x", String(b.x - px));
      rect.setAttribute("y", String(b.y - py));
      rect.setAttribute("width", String(b.width + px * 2));
      rect.setAttribute("height", String(b.height + py * 2));
      rect.setAttribute("rx", String((b.height + py * 2) / 2));
    });
    fit();
    const mq = window.matchMedia("(max-width: 639px)");
    mq.addEventListener("change", fit);
    return () => mq.removeEventListener("change", fit);
  }, []);

  useEffect(() => {
    const svg = ref.current;
    if (!svg || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });
      tl.fromTo("[data-map-dots]", { opacity: 0 }, { opacity: 1, duration: 1.2, ease: "power2.out" }, 0)
        .fromTo("[data-map-origin]", { scale: 0, transformOrigin: "50% 50%" }, { scale: 1, duration: 0.5, ease: "back.out(2)" }, 0.5)
        .fromTo('[data-map-label="mvd"]', { scale: 0, opacity: 0, transformOrigin: "0% 50%" }, { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(2.4)" }, 0.65);
      svg.querySelectorAll<SVGPathElement>("[data-map-line]").forEach((line, i) => {
        const len = line.getTotalLength();
        const at = 0.8 + i * 0.35;
        const end = svg.querySelector(`[data-map-end="${line.dataset.mapLine}"]`);
        const label = svg.querySelector(`[data-map-label="${line.dataset.mapLine}"]`);
        tl.fromTo(line, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: 1.1, ease: "power2.inOut" }, at)
          .fromTo(end, { scale: 0, transformOrigin: "50% 50%" }, { scale: 1, duration: 0.4, ease: "back.out(2.2)" }, at + 0.95)
          // the name pops in its pill as the line arrives
          .fromTo(label, { scale: 0, opacity: 0, transformOrigin: "50% 50%" }, { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(2.4)" }, at + 1);
      });
    }, svg);
    return () => ctx.revert();
  }, []);

  const [ox, oy] = MAP_PINS.mvd;
  return (
    <figure className={s.map}>
      <svg ref={ref} viewBox={`-2 ${VIEW_Y0} ${MAP_W + 4} ${VIEW_H}`} role="img" aria-label={`${origin}: ${links.map(l => l.name).join(", ")}`}>
        <g data-map-dots className={s.dots}>
          {DOTS.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={0.26} />)}
        </g>
        {links.map(l => (
          <path key={l.pin} d={arc(l.pin)} data-map-line={l.pin} className={s.line} fill="none" />
        ))}
        {links.map(l => {
          const [x, y] = MAP_PINS[l.pin];
          const t = labelAt(l.pin);
          return (
            <g key={l.pin}>
              <circle data-map-end={l.pin} cx={x} cy={y} r={0.55} className={s.end} />
              <g data-map-label={l.pin} className={s.pill}>
                <rect rx={1} />
                <text x={t.x} y={t.y} textAnchor={t.anchor} className={s.label}>{l.name}</text>
              </g>
            </g>
          );
        })}
        <g data-map-origin>
          <circle cx={ox} cy={oy} r={2.2} className={s.pulse} />
          <circle cx={ox} cy={oy} r={0.7} className={s.origin} />
        </g>
        <g data-map-label="mvd" className={`${s.pill} ${s.pillOrigin}`}>
          <rect rx={1} />
          <text x={ox + 2.2} y={oy + 3.2} className={s.originLabel}>{origin}</text>
        </g>
      </svg>
    </figure>
  );
}
