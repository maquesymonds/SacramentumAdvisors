# Research de keywords · Español

Etapa 2 de Sacramentum Advisors. Base para el mapa de keywords (`PROJECT-INTAKE-TEMPLATE.md` §14 del Web System)
y para los cambios de copy que hay que explicarle a Inés.

Dos fuentes, que se complementan:

- **SE Ranking** dice *cuánto* se busca algo en Google (estimación de la herramienta, no medición).
- **Test en IAs** (ChatGPT y Gemini) dice *cómo lo pregunta la gente, qué le responden y a quién citan* — el GEO.

---

## 1. SE Ranking (19.10.2026)

Bases: Argentina (AR), España (ES), Uruguay (UY). 254 keywords medidas en dos tandas.
Datos crudos: [`data/serank-es-volumes.csv`](data/serank-es-volumes.csv),
[`data/serank-es2-volumes.csv`](data/serank-es2-volumes.csv), [`data/serank-es-related.csv`](data/serank-es-related.csv).

**Conclusión: en español la demanda en Google es chica y fragmentada.** ~160 de 254 keywords vuelven sin datos
(por debajo del umbral de la herramienta, no necesariamente cero). La base AR está incompleta para el long tail.

| Clúster | Keywords con volumen (búsquedas/mes) | Lectura |
|---|---|---|
| Real estate Punta del Este | inmobiliaria punta del este (AR 480) · casas en punta del este (AR 320) · casas en venta punta del este (AR 260) | Mayor volumen, intención de portal inmobiliario |
| Campo y chacras | campos en venta (AR 1.500, mayormente campos argentinos) · chacras en venta (AR 480 · UY 480) · campos en venta en uruguay (UY 390 · AR 90) · campos/chacras en uruguay (ES 40–50) | La gente dice **chacra** y **campo**, no "inversión agropecuaria" |
| Residencia / mudanza | residencia permanente uruguay (UY 390) · trabajar en uruguay (AR 480) · migraciones uruguay (AR 320) · uruguay vs paraguay (AR 320) · residencia en uruguay (AR 110) · ciudadanía uruguaya (AR 110) · residencia fiscal uruguay (≈140) · cambiar residencia fiscal (ES 170) · segunda residencia (ES 590) · vivir en uruguay siendo español (ES 50) | Lo más afín a Sacramentum |
| Zonas francas | zona franca uruguay (AR 140 · UY 320) · zonas francas en uruguay (AR 140) · zonamerica (UY 22.200, navegacional) | Encaja con Tecnología / incentivos |
| Invertir | invertir en uruguay (UY 390 · ES 20) · donde invertir dolares (AR 260) · invertir en ladrillos (AR 40 · ES 70) | Fuera de Uruguay casi no se busca así |

**Sin datos** (no se escriben así en Google): "plan b uruguay", "salir/irse de argentina", "proteger patrimonio",
"inversión forestal uruguay", "asesor de inversiones uruguay", "soft landing", "situaciones especiales", "banca de inversión uruguay",
"venture capital uruguay", "family office uruguay".

---

## 2. Test en IAs

Método: chat temporal / sin memoria, un prompt por chat, misma pregunta en ChatGPT y Gemini.

### Prompts 1–4 (invertir, campo, forestación, Punta del Este)

**Sacramentum no aparece en ninguna respuesta.**

**A quién citan (la competencia real en GEO):**

| Prompt | Firmas recomendadas | Fuentes citadas |
|---|---|---|
| 1 · Invertir USD 500k | Nobilis, Gletir, Puente, Nantas, Paullier (gestión patrimonial / corredores de bolsa) | BCU (Usuario Financiero), DGI |
| 2 · Chacras o campos | The Land Group · CUIR (Cámara Uruguaya de Inmobiliarias Rurales) | MGAP / DIEA, El País Rurales, IMPO, DGI |
| 3 · Forestación | AF, Bosques del Uruguay, FMS, Cambium, Pike & Co., Consorcio Forestal, Southern Forestry Partners, AFB Management | **Uruguay XXI — "Directorio de servicios para el inversor"**, BCU, CARE |
| 4 · Punta del Este | Guyer & Regules, Estudio Mecol, escribanías locales, Valmore Management, Cuadrado Real Estate | Caetano ("Guía 2026"), DGI, Argenprop |

