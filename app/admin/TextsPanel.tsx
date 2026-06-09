"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect, useCallback } from "react";
import { t } from "@/data/translations";

// ── Styles (shared with AdminClient) ─────────────────────────────────────────
const S = {
  label: {
    display: "block", fontSize: "0.7rem", fontWeight: 600,
    letterSpacing: "0.08em", textTransform: "uppercase" as const,
    color: "rgba(31,41,51,0.45)", marginBottom: "0.4rem",
  },
  input: {
    width: "100%", padding: "0.65rem 0.875rem",
    border: "1px solid rgba(31,41,51,0.14)", borderRadius: 8,
    fontSize: "0.9rem", color: "#111F30", backgroundColor: "white",
    outline: "none", boxSizing: "border-box" as const, fontFamily: "inherit",
  },
  textarea: {
    width: "100%", padding: "0.65rem 0.875rem",
    border: "1px solid rgba(31,41,51,0.14)", borderRadius: 8,
    fontSize: "0.875rem", color: "#111F30", backgroundColor: "white",
    outline: "none", resize: "vertical" as const,
    boxSizing: "border-box" as const, fontFamily: "inherit", lineHeight: 1.6,
  },
  btnPrimary: {
    padding: "0.6rem 1.4rem", backgroundColor: "#111F30", color: "white",
    border: "none", borderRadius: 50, fontSize: "0.78rem", fontWeight: 600,
    letterSpacing: "0.06em", textTransform: "uppercase" as const,
    cursor: "pointer", fontFamily: "inherit",
  },
};

// ── Section config ────────────────────────────────────────────────────────────
type FieldDef  = { key: string; label: string; multi?: boolean };
type ArrayDef  = { key: string; label: string; count: number; fields: FieldDef[] };
// A group is a nested object inside a section (one level deep), e.g. footer.nav
type GroupDef  = { key: string; label: string; fields?: FieldDef[]; arrays?: ArrayDef[] };
type SectionDef = { id: string; label: string; fields?: FieldDef[]; arrays?: ArrayDef[]; groups?: GroupDef[] };

