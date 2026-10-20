/* ─────────────────────────────────────────────────────────────────────────────
   Root Layout — Sacramentum Advisors
   Font: Regola Pro (Regular + Bold + Oblique variants)
   ─────────────────────────────────────────────────────────────────────────── */

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { LocaleProvider }      from "@/lib/locale-context";
import SmoothScrollProvider   from "@/components/layout/SmoothScrollProvider";
import { TransitionProvider } from "@/lib/transition-context";
import TransitionOverlay      from "@/components/layout/TransitionOverlay";
import Loader                 from "@/components/layout/Loader";
import { notFound }           from "next/navigation";
import { getTranslationOverrides } from "@/lib/translation-overrides";
import { LOCALES, OG_LOCALE, SITE_URL, isLocale, robotsFor, type Locale } from "@/lib/i18n";

// ── Regola Pro ────────────────────────────────────────────────────────────────
const regola = localFont({
  src: [
    {
      path:   "../../public/fonts/Regola Pro Regular.otf",
      weight: "400",
      style:  "normal",
    },
    {
      path:   "../../public/fonts/Regola Pro Regular Oblique.otf",
      weight: "400",
      style:  "italic",
    },
    {
      path:   "../../public/fonts/Regola Pro Bold.otf",
      weight: "700",
      style:  "normal",
    },
    {
      path:   "../../public/fonts/Regola Pro Bold Oblique.otf",
      weight: "700",
      style:  "italic",
    },
  ],
  variable:           "--font-regola",
  display:            "swap",
  fallback:           ["Georgia", "Times New Roman", "serif"],
  preload:            true,
  adjustFontFallback: "Times New Roman",
});

// ── Site Metadata ─────────────────────────────────────────────────────────────
// Defaults per locale; each page adds its own title, canonical and hreflang.
export function generateStaticParams() {
  return LOCALES.map(locale => ({ locale }));
}

export async function generateMetadata(
  { params }: { params: { locale: string } }
): Promise<Metadata> {
  const locale = (isLocale(params.locale) ? params.locale : "en") as Locale;
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default:  "Sacramentum Advisors",
      template: "%s | Sacramentum Advisors",
    },
    description:
      "Principled leadership for strategic asset acquisition in Uruguay. Protect your capital through lifestyle assets in Latin America's most stable market.",
    authors:  [{ name: "Sacramentum Advisors" }],
    openGraph: {
      type:        "website",
      locale:      OG_LOCALE[locale],
      siteName:    "Sacramentum Advisors",
      title:       "Sacramentum Advisors",
      description: "Principled leadership for strategic asset acquisition in Uruguay.",
    },
    twitter: {
      card:  "summary_large_image",
      title: "Sacramentum Advisors",
    },
    robots: robotsFor(locale),
    icons: {
      icon: "/favicon.jpg",
    },
  };
}

export const viewport: Viewport = {
  themeColor:   "#111F30",
  width:        "device-width",
  initialScale: 1,
};

// ── Root Layout ───────────────────────────────────────────────────────────────
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params:   { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale    = params.locale;
  const overrides = await getTranslationOverrides();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${regola.variable} antialiased`}>
        <SmoothScrollProvider>
          <TransitionProvider>
            <LocaleProvider locale={locale} overrides={overrides}>
              <Loader />
              <TransitionOverlay />
              {children}
            </LocaleProvider>
          </TransitionProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
