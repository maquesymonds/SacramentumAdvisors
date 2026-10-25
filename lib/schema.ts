/* Site-wide structured data — verified values only (web-seo-geo §7).
   Every value below is published on the site (contact page / footer).
   Inés and the company link to their LinkedIn (given by Maque, 2026-10-21;
   also on her team card and in the footer).
   Not included until verified: street address, geo, opening hours,
   founding date, rating. */

import { SITE_URL, localePath, type Locale } from "@/lib/i18n";
import { COMPANY_LINKEDIN, TEAM_LINKEDIN } from "@/lib/external-links";

export const ORG_ID = `${SITE_URL}/#organization`;

export function siteJsonLd(locale: Locale) {
  return [
    {
      "@context": "https://schema.org",
      "@type":    "Organization",
      "@id":      ORG_ID,
      name:       "Sacramentum Advisors",
      url:        SITE_URL + "/",
      logo:       `${SITE_URL}/images/LogoAzul.png`,
      email:      "ines@sacramentumcapital.com",
      telephone:  "+598 95 532 533",
      address: {
        "@type":         "PostalAddress",
        addressLocality: "Montevideo",
        addressCountry:  "UY",
      },
      sameAs:     [COMPANY_LINKEDIN],
      areaServed: "UY",
      knowsLanguage: ["es", "en"],
      employee: {
        "@type":  "Person",
        name:     "Inés Bonicelli",
        jobTitle: "Managing Director",
        sameAs:   [TEAM_LINKEDIN.ines],
      },
    },
    {
      "@context": "https://schema.org",
      "@type":    "WebSite",
      "@id":      `${SITE_URL}/#website-${locale}`,
      url:        SITE_URL + localePath("home", locale),
      name:       "Sacramentum Advisors",
      inLanguage: locale,
      publisher:  { "@id": ORG_ID },
    },
  ];
}

const HOME_LABEL: Record<Locale, string> = { en: "Home", es: "Inicio", de: "Startseite" };

/** BreadcrumbList for every page except the home (web-seo-geo §7). */
export function breadcrumbJsonLd(locale: Locale, items: { name: string; path: string }[]) {
  const all = [{ name: HOME_LABEL[locale], path: localePath("home", locale) }, ...items];
  return {
    "@context": "https://schema.org",
    "@type":    "BreadcrumbList",
    itemListElement: all.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: SITE_URL + it.path })),
  };
}
