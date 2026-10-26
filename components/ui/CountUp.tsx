"use client";

import { useEffect, useRef, useState } from "react";

// Count-up for the topic pages' key facts, same easing and duration as the
// home stats (StatItem). The server renders the final value so crawlers read
// the real figure; the count only starts once the number scrolls into view.
// "US$3,7 MM" / "$3,7 Mrd.": a trailing unit word is set smaller so the
// figure fits a quarter column; so is a leading currency word ("USD 1.6B+").

function parseValue(val: string) {
  const match = val.match(/^([^\d]*)(\d+)(?:([.,])(\d+))?(.*)$/);
  if (!match) return null;
  const [, prefix, intStr, sep = ".", decStr = "", suffix] = match;
  return { prefix, num: parseFloat(`${intStr}.${decStr || 0}`), decimals: decStr.length, sep, suffix };
}

// `immediate`: count even when the number is on screen at load (a hero figure).
export default function CountUp({ value, immediate = false }: { value: string; immediate?: boolean }) {
  const parsed = parseValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState<number | null>(null); // null = final value

  useEffect(() => {
    const el = ref.current;
    if (!el || !parsed || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Already on screen at load: leave the final value, no count.
    if (!immediate && el.getBoundingClientRect().top < window.innerHeight) return;
    setCurrent(0);
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1600, 1);
        setCurrent(parsed.num * (1 - Math.pow(1 - progress, 3))); // easeOutCubic
        if (progress < 1) requestAnimationFrame(tick);
        else setCurrent(null);
      };
      requestAnimationFrame(tick);
    }, { rootMargin: "0px 0px -60px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!parsed) return <span ref={ref}>{value}</span>;

  const currency = parsed.prefix.match(/^([A-Za-z]+)\s$/);
  const lead = currency ? "" : parsed.prefix;
  const number = current === null
    ? value.slice(parsed.prefix.length, value.length - parsed.suffix.length)
    : current.toFixed(parsed.decimals).replace(".", parsed.sep);
  const unit = parsed.suffix.match(/^\s([A-Za-z.]+)$/);

  return (
    <span ref={ref}>
      {currency && <span style={{ fontSize: "0.5em", marginRight: "0.15em" }}>{currency[1]}</span>}
      {lead}{number}
      {unit
        ? <span style={{ fontSize: "0.5em", marginLeft: "0.15em" }}>{unit[1]}</span>
        : parsed.suffix}
    </span>
  );
}
