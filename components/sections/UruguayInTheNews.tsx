"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image               from "next/image";
import Link                from "next/link";
import { motion }          from "framer-motion";
import { useT } from "@/lib/locale-context";
import CategoryPill        from "@/components/ui/CategoryPill";
import { useRouter }       from "next/navigation";
import { useCharReveal }   from "@/hooks/useCharReveal";

const EASE = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

interface ArticleCardProps {
  id:        string;
  image:     string;
  category:  string;
  title:     string;
  excerpt:   string;
  slug:      string;
  date?:     string;
  readLabel: string;
}

function ArticleCard({ id, image, category, title, excerpt, readLabel }: ArticleCardProps) {
  return (
    <Link href={`/news/${id}`} style={{ textDecoration: "none", display: "flex", height: "100%" }}>
      <motion.article
        variants={cardVariants}
        whileHover={{ y: -8, transition: { duration: 0.45, ease: EASE } }}
        className="group flex flex-col bg-surface-card"
        style={{ cursor: "pointer", borderRadius: 16, overflow: "hidden", width: "100%" }}
      >
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
          <Image
            src={image}
            alt={title}
            fill
            quality={85}
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
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
            style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)", letterSpacing: "-0.015em", lineHeight: 1.3 }}
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
              className="inline-flex items-center gap-1.5 text-eyebrow"
              style={{ color: "var(--color-warm)", fontSize: "0.7rem", letterSpacing: "0.08em" }}
            >
              {readLabel}
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path d="M2 9L9 2M9 2H3.5M9 2V7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}

type Article = { id: string; image: string; category: string; title: string; excerpt: string; slug: string; date: string };

function MobileNewsCard({ id, image, category, title, excerpt, readLabel }: Pick<Article, "id" | "image" | "category" | "title" | "excerpt"> & { readLabel: string }) {
  return (
    <Link href={`/news/${id}`} style={{ textDecoration: "none", display: "block" }}>
      <article style={{ borderRadius: 12, overflow: "hidden", background: "white", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", cursor: "pointer" }}>
        {/* Square image */}
        <div style={{ position: "relative", aspectRatio: "1 / 1", overflow: "hidden" }}>
          <Image src={image} alt={title} fill quality={80} className="object-cover object-center" sizes="50vw" />
          <div style={{ position: "absolute", top: "0.6rem", left: "0.6rem" }}>
            <CategoryPill category={category} />
          </div>
        </div>
        {/* Text */}
        <div style={{ padding: "0.75rem 0.85rem 1rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
          <h3 style={{ fontSize: "0.82rem", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.3, color: "var(--color-ink)", margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>
            {title}
          </h3>
          <p style={{ fontSize: "0.7rem", lineHeight: 1.5, color: "var(--color-ink-subtle)", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, overflow: "hidden", margin: 0 }}>
            {excerpt}
          </p>
          <span style={{ marginTop: "0.4rem", display: "inline-flex", alignItems: "center", gap: "0.3rem", color: "var(--color-warm)", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase" as const, fontWeight: 500 }}>
            {readLabel}
            <svg width="10" height="10" viewBox="0 0 11 11" fill="none" aria-hidden="true">
              <path d="M2 9L9 2M9 2H3.5M9 2V7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </article>
    </Link>
  );
}

export default function UruguayInTheNews({ adminArticles }: { adminArticles?: Article[] | null }) {
  const copy       = useT().news;
  const router     = useRouter();

  const source        = (adminArticles ?? copy.articles) as Article[];
  const preview       = source.slice(0, 3);
  const mobilePreview = source.slice(0, 4);
  const h1Ref         = useRef<HTMLHeadingElement>(null);
  const prevHeadline  = useRef("");

  useLayoutEffect(() => {
    if (!h1Ref.current) return;
    if (copy.headline === prevHeadline.current) return;
    prevHeadline.current = copy.headline;
    h1Ref.current.textContent = copy.headline;
  }, [copy.headline]);

  useCharReveal(h1Ref);

  return (
    <section id="news" aria-label="Uruguay News" className="section-padding" style={{ background: "linear-gradient(to bottom, var(--color-surface) 30%, transparent 75%)" }}>
      <div className="container-site">

        <div className="grid lg:grid-cols-2 lg:items-end gap-10 mb-16 pb-12" style={{ borderBottom: "1px solid rgba(31,41,51,0.08)" }}>
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="block h-px w-8 flex-shrink-0" style={{ backgroundColor: "var(--color-warm)" }} />
              <span className="text-eyebrow" style={{ color: "var(--color-warm)" }}>{copy.eyebrow}</span>
            </div>
            <h1 ref={h1Ref} className="font-normal text-ink" style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)", letterSpacing: "-0.03em", lineHeight: 1.08 }} />
          </div>
          <p className="text-body text-ink-muted leading-relaxed lg:pb-2">{copy.subtitle}</p>
        </div>

        {/* Mobile 2×2 grid */}
        <div className="sm:hidden grid grid-cols-2 gap-3 mb-10">
          {mobilePreview.map((article) => (
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
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10" style={{ alignItems: "stretch" }}
        >
          {preview.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              image={article.image}
              category={article.category}
              title={article.title}
              excerpt={article.excerpt}
              slug={article.slug}
              date={article.date}
              readLabel={copy.readArticle}
            />
          ))}
        </motion.div>

        <div className="mt-14 flex justify-center">
          <button
            onClick={() => router.push("/news")}
            style={{
              display:             "inline-flex",
              alignItems:          "center",
              justifyContent:      "center",
              gap:                 "0.5rem",
              minWidth:            "220px",
              padding:             "0.875rem 2rem",
              borderRadius:        "50px",
              backdropFilter:      "blur(18px)",
              WebkitBackdropFilter:"blur(18px)",
              background:          "rgba(255,255,255,0.12)",
              border:              "1px solid rgba(255,255,255,0.22)",
              color:               "rgba(255,255,255,0.9)",
              fontSize:            "0.875rem",
              fontWeight:          500,
              letterSpacing:       "0.04em",
              textTransform:       "uppercase",
              cursor:              "pointer",
              transition:          "background 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.2)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(255,255,255,0.12)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.22)";
            }}
          >
            {copy.viewAll}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
