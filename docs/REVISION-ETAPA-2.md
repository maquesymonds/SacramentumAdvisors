# Etapa 2 · Checklist de revisión

Cómo usarla: abrí cada link, y cuando lo revisaste cambiá `[ ]` por `[x]`.
Al lado escribí **sí / no / cambiar: …**. Lo que sea "no" lo saco, con sus enlaces.

Ver en local (si no abre): `cd ~/Projects/SacramentumAdvisors && npx next dev -p 3100`
En cada página, el selector **EN · ES · DE** arriba a la derecha cambia el idioma.

---

## 1. Tecnología (texto de la clienta)

- [ ] **Página Tecnología en inglés**: el texto exacto que aprobó la clienta → http://localhost:3100/en/technology
- [ ] **Página Tecnología en español**: traducción mía, falta que la revise Chiara → http://localhost:3100/es/tecnologia
- [ ] **Por qué Uruguay → bloque Tecnología**: el texto nuevo en 2 bloques reemplaza los 3 pilares viejos (bajá hasta Tecnología) → http://localhost:3100/es/por-que-uruguay
- [ ] Efecto slide: **no está hecho**, queda para más adelante

## 2. Sacramentum Capital

- [ ] **Página Sacramentum Capital**: sacada del PDF, sin cifras, clientes ni montos → http://localhost:3100/es/sacramentum-capital
- [ ] **Bio de Pablo**: puse solo "J.P. Morgan" porque la web y el PDF no coinciden → misma página
- [ ] **Footer**: "Banca de inversión" lleva a esta página → al final de cualquier página

## 3. Cambios en páginas que ya existían

- [ ] **Menú sin "Inicio"** (el logo lleva al inicio). ¿Lo saco también del footer?
- [ ] **Botón "Reservar consulta"**: blanco sobre fondo oscuro, azul sobre fondo claro, sin mayúsculas → http://localhost:3100/es
- [ ] **Selector EN · ES · DE**: reemplaza el botón "ES"
- [ ] **Contacto: bloque de confianza** antes del formulario (Inés y Pablo, igualdad de derechos, confidencialidad) → http://localhost:3100/es/contacto
- [ ] **Página de gracias** después de enviar el formulario → http://localhost:3100/es/gracias
- [ ] **Footer**: "Términos de servicio" oculto (no llevaba a nada) y "Política de privacidad" lleva a su página
- [ ] **Política de privacidad**: borrador mío, la tiene que revisar un abogado → http://localhost:3100/es/privacidad

## 4. Alemán

- [ ] **Web completa en alemán**: traducción mía, oculta para Google hasta que la revise un nativo → http://localhost:3100/de

## 5. Panel de admin

Link: http://localhost:3100/admin

- [ ] **Grupo nuevo "Sectores y servicios"**: se usa para editar las páginas nuevas
- [ ] **Contacto → sección nueva "Confianza"**: incluye el campo de inversión mínima, vacío por ahora
- [ ] **"Página Invertir" pasa a llamarse "Página Por qué Uruguay"**; Tecnología tiene 2 bloques

## 6. Páginas nuevas de sectores (la clienta NO las pidió)

Las propuse por el research de keywords. El número es cuánta gente lo busca por mes (SE Ranking).
Mi opinión honesta está en la última columna. Ninguna está publicada, así que sacarlas no cuesta nada.

| ✓ | Página | Link | Búsquedas/mes | ¿Lo vende la clienta? | Mi recomendación |
|---|---|---|---|---|---|
| [ ] | Residencia | http://localhost:3100/es/residencia-en-uruguay | ES ~900 · EN ~1.000 · DE ~500 | Sí: es "Soft Landing" | **Dejar**. Es la más fácil de defender |
| [ ] | Inmobiliario | http://localhost:3100/es/inmobiliario-punta-del-este-montevideo | ES ~800 · EN ~2.400 · DE ~1.300 | Sí: es uno de sus 4 sectores en Por qué Uruguay | **Dejar** |
| [ ] | Campos y chacras | http://localhost:3100/es/campos-y-chacras-en-uruguay | ES ~1.400 · EN ~1.600 · DE casi nada | Sí: es uno de sus 4 sectores | **Dejar** (la propuesta incluye una guía de campos para descargar) |
| [ ] | Family office | http://localhost:3100/es/family-office-patrimonio | poco, pero ChatGPT ya recomienda a Sacramentum acá | Más o menos: es "Asesoría estratégica" | Opcional |
| [ ] | Proyectos especiales | http://localhost:3100/es/proyectos-especiales | nadie lo busca | Sí, pero es confidencial | **Sacar**: alcanza con el bloque que ya está en Por qué Uruguay |
| [ ] | Residencia fiscal | http://localhost:3100/es/residencia-fiscal-en-uruguay | ES ~700 · DE ~4.000 | No: es asesoría impositiva | **Sacar**: hay datos sin verificar y es riesgoso |
| [ ] | Pasaporte uruguayo | http://localhost:3100/es/pasaporte-uruguayo | ES ~600 · EN ~3.000 | No | **Sacar**: se puede mencionar en Residencia como pregunta frecuente |
| [ ] | Retirarse en Uruguay (solo EN/DE) | http://localhost:3100/en/retire-in-uruguay | EN ~1.700 · DE ~800 | No | **Sacar**: se puede mencionar en Residencia |

**Mi propuesta corta:** Tecnología y Capital (las pidió), más Residencia, Inmobiliario y Campos (las vende y la gente las busca). Son 5 páginas y todas se pueden defender ante la clienta. Las otras 4 las sacamos.

Desde dónde se llega a estas páginas (si sacás alguna, saco también estos enlaces):
- [ ] Footer: columna nueva "Uruguay"
- [ ] Por qué Uruguay: enlace "Ver más" en cada sector
- [ ] Servicios: enlace "Ver más" en cada tarjeta → http://localhost:3100/es/servicios
- [ ] Diseño de la plantilla: título, foto, datos, secciones, pasos, preguntas frecuentes, relacionadas y botón

## 7. Invisible (no hace falta revisarlo visualmente, solo para que sepas)

- URLs en cada idioma (`/es/por-que-uruguay`, `/en/why-uruguay`); las direcciones viejas redirigen solas
- La web entra en el idioma del navegador
- Títulos y descripciones de Google medidos para que no se corten; mapa del sitio → http://localhost:3100/sitemap.xml
- Datos estructurados para Google; títulos del inicio de H1 a H2; Servicios y Contacto ahora visibles para Google
- Docs: research en `docs/seo/`, arquitectura en `docs/ARCHITECTURE.md`, textos para Inés en `docs/COPY-PARA-INES.md`
