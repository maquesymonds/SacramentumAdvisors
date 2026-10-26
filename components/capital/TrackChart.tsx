/* ─────────────────────────────────────────────────────────────────────────────
   TrackChart — Sacramentum Capital's track record: one bubble per closed
   transaction, by year, area proportional to its value. Drawn for a light
   background. Used on the Capital page and in the home's Capital section;
   wrap it in TrackReveal to build it with the scroll.
   ─────────────────────────────────────────────────────────────────────────── */

import { CAPITAL, TRACK, type Sector } from "@/data/capital";
import type { Locale } from "@/lib/i18n";

export const SECTOR_COLOR: Record<Sector, string> = { energy: "#4FA79B", infra: "#2B5E59", devbank: "#163A36", ma: "#84CCC4" };
const AXIS_INK = "#0C3B38";

// Featured deals (data/capital.ts, same order in every language) → their
// bubble in TRACK, so each row carries its sector's colour.
const DEAL_TRACK = ["CAF Fund", "CVU", "Baluma", "UTE Bond", "INFRAM", "Circuit 1"];
export const dealColor = (i: number) => SECTOR_COLOR[TRACK.find(t => t.label === DEAL_TRACK[i])?.sector ?? "infra"];

export function TrackLegend({ locale, className = "" }: { locale: Locale; className?: string }) {
  const t = CAPITAL[locale].track;
  return (
    <div className={`flex justify-center text-small text-ink-muted ${className}`}>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <span className="text-ink">{t.legend}</span>
        {(Object.keys(SECTOR_COLOR) as Sector[]).map(s => (
          <span key={s} className="flex items-center gap-2">
            <span className="inline-block rounded-full" style={{ width: 12, height: 12, backgroundColor: SECTOR_COLOR[s] }} />
            {t.sectors[s]}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TrackChart({ locale, titleId = "track-title" }: { locale: Locale; titleId?: string }) {
  const t = CAPITAL[locale].track;
  const W = 1200, H = 400, AXIS = 166, X0 = 70, X1 = 1130, Y0 = 2011.6, Y1 = 2026.9, STEM = 22;
  const ink = "#111F30", muted = "#4A5568";
  const x = (y: number) => X0 + (y - Y0) * (X1 - X0) / (Y1 - Y0);
  const r = (v: number) => 3.3 * Math.sqrt(v);
  const years = Array.from({ length: 15 }, (_, i) => 2012 + i);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-labelledby={titleId} style={{ width: "100%", height: "auto", display: "block" }}>
      <title id={titleId}>{t.heading}</title>
      {years.map(y => (
        <g key={y}>
          {y % 2 === 0 && <text x={x(y)} y={H - 12} textAnchor="middle" fontSize="13" fill={muted} style={{ fontVariantNumeric: "tabular-nums" }}>{y}</text>}
        </g>
      ))}
      <line data-track-axis x1={X0 - 20} x2={X1 + 20} y1={AXIS} y2={AXIS} stroke={AXIS_INK} strokeWidth="2" />
      {TRACK.map(d => {
        const rr = r(d.value), cx = x(d.year);
        const cy = d.side === "up" ? AXIS - STEM - rr : AXIS + STEM + rr;
        // Name and amount always outside the bubble: above it on the upper side, below on the lower
        const ty = d.side === "up" ? cy - rr - 18 : cy + rr + 16;
        // Where the axis line reaches this deal (0..1), for TrackReveal
        const at = ((cx - (X0 - 20)) / (X1 - X0 + 40)).toFixed(3);
        return (
          <g key={d.label} data-track-deal={at} data-side={d.side}>
            <title>{`${d.label} · ${Math.floor(d.year)} · USD ${d.value}M · ${t.sectors[d.sector]}`}</title>
            <line data-stem x1={cx} x2={cx} y1={AXIS} y2={d.side === "up" ? cy + rr : cy - rr} stroke={AXIS_INK} strokeWidth="1" opacity="0.45" />
            <circle data-bubble cx={cx} cy={cy} r={rr} fill={SECTOR_COLOR[d.sector]} />
            <text data-label x={cx} y={ty} textAnchor="middle" fontSize="12" fontWeight="600" fill={ink}>{d.label}</text>
            <text data-label x={cx} y={ty + 14} textAnchor="middle" fontSize="11" fill={muted}>${d.value}M</text>
          </g>
        );
      })}
    </svg>
  );
}
