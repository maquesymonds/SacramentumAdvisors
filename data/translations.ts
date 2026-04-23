/* ─────────────────────────────────────────────────────────────────────────────
   Sacramentum Advisors — Translation Dictionary
   Bilingual: English (en) | Spanish (es)

   Usage:
     import { t, type Locale } from "@/data/translations"
     const copy = t("en")
     copy.nav.home  // → "Home"
   ─────────────────────────────────────────────────────────────────────────── */

export type Locale = "en" | "es";

export interface SiteTranslations {
  locale: Locale;
  siteName: string;
  siteTagline: string;

  nav: {
    home:       string;
    whyUruguay: string;
    sectors:    string;
    team:       string;
    news:       string;
    blog:       string;
    contact:    string;
    langToggle: string;
  };

  hero: {
    eyebrow:    string;
    headline:   string;
    subheadline:string;
    cta:        string;
    ctaSecondary: string;
    scrollLabel: string;
  };

  // ── Sections scaffolded for future use ──────────────────────────────────
  whyUruguay: {
    eyebrow:    string;
    headline:   string;
    subheadline:string;
    stats: Array<{ value: string; label: string }>;
    cards: Array<{
      id:          string;
      icon:        string;
      title:       string;
      description: string;
    }>;
  };

  sectors: {
    eyebrow:    string;
    headline:   string;
    subheadline:string;
    items: Array<{
      id:          string;
      title:       string;
      description: string;
    }>;
  };

  howWeSupport: {
    eyebrow:    string;
    headline:   string;
    subheadline:string;
    cta:        string;
    cards: Array<{
      id:          string;
      image:       string;
      title:       string;
      description: string;
    }>;
  };

  whySacramentum: {
    eyebrow:    string;
    headline:   string;
    subheadline:string;
    cards: Array<{
      id:          string;
      roman:       string;
      eyebrow:     string;
      title:       string;
      description: string;
    }>;
  };

  lifestyleAssets: {
    eyebrow:    string;
    headline:   string;
    subheadline:string;
  };

  trust: {
    eyebrow:    string;
    headline:   string;
    body:       string;
  };

  team: {
    eyebrow:  string;
    headline: string;
    leadership: Array<{
      id:    string;
      image: string;
      name:  string;
      role:  string;
      bio:   string;
    }>;
    advisory: {
      eyebrow:    string;
      headline:   string;
      subheadline:string;
      members: Array<{
        id:    string;
        image: string;
        name:  string;
        role:  string;
        bio:   string;
      }>;
    };
  };

  news: {
    eyebrow:    string;
    headline:   string;
    subtitle:   string;
    viewAll:    string;
    readArticle:string;
    articles: Array<{
      id:       string;
      image:    string;
      category: string;
      title:    string;
      excerpt:  string;
      slug:     string;
      date?:    string;
    }>;
  };

  contact: {
    eyebrow:    string;
    headline:   string;
    subheadline:string;
    cta:        string;
  };

  contactPage: {
    meta: {
      title:       string;
      description: string;
    };
    eyebrow:  string;
    headline: string;
    intro:    string;
    form: {
      nameLabel:           string;
      namePlaceholder:     string;
      emailLabel:          string;
      emailPlaceholder:    string;
      phoneLabel:          string;
      phonePlaceholder:    string;
      countryLabel:        string;
      countryPlaceholder:  string;
      interestLabel:       string;
      interestPlaceholder: string;
      interestOptions: Array<{ value: string; label: string }>;
      messageLabel:        string;
      messagePlaceholder:  string;
      submit:              string;
      submitting:          string;
    };
    success: {
      headline: string;
      body:     string;
    };
    info: {
      heading:   string;
      location1: string;
      location2: string;
      email:     string;
      phone:     string;
      trustNote: string;
    };
  };

  closingCta: {
    eyebrow:  string;
    headline: string;
    body:     string;
    cta:      string;
  };

  footer: {
    brand: {
      tagline: string;
    };
    nav: {
      title: string;
      links: Array<{ label: string; href: string }>;
    };
    services: {
      title: string;
      links: Array<{ label: string; href: string }>;
    };
    contact: {
      title:    string;
      location: string;
      email:    string;
    };
    legal: {
      copyright: string;
      privacy:   string;
      terms:     string;
    };
  };
}

