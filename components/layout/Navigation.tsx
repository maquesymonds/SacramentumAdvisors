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

// Sector pages shown under "Why Uruguay" (the client's three sectors with a page).
const WHY_URUGUAY_SECTORS: TopicId[] = ["real-estate", "technology", "farmland"];

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

    const LIGHT_IDS = ["why-uruguay", "how-we-support", "why-sacramentum", "team", "news"];
    const NAV_Y = 60; // vertical midpoint of the nav bar
    let rafId: number;

    const check = () => {
      const inLight = LIGHT_IDS.some(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= NAV_Y && r.bottom >= NAV_Y;
      });
      setScrollDark(inLight);
    };

    const onScroll = () => { cancelAnimationFrame(rafId); rafId = requestAnimationFrame(check); };

    window.addEventListener("scroll", onScroll, { passive: true });
    check();
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(rafId); };
  }, [isHome]);

  // Other pages are light, except sections marked data-nav-dark (the
  // Sacramentum Capital page): over those the nav switches to its light-on-dark look.
  const [overDarkSection, setOverDarkSection] = useState(false);
  useEffect(() => {
    if (isHome) return;
    const NAV_Y = 60;
    let rafId: number;
    const check = () => {
      const over = Array.from(document.querySelectorAll("[data-nav-dark]")).some(el => {
        const r = el.getBoundingClientRect();
        return r.top <= NAV_Y && r.bottom >= NAV_Y;
      });
      setOverDarkSection(over);
    };
    const onScroll = () => { cancelAnimationFrame(rafId); rafId = requestAnimationFrame(check); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    check();
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); cancelAnimationFrame(rafId); };
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
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
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

  const navLinks: { label: string; id: string; href: string; children?: { label: string; href: string }[] }[] = [
    // No "Home" link: the logo takes you home (client decision, 20.10.2026)
    {
      label: copy.nav.whyUruguay, id: "invest", href: path("why-uruguay"),
      children: WHY_URUGUAY_SECTORS.map(id => ({ label: topicLabel(id), href: path(id) })),
    },
    {
      // The four service cards, same titles as on the Services page; each opens its card.
      // Investment banking is Sacramentum Capital: named so and linked to its own page.
      label: copy.nav.sectors, id: "services", href: path("services"),
      children: copy.howWeSupport.cards.map(card => card.id === "investment-banking"
        ? { label: "Sacramentum Capital", href: path("sacramentum-capital") }
        : { label: card.title, href: `${path("services")}?card=${card.id}` }),
    },
    { label: copy.nav.news,       id: "news",        href: path("news")        },
    { label: copy.nav.blog,       id: "blog",        href: path("blog")        },
    { label: copy.nav.contact,    id: "contact",     href: path("contact")     },
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
            aria-label="Sacramentum Advisors — back to top"
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
