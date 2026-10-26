/* ─────────────────────────────────────────────────────────────────────────────
   Functional pages copy: thank-you and privacy policy (ES/EN/DE).
   ⚠️ PRIVACY POLICY = DRAFT. It describes what the site does today (contact
   form via Formspree, hosting on Vercel, language cookie, Google Analytics
   through Tag Manager only after consent in the cookie banner).
   Must be reviewed by the client's lawyer before launch. The analytics
   paragraphs (Service providers + Cookies) were added by Claude: confirm.
   ─────────────────────────────────────────────────────────────────────────── */

import type { Locale } from "@/lib/i18n";

export interface LegalSection { heading: string; body: string[] }

export const THANK_YOU: Record<Locale, { metaTitle: string; metaDescription: string; title: string; body: string; home: string }> = {
  en: {
    metaTitle: "Thank you",
    metaDescription: "We have received your enquiry and will respond within one to two business days.",
    title:     "Thank you for reaching out.",
    body:      "We have received your enquiry and will respond within one to two business days. All correspondence is handled with complete discretion.",
    home:      "Back to the home page",
  },
  es: {
    metaTitle: "Gracias",
    metaDescription: "Hemos recibido su consulta y le responderemos dentro de uno a dos días hábiles.",
    title:     "Gracias por contactarnos.",
    body:      "Hemos recibido su consulta y le responderemos dentro de uno a dos días hábiles. Toda la correspondencia se maneja con total discreción.",
    home:      "Volver al inicio",
  },
  de: {
    metaTitle: "Vielen Dank",
    metaDescription: "Wir haben Ihre Anfrage erhalten und antworten innerhalb von ein bis zwei Werktagen.",
    title:     "Vielen Dank für Ihre Nachricht.",
    body:      "Wir haben Ihre Anfrage erhalten und antworten innerhalb von ein bis zwei Werktagen. Alle Korrespondenz wird mit absoluter Diskretion behandelt.",
    home:      "Zur Startseite",
  },
};

