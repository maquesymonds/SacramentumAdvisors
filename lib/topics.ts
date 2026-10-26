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
  /** Small label above the card title, e.g. to mark the cards that are
      Sacramentum's own services ("How we help"). Code only. */
  label?:   string;
  /** Photo on the section's card (stacked-cards layout). Code only, not admin-editable. */
  image?:   { src: string; alt: string };
}

export interface TopicContent {
  /** <title> without the brand suffix, ~55–60 characters */
  metaTitle:       string;
  /** Title used as-is, without the " | Sacramentum Advisors" suffix */
  metaTitleAbsolute?: boolean;
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
  /** Heading above the stacked section cards */
  sectionsHeading?: string;
  /** Technology hero: dot map with lines from Montevideo to the markets named
      in the approved copy (components/topic/ExportMap.tsx). Code only. */
  /** Phrases of the title highlighted in the hero (a bar fills behind them). Code only. */
  titleMarks?:     string[];
  /** The intro shown as a lead line and a list (same words as `intro`). Code only. */
  introList?:      { lead: string; items: string[] };
  /** Real estate / Farmland hero: dot map of Uruguay, either the places the
      page names or its productive-land share lit (components/topic/UruguayMap.tsx). Code only. */
  uruguayMap?:
    | { kind: "places"; pins: { pin: "mvd" | "pir" | "pde" | "jig"; name: string }[] }
    | { kind: "land"; share: number; value: string; label: string }
    | { kind: "zones"; zones: { zone: "campos" | "sierras" | "costa"; name: string }[] };
  exportMap?:      { origin: string; links: { pin: "us" | "ca" | "uk" | "es" | "cl"; name: string }[] };
  sections:        TopicSection[];
  steps?:          { heading: string; items: { title: string; body: string }[] };
  faqs:            { q: string; a: string }[];
  cta:             { heading: string; body: string; label: string };
}

export type TopicCopy = Partial<Record<Locale, TopicContent>> & { en: TopicContent };

import realEstate         from "@/data/topics/real-estate";
import farmland           from "@/data/topics/farmland";
import technology         from "@/data/topics/technology";
import sacramentumCapital from "@/data/topics/sacramentum-capital";

const TOPICS: Record<TopicId, TopicCopy> = {
  "real-estate":         realEstate,
  "farmland":            farmland,
  "technology":          technology,
  "sacramentum-capital": sacramentumCapital,
};

export function topicContent(id: TopicId, locale: Locale, overrides?: Overrides): TopicContent {
  const copy = TOPICS[id];
  const base = copy[locale] ?? copy.en;
  const over = overrides?.[locale]?.[adminKey(id)];
  return over && typeof over === "object" ? applyTopicEdits(base, over as FlatTopic) : base;
}

// ── Admin editing ────────────────────────────────────────────────────────────
// The admin "Textos" panel edits flat string fields, so topic copy is shown
// there flattened (paragraphs separated by a blank line, bullets one per line)
// and saved under overrides[locale]["topic:<id>"].

export type Overrides = Record<string, Record<string, unknown>>;

export const adminKey = (id: TopicId) => `topic:${id}`;

export interface FlatTopic {
  metaTitle?:       string;
  metaDescription?: string;
  navLabel?:        string;
  cardText?:        string;
  eyebrow?:         string;
  title?:           string;
  intro?:           string;
  imageAlt?:        string;
  facts?:           { value?: string; label?: string }[];
  sections?:        { heading?: string; body?: string; bullets?: string }[];
  stepsHeading?:    string;
  steps?:           { title?: string; body?: string }[];
  faqs?:            { q?: string; a?: string }[];
  ctaHeading?:      string;
  ctaBody?:         string;
  ctaLabel?:        string;
}

const paras = (text: string) => text.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
const lines = (text: string) => text.split("\n").map(l => l.trim()).filter(Boolean);

export function flattenTopic(c: TopicContent): FlatTopic {
  return {
    metaTitle:       c.metaTitle,
    metaDescription: c.metaDescription,
    navLabel:        c.navLabel,
    cardText:        c.cardText,
    eyebrow:         c.eyebrow,
    title:           c.title,
    intro:           c.intro.join("\n\n"),
    imageAlt:        c.image.alt,
    facts:           (c.facts ?? []).map(f => ({ value: f.value, label: f.label })),
    sections:        c.sections.map(s => ({ heading: s.heading, body: s.body.join("\n\n"), bullets: (s.bullets ?? []).join("\n") })),
    stepsHeading:    c.steps?.heading ?? "",
    steps:           (c.steps?.items ?? []).map(i => ({ title: i.title, body: i.body })),
    faqs:            c.faqs.map(f => ({ q: f.q, a: f.a })),
    ctaHeading:      c.cta.heading,
    ctaBody:         c.cta.body,
    ctaLabel:        c.cta.label,
  };
}

/** Apply admin edits onto the code copy. Empty strings never blank out copy. */
export function applyTopicEdits(c: TopicContent, o: FlatTopic): TopicContent {
  const str = (v: unknown, fallback: string) => (typeof v === "string" && v.trim() ? v : fallback);
  return {
    ...c,
    metaTitle:       str(o.metaTitle, c.metaTitle),
    metaDescription: str(o.metaDescription, c.metaDescription),
    navLabel:        str(o.navLabel, c.navLabel),
    cardText:        str(o.cardText, c.cardText),
    eyebrow:         str(o.eyebrow, c.eyebrow),
    title:           str(o.title, c.title),
    intro:           o.intro?.trim() ? paras(o.intro) : c.intro,
    image:           { ...c.image, alt: str(o.imageAlt, c.image.alt) },
    facts:           c.facts?.map((f, i) => ({ ...f, value: str(o.facts?.[i]?.value, f.value), label: str(o.facts?.[i]?.label, f.label) })),
    sections:        c.sections.map((sec, i) => {
      const e = o.sections?.[i];
      return {
        heading: str(e?.heading, sec.heading),
        body:    e?.body?.trim() ? paras(e.body) : sec.body,
        bullets: e?.bullets?.trim() ? lines(e.bullets) : sec.bullets,
        image:   sec.image,
        label:   sec.label,
      };
    }),
    steps: c.steps && {
      heading: str(o.stepsHeading, c.steps.heading),
      items:   c.steps.items.map((it, i) => ({ title: str(o.steps?.[i]?.title, it.title), body: str(o.steps?.[i]?.body, it.body) })),
    },
    faqs: c.faqs.map((f, i) => ({ q: str(o.faqs?.[i]?.q, f.q), a: str(o.faqs?.[i]?.a, f.a) })),
    cta:  { heading: str(o.ctaHeading, c.cta.heading), body: str(o.ctaBody, c.cta.body), label: str(o.ctaLabel, c.cta.label) },
  };
}

/** Code copy for the admin panel (both editable locales; Retire has no ES). */
export function topicCodeCopy(id: TopicId, locale: Locale): TopicContent {
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
