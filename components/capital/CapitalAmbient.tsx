"use client";

/* ─────────────────────────────────────────────────────────────────────────────
   CapitalAmbient — the Sacramentum Capital page's background, without cuts
   Ported from SOCIO's Ambient (web/components/Ambient.tsx, after Katzer's
   Umgebung): ONE fixed layer behind the page. Each section names its state in
   data-amb (the footer is always "noche"); the state HOLDS across its
   section, and between two sections the layer crossfades over 70 % of a
   screen, scrubbed by the scroll and read at the viewport's middle — so the
   change sits on the seam, never a line.

   A state = a tilted base gradient + two very large soft lights whose centres
   lie outside the viewport (only their edge shows).

   Without JS the sections keep their solid colours: html[data-cap-amb] (set
   after the first values are written) is what makes them see-through
   (globals.css, "Capital ambient"). Text colours stay with each section.
   ─────────────────────────────────────────────────────────────────────────── */

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Rgb = [number, number, number];
type State = { top: Rgb; bottom: Rgb; a: Rgb; aK: number; b: Rgb; bK: number; grain: number };

const hex = (h: string): Rgb => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16)) as Rgb;
const mixRgb = (x: Rgb, y: Rgb, t: number): Rgb => [0, 1, 2].map(i => x[i] + (y[i] - x[i]) * t) as Rgb;

// Same values as CapitalPage's BG / SECTOR_COLOR and --color-dark
const DEEP = hex("#0C3B38"), MINT = hex("#EDF3F1"), WHITE = hex("#FFFFFF"), NAVY = hex("#111F30");
const ENERGY = hex("#4FA79B"), MA = hex("#84CCC4");

// Two states only, alternating down the page (Maque, 21.10.): the hero's
// green and white. The footer keeps its navy.
const STATES: Record<string, State> = {
  bosque: { top: mixRgb(DEEP, ENERGY, 0.1), bottom: DEEP, a: MA, aK: 0.16, b: ENERGY, bK: 0.14, grain: 0.035 },
  blanco: { top: WHITE, bottom: mixRgb(WHITE, MINT, 0.35), a: MA, aK: 0.06, b: MINT, bK: 0.35, grain: 0.02 },
  noche:  { top: mixRgb(NAVY, DEEP, 0.25), bottom: NAVY, a: ENERGY, aK: 0.06, b: NAVY, bK: 0, grain: 0.035 },
};

const CROSS = 0.7;      // crossfade between two sections, in viewport heights
const MIN_CROSS = 0.35; // shortest crossfade between two different states
const LAG = 0.3;        // seconds the layer takes to follow its target: a guard against jumps

type Mark = { pos: number; state: State };

const mix = (a: number, b: number, t: number) => a + (b - a) * t;
const smooth = (t: number) => t * t * (3 - 2 * t);
const flat = (s: State) => [...s.top, ...s.bottom, ...s.a, ...s.b, s.aK, s.bK, s.grain];

function surfaces(): { el: HTMLElement; state: State }[] {
  const list = Array.from(document.querySelectorAll<HTMLElement>("main > section[data-amb]"))
    .map(el => ({ el, state: STATES[el.dataset.amb ?? ""] ?? STATES.blanco }));
  const footer = document.querySelector<HTMLElement>("footer[role=contentinfo]");
  if (footer) list.push({ el: footer, state: STATES.noche });
  return list.filter(s => s.el.offsetHeight > 0);
}

