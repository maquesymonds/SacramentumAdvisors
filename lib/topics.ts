/* ─────────────────────────────────────────────────────────────────────────────
   Topic pages — content model
   Sector and service pages share one template (components/topic/TopicPage).
   Copy lives in data/topics/<id>.ts, one object per locale. German falls back
   to English until it is written (DE is noindex meanwhile).

   Rule for `facts`: verified values only. A figure that has not been
   confirmed by the client is left out — never a plausible guess.
   ─────────────────────────────────────────────────────────────────────────── */

import type { Locale, TopicId } from "@/lib/i18n";

export interface TopicFact {
  value:   string;
  label:   string;
  source?: { label: string; href: string };
}

export interface TopicSection {
  heading:  string;
  body:     string[];
  bullets?: string[];
}

export interface TopicContent {
  /** <title> without the brand suffix, ~55–60 characters */
  metaTitle:       string;
  /** ~150–160 characters */
  metaDescription: string;
  /** Short name used in breadcrumbs, cards and the footer */
  navLabel:        string;
  /** One line for related-topic cards */
  cardText:        string;
  eyebrow:         string;
  title:           string;
  intro:           string[];
  image:           { src: string; alt: string };
  facts?:          TopicFact[];
  sections:        TopicSection[];
  steps?:          { heading: string; items: { title: string; body: string }[] };
  faqs:            { q: string; a: string }[];
  cta:             { heading: string; body: string; label: string };
}

export type TopicCopy = Partial<Record<Locale, TopicContent>> & { en: TopicContent };

import realEstate         from "@/data/topics/real-estate";
import farmland           from "@/data/topics/farmland";
import technology         from "@/data/topics/technology";
import specialSituations  from "@/data/topics/special-situations";
import residency          from "@/data/topics/residency";
import taxResidency       from "@/data/topics/tax-residency";
import secondPassport     from "@/data/topics/second-passport";
import retire             from "@/data/topics/retire";
import familyOffice       from "@/data/topics/family-office";
import sacramentumCapital from "@/data/topics/sacramentum-capital";

const TOPICS: Record<TopicId, TopicCopy> = {
  "real-estate":         realEstate,
  "farmland":            farmland,
  "technology":          technology,
  "special-situations":  specialSituations,
  "residency":           residency,
  "tax-residency":       taxResidency,
  "second-passport":     secondPassport,
  "retire":              retire,
  "family-office":       familyOffice,
  "sacramentum-capital": sacramentumCapital,
};

export function topicContent(id: TopicId, locale: Locale): TopicContent {
  const copy = TOPICS[id];
  return copy[locale] ?? copy.en;
}

/** Labels for non-topic pages that can appear as related links. */
export const PAGE_LABELS: Partial<Record<string, Record<Locale, { title: string; text: string }>>> = {
  "why-uruguay": {
    en: { title: "Why Uruguay",     text: "Stability, institutions and the four sectors we advise on." },
    es: { title: "Por qué Uruguay", text: "Estabilidad, instituciones y los cuatro sectores en los que asesoramos." },
    de: { title: "Warum Uruguay",   text: "Stabilität, Institutionen und die vier Sektoren, in denen wir beraten." },
  },
};
