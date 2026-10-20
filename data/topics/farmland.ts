import type { TopicCopy } from "@/lib/topics";

// DRAFT — pending approval by Inés. DE: draft by Claude, pending native review. Keeps the stage-1 approved copy
// (investAgriculture: 90%+ productive land, Forestry Law 15.939); sections added
// from research (chacras en venta, campos en venta en uruguay, uruguay farmland
// for sale, timberland investment, CONEAT, Instituto Nacional de Colonización).

const copy: TopicCopy = {
  en: {
    metaTitle:       "Uruguay Farmland & Forestry: Buying Land as a Foreign Investor",
    metaDescription: "Uruguay farmland for sale, ranches, chacras and forestry: how a foreign investor buys land in Uruguay, what to check, and how to hold it. Independent advice.",
    navLabel:        "Farmland & forestry",
    cardText:        "Productive land, ranches, chacras and forestry — how foreign investors buy and hold land in Uruguay.",
    eyebrow:         "Agriculture & forestry",
    title:           "Farmland, ranches and forestry in Uruguay",
    intro: [
      "Uruguay is a country with deep agricultural tradition. With more than 90% of its land suitable for productive use, it stands as a reliable global food supplier.",
      "For investors, land is a real asset with a long horizon: productive farmland leased to an operator, a cattle ranch, a forestry project or a chacra combining land and lifestyle. We help you choose the model, find the land and buy it safely.",
    ],
    image: { src: "/images/campoextendido.webp", alt: "Open farmland in the Uruguayan countryside" },
    facts: [
      { value: "90%+",   label: "Of Uruguay's land suitable for productive use" },
      { value: "15.939", label: "Forestry Law providing the legal framework for forestry investment" },
    ],
    sections: [
      {
        heading: "Four ways to invest in land",
        body: ["The right model depends on the income you expect, how involved you want to be and how long you can hold the asset."],
        bullets: [
          "Productive farmland leased to an operator — the most passive model: the tenant runs the operation, you collect the lease.",
          "Cattle ranches (estancias) — grazing land with a long tradition in Uruguay, often combined with lifestyle use.",
          "Forestry — eucalyptus and pine plantations supported by an established pulp and timber industry and a dedicated legal framework.",
          "Chacras — smaller properties near the coast or the cities, bought for lifestyle, tourism or small-scale production.",
        ],
      },
      {
        heading: "What to check before buying land",
        body: [
          "Land is valued by what it can produce. Before an offer we review soil productivity (the official CONEAT index), water, access, existing leases and environmental rules, together with a full title study by an independent escribano.",
          "Some rural properties are subject to preference rights of the Instituto Nacional de Colonización, and ownership of rural land through companies follows specific rules. We identify both early so they do not surprise you at signing.",
        ],
      },
      {
        heading: "Foreign ownership",
        body: [
          "Foreign individuals can buy rural land in Uruguay without residency. The purchase can be completed remotely with a power of attorney, and you can hold the land personally or through a structure chosen with your tax advisors.",
        ],
      },
      {
        heading: "Managing the asset after the purchase",
        body: [
          "Owning land is the beginning, not the end. We coordinate the operator or tenant, the forestry manager where relevant, and the periodic reporting you need to follow the investment from abroad.",
        ],
      },
    ],
    steps: {
      heading: "From brief to deed",
      items: [
        { title: "Model and budget",     body: "Lease, ranch, forestry or chacra — and the region that fits it." },
        { title: "Shortlist and visits", body: "Properties from rural agencies and direct owners, with technical review." },
        { title: "Due diligence",        body: "Soil and water, leases, environmental rules, title study and preference rights." },
        { title: "Purchase and setup",   body: "Deed, registration, tax ID and the operator or manager agreement." },
      ],
    },
    faqs: [
      { q: "Can foreigners buy farmland in Uruguay?", a: "Yes. Foreign individuals can buy rural land in Uruguay without residency. Ownership through companies and purchases by foreign states follow specific rules, which we review for each case." },
      { q: "What is the CONEAT index?", a: "CONEAT is Uruguay's official index of soil productivity, where 100 is the national average. It is one of the first figures we review to value a property." },
      { q: "What is the difference between a chacra and a productive farm?", a: "A chacra is a smaller property bought mainly for lifestyle, tourism or small-scale production, often near the coast. A productive farm is valued by its agricultural output and is usually leased to an operator." },
      { q: "Is forestry a good investment in Uruguay?", a: "Forestry is a long-horizon investment with an established industry and a specific legal framework (Law 15.939). Returns depend on growth, timber prices and harvest timing, and liquidity is low — it suits patient capital." },
    ],
    cta: {
      heading: "Considering land in Uruguay?",
      body:    "Tell us which model you are considering. We will help you understand the regions, the real returns and the risks before you buy.",
      label:   "Book a consultation",
    },
  },

  es: {
    metaTitle:       "Campos y chacras en Uruguay: comprar tierra siendo extranjero",
    metaDescription: "Campos en venta en Uruguay, chacras, estancias y forestación: cómo compra tierra un inversor extranjero, qué revisar y cómo administrarla. Asesoramiento independiente.",
    navLabel:        "Campos y chacras",
    cardText:        "Campos productivos, estancias, chacras y forestación: cómo comprar y mantener tierra en Uruguay.",
    eyebrow:         "Agro y forestación",
    title:           "Campos, chacras y forestación en Uruguay",
    intro: [
      "Uruguay es un país con una profunda tradición agrícola. Con más del 90% de su tierra apta para uso productivo, es un proveedor confiable de alimentos a nivel mundial.",
      "Para el inversor, la tierra es un activo real de largo plazo: un campo productivo arrendado a un productor, una estancia ganadera, un proyecto forestal o una chacra que combina tierra y calidad de vida. Le ayudamos a elegir el modelo, encontrar la tierra y comprarla con seguridad.",
    ],
    image: { src: "/images/campoextendido.webp", alt: "Campo abierto en el interior de Uruguay" },
    facts: [
      { value: "90%+",   label: "De la tierra de Uruguay es apta para uso productivo" },
      { value: "15.939", label: "Ley Forestal que da el marco jurídico a la inversión forestal" },
    ],
    sections: [
      {
        heading: "Cuatro formas de invertir en tierra",
        body: ["El modelo correcto depende de la renta que espera, de cuánto quiere involucrarse y de cuánto tiempo puede mantener el activo."],
        bullets: [
          "Campo productivo arrendado: el modelo más pasivo. El productor opera y usted cobra el arrendamiento.",
          "Estancias ganaderas: campos de pastoreo con larga tradición en Uruguay, muchas veces combinados con uso personal.",
          "Forestación: plantaciones de eucalipto y pino con una industria de celulosa y madera consolidada y un marco legal propio.",
          "Chacras: propiedades más chicas cerca de la costa o de las ciudades, compradas por calidad de vida, turismo o producción a pequeña escala.",
        ],
      },
      {
        heading: "Qué revisar antes de comprar un campo",
        body: [
          "La tierra vale por lo que puede producir. Antes de ofertar revisamos la productividad del suelo (índice CONEAT), el agua, los accesos, los arrendamientos vigentes y las normas ambientales, junto con un estudio de títulos completo hecho por un escribano independiente.",
          "Algunos campos están sujetos al derecho de preferencia del Instituto Nacional de Colonización, y la propiedad de tierra rural a través de sociedades tiene reglas específicas. Identificamos ambos temprano para que no aparezcan como sorpresa en la firma.",
        ],
      },
      {
        heading: "Compra por extranjeros",
        body: [
          "Las personas extranjeras pueden comprar tierra rural en Uruguay sin residencia. La compra puede hacerse a distancia con un poder, y la tierra puede quedar a su nombre o en una estructura definida con sus asesores fiscales.",
        ],
      },
      {
        heading: "Administrar el activo después de la compra",
        body: [
          "Comprar es el comienzo, no el final. Coordinamos al productor o arrendatario, al administrador forestal cuando corresponde y los reportes periódicos que necesita para seguir la inversión desde el exterior.",
        ],
      },
    ],
    steps: {
      heading: "Del objetivo a la escritura",
      items: [
        { title: "Modelo y presupuesto",  body: "Arrendamiento, estancia, forestación o chacra, y la zona que le corresponde." },
        { title: "Selección y visitas",   body: "Campos de inmobiliarias rurales y de dueños directos, con revisión técnica." },
        { title: "Debida diligencia",     body: "Suelo y agua, arrendamientos, normas ambientales, títulos y derechos de preferencia." },
        { title: "Compra y puesta en marcha", body: "Escritura, inscripción, RUT y el acuerdo con el productor o administrador." },
      ],
    },
    faqs: [
      { q: "¿Un extranjero puede comprar un campo en Uruguay?", a: "Sí. Las personas extranjeras pueden comprar tierra rural en Uruguay sin residencia. La compra a través de sociedades y por Estados extranjeros tiene reglas específicas, que revisamos en cada caso." },
      { q: "¿Qué es el índice CONEAT?", a: "Es el índice oficial de productividad del suelo en Uruguay, donde 100 es el promedio nacional. Es uno de los primeros datos que revisamos para valorar un campo." },
      { q: "¿Qué diferencia hay entre una chacra y un campo productivo?", a: "La chacra es una propiedad más chica comprada sobre todo por calidad de vida, turismo o producción a pequeña escala, muchas veces cerca de la costa. El campo productivo se valora por su rendimiento agropecuario y suele arrendarse a un productor." },
      { q: "¿Conviene invertir en forestación en Uruguay?", a: "La forestación es una inversión de largo plazo con una industria consolidada y un marco legal propio (Ley 15.939). El retorno depende del crecimiento, del precio de la madera y del momento de la cosecha, y la liquidez es baja: es para capital paciente." },
    ],
    cta: {
      heading: "¿Está pensando en tierra en Uruguay?",
      body:    "Cuéntenos qué modelo está evaluando. Le ayudamos a entender las zonas, la renta real y los riesgos antes de comprar.",
      label:   "Agendar una consulta",
    },
  },
  de: {
    metaTitle:       "Landwirtschaft in Uruguay: Agrarland, Estancias und Forst",
    metaDescription: "Agrarland, Estancias, Chacras und Forstinvestments in Uruguay: wie ausländische Investoren Land kaufen, was zu prüfen ist und wie man es von Europa aus hält.",
    navLabel:        "Landwirtschaft und Forst",
    cardText:        "Agrarland, Estancias, Chacras und Forstwirtschaft – Land in Uruguay kaufen und halten.",
    eyebrow:         "Landwirtschaft und Forstwirtschaft",
    title:           "Agrarland, Estancias und Forstwirtschaft in Uruguay",
    intro: [
      "Uruguay ist ein Land mit tiefer landwirtschaftlicher Tradition. Mit über 90 % produktiv nutzbarer Fläche ist es ein verlässlicher Lebensmittellieferant für die Welt.",
      "Für Investoren ist Land ein Sachwert mit langem Horizont: verpachtetes Agrarland, eine Rinder-Estancia, ein Forstprojekt oder eine Chacra, die Land und Lebensqualität verbindet. Wir helfen bei der Wahl des Modells, bei der Suche und beim sicheren Kauf.",
    ],
    image: { src: "/images/campoextendido.webp", alt: "Weites Agrarland im Landesinneren Uruguays" },
    facts: [
      { value: "90 %+",  label: "Der Fläche Uruguays produktiv nutzbar" },
      { value: "15.939", label: "Forstgesetz, das den rechtlichen Rahmen für Forstinvestitionen bildet" },
    ],
    sections: [
      {
        heading: "Vier Wege, in Land zu investieren",
        body: ["Das richtige Modell hängt vom erwarteten Ertrag ab, davon, wie stark Sie sich einbringen möchten, und davon, wie lange Sie den Wert halten können."],
        bullets: [
          "Verpachtetes Agrarland – das passivste Modell: Ein Betreiber bewirtschaftet die Fläche, Sie erhalten die Pacht.",
          "Rinder-Estancias – Weideland mit langer Tradition in Uruguay, oft verbunden mit Eigennutzung.",
          "Forstwirtschaft – Eukalyptus- und Kiefernplantagen mit einer etablierten Zellstoff- und Holzindustrie und eigenem Rechtsrahmen.",
          "Chacras – kleinere Grundstücke nahe der Küste oder der Städte, gekauft für Lebensqualität, Tourismus oder kleine Produktion.",
        ],
      },
      {
        heading: "Was vor dem Kauf zu prüfen ist",
        body: [
          "Land wird nach seiner Ertragskraft bewertet. Vor einem Angebot prüfen wir die Bodenqualität (den offiziellen CONEAT-Index), Wasser, Zufahrten, bestehende Pachtverträge und Umweltauflagen, zusammen mit einer vollständigen Prüfung der Eigentumsrechte durch einen unabhängigen Escribano.",
          "Manche Flächen unterliegen einem Vorkaufsrecht des Instituto Nacional de Colonización, und für den Besitz über Gesellschaften gelten besondere Regeln. Beides klären wir früh.",
        ],
      },
      {
        heading: "Kauf durch Ausländer",
        body: [
          "Ausländische Privatpersonen können in Uruguay ländliche Flächen ohne Aufenthaltsgenehmigung kaufen. Der Kauf kann per Vollmacht aus der Ferne abgeschlossen werden.",
        ],
      },
      {
        heading: "Verwaltung nach dem Kauf",
        body: [
          "Mit dem Kauf beginnt die Arbeit erst. Wir koordinieren Betreiber oder Pächter, gegebenenfalls das Forstmanagement und die regelmäßigen Berichte, mit denen Sie Ihre Investition von Europa aus verfolgen.",
        ],
      },
    ],
    steps: {
      heading: "Vom Ziel zur Urkunde",
      items: [
        { title: "Modell und Budget",       body: "Pacht, Estancia, Forst oder Chacra – und die passende Region." },
        { title: "Auswahl und Besichtigung", body: "Flächen von ländlichen Maklern und Eigentümern, mit technischer Prüfung." },
        { title: "Prüfung",                 body: "Boden und Wasser, Pachtverträge, Umweltauflagen, Eigentum und Vorkaufsrechte." },
        { title: "Kauf und Start",          body: "Urkunde, Eintragung, Steuernummer und Vertrag mit Betreiber oder Verwalter." },
      ],
    },
    faqs: [
      { q: "Dürfen Ausländer in Uruguay Agrarland kaufen?", a: "Ja. Ausländische Privatpersonen können ländliche Flächen ohne Aufenthaltsgenehmigung kaufen. Für Käufe über Gesellschaften und durch ausländische Staaten gelten besondere Regeln." },
      { q: "Was ist der CONEAT-Index?", a: "Der offizielle Index der Bodenproduktivität in Uruguay; 100 entspricht dem Landesdurchschnitt. Er gehört zu den ersten Werten, die wir bei einer Bewertung prüfen." },
      { q: "Was ist eine Chacra?", a: "Ein kleineres ländliches Grundstück, oft nahe der Küste oder der Städte, gekauft vor allem für Lebensqualität, Tourismus oder kleine Produktion." },
      { q: "Ist Forstwirtschaft in Uruguay eine gute Investition?", a: "Forstwirtschaft ist eine langfristige Anlage mit etablierter Industrie und eigenem Rechtsrahmen (Gesetz 15.939). Die Rendite hängt von Wachstum, Holzpreisen und Erntezeitpunkt ab; die Liquidität ist gering." },
    ],
    cta: {
      heading: "Sie denken über Land in Uruguay nach?",
      body:    "Erzählen Sie uns, welches Modell Sie prüfen. Wir erklären Regionen, reale Erträge und Risiken, bevor Sie kaufen.",
      label:   "Beratung vereinbaren",
    },
  },
};

export default copy;
