/* ─────────────────────────────────────────────────────────────────────────────
   German (de) — site copy
   Translated from the English copy for stage 2 (20.10.2026), using the
   vocabulary from the German keyword research (docs/seo/RESEARCH-DE.md):
   "Auswandern", "Haus kaufen", "Rechtssicherheit"; avoiding "Steuerparadies"
   and "Bankgeheimnis". Formal "Sie" throughout.
   ⚠️ Must be reviewed by a native German speaker before /de/ is indexed
   (INDEXED_LOCALES in lib/i18n.ts). Not editable from the admin panel.
   ─────────────────────────────────────────────────────────────────────────── */

import type { SiteTranslations } from "@/data/translations";

export const de: SiteTranslations = {
  locale:      "de",
  siteName:    "Sacramentum Advisors",
  siteTagline: "Prinzipientreue Beratung. Strategische Werte. Der stabilste Markt Lateinamerikas.",

  nav: {
    home:       "Start",
    whyUruguay: "Warum Uruguay",
    sectors:    "Leistungen",
    team:       "Team",
    news:       "Nachrichten",
    blog:       "Blog",
    contact:    "Kontakt",
    langToggle: "DE",
  },

  hero: {
    eyebrow:     "Auswandern, Immobilien und Investitionen in Uruguay",
    headline:    "Wir begleiten Ihren strategischen Schritt nach Uruguay.",
    subheadline: "Maßgeschneiderte Beratung zu Aufenthalt, Immobilien und Kapitalstrukturierung für alle, die im stabilsten Markt Lateinamerikas eine solide Basis aufbauen möchten.",
    cta:         "Gespräch vereinbaren",
    ctaSecondary:"Uruguay entdecken",
    scrollLabel: "Scrollen und entdecken",
  },

  whyUruguay: {
    eyebrow:     "Warum Uruguay",
    headline:    "Warum Uruguay?",
    subheadline: "Ein stabiler, international vernetzter Standort für Kapitalerhalt, regionale Expansion und die langfristige Positionierung von Familien.",
    stats: [
      { value: "#1",     label: "Geringste Korruption in Lateinamerika" },
      { value: "97\u202F%",   label: "Erneuerbare Energie" },
      { value: "98\u202F%",   label: "Alphabetisierungsrate" },
      { value: "3,5 Mio.", label: "Einwohner" },
    ],
    cards: [
      {
        id:          "stability",
        icon:        "shield",
        title:       "Institutionelle Stabilität und Vertrauen",
        description: "Uruguay zeichnet sich durch eine gefestigte Demokratie, Rechtssicherheit und die geringste Korruption der Region aus. Auf einem volatilen Kontinent steht das Land für Seriosität, Berechenbarkeit und langfristiges Vertrauen.",
      },
      {
        id:          "innovation",
        icon:        "circuit",
        title:       "Ein zukunftsfähiges Innovationsökosystem",
        description: "Als regionaler Vorreiter bei Telekommunikation, digitaler Verwaltung und erneuerbaren Energien verbindet Uruguay natürlichen Reichtum mit einer vorausschauenden Innovations- und Nachhaltigkeitspolitik.",
      },
      {
        id:          "talent",
        icon:        "people",
        title:       "Qualifizierte, digital vernetzte Fachkräfte",
        description: "Mit einer der höchsten Alphabetisierungsraten der Welt und einer starken digitalen Teilhabe bietet Uruguay qualifizierte Fachkräfte und eine gut ausgebildete Erwerbsbevölkerung für langfristiges Wachstum.",
      },
      {
        id:          "quality",
        icon:        "leaf",
        title:       "Lebensqualität als strategischer Wert",
        description: "Sicherheit, Gesundheitsversorgung, Bildung und eine offene Gesellschaft machen Uruguay zu einem idealen Umfeld für Führungskräfte, Gründer und Familien, die Schutz und Lebensqualität suchen.",
      },
      {
        id:          "geography",
        icon:        "globe",
        title:       "Eine privilegierte geografische Lage",
        description: "Mit direktem Zugang zum Mercosur, starker Logistik und hervorragender regionaler Anbindung ist Uruguay ein effizientes Tor nach Südamerika und zu den globalen Handelsrouten.",
      },
      {
        id:          "tax",
        icon:        "document",
        title:       "Steuerliche Anreize und Investitionsregime",
        description: "Freihandelszonen, steuerliche Anreize, Vorteile beim Aufenthalt und investorenfreundliche Regime schaffen ein attraktives Umfeld für ausländisches Kapital und eine langfristige strategische Präsenz.",
      },
    ],
  },

  sectors: {
    eyebrow:     "Unsere Sektoren",
    headline:    "Wo wir Kapital lenken.",
    subheadline: "Wir sind auf die widerstandsfähigsten und wertstabilsten Anlageklassen spezialisiert, die Uruguay bietet.",
    items: [
      { id: "residential",  title: "Wohnimmobilien",               description: "Private Residenzen und Anwesen an der Küste in den begehrtesten Lagen Uruguays." },
      { id: "agricultural", title: "Landwirtschaftliche Flächen",  description: "Produktives Ackerland mit langfristigem Wert – Forstwirtschaft, Soja und Rinderfarmen." },
      { id: "commercial",   title: "Gewerbeimmobilien",            description: "Strategische Gewerbeimmobilien in Montevideo und in Wachstumskorridoren." },
      { id: "equestrian",   title: "Estancias und Reitanlagen",    description: "Ausgewählte Estancias und Reitanlagen für Familien und Investoren." },
    ],
  },

  howWeSupport: {
    eyebrow:     "Unsere Beratung",
    headline:    "Wie wir Sie begleiten",
    subheadline: "Von Marktanalysen und Transaktionsstrukturierung bis zu Aufenthalt, Niederlassung vor Ort und langfristiger Kapitalpositionierung: Unser Team begleitet Sie in jeder Phase Ihres Schritts nach Uruguay.",
    cta:         "Vertrauliches Beratungsgespräch vereinbaren",
    cards: [
      {
        id:          "soft-landing",
        image:       "/images/hands.webp",
        title:       "Auswandern und Niederlassung (Soft Landing)",
        description: "Unser Netzwerk aus Rechts-, Finanz- und Steuerpartnern sowie Akteuren des lokalen Ökosystems begleitet Sie in jeder Phase Ihrer Niederlassung – von Aufenthalt und Strukturierung bis zur Integration vor Ort und zum operativen Aufbau.",
      },
      {
        id:          "market-intelligence",
        image:       "/images/puerto.webp",
        title:       "Marktanalyse",
        description: "Wir führen gezielte Recherchen, Sektoranalysen, Risikobewertungen und Wettbewerbsanalysen durch, damit Sie vor wichtigen Investitions- oder Umzugsentscheidungen klar sehen.",
      },
      {
        id:          "strategic-advisory",
        image:       "/images/writing.webp",
        title:       "Strategische Beratung",
        description: "Unsere Rechts- und Finanzexperten helfen, Chancen zu bewerten, Transaktionen zu strukturieren und Ihren langfristigen Einstieg in Uruguay und Südamerika zu planen.",
      },
      {
        id:          "investment-banking",
        image:       "/images/bandera.webp",
        title:       "Investment-Banking-Boutique",
        description: "Über Sacramentum Capital beraten wir zu M&A, Kapitalmärkten, institutionellen Beziehungen und Investitionsregimen und begleiten anspruchsvolle Transaktionen mit Präzision und strategischer Klarheit.",
      },
    ],
  },

  whySacramentum: {
    eyebrow:     "Warum Sacramentum",
    headline:    "Warum Sacramentum?",
    subheadline: "Eine Beratungsplattform, die auf Vertrauen, Seniorität in der Umsetzung, institutionellem Zugang und langfristiger Übereinstimmung beruht.",
    cards: [
      {
        id:          "seniority",
        roman:       "I",
        eyebrow:     "Erfahrung",
        title:       "Seniorität und Erfahrung",
        description: "Unser Team bringt jahrzehntelange Führungserfahrung in strategischer Beratung, institutioneller Investitionsförderung und grenzüberschreitenden Kapitalentscheidungen mit – ein Urteil, das auf echter Erfahrung beruht.",
      },
      {
        id:          "network",
        roman:       "II",
        eyebrow:     "Netzwerk",
        title:       "Netzwerk zwischen öffentlichem und privatem Sektor",
        description: "Unsere Erfahrung im öffentlichen und privaten Sektor eröffnet direkten Zugang zu institutionellen Rahmenbedingungen, strategischen Beziehungen und vertrauenswürdigen Partnern in Uruguay, Argentinien und Paraguay.",
      },
      {
        id:          "trust",
        roman:       "III",
        eyebrow:     "Übereinstimmung",
        title:       "Boutique-Ansatz, Vertrauen zuerst",
        description: "Vertrauen ist unser wertvollstes Gut. Ein formales Mandat übernehmen wir erst, wenn volle Übereinstimmung mit Ihrer langfristigen Vision, Ihren familiären Prioritäten und Ihrer Kapitalstrategie besteht.",
      },
    ],
  },

  lifestyleAssets: {
    eyebrow:     "Lifestyle Assets",
    headline:    "Wo Kapital und Leben zusammenkommen.",
    subheadline: "Mehr als eine reine Geldanlage – Werte, die das Leben der Familien bereichern, denen sie gehören.",
  },

  trust: {
    eyebrow: "Unser Versprechen",
    headline:"Wir verwalten kein Vermögen. Wir bewahren Vermächtnisse.",
    body:    "Sacramentum Advisors wurde auf dem Grundsatz gegründet, dass die wichtigsten Beratungsbeziehungen auf vollständiger Vertraulichkeit, absoluter Integrität und einem tiefen Verständnis dessen beruhen, was Familien wirklich schützen.",
  },

  team: {
    eyebrow:  "Unser Team",
    headline: "Unser Team",
    leadership: [
      {
        id:    "ines",
        image: "/images/ines.png",
        name:  "Inés Bonicelli",
        role:  "Managing Director",
        bio:   "Inés hat einen Abschluss in Betriebswirtschaft der Universidad Católica del Uruguay und einen MBA der University of Michigan. Ihre Laufbahn umfasst den öffentlichen und privaten Sektor sowie die Zivilgesellschaft. Sie begann in der Fleischindustrie und war anschließend bei ABN AMRO, Citi und Bozano Simonsen (Rio de Janeiro, Brasilien) tätig.\n\nWährend eines Jahrzehnts in den Vereinigten Staaten gründete und leitete sie Reaching U, a Foundation for Uruguay, und führte einen Showroom in New York. Von 2020 bis 2025 war sie stellvertretende Geschäftsführerin von Uruguay XXI und leitete zentrale Initiativen zur Gewinnung ausländischer Investitionen. Danach war sie Business Developer beim Uruguay Innovation Hub, einem staatlichen Programm zur Förderung von Unternehmertum, des Innovationsökosystems und von Risikokapital.",
      },
      {
        id:    "pablo",
        image: "/images/pablo-mautone-portrait.jpg",
        name:  "Pablo Mautone",
        role:  "Director",
        bio:   "Pablo Mautone ist Gründer und Director von Sacramentum Capital, einer Investmentbank mit Sitz in Uruguay, die für strategische Führung, Verlässlichkeit und Professionalität bekannt ist. Er verfügt über eine solide internationale Laufbahn als Vice President im Investment Banking bei J.P. Morgan und Lehman Brothers mit Schwerpunkt auf Energie, Infrastruktur und Agribusiness.\n\nZu seiner Laufbahn gehören außerdem eine prägende Zeit bei Bozano Simonsen in Rio de Janeiro und Erfahrung bei VR Hedge Fund. Mit fundierter Fachkenntnis, professioneller Sorgfalt und einem diskreten Führungsstil leitet Pablo Sacramentum Capital bei wirkungsvollen Finanzlösungen und streng vertraulicher strategischer Beratung, die echten und nachhaltigen Wert für die Kunden schafft.",
      },
    ],
    advisory: {
      eyebrow:    "Beirat",
      headline:   "Beirat",
      subheadline:"Unser Beirat erweitert unsere Reichweite in den Bereichen Politik, Infrastruktur, Nachhaltigkeit, Technologie und regionale institutionelle Netzwerke.",
      members: [
        {
          id:    "omar",
          image: "/images/omar.webp",
          name:  "Omar Paganini",
          role:  "Energie und Politik",
          bio:   "Elektroingenieur, Hochschullehrer und uruguayischer Politiker mit einer herausragenden Laufbahn im öffentlichen und privaten Sektor. Er war Minister für Industrie, Energie und Bergbau Uruguays (2020–2023) und anschließend Außenminister (2023–2025). Seine fundierte Expertise in Energie, Technologie und Telekommunikation, verbunden mit strategischem Weitblick und Führungserfahrung, macht ihn zu einem wertvollen Berater für Entwicklung und Innovation.",
        },
        {
          id:    "guillermo",
          image: "/images/guillermo.webp",
          name:  "Guillermo Javier Dietrich",
          role:  "Infrastruktur und Mobilität",
          bio:   "Ökonom der Universidad Católica Argentina mit einem MBA des IAE. Unternehmer und Politiker mit umfassender Erfahrung im öffentlichen und privaten Management. Von 2009 bis 2015 leitete er die Neugestaltung des Verkehrs- und Transportsystems der Stadt Buenos Aires. Von 2015 bis 2019 war er Verkehrsminister Argentiniens und führte eines der größten Ministerien der Regierung. Heute ist er Mitglied des Parteirats von PRO, leitet G25 und berät Organisationen im privaten und öffentlichen Sektor.",
        },
        {
          id:    "eleanor",
          image: "/images/PaulinaFernandez.jpg",
          name:  "Paulina Fernandez Rubio",
          role:  "Investment Sales und Vermögen",
          bio:   "Paulina ist eine ausgewiesene Expertin im Vertrieb von Anlageprodukten und in der privaten Vermögensverwaltung in Europa und Südamerika. Mit ihrem Gespür für Vertrieb und ihrer Fähigkeit, Beziehungen aufzubauen, versteht sie die Anliegen vermögender Privatkunden. Sie bringt umfassende Erfahrung aus internationalen Finanzinstituten wie Citibank, Merrill Lynch und Lloyds TSB mit und hat einen Abschluss in Betriebswirtschaft mit Schwerpunkt Finanzen. Paulina spricht fließend Spanisch, Englisch, Portugiesisch, Französisch und Deutsch. Ihr Studium und ihre beruflichen Verbindungen reichen in die USA, die Schweiz, nach Spanien und Südamerika, insbesondere nach Argentinien, Brasilien und Uruguay. Zwischen 2003 und 2017 lebte sie in Montevideo, Lima, Dubai, Rio de Janeiro, Zürich und Barcelona.",
        },
      ],
    },
  },

  news: {
    eyebrow:     "Uruguay in den Nachrichten",
    headline:    "Uruguay in den Nachrichten",
    subtitle:    "Aktuelle Berichte und Einblicke, die Uruguays Potenzial als Investitionsstandort und kulturelles Zentrum zeigen.",
    viewAll:     "Alle Artikel ansehen",
    readArticle: "Artikel lesen",
    backLabel:   "Zurück zu den Nachrichten",
    articles: [
      {
        id:       "port",
        image:    "/images/news/port.avif",
        category: "Wirtschaft",
        title:    "Hafen von Montevideo: Tor zum südamerikanischen Handel",
        excerpt:  "Wie Uruguays strategische Lage und erstklassige Hafeninfrastruktur Montevideo weiterhin als führendes Logistik- und Handelszentrum der Region positionieren.",
        slug:     "montevideo-port-gateway-south-american-trade",
        date:     "2025-03-14",
      },
      {
        id:       "montevideo",
        image:    "/images/news/montevideo.avif",
        category: "Lebensstil",
        title:    "Die Stadt zum Flanieren: das elegante Montevideo",
        excerpt:  "Ein näherer Blick auf Montevideos Leben am Wasser, seinen urbanen Rhythmus und seine hohe Lebensqualität, die die Stadt für internationale Familien und Investoren immer attraktiver machen.",
        slug:     "the-walking-city-graceful-montevideo",
        date:     "2025-02-28",
      },
      {
        id:       "investment",
        image:    "/images/news/investment.avif",
        category: "Investitionen",
        title:    "Uruguays aufstrebende Akteure im Investitionsbereich",
        excerpt:  "Die Fachleute und Institutionen, die Uruguays nächstes Kapitel als stabiles, international vernetztes Ziel für Kapital und Innovation prägen.",
        slug:     "uruguays-rising-investment-leaders",
        date:     "2025-01-19",
      },
      {
        id:       "agri-boom",
        image:    "/images/woods.avif",
        category: "Investitionen",
        title:    "Agrarland in Uruguay: eine Anlageklasse für Generationen",
        excerpt:  "Mit fruchtbarem Grasland, Transaktionen in US-Dollar und ohne Beschränkungen für ausländische Eigentümer wird Uruguays Agrarland still und leise zu einer der überzeugendsten langfristigen Anlagen der Südhalbkugel.",
        slug:     "agricultural-land-uruguay-generational-asset",
        date:     "2025-04-05",
      },
      {
        id:       "tech-hub",
        image:    "/placeholders/pde.avif",
        category: "Wirtschaft",
        title:    "Zonamerica: Einblick in Lateinamerikas führende Freihandelszone",
        excerpt:  "Wie eine visionäre Freihandelszone nördlich von Montevideo zum Anker für Uruguays Technologieexporte wurde – und warum globale Unternehmen sie günstigeren Alternativen vorziehen.",
        slug:     "zonamerica-latin-america-premier-free-trade-zone",
        date:     "2025-03-22",
      },
      {
        id:       "residency",
        image:    "/placeholders/lapalom.avif",
        category: "Lebensstil",
        title:    "Warum vermögende Familien den Aufenthalt in Uruguay wählen",
        excerpt:  "Stabile Institutionen, ein wettbewerbsfähiges Steuersystem und eine hohe Lebensqualität machen Uruguay für eine immer vielfältigere internationale Gruppe zur ersten Wahl – von lateinamerikanischen Führungskräften bis zu europäischen Rentnern.",
        slug:     "high-net-worth-families-uruguayan-residency",
        date:     "2025-02-14",
      },
      {
        id:       "pde-market",
        image:    "/placeholders/hero-coast.avif",
        category: "Investitionen",
        title:    "Punta del Este: mehr als ein Sommerziel",
        excerpt:  "Lange als reines Sommerziel abgetan, ist der Immobilienmarkt von Punta del Este zu einem Ganzjahresmarkt gereift – getragen von Remote-Arbeit, der Nachfrage nach Aufenthalt in Uruguay und einem knappen Angebot an erstklassigen Küstengrundstücken.",
        slug:     "punta-del-este-beyond-seasonal-myth",
        date:     "2025-01-30",
      },
      {
        id:       "governance",
        image:    "/placeholders/colonia.avif",
        category: "Wirtschaft",
        title:    "Governance-Prämie: warum Uruguays Institutionen das Risiko senken",
        excerpt:  "In einer Region, in der politisches Risiko die Regel ist, schafft Uruguays konstante institutionelle Bilanz – unter Regierungen jeder Richtung – etwas Seltenes: eine echte Governance-Prämie, die erfahrene Investoren zunehmend einpreisen.",
        slug:     "governance-premium-uruguays-institutions",
        date:     "2024-12-18",
      },
    ],
  },

  contact: {
    eyebrow:     "Kontakt",
    headline:    "Beginnen Sie ein vertrauliches Gespräch.",
    subheadline: "Wir arbeiten mit einer ausgewählten Zahl von Kunden. Alle Anfragen werden mit absoluter Diskretion behandelt.",
    cta:         "Beratung anfragen",
  },

  closingCta: {
    eyebrow:  "Ein Gespräch beginnen",
    headline: "Bereit, Ihren Schritt nach Uruguay zu planen?",
    body:     "Ob Sie den Aufenthalt, eine Investition, den Umzug Ihrer Familie oder eine langfristige strategische Präsenz prüfen: Unser Team bietet diskrete Beratung auf Senior-Ebene, abgestimmt auf Ihre Prioritäten.",
    cta:      "Vertrauliche Beratung vereinbaren",
  },

  contactTrust: {
    eyebrow:           "Mit wem Sie sprechen",
    headline:          "Erfahrene Berater, vom ersten Gespräch an.",
    legal:             "Das uruguayische Recht gewährt ausländischen Investoren dieselben Rechte wie inländischen.",
    confidentiality:   "Jedes Gespräch ist vertraulich. Vor jedem Mandat erklären wir, wie wir arbeiten und wie wir vergütet werden.",
    minimumInvestment: "",
  },

  contactPage: {
    meta: {
      title:       "Vertrauliche Beratung | Sacramentum Advisors",
      description: "Sprechen Sie mit dem Team von Sacramentum Advisors über Aufenthalt, Investitionen, Immobilien oder Ihre langfristige Positionierung in Uruguay.",
    },
    eyebrow:  "Vertrauliche Beratung",
    headline: "Sprechen Sie mit unserem Team.",
    intro:    "Sprechen Sie mit unserem Team in Uruguay über Aufenthalt, Investitionen, Immobilien oder Ihre langfristige Positionierung in der Region.",
    disclaimer:   "Wir antworten innerhalb von 1–2 Werktagen. Alle Anfragen sind streng vertraulich.",
    errorMessage: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
    secondary: {
      eyebrow: "Zusammenarbeit",
      body:    "Wir arbeiten jeweils mit einer ausgewählten Zahl von Kunden, um jedem Mandat die Aufmerksamkeit zu geben, die es verdient.",
    },
    form: {
      nameLabel:           "Vollständiger Name",
      namePlaceholder:     "Ihr vollständiger Name",
      emailLabel:          "E-Mail-Adresse",
      emailPlaceholder:    "ihre@email.com",
      phoneLabel:          "Telefonnummer",
      phonePlaceholder:    "Optional",
      countryLabel:        "Wohnsitzland",
      countryPlaceholder:  "z. B. Deutschland",
      interestLabel:       "Interessengebiet",
      interestPlaceholder: "Bereich auswählen",
      interestOptions: [
        { value: "not-sure",               label: "Ich bin noch unsicher – ich informiere mich" },
        { value: "residency",              label: "Auswandern und Aufenthalt" },
        { value: "strategic-acquisition",  label: "Strategische Investitionen" },
        { value: "lifestyle-assets",       label: "Lifestyle Assets" },
        { value: "real-estate",            label: "Immobilien" },
        { value: "agriculture-forestry",   label: "Landwirtschaft und Forstwirtschaft" },
        { value: "special-situations",     label: "Sonderprojekte" },
        { value: "general-advisory",       label: "Allgemeine Beratung" },
      ],
      messageLabel:        "Nachricht",
      messagePlaceholder:  "Beschreiben Sie kurz Ihre Prioritäten und wie wir Ihnen helfen können.",
      submit:              "Vertrauliche Beratung anfragen",
      submitting:          "Wird gesendet …",
    },
    success: {
      headline: "Vielen Dank für Ihre Nachricht.",
      body:     "Wir haben Ihre Anfrage erhalten und antworten innerhalb von ein bis zwei Werktagen. Alle Korrespondenz wird mit absoluter Diskretion behandelt.",
    },
    info: {
      heading:   "Kontaktinformationen",
      location1: "Montevideo, Uruguay",
      location2: "Carrasco, Montevideo",
      email:     "ines@sacramentumcapital.com",
      phone:     "+598 95 532 533",
      trustNote: "Alle Gespräche werden diskret und auf Senior-Ebene geführt.",
    },
  },

  footer: {
    brand: {
      tagline: "Strategische Beratung für eine langfristige Positionierung in Uruguay.",
    },
    nav: {
      title: "Navigation",
      links: [
        { label: "Start",         href: "/"          },
        { label: "Warum Uruguay", href: "/invest"    },
        { label: "Leistungen",    href: "/services"  },
        { label: "Nachrichten",   href: "/news"      },
        { label: "Kontakt",       href: "/contact"   },
      ],
    },
    services: {
      title: "Leistungen",
      links: [
        { label: "Strategische Beratung",            href: "page:family-office" },
        { label: "Marktanalyse",                     href: "/services?card=market-intelligence" },
        { label: "Auswandern und Niederlassung",     href: "page:residency" },
        { label: "Sacramentum Capital",              href: "page:sacramentum-capital" },
      ],
    },
    contact: {
      title:    "Kontakt",
      location: "Carrasco, Montevideo",
      email:    "ines@sacramentumcapital.com",
    },
    legal: {
      copyright: "© 2025 Sacramentum Advisors. Alle Rechte vorbehalten.",
      privacy:   "Datenschutz",
      terms:     "Nutzungsbedingungen",
      credit:    "Gestaltet von",
    },
    cta: "Beratung vereinbaren",
  },

  investRealEstate: {
    eyebrow:   "01 · Immobilien",
    headline:  "Investieren, wo man leben kann: das Konzept der Lifestyle Assets",
    body:      "Wir glauben, dass das widerstandsfähigste Portfolio eines ist, das man erleben kann: Werte, die Ihr Kapital erhalten und vermehren und zugleich bewohnbar, genießbar und produktiv sind.\n\nWir helfen Ihnen, Immobilien mit doppeltem Nutzen zu finden: Kapitalerhalt (produktives Agrarland, Estancias, erstklassige Immobilien) und unmittelbare Lebensqualität.\n\nDer uruguayische Immobilienmarkt bietet Rechtssicherheit, Transaktionen in US-Dollar und keine Beschränkungen für ausländische Eigentümer.",
    statValue: "0 %",
    statLabel: "Beschränkungen für ausländische Eigentümer",
    cta:       "Fragen Sie nach Agrarflächen und Immobilien an der Küste",
  },

  investTechnology: {
    eyebrow:  "02 · Technologie",
    headline: "Uruguays exportstarkes Technologie-Ökosystem",
    intro:    "Uruguay hat unauffällig eines der exportstärksten Technologie-Ökosysteme Lateinamerikas aufgebaut. In einem Land mit nur 3,5 Millionen Einwohnern vereint es rund 500 Start-ups, Hunderte etablierte Software- und Technologieunternehmen, globale Technologiezentren, international erfolgreiche Produktunternehmen und ein an der NASDAQ notiertes Unicorn.",
    pillars: [
      { heading: "Aufbau strategischer Standorte",        body: "Bauen Sie einen neuen Technologiestandort auf oder erweitern Sie bestehende regionale Kapazitäten. Wir begleiten den Prozess von der Marktanalyse und dem Betriebsmodell über lokale Führung und Talentgewinnung bis zur Gründung und Umsetzung." },
      { heading: "Akquisitionen und regionale Expansion", body: "Übernehmen Sie ein Softwareunternehmen, ein Produktteam oder eine spezialisierte Technologiekompetenz mit bestehenden Talenten, geistigem Eigentum und internationalen Kunden." },
    ],
    cta: "Technologiechancen entdecken",
  },

  investAgriculture: {
    eyebrow:    "03 · Landwirtschaft und Forstwirtschaft",
    headline:   "Landwirtschaft und Forstwirtschaft",
    body:       "Uruguay ist ein Land mit tiefer landwirtschaftlicher Tradition. Mit über 90 % produktiv nutzbarer Fläche ist es ein verlässlicher Lebensmittellieferant für die Welt.",
    statValue:  "90 %+",
    statLabel:  "Der Fläche produktiv nutzbar",
    cta:        "Fragen Sie nach Flächen zum Kauf",
    keyFactorsLabel: "Schlüsselfaktoren",
    highlightsLabel: "Highlights",
    keyDrivers: [
      { text: "Erhalt großer Naturflächen" },
      { text: "Politik mit Fokus auf ökologische Nachhaltigkeit" },
      { text: "Technologie und nachhaltige Bewirtschaftung" },
    ],
    marketHighlights: [
      { text: "Lebensmittelproduktion für 30–50 Millionen Menschen" },
      { text: "Ein Land ohne Entwaldung" },
      { text: "Steuerliche Anreize für Forstinvestitionen" },
    ],
    legalNote: "Das Forstgesetz Nr. 15.939 bietet einen soliden rechtlichen Rahmen für verantwortungsvolle Investitionen.",
    downloads: [
      { label: "Forstbericht herunterladen (EN)",          href: "https://www.uruguayxxi.gub.uy/en/information-center/article/forestry-sector-in-uruguay/" },
      { label: "Agrarausblick 2024 herunterladen (EN)",    href: "https://www.uruguayxxi.gub.uy/en/information-center/article/agriculture-report-2024/" },
    ],
  },

  investSpecial: {
    eyebrow:  "04 · Sonderprojekte",
    headline: "Sonderprojekte",
    intro:    "Bei SACRAMENTUM CAPITAL verfügen wir über Mandate und Zugang zu ausgewählten Sonderprojekten, die Chancen für strategische Investoren bieten.",
    pillars: [
      { heading: "Spezialisierter Ansatz",   body: "Projekte mit besonderer Komplexität wie Restrukturierungen, Notlagen, Refinanzierungen oder Situationen, die diskrete fachkundige Begleitung erfordern." },
      { heading: "Schlüsselsektoren",        body: "Logistik und Transport · Hafeninfrastruktur · Stadtentwicklung · Exklusive Immobilien" },
      { heading: "Vertraulicher Zugang",     body: "Direkte und vertrauliche Betreuung ausgewählter Projekte für erfahrene Investoren. Für mehr Informationen wenden Sie sich bitte direkt an unser Team." },
    ],
    cta: "Team kontaktieren",
  },

  investHero: {
    eyebrow:     "Investitionssektoren",
    headline:    "Investieren in Uruguay",
    intro1:      "Entdecken Sie Investitionsmöglichkeiten in einem der stabilsten und attraktivsten Länder Lateinamerikas.",
    intro2:      "In den letzten Jahren hat Uruguay deutliche Fortschritte beim Ausbau seiner Straßen-, Schienen- und Energieinfrastruktur gemacht. Daraus sind konkrete Chancen für strategische Akteure in Schlüsselsektoren wie Immobilien, Infrastruktur, Logistik, Landwirtschaft, Forstwirtschaft und erneuerbare Energien entstanden.",
    scrollLabel: "Scrollen und entdecken",
  },

  blog: {
    eyebrow:      "Einblicke",
    headline:     "Blog",
    subtitle:     "Perspektiven des Sacramentum-Teams zu Investitionen, Immobilien und Auswandern nach Uruguay.",
    readLabel:    "BEITRAG LESEN",
    empty:        "Noch keine Beiträge – schauen Sie bald wieder vorbei.",
    backLabel:    "Zurück zum Blog",
    linkedinText: "Originalbeitrag auf LinkedIn ansehen",
  },

  services: {
    step: "Schritt",
  },
};
