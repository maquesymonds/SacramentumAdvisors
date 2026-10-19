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

### Prompts 5–12

_Pendientes._
