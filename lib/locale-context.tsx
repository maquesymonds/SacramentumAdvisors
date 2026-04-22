"use client";

/* ─────────────────────────────────────────────────────────────────────────────
   Locale Context
   Provides the active language (en/es) to the entire component tree.
   Persists selection to localStorage.
   ─────────────────────────────────────────────────────────────────────────── */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { type Locale } from "@/data/translations";

interface LocaleContextValue {
  locale:    Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale:       "en",
  setLocale:    () => {},
  toggleLocale: () => {},
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Hydrate from localStorage on mount (only if user explicitly chose a language)
  useEffect(() => {
    const stored = localStorage.getItem("sa-locale") as Locale | null;
    if (stored === "es") {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem("sa-locale", next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "es" : "en");
  }, [locale, setLocale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  return useContext(LocaleContext);
}
