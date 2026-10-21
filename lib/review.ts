/* Review mode: copy that is still waiting for Inés's OK is flagged on the
   page (components/review/ReviewFlag). On in local dev and on Vercel preview
   deployments; off in production, and off when the env is unknown. */

export const REVIEW_MODE =
  process.env.NODE_ENV === "development" ||
  process.env.NEXT_PUBLIC_VERCEL_ENV === "preview";

export interface ReviewNote {
  /** servicio = how Sacramentum works · dato = fact without a source ·
      propuesta = copy proposal not approved yet · redaccion = new wording */
  kind:     "servicio" | "dato" | "propuesta" | "redaccion";
  /** What Inés has to confirm, in Spanish */
  pregunta: string;
}
