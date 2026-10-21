/* ─────────────────────────────────────────────────────────────────────────────
   Sacramentum Capital page — body copy (EN/ES/DE).
   Source: ~/Desktop/Sacramentum_Capital_Presentation.pdf (7 pages, bilingual
   EN/ES). EN and ES follow the PDF; where its Spanish line is shorter than
   the English one, the Spanish is completed from the English. DE by Claude.
   ⚠️ The PDF footer reads "Confidential" and it names clients and an
   ongoing mandate (2026 technology company, "in closing stage"). Publishing
   needs the client's explicit OK — see docs/PENDIENTES.md.
   Bio: the PDF (JPMorgan Associate → Executive Director) replaces the older
   site bio ("VP at J.P. Morgan and Lehman Brothers"); confirm with the client.
   Metadata, nav label and card text stay in data/topics/sacramentum-capital.ts.
   ─────────────────────────────────────────────────────────────────────────── */

import type { Locale } from "@/lib/i18n";

export type Sector = "energy" | "infra" | "devbank" | "ma";

export interface Stat { value: string; label: string }

export interface CapitalCopy {
  hero:  { eyebrow: string; title: string; lead: string; stats: Stat[]; place: string };
  who:   { eyebrow: string; heading: string; body: string[]; callout: { title: string; body: string }; relation: { title: string; body: string } };
  why:   { eyebrow: string; heading: string; items: { title: string; body: string }[] };
  focus: { eyebrow: string; heading: string; items: { title: string; body: string; stat: Stat }[] };
  track: { eyebrow: string; heading: string; intro: string; legend: string; sizeNote: string; scrollHint: string; sectors: Record<Sector, string>; stats: Stat[] };
  deals: { eyebrow: string; heading: string; items: { year: string; name: string; amount: string; tags: string; body: string; ongoing?: boolean }[] };
  pablo: { eyebrow: string; name: string; role: string; intro: string; points: string[]; careerTitle: string; career: { years: string; org: string; role: string }[] };
  cta:   { heading: string; body: string; label: string };
}

// Main transactions on the track record (PDF p. 5 and p. 6). Only bubbles
// with a name and an amount in the PDF are drawn; their sum is USD 1.605B,
// matching the "USD 1.6B+" headline. Year = position on the axis.
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
  { label: "Tech Co",   year: 2026.2, value: 30,  sector: "ma",      side: "down" },
  { label: "Baluma",    year: 2026.5, value: 180, sector: "ma",      side: "up"   },
];

