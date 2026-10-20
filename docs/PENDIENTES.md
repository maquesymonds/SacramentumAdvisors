# Etapa 2 · Pendientes

Lista viva. Se actualiza en cada sesión.

## De la clienta

- [ ] **Guía descargable de Tecnología (PDF)** — va debajo del texto de Technology.
- [ ] Guía del inversor (PDF) — Invest y antes de Contacto (propuesta).
- [ ] Documento de Farmland (PDF) — Agricultura (propuesta).
- [ ] **Texto de Technology en español** (y alemán, o lo traducimos y lo revisa un nativo). Hoy solo está en inglés: [`content/technology-en.md`](content/technology-en.md).
- [x] Segunda sección nueva = **Sacramentum Capital** — fuente: `~/Desktop/Sacramentum_Capital_Presentation.pdf` (ver [`content/sacramentum-capital.md`](content/sacramentum-capital.md)).
- [ ] **Sacramentum Capital: qué transacciones y cifras se pueden publicar** (el PDF dice "Confidential"; una operación sigue en cierre).
- [ ] Sacramentum Capital: cómo explicar la relación Capital ↔ Advisors (independencia). Borrador en la página: "boutique de banca de inversión de nuestra red; informamos el vínculo" — confirmar.
- [ ] **Bio de Pablo Mautone:** la web dice "VP en J.P. Morgan y Lehman Brothers"; la presentación de Capital dice "Bozano Simonsen y JPMorgan (Executive Director)". ¿Cuál es la correcta?
- [ ] **Hacer privado el repo de GitHub** (hoy es público: se ven el research y los docs).
- [ ] Video "Live in Uruguay" (sección Why Uruguay).
- [ ] Verificar los 9 datos de [`seo/RESEARCH-SUMMARY.md`](seo/RESEARCH-SUMMARY.md) §5 (régimen fiscal 2026, convenio con Alemania, quién habla alemán, cómo cobran, etc.).

## Detectado en el paso 4 (para los pasos 6–7)

- [ ] Títulos y descripciones de Google siguen en inglés en `/es/` (se traducen en el paso 7).
- [ ] El home tiene **8 títulos H1**; debe tener uno solo (paso 7).
- [ ] `/de/` usa el texto en inglés y está en `noindex`: se activa en Google cuando exista el alemán (`INDEXED_LOCALES` en `lib/i18n.ts`).
- [ ] Textos sueltos con solo EN/ES dentro de componentes (`locale === "es" ? … : …`) → muestran inglés en `/de/`.
- [ ] QA: revisar que al cambiar de idioma en el home no quede un título del idioma anterior (visto una vez en una prueba encadenada, no reproducido en sesión limpia).

## Recomendado (SEO/GEO)

- [ ] Link al LinkedIn de la empresa en el footer → sumarlo a `sameAs` en `lib/schema.ts`.
- [ ] Imagen Open Graph por idioma (hoy se omite).
- [ ] Títulos de noticias largos (editoriales, desde el panel).

## Para la QA (paso 10)

- [ ] Probar el guardado del panel de admin con un almacenamiento Blob separado (o con cuidado en producción tras el merge).
- [ ] Confirmar si la versión de prueba de Vercel usa el mismo Blob que producción (variable `BLOB_READ_WRITE_TOKEN` en Preview).

## Para después de la arquitectura

- [ ] **Efecto de las slides de Technology** (imagen y texto que se desplazan): la clienta pide una presentación más directa. Revisar con `web-design-motion`.

## Pasos de la etapa 2

1. [x] Research de keywords ES / EN / DE → `docs/seo/`
2. [x] Arquitectura (Architecture Checkpoint) → `docs/ARCHITECTURE.md` (aprobada con Revision 1)
3. [ ] Verificación de datos con la clienta
4. [x] Base técnica de idiomas (`/es/ /en/ /de/`, selector, sitemap, hreflang) — commit 5df0cd5
5. [x] Páginas y secciones nuevas (+ edición en el panel) — borradores para aprobar
6. [x] Copy: documento para Inés + alemán (borrador, falta revisión nativa y aprobación de Inés)
7. [x] SEO/GEO técnico
8. [ ] Conversión (CTAs, guías, botón fijo, confianza)
9. [ ] Medición (GA4, Search Console, GTM, Business Profile)
10. [ ] QA y publicación (PR a `main`)
