import type { TopicCopy } from "@/lib/topics";

// DRAFT — pending approval by Inés. DE: draft by Claude, pending native review. "Plan B" in EN/DE = second passport.
// Keywords: uruguay passport, uruguay citizenship, second passport, second
// citizenship, how to get a second passport · pasaporte uruguayo, ciudadanía
// uruguaya · zweite staatsbürgerschaft. Facts used: Constitution art. 75
// (3 years with family / 5 without), Carta de Ciudadanía at the Corte Electoral.
// Not used until verified: passport nationality code (URY) change.

const copy: TopicCopy = {
  en: {
    metaTitle:       "Uruguay Passport & Second Citizenship",
    metaDescription: "Can you get a second passport through Uruguay? Not by investment: the real path from residency to legal citizenship, how long it takes and what it needs.",
    navLabel:        "Second passport",
    cardText:        "The honest path from residency to Uruguayan citizenship — and what it takes.",
    eyebrow:         "Citizenship & second passport",
    title:           "A second passport through Uruguay",
    intro: [
      "Uruguay allows multiple citizenship, and its legal citizenship is a real path to a second passport. But it is not a citizenship-by-investment programme: you cannot buy a passport by buying property or making a deposit.",
      "The path runs through genuine residence. We help you plan it from the first residency application, so the years you spend count.",
    ],
    image: { src: "/images/bandera.webp", alt: "Uruguayan flag" },
    sections: [
      {
        heading: "Not citizenship by investment",
        body: [
          "Unlike programmes in some Caribbean or European countries, Uruguay does not grant citizenship in exchange for an investment. Any offer of a fast Uruguayan passport for a payment should be treated with caution.",
        ],
      },
      {
        heading: "How Uruguayan legal citizenship works",
        body: [
          "Under article 75 of the Uruguayan Constitution, foreign nationals can apply for legal citizenship after a period of habitual residence in the country:",
        ],
        bullets: [
          "3 years of residence for applicants with a family established in Uruguay.",
          "5 years of residence for applicants without a family established in Uruguay.",
          "Good conduct and a means of living or economic connection with the country.",
        ],
      },
      {
        heading: "Residence has to be real",
        body: [
          "Citizenship is granted on the basis of genuine, habitual residence. Long absences from Uruguay during the qualifying period can affect the count, so the plan has to fit how much time you can really spend in the country.",
        ],
      },
      {
        heading: "From citizenship to passport",
        body: [
          "Once the requirements are met, the application for the citizenship letter (Carta de Ciudadanía) is filed with the Electoral Court (Corte Electoral). With the citizenship granted, you can apply for your Uruguayan identity card and passport.",
          "Legal citizenship, nationality and the details printed in the passport are distinct legal concepts. We review how your status will be recognised for the countries that matter to you before you apply.",
        ],
      },
    ],
    steps: {
      heading: "The path, step by step",
      items: [
        { title: "Residency",        body: "Apply for legal residency and settle in Uruguay." },
        { title: "Qualifying years", body: "Three or five years of genuine residence, documented." },
        { title: "Citizenship",      body: "Application for the Carta de Ciudadanía at the Corte Electoral." },
        { title: "Passport",         body: "Uruguayan identity card and passport." },
      ],
    },
    faqs: [
      { q: "Can I buy Uruguayan citizenship?", a: "No. Uruguay has no citizenship-by-investment programme. Legal citizenship requires years of genuine residence in the country." },
      { q: "How long does it take to get a Uruguayan passport?", a: "The Constitution requires 3 years of residence for applicants with a family established in Uruguay and 5 years for those without, plus the time to process the citizenship application and issue the passport." },
      { q: "Do I have to give up my current citizenship?", a: "Uruguay allows multiple citizenship. Whether you can keep your original citizenship depends on the law of your country of origin." },
      { q: "Do I need to live in Uruguay to qualify?", a: "Yes. Citizenship is based on habitual residence, and long absences during the qualifying period can affect it." },
    ],
    cta: {
      heading: "Planning a second passport?",
      body:    "We map the route from your first residency application to citizenship, and how it fits the time you can spend in Uruguay.",
      label:   "Book a consultation",
    },
  },

  es: {
    metaTitle:       "Pasaporte uruguayo y ciudadanía legal",
    metaDescription: "¿Un segundo pasaporte a través de Uruguay? No por inversión: el camino real de la residencia a la ciudadanía legal, cuánto tarda y qué exige.",
    navLabel:        "Pasaporte uruguayo",
    cardText:        "El camino real de la residencia a la ciudadanía uruguaya, y lo que exige.",
    eyebrow:         "Ciudadanía y pasaporte",
    title:           "Un segundo pasaporte a través de Uruguay",
    intro: [
      "Uruguay permite la ciudadanía múltiple, y su ciudadanía legal es un camino real hacia un segundo pasaporte. Pero no es un programa de ciudadanía por inversión: no se obtiene comprando una propiedad ni haciendo un depósito.",
      "El camino pasa por una residencia genuina. Le ayudamos a planificarlo desde el primer trámite de residencia, para que los años que pase en el país cuenten.",
    ],
    image: { src: "/images/bandera.webp", alt: "Bandera de Uruguay" },
    sections: [
      {
        heading: "No es ciudadanía por inversión",
        body: [
          "A diferencia de programas de algunos países del Caribe o de Europa, Uruguay no otorga la ciudadanía a cambio de una inversión. Cualquier oferta de un pasaporte uruguayo rápido a cambio de un pago debe tomarse con cautela.",
        ],
      },
      {
        heading: "Cómo funciona la ciudadanía legal uruguaya",
        body: [
          "Según el artículo 75 de la Constitución, los extranjeros pueden solicitar la ciudadanía legal después de un período de residencia habitual en el país:",
        ],
        bullets: [
          "3 años de residencia para quienes tienen familia constituida en Uruguay.",
          "5 años de residencia para quienes no tienen familia constituida en Uruguay.",
          "Buena conducta y medios de vida o vínculo económico con el país.",
        ],
      },
      {
        heading: "La residencia tiene que ser real",
        body: [
          "La ciudadanía se otorga sobre la base de una residencia genuina y habitual. Las ausencias largas durante el período pueden afectar el cómputo, así que el plan tiene que ajustarse al tiempo que realmente puede pasar en el país.",
        ],
      },
      {
        heading: "De la ciudadanía al pasaporte",
        body: [
          "Cumplidos los requisitos, la Carta de Ciudadanía se solicita ante la Corte Electoral. Con la ciudadanía otorgada, puede tramitar la cédula y el pasaporte uruguayos.",
          "La ciudadanía legal, la nacionalidad y los datos que figuran en el pasaporte son conceptos jurídicos distintos. Revisamos cómo se reconocerá su situación en los países que le importan antes de iniciar el trámite.",
        ],
      },
    ],
    steps: {
      heading: "El camino, paso a paso",
      items: [
        { title: "Residencia",         body: "Tramitar la residencia legal e instalarse en Uruguay." },
        { title: "Años de residencia", body: "Tres o cinco años de residencia genuina, documentada." },
        { title: "Ciudadanía",         body: "Solicitud de la Carta de Ciudadanía ante la Corte Electoral." },
        { title: "Pasaporte",          body: "Cédula y pasaporte uruguayos." },
      ],
    },
    faqs: [
      { q: "¿Se puede comprar la ciudadanía uruguaya?", a: "No. Uruguay no tiene un programa de ciudadanía por inversión. La ciudadanía legal exige años de residencia genuina en el país." },
      { q: "¿Cuánto tarda obtener el pasaporte uruguayo?", a: "La Constitución exige 3 años de residencia para quienes tienen familia constituida en Uruguay y 5 años para quienes no, más el tiempo de trámite de la ciudadanía y del pasaporte." },
      { q: "¿Tengo que renunciar a mi ciudadanía actual?", a: "Uruguay permite la ciudadanía múltiple. Si puede conservar su ciudadanía de origen depende de la ley de su país." },
      { q: "¿Tengo que vivir en Uruguay para obtenerla?", a: "Sí. La ciudadanía se basa en la residencia habitual, y las ausencias largas durante el período pueden afectarla." },
    ],
    cta: {
      heading: "¿Planificando un segundo pasaporte?",
      body:    "Armamos la ruta desde el primer trámite de residencia hasta la ciudadanía, y cómo se ajusta al tiempo que puede pasar en Uruguay.",
      label:   "Agendar una consulta",
    },
  },
  de: {
    metaTitle:       "Zweiter Reisepass über Uruguay",
    metaDescription: "Zweite Staatsbürgerschaft über Uruguay? Nicht durch Investition: der Weg vom Aufenthalt zur Einbürgerung, wie lange er dauert und was er verlangt.",
    navLabel:        "Zweiter Reisepass",
    cardText:        "Der ehrliche Weg vom Aufenthalt zur uruguayischen Staatsbürgerschaft – und was er verlangt.",
    eyebrow:         "Staatsbürgerschaft und zweiter Pass",
    title:           "Ein zweiter Reisepass über Uruguay",
    intro: [
      "Uruguay erlaubt die mehrfache Staatsbürgerschaft, und seine gesetzliche Staatsbürgerschaft ist ein echter Weg zu einem zweiten Reisepass. Es ist aber kein Programm „Staatsbürgerschaft durch Investition“: Einen Pass bekommt man nicht durch einen Immobilienkauf oder eine Einlage.",
      "Der Weg führt über einen echten Aufenthalt im Land. Wir planen ihn mit Ihnen ab dem ersten Aufenthaltsantrag, damit die Jahre, die Sie in Uruguay verbringen, auch zählen.",
    ],
    image: { src: "/images/bandera.webp", alt: "Flagge von Uruguay" },
    sections: [
      {
        heading: "Keine Staatsbürgerschaft durch Investition",
        body: [
          "Anders als Programme einiger Karibikstaaten oder europäischer Länder vergibt Uruguay die Staatsbürgerschaft nicht gegen eine Investition. Angebote für einen schnellen uruguayischen Pass gegen Zahlung sollten Sie mit großer Vorsicht behandeln.",
        ],
      },
      {
        heading: "Wie die Einbürgerung in Uruguay funktioniert",
        body: ["Nach Artikel 75 der uruguayischen Verfassung können Ausländer die gesetzliche Staatsbürgerschaft nach einer Zeit des gewöhnlichen Aufenthalts beantragen:"],
        bullets: [
          "3 Jahre Aufenthalt für Antragsteller mit in Uruguay gegründeter Familie.",
          "5 Jahre Aufenthalt für Antragsteller ohne Familie in Uruguay.",
          "Guter Leumund sowie Lebensunterhalt oder wirtschaftliche Bindung an das Land.",
        ],
      },
      {
        heading: "Der Aufenthalt muss echt sein",
        body: [
          "Die Staatsbürgerschaft wird auf Grundlage eines tatsächlichen, gewöhnlichen Aufenthalts vergeben. Längere Abwesenheiten während der Frist können die Berechnung beeinflussen – der Plan muss also zu der Zeit passen, die Sie wirklich in Uruguay verbringen können.",
        ],
      },
      {
        heading: "Den deutschen Pass behalten",
        body: [
          "Seit der Reform des deutschen Staatsangehörigkeitsrechts 2024 ist die Mehrstaatigkeit in Deutschland grundsätzlich erlaubt. Für Österreicher und Schweizer gelten eigene Regeln, die wir vor dem Antrag prüfen.",
          "Gesetzliche Staatsbürgerschaft, Staatsangehörigkeit und die Angaben im Pass sind in Uruguay getrennte rechtliche Begriffe. Wir klären vorab, wie Ihr Status in den Ländern anerkannt wird, die für Sie wichtig sind.",
        ],
      },
    ],
    steps: {
      heading: "Der Weg, Schritt für Schritt",
      items: [
        { title: "Aufenthalt",          body: "Aufenthaltsgenehmigung beantragen und sich in Uruguay niederlassen." },
        { title: "Anrechnungsjahre",    body: "Drei oder fünf Jahre tatsächlicher, dokumentierter Aufenthalt." },
        { title: "Staatsbürgerschaft",  body: "Antrag auf die Carta de Ciudadanía beim Wahlgericht (Corte Electoral)." },
        { title: "Reisepass",           body: "Uruguayischer Personalausweis und Reisepass." },
      ],
    },
    faqs: [
      { q: "Kann man die uruguayische Staatsbürgerschaft kaufen?", a: "Nein. Uruguay hat kein Programm für Staatsbürgerschaft durch Investition. Die Einbürgerung setzt mehrere Jahre echten Aufenthalt im Land voraus." },
      { q: "Wie lange dauert es bis zum uruguayischen Pass?", a: "Die Verfassung verlangt 3 Jahre Aufenthalt mit Familie in Uruguay und 5 Jahre ohne, zuzüglich der Bearbeitungszeit für Staatsbürgerschaft und Pass." },
      { q: "Muss ich meine deutsche Staatsangehörigkeit aufgeben?", a: "Seit 2024 erlaubt Deutschland die Mehrstaatigkeit grundsätzlich, und auch Uruguay erlaubt mehrere Staatsbürgerschaften. Ihren konkreten Fall prüfen wir vor dem Antrag." },
      { q: "Muss ich in Uruguay leben?", a: "Ja. Die Einbürgerung beruht auf dem gewöhnlichen Aufenthalt; lange Abwesenheiten können die Frist beeinflussen." },
    ],
    cta: {
      heading: "Sie planen einen zweiten Reisepass?",
      body:    "Wir planen den Weg vom ersten Aufenthaltsantrag bis zur Einbürgerung – passend zu der Zeit, die Sie in Uruguay verbringen können.",
      label:   "Beratung vereinbaren",
    },
  },
};

export default copy;
