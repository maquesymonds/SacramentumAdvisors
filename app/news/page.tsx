import type { Metadata } from "next";
import NewsPageClient from "./NewsPageClient";
import { getAdminArticles } from "@/lib/admin-content";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Uruguay News",
  description:
    "A curated selection of stories and signals shaping Uruguay's rise as a strategic destination for investment, lifestyle, and long-term regional access.",
};

export default function NewsPage() {
  const adminArticles = getAdminArticles();
  return <NewsPageClient adminArticles={adminArticles} />;
}
