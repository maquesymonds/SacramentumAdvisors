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
    cardText:        "Punta del Este, José Ignacio, Montevideo and Piriápolis, advised from the buyer's side.",
    // Inés' stage-1 copy only (Maque, 25.10.2026): her title, her three paragraphs
    // (the first as intro, the other two as sections), no figures, her listings line
    // as the closing. The previous draft is in docs/content/para-proponer/.
    eyebrow:         "Real estate",
    title:           "Invest where you can live: The Lifestyle Assets Concept",
    titleMarks:      ["where you can live", "Lifestyle Assets"],
    // Her three kinds of property, placed on the map (the EN/DE copy names two)
    uruguayMap:      { kind: "zones", zones: [{ zone: "campos", name: "Farmland and agricultural land" }, { zone: "costa", name: "Coastal property" }] },
    intro: [
      "We believe the most resilient portfolio is one you can experience. Assets that preserve and grow your capital while remaining livable, enjoyable and productive.",
    ],
    image: { src: "/placeholders/pde.avif", alt: "Coastline of Punta del Este, Uruguay" },
    sections: [
      { heading: "Capital preservation and quality of life", body: ["We will help you find properties that serve a dual purpose: capital preservation (productive farmland, estancias, premium real estate) and immediate quality of life."] },
      { heading: "Uruguay's real estate market", body: ["Uruguay's real estate market offers legal certainty, dollar-denominated transactions and unrestricted foreign ownership."] },
    ],
    faqs: [
      { q: "Do I need residency to buy property in Uruguay?", a: "No. Foreigners can buy residential property in Uruguay with the same rights as citizens, without residency. Residency and tax residency are separate processes that we can coordinate alongside the purchase." },
      { q: "Which is better for investment: Punta del Este or José Ignacio?", a: "Punta del Este offers a deeper rental and resale market; José Ignacio offers scarcity and long-term value in a smaller, exclusive market. The right choice depends on whether you prioritise income, personal use or capital preservation." },
      { q: "What costs should I budget on top of the price?", a: "Notary fees, agency commission where applicable, the property transfer tax (ITP, calculated on the cadastral value) and registration costs. We give you a full acquisition-cost estimate before you make an offer." },
      { q: "Can I buy remotely?", a: "Yes. With a power of attorney, the purchase can be completed without being in Uruguay for the signing." },
      { q: "How does a foreigner buy property in Uruguay, step by step?", a: "Define budget and use, sign a reservation agreement that fixes price and conditions, have an independent escribano (notary) study the title (ownership, debts, permits and encumbrances) and sign and register the deed, in person or through a power of attorney. We coordinate each step from the buyer's side." },
      { q: "Annual or seasonal rental: which works better in Punta del Este?", a: "An annual rental gives steadier income with less management; a seasonal rental concentrates income in the summer months and needs active management. We compare the net return of both, after common charges, taxes and management, before you buy." },
    ],
    cta: {
      heading: "Ask about our listings",
      body:    "Farmland, agricultural and coastal property.",
      label:   "Book a consultation",
    },
  },

  es: {
    metaTitle:       "Casas en Punta del Este y Montevideo",
    metaDescription: "Comprar una propiedad en Uruguay siendo extranjero: Punta del Este, José Ignacio, Montevideo y Piriápolis. Asesoramiento del lado del comprador.",
    navLabel:        "Inmobiliario",
    cardText:        "Punta del Este, José Ignacio, Montevideo y Piriápolis, asesorados del lado del comprador.",
    // Inés' stage-1 copy only (Maque, 25.10.2026): her title, her three paragraphs
    // (the first as intro, the other two as sections), no figures, her listings line
    // as the closing. The previous draft is in docs/content/para-proponer/.
    eyebrow:         "Inmobiliario",
    title:           "Invierta donde pueda vivir: El concepto de Lifestyle Assets",
    titleMarks:      ["donde pueda vivir", "Lifestyle Assets"],
    // Her three kinds of property, placed on the map (the EN/DE copy names two)
    uruguayMap:      { kind: "zones", zones: [{ zone: "campos", name: "Campos agrícolas, ganaderos y forestales" }, { zone: "sierras", name: "Chacras serranas" }, { zone: "costa", name: "Propiedades costeras" }] },
    intro: [
      "Creemos que la cartera más sólida es aquella que también puede disfrutarse en la vida real. Activos que preservan y hacen crecer su capital, al tiempo que resultan habitables, disfrutables y productivos.",
    ],
    image: { src: "/placeholders/pde.avif", alt: "Costa de Punta del Este, Uruguay" },
    sections: [
      { heading: "Preservación de capital y calidad de vida", body: ["Le ayudamos a identificar propiedades con un doble propósito: preservación de capital (campos productivos, estancias y bienes raíces premium) y calidad de vida inmediata."] },
      { heading: "El mercado inmobiliario de Uruguay", body: ["El mercado inmobiliario de Uruguay ofrece seguridad jurídica, transacciones denominadas en dólares y propiedad sin restricciones para inversores extranjeros."] },
    ],
    faqs: [
      { q: "¿Necesito residencia para comprar una propiedad en Uruguay?", a: "No. Los extranjeros pueden comprar inmuebles residenciales en Uruguay con los mismos derechos que los ciudadanos, sin residencia. La residencia legal y la fiscal son trámites aparte que podemos coordinar junto con la compra." },
      { q: "¿Qué conviene más para invertir: Punta del Este o José Ignacio?", a: "Punta del Este tiene un mercado de alquiler y reventa más profundo; José Ignacio ofrece escasez y valor a largo plazo en un mercado más chico y exclusivo. La elección depende de si prioriza renta, uso personal o preservación de capital." },
      { q: "¿Qué costos tengo que sumar al precio?", a: "Honorarios del escribano, comisión inmobiliaria si corresponde, el Impuesto a las Trasmisiones Patrimoniales (ITP, calculado sobre el valor catastral) y gastos de registro. Le damos una estimación completa de costos antes de ofertar." },
      { q: "¿Puedo comprar a distancia?", a: "Sí. Con un poder, la compra puede completarse sin estar en Uruguay el día de la firma." },
      { q: "¿Cómo compra un extranjero una propiedad en Uruguay, paso a paso?", a: "Se define presupuesto y uso, se firma un boleto de reserva que fija precio y condiciones, un escribano independiente estudia los títulos (titularidad, deudas, permisos y gravámenes) y se firma e inscribe la escritura, en persona o mediante un poder. Coordinamos cada paso del lado del comprador." },
      { q: "¿Alquiler anual o de temporada en Punta del Este?", a: "El alquiler anual da un ingreso más estable y menos gestión; el de temporada concentra el ingreso en el verano y exige una administración activa. Comparamos la rentabilidad neta de ambos, después de gastos comunes, impuestos y administración, antes de comprar." },
      { q: "¿Qué es la vivienda promovida?", a: "Es el régimen de la Ley 18.795, que da beneficios fiscales a quien invierte en vivienda nueva o reciclada en determinadas zonas, para venderla o alquilarla. Muchas unidades en Montevideo se venden bajo este régimen; revisamos qué beneficios aplican a cada una." },
    ],
    cta: {
      heading: "Consúltenos para conocer nuestros listings",
      body:    "Campos agrícolas, ganaderos y forestales, chacras serranas o propiedades costeras.",
      label:   "Reservar consulta",
    },
  },
  de: {
    metaTitle:       "Haus kaufen in Uruguay",
    metaDescription: "Immobilien in Uruguay als Ausländer kaufen: Punta del Este, José Ignacio, Piriápolis und Montevideo. Unabhängige Beratung für Käufer.",
    navLabel:        "Immobilien",
    cardText:        "Punta del Este, José Ignacio, Montevideo und Piriápolis, beraten auf der Seite des Käufers.",
    // Inés' stage-1 copy only (Maque, 25.10.2026): her title, her three paragraphs
    // (the first as intro, the other two as sections), no figures, her listings line
    // as the closing. The previous draft is in docs/content/para-proponer/.
    eyebrow:         "Immobilien",
    title:           "Investieren, wo man leben kann: das Konzept der Lifestyle Assets",
    titleMarks:      ["wo man leben kann", "Lifestyle Assets"],
    // Her three kinds of property, placed on the map (the EN/DE copy names two)
    uruguayMap:      { kind: "zones", zones: [{ zone: "campos", name: "Agrarflächen" }, { zone: "costa", name: "Immobilien an der Küste" }] },
    intro: [
      "Wir glauben, dass das widerstandsfähigste Portfolio eines ist, das man erleben kann: Werte, die Ihr Kapital erhalten und vermehren und zugleich bewohnbar, genießbar und produktiv sind.",
    ],
    image: { src: "/placeholders/pde.avif", alt: "Küste von Punta del Este, Uruguay" },
    sections: [
      { heading: "Kapitalerhalt und Lebensqualität", body: ["Wir helfen Ihnen, Immobilien mit doppeltem Nutzen zu finden: Kapitalerhalt (produktives Agrarland, Estancias, erstklassige Immobilien) und unmittelbare Lebensqualität."] },
      { heading: "Der uruguayische Immobilienmarkt", body: ["Der uruguayische Immobilienmarkt bietet Rechtssicherheit, Transaktionen in US-Dollar und keine Beschränkungen für ausländische Eigentümer."] },
    ],
    faqs: [
      { q: "Brauche ich eine Aufenthaltsgenehmigung, um in Uruguay ein Haus zu kaufen?", a: "Nein. Ausländer können Wohnimmobilien in Uruguay mit denselben Rechten wie Staatsbürger kaufen, ohne Aufenthaltsgenehmigung. Aufenthalt und steuerlicher Wohnsitz sind getrennte Verfahren, die wir parallel koordinieren können." },
      { q: "Punta del Este, José Ignacio oder Piriápolis?", a: "Punta del Este bietet den tiefsten Miet- und Wiederverkaufsmarkt, José Ignacio Exklusivität und langfristigen Wert, Piriápolis niedrigere Einstiegspreise und ein ruhiges Leben. Die Wahl hängt davon ab, ob Sie Mieteinnahmen, Eigennutzung oder Kapitalerhalt priorisieren." },
      { q: "Welche Kosten kommen zum Kaufpreis hinzu?", a: "Notarkosten, gegebenenfalls Maklerprovision, die Grunderwerbsteuer (ITP, berechnet auf den Katasterwert) und Eintragungskosten. Vor einem Angebot erhalten Sie von uns eine vollständige Kostenschätzung." },
      { q: "Kann ich aus der Ferne kaufen?", a: "Ja. Mit einer Vollmacht kann der Kauf abgeschlossen werden, ohne dass Sie zur Unterzeichnung in Uruguay sein müssen." },
      { q: "Wie kauft man als Ausländer ein Haus in Uruguay?", a: "Budget und Nutzung festlegen, einen Reservierungsvertrag unterzeichnen, der Preis und Bedingungen fixiert, einen unabhängigen Escribano (Notar) die Titel prüfen lassen (Eigentum, Schulden, Genehmigungen, Belastungen) und die Urkunde unterzeichnen und eintragen, persönlich oder per Vollmacht. Wir koordinieren jeden Schritt auf der Seite des Käufers." },
      { q: "Jahres- oder Saisonvermietung in Punta del Este?", a: "Die Jahresvermietung bringt stetigere Einnahmen bei weniger Aufwand; die Saisonvermietung konzentriert die Einnahmen auf den Sommer und verlangt eine aktive Verwaltung. Wir vergleichen die Nettorendite beider Varianten nach Nebenkosten, Steuern und Verwaltung, vor dem Kauf." },
    ],
    cta: {
      heading: "Fragen Sie nach Agrarflächen und Immobilien an der Küste",
      body:    "",
      label:   "Beratung vereinbaren",
    },
  },
};

export default copy;