export const PRIVACY: Record<Locale, { metaTitle: string; metaDescription: string; title: string; updated: string; sections: LegalSection[] }> = {
  en: {
    metaTitle: "Privacy Policy",
    metaDescription: "How Sacramentum Advisors handles the personal data sent through the contact form and the cookies used on this website.",
    title:     "Privacy Policy",
    updated:   "Last updated: October 2026",
    sections: [
      { heading: "Who is responsible", body: ["Sacramentum Advisors, Carrasco, Montevideo, Uruguay, is responsible for the personal data processed through this website. Contact: ines@sacramentumcapital.com."] },
      { heading: "What we collect and why", body: [
        "When you use the contact form we collect your name, email address, phone number (optional), country of residence, area of interest and your message. We use this information only to answer your enquiry and, if you wish, to prepare a consultation.",
        "We do not sell your data and do not use it for advertising.",
      ] },
      { heading: "Service providers", body: [
        "The contact form is delivered through Formspree, and the website is hosted by Vercel. Both act on our behalf and may process data on servers in the United States.",
        "If you accept analytics cookies, we use Google Analytics, loaded through Google Tag Manager (Google Ireland Limited / Google LLC), to measure how the website is used: pages visited, approximate country, device type and how you arrived at the site. Google may process this data on servers in the United States.",
      ] },
      { heading: "Cookies and local storage", body: [
        "The website stores your language choice in a cookie (NEXT_LOCALE) for up to one year, so the site opens in your language next time, and uses your browser's session storage to remember whether the opening animation has been shown.",
        "Analytics cookies from Google Analytics (_ga, _ga_*) are only set if you accept them in the cookie banner, and are kept for up to two years. We do not use advertising cookies. Your choice is stored in your browser, and you can change it at any time with the \"Cookie settings\" link at the bottom of every page.",
      ] },
      { heading: "How long we keep your data", body: [
        "We keep enquiry data for as long as needed to handle your enquiry and any resulting relationship, and delete it afterwards unless the law requires us to keep it.",
      ] },
      { heading: "Your rights", body: [
        "You can ask us at any time for access to, correction or deletion of your data, object to its processing, or ask for a copy of it, by writing to ines@sacramentumcapital.com. You may also lodge a complaint with the Uruguayan data protection authority (Unidad Reguladora y de Control de Datos Personales) or, if you live in the European Union, with the supervisory authority of your country.",
        "This policy is governed by Uruguayan Law 18.331 on the protection of personal data and, for visitors in the European Union, by the General Data Protection Regulation (GDPR).",
      ] },
    ],
  },
  es: {
    metaTitle: "Política de privacidad",
    metaDescription: "Cómo Sacramentum Advisors trata los datos personales que llegan por el formulario de contacto y las cookies de este sitio.",
    title:     "Política de privacidad",
    updated:   "Última actualización: octubre de 2026",
    sections: [
      { heading: "Responsable", body: ["Sacramentum Advisors, Carrasco, Montevideo, Uruguay, es responsable de los datos personales que se tratan a través de este sitio. Contacto: ines@sacramentumcapital.com."] },
      { heading: "Qué datos recogemos y para qué", body: [
        "Cuando usa el formulario de contacto recogemos su nombre, correo electrónico, teléfono (opcional), país de residencia, área de interés y su mensaje. Usamos esta información solo para responder su consulta y, si lo desea, preparar una reunión.",
        "No vendemos sus datos ni los usamos con fines publicitarios.",
      ] },
      { heading: "Proveedores", body: [
        "El formulario de contacto se envía a través de Formspree y el sitio está alojado en Vercel. Ambos actúan por cuenta nuestra y pueden tratar datos en servidores de Estados Unidos.",
        "Si acepta las cookies de analítica, usamos Google Analytics, cargado a través de Google Tag Manager (Google Ireland Limited / Google LLC), para medir cómo se usa el sitio: páginas visitadas, país aproximado, tipo de dispositivo y cómo llegó al sitio. Google puede tratar estos datos en servidores de Estados Unidos.",
      ] },
      { heading: "Cookies y almacenamiento local", body: [
        "El sitio guarda el idioma que elige en una cookie (NEXT_LOCALE) durante un máximo de un año, para abrirse en su idioma la próxima vez, y usa el almacenamiento de sesión de su navegador para recordar si ya vio la animación de inicio.",
        "Las cookies de analítica de Google Analytics (_ga, _ga_*) solo se instalan si usted las acepta en el aviso de cookies, y se conservan hasta dos años. No usamos cookies de publicidad. Su elección se guarda en su navegador y puede cambiarla en cualquier momento con el enlace \"Configuración de cookies\" al pie de cada página.",
      ] },
      { heading: "Cuánto tiempo guardamos sus datos", body: [
        "Guardamos los datos de su consulta durante el tiempo necesario para atenderla y para la relación que pueda surgir, y luego los eliminamos, salvo que la ley nos obligue a conservarlos.",
      ] },
      { heading: "Sus derechos", body: [
        "Puede pedirnos en cualquier momento acceso, rectificación o supresión de sus datos, oponerse a su tratamiento o solicitar una copia, escribiendo a ines@sacramentumcapital.com. También puede presentar una reclamación ante la Unidad Reguladora y de Control de Datos Personales (URCDP) de Uruguay o, si reside en la Unión Europea, ante la autoridad de control de su país.",
        "Esta política se rige por la Ley 18.331 de Protección de Datos Personales de Uruguay y, para visitantes de la Unión Europea, por el Reglamento General de Protección de Datos (RGPD).",
      ] },
    ],
  },
  de: {
    metaTitle: "Datenschutz",
    metaDescription: "Wie Sacramentum Advisors die über das Kontaktformular gesendeten Daten und die Cookies dieser Website verarbeitet.",
    title:     "Datenschutzerklärung",
    updated:   "Stand: Oktober 2026",
    sections: [
      { heading: "Verantwortlicher", body: ["Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist Sacramentum Advisors, Carrasco, Montevideo, Uruguay. Kontakt: ines@sacramentumcapital.com."] },
      { heading: "Welche Daten wir erheben und wozu", body: [
        "Wenn Sie das Kontaktformular nutzen, erheben wir Ihren Namen, Ihre E-Mail-Adresse, Ihre Telefonnummer (optional), Ihr Wohnsitzland, Ihr Interessengebiet und Ihre Nachricht. Wir verwenden diese Angaben ausschließlich, um Ihre Anfrage zu beantworten und auf Wunsch ein Beratungsgespräch vorzubereiten.",
        "Wir verkaufen Ihre Daten nicht und nutzen sie nicht zu Werbezwecken.",
      ] },
      { heading: "Dienstleister", body: [
        "Das Kontaktformular wird über Formspree übermittelt, die Website wird von Vercel gehostet. Beide handeln in unserem Auftrag und können Daten auf Servern in den Vereinigten Staaten verarbeiten.",
        "Wenn Sie Analyse-Cookies akzeptieren, nutzen wir Google Analytics, eingebunden über den Google Tag Manager (Google Ireland Limited / Google LLC), um zu messen, wie die Website genutzt wird: besuchte Seiten, ungefähres Land, Gerätetyp und wie Sie auf die Website gelangt sind. Google kann diese Daten auf Servern in den Vereinigten Staaten verarbeiten.",
      ] },
      { heading: "Cookies und lokaler Speicher", body: [
        "Die Website speichert Ihre Sprachwahl in einem Cookie (NEXT_LOCALE) für bis zu ein Jahr, damit sie beim nächsten Besuch in Ihrer Sprache öffnet, und nutzt den Sitzungsspeicher Ihres Browsers, um sich zu merken, ob die Eingangsanimation bereits gezeigt wurde.",
        "Analyse-Cookies von Google Analytics (_ga, _ga_*) werden nur gesetzt, wenn Sie im Cookie-Hinweis zustimmen, und bis zu zwei Jahre gespeichert. Werbe-Cookies verwenden wir nicht. Ihre Wahl wird in Ihrem Browser gespeichert, und Sie können sie jederzeit über den Link \"Cookie-Einstellungen\" am Ende jeder Seite ändern.",
      ] },
      { heading: "Speicherdauer", body: [
        "Wir speichern Anfragedaten so lange, wie es für die Bearbeitung Ihrer Anfrage und eine sich daraus ergebende Beziehung erforderlich ist, und löschen sie danach, sofern keine gesetzliche Aufbewahrungspflicht besteht.",
      ] },
      { heading: "Ihre Rechte", body: [
        "Sie können jederzeit Auskunft über Ihre Daten, deren Berichtigung oder Löschung verlangen, der Verarbeitung widersprechen oder eine Kopie anfordern, per E-Mail an ines@sacramentumcapital.com. Sie können sich außerdem bei der uruguayischen Datenschutzbehörde (Unidad Reguladora y de Control de Datos Personales) oder, wenn Sie in der Europäischen Union leben, bei der Aufsichtsbehörde Ihres Landes beschweren.",
        "Für diese Erklärung gelten das uruguayische Datenschutzgesetz Nr. 18.331 und, für Besucher in der Europäischen Union, die Datenschutz-Grundverordnung (DSGVO).",
      ] },
    ],
  },
};
