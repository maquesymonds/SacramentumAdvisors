"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// ── Types ─────────────────────────────────────────────────────────────────────
type Article = {
  id: string; image: string; category: string;
  title: string; excerpt: string; slug: string; date: string;
};
type TeamMember = {
  id: string; image: string; name: string; role: string; bio: string;
};
type Category = { id: string; label: string; color: string };
type Content = { articles: Article[]; team: TeamMember[]; categories: Category[] };

const DEFAULT_CATEGORIES: Category[] = [
  { id: "economy",    label: "Economy",    color: "#2980B9" },
  { id: "lifestyle",  label: "Lifestyle",  color: "#27AE60" },
  { id: "investment", label: "Investment", color: "#8E44AD" },
];

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
function newId() { return `article-${Date.now()}`; }

// ── Shared styles ─────────────────────────────────────────────────────────────
const S = {
  label: {
    display: "block", fontSize: "0.7rem", fontWeight: 600,
    letterSpacing: "0.08em", textTransform: "uppercase" as const,
    color: "rgba(31,41,51,0.45)", marginBottom: "0.4rem",
  },
  input: {
    width: "100%", padding: "0.65rem 0.875rem",
    border: "1px solid rgba(31,41,51,0.14)", borderRadius: 8,
    fontSize: "0.9rem", color: "#1F2933", backgroundColor: "white",
    outline: "none", boxSizing: "border-box" as const,
    fontFamily: "inherit",
  },
  textarea: {
    width: "100%", padding: "0.65rem 0.875rem",
    border: "1px solid rgba(31,41,51,0.14)", borderRadius: 8,
    fontSize: "0.875rem", color: "#1F2933", backgroundColor: "white",
    outline: "none", resize: "vertical" as const,
    boxSizing: "border-box" as const, fontFamily: "inherit", lineHeight: 1.6,
  },
  btnPrimary: {
    padding: "0.6rem 1.4rem", backgroundColor: "#1F2933", color: "white",
    border: "none", borderRadius: 50, fontSize: "0.78rem", fontWeight: 600,
    letterSpacing: "0.06em", textTransform: "uppercase" as const, cursor: "pointer",
    fontFamily: "inherit",
  },
  btnWarm: {
    padding: "0.6rem 1.4rem", backgroundColor: "#CCA87C", color: "white",
    border: "none", borderRadius: 50, fontSize: "0.78rem", fontWeight: 600,
    letterSpacing: "0.06em", textTransform: "uppercase" as const, cursor: "pointer",
    fontFamily: "inherit",
  },
  btnGhost: {
    padding: "0.6rem 1.4rem", backgroundColor: "transparent",
    color: "rgba(31,41,51,0.5)", border: "1px solid rgba(31,41,51,0.15)",
    borderRadius: 50, fontSize: "0.78rem", fontWeight: 500, cursor: "pointer",
    fontFamily: "inherit",
  },
  btnDanger: {
    padding: "0.6rem 1.4rem", backgroundColor: "transparent",
    color: "#C0392B", border: "1px solid rgba(192,57,43,0.25)",
    borderRadius: 50, fontSize: "0.78rem", fontWeight: 500, cursor: "pointer",
    fontFamily: "inherit",
  },
};

// ── Login Screen ──────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    setLoading(true); setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw }),
    });
    if (res.ok) { onLogin(); }
    else { setError("Contraseña incorrecta"); }
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#1A2530", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ backgroundColor: "white", borderRadius: 20, padding: "3rem 2.5rem", width: "100%", maxWidth: 380, boxShadow: "0 32px 80px rgba(0,0,0,0.25)" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <Image src="/images/LogoAzul.png" alt="Sacramentum" width={160} height={40} style={{ height: 36, width: "auto", margin: "0 auto 1.25rem" }} />
          <p style={{ fontSize: "0.8rem", color: "rgba(31,41,51,0.4)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Panel de Administración
          </p>
        </div>

        <div style={{ marginBottom: "1.25rem" }}>
          <label style={S.label}>Contraseña</label>
          <input
            type="password" value={pw}
            onChange={e => setPw(e.target.value)}
            onKeyDown={e => e.key === "Enter" && submit()}
            placeholder="••••••••"
            style={{ ...S.input, fontSize: "1rem" }}
          />
          {error && <p style={{ color: "#C0392B", fontSize: "0.78rem", marginTop: "0.5rem" }}>{error}</p>}
        </div>

        <button onClick={submit} disabled={loading}
          style={{ ...S.btnPrimary, width: "100%", padding: "0.875rem", fontSize: "0.82rem" }}>
          {loading ? "Verificando..." : "Ingresar"}
        </button>
      </div>
    </div>
  );
}

