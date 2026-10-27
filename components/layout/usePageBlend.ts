"use client";

/* ─────────────────────────────────────────────────────────────────────────────
   usePageBlend — every change of background colour is a blend, never a cut
   Maque 25.10.2026, the whole site: wherever the page goes from one colour to
   another (section to section, the last section to the footer) the screen
   melts from one to the other as you scroll, like the Capital page
   (CapitalAmbient). Never a horizontal edge between two colours.

   The page is read as a column of bands (the full-width blocks of <main>,
   then the footer), each with the colour it paints. At any moment the visible
   bands, the body and the footer share ONE colour: the band under the
   viewport's middle, mixed into its neighbour across 70 % of a screen around
   their seam (less when a band is shorter), scrubbed by the scroll.

   Bands that drive their own colour while pinned (Why Uruguay's chapters,
   Services' carousel) are marked data-bg-live: left alone while they run,
   blended only at their edges. Sacramentum Capital already does this
   (CapitalAmbient): nothing here. Without JS each block keeps its own colour.
   ─────────────────────────────────────────────────────────────────────────── */

import { useEffect, type RefObject } from "react";

type Rgb = [number, number, number];
const smooth = (t: number) => t * t * (3 - 2 * t);
const CROSS = 0.7; // crossfade length, in viewport heights (same as CapitalAmbient)

/** Opaque computed background as RGB, or null when (partly) see-through */
function opaqueBg(el: Element): Rgb | null {
  const m = getComputedStyle(el).backgroundColor.match(/[\d.]+/g);
  if (!m || (m.length > 3 && Number(m[3]) < 1)) return null;
  return [Number(m[0]), Number(m[1]), Number(m[2])];
}
const mix = (a: Rgb, b: Rgb, t: number) => a.map((v, i) => Math.round(v + (b[i] - v) * t)) as Rgb;
// Relative luminance (WCAG): below this a background wants light text
const isDark = ([r, g, b]: Rgb) => {
  const lin = (v: number) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b) < 0.18;
};

type Band = {
  el:      Element;        // the block whose box is the band
  paint:   HTMLElement[];  // what carries its colour
  colour:  Rgb;
  live?:   HTMLElement;    // drives its own colour (data-bg-live)
  holding?: boolean;       // live band currently painted by us
};

// Capital's sections carry data-amb from the server HTML; data-cap-amb only
// arrives a render later, and in between the hero's title and subtitle were
// painted as solid bands for ~0.7 s (Maque, 26.10.2026).
const cap = () =>
  document.documentElement.hasAttribute("data-cap-amb") || !!document.querySelector("main > section[data-amb]");