**Qué tipo de contenido citan:** páginas con **números concretos y fuente oficial** (precio por hectárea MGAP USD 4.178,
arrendamiento USD 133/ha/año, ITP 2 %, costos de compra 7,5–9 %), **procesos paso a paso** (cómo compra un extranjero),
**tablas comparativas** (campo productivo vs chacra, alquiler anual vs turístico) y **listas de riesgos**.

**Vocabulario que usan las IAs** (candidatos para títulos, H2 y copy):

- *Posicionamiento:* asesoramiento **independiente**, sin conflicto de interés, que no cobra comisión de venta,
  "del lado del comprador", gestión patrimonial / wealth management, diversificar, patrimonio en dólares, refugio de valor.
- *País:* seguridad jurídica, igualdad de condiciones para extranjeros, no se requiere residencia para comprar.
- *Campo:* chacra (recreativa) vs campo productivo, arrendamiento, renta, índice CONEAT, Instituto Nacional de Colonización,
  estudio de títulos, escribano, ITP, costos de transacción.
- *Forestación:* fideicomiso forestal, llave en mano, eucalipto y pino, celulosa, due diligence, horizonte 10–20 años, liquidez.
- *Real estate:* vivienda promovida (Ley 18.795), alquiler anual vs turístico, gastos comunes, rentabilidad neta, IRNR, en pozo.

**Preguntas de seguimiento que hacen las IAs** (material directo para FAQs y para el formulario de contacto):
¿qué querés lograr: renta, crecimiento o preservar? · ¿en qué plazo necesitás el dinero? ·
¿chacra de descanso o campo de escala comercial? · ¿arrendar a un productor o explotarlo? · ¿cuánto querés invertir?

### Hallazgos accionables (1–4)

1. **El hueco de posicionamiento es "asesor independiente".** Las cuatro respuestas terminan recomendando un asesor
   independiente sin comisión de venta, y ninguna nombra a uno que cubra campo + real estate + residencia a la vez.
   Es exactamente la propuesta de Sacramentum — conviene decirlo con esas palabras.
2. **Pedir el alta en el Directorio de Uruguay XXI.** Es la fuente que ChatGPT usa para recomendar prestadores.
   Acción fuera de la web, de bajo costo y alto impacto en GEO.
3. **Las páginas de sector tienen que traer datos citables:** precio/ha y arrendamiento con fuente MGAP, costos de compra
   desglosados, paso a paso para extranjeros, comparativas. Hoy `/invest` no tiene este nivel.
4. **Usar "chacra" y "campo"** además de "agricultural land" / "agricultura y forestación".
5. **Dato a verificar antes de usar:** ChatGPT menciona que desde el 1/1/2026 Uruguay grava ciertas rentas del exterior de
   residentes fiscales. Si es así, cambia el mensaje de residencia fiscal — confirmar con la clienta.

### Vocabulario de las IAs medido en SE Ranking

61 términos sacados de las respuestas 1–4, medidos en AR / ES / UY. Datos: [`data/serank-es-ai-vocab.csv`](data/serank-es-ai-vocab.csv).

| Con volumen en Google | AR | ES | UY | Uso |
|---|---|---|---|---|
| wealth management | 260 | 760 | – | Keyword secundaria de Servicios |
| vivienda promovida | – | – | 390 | Keyword de la página Real Estate |
| instituto nacional de colonizacion | – | 260 | 10 | H2/FAQ en Campo |
| asesor inmobiliario independiente · asesor independiente | – | 50 · 30 | – | Posicionamiento, bajo volumen |
| alquiler anual punta del este | – | 20 | 50 | Sección en Real Estate |

