"use client";

/* ─────────────────────────────────────────────────────────────────────────────
   SeamBlend — two adjacent sections whose backgrounds melt into each other
   The home's testimonials (light) → Sacramentum Capital (green), Maque
   21.10.2026: "like on the Capital page, the background changes with a
   gradient — only in that section of the home". Same feel as CapitalAmbient
   but local: the wrapper carries ONE background colour, mixed from `from` to
   `to` across 70 % of a screen around the seam between the two sections,
   scrubbed by the scroll and read at the viewport's middle.

   Without JS each section keeps its own solid colour: only once the first
   colour is written (data-ready) do the sections turn see-through.
   ─────────────────────────────────────────────────────────────────────────── */

import { useEffect, useRef, type ReactNode } from "react";
import s from "./seam-blend.module.css";

type Rgb = [number, number, number];
const hex = (h: string): Rgb => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16)) as Rgb;
const smooth = (t: number) => t * t * (3 - 2 * t);
const CROSS = 0.7; // crossfade length, in viewport heights (same as CapitalAmbient)

export default function SeamBlend({ from, to, children }: { from: string; to: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const a = hex(from), b = hex(to);
    let frame = 0;

    const write = () => {
      // The seam = top of the second section inside the wrapper
      const second = el.children[1] as HTMLElement | undefined;
      if (!second) return;
      const vh = window.innerHeight;
      const seam = second.getBoundingClientRect().top + window.scrollY;
      const y = window.scrollY + vh * 0.5;
      const t = smooth(Math.min(1, Math.max(0, (y - (seam - vh * CROSS / 2)) / (vh * CROSS))));
      const c = a.map((v, i) => Math.round(v + (b[i] - v) * t));
      el.style.backgroundColor = `rgb(${c[0]} ${c[1]} ${c[2]})`;
      if (!el.hasAttribute("data-ready")) el.setAttribute("data-ready", "");
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
  }, [from, to]);

  return <div ref={ref} className={s.wrap}>{children}</div>;
}
