import type { TopicCopy } from "@/lib/topics";

// DRAFT — pending approval by Inés. DE: draft by Claude, pending native review. = "Strategic Advisory" + "Market
// Intelligence" services. The one query where ChatGPT already recommends
// Sacramentum (EN + DE, clean tests): family office / Plan B / asset protection.
// Wording follows the AI answers: lawful diversification, not secrecy;
// independence stated explicitly.

const copy: TopicCopy = {
  en: {
    metaTitle:       "Family Office Advisory in Uruguay",
    metaDescription: "For family offices and international families diversifying into Uruguay: real assets, market intelligence, residency and a lawful plan B.",
    navLabel:        "Family offices & wealth",
    cardText:        "Diversification into Uruguay for family offices and international families — with a local partner.",
    eyebrow:         "Family offices & wealth",
    title:           "Uruguay for family offices and international families",
    intro: [
      "Family offices look at Uruguay for what it offers that larger markets do not: institutional predictability, equal treatment of foreign investors, free movement of capital and access to real assets in a small, stable jurisdiction.",
      "We act as your local partner: we identify opportunities, provide the market intelligence behind each decision, and coordinate the legal, tax and operational specialists — so the family office deals with one counterpart in Uruguay.",
    ],
    image: { src: "/images/hands.webp", alt: "Advisors in a meeting" },
    sectionsHeading: "How we support family offices in Uruguay",
    sections: [
      {
        heading: "Why Uruguay for a family office",
        body: [],
        bullets: [
          "Institutional and legal stability, with the same rights for foreign and local investors.",
          "No exchange controls: capital and profits can be transferred abroad.",
          "Real assets — farmland, forestry, real estate, infrastructure — alongside an established financial-services sector.",
          "A residency path for family members and a base for the wider region.",
        ],
      },
      {
        heading: "Strategic advisory",
        body: [
          "Our legal and financial partners help identify opportunities, structure transactions and plan a solid landing in Uruguay and the region. We accompany acquisition, partnership and investment processes with a long-term view.",
        ],
      },
      {
        heading: "Market intelligence",
        body: [
          "We carry out studies and analysis of the market relevant to each opportunity: competition, risks, regulatory framework and business environment — clarity for entry, expansion or transaction decisions.",
        ],
      },
      {
        heading: "A plan B, built lawfully",
        body: [
          "For international families, Uruguay is often part of a plan B: residency for the family, banking relationships and part of the assets held in a second, stable jurisdiction. Asset protection here means lawful diversification — with full transparency, source-of-funds documentation and tax compliance in every country involved.",
        ],
      },
      {
        heading: "How we work",
        body: [
          "We work for our client. Before any mandate we explain how we are paid, and we disclose any relationship with the opportunities we present — including transactions led by Sacramentum Capital.",
        ],
      },
    ],
    faqs: [
      { q: "Why would a family office invest in Uruguay?", a: "For capital preservation and diversification: a stable, predictable jurisdiction with equal treatment for foreign investors, no exchange controls and access to real assets such as farmland, forestry and real estate." },
      { q: "Can family members also obtain residency?", a: "Yes. Residency and, where relevant, tax residency can be planned for family members alongside the investment strategy." },
      { q: "Is Uruguay a tax haven?", a: "No. Uruguay applies international transparency standards. Its appeal is stability and a predictable tax framework, not secrecy." },
      { q: "How does Sacramentum Advisors relate to Sacramentum Capital?", a: "Sacramentum Capital is the investment banking boutique of our network, focused on corporate finance, capital markets and M&A. We disclose that relationship whenever a Sacramentum Capital transaction is relevant to a client." },
    ],
    cta: {
      heading: "Exploring Uruguay for your family office?",
      body:    "Tell us about your mandate. We will map the opportunities and the advisors you need, in one conversation.",
      label:   "Book a consultation",
    },
  },

  es: {
    metaTitle:       "Family office y patrimonio en Uruguay",
    metaDescription: "Para family offices y familias internacionales que diversifican en Uruguay: activos reales, inteligencia de mercado, residencia y un plan B.",
    navLabel:        "Family office y patrimonio",
    cardText:        "Diversificación en Uruguay para family offices y familias internacionales, con un socio local.",
    eyebrow:         "Family office y patrimonio",
    title:           "Uruguay para family offices y familias internacionales",
    intro: [
      "Los family offices miran a Uruguay por lo que ofrece y los mercados más grandes no: previsibilidad institucional, igualdad de trato al inversor extranjero, libre movimiento de capitales y acceso a activos reales en una jurisdicción chica y estable.",
      "Actuamos como su socio local: identificamos oportunidades, aportamos la inteligencia de mercado detrás de cada decisión y coordinamos a los especialistas legales, fiscales y operativos, para que el family office tenga un solo interlocutor en Uruguay.",
    ],
    image: { src: "/images/hands.webp", alt: "Asesores en una reunión" },
    sectionsHeading: "Cómo acompañamos a un family office en Uruguay",
    sections: [
      {
        heading: "Por qué Uruguay para un family office",
        body: [],
        bullets: [
          "Estabilidad institucional y jurídica, con los mismos derechos para inversores extranjeros y locales.",
          "Sin controles de cambio: el capital y las utilidades pueden transferirse al exterior.",
          "Activos reales (campos, forestación, inmuebles, infraestructura) junto a un sector de servicios financieros consolidado.",
          "Un camino de residencia para la familia y una base para toda la región.",
        ],
      },
      {
        heading: "Asesoría estratégica",
        body: [
          "Nuestros socios legales y financieros ayudan a identificar oportunidades, estructurar operaciones y planificar un aterrizaje sólido en Uruguay y la región. Acompañamos procesos de adquisición, asociación e inversión con visión de largo plazo.",
        ],
      },
      {
        heading: "Inteligencia de mercado",
        body: [
          "Realizamos estudios y análisis del mercado relevante para cada oportunidad: competencia, riesgos, marco regulatorio y entorno de negocios, para dar claridad a las decisiones de entrada, expansión o transacción.",
        ],
      },
      {
        heading: "Un plan B, armado dentro de la ley",
        body: [
          "Para las familias internacionales, Uruguay suele ser parte de un plan B: residencia para la familia, relaciones bancarias y parte del patrimonio en una segunda jurisdicción estable. Proteger el patrimonio, acá, significa diversificar dentro de la ley: con total transparencia, documentación del origen de los fondos y cumplimiento fiscal en cada país involucrado.",
        ],
      },
      {
        heading: "Cómo trabajamos",
        body: [
          "Trabajamos para nuestro cliente. Antes de cualquier mandato explicamos cómo cobramos e informamos cualquier vínculo con las oportunidades que presentamos, incluidas las transacciones lideradas por Sacramentum Capital.",
        ],
      },
    ],
    faqs: [
      { q: "¿Por qué un family office invertiría en Uruguay?", a: "Para preservar y diversificar capital: una jurisdicción estable y previsible, con igualdad de trato al inversor extranjero, sin controles de cambio y con acceso a activos reales como campos, forestación e inmuebles." },
      { q: "¿Los miembros de la familia pueden obtener la residencia?", a: "Sí. La residencia y, cuando corresponde, la residencia fiscal pueden planificarse para la familia junto con la estrategia de inversión." },
      { q: "¿Uruguay es un paraíso fiscal?", a: "No. Uruguay aplica los estándares internacionales de transparencia. Su atractivo es la estabilidad y un marco tributario previsible, no el secreto." },
      { q: "¿Qué relación hay entre Sacramentum Advisors y Sacramentum Capital?", a: "Sacramentum Capital es la boutique de banca de inversión de nuestra red, enfocada en finanzas corporativas, mercado de capitales y M&A. Informamos ese vínculo cada vez que una transacción de Sacramentum Capital es relevante para un cliente." },
    ],
    cta: {
      heading: "¿Evaluando Uruguay para su family office?",
      body:    "Cuéntenos sobre su mandato. Le mostramos las oportunidades y los asesores que necesita, en una sola conversación.",
      label:   "Agendar una consulta",
    },
  },
  de: {
    metaTitle:       "Family Office in Uruguay",
    metaDescription: "Für Family Offices und internationale Familien, die in Uruguay diversifizieren: Sachwerte, Marktanalyse, Aufenthalt und ein rechtssicherer Plan B.",
    navLabel:        "Family Office und Vermögen",
    cardText:        "Diversifikation in Uruguay für Family Offices und internationale Familien – mit einem Partner vor Ort.",
    eyebrow:         "Family Office und Vermögen",
    title:           "Uruguay für Family Offices und internationale Familien",
    intro: [
      "Family Offices schauen auf Uruguay wegen dessen, was größere Märkte nicht bieten: institutionelle Berechenbarkeit, Gleichbehandlung ausländischer Investoren, freien Kapitalverkehr und Zugang zu Sachwerten in einer kleinen, stabilen Rechtsordnung.",
      "Wir sind Ihr Partner vor Ort: Wir identifizieren Chancen, liefern die Marktanalyse hinter jeder Entscheidung und koordinieren die rechtlichen, steuerlichen und operativen Fachleute – so hat das Family Office in Uruguay einen einzigen Ansprechpartner.",
    ],
    image: { src: "/images/hands.webp", alt: "Berater in einer Besprechung" },
    sectionsHeading: "Wie wir Family Offices in Uruguay begleiten",
    sections: [
      {
        heading: "Warum Uruguay für ein Family Office",
        body: [],
        bullets: [
          "Institutionelle und rechtliche Stabilität mit gleichen Rechten für ausländische und inländische Investoren.",
          "Keine Devisenkontrollen: Kapital und Gewinne können ins Ausland transferiert werden.",
          "Sachwerte – Agrarland, Forst, Immobilien, Infrastruktur – neben einem etablierten Finanzdienstleistungssektor.",
          "Ein Weg zum Aufenthalt für Familienmitglieder und eine Basis für die gesamte Region.",
        ],
      },
      {
        heading: "Strategische Beratung",
        body: [
          "Unsere Rechts- und Finanzpartner helfen, Chancen zu erkennen, Transaktionen zu strukturieren und einen soliden Einstieg in Uruguay und die Region zu planen. Wir begleiten Akquisitionen, Partnerschaften und Investitionen mit langfristigem Blick.",
        ],
      },
      {
        heading: "Marktanalyse",
        body: [
          "Wir untersuchen und analysieren den für jede Chance relevanten Markt: Wettbewerb, Risiken, regulatorischer Rahmen und Geschäftsumfeld – für Klarheit bei Einstiegs-, Expansions- und Transaktionsentscheidungen.",
        ],
      },
      {
        heading: "Ein Plan B, rechtssicher aufgebaut",
        body: [
          "Für internationale Familien ist Uruguay oft Teil eines Plan B außerhalb der EU: Aufenthalt für die Familie, Bankverbindungen und ein Teil des Vermögens in einer zweiten, stabilen Rechtsordnung. Vermögensschutz bedeutet hier rechtmäßige Diversifikation – mit voller Transparenz, Nachweis der Mittelherkunft und steuerlicher Compliance in jedem beteiligten Land.",
        ],
      },
      {
        heading: "Wie wir arbeiten",
        body: [
          "Wir arbeiten für unseren Kunden. Vor jedem Mandat erklären wir, wie wir vergütet werden, und legen jede Verbindung zu den vorgestellten Chancen offen – auch zu Transaktionen von Sacramentum Capital.",
        ],
      },
    ],
    faqs: [
      { q: "Warum sollte ein Family Office in Uruguay investieren?", a: "Zur Kapitalerhaltung und Diversifikation: eine stabile, berechenbare Rechtsordnung mit Gleichbehandlung ausländischer Investoren, ohne Devisenkontrollen und mit Zugang zu Sachwerten wie Agrarland, Forst und Immobilien." },
      { q: "Können Familienmitglieder ebenfalls eine Aufenthaltsgenehmigung erhalten?", a: "Ja. Aufenthalt und gegebenenfalls steuerlicher Wohnsitz können für Familienmitglieder parallel zur Investitionsstrategie geplant werden." },
      { q: "Ist Uruguay eine Steueroase?", a: "Nein. Uruguay wendet internationale Transparenzstandards an. Sein Vorteil sind Stabilität und ein berechenbarer Steuerrahmen, nicht Verschwiegenheit." },
      { q: "Wie hängen Sacramentum Advisors und Sacramentum Capital zusammen?", a: "Sacramentum Capital ist die Investment-Banking-Boutique unseres Netzwerks mit Fokus auf Unternehmensfinanzierung, Kapitalmärkte und M&A. Wir legen diese Verbindung offen, wann immer eine Transaktion von Sacramentum Capital für einen Kunden relevant ist." },
    ],
    cta: {
      heading: "Sie prüfen Uruguay für Ihr Family Office?",
      body:    "Erzählen Sie uns von Ihrem Mandat. Wir zeigen Ihnen Chancen und die passenden Berater – in einem Gespräch.",
      label:   "Beratung vereinbaren",
    },
  },
};

export default copy;