**55 de 61 sin datos.** Conclusión: el vocabulario de las IAs (CONEAT, fideicomiso forestal, estudio de títulos, ITP,
gastos comunes, asesoramiento independiente…) **no se busca en Google, pero es lo que la IA usa para armar la respuesta**.
Va en el *cuerpo* de las páginas (para que la IA nos cite), no en títulos ni URLs.

Regla que sale de esto:
- **Títulos, URLs, H1** → keywords con volumen de SE Ranking (chacras, campos en venta, residencia, Punta del Este, vivienda promovida).
- **Cuerpo, H2, FAQs** → vocabulario y preguntas de las IAs, con datos concretos y fuente.

### Prompt 5 · "Soy argentino y quiero armar un plan B en Uruguay"

**Sacramentum no aparece.** Ninguna IA recomienda una firma: mandan a fuentes oficiales (gub.uy / Migración, DGI, ARCA,
BROU, Ventanilla Única de Inversiones, IMPO) y a perfiles genéricos: "contador binacional primero, **no una inmobiliaria**",
después abogado migratorio y "asesor patrimonial independiente". **El lugar está vacío.**

**Estructura que usan (sirve como estructura de página):**
- ChatGPT: *"Tener residencia uruguaya, tener dinero en Uruguay y ser residente fiscal uruguayo son tres cosas diferentes."*
  Cuatro pilares — **residencia legal · banca y patrimonio · base física · planificación fiscal Argentina–Uruguay** — y una
  **hoja de ruta de 90 días**. Es casi el índice de una página "Plan B / Mudarse a Uruguay".
- Gemini: pasos 1–4 (documentación apostillada → residencia Mercosur → cuenta bancaria → costo de vida).

**Vocabulario:** residencia Mercosur (permanente / temporaria), cédula uruguaya, apostillar, BPS, origen de fondos,
cuenta para no residentes, costo de vida, 183 días, intereses vitales o económicos, inversión inmobiliaria + presencia física,
ARCA / perder la residencia fiscal argentina, nuevos residentes fiscales 2026.

**Medido en SE Ranking** ([`data/serank-es-ai5.csv`](data/serank-es-ai5.csv)) — 40 términos, 30 sin datos:

| Con volumen | AR | ES | UY | Uso |
|---|---|---|---|---|
| residencia mercosur uruguay | 30 | 10 | 140 | Keyword secundaria de Residencia |
| alquilar en montevideo | – | 110 | – | Sección "base física" |
| argentinos en uruguay | 50 | – | – | Keyword secundaria |
| bancos en uruguay | – | 50 | 20 | Sección banca |
| costo de vida / cuánto cuesta vivir en uruguay | 10 | 20 | – | FAQ |
| plan b | 9.900 | 18.100 | – | ⚠️ **No sirve**: es la píldora anticonceptiva. "Plan B" funciona como *mensaje*, no como keyword |

**Hallazgos accionables:**
1. **Página "Residencia y plan B"** con la estructura de 4 pilares + hoja de ruta. Es el formato que las IAs ya están
   armando solas; si la página existe con esa forma y datos, es lo que van a citar.
2. **La frase "residencia legal ≠ residencia fiscal ≠ tener dinero en Uruguay"** es la explicación que más ayuda
   al lector y la que más se repite. Va en el copy (para Inés).
3. **Ninguna IA nombra un servicio integral** (residencia + banca + inversión + fiscalidad). Sacramentum puede ocupar
   exactamente ese lugar: el que coordina a contador, escribano, banco y migración.
4. Confirmado por segunda vez: **cambio de 2026 en el régimen de nuevos residentes fiscales** (cita IMPO). Verificar con la clienta.

### Prompts 6 y 7 · Residencia fiscal (argentino) · Mudarse con la familia (español)

**Sacramentum no aparece.**

