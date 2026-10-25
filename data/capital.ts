/* ─────────────────────────────────────────────────────────────────────────────
   Sacramentum Capital page — body copy (EN/ES/DE).
   Source: ~/Desktop/Sacramentum_Capital_Presentation.pdf (7 pages, EN/ES).
   Curated for the website, not the PDF's order: what it is and the headline
   figures → proof (track record + six featured transactions) → what it does
   → how it works → Pablo Mautone → contact.
   ⚠️ The PDF footer reads "Confidential" and it names clients: publishing
   needs the client's explicit OK (docs/PENDIENTES.md). The 2026 technology
   company sale is left out on purpose: it is still in closing stage.
   Bio follows the PDF (JPMorgan Associate → Executive Director); the team card
   keeps the stage-1 bio. Years in operation count from 2010 (Maque, 21.10.2026).
   Metadata, nav label and card text stay in data/topics/sacramentum-capital.ts.
   ─────────────────────────────────────────────────────────────────────────── */

import type { Locale } from "@/lib/i18n";

export type Sector = "energy" | "infra" | "devbank" | "ma";

export interface Stat { value: string; label: string }

/** Founded in 2010: the figure follows the calendar (read at build time). */
const YEARS = String(new Date().getFullYear() - 2010);

export interface CapitalCopy {
  hero:  { eyebrow: string; title: string; intro: string[]; stats: Stat[] };
  focus: { heading: string; items: { title: string; stat: string; body: string }[] };
  track: { eyebrow: string; heading: string; intro: string; legend: string; scrollHint: string; sectors: Record<Sector, string>; featured: string };
  deals: { year: string; name: string; amount: string; tags: string; body: string }[];
  how:   { heading: string; items: { title: string; body: string }[] };
  pablo: { eyebrow: string; name: string; role: string; intro: string; points: string[] };
  cta:   { heading: string; body: string; label: string };
}

// Closed transactions on the PDF's track record (p. 5–6) that have a name and
// an amount. Year = position on the axis; area proportional to value.
export const TRACK: { label: string; year: number; value: number; sector: Sector; side: "up" | "down" }[] = [
  { label: "UTE Bond",  year: 2012.0, value: 100, sector: "energy",  side: "up"   },
  { label: "UTE PF",    year: 2012.2, value: 220, sector: "infra",   side: "down" },
  { label: "Pampa IPO", year: 2015.0, value: 100, sector: "energy",  side: "up"   },
  { label: "Arias IPO", year: 2015.1, value: 54,  sector: "energy",  side: "down" },
  { label: "CAF Fund",  year: 2016.7, value: 300, sector: "devbank", side: "down" },
  { label: "CAF PP",    year: 2018.0, value: 34,  sector: "devbank", side: "up"   },
  { label: "SISI",      year: 2019.0, value: 36,  sector: "ma",      side: "up"   },
  { label: "Circuit 1", year: 2019.4, value: 91,  sector: "infra",   side: "down" },
  { label: "Circuit 2", year: 2021.0, value: 70,  sector: "infra",   side: "up"   },
  { label: "Prex",      year: 2022.2, value: 20,  sector: "ma",      side: "down" },
  { label: "CVU",       year: 2023.0, value: 200, sector: "infra",   side: "up"   },
  { label: "NGS",       year: 2023.4, value: 15,  sector: "ma",      side: "down" },
  { label: "Napoli",    year: 2024.4, value: 55,  sector: "ma",      side: "down" },
  { label: "INFRAM",    year: 2025.1, value: 100, sector: "infra",   side: "up"   },
  { label: "Baluma",    year: 2026.3, value: 180, sector: "ma",      side: "up"   },
];

