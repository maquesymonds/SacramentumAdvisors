/* Outbound links to the institutions, places and laws the copy names.
   <LinkedText> links the first mention of each entry inside a block of copy,
   so the texts stay plain strings (admin-editable, same in ES/EN/DE).
   Every URL was opened and checked on 2026-10-21. */

import type { Locale } from "@/lib/i18n";

export type ExternalLink = {
  /** Matches the mention in any language; first match per text block is linked. */
  pattern: RegExp;
  href:    string | Record<Locale, string>;
};

export const EXTERNAL_LINKS: ExternalLink[] = [
  { pattern: /Uruguay XXI/,
    href: { es: "https://www.uruguayxxi.gub.uy/es/", en: "https://www.uruguayxxi.gub.uy/en/", de: "https://www.uruguayxxi.gub.uy/en/" } },
  { pattern: /Zonamerica/,                                   href: "https://web.zonamerica.com/" },
  { pattern: /WTC Free Zone/,                                href: "https://wtcmontevideofreezone.com/" },
  { pattern: /Aguada Park/,                                  href: "https://www.aguadapark.com/" },
  { pattern: /Dirección Nacional de Migración|National Migration Directorate|Einwanderungsbehörde/,
    href: "https://www.gub.uy/ministerio-interior/direccion-nacional-migracion" },
  { pattern: /(?:Ley|Law|Gesetz)(?: (?:No\.|N\.?°|Nº|Nr\.))? 18[.,]795/, href: "https://www.impo.com.uy/bases/leyes/18795-2011" },
  { pattern: /(?:Ley(?: Forestal)?|(?:Forestry )?Law|Forstgesetz|Gesetz)(?: (?:No\.|N\.?°|Nº|Nr\.))? 15[.,]939/, href: "https://www.impo.com.uy/bases/leyes/15939-1987" },
  { pattern: /Hotel Enjoy Punta del Este/,                   href: "https://enjoypuntadeleste.uy/" },
];

/** Company page (given by Maque, 2026-10-21): footer and Organization sameAs. */
export const COMPANY_LINKEDIN = "https://www.linkedin.com/company/sacramentum-advisors/";

/** Personal profiles shown on the team cards and in the Organization schema. */
export const TEAM_LINKEDIN: Record<string, string> = {
  ines:     "https://www.linkedin.com/in/ines-bonicelli-4872119/",
  pablo:    "https://www.linkedin.com/in/pablo-mautone-49bbb424/",
  omar:     "https://www.linkedin.com/in/omarpaganini/",
  eleanor:  "https://www.linkedin.com/in/paulina-fernandez-rubio-412500175/", // id kept from the old placeholder; the card is Paulina Fernandez Rubio
};
