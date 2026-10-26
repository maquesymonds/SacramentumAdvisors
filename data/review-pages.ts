/* ─────────────────────────────────────────────────────────────────────────────
   Review notes outside the topic pages (audit of 21.10.2026, see
   data/review-flags.ts for the rules): what is not visible as one block
   (Google descriptions, structured data, page-wide copy), shown in the
   floating ReviewPanel. FAQs carry no flags: reviewed one by one with Maque
   (25.10.2026).
   Remove an entry once Inés has confirmed it.
   ─────────────────────────────────────────────────────────────────────────── */

import type { Locale, PageId } from "@/lib/i18n";
import type { ReviewNote } from "@/lib/review";

const s = (pregunta: string): ReviewNote => ({ kind: "servicio",  pregunta });
const d = (pregunta: string): ReviewNote => ({ kind: "dato",      pregunta });
const p = (pregunta: string): ReviewNote => ({ kind: "propuesta", pregunta });
const r = (pregunta: string): ReviewNote => ({ kind: "redaccion", pregunta });

/** Notes that apply on every page */
export const SITE_REVIEW: ReviewNote[] = [
  p("Nombres nuevos en toda la web, para que coincidan con lo que la gente busca en Google: \"Residencia e instalación\" (antes Soft Landing), \"Inteligencia de mercado\", \"Inmobiliario\" y \"Agro y forestal\". ¿Te parecen bien?"),
  p("Todos los botones dicen \"Reservar consulta\", igual que el del menú. Y \"Contacto\" salió del menú porque ese botón ya lleva ahí (sigue en el footer)."),
  s("En Servicios y en el footer, \"Banca de Inversión Boutique\" ahora se llama \"Sacramentum Capital\" y lleva a su página. ¿Está bien?"),
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
    r("Tecnología: el titular \"Uruguay, un ecosistema tecnológico que exporta al mundo\" es nuevo, y la traducción al español de tu texto es nuestra (falta que la revise Chiara). El botón aprobado de la etapa 1 se cambió por \"Explore oportunidades tecnológicas\"."),
    d("Corregimos \"97% de su matriz energética\" por \"97% de su electricidad\": el 97% renovable es de la electricidad, no de toda la energía."),
  ],
  services: [
    p("Descripción en Google: ya usa \"Residencia e instalación\" en vez de Soft Landing (propuesta sin aprobar)."),
    p("Las tarjetas van en el mismo orden en los tres idiomas, con Sacramentum Capital al final."),
  ],
  contact: [
    r("Descripción en Google: \"respondemos en 1 a 2 días hábiles\" y temas reordenados. ¿Te sirve?"),
    p("Las opciones de \"Área de interés\" del formulario ahora son las mismas áreas de la web (antes: Adquisición estratégica de activos, Activos de estilo de vida, Situaciones especiales…)."),
    d("Inversión mínima, en \"Trabajar con nosotros\": \"Acompañamos inversiones a partir de USD ___\". ¿Cuál es el monto? Mientras falte, la línea no se ve en la web en vivo. Si preferís no poner una cifra, la sacamos o la cambiamos por otra frase."),
  ],
  privacy: [
    d("La política de privacidad es un borrador nuestro. ¿La revisa el abogado de la firma? ¿Corresponde la Ley 18.331 y el RGPD para visitantes de la UE?"),
    d("Responsable: ¿cuál es la razón social exacta (S.A., S.R.L.), el RUT y el domicilio completo? ¿Qué mail usamos para pedidos de privacidad?"),
    d("¿Usan los datos del formulario solo para responder (sin CRM, sin newsletter, sin compartirlos con Capital)? ¿Confirmás que no los venden ni los usan para publicidad?"),
    d("Proveedores: Formspree y Vercel, con datos en EE. UU. ¿Hay otro proveedor (mail, CRM) que reciba las consultas?"),
    d("¿Tienen un plazo para guardar las consultas? ¿Las borran en algún momento?"),
  ],
  "real-estate": [
    d("Solo en alemán: una pregunta compara Punta del Este, José Ignacio y Piriápolis (\"precios de entrada más bajos\"). En alemán falta lo de vivienda promovida."),
  ],
  "sacramentum-capital": [
    d("La presentación dice \"Confidential\" en cada página. ¿Podemos publicar los nombres de clientes y montos (UTE, CAF, CVU, Baluma, INFRAM, Circuito Vial, Prex, NGS…) y las cifras USD 1.6B+, 30 mandatos, 12 sectores?"),
    d("Hotel Enjoy / Baluma, USD 180M, 2026: ¿ya cerró? ¿Se puede publicar, sabiendo que Pablo preside el directorio de Baluma?"),
    d("¿Están cerradas todas las transacciones del gráfico? Los años y sectores de algunas burbujas salen del gráfico, no del texto: ¿están bien?"),
    s("\"Es la firma de banca de inversión de Sacramentum\" y el reparto entre Advisors y Capital: ¿Capital es parte de Sacramentum o una firma aparte? ¿Informan siempre el vínculo?"),
    d("¿Podemos nombrar al MEF, UTE y CVU como clientes institucionales?"),
    r("Cambiamos el \"5 mandatos\" de mercado de capitales por una lista de servicios, y en M&A falta \"retail\". ¿Está bien?"),
    s("El formulario es el de Advisors: ¿quién responde las consultas de Capital?"),
  ],
};

/** Notes that only apply to one language version */
export const LOCALE_REVIEW: Partial<Record<Locale, ReviewNote[]>> = {
  de: [
    p("En alemán ya se aplicaron propuestas sin aprobar: el eyebrow de la portada, \"el mercado más estable\" en vez de \"haven\", \"Aufenthalt und Niederlassung\" en vez de Soft Landing, la corrección de \"proyects law\" y el botón de Inmobiliario sin \"listings\"."),
    d("La nota de residencia en alemán habla de la exención de 5 años, y el régimen cambió el 1/1/2026. ¿La actualizamos en los tres idiomas? ¿Dejamos \"Offshore-Strukturen\" en la nota de inversión?"),
    r("Todo el alemán es traducción nuestra: falta la revisión de una persona nativa."),
  ],
};
