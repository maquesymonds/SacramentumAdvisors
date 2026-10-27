"use client";

import React, { useState, useEffect, useLayoutEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocalePath, useT } from "@/lib/locale-context";
import { LOCALES, LOCALE_COOKIE, isHomePath, switchLocalePath, type Locale, type TopicId } from "@/lib/i18n";
import { FOOTER_TOPICS } from "@/lib/topic-links";
import { scrollToSection } from "@/lib/utils";
import { pendingScroll } from "@/lib/pending-scroll";
import { usePageTransition } from "@/lib/transition-context";

const LOCALE_NAMES: Record<Locale, string> = { en: "English", es: "Español", de: "Deutsch" };

// Sector pages under "Why Uruguay". Technology first: it is the new section of stage 2.
const WHY_URUGUAY_SECTORS: TopicId[] = ["technology", "real-estate", "farmland"];

// ── Language menu: globe button that opens the three languages ───────────────
function LanguageMenu({
  locale,
  isDark,
  onSelect,
}: {
  locale:   Locale;
  isDark:   boolean;
  onSelect: (l: Locale) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`Language: ${LOCALE_NAMES[locale]}`}
        className={[
          "flex items-center gap-1.5 p-2 text-sm font-medium tracking-[0.1em] uppercase transition-colors duration-300",
          isDark ? "text-ink-muted hover:text-brand-dark" : "text-white/80 hover:text-white",
        ].join(" ")}
      >
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.3"/>
          <path d="M2 10h16M10 2c2.2 2.3 3.2 5 3.2 8s-1 5.7-3.2 8c-2.2-2.3-3.2-5-3.2-8s1-5.7 3.2-8Z"
            stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        </svg>
        {locale}
      </button>

      <ul
        className={[
          "absolute right-0 top-full mt-2 min-w-[9rem] py-1.5 rounded-lg bg-white",
          "shadow-[0_8px_30px_rgba(17,31,48,0.18)] transition-all duration-200",
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none",
        ].join(" ")}
      >
        {LOCALES.map(l => (
          <li key={l}>
            <button
              type="button"
              lang={l}
              tabIndex={open ? 0 : -1}
              aria-current={l === locale ? "true" : undefined}
              onClick={() => { setOpen(false); onSelect(l); }}
              className={[
                "w-full text-left px-4 py-2 text-[0.95rem] transition-colors duration-200",
                l === locale ? "text-brand-dark font-medium" : "text-ink-muted hover:text-brand-dark hover:bg-black/[0.03]",
              ].join(" ")}
            >
              {LOCALE_NAMES[l]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── What colour is behind the nav ───────────────────────────────────────────
// Composites, at a few points along the nav's height line, what the eye sees:
// semi-transparent layers (a dark veil) over opaque ones, and for photos the
// real pixel (an <img> or a CSS background image, read through a small cached
// canvas). Used on every page, home included: a list of "light sections" and
// skipped photos kept leaving white text on white (Maque, 26.10.2026).
// data-nav-tone="dark|light" still wins where a block wants to say it itself.
// Fixed layers (loader, page transition, floating panels) are skipped, except
// page backdrops marked data-nav-backdrop and content pinned by ScrollTrigger.

type Rgb = [number, number, number];
const lum = ([r, g, b]: Rgb) => (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

function inFixedLayer(el: Element): boolean {
  for (let e: Element | null = el; e && e !== document.body; e = e.parentElement) {
    if ((e as HTMLElement).dataset?.navBackdrop !== undefined) return false;
    if (getComputedStyle(e).position === "fixed" && !e.parentElement?.classList.contains("pin-spacer")) return true;
  }
  return false;
}

const imgCache = new Map<string, { data: Uint8ClampedArray; w: number; h: number } | null>();
const imgLoading = new Set<string>();
function pixels(src: string, img?: HTMLImageElement) {
  if (imgCache.has(src)) return imgCache.get(src)!;
  const el = img && img.complete && img.naturalWidth ? img : null;
  if (!el) {
    // load it for next time, once: a probe per check downloaded every
    // background photo three times (26.10.2026). Same-origin needs no
    // crossOrigin, and without it the request reuses the page's cached copy.
    if (imgLoading.has(src)) return null;
    imgLoading.add(src);
    const probe = document.createElement("img");
    if (new URL(src, location.href).origin !== location.origin) probe.crossOrigin = "anonymous";
    probe.onload = () => { imgLoading.delete(src); pixels(src, probe); };
    probe.onerror = () => { imgLoading.delete(src); imgCache.set(src, null); };
    probe.src = src;
    return null;
  }
  try {
    const w = 96, h = Math.max(1, Math.round(96 * el.naturalHeight / el.naturalWidth));
    const c = document.createElement("canvas"); c.width = w; c.height = h;
    const ctx = c.getContext("2d", { willReadFrequently: true })!;
    ctx.drawImage(el, 0, 0, w, h);
    const v = { data: ctx.getImageData(0, 0, w, h).data, w, h };
    imgCache.set(src, v);
    return v;
  } catch { imgCache.set(src, null); return null; }
}

/** Pixel of an image drawn into box with object-fit / background-size cover|contain|fill */
function samplePhoto(src: string, img: HTMLImageElement | undefined, box: DOMRect, fit: string, pos: string, x: number, y: number): Rgb | null {
  const px = pixels(src, img);
  if (!px) return null;
  const ar = px.w / px.h;
  let w = box.width, h = box.height;
  if (fit === "cover" || fit === "contain") {
    const scale = fit === "cover" ? Math.max(box.width / px.w, box.height / px.h) : Math.min(box.width / px.w, box.height / px.h);
    w = px.w * scale; h = px.h * scale;
  } else if (fit !== "fill" && fit !== "100% 100%") { w = box.width; h = box.width / ar; }
  const [pxs, pys] = (pos || "50% 50%").split(" ");
  const pct = (s: string | undefined, free: number) => s?.endsWith("%") ? parseFloat(s) / 100 * free : s?.endsWith("px") ? parseFloat(s) : free / 2;
  const left = box.left + pct(pxs, box.width - w), top = box.top + pct(pys ?? pxs, box.height - h);
  const u = Math.floor((x - left) / w * px.w), v = Math.floor((y - top) / h * px.h);
  if (u < 0 || v < 0 || u >= px.w || v >= px.h) return null;
  const i = (v * px.w + u) * 4;
  return [px.data[i], px.data[i + 1], px.data[i + 2]];
}

/** Colour and alpha of a linear-gradient() at a point of its box. Handles
    "to top|bottom|left|right", "<n>deg" and plain colour stops (rgb/rgba/hex,
    optional %); anything else returns null. */
function gradientAt(value: string, box: DOMRect, x: number, y: number): [Rgb, number] | null {
  const m = value.match(/linear-gradient\((.*)\)/);
  if (!m) return null;
  const parts = m[1].split(/,(?![^(]*\))/).map(s => s.trim());
  let deg = 180;
  if (/^to |deg$/.test(parts[0])) {
    const d = parts.shift()!;
    deg = d === "to top" ? 0 : d === "to right" ? 90 : d === "to left" ? 270 : d === "to bottom" ? 180 : parseFloat(d);
  }
  const stops = parts.map((p, i) => {
    const pos = p.match(/(-?[\d.]+)%\s*$/);
    const col = p.replace(/\s+-?[\d.]+%\s*$/, "");
    let c: number[] | null = null;
    const rgb = col.match(/rgba?\(([^)]+)\)/);
    if (rgb) c = rgb[1].split(/[\s,/]+/).filter(Boolean).map(Number);
    else if (/^#[0-9a-f]{6}$/i.test(col)) c = [1, 3, 5].map(k => parseInt(col.slice(k, k + 2), 16));
    else if (col === "transparent") c = [0, 0, 0, 0];
    else if (col === "black") c = [0, 0, 0];
    else if (col === "white") c = [255, 255, 255];
    if (!c) return null;
    return { c: [c[0], c[1], c[2]] as Rgb, a: c.length > 3 ? c[3] : 1, at: pos ? parseFloat(pos[1]) / 100 : i / Math.max(1, parts.length - 1) };
  });
  if (stops.some(s => !s) || !stops.length) return null;
  const st = stops as { c: Rgb; a: number; at: number }[];
  // position along the gradient line (projection on its direction)
  const rad = (deg * Math.PI) / 180, dx = Math.sin(rad), dy = -Math.cos(rad);
  const len = Math.abs(box.width * dx) + Math.abs(box.height * dy) || 1;
  const cx = box.left + box.width / 2, cy = box.top + box.height / 2;
  const f = Math.min(1, Math.max(0, ((x - cx) * dx + (y - cy) * dy) / len + 0.5));
  let j = st.findIndex(s => s.at >= f);
  if (j <= 0) j = j === 0 ? 0 : st.length - 1;
  const A = st[Math.max(0, j - 1)], B = st[j];
  const k = B.at === A.at ? 1 : (f - A.at) / (B.at - A.at);
  const mixc = (u: number, v: number) => u + (v - u) * Math.min(1, Math.max(0, k));
  return [[mixc(A.c[0], B.c[0]), mixc(A.c[1], B.c[1]), mixc(A.c[2], B.c[2])], mixc(A.a, B.a)];
}

function colourAt(x: number, y: number, header: Element | null): Rgb | "dark" | "light" | null {
  const stack = document.elementsFromPoint(x, y).filter(el => !header?.contains(el) && !inFixedLayer(el));
  if (!stack.length) return null;
  const tone = stack[0].closest<HTMLElement>("[data-nav-tone]")?.dataset.navTone;
  if (tone === "dark" || tone === "light") return tone;
  const out: Rgb = [0, 0, 0];
  let left = 1;
  const add = (c: Rgb, a: number) => { for (let k = 0; k < 3; k++) out[k] += left * a * c[k]; left *= 1 - a; };
  for (const el of stack) {
    const cs = getComputedStyle(el);
    if (cs.visibility === "hidden" || Number(cs.opacity) < 0.05) continue;
    if (el.classList.contains("cap-ambient")) {
      const m = cs.getPropertyValue("--amb-top").trim().split(/\s+/).map(Number);
      if (m.length === 3 && m.every(n => !Number.isNaN(n))) { add(m as Rgb, 1); break; }
    }
    // a gradient mask (a photo fading out) scales what this element paints
    const maskVal = cs.getPropertyValue("mask-image") || cs.getPropertyValue("-webkit-mask-image");
    const mask = maskVal && maskVal !== "none" ? gradientAt(maskVal, el.getBoundingClientRect(), x, y) : null;
    const k = mask ? mask[1] : 1;
    const box = el.getBoundingClientRect();
    // Paint order inside one element, top first: the <img> itself, then its
    // background images (photo or gradient), then its background colour
    if (el instanceof HTMLImageElement) {
      const p = samplePhoto(el.currentSrc || el.src, el, box, cs.objectFit, cs.objectPosition, x, y);
      if (p) add(p, k);
    }
    const bg = cs.backgroundImage.match(/url\(["']?([^"')]+)["']?\)/);
    if (bg && left > 0.03) {
      const p = samplePhoto(new URL(bg[1], location.href).href, undefined, box, cs.backgroundSize, cs.backgroundPosition, x, y);
      if (p) add(p, k);
    }
    const grad = cs.backgroundImage.includes("linear-gradient") ? gradientAt(cs.backgroundImage, box, x, y) : null;
    if (grad && grad[1] > 0 && left > 0.03) add(grad[0], grad[1] * k);
    const m = cs.backgroundColor.match(/[\d.]+/g);
    const a = m ? (m.length > 3 ? Number(m[3]) : 1) : 0;
    if (m && a > 0 && left > 0.03) add([Number(m[0]), Number(m[1]), Number(m[2])], a * k);
    if (left < 0.03) break;
  }
  if (left > 0.6) return null; // mostly unknown (a photo still loading)
  return [out[0] / (1 - left), out[1] / (1 - left), out[2] / (1 - left)];
}

// true = dark behind the nav, false = light, null = nothing readable yet.
// Luminance threshold 0.6: mid tones (Why Uruguay's sand chapter) carry white text.
function backgroundBehindNavIsDark(y: number): boolean | null {
  const header = document.querySelector("header[role=banner]");
  let dark = 0, light = 0;
  // elementsFromPoint skips pointer-events:none, and that is exactly what
  // paints a lot of this site (carousel photos, veils over photos, Capital's
  // backdrop): make everything hit-testable for the length of the reading.
  const root = document.documentElement;
  root.classList.add("nav-probe");
  try {
    // Read right behind what has to be legible: the logo, each link, the
    // language menu (not the consult button, it carries its own fill). A
    // vote across the full width let coloured margins outvote white cards
    // sitting under the links (Maque, 26.10.2026).
    const targets = Array.from(header?.querySelectorAll<HTMLElement>("a, button, img") ?? [])
      .filter(el => {
        const r = el.getBoundingClientRect();
        if (!r.width || r.top > y + 30 || r.bottom < y - 30) return false;
        const m = getComputedStyle(el).backgroundColor.match(/[\d.]+/g);
        return !(m && (m.length < 4 || Number(m[3]) > 0.5)); // skip filled buttons
      })
      .map(el => { const r = el.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; });
    const points = targets.length ? targets : [0.08, 0.3, 0.5, 0.7, 0.92].map(fx => [window.innerWidth * fx, y]);
    for (const [px, py] of points) {
      const c = colourAt(px, py, header);
      if (c === null) continue;
      if (c === "dark" || (c !== "light" && lum(c) < 0.6)) dark++;
      else light++;
    }
  } finally {
    root.classList.remove("nav-probe");
  }
  if (!dark && !light) return null;
  return dark > light;
}

// One reading costs two full style recalcs of the page (the nav-probe class
// goes on and off), so it runs at most every 120 ms while scrolling, plus once
// when the scroll stops. Every frame cost ~7 s of style work in a 25 s scroll
// (trace, 26.10.2026) and was the stutter.
function throttledCheck(check: () => void) {
  let last = 0, raf = 0, timer = 0, settle = 0;
  const run = () => { last = performance.now(); cancelAnimationFrame(raf); raf = requestAnimationFrame(check); };
  const onScroll = () => {
    const wait = 120 - (performance.now() - last);
    window.clearTimeout(timer);
    if (wait <= 0) run(); else timer = window.setTimeout(run, wait);
    window.clearTimeout(settle);
    settle = window.setTimeout(run, 400);
  };
  const stop = () => { cancelAnimationFrame(raf); window.clearTimeout(timer); window.clearTimeout(settle); };
  return [onScroll, stop] as const;
}

// Dev only: inspect what the nav reads at a point (window.__navColour(x, y))
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  (window as unknown as { __navColour: unknown }).__navColour = (x: number, y: number) => {
    const header = document.querySelector("header[role=banner]");
    const stack = document.elementsFromPoint(x, y).filter(el => !header?.contains(el) && !inFixedLayer(el)).slice(0, 6)
      .map(el => `${el.tagName}.${String((el as HTMLElement).className).slice(0, 24)} bg=${getComputedStyle(el).backgroundColor} img=${getComputedStyle(el).backgroundImage.slice(0, 30)}`);
    return { colour: colourAt(x, y, header), stack };
  };
}

export default function Navigation() {
  const { locale, path } = useLocalePath();
  const copy = useT();

  const pathname = usePathname();
  const { navigate } = usePageTransition();

  const isHome    = isHomePath(pathname);

  // Language switcher: same page in the other language; the choice is
  // remembered (used by the middleware only when someone lands on "/").
  const switchTo = useCallback((target: Locale) => {
    if (target === locale) return;
    document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`;
    navigate(switchLocalePath(pathname, target));
  }, [locale, navigate, pathname]);

  const [menuOpen,    setMenuOpen]    = useState(false);
  const [introVisible,setIntroVisible]= useState(() => !isHome);
  const [scrollDark,  setScrollDark]  = useState(false);

  // On the landing page, detect which section is behind the nav and switch theme
  useEffect(() => {
    if (!isHome) return;

    const NAV_Y = 60; // vertical midpoint of the nav bar

    // The real colour behind the nav decides; nothing readable keeps the last state
    const check = () => {
      const darkBehind = backgroundBehindNavIsDark(NAV_Y);
      if (darkBehind !== null) setScrollDark(!darkBehind);
    };

    const [onScroll, stop] = throttledCheck(check);
    window.addEventListener("scroll", onScroll, { passive: true });
    // Backgrounds keep changing after the scroll stops (a photo that
    // finishes loading): look again once a second
    const timer = window.setInterval(check, 1000);
    check();
    return () => { window.removeEventListener("scroll", onScroll); window.clearInterval(timer); stop(); };
  }, [isHome]);

  // Other pages are light, except sections marked data-nav-dark (the
  // Sacramentum Capital page): over those the nav switches to its light-on-dark look.
  const [overDarkSection, setOverDarkSection] = useState(false);
  useEffect(() => {
    if (isHome) return;
    const NAV_Y = 60;
    const check = () => {
      const over = Array.from(document.querySelectorAll("[data-nav-dark]")).some(el => {
        const r = el.getBoundingClientRect();
        return r.top <= NAV_Y && r.bottom >= NAV_Y;
      });
      // The real background wins; the data-nav-dark markers only decide
      // when nothing behind the nav can be read
      const darkBehind = backgroundBehindNavIsDark(NAV_Y);
      setOverDarkSection(darkBehind ?? over);
    };
    const [onScroll, stop] = throttledCheck(check);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("cap-amb-tone", check);
    const timer = window.setInterval(check, 1000); // backgrounds that keep changing after the scroll stops
    check();
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); window.removeEventListener("cap-amb-tone", check); window.clearInterval(timer); stop(); };
  }, [isHome, pathname]);

  const isDark = isHome ? scrollDark : !overDarkSection;

  // On home page: hide nav until intro animation dispatches the event
  useLayoutEffect(() => {
    if (isHome) setIntroVisible(false);
    else setIntroVisible(true);
  }, [isHome]);

  useEffect(() => {
    if (!isHome) return;
    const handler = () => setIntroVisible(true);
    window.addEventListener("intro-nav-ready", handler);
    return () => window.removeEventListener("intro-nav-ready", handler);
  }, [isHome]);

  // ── Close menu on resize ────────────────────────────────────────────────


  
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ── Prevent body scroll when mobile menu open ───────────────────────────
  // The flag also hides the cookie banner, which otherwise covers the menu.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (menuOpen) document.body.dataset.menuOpen = "";
    else delete document.body.dataset.menuOpen;
    return () => { document.body.style.overflow = ""; delete document.body.dataset.menuOpen; };
  }, [menuOpen]);

  // ── Fire pending scroll after navigation ────────────────────────────────
  useEffect(() => {
    if (isHome && pendingScroll.current) {
      const id = pendingScroll.current;
      pendingScroll.current = null;
      if (id !== "home") {
        const timer = setTimeout(() => {
          scrollToSection(id);
          setIntroVisible(true);
        }, 200);
        return () => clearTimeout(timer);
      }
      // "home" is handled by IntroReveal via sessionStorage skipIntro flag
    }
  }, [isHome]);

  const handleNavClick = useCallback(
    (id: string, href?: string) => {
      setMenuOpen(false);
      if (href) {
        navigate(href);
      } else if (isHome) {
        if (id === "home") setIntroVisible(true);
        scrollToSection(id);
      } else {
        if (id === "home") sessionStorage.setItem("skipIntro", "1");
        else pendingScroll.current = id;
        navigate(path("home"));
      }
    },
    [navigate, isHome, path]
  );

  // Real <a href> (crawlable, works with modifier keys); plain clicks keep
  // the in-app page transition.
  const onLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, href?: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    handleNavClick(id, href);
  };

  const topicLabel = (id: TopicId) => FOOTER_TOPICS.find(t => t.id === id)?.label[locale] ?? id;

  // Menu by what the visitor is looking for (Maque, 25.10.2026): the country and
  // its sectors, the services, Sacramentum Capital, news, blog. One dropdown
  // only, for the sector pages. No "Contact" link: the "Reservar consulta"
  // button already goes there (Maque, 25.10.2026).
  const navLinks: { label: string; id: string; href: string; children?: { label: string; href: string }[] }[] = [
    // No "Home" link: the logo takes you home (client decision, 20.10.2026)
    {
      label: copy.nav.whyUruguay, id: "invest", href: path("why-uruguay"),
      children: WHY_URUGUAY_SECTORS.map(id => ({ label: topicLabel(id), href: path(id) })),
    },
    { label: copy.nav.sectors,      id: "services", href: path("services")            },
    { label: "Sacramentum Capital", id: "capital",  href: path("sacramentum-capital") },
    { label: copy.nav.news,         id: "news",     href: path("news")                },
    { label: copy.nav.blog,         id: "blog",     href: path("blog")                },
  ];

  return (
    <>
      <header
        role="banner"
        className={[
          "fixed top-0 left-0 right-0 z-50",
          "flex items-center",
          "transition-all duration-600",
          isDark ? "nav-scrolled" : "bg-transparent",
        ].join(" ")}
        style={{
          paddingTop:    "1.5rem",
          paddingBottom: "1.5rem",
          opacity:       introVisible ? 1 : 0,
          pointerEvents: introVisible ? "auto" : "none",
          transition:    "opacity 0.8s ease",
        }}
      >
        <div
          className="container-site w-full flex items-center justify-between lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-6 xl:grid-cols-[1fr_auto_1fr]"
          style={{ paddingLeft: "1.25rem", paddingRight: "1.25rem" }}
        >

          {/* ── Logo ─────────────────────────────────────────────────────── */}
          <button
            onClick={() => {
              if (isHome) {
                setIntroVisible(true);
                scrollToSection("home");
              } else {
                sessionStorage.setItem("skipIntro", "1");
                navigate(path("home"));
              }
            }}
            className="relative flex-shrink-0 justify-self-start focus:outline-none focus-visible:outline focus-visible:outline-brand-blue"
            aria-label="Sacramentum Advisors, back to top"
          >
            <Image
              src={isDark ? "/images/LogoAzul.png" : "/images/Logo.png"}
              alt="Sacramentum Advisors"
              width={180}
              height={48}
              className={[
                "h-7 w-auto object-contain transition-all duration-400",
                !isDark ? "brightness-0 invert" : "",
              ].join(" ")}
              priority
            />
          </button>

          {/* ── Desktop links ────────────────────────────────────────────── */}
          <nav
            role="navigation"
            aria-label="Primary navigation"
            className="hidden lg:flex lg:justify-self-center items-center gap-5 xl:gap-10 2xl:gap-14"
          >
            {navLinks.map((link) => (
              <div key={link.id} className="relative group/dd">
                <a
                  href={link.href}
                  onClick={(e) => onLinkClick(e, link.id, link.href)}
                  className={[
                    "flex items-center gap-1.5 text-[0.95rem] xl:text-base font-medium tracking-[0.03em] whitespace-nowrap",
                    "transition-colors duration-300 relative group",
                    isDark
                      ? "text-ink-muted hover:text-brand-dark"
                      : "text-white/80 hover:text-white",
                  ].join(" ")}
                >
                  {link.label}
                  {link.children && (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover/dd:rotate-180">
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  <span
                    className={[
                      "absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300",
                      "group-hover:w-full",
                      isDark ? "bg-brand-warm" : "bg-white/60",
                    ].join(" ")}
                  />
                </a>

                {/* Dropdown: opens on hover or keyboard focus; the parent link still goes to its page */}
                {link.children && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 pointer-events-none translate-y-1 transition-all duration-200 group-hover/dd:opacity-100 group-hover/dd:pointer-events-auto group-hover/dd:translate-y-0 group-focus-within/dd:opacity-100 group-focus-within/dd:pointer-events-auto group-focus-within/dd:translate-y-0">
                    <ul className="min-w-[13rem] py-2 rounded-lg bg-white shadow-[0_8px_30px_rgba(17,31,48,0.18)]">
                      {link.children.map(child => (
                        <li key={child.href}>
                          <a
                            href={child.href}
                            onClick={(e) => onLinkClick(e, link.id, child.href)}
                            className="block px-5 py-2.5 text-[0.95rem] text-ink-muted hover:text-brand-dark hover:bg-black/[0.03] transition-colors duration-200 whitespace-nowrap"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

          </nav>

          {/* ── Right: language + CTA (desktop) · language + hamburger (mobile) */}
          <div className="flex items-center gap-2 lg:gap-3 lg:justify-self-end">
            <LanguageMenu locale={locale} isDark={isDark} onSelect={switchTo} />

            {/* Fixed consultation button — always visible in the menu (proposal) */}
            <a
              href={path("contact")}
              data-cta="nav-consultation"
              onClick={(e) => onLinkClick(e, "contact", path("contact"))}
              className="hidden lg:inline-block text-[0.95rem] xl:text-base font-medium tracking-[0.03em] px-5 py-2 rounded-full transition-all duration-300 whitespace-nowrap"
              style={{
                // Adapts to what is behind the nav: white on dark backgrounds,
                // navy with white text on light backgrounds.
                backgroundColor: isDark ? "var(--color-dark)" : "#FFFFFF",
                color:           isDark ? "#FFFFFF" : "var(--color-dark)",
                border:          `1px solid ${isDark ? "var(--color-dark)" : "#FFFFFF"}`,
              }}
            >
              {copy.footer.cta}
            </a>

            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className={["block w-6 h-px transition-all duration-300", isDark ? "bg-brand-dark" : "bg-white", menuOpen ? "rotate-45 translate-y-[7px]" : ""].join(" ")} />
              <span className={["block w-6 h-px transition-all duration-300", isDark ? "bg-brand-dark" : "bg-white", menuOpen ? "opacity-0 scale-x-0" : "opacity-100"].join(" ")} />
              <span className={["block w-6 h-px transition-all duration-300", isDark ? "bg-brand-dark" : "bg-white", menuOpen ? "-rotate-45 -translate-y-[7px]" : ""].join(" ")} />
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile menu overlay ────────────────────────────────────────────── */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={[
          "fixed inset-0 z-40 lg:hidden",
          "flex flex-col items-center justify-center gap-2",
          "transition-all duration-500",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        style={{ backgroundColor: "#111F30" }}
      >
        {navLinks.map((link, i) => (
          <div key={link.id} className="flex flex-col items-center">
            <a
              href={link.href}
              onClick={(e) => onLinkClick(e, link.id, link.href)}
              className="text-h3 font-light text-white/80 hover:text-white transition-colors duration-300 py-3"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </a>
            {link.children && (
              <div className="flex items-center gap-4 -mt-1 mb-2">
                {link.children.map(child => (
                  <a
                    key={child.href}
                    href={child.href}
                    onClick={(e) => onLinkClick(e, link.id, child.href)}
                    className="text-sm text-white/55 hover:text-white transition-colors duration-300"
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <a
          href={path("contact")}
          data-cta="nav-consultation-mobile"
          onClick={(e) => onLinkClick(e, "contact", path("contact"))}
          className="mt-6 text-base font-medium tracking-[0.02em] px-7 py-3 rounded-full"
          style={{ backgroundColor: "#FFFFFF", color: "var(--color-dark)" }}
        >
          {copy.footer.cta}
        </a>
      </div>
    </>
  );
}