// ─── English ─────────────────────────────────────────────────────────────────
const en: SiteTranslations = {
  locale:      "en",
  siteName:    "Sacramentum Advisors",
  siteTagline: "Principled Advisory. Strategic Assets. Latin America's Most Stable Market.",

  nav: {
    home:       "Home",
    whyUruguay: "Why Uruguay",
    sectors:    "Services",
    team:       "Team",
    news:       "News",
    blog:       "Blog",
    contact:    "Contact",
    langToggle: "ES",
  },

  hero: {
    eyebrow:     "Strategic Asset Acquisition",
    headline:    "We help you establish your strategic footprint in Uruguay.",
    subheadline: "Bespoke residency, real estate, and capital structuring for those seeking a foundational base in Latin America's premier haven.",
    cta:         "Schedule a call",
    ctaSecondary:"Explore Uruguay",
    scrollLabel: "Scroll to explore",
  },

  whyUruguay: {
    eyebrow:     "Why Uruguay",
    headline:    "Why Uruguay?",
    subheadline: "A stable, globally connected platform for capital preservation, regional expansion, and long-term family positioning.",
    stats: [
      { value: "#1",   label: "Least corruption in Latin America" },
      { value: "97%",  label: "Renewable energy" },
      { value: "98%",  label: "Literacy rate" },
      { value: "3.5M", label: "Population" },
    ],
    cards: [
      {
        id:          "stability",
        icon:        "shield",
        title:       "Institutional Stability & Trust",
        description: "Uruguay stands out for democratic strength, legal certainty, and the lowest corruption levels in the region. In a volatile continent, it offers seriousness, predictability, and long-term confidence.",
      },
      {
        id:          "innovation",
        icon:        "circuit",
        title:       "A Future-Ready Innovation Ecosystem",
        description: "A regional leader in telecommunications, digital government, and renewable energy, Uruguay combines natural wealth with forward-looking innovation and sustainability policies.",
      },
      {
        id:          "talent",
        icon:        "people",
        title:       "Highly Skilled, Digitally Integrated Talent",
        description: "With one of the world's highest literacy rates and strong digital inclusion, Uruguay offers qualified talent and an educated workforce prepared for long-term growth.",
      },
      {
        id:          "quality",
        icon:        "leaf",
        title:       "Quality of Life as a Strategic Asset",
        description: "Safety, healthcare, education, and social openness make Uruguay an ideal environment for executives, founders, and families seeking both protection and lifestyle quality.",
      },
      {
        id:          "geography",
        icon:        "globe",
        title:       "A Privileged Geographic Position",
        description: "With direct Mercosur access, strong logistics, and excellent regional connectivity, Uruguay is a highly efficient gateway to South America and global trade routes.",
      },
      {
        id:          "tax",
        icon:        "document",
        title:       "Tax Incentives & Investment Regimes",
        description: "Free zones, tax incentives, residency advantages, and investor-friendly regimes create an attractive environment for foreign capital and long-term strategic establishment.",
      },
    ],
  },

  sectors: {
    eyebrow:     "Our Sectors",
    headline:    "Where we guide capital.",
    subheadline: "We specialize in the most resilient and appreciating asset categories Uruguay has to offer.",
    items: [
      {
        id:          "residential",
        title:       "Luxury Residential",
        description: "Private residences and coastal estates in Uruguay's most coveted locations.",
      },
      {
        id:          "agricultural",
        title:       "Agricultural Land",
        description: "Productive farmland with long-term value — forestry, soy, and cattle ranches.",
      },
      {
        id:          "commercial",
        title:       "Commercial Assets",
        description: "Strategic commercial real estate in Montevideo and growth corridors.",
      },
      {
        id:          "equestrian",
        title:       "Equestrian & Ranches",
        description: "Curated estancias and equestrian properties for families and investors.",
      },
    ],
  },

  howWeSupport: {
    eyebrow:     "Our Support",
    headline:    "How We Support You",
    subheadline: "From market intelligence and transaction structuring to residency, local establishment, and long-term capital positioning, our team supports each stage of your investment move into Uruguay.",
    cta:         "Schedule a private advisory call",
    cards: [
      {
        id:          "soft-landing",
        image:       "/images/hands.webp",
        title:       "Soft Landing Partnerships",
        description: "Our network of legal, financial, tax, and ecosystem partners ensures close support throughout every stage of your establishment process, from residency and structuring to local integration and operational setup.",
      },
      {
        id:          "market-intelligence",
        image:       "/images/puerto.webp",
        title:       "Market Intelligence",
        description: "We conduct opportunity-specific research, sector analysis, risk evaluation, and competitive mapping to give you clear visibility before making high-stakes investment or relocation decisions.",
      },
      {
        id:          "strategic-advisory",
        image:       "/images/writing.webp",
        title:       "Strategic Advisory",
        description: "Our legal and financial experts help assess opportunities, structure transactions, and plan your long-term landing across Uruguay and the wider South American region.",
      },
      {
        id:          "investment-banking",
        image:       "/images/bandera.webp",
        title:       "Investment banking boutique",
        description: "Through Sacramentum Capital, we provide professional advisory across M&A, capital markets advisory, institutional relationships, and investment proyects law, supporting sophisticated transactions with precision and strategic clarity.",
      },
    ],
  },

  whySacramentum: {
    eyebrow:     "Why Sacramentum",
    headline:    "Why Sacramentum?",
    subheadline: "A trust-first advisory platform built on senior execution, institutional access, and long-term alignment.",
    cards: [
      {
        id:          "seniority",
        roman:       "I",
        eyebrow:     "Track Record",
        title:       "Seniority & Track Record",
        description: "Our team brings decades of leadership across strategic advisory, institutional promotion, and cross-border capital decisions, delivering judgment shaped by real senior experience.",
      },
      {
        id:          "network",
        roman:       "II",
        eyebrow:     "Network",
        title:       "Public-to-Private Insider Network",
        description: "Our experience across both public and private sectors provides direct access to institutional frameworks, strategic relationships, and trusted regional partners across Uruguay, Argentina, and Paraguay.",
      },
      {
        id:          "trust",
        roman:       "III",
        eyebrow:     "Alignment",
        title:       "A Boutique, Trust-First Approach",
        description: "Trust is our most valuable asset. We only move into formal engagement when full alignment exists around your long-term vision, family priorities, and capital strategy.",
      },
    ],
  },

  lifestyleAssets: {
    eyebrow:     "Lifestyle Assets",
    headline:    "Where capital and life converge.",
    subheadline: "Beyond pure investment — assets that enrich the lives of the families who own them.",
  },

  trust: {
    eyebrow: "Our Commitment",
    headline:"We do not manage assets. We guard legacies.",
    body:    "Sacramentum Advisors was founded on the principle that the most important advisory relationships are built on total confidentiality, absolute integrity, and a deep understanding of what families are truly protecting.",
  },

  team: {
    eyebrow:  "Our Team",
    headline: "Our Team",
    leadership: [
      {
        id:    "ines",
        image: "/images/ines.png",
        name:  "Inés Bonicelli",
        role:  "Managing Director",
        bio:   "Holds a Bachelor's degree in Business Management from the Universidad Católica del Uruguay and an MBA from the University of Michigan, with an extensive career spanning the public, private, and civil society sectors. She began her career in the meatpacking industry before moving on to roles at ABN AMRO, Citi, and Bozano Simonsen (Rio de Janeiro, Brazil).\n\nDuring a decade in the United States, she founded and led Reaching U, a Foundation for Uruguay, and managed a showroom in New York. From 2020 to 2025, she served as Deputy Executive Director at Uruguay XXI, leading key initiatives for foreign investment attraction. She subsequently became Business Developer at the Uruguay Innovation Hub, a government program focused on promoting entrepreneurship, strengthening the innovation ecosystem, and attracting venture capital.",
      },
      {
        id:    "pablo",
        image: "/images/pablo.png",
        name:  "Pablo Mautone",
        role:  "Director",
        bio:   "Pablo Mautone is the founder and director of Sacramentum Capital, an investment banking firm headquartered in Uruguay, recognized for its strategic leadership, reliability, and professional approach. He brings a solid international track record, having served as Vice President of Investment Banking at J.P. Morgan and Lehman Brothers, with a specialized focus on energy, infrastructure, and agribusiness.\n\nHis career also includes a distinguished tenure at Bozano Simonsen in Rio de Janeiro and experience at VR Hedge Fund. Combining deep technical expertise, professional rigor, and a discreet leadership style, Pablo leads Sacramentum Capital in delivering high-impact financial solutions and top-confidentiality strategic advisory focused on generating real and sustainable value for clients.",
      },
    ],
    advisory: {
      eyebrow:    "Advisory Board",
      headline:   "Advisory Board",
      subheadline:"Our advisory board extends our reach across public policy, infrastructure, sustainability, technology, and regional institutional networks.",
      members: [
        {
          id:    "omar",
          image: "/images/omar.webp",
          name:  "Omar Paganini",
          role:  "Energy & Public Policy",
          bio:   "Electrical engineer, academic, and Uruguayan politician with a distinguished career in the public and private sectors. He served as Uruguay's Minister of Industry, Energy and Mining (2020–2023), and subsequently as Minister of Foreign Affairs (2023–2025). His deep expertise in energy, technology, and telecommunications, combined with strategic vision and experience in public and private management, make him a key reference and high-value advisor on development and innovation.",
        },
        {
          id:    "guillermo",
          image: "/images/guillermo.webp",
          name:  "Guillermo Javier Dietrich",
          role:  "Infrastructure & Mobility",
          bio:   "Economist from the Universidad Católica Argentina with an MBA from IAE. Entrepreneur, businessman, and politician with extensive experience in public and private management. From 2009 to 2015 he led the transformation of Buenos Aires City's transit and transportation systems. He served as Argentina's Minister of Transport (2015–2019), leading one of the largest ministries in government. Currently a member of the PRO party council, leads G25, and advises organizations across the private and public sectors.",
        },
        {
          id:    "eleanor",
          image: "/images/PaulinaFernandez.JPG",
          name:  "Paulina Fernandez Rubio",
          role:  "Investment Sales & Wealth",
          bio:   "Paulina is a distinguished investment sales professional with a stellar track record in investment product brokerage and personal wealth management across Europe and South America. With a natural talent for sales and exceptional relationship-building skills, Paulina excels at connecting with high-net-worth individuals. She brings extensive multinational financial services experience from top-tier institutions like Citibank, Merrill Lynch, and Lloyds TSB, all backed by a Business Administration degree with a finance emphasis. A true global citizen, Paulina is fluent in Spanish, English, Portuguese, French, and German. Her studies and professional connections extend across the USA, Switzerland, Spain, and South America, particularly in Argentina, Brazil, and Uruguay. Married to an expatriate marketing executive, Paulina's dynamic career has taken her across the globe, living in Montevideo, Lima, Dubai, Rio de Janeiro, Zurich, and Barcelona between 2003–2017.",
        },
      ],
    },
  },

  news: {
    eyebrow:     "Uruguay in the News",
    headline:    "Uruguay in the News",
    subtitle:    "Discover the latest stories and insights that showcase Uruguay's potential as an investment destination and cultural hub.",
    viewAll:     "View all articles",
    readArticle: "Read article",
    articles: [
      {
        id:       "port",
        image:    "/images/news/port.avif",
        category: "Economy",
        title:    "Montevideo Port: Gateway to South American Trade",
        excerpt:  "How Uruguay's strategic location and world-class port infrastructure continue to position Montevideo as a leading logistics and trade hub in the region.",
        slug:     "montevideo-port-gateway-south-american-trade",
        date:     "2025-03-14",
      },
      {
        id:       "montevideo",
        image:    "/images/news/montevideo.avif",
        category: "Lifestyle",
        title:    "The Walking City: Graceful Montevideo",
        excerpt:  "A closer look at Montevideo's waterfront culture, urban rhythm, and high quality of life, making it increasingly attractive for global families and investors.",
        slug:     "the-walking-city-graceful-montevideo",
        date:     "2025-02-28",
      },
      {
        id:       "investment",
        image:    "/images/news/investment.avif",
        category: "Investment",
        title:    "Uruguay's Rising Investment Leaders",
        excerpt:  "The professionals and institutions helping shape Uruguay's next chapter as a stable, internationally connected destination for capital and innovation.",
        slug:     "uruguays-rising-investment-leaders",
        date:     "2025-01-19",
      },
      {
        id:       "agri-boom",
        image:    "/images/woods.avif",
        category: "Investment",
        title:    "Agricultural Land in Uruguay: A Generational Asset Class",
        excerpt:  "With fertile prairies, dollar-denominated transactions, and no restrictions on foreign ownership, Uruguay's farmland is quietly becoming one of the most compelling long-term holds in the Southern Hemisphere.",
        slug:     "agricultural-land-uruguay-generational-asset",
        date:     "2025-04-05",
      },
      {
        id:       "tech-hub",
        image:    "/placeholders/pde.avif",
        category: "Economy",
        title:    "Zonamerica: Inside Latin America's Premier Free Trade Zone",
        excerpt:  "How a visionary free trade zone north of Montevideo became the anchor for Uruguay's technology export boom — and why global companies keep choosing it over cheaper alternatives.",
        slug:     "zonamerica-latin-america-premier-free-trade-zone",
        date:     "2025-03-22",
      },
      {
        id:       "residency",
        image:    "/placeholders/lapalom.avif",
        category: "Lifestyle",
        title:    "Why High-Net-Worth Families Are Choosing Uruguayan Residency",
        excerpt:  "Stable institutions, competitive tax treatment, and a genuinely high quality of life have made Uruguay the residency choice of an increasingly diverse global cohort — from Latin American executives to European retirees.",
        slug:     "high-net-worth-families-uruguayan-residency",
        date:     "2025-02-14",
      },
      {
        id:       "pde-market",
        image:    "/placeholders/hero-coast.avif",
        category: "Investment",
        title:    "Punta del Este: Beyond the Seasonal Myth",
        excerpt:  "Long dismissed as a summer destination, Punta del Este's real estate market has matured into a year-round proposition — driven by remote work migration, Uruguayan residency demand, and a shrinking supply of premium coastal lots.",
        slug:     "punta-del-este-beyond-seasonal-myth",
        date:     "2025-01-30",
      },
      {
        id:       "governance",
        image:    "/placeholders/colonia.avif",
        category: "Economy",
        title:    "Governance Premium: Why Uruguay's Institutions Command a Risk Discount",
        excerpt:  "In a region where political risk is the default assumption, Uruguay's consistent institutional track record — across left and right administrations alike — produces something rare: a genuine governance premium that sophisticated investors are beginning to price in.",
        slug:     "governance-premium-uruguays-institutions",
        date:     "2024-12-18",
      },
    ],
  },

  contact: {
    eyebrow:     "Contact",
    headline:    "Begin a confidential conversation.",
    subheadline: "We work with a select number of clients. All inquiries are handled with complete discretion.",
    cta:         "Request a consultation",
  },

  closingCta: {
    eyebrow:  "Begin a Conversation",
    headline: "Ready to explore your move into Uruguay?",
    body:     "Whether you are evaluating residency, capital deployment, family relocation, or long-term strategic establishment, our team offers discreet senior-level guidance tailored to your priorities.",
    cta:      "Book a private consultation",
  },

  contactPage: {
    meta: {
      title:       "Private Consultation | Sacramentum Advisors",
      description: "Connect with the Sacramentum Advisors team to discuss residency, strategic asset acquisition, lifestyle assets, or long-term positioning in Uruguay.",
    },
    eyebrow:  "Private Consultation",
    headline: "Connect with our team.",
    intro:    "Connect with our team in Uruguay to discuss residency, strategic asset acquisition, lifestyle assets, or long-term positioning in the region.",
    form: {
      nameLabel:           "Full Name",
      namePlaceholder:     "Your full name",
      emailLabel:          "Email Address",
      emailPlaceholder:    "your@email.com",
      phoneLabel:          "Phone Number",
      phonePlaceholder:    "Optional",
      countryLabel:        "Country of Residence",
      countryPlaceholder:  "e.g. United States",
      interestLabel:       "Area of Interest",
      interestPlaceholder: "Select an area",
      interestOptions: [
        { value: "not-sure",               label: "I'm not sure yet — just exploring" },
        { value: "residency",              label: "Residency"                  },
        { value: "strategic-acquisition",  label: "Strategic Asset Acquisition" },
        { value: "lifestyle-assets",       label: "Lifestyle Assets"            },
        { value: "real-estate",            label: "Real Estate Opportunities"   },
        { value: "agriculture-forestry",   label: "Agriculture & Forestry"      },
        { value: "special-situations",     label: "Special Situations"          },
        { value: "general-advisory",       label: "General Advisory"            },
      ],
      messageLabel:        "Message",
      messagePlaceholder:  "Tell us briefly about your priorities and how we can help.",
      submit:              "Request a Private Consultation",
      submitting:          "Sending…",
    },
    success: {
      headline: "Thank you for reaching out.",
      body:     "We have received your enquiry and will respond within one to two business days. All correspondence is handled with complete discretion.",
    },
    info: {
      heading:   "Contact Information",
      location1: "Montevideo, Uruguay",
      location2: "Carrasco, Montevideo",
      email:     "ines@sacramentumcapital.com",
      phone:     "+598 95 532 533",
      trustNote: "All conversations are handled with discretion and senior-level attention.",
    },
  },

  footer: {
    brand: {
      tagline: "Strategic advisory for long-term positioning in Uruguay.",
    },
    nav: {
      title: "Navigation",
      links: [
        { label: "Home",        href: "/"             },
        { label: "Why Uruguay", href: "/invest"        },
        { label: "Services",    href: "/services"     },
        { label: "News",        href: "/news"         },
        { label: "Contact",     href: "/contact"      },
      ],
    },
    services: {
      title: "Services",
      links: [
        { label: "Strategic Advisory",          href: "/services?card=strategic-advisory" },
        { label: "Market Intelligence",          href: "/services?card=market-intelligence" },
        { label: "Soft Landing Partnerships",    href: "/services?card=soft-landing" },
        { label: "Boutique Investment Banking",  href: "/services?card=investment-banking" },
      ],
    },
    contact: {
      title:    "Contact",
      location: "Carrasco, Montevideo",
      email:    "ines@sacramentumcapital.com",
    },
    legal: {
      copyright: "© 2025 Sacramentum Advisors. All rights reserved.",
      privacy:   "Privacy Policy",
      terms:     "Terms of Service",
    },
  },
};