**Las IAs se contradicen sobre el régimen fiscal 2026 — esta es la oportunidad más grande hasta ahora.**
- Gemini (6 y 7) repite el régimen viejo: *tax holiday* de 11 años al 0 % sobre rentas de capital del exterior, después 7 % o 12 %.
- ChatGPT (6 y 7) dice que **desde el 1/1/2026** Uruguay grava además rentas inmobiliarias y ganancias patrimoniales del exterior,
  y que hay un **nuevo régimen de impatriados** (no residente fiscal en los 2 años previos + inversión inmobiliaria > 12.500.000 UI,
  o aporte ≥ 625.000 UI/año a fondos de inversión productiva, o > 183 días cada año).
- Una página clara, actualizada a 2026 y con fuentes (DGI, IMPO) es lo que las IAs necesitan y hoy no encuentran.
  **Hay que verificar los datos con la clienta / un contador antes de publicar.**

**Webs que citan las IAs (competencia de contenido en GEO):** blog de **Uruguay Sotheby's Realty**
("Residencia fiscal en Uruguay: lo que todo extranjero debería saber"), **liveinuruguay.uy**, EY Uruguay, Andersen Uruguay,
Global Tax, Brañas, Biz Latin Hub, Murblz, Holafly, Nómadas Fiscales, PPV. Además de gub.uy (Migración, DGI), IMPO, ARCA,
Agencia Tributaria y BOE (convenio España–Uruguay).
→ Una **inmobiliaria** consigue que la IA la cite con un artículo de blog sobre residencia fiscal. Sacramentum tiene blog: puede hacer lo mismo, mejor.

**Estructura de contenido que arman las IAs:**
- Residencia fiscal: tabla de **vías** (183 días · inversión inmobiliaria 3,5 M UI + 60 días · 15 M UI · actividad económica ·
  intereses vitales) → trámite (Formulario 5202 ante DGI) → beneficios → **qué pasa con ARCA / Hacienda** → "¿cuándo te conviene?"
  (tabla por situación).
- Mudanza familiar: **residencia legal · residencia fiscal · seguridad social** son tres cosas distintas → documentación
  apostillada (checklist) → dónde vivir (Carrasco, Pocitos, Ciudad de la Costa, Punta del Este) → impuestos por tipo de ingreso →
  salud y colegios → hoja de ruta por etapas.
- Dato a respetar en ES: **España no accede a la residencia Mercosur**; va por residencia permanente ordinaria.

**Medido en SE Ranking** ([`data/serank-es-ai67.csv`](data/serank-es-ai67.csv)) — 40 términos, 25 sin datos:

| Con volumen | AR | ES | UY | Uso |
|---|---|---|---|---|
| irpf uruguay | – | 30 | 390 | FAQ en Residencia fiscal |
| vivir en uruguay siendo español | – | 50 | – | Keyword de la versión para españoles |
| impuestos (en) uruguay | – | 20 + 20 | – | Sección impuestos |
| convenio doble imposición españa uruguay / argentina uruguay | – | 20 / 10 | – | H2 en Residencia fiscal |
| emigrar a uruguay (desde españa) | 20 | 10 + 10 | 10 | Keyword secundaria |
| residencia fiscal uruguay beneficios | 10 | – | – | H2 |
| tax holiday · impatriados · formulario 5202 · certificado de residencia fiscal | – | – | – | Sin datos: solo para el cuerpo del texto |

**Hallazgos accionables:**
1. **Artículo / página "Residencia fiscal en Uruguay 2026"**, con el régimen nuevo explicado y las fuentes. Es el tema donde
   las IAs están peor informadas — quien publique lo correcto primero es quien van a citar.
2. **Dos versiones del mismo tema según origen:** argentinos (Mercosur, ARCA) y españoles (residencia ordinaria, AEAT,
   convenio España–Uruguay). Las IAs ya responden distinto; la web también debería.
3. La frase "residencia legal ≠ residencia fiscal" aparece en las cuatro respuestas: se confirma como mensaje central para Inés.

### Prompt 10 · "¿Cuáles son las mejores firmas de asesoramiento para inversores extranjeros en Uruguay?"

