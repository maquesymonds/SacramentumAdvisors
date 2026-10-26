/* ─────────────────────────────────────────────────────────────────────────────
   Cookie banner copy (ES/EN/DE).
   ⚠️ DRAFT written by Claude: Inés (and her lawyer) must confirm the wording.
   ─────────────────────────────────────────────────────────────────────────── */

import type { Locale } from "@/lib/i18n";

export interface CookieConsentCopy {
  text:     string;
  privacy:  string;
  accept:   string;
  reject:   string;
  settings: string;
}

export const COOKIE_CONSENT: Record<Locale, CookieConsentCopy> = {
  en: {
    text:     "We use analytics cookies (Google Analytics) to understand how visitors use this site and improve it. They are only activated if you accept.",
    privacy:  "Privacy Policy",
    accept:   "Accept",
    reject:   "Reject",
    settings: "Cookie settings",
  },
  es: {
    text:     "Usamos cookies de analítica (Google Analytics) para entender cómo se utiliza este sitio y mejorarlo. Solo se activan si usted las acepta.",
    privacy:  "Política de Privacidad",
    accept:   "Aceptar",
    reject:   "Rechazar",
    settings: "Configuración de cookies",
  },
  de: {
    text:     "Wir verwenden Analyse-Cookies (Google Analytics), um zu verstehen, wie Besucher diese Website nutzen, und sie zu verbessern. Sie werden nur aktiviert, wenn Sie zustimmen.",
    privacy:  "Datenschutzerklärung",
    accept:   "Akzeptieren",
    reject:   "Ablehnen",
    settings: "Cookie-Einstellungen",
  },
};
