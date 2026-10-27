/* ─────────────────────────────────────────────────────────────────────────────
   CapitalHero — Sacramentum Capital, first screen
   After bauerchristoph.de/referenzen (Maque, 25.10.2026): one screen tall,
   name + what the firm is + a short text top left, and a curve that crosses
   the whole screen and climbs, with a figure standing on each waypoint and
   the closed volume at the glowing head, top right.

   The curve is decoration (aria-hidden), drawn by CSS on load; the figures
   are real text in the HTML. The SVG stretches with the box
   (preserveAspectRatio="none"), so the dots and figures are HTML placed by
   the same waypoints, in percent, and stay round. On phones the volume comes
   first and the other three sit in a row and the curve stays at the foot as a line.
   ─────────────────────────────────────────────────────────────────────────── */

import CountUp from "@/components/ui/CountUp";
import cs      from "@/components/capital/capital.module.css";
import type { Stat } from "@/data/capital";

const W = 1200, H = 420;
// Where the line passes, in viewBox units. It enters off screen and ends at
// the head; the four points after the first carry a figure.
const WAYPOINTS: [number, number][] = [
  [-40, 370], [230, 300], [520, 345], [800, 250], [1060, 80],
];
// Which stat stands on which waypoint: sectors, mandates, years, volume (head)
const ORDER = [2, 1, 3, 0];

// Catmull-Rom through the waypoints, as cubic Béziers
function spline(pts: [number, number][]) {
  let d = `M${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] ?? p2;
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0]},${p2[1]}`;
  }
  return d;
}

const LINE = spline(WAYPOINTS);
const AREA = `${LINE} L1060,${H + 200} L-40,${H + 200} Z`;

export default function CapitalHero({ intro, stats }: { intro: string; stats: Stat[] }) {
  const points = WAYPOINTS.slice(1, 5);
  return (
    <section data-nav-dark data-amb="bosque" className={cs.hero}>
      <div className={`container-site ${cs.heroCopy}`}>
        <h1 className={cs.heroName}>Sacramentum Capital</h1>
        <p className={cs.heroText}>{intro}</p>
      </div>

      <div className={cs.curve}>
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="capital-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#84CCC4" stopOpacity="0.22" />
              <stop offset="0.7" stopColor="#84CCC4" stopOpacity="0" />
            </linearGradient>
            {/* The fill fades out before the head, so it has no vertical edge there */}
            <linearGradient id="capital-area-edge" gradientUnits="userSpaceOnUse" x1="900" y1="0" x2="1060" y2="0">
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#000" />
            </linearGradient>
            <mask id="capital-area-mask" maskUnits="userSpaceOnUse" x="-100" y="-100" width="1400" height="800">
              <rect x="-100" y="-100" width="1400" height="800" fill="url(#capital-area-edge)" />
            </mask>
          </defs>
          <path className={cs.curveArea} d={AREA} fill="url(#capital-area)" mask="url(#capital-area-mask)" />
          <path className={cs.curveHalo} d={LINE} pathLength={1} />
          <path className={cs.curveLine} d={LINE} pathLength={1} />
        </svg>

        {/* Each figure stands on its waypoint (tablet up); stacked on phones */}
        <dl className={cs.heroStats}>
          {points.map(([x, y], i) => {
            const s = stats[ORDER[i]];
            const head = i === points.length - 1;
            const pos = { "--x": `${(x / W) * 100}%`, "--y": `${(y / H) * 100}%`, "--delay": `${(0.3 + (x / W) * 1.9).toFixed(2)}s` } as React.CSSProperties;
            return (
              <div key={i} className={head ? `${cs.heroStat} ${cs.heroStatHead}` : cs.heroStat} style={pos}>
                <dt>{s.label}</dt>
                <dd><CountUp value={s.value} immediate /></dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
