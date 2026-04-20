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
  ClosingCTA,
} from "@/components/sections";
import { getAdminArticles, getAdminTeam } from "@/lib/admin-content";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const adminArticles = getAdminArticles();
  const adminTeam     = getAdminTeam();

  return (
    <>
      <main>
        <Navigation />
        <IntroReveal />
        <WhyUruguay />
        <HowWeSupport />
        <WhySacramentum />
        <OurTeam adminTeam={adminTeam} />

        {/* ── Image divider ── */}
        <EdificiosDivider />

        <div id="sectors" className="h-px" aria-hidden="true" />

        {/* olas.png spans bottom half of news section through ClosingCTA */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/olas.png"
            alt=""
            aria-hidden="true"
            style={{
              position:      "absolute",
              top:           "720px",
              left:          0,
              width:         "100%",
              height:        "auto",
              zIndex:        0,
              pointerEvents: "none",
              userSelect:    "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <UruguayInTheNews adminArticles={adminArticles} />
            <ClosingCTA />
          </div>
        </div>
      </main>
      <Footer />
      <DevPanel />
    </>
  );
}
