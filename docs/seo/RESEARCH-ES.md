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

### Prompts 8–12

_Pendientes._
