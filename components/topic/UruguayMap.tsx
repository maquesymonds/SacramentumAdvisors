"use client";

/* ─────────────────────────────────────────────────────────────────────────────
   UruguayMap — the hero visual of the Real estate and Farmland pages
   Same family as Technology's ExportMap (dot map, pill labels that pop):
     · places — a close-up of the south coast, Montevideo to José Ignacio
       (Maque, 25.10.2026: the whole country was too far to read four places
       this close together); each place lands with its name in a pill on the
       water below, on a short leader line.
     · land   — the page's own figure made visible: the dots light up until
       the share of productive land is covered (90 %+), then the figure pops.
   Plays once on load (it is the hero). The SVG is complete on the server:
   only GSAP hides, at runtime; no JS or reduced motion → the finished map.
   ─────────────────────────────────────────────────────────────────────────── */

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { UY_DOTS, UY_H, UY_W, UY_ZONES, type UyZone } from "@/data/uruguay-map";
import { COAST_DOTS, COAST_H, COAST_PINS, COAST_W } from "@/data/uruguay-coast";
import s from "./uruguay-map.module.css";

export type UruguayMapProps =
  | { kind: "places"; pins: { pin: Place; name: string }[] }
  | { kind: "land"; share: number; value: string; label: string }
  | { kind: "zones"; zones: { zone: UyZone; name: string }[] };

type Place = keyof typeof COAST_PINS;
const parse = (dots: string) => dots.split(" ").map(p => p.split(",").map(Number) as [number, number]);
const COUNTRY = parse(UY_DOTS);
const COAST = parse(COAST_DOTS);

/** Stable pseudo-random rank per dot (0..1), so the lit share is the same on
    the server and in the browser */
const rank = (i: number) => {
  const x = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
};

/** How far below its place each name sits, on the water. Punta del Este
    drops a row deeper: it sits between Piriápolis and José Ignacio. */
const DROP: Record<Place, number> = { mvd: 4, pir: 4, pde: 7.5, jig: 4 };
const BELOW = 10; // room under the coast for the pills, in grid units

/** Zones: the dots around each zone light up (radius in grid units), and its
    name sits beside it — right of the interior, left of the sierras, under
    the coast — so the three never collide. */
const ZONE: Record<UyZone, { r: number; dx: number; dy: number; anchor: "start" | "middle" | "end" }> = {
  campos:  { r: 6.5, dx: 0,    dy: -8.5, anchor: "middle" },
  sierras: { r: 3.2, dx: -4.5, dy: 0.4,  anchor: "end" },
  costa:   { r: 2.6, dx: 0,    dy: 4.6,  anchor: "middle" },
};

