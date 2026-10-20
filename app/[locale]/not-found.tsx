"use client";

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { useLocalePath } from "@/lib/locale-context";
import type { Locale } from "@/lib/i18n";

const COPY: Record<Locale, { title: string; body: string; cta: string }> = {
  en: { title: "Page not found",          body: "The page you are looking for does not exist or has moved.",       cta: "Back to the home page" },
  es: { title: "Página no encontrada",    body: "La página que busca no existe o fue trasladada.",                cta: "Volver al inicio" },
  de: { title: "Seite nicht gefunden",    body: "Die gesuchte Seite existiert nicht oder wurde verschoben.",     cta: "Zur Startseite" },
};

export default function NotFound() {
  const { locale, path } = useLocalePath();
  const copy = COPY[locale];
  return (
    <>
      <Navigation />
      <main className="container-site" style={{ minHeight: "70vh", paddingTop: "10rem", paddingBottom: "6rem" }}>
        <h1 className="text-h2" style={{ marginBottom: "1rem" }}>{copy.title}</h1>
        <p style={{ marginBottom: "2rem", opacity: 0.75 }}>{copy.body}</p>
        <a href={path("home")} className="btn-primary">{copy.cta}</a>
      </main>
      <Footer />
    </>
  );
}
