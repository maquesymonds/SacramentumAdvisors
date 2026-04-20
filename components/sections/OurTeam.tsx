"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale } from "@/lib/locale-context";
import { t } from "@/data/translations";
import type { AdminTeamMember } from "@/lib/admin-content";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 36 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: EASE, delay },
});

// ── Unified person card (Inés/Pablo style for everyone) ───────────────────────
interface PersonCardProps {
  image: string;
  name:  string;
  role:  string;
  bio:   string;
  index: number;
}

function PersonCard({ image, name, role, bio, index }: PersonCardProps) {
  return (
    <motion.article
      {...fadeUp(index * 0.09)}
      className="grid grid-cols-[180px_1fr] gap-6 items-start"
    >
      {/* Portrait */}
      <div className="relative overflow-hidden rounded-lg flex-shrink-0" style={{ aspectRatio: "3/4" }}>
        <Image
          src={image}
          alt={name}
          fill
          quality={90}
          className="object-cover object-top"
          style={{ filter: "grayscale(100%) contrast(1.06) brightness(0.96)" }}
          sizes="180px"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col pt-1">
        <div className="flex items-center gap-3 mb-4">
          <span className="block h-px w-7 flex-shrink-0" style={{ backgroundColor: "var(--color-warm)" }} />
          <span className="text-eyebrow" style={{ color: "var(--color-warm)" }}>{role}</span>
        </div>
        <h3
          className="font-normal text-ink mb-3"
          style={{ fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
        >
          {name}
        </h3>
        <span className="block mb-4" style={{ height: 1, width: "2.5rem", backgroundColor: "rgba(31,41,51,0.12)" }} />
        <div className="text-ink-muted leading-relaxed" style={{ fontSize: "0.875rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {bio.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
        </div>
      </div>
    </motion.article>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function OurTeam({ adminTeam }: { adminTeam?: AdminTeamMember[] | null }) {
  const { locale } = useLocale();
  const copy       = t(locale).team;

  const translationMembers = [...copy.leadership, ...copy.advisory.members];

  // If admin has saved data, merge image/role overrides but keep locale bio/role from translations
  const everyone = adminTeam
    ? translationMembers.map(member => {
        const override = adminTeam.find(m => m.id === member.id);
        return override ? { ...member, image: override.image, role: override.role, bio: override.bio } : member;
      })
    : translationMembers;

  return (
    <section id="team" aria-label="Our Team" className="bg-surface section-padding" style={{ paddingBottom: "0.5rem" }}>
      <div className="container-site">

        {/* ── Header ──────────────────────────────────────────────── */}
        <div
          className="grid lg:grid-cols-2 lg:items-end gap-10 pb-10 mb-12"
          style={{ borderBottom: "1px solid rgba(31,41,51,0.08)" }}
        >
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="block h-px w-8 flex-shrink-0" style={{ backgroundColor: "var(--color-warm)" }} />
              <span className="text-eyebrow" style={{ color: "var(--color-warm)" }}>{copy.eyebrow}</span>
            </div>
            <h1
              className="font-normal text-ink"
              style={{
                fontSize:      "clamp(2.8rem, 5vw, 4.5rem)",
                letterSpacing: "-0.03em",
                lineHeight:    1.08,
              }}
            >
              {copy.headline}
            </h1>
          </div>
          <p className="text-body text-ink-muted leading-relaxed lg:pb-2">
            {copy.advisory.subheadline}
          </p>
        </div>

        {/* ── All 5 people ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-16">
          {everyone.map((person, i) => (
            <PersonCard
              key={person.id}
              image={person.image}
              name={person.name}
              role={person.role}
              bio={person.bio}
              index={i}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