const SECTIONS: SectionDef[] = [
  {
    id: "hero", label: "Hero / Portada",
    fields: [
      { key: "eyebrow",      label: "Eyebrow" },
      { key: "headline",     label: "Titular" },
      { key: "subheadline",  label: "Subtítulo", multi: true },
      { key: "cta",          label: "Botón principal" },
      { key: "ctaSecondary", label: "Botón secundario" },
      { key: "scrollLabel",  label: "Etiqueta de scroll" },
    ],
  },
  {
    id: "whySacramentum", label: "¿Por qué Sacramentum?",
    fields: [
      { key: "eyebrow",     label: "Eyebrow" },
      { key: "headline",    label: "Titular" },
      { key: "subheadline", label: "Subtítulo", multi: true },
    ],
    arrays: [{
      key: "cards", label: "Tarjetas", count: 3,
      fields: [
        { key: "roman",       label: "Número romano (I, II, III)" },
        { key: "eyebrow",     label: "Eyebrow" },
        { key: "title",       label: "Título" },
        { key: "description", label: "Descripción", multi: true },
      ],
    }],
  },
  {
    id: "whyUruguay", label: "Por qué Uruguay",
    fields: [
      { key: "eyebrow",     label: "Eyebrow" },
      { key: "headline",    label: "Titular" },
      { key: "subheadline", label: "Subtítulo", multi: true },
    ],
    arrays: [
      {
        key: "stats", label: "Estadísticas", count: 4,
        fields: [
          { key: "value", label: "Valor (ej. #1, 97%)" },
          { key: "label", label: "Descripción" },
        ],
      },
      {
        key: "cards", label: "Tarjetas", count: 6,
        fields: [
          { key: "title",       label: "Título" },
          { key: "description", label: "Descripción", multi: true },
        ],
      },
    ],
  },
  {
    id: "howWeSupport", label: "Cómo te acompañamos",
    fields: [
      { key: "eyebrow",     label: "Eyebrow" },
      { key: "headline",    label: "Titular" },
      { key: "subheadline", label: "Subtítulo", multi: true },
      { key: "cta",         label: "Texto del enlace" },
    ],
    arrays: [{
      key: "cards", label: "Servicios", count: 4,
      fields: [
        { key: "title",       label: "Título" },
        { key: "description", label: "Descripción", multi: true },
      ],
    }],
  },
  {
    id: "closingCta", label: "Cierre / CTA Final",
    fields: [
      { key: "eyebrow",  label: "Eyebrow" },
      { key: "headline", label: "Titular" },
      { key: "body",     label: "Cuerpo", multi: true },
      { key: "cta",      label: "Botón" },
    ],
  },
  {
    id: "contactPage", label: "Página de Contacto",
    fields: [
      { key: "eyebrow",      label: "Eyebrow" },
      { key: "headline",     label: "Titular" },
      { key: "intro",        label: "Introducción", multi: true },
      { key: "disclaimer",   label: "Aviso bajo el botón", multi: true },
      { key: "errorMessage", label: "Mensaje de error del formulario" },
    ],
    groups: [
      {
        key: "form", label: "Formulario",
        fields: [
          { key: "nameLabel",           label: "Nombre — etiqueta" },
          { key: "namePlaceholder",     label: "Nombre — placeholder" },
          { key: "emailLabel",          label: "Email — etiqueta" },
          { key: "emailPlaceholder",    label: "Email — placeholder" },
          { key: "phoneLabel",          label: "Teléfono — etiqueta" },
          { key: "phonePlaceholder",    label: "Teléfono — placeholder" },
          { key: "countryLabel",        label: "País — etiqueta" },
          { key: "countryPlaceholder",  label: "País — placeholder" },
          { key: "interestLabel",       label: "Interés — etiqueta" },
          { key: "interestPlaceholder", label: "Interés — placeholder" },
          { key: "messageLabel",        label: "Mensaje — etiqueta" },
          { key: "messagePlaceholder",  label: "Mensaje — placeholder" },
          { key: "submit",              label: "Botón enviar" },
          { key: "submitting",          label: "Botón enviando…" },
        ],
        arrays: [{
          key: "interestOptions", label: "Opciones de interés", count: 8,
          fields: [
            { key: "value", label: "Valor interno" },
            { key: "label", label: "Texto visible" },
          ],
        }],
      },
      {
        key: "success", label: "Mensaje de éxito",
        fields: [
          { key: "headline", label: "Titular" },
          { key: "body",     label: "Cuerpo", multi: true },
        ],
      },
      {
        key: "info", label: "Información de contacto",
        fields: [
          { key: "heading",   label: "Título" },
          { key: "location1", label: "Ubicación línea 1" },
          { key: "location2", label: "Ubicación línea 2" },
          { key: "email",     label: "Email" },
          { key: "phone",     label: "Teléfono" },
          { key: "trustNote", label: "Nota de confianza", multi: true },
        ],
      },
      {
        key: "secondary", label: "Nota secundaria ('Trabajar con nosotros')",
        fields: [
          { key: "eyebrow", label: "Eyebrow" },
          { key: "body",    label: "Cuerpo", multi: true },
        ],
      },
    ],
  },
  {
    id: "investRealEstate", label: "Real Estate",
    fields: [
      { key: "eyebrow",   label: "Eyebrow" },
      { key: "headline",  label: "Titular" },
      { key: "body",      label: "Cuerpo", multi: true },
      { key: "statValue", label: "Dato — valor (ej. 0%)" },
      { key: "statLabel", label: "Dato — descripción" },
      { key: "cta",       label: "Texto del enlace" },
    ],
  },
  {
    id: "investTechnology", label: "Tecnología",
    fields: [
      { key: "eyebrow",  label: "Eyebrow" },
      { key: "headline", label: "Titular" },
      { key: "intro",    label: "Introducción", multi: true },
      { key: "cta",      label: "Texto del enlace" },
    ],
    arrays: [{
      key: "pillars", label: "Pilares", count: 3,
      fields: [
        { key: "heading", label: "Subtítulo" },
        { key: "body",    label: "Descripción", multi: true },
      ],
    }],
  },
  {
    id: "investAgriculture", label: "Agropecuario",
    fields: [
      { key: "eyebrow",   label: "Eyebrow" },
      { key: "headline",  label: "Titular" },
      { key: "body",      label: "Cuerpo", multi: true },
      { key: "statValue", label: "Dato — valor (ej. 90%+)" },
      { key: "statLabel", label: "Dato — descripción" },
      { key: "keyFactorsLabel", label: "Título lista 'Factores Clave'" },
      { key: "highlightsLabel", label: "Título lista 'Aspectos del Mercado'" },
      { key: "legalNote", label: "Nota legal", multi: true },
      { key: "cta",       label: "Texto del enlace" },
    ],
    arrays: [
      {
        key: "keyDrivers", label: "Factores Clave", count: 4,
        fields: [{ key: "text", label: "Texto" }],
      },
      {
        key: "marketHighlights", label: "Aspectos del Mercado", count: 4,
        fields: [{ key: "text", label: "Texto" }],
      },
      {
        key: "downloads", label: "Descargas", count: 2,
        fields: [
          { key: "label", label: "Texto del botón" },
          { key: "href",  label: "Enlace (URL)" },
        ],
      },
    ],
  },
  {
    id: "investSpecial", label: "Proyectos Especiales",
    fields: [
      { key: "eyebrow",  label: "Eyebrow" },
      { key: "headline", label: "Titular" },
      { key: "intro",    label: "Introducción", multi: true },
      { key: "cta",      label: "Texto del enlace" },
    ],
    arrays: [{
      key: "pillars", label: "Pilares", count: 3,
      fields: [
        { key: "heading", label: "Subtítulo" },
        { key: "body",    label: "Descripción", multi: true },
      ],
    }],
  },
  {
    id: "investHero", label: "Portada",
    fields: [
      { key: "eyebrow",     label: "Eyebrow" },
      { key: "headline",    label: "Titular" },
      { key: "intro1",      label: "Introducción — párrafo 1", multi: true },
      { key: "intro2",      label: "Introducción — párrafo 2", multi: true },
      { key: "scrollLabel", label: "Etiqueta de scroll" },
    ],
  },
  {
    id: "nav", label: "Navegación (menú)",
    fields: [
      { key: "home",       label: "Inicio" },
      { key: "whyUruguay", label: "Por qué Uruguay / Invertir" },
      { key: "sectors",    label: "Servicios" },
      { key: "team",       label: "Equipo" },
      { key: "news",       label: "Noticias" },
      { key: "blog",       label: "Blog" },
      { key: "contact",    label: "Contacto" },
      { key: "langToggle", label: "Botón de idioma (EN/ES)" },
    ],
  },
  {
    id: "lifestyleAssets", label: "Lifestyle Assets",
    fields: [
      { key: "eyebrow",     label: "Eyebrow" },
      { key: "headline",    label: "Titular" },
      { key: "subheadline", label: "Subtítulo", multi: true },
    ],
  },
  {
    id: "trust", label: "Confianza / Trust",
    fields: [
      { key: "eyebrow",  label: "Eyebrow" },
      { key: "headline", label: "Titular" },
      { key: "body",     label: "Cuerpo", multi: true },
    ],
  },
  {
    id: "contact", label: "Contacto (CTA en home)",
    fields: [
      { key: "eyebrow",     label: "Eyebrow" },
      { key: "headline",    label: "Titular" },
      { key: "subheadline", label: "Subtítulo", multi: true },
      { key: "cta",         label: "Botón" },
    ],
  },
  {
    id: "team", label: "Equipo (títulos)",
    fields: [
      { key: "eyebrow",  label: "Eyebrow" },
      { key: "headline", label: "Titular" },
    ],
    groups: [{
      key: "advisory", label: "Advisory Board (títulos)",
      fields: [
        { key: "eyebrow",     label: "Eyebrow" },
        { key: "headline",    label: "Titular" },
        { key: "subheadline", label: "Subtítulo", multi: true },
      ],
    }],
  },
  {
    id: "news", label: "Noticias (títulos)",
    fields: [
      { key: "eyebrow",     label: "Eyebrow" },
      { key: "headline",    label: "Titular" },
      { key: "subtitle",    label: "Subtítulo", multi: true },
      { key: "viewAll",     label: "Texto 'Ver todos'" },
      { key: "readArticle", label: "Texto 'Visitar artículo'" },
      { key: "backLabel",   label: "Texto 'Volver a noticias'" },
    ],
  },
  {
    id: "blog", label: "Blog (textos de página)",
    fields: [
      { key: "eyebrow",      label: "Eyebrow" },
      { key: "headline",     label: "Titular" },
      { key: "subtitle",     label: "Subtítulo", multi: true },
      { key: "readLabel",    label: "Texto 'Leer post'" },
      { key: "empty",        label: "Mensaje sin posts" },
      { key: "backLabel",    label: "Texto 'Volver al blog'" },
      { key: "linkedinText", label: "Texto enlace LinkedIn" },
    ],
  },
  {
    id: "services", label: "Servicios (etiqueta)",
    fields: [
      { key: "step", label: "Palabra 'Paso' (antes del número)" },
    ],
  },
  {
    id: "footer", label: "Footer (pie de página)",
    fields: [
      { key: "cta", label: "Botón de consulta" },
    ],
    groups: [
      {
        key: "brand", label: "Marca",
        fields: [{ key: "tagline", label: "Tagline", multi: true }],
      },
      {
        key: "nav", label: "Columna 'Navegación'",
        fields: [{ key: "title", label: "Título de columna" }],
        arrays: [{
          key: "links", label: "Enlaces", count: 5,
          fields: [
            { key: "label", label: "Texto" },
            { key: "href",  label: "Destino (URL)" },
          ],
        }],
      },
      {
        key: "services", label: "Columna 'Servicios'",
        fields: [{ key: "title", label: "Título de columna" }],
        arrays: [{
          key: "links", label: "Enlaces", count: 4,
          fields: [
            { key: "label", label: "Texto" },
            { key: "href",  label: "Destino (URL)" },
          ],
        }],
      },
      {
        key: "contact", label: "Columna 'Contacto'",
        fields: [
          { key: "title",    label: "Título de columna" },
          { key: "location", label: "Ubicación" },
          { key: "email",    label: "Email" },
        ],
      },
      {
        key: "legal", label: "Legal",
        fields: [
          { key: "copyright", label: "Copyright" },
          { key: "privacy",   label: "Política de privacidad" },
          { key: "terms",     label: "Términos de servicio" },
        ],
      },
    ],
  },
];

