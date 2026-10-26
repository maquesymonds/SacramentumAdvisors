"use client";

/* ─────────────────────────────────────────────────────────────────────────────
   TrustSection — client testimonials (proposal item "Sección de confianza")
   Home: right after "Why Sacramentum", so the firm's claims are followed by
   what clients say. Services: after the services. Contact: under the form.

   The testimonials are PLACEHOLDERS written by Claude to show the layout:
   none of them is real. They render only in review mode (local + Vercel
   preview) until Inés sends real ones with permission to publish.

   Always closes with a centred call to action (approved closing-CTA label):
   to the contact page, or on the contact page itself up to the form.
   ─────────────────────────────────────────────────────────────────────────── */

import { useLocale, useT } from "@/lib/locale-context";
import type { Locale } from "@/lib/i18n";
import { REVIEW_MODE } from "@/lib/review";
import SectionCta from "@/components/ui/SectionCta";

interface Quote { text: string; who: string; topic: string }
interface Copy  { eyebrow: string; headline: string; quotes: Quote[] }

const COPY: Record<Locale, Copy> = {
  es: {
    eyebrow:  "Testimonios",
    headline: "Lo que dicen quienes ya trabajaron con nosotros",
    quotes: [
      { text: "Llegamos a Uruguay sin conocer a nadie. En pocos meses teníamos la residencia en trámite, cuenta bancaria y una casa elegida con criterio, no por apuro.", who: "Familia de Buenos Aires", topic: "Residencia e inmobiliario" },
      { text: "Lo que más valoro es la discreción. Cada paso se explicó con claridad y nunca sentí que me estuvieran vendiendo algo.",                            who: "Empresario, São Paulo",   topic: "Asesoría estratégica" },
      { text: "Nos ayudaron a evaluar tres campos antes de comprar. Nos dijeron que no a dos, y eso nos dio más confianza que cualquier presentación.",              who: "Inversor, Madrid",        topic: "Agro y forestal" },
    ],
  },
  en: {
    eyebrow:  "Testimonials",
    headline: "What our clients say",
    quotes: [
      { text: "We arrived in Uruguay without knowing anyone. Within a few months our residency was under way, we had a bank account and a home chosen with judgement, not in a hurry.", who: "Family from Buenos Aires", topic: "Residency and real estate" },
      { text: "What I value most is the discretion. Every step was explained clearly and I never felt I was being sold something.",                                          who: "Entrepreneur, São Paulo",  topic: "Strategic advisory" },
      { text: "They helped us assess three farms before buying. They advised against two, and that gave us more confidence than any presentation.",                               who: "Investor, Madrid",         topic: "Farmland" },
    ],
  },
  de: {
    eyebrow:  "Stimmen unserer Mandanten",
    headline: "Was unsere Mandanten sagen",
    quotes: [
      { text: "Wir kamen nach Uruguay, ohne jemanden zu kennen. Nach wenigen Monaten lief die Residency, wir hatten ein Bankkonto und ein Haus, mit Bedacht gewählt statt in Eile.", who: "Familie aus Buenos Aires", topic: "Residency und Immobilien" },
      { text: "Am meisten schätze ich die Diskretion. Jeder Schritt wurde klar erklärt, und ich hatte nie das Gefühl, dass man mir etwas verkaufen will.",                     who: "Unternehmer, São Paulo",   topic: "Strategische Beratung" },
      { text: "Sie haben uns geholfen, drei Betriebe vor dem Kauf zu prüfen. Von zweien haben sie abgeraten, und das gab uns mehr Vertrauen als jede Präsentation.",          who: "Investor, Madrid",         topic: "Agrarland" },
    ],
  },
};

/** Whether the testimonials render (placeholders: review mode only). */
export const SHOW_TESTIMONIALS = REVIEW_MODE;

/** Always closes with a consultation button (Maque, 21.10.2026). `cta`: its
 *  data-cta id. `toForm`: on the contact page it scrolls up to the form. */
export default function TrustSection({ cta = "testimonials", toForm = false }: { cta?: string; toForm?: boolean } = {}) {
  const { locale } = useLocale();
  const ctaLabel = useT().closingCta.cta;
  // Placeholder testimonials must never reach production
  if (!SHOW_TESTIMONIALS) return null;
  const c = COPY[locale] ?? COPY.en;
  return (
    <section
      id="testimonials"
      aria-label={c.eyebrow}
      className="bg-surface"
      style={{ paddingBlock: "clamp(4.5rem, 9vw, 8rem)" }}
    >
      <div className="container-site">
        <p className="text-eyebrow mb-6 flex items-center gap-4" style={{ color: "var(--color-warm)" }}>
          <span aria-hidden="true" className="block h-px w-8" style={{ backgroundColor: "var(--color-warm)" }} />
          {c.eyebrow}
        </p>
        <h2
          className="font-normal text-ink"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: "22ch" }}
        >
          {c.headline}
        </h2>

        {/* Testimonials */}
        <ul
          data-reveal-items=""
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ marginTop: "clamp(2.5rem, 5vw, 3.5rem)" }}
        >
          {c.quotes.map(q => (
            <li
              key={q.who}
              className="flex flex-col"
              style={{ background: "var(--color-surface-card)", borderRadius: "1.25rem", boxShadow: "0 18px 40px -24px rgb(17 31 48 / 0.25)", padding: "2rem 1.75rem" }}
            >
              <span aria-hidden="true" style={{ color: "var(--color-warm)", fontSize: "3rem", lineHeight: 0.6, height: "1.5rem" }}>“</span>
              <blockquote className="flex-1" style={{ color: "var(--color-ink)", fontSize: "1.05rem", lineHeight: 1.6 }}>
                {q.text}
              </blockquote>
              <p className="mt-8 pt-5" style={{ borderTop: "1px solid rgba(31,41,51,0.08)", fontSize: "0.9rem", lineHeight: 1.5 }}>
                <span style={{ display: "block", color: "var(--color-ink)" }}>{q.who}</span>
                <span style={{ display: "block", color: "var(--color-ink-subtle)" }}>{q.topic}</span>
              </p>
            </li>
          ))}
        </ul>
        <SectionCta id={cta} label={ctaLabel} scrollTo={toForm ? "contact-form" : undefined} />
      </div>
    </section>
  );
}
