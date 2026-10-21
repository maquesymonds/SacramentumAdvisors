"use client";

/* ─────────────────────────────────────────────────────────────────────────────
   FaqHover — on desktop a question opens when the mouse rests on it
   Ported from Katzer. Click and the + keep working; this only adds a second
   way to open. Only with a real mouse ((hover: hover) and (pointer: fine)).
   Opens after 120 ms on the same card: opening one closes the previous
   (shared `name` on the <details>), everything below shifts, and without the
   wait the mouse would land on — and open — another card. Leaving the list
   closes what the hover opened; a card opened by click stays open.
   ─────────────────────────────────────────────────────────────────────────── */

import { useEffect, useRef } from "react";

const WAIT_MS = 120;

export default function FaqHover() {
  const anchor = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const list = anchor.current?.parentElement?.querySelector<HTMLElement>("[data-faq-list]");
    if (!list) return;
    const mouse = window.matchMedia("(hover: hover) and (pointer: fine)");
    let timer: number | undefined;
    let byHover: HTMLDetailsElement | null = null;

    const over = (e: PointerEvent) => {
      if (!mouse.matches || e.pointerType !== "mouse") return;
      const item = (e.target as HTMLElement).closest<HTMLDetailsElement>("details");
      window.clearTimeout(timer);
      if (!item || item.open) return;
      timer = window.setTimeout(() => {
        item.open = true;
        byHover = item;
      }, WAIT_MS);
    };
    const leave = () => {
      window.clearTimeout(timer);
      if (byHover?.open) byHover.open = false;
      byHover = null;
    };
    const click = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("summary")) {
        window.clearTimeout(timer);
        byHover = null;
      }
    };

    list.addEventListener("pointerover", over);
    list.addEventListener("pointerleave", leave);
    list.addEventListener("click", click);
    return () => {
      window.clearTimeout(timer);
      list.removeEventListener("pointerover", over);
      list.removeEventListener("pointerleave", leave);
      list.removeEventListener("click", click);
    };
  }, []);

  return <span ref={anchor} hidden />;
}
