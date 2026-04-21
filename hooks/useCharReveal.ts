"use client";

import { useEffect, RefObject } from "react";
import { gsap }          from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Splits an H1's text into characters and animates them in with a subtle 3-D
 * perspective effect tied to scroll position. Designed for a premium,
 * financial-advisory feel — restrained rotations, no randomness per character,
 * clean easing.
 */
export function useCharReveal(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let split: import("split-type").default | null = null;
    let ctx: gsap.Context | null = null;

    async function init() {
      const SplitType = (await import("split-type")).default;

      split = new SplitType(el as HTMLElement, { types: "chars,words" });
      const chars = split.chars;
      if (!chars || chars.length === 0) return;

      ctx = gsap.context(() => {
        gsap.set(el as HTMLElement, { perspective: 800 });

        gsap.set(chars, {
          transformStyle:    "preserve-3d",
          display:           "inline-block",
          backfaceVisibility: "hidden",
          willChange:        "transform, opacity",
        });

        gsap.fromTo(
          chars,
          {
            opacity:  0,
            rotateX:  18,     // all chars tilt from same angle — controlled, not chaotic
            z:        -30,    // subtle depth, not theatrical
            y:        10,
          },
          {
            opacity:  1,
            rotateX:  0,
            z:        0,
            y:        0,
            stagger:  0.018,  // fast enough to feel fluid, slow enough to read
            ease:     "power2.out",
            scrollTrigger: {
              trigger: el,
              start:   "top 88%",
              end:     "top 42%",
              scrub:   0.6,   // light scrub — responds to scroll but feels weighty
            },
          }
        );
      });
    }

    init();

    return () => {
      ctx?.revert();
      split?.revert();
    };
  }, [ref]);
}
