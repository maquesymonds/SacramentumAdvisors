import type { TopicCopy } from "@/lib/topics";

// DRAFT — pending approval by Inés. EN (and DE later) only: no Spanish search
// demand, ES visitors are sent to Residency. Keywords: retire in uruguay,
// retirement in uruguay, cost of living in uruguay, is uruguay a good place to
// live, uruguay retirement visa · als rentner nach uruguay, deutsche rente im
// ausland. No cost-of-living figures until verified (AI answers vary widely).
// Not used until verified: retiree regime Law 16.340.

const copy: TopicCopy = {
  en: {
    metaTitle:       "Retire in Uruguay: Residency, Cost of Living and Where to Live",
    metaDescription: "Retiring in Uruguay: how retirees get residency, what life really costs, where to live — Montevideo, Punta del Este or Piriápolis — and healthcare. Advice for your move.",
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
};

export default copy;
