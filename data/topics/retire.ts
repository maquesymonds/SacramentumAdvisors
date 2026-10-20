import type { TopicCopy } from "@/lib/topics";

// DRAFT — pending approval by Inés. DE: draft by Claude, pending native review. EN (and DE later) only: no Spanish search
// demand, ES visitors are sent to Residency. Keywords: retire in uruguay,
// retirement in uruguay, cost of living in uruguay, is uruguay a good place to
// live, uruguay retirement visa · als rentner nach uruguay, deutsche rente im
// ausland. No cost-of-living figures until verified (AI answers vary widely).
// Not used until verified: retiree regime Law 16.340.

const copy: TopicCopy = {
  en: {
    metaTitle:       "Retire in Uruguay: Residency & Costs",
    metaDescription: "Retiring in Uruguay: residency for retirees, the real cost of living, healthcare and where to live — Montevideo, Punta del Este or Piriápolis.",
    navLabel:        "Retire in Uruguay",
    cardText:        "Residency for retirees, the real cost of living, healthcare and where to live.",
    eyebrow:         "Retirement",
    title:           "Retiring in Uruguay",
    intro: [
      "Uruguay attracts retirees for its stability, its coastline and a relaxed pace of life. It is a high-quality retirement destination rather than a low-cost one — and planning for that difference is what makes the move work.",
      "We help you choose where to live, organise residency on the basis of your pension or income, and settle healthcare, banking and housing before you arrive.",
    ],
    image: { src: "/placeholders/hero-sunset.avif", alt: "Sunset over the Uruguayan coast" },
    sections: [
      {
        heading: "Is there a retirement visa in Uruguay?",
        body: [
          "Uruguay does not have a separate 'retirement visa'. Retirees apply for legal residency, usually permanent residency, by proving a stable income such as a pension or investment income.",
          "Applications are filed in Uruguay, and you can start the process after arriving as a visitor.",
        ],
      },
      {
        heading: "Where to live",
        body: ["The choice shapes your costs and your daily life:"],
        bullets: [
          "Montevideo — Pocitos, Punta Carretas and Carrasco: year-round city life, the best access to healthcare, culture and services.",
          "Punta del Este — coastal living with an international community; busy in summer, very quiet the rest of the year.",
          "Piriápolis — a historic seaside town with hills and beaches, generally lower housing costs and a calm year-round rhythm.",
        ],
      },
      {
        heading: "The real cost of living",
        body: [
          "Uruguay is one of the more expensive countries in South America. Housing, private healthcare and imported goods weigh most in a retiree's budget, and costs vary widely between Montevideo, the coast and smaller towns.",
          "We build a monthly budget for your situation — renting or owning, location, health cover — instead of relying on averages.",
        ],
      },
      {
        heading: "Healthcare",
        body: [
          "Uruguay has public and private healthcare. Most retirees join a private healthcare provider (a mutualista) or take international private insurance. We help you compare options and requirements before you move.",
        ],
      },
      {
        heading: "Rent first",
        body: [
          "We usually recommend renting for three to six months before buying. It is the best way to test a neighbourhood, the seasons and the pace of life — and it costs far less than a wrong purchase.",
        ],
      },
    ],
    faqs: [
      { q: "Is Uruguay a good place to retire?", a: "For many retirees, yes: stability, safety relative to the region, a mild climate and good private healthcare. It is not a low-cost destination, so a realistic budget matters." },
      { q: "How do retirees get residency in Uruguay?", a: "By applying for legal residency and proving stable means of support, such as a pension or investment income. There is no separate retirement visa." },
      { q: "Will my pension be taxed in Uruguay?", a: "It depends on the type of pension, your country of origin and whether you become a tax resident. We review it with a tax advisor before you move." },
      { q: "Where do most foreign retirees live in Uruguay?", a: "Mostly in Montevideo (Pocitos, Punta Carretas, Carrasco), Punta del Este and smaller coastal towns such as Piriápolis." },
    ],
    cta: {
      heading: "Planning your retirement in Uruguay?",
      body:    "Tell us where you are coming from and how you want to live. We will help you plan the move, the budget and the residency.",
      label:   "Book a consultation",
    },
  },
  de: {
    metaTitle:       "Als Rentner nach Uruguay",
    metaDescription: "Als Rentner nach Uruguay: Aufenthalt mit Rente, Lebenshaltungskosten, Krankenversicherung und Wohnorte – Montevideo, Punta del Este, Piriápolis.",
    navLabel:        "Als Rentner nach Uruguay",
    cardText:        "Aufenthalt mit Rente, die echten Lebenshaltungskosten, Krankenversicherung und Wohnorte.",
    eyebrow:         "Ruhestand in Uruguay",
    title:           "Als Rentner nach Uruguay",
    intro: [
      "Uruguay zieht Rentner mit Stabilität, seiner Küste und einem ruhigen Lebensrhythmus an. Es ist ein Ziel für hohe Lebensqualität, nicht für niedrige Kosten – und wer diesen Unterschied einplant, für den gelingt der Umzug.",
      "Wir helfen Ihnen bei der Wahl des Wohnorts, beim Aufenthalt auf Grundlage Ihrer Rente und bei Krankenversicherung, Bank und Wohnung, noch bevor Sie ankommen.",
    ],
    image: { src: "/placeholders/hero-sunset.avif", alt: "Sonnenuntergang an der Küste von Uruguay" },
    sections: [
      {
        heading: "Gibt es ein Rentnervisum für Uruguay?",
        body: [
          "Ein eigenes „Rentnervisum“ gibt es in Uruguay nicht. Rentner beantragen eine Aufenthaltsgenehmigung, meist den Daueraufenthalt, und weisen ein regelmäßiges Einkommen nach, etwa ihre Rente oder Kapitalerträge.",
          "Der Antrag wird in Uruguay gestellt; Sie können als Besucher einreisen und das Verfahren dort beginnen.",
        ],
      },
      {
        heading: "Wo leben?",
        body: ["Der Wohnort bestimmt Ihre Kosten und Ihren Alltag:"],
        bullets: [
          "Montevideo – Pocitos, Punta Carretas und Carrasco: ganzjähriges Stadtleben und der beste Zugang zu medizinischer Versorgung, Kultur und Dienstleistungen.",
          "Punta del Este – Leben an der Küste mit internationaler Gemeinschaft; im Sommer belebt, den Rest des Jahres sehr ruhig.",
          "Piriápolis – ein historischer Badeort mit Hügeln und Stränden, meist günstigeren Wohnkosten und einem ruhigen Rhythmus über das ganze Jahr.",
        ],
      },
      {
        heading: "Die echten Lebenshaltungskosten",
        body: [
          "Uruguay gehört zu den teureren Ländern Südamerikas. Wohnen, private Krankenversicherung und Importwaren wiegen im Budget von Rentnern am schwersten, und die Kosten unterscheiden sich stark zwischen Montevideo, der Küste und kleineren Orten.",
          "Wir erstellen ein Monatsbudget für Ihre Situation – Miete oder Eigentum, Wohnort, Krankenversicherung – statt mit Durchschnittswerten zu rechnen.",
        ],
      },
      {
        heading: "Rente und Krankenversicherung",
        body: [
          "Wie Ihre deutsche, österreichische oder schweizerische Rente nach dem Umzug besteuert wird, hängt von der Art der Rente und Ihrem steuerlichen Wohnsitz ab. Das prüfen wir mit einem Steuerberater vor dem Umzug.",
          "Uruguay hat ein öffentliches und ein privates Gesundheitssystem. Die meisten Rentner schließen sich einem privaten Versorger (Mutualista) an oder wählen eine internationale private Krankenversicherung. Prüfen Sie früh, ob Ihre bisherige Versicherung im Ausland gilt.",
        ],
      },
      {
        heading: "Zuerst mieten",
        body: [
          "Wir empfehlen, drei bis sechs Monate zu mieten, bevor Sie ein Haus kaufen. So lernen Sie Viertel, Jahreszeiten und Lebensrhythmus kennen – und es kostet weit weniger als ein Fehlkauf.",
        ],
      },
    ],
    faqs: [
      { q: "Ist Uruguay gut zum Auswandern im Ruhestand?", a: "Für viele Rentner ja: Stabilität, Sicherheit im regionalen Vergleich, ein mildes Klima und eine gute private Gesundheitsversorgung. Uruguay ist aber kein günstiges Ziel – ein realistisches Budget ist wichtig." },
      { q: "Wie bekommen Rentner eine Aufenthaltsgenehmigung in Uruguay?", a: "Mit einem Antrag auf Aufenthalt und dem Nachweis regelmäßiger Einkünfte, etwa der Rente. Ein eigenes Rentnervisum gibt es nicht." },
      { q: "Wird meine deutsche Rente in Uruguay ausgezahlt?", a: "Renten können in der Regel ins Ausland gezahlt werden. Wie sie besteuert werden, hängt von der Art der Rente und Ihrem Wohnsitz ab – das prüfen wir vor dem Umzug." },
      { q: "Wo leben ausländische Rentner in Uruguay?", a: "Vor allem in Montevideo (Pocitos, Punta Carretas, Carrasco), in Punta del Este und in kleineren Küstenorten wie Piriápolis." },
    ],
    cta: {
      heading: "Sie planen Ihren Ruhestand in Uruguay?",
      body:    "Erzählen Sie uns, woher Sie kommen und wie Sie leben möchten. Wir planen mit Ihnen Umzug, Budget und Aufenthalt.",
      label:   "Beratung vereinbaren",
    },
  },
};

export default copy;
