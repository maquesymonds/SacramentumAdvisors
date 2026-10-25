"use client";
/* ─────────────────────────────────────────────────────────────────────────────
   CookieConsent — Sacramentum Advisors
   • Cookie banner + Google Tag Manager loader (GA4 lives inside GTM)
   • GTM is only loaded AFTER the visitor accepts: nothing reaches Google
     before that (GDPR, Consent Mode v2 basic).
   • Only the live domain reports; GTM Preview (?gtm_debug) works anywhere,
     so preview deployments can be tested without polluting the data.
   • openCookieSettings() reopens the banner (footer link).
   ─────────────────────────────────────────────────────────────────────────── */

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLocalePath } from "@/lib/locale-context";
import { COOKIE_CONSENT } from "@/data/cookie-consent";

const GTM_ID      = "GTM-WF96Q3SF";
const LIVE_HOST   = "sacramentumadvisors.com";
const STORAGE_KEY = "sa-consent";
const OPEN_EVENT  = "sa:cookie-settings";

type Choice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    __saGtmLoaded?: boolean;
  }
}

// ── Storage (can throw in private mode / blocked storage) ─────────────────────
function readChoice(): Choice | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function saveChoice(choice: Choice) {
  try { localStorage.setItem(STORAGE_KEY, choice); } catch {}
}

// ── GTM ───────────────────────────────────────────────────────────────────────
function trackingAllowedHere(): boolean {
  const host = window.location.hostname;
  return (
    host === LIVE_HOST ||
    host.endsWith(`.${LIVE_HOST}`) ||
    new URLSearchParams(window.location.search).has("gtm_debug")
  );
}

// gtag() must push the real `arguments` object, not an array
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function gtag(..._args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

function loadGtm() {
  if (window.__saGtmLoaded || !trackingAllowedHere()) return;
  window.__saGtmLoaded = true;

  // Analytics accepted; ads are never asked for, so they stay denied
  gtag("consent", "default", {
    analytics_storage:  "granted",
    ad_storage:         "denied",
    ad_user_data:       "denied",
    ad_personalization: "denied",
  });

  window.dataLayer!.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.async = true;
  script.src   = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}

function revokeTracking() {
  if (window.__saGtmLoaded) gtag("consent", "update", { analytics_storage: "denied" });
  // Remove GA cookies already set (_ga, _ga_XXXX) on this host and its parent domain
  const parent = window.location.hostname.replace(/^www\./, "");
  document.cookie.split(";").forEach((c) => {
    const name = c.split("=")[0].trim();
    if (!name.startsWith("_ga")) return;
    const expire = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    document.cookie = expire;
    document.cookie = `${expire}; domain=.${parent}`;
  });
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function CookieConsent() {
  const { locale, path } = useLocalePath();
  const copy     = COOKIE_CONSENT[locale];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const choice = readChoice();
    if (choice === "granted") loadGtm();
    if (choice === null) setOpen(true);

    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  const decide = (choice: Choice) => {
    saveChoice(choice);
    if (choice === "granted") loadGtm();
    else revokeTracking();
    setOpen(false);
  };

  if (!open || pathname.includes("/admin")) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={copy.settings}
      className="fixed z-[60] left-4 right-4 bottom-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md bg-brand-dark p-5 sm:p-6 shadow-2xl"
      style={{ border: "1px solid rgba(250,250,248,0.1)" }}
    >
      <p
        className="text-sm leading-relaxed"
        style={{ color: "rgba(250,250,248,0.8)", textWrap: "pretty" } as React.CSSProperties}
      >
        {copy.text}{" "}
        <a href={path("privacy")} className="underline underline-offset-2" style={{ color: "#FFFFFF" }}>
          {copy.privacy}
        </a>
      </p>

      <div className="flex items-center gap-3 mt-5">
        <button
          onClick={() => decide("granted")}
          className="text-[0.95rem] font-medium tracking-[0.03em] px-5 py-2 rounded-full transition-transform duration-300 hover:scale-105"
          style={{ backgroundColor: "#FFFFFF", color: "var(--color-dark)", border: "1px solid #FFFFFF" }}
        >
          {copy.accept}
        </button>
        <button
          onClick={() => decide("denied")}
          className="text-[0.95rem] font-medium tracking-[0.03em] px-5 py-2 rounded-full transition-transform duration-300 hover:scale-105"
          style={{ backgroundColor: "transparent", color: "#FFFFFF", border: "1px solid #FFFFFF" }}
        >
          {copy.reject}
        </button>
      </div>
    </div>
  );
}