export default function CapitalAmbient() {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const html = document.documentElement;
    let marks: Mark[] = [];
    let vh = window.innerHeight;

    // Two marks per section with the same state, just inside its top and its
    // bottom, so the state holds in between; the crossfade lies between them.
    const measure = () => {
      vh = window.innerHeight;
      const edge0 = vh * CROSS / 2;
      marks = [];
      for (const { el: s, state } of surfaces()) {
        const r = s.getBoundingClientRect();
        const top = r.top + window.scrollY;
        const edge = Math.min(edge0, r.height * 0.35);
        const start = top + edge, end = top + r.height - edge;
        marks.push({ pos: start, state }, { pos: Math.max(start, end), state });
      }
      const min = vh * MIN_CROSS;
      for (let round = 0; round < 2; round++) {
        for (let i = 1; i < marks.length; i++) {
          const a = marks[i - 1], b = marks[i];
          if (a.state === b.state || b.pos - a.pos >= min) continue;
          const mid = (a.pos + b.pos) / 2;
          a.pos = Math.min(a.pos, mid - min / 2);
          b.pos = Math.max(b.pos, mid + min / 2);
        }
        for (let i = 1; i < marks.length; i++) if (marks[i].pos < marks[i - 1].pos) marks[i].pos = marks[i - 1].pos;
      }
    };

    const at = (y: number): [State, State, number] => {
      if (!marks.length) return [STATES.bosque, STATES.bosque, 0];
      if (y <= marks[0].pos) return [marks[0].state, marks[0].state, 0];
      for (let i = 0; i < marks.length - 1; i++) {
        if (y <= marks[i + 1].pos) {
          return [marks[i].state, marks[i + 1].state, smooth((y - marks[i].pos) / Math.max(1, marks[i + 1].pos - marks[i].pos))];
        }
      }
      const last = marks[marks.length - 1].state;
      return [last, last, 0];
    };

    let shown: number[] | null = null;
    let last = 0, settled = true, running = false, frame = 0, written = "";

    const write = (now = performance.now()) => {
      // Read at the viewport's middle. Not SOCIO's slide to the bottom over
      // the last screen: this footer (with the closing CTA) is taller than
      // half a screen, so its state is reached anyway, and the slide turned
      // the FAQ above it dark too early.
      const [a, b, t] = at(window.scrollY + vh * 0.5);
      const fa = flat(a), fb = flat(b);
      const target = fa.map((v, i) => mix(v, fb[i], t));
      const dt = last ? Math.min(0.1, (now - last) / 1000) : 0;
      last = now;
      if (!shown) shown = target.slice();
      const cur = shown;
      const k = 1 - Math.exp(-dt / LAG);
      for (let i = 0; i < target.length; i++) cur[i] += (target[i] - cur[i]) * k;
      settled = target.every((v, i) => Math.abs(v - cur[i]) < (i < 12 ? 0.5 : 0.002));

      const rgb = (o: number) => `${Math.round(cur[o])} ${Math.round(cur[o + 1])} ${Math.round(cur[o + 2])}`;
      const vars: [string, string][] = [
        ["--amb-top", rgb(0)], ["--amb-bottom", rgb(3)], ["--amb-a", rgb(6)], ["--amb-b", rgb(9)],
        ["--amb-a-k", cur[12].toFixed(3)], ["--amb-b-k", cur[13].toFixed(3)], ["--amb-grain", cur[14].toFixed(4)],
      ];
      const key = vars.map(v => v[1]).join("|");
      if (key !== written) {
        written = key;
        for (const [n, v] of vars) el.style.setProperty(n, v);
      }
      // The nav reads the colour actually under it (the gradient's top), not
      // the section: mid-crossfade they differ (Navigation.tsx).
      const tone = cur[0] * 0.2126 + cur[1] * 0.7152 + cur[2] * 0.0722 < 140 ? "dark" : "light";
      if (html.dataset.capAmbTone !== tone) {
        html.dataset.capAmbTone = tone;
        window.dispatchEvent(new Event("cap-amb-tone"));
      }
      if (!html.hasAttribute("data-cap-amb")) html.setAttribute("data-cap-amb", "");
    };

    const tick = (now: number) => {
      write(now);
      if (settled) { running = false; return; }
      frame = requestAnimationFrame(tick);
    };
    const kick = () => {
      if (running) return;
      running = true;
      last = performance.now();
      frame = requestAnimationFrame(tick);
    };
    const remeasure = () => { measure(); kick(); };

    measure();
    write();
    let roFrame = 0;
    const ro = new ResizeObserver(() => { cancelAnimationFrame(roFrame); roFrame = requestAnimationFrame(remeasure); });
    ro.observe(document.body);
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", remeasure);
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(roFrame);
      ro.disconnect();
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", remeasure);
      html.removeAttribute("data-cap-amb");
      delete html.dataset.capAmbTone;
      window.dispatchEvent(new Event("cap-amb-tone"));
    };
  }, [mounted]);

  // On <body>, out of the page wrapper: a fixed layer inside an ancestor with
  // opacity or transform (the page transition) would stop being fixed.
  if (!mounted) return null;
  return createPortal(
    <div ref={ref} className="cap-ambient" aria-hidden="true">
      <div className="cap-ambient__grain" />
    </div>,
    document.body,
  );
}
