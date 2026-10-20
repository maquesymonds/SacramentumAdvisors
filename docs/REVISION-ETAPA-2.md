# Etapa 2 · Lista para revisar (sí / no)

Cada punto es un cambio visible o una decisión. Ver en local: `cd ~/Projects/SacramentumAdvisors && npx next dev -p 3100`.
Responder por número: "3 sí, 7 no, 12 cambiar…".

## A. Menú y navegación

1. **Selector de idioma EN · ES · DE** (reemplaza el botón "ES"). Lleva a la misma página en el otro idioma. → cualquier página
2. **Entrada automática por idioma del navegador** al entrar a sacramentumadvisors.com (español → /es, alemán → /de, otro → /en).
3. **Botón fijo "Reservar consulta"** en el menú (escritorio) y dentro del menú en celular.
4. **"Inicio" quitado del menú** (el logo lleva al inicio). ¿También quitarlo del footer?
5. **Footer: nueva columna "Uruguay"** con las páginas nuevas (Residencia, Residencia fiscal, Pasaporte, Inmobiliario, Campos, Tecnología, Family office).
6. **Footer: los enlaces de Servicios** ahora llevan a sus páginas (Soft Landing → Residencia, Banca de inversión → Sacramentum Capital, Asesoría estratégica → Family office).
7. **Footer: "Términos de servicio" oculto** (no llevaba a ningún lado) y "Política de privacidad" lleva a su página.

## B. Direcciones (URLs)

8. **Cada página con URL en su idioma:** `/es/por-que-uruguay`, `/en/why-uruguay`, `/de/warum-uruguay`, etc.
9. **Las direcciones viejas redirigen** (`/invest`, `/services`, `/contact`, `/news/...`).

## C. Páginas existentes

10. **Por qué Uruguay:** cada uno de los 4 sectores tiene un enlace "Ver más" a su página. → http://localhost:3100/es/por-que-uruguay
11. **Por qué Uruguay → Tecnología:** muestra el texto nuevo de la clienta (en lugar de los 3 pilares viejos).
12. **Servicios:** cada tarjeta tiene "Ver más" a su página. → http://localhost:3100/es/servicios
13. **Contacto: sección de confianza** antes del formulario (Inés y Pablo, igualdad de derechos, confidencialidad). → http://localhost:3100/es/contacto
14. **Contacto: el formulario lleva a una página de "Gracias"** al enviarse (antes mostraba el mensaje en la misma página).
15. **Home: los títulos de sección pasaron de H1 a H2** (invisible: solo cambia para Google).

## D. Páginas nuevas (borradores para Inés)

16. Inmobiliario → http://localhost:3100/es/inmobiliario-punta-del-este-montevideo
17. Campos y chacras → http://localhost:3100/es/campos-y-chacras-en-uruguay
18. Tecnología → http://localhost:3100/es/tecnologia
19. Proyectos especiales → http://localhost:3100/es/proyectos-especiales
20. Residencia → http://localhost:3100/es/residencia-en-uruguay
21. Residencia fiscal → http://localhost:3100/es/residencia-fiscal-en-uruguay
22. Pasaporte uruguayo → http://localhost:3100/es/pasaporte-uruguayo
23. Retiro (solo inglés y alemán) → http://localhost:3100/en/retire-in-uruguay
24. Family office → http://localhost:3100/es/family-office-patrimonio
25. Sacramentum Capital (sin cifras ni clientes) → http://localhost:3100/es/sacramentum-capital
26. **Diseño de estas páginas:** encabezado, foto, datos clave, secciones, hoja de ruta, preguntas frecuentes, relacionadas y botón.
27. Página de Gracias → http://localhost:3100/es/gracias
28. Política de privacidad (borrador legal) → http://localhost:3100/es/privacidad

## E. Alemán

29. **Toda la web en alemán** (`/de/`), oculta para Google hasta revisión nativa. → http://localhost:3100/de

## F. Panel de admin

30. **Nuevo grupo "Sectores y servicios"** para editar las páginas nuevas (EN/ES). → http://localhost:3100/admin
31. **Nueva sección "Confianza"** en Página de Contacto (incluye el campo de inversión mínima).
32. **"Página Invertir" ahora se llama "Página Por qué Uruguay"**, y Tecnología tiene 2 bloques.
33. **El panel guarda solo lo que se cambia** (invisible para Inés; evita que textos viejos tapen los nuevos).

## G. Invisible (Google e IAs)

34. Títulos y descripciones de Google en los tres idiomas, medidos para que no se corten.
35. `sitemap.xml`, `robots.txt`, etiquetas de idioma (hreflang) y URL oficial por página.
36. Datos estructurados: empresa, migas de pan, preguntas frecuentes.
37. Servicios ahora tiene su contenido visible para Google (antes llegaba vacía).
38. Menú y footer como enlaces reales (antes eran botones que Google no seguía).
39. Contacto ahora se puede indexar en Google (antes estaba oculta).

## H. Documentos (no tocan la web)

40. Research de keywords ES/EN/DE → `docs/seo/`
41. Arquitectura → `docs/ARCHITECTURE.md`
42. Propuesta de copy para Inés → `docs/COPY-PARA-INES.md`
