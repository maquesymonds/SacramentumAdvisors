"use client";

/* ReviewPanel — floating list of what Inés still has to confirm. The only
   place review notes show: no boxes inside the page, they shifted the layout
   (Maque, 25.10.2026). Each page lists only its own notes; the site-wide and
   per-language ones go on the home. Review mode only. */

import { useState } from "react";
import { usePathname } from "next/navigation";
import { parsePublicPath, isTopicId } from "@/lib/i18n";
import { REVIEW_MODE } from "@/lib/review";
import { SITE_REVIEW, PAGE_REVIEW, LOCALE_REVIEW } from "@/data/review-pages";
import { topicReview, allNotes } from "@/data/review-flags";
import type { ReviewNote } from "@/lib/review";

const WHOLE_PAGE: ReviewNote = { kind: "redaccion", pregunta: "Toda esta página es texto nuevo: leerla completa, de arriba abajo. Abajo, los puntos concretos." };
import ReviewFlag from "./ReviewFlag";

export default function ReviewPanel() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  if (!REVIEW_MODE) return null;

  const parsed = parsePublicPath(pathname);
  const page   = parsed?.page;
  const locale = parsed?.locale;
  const rv     = page && isTopicId(page) ? topicReview(page) : undefined;
  const isHome = page === "home";

  const pageNotes = [
    ...(rv?.wholePage ? [WHOLE_PAGE] : []),
    ...(page ? PAGE_REVIEW[page] ?? [] : []),
    ...allNotes(rv),
  ];
  const langNotes = isHome && locale ? LOCALE_REVIEW[locale] ?? [] : [];
  const siteNotes = isHome ? SITE_REVIEW : [];
  const total     = pageNotes.length + langNotes.length + siteNotes.length;
  if (!total) return null;

  return (
    <div style={{ position: "fixed", left: 16, bottom: 16, zIndex: 9000, maxWidth: "min(440px, calc(100vw - 32px))" }}>
      {open && (
        <div
          style={{
            maxHeight: "70vh", overflowY: "auto", marginBottom: 10, padding: 12,
            background: "#FFFFFF", borderRadius: 12, boxShadow: "0 12px 40px rgba(17,31,48,0.25)",
            display: "flex", flexDirection: "column", gap: 10,
          }}
        >
          <ReviewFlag title="Esta página" notes={pageNotes} />
          <ReviewFlag title={`Solo en esta versión (${locale?.toUpperCase()})`} notes={langNotes} />
          <ReviewFlag title="En toda la web" notes={siteNotes} />
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        style={{
          background: "#C98A00", color: "#FFFFFF", border: "none", borderRadius: 999,
          padding: "0.6rem 1rem", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
          boxShadow: "0 6px 20px rgba(0,0,0,0.2)", fontFamily: "inherit",
        }}
      >
        ⚠ {total} para confirmar con Inés {open ? "· cerrar" : ""}
      </button>
    </div>
  );
}
