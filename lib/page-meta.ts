/* Titles and descriptions for the non-topic pages, per locale.
   Measured in pixels (Arial 20 px title incl. " | Sacramentum Advisors" ≤ 600,
   Arial 14 px description ≤ 960) — see the web-seo-geo skill §3. Topic pages
   carry theirs in data/topics/. */

import type { Locale } from "@/lib/i18n";

export type CorePage = "home" | "why-uruguay" | "services" | "news" | "blog" | "contact";

export const PAGE_META: Record<CorePage, Record<Locale, { title: string; description: string; absolute?: boolean }>> = {
  "home": {
    en: { title: "Sacramentum Advisors | Invest and Live in Uruguay", description: "Independent advisory for investors and families in Uruguay: residency, real estate, farmland and investment, coordinated end to end from Montevideo.", absolute: true },
    es: { title: "Sacramentum Advisors | Invertir y vivir en Uruguay", description: "Asesoramiento independiente para inversores y familias en Uruguay: residencia, inmobiliario, campos e inversiones, coordinado desde Montevideo.", absolute: true },
    de: { title: "Sacramentum Advisors | Uruguay: Investieren, Auswandern", description: "Unabhängige Beratung für Investoren und Familien in Uruguay: Aufenthalt, Immobilien, Agrarland und Investitionen, koordiniert aus Montevideo.", absolute: true },
  },
  "why-uruguay": {
    en: { title: "Why Invest in Uruguay: Stability & Sectors", description: "Why Uruguay: stability, equal rights for foreign investors and four sectors we advise on: real estate, technology, farmland and special projects." },
    es: { title: "Por qué invertir en Uruguay", description: "Por qué Uruguay: estabilidad, igualdad de trato al inversor extranjero y cuatro sectores: inmobiliario, tecnología, campos y proyectos especiales." },
    de: { title: "Warum Uruguay: Stabilität und Sektoren", description: "Warum Uruguay: Stabilität, Gleichbehandlung ausländischer Investoren und vier Sektoren: Immobilien, Technologie, Agrarland und Sonderprojekte." },
  },
  "services": {
    en: { title: "Advisory Services for Investing in Uruguay", description: "Residency and relocation, market intelligence, strategic advisory and investment banking: how we support each stage of your move to Uruguay." },
    es: { title: "Servicios de asesoramiento en Uruguay", description: "Residencia e instalación, inteligencia de mercado, asesoría estratégica y banca de inversión: cómo le acompañamos en cada etapa en Uruguay." },
    de: { title: "Leistungen: Beratung für Uruguay", description: "Auswandern und Niederlassung, Marktanalyse, strategische Beratung und Investment Banking: wie wir Sie in jeder Phase begleiten." },
  },
  "news": {
    en: { title: "Uruguay in the News", description: "A curated selection of stories on Uruguay as a destination for investment, residency and quality of life: economy, real estate, farmland and technology." },
    es: { title: "Uruguay en los medios", description: "Una selección de noticias sobre Uruguay como destino para invertir y vivir: economía, inmobiliario, campos, tecnología y calidad de vida." },
    de: { title: "Uruguay in den Nachrichten", description: "Ausgewählte Berichte über Uruguay als Ziel für Investitionen, Auswandern und Lebensqualität: Wirtschaft, Immobilien, Agrarland und Technologie." },
  },
  "blog": {
    en: { title: "Blog: Insights on Uruguay", description: "Insights from the Sacramentum Advisors team on investing, residency, real estate and relocation in Uruguay." },
    es: { title: "Blog: análisis sobre Uruguay", description: "Análisis del equipo de Sacramentum Advisors sobre inversión, residencia, inmobiliario e instalación en Uruguay." },
    de: { title: "Blog: Einblicke zu Uruguay", description: "Einblicke des Teams von Sacramentum Advisors zu Investitionen, Aufenthalt, Immobilien und Auswandern nach Uruguay." },
  },
  "contact": {
    en: { title: "Contact: Book a Consultation", description: "Book a private consultation about residency, real estate, farmland or investing in Uruguay. Reply within 1 to 2 business days." },
    es: { title: "Contacto: reservar una consulta", description: "Agende una consulta privada sobre residencia, inmobiliario, campos o inversión en Uruguay. Respuesta en 1 a 2 días hábiles, con total discreción." },
    de: { title: "Kontakt: vertrauliche Beratung", description: "Vertrauliche Beratung zu Aufenthalt, Immobilien, Agrarland oder Investitionen in Uruguay vereinbaren. Antwort innerhalb von 1 bis 2 Werktagen." },
  },
};