// ─── Spanish ─────────────────────────────────────────────────────────────────
const es: SiteTranslations = {
  locale:      "es",
  siteName:    "Sacramentum Advisors",
  siteTagline: "Asesoría con principios. Activos estratégicos. El mercado más estable de América Latina.",

  nav: {
    home:       "Inicio",
    whyUruguay: "Por qué Uruguay",
    sectors:    "Servicios",
    team:       "Equipo",
    news:       "Noticias",
    blog:       "Blog",
    contact:    "Contacto",
    langToggle: "EN",
  },

  hero: {
    eyebrow:     "Adquisición de Activos Estratégicos",
    headline:    "La firma de asesoría detrás de su llegada a Uruguay.",
    subheadline: "Asesoramos en Real Estate, adquisición de tierra y empresas. Guiamos en obtención de residencia y la estrategia de capital para familias e inversores.",
    cta:         "Agendar una consulta",
    ctaSecondary:"Explorar Uruguay",
    scrollLabel: "Explorar",
  },

  whyUruguay: {
    eyebrow:     "Por qué Uruguay",
    headline:    "¿Por qué invertir en Uruguay?",
    subheadline: "Un lugar estable, globalmente conectado donde puede alcanzar sus objetivos de diversificación y resguardo de capital, expansión regional y posicionamiento familiar a largo plazo.",
    stats: [
      { value: "#1",   label: "Menos corrupción en América Latina" },
      { value: "97%",  label: "Energía renovable" },
      { value: "98%",  label: "Tasa de alfabetización" },
      { value: "3.5M", label: "Habitantes" },
    ],
    cards: [
      {
        id:          "stability",
        icon:        "shield",
        title:       "Estabilidad y confianza institucional",
        description: "Uruguay es reconocido por su solidez democrática, su seguridad jurídica y su bajo índice de corrupción —el más bajo de la región. En un continente con volatilidad, Uruguay representa certeza, profesionalismo y seriedad.",
      },
      {
        id:          "innovation",
        icon:        "circuit",
        title:       "Un ecosistema ideal para la innovación y la sostenibilidad",
        description: "Líder regional en telecomunicaciones, energías renovables (97% de su matriz energética), gobierno digital y producción de alimentos premium, Uruguay combina sus riquezas naturales con políticas de desarrollo sostenible y una visión de futuro.",
      },
      {
        id:          "talent",
        icon:        "people",
        title:       "Capital humano calificado y digitalmente integrado",
        description: "Con una de las tasas de alfabetización más altas del mundo y un modelo educativo que promueve la inclusión digital desde la infancia, Uruguay forma talento preparado para los desafíos del siglo XXI.",
      },
      {
        id:          "quality",
        icon:        "leaf",
        title:       "Calidad de vida como activo estratégico",
        description: "Invertir en Uruguay también significa operar en un entorno seguro, con instituciones sólidas, servicios de salud y educación de calidad, y una sociedad abierta, igualitaria y acogedora. Esto facilita tanto la atracción de talento como la instalación de equipos ejecutivos y familias.",
      },
      {
        id:          "geography",
        icon:        "globe",
        title:       "Una ubicación geográfica privilegiada",
        description: "Con acceso directo a los mercados del Mercosur, acuerdos de libre comercio y excelente conectividad logística, Uruguay es una puerta de entrada eficiente a América del Sur y una base operativa ideal para empresas globales.",
      },
      {
        id:          "tax",
        icon:        "document",
        title:       "Incentivos Fiscales y Regímenes promocionales a la inversión",
        description: "La ley de exoneración de impuesto a la renta en el sector tecnológico, un atractivo régimen de promoción de inversiones en activos fijos, una propuesta de tax holiday para los residentes fiscales y un sólido esquema de zonas francas y puertos libres son algunos de los incentivos fiscales que promueven la inversión extranjera.",
      },
    ],
  },

  sectors: {
    eyebrow:     "Nuestros Sectores",
    headline:    "Donde orientamos el capital.",
    subheadline: "Nos especializamos en las categorías de activos más resilientes y de mayor apreciación que Uruguay ofrece.",
    items: [
      {
        id:          "residential",
        title:       "Residencial de Lujo",
        description: "Residencias privadas y propiedades costeras en las ubicaciones más codiciadas de Uruguay.",
      },
      {
        id:          "agricultural",
        title:       "Tierras Agrícolas",
        description: "Tierras productivas con valor a largo plazo — forestación, soja y estancias ganaderas.",
      },
      {
        id:          "commercial",
        title:       "Activos Comerciales",
        description: "Bienes raíces comerciales estratégicos en Montevideo y corredores de crecimiento.",
      },
      {
        id:          "equestrian",
        title:       "Estancias y Propiedades Ecuestres",
        description: "Estancias y propiedades ecuestres seleccionadas para familias e inversores.",
      },
    ],
  },

  howWeSupport: {
    eyebrow:     "Nuestro Asesoramiento",
    headline:    "Cómo te acompañamos",
    subheadline: "Desde inteligencia de mercado y estructuración de transacciones hasta residencia, establecimiento local y posicionamiento de capital a largo plazo, nuestro equipo lo acompaña en cada etapa de su proceso.",
    cta:         "Agendar una llamada de asesoría privada",
    cards: [
      {
        id:          "investment-banking",
        image:       "/images/bandera.webp",
        title:       "Boutique de Banca de Inversión",
        description: "A través de SACRAMENTUM CAPITAL, brindamos asesoramiento estratégico y confidencial en procesos de M&A, mercado de capitales, relacionamiento institucional, estructuración financiera y régimen de inversiones, acompañando transacciones sofisticadas con precisión y criterio.",
      },
      {
        id:          "soft-landing",
        image:       "/images/hands.webp",
        title:       "Soft Landing Partnerships",
        description: "Contamos con una red de socios estratégicos que integra expertos legales, financieros y referentes clave del ecosistema público y privado. Brindamos un acompañamiento cercano y eficiente durante todo el proceso de instalación, expansión y operación en Uruguay.",
      },
      {
        id:          "market-intelligence",
        image:       "/images/puerto.webp",
        title:       "Market Intelligence",
        description: "Realizamos estudios y análisis del mercado relevante para cada oportunidad de inversión. Evaluamos competencia, riesgos, marco regulatorio y entorno de negocios, aportando claridad estratégica para decisiones de entrada, expansión o transacción.",
      },
      {
        id:          "strategic-advisory",
        image:       "/images/writing.webp",
        title:       "Asesoría Estratégica",
        description: "Nuestros socios legales y financieros ayudan a identificar oportunidades, estructurar operaciones y planificar un aterrizaje sólido en Uruguay y la región. Acompañamos procesos de adquisición, asociación e inversión con visión de largo plazo.",
      },
    ],
  },

  whySacramentum: {
    eyebrow:     "Por qué Sacramentum",
    headline:    "¿Por qué Sacramentum?",
    subheadline: "Una plataforma de asesoría con foco en la confianza, construida sobre ejecución senior, acceso institucional y alineación a largo plazo.",
    cards: [
      {
        id:          "seniority",
        roman:       "I",
        eyebrow:     "Trayectoria",
        title:       "Seniority y Trayectoria",
        description: "Nuestro equipo aporta décadas de liderazgo en asesoría estratégica, promoción institucional y decisiones de capital transfronterizo, con un juicio forjado en experiencia senior real.",
      },
      {
        id:          "network",
        roman:       "II",
        eyebrow:     "Red",
        title:       "Red Insider Público-Privada",
        description: "Nuestra experiencia en los sectores público y privado brinda acceso directo a marcos institucionales, relaciones estratégicas y socios regionales de confianza en Uruguay, Argentina y Paraguay.",
      },
      {
        id:          "trust",
        roman:       "III",
        eyebrow:     "Alineación",
        title:       "Un Enfoque Boutique, Primero la Confianza",
        description: "La confianza es nuestro activo más valioso. Solo avanzamos hacia un compromiso formal cuando existe plena alineación con su visión a largo plazo, las prioridades familiares y la estrategia de capital.",
      },
    ],
  },

  lifestyleAssets: {
    eyebrow:     "Activos de Estilo de Vida",
    headline:    "Donde el capital y la vida convergen.",
    subheadline: "Más allá de la inversión pura — activos que enriquecen la vida de las familias que los poseen.",
  },

  trust: {
    eyebrow: "Nuestro Compromiso",
    headline:"No administramos activos. Custodiamos legados.",
    body:    "Sacramentum Advisors fue fundada bajo el principio de que las relaciones de asesoría más importantes se construyen sobre confidencialidad total, integridad absoluta y una profunda comprensión de lo que las familias verdaderamente están protegiendo.",
  },

  team: {
    eyebrow:  "Nuestro Equipo",
    headline: "Nuestro Equipo",
    leadership: [
      {
        id:    "ines",
        image: "/images/ines.png",
        name:  "Inés Bonicelli",
        role:  "Directora General",
        bio:   "Licenciada en Dirección de Empresas por la Universidad Católica del Uruguay y MBA por la Universidad de Michigan, con una amplia trayectoria en los sectores público, privado y de la sociedad civil. Comenzó su carrera en la industria frigorífica y luego se desempeñó en diversas instituciones financieras como ABN AMRO, Citi y Bozano Simonsen (Río de Janeiro, Brasil).\n\nDurante una década en Estados Unidos, fundó y dirigió Reaching U, a Foundation for Uruguay, y fue responsable de la gestión de un showroom en Nueva York. Entre 2020 y 2025, ocupó el cargo de vicedirectora ejecutiva en Uruguay XXI, liderando iniciativas y sectores clave para la atracción de inversión extranjera. Posteriormente, fue Business Developer del Uruguay Innovation Hub, programa gubernamental enfocado en promover el emprendimiento, fortalecer el ecosistema de innovación y atraer inversión en capital de riesgo.",
      },
      {
        id:    "pablo",
        image: "/images/pablo.png",
        name:  "Pablo Mautone",
        role:  "Director",
        bio:   "Pablo Mautone es fundador y director de Sacramentum Capital, firma de banca de inversión con sede en Uruguay, reconocida por su liderazgo estratégico, confiabilidad y enfoque profesional. Posee una sólida trayectoria internacional, habiéndose desempeñado como vicepresidente de Banca de Inversión en instituciones globales de primer nivel como J.P. Morgan y Lehman Brothers, con un enfoque especializado en los sectores de energía, infraestructura y agroindustria.\n\nSu carrera incluye también un paso destacado por Bozano Simonsen en Río de Janeiro, Brasil, así como una valiosa experiencia en el fondo de cobertura VR Hedge Fund. Con una combinación de profundo conocimiento técnico, rigor profesional y un estilo de liderazgo discreto, Pablo lidera Sacramentum Capital brindando soluciones financieras de alto impacto y asesoramiento estratégico de máxima confidencialidad, orientado a generar valor real y sostenible para sus clientes.",
      },
    ],
    advisory: {
      eyebrow:    "Consejo Asesor",
      headline:   "Consejo Asesor",
      subheadline:"Profesionales de clase mundial unidos por nuestro compromiso con la excelencia y el éxito de nuestros clientes.",
      members: [
        {
          id:    "omar",
          image: "/images/omar.webp",
          name:  "Omar Paganini",
          role:  "Energía & Políticas Públicas",
          bio:   "Ingeniero electricista, académico y político uruguayo con una destacada trayectoria en los sectores público y privado. Se desempeñó como Ministro de Industria, Energía y Minería de Uruguay entre 2020 y 2023, y posteriormente como Ministro de Relaciones Exteriores (2023–2025). Su profundo conocimiento en energía, tecnología y telecomunicaciones, junto con una visión estratégica y experiencia en gestión pública y privada, lo convierten en un referente clave y asesor de alto valor en temas de desarrollo e innovación.",
        },
        {
          id:    "guillermo",
          image: "/images/guillermo.webp",
          name:  "Guillermo Javier Dietrich",
          role:  "Infraestructura & Movilidad",
          bio:   "Economista de la Universidad Católica Argentina con MBA del IAE. Emprendedor, empresario y político con amplia experiencia en gestión pública y privada. Entre 2009 y 2015 lideró la transformación del tránsito y transporte de la Ciudad de Buenos Aires. Se desempeñó como Ministro de Transporte de la Nación Argentina entre 2015 y 2019, liderando uno de los ministerios de mayor dimensión del gobierno. Actualmente es miembro del consejo del partido PRO, lidera G25, y asesora organizaciones del ámbito privado y público.",
        },
        {
          id:    "eleanor",
          image: "/images/PaulinaFernandez.JPG",
          name:  "Paulina Fernandez Rubio",
          role:  "Ventas & Wealth Management",
          bio:   "Paulina es una destacada profesional de ventas de inversión con un historial sobresaliente en corretaje de productos de inversión y gestión de patrimonio personal en Europa y América del Sur. Con un talento natural para las ventas y habilidades excepcionales para construir relaciones, Paulina se destaca al conectar con individuos de alto patrimonio neto. Aporta una amplia experiencia en servicios financieros multinacionales en instituciones de primer nivel como Citibank, Merrill Lynch y Lloyds TSB, respaldada por una licenciatura en Administración de Empresas con énfasis en finanzas. Una verdadera ciudadana global, Paulina habla con fluidez español, inglés, portugués, francés y alemán. Sus estudios y conexiones profesionales se extienden por Estados Unidos, Suiza, España y América del Sur, especialmente en Argentina, Brasil y Uruguay. Casada con un ejecutivo de marketing expatriado, la dinámica carrera de Paulina la ha llevado por todo el mundo, habiendo vivido en Montevideo, Lima, Dubái, Río de Janeiro, Zúrich y Barcelona entre 2003 y 2017.",
        },
      ],
    },
  },

  news: {
    eyebrow:     "Uruguay en los Medios",
    headline:    "Uruguay en los Medios",
    subtitle:    "Una selección curada de historias y señales que marcan el ascenso de Uruguay como destino estratégico para la inversión, la calidad de vida y el posicionamiento como hub a largo plazo.",
    viewAll:     "Ver todos los artículos",
    readArticle: "Leer artículo",
    articles: [
      {
        id:       "port",
        image:    "/images/news/port.avif",
        category: "Economía",
        title:    "Puerto de Montevideo: Puerta de Entrada al Comercio Sudamericano",
        excerpt:  "Cómo la ubicación estratégica y la infraestructura portuaria de clase mundial de Uruguay continúan posicionando a Montevideo como un hub logístico y comercial líder en la región.",
        slug:     "puerto-montevideo-puerta-comercio-sudamericano",
        date:     "2025-03-14",
      },
      {
        id:       "montevideo",
        image:    "/images/news/montevideo.avif",
        category: "Estilo de Vida",
        title:    "La Ciudad Caminable: La Elegante Montevideo",
        excerpt:  "Un análisis detallado de la cultura costera de Montevideo, su ritmo urbano y su alta calidad de vida, que la hacen cada vez más atractiva para familias e inversores globales.",
        slug:     "la-ciudad-caminable-elegante-montevideo",
        date:     "2025-02-28",
      },
      {
        id:       "investment",
        image:    "/images/news/investment.avif",
        category: "Inversión",
        title:    "Los Líderes Emergentes de la Inversión en Uruguay",
        excerpt:  "Los profesionales e instituciones que ayudan a construir el próximo capítulo de Uruguay como destino estable e internacionalmente conectado para el capital y la innovación.",
        slug:     "lideres-emergentes-inversion-uruguay",
        date:     "2025-01-19",
      },
      {
        id:       "agri-boom",
        image:    "/images/woods.avif",
        category: "Inversión",
        title:    "Tierras Agrícolas en Uruguay: Una Clase de Activo Generacional",
        excerpt:  "Con praderas fértiles, transacciones en dólares y sin restricciones para propietarios extranjeros, las tierras agrícolas de Uruguay se están convirtiendo silenciosamente en una de las tenencias a largo plazo más atractivas del hemisferio sur.",
        slug:     "tierras-agricolas-uruguay-activo-generacional",
        date:     "2025-04-05",
      },
      {
        id:       "tech-hub",
        image:    "/placeholders/pde.avif",
        category: "Economía",
        title:    "Zonamerica: Por Dentro de la Zona Franca Líder de América Latina",
        excerpt:  "Cómo una visionaria zona franca al norte de Montevideo se convirtió en el ancla del boom exportador tecnológico de Uruguay, y por qué las empresas globales siguen eligiéndola sobre alternativas más baratas.",
        slug:     "zonamerica-zona-franca-lider-america-latina",
        date:     "2025-03-22",
      },
      {
        id:       "residency",
        image:    "/placeholders/lapalom.avif",
        category: "Estilo de Vida",
        title:    "Por Qué las Familias de Alto Patrimonio Eligen la Residencia Uruguaya",
        excerpt:  "Instituciones estables, tratamiento fiscal competitivo y una genuina calidad de vida han convertido a Uruguay en la elección de residencia de un cohorte global cada vez más diverso.",
        slug:     "familias-alto-patrimonio-residencia-uruguaya",
        date:     "2025-02-14",
      },
      {
        id:       "pde-market",
        image:    "/placeholders/hero-coast.avif",
        category: "Inversión",
        title:    "Punta del Este: Más Allá del Mito Estacional",
        excerpt:  "El mercado inmobiliario de Punta del Este ha madurado hacia una propuesta durante todo el año, impulsado por la migración de trabajo remoto, la demanda de residencia uruguaya y una oferta cada vez más escasa de lotes costeros premium.",
        slug:     "punta-del-este-mas-alla-mito-estacional",
        date:     "2025-01-30",
      },
      {
        id:       "governance",
        image:    "/placeholders/colonia.avif",
        category: "Economía",
        title:    "Prima de Gobernanza: Por Qué las Instituciones de Uruguay Generan un Descuento de Riesgo",
        excerpt:  "En una región donde el riesgo político es el supuesto predeterminado, el historial institucional consistente de Uruguay, a través de administraciones de izquierda y derecha, produce algo excepcional: una auténtica prima de gobernanza que los inversores sofisticados comienzan a valorar.",
        slug:     "prima-gobernanza-instituciones-uruguay",
        date:     "2024-12-18",
      },
    ],
  },

  contact: {
    eyebrow:     "Contacto",
    headline:    "Inicie una conversación confidencial.",
    subheadline: "Trabajamos con un número selecto de clientes. Todas las consultas se manejan con total discreción.",
    cta:         "Solicitar una consulta",
  },

  closingCta: {
    eyebrow:  "Iniciar una Conversación",
    headline: "¿Listo para explorar su llegada a Uruguay?",
    body:     "Ya sea que esté evaluando la residencia, el despliegue de capital, la reubicación familiar o el establecimiento estratégico a largo plazo, nuestro equipo ofrece orientación senior discreta adaptada a sus prioridades.",
    cta:      "Reservar una consulta privada",
  },

  contactPage: {
    meta: {
      title:       "Consulta Privada | Sacramentum Advisors",
      description: "Conéctese con el equipo de Sacramentum Advisors para hablar sobre residencia, adquisición estratégica de activos, activos de estilo de vida o posicionamiento a largo plazo en Uruguay.",
    },
    eyebrow:  "Consulta Privada",
    headline: "Conéctese con nuestro equipo.",
    intro:    "Conéctese con nuestro equipo en Uruguay para hablar sobre residencia, adquisición estratégica de activos, activos de estilo de vida o posicionamiento a largo plazo en la región.",
    form: {
      nameLabel:           "Nombre Completo",
      namePlaceholder:     "Su nombre completo",
      emailLabel:          "Correo Electrónico",
      emailPlaceholder:    "su@correo.com",
      phoneLabel:          "Número de Teléfono",
      phonePlaceholder:    "Opcional",
      countryLabel:        "País de Residencia",
      countryPlaceholder:  "Ej. Argentina",
      interestLabel:       "Área de Interés",
      interestPlaceholder: "Seleccione un área",
      interestOptions: [
        { value: "not-sure",               label: "Aún no lo sé — solo explorando"   },
        { value: "residency",              label: "Residencia"                       },
        { value: "strategic-acquisition",  label: "Adquisición Estratégica de Activos" },
        { value: "lifestyle-assets",       label: "Activos de Estilo de Vida"         },
        { value: "real-estate",            label: "Oportunidades Inmobiliarias"       },
        { value: "agriculture-forestry",   label: "Agricultura y Forestación"         },
        { value: "special-situations",     label: "Situaciones Especiales"            },
        { value: "general-advisory",       label: "Asesoría General"                 },
      ],
      messageLabel:        "Mensaje",
      messagePlaceholder:  "Cuéntenos brevemente sobre sus prioridades y cómo podemos ayudarle.",
      submit:              "Solicitar una Consulta Privada",
      submitting:          "Enviando…",
    },
    success: {
      headline: "Gracias por contactarnos.",
      body:     "Hemos recibido su consulta y le responderemos dentro de uno a dos días hábiles. Toda la correspondencia se maneja con total discreción.",
    },
    info: {
      heading:   "Información de Contacto",
      location1: "Montevideo, Uruguay",
      location2: "Carrasco, Montevideo",
      email:     "ines@sacramentumcapital.com",
      phone:     "+598 95 532 533",
      trustNote: "Todas las conversaciones se manejan con discreción y atención a nivel senior.",
    },
  },

  footer: {
    brand: {
      tagline: "Asesoría estratégica para el posicionamiento a largo plazo en Uruguay.",
    },
    nav: {
      title: "Navegación",
      links: [
        { label: "Inicio",          href: "/"             },
        { label: "Por qué Uruguay", href: "/invest"        },
        { label: "Servicios",       href: "/services"     },
        { label: "Noticias",        href: "/news"         },
        { label: "Contacto",        href: "/contact"      },
      ],
    },
    services: {
      title: "Servicios",
      links: [
        { label: "Asesoría Estratégica",           href: "/services?card=strategic-advisory" },
        { label: "Inteligencia de Mercado",         href: "/services?card=market-intelligence" },
        { label: "Asociaciones de Soft Landing",    href: "/services?card=soft-landing" },
        { label: "Banca de Inversión Boutique",     href: "/services?card=investment-banking" },
      ],
    },
    contact: {
      title:    "Contacto",
      location: "Carrasco, Montevideo",
      email:    "ines@sacramentumcapital.com",
    },
    legal: {
      copyright: "© 2025 Sacramentum Advisors. Todos los derechos reservados.",
      privacy:   "Política de Privacidad",
      terms:     "Términos de Servicio",
    },
  },
};

// ─── Locale dictionary ────────────────────────────────────────────────────────
const translations: Record<Locale, SiteTranslations> = { en, es };

export function t(locale: Locale = "en"): SiteTranslations {
  return translations[locale];
}

export default translations;
