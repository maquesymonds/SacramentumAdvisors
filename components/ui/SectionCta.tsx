"use client";

/* ─────────────────────────────────────────────────────────────────────────────
   SectionCta — one centred consultation button closing a block of cards
   (Maque, 21.10.2026: an invitation after each strong moment, not only at the
   end). Real <a href> so it is crawlable; plain clicks keep the page
   transition. `id` goes to data-cta for conversion tracking. `scrollTo`: the
   id of an element on this page to scroll to instead (the contact form).

   Looks like the nav's "Reservar consulta" (Maque, 21.10.): sentence case,
   navy with white text; `onDark` flips it to white with navy text, as the nav
   does over dark backgrounds. `href`: another page instead of the contact page.
   ─────────────────────────────────────────────────────────────────────────── */

import { useLocalePath } from "@/lib/locale-context";
import { usePageTransition } from "@/lib/transition-context";
import { lenisRef } from "@/lib/lenis-ref";

export default function SectionCta({ id, label, align = "center", className = "", scrollTo, onDark = false, href: to }: { id: string; label: string; align?: "center" | "start"; className?: string; scrollTo?: string; onDark?: boolean; href?: string }) {
  const { path } = useLocalePath();
  const { navigate } = usePageTransition();
  const href = scrollTo ? `#${scrollTo}` : to ?? path("contact");

  return (
    <div className={`flex ${align === "start" ? "justify-start" : "justify-center"} ${className}`} style={{ marginTop: "clamp(2rem, 4vw, 3rem)" }}>
      <a
        href={href}
        data-cta={id}
        className="inline-block text-base font-medium tracking-[0.03em] rounded-full whitespace-nowrap transition-transform duration-300 ease-out hover:scale-[1.04] motion-reduce:transition-none motion-reduce:hover:scale-100"
        style={{
          padding:         "0.8rem 1.75rem",
          backgroundColor: onDark ? "#FFFFFF" : "var(--color-dark)",
          color:           onDark ? "var(--color-dark)" : "#FFFFFF",
        }}
        onClick={(e) => {
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
          e.preventDefault();
          const target = scrollTo ? document.getElementById(scrollTo) : null;
          if (!scrollTo) navigate(href);
          else if (target && lenisRef.current) lenisRef.current.scrollTo(target, { offset: -140 });
          else target?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        {label}
      </a>
    </div>
  );
}
