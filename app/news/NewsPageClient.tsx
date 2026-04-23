"use client";

import React, { useState, useMemo } from "react";
import Image                        from "next/image";
import Link                         from "next/link";
import { motion, AnimatePresence }  from "framer-motion";
import Navigation                   from "@/components/layout/Navigation";
import Footer                       from "@/components/layout/Footer";
import CategoryPill                 from "@/components/ui/CategoryPill";
import { useLocale, useT } from "@/lib/locale-context";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, margin: "-40px" },
  transition:  { duration: 0.8, ease: EASE, delay },
});

const fadeIn = (delay = 0) => ({
  initial:     { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport:    { once: true, margin: "-40px" },
  transition:  { duration: 0.75, ease: EASE, delay },
});

interface ArticleCardProps {
  id:        string;
  image:     string;
  category:  string;
  title:     string;
  excerpt:   string;
  readLabel: string;
}

function ArticleCard({ id, image, category, title, excerpt, readLabel }: ArticleCardProps) {
  return (
    <Link href={`/news/${id}`} style={{ textDecoration: "none", display: "flex", height: "100%" }}>
      <motion.article
        layout
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.55, ease: EASE }}
        whileHover={{ y: -6, transition: { duration: 0.4, ease: EASE } }}
        className="group flex flex-col bg-surface-card"
        style={{ cursor: "pointer", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", width: "100%" }}
      >
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
          <Image
            src={image}
            alt={title}
            fill
            quality={85}
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
            style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(255,255,255,0.08), transparent)" }}
          />
        </div>

        <div className="flex flex-col flex-grow" style={{ padding: "1.75rem 1.75rem 2rem" }}>
          <div className="mb-4">
            <CategoryPill category={category} />
          </div>

          <h3
            className="font-normal text-ink mb-3 leading-snug"
            style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)", letterSpacing: "-0.015em", lineHeight: 1.3 }}
          >
            {title}
          </h3>

          <span
            aria-hidden="true"
            className="block mb-4"
            style={{ height: 1, width: "2.5rem", backgroundColor: "rgba(31,41,51,0.1)" }}
          />

          <p
            className="text-small text-ink-subtle leading-relaxed flex-grow"
            style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}
          >
            {excerpt}
          </p>

          <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(31,41,51,0.07)" }}>
            <span
              className="inline-flex items-center gap-1.5 text-eyebrow group-hover:gap-2.5 transition-all duration-300"
              style={{ color: "var(--color-warm)", fontSize: "0.7rem", letterSpacing: "0.08em" }}
            >
              {readLabel}
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                <path d="M2 9L9 2M9 2H3.5M9 2V7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

function FilterPill({ label, active, count, onClick }: { label: string; active: boolean; count: number; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        display:         "inline-flex",
        alignItems:      "center",
        gap:             "0.4rem",
        padding:         "0.45rem 1rem",
        border:          active ? "1px solid var(--color-dark)" : "1px solid rgba(31,41,51,0.18)",
        backgroundColor: active ? "var(--color-dark)" : "transparent",
        color:           active ? "rgba(250,250,248,0.9)" : "rgba(31,41,51,0.55)",
        fontSize:        "0.72rem",
        letterSpacing:   "0.08em",
        textTransform:   "uppercase",
        fontWeight:      500,
        transition:      "all 0.2s ease",
        cursor:          "pointer",
        whiteSpace:      "nowrap",
      }}
    >
      {label}
      <span
        style={{
          display:         "inline-flex",
          alignItems:      "center",
          justifyContent:  "center",
          width:           "1.2rem",
          height:          "1.2rem",
          borderRadius:    "9999px",
          fontSize:        "0.6rem",
          backgroundColor: active ? "rgba(250,250,248,0.15)" : "rgba(31,41,51,0.08)",
          color:           active ? "rgba(250,250,248,0.7)" : "rgba(31,41,51,0.4)",
        }}
      >
        {count}
      </span>
    </button>
  );
}

