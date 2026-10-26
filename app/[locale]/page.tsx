/* ─────────────────────────────────────────────────────────────────────────────
   Landing Page — Sacramentum Advisors
   ─────────────────────────────────────────────────────────────────────────── */

import Navigation       from "@/components/layout/Navigation";
import Footer            from "@/components/layout/Footer";
import EdificiosDivider  from "@/components/EdificiosDivider";
import DevPanel          from "@/components/DevPanel";
import {
  IntroReveal,
  WhyUruguay,
  HowWeSupport,
  WhySacramentum,
  OurTeam,
  UruguayInTheNews,
} from "@/components/sections";
import { fetchAdminContent } from "@/lib/admin-content";
import type { Metadata } from "next";
import { coreMetadata, toLocale } from "@/lib/seo";
import CapitalTeaser from "@/components/sections/CapitalTeaser";
import TrustSection from "@/components/sections/TrustSection";
import FaqSection from "@/components/faq/FaqSection";
import { coreFaqs } from "@/data/faqs";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  return coreMetadata("home", params.locale);
}

export const dynamic = "force-dynamic";

export default async function HomePage({ params }: { params: { locale: string } }) {
  const locale        = toLocale(params.locale);
  const content       = await fetchAdminContent();
  const _articles = (content.articles ?? []).filter(a => a.published !== false);
  const adminArticles = _articles.length ? _articles : null;
  const adminTeam     = content.team     ?? null;

  return (
    <>
      <main>
        <Navigation />
        <IntroReveal />
        <WhyUruguay />
        <HowWeSupport />
        <CapitalTeaser />
        <WhySacramentum />
        <TrustSection cta="home-testimonials" />
        <OurTeam adminTeam={adminTeam} />
        <FaqSection id="home" locale={locale} items={coreFaqs("home", locale)} />

        {/* ── Image divider ── */}
        <EdificiosDivider />

        <div id="sectors" className="h-px" aria-hidden="true" />

        <UruguayInTheNews adminArticles={adminArticles} />
      </main>
      <Footer closing />
      <DevPanel />
    </>
  );
}
