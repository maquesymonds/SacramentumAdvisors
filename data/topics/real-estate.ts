import type { TopicCopy } from "@/lib/topics";

// DRAFT — pending approval by Inés. DE: draft by Claude, pending native review. Intro keeps the stage-1 approved copy
// (investRealEstate); sections added from the keyword research
// (docs/seo/RESEARCH-SUMMARY.md: uruguay property, punta del este, josé ignacio,
// casas en punta del este, vivienda promovida, haus kaufen uruguay, piriápolis).

const copy: TopicCopy = {
  en: {
    metaTitle:       "Uruguay Real Estate: Punta del Este",
    metaDescription: "Buying property in Uruguay as a foreigner: Punta del Este, José Ignacio, Montevideo and Piriápolis. Independent advice from the buyer's side.",
    navLabel:        "Real estate",
    cardText:        "Punta del Este, José Ignacio, Montevideo and Piriápolis — advised from the buyer's side.",
    eyebrow:         "Real estate in Uruguay",
    title:           "Invest where you can live: real estate in Uruguay",
    intro: [
      "We believe the most resilient portfolio is one you can experience — assets that preserve and grow your capital while remaining livable, enjoyable and productive.",
      "Uruguay's real estate market offers legal certainty, dollar-denominated transactions and unrestricted foreign ownership. We advise from the buyer's side: what to buy, where, at what price, and how to close it safely.",
    ],
    image: { src: "/placeholders/pde.avif", alt: "Coastline of Punta del Este, Uruguay" },
    facts: [
      { value: "0%",  label: "Restrictions on foreign ownership of residential property" },
      { value: "USD", label: "Currency in which property is priced and transacted" },
    ],
    sectionsHeading: "Buying property in Uruguay, step by step",
    sections: [
      {
        heading: "Where to buy: the four markets our clients ask about",
        body: [
          "Each coastal and urban market in Uruguay behaves differently — in price, seasonality, rental demand and resale liquidity. Choosing the place is the first investment decision.",
        ],
        bullets: [
          "Punta del Este — the most established market: apartments and houses, year-round services, the deepest rental and resale market.",
          "José Ignacio — exclusive and low-density: architectural houses and large plots, limited supply, a long-term ownership market.",
          "Montevideo — Carrasco, Pocitos and Punta Carretas: year-round city living, schools, healthcare and steady annual rentals.",
          "Piriápolis — a historic seaside town with lower entry prices, chosen for second homes and quieter year-round living.",
        ],
      },
      {
        heading: "Can a foreigner buy property in Uruguay?",
        body: [
          "Yes. Foreign individuals and companies can buy residential property with the same rights as Uruguayan citizens, without needing residency. Rural land and some ownership structures follow specific rules, which we review case by case.",
          "Buying a property does not by itself grant legal residency or tax residency. If either is part of your plan, we structure the purchase with that in mind from the start.",
        ],
      },
      {
        heading: "Advice from the buyer's side",
        body: [
          "In Uruguay a traditional agent is usually paid on the sale. We work for the buyer: we compare the market, challenge the asking price, review the real costs of owning the property and coordinate an independent escribano (notary) for the title study.",
          "Our role is to make sure the property fits your plan — personal use, rental income or long-term preservation of capital — before you commit.",
        ],
      },
      {
        heading: "Rental income and promoted housing",
        body: [
          "Seasonal rentals in Punta del Este concentrate in a few weeks of summer, while annual rentals in Montevideo are steadier. We model net income with realistic occupancy, building charges and taxes — not the advertised peak-season rate.",
          "For income-focused investors, Uruguay's promoted housing regime (vivienda promovida, Law 18.795) offers tax benefits on qualifying residential projects. We assess whether a project qualifies and what the benefits mean in your case.",
        ],
      },
    ],
    steps: {
      heading: "How a purchase works",
      items: [
        { title: "Brief and shortlist",      body: "Budget, purpose and location. We shortlist properties across agencies and off-market." },
        { title: "Reservation",              body: "A reservation agreement fixes the price and conditions while due diligence is done." },
        { title: "Title study",              body: "An independent escribano reviews ownership, debts, permits and encumbrances." },
        { title: "Deed and registration",    body: "Signing, payment and registration of the deed — in person or by power of attorney." },
      ],
    },
    faqs: [
      { q: "Do I need residency to buy property in Uruguay?", a: "No. Foreigners can buy residential property in Uruguay with the same rights as citizens, without residency. Residency and tax residency are separate processes that we can coordinate alongside the purchase." },
      { q: "Which is better for investment: Punta del Este or José Ignacio?", a: "Punta del Este offers a deeper rental and resale market; José Ignacio offers scarcity and long-term value in a smaller, exclusive market. The right choice depends on whether you prioritise income, personal use or capital preservation." },
      { q: "What costs should I budget on top of the price?", a: "Notary fees, agency commission where applicable, the property transfer tax (ITP, calculated on the cadastral value) and registration costs. We give you a full acquisition-cost estimate before you make an offer." },
      { q: "Can I buy remotely?", a: "Yes. With a power of attorney, the purchase can be completed without being in Uruguay for the signing." },
    ],
    cta: {
      heading: "Looking at a property in Uruguay?",
      body:    "Tell us what you are looking for and how you plan to use it. We will tell you where it makes sense — and where it does not.",
      label:   "Book a consultation",
    },
  },

  es: {
    metaTitle:       "Casas en Punta del Este y Montevideo",
    metaDescription: "Comprar una propiedad en Uruguay siendo extranjero: Punta del Este, José Ignacio, Montevideo y Piriápolis. Asesoramiento del lado del comprador.",
    navLabel:        "Inmobiliario",
    cardText:        "Punta del Este, José Ignacio, Montevideo y Piriápolis, asesorados del lado del comprador.",
    eyebrow:         "Inmobiliario en Uruguay",
    title:           "Invierta donde pueda vivir: inmobiliario en Uruguay",
    intro: [
      "Creemos que el portafolio más resiliente es aquel que se puede vivir: activos que preservan y hacen crecer su capital, y que al mismo tiempo son habitables, disfrutables y productivos.",
      "El mercado inmobiliario uruguayo ofrece seguridad jurídica, operaciones en dólares y propiedad extranjera sin restricciones. Asesoramos del lado del comprador: qué comprar, dónde, a qué precio y cómo cerrar la operación con seguridad.",
    ],
    image: { src: "/placeholders/pde.avif", alt: "Costa de Punta del Este, Uruguay" },
    facts: [
      { value: "0%",  label: "Restricciones a la propiedad extranjera de inmuebles residenciales" },
      { value: "USD", label: "Moneda en que se cotizan y operan las propiedades" },
    ],
    sectionsHeading: "Comprar una propiedad en Uruguay, paso a paso",
    sections: [
      {
        heading: "Dónde comprar: los cuatro mercados por los que más nos consultan",
        body: [
          "Cada mercado de la costa y de la ciudad funciona distinto: en precio, estacionalidad, demanda de alquiler y facilidad de reventa. Elegir el lugar es la primera decisión de inversión.",
        ],
        bullets: [
          "Punta del Este: el mercado más consolidado. Apartamentos y casas, servicios todo el año y el mayor mercado de alquiler y reventa.",
          "José Ignacio: exclusivo y de baja densidad. Casas de autor y terrenos amplios, oferta limitada y un mercado de tenencia a largo plazo.",
          "Montevideo: Carrasco, Pocitos y Punta Carretas. Vida urbana todo el año, colegios, salud y alquileres anuales estables.",
          "Piriápolis: balneario histórico con precios de entrada más bajos, elegido como segunda vivienda o para vivir con tranquilidad todo el año.",
        ],
      },
      {
        heading: "¿Puede un extranjero comprar una propiedad en Uruguay?",
        body: [
          "Sí. Personas y empresas extranjeras pueden comprar inmuebles residenciales con los mismos derechos que los ciudadanos uruguayos, sin necesidad de residencia. La tierra rural y algunas estructuras societarias siguen reglas específicas, que revisamos caso a caso.",
          "Comprar una propiedad no otorga por sí solo la residencia legal ni la residencia fiscal. Si alguna forma parte de su plan, estructuramos la compra pensando en eso desde el inicio.",
        ],
      },
      {
        heading: "Asesoramiento del lado del comprador",
        body: [
          "En Uruguay, el corredor inmobiliario tradicional suele cobrar por la venta. Nosotros trabajamos para el comprador: comparamos el mercado, cuestionamos el precio pedido, revisamos los costos reales de mantener la propiedad y coordinamos un escribano independiente para el estudio de títulos.",
          "Nuestro rol es asegurar que la propiedad encaje en su plan (uso personal, renta o preservación de capital a largo plazo) antes de que usted se comprometa.",
        ],
      },
      {
        heading: "Renta y vivienda promovida",
        body: [
          "El alquiler de temporada en Punta del Este se concentra en pocas semanas de verano, mientras que el alquiler anual en Montevideo es más estable. Calculamos la renta neta con una ocupación realista, gastos comunes e impuestos, no con la tarifa de temporada alta.",
          "Para inversores que buscan renta, el régimen de vivienda promovida (Ley 18.795) otorga beneficios fiscales a proyectos residenciales que califican. Evaluamos si un proyecto califica y qué significan esos beneficios en su caso.",
        ],
      },
    ],
    steps: {
      heading: "Cómo es una compra",
      items: [
        { title: "Objetivo y selección",      body: "Presupuesto, uso y ubicación. Seleccionamos propiedades de distintas inmobiliarias y fuera del mercado." },
        { title: "Reserva",                   body: "Un boleto de reserva fija precio y condiciones mientras se hace la debida diligencia." },
        { title: "Estudio de títulos",        body: "Un escribano independiente revisa titularidad, deudas, permisos y gravámenes." },
        { title: "Escritura e inscripción",   body: "Firma, pago e inscripción de la escritura, en persona o por poder." },
      ],
    },
    faqs: [
      { q: "¿Necesito residencia para comprar una propiedad en Uruguay?", a: "No. Los extranjeros pueden comprar inmuebles residenciales en Uruguay con los mismos derechos que los ciudadanos, sin residencia. La residencia legal y la fiscal son trámites aparte que podemos coordinar junto con la compra." },
      { q: "¿Qué conviene más para invertir: Punta del Este o José Ignacio?", a: "Punta del Este tiene un mercado de alquiler y reventa más profundo; José Ignacio ofrece escasez y valor a largo plazo en un mercado más chico y exclusivo. La elección depende de si prioriza renta, uso personal o preservación de capital." },
      { q: "¿Qué costos tengo que sumar al precio?", a: "Honorarios del escribano, comisión inmobiliaria si corresponde, el Impuesto a las Trasmisiones Patrimoniales (ITP, calculado sobre el valor catastral) y gastos de registro. Le damos una estimación completa de costos antes de ofertar." },
      { q: "¿Puedo comprar a distancia?", a: "Sí. Con un poder, la compra puede completarse sin estar en Uruguay el día de la firma." },
    ],
    cta: {
      heading: "¿Está mirando una propiedad en Uruguay?",
      body:    "Cuéntenos qué busca y cómo piensa usarla. Le diremos dónde tiene sentido, y dónde no.",
      label:   "Agendar una consulta",
    },
  },
  de: {
    metaTitle:       "Haus kaufen in Uruguay",
    metaDescription: "Immobilien in Uruguay als Ausländer kaufen: Punta del Este, José Ignacio, Piriápolis und Montevideo. Unabhängige Beratung auf der Seite des Käufers.",
    navLabel:        "Immobilien",
    cardText:        "Punta del Este, José Ignacio, Montevideo und Piriápolis – beraten auf der Seite des Käufers.",
    eyebrow:         "Immobilien in Uruguay",
    title:           "Investieren, wo man leben kann: Immobilien in Uruguay",
    intro: [
      "Wir glauben, dass das widerstandsfähigste Portfolio eines ist, das man erleben kann – Werte, die Ihr Kapital erhalten und vermehren und zugleich bewohnbar, genießbar und produktiv sind.",
      "Der uruguayische Immobilienmarkt bietet Rechtssicherheit, Transaktionen in US-Dollar und keine Beschränkungen für ausländische Eigentümer. Wir beraten auf der Seite des Käufers: was, wo, zu welchem Preis und wie Sie sicher abschließen.",
    ],
    image: { src: "/placeholders/pde.avif", alt: "Küste von Punta del Este, Uruguay" },
    facts: [
      { value: "0 %", label: "Beschränkungen für ausländische Eigentümer von Wohnimmobilien" },
      { value: "USD", label: "Währung, in der Immobilien angeboten und gehandelt werden" },
    ],
    sectionsHeading: "Eine Immobilie in Uruguay kaufen, Schritt für Schritt",
    sections: [
      {
        heading: "Wo kaufen: die vier Märkte, nach denen man uns fragt",
        body: [
          "Jeder Markt an der Küste und in der Stadt funktioniert anders – bei Preis, Saison, Mietnachfrage und Wiederverkauf. Die Wahl des Ortes ist die erste Investitionsentscheidung.",
        ],
        bullets: [
          "Punta del Este – der etablierteste Markt: Wohnungen und Häuser, Infrastruktur das ganze Jahr, der tiefste Miet- und Wiederverkaufsmarkt.",
          "José Ignacio – exklusiv und weitläufig: Architektenhäuser und große Grundstücke, begrenztes Angebot, ein Markt für langfristiges Eigentum.",
          "Montevideo – Carrasco, Pocitos und Punta Carretas: ganzjähriges Stadtleben, Schulen, medizinische Versorgung und stabile Jahresmieten.",
          "Piriápolis – ein historischer Badeort mit niedrigeren Einstiegspreisen, gewählt für ein Haus am Meer und ein ruhiges Leben das ganze Jahr.",
        ],
      },
      {
        heading: "Können Ausländer in Uruguay ein Haus kaufen?",
        body: [
          "Ja. Ausländische Privatpersonen und Unternehmen können Wohnimmobilien mit denselben Rechten wie uruguayische Staatsbürger erwerben, ohne Aufenthaltsgenehmigung. Für ländliche Grundstücke und bestimmte Eigentumsstrukturen gelten besondere Regeln, die wir im Einzelfall prüfen.",
          "Ein Immobilienkauf allein verschafft weder eine Aufenthaltsgenehmigung noch einen steuerlichen Wohnsitz. Wenn beides Teil Ihres Plans ist, strukturieren wir den Kauf von Anfang an entsprechend.",
        ],
      },
      {
        heading: "Beratung auf der Seite des Käufers",
        body: [
          "In Uruguay wird ein klassischer Makler meist für den Verkauf bezahlt. Wir arbeiten für den Käufer: Wir vergleichen den Markt, hinterfragen den Angebotspreis, prüfen die tatsächlichen Kosten des Eigentums und koordinieren einen unabhängigen Notar (Escribano) für die Prüfung der Eigentumsverhältnisse.",
          "Unsere Aufgabe ist sicherzustellen, dass die Immobilie zu Ihrem Plan passt – Eigennutzung, Mieteinnahmen oder langfristiger Kapitalerhalt –, bevor Sie sich verpflichten.",
        ],
      },
      {
        heading: "Mieteinnahmen",
        body: [
          "Saisonvermietungen in Punta del Este konzentrieren sich auf wenige Sommerwochen, Jahresmieten in Montevideo sind stabiler. Wir rechnen die Nettorendite mit realistischer Auslastung, Nebenkosten und Steuern – nicht mit dem Preis der Hochsaison.",
        ],
      },
    ],
    steps: {
      heading: "So läuft ein Kauf ab",
      items: [
        { title: "Ziel und Auswahl",            body: "Budget, Nutzung und Ort. Wir wählen Objekte verschiedener Makler und außerhalb des Marktes aus." },
        { title: "Reservierung",                body: "Eine Reservierungsvereinbarung sichert Preis und Bedingungen während der Prüfung." },
        { title: "Prüfung der Eigentumsrechte", body: "Ein unabhängiger Escribano prüft Eigentum, Schulden, Genehmigungen und Belastungen." },
        { title: "Urkunde und Eintragung",      body: "Unterzeichnung, Zahlung und Eintragung – persönlich oder per Vollmacht." },
      ],
    },
    faqs: [
      { q: "Brauche ich eine Aufenthaltsgenehmigung, um in Uruguay ein Haus zu kaufen?", a: "Nein. Ausländer können Wohnimmobilien in Uruguay mit denselben Rechten wie Staatsbürger kaufen, ohne Aufenthaltsgenehmigung. Aufenthalt und steuerlicher Wohnsitz sind getrennte Verfahren, die wir parallel koordinieren können." },
      { q: "Punta del Este, José Ignacio oder Piriápolis?", a: "Punta del Este bietet den tiefsten Miet- und Wiederverkaufsmarkt, José Ignacio Exklusivität und langfristigen Wert, Piriápolis niedrigere Einstiegspreise und ein ruhiges Leben. Die Wahl hängt davon ab, ob Sie Mieteinnahmen, Eigennutzung oder Kapitalerhalt priorisieren." },
      { q: "Welche Kosten kommen zum Kaufpreis hinzu?", a: "Notarkosten, gegebenenfalls Maklerprovision, die Grunderwerbsteuer (ITP, berechnet auf den Katasterwert) und Eintragungskosten. Vor einem Angebot erhalten Sie von uns eine vollständige Kostenschätzung." },
      { q: "Kann ich aus der Ferne kaufen?", a: "Ja. Mit einer Vollmacht kann der Kauf abgeschlossen werden, ohne dass Sie zur Unterzeichnung in Uruguay sein müssen." },
    ],
    cta: {
      heading: "Sie interessieren sich für eine Immobilie in Uruguay?",
      body:    "Erzählen Sie uns, was Sie suchen und wie Sie sie nutzen möchten. Wir sagen Ihnen, wo es sinnvoll ist – und wo nicht.",
      label:   "Beratung vereinbaren",
    },
  },
};

export default copy;
