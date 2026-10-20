import type { TopicCopy } from "@/lib/topics";

// DRAFT — pending approval by Inés. = "Soft Landing" service.
// Keywords: moving to uruguay, uruguay permanent residency, uruguay visa for us
// citizens, relocate to uruguay · residencia permanente uruguay, residencia
// mercosur, migraciones uruguay, argentinos en uruguay, vivir en uruguay siendo
// español. Structure from the AI answers: "legal residency ≠ tax residency ≠
// having assets in Uruguay"; four pillars; a staged roadmap.

const copy: TopicCopy = {
  en: {
    metaTitle:       "Uruguay Residency: How to Move to Uruguay With Your Family",
    metaDescription: "How to get permanent residency in Uruguay: requirements, documents and steps for Americans, Europeans and their families. Relocation coordinated end to end.",
    navLabel:        "Residency & relocation",
    cardText:        "Permanent residency, documents, banking and settling in — your move to Uruguay, coordinated.",
    eyebrow:         "Residency & relocation",
    title:           "Moving to Uruguay: residency and relocation",
    intro: [
      "Uruguay offers foreign nationals a clear path to legal residency, and many families use it as a plan B: a second home and a second jurisdiction, ready for when they need it.",
      "We coordinate the whole move — migration, documents, banking, housing and schools — with one point of contact, so you do not have to manage five advisors in a language you may not speak.",
    ],
    image: { src: "/placeholders/hero-coast.avif", alt: "Uruguayan coastline at sunset" },
    sections: [
      {
        heading: "Three things that are often confused",
        body: [
          "Legal residency, tax residency and having assets in Uruguay are three different things. Legal residency is your right to live in the country. Tax residency decides where you pay tax. Owning property or a bank account in Uruguay gives you neither on its own.",
          "Most plans need one, two or all three — in the right order. We start by defining which ones you actually need.",
        ],
      },
      {
        heading: "Permanent residency in Uruguay",
        body: [
          "Foreign nationals can apply for temporary or permanent legal residency with the National Migration Directorate (Dirección Nacional de Migración). The application is filed in Uruguay and you can enter as a visitor to start it.",
          "Once the application is filed you receive a provisional status that allows you to obtain a Uruguayan identity card (cédula), open bank accounts and settle in while the file is processed.",
          "Citizens of Mercosur countries — Argentina, Brazil, Paraguay and others — can use the Mercosur residency route. Citizens of the United States, Canada and European countries such as Spain or Germany apply through the general route.",
        ],
      },
      {
        heading: "What you will need",
        body: ["Requirements depend on nationality and route. A typical file includes:"],
        bullets: [
          "A valid passport and birth certificate, and a marriage certificate if you move as a family.",
          "Criminal record certificates from your country of origin (for example, an FBI background check for US citizens).",
          "Proof of stable means of support: pension, investment income, a local job or business.",
          "Apostilled documents, translated into Spanish where required.",
        ],
      },
      {
        heading: "Your plan B, built in four parts",
        body: ["A move to Uruguay — or a plan B that you may activate later — usually rests on four pillars:"],
        bullets: [
          "Legal residency for you and your family.",
          "Banking and diversification of part of your assets.",
          "A physical base: renting first, or buying a home.",
          "Tax planning between Uruguay and your current country, before any money moves.",
        ],
      },
    ],
    steps: {
      heading: "A typical timeline",
      items: [
        { title: "Before you travel",  body: "Diagnosis, tax review in your home country, and apostilled documents." },
        { title: "First weeks",        body: "Residency application, provisional ID, temporary housing and health cover." },
        { title: "Months 2–3",         body: "Bank accounts, long-term housing, schools and, if relevant, your business." },
        { title: "First year",         body: "Residency granted, tax residency reviewed, and your plan adjusted." },
      ],
    },
    faqs: [
      { q: "Can Americans move to Uruguay?", a: "Yes. US citizens can enter Uruguay as visitors and apply for temporary or permanent residency in the country. US citizens remain subject to US taxation on worldwide income, so a US tax review should be part of the plan." },
      { q: "Is legal residency the same as tax residency?", a: "No. Legal residency is your right to live in Uruguay; tax residency determines where you are taxed. They follow different rules and are applied for separately." },
      { q: "Do I need to buy property to get residency in Uruguay?", a: "No. Residency is based on proving stable means of support, not on buying property." },
      { q: "Can I keep living in my country and have Uruguay as a plan B?", a: "Yes. Many clients obtain residency, open banking relationships and diversify part of their assets while still living abroad. We help you keep the requirements that apply to your situation." },
      { q: "Does residency lead to citizenship?", a: "Legal residency is the first step towards Uruguayan legal citizenship, which requires years of genuine residence in the country. See our page on the Uruguayan passport." },
    ],
    cta: {
      heading: "Thinking about a move — or a plan B?",
      body:    "Tell us where you are coming from and what you need. We will map the route, the documents and the timing for your family.",
      label:   "Book a consultation",
    },
  },

  es: {
    metaTitle:       "Residencia en Uruguay: cómo mudarse a Uruguay con su familia",
    metaDescription: "Cómo obtener la residencia en Uruguay: requisitos, documentos y pasos para argentinos, españoles y sus familias. Residencia Mercosur y residencia permanente.",
    navLabel:        "Residencia en Uruguay",
    cardText:        "Residencia permanente, documentos, banco e instalación: su llegada a Uruguay, coordinada.",
    eyebrow:         "Residencia e instalación",
    title:           "Mudarse a Uruguay: residencia e instalación",
    intro: [
      "Uruguay ofrece a los extranjeros un camino claro hacia la residencia legal, y muchas familias lo usan como plan B: una segunda casa y una segunda jurisdicción, listas para cuando las necesiten.",
      "Coordinamos toda la llegada (migración, documentos, banco, vivienda y colegios) con un solo interlocutor, para que no tenga que manejar cinco asesores por separado.",
    ],
    image: { src: "/placeholders/hero-coast.avif", alt: "Costa uruguaya al atardecer" },
    sections: [
      {
        heading: "Tres cosas que suelen confundirse",
        body: [
          "Tener residencia legal, ser residente fiscal y tener patrimonio en Uruguay son tres cosas distintas. La residencia legal es su derecho a vivir en el país. La residencia fiscal define dónde paga impuestos. Tener una propiedad o una cuenta en Uruguay, por sí solo, no le da ninguna de las dos.",
          "La mayoría de los planes necesitan una, dos o las tres, en el orden correcto. Empezamos por definir cuáles necesita realmente.",
        ],
      },
      {
        heading: "Residencia permanente en Uruguay",
        body: [
          "Los extranjeros pueden solicitar la residencia legal temporaria o permanente ante la Dirección Nacional de Migración. El trámite se inicia en Uruguay, y puede ingresar como turista para comenzarlo.",
          "Al iniciar el trámite obtiene una constancia que le permite sacar la cédula de identidad uruguaya, abrir cuentas bancarias e instalarse mientras se resuelve la residencia.",
          "Los ciudadanos de países del Mercosur (Argentina, Brasil, Paraguay y otros) pueden usar la residencia Mercosur. Los ciudadanos de España y del resto de Europa tramitan la residencia por la vía general.",
        ],
      },
      {
        heading: "Qué va a necesitar",
        body: ["Los requisitos dependen de la nacionalidad y de la vía. Un trámite típico incluye:"],
        bullets: [
          "Pasaporte o documento vigente y partida de nacimiento, y certificado de matrimonio si se muda en familia.",
          "Certificado de antecedentes penales del país de origen.",
          "Constancia de medios de vida: jubilación, rentas, un trabajo o una empresa en Uruguay.",
          "Documentos apostillados y, cuando corresponda, traducidos al español.",
        ],
      },
      {
        heading: "Su plan B, en cuatro partes",
        body: ["Una mudanza a Uruguay, o un plan B para activar más adelante, suele apoyarse en cuatro pilares:"],
        bullets: [
          "Residencia legal para usted y su familia.",
          "Banca y diversificación de parte de su patrimonio.",
          "Una base física: alquilar primero, o comprar una vivienda.",
          "Planificación fiscal entre Uruguay y su país actual, antes de mover dinero.",
        ],
      },
    ],
    steps: {
      heading: "Una hoja de ruta típica",
      items: [
        { title: "Antes de viajar",   body: "Diagnóstico, revisión fiscal en su país y documentos apostillados." },
        { title: "Primeras semanas",  body: "Trámite de residencia, cédula provisoria, vivienda temporal y cobertura de salud." },
        { title: "Meses 2 y 3",       body: "Cuentas bancarias, vivienda definitiva, colegios y, si corresponde, su empresa." },
        { title: "Primer año",        body: "Residencia otorgada, revisión de la residencia fiscal y ajuste del plan." },
      ],
    },
    faqs: [
      { q: "Soy argentino: ¿cómo obtengo la residencia en Uruguay?", a: "Como ciudadano de un país del Mercosur puede tramitar la residencia Mercosur, temporaria o permanente, ante la Dirección Nacional de Migración. Le recomendamos revisar al mismo tiempo su situación fiscal en Argentina." },
      { q: "Soy español: ¿puedo usar la residencia Mercosur?", a: "No. España no forma parte del Mercosur, por lo que los españoles tramitan la residencia por la vía general, acreditando medios de vida. El trámite es igualmente claro." },
      { q: "¿La residencia legal es lo mismo que la residencia fiscal?", a: "No. La residencia legal es su derecho a vivir en Uruguay; la residencia fiscal define dónde tributa. Tienen reglas distintas y se tramitan por separado." },
      { q: "¿Tengo que comprar una propiedad para obtener la residencia?", a: "No. La residencia se basa en acreditar medios de vida estables, no en comprar una propiedad." },
      { q: "¿Puedo seguir viviendo en mi país y tener Uruguay como plan B?", a: "Sí. Muchos clientes obtienen la residencia, abren relaciones bancarias y diversifican parte de su patrimonio mientras siguen viviendo afuera. Le ayudamos a cumplir los requisitos que aplican a su caso." },
    ],
    cta: {
      heading: "¿Pensando en mudarse, o en un plan B?",
      body:    "Cuéntenos desde dónde viene y qué necesita. Le armamos la ruta, los documentos y los tiempos para su familia.",
      label:   "Agendar una consulta",
    },
  },
};

export default copy;
