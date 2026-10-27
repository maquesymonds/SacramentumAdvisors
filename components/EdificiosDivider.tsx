"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

// Same parallax as background-position 0% → 80%, as a translateY of an
// oversized inner layer: compositor-only instead of a full repaint of a
// 60vh band on every scroll frame (trace, 26.10.2026).
const RATIO = 3646 / 6000; // edificios-divider height / width

export default function EdificiosDivider() {
  const ref      = useRef<HTMLDivElement>(null);
  const overflow = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // How much taller than the band the cover-sized image is
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => overflow.set(Math.max(0, el.clientWidth * RATIO - el.clientHeight));
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [overflow]);

  const y = useTransform([scrollYProgress, overflow], ([p, o]: number[]) => -p * 0.8 * o);

  return (
    <div
      ref={ref}
      style={{
        position:        "relative",
        overflow:        "hidden",
        width:           "100%",
        height:          "60vh",
        WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
        maskImage:       "linear-gradient(to bottom, black 70%, transparent 100%)",
      }}
    >
      <motion.div
        aria-hidden="true"
        style={{
          y,
          position:           "absolute",
          top:                0,
          left:               0,
          width:              "100%",
          aspectRatio:        "6000 / 3646",
          minHeight:          "100%",
          backgroundImage:    "url('/images/edificios-divider.webp')",
          backgroundSize:     "cover",
          backgroundPosition: "center",
          backgroundRepeat:   "no-repeat",
          willChange:         "transform",
        }}
      />
    </div>
  );
}
