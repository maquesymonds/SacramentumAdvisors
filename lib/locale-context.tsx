"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React, {
  createContext,
  useContext,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import { t, type SiteTranslations } from "@/data/translations";
import { DEFAULT_LOCALE, localePath, localizeHref, type Locale, type PageId } from "@/lib/i18n";

// ── Deep merge ────────────────────────────────────────────────────────────────
function deepMerge<T extends object>(base: T, overrides: Record<string, any>): T {
  const result = { ...base } as Record<string, any>;
  for (const key in overrides) {
    const val = overrides[key];
    if (val === undefined || val === null) continue;
    if (Array.isArray(val) && Array.isArray(result[key])) {
      result[key] = (result[key] as any[]).map((item, i) => {
        const ov = val[i];
        if (!ov) return item;
        if (typeof item === "object" && !Array.isArray(item)) return deepMerge(item, ov);
        return ov;
      });
    } else if (typeof val === "object" && !Array.isArray(val) && typeof result[key] === "object") {
      result[key] = deepMerge(result[key], val);
    } else {
      result[key] = val;
    }
  }
  return result as T;
}

// ── Context ───────────────────────────────────────────────────────────────────
// The locale comes from the URL (app/[locale]/layout.tsx) and admin overrides
// are read on the server, so the first render — and what crawlers see — is
// already in the right language with the edited copy.
interface LocaleContextValue {
  locale:    Locale;
  overrides: Record<string, Record<string, any>>;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale:    DEFAULT_LOCALE,
  overrides: {},
});

export function LocaleProvider({
  locale,
  overrides,
  children,
}: {
  locale:    Locale;
  overrides: Record<string, Record<string, any>>;
  children:  ReactNode;
}) {
  const value = useMemo(() => ({ locale, overrides }), [locale, overrides]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  return useContext(LocaleContext);
}

// ── useT: returns merged translations for current locale ──────────────────────
export function useT(): SiteTranslations {
  const { locale, overrides } = useLocale();
  return useMemo(
    () => deepMerge(t(locale), overrides[locale] ?? {}),
    [locale, overrides]
  );
}

// ── useLocalePath: localized links for the current locale ─────────────────────
export function useLocalePath() {
  const { locale } = useLocale();
  const path = useCallback((id: PageId, sub?: string) => localePath(id, locale, sub), [locale]);
  const href = useCallback((raw: string) => localizeHref(raw, locale), [locale]);
  return { locale, path, href };
}