// ── Sidebar grouping: sections grouped by the page they belong to ─────────────
const PAGES: { label: string; ids: string[] }[] = [
  { label: "Home", ids: ["hero", "whySacramentum", "whyUruguay", "howWeSupport", "lifestyleAssets", "trust", "contact", "closingCta", "team", "news"] },
  { label: "Página Invertir", ids: ["investHero", "investRealEstate", "investTechnology", "investAgriculture", "investSpecial"] },
  { label: "Página de Contacto", ids: ["contactPage"] },
  { label: "Blog", ids: ["blog"] },
  { label: "Servicios", ids: ["services"] },
  { label: "Global (menú + footer)", ids: ["nav", "footer"] },
];

const pageOfSection = (id: string): string =>
  PAGES.find(p => p.ids.includes(id))?.label ?? PAGES[0].label;

// ── Helpers ───────────────────────────────────────────────────────────────────
function deepMerge(base: Record<string, any>, over: Record<string, any>): Record<string, any> {
  const result = { ...base };
  for (const key in over) {
    const val = over[key];
    if (val == null) continue;
    if (Array.isArray(val) && Array.isArray(result[key])) {
      result[key] = (result[key] as any[]).map((item, i) => {
        const ov = val[i];
        if (!ov) return item;
        return typeof item === "object" ? deepMerge(item, ov) : ov;
      });
    } else if (typeof val === "object" && !Array.isArray(val) && typeof result[key] === "object") {
      result[key] = deepMerge(result[key], val);
    } else {
      result[key] = val;
    }
  }
  return result;
}

