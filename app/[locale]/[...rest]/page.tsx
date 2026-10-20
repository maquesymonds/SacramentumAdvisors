import { notFound } from "next/navigation";

// Any unknown path under a locale renders the localized 404 inside the
// locale layout (a root layout per locale has no global not-found).
export default function CatchAll() {
  notFound();
}
