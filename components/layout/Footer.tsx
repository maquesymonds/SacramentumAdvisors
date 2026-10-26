"use client";

/* ─────────────────────────────────────────────────────────────────────────────
   Footer — Sacramentum Advisors
   ─────────────────────────────────────────────────────────────────────────────
   Structure:
     • Dark panel (--color-dark #1F2933)
     • Optional `cta` on top: the page's closing call to action, centred and
       part of the footer itself (Maque, 21.10.2026: never a separate section
       of another colour above the footer). The home passes `closing`: its
       question and button from translations.closingCta (admin-editable)
     • 4-column grid: Brand | Navigation | Services | Contact
     • Bottom legal bar: copyright · Filamento credit · privacy · terms
     • Logo inverted to white via CSS filter
     • All copy from translations — bilingual-ready

   Hover states:
     • Nav & service links: muted cream → full cream, 0.2s ease
     • Email: warm accent on hover
     • No flashy transforms — editorial restraint

   Motion:
     • Framer Motion whileInView fadeUp on the main grid
     • Bottom bar fades in slightly later
   ─────────────────────────────────────────────────────────────────────────── */

import Image       from "next/image";
import { useRef } from "react";
import { motion }  from "framer-motion";
import { useLocalePath, useT } from "@/lib/locale-context";
import { isHomePath, pageLocales } from "@/lib/i18n";
import { FOOTER_TOPICS, FOOTER_TOPICS_TITLE } from "@/lib/topic-links";
import { COMPANY_LINKEDIN } from "@/lib/external-links";
import { openCookieSettings } from "@/components/layout/CookieConsent";
import { COOKIE_CONSENT } from "@/data/cookie-consent";

import { usePathname } from "next/navigation";
import { usePageTransition } from "@/lib/transition-context";
import { scrollToSection } from "@/lib/utils";
import { pendingScroll }   from "@/lib/pending-scroll";
import { usePageBlend }    from "./usePageBlend";

// ── Easing ────────────────────────────────────────────────────────────────────
const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, margin: "-40px" },
  transition:  { duration: 0.75, ease: EASE, delay },
});

// ── Inline SVG icons ──────────────────────────────────────────────────────────
function IconLocation() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 18" fill="none" aria-hidden="true">
      <path
        d="M7 1C4.24 1 2 3.24 2 6c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5Z"
        stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"
      />
      <circle cx="7" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 13" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="14" height="11" rx="1.5"
        stroke="currentColor" strokeWidth="1.4"/>
      <path d="M1 3.5L8 8l7-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M5 7v4.5M5 4.6v.1M8 11.5V7m0 2.2c0-1.3.8-2.2 1.9-2.2S11.5 7.8 11.5 9v2.5"
        stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

// ── Column heading ────────────────────────────────────────────────────────────
function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-eyebrow mb-6"
      style={{
        color:         "var(--color-warm)",
        fontSize:      "0.65rem",
        letterSpacing: "0.13em",
        opacity:       0.9,
      }}
    >
      {children}
    </p>
  );
}

