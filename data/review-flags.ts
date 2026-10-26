/* ─────────────────────────────────────────────────────────────────────────────
   Review flags — copy written by Claude that Inés has not confirmed yet
   Audit of 21.10.2026 against the only valid sources: the stage-1 copy Inés
   approved (origin/main), her own texts (docs/content) and the Sacramentum
   Capital presentation. Everything else is flagged here, block by block, with
   the question she has to answer. Shown on the page by ReviewFlag (preview
   and local only). Remove a block's entry once Inés has confirmed it.

   Keys follow the Spanish page (the version Inés reviews): sections and faqs
   by position, 0-based.
   ─────────────────────────────────────────────────────────────────────────── */

import type { TopicId } from "@/lib/i18n";
import type { ReviewNote } from "@/lib/review";

export interface TopicReview {
  /** The whole page is new copy Inés reads end to end: one calm note with a
      few things to look at instead of a list of questions (Maque, 26.10.2026,
      Real estate and Farmland). */
  wholePage?: string;
  meta?:     ReviewNote[];
  intro?:    ReviewNote[];
  facts?:    ReviewNote[];
  sections?: Record<number, ReviewNote[]>;
  steps?:    ReviewNote[];
  faqs?:     Record<number, ReviewNote[]>;
  cta?:      ReviewNote[];
}

const r = (pregunta: string): ReviewNote => ({ kind: "redaccion", pregunta });

export const TOPIC_REVIEW: Partial<Record<TopicId, TopicReview>> = {
  "real-estate": {
    wholePage: "Leé la página entera con calma, es texto nuevo. Fijate sobre todo si las zonas, los costos y cómo acompañan la compra son como trabajan ustedes.",
  },
  "farmland": {
    wholePage: "Leé la página entera con calma, es texto nuevo. Fijate sobre todo si los tipos de campo, los pasos de la compra y lo que hacen después son como trabajan ustedes.",
  },

  "technology": {
    meta: [r("¿Te sirven el título y la descripción para Google?")],
  },
};

export function topicReview(id: TopicId): TopicReview | undefined {
  return TOPIC_REVIEW[id];
}

/** Every note of a page, for the page-level banner */
export function allNotes(rv?: TopicReview): ReviewNote[] {
  if (!rv) return [];
  return [
    ...(rv.meta ?? []), ...(rv.intro ?? []), ...(rv.facts ?? []),
    ...Object.values(rv.sections ?? {}).flat(), ...(rv.steps ?? []),
    ...Object.values(rv.faqs ?? {}).flat(), ...(rv.cta ?? []),
  ];
}
