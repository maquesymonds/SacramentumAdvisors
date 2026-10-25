/* Which sector page each News article leads to (proposal: "connect each News
   article to its sector"). An article's own `topic`, chosen in the admin,
   wins; this map covers the articles that were published before the field. */

import type { TopicId } from "@/lib/i18n";
import { FOOTER_TOPICS } from "@/lib/topic-links";

const BY_ID: Record<string, TopicId> = {
  "article-1777307437501": "real-estate",  // Monocle — Punta del Este
  "article-1777307654905": "technology",   // Uruguay XXI — building an international company
  "article-1777307824565": "real-estate",  // La Nación — Saint-Tropez y los Hamptons
};

/** Sectors offered in the admin dropdown (same order as the footer). */
export const NEWS_TOPIC_OPTIONS = FOOTER_TOPICS;

export function newsTopic(article: { id: string; topic?: string }): TopicId | null {
  const id = article.topic || BY_ID[article.id];
  return id && FOOTER_TOPICS.some(t => t.id === id) ? (id as TopicId) : null;
}
