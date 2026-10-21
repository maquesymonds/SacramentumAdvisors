"use client";

import { useEffect } from "react";

// Behaviour for the stacked cards ([data-stack], see stack.module.css):
// 1. All cards leave together: each earlier card gets a bottom margin so its
//    sticky release point equals the last card's (Web System S7, measured).
// 2. The card being covered shrinks up to 5.5 % and darkens (--cover).
// Runs once per page; without JS the cards simply scroll as a list.
export default function StackCover() {
  useEffect(() => {
    const lists = Array.from(document.querySelectorAll<HTMLElement>("[data-stack]"));
    if (!lists.length) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const equalise = () => lists.forEach(list => {
      const lis = Array.from(list.children) as HTMLElement[];
      const cards = lis.map(li => li.firstElementChild as HTMLElement | null);
      lis.forEach(li => { li.style.marginBottom = ""; });
      cards.forEach(c => { if (c) c.style.minHeight = ""; });
      delete list.dataset.flat;
      if (lis.length < 2 || getComputedStyle(lis[0]).position !== "sticky") return;
      // A card taller than the space under its sticky top would be covered
      // before it is read (long copy on a phone): show the cards as a list.
      const room = (li: HTMLElement) => window.innerHeight - (parseFloat(getComputedStyle(li).top) || 0) - 16;
      if (lis.some(li => li.offsetHeight > room(li))) { list.dataset.flat = "1"; lis.forEach(li => { li.style.transform = ""; li.style.setProperty("--cover", "0"); }); return; }
      // Same height for every card, so the pile is even
      const tallest = Math.max(...cards.map(c => c?.offsetHeight ?? 0));
      cards.forEach(c => { if (c) c.style.minHeight = `${tallest}px`; });
      // Release point of a sticky card = its sticky top + height + bottom margin
      const stickyTop = (li: HTMLElement) => parseFloat(getComputedStyle(li).top) || 0;
      const last = lis[lis.length - 1];
      const target = stickyTop(last) + last.offsetHeight;
      lis.slice(0, -1).forEach(li => {
        const d = target - (stickyTop(li) + li.offsetHeight);
        if (d > 0) li.style.marginBottom = `${d}px`;
      });
    });

    const cover = () => lists.forEach(list => {
      if (list.dataset.flat) return;
      const lis = Array.from(list.children) as HTMLElement[];
      lis.forEach((li, i) => {
        const next = lis[i + 1];
        if (!next) { li.style.transform = ""; li.style.setProperty("--cover", "0"); return; }
        const r = li.getBoundingClientRect(), n = next.getBoundingClientRect();
        const c = Math.min(1, Math.max(0, (r.bottom - n.top) / Math.max(1, r.height)));
        li.style.transform = !reduce && c > 0.002 ? `scale(${(1 - c * 0.055).toFixed(4)})` : "";
        li.style.setProperty("--cover", c.toFixed(3));
      });
    });

    let raf = 0;
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(cover); };
    let t = 0;
    const onResize = () => { clearTimeout(t); t = window.setTimeout(() => { equalise(); cover(); }, 150); };

    equalise(); cover();
    document.fonts?.ready.then(() => { equalise(); cover(); });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf); clearTimeout(t);
    };
  }, []);
  return null;
}
