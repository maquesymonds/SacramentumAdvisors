# Etapa 2 · Registro de cambios

Qué se cambió en la web, en palabras simples, en orden. Se actualiza en cada paso.
Todo vive en la rama `etapa-2`; la web en vivo (`main`) no se toca hasta el Pull Request final.

**Ver en local:** `cd ~/Projects/SacramentumAdvisors && npx next dev -p 3100` → http://localhost:3100

---

## Paso 1 · Research de keywords (19–20.10.2026)

- Research en español, inglés y alemán con SE Ranking + pruebas en ChatGPT y Gemini.
- Resultado: `docs/seo/RESEARCH-ES.md`, `RESEARCH-EN.md`, `RESEARCH-DE.md`, `RESEARCH-SUMMARY.md` y los datos en `docs/seo/data/`.
- No toca la web.

## Paso 2 · Arquitectura (20.10.2026)

- Mapa del sitio en tres idiomas, aprobado con cambios: `docs/ARCHITECTURE.md` (ver "Revision 1").
- Decisiones: el menú no cambia; las páginas existentes se quedan; URLs en el idioma de cada visitante;
  entrada automática según el idioma del navegador; Inés edita inglés y español desde el panel (alemán no).
- No toca la web.

## Paso 4 · Base técnica de idiomas (20.10.2026) — commit `5df0cd5`

**Lo que ve el visitante**
- Cada idioma tiene su URL: `/es/…`, `/en/…`, `/de/…`, con la palabra clave en el idioma
  (`/es/por-que-uruguay`, `/en/why-uruguay`, `/de/warum-uruguay`).
- Al entrar a `sacramentumadvisors.com` la web elige el idioma del navegador (español → `/es`, alemán → `/de`, otro → `/en`).
- Selector **EN · ES · DE** en el menú (escritorio y celular): lleva a la misma página en el otro idioma y recuerda la elección.
- Menú: Por qué Uruguay · Servicios · Noticias · Blog · Contacto ("Inicio" quitado: el logo lleva al inicio).
- Botón "Reservar consulta" sin mayúsculas: blanco con letra azul sobre fondos oscuros, azul con letra blanca sobre fondos claros.
- Las direcciones viejas (`/invest`, `/services`, `/contact`, `/news/…`) redirigen solas a las nuevas.
- Página 404 en los tres idiomas.

**Lo que ve Google**
- La versión en español ahora llega en español desde el servidor (antes Google solo veía inglés).
- Cada página declara su versión en el otro idioma (hreflang) y su URL oficial (canonical).
- Nuevos `sitemap.xml` y `robots.txt`, generados automáticamente.
- Menú y footer son enlaces reales (antes eran botones que Google no seguía).
- La página de Contacto ahora se puede indexar (antes estaba oculta).
- El alemán usa por ahora el texto en inglés y está oculto para Google hasta tener su texto propio.

**Panel de admin**
- Sigue funcionando igual. Lo que Inés edita ahora se lee desde el servidor: lo ve Google y se actualiza al guardar.

---

## Paso 5 · Páginas nuevas (20.10.2026) — terminado

**10 páginas nuevas, en inglés y español** (el alemán usa el inglés hasta el paso 6). Todas son **borradores para que Inés apruebe**.

| Página | Español | Inglés |
|---|---|---|
| Inmobiliario | `/es/inmobiliario-punta-del-este-montevideo` | `/en/uruguay-real-estate` |
| Campos y chacras | `/es/campos-y-chacras-en-uruguay` | `/en/uruguay-farmland` |
| Tecnología (texto nuevo de la clienta) | `/es/tecnologia` | `/en/technology` |
| Proyectos especiales | `/es/proyectos-especiales` | `/en/special-projects` |
| Residencia | `/es/residencia-en-uruguay` | `/en/uruguay-residency` |
| Residencia fiscal | `/es/residencia-fiscal-en-uruguay` | `/en/uruguay-tax-residency` |
| Pasaporte uruguayo | `/es/pasaporte-uruguayo` | `/en/uruguay-citizenship-second-passport` |
| Retiro (solo EN/DE; en ES lleva a Residencia) | — | `/en/retire-in-uruguay` |
| Family office | `/es/family-office-patrimonio` | `/en/family-office-uruguay` |
| Sacramentum Capital | `/es/sacramentum-capital` | `/en/sacramentum-capital` |

**Cómo es cada página:** encabezado como el de "Por qué Uruguay", foto, datos clave (solo verificados), secciones,
pasos, preguntas frecuentes (en acordeón y con datos estructurados para Google), páginas relacionadas y botón de consulta.

**Contenido**
- Sectores: parten del texto ya aprobado de la etapa 1, con secciones nuevas basadas en el research.
- Tecnología: el texto nuevo de la clienta, sin cambios en inglés; el español es traducción para revisar.
- Sin cifras no verificadas: nada del régimen fiscal 2026 ni números de la presentación confidencial de Capital.
- La bio de Pablo usa solo lo que coincide entre la web y la presentación (J.P. Morgan) hasta que se confirme.

**Cambios en páginas existentes**
- Por qué Uruguay: cada sector tiene un enlace "Ver más" a su página. El bloque de Tecnología muestra el texto nuevo de la clienta.
- Servicios: cada tarjeta tiene "Ver más" (Soft Landing → Residencia, Banca de inversión → Sacramentum Capital,
  Asesoría estratégica → Family office).
- Footer: nueva columna "Uruguay" con las páginas nuevas; los enlaces de servicios llevan a sus páginas.
- El menú no cambió.

**Para Google:** el sitemap pasó de 16 a 47 direcciones; cada página tiene título, descripción, URL oficial,
hreflang, migas de pan y preguntas frecuentes estructuradas. URLs viejas o de otro idioma redirigen a la correcta.