// ── Footer link ───────────────────────────────────────────────────────────────
function FooterLink({
  href,
  onClick,
  children,
}: {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const baseStyle: React.CSSProperties = {
    display:     "block",
    color:       "rgba(250,250,248,0.5)",
    fontSize:    "0.9rem",
    lineHeight:  1.5,
    marginBottom:"0.55rem",
    cursor:      "pointer",
    transition:  "color 0.2s ease",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.color = "rgba(250,250,248,0.9)";
  };
  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.color = "rgba(250,250,248,0.5)";
  };

  // With an href the link is a real <a> (crawlable, opens in a new tab with
  // modifier keys); onClick keeps the in-app transition for normal clicks.
  if (onClick && !href) {
    return (
      <button
        type="button"
        style={{ ...baseStyle, background: "none", border: "none", padding: 0, textAlign: "left" }}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={href ?? "#"}
      style={baseStyle}
      onClick={onClick ? (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        onClick();
      } : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
export interface FooterCta {
  heading: string;
  body?:   string;
  label:   string;
  href:    string;
  /** data-cta value, for conversion tracking */
  id:      string;
}

/** `closing`: show the shared closing CTA (translations.closingCta). `true` on the
 *  home (also anchors #contact); a string elsewhere = that page's data-cta id. */
export default function Footer({ cta: pageCta, closing }: { cta?: FooterCta; closing?: boolean | string }) {
  const t          = useT();
  const copy       = t.footer;

  const { navigate } = usePageTransition();
  const pathname = usePathname();
  const { path, href: localize, locale } = useLocalePath();
  const cta: FooterCta | undefined = closing
    ? { heading: t.closingCta.headline, label: t.closingCta.cta, href: path("contact"), id: typeof closing === "string" ? closing : "closing-cta" }
    : pageCta;
  const isHome   = isHomePath(pathname);
  // Every change of background colour on the page, the footer included, is a
  // scroll blend, never a hard cut (Maque, 25.10.2026)
  const footerRef = useRef<HTMLElement>(null);
  usePageBlend(footerRef, pathname);

  const handleNavClick = (href: string) => {
    if (href === "/") {
      if (isHome) {
        scrollToSection("home");
      } else {
        sessionStorage.setItem("skipIntro", "1");
        navigate(path("home"));
      }
    } else if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (isHome) {
        scrollToSection(id);
      } else {
        pendingScroll.current = id;
        navigate(path("home"));
      }
    } else {
      navigate(localize(href));
    }
  };

  return (
    <footer
      ref={footerRef}
      role="contentinfo"
      data-nav-dark
      style={{ backgroundColor: "var(--color-dark)" }}
    >
      {/* ── Closing CTA ─────────────────────────────────────── */}
      {cta && (
        <div className="container-site">
          <div
            id={closing === true ? "contact" : undefined}
            className="mx-auto flex flex-col items-center text-center"
            style={{
              maxWidth:      "44rem",
              paddingTop:    "clamp(3.5rem, 6vw, 5rem)",
              paddingBottom: "clamp(1rem, 2vw, 1.5rem)", // the main grid below brings its own top padding
            }}
          >
            <motion.h2
              {...fadeUp(0)}
              className="font-normal"
              style={{ color: "#FAFAF8", fontSize: "clamp(2rem, 1.2rem + 2.4vw, 3.2rem)", letterSpacing: "-0.03em", lineHeight: 1.1, textWrap: "balance" }}
            >
              {cta.heading}
            </motion.h2>
            {cta.body && (
              <motion.p
                {...fadeUp(0.08)}
                className="mt-5"
                style={{ color: "rgba(250,250,248,0.7)", lineHeight: 1.7, maxWidth: "36rem", textWrap: "pretty" }}
              >
                {cta.body}
              </motion.p>
            )}
            <motion.div {...fadeUp(0.16)} className="mt-9">
              {/* Same button as the nav's "Reservar consulta", white on the dark footer */}
              <a
                href={cta.href}
                data-cta={cta.id}
                className="inline-block text-base font-medium tracking-[0.03em] rounded-full whitespace-nowrap transition-transform duration-300 ease-out hover:scale-[1.04] motion-reduce:transition-none motion-reduce:hover:scale-100"
                style={{ padding: "0.8rem 1.75rem", backgroundColor: "#FFFFFF", color: "var(--color-dark)" }}
                onClick={(e) => { e.preventDefault(); navigate(cta.href); }}
              >
                {cta.label}
              </a>
            </motion.div>
          </div>
        </div>
      )}

      {/* ── Main grid ───────────────────────────────────────── */}
      <div
        className="container-site"
        style={{
          paddingTop:    "clamp(3.5rem, 6vw, 5rem)",
          paddingBottom: "clamp(3rem, 5vw, 4.5rem)",
        }}
      >
        <div
          className="grid grid-cols-1 gap-12
                     sm:grid-cols-2
                     lg:grid-cols-[1.8fr_1fr_1.3fr_1.3fr_1.5fr]
                     lg:gap-10"
        >
          {/* ── Col 1: Brand ──────────────────────────────── */}
          <motion.div {...fadeUp(0)}>
            {/* Logo */}
            <div className="mb-5">
              <Image
                src="/images/Logo.png"
                alt="Sacramentum Advisors"
                width={90}
                height={26}
                style={{
                  filter:    "brightness(0) invert(1)",
                  opacity:   0.88,
                  objectFit: "contain",
                  height:    "auto",
                }}
              />
            </div>

            {/* Wordmark */}
            <p
              className="text-eyebrow mb-4"
              style={{
                color:         "rgba(250,250,248,0.85)",
                fontSize:      "0.68rem",
                letterSpacing: "0.14em",
              }}
            >
              SACRAMENTUM ADVISORS
            </p>

            {/* Tagline */}
            <p
              style={{
                color:      "rgba(250,250,248,0.38)",
                fontSize:   "0.82rem",
                lineHeight: 1.65,
                maxWidth:   "26ch",
              }}
            >
              {copy.brand.tagline}
            </p>

          </motion.div>

          {/* ── Col 2: Navigation ─────────────────────────── */}
          <motion.div {...fadeUp(0.08)}>
            <ColHeading>{copy.nav.title}</ColHeading>
            <nav aria-label="Footer navigation">
              {copy.nav.links.map((link) => (
                <FooterLink
                  key={link.label}
                  href={link.href === "/" || link.href.startsWith("/#") ? path("home") : localize(link.href)}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </motion.div>

          {/* ── Col 3: Services ───────────────────────────── */}
          <motion.div {...fadeUp(0.14)}>
            <ColHeading>{copy.services.title}</ColHeading>
            {copy.services.links.map((link) => (
              <FooterLink key={link.label} href={localize(link.href)} onClick={() => navigate(localize(link.href))}>
                {link.label}
              </FooterLink>
            ))}
          </motion.div>

          {/* ── Col 4: Uruguay topics ─────────────────────── */}
          <motion.div {...fadeUp(0.17)}>
            <ColHeading>{FOOTER_TOPICS_TITLE[locale]}</ColHeading>
            {FOOTER_TOPICS.filter(t => pageLocales(t.id).includes(locale)).map(t => (
              <FooterLink key={t.id} href={path(t.id)} onClick={() => navigate(path(t.id))}>
                {t.label[locale]}
              </FooterLink>
            ))}
          </motion.div>

          {/* ── Col 5: Contact ────────────────────────────── */}
          <motion.div {...fadeUp(0.2)}>
            <ColHeading>{copy.contact.title}</ColHeading>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "rgba(250,250,248,0.3)" }}
                >
                  <IconLocation />
                </span>
                <span
                  style={{
                    color:      "rgba(250,250,248,0.5)",
                    fontSize:   "0.9rem",
                    lineHeight: 1.5,
                  }}
                >
                  {copy.contact.location}
                </span>
              </div>

              <div className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "rgba(250,250,248,0.3)" }}
                >
                  <IconMail />
                </span>
                <a
                  href={`mailto:${copy.contact.email}`}
                  style={{
                    color:      "rgba(250,250,248,0.5)",
                    fontSize:   "0.9rem",
                    lineHeight: 1.5,
                    transition: "color 0.2s ease",
                    wordBreak:  "break-all",
                  }}
                  onMouseEnter={e =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--color-warm)")
                  }
                  onMouseLeave={e =>
                    ((e.currentTarget as HTMLElement).style.color = "rgba(250,250,248,0.5)")
                  }
                >
                  {copy.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "rgba(250,250,248,0.3)" }}
                >
                  <IconLinkedIn />
                </span>
                <a
                  href={COMPANY_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color:      "rgba(250,250,248,0.5)",
                    fontSize:   "0.9rem",
                    lineHeight: 1.5,
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={e =>
                    ((e.currentTarget as HTMLElement).style.color = "var(--color-warm)")
                  }
                  onMouseLeave={e =>
                    ((e.currentTarget as HTMLElement).style.color = "rgba(250,250,248,0.5)")
                  }
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Consult CTA: same button as the nav, white on the dark footer */}
            <div className="mt-8">
              <button
                type="button"
                onClick={() => navigate(path("contact"))}
                data-cta="footer-consult"
                className="inline-block text-sm font-medium tracking-[0.03em] rounded-full whitespace-nowrap transition-transform duration-300 ease-out hover:scale-[1.04] motion-reduce:transition-none motion-reduce:hover:scale-100"
                style={{ padding: "0.65rem 1.4rem", backgroundColor: "#FFFFFF", color: "var(--color-dark)", border: "none", cursor: "pointer", fontFamily: "inherit" }}
              >
                {copy.cta}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Legal bar ───────────────────────────────────────── */}
      <motion.div
        {...fadeUp(0.26)}
        className="container-site"
        style={{
          paddingTop:    "1.5rem",
          paddingBottom: "2rem",
          borderTop:     "1px solid rgba(250,250,248,0.07)",
        }}
      >
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
        >
          {/* Copyright */}
          <p
            style={{
              color:         "rgba(250,250,248,0.55)",
              fontSize:      "0.72rem",
              letterSpacing: "0.04em",
            }}
          >
            {copy.legal.copyright.replace(/© \d{4}/, `© ${new Date().getFullYear()}`)}
          </p>

          {/* Studio credit — Web System rule: every site links filamentolabs.com */}
          <p
            style={{
              color:         "rgba(250,250,248,0.55)",
              fontSize:      "0.72rem",
              letterSpacing: "0.04em",
            }}
          >
            {copy.legal.credit}{" "}
            <a
              href="https://filamentolabs.com"
              target="_blank"
              rel="noopener"
              style={{
                color:      "rgba(250,250,248,0.45)",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={e =>
                ((e.currentTarget as HTMLElement).style.color = "var(--color-warm)")
              }
              onMouseLeave={e =>
                ((e.currentTarget as HTMLElement).style.color = "rgba(250,250,248,0.45)")
              }
            >
              Filamento
            </a>
          </p>

          {/* Legal links */}
          <div className="flex items-center gap-6">
            {/* Terms link hidden until a legal-notice page exists (docs/ARCHITECTURE.md #6) */}
            {[{ label: copy.legal.privacy, href: path("privacy") }].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  color:         "rgba(250,250,248,0.55)",
                  fontSize:      "0.72rem",
                  letterSpacing: "0.04em",
                  transition:    "color 0.2s ease",
                }}
                onMouseEnter={e =>
                  ((e.currentTarget as HTMLElement).style.color = "rgba(250,250,248,0.9)")
                }
                onMouseLeave={e =>
                  ((e.currentTarget as HTMLElement).style.color = "rgba(250,250,248,0.55)")
                }
              >
                {label}
              </a>
            ))}
            <button
              onClick={openCookieSettings}
              style={{
                color:         "rgba(250,250,248,0.55)",
                fontSize:      "0.72rem",
                letterSpacing: "0.04em",
                transition:    "color 0.2s ease",
              }}
              onMouseEnter={e =>
                ((e.currentTarget as HTMLElement).style.color = "rgba(250,250,248,0.9)")
              }
              onMouseLeave={e =>
                ((e.currentTarget as HTMLElement).style.color = "rgba(250,250,248,0.55)")
              }
            >
              {COOKIE_CONSENT[locale].settings}
            </button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
