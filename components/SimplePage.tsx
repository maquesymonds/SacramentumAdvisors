/* Plain text page shell (thank-you, privacy): server-rendered, site chrome. */
import Navigation from "@/components/layout/Navigation";
import Footer     from "@/components/layout/Footer";

export default function SimplePage({ title, centered, children }: { title: string; centered?: boolean; children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className={centered ? "flex flex-col justify-center" : undefined} style={{ backgroundColor: "var(--color-surface)", paddingTop: "clamp(8rem, 14vw, 11rem)", paddingBottom: "clamp(4rem, 8vw, 7rem)" }}>
        <div className={`container-site${centered ? " text-center" : ""}`} style={{ maxWidth: 860, textWrap: "balance" }}>
          <h1 className="font-normal text-ink mb-8" style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            {title}
          </h1>
          <div className={`text-body text-ink-muted leading-relaxed flex flex-col gap-5${centered ? " items-center" : ""}`}>{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
