/* ─────────────────────────────────────────────────────────────────────────────
   Review notes outside the topic pages (audit of 21.10.2026, see
   data/review-flags.ts for the rules). Two kinds:
   · FAQ_REVIEW — per FAQ block (FaqSection id) and position, shown inline.
   · PAGE_REVIEW — what is not visible as one block (Google descriptions,
     structured data, page-wide copy), shown in the floating ReviewPanel.
   Remove an entry once Inés has confirmed it.
   ─────────────────────────────────────────────────────────────────────────── */

import type { Locale, PageId } from "@/lib/i18n";
import type { ReviewNote } from "@/lib/review";

const s = (pregunta: string): ReviewNote => ({ kind: "servicio",  pregunta });
const d = (pregunta: string): ReviewNote => ({ kind: "dato",      pregunta });
const p = (pregunta: string): ReviewNote => ({ kind: "propuesta", pregunta });
const r = (pregunta: string): ReviewNote => ({ kind: "redaccion", pregunta });

// Same question asked on several pages
const CAPITAL_LINK  = s("¿Cuál es la relación real entre Advisors y Capital? ¿Son firmas separadas? ¿Comparten socios? ¿Está bien decir \"la boutique de banca de inversión de nuestra red\"?");
const FEES          = p("\"Antes de cualquier mandato explicamos cómo trabajamos y cómo cobramos\": es la propuesta de independencia, sin aprobar. ¿Cómo cobra la firma?");
const EQUAL_RIGHTS  = d("\"El inversor extranjero tiene los mismos derechos que el local\" no está en tus textos. ¿Lo confirmás? ¿Citamos la Ley 16.906?");
const NO_FX         = d("\"No hay controles de cambio\" no está en tus textos. ¿Lo publicamos?");
const BUY_NO_RES    = d("¿Un extranjero puede comprar inmuebles y campos sin tener residencia?");
const POWER         = d("¿Se puede firmar una compra mediante un poder, sin estar en Uruguay?");
const LEGAL_VS_TAX  = p("Residencia legal ≠ residencia fiscal es un mensaje de la propuesta, sin aprobar. ¿Lo usamos? ¿Se tramitan por separado?");
const TIMEZONE      = d("Lo del huso horario como ventaja no está en tus textos. ¿Lo dejamos o lo sacamos?");
const FAMILY_OFFICE = p("Nombrar a los family offices como clientes es una propuesta sin aprobar. ¿Trabajan con family offices?");

/** FaqSection id → FAQ position → notes */
export const FAQ_REVIEW: Record<string, Record<number, ReviewNote[]>> = {
  home: {
    0: [FAMILY_OFFICE, s("¿Esta lista describe bien lo que hace la firma: residencia, inmuebles, campos y forestación, tecnología, diversificación patrimonial?"), s("¿Coordinan también a los asesores fiscales, además de los legales y financieros?")],
    1: [r("La etapa 1 dice \"Directora General\" y \"vicedirectora ejecutiva\" de Uruguay XXI. ¿Usamos \"Managing Director\" y \"Directora Ejecutiva Adjunta\"?"), d("Bio de Pablo: la etapa 1 dice \"VP en J.P. Morgan y Lehman Brothers\"; la presentación de Capital, \"JPMorgan, de Associate a Executive Director\", sin Lehman. ¿Cuál es la correcta?"), r("¿Está bien resumir el consejo asesor como \"exministros de Uruguay y Argentina\"?")],
    2: [EQUAL_RIGHTS, NO_FX],
    3: [BUY_NO_RES, POWER, LEGAL_VS_TAX],
    4: [CAPITAL_LINK, p("\"Informamos ese vínculo cada vez que una transacción de Capital es relevante\": es la propuesta de independencia, sin aprobar.")],
    5: [FEES],
  },
  "why-uruguay": {
    0: [r("Es tu texto de estabilidad de la etapa 1, con otras palabras (\"reglas previsibles para el capital de largo plazo\"). ¿Te parece bien?")],
    1: [d("¿Te parece bien decir que la seguridad \"varía según la zona\"?"), s("¿Asesoran sobre dónde vivir (zona, barrio), además de dónde invertir?")],
    2: [EQUAL_RIGHTS, BUY_NO_RES],
    3: [p("Nombrar Punta del Este, José Ignacio y Montevideo es una propuesta sin aprobar.")],
    4: [TIMEZONE],
    5: [LEGAL_VS_TAX],
  },
  services: {
    0: [p("\"Inteligencia de mercado\" en español es una propuesta sin aprobar. Además, la etapa 1 describe Soft Landing como \"instalación, expansión y operación\"; acá se le sumó residencia y estructuración.")],
    1: [s("¿El trámite de residencia lo llevan sus socios legales y ustedes lo coordinan? ¿Ayudan con la mudanza?"), d("¿La residencia exige acreditar medios de vida y no comprar una propiedad?"), LEGAL_VS_TAX],
    2: [p("\"Trabajamos para el comprador\" es una propuesta sin aprobar. ¿Real estate es un servicio propio de la firma?"), s("¿Comparan el mercado, negocian el precio y revisan los costos de tener la propiedad?"), s("¿Coordinan un escribano independiente para el estudio de títulos?")],
    3: [FAMILY_OFFICE, s("¿Planifican la residencia de todos los miembros de la familia?")],
    4: [s("¿Tienen socios fiscales (contadores) en la red? La etapa 1 solo menciona legales y financieros."), s("¿El cliente tiene un solo interlocutor durante todo el proceso?")],
    5: [CAPITAL_LINK, d("\"Finanzas estructuradas, mercado de capitales y M&A transfronterizo en el Cono Sur\" sale de la presentación de Capital, que dice \"Confidential\". ¿Se puede publicar?")],
  },
  contact: {
    0: [s("¿Las consultas del formulario las lee siempre un asesor senior? ¿Siempre se responde coordinando una primera conversación?")],
    1: [s("¿Es verdad que muchos clientes llegan sin un proyecto definido?")],
    2: [r("Es tu texto de confidencialidad de la etapa 1, con otras palabras. ¿Lo dejamos?")],
    3: [FEES, p("\"Informamos nuestro vínculo con Sacramentum Capital cada vez que es relevante\": propuesta sin aprobar.")],
    4: [s("¿Es verdad que muchos clientes viven en el exterior? ¿Hacen primeras reuniones por videollamada?"), POWER],
  },
};

