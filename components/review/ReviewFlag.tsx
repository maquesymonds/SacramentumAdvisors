/* ─────────────────────────────────────────────────────────────────────────────
   ReviewFlag — "para confirmar con Inés"
   Marks copy that has no source yet (written by Claude, not by the client):
   shows the questions Inés has to answer, right where the text is.
   Only in review mode (local dev and Vercel previews); never in production.
   ─────────────────────────────────────────────────────────────────────────── */

import { REVIEW_MODE, type ReviewNote } from "@/lib/review";

const KIND: Record<ReviewNote["kind"], string> = {
  servicio: "Cómo trabaja Sacramentum",
  dato:     "Dato sin fuente",
  propuesta:"Propuesta sin aprobar",
  redaccion:"Texto nuevo",
};

export default function ReviewFlag({
  notes,
  title = "Para confirmar con Inés",
  className = "",
  style,
}: {
  notes?:     ReviewNote[];
  title?:     string;
  className?: string;
  style?:     React.CSSProperties;
}) {
  if (!REVIEW_MODE || !notes?.length) return null;
  return (
    <aside
      role="note"
      data-review-flag=""
      className={className}
      style={{
        background:   "#FFF4D6",
        border:       "1.5px dashed #C98A00",
        borderRadius: 10,
        padding:      "0.9rem 1.1rem",
        color:        "#4A3500",
        fontSize:     "0.85rem",
        lineHeight:   1.5,
        textAlign:    "left",
        fontFamily:   "inherit",
        ...style,
      }}
    >
      <p style={{ fontWeight: 600, marginBottom: "0.4rem", letterSpacing: "0.01em" }}>⚠ {title}</p>
      <ul style={{ display: "flex", flexDirection: "column", gap: "0.35rem", paddingLeft: "1.1rem", listStyle: "disc" }}>
        {notes.map((n, i) => (
          <li key={i}>
            <span style={{ fontWeight: 600 }}>{KIND[n.kind]}:</span> {n.pregunta}
          </li>
        ))}
      </ul>
    </aside>
  );
}