export default function UruguayMap(props: UruguayMapProps) {
  const ref = useRef<SVGSVGElement>(null);

  // Pills: size each rect to its text's real box (font size changes on phones)
  useLayoutEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const fit = () => svg.querySelectorAll<SVGGElement>("[data-uy-pill]").forEach(g => {
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
      tl.fromTo("[data-uy-dots]", { opacity: 0 }, { opacity: 1, duration: 1, ease: "power2.out" }, 0);
      if (props.kind === "zones") {
        svg.querySelectorAll<SVGGElement>("[data-uy-zone]").forEach((g, i) => {
          const at = 0.7 + i * 0.45;
          tl.fromTo(g.querySelectorAll("[data-uy-zone-dot]"), { opacity: 0 }, { opacity: 1, duration: 0.3, stagger: { amount: 0.35, from: "center" } }, at)
            .fromTo(g.querySelector("[data-uy-dot]"), { scale: 0, transformOrigin: "50% 50%" }, { scale: 1, duration: 0.4, ease: "back.out(2.4)" }, at + 0.2)
            .fromTo(g.querySelector("[data-uy-pill]"), { scale: 0, opacity: 0, transformOrigin: "50% 50%" }, { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(2.4)" }, at + 0.35);
        });
      } else if (props.kind === "places") {
        svg.querySelectorAll<SVGGElement>("[data-uy-place]").forEach((g, i) => {
          const at = 0.7 + i * 0.35;
          tl.fromTo(g.querySelector("[data-uy-dot]"), { scale: 0, transformOrigin: "50% 50%" }, { scale: 1, duration: 0.4, ease: "back.out(2.4)" }, at)
            .fromTo(g.querySelector("[data-uy-leader]"), { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" }, at + 0.1)
            .fromTo(g.querySelector("[data-uy-pill]"), { scale: 0, opacity: 0, transformOrigin: "50% 50%" }, { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(2.4)" }, at + 0.25);
        });
      } else {
        // the productive share lights up, in a scattered order, then the figure pops
        tl.fromTo("[data-uy-lit] circle", { opacity: 0 }, { opacity: 1, duration: 0.25, stagger: { amount: 1.8, from: "random" } }, 0.6)
          .fromTo("[data-uy-pill]", { scale: 0, opacity: 0, transformOrigin: "50% 50%" }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2.2)" }, 2.3);
      }
    }, svg);
    return () => ctx.revert();
  }, [props.kind]);

  const pad = 2;
  const places = props.kind === "places";
  const DOTS = places ? COAST : COUNTRY;
  const W = places ? COAST_W : UY_W;
  const h = places ? COAST_H + BELOW : UY_H + (props.kind === "zones" ? 6 : 0);
  const label = props.kind === "places" ? props.pins.map(p => p.name).join(", ")
    : props.kind === "zones" ? props.zones.map(z => z.name).join(", ")
    : `${props.value} ${props.label}`;

  return (
    <figure className={`${s.map} ${props.kind === "places" ? s.places : props.kind === "zones" ? s.zones : s.land}`}>
      <svg ref={ref} viewBox={`${-pad} ${-pad} ${W + pad * 2} ${h + pad * 2}`} role="img" aria-label={label}>
        <g data-uy-dots className={s.dots}>
          {DOTS.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={0.3} />)}
        </g>

        {props.kind === "land" && (
          <>
            <g data-uy-lit className={s.lit}>
              {DOTS.map(([x, y], i) => rank(i) < props.share ? <circle key={i} cx={x} cy={y} r={0.3} /> : null)}
            </g>
            <g data-uy-pill className={`${s.pill} ${s.pillFigure}`}>
              <rect />
              <text x={UY_W * 0.47} y={UY_H * 0.5} textAnchor="middle" className={s.figure}>{props.value}</text>
            </g>
          </>
        )}

        {props.kind === "zones" && props.zones.map(z => {
          const [x, y] = UY_ZONES[z.zone];
          const c = ZONE[z.zone];
          return (
            <g key={z.zone} data-uy-zone>
              {DOTS.map(([dx, dy], i) => Math.hypot(dx - x, dy - y) <= c.r
                ? <circle key={i} data-uy-zone-dot cx={dx} cy={dy} r={0.3} className={s.zoneDot} /> : null)}
              <circle data-uy-dot cx={x} cy={y} r={0.75} className={s.pin} />
              <g data-uy-pill className={s.pill}>
                <rect />
                <text x={x + c.dx} y={y + c.dy} textAnchor={c.anchor} className={s.zoneLabel}>{z.name}</text>
              </g>
            </g>
          );
        })}

        {props.kind === "places" && props.pins.map(p => {
          const [x, y] = COAST_PINS[p.pin];
          const drop = DROP[p.pin];
          return (
            <g key={p.pin} data-uy-place>
              <line data-uy-leader x1={x} y1={y + 0.7} x2={x} y2={y + drop - 1.2} className={s.leader} />
              <circle data-uy-dot cx={x} cy={y} r={0.75} className={s.pin} />
              <g data-uy-pill className={s.pill}>
                <rect />
                <text x={x} y={y + drop + 0.4} textAnchor="middle" className={s.label}>{p.name}</text>
              </g>
            </g>
          );
        })}
      </svg>
    </figure>
  );
}
