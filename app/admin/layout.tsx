/* ─────────────────────────────────────────────────────────────────────────────
   Admin root layout
   The public site lives under app/[locale]/ with its own root layout; the
   admin is not localized and never indexed.
   ─────────────────────────────────────────────────────────────────────────── */

import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title:  "Admin | Sacramentum Advisors",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
