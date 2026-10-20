/* ─────────────────────────────────────────────────────────────────────────────
   /contact — Private Consultation page
   Server component: owns the <head> metadata.
   All interactive UI lives in ContactPageClient (client component).
   ─────────────────────────────────────────────────────────────────────────── */

import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
import { pageMetadata } from "@/lib/seo";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return pageMetadata("contact", params.locale, {
  title:       "Private Consultation",
  description: "Connect with the Sacramentum Advisors team to discuss residency, strategic asset acquisition, lifestyle assets, or long-term positioning in Uruguay.",
  });
}

export default function ContactPage() {
  return <ContactPageClient />;
}
