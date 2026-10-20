import type { TopicCopy } from "@/lib/topics";

// EN body = client-approved copy (docs/content/technology-en.md) — do not
// rewrite. ES = translation by Claude, pending review by Inés/Chiara.
// FAQs and meta added for search/AI answers. Technology guide download
// goes below the intro once the PDF exists.

const copy: TopicCopy = {
  en: {
    metaTitle:       "Technology in Uruguay: Operations, Acquisitions & Expansion",
    metaDescription: "Uruguay's export-driven technology ecosystem: build a technology operation, acquire a software company or expand regionally from Uruguay. Advisory from Montevideo.",
    navLabel:        "Technology",
    cardText:        "Build a technology operation, acquire a software company or expand across the region from Uruguay.",
    eyebrow:         "Technology",
    title:           "Uruguay's export-driven technology ecosystem",
    intro: [
      "Uruguay has quietly built one of Latin America's most export-driven technology ecosystems.",
      "In a country of just 3.5 million people, the ecosystem brings together around 500 startups, hundreds of established software and technology companies, global technology centers, internationally successful product companies, and a NASDAQ-listed unicorn.",
    ],
    image: { src: "/images/tech.avif", alt: "Technology office in Montevideo, Uruguay" },
    facts: [
      { value: "#2",         label: "Software exporter per capita in Latin America — and the largest in South America" },
      { value: "US$3.68bn",  label: "Technology sector revenue in 2024, equivalent to 4.5% of GDP" },
      { value: "63%",        label: "Of the sector's revenue from international sales" },
      { value: "77.6%",      label: "Of Uruguay's technology exports go to the United States" },
    ],
    sections: [
      {
        heading: "A natural technology platform",
        body: [
          "Uruguay is Latin America's second-largest software exporter per capita — and the largest in South America. The technology sector generated US$3.68 billion in revenue in 2024, equivalent to 4.5% of GDP, with 63% of its revenue coming from international sales.",
          "The United States remains its strongest market, accounting for 77.6% of technology exports from Uruguay. At the same time, established links with the United Kingdom, Spain, Chile, Canada, and other international markets position Uruguay as a natural technology platform connecting North America, Latin America, and Europe.",
        ],
      },
      {
        heading: "Strategic operation buildout",
        body: [
          "Establish a new technology operation or expand an existing regional capability. We support the process from market assessment and operating-model design through local leadership, talent acquisition, establishment, and execution.",
          "Uruguay combines institutional stability, sophisticated talent, strong digital infrastructure, and an ecosystem already tested by global technology and services companies.",
        ],
      },
      {
        heading: "Acquisitions & regional expansion",
        body: [
          "Acquire a software company, product team, or specialized technology capability with existing talent, intellectual property, and international clients.",
          "Uruguay can also serve as a strategic base for expansion across Spanish-speaking Latin America, Brazil, and global markets, supported by established investment frameworks and free-zone platforms.",
        ],
      },
    ],
    faqs: [
      { q: "Why do technology companies choose Uruguay?", a: "Institutional stability, sophisticated talent, strong digital infrastructure and an ecosystem already tested by global technology and services companies — with time-zone and business links to North America, Latin America and Europe." },
      { q: "Can a foreign company acquire a software company in Uruguay?", a: "Yes. Foreign investors receive the same treatment as local investors. We help identify targets with existing talent, intellectual property and international clients, and coordinate the transaction with Sacramentum Capital." },
      { q: "Can a technology operation in Uruguay serve the whole region?", a: "Yes. Uruguay can serve as a base for Spanish-speaking Latin America, Brazil and global markets, supported by established investment frameworks and free-zone platforms." },
    ],
    cta: {
      heading: "Explore technology opportunities",
      body:    "Building an operation or looking for an acquisition? Tell us what you need and we will map the options in Uruguay.",
      label:   "Book a consultation",
    },
  },

  es: {
    metaTitle:       "Tecnología en Uruguay: operaciones, adquisiciones y expansión",
    metaDescription: "El ecosistema tecnológico exportador de Uruguay: instalar una operación tecnológica, adquirir una empresa de software o expandirse a la región desde Uruguay.",
    navLabel:        "Tecnología",
    cardText:        "Instalar una operación tecnológica, adquirir una empresa de software o expandirse a la región desde Uruguay.",
    eyebrow:         "Tecnología",
    title:           "El ecosistema tecnológico exportador de Uruguay",
    intro: [
      "Uruguay construyó, sin hacer ruido, uno de los ecosistemas tecnológicos más orientados a la exportación de América Latina.",
      "En un país de apenas 3,5 millones de habitantes, el ecosistema reúne unas 500 startups, cientos de empresas de software y tecnología consolidadas, centros tecnológicos globales, empresas de producto con éxito internacional y un unicornio que cotiza en NASDAQ.",
    ],
    image: { src: "/images/tech.avif", alt: "Oficina tecnológica en Montevideo, Uruguay" },
    facts: [
      { value: "#2",          label: "Exportador de software per cápita de América Latina, y el primero de América del Sur" },
      { value: "US$3.680 M",  label: "Facturación del sector tecnológico en 2024, equivalente al 4,5% del PIB" },
      { value: "63%",         label: "De la facturación del sector proviene de ventas internacionales" },
      { value: "77,6%",       label: "De las exportaciones tecnológicas de Uruguay van a Estados Unidos" },
    ],
    sections: [
      {
        heading: "Una plataforma tecnológica natural",
        body: [
          "Uruguay es el segundo exportador de software per cápita de América Latina, y el primero de América del Sur. El sector tecnológico facturó US$ 3.680 millones en 2024, equivalentes al 4,5% del PIB, y el 63% de esa facturación proviene de ventas internacionales.",
          "Estados Unidos sigue siendo su principal mercado, con el 77,6% de las exportaciones tecnológicas de Uruguay. Al mismo tiempo, los vínculos consolidados con el Reino Unido, España, Chile, Canadá y otros mercados posicionan a Uruguay como una plataforma tecnológica natural que conecta América del Norte, América Latina y Europa.",
        ],
      },
      {
        heading: "Instalación de operaciones estratégicas",
        body: [
          "Instale una nueva operación tecnológica o amplíe una capacidad regional existente. Acompañamos el proceso desde la evaluación del mercado y el diseño del modelo operativo hasta el liderazgo local, la incorporación de talento, la instalación y la ejecución.",
          "Uruguay combina estabilidad institucional, talento calificado, una infraestructura digital sólida y un ecosistema ya probado por empresas globales de tecnología y servicios.",
        ],
      },
      {
        heading: "Adquisiciones y expansión regional",
        body: [
          "Adquiera una empresa de software, un equipo de producto o una capacidad tecnológica especializada, con talento, propiedad intelectual y clientes internacionales ya existentes.",
          "Uruguay también puede funcionar como base estratégica para expandirse a la América Latina hispanohablante, a Brasil y a mercados globales, con marcos de inversión consolidados y plataformas de zona franca.",
        ],
      },
    ],
    faqs: [
      { q: "¿Por qué las empresas tecnológicas eligen Uruguay?", a: "Estabilidad institucional, talento calificado, infraestructura digital sólida y un ecosistema ya probado por empresas globales de tecnología y servicios, con vínculos de huso horario y negocio con América del Norte, América Latina y Europa." },
      { q: "¿Una empresa extranjera puede adquirir una empresa de software en Uruguay?", a: "Sí. Los inversores extranjeros reciben el mismo trato que los locales. Ayudamos a identificar empresas con talento, propiedad intelectual y clientes internacionales, y coordinamos la transacción con Sacramentum Capital." },
      { q: "¿Una operación tecnológica en Uruguay puede atender a toda la región?", a: "Sí. Uruguay puede funcionar como base para la América Latina hispanohablante, Brasil y mercados globales, con marcos de inversión consolidados y plataformas de zona franca." },
    ],
    cta: {
      heading: "Explore oportunidades tecnológicas",
      body:    "¿Instalar una operación o buscar una adquisición? Cuéntenos qué necesita y le mostramos las opciones en Uruguay.",
      label:   "Agendar una consulta",
    },
  },
  de: {
    metaTitle:       "Technologie in Uruguay: Standortaufbau, Akquisitionen, Expansion",
    metaDescription: "Uruguays exportstarkes Technologie-Ökosystem: einen Technologiestandort aufbauen, ein Softwareunternehmen übernehmen oder von Uruguay aus in die Region expandieren.",
    navLabel:        "Technologie",
    cardText:        "Technologiestandort aufbauen, Softwareunternehmen übernehmen oder von Uruguay aus expandieren.",
    eyebrow:         "Technologie",
    title:           "Uruguays exportstarkes Technologie-Ökosystem",
    intro: [
      "Uruguay hat unauffällig eines der exportstärksten Technologie-Ökosysteme Lateinamerikas aufgebaut.",
      "In einem Land mit nur 3,5 Millionen Einwohnern vereint das Ökosystem rund 500 Start-ups, Hunderte etablierte Software- und Technologieunternehmen, globale Technologiezentren, international erfolgreiche Produktunternehmen und ein an der NASDAQ notiertes Unicorn.",
    ],
    image: { src: "/images/tech.avif", alt: "Technologiebüro in Montevideo, Uruguay" },
    facts: [
      { value: "#2",           label: "Softwareexporteur pro Kopf in Lateinamerika – und der größte in Südamerika" },
      { value: "3,68 Mrd. USD", label: "Umsatz des Technologiesektors 2024, entsprechend 4,5 % des BIP" },
      { value: "63 %",          label: "Des Umsatzes stammen aus internationalen Verkäufen" },
      { value: "77,6 %",        label: "Der uruguayischen Technologieexporte gehen in die USA" },
    ],
    sections: [
      {
        heading: "Eine natürliche Technologieplattform",
        body: [
          "Uruguay ist der zweitgrößte Softwareexporteur pro Kopf in Lateinamerika – und der größte in Südamerika. Der Technologiesektor erzielte 2024 einen Umsatz von 3,68 Milliarden US-Dollar, entsprechend 4,5 % des BIP; 63 % davon stammen aus internationalen Verkäufen.",
          "Die Vereinigten Staaten sind mit 77,6 % der Technologieexporte der wichtigste Markt. Gleichzeitig machen etablierte Verbindungen nach Großbritannien, Spanien, Chile, Kanada und in weitere Märkte Uruguay zu einer natürlichen Technologieplattform zwischen Nordamerika, Lateinamerika und Europa.",
        ],
      },
      {
        heading: "Aufbau strategischer Standorte",
        body: [
          "Bauen Sie einen neuen Technologiestandort auf oder erweitern Sie bestehende regionale Kapazitäten. Wir begleiten den Prozess von der Marktanalyse und dem Betriebsmodell über lokale Führung und Talentgewinnung bis zur Gründung und Umsetzung.",
          "Uruguay verbindet institutionelle Stabilität, qualifizierte Fachkräfte, eine starke digitale Infrastruktur und ein Ökosystem, das globale Technologie- und Dienstleistungsunternehmen bereits erprobt haben.",
        ],
      },
      {
        heading: "Akquisitionen und regionale Expansion",
        body: [
          "Übernehmen Sie ein Softwareunternehmen, ein Produktteam oder eine spezialisierte Technologiekompetenz mit bestehenden Talenten, geistigem Eigentum und internationalen Kunden.",
          "Uruguay kann zudem als strategische Basis für die Expansion in das spanischsprachige Lateinamerika, nach Brasilien und in globale Märkte dienen – mit etablierten Investitionsregimen und Freihandelszonen.",
        ],
      },
    ],
    faqs: [
      { q: "Warum wählen Technologieunternehmen Uruguay?", a: "Institutionelle Stabilität, qualifizierte Fachkräfte, eine starke digitale Infrastruktur und ein von globalen Unternehmen erprobtes Ökosystem – mit Zeitzonen- und Geschäftsverbindungen nach Nordamerika, Lateinamerika und Europa." },
      { q: "Kann ein ausländisches Unternehmen ein Softwareunternehmen in Uruguay übernehmen?", a: "Ja. Ausländische Investoren werden wie inländische behandelt. Wir helfen, passende Unternehmen zu finden, und koordinieren die Transaktion mit Sacramentum Capital." },
      { q: "Kann ein Standort in Uruguay die ganze Region bedienen?", a: "Ja. Uruguay eignet sich als Basis für das spanischsprachige Lateinamerika, Brasilien und globale Märkte, unterstützt durch Investitionsregime und Freihandelszonen." },
    ],
    cta: {
      heading: "Technologiechancen entdecken",
      body:    "Sie planen einen Standort oder suchen eine Akquisition? Sagen Sie uns, was Sie brauchen, und wir zeigen Ihnen die Optionen in Uruguay.",
      label:   "Beratung vereinbaren",
    },
  },
};

export default copy;
