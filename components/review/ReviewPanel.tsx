"use client";

/* ReviewPanel — floating list of what Inés still has to confirm on the
   current page: site-wide notes, the page's own (Google description, data
   not shown as one block), the language version's, and on topic pages in
   EN/DE the section and FAQ notes (inline only on the Spanish page, where the
   positions are known to match). Review mode only. */

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

  // A page reviewed as a whole: one list here, first the instruction, then every note
  const pageNotes = rv?.wholePage
    ? [WHOLE_PAGE, ...(page ? PAGE_REVIEW[page] ?? [] : []), ...allNotes(rv)]
    : [...(page ? PAGE_REVIEW[page] ?? [] : []), ...(rv?.meta ?? [])];
  const offPage   = rv && !rv.wholePage && locale !== "es"
    ? [...Object.values(rv.sections ?? {}).flat(), ...Object.values(rv.faqs ?? {}).flat()]
    : [];
  const langNotes = locale ? LOCALE_REVIEW[locale] ?? [] : [];
  const total     = pageNotes.length + offPage.length + langNotes.length + SITE_REVIEW.length;

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
          <ReviewFlag title="Secciones y preguntas (marcadas en el texto en la versión en español)" notes={offPage} />
          <ReviewFlag title={`Solo en esta versión (${locale?.toUpperCase()})`} notes={langNotes} />
          <ReviewFlag title="En toda la web" notes={SITE_REVIEW} />
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
