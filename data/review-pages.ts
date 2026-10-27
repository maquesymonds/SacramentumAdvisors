/* ─────────────────────────────────────────────────────────────────────────────
   Review notes outside the topic pages (audit of 21.10.2026, see
   data/review-flags.ts for the rules): what is not visible as one block
   (Google descriptions, structured data, page-wide copy), shown in the
   floating ReviewPanel, the only place notes show (Maque, 25.10.2026: no
   boxes inside the page, they shift the layout). FAQs carry no flags: reviewed one by one with Maque
   (25.10.2026).
   Remove an entry once Inés has confirmed it.
   ─────────────────────────────────────────────────────────────────────────── */

import type { Locale, PageId } from "@/lib/i18n";
import type { ReviewNote } from "@/lib/review";

const s = (pregunta: string): ReviewNote => ({ kind: "servicio",  pregunta });
const d = (pregunta: string): ReviewNote => ({ kind: "dato",      pregunta });
const p = (pregunta: string): ReviewNote => ({ kind: "propuesta", pregunta });
const r = (pregunta: string): ReviewNote => ({ kind: "redaccion", pregunta });

/** Notes that apply on every page */
export const SITE_REVIEW: ReviewNote[] = [
  p("¿Aprobás los nombres nuevos? Residencia e instalación, Inteligencia de mercado, Inmobiliario, Agro y forestal."),
  p("¿Ok que todos los botones digan \"Reservar consulta\" y Contacto salga del menú?"),
  s("¿Ok renombrar \"Banca de Inversión Boutique\" a \"Sacramentum Capital\"?"),
  s("¿Atienden en alemán? ¿Trabajan también en Argentina y Paraguay?"),
  d("¿Usamos ines@sacramentumcapital.com y +598 95 532 533 como contacto público?"),
];

/** Notes per page (Google description and copy that is not one block) */
export const PAGE_REVIEW: Partial<Record<PageId, ReviewNote[]>> = {
  home: [
    d("¿Podemos publicar las cifras de Capital (USD 1.6B+, 30 mandatos, 12 sectores)? El deck dice Confidential."),
    s("¿Ok mostrar a Capital como la firma de banca de inversión?"),
    r("¿Te sirve el título \"Comprar, vender o financiar una empresa\"?"),
    r("Los testimonios son inventados: pasanos 2 o 3 reales."),
  ],
  services: [
    r("Los testimonios son inventados: pasanos 2 o 3 reales."),
    p("¿Ok usar \"Residencia e instalación\" en vez de Soft Landing?"),
  ],
  contact: [
    r("Los testimonios son inventados: pasanos 2 o 3 reales."),
    r("¿Ok prometer respuesta en 1 a 2 días hábiles?"),
  ],
  privacy: [
    d("Pasanos razón social, RUT, domicilio y mail para temas de privacidad."),
  ],
  "sacramentum-capital": [
    d("¿Podemos publicar clientes, montos y cifras del deck? Dice Confidential."),
    d("Hotel Enjoy / Baluma USD 180M: ¿ya cerró y se puede publicar?"),
    r("¿Ok la lista de servicios de mercado de capitales? ¿Sumamos retail en M&A?"),
  ],
};

/** Notes that only apply to one language version */
export const LOCALE_REVIEW: Partial<Record<Locale, ReviewNote[]>> = {
  de: [
    p("En alemán ya aplicamos cambios sin aprobar. ¿Ok?"),
    d("¿Actualizamos la nota de residencia al régimen del 1/1/2026?"),
    r("Falta que una persona nativa revise el alemán."),
  ],
};
