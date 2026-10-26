/* ─────────────────────────────────────────────────────────────────────────────
   Review flags — copy written by Claude that Inés has not confirmed yet
   Audit of 21.10.2026 against the only valid sources: the stage-1 copy Inés
   approved (origin/main), her own texts (docs/content) and the Sacramentum
   Capital presentation. Everything else is flagged here, block by block, with
   the question she has to answer. Shown on the page by ReviewFlag (preview
   and local only). Remove a block's entry once Inés has confirmed it.

   Keys follow the Spanish page (the version Inés reviews): sections and faqs
   by position, 0-based.
   ─────────────────────────────────────────────────────────────────────────── */

import type { TopicId } from "@/lib/i18n";
import type { ReviewNote } from "@/lib/review";

export interface TopicReview {
  /** The whole page is new copy Inés has to read end to end: no inline
      blocks on the page, every note listed once in the review panel
      (Maque, 25.10.2026, Real estate and Farmland). */
  wholePage?: boolean;
  meta?:     ReviewNote[];
  intro?:    ReviewNote[];
  facts?:    ReviewNote[];
  sections?: Record<number, ReviewNote[]>;
  steps?:    ReviewNote[];
  faqs?:     Record<number, ReviewNote[]>;
  cta?:      ReviewNote[];
}

const s = (pregunta: string): ReviewNote => ({ kind: "servicio",  pregunta });
const d = (pregunta: string): ReviewNote => ({ kind: "dato",      pregunta });
const p = (pregunta: string): ReviewNote => ({ kind: "propuesta", pregunta });
const r = (pregunta: string): ReviewNote => ({ kind: "redaccion", pregunta });

export const TOPIC_REVIEW: Partial<Record<TopicId, TopicReview>> = {




  "real-estate": {
    // 25.10.2026: the page is back to Inés' stage-1 copy; only what is not hers is asked
    wholePage: true,
    meta: [
      s("El título y la descripción para Google, y la tarjeta que enlaza a esta página desde otras, nombran Punta del Este, José Ignacio, Montevideo y Piriápolis (propuesta del research, la gente busca por lugar). ¿Asesoran en esos lugares? Si no, los sacamos."),
      p("El mapa ubica tus tres tipos de propiedad: campos en el interior, chacras serranas en las sierras del este y propiedades costeras en la costa. ¿Está bien así?"),
      r("Los títulos de las dos secciones (\"Preservación de capital y calidad de vida\" y \"El mercado inmobiliario de Uruguay\") salen de tu texto. ¿Te sirven?"),
      s("Falta contenido para completar la página: ¿cómo acompañan una compra, en qué zonas trabajan, cómo cobran? Tenemos un borrador para proponerte."),
    ],
    faqs: {
      0: [d("¿Los extranjeros compran con los mismos derechos y sin residencia? ¿La residencia legal y la fiscal son trámites aparte?"), s("¿Coordinan la residencia junto con la compra?")],
      1: [d("Comparación Punta del Este (alquiler y reventa más profundos) vs José Ignacio (escasez, valor a largo plazo): ¿estás de acuerdo?")],
      2: [d("¿Es correcta la lista de costos (escribano, comisión, ITP, registro)? ¿El ITP se calcula sobre el valor catastral? ¿Quién lo paga?"), s("¿Le dan al cliente una estimación completa de costos antes de ofertar?")],
      3: [d("¿Se puede comprar a distancia con poder? ¿Con qué requisitos (apostilla, consulado)?")],
    },
    cta: [r("El cierre usa tu línea de listings partida en título y bajada. ¿Te sirve?")],
  },
  "farmland": {
    wholePage: true,
    meta: [
      s("¿Asesoran también en la administración del campo después de la compra?"),
      p("\"Campos, chacras y forestación\" es una propuesta sin aprobar. También se cambió \"Sector Agropecuario y Forestal\" por \"Agro y forestación\"."),
    ],
    intro: [
      r("El primer párrafo es una traducción nueva de tu texto en inglés. Tu versión aprobada en español era otra. ¿Usamos la tuya?"),
      s("¿Trabajan estos cuatro modelos: campo arrendado, estancia ganadera, proyecto forestal y chacra?"),
      s("¿Acompañan las tres cosas: elegir el modelo, buscar la tierra y comprarla?"),
    ],
    sections: {
      0: [
        d("Campo arrendado como \"el modelo más pasivo: el productor opera y usted cobra el arrendamiento\": ¿es correcto?"),
        d("Estancias \"muchas veces combinadas con uso personal\": ¿estás de acuerdo?"),
        d("Forestación: ¿eucalipto y pino, con una industria de celulosa y madera consolidada?"),
        d("Chacras \"cerca de la costa o de las ciudades\": la etapa 1 dice \"chacras serranas\". ¿Dónde están las que manejan?"),
      ],
      1: [
        s("La revisión técnica (CONEAT, agua, accesos, arrendamientos, normas ambientales): ¿la hacen ustedes o la coordinan con un agrónomo?"),
        s("¿Coordinan un escribano independiente para los campos?"),
        d("Derecho de preferencia del Instituto Nacional de Colonización: ¿es correcto? ¿Querés mencionarlo?"),
        d("¿La tierra rural en manos de sociedades tiene reglas propias?"),
      ],
      2: [
        d("¿Un extranjero puede comprar tierra rural sin residencia y a distancia con poder?"),
        s("¿Ayudan a definir la estructura de tenencia junto con los asesores fiscales del cliente?"),
      ],
      3: [
        s("¿Coordinan al productor, al arrendatario o al administrador forestal después de la compra? Ojo: la frase de marca es \"No administramos activos\"."),
        s("¿Le mandan reportes periódicos al cliente?"),
      ],
    },
    steps: [
      s("¿Es así como acompañan la compra de un campo, en estos cuatro pasos?"),
      s("¿Buscan campos en inmobiliarias rurales y también con dueños directos? ¿Organizan las visitas?"),
      d("¿Está completa la lista de lo que se revisa? ¿Hace falta sacar RUT después de comprar?"),
    ],
    faqs: {
      0: [d("¿Un extranjero compra sin residencia? ¿Las sociedades y los Estados extranjeros tienen reglas específicas?"), s("¿Revisan esto ustedes o un abogado que coordinan?")],
      1: [d("CONEAT: \"índice oficial de productividad del suelo, 100 es el promedio nacional\". ¿Es correcta la definición?"), s("¿Usan el CONEAT para valorar un campo?")],
      2: [d("Chacra \"más chica, muchas veces cerca de la costa\" vs campo productivo \"que suele arrendarse\": ¿te sirven estas definiciones?")],
      3: [d("¿La industria forestal está consolidada? ¿Estás de acuerdo con la advertencia de liquidez baja y \"capital paciente\"?")],
    },
    cta: [s("¿Ofrecen este análisis de zonas, renta real y riesgos antes de la compra?")],
  },

  "technology": {
    meta: [r("El título, la descripción y la tarjeta resumen tu texto, sin agregar nada. ¿Te sirven? (En inglés: \"Build & Acquire\".)")],
  },
};

export function topicReview(id: TopicId): TopicReview | undefined {
  return TOPIC_REVIEW[id];
}

/** Every note of a page, for the page-level banner */
export function allNotes(rv?: TopicReview): ReviewNote[] {
  if (!rv) return [];
  return [
    ...(rv.meta ?? []), ...(rv.intro ?? []), ...(rv.facts ?? []),
    ...Object.values(rv.sections ?? {}).flat(), ...(rv.steps ?? []),
    ...Object.values(rv.faqs ?? {}).flat(), ...(rv.cta ?? []),
  ];
}