// Pick the configured fields + arrays out of a source object (one level).
function pick(src: any, fields: FieldDef[] = [], arrays: ArrayDef[] = []): Record<string, any> {
  const r: Record<string, any> = {};
  if (src == null) return r;
  for (const f of fields) {
    if (src[f.key] !== undefined) r[f.key] = src[f.key];
  }
  for (const arr of arrays) {
    const items = src[arr.key];
    if (Array.isArray(items)) {
      r[arr.key] = items.slice(0, arr.count).map((item: any) => {
        const o: Record<string, any> = {};
        for (const f of arr.fields) {
          if (item?.[f.key] !== undefined) o[f.key] = item[f.key];
        }
        return o;
      });
    }
  }
  return r;
}

function buildBase(locale: "en" | "es"): Record<string, any> {
  const trans = t(locale) as any;
  const result: Record<string, any> = {};
  for (const sec of SECTIONS) {
    const src = trans[sec.id];
    result[sec.id] = pick(src, sec.fields, sec.arrays);
    for (const g of sec.groups ?? []) {
      result[sec.id][g.key] = pick(src?.[g.key], g.fields, g.arrays);
    }
  }
  return result;
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function TextsPanel() {
  const [lang, setLang]       = useState<"en" | "es">("en");
  const [data, setData]       = useState<{ en: Record<string, any>; es: Record<string, any> }>({ en: {}, es: {} });
  const [loaded, setLoaded]   = useState(false);
  const [saving, setSaving]   = useState(false);
  const [saved, setSaved]     = useState(false);
  const [section, setSection] = useState(SECTIONS[0].id);
  const [openPage, setOpenPage] = useState<string>(pageOfSection(SECTIONS[0].id));

  useEffect(() => {
    const base = { en: buildBase("en"), es: buildBase("es") };
    fetch("/api/admin/translations")
      .then(r => r.json())
      .then(saved => {
        setData({
          en: deepMerge(base.en, (saved as any).en ?? {}),
          es: deepMerge(base.es, (saved as any).es ?? {}),
        });
        setLoaded(true);
      })
      .catch(() => { setData(base); setLoaded(true); });
  }, []);

  // groupKey = null → field lives directly on the section; otherwise it lives
  // inside the nested group object (e.g. footer.nav.title).
  const getValue = useCallback((sectionId: string, groupKey: string | null, key: string, arrIdx?: number, arrKey?: string): string => {
    const sec = data[lang]?.[sectionId];
    if (sec == null) return "";
    const base = groupKey ? sec[groupKey] : sec;
    if (base == null) return "";
    if (arrIdx !== undefined && arrKey) return base[key]?.[arrIdx]?.[arrKey] ?? "";
    return base[key] ?? "";
  }, [data, lang]);

  const setValue = useCallback((sectionId: string, groupKey: string | null, key: string, value: string, arrIdx?: number, arrKey?: string) => {
    setData(prev => {
      const langData = { ...(prev[lang] ?? {}) };
      const sec = { ...(langData[sectionId] ?? {}) };
      const target = groupKey ? { ...(sec[groupKey] ?? {}) } : sec;
      if (arrIdx !== undefined && arrKey) {
        const arr = [...(target[key] ?? [])];
        arr[arrIdx] = { ...(arr[arrIdx] ?? {}), [arrKey]: value };
        target[key] = arr;
      } else {
        target[key] = value;
      }
      if (groupKey) sec[groupKey] = target;
      langData[sectionId] = sec;
      return { ...prev, [lang]: langData };
    });
  }, [lang]);

  const save = async () => {
    setSaving(true);
    try {
      await fetch("/api/admin/translations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch {}
    setSaving(false);
  };

  if (!loaded) {
    return (
      <div style={{ textAlign: "center", paddingTop: "5rem", color: "rgba(31,41,51,0.3)", fontSize: "0.9rem" }}>
        Cargando textos...
      </div>
    );
  }

  const currentSection = SECTIONS.find(s => s.id === section)!;

  // ── Render helpers (groupKey = null → top level; otherwise nested group) ──
  const renderFields = (fields: FieldDef[], groupKey: string | null) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      {fields.map(field => (
        <div key={field.key}>
          <label style={S.label}>{field.label}</label>
          {field.multi ? (
            <textarea
              value={getValue(currentSection.id, groupKey, field.key)}
              onChange={e => setValue(currentSection.id, groupKey, field.key, e.target.value)}
              style={{ ...S.textarea, minHeight: 80 }}
            />
          ) : (
            <input
              value={getValue(currentSection.id, groupKey, field.key)}
              onChange={e => setValue(currentSection.id, groupKey, field.key, e.target.value)}
              style={S.input}
            />
          )}
        </div>
      ))}
    </div>
  );

  const renderArrays = (arrays: ArrayDef[], groupKey: string | null) => (
    <>
      {arrays.map(arr => (
        <div key={arr.key} style={{ marginTop: "1.5rem" }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(31,41,51,0.35)", marginBottom: "1.25rem" }}>
            {arr.label}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {Array.from({ length: arr.count }).map((_, idx) => (
              <div key={idx} style={{ backgroundColor: "rgba(31,41,51,0.02)", border: "1px solid rgba(31,41,51,0.07)", borderRadius: 12, padding: "1.25rem" }}>
                <p style={{ fontSize: "0.68rem", fontWeight: 700, color: "#CCA87C", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>
                  {arr.label.replace(/s$/, "")} {idx + 1}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {arr.fields.map(field => (
                    <div key={field.key}>
                      <label style={S.label}>{field.label}</label>
                      {field.multi ? (
                        <textarea
                          value={getValue(currentSection.id, groupKey, arr.key, idx, field.key)}
                          onChange={e => setValue(currentSection.id, groupKey, arr.key, e.target.value, idx, field.key)}
                          style={{ ...S.textarea, minHeight: 72 }}
                        />
                      ) : (
                        <input
                          value={getValue(currentSection.id, groupKey, arr.key, idx, field.key)}
                          onChange={e => setValue(currentSection.id, groupKey, arr.key, e.target.value, idx, field.key)}
                          style={S.input}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );

  return (
    <div>

      {/* ── Toast ── */}
      {saved && (
        <div style={{
          position:      "fixed",
          bottom:        "2rem",
          left:          "50%",
          transform:     "translateX(-50%)",
          backgroundColor: "#111F30",
          color:         "white",
          padding:       "0.875rem 1.75rem",
          borderRadius:  50,
          fontSize:      "0.85rem",
          fontWeight:    500,
          letterSpacing: "0.02em",
          boxShadow:     "0 8px 32px rgba(0,0,0,0.22)",
          zIndex:        9999,
          display:       "flex",
          alignItems:    "center",
          gap:           "0.6rem",
          pointerEvents: "none",
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="7" stroke="#CCA87C" strokeWidth="1.5"/>
            <path d="M5 8l2 2 4-4" stroke="#CCA87C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Guardado correctamente
        </div>
      )}

      {/* Top bar: save + lang toggle */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "2rem", gap: "1rem" }}>

        {/* Language tabs */}
        <div style={{ display: "flex", gap: "0.4rem", backgroundColor: "rgba(31,41,51,0.06)", padding: "0.25rem", borderRadius: 10 }}>
          {(["en", "es"] as const).map(l => (
            <button key={l} onClick={() => setLang(l)}
              style={{
                padding: "0.45rem 1.1rem",
                backgroundColor: lang === l ? "white" : "transparent",
                border: "none", borderRadius: 8, cursor: "pointer",
                fontSize: "0.8rem", fontWeight: lang === l ? 600 : 400,
                color: lang === l ? "#111F30" : "rgba(31,41,51,0.45)",
                boxShadow: lang === l ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
                fontFamily: "inherit", transition: "all 0.15s ease",
              }}>
              {l === "en" ? "Inglés" : "Español"}
            </button>
          ))}
        </div>

        <button onClick={save} disabled={saving}
          style={{ ...S.btnPrimary, opacity: saving ? 0.6 : 1 }}>
          {saving ? "Guardando..." : saved ? "✓ Guardado" : "Guardar cambios"}
        </button>
      </div>

      <div style={{ display: "flex", gap: "1.5rem" }}>

        {/* Section sidebar */}
        <div style={{ width: 200, flexShrink: 0 }}>
          <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(31,41,51,0.3)", marginBottom: "0.75rem", paddingLeft: "0.875rem" }}>
            Páginas
          </p>
          {PAGES.map(page => {
            const isOpen   = openPage === page.label;
            const sections = page.ids
              .map(id => SECTIONS.find(s => s.id === id))
              .filter((s): s is SectionDef => Boolean(s));
            return (
              <div key={page.label} style={{ marginBottom: "0.3rem" }}>
                {/* Page header (toggles the group) */}
                <button
                  onClick={() => setOpenPage(isOpen ? "" : page.label)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    width: "100%", textAlign: "left",
                    padding: "0.6rem 0.875rem", border: "none", borderRadius: 8,
                    backgroundColor: "transparent",
                    color: "#111F30", fontSize: "0.82rem", fontWeight: 600,
                    cursor: "pointer", fontFamily: "inherit",
                    transition: "all 0.15s ease",
                  }}>
                  {page.label}
                  <span style={{ fontSize: "0.65rem", color: "rgba(31,41,51,0.4)", transform: isOpen ? "rotate(90deg)" : "none", transition: "transform 0.15s ease" }}>▸</span>
                </button>

                {/* Sections inside the page */}
                {isOpen && (
                  <div style={{ marginTop: "0.15rem", marginBottom: "0.4rem" }}>
                    {sections.map(s => (
                      <button key={s.id} onClick={() => setSection(s.id)}
                        style={{
                          display: "block", width: "100%", textAlign: "left",
                          padding: "0.5rem 0.875rem 0.5rem 1.5rem", border: "none", borderRadius: 8,
                          backgroundColor: section === s.id ? "rgba(204,168,124,0.12)" : "transparent",
                          color: section === s.id ? "#CCA87C" : "rgba(31,41,51,0.55)",
                          fontSize: "0.82rem", fontWeight: section === s.id ? 600 : 400,
                          cursor: "pointer", fontFamily: "inherit",
                          marginBottom: "0.15rem", transition: "all 0.15s ease",
                        }}>
                        {s.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Fields */}
        <div style={{ flex: 1, backgroundColor: "white", borderRadius: 16, padding: "2rem", border: "1px solid rgba(31,41,51,0.07)" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#111F30", marginBottom: "1.75rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(31,41,51,0.07)" }}>
            {currentSection.label}
            <span style={{ marginLeft: "0.75rem", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: lang === "en" ? "#2980B9" : "#27AE60", backgroundColor: lang === "en" ? "rgba(41,128,185,0.1)" : "rgba(39,174,96,0.1)", padding: "0.2rem 0.5rem", borderRadius: 4 }}>
              {lang === "en" ? "Inglés" : "Español"}
            </span>
          </h3>

          {/* Top-level fields */}
          {(currentSection.fields?.length ?? 0) > 0 && renderFields(currentSection.fields!, null)}

          {/* Top-level arrays */}
          {currentSection.arrays?.length ? renderArrays(currentSection.arrays, null) : null}

          {/* Nested groups (e.g. footer.nav, contactPage.form) */}
          {currentSection.groups?.map(group => (
            <div key={group.key} style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(31,41,51,0.09)" }}>
              <p style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#111F30", marginBottom: "1.25rem" }}>
                {group.label}
              </p>
              {(group.fields?.length ?? 0) > 0 && renderFields(group.fields!, group.key)}
              {group.arrays?.length ? renderArrays(group.arrays, group.key) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