export const CAPITAL: Record<Locale, CapitalCopy> = {
  en: {
    hero: {
      eyebrow: "Sacramentum Capital",
      title:   "Investment banking boutique in Montevideo, since 2010",
      intro: [
        "Sacramentum Capital advises on structured finance, capital markets and cross-border M&A across the Southern Cone, for regional companies, institutional investors and public entities, on transactions that require both technical depth and local judgment.",
        "It is Sacramentum Advisors' investment banking firm: Advisors guides international investors and families in Uruguay; Capital leads corporate finance transactions. When an Advisors client considers a transaction led by Capital, we disclose that relationship.",
      ],
      stats: [
        { value: "USD 1.6B+", label: "In closed transactions" },
        { value: "30",        label: "Mandates since 2010" },
        { value: "12",        label: "Sectors" },
        { value: YEARS,       label: "Years in operation" },
      ],
    },
    focus: {
      heading: "What Sacramentum Capital does",
      items: [
        { title: "Infrastructure & energy", stat: "USD 960M+ advised",
          body: "From UTE's landmark USD 100 million bond issuance in 2012 to wind farm financing, PPP road circuits and infrastructure debt vehicles." },
        { title: "Capital markets", stat: "Bonds, IPOs, liability management",
          body: "Complex capital markets transactions for public and private clients, including UTE, CAF and CVU, with a recognized standing among Uruguay's pension funds." },
        { title: "Regional M&A", stat: "17+ transactions",
          body: "Buyers and sellers in cross-border deals across Uruguay, Brazil, Argentina and Chile: fintech, logistics, hospitality, agribusiness, healthcare, technology and insurance." },
      ],
    },
    track: {
      eyebrow:  "Track record",
      heading:  "Main transactions since 2012",
      intro:    "Each bubble is a closed transaction, placed by year; its size is proportional to the transaction value.",
      legend:   "Sector",
      scrollHint: "Swipe to see the full timeline",
      sectors:  { energy: "Energy", infra: "Infrastructure", devbank: "Development bank", ma: "M&A" },
      featured: "Featured transactions",
    },
    deals: [
      { year: "2016", name: "CAF Infrastructure Fund",    amount: "USD 300M", tags: "Development bank · IPO",           body: "The first infrastructure debt fund in Uruguay, structured and placed for CAF: the largest transaction in the firm's history." },
      { year: "2023", name: "CVU Liability Management",   amount: "USD 200M", tags: "Infrastructure · Capital markets", body: "Liability management for Corporación Vial del Uruguay, one of the most technically complex mandates in the firm's history." },
      { year: "2026", name: "Hotel Enjoy Punta del Este", amount: "USD 180M", tags: "Hospitality · M&A",                body: "Advisory to Baluma on the sale to a leading Brazilian hospitality group, one of the most significant hospitality transactions in Uruguay's recent history." },
      { year: "2012", name: "UTE Bond Issuance",          amount: "USD 100M", tags: "Energy · Capital markets",         body: "UTE's inaugural bond issuance, the largest in the company's history at the time, and the start of the firm's relationship with Uruguay's institutional investors." },
      { year: "2025", name: "INFRAM IPO",                 amount: "USD 100M", tags: "Infrastructure · Equity",          body: "Lead advisor on one of the first equity offerings of its kind in the local market, beyond traditional debt." },
      { year: "2019", name: "PPP Road Circuit 1",         amount: "USD 91M",  tags: "Infrastructure · Project finance", body: "The first public-private partnership road circuit in Uruguay, with institutional placement in the local pension fund market." },
    ],
    how: {
      heading: "How Sacramentum Capital works",
      items: [
        { title: "Led by the founding partner", body: "Every mandate is led personally by Pablo Mautone, from origination through closing. No junior handoffs at critical stages." },
        { title: "Built on referrals and discretion", body: "The firm has never marketed its services: every mandate has come through referral. The most consequential transactions in the region rarely make headlines, and confidentiality matters as much as execution." },
        { title: "Trusted by institutions", body: "Advisor to Uruguay's Ministry of Economy and Finance, UTE and Corporación Vial del Uruguay across successive governments, with a recognized standing among the country's pension funds." },
      ],
    },
    pablo: {
      eyebrow: "Founding partner",
      name:    "Pablo Mautone",
      role:    "Founding Partner, Sacramentum Capital",
      intro:   "Pablo founded Sacramentum Capital on returning to Uruguay in 2010, after his career in international investment banking.",
      points: [
        "Seven years at JPMorgan in New York and Latin America, from Associate in Latin American M&A to Executive Director",
        "Earlier at Banco Bozano Simonsen in Rio de Janeiro, and VR Capital in Buenos Aires",
        "MBA, University of Michigan Ross School of Business",
        "Board member of Distribuidora de Gas Montevideo; President of the Board of Baluma",
      ],
    },
    cta: {
      heading: "Considering a transaction in the Southern Cone?",
      body:    "Speak with the team about financing, capital markets or a sale or acquisition. Every conversation is confidential.",
      label:   "Book a consultation",
    },
  },

  es: {
    hero: {
      eyebrow: "Sacramentum Capital",
      title:   "Boutique de banca de inversión en Montevideo, desde 2010",
      intro: [
        "Sacramentum Capital asesora en finanzas estructuradas, mercado de capitales y M&A transfronterizo en el Cono Sur, para empresas regionales, inversores institucionales y entidades públicas, en transacciones que requieren profundidad técnica y conocimiento local.",
        "Es la firma de banca de inversión de Sacramentum: Advisors acompaña a inversores y familias internacionales en Uruguay; Capital lidera transacciones de finanzas corporativas. Cuando un cliente de Advisors considera una transacción liderada por Capital, lo informamos.",
      ],
      stats: [
        { value: "USD 1.6B+", label: "En transacciones cerradas" },
        { value: "30",        label: "Mandatos desde 2010" },
        { value: "12",        label: "Sectores" },
        { value: YEARS,       label: "Años de operación" },
      ],
    },
    focus: {
      heading: "Qué hace Sacramentum Capital",
      items: [
        { title: "Infraestructura y energía", stat: "USD 960M+ asesorados",
          body: "Desde la histórica emisión de bonos de UTE por USD 100 millones en 2012 hasta financiamiento de parques eólicos, circuitos viales PPP y vehículos de deuda de infraestructura." },
        { title: "Mercado de capitales", stat: "Bonos, IPOs, gestión de pasivos",
          body: "Transacciones complejas para clientes públicos y privados, incluyendo UTE, CAF y CVU, con una posición reconocida ante los fondos de pensión uruguayos." },
        { title: "M&A regional", stat: "17+ transacciones",
          body: "Compradores y vendedores en operaciones transfronterizas en Uruguay, Brasil, Argentina y Chile: fintech, logística, hotelería, agronegocios, salud, tecnología y seguros." },
      ],
    },
    track: {
      eyebrow:  "Trayectoria",
      heading:  "Principales transacciones desde 2012",
      intro:    "Cada burbuja es una transacción cerrada, ubicada por año; su tamaño es proporcional al valor de la transacción.",
      legend:   "Sector",
      scrollHint: "Deslizá para ver toda la línea de tiempo",
      sectors:  { energy: "Energía", infra: "Infraestructura", devbank: "Banco de desarrollo", ma: "M&A" },
      featured: "Transacciones destacadas",
    },
    deals: [
      { year: "2016", name: "Fondo de Infraestructura CAF",  amount: "USD 300M", tags: "Banco de desarrollo · IPO",             body: "El primer fondo de deuda de infraestructura de Uruguay, estructurado y colocado para CAF: la mayor transacción de la historia de la firma." },
      { year: "2023", name: "Gestión de pasivos de CVU",     amount: "USD 200M", tags: "Infraestructura · Mercado de capitales", body: "Gestión de pasivos para Corporación Vial del Uruguay, uno de los mandatos técnicamente más complejos de la firma." },
      { year: "2026", name: "Hotel Enjoy Punta del Este",    amount: "USD 180M", tags: "Hotelería · M&A",                       body: "Asesoramiento a Baluma en la venta a un grupo hotelero brasileño líder, una de las transacciones hoteleras más relevantes de la historia reciente de Uruguay." },
      { year: "2012", name: "Emisión de bonos de UTE",       amount: "USD 100M", tags: "Energía · Mercado de capitales",         body: "La primera emisión de bonos de UTE, la mayor de su historia en ese momento, y el comienzo de la relación de la firma con los inversores institucionales uruguayos." },
      { year: "2025", name: "IPO de INFRAM",                 amount: "USD 100M", tags: "Infraestructura · Equity",              body: "Asesor líder en una de las primeras ofertas de acciones de este tipo en el mercado local, más allá de la deuda tradicional." },
      { year: "2019", name: "Circuito Vial PPP 1",           amount: "USD 91M",  tags: "Infraestructura · Project finance",     body: "El primer circuito vial de participación público-privada de Uruguay, con colocación en los fondos de pensión locales." },
    ],
    how: {
      heading: "Cómo trabaja Sacramentum Capital",
      items: [
        { title: "Liderado por el socio fundador", body: "Cada mandato lo dirige personalmente Pablo Mautone, de inicio a cierre. Sin traspasos a equipos junior en las etapas críticas." },
        { title: "Referencias y discreción", body: "La firma nunca comercializó sus servicios: cada mandato llegó por referencias. Las transacciones más relevantes de la región rara vez trascienden, y la confidencialidad importa tanto como la ejecución." },
        { title: "Confianza institucional", body: "Asesor del Ministerio de Economía y Finanzas, UTE y Corporación Vial del Uruguay a lo largo de sucesivos gobiernos, con una posición reconocida ante los fondos de pensión del país." },
      ],
    },
    pablo: {
      eyebrow: "Socio fundador",
      name:    "Pablo Mautone",
      role:    "Socio fundador de Sacramentum Capital",
      intro:   "Pablo fundó Sacramentum Capital al regresar a Uruguay en 2010, después de su carrera en la banca de inversión internacional.",
      points: [
        "Siete años en JPMorgan, en Nueva York y América Latina: de Asociado en M&A Latam a Director Ejecutivo",
        "Antes, Banco Bozano Simonsen en Río de Janeiro; después, VR Capital en Buenos Aires",
        "MBA, University of Michigan Ross School of Business",
        "Director de Distribuidora de Gas Montevideo; presidente del directorio de Baluma",
      ],
    },
    cta: {
      heading: "¿Está evaluando una transacción en el Cono Sur?",
      body:    "Hable con el equipo sobre financiamiento, mercado de capitales o una venta o adquisición. Cada conversación es confidencial.",
      label:   "Reservar consulta",
    },
  },

  de: {
    hero: {
      eyebrow: "Sacramentum Capital",
      title:   "Investment-Banking-Boutique in Montevideo, seit 2010",
      intro: [
        "Sacramentum Capital berät zu strukturierten Finanzierungen, Kapitalmärkten und grenzüberschreitenden M&A-Transaktionen im Southern Cone, für regionale Unternehmen, institutionelle Investoren und öffentliche Einrichtungen, bei Transaktionen, die technische Tiefe und lokales Urteilsvermögen verlangen.",
        "Sie ist die Investment-Banking-Firma von Sacramentum: Advisors begleitet internationale Investoren und Familien in Uruguay, Capital führt Corporate-Finance-Transaktionen. Erwägt ein Advisors-Kunde eine von Capital geführte Transaktion, legen wir diese Verbindung offen.",
      ],
      stats: [
        { value: "USD 1.6B+", label: "Abgeschlossene Transaktionen" },
        { value: "30",        label: "Mandate seit 2010" },
        { value: "12",        label: "Sektoren" },
        { value: YEARS,       label: "Jahre am Markt" },
      ],
    },
    focus: {
      heading: "Was Sacramentum Capital macht",
      items: [
        { title: "Infrastruktur und Energie", stat: "USD 960M+ Beratungsvolumen",
          body: "Von der wegweisenden Anleihe von UTE über 100 Millionen US-Dollar im Jahr 2012 bis zu Windparkfinanzierungen, PPP-Straßenprojekten und Infrastruktur-Schuldenvehikeln." },
        { title: "Kapitalmärkte", stat: "Anleihen, Börsengänge, Liability Management",
          body: "Komplexe Kapitalmarkttransaktionen für öffentliche und private Kunden, darunter UTE, CAF und CVU, mit anerkanntem Ruf bei den uruguayischen Pensionsfonds." },
        { title: "Regionale M&A", stat: "17+ Transaktionen",
          body: "Käufer und Verkäufer bei grenzüberschreitenden Transaktionen in Uruguay, Brasilien, Argentinien und Chile: Fintech, Logistik, Hotellerie, Agrarwirtschaft, Gesundheit, Technologie und Versicherungen." },
      ],
    },
    track: {
      eyebrow:  "Track Record",
      heading:  "Wichtigste Transaktionen seit 2012",
      intro:    "Jede Blase ist eine abgeschlossene Transaktion, nach Jahr angeordnet; ihre Größe entspricht dem Transaktionswert.",
      legend:   "Sektor",
      scrollHint: "Wischen, um die ganze Zeitleiste zu sehen",
      sectors:  { energy: "Energie", infra: "Infrastruktur", devbank: "Entwicklungsbank", ma: "M&A" },
      featured: "Ausgewählte Transaktionen",
    },
    deals: [
      { year: "2016", name: "CAF-Infrastrukturfonds",     amount: "USD 300M", tags: "Entwicklungsbank · IPO",             body: "Der erste Infrastruktur-Schuldenfonds Uruguays, für CAF strukturiert und platziert: die größte Transaktion der Firmengeschichte." },
      { year: "2023", name: "CVU Liability Management",   amount: "USD 200M", tags: "Infrastruktur · Kapitalmärkte",      body: "Liability Management für die Corporación Vial del Uruguay, eines der technisch anspruchsvollsten Mandate der Firma." },
      { year: "2026", name: "Hotel Enjoy Punta del Este", amount: "USD 180M", tags: "Hotellerie · M&A",                   body: "Beratung von Baluma beim Verkauf an eine führende brasilianische Hotelgruppe, eine der bedeutendsten Hoteltransaktionen der jüngeren Geschichte Uruguays." },
      { year: "2012", name: "Anleiheemission UTE",        amount: "USD 100M", tags: "Energie · Kapitalmärkte",            body: "Die erste Anleihe von UTE, damals die größte der Unternehmensgeschichte, und der Beginn der Beziehung der Firma zu Uruguays institutionellen Investoren." },
      { year: "2025", name: "Börsengang INFRAM",          amount: "USD 100M", tags: "Infrastruktur · Eigenkapital",       body: "Lead Advisor bei einem der ersten Eigenkapitalangebote dieser Art am lokalen Markt." },
      { year: "2019", name: "PPP-Straßenprojekt 1",       amount: "USD 91M",  tags: "Infrastruktur · Projektfinanzierung", body: "Das erste öffentlich-private Straßenprojekt Uruguays, mit Platzierung bei den lokalen Pensionsfonds." },
    ],
    how: {
      heading: "Wie Sacramentum Capital arbeitet",
      items: [
        { title: "Vom Gründungspartner geführt", body: "Jedes Mandat führt Pablo Mautone persönlich, von der Anbahnung bis zum Abschluss. Keine Übergabe an Junior-Teams in entscheidenden Phasen." },
        { title: "Empfehlungen und Diskretion", body: "Die Firma hat ihre Leistungen nie beworben: Jedes Mandat kam über Empfehlungen. Die wichtigsten Transaktionen der Region kommen selten in die Schlagzeilen, und Vertraulichkeit zählt so viel wie die Umsetzung." },
        { title: "Vertrauen der Institutionen", body: "Berater des uruguayischen Wirtschafts- und Finanzministeriums, von UTE und der Corporación Vial del Uruguay über mehrere Regierungen hinweg, mit anerkanntem Ruf bei den Pensionsfonds des Landes." },
      ],
    },
    pablo: {
      eyebrow: "Gründungspartner",
      name:    "Pablo Mautone",
      role:    "Gründungspartner von Sacramentum Capital",
      intro:   "Pablo gründete Sacramentum Capital 2010 nach seiner Rückkehr nach Uruguay, nach seiner Laufbahn im internationalen Investment Banking.",
      points: [
        "Sieben Jahre bei JPMorgan in New York und Lateinamerika: vom Associate im LatAm-M&A bis zum Executive Director",
        "Davor Banco Bozano Simonsen in Rio de Janeiro, danach VR Capital in Buenos Aires",
        "MBA, University of Michigan Ross School of Business",
        "Verwaltungsrat der Distribuidora de Gas Montevideo; Präsident des Verwaltungsrats von Baluma",
      ],
    },
    cta: {
      heading: "Planen Sie eine Transaktion im Southern Cone?",
      body:    "Sprechen Sie mit dem Team über Finanzierung, Kapitalmärkte oder einen Verkauf bzw. Kauf. Jedes Gespräch ist vertraulich.",
      label:   "Beratung vereinbaren",
    },
  },
};