export function usePageBlend(footerRef: RefObject<HTMLElement>, key?: string) {
  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    let bands: Band[] = [];
    // Painted elements carry data-blend; globals.css gives them var(--page-blend).
    // A rule, not inline styles: ScrollTrigger rewrites a pinned element's style.
    const painted = new Set<HTMLElement>();
    let frame = 0, rebuildTimer = 0;

    const paintEl = (el: HTMLElement) => {
      if (painted.has(el)) return;
      el.setAttribute("data-blend", "");
      painted.add(el);
    };
    const releaseEl = (el: HTMLElement) => {
      el.removeAttribute("data-blend");
      el.removeAttribute("data-blend-tone");
      painted.delete(el);
    };
    const restore = () => {
      Array.from(painted).forEach(releaseEl);
      document.documentElement.style.removeProperty("--page-blend");
    };

    const build = () => {
      restore();
      bands = [];
      let main = footer.previousElementSibling;
      while (main && main.tagName !== "MAIN") main = main.previousElementSibling;
      if (!main || cap()) return;

      const W = main.getBoundingClientRect().width;
      const fullWidth = (el: Element) => {
        const r = el.getBoundingClientRect();
        const pos = getComputedStyle(el).position;
        return r.width >= W * 0.9 && r.height > 0 && pos !== "fixed" && pos !== "absolute";
      };
      const visit = (el: Element, inherited: Rgb, isMain = false) => {
        const own  = opaqueBg(el) ?? inherited;
        const kids = Array.from(el.children).filter(fullWidth);
        if (!el.matches("[data-bg-live]") && (isMain || kids.length >= 2) && kids.length > 0) {
          kids.forEach(k => visit(k, own));
          return;
        }
        // A pinned live block sits inside ScrollTrigger's spacer: the spacer is the band
        const live = el.matches("[data-bg-live]") ? el : el.querySelector("[data-bg-live]");
        if (live) {
          bands.push({ el, paint: [], colour: opaqueBg(live) ?? own, live: live as HTMLElement });
          return;
        }
        // Down the chain of children that cover the band: the innermost opaque one is what shows
        const paint = [el as HTMLElement];
        let colour = own;
        for (let c = el; c.children.length === 1 && fullWidth(c.children[0]); ) {
          c = c.children[0];
          const bg = opaqueBg(c);
          if (bg) { colour = bg; paint.push(c as HTMLElement); }
        }
        bands.push({ el, paint, colour });
      };
      const body = opaqueBg(document.body) ?? [255, 255, 255];
      visit(main, body, true);
      const fc = opaqueBg(footer);
      if (fc) bands.push({ el: footer, paint: [footer], colour: fc });
      // One colour all the way: nothing to blend
      if (bands.every(b => !b.live && b.colour.every((v, i) => v === bands[0].colour[i]))) bands = [];
    };

    const colourOf = (b: Band): Rgb => (b.live && !b.holding ? opaqueBg(b.live) ?? b.colour : b.colour);

    const write = () => {
      if (cap()) { restore(); return; }
      if (!bands.length) return;
      const vh   = window.innerHeight;
      const y    = vh * 0.5;
      const half = vh * CROSS / 2;
      const rects = bands.map(b => b.el.getBoundingClientRect());

      // Which band holds the middle, and does a live band run there?
      let k = rects.findIndex(r => y < r.bottom);
      if (k < 0) k = bands.length - 1;
      bands.forEach((b, i) => {
        if (!b.live) return;
        const r = rects[i];
        const h = Math.min(half, r.height / 2);
        const running = y >= r.top + h && y <= r.bottom - h;
        if (running && b.holding) { releaseEl(b.live); b.holding = false; }
        if (!running && !b.holding) { b.colour = opaqueBg(b.live) ?? b.colour; b.holding = true; }
      });

      // Each band holds its colour except within h of its edges; between two
      // bands the colour runs from one hold to the next.
      // A blend always finishes within the scroll there is: at the very top or
      // bottom of the page (a short footer) the middle can't travel any further.
      const minY = y - window.scrollY;
      const maxY = minY + document.documentElement.scrollHeight - vh;
      const progress = (from: number, to: number) => {
        from = Math.max(from, minY); to = Math.min(to, maxY);
        return to <= from ? (y >= to ? 1 : 0) : smooth(Math.min(1, Math.max(0, (y - from) / (to - from))));
      };
      const r = rects[k];
      const h = Math.min(half, r.height / 2);
      let c = colourOf(bands[k]);
      if (y < r.top + h && k > 0) {
        const p = rects[k - 1], ph = Math.min(half, p.height / 2);
        c = mix(colourOf(bands[k - 1]), c, progress(p.bottom - ph, r.top + h));
      } else if (y > r.bottom - h && k < bands.length - 1) {
        const n = rects[k + 1], nh = Math.min(half, n.height / 2);
        c = mix(c, colourOf(bands[k + 1]), progress(r.bottom - h, n.top + nh));
      }

      // A custom property on <html> restyles the whole page: write it only
      // when the colour moves, not on every scroll frame inside one band
      const value = `rgb(${c[0]} ${c[1]} ${c[2]})`;
      const root = document.documentElement;
      if (root.style.getPropertyValue("--page-blend") !== value) root.style.setProperty("--page-blend", value);
      paintEl(document.body);
      // A section made for the other tone switches its text when the colour
      // crosses over (light text on a darkened light section, and back)
      const dark = isDark(c);
      bands.forEach(b => {
        b.paint.forEach(paintEl);
        if (b.live && b.holding) paintEl(b.live);
        if (b.el === footer || b.live) return;
        const el = b.el as HTMLElement;
        const tone = dark !== isDark(b.colour) ? (dark ? "dark" : "light") : null;
        if (el.getAttribute("data-blend-tone") === tone) return;
        if (tone) el.setAttribute("data-blend-tone", tone);
        else el.removeAttribute("data-blend-tone");
      });
    };

    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(write); };
    // Pins and late layout (ScrollTrigger spacers, images) move the bands: read them again
    const rebuild = () => { window.clearTimeout(rebuildTimer); rebuildTimer = window.setTimeout(() => { build(); write(); }, 200); };

    build();
    write();
    const late = window.setTimeout(rebuild, 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", rebuild);
    window.addEventListener("load", rebuild);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(rebuildTimer);
      window.clearTimeout(late);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", rebuild);
      window.removeEventListener("load", rebuild);
      restore();
    };
  }, [footerRef, key]);
}
