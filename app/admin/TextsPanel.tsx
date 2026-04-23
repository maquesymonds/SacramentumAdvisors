"use client";

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
type SectionDef = { id: string; label: string; fields: FieldDef[]; arrays?: ArrayDef[] };

const SECTIONS: SectionDef[] = [
  {
    id: "hero", label: "Hero / Portada",
    fields: [
      { key: "eyebrow",      label: "Eyebrow" },
      { key: "headline",     label: "Titular" },
      { key: "subheadline",  label: "Subtítulo", multi: true },
      { key: "cta",          label: "Botón principal" },
      { key: "ctaSecondary", label: "Botón secundario" },
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
    arrays: [{
      key: "cards", label: "Tarjetas", count: 6,
      fields: [
        { key: "title",       label: "Título" },
        { key: "description", label: "Descripción", multi: true },
      ],
    }],
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
      { key: "eyebrow",  label: "Eyebrow" },
      { key: "headline", label: "Titular" },
      { key: "intro",    label: "Introducción", multi: true },
    ],
  },
];

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

function buildBase(locale: "en" | "es"): Record<string, any> {
  const trans = t(locale) as any;
  const result: Record<string, any> = {};
  for (const sec of SECTIONS) {
    result[sec.id] = {};
    for (const f of sec.fields) {
      const val = trans[sec.id]?.[f.key];
      if (val !== undefined) result[sec.id][f.key] = val;
    }
    for (const arr of sec.arrays ?? []) {
      const items = trans[sec.id]?.[arr.key];
      if (Array.isArray(items)) {
        result[sec.id][arr.key] = items.slice(0, arr.count).map((item: any) => {
          const r: Record<string, any> = {};
          for (const f of arr.fields) {
            if (item[f.key] !== undefined) r[f.key] = item[f.key];
          }
          return r;
        });
      }
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

  const getValue = useCallback((sectionId: string, key: string, arrIdx?: number, arrKey?: string): string => {
    const sec = data[lang]?.[sectionId];
    if (sec == null) return "";
    if (arrIdx !== undefined && arrKey) return sec[key]?.[arrIdx]?.[arrKey] ?? "";
    return sec[key] ?? "";
  }, [data, lang]);

  const setValue = useCallback((sectionId: string, key: string, value: string, arrIdx?: number, arrKey?: string) => {
    setData(prev => {
      const langData = { ...(prev[lang] ?? {}), [sectionId]: { ...(prev[lang]?.[sectionId] ?? {}) } };
      if (arrIdx !== undefined && arrKey) {
        const arr = [...(langData[sectionId][key] ?? [])];
        arr[arrIdx] = { ...(arr[arrIdx] ?? {}), [arrKey]: value };
        langData[sectionId] = { ...langData[sectionId], [key]: arr };
      } else {
        langData[sectionId] = { ...langData[sectionId], [key]: value };
      }
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

  return (
    <div>
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
            Secciones
          </p>
          {SECTIONS.map(s => (
            <button key={s.id} onClick={() => setSection(s.id)}
              style={{
                display: "block", width: "100%", textAlign: "left",
                padding: "0.6rem 0.875rem", border: "none", borderRadius: 8,
                backgroundColor: section === s.id ? "rgba(204,168,124,0.12)" : "transparent",
                color: section === s.id ? "#CCA87C" : "rgba(31,41,51,0.55)",
                fontSize: "0.85rem", fontWeight: section === s.id ? 600 : 400,
                cursor: "pointer", fontFamily: "inherit",
                marginBottom: "0.2rem", transition: "all 0.15s ease",
              }}>
              {s.label}
            </button>
          ))}
        </div>

        {/* Fields */}
        <div style={{ flex: 1, backgroundColor: "white", borderRadius: 16, padding: "2rem", border: "1px solid rgba(31,41,51,0.07)" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#111F30", marginBottom: "1.75rem", paddingBottom: "1rem", borderBottom: "1px solid rgba(31,41,51,0.07)" }}>
            {currentSection.label}
            <span style={{ marginLeft: "0.75rem", fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: lang === "en" ? "#2980B9" : "#27AE60", backgroundColor: lang === "en" ? "rgba(41,128,185,0.1)" : "rgba(39,174,96,0.1)", padding: "0.2rem 0.5rem", borderRadius: 4 }}>
              {lang === "en" ? "Inglés" : "Español"}
            </span>
          </h3>

          {/* Simple fields */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: currentSection.arrays?.length ? "2rem" : 0 }}>
            {currentSection.fields.map(field => (
              <div key={field.key}>
                <label style={S.label}>{field.label}</label>
                {field.multi ? (
                  <textarea
                    value={getValue(currentSection.id, field.key)}
                    onChange={e => setValue(currentSection.id, field.key, e.target.value)}
                    style={{ ...S.textarea, minHeight: 80 }}
                  />
                ) : (
                  <input
                    value={getValue(currentSection.id, field.key)}
                    onChange={e => setValue(currentSection.id, field.key, e.target.value)}
                    style={S.input}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Array fields */}
          {currentSection.arrays?.map(arr => (
            <div key={arr.key}>
              <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(31,41,51,0.35)", marginBottom: "1.25rem", paddingTop: currentSection.fields.length > 0 ? "0.5rem" : 0, borderTop: currentSection.fields.length > 0 ? "1px solid rgba(31,41,51,0.07)" : "none" }}>
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
                              value={getValue(currentSection.id, arr.key, idx, field.key)}
                              onChange={e => setValue(currentSection.id, arr.key, e.target.value, idx, field.key)}
                              style={{ ...S.textarea, minHeight: 72 }}
                            />
                          ) : (
                            <input
                              value={getValue(currentSection.id, arr.key, idx, field.key)}
                              onChange={e => setValue(currentSection.id, arr.key, e.target.value, idx, field.key)}
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
        </div>
      </div>
    </div>
  );
}
