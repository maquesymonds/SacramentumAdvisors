"use client";

import { useEffect, useRef, useState } from "react";
import cs from "@/components/capital/capital.module.css";

// Capital and Advisors as two nodes on one line, the hero's dot-and-line motif
// (Maque, 25.10.2026). The line draws from Capital to Advisors when the diagram
// enters the screen; reduced motion shows it drawn. Decorative for screen
// readers: the statement above already says the same in words.
export interface Firm { name: string; tagline: string; items: string[] }

export default function FirmsDiagram({ firms }: { firms: [Firm, Firm] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); io.disconnect(); }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cs.firms} data-in={inView ? "" : undefined} aria-hidden="true">
      <span className={cs.firmsLine} />
      {firms.map((f, i) => (
        <div key={f.name} className={cs.firm} style={{ "--d": `${i * 0.9}s` } as React.CSSProperties}>
          <span className={cs.firmDot} />
          <b>{f.name}</b>
          <span className={cs.firmTagline}>{f.tagline}</span>
          <ul>{f.items.map(it => <li key={it}>{it}</li>)}</ul>
        </div>
      ))}
    </div>
  );
}