export const CAPITAL: Record<Locale, CapitalCopy> = {
  en: {
    hero: {
      eyebrow: "Investment banking boutique",
      title:   "Sacramentum Capital",
      lead:    "An investment banking boutique headquartered in Montevideo, specialized in strategic financial advisory across the Southern Cone.",
      place:   "Montevideo, Uruguay",
      stats: [
        { value: "USD 1.6B+", label: "Closed transactions" },
        { value: "30",        label: "Mandates since 2010" },
        { value: "15",        label: "Years in operation" },
      ],
    },
    who: {
      eyebrow: "Who we are",
      heading: "Structured finance, capital markets and cross-border M&A",
      body: [
        "We advise on structured finance, capital markets and cross-border M&A — working with regional companies, institutional investors and public entities on transactions that require both technical depth and local judgment.",
      ],
      callout:  { title: "Senior-led execution", body: "Every mandate is led personally by our founding partner, Pablo Mautone — from origination through closing. No junior handoffs at critical stages." },
      relation: { title: "Sacramentum Capital and Sacramentum Advisors", body: "Sacramentum Capital advises companies, institutions and public entities on corporate finance transactions. Sacramentum Advisors advises international investors and families on investing and settling in Uruguay. When a client of Sacramentum Advisors considers a transaction led by Sacramentum Capital, we disclose that relationship." },
    },
    why: {
      eyebrow: "Why Sacramentum Capital",
      heading: "Six reasons clients come back, and refer others",
      items: [
        { title: "Senior-led execution", body: "Every mandate is led personally by our founding partner from origination through closing. Clients engage with the person who has spent two decades executing transactions across the region." },
        { title: "Regional depth, international standards", body: "Pablo Mautone trained at Banco Bozano Simonsen in Rio de Janeiro and spent seven years at JPMorgan across Latin American M&A and emerging markets. International rigor meets regional judgment." },
        { title: "Trusted across sectors and administrations", body: "Advisor to Uruguay's Ministry of Economy and Finance, UTE and Corporación Vial del Uruguay. Mandates spanning successive governments and political cycles." },
        { title: "A track record built on referrals", body: "Sacramentum Capital has never marketed its services. Every mandate in our history has come through referral — from former clients, institutional partners and regional peers." },
        { title: "Institutional investor relationships", body: "Over fifteen years, the firm has built a recognized standing with Uruguay's pension funds. When Sacramentum Capital brings a transaction, it is worth examining." },
        { title: "Discretion as a working principle", body: "The Southern Cone's most consequential transactions rarely make headlines. We work comfortably in that space — where confidentiality and trust matter as much as technical execution." },
      ],
    },
    focus: {
      eyebrow: "Areas of focus",
      heading: "Three practices",
      items: [
        { title: "Infrastructure & energy", stat: { value: "USD 960M+", label: "Advisory volume" },
          body: "Sacramentum Capital's roots are in Uruguay's energy transformation. Beginning with UTE's landmark USD 100 million bond issuance in 2012, the firm has structured and advised on wind farm financing, PPP road circuits and infrastructure debt vehicles." },
        { title: "Capital markets", stat: { value: "5", label: "Capital markets mandates" },
          body: "From bond issuances and IPOs to private placements and liability management, the firm structures complex capital markets transactions for public and private clients — including UTE, CAF (Development Bank of Latin America) and CVU — with a recognized standing among Uruguay's institutional investors, including its pension funds." },
        { title: "Regional M&A", stat: { value: "17+", label: "M&A transactions" },
          body: "Sacramentum Capital advises buyers and sellers on cross-border transactions across Uruguay, Brazil, Argentina and Chile, in fintech, logistics, retail, hospitality, agribusiness, healthcare, technology and insurance — reflecting the growing interest of regional and international acquirers in Southern Cone assets." },
      ],
    },
    track: {
      eyebrow: "Track record",
      heading: "Main transactions since 2012",
      intro:   "Each bubble is a closed transaction, placed by year; its size is proportional to the transaction value.",
      legend:  "Sector",
      sizeNote: "Bubble size proportional to transaction value",
      scrollHint: "Swipe to see the full timeline",
      sectors: { energy: "Energy", infra: "Infrastructure", devbank: "Development bank", ma: "M&A" },
      stats: [
        { value: "USD 1.6B+", label: "Total transactions" },
        { value: "30",        label: "Closed mandates" },
        { value: "12",        label: "Sectors" },
        { value: "15",        label: "Years in operation" },
      ],
    },
    deals: {
      eyebrow: "Selected transactions",
      heading: "Selected transactions",
      items: [
        { year: "2012", name: "UTE Bond Issuance",            amount: "USD 100M", tags: "Energy · Capital markets",       body: "Advisory to UTE on its inaugural bond issuance — the largest in the company's history at the time. Established the firm's relationship with Uruguay's institutional investor base." },
        { year: "2016", name: "CAF Infrastructure Fund",      amount: "USD 300M", tags: "Development bank · IPO",         body: "Structured and placed the first infrastructure debt fund in Uruguay for CAF — the largest single transaction in the firm's history, requiring navigation of complex multilateral requirements." },
        { year: "2019", name: "PPP Road Circuit 1",           amount: "USD 91M",  tags: "Infrastructure · Project finance", body: "Financial advisory on the first public-private partnership road circuit in Uruguay. Combined project finance structuring with institutional placement into the local pension fund market." },
        { year: "2022", name: "Prex / Fintech",               amount: "USD 20M",  tags: "Fintech · M&A",                  body: "Advisory to Prex shareholders on the sale of a 30% stake to a leading regional bank, reflecting the growing maturity and international appeal of Uruguay's fintech sector." },
        { year: "2023", name: "CVU Liability Management",     amount: "USD 200M", tags: "Infrastructure · Capital markets", body: "Advisory to Corporación Vial del Uruguay on a liability management transaction — one of the most technically complex mandates in the firm's history." },
        { year: "2023", name: "NGS Seguros",                  amount: "USD 15M",  tags: "Insurance · M&A",                body: "Advised the shareholders of NGS Seguros on the sale of the Uruguayan insurance company to a global professional services firm." },
        { year: "2025", name: "INFRAM IPO",                   amount: "USD 100M", tags: "Infrastructure · Equity",        body: "Lead advisor on the IPO of INFRAM, one of the first equity offerings of its kind in the local market, demonstrating the firm's ability to develop capital markets solutions beyond traditional debt." },
        { year: "2026", name: "Hotel Enjoy Punta del Este",   amount: "USD 180M", tags: "Hospitality · M&A",              body: "Advisory to Baluma on the sale of Hotel Enjoy Punta del Este to a leading Brazilian hospitality group — one of the most significant hospitality transactions in Uruguay's recent history." },
        { year: "2026", name: "Uruguayan Technology Company", amount: "USD 30M",  tags: "Technology · Cross-border M&A",  body: "Advising the shareholders of a Uruguayan technology company on its sale to a US-based acquirer — a complex cross-border transaction, in closing stage.", ongoing: true },
      ],
    },
    pablo: {
      eyebrow: "Founding partner",
      name:    "Pablo Mautone",
      role:    "Founding Partner · Sacramentum Capital",
      intro:   "Pablo founded Sacramentum Capital on returning to Uruguay in 2010, after a decade in international investment banking. Over 15 years and USD 1.6B+ in closed transactions, built entirely through referrals.",
      points: [
        "Seven years at JPMorgan in New York and Latin America, from Associate in Latin American M&A to Executive Director",
        "MBA, University of Michigan — Ross School of Business",
        "Advisor to Uruguay's Ministry of Economy and Finance, UTE and Corporación Vial del Uruguay",
        "Board member of Distribuidora de Gas Montevideo; President of the Board of Baluma",
      ],
      careerTitle: "Career",
      career: [
        { years: "1998–2000", org: "Banco Bozano Simonsen", role: "Associate, TMT M&A · Rio de Janeiro" },
        { years: "2000–2007", org: "JPMorgan",              role: "Associate to Executive Director · New York / Latin America" },
        { years: "2008–2009", org: "VR Capital",            role: "Asset Manager · Buenos Aires" },
        { years: "2010–",     org: "Sacramentum Capital",   role: "Founding Partner · Montevideo" },
      ],
    },
    cta: {
      heading: "Considering a transaction in the Southern Cone?",
      body:    "Speak with Pablo Mautone about financing, capital markets or a sale or acquisition. Every conversation is confidential.",
      label:   "Book a consultation",
    },
  },

  es: {
    hero: {
      eyebrow: "Boutique de banca de inversión",
      title:   "Sacramentum Capital",
      lead:    "Una boutique de banca de inversión con sede en Montevideo, especializada en asesoramiento financiero estratégico en el Cono Sur.",
      place:   "Montevideo, Uruguay",
      stats: [
        { value: "USD 1.6B+", label: "Transacciones cerradas" },
        { value: "30",        label: "Mandatos desde 2010" },
        { value: "15",        label: "Años de operación" },
      ],
    },
    who: {
      eyebrow: "Quiénes somos",
      heading: "Finanzas estructuradas, mercado de capitales y M&A transfronterizo",
      body: [
        "Asesoramos en finanzas estructuradas, mercados de capitales y M&A transfronterizo, trabajando con empresas regionales, inversores institucionales y entidades públicas en transacciones que requieren profundidad técnica y conocimiento local.",
      ],
      callout:  { title: "Ejecución liderada por socios", body: "Cada mandato es dirigido personalmente por nuestro socio fundador, Pablo Mautone, de inicio a cierre. Sin traspasos a equipos junior en las etapas críticas." },
      relation: { title: "Sacramentum Capital y Sacramentum Advisors", body: "Sacramentum Capital asesora a empresas, instituciones y entidades públicas en transacciones de finanzas corporativas. Sacramentum Advisors asesora a inversores y familias internacionales para invertir e instalarse en Uruguay. Cuando un cliente de Sacramentum Advisors considera una transacción liderada por Sacramentum Capital, lo informamos." },
    },
    why: {
      eyebrow: "Por qué Sacramentum Capital",
      heading: "Seis razones por las que los clientes vuelven, y nos recomiendan",
      items: [
        { title: "Ejecución liderada por socios", body: "Cada mandato es liderado personalmente por nuestro socio fundador, de inicio a cierre. El cliente trabaja con quien lleva dos décadas ejecutando transacciones en la región." },
        { title: "Profundidad regional, estándares internacionales", body: "Pablo Mautone se formó en Banco Bozano Simonsen en Río de Janeiro y pasó siete años en JPMorgan, en M&A para América Latina y mercados emergentes. Rigor internacional con juicio regional." },
        { title: "Confianza transversal: sectores y administraciones", body: "Asesor del Ministerio de Economía y Finanzas, UTE y Corporación Vial del Uruguay. Mandatos que abarcan sucesivos gobiernos y ciclos políticos." },
        { title: "Una trayectoria construida sobre referencias", body: "Sacramentum Capital nunca ha comercializado sus servicios. Cada mandato ha llegado por referencias de clientes anteriores, socios institucionales y pares de la región." },
        { title: "Relaciones con inversores institucionales", body: "En quince años, la firma ha construido una posición reconocida ante los fondos de pensión uruguayos. Cuando Sacramentum Capital presenta una transacción, vale la pena analizarla." },
        { title: "La discreción como principio de trabajo", body: "Las transacciones más relevantes del Cono Sur rara vez trascienden. Trabajamos cómodamente en ese espacio, donde la confidencialidad y la confianza importan tanto como la ejecución técnica." },
      ],
    },
    focus: {
      eyebrow: "Áreas de enfoque",
      heading: "Tres áreas de práctica",
      items: [
        { title: "Infraestructura y energía", stat: { value: "USD 960M+", label: "Volumen asesorado" },
          body: "Las raíces de Sacramentum Capital están en la transformación energética de Uruguay. Desde la histórica emisión de bonos de UTE por USD 100 millones en 2012, la firma ha asesorado en financiamiento de parques eólicos, circuitos viales PPP y vehículos de deuda de infraestructura." },
        { title: "Mercado de capitales", stat: { value: "5", label: "Mandatos de mercado de capitales" },
          body: "Desde emisiones de bonos e IPOs hasta colocaciones privadas y gestión de pasivos, la firma estructura transacciones complejas para clientes públicos y privados, incluyendo UTE, CAF (Banco de Desarrollo de América Latina) y CVU, con una posición reconocida ante los inversores institucionales uruguayos y sus fondos de pensión." },
        { title: "M&A regional", stat: { value: "17+", label: "Transacciones de M&A" },
          body: "Sacramentum Capital asesora a compradores y vendedores en transacciones transfronterizas en Uruguay, Brasil, Argentina y Chile, en fintech, logística, retail, hotelería, agronegocios, salud, tecnología y seguros: el reflejo del creciente interés de compradores regionales e internacionales en activos del Cono Sur." },
      ],
    },
    track: {
      eyebrow: "Trayectoria",
      heading: "Principales transacciones desde 2012",
      intro:   "Cada burbuja es una transacción cerrada, ubicada por año; su tamaño es proporcional al valor de la transacción.",
      legend:  "Sector",
      sizeNote: "Tamaño proporcional al valor de la transacción",
      scrollHint: "Deslizá para ver toda la línea de tiempo",
      sectors: { energy: "Energía", infra: "Infraestructura", devbank: "Banco de desarrollo", ma: "M&A" },
      stats: [
        { value: "USD 1.6B+", label: "Volumen total" },
        { value: "30",        label: "Mandatos cerrados" },
        { value: "12",        label: "Sectores" },
        { value: "15",        label: "Años de operación" },
      ],
    },
    deals: {
      eyebrow: "Transacciones seleccionadas",
      heading: "Transacciones seleccionadas",
      items: [
        { year: "2012", name: "Emisión de bonos de UTE",            amount: "USD 100M", tags: "Energía · Mercado de capitales",       body: "Asesoramiento a UTE en su primera emisión de bonos, la mayor en la historia de la empresa hasta ese momento. Inició la relación de la firma con los inversores institucionales uruguayos." },
        { year: "2016", name: "Fondo de Infraestructura CAF",       amount: "USD 300M", tags: "Banco de desarrollo · IPO",            body: "Estructuración y colocación del primer fondo de deuda de infraestructura en Uruguay para CAF, la mayor transacción individual en la historia de la firma, con requisitos multilaterales complejos." },
        { year: "2019", name: "Circuito Vial PPP 1",                amount: "USD 91M",  tags: "Infraestructura · Project finance",    body: "Asesoramiento financiero en el primer circuito vial de participación público-privada de Uruguay, combinando estructuración de project finance con colocación en los fondos de pensión locales." },
        { year: "2022", name: "Prex / Fintech",                     amount: "USD 20M",  tags: "Fintech · M&A",                        body: "Asesoramiento a los accionistas de Prex en la venta del 30% a un banco regional líder, reflejo de la madurez y el atractivo internacional del sector fintech uruguayo." },
        { year: "2023", name: "Gestión de pasivos de CVU",          amount: "USD 200M", tags: "Infraestructura · Mercado de capitales", body: "Asesoramiento a Corporación Vial del Uruguay en una transacción de gestión de pasivos, uno de los mandatos técnicamente más complejos de la firma." },
        { year: "2023", name: "NGS Seguros",                        amount: "USD 15M",  tags: "Seguros · M&A",                        body: "Asesoramiento a los accionistas de NGS Seguros en la venta de la aseguradora uruguaya a una firma global de servicios profesionales." },
        { year: "2025", name: "IPO de INFRAM",                      amount: "USD 100M", tags: "Infraestructura · Equity",             body: "Asesor líder en la IPO de INFRAM, una de las primeras ofertas de acciones de este tipo en el mercado local, que muestra la capacidad de la firma para desarrollar soluciones más allá de la deuda tradicional." },
        { year: "2026", name: "Hotel Enjoy Punta del Este",         amount: "USD 180M", tags: "Hotelería · M&A",                      body: "Asesoramiento a Baluma en la venta del Hotel Enjoy Punta del Este a un grupo hotelero brasileño líder, una de las transacciones hoteleras más relevantes de la historia reciente de Uruguay." },
        { year: "2026", name: "Empresa tecnológica uruguaya",       amount: "USD 30M",  tags: "Tecnología · M&A transfronterizo",     body: "Asesoramiento a los accionistas de una empresa tecnológica uruguaya en su venta a un comprador estadounidense: una transacción transfronteriza compleja, en etapa de cierre.", ongoing: true },
      ],
    },
    pablo: {
      eyebrow: "Socio fundador",
      name:    "Pablo Mautone",
      role:    "Socio Fundador · Sacramentum Capital",
      intro:   "Pablo fundó Sacramentum Capital al regresar a Uruguay en 2010, después de una década en la banca de inversión internacional. Más de 15 años y USD 1.6B+ en transacciones cerradas, construidos íntegramente a través de referencias.",
      points: [
        "Siete años en JPMorgan, en Nueva York y América Latina: de Asociado en M&A Latam a Director Ejecutivo",
        "MBA, University of Michigan — Ross School of Business",
        "Asesor del Ministerio de Economía y Finanzas, UTE y Corporación Vial del Uruguay",
        "Director de Distribuidora de Gas Montevideo; presidente del directorio de Baluma",
      ],
      careerTitle: "Trayectoria",
      career: [
        { years: "1998–2000", org: "Banco Bozano Simonsen", role: "Asociado, M&A TMT · Río de Janeiro" },
        { years: "2000–2007", org: "JPMorgan",              role: "De Asociado a Director Ejecutivo · Nueva York / América Latina" },
        { years: "2008–2009", org: "VR Capital",            role: "Asset Manager · Buenos Aires" },
        { years: "2010–",     org: "Sacramentum Capital",   role: "Socio Fundador · Montevideo" },
      ],
    },
    cta: {
      heading: "¿Está evaluando una transacción en el Cono Sur?",
      body:    "Hable con Pablo Mautone sobre financiamiento, mercado de capitales o una venta o adquisición. Cada conversación es confidencial.",
      label:   "Reservar consulta",
    },
  },

  de: {
    hero: {
      eyebrow: "Investment-Banking-Boutique",
      title:   "Sacramentum Capital",
      lead:    "Eine Investment-Banking-Boutique mit Sitz in Montevideo, spezialisiert auf strategische Finanzberatung im Southern Cone.",
      place:   "Montevideo, Uruguay",
      stats: [
        { value: "USD 1.6B+", label: "Abgeschlossene Transaktionen" },
        { value: "30",        label: "Mandate seit 2010" },
        { value: "15",        label: "Jahre am Markt" },
      ],
    },
    who: {
      eyebrow: "Wer wir sind",
      heading: "Strukturierte Finanzierungen, Kapitalmärkte und grenzüberschreitende M&A",
      body: [
        "Wir beraten zu strukturierten Finanzierungen, Kapitalmärkten und grenzüberschreitenden M&A-Transaktionen – für regionale Unternehmen, institutionelle Investoren und öffentliche Einrichtungen, bei Transaktionen, die technische Tiefe und lokales Urteilsvermögen verlangen.",
      ],
      callout:  { title: "Vom Partner geführt", body: "Jedes Mandat wird von unserem Gründungspartner Pablo Mautone persönlich geführt – von der Anbahnung bis zum Abschluss. Keine Übergabe an Junior-Teams in entscheidenden Phasen." },
      relation: { title: "Sacramentum Capital und Sacramentum Advisors", body: "Sacramentum Capital berät Unternehmen, Institutionen und öffentliche Einrichtungen bei Corporate-Finance-Transaktionen. Sacramentum Advisors berät internationale Investoren und Familien bei Investitionen und beim Umzug nach Uruguay. Erwägt ein Kunde von Sacramentum Advisors eine von Sacramentum Capital geführte Transaktion, legen wir diese Verbindung offen." },
    },
    why: {
      eyebrow: "Warum Sacramentum Capital",
      heading: "Sechs Gründe, warum Kunden wiederkommen und uns weiterempfehlen",
      items: [
        { title: "Vom Partner geführt", body: "Jedes Mandat wird vom Gründungspartner persönlich geführt, von der Anbahnung bis zum Abschluss. Kunden arbeiten mit der Person, die seit zwei Jahrzehnten Transaktionen in der Region umsetzt." },
        { title: "Regionale Tiefe, internationale Standards", body: "Pablo Mautone lernte bei Banco Bozano Simonsen in Rio de Janeiro und war sieben Jahre bei JPMorgan in lateinamerikanischem M&A und Emerging Markets tätig. Internationale Sorgfalt mit regionalem Urteilsvermögen." },
        { title: "Vertrauen über Sektoren und Regierungen hinweg", body: "Berater des uruguayischen Wirtschafts- und Finanzministeriums, von UTE und der Corporación Vial del Uruguay – mit Mandaten über mehrere Regierungen und politische Zyklen hinweg." },
        { title: "Ein Track Record aus Empfehlungen", body: "Sacramentum Capital hat seine Leistungen nie beworben. Jedes Mandat kam über Empfehlungen – von früheren Kunden, institutionellen Partnern und Kollegen aus der Region." },
        { title: "Beziehungen zu institutionellen Investoren", body: "In fünfzehn Jahren hat sich die Firma bei den uruguayischen Pensionsfonds einen anerkannten Ruf erarbeitet. Bringt Sacramentum Capital eine Transaktion, lohnt es sich, sie zu prüfen." },
        { title: "Diskretion als Arbeitsprinzip", body: "Die bedeutendsten Transaktionen im Southern Cone kommen selten in die Schlagzeilen. In diesem Umfeld arbeiten wir – dort, wo Vertraulichkeit und Vertrauen so viel zählen wie die technische Umsetzung." },
      ],
    },
    focus: {
      eyebrow: "Schwerpunkte",
      heading: "Drei Praxisbereiche",
      items: [
        { title: "Infrastruktur und Energie", stat: { value: "USD 960M+", label: "Beratungsvolumen" },
          body: "Die Wurzeln von Sacramentum Capital liegen in der Energiewende Uruguays. Seit der wegweisenden Anleiheemission von UTE über 100 Millionen US-Dollar im Jahr 2012 hat die Firma Windparkfinanzierungen, PPP-Straßenprojekte und Infrastruktur-Schuldenvehikel strukturiert und begleitet." },
        { title: "Kapitalmärkte", stat: { value: "5", label: "Kapitalmarktmandate" },
          body: "Von Anleihen und Börsengängen bis zu Privatplatzierungen und Liability Management strukturiert die Firma komplexe Kapitalmarkttransaktionen für öffentliche und private Kunden – darunter UTE, CAF (Entwicklungsbank Lateinamerikas) und CVU – mit anerkanntem Ruf bei Uruguays institutionellen Investoren und Pensionsfonds." },
        { title: "Regionale M&A", stat: { value: "17+", label: "M&A-Transaktionen" },
          body: "Sacramentum Capital berät Käufer und Verkäufer bei grenzüberschreitenden Transaktionen in Uruguay, Brasilien, Argentinien und Chile – in Fintech, Logistik, Handel, Hotellerie, Agrarwirtschaft, Gesundheit, Technologie und Versicherungen." },
      ],
    },
    track: {
      eyebrow: "Track Record",
      heading: "Wichtigste Transaktionen seit 2012",
      intro:   "Jede Blase ist eine abgeschlossene Transaktion, nach Jahr angeordnet; ihre Größe entspricht dem Transaktionswert.",
      legend:  "Sektor",
      sizeNote: "Blasengröße proportional zum Transaktionswert",
      scrollHint: "Wischen, um die ganze Zeitleiste zu sehen",
      sectors: { energy: "Energie", infra: "Infrastruktur", devbank: "Entwicklungsbank", ma: "M&A" },
      stats: [
        { value: "USD 1.6B+", label: "Gesamtvolumen" },
        { value: "30",        label: "Abgeschlossene Mandate" },
        { value: "12",        label: "Sektoren" },
        { value: "15",        label: "Jahre am Markt" },
      ],
    },
    deals: {
      eyebrow: "Ausgewählte Transaktionen",
      heading: "Ausgewählte Transaktionen",
      items: [
        { year: "2012", name: "Anleiheemission UTE",             amount: "USD 100M", tags: "Energie · Kapitalmärkte",            body: "Beratung von UTE bei der ersten Anleiheemission – damals die größte in der Unternehmensgeschichte. Der Beginn der Beziehung der Firma zu Uruguays institutionellen Investoren." },
        { year: "2016", name: "CAF-Infrastrukturfonds",          amount: "USD 300M", tags: "Entwicklungsbank · IPO",             body: "Strukturierung und Platzierung des ersten Infrastruktur-Schuldenfonds in Uruguay für CAF – die größte Einzeltransaktion der Firmengeschichte, mit komplexen multilateralen Anforderungen." },
        { year: "2019", name: "PPP-Straßenprojekt 1",            amount: "USD 91M",  tags: "Infrastruktur · Projektfinanzierung", body: "Finanzberatung beim ersten öffentlich-privaten Straßenprojekt Uruguays, mit Projektfinanzierung und Platzierung bei den lokalen Pensionsfonds." },
        { year: "2022", name: "Prex / Fintech",                  amount: "USD 20M",  tags: "Fintech · M&A",                      body: "Beratung der Prex-Gesellschafter beim Verkauf einer 30-%-Beteiligung an eine führende Regionalbank." },
        { year: "2023", name: "CVU Liability Management",        amount: "USD 200M", tags: "Infrastruktur · Kapitalmärkte",      body: "Beratung der Corporación Vial del Uruguay bei einer Liability-Management-Transaktion – eines der technisch anspruchsvollsten Mandate der Firma." },
        { year: "2023", name: "NGS Seguros",                     amount: "USD 15M",  tags: "Versicherungen · M&A",               body: "Beratung der Gesellschafter von NGS Seguros beim Verkauf des uruguayischen Versicherers an ein globales Dienstleistungsunternehmen." },
        { year: "2025", name: "Börsengang INFRAM",               amount: "USD 100M", tags: "Infrastruktur · Eigenkapital",       body: "Lead Advisor beim Börsengang von INFRAM, einem der ersten Angebote dieser Art am lokalen Markt." },
        { year: "2026", name: "Hotel Enjoy Punta del Este",      amount: "USD 180M", tags: "Hotellerie · M&A",                   body: "Beratung von Baluma beim Verkauf des Hotel Enjoy Punta del Este an eine führende brasilianische Hotelgruppe – eine der bedeutendsten Hoteltransaktionen der jüngeren Geschichte Uruguays." },
        { year: "2026", name: "Uruguayisches Technologieunternehmen", amount: "USD 30M", tags: "Technologie · Grenzüberschreitende M&A", body: "Beratung der Gesellschafter eines uruguayischen Technologieunternehmens beim Verkauf an einen US-Käufer – eine komplexe grenzüberschreitende Transaktion in der Abschlussphase.", ongoing: true },
      ],
    },
    pablo: {
      eyebrow: "Gründungspartner",
      name:    "Pablo Mautone",
      role:    "Gründungspartner · Sacramentum Capital",
      intro:   "Pablo gründete Sacramentum Capital 2010 nach seiner Rückkehr nach Uruguay, nach einem Jahrzehnt im internationalen Investment Banking. Über 15 Jahre und mehr als 1,6 Mrd. USD an abgeschlossenen Transaktionen, vollständig über Empfehlungen aufgebaut.",
      points: [
        "Sieben Jahre bei JPMorgan in New York und Lateinamerika: vom Associate im LatAm-M&A bis zum Executive Director",
        "MBA, University of Michigan – Ross School of Business",
        "Berater des uruguayischen Wirtschafts- und Finanzministeriums, von UTE und der Corporación Vial del Uruguay",
        "Verwaltungsrat der Distribuidora de Gas Montevideo; Präsident des Verwaltungsrats von Baluma",
      ],
      careerTitle: "Werdegang",
      career: [
        { years: "1998–2000", org: "Banco Bozano Simonsen", role: "Associate, TMT M&A · Rio de Janeiro" },
        { years: "2000–2007", org: "JPMorgan",              role: "Associate bis Executive Director · New York / Lateinamerika" },
        { years: "2008–2009", org: "VR Capital",            role: "Asset Manager · Buenos Aires" },
        { years: "seit 2010", org: "Sacramentum Capital",   role: "Gründungspartner · Montevideo" },
      ],
    },
    cta: {
      heading: "Planen Sie eine Transaktion im Southern Cone?",
      body:    "Sprechen Sie mit Pablo Mautone über Finanzierung, Kapitalmärkte oder einen Verkauf bzw. Kauf. Jedes Gespräch ist vertraulich.",
      label:   "Beratung vereinbaren",
    },
  },
};
