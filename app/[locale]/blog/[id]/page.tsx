import type { Metadata } from "next";
import { notFound }      from "next/navigation";
import BlogPostPageClient from "./BlogPostPageClient";
import { fetchAdminContent } from "@/lib/admin-content";
import { clampDescription, pageMetadata, toLocale } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { localePath } from "@/lib/i18n";
import { t } from "@/data/translations";

export const dynamic = "force-dynamic";

export async function generateMetadata(
  { params }: { params: { id: string; locale: string } }
): Promise<Metadata> {
  const content = await fetchAdminContent();
  const post    = (content.blog ?? []).find(p => p.id === params.id);
  if (!post) return {};
  return pageMetadata("blog", params.locale, {
    title:       post.title,
    absolute:    true, // articles carry no brand suffix (web-seo-geo §2)
    description: clampDescription(post.excerpt),
  }, { sub: post.id });
}

export default async function BlogPostPage({ params }: { params: { id: string; locale: string } }) {
  const locale = toLocale(params.locale);
  const content = await fetchAdminContent();
  const posts   = content.blog ?? [];
  const post    = posts.find(p => p.id === params.id);

  if (!post) notFound();

  return (
    <>
      <BlogPostPageClient post={post} />
      <JsonLd data={breadcrumbJsonLd(locale, [
        { name: t(locale).nav.blog, path: localePath("blog", locale) },
        { name: post.title,         path: localePath("blog", locale, post.id) },
      ])} />
    </>
  );
}