function MobileNewsCard({ id, image, category, title, excerpt, readLabel }: { id: string; image: string; category: string; title: string; excerpt: string; readLabel: string }) {
  return (
    <Link href={`/news/${id}`} style={{ textDecoration: "none", display: "block" }}>
      <motion.article
        layout
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: EASE }}
        style={{
          borderRadius:  12,
          overflow:      "hidden",
          background:    "white",
          boxShadow:     "0 2px 12px rgba(0,0,0,0.07)",
          cursor:        "pointer",
        }}
      >
        {/* Square image */}
        <div style={{ position: "relative", aspectRatio: "1 / 1", overflow: "hidden" }}>
          <Image
            src={image}
            alt={title}
            fill
            quality={80}
            className="object-cover object-center"
            sizes="50vw"
          />
          {/* Category badge over image */}
          <div style={{ position: "absolute", top: "0.6rem", left: "0.6rem" }}>
            <CategoryPill category={category} />
          </div>
        </div>

        {/* Text */}
        <div style={{ padding: "0.75rem 0.85rem 1rem" }}>
          <h3 style={{
            fontSize:      "0.82rem",
            fontWeight:    400,
            letterSpacing: "-0.01em",
            lineHeight:    1.3,
            color:         "var(--color-ink)",
            marginBottom:  "0.35rem",
            display:       "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow:      "hidden",
          }}>
            {title}
          </h3>
          <p style={{
            fontSize:      "0.7rem",
            lineHeight:    1.5,
            color:         "var(--color-ink-subtle)",
            display:       "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow:      "hidden",
            margin:        0,
          }}>
            {excerpt}
          </p>
          <span style={{ marginTop: "0.4rem", display: "inline-flex", alignItems: "center", gap: "0.3rem", color: "var(--color-warm)", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}>
            {readLabel}
            <svg width="10" height="10" viewBox="0 0 11 11" fill="none" aria-hidden="true">
              <path d="M2 9L9 2M9 2H3.5M9 2V7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </motion.article>
    </Link>
  );
}

type AdminArticle = { id: string; image: string; category: string; title: string; excerpt: string; slug: string; date: string };

export default function NewsPageClient({ adminArticles }: { adminArticles?: AdminArticle[] | null }) {
  const { locale } = useLocale();
  const copy = useT().news;

  const articles: AdminArticle[] = adminArticles ?? (copy.articles as AdminArticle[]);
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = useMemo(() => Array.from(new Set(articles.map(a => a.category))), [articles]);
  const countFor   = (cat: string) => articles.filter(a => a.category === cat).length;
  const filtered   = useMemo(
    () => activeFilter === "all" ? articles : articles.filter(a => a.category === activeFilter),
    [articles, activeFilter]
  );

  const allLabel = locale === "en" ? "All" : "Todos";

  return (
    <>
      <Navigation />
      <main>

        <section style={{ backgroundColor: "#FFFFFF", paddingTop: "clamp(8rem, 14vw, 12rem)", paddingBottom: "clamp(3.5rem, 6vw, 5rem)" }}>
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
              <div>
                <motion.div {...fadeIn(0)} className="flex items-center gap-4 mb-6">
                  <span className="block h-px w-8 flex-shrink-0" style={{ backgroundColor: "var(--color-warm)" }} />
                  <span className="text-eyebrow" style={{ color: "var(--color-warm)" }}>{copy.eyebrow}</span>
                </motion.div>
                <motion.h1
                  {...fadeUp(0.06)}
                  className="font-normal text-ink"
                  style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", letterSpacing: "-0.03em", lineHeight: 1.08 }}
                >
                  {copy.headline}
                </motion.h1>
              </div>
              <motion.p {...fadeUp(0.12)} className="text-body text-ink-muted leading-relaxed" style={{ maxWidth: "52ch" }}>
                {copy.subtitle}
              </motion.p>
            </div>
          </div>
        </section>

        <div className="container-site">
          <div style={{ height: 1, backgroundColor: "rgba(31,41,51,0.08)" }} />
        </div>

        <section style={{ backgroundColor: "#FFFFFF", paddingTop: "clamp(2.5rem, 4vw, 3.5rem)", paddingBottom: "clamp(5rem, 9vw, 8rem)" }}>
          <div className="container-site">

            <div className="flex flex-wrap items-center gap-2.5 mb-12">
              <FilterPill label={allLabel} active={activeFilter === "all"} count={articles.length} onClick={() => setActiveFilter("all")} />
              {categories.map(cat => (
                <FilterPill key={cat} label={cat} active={activeFilter === cat} count={countFor(cat)} onClick={() => setActiveFilter(cat)} />
              ))}
            </div>

            <p className="text-eyebrow mb-8" style={{ color: "rgba(31,41,51,0.35)", fontSize: "0.68rem", letterSpacing: "0.1em" }}>
              {filtered.length === articles.length
                ? (locale === "en" ? `${filtered.length} articles` : `${filtered.length} artículos`)
                : (locale === "en" ? `${filtered.length} of ${articles.length} articles` : `${filtered.length} de ${articles.length} artículos`)}
            </p>

            {/* Mobile: compact 2-col grid */}
            <AnimatePresence mode="popLayout">
              <motion.div layout className="sm:hidden grid grid-cols-2 gap-3">
                {filtered.map(article => (
                  <MobileNewsCard
                    key={article.id}
                    id={article.id}
                    image={article.image}
                    category={article.category}
                    title={article.title}
                    excerpt={article.excerpt}
                    readLabel={copy.readArticle}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Tablet + desktop: full cards */}
            <AnimatePresence mode="popLayout">
              <motion.div layout className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10" style={{ alignItems: "stretch" }}>
                {filtered.map(article => (
                  <ArticleCard
                    key={article.id}
                    id={article.id}
                    image={article.image}
                    category={article.category}
                    title={article.title}
                    excerpt={article.excerpt}
                    readLabel={copy.readArticle}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