**Sacramentum no aparece** — en la pregunta que más directamente describe lo que vende.

| IA | Firmas que nombra | De dónde lo saca |
|---|---|---|
| ChatGPT | Guyer & Regules, Ferrere, Posadas Posadas & Vecino, Andersen, PwC, KPMG, Hughes & Hughes | Rankings **IFLR1000 2026** + páginas de servicios de cada firma |
| Gemini | Expat Services Uruguay, Nagy, Estudio Tesouro, Estudio RVA, CAE, BECA Advisors, Exante, Gletir | Webs propias con páginas de servicio por tema |

Dos tipos de competidor: **estudios jurídicos/Big Four** (ChatGPT, se apoya en rankings) y **boutiques de relocation/inversión**
con páginas de servicio claras (Gemini). Sacramentum compite con el segundo grupo — Expat Services Uruguay, Nagy, Tesouro, RVA son
los referentes directos en GEO.

ChatGPT repite el criterio de "asesor **realmente independiente**": que declare comisiones, coordine la fiscalidad con el país de
origen, haga due diligence y tenga honorarios transparentes. Es una checklist que Sacramentum puede contestar punto por punto en la web.

### Prompt 12 · "¿Qué es Sacramentum Advisors y qué hace?"

**Las dos IAs conocen a Sacramentum**, pero lo que saben no viene principalmente de la web:

| IA | Fuentes | Cómo la describe |
|---|---|---|
| ChatGPT | **Solo LinkedIn** (empresa + perfiles) | "trusted local advisor"; 5 áreas: inversores extranjeros, real estate, relocation/soft landing, market entry, inteligencia de mercado. Ejemplo propio: "una familia argentina que busca un Plan B" |
| Gemini | LinkedIn (post de Inés), **AHK Uruguay (Cámara de Comercio Uruguayo-Alemana, "nuevos socios")**, sacramentumadvisors.com | Soft landing, inteligencia de mercado, asesoría estratégica, banca de inversión vía Sacramentum Capital, COMAP. Equipo: Inés Bonicelli, Pablo Mautone, Chiara Toscani |

**A verificar con la clienta:** Gemini nombra a Pablo Mautone como Director (¿es correcto?). ChatGPT lista "Real estate" como servicio propio.

---

## 3. Diagnóstico técnico de la web en vivo (19.10.2026)

Lo que ve un buscador o una IA al leer sacramentumadvisors.com:

| Chequeo | Resultado | Consecuencia |
|---|---|---|
| Idioma servido | Solo **inglés** (`lang="en"`). El español aparece únicamente al tocar "ES" (en el navegador) | **Google y las IAs nunca leen la versión en español.** Explica por qué ChatGPT describe a Sacramentum desde LinkedIn |
| URLs por idioma / hreflang | No existen | No hay forma de posicionar en español ni en alemán |
| `sitemap.xml` · `robots.txt` | 404 · 404 | |
| Canonical | No hay | |
| `<title>` | "Sacramentum Advisors" (igual en todas) | No dice qué hace ni dónde |
| H1 | Duplicado en el home | |

**Conclusión:** la arquitectura `/es/ /en/ /de/` de la propuesta no es una mejora opcional — sin ella, todo el trabajo de keywords en
español y alemán es invisible.

---

## 4. Síntesis · Español

### 4.1 Qué aprendimos

1. **Google en español trae poco volumen**, concentrado en: campos y chacras, residencia (legal y fiscal), real estate en Punta del Este,
   zonas francas. Casi todo lo demás está por debajo del umbral de SE Ranking.
2. **Las IAs son el canal más importante en español.** La gente pregunta en lenguaje natural ("soy argentino y quiero un plan B"),
   las respuestas son largas, citan fuentes y recomiendan firmas. Sacramentum no aparece en ninguna de las 9 respuestas temáticas.
3. **El lugar que dejan vacío las IAs es exactamente el de Sacramentum:** todas terminan recomendando "un asesor independiente que
   coordine contador, escribano, banco y migración, y que no cobre comisión de venta" — y no nombran a nadie que lo haga.
