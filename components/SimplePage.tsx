/* Plain text page shell (thank-you, privacy): server-rendered, site chrome. */
import Navigation from "@/components/layout/Navigation";
import Footer     from "@/components/layout/Footer";

export default function SimplePage({ eyebrow, title, children }: { eyebrow?: string; title: string; children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main style={{ backgroundColor: "var(--color-surface)", paddingTop: "clamp(8rem, 14vw, 11rem)", paddingBottom: "clamp(4rem, 8vw, 7rem)" }}>
        <div className="container-site" style={{ maxWidth: 860 }}>
          {eyebrow && (
            <div className="flex items-center gap-4 mb-5">
              <span className="block h-px w-8 flex-shrink-0" style={{ backgroundColor: "var(--color-warm)" }} />
              <span className="text-eyebrow" style={{ color: "var(--color-warm)" }}>{eyebrow}</span>
            </div>
          )}
          <h1 className="font-normal text-ink mb-8" style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            {title}
          </h1>
          <div className="text-body text-ink-muted leading-relaxed flex flex-col gap-5">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