// ── Sidebar ───────────────────────────────────────────────────────────────────
function Sidebar({ tab, setTab, onLogout }: { tab: string; setTab: (t: string) => void; onLogout: () => void }) {
  const items = [
    { id: "articles",   label: "Noticias",   icon: "◈" },
    { id: "team",       label: "Equipo",     icon: "◉" },
    { id: "categories", label: "Categorías", icon: "◐" },
  ];
  return (
    <aside style={{ width: 220, height: "100%", backgroundColor: "#1A2530", display: "flex", flexDirection: "column" }}>
      {/* Logo */}
      <div style={{ padding: "1.75rem 1.5rem 1.5rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <Image src="/images/Logo.png" alt="Sacramentum" width={140} height={36}
          style={{ height: 28, width: "auto", filter: "brightness(0) invert(1)", opacity: 0.9 }} />
        <p style={{ fontSize: "0.65rem", color: "rgba(250,250,248,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.5rem" }}>
          Admin
        </p>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "1rem 0.75rem" }}>
        {items.map(item => (
          <button key={item.id} onClick={() => setTab(item.id)}
            style={{
              display: "flex", alignItems: "center", gap: "0.75rem",
              width: "100%", padding: "0.7rem 0.875rem",
              backgroundColor: tab === item.id ? "rgba(204,168,124,0.15)" : "transparent",
              border: "none", borderRadius: 10, cursor: "pointer",
              color: tab === item.id ? "#CCA87C" : "rgba(250,250,248,0.45)",
              fontSize: "0.85rem", fontWeight: tab === item.id ? 600 : 400,
              letterSpacing: "0.01em", fontFamily: "inherit",
              marginBottom: "0.25rem",
              transition: "all 0.15s ease",
            }}>
            <span style={{ fontSize: "1rem", opacity: 0.8 }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* Logout */}
      <div style={{ padding: "1rem 0.75rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <button onClick={onLogout}
          style={{
            display: "flex", alignItems: "center", gap: "0.75rem",
            width: "100%", padding: "0.7rem 0.875rem",
            backgroundColor: "transparent", border: "none", borderRadius: 10,
            cursor: "pointer", color: "rgba(250,250,248,0.3)", fontSize: "0.8rem",
            fontFamily: "inherit",
          }}>
          ↩ Cerrar sesión
        </button>
      </div>
    </aside>
  );
}

// ── Category Badge ────────────────────────────────────────────────────────────
function CatBadge({ cat, categories }: { cat: string; categories?: Category[] }) {
  const color = categories?.find(c => c.label === cat)?.color ?? "#888";
  return (
    <span style={{
      fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.07em",
      textTransform: "uppercase", padding: "0.2rem 0.55rem",
      borderRadius: 50, backgroundColor: color, color: "white",
    }}>{cat}</span>
  );
}

// ── Categories Panel ──────────────────────────────────────────────────────────
function CategoriesPanel({ categories, onSave, saving }: {
  categories: Category[]; onSave: (c: Category[]) => void; saving: boolean;
}) {
  const [drafts, setDrafts]   = useState<Category[]>(categories);
  const [newLabel, setNewLabel] = useState("");
  const [newColor, setNewColor] = useState("#6B7B8D");
  const [saved, setSaved]     = useState(false);

  useEffect(() => { setDrafts(categories); }, [categories]);

  const update = (id: string, field: keyof Category, val: string) =>
    setDrafts(ds => ds.map(d => d.id === id ? { ...d, [field]: val } : d));

  const add = () => {
    const label = newLabel.trim();
    if (!label) return;
    setDrafts(ds => [...ds, { id: `cat-${Date.now()}`, label, color: newColor }]);
    setNewLabel(""); setNewColor("#6B7B8D");
  };

  const del = (id: string) => setDrafts(ds => ds.filter(d => d.id !== id));

  const save = () => { onSave(drafts); setSaved(true); setTimeout(() => setSaved(false), 2500); };

  return (
    <div style={{ maxWidth: 560 }}>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1.5rem" }}>
        <button onClick={save} disabled={saving} style={S.btnPrimary}>
          {saving ? "Guardando..." : saved ? "✓ Guardado" : "Guardar cambios"}
        </button>
      </div>

      {/* Existing categories */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
        {drafts.map(cat => (
          <div key={cat.id} style={{ display: "flex", alignItems: "center", gap: "0.75rem", backgroundColor: "white", borderRadius: 12, padding: "0.75rem 1rem" }}>
            <input
              type="color"
              value={cat.color}
              onChange={e => update(cat.id, "color", e.target.value)}
              style={{ width: 36, height: 36, border: "none", borderRadius: 8, cursor: "pointer", padding: 2, backgroundColor: "transparent" }}
            />
            <span style={{ width: 16, height: 16, borderRadius: 50, backgroundColor: cat.color, flexShrink: 0 }} />
            <input
              value={cat.label}
              onChange={e => update(cat.id, "label", e.target.value)}
              style={{ ...S.input, flex: 1 }}
            />
            <button onClick={() => del(cat.id)} style={{ ...S.btnDanger, padding: "0.4rem 0.75rem", fontSize: "0.7rem", flexShrink: 0 }}>
              Eliminar
            </button>
          </div>
        ))}
      </div>

      {/* Add new */}
      <div style={{ backgroundColor: "white", borderRadius: 12, padding: "1.25rem 1rem" }}>
        <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(31,41,51,0.4)", marginBottom: "0.75rem" }}>
          Nueva categoría
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <input
            type="color"
            value={newColor}
            onChange={e => setNewColor(e.target.value)}
            style={{ width: 36, height: 36, border: "none", borderRadius: 8, cursor: "pointer", padding: 2, backgroundColor: "transparent" }}
          />
          <input
            value={newLabel}
            onChange={e => setNewLabel(e.target.value)}
            onKeyDown={e => e.key === "Enter" && add()}
            placeholder="Nombre de la categoría..."
            style={{ ...S.input, flex: 1 }}
          />
          <button onClick={add} style={{ ...S.btnWarm, flexShrink: 0 }}>+ Agregar</button>
        </div>
      </div>
    </div>
  );
}

// ── Image Uploader ────────────────────────────────────────────────────────────
function ImageUploader({
  value, onChange, aspect = "16/9",
}: { value: string; onChange: (url: string) => void; aspect?: "16/9" | "3/4" }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError]         = useState("");

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { setError("La imagen supera el límite de 2 MB"); return; }
    setUploading(true); setError("");
    const fd = new FormData();
    fd.append("file", file);
    const res  = await fetch("/api/admin/upload", { method: "POST", body: fd });
    const data = await res.json();
    if (res.ok) { onChange(data.url); }
    else        { setError(data.error ?? "Error al subir"); }
    setUploading(false);
    e.target.value = "";
  };

  return (
    <div>
      {value && (
        <div style={{ borderRadius: 10, overflow: "hidden", marginBottom: "0.75rem", aspectRatio: aspect, backgroundColor: "#f0ede6", maxWidth: aspect === "3/4" ? 120 : "100%" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
        </div>
      )}
      <div style={{ display: "flex", gap: "0.6rem", alignItems: "center", flexWrap: "wrap" }}>
        <label style={{ ...S.btnWarm, cursor: "pointer", display: "inline-block", opacity: uploading ? 0.6 : 1 }}>
          {uploading ? "Subiendo…" : "↑ Subir archivo"}
          <input type="file" accept="image/*" onChange={handleFile} style={{ display: "none" }} disabled={uploading} />
        </label>
        <input
          value={value}
          onChange={e => onChange(e.target.value)}
          style={{ ...S.input, flex: 1, minWidth: 0, fontSize: "0.8rem", color: "rgba(31,41,51,0.5)" }}
          placeholder="/images/nombre.png"
        />
      </div>
      {error && <p style={{ color: "#C0392B", fontSize: "0.78rem", marginTop: "0.4rem" }}>{error}</p>}
    </div>
  );
}

// ── Articles Panel ────────────────────────────────────────────────────────────
function ArticlesPanel({ articles, categories, onSave, saving }: {
  articles: Article[]; categories: Category[]; onSave: (a: Article[]) => void; saving: boolean;
}) {
  const [selected, setSelected] = useState<Article | null>(null);
  const [draft, setDraft] = useState<Article | null>(null);
  const [isNew, setIsNew] = useState(false);

  const openArticle = (a: Article) => { setSelected(a); setDraft({ ...a }); setIsNew(false); };

  const firstCat = categories[0]?.label ?? "";
  const newArticle = () => {
    const blank: Article = {
      id: newId(), image: "", category: firstCat,
      title: "", excerpt: "", slug: "", date: new Date().toISOString().split("T")[0],
    };
    setSelected(blank); setDraft({ ...blank }); setIsNew(true);
  };

  const save = () => {
    if (!draft) return;
    const updated = draft.slug ? draft : { ...draft, slug: slugify(draft.title) };
    const next = isNew
      ? [...articles, updated]
      : articles.map(a => a.id === updated.id ? updated : a);
    onSave(next);
    setSelected(updated); setDraft(updated); setIsNew(false);
  };

  const del = () => {
    if (!selected) return;
    onSave(articles.filter(a => a.id !== selected.id));
    setSelected(null); setDraft(null);
  };

  const update = (field: keyof Article, val: string) =>
    setDraft(d => d ? { ...d, [field]: val } : d);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", minHeight: "calc(100vh - 60px - 3.5rem)", gap: "1.5rem" }}>
      {/* Left: List */}
      <div style={{ backgroundColor: "white", borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column", maxHeight: "calc(100vh - 60px - 3.5rem)", position: "sticky", top: "calc(60px + 1.75rem)" }}>
        <div style={{ padding: "1rem 1.25rem", borderBottom: "1px solid rgba(31,41,51,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(31,41,51,0.4)" }}>
            {articles.length} artículos
          </span>
          <button onClick={newArticle} style={{ ...S.btnWarm, padding: "0.4rem 0.875rem", fontSize: "0.7rem" }}>
            + Nuevo
          </button>
        </div>
        <div style={{ overflowY: "auto", flex: 1 }}>
          {articles.map(a => (
            <div key={a.id} onClick={() => openArticle(a)}
              style={{
                display: "flex", alignItems: "flex-start", gap: "0.75rem",
                padding: "0.875rem 1.25rem", cursor: "pointer",
                backgroundColor: selected?.id === a.id ? "rgba(204,168,124,0.08)" : "transparent",
                borderLeft: selected?.id === a.id ? "2px solid #CCA87C" : "2px solid transparent",
                borderBottom: "1px solid rgba(31,41,51,0.05)",
                transition: "all 0.15s ease",
              }}>
              {/* Thumbnail */}
              <div style={{ width: 44, height: 44, borderRadius: 8, overflow: "hidden", flexShrink: 0, backgroundColor: "#f0ede6" }}>
                {a.image && (
                  <img src={a.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: "0.82rem", fontWeight: 500, color: "#1F2933", lineHeight: 1.3, marginBottom: "0.3rem",
                  overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {a.title || "Sin título"}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CatBadge cat={a.category} categories={categories} />
                  <span style={{ fontSize: "0.65rem", color: "rgba(31,41,51,0.35)" }}>{a.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Edit form */}
      {draft ? (
        <div style={{ backgroundColor: "white", borderRadius: 16, padding: "2rem", overflowY: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.75rem" }}>
            <h3 style={{ fontSize: "1rem", fontWeight: 500, color: "#1F2933", margin: 0 }}>
              {isNew ? "Nueva noticia" : "Editar noticia"}
            </h3>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {!isNew && <button onClick={del} style={S.btnDanger}>Eliminar</button>}
              <button onClick={() => { setSelected(null); setDraft(null); }} style={S.btnGhost}>Cancelar</button>
              <button onClick={save} disabled={saving} style={S.btnPrimary}>
                {saving ? "Guardando..." : "Guardar"}
              </button>
            </div>
          </div>

          <div style={{ display: "grid", gap: "1.25rem" }}>
            <div>
              <label style={S.label}>Título</label>
              <input value={draft.title} onChange={e => update("title", e.target.value)} style={S.input} placeholder="Título del artículo" />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div style={{ position: "relative" }}>
                <label style={S.label}>Categoría</label>
                <select value={draft.category} onChange={e => update("category", e.target.value)}
                  style={{ ...S.input, appearance: "none" as const, paddingRight: "2.25rem", cursor: "pointer" }}>
                  {categories.map(c => <option key={c.id} value={c.label}>{c.label}</option>)}
                </select>
                <span style={{ position: "absolute", right: "0.875rem", top: "50%", transform: "translateY(4px)", pointerEvents: "none", color: "rgba(31,41,51,0.4)", fontSize: "0.75rem" }}>▾</span>
              </div>
              <div>
                <label style={S.label}>Fecha</label>
                <input type="date" value={draft.date} onChange={e => update("date", e.target.value)} style={S.input} />
              </div>
            </div>

            <div>
              <label style={S.label}>Extracto</label>
              <textarea value={draft.excerpt} onChange={e => update("excerpt", e.target.value)}
                style={{ ...S.textarea, minHeight: 100 }} placeholder="Descripción breve del artículo..." />
            </div>

            <div>
              <label style={S.label}>Imagen</label>
              <ImageUploader value={draft.image} onChange={v => update("image", v)} aspect="16/9" />
            </div>

            <div>
              <label style={S.label}>Slug (URL)</label>
              <input value={draft.slug || slugify(draft.title)} onChange={e => update("slug", e.target.value)}
                style={{ ...S.input, color: "rgba(31,41,51,0.5)", fontSize: "0.82rem" }}
                placeholder="se-genera-automaticamente" />
            </div>
          </div>
        </div>
      ) : (
        <div style={{ backgroundColor: "white", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", color: "rgba(31,41,51,0.25)" }}>
            <p style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>◈</p>
            <p style={{ fontSize: "0.85rem" }}>Seleccioná un artículo para editar</p>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Team Panel ────────────────────────────────────────────────────────────────
function TeamPanel({ team, onSave, saving }: {
  team: TeamMember[]; onSave: (t: TeamMember[]) => void; saving: boolean;
}) {
  const [drafts, setDrafts] = useState<TeamMember[]>(team);
  const [saved, setSaved] = useState(false);

  useEffect(() => { setDrafts(team); }, [team]);

  const update = (id: string, field: keyof TeamMember, val: string) =>
    setDrafts(ds => ds.map(d => d.id === id ? { ...d, [field]: val } : d));

  const save = () => {
    onSave(drafts);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1.5rem" }}>
        <button onClick={save} disabled={saving} style={S.btnPrimary}>
          {saving ? "Guardando..." : saved ? "✓ Guardado" : "Guardar cambios"}
        </button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem" }}>
        {drafts.map(member => (
          <div key={member.id} style={{ backgroundColor: "white", borderRadius: 16, padding: "1.75rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: 56, height: 56, borderRadius: 12, overflow: "hidden", flexShrink: 0, backgroundColor: "#f0ede6" }}>
                <img src={member.image} alt={member.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", filter: "grayscale(100%)" }} />
              </div>
              <div>
                <p style={{ fontSize: "1rem", fontWeight: 500, color: "#1F2933", marginBottom: "0.15rem" }}>{member.name}</p>
                <p style={{ fontSize: "0.75rem", color: "rgba(31,41,51,0.4)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{member.id}</p>
              </div>
            </div>

            <div>
              <label style={S.label}>Cargo</label>
              <input value={drafts.find(d => d.id === member.id)?.role ?? ""}
                onChange={e => update(member.id, "role", e.target.value)} style={S.input} />
            </div>

            <div>
              <label style={S.label}>Imagen</label>
              <ImageUploader
                value={drafts.find(d => d.id === member.id)?.image ?? ""}
                onChange={v => update(member.id, "image", v)}
                aspect="3/4"
              />
            </div>

            <div>
              <label style={S.label}>Biografía</label>
              <textarea value={drafts.find(d => d.id === member.id)?.bio ?? ""}
                onChange={e => update(member.id, "bio", e.target.value)}
                style={{ ...S.textarea, minHeight: 140 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Admin Client ─────────────────────────────────────────────────────────
export default function AdminClient() {
  const [auth, setAuth] = useState<"loading" | "no" | "yes">("loading");
  const [tab, setTab] = useState("articles");
  const [content, setContent] = useState<Content | null>(null);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");

  useEffect(() => {
    fetch("/api/admin/content")
      .then(res => {
        if (res.status === 401) { setAuth("no"); return null; }
        if (!res.ok) { setAuth("no"); return null; }
        return res.json();
      })
      .then(data => {
        if (data) { setAuth("yes"); setContent({ ...data, categories: data.categories ?? DEFAULT_CATEGORIES }); }
        else { setAuth("no"); }
      })
      .catch(() => setAuth("no"));
  }, []);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuth("no"); setContent(null);
  };

  const handleSave = async (updated: Content) => {
    setSaving(true);
    try {
      await fetch("/api/admin/content", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
      setContent(updated);
      setSaveMsg("✓ Guardado correctamente");
      setTimeout(() => setSaveMsg(""), 3000);
    } catch { setSaveMsg("Error al guardar"); }
    setSaving(false);
  };

  if (auth === "loading") {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#1A2530", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ color: "rgba(250,250,248,0.3)", fontSize: "0.85rem", letterSpacing: "0.08em" }}>Cargando...</div>
      </div>
    );
  }

  if (auth === "no") {
    return <LoginScreen onLogin={() => { setAuth("yes"); window.location.reload(); }} />;
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#F0EDE6", fontFamily: "var(--font-regola), Georgia, serif" }}>
      {/* Sidebar sticky */}
      <div style={{ position: "sticky", top: 0, height: "100vh", flexShrink: 0 }}>
        <Sidebar tab={tab} setTab={setTab} onLogout={handleLogout} />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Top bar sticky */}
        <div style={{ position: "sticky", top: 0, zIndex: 10, height: 60, backgroundColor: "white", borderBottom: "1px solid rgba(31,41,51,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2rem" }}>
          <span style={{ fontSize: "0.8rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(31,41,51,0.4)" }}>
            {tab === "articles" ? "Noticias" : tab === "team" ? "Equipo" : "Categorías"}
          </span>
          {saveMsg && (
            <span style={{ fontSize: "0.8rem", color: saveMsg.startsWith("✓") ? "#27AE60" : "#C0392B", fontWeight: 500 }}>
              {saveMsg}
            </span>
          )}
        </div>

        {/* Content — scrolls naturally with the page */}
        <div style={{ padding: "1.75rem" }}>
          {!content ? (
            <div style={{ color: "rgba(31,41,51,0.3)", textAlign: "center", paddingTop: "5rem", fontSize: "0.9rem" }}>
              Cargando contenido...
            </div>
          ) : tab === "articles" ? (
            <ArticlesPanel
              articles={content.articles}
              categories={content.categories}
              onSave={articles => handleSave({ ...content, articles })}
              saving={saving}
            />
          ) : tab === "team" ? (
            <TeamPanel
              team={content.team}
              onSave={team => handleSave({ ...content, team })}
              saving={saving}
            />
          ) : (
            <CategoriesPanel
              categories={content.categories}
              onSave={categories => handleSave({ ...content, categories })}
              saving={saving}
            />
          )}
        </div>
      </div>
    </div>
  );
}
