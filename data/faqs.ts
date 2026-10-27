/* ─────────────────────────────────────────────────────────────────────────────
   FAQs for the core pages (home, why Uruguay, services, contact)
   Topic pages keep theirs in data/topics/<id>.ts.

   Every question answers either a search with volume (SE Ranking) or a
   question ChatGPT / Gemini ask or answer (docs/seo/RESEARCH-*.md) — none
   that nobody asks. At least 3 per page (Maque, 21.10.2026). Answers use
   facts published on the site or well established (laws, public regimes);
   no 2026 tax figures until they are verified.
   ─────────────────────────────────────────────────────────────────────────── */

import type { Locale } from "@/lib/i18n";
import type { FaqItem } from "@/components/faq/FaqSection";

export type CoreFaqPage = "home" | "why-uruguay" | "services" | "contact";

const FAQS: Record<CoreFaqPage, Record<Locale, FaqItem[]>> = {
  home: {
    en: [
      { q: "What does Sacramentum Advisors do?", a: "Sacramentum Advisors is an investor advisory firm based in Montevideo. We help international families and investors who want to invest in or move to Uruguay with buying property, farmland and companies, obtaining residency and long-term capital strategy. We work with a network of legal, financial and tax partners at every stage of the process." },
      { q: "Who leads Sacramentum Advisors?", a: "Inés Bonicelli, Managing Director, was Deputy Executive Director of Uruguay XXI, the country's investment promotion agency, from 2020 to 2025. Pablo Mautone, Director, founded the investment banking boutique Sacramentum Capital after an investment banking career at J.P. Morgan, where he rose to Executive Director, and Lehman Brothers. Our advisory board includes former ministers from Uruguay and Argentina." },
      { q: "Why invest in Uruguay?", a: "Because it is one of the most stable countries in Latin America: democratic strength, legal certainty and the lowest corruption levels in the region. Foreign investors have the same rights as local investors, and in recent years the country has improved its road, rail and energy infrastructure, opening opportunities in real estate, farmland and forestry." },
      { q: "Can foreigners invest in Uruguay without living there?", a: "Yes. Foreigners can buy property and farmland in Uruguay without residency. Residency is a separate decision that can be planned alongside the investment if you ever want to settle in the country." },
      { q: "How do I choose an advisor to invest in Uruguay?", a: "Look for an advisor who knows the Uruguayan market first-hand, reviews every asset before you commit and coordinates the legal and tax side with your home country. At Sacramentum Advisors you work with a team experienced in investment promotion and investment banking, together with a network of legal, financial and tax partners." },
    ],
    es: [
      { q: "¿Qué hace Sacramentum Advisors?", a: "Sacramentum Advisors es una firma de asesoría para inversores con sede en Montevideo. Acompañamos a familias e inversores internacionales que quieren invertir o instalarse en Uruguay en la compra de inmuebles, campos y empresas, en la obtención de la residencia y en la estrategia de capital a largo plazo. Trabajamos con una red de socios legales, financieros y fiscales en cada etapa del proceso." },
      { q: "¿Quién dirige Sacramentum Advisors?", a: "Inés Bonicelli, Managing Director, fue vicedirectora ejecutiva de Uruguay XXI, la agencia de promoción de inversiones del país, entre 2020 y 2025. Pablo Mautone, Director, fundó la boutique de banca de inversión Sacramentum Capital tras una carrera en banca de inversión en J.P. Morgan, donde llegó a director ejecutivo, y Lehman Brothers. Nuestro consejo asesor incluye a exministros de Uruguay y Argentina." },
      { q: "¿Por qué invertir en Uruguay?", a: "Porque es uno de los países más estables de América Latina: solidez democrática, seguridad jurídica y los niveles de corrupción más bajos de la región. Los inversores extranjeros tienen los mismos derechos que los locales, y en los últimos años el país avanzó en infraestructura vial, ferroviaria y energética, lo que abrió oportunidades en inmuebles, campos y forestación." },
      { q: "¿Se puede invertir en Uruguay sin vivir en el país?", a: "Sí. Los extranjeros pueden comprar inmuebles y campos en Uruguay sin tener residencia. La residencia es una decisión aparte, que se puede planificar junto con la inversión si en algún momento quiere instalarse en el país." },
      { q: "¿Cómo elegir un asesor para invertir en Uruguay?", a: "Conviene un asesor que conozca el mercado uruguayo de primera mano, revise cada activo antes de que usted se comprometa y coordine los aspectos legales y fiscales con su país de origen. En Sacramentum Advisors lo acompaña un equipo con experiencia en promoción de inversiones y banca de inversión, junto a una red de socios legales, financieros y fiscales." },
    ],
    de: [
      { q: "Was macht Sacramentum Advisors?", a: "Sacramentum Advisors ist eine Beratungsgesellschaft für Investoren mit Sitz in Montevideo. Wir begleiten internationale Familien und Investoren, die in Uruguay investieren oder sich dort niederlassen möchten, beim Kauf von Immobilien, Agrarland und Unternehmen, bei der Aufenthaltsgenehmigung und bei der langfristigen Kapitalstrategie. In jeder Phase arbeiten wir mit einem Netzwerk aus Rechts-, Finanz- und Steuerpartnern zusammen." },
      { q: "Wer leitet Sacramentum Advisors?", a: "Inés Bonicelli, Managing Director, war von 2020 bis 2025 stellvertretende Geschäftsführerin von Uruguay XXI, der staatlichen Agentur für Investitionsförderung. Pablo Mautone, Director, gründete die Investment-Banking-Boutique Sacramentum Capital, nach einer Laufbahn im Investment Banking bei J.P. Morgan, wo er bis zum Executive Director aufstieg, und bei Lehman Brothers. Unserem Beirat gehören ehemalige Minister aus Uruguay und Argentinien an." },
      { q: "Warum in Uruguay investieren?", a: "Weil es eines der stabilsten Länder Lateinamerikas ist: eine gefestigte Demokratie, Rechtssicherheit und die niedrigste Korruption der Region. Ausländische Investoren haben dieselben Rechte wie inländische, und in den letzten Jahren hat das Land seine Straßen-, Bahn- und Energieinfrastruktur ausgebaut. Das hat Chancen bei Immobilien, Agrarland und Forst eröffnet." },
      { q: "Kann man in Uruguay investieren, ohne dort zu leben?", a: "Ja. Ausländer können in Uruguay Immobilien und Agrarland ohne Aufenthaltsgenehmigung kaufen. Der Aufenthalt ist eine eigene Entscheidung, die sich parallel zur Investition planen lässt, falls Sie sich irgendwann im Land niederlassen möchten." },
      { q: "Wie finde ich den richtigen Berater für Investitionen in Uruguay?", a: "Achten Sie auf einen Berater, der den uruguayischen Markt aus erster Hand kennt, jede Anlage vor Ihrer Entscheidung prüft und die rechtliche und steuerliche Seite mit Ihrem Heimatland abstimmt. Bei Sacramentum Advisors begleitet Sie ein Team mit Erfahrung in Investitionsförderung und Investment Banking, zusammen mit einem Netzwerk aus Rechts-, Finanz- und Steuerpartnern." },
    ],
  },

  "why-uruguay": {
    en: [
      { q: "Why is Uruguay considered a stable country to invest in?", a: "It combines democratic strength, legal certainty and the lowest corruption levels in Latin America. Rules for investors are predictable, which is what long-term capital looks for in a volatile region." },
      { q: "Is Uruguay a good place to live?", a: "For many families and investors, yes. Safety, healthcare, education and social openness make Uruguay a place chosen by executives, founders and families looking for protection and quality of life." },
      { q: "Do foreign investors have the same rights as Uruguayans?", a: "Yes. Uruguayan law gives foreign investors the same rights as local investors, and foreigners can buy property and farmland without residency." },
      { q: "Which sectors attract foreign investors to Uruguay?", a: "Real estate in Punta del Este and Montevideo; farmland and forestry; and technology, where Uruguay serves as a regional base for software and services companies. Each sector has its own page with the details." },
    ],
    es: [
      { q: "¿Por qué Uruguay se considera un país estable para invertir?", a: "Combina solidez democrática, seguridad jurídica y los niveles de corrupción más bajos de América Latina. Las reglas para el inversor son previsibles, que es lo que busca el capital de largo plazo en una región volátil." },
      { q: "¿Es bueno vivir en Uruguay?", a: "Para muchas familias e inversores, sí. La seguridad, la salud, la educación y la apertura social hacen de Uruguay un lugar elegido por ejecutivos, emprendedores y familias que buscan protección y calidad de vida." },
      { q: "¿El inversor extranjero tiene los mismos derechos que el uruguayo?", a: "Sí. La ley uruguaya da a los inversores extranjeros los mismos derechos que a los locales, y los extranjeros pueden comprar inmuebles y campos sin tener residencia." },
      { q: "¿En qué sectores invierten los extranjeros en Uruguay?", a: "Inmuebles en Punta del Este y Montevideo; campos y forestación; y tecnología, donde Uruguay funciona como base regional para empresas de software y servicios. Cada sector tiene su propia página con el detalle." },
    ],
    de: [
      { q: "Warum gilt Uruguay als stabiles Land für Investitionen?", a: "Es verbindet eine gefestigte Demokratie, Rechtssicherheit und die niedrigste Korruption Lateinamerikas. Die Regeln für Investoren sind berechenbar. Genau das sucht langfristiges Kapital in einer volatilen Region." },
      { q: "Wie lebt es sich in Uruguay?", a: "Für viele Familien und Investoren sehr gut. Sicherheit, Gesundheitsversorgung, Bildung und gesellschaftliche Offenheit machen Uruguay zu einem Ort, den Führungskräfte, Gründer und Familien wählen, die Schutz und Lebensqualität suchen." },
      { q: "Haben ausländische Investoren dieselben Rechte wie Uruguayer?", a: "Ja. Das uruguayische Recht gewährt ausländischen Investoren dieselben Rechte wie inländischen, und Ausländer können Immobilien und Agrarland ohne Aufenthaltsgenehmigung kaufen." },
      { q: "In welchen Sektoren investieren Ausländer in Uruguay?", a: "Immobilien in Punta del Este und Montevideo; Agrarland und Forst; und Technologie, wo Uruguay als regionaler Standort für Software- und Dienstleistungsunternehmen dient. Jeder Sektor hat eine eigene Seite mit den Details." },
    ],
  },

  services: {
    en: [
      { q: "What services does Sacramentum Advisors offer?", a: "Four: residency and relocation (establishing, expanding and operating in Uruguay with our network of legal and financial partners), market intelligence, strategic advisory (identifying opportunities and structuring transactions) and investment banking through Sacramentum Capital." },
      { q: "Can you help me obtain residency in Uruguay?", a: "Yes. We guide you through obtaining residency together with our legal partners, as part of establishing yourself in Uruguay." },
      { q: "Does residency in Uruguay make me a tax resident?", a: "Not necessarily. Holding legal residency, having money in Uruguay and being a tax resident are three different things. Tax residency depends, among other criteria, on spending more than 183 days a year in the country or having your main economic interests here. It is best planned together with a tax advisor in your home country." },
      { q: "Do you help foreigners buy property or farmland in Uruguay?", a: "Yes. We advise on buying residences and coastal properties, productive farmland (forestry, crops and cattle), commercial real estate in Montevideo and estancias." },
      { q: "Do you advise on M&A and capital markets?", a: "Yes, through Sacramentum Capital, Sacramentum's investment banking boutique based in Montevideo. It advises on structured finance, capital markets and cross-border M&A in Uruguay, Brazil, Argentina and Chile, and has closed more than USD 1.6 billion in transactions since 2010." },
    ],
    es: [
      { q: "¿Qué servicios ofrece Sacramentum Advisors?", a: "Cuatro: residencia e instalación (instalación, expansión y operación en Uruguay con nuestra red de socios legales y financieros), inteligencia de mercado, asesoría estratégica (identificar oportunidades y estructurar operaciones) y banca de inversión a través de Sacramentum Capital." },
      { q: "¿Me pueden ayudar a obtener la residencia en Uruguay?", a: "Sí. Lo guiamos en la obtención de la residencia junto con nuestros socios legales, como parte de su instalación en Uruguay." },
      { q: "¿Tener la residencia en Uruguay significa ser residente fiscal?", a: "No necesariamente. Tener la residencia legal, tener dinero en Uruguay y ser residente fiscal son tres cosas distintas. La residencia fiscal depende, entre otros criterios, de pasar más de 183 días al año en el país o de tener aquí el centro de sus intereses económicos. Conviene planificarlo junto con un asesor fiscal de su país de origen." },
      { q: "¿Asesoran a extranjeros en la compra de inmuebles o campos en Uruguay?", a: "Sí. Asesoramos en la compra de residencias y propiedades en la costa, campos productivos (forestación, agricultura y ganadería), inmuebles comerciales en Montevideo y estancias." },
      { q: "¿Asesoran en M&A y mercado de capitales?", a: "Sí, a través de Sacramentum Capital, la boutique de banca de inversión de Sacramentum con sede en Montevideo. Asesora en finanzas estructuradas, mercado de capitales y M&A transfronterizo en Uruguay, Brasil, Argentina y Chile, y desde 2010 cerró transacciones por más de USD 1.600 millones." },
    ],
    de: [
      { q: "Welche Leistungen bietet Sacramentum Advisors?", a: "Vier: Aufenthalt und Niederlassung (Ansiedlung, Expansion und Betrieb in Uruguay mit unserem Netzwerk aus Rechts- und Finanzpartnern), Marktanalyse, strategische Beratung (Chancen erkennen und Transaktionen strukturieren) und Investment Banking über Sacramentum Capital." },
      { q: "Können Sie mir bei der Aufenthaltsgenehmigung in Uruguay helfen?", a: "Ja. Wir begleiten Sie gemeinsam mit unseren Rechtspartnern zur Aufenthaltsgenehmigung, als Teil Ihrer Ansiedlung in Uruguay." },
      { q: "Bin ich mit einer Aufenthaltsgenehmigung in Uruguay automatisch steuerlich ansässig?", a: "Nicht unbedingt. Ein legaler Aufenthalt, Geld in Uruguay und die steuerliche Ansässigkeit sind drei verschiedene Dinge. Die steuerliche Ansässigkeit hängt unter anderem davon ab, ob Sie mehr als 183 Tage im Jahr im Land verbringen oder hier den Mittelpunkt Ihrer wirtschaftlichen Interessen haben. Am besten planen Sie sie zusammen mit einem Steuerberater in Ihrem Heimatland." },
      { q: "Beraten Sie Ausländer beim Kauf von Immobilien oder Agrarland in Uruguay?", a: "Ja. Wir beraten beim Kauf von Wohnsitzen und Küstenimmobilien, produktivem Agrarland (Forst, Ackerbau und Viehzucht), Gewerbeimmobilien in Montevideo und Estancias." },
      { q: "Beraten Sie zu M&A und Kapitalmärkten?", a: "Ja, über Sacramentum Capital, die Investment-Banking-Boutique von Sacramentum mit Sitz in Montevideo. Sie berät zu strukturierten Finanzierungen, Kapitalmärkten und grenzüberschreitenden M&A in Uruguay, Brasilien, Argentinien und Chile und hat seit 2010 Transaktionen von über 1,6 Milliarden USD abgeschlossen." },
    ],
  },

  contact: {
    en: [
      { q: "What happens after I send the form?", a: "A senior advisor reads your enquiry and replies within one to two business days to arrange a first, confidential conversation." },
      { q: "Is the conversation confidential?", a: "Yes. Every enquiry and every conversation is handled with complete discretion." },
      { q: "Can I work with you if I live abroad?", a: "Yes. The first conversation can take place remotely, and we support you at every step even while you still live outside Uruguay." },
    ],
    es: [
      { q: "¿Qué pasa después de enviar el formulario?", a: "Un asesor senior lee su consulta y responde en uno o dos días hábiles para coordinar una primera conversación confidencial." },
      { q: "¿La conversación es confidencial?", a: "Sí. Cada consulta y cada conversación se tratan con total discreción." },
      { q: "¿Puedo trabajar con ustedes si vivo en el exterior?", a: "Sí. La primera conversación puede ser a distancia, y lo acompañamos en cada paso aunque todavía viva fuera de Uruguay." },
    ],
    de: [
      { q: "Was passiert, nachdem ich das Formular gesendet habe?", a: "Ein erfahrener Berater liest Ihre Anfrage und antwortet innerhalb von ein bis zwei Werktagen, um ein erstes vertrauliches Gespräch zu vereinbaren." },
      { q: "Ist das Gespräch vertraulich?", a: "Ja. Jede Anfrage und jedes Gespräch wird mit absoluter Diskretion behandelt." },
      { q: "Kann ich mit Ihnen arbeiten, wenn ich im Ausland lebe?", a: "Ja. Das erste Gespräch kann aus der Ferne stattfinden, und wir begleiten Sie bei jedem Schritt, auch wenn Sie noch außerhalb Uruguays leben." },
    ],
  },
};

export function coreFaqs(page: CoreFaqPage, locale: Locale): FaqItem[] {
  return FAQS[page][locale] ?? FAQS[page].en;
}
