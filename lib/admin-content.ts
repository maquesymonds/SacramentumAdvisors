import fs from "fs";
import path from "path";
import { t } from "@/data/translations";
import { list } from "@vercel/blob";
import { unstable_noStore as noStore } from "next/cache";

const CONTENT_FILE = path.join(process.cwd(), "data/admin-content.json");
const BLOB_PATH    = "admin/content.json";

export type InlineImage = {
  url:            string;
  afterParagraph: number; // 0 = before first paragraph, 1 = after §1, etc.
  caption?:       string;
};

export type AdminArticle = {
  id:            string;
  image:         string;
  category:      string;
  title:         string;
  excerpt:       string;
  body?:         string;
  slug:          string;
  date:          string;
  inlineImages?: InlineImage[];
};

export type AdminTeamMember = {
  id: string;
  image: string;
  name: string;
  role: string;
  bio: string;
};

export type AdminCategory = {
  id:    string;
  label: string;
  color: string;
};

export const DEFAULT_CATEGORIES: AdminCategory[] = [
  { id: "economy",    label: "Economy",    color: "#2980B9" },
  { id: "lifestyle",  label: "Lifestyle",  color: "#27AE60" },
  { id: "investment", label: "Investment", color: "#8E44AD" },
];

export type AdminContent = {
  articles?:   AdminArticle[];
  team?:       AdminTeamMember[];
  categories?: AdminCategory[];
};

export function readAdminContent(): AdminContent {
  try {
    if (fs.existsSync(CONTENT_FILE)) {
      const raw = fs.readFileSync(CONTENT_FILE, "utf-8");
      const parsed = JSON.parse(raw);
      if (Object.keys(parsed).length > 0) return parsed;
    }
  } catch {}
  return {};
}

// Async version — reads from Vercel Blob on production, falls back to disk locally
export async function fetchAdminContent(): Promise<AdminContent> {
  noStore();
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const { blobs } = await list({ prefix: BLOB_PATH, limit: 1 });
      if (blobs.length) {
        const res = await fetch(blobs[0].url + "?t=" + Date.now(), { cache: "no-store" });
        if (res.ok) return await res.json();
      }
    } catch {}
  }
  return readAdminContent();
}

export function getAdminArticles(): AdminArticle[] | null {
  const content = readAdminContent();
  return content.articles ?? null;
}

export function getFullAdminContent(): AdminContent {
  const saved = readAdminContent();
  const en = t("en");
  const allMembers: AdminTeamMember[] = [
    ...(en.team.leadership as AdminTeamMember[]),
    ...(en.team.advisory.members as AdminTeamMember[]),
  ];
  return {
    articles:   saved.articles   ?? (en.news.articles as AdminArticle[]),
    team:       saved.team       ?? allMembers,
    categories: saved.categories ?? DEFAULT_CATEGORIES,
  };
}

export function getAdminTeam(): AdminTeamMember[] | null {
  const content = readAdminContent();
  return content.team ?? null;
}
