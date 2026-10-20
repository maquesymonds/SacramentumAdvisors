import type { TopicCopy } from "@/lib/topics";

// DRAFT — pending approval by Inés AND verification of the 2026 regime.
// Deliberately contains NO thresholds, rates or law numbers for the new-resident
// regime: both AIs contradict each other on them (docs/seo/RESEARCH-SUMMARY.md §5).
// A "2026 rules in detail" section is added only after the client/contador
// confirms the figures. Keywords: residencia fiscal uruguay, irpf uruguay,
// cambiar residencia fiscal, convenio doble imposición · uruguay taxes.

const copy: TopicCopy = {
  en: {
    metaTitle:       "Uruguay Tax Residency: 2026 Rules",
    metaDescription: "How tax residency in Uruguay works, how it differs from legal residency, what changed for new residents in 2026 and what to review at home first.",
    navLabel:        "Tax residency",
    cardText:        "How Uruguayan tax residency works, what changed in 2026 and what to review in your home country first.",
    eyebrow:         "Tax residency",
    title:           "Tax residency in Uruguay",
    intro: [
      "Uruguay's tax system has long attracted international families and investors. But tax residency is not a formality, and the rules for new residents changed on 1 January 2026.",
      "We help you understand whether Uruguayan tax residency makes sense for you, coordinate the Uruguayan and home-country tax advisors, and make sure the decision is taken before any money moves.",
    ],
    image: { src: "/images/firmando.avif", alt: "Signing documents with an advisor" },
    sections: [
      {
        heading: "Legal residency is not tax residency",
        body: [
          "Legal residency gives you the right to live in Uruguay. Tax residency determines where you are taxed, and it is assessed every calendar year under its own criteria. You can have one without the other.",
        ],
      },
      {
        heading: "How you become a tax resident in Uruguay",
        body: ["The Uruguayan tax authority (DGI) recognises several grounds. The main ones are:"],
        bullets: [
          "Physical presence: spending more than 183 days in Uruguay in a calendar year.",
          "Centre of vital interests: your family (spouse and dependent children) lives in Uruguay.",
          "Centre of economic interests: your main activities or income are in Uruguay, including certain qualifying investments under conditions set by law.",
        ],
      },
      {
        heading: "What changed in 2026",
        body: [
          "Since 1 January 2026, new rules apply to people who become tax residents in Uruguay, including changes to how certain foreign-source income is taxed and to the special regime for new residents.",
          "Many guides online still describe the previous rules. Before you base a decision on a tax benefit, we confirm the current requirements in writing with a Uruguayan tax advisor for your specific income and assets.",
        ],
      },
      {
        heading: "Your home country matters as much",
        body: [
          "Becoming a tax resident in Uruguay does not automatically end your tax obligations elsewhere. Each country has its own exit rules:",
        ],
        bullets: [
          "United States: citizens are taxed on worldwide income regardless of residence, with foreign-account reporting obligations.",
          "Argentina: losing Argentine tax residency follows its own rules before ARCA.",
          "Germany: shareholders may face exit taxation (Wegzugsbesteuerung) and extended tax liability after moving to a low-tax country.",
          "Spain: Spanish tax residency rules and the Spain–Uruguay double taxation treaty apply.",
        ],
      },
    ],
    steps: {
      heading: "How we approach it",
      items: [
        { title: "Diagnosis",           body: "Your income, assets, family and current tax residency." },
        { title: "Two-country review",  body: "Uruguayan and home-country advisors, working on the same file." },
        { title: "Decision in writing", body: "Which ground applies, what it requires and what it costs." },
        { title: "Implementation",      body: "Certificate from the DGI, and the exit steps in your home country." },
      ],
    },
    faqs: [
      { q: "How many days do I need to spend in Uruguay to be a tax resident?", a: "More than 183 days in a calendar year is one of the grounds for tax residency. There are others, based on where your family lives or where your economic interests are." },
      { q: "Does Uruguay tax foreign income?", a: "Uruguay's system is largely based on Uruguayan-source income, but certain foreign-source income is taxed, and the rules for new residents changed in 2026. The answer depends on the type of income — we confirm it for your case." },
      { q: "Does buying property make me a tax resident?", a: "Not on its own. Certain qualifying investments can be one of the grounds for tax residency, under conditions set by law that we review with you." },
      { q: "Is the Uruguayan 'tax holiday' still available?", a: "The regime for new tax residents was modified as of 1 January 2026. Many descriptions online are outdated; we confirm the current conditions before you decide." },
    ],
    cta: {
      heading: "Considering tax residency in Uruguay?",
      body:    "Start with a two-country diagnosis. It is the cheapest decision you will take in the whole process.",
      label:   "Book a consultation",
    },
  },

  es: {
    metaTitle:       "Residencia fiscal en Uruguay (2026)",
    metaDescription: "Cómo obtener la residencia fiscal en Uruguay, en qué se diferencia de la legal, qué cambió en 2026 y qué revisar antes en Argentina o España.",
    navLabel:        "Residencia fiscal",
    cardText:        "Cómo funciona la residencia fiscal en Uruguay, qué cambió en 2026 y qué revisar antes en su país.",
    eyebrow:         "Residencia fiscal",
    title:           "Residencia fiscal en Uruguay",
    intro: [
      "El sistema tributario uruguayo atrae desde hace años a familias e inversores internacionales. Pero la residencia fiscal no es un trámite menor, y las reglas para los nuevos residentes cambiaron el 1 de enero de 2026.",
      "Le ayudamos a entender si la residencia fiscal uruguaya tiene sentido en su caso, coordinamos a los asesores fiscales de Uruguay y de su país, y nos aseguramos de que la decisión se tome antes de mover dinero.",
    ],
    image: { src: "/images/firmando.avif", alt: "Firma de documentos con un asesor" },
    sections: [
      {
        heading: "La residencia legal no es la residencia fiscal",
        body: [
          "La residencia legal le da derecho a vivir en Uruguay. La residencia fiscal define dónde tributa, y se evalúa cada año civil con criterios propios. Se puede tener una sin la otra.",
        ],
      },
      {
        heading: "Cómo se obtiene la residencia fiscal en Uruguay",
        body: ["La Dirección General Impositiva (DGI) reconoce varias causales. Las principales son:"],
        bullets: [
          "Permanencia: estar más de 183 días en Uruguay durante el año civil.",
          "Núcleo de intereses vitales: su familia (cónyuge e hijos menores a cargo) vive en Uruguay.",
          "Núcleo de intereses económicos: sus principales actividades o ingresos están en Uruguay, incluidas ciertas inversiones que califican según las condiciones de la ley.",
        ],
      },
      {
        heading: "Qué cambió en 2026",
        body: [
          "Desde el 1 de enero de 2026 rigen nuevas reglas para quienes se convierten en residentes fiscales en Uruguay, incluidos cambios en la tributación de ciertas rentas del exterior y en el régimen especial para nuevos residentes.",
          "Muchas guías en internet todavía describen las reglas anteriores. Antes de basar una decisión en un beneficio fiscal, confirmamos por escrito los requisitos vigentes con un asesor tributario uruguayo, para sus ingresos y su patrimonio.",
        ],
      },
      {
        heading: "Su país de origen importa igual",
        body: [
          "Ser residente fiscal en Uruguay no termina automáticamente sus obligaciones en otro país. Cada uno tiene sus propias reglas de salida:",
        ],
        bullets: [
          "Argentina: dejar de ser residente fiscal argentino tiene sus propios requisitos ante ARCA.",
          "España: aplican las reglas de residencia fiscal españolas y el convenio para evitar la doble imposición entre España y Uruguay.",
          "Estados Unidos: los ciudadanos tributan por su renta mundial, vivan donde vivan.",
          "Alemania: los socios de empresas pueden enfrentar el impuesto de salida (Wegzugsbesteuerung).",
        ],
      },
    ],
    steps: {
      heading: "Cómo lo abordamos",
      items: [
        { title: "Diagnóstico",           body: "Sus ingresos, su patrimonio, su familia y su residencia fiscal actual." },
        { title: "Revisión en dos países", body: "Asesores de Uruguay y de su país trabajando sobre el mismo caso." },
        { title: "Decisión por escrito",  body: "Qué causal aplica, qué exige y cuánto cuesta." },
        { title: "Implementación",        body: "Certificado de la DGI y los pasos de salida en su país." },
      ],
    },
    faqs: [
      { q: "¿Cuántos días tengo que estar en Uruguay para ser residente fiscal?", a: "Estar más de 183 días en el año civil es una de las causales de residencia fiscal. Hay otras, según dónde vive su familia o dónde están sus intereses económicos." },
      { q: "¿Uruguay grava los ingresos del exterior?", a: "El sistema uruguayo se basa principalmente en la renta de fuente uruguaya, pero ciertas rentas del exterior tributan, y las reglas para nuevos residentes cambiaron en 2026. Depende del tipo de ingreso: lo confirmamos para su caso." },
      { q: "¿Comprar una propiedad me hace residente fiscal?", a: "No por sí sola. Ciertas inversiones que califican pueden ser una de las causales de residencia fiscal, bajo condiciones que fija la ley y que revisamos con usted." },
      { q: "¿Sigue existiendo el 'tax holiday' en Uruguay?", a: "El régimen para nuevos residentes fiscales se modificó a partir del 1 de enero de 2026. Muchas descripciones en internet están desactualizadas; confirmamos las condiciones vigentes antes de que decida." },
    ],
    cta: {
      heading: "¿Evaluando la residencia fiscal en Uruguay?",
      body:    "Empiece por un diagnóstico en los dos países. Es la decisión más barata de todo el proceso.",
      label:   "Agendar una consulta",
    },
  },
  de: {
    metaTitle:       "Steuern beim Auswandern nach Uruguay",
    metaDescription: "Steuerlicher Wohnsitz in Uruguay, die Änderungen 2026, Wegzugsbesteuerung und erweitert beschränkte Steuerpflicht beim Wegzug aus Deutschland.",
    navLabel:        "Steuern und Wohnsitz",
    cardText:        "Steuerlicher Wohnsitz in Uruguay, die Änderungen 2026 und der Wegzug aus Deutschland.",
    eyebrow:         "Steuern beim Auswandern",
    title:           "Steuern beim Auswandern nach Uruguay",
    intro: [
      "Für deutsche Unternehmer und Vermögende beginnt die Frage nach Uruguay meist mit einer anderen: Was kostet der Wegzug aus Deutschland? Und welche Regeln gelten danach in Uruguay, wo sich die Bestimmungen für neue Steuerinländer zum 1. Januar 2026 geändert haben?",
      "Wir koordinieren Ihren deutschen Steuerberater und die uruguayischen Fachleute an einem gemeinsamen Fall, damit die Entscheidung getroffen wird, bevor Vermögen bewegt oder der Wohnsitz abgemeldet wird.",
    ],
    image: { src: "/images/firmando.avif", alt: "Unterzeichnung von Dokumenten mit einem Berater" },
    sections: [
      {
        heading: "Erst Deutschland, dann Uruguay",
        body: [
          "Der Wegzug aus Deutschland hat eigene steuerliche Folgen, die unabhängig davon gelten, wie günstig Uruguay für Sie ist. Die wichtigsten Stichworte:",
        ],
        bullets: [
          "Wegzugsbesteuerung (§ 6 AStG): Wer an einer Kapitalgesellschaft beteiligt ist, etwa an einer GmbH, und Deutschland verlässt, kann auf die Wertsteigerung seiner Anteile besteuert werden, als hätte er sie verkauft.",
          "Erweitert beschränkte Steuerpflicht (§ 2 AStG): Bei einem Umzug in ein Land mit niedriger Besteuerung kann Deutschland bestimmte Einkünfte noch bis zu zehn Jahre nach dem Wegzug besteuern, wenn wesentliche wirtschaftliche Interessen in Deutschland bestehen bleiben.",
          "Abmeldung und Lebensmittelpunkt: Solange ein Wohnsitz oder der gewöhnliche Aufenthalt in Deutschland bleibt, endet die unbeschränkte Steuerpflicht nicht.",
        ],
      },
      {
        heading: "Steuerlicher Wohnsitz in Uruguay",
        body: ["Die uruguayische Steuerbehörde (DGI) kennt mehrere Anknüpfungspunkte. Die wichtigsten sind:"],
        bullets: [
          "Aufenthalt: mehr als 183 Tage im Kalenderjahr in Uruguay.",
          "Mittelpunkt der Lebensinteressen: Ihre Familie (Ehepartner und unterhaltsberechtigte Kinder) lebt in Uruguay.",
          "Mittelpunkt der wirtschaftlichen Interessen: Ihre wesentlichen Tätigkeiten oder Einkünfte liegen in Uruguay, einschließlich bestimmter qualifizierter Investitionen unter den gesetzlichen Voraussetzungen.",
        ],
      },
      {
        heading: "Was sich 2026 geändert hat",
        body: [
          "Seit dem 1. Januar 2026 gelten neue Regeln für Personen, die in Uruguay steuerlich ansässig werden – unter anderem bei der Besteuerung bestimmter ausländischer Einkünfte und bei der Sonderregelung für neue Steuerinländer.",
          "Viele Ratgeber beschreiben noch die alten Regeln. Bevor Sie eine Entscheidung auf einen Steuervorteil stützen, bestätigen wir die aktuellen Voraussetzungen schriftlich mit einem uruguayischen Steuerberater – für Ihre konkreten Einkünfte und Ihr Vermögen.",
        ],
      },
      {
        heading: "Doppelbesteuerung",
        body: [
          "Ob und wie ein Doppelbesteuerungsabkommen zwischen Uruguay und Ihrem Herkunftsland greift, hängt von der Art der Einkünfte ab. Das prüfen wir gemeinsam mit Ihrem Steuerberater, bevor Sie umziehen – nicht danach.",
        ],
      },
    ],
    steps: {
      heading: "Wie wir vorgehen",
      items: [
        { title: "Bestandsaufnahme",          body: "Einkünfte, Beteiligungen, Vermögen, Familie und heutiger Wohnsitz." },
        { title: "Prüfung in zwei Ländern",   body: "Deutscher Steuerberater und uruguayische Fachleute an einem Fall." },
        { title: "Entscheidung schriftlich",  body: "Welche Grundlage gilt, was sie verlangt und was sie kostet." },
        { title: "Umsetzung",                 body: "Gestaltung vor dem Wegzug, Abmeldung und Bescheinigung der DGI." },
      ],
    },
    faqs: [
      { q: "Muss ich beim Auswandern nach Uruguay Wegzugsteuer zahlen?", a: "Wenn Sie an einer Kapitalgesellschaft wie einer GmbH beteiligt sind und die gesetzlichen Voraussetzungen erfüllen, kann die Wegzugsbesteuerung nach § 6 AStG greifen. Das sollte ein auf internationales Steuerrecht spezialisierter Steuerberater vor dem Umzug prüfen." },
      { q: "Wie viele Tage muss ich in Uruguay verbringen, um dort steuerlich ansässig zu sein?", a: "Mehr als 183 Tage im Kalenderjahr sind eine der Grundlagen. Es gibt weitere, je nachdem, wo Ihre Familie lebt oder wo Ihre wirtschaftlichen Interessen liegen." },
      { q: "Ist Uruguay eine Steueroase?", a: "Nein. Uruguay wendet internationale Transparenzstandards an. Sein Vorteil sind Stabilität und ein berechenbares Steuersystem, nicht Verschwiegenheit." },
      { q: "Gibt es den uruguayischen „Tax Holiday“ noch?", a: "Die Regelung für neue Steuerinländer wurde zum 1. Januar 2026 geändert. Viele Beschreibungen sind veraltet; wir bestätigen die aktuellen Bedingungen, bevor Sie entscheiden." },
    ],
    cta: {
      heading: "Sie planen den Wegzug nach Uruguay?",
      body:    "Beginnen Sie mit einer Prüfung in beiden Ländern. Es ist die günstigste Entscheidung des gesamten Prozesses.",
      label:   "Beratung vereinbaren",
    },
  },
};

export default copy;
