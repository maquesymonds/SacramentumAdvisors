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

  "residency": {
    meta: [
      r("¿Está bien que la página apunte a argentinos y españoles con sus familias (en alemán, a alemanes, austríacos y suizos)?"),
      s("¿Coordinan de verdad la residencia, los documentos, el banco y la instalación del cliente?"),
      p("\"Residencia e instalación\" como nombre del servicio Soft Landing es una propuesta sin aprobar."),
    ],
    intro: [
      d("¿Podemos decir que Uruguay ofrece \"un camino claro\" a la residencia para cualquier extranjero?"),
      d("¿Es lo que ves en tus clientes, que muchas familias usan Uruguay como plan B?"),
      s("¿Coordinan toda la llegada (migración, documentos, banco, vivienda y colegios) o solo una parte?"),
      s("¿El cliente tiene una sola persona de contacto para todo el proceso? ¿Atienden en inglés y en alemán?"),
    ],
    sections: {
      0: [
        p("Residencia legal ≠ residencia fiscal ≠ tener patrimonio en Uruguay: es un mensaje de la propuesta, sin aprobar."),
        d("¿Es correcto que una propiedad o una cuenta no dan, por sí solas, ni residencia legal ni fiscal? (Ojo con la vía fiscal por inversión inmobiliaria.)"),
        s("¿Arrancan con cada cliente con un diagnóstico de qué residencias necesita?"),
      ],
      1: [
        d("¿Las vías son temporaria y permanente, y se tramitan ante la Dirección Nacional de Migración?"),
        d("¿El trámite se inicia en Uruguay y se puede entrar como turista para empezarlo?"),
        d("¿Con la constancia de inicio ya se saca la cédula y se abren cuentas bancarias?"),
        d("Residencia Mercosur: ¿qué países entran? Españoles, europeos, estadounidenses y canadienses: ¿todos van por la vía general?"),
      ],
      2: [
        d("¿Son estos los documentos que se piden (pasaporte, partida de nacimiento, certificado de matrimonio, antecedentes penales)?"),
        d("Medios de vida (jubilación, rentas, trabajo o empresa): ¿son las formas válidas? ¿Hay un monto mínimo?"),
        d("¿Hay que apostillar y traducir al español? ¿A los estadounidenses se les pide el certificado del FBI?"),
      ],
      3: [
        s("¿Arman el plan B con estos cuatro pilares?"),
        s("¿Ayudan con cuentas bancarias y diversificación del patrimonio?"),
        s("¿Ayudan a alquilar o comprar vivienda?"),
        s("La planificación fiscal entre Uruguay y el país del cliente: ¿la hacen ustedes o la coordinan con un contador?"),
      ],
    },
    steps: [
      s("Antes de viajar, diagnóstico y revisión fiscal en su país: ¿lo hacen? ¿Quién?"),
      d("¿El trámite y la cédula se resuelven en las primeras semanas? ¿Existe una cédula \"provisoria\"?"),
      s("¿Ayudan con vivienda temporal y cobertura de salud?"),
      d("¿Es realista el plazo de los meses 2 y 3 para bancos, vivienda, colegios y empresa? ¿La residencia se otorga dentro del primer año?"),
      s("¿Hacen seguimiento al año, con revisión de la residencia fiscal?"),
    ],
    faqs: {
      0: [d("¿La residencia Mercosur puede ser temporaria o permanente y se tramita ante la DNM?"), s("¿Recomiendan o hacen la revisión fiscal en Argentina?")],
      1: [d("¿Los españoles van por la vía general acreditando medios de vida, sin ningún acuerdo especial?")],
      2: [d("¿La residencia fiscal se tramita por separado (certificado de la DGI)?")],
      3: [d("¿No hace falta comprar una propiedad? ¿Una inversión inmobiliaria sirve para acreditar medios de vida?")],
      4: [d("¿Se puede tener y conservar la residencia sin vivir en Uruguay? ¿Hay requisitos de permanencia?"), s("¿Hacen el seguimiento de esos requisitos?")],
    },
    cta: [s("¿Es lo que entregan en la primera consulta: ruta, documentos y tiempos?")],
  },

  "family-office": {
    meta: [
      s("¿Ofrecen a family offices activos reales, inteligencia de mercado, residencia y plan B? ¿Se presentan como su \"socio local\"?"),
      p("Nombrar a los family offices de forma explícita es una propuesta sin aprobar."),
    ],
    intro: [
      d("\"Los family offices miran a Uruguay por lo que ofrece y los mercados más grandes no\": ¿es lo que ves?"),
      d("Igualdad de trato al inversor extranjero y libre movimiento de capitales: ¿lo afirmamos? ¿Citamos la ley?"),
      s("¿Coordinan también a los especialistas fiscales y operativos? ¿El family office tiene una sola persona de contacto?"),
    ],
    sections: {
      0: [
        d("¿Los inversores extranjeros tienen los mismos derechos que los locales (Ley 16.906)?"),
        d("¿No hay controles de cambio y capital y utilidades se giran al exterior libremente?"),
        d("¿Podemos decir que Uruguay tiene un sector financiero \"consolidado\" y que es base para toda la región?"),
      ],
      2: [r("Tu texto de Market Intelligence quedó un poco reescrito. ¿Lo aprobás así?")],
      3: [
        p("El mensaje \"plan B\" es una propuesta sin aprobar."),
        s("¿Así definen la protección patrimonial: diversificar dentro de la ley?"),
        s("¿Piden documentar el origen de los fondos y el cumplimiento fiscal en cada país?"),
      ],
      4: [
        p("\"Trabajamos para nuestro cliente\" es la propuesta de independencia, sin aprobar."),
        s("¿Cómo cobra la firma? ¿Lo explican siempre antes del mandato?"),
        s("¿Informan siempre el vínculo con Sacramentum Capital?"),
      ],
    },
    faqs: {
      0: [d("¿Igualdad de trato al inversor extranjero y sin controles de cambio?")],
      1: [d("¿Los familiares pueden obtener la residencia, y la fiscal cuando corresponda?"), s("¿Planifican la residencia de la familia junto con la inversión?")],
      2: [d("¿Podemos afirmar que Uruguay no es un paraíso fiscal y aplica los estándares de la OCDE? ¿\"Previsible\", si el régimen cambió en 2026?")],
      3: [s("¿Cuál es la relación real entre Advisors y Capital? ¿Son empresas separadas? ¿Comparten socios? ¿Está bien \"de nuestra red\"?"), s("¿Siempre informan ese vínculo?")],
    },
    cta: [s("¿En la primera conversación ya presentan oportunidades y asesores?")],
  },

  "technology": {
    meta: [r("El título, la descripción y la tarjeta resumen tu texto, sin agregar nada. ¿Te sirven? (En inglés: \"Build & Acquire\".)")],
    intro: [r("La traducción al español es nuestra. ¿La revisás con Chiara? Lo mismo vale para las tres secciones.")],
    facts: [r("Redondeamos US$3.680 millones a \"US$3,7 MM\". En español \"MM\" suele leerse como millones: ¿preferís \"US$ 3.680 millones\"?")],
    faqs: {
      0: [d("Tu texto no habla del huso horario con Norteamérica, Latinoamérica y Europa. ¿Lo agregamos o lo sacamos?")],
      1: [
        d("\"Los inversores extranjeros reciben el mismo trato que los locales\": no sale de tu texto. ¿Lo confirmás (y con qué ley) o lo sacamos?"),
        s("¿Advisors busca e identifica empresas para comprar? ¿Coordina la transacción con Sacramentum Capital?"),
      ],
    },
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
