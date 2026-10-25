/* Renders a copy string with the first mention of each EXTERNAL_LINKS entry
   as a link (opens in a new tab). No hooks, so it works in server and
   client components alike. */

import { Fragment } from "react";
import { EXTERNAL_LINKS } from "@/lib/external-links";
import type { Locale } from "@/lib/i18n";

export default function LinkedText({ text, locale = "en" }: { text: string; locale?: Locale }) {
  if (!text) return null;

  // Earliest match of each entry, then keep them in order without overlaps.
  const hits = EXTERNAL_LINKS
    .map(l => {
      const m = l.pattern.exec(text);
      return m ? { start: m.index, end: m.index + m[0].length, href: typeof l.href === "string" ? l.href : l.href[locale] } : null;
    })
    .filter((h): h is { start: number; end: number; href: string } => h !== null)
    .sort((a, b) => a.start - b.start)
    .filter((h, i, all) => i === 0 || h.start >= all[i - 1].end);

  if (!hits.length) return <>{text}</>;

  const out: React.ReactNode[] = [];
  let pos = 0;
  hits.forEach((h, i) => {
    out.push(<Fragment key={`t${i}`}>{text.slice(pos, h.start)}</Fragment>);
    out.push(
      <a key={`a${i}`} href={h.href} target="_blank" rel="noopener" className="ext-link">
        {text.slice(h.start, h.end)}
      </a>
    );
    pos = h.end;
  });
  out.push(<Fragment key="end">{text.slice(pos)}</Fragment>);
  return <>{out}</>;
}