**Panel de admin**
- Nuevo grupo **"Sectores y servicios"** con las 10 páginas, editables en inglés y español: titular, intro, secciones,
  viñetas, hoja de ruta, preguntas frecuentes, cierre y los textos que muestra Google. El alemán no se edita desde el panel.
- "Página Invertir" pasa a llamarse "Página Por qué Uruguay"; el bloque de Tecnología ahora tiene 2 bloques (el texto nuevo).
- **El panel guarda solo lo que Inés cambia** (antes guardaba una copia de todo, y esa copia tapaba cualquier texto
  que se cambiara después en el código).
- Lo guardado antes del 20.10.2026 para el bloque de Tecnología se ignora, así se ve el texto nuevo de la clienta.
- ⚠️ El guardado no se puede probar en local. No guardar desde el panel de la versión de prueba de Vercel si comparte
  el almacenamiento con la web en vivo: se probará en la QA (paso 10).

---

## Paso 6 · Copy (20.10.2026) — en curso

**Documento para Inés:** `docs/COPY-PARA-INES.md` — cambios de palabras propuestos en las páginas existentes (con el porqué),
las páginas nuevas para revisar y las 9 preguntas a confirmar. Los cambios de palabras **no se aplicaron**: esperan su aprobación.

**Alemán (borrador, pendiente de revisión nativa):**
- Todos los textos de la web (`data/translations-de.ts`): inicio, Por qué Uruguay, Servicios, equipo, noticias, contacto, footer.
- Las 10 páginas nuevas en alemán, con las búsquedas alemanas del research. Retiro existe en alemán ("Als Rentner nach Uruguay").
  La página de impuestos en alemán cubre el impuesto de salida (Wegzugsbesteuerung, erweitert beschränkte Steuerpflicht) sin cifras.
- Las 8 noticias traducidas al alemán.
- `/de/` sigue oculto para Google hasta la revisión.

**Siguen en inglés:** los títulos de Google de Por qué Uruguay, Servicios y Contacto (se resuelven en el paso 7) y los títulos
de las noticias, que el panel guarda en un solo idioma (decisión pendiente).

---

## Paso 7 · SEO/GEO técnico (20.10.2026) — terminado

Aplicado con la skill `web-seo-geo` y medido sobre el HTML real que se entrega.

- **Títulos y descripciones de Google en los tres idiomas para todas las páginas**, medidos en píxeles (título ≤ 600 px,
  descripción ≤ 960 px). Antes: el home decía solo "Sacramentum Advisors" y las demás páginas tenían títulos en inglés
  también en español; los títulos de las páginas nuevas se cortaban. Ahora: 47 títulos/descripciones dentro del límite,
  con la palabra clave primero. Archivo: `lib/page-meta.ts` (páginas existentes) y `data/topics/` (páginas nuevas).
- Los artículos llevan su título sin la marca (para que entre completo) y su resumen se recorta solo si viene largo del panel.
- **Un solo H1 por página.** El home tenía 8; los títulos de sección pasaron a H2 (sin cambio visual).
- **Servicios ahora tiene su contenido en el HTML.** Antes se dibujaba solo en el navegador y Google la veía vacía
  (0 palabras → ~500).
- **Datos estructurados:** la empresa (Organization, solo con datos publicados: nombre, logo, email, teléfono, Montevideo),
  el sitio por idioma, migas de pan en todas las páginas menos el home, y preguntas frecuentes en las páginas nuevas.
- **Redes sociales:** el título y la descripción al compartir son siempre los mismos que los de Google, por idioma.
  Sin imagen de vista previa hasta tener una real (se omite en vez de inventarla).

**Pendiente / recomendado**
- Agregar el **link al LinkedIn de la empresa** en el footer (hoy no existe) — es la fuente con la que ChatGPT describe a
  Sacramentum; con el link se puede sumar a los datos estructurados.
- Una **imagen para compartir** (Open Graph) por idioma.
- Algunos **títulos de noticias** son largos para Google (ej. "Governance Premium: …"); los edita Inés desde el panel.

---

## Paso 8 · Conversión (20.10.2026) — terminado (con pendientes de la clienta)

- **Botón fijo "Reservar consulta"** en el menú de todas las páginas (escritorio) y dentro del menú en celular.
  El texto es el del footer y se edita desde el panel. Probado en 1024 y 1440 px.
- **Sección de confianza en Contacto**, justo antes del formulario: Inés y Pablo con foto y cargo, igualdad de derechos
  para inversores extranjeros y confidencialidad / cómo trabajamos. Editable desde el panel (Página de Contacto → Confianza).
- **Línea de inversión mínima:** preparada; aparece sola cuando se complete el monto en el panel.
- **Página de gracias** (`/es/gracias`, `/en/thank-you`, `/de/danke`): el formulario lleva ahí al enviarse, para medir
  la conversión en Analytics. Fuera de Google. Probado con un envío simulado (no se mandó ningún email real).
- **Política de privacidad** (`/es/privacidad`, `/en/privacy`, `/de/datenschutz`) en los tres idiomas — **borrador
  para revisión legal**. Describe lo que la web hace hoy (formulario por Formspree, alojamiento en Vercel, cookie de idioma).
- Footer: "Política de privacidad" lleva a la página; "Términos de servicio" (no llevaba a ningún lado) quedó oculto
  hasta que exista el aviso legal.
- Botones de contacto marcados para medir clics (`data-cta`) en el paso 9.

**Pendiente de la clienta:** monto de inversión mínima · las 3 guías en PDF · casos anónimos para la sección de confianza ·
razón social y RUT para el aviso legal · revisión legal de la política de privacidad.
