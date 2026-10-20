import type { TopicCopy } from "@/lib/topics";

// DRAFT — pending approval by Inés AND by Sacramentum Capital.
// Source: ~/Desktop/Sacramentum_Capital_Presentation.pdf (CONFIDENTIAL).
// Deliberately omitted until the client confirms what may be published:
// all figures (closed volume, mandate counts, per-transaction amounts), client
// names (public entities and companies) and the selected-transactions list.
// Kept: positioning, practice areas and the founding partner's career, which
// is already public on the team section.
// OPEN: the public bio says "VP at J.P. Morgan and Lehman Brothers"; the PDF
// says "Bozano Simonsen, then JPMorgan (Executive Director)". Only the common
// fact (J.P. Morgan) is used until the client confirms.

const copy: TopicCopy = {
  en: {
    metaTitle:       "Sacramentum Capital | Investment Banking, Montevideo", metaTitleAbsolute: true,
    metaDescription: "Sacramentum Capital, investment banking boutique in Montevideo: structured finance, capital markets and cross-border M&A in the Southern Cone.",
    navLabel:        "Sacramentum Capital",
    cardText:        "Our investment banking boutique: structured finance, capital markets and cross-border M&A.",
    eyebrow:         "Investment banking boutique",
    title:           "Sacramentum Capital",
    intro: [
      "Sacramentum Capital is an investment banking boutique headquartered in Montevideo, specialized in strategic financial advisory across the Southern Cone.",
      "We advise on structured finance, capital markets and cross-border M&A — working with regional companies, institutional investors and public entities on transactions that require both technical depth and local judgment.",
    ],
    image: { src: "/images/puerto.webp", alt: "Port of Montevideo" },
    sections: [
      {
        heading: "Areas of focus",
        body: [],
        bullets: [
          "Infrastructure & energy — financing for energy, road and infrastructure projects, including debt vehicles placed with local institutional investors.",
          "Capital markets — bond issuances, IPOs, private placements and liability management for public and private clients.",
          "Regional M&A — advising buyers and sellers on cross-border transactions across Uruguay, Brazil, Argentina and Chile, in sectors from fintech and technology to hospitality, agribusiness and insurance.",
        ],
      },
      {
        heading: "Senior-led execution",
        body: [
          "Every mandate is led personally by our founding partner, Pablo Mautone, from origination through closing — with no junior handoffs at critical stages.",
          "Pablo brings an international investment banking career, including J.P. Morgan, and founded Sacramentum Capital in Montevideo on returning to Uruguay.",
        ],
      },
      {
        heading: "Built on referrals and discretion",
        body: [
          "Sacramentum Capital has grown through referrals from former clients, institutional partners and regional peers, and has advised across sectors and successive administrations.",
          "The Southern Cone's most consequential transactions rarely make headlines. We work comfortably in that space — where confidentiality and trust matter as much as technical execution.",
        ],
      },
      {
        heading: "Sacramentum Capital and Sacramentum Advisors",
        body: [
          "Sacramentum Capital advises companies, institutions and public entities on corporate finance transactions. Sacramentum Advisors advises international investors, families and family offices on investing and settling in Uruguay. When a client of Sacramentum Advisors considers a transaction led by Sacramentum Capital, we disclose that relationship.",
        ],
      },
    ],
    faqs: [
      { q: "What does Sacramentum Capital do?", a: "It is an investment banking boutique in Montevideo that advises on structured finance, capital markets and cross-border M&A across the Southern Cone." },
      { q: "Who leads Sacramentum Capital's mandates?", a: "Every mandate is led personally by the founding partner, Pablo Mautone, with an international investment banking career including J.P. Morgan." },
      { q: "In which countries does it work?", a: "Uruguay, Brazil, Argentina and Chile, for regional and international buyers, sellers and investors." },
    ],
    cta: {
      heading: "Considering a transaction in the Southern Cone?",
      body:    "Speak with the team about financing, capital markets or a sale or acquisition. Every conversation is confidential.",
      label:   "Contact our team",
    },
  },

  es: {
    metaTitle:       "Sacramentum Capital | Banca de inversión, Montevideo", metaTitleAbsolute: true,
    metaDescription: "Sacramentum Capital, boutique de banca de inversión en Montevideo: finanzas estructuradas, mercado de capitales y M&A en el Cono Sur.",
    navLabel:        "Sacramentum Capital",
    cardText:        "Nuestra boutique de banca de inversión: finanzas estructuradas, mercado de capitales y M&A transfronterizo.",
    eyebrow:         "Boutique de banca de inversión",
    title:           "Sacramentum Capital",
    intro: [
      "Sacramentum Capital es una boutique de banca de inversión con sede en Montevideo, especializada en asesoramiento financiero estratégico en el Cono Sur.",
      "Asesoramos en finanzas estructuradas, mercado de capitales y M&A transfronterizo, trabajando con empresas regionales, inversores institucionales y entidades públicas en transacciones que requieren profundidad técnica y conocimiento local.",
    ],
    image: { src: "/images/puerto.webp", alt: "Puerto de Montevideo" },
    sections: [
      {
        heading: "Áreas de enfoque",
        body: [],
        bullets: [
          "Infraestructura y energía: financiamiento de proyectos de energía, vialidad e infraestructura, incluidos vehículos de deuda colocados entre inversores institucionales locales.",
          "Mercado de capitales: emisiones de bonos, IPOs, colocaciones privadas y gestión de pasivos para clientes públicos y privados.",
          "M&A regional: asesoramiento a compradores y vendedores en transacciones transfronterizas en Uruguay, Brasil, Argentina y Chile, en sectores que van de fintech y tecnología a hotelería, agronegocios y seguros.",
        ],
      },
      {
        heading: "Ejecución liderada por socios",
        body: [
          "Cada mandato es dirigido personalmente por nuestro socio fundador, Pablo Mautone, de inicio a cierre, sin delegar en etapas críticas.",
          "Pablo tiene una trayectoria internacional en banca de inversión, que incluye J.P. Morgan, y fundó Sacramentum Capital en Montevideo al regresar a Uruguay.",
        ],
      },
      {
        heading: "Construida sobre referencias y discreción",
        body: [
          "Sacramentum Capital creció a través de referencias de clientes anteriores, socios institucionales y pares regionales, y ha asesorado en distintos sectores y a lo largo de sucesivas administraciones.",
          "Las transacciones más relevantes del Cono Sur rara vez trascienden. Trabajamos cómodamente en ese espacio, donde la confidencialidad y la confianza importan tanto como la ejecución técnica.",
        ],
      },
      {
        heading: "Sacramentum Capital y Sacramentum Advisors",
        body: [
          "Sacramentum Capital asesora a empresas, instituciones y entidades públicas en transacciones de finanzas corporativas. Sacramentum Advisors asesora a inversores internacionales, familias y family offices para invertir e instalarse en Uruguay. Cuando un cliente de Sacramentum Advisors evalúa una transacción liderada por Sacramentum Capital, informamos ese vínculo.",
        ],
      },
    ],
    faqs: [
      { q: "¿Qué hace Sacramentum Capital?", a: "Es una boutique de banca de inversión con sede en Montevideo que asesora en finanzas estructuradas, mercado de capitales y M&A transfronterizo en el Cono Sur." },
      { q: "¿Quién lidera los mandatos de Sacramentum Capital?", a: "Cada mandato es dirigido personalmente por el socio fundador, Pablo Mautone, con trayectoria internacional en banca de inversión, incluida J.P. Morgan." },
      { q: "¿En qué países trabaja?", a: "En Uruguay, Brasil, Argentina y Chile, para compradores, vendedores e inversores regionales e internacionales." },
    ],
    cta: {
      heading: "¿Evaluando una transacción en el Cono Sur?",
      body:    "Hable con el equipo sobre financiamiento, mercado de capitales o una compra o venta. Toda conversación es confidencial.",
      label:   "Contactar al equipo",
    },
  },
  de: {
    metaTitle:       "Sacramentum Capital | Investment Banking, Montevideo", metaTitleAbsolute: true,
    metaDescription: "Sacramentum Capital, Investment-Banking-Boutique in Montevideo: strukturierte Finanzierungen, Kapitalmärkte und M&A im Southern Cone.",
    navLabel:        "Sacramentum Capital",
    cardText:        "Unsere Investment-Banking-Boutique: strukturierte Finanzierungen, Kapitalmärkte und grenzüberschreitende M&A.",
    eyebrow:         "Investment-Banking-Boutique",
    title:           "Sacramentum Capital",
    intro: [
      "Sacramentum Capital ist eine Investment-Banking-Boutique mit Sitz in Montevideo, spezialisiert auf strategische Finanzberatung im Southern Cone.",
      "Wir beraten zu strukturierten Finanzierungen, Kapitalmärkten und grenzüberschreitenden M&A – für regionale Unternehmen, institutionelle Investoren und öffentliche Einrichtungen, bei Transaktionen, die fachliche Tiefe und lokales Urteilsvermögen verlangen.",
    ],
    image: { src: "/images/puerto.webp", alt: "Hafen von Montevideo" },
    sections: [
      {
        heading: "Schwerpunkte",
        body: [],
        bullets: [
          "Infrastruktur und Energie – Finanzierung von Energie-, Straßen- und Infrastrukturprojekten, einschließlich Fremdkapitalvehikeln, die bei lokalen institutionellen Investoren platziert werden.",
          "Kapitalmärkte – Anleiheemissionen, Börsengänge, Privatplatzierungen und Liability Management für öffentliche und private Kunden.",
          "Regionale M&A – Beratung von Käufern und Verkäufern bei grenzüberschreitenden Transaktionen in Uruguay, Brasilien, Argentinien und Chile, von Fintech und Technologie bis zu Hotellerie, Agribusiness und Versicherungen.",
        ],
      },
      {
        heading: "Umsetzung auf Partnerebene",
        body: [
          "Jedes Mandat wird von unserem Gründungspartner Pablo Mautone persönlich geführt – von der Anbahnung bis zum Abschluss, ohne Übergabe an Junior-Teams in kritischen Phasen.",
          "Pablo bringt eine internationale Laufbahn im Investment Banking mit, unter anderem bei J.P. Morgan, und gründete Sacramentum Capital nach seiner Rückkehr nach Uruguay in Montevideo.",
        ],
      },
      {
        heading: "Aufgebaut auf Empfehlungen und Diskretion",
        body: [
          "Sacramentum Capital ist über Empfehlungen früherer Kunden, institutioneller Partner und regionaler Kollegen gewachsen und hat sektorübergreifend und über mehrere Regierungen hinweg beraten.",
          "Die wichtigsten Transaktionen im Southern Cone machen selten Schlagzeilen. In diesem Umfeld arbeiten wir – wo Vertraulichkeit und Vertrauen ebenso zählen wie technische Umsetzung.",
        ],
      },
      {
        heading: "Sacramentum Capital und Sacramentum Advisors",
        body: [
          "Sacramentum Capital berät Unternehmen, Institutionen und öffentliche Einrichtungen bei Transaktionen der Unternehmensfinanzierung. Sacramentum Advisors berät internationale Investoren, Familien und Family Offices beim Investieren und Ankommen in Uruguay. Wenn ein Kunde von Sacramentum Advisors eine Transaktion von Sacramentum Capital prüft, legen wir diese Verbindung offen.",
        ],
      },
    ],
    faqs: [
      { q: "Was macht Sacramentum Capital?", a: "Eine Investment-Banking-Boutique in Montevideo, die zu strukturierten Finanzierungen, Kapitalmärkten und grenzüberschreitenden M&A im Southern Cone berät." },
      { q: "Wer führt die Mandate von Sacramentum Capital?", a: "Jedes Mandat wird vom Gründungspartner Pablo Mautone persönlich geführt, der eine internationale Laufbahn im Investment Banking mitbringt, unter anderem bei J.P. Morgan." },
      { q: "In welchen Ländern ist Sacramentum Capital tätig?", a: "In Uruguay, Brasilien, Argentinien und Chile, für regionale und internationale Käufer, Verkäufer und Investoren." },
    ],
    cta: {
      heading: "Sie prüfen eine Transaktion im Southern Cone?",
      body:    "Sprechen Sie mit dem Team über Finanzierung, Kapitalmärkte oder einen Kauf oder Verkauf. Jedes Gespräch ist vertraulich.",
      label:   "Team kontaktieren",
    },
  },
};

export default copy;
