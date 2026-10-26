/* Footer "Uruguay" column (same order as the menu dropdown) — labels kept small so the footer does not ship
   the full topic copy to the browser. Order = priority from the research. */

import type { Locale, PageId, TopicId } from "@/lib/i18n";

export const FOOTER_TOPICS: { id: TopicId; label: Record<Locale, string> }[] = [
  { id: "technology",      label: { en: "Technology",             es: "Tecnología",             de: "Technologie" } },
  { id: "real-estate",     label: { en: "Real estate",            es: "Inmobiliario",           de: "Immobilien" } },
  { id: "farmland",        label: { en: "Farmland & forestry",    es: "Agro y forestal",         de: "Land- und Forstwirtschaft" } },
];

/** Each sector's colour: its chapter on Why Uruguay and the background of its
 *  page, with white text (Maque, 25.10.2026). */
export const SECTOR_COLOR: Partial<Record<TopicId, string>> = {
  "real-estate": "#af8f6e",
  "technology":  "#004785",
  "farmland":    "#194418",
};

export const FOOTER_TOPICS_TITLE: Record<Locale, string> = {
  en: "Uruguay",
  es: "Uruguay",
  de: "Uruguay",
};

/** The page each news article leads to at its end ("Related"), so a reader who
 *  finished the article lands on the matching sector (proposal: link every News
 *  article to its sector). Read from the article titles; general articles point
 *  to Why Uruguay. New admin articles without an entry show no card. */
export const ARTICLE_RELATED: Record<string, PageId> = {
  "agri-boom":  "farmland",
  residency:    "why-uruguay",
  "pde-market": "real-estate",
  "tech-hub":   "technology",
  port:         "why-uruguay",
  governance:   "why-uruguay",
  montevideo:   "why-uruguay",
  investment:   "why-uruguay",
};
