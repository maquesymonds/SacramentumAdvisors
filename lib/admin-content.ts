import fs from "fs";
import path from "path";
import { t } from "@/data/translations";

const CONTENT_FILE = path.join(process.cwd(), "data/admin-content.json");

export type AdminArticle = {
  id: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
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
