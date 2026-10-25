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
    meta: [
      s("¿Asesoran compras en Punta del Este, José Ignacio, Montevideo y Piriápolis? La etapa 1 solo habla de \"propiedades costeras\"."),
      s("¿Trabajan del lado del comprador y no cobran del vendedor? (La propuesta \"del lado del cliente\" no está aprobada.)"),
      p("El nombre \"Inmobiliario en Uruguay\" (en vez de \"Bienes Raíces\") es una propuesta sin aprobar."),
    ],
    intro: [
      r("El primer párrafo es una traducción nueva de tu texto en inglés. Tu versión aprobada en español decía \"la cartera más sólida es aquella que también puede disfrutarse en la vida real\". ¿Volvemos a la tuya?"),
      s("\"Asesoramos del lado del comprador: qué comprar, dónde, a qué precio y cómo cerrar la operación.\" ¿Es así?"),
    ],
    facts: [
      d("La etapa 1 dice \"0% restricciones a propietarios extranjeros\". Acá se agregó \"de inmuebles residenciales\". ¿Lo dejamos?"),
      d("\"USD: moneda en que se cotizan y operan las propiedades.\" La etapa 1 dice \"transacciones en dólares\". ¿Se puede decir también que se cotizan en USD?"),
    ],
    sections: {
      0: [
        s("¿Son de verdad estos cuatro los mercados por los que más les consultan?"),
        d("Punta del Este como \"el mercado más consolidado, con el mayor mercado de alquiler y reventa\": ¿es correcto?"),
        d("José Ignacio: \"baja densidad, casas de autor, terrenos amplios, oferta limitada\". ¿Confirmás la descripción?"),
        d("Montevideo: ¿trabajan Carrasco, Pocitos y Punta Carretas? ¿Es correcto lo de \"alquileres anuales estables\"?"),
        d("Piriápolis: ¿asesoran ahí? ¿Es correcto que tiene \"precios de entrada más bajos\"?"),
      ],
      1: [
        d("¿Personas y empresas extranjeras compran con los mismos derechos que los uruguayos y sin residencia?"),
        d("¿La tierra rural y algunas sociedades tienen reglas propias?"),
        s("\"Las revisamos caso a caso\": ¿lo hacen ustedes o un abogado o escribano que coordinan?"),
        p("\"Comprar no da por sí solo la residencia legal ni la fiscal\" es un mensaje de la propuesta, sin aprobar."),
        s("¿Estructuran la compra pensando en la residencia y la fiscalidad desde el inicio?"),
      ],
      2: [
        d("\"El corredor inmobiliario tradicional suele cobrar por la venta\": ¿es correcto decirlo así?"),
        s("\"Trabajamos para el comprador\": ¿cómo cobran? ¿Nunca cobran comisión del vendedor?"),
        s("¿Comparan el mercado, cuestionan el precio pedido y revisan los costos de mantener la propiedad?"),
        s("¿Coordinan un escribano independiente para el estudio de títulos?"),
      ],
      3: [
        d("\"El alquiler de temporada en Punta del Este se concentra en pocas semanas de verano.\" Ojo: la noticia de la etapa 1 dice que Punta del Este maduró hacia una propuesta de todo el año."),
        d("¿El alquiler anual en Montevideo es más estable?"),
        s("¿Calculan la renta neta para el cliente (ocupación, gastos comunes, impuestos)?"),
        d("Vivienda promovida, Ley 18.795: ¿es correcta, sigue vigente y querés mencionarla?"),
        s("¿Evalúan si un proyecto califica para vivienda promovida?"),
      ],
    },
    steps: [
      s("¿Es así como acompañan una compra, en estos cuatro pasos?"),
      s("¿Seleccionan propiedades de varias inmobiliarias y también fuera del mercado (off-market)?"),
      d("¿Se usa un \"boleto de reserva\"? ¿Hay además una promesa de compraventa con seña?"),
      d("¿Es correcto lo que revisa el escribano en el estudio de títulos (titularidad, deudas, permisos, gravámenes)?"),
      d("¿Se puede firmar la escritura por poder?"),
    ],
    faqs: {
      0: [d("¿Los extranjeros compran con los mismos derechos y sin residencia? ¿La residencia legal y la fiscal son trámites aparte?"), s("¿Coordinan la residencia junto con la compra?")],
      1: [d("Comparación Punta del Este (alquiler y reventa más profundos) vs José Ignacio (escasez, valor a largo plazo): ¿estás de acuerdo?")],
      2: [d("¿Es correcta la lista de costos (escribano, comisión, ITP, registro)? ¿El ITP se calcula sobre el valor catastral? ¿Quién lo paga?"), s("¿Le dan al cliente una estimación completa de costos antes de ofertar?")],
      3: [d("¿Se puede comprar a distancia con poder? ¿Con qué requisitos (apostilla, consulado)?")],
    },
    cta: [s("\"Le diremos dónde tiene sentido, y dónde no.\" ¿Te sirve esta promesa?")],
  },
  "farmland": {
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
    intro: [r("La traducción al español es nuestra. ¿La revisás con Chiara? Lo mismo vale para las tres secciones.")],
    facts: [r("Redondeamos US$3.680 millones a \"US$3,7 MM\". En español \"MM\" suele leerse como millones: ¿preferís \"US$ 3.680 millones\"?")],
    cta: [s("\"Cuéntenos qué necesita y le mostramos las opciones en Uruguay\": ¿así trabajan con tecnología?")],
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
