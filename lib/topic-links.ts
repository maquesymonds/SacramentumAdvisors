/* Footer "Uruguay" column — labels kept small so the footer does not ship
   the full topic copy to the browser. Order = priority from the research. */

import type { Locale, TopicId } from "@/lib/i18n";

export const FOOTER_TOPICS: { id: TopicId; label: Record<Locale, string> }[] = [
  { id: "residency",       label: { en: "Residency & relocation", es: "Residencia en Uruguay",  de: "Auswandern nach Uruguay" } },
  { id: "tax-residency",   label: { en: "Tax residency",          es: "Residencia fiscal",      de: "Steuern & Wohnsitz" } },
  { id: "second-passport", label: { en: "Second passport",        es: "Pasaporte uruguayo",     de: "Zweiter Reisepass" } },
  { id: "retire",          label: { en: "Retire in Uruguay",      es: "",                       de: "Als Rentner nach Uruguay" } },
  { id: "real-estate",     label: { en: "Real estate",            es: "Inmobiliario",           de: "Immobilien" } },
  { id: "farmland",        label: { en: "Farmland & forestry",    es: "Campos y chacras",       de: "Landwirtschaft" } },
  { id: "technology",      label: { en: "Technology",             es: "Tecnología",             de: "Technologie" } },
  { id: "family-office",   label: { en: "Family offices",         es: "Family office",          de: "Family Office" } },
];

export const FOOTER_TOPICS_TITLE: Record<Locale, string> = {
  en: "Uruguay",
  es: "Uruguay",
  de: "Uruguay",
};