4. **Las IAs citan páginas con datos concretos, fuentes oficiales, pasos y tablas.** Y en el tema fiscal 2026 se contradicen entre ellas:
   quien publique lo correcto y actualizado se vuelve la referencia.
5. **Las palabras de Google y las de las IAs no son las mismas:**
   títulos/URLs → palabras de Google (SE Ranking); cuerpo/FAQs → vocabulario y datos de las IAs.

### 4.2 Mapa de páginas en español (borrador · formato §14)

`PROVISIONAL` hasta cruzar con inglés y alemán (las páginas son las mismas en los tres idiomas; cambia la keyword).
Volúmenes = búsquedas/mes AR / ES / UY (estimación SE Ranking).

| URL propuesta | Keyword principal | Volumen | Intención | Tipo | Por qué existe |
|---|---|---|---|---|---|
| `/es/` | invertir en uruguay · asesoría para inversores en uruguay | – / 20 / 390 | comercial | home | Marca + entrada |
| `/es/por-que-uruguay/` | por qué invertir en uruguay | sin datos | informacional | hub | Funcional (ya existe como `/invest`) + GEO |
| `/es/residencia-en-uruguay/` | residencia en uruguay · residencia permanente uruguay | 110 / 20 / – · – / – / 390 | comercial | servicio | + residencia mercosur (140 UY), migraciones uruguay (320 AR), argentinos en uruguay (50 AR), vivir en uruguay siendo español (50 ES). Estructura "plan B": 4 pilares + hoja de ruta |
| `/es/residencia-fiscal-en-uruguay/` | residencia fiscal uruguay | 20 / 10 / 110 | comercial | servicio | + irpf uruguay (390 UY), cambiar residencia fiscal (170 ES), convenio doble imposición (30 ES). Régimen 2026 explicado con fuentes |
| `/es/campos-y-chacras-en-uruguay/` | campos en venta en uruguay · chacras en venta | 90 / 20 / 390 · 480 / 10 / 480 | comercial | sector | + campos en uruguay (50 ES), instituto nacional de colonización (260 ES). Incluye forestación (sin volumen propio) |
| `/es/real-estate-punta-del-este/` | casas en punta del este | 320 / 70 / – | comercial | sector | + inmobiliaria punta del este (480 AR, intención de portal), vivienda promovida (390 UY), alquiler anual punta del este (50 UY). ⚠️ Posicionar como asesor del comprador, no como portal |
| `/es/zonas-francas-e-incentivos/` | zona franca uruguay | 140 / 20 / 320 | comercial | sector | + zonas francas en uruguay (140 AR). Une incentivos fiscales + COMAP |
| `/es/tecnologia/` | — | sin datos | — | sector | Funcional: pedido de la clienta (propuesta) |
| `/es/sacramentum-capital/` | — | — | — | servicio | Funcional: marca, pedido de la clienta |
| `/es/servicios/` | asesoramiento a inversores extranjeros | sin datos | comercial | hub | Funcional |
| `/es/equipo/` | — | — | — | functional | Confianza (E-E-A-T) — lo que las IAs usan para describir la firma |
| `/es/preguntas-frecuentes/` | — | — | informacional | functional | GEO: respuestas citables |
| `/es/contacto/` | — | — | — | functional | Página obligatoria |

**Artículos de blog** (umbral del sistema: ≥ 100 búsquedas/mes, o razón GEO explícita — a aprobar):

| URL | Keyword | Volumen | Justificación |
|---|---|---|---|
| `/es/blog/uruguay-o-paraguay-residencia-fiscal/` | uruguay vs paraguay | 320 / 110 / 30 | Pasa el umbral |
| `/es/blog/residencia-fiscal-uruguay-2026/` | residencia fiscal uruguay 2026 | sin datos | **GEO**: las IAs se contradicen; oportunidad de ser la fuente |
| `/es/blog/plan-b-en-uruguay-para-argentinos/` | (plan b) | sin datos útil | **GEO**: prompt más natural de la audiencia AR; ninguna IA nombra firma |
| `/es/blog/como-comprar-un-campo-en-uruguay-siendo-extranjero/` | comprar campo en uruguay | 10 ES | **GEO**: las IAs arman exactamente este paso a paso |
| `/es/blog/cuanto-cuesta-vivir-en-uruguay/` | costo de vida en uruguay | 10 / 20 / – | **GEO** + FAQ |