/** Notes that apply on every page */
export const SITE_REVIEW: ReviewNote[] = [
  p("Los nombres nuevos de las páginas en el menú y en el footer (\"Residencia e instalación\", \"Campos y chacras\", \"Family offices\"…) son propuestas sin aprobar."),
  s("Footer: \"Asesoría estratégica\" lleva a la página de Family office y \"Banca de Inversión Boutique\" se cambió por \"Sacramentum Capital\". ¿Está bien?"),
  s("Datos para Google (invisibles): idiomas de atención = español e inglés. ¿Y alemán? Zona de trabajo = solo Uruguay. ¿También Argentina y Paraguay?"),
  d("Datos para Google (invisibles): mail ines@sacramentumcapital.com y teléfono +598 95 532 533 como contacto público de Advisors, aunque el mail sea del dominio de Capital. ¿Confirmás?"),
];

/** Notes per page (Google description and copy that is not one block) */
export const PAGE_REVIEW: Partial<Record<PageId, ReviewNote[]>> = {
  home: [
    p("Descripción en Google: \"Asesoramiento independiente… coordinado de punta a punta desde Montevideo\". \"Independiente\" depende de la relación con Capital, que está pendiente."),
  ],
  "why-uruguay": [
    d("Descripción en Google: \"igualdad de trato al inversor extranjero\". ¿Lo nombramos en Google?"),
    r("Tecnología: el titular \"El ecosistema tecnológico exportador de Uruguay\" es nuevo, y la traducción al español de tu texto es nuestra (falta que la revise Chiara). El botón aprobado de la etapa 1 se cambió por \"Explore oportunidades tecnológicas\"."),
  ],
  services: [
    p("Descripción en Google: ya usa \"Residencia e instalación\" en vez de Soft Landing (propuesta sin aprobar)."),
    s("Los botones \"Ver más\" de Inteligencia de mercado y Asesoría estratégica llevan a la página de Family office. ¿Esos servicios son solo para family offices o para cualquier cliente?"),
  ],
  contact: [
    s("Bloque \"Con quién va a hablar: asesores senior, desde la primera conversación\": ¿la primera conversación es siempre con vos o con Pablo?"),
    s("En ese bloque aparecen vos y Pablo. ¿Pablo atiende consultas de Advisors, o tendrías que aparecer solo vos?"),
    EQUAL_RIGHTS,
    FEES,
    r("Descripción en Google: \"respondemos en 1–2 días hábiles\" y temas reordenados. ¿Te sirve?"),
  ],
  privacy: [
    d("La política de privacidad es un borrador nuestro. ¿La revisa el abogado de la firma? ¿Corresponde la Ley 18.331 y el RGPD para visitantes de la UE?"),
    d("Responsable: ¿cuál es la razón social exacta (S.A., S.R.L.), el RUT y el domicilio completo? ¿Qué mail usamos para pedidos de privacidad?"),
    d("¿Usan los datos del formulario solo para responder (sin CRM, sin newsletter, sin compartirlos con Capital)? ¿Confirmás que no los venden ni los usan para publicidad?"),
    d("Proveedores: Formspree y Vercel, con datos en EE. UU. ¿Hay otro proveedor (mail, CRM) que reciba las consultas?"),
    d("¿Tienen un plazo para guardar las consultas? ¿Las borran en algún momento?"),
  ],
  "residency": [
    d("Solo en inglés: \"Can Americans move to Uruguay?\" (entran como turistas y tramitan la residencia; siguen tributando en EE. UU. por su renta mundial) y \"Does residency lead to citizenship?\" (exige años de residencia efectiva). ¿Es correcto?"),
    d("Solo en alemán: la Deutsche Schule Montevideo \"es de las escuelas alemanas más antiguas del exterior\" y \"tiene sedes en Pocitos y Carrasco\". ¿Es correcto? ¿Recomiendan elegir el colegio antes que la vivienda?"),
    d("Solo en alemán: los alemanes entran como turistas y tramitan la residencia en Uruguay; se advierte sobre el impuesto de salida alemán. ¿Lo dejamos?"),
  ],
  "real-estate": [
    d("Solo en alemán: una pregunta compara Punta del Este, José Ignacio y Piriápolis (\"precios de entrada más bajos\"). En alemán falta lo de vivienda promovida."),
  ],
  "sacramentum-capital": [
    d("La presentación dice \"Confidential\" en cada página. ¿Podemos publicar los nombres de clientes y montos (UTE, CAF, CVU, Baluma, INFRAM, Circuito Vial, Prex, NGS…) y las cifras USD 1.6B+, 30 mandatos, 12 sectores, 15 años?"),
    d("Hotel Enjoy / Baluma, USD 180M, 2026: ¿ya cerró? ¿Se puede publicar, sabiendo que Pablo preside el directorio de Baluma?"),
    d("¿Están cerradas todas las transacciones del gráfico? Los años y sectores de algunas burbujas salen del gráfico, no del texto: ¿están bien?"),
    s("\"Es la firma de banca de inversión de Sacramentum\" y el reparto entre Advisors y Capital: ¿Capital es parte de Sacramentum o una firma aparte? ¿Informan siempre el vínculo?"),
    d("¿Capital se fundó en 2010? Si es así, en 2026 son 16 años, no 15."),
    d("Bio de Pablo: \"una década en la banca de inversión internacional\" es nuestra (la presentación dice \"dos décadas\"). ¿JPMorgan como Executive Director o \"VP en J.P. Morgan y Lehman\" como dice la etapa 1? ¿Se pueden publicar sus cargos en directorios?"),
    s("\"La firma nunca comercializó sus servicios: cada mandato llegó por referencias\": ¿lo publicamos, en una web que justamente promociona a la firma?"),
    d("¿Podemos nombrar al MEF, UTE y CVU como clientes institucionales?"),
    r("Cambiamos el \"5 mandatos\" de mercado de capitales por una lista de servicios, y en M&A falta \"retail\". ¿Está bien?"),
    s("El formulario es el de Advisors: ¿quién responde las consultas de Capital?"),
  ],
};

/** Notes that only apply to one language version */
export const LOCALE_REVIEW: Partial<Record<Locale, ReviewNote[]>> = {
  de: [
    p("En alemán ya se aplicaron propuestas sin aprobar: el eyebrow de la portada, \"el mercado más estable\" en vez de \"haven\", \"Auswandern und Niederlassung\" en vez de Soft Landing, la corrección de \"proyects law\" y el botón de Inmobiliario sin \"listings\"."),
    d("La bio de Pablo en alemán sigue diciendo \"VP en J.P. Morgan y Lehman Brothers\", que está en duda."),
    d("La nota de residencia en alemán habla de la exención de 5 años, y el régimen cambió el 1/1/2026. ¿La actualizamos en los tres idiomas? ¿Dejamos \"Offshore-Strukturen\" en la nota de inversión?"),
    r("Todo el alemán es traducción nuestra: falta la revisión de una persona nativa."),
  ],
};