### 4.3 Cambios de copy para Inés (español)

Inés escribió el copy de la primera etapa. Estos cambios no reescriben la web: cambian **palabras** por las que la gente realmente
usa en Google o con las que las IAs describen el servicio.

| Hoy | Propuesta | Por qué |
|---|---|---|
| Sector "Tierras Agrícolas" | **Campos y chacras** | "chacras en venta" 480 AR + 480 UY, "campos en venta en uruguay" 390 UY. Nadie busca "tierras agrícolas" |
| Sector "Estancias y Propiedades Ecuestres" | Unificar dentro de **Campos y chacras** | "estancias en venta uruguay" 20 UY; mejor una página fuerte que dos débiles |
| Sector "Residencial de Lujo" | **Real estate en Punta del Este y Montevideo** | La búsqueda es por lugar ("casas en punta del este" 320 AR), no por "lujo" |
| Servicio "Soft Landing Partnerships" | **Residencia e instalación en Uruguay** (soft landing como subtítulo) | "soft landing uruguay" = 0; "residencia en uruguay", "residencia permanente", "migraciones uruguay" sí tienen volumen |
| Servicio "Market Intelligence" (en la versión ES) | **Inteligencia de mercado** | Está en inglés dentro de la versión española |
| Eyebrow del hero "Adquisición de Activos Estratégicos" | **Inversión y residencia en Uruguay** | Es lo que se busca y lo que las IAs entienden que hace la firma |
| Hero — agregar | "**Asesoramiento independiente** para invertir y vivir en Uruguay" | Es el criterio que las IAs repiten en todas las respuestas para recomendar a alguien |
| "una propuesta de **tax holiday** para los residentes fiscales" | Revisar a la luz del **régimen 2026** | ChatGPT cita (IMPO/DGI) que cambió el 1/1/2026. Si se mantiene la frase vieja, la web queda desactualizada justo donde las IAs buscan precisión |
| "Activos de Estilo de Vida" | Mantener como concepto, sin usarlo en títulos | Sin búsquedas; está bien como mensaje de marca |
| Mensaje nuevo para Residencia | "**Residencia legal, residencia fiscal y tener patrimonio en Uruguay son tres cosas distintas** — le ayudamos con las tres" | La frase que aparece en las 4 respuestas de residencia |

Queda igual: "usted" (sirve para AR formal y ES), el tono boutique, "No administramos activos. Custodiamos legados.", la sección de equipo.

### 4.4 Acciones fuera de la web (GEO)

1. **Alta en el Directorio de prestadores de servicios para el inversor de Uruguay XXI** — fuente que ChatGPT usa para recomendar firmas.
2. **LinkedIn de la empresa al día y con las mismas palabras que la web** — hoy es la fuente principal con la que ChatGPT describe a Sacramentum.
3. **Ficha en AHK Uruguay (Cámara Uruguayo-Alemana)** — ya existe y Gemini la cita; aprovecharla para la versión alemana.
4. **Medición base:** repetir los prompts 1–12 cada 2–3 meses después del lanzamiento y registrar si Sacramentum aparece.

### 4.5 Pendiente de la clienta

- Confirmar el **régimen fiscal 2026** (nuevos residentes / impatriados) con un contador antes de publicar nada sobre tax holiday.
- Confirmar si **Pablo Mautone** es parte del equipo y si **real estate** se ofrece como servicio propio (las IAs lo afirman).
- Prompts 8, 9 y 11 quedaron sin probar; no cambian el mapa, se pueden correr más adelante.
