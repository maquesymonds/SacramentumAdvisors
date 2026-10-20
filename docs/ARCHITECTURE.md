# ARCHITECTURE — Sacramentum Advisors · Stage 2

**Status:** proposed, awaiting approval · **Date:** 2026-10-20
**Scope:** S2 · Service Depth · **Stack:** Next (existing, Next.js 14 App Router) · **Pages proposed:** 18 per language (+ 8 existing news articles) — revised · **Page families:** 4

> This is the Architecture Checkpoint. Implementation does not start until it is approved.
> Stage 2 restructures the live site — it does not rebuild it. Design, motion and existing sections are reused.

Inputs: [`seo/RESEARCH-SUMMARY.md`](seo/RESEARCH-SUMMARY.md) (+ ES/EN/DE files and `seo/data/`), the client proposal
("Sacramentum Final Proposal", 19 items), [`content/technology-en.md`](content/technology-en.md),
[`content/sacramentum-capital.md`](content/sacramentum-capital.md), and the current code on `main` (3c6916c).

---

## Revision 1 · 2026-10-20 · decisions from Maque

| Topic | Decision | Effect |
|---|---|---|
| **Navigation** | **Keep the current nav exactly**: Home · Why Uruguay · Services · News · Blog · Contact. No new top-level items. Add only the language switcher (ES · EN · DE, replacing the ES/EN toggle) and the fixed "Book a consultation" button (proposal) | New pages are reached from the Why Uruguay and Services pages (cards + body links) and the footer, not from the nav |
| **Existing pages stay** | `/invest` keeps its role and content as the **Why Uruguay** page (nav label already says "Why Uruguay"); it becomes the hub that links to the four sector pages. No separate "Why Uruguay" page is created | Former row #2 removed; row #3 renamed |
| Team page, FAQ page | **Dropped.** Team stays as the home section; FAQs live inside each topic page (visible + schema) | −2 pages per language |
| **Admin editing** | Inés edits **EN** (and ES, as today). **German is not editable from the admin**: DE copy lives in code, updated by us when EN changes | No DE column in the "Textos" panel. Overrides still read server-side |
| **Language on entry** | `/` (sacramentumadvisors.com) sends each visitor to **their browser's language** (ES → `/es/`, DE → `/de/`, anything else → `/en/`); a choice made in the switcher is remembered and wins next time. Pages reached by link or from Google always open in the language of their URL | Decision #2 resolved as recommended |
| **URLs** | **Localized keyword slugs** per language, as in §2 | Decision #1 resolved as recommended |
| **Copy of the new pages** | **Claude drafts** from the material already gathered (research, current copy, Capital PDF, verified client facts); **Inés approves**. Tax figures wait for verification | Decision #3 resolved |

Still open: #4 budget/phasing, #5 blog articles, #6 legal notice, #7 Sacramentum Capital content.

---

## 0. Decisions needed before implementation

| # | Question | Blocks | Who can answer | Cost of getting it wrong |
|---|---|---|---|---|
| 1 | **Localized, keyword-first slugs per language** (`/es/residencia-en-uruguay/`, `/en/uruguay-residency/`, `/de/auswandern-nach-uruguay/`) — recommended — or one English slug for all languages (`/es/residency/`)? | All URLs | Maque | High: URLs are indexed once launched; changing them later means redirects and lost signals. Localized slugs carry the keyword the research found in each language |
| 2 | **What `/` does.** Recommended: `/` redirects (302) to `/en/`, `/es/` or `/de/` by saved choice → browser language → English, and is declared `x-default`. Alternative: English content on `/` without prefix | Routing, every hreflang set | Maque | High: changes every canonical and hreflang |
| 3 | **Who writes the five new topic pages** (Residency, Tax residency, Second passport, Retire, Family office & wealth) in ES/EN/DE? They are not in the stage-1 copy. Inés writes / Maque + Claude draft and Inés approves / reduced to sections of existing pages | Pages §2 rows 6–10 | Maque + client | Medium: approving pages nobody writes produces thin pages (the content gate) |
| 4 | **Budget fit.** The proposal priced "a new SEO/GEO structure, each sector gets its own page" (USD 1.380). This architecture adds 5 topic pages × 3 languages, a team page, an FAQ page and legal pages. Keep them all, phase them (launch structure + sector pages, topic pages in a second batch), or re-quote | Launch scope | Maque | Medium: scope creep without agreement |
| 5 | **Blog articles in scope?** The research justifies ~8 articles (Uruguay vs Paraguay, tax residency 2026, …). The proposal does not include writing articles. Architecture reserves the family; launch count = 0 unless agreed | Article family | Maque + client | Low (cheap to add later) |
| 6 | **Legal pages.** A privacy policy is required as soon as forms, guide downloads and GA4 collect data (FIRM). Does the client also want a legal notice / *Impressum* for the German version? | Footer, DE launch | Client (with her lawyer) | Medium: legal exposure in DE |
| 7 | **Sacramentum Capital: what may be published** (the source PDF is confidential; one mandate is still closing) and how Capital and Advisors relate | Content of one page, not its existence | Client | Medium: publishing a confidential mandate |

The facts to verify before writing content (2026 tax regime, Germany–Uruguay DTA, passport code URY, Law 16.340, team languages)
are listed in `seo/RESEARCH-SUMMARY.md` §5. They block **copy**, not this architecture.

---

## 1. Input status

| Input | Status | Effect on this document |
|---|---|---|
| Service list | **present** — 4 services on `/services` (Soft Landing, Market Intelligence, Strategic Advisory, Investment Banking via Sacramentum Capital) + 4 investment sectors on `/invest` (Real Estate, Technology, Agriculture & Forestry, Special Situations) | Service and sector pages `FIRM` |
| Places + location vs. service area | n/a — one country, no city pages | No location or combo family. Montevideo / Punta del Este / José Ignacio / Piriápolis appear as sections of the Real Estate page, not as pages |
| Keyword → URL map with volumes | **complete** for ES / EN / DE (SE Ranking, 12 databases) + AI answer tests | Pages with volume are `FIRM`; GEO-only pages are `PROVISIONAL` |
| Growth expectations | partial — the client wants articles, guides and a third language; no target page count | Stack is already Next; not affected |
| Primary conversion goal | **present** — "Book a consultation" (proposal) → contact form (Formspree); secondary: guide downloads with contact details (proposal) | §9 `FIRM` |
| Old URLs (relaunch) | **present** — current routes on `main` | §10 redirect map |
| `content/` files | partial — stage-1 copy in `data/translations.ts` (EN/ES) + Technology (EN) + Sacramentum Capital (PDF) | Component catalogue `PROVISIONAL` for new pages |

**Not waited for:** German copy, guide PDFs, video, Sacramentum Capital logo, OG images, verification of tax facts. Each slot is resolved in §7.

### Technical findings that shape the architecture

1. **Locale lives in the browser.** `lib/locale-context.tsx` starts every visit in English and switches to Spanish client-side
   (`localStorage`). Server HTML is always English — this is why Google and ChatGPT never see the Spanish site.
   → Locale must come from the URL and be rendered on the server.
2. **Admin text overrides are fetched client-side** (`/api/translations` → Vercel Blob, after page load). Crawlers see the code
   defaults, not Inés's edits, and visitors see a text swap. → Overrides must be read on the server (cached, revalidated on save).
3. **Per-page titles exist in English only** (`/invest`, `/services`, `/news`, `/blog`, `/contact`, articles); the home has none
   beyond the default. No `metadataBase`, canonical, hreflang, `sitemap.xml` or `robots.txt`.
4. `/services?card=…` deep links (footer) select a carousel card — query-string URLs are not separate pages for search.
5. `/blog` exists with 0 posts.

---

## 2. Sitemap

Same page set in every language unless stated. Slugs per language shown when decision #1 is approved as recommended.
Volume = searches/month (SE Ranking estimate; ES = AR+ES+UY, EN = 7 EN databases, DE = DE+AT+CH).

| # | Page | ES slug | EN slug | DE slug | Type | Family | Primary keyword (volume ES · EN · DE) | Why it exists | Mark |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Home | `/es/` | `/en/` | `/de/` | homepage | — | invertir en uruguay (410) · brand · brand | Entry; brand | FIRM |
| 3 | Why Uruguay (= current `/invest`, sectors hub) | `/es/por-que-uruguay/` | `/en/why-uruguay/` | `/de/warum-uruguay/` | hub | — | invertir en uruguay (410) · is uruguay safe (1.020) · sicherstes land südamerika (600) | Existing page and nav item; links the four sector pages; investor guide download and "Live in Uruguay" video (proposal) | FIRM |
| 4 | Real estate | `/es/inmobiliario-punta-del-este-montevideo/` | `/en/uruguay-real-estate/` | `/de/immobilien-uruguay/` | sector | Topic | casas en punta del este (390), vivienda promovida (390) · uruguay property (1.300), uruguay real estate (790), josé ignacio (350) · haus kaufen uruguay (≈ 480), immobilien uruguay (490), piriápolis (320) | Client sector; strongest search cluster | FIRM |
| 5 | Farmland & forestry | `/es/campos-y-chacras-en-uruguay/` | `/en/uruguay-farmland/` | `/de/landwirtschaft-uruguay/` | sector | Topic | chacras en venta (960), campos en venta en uruguay (480) · land/farmland/farms for sale (≈ 1.200), timberland (400) · weak (estancia uruguay 60) | Client sector; Farmland document download (proposal). DE kept for language parity, links to EN | FIRM (DE: PROVISIONAL) |
| 6 | Technology | `/es/tecnologia/` | `/en/technology/` | `/de/technologie/` | sector | Topic | no data in any language | Client sector; new client-approved copy; Technology guide download (proposal) | FIRM (functional) |
| 7 | Special situations | `/es/situaciones-especiales/` | `/en/special-situations/` | `/de/sondersituationen/` | sector | Topic | no data | Client sector (sold today) | FIRM (functional) |
| 8 | Residency & relocation | `/es/residencia-en-uruguay/` | `/en/uruguay-residency/` | `/de/auswandern-nach-uruguay/` | service | Topic | residencia permanente (390), migraciones uruguay (320), residencia mercosur (170) · moving to uruguay (450), permanent residency (300), visa for us citizens (320) · auswandern nach uruguay (360), uruguay visum (160) | Core demand in all languages; = "Soft Landing" service | FIRM |
| 9 | Tax residency (DE: + exit tax) | `/es/residencia-fiscal-en-uruguay/` | `/en/uruguay-tax-residency/` | `/de/steuern-auswandern-uruguay/` | service | Topic | irpf uruguay (420), residencia fiscal uruguay (140), cambiar residencia fiscal (170) · uruguay taxes (≈ 90) · wegzugsbesteuerung (3.420), 6 astg (820) | Largest GEO gap (2026 regime); DE exit tax. **Copy blocked until facts verified; DE needs a German Steuerberater source/partner** | FIRM (page) · copy OPEN |
| 10 | Second passport | `/es/pasaporte-uruguayo/` | `/en/uruguay-citizenship-second-passport/` | `/de/zweiter-reisepass-uruguay/` | service | Topic | pasaporte uruguayo (470 AR+ES), ciudadanía uruguaya (130) · second citizenship (1.620), uruguay passport (800), second passport (770) · zweite staatsbürgerschaft (270) | "Plan B" in EN/DE; honest residency→citizenship path | FIRM |
| 11 | Retire in Uruguay | — (not built in ES at launch) | `/en/retire-in-uruguay/` | `/de/als-rentner-nach-uruguay/` | service | Topic | — · retire in uruguay (680), cost of living (700), retirement visa (300) · deutsche rente im ausland (340), lebenshaltungskosten (450) | Largest US cluster; strong in DE. ES has no volume → ES visitors served by Residency | FIRM (EN/DE) |
| 12 | Family office & wealth | `/es/family-office-patrimonio/` | `/en/family-office-uruguay/` | `/de/family-office-uruguay/` | service | Topic | wealth management (760 ES, generic) · no data · multi family office (450), vermögensschutz (230) | **The one query where ChatGPT already recommends Sacramentum** (EN + DE); Plan B / asset protection | PROVISIONAL (GEO) |
| 13 | Sacramentum Capital | `/es/sacramentum-capital/` | `/en/sacramentum-capital/` | `/de/sacramentum-capital/` | service | — | no data | Proposal item; trust/track record; = "Investment Banking" service. Content per decision #7 | FIRM |
| 14 | Services (hub) | `/es/servicios/` | `/en/services/` | `/de/leistungen/` | hub | — | no data | Existing; the four service lines, each linking to its page (§8) | FIRM |
| 17 | News (hub) | `/es/noticias/` | `/en/news/` | `/de/nachrichten/` | hub | Articles | — | Existing, "Uruguay in the news" | FIRM |
| 17a | News articles (8) | `/es/noticias/[slug]/` | `/en/news/[slug]/` | `/de/nachrichten/[slug]/` | article | Articles | — | Existing; each links to its sector (proposal) | FIRM |
| 18 | Blog (hub) | `/es/blog/` | `/en/blog/` | `/de/blog/` | hub | Articles | — | Existing, empty; home of future articles (decision #5) | FIRM |
| 19 | Contact | `/es/contacto/` | `/en/contact/` | `/de/kontakt/` | functional | — | — | Required; primary conversion | FIRM |
| 20 | Thank you | `/es/gracias/` | `/en/thank-you/` | `/de/danke/` | functional | — | — | Conversion tracking (GA4/GTM), guide delivery; `noindex` | FIRM |
| 21 | Privacy policy | `/es/privacidad/` | `/en/privacy/` | `/de/datenschutz/` | functional | — | — | Required with forms + GA4 + consent; `noindex` optional | FIRM |
| — | Legal notice / Impressum | `/es/aviso-legal/` | `/en/legal-notice/` | `/de/impressum/` | functional | — | — | Decision #6 | OPEN |
| — | Admin | `/admin` (no locale) | | | functional | — | — | Existing; `noindex`, excluded from sitemap | FIRM |

**Languages:** ES · EN · DE. Retire is EN/DE only; on that page the language switcher's ES link goes to `/es/residencia-en-uruguay/`.

### Pages considered and rejected

| Proposed page | Why not |
|---|---|
| Free zones & incentives (own page) | ES "zona franca uruguay" 460 is mostly Uruguayan locals (UY 320); EN/DE no volume beyond "zonamerica" (navigational). Covered by Technology + the incentives section of Why Uruguay; candidate article later |
| City pages (Punta del Este, José Ignacio, Montevideo, Piriápolis) | Searches are real-estate listings intent ("casas en venta"), which portals win; Sacramentum is not a portal. They become sections of the Real Estate page. Re-evaluate after Search Console data |
| Retire in Uruguay — ES | No measurable Spanish demand; Residency covers it |
| Golden visa / citizenship by investment page | Generic demand for other countries (Portugal, Caribbean); Uruguay has no CBI. Covered honestly inside Second passport |
| Separate "Why Uruguay" and "Invest" pages | Same page today (`/invest`, nav "Why Uruguay") — kept as one (Revision 1) |
| Team page · FAQ page | Dropped in Revision 1: team stays on the home; FAQs inside each topic page |
| Separate "Plan B" page | "plan b" as a search term = the contraceptive pill (ES/EN); the concept lives in Residency, Second passport and Family office copy |
| Comparison pages (vs Paraguay / Portugal / Chile) as pages | Article intent → Blog family (decision #5) |
| Guide landing pages (one per guide) | Download happens in place via a form block; a separate page per PDF adds thin pages |

---

## 3. Page families

| Family | Pages | Composition | Renderer | Mark |
|---|---|---|---|---|
| **Topic pages** (sectors + services) | #4–#12 (9 topics; 8 in ES) | **Fixed template**: hero · intro · key facts with sources · process / how it works · how Sacramentum helps · FAQ (3–6, visible + FAQPage schema) · related topics · CTA band. Optional: guide download, places (real estate), comparison table | one shared renderer, data per page per locale | PROVISIONAL (template), FIRM (family) |
| **Articles** | news (8) + blog (0) | fixed template (existing article renderers, localized) | shared | FIRM |
| **Hubs** | Why Uruguay, Invest, Services, News, Blog | hand-composed from existing sections | per page | FIRM |
| One-offs | Home, Sacramentum Capital, Team, FAQ, Contact, Thank you, legal | hand-composed | per page | FIRM |

No per-page-composition family (no city or combo pages).

**One source of truth:** a page registry (one entry per page: id, family, slug per locale, which locales exist, nav label, parent,
related ids, `robots`) feeds routes, navigation, language switcher, breadcrumbs, `sitemap.xml`, hreflang, canonical and metadata.
Copy stays in the translations layer (editable from admin), keyed by page id and locale.

### Series gates applied

| Family | Volume gate | Content gate | Launch count | Mark |
|---|---|---|---|---|
| Topic pages | one per sector/service actually sold — no gate; GEO pages justified by AI tests | **Decision #3** — who writes 5 new topics × 3 languages | 9 (EN, DE) · 8 (ES) | OPEN (content) |
| Articles (blog) | ≥ 100 searches or explicit GEO reason | Decision #5 | 0 at launch; backlog of 8 in RESEARCH-SUMMARY §2 | PROVISIONAL |

---

## 4. Scope

**S2 · Service Depth** — 21 page types per language (≈ 62 URLs incl. 8 news articles × 3, minus Retire ES).

Why: one country, no location family, but real search volume per topic in three languages.

> Scope is not Craft. The craft level is the existing site's; not revisited here.

---

## 5. Stack

```
STACK   Next.js 14 App Router (existing) — FIRM
WHY     existing codebase · 2 repeated families · 3 locales × ~21 pages · admin text editing (Vercel Blob) · images already optimised via next/image
```

| Question | Answer | Points to |
|---|---|---|
| Repeated page families? | Yes — topic pages, articles | Next |
| Many images needing responsive optimisation? | Yes | Next |
| Real growth expected? | Yes — articles, third language, guides | Next |
| Simplicity of handoff a priority? | No — admin panel already exists | Next |

**Implementation shape** (FIRM unless noted):
- Routes move under `app/[locale]/…` with localized segment names resolved from the page registry; middleware handles `/` (decision #2)
  and legacy redirects (§10). `generateStaticParams` per locale.
- `LocaleProvider` receives the locale from the route instead of `localStorage`; the toggle becomes a **language switcher (ES · EN · DE)**
  that links to the equivalent page via the registry. Choice remembered in a cookie, used only on `/`. Localized URLs never auto-redirect.
- Admin overrides read **server-side** (cached, revalidated when the admin saves). Admin "Textos" panel gains DE.
- `metadataBase`, per-page `generateMetadata` per locale, canonical, `alternates.languages` (hreflang + `x-default`),
  `app/sitemap.ts` and `app/robots.ts` derived from the registry.

---

## 6. Component candidates

`PROVISIONAL` — derived from page-type specs + existing components; re-derive when topic copy exists.

| Section type | Uses | Decision | Variants / note |
|---|---|---|---|
| Page hero | 20+ | 1 component (reuse existing hero pattern) | full / compact |
| Key facts with source | 9 topic pages | new component | stat + label + source link (reuse `StatItem`) |
| Process steps | ~7 | new component | numbered |
| FAQ accordion + FAQPage schema | 9 topics + FAQ page | new component | visible text = schema text (parity) |
| Related topics block | 9 topics + hubs | new component | from registry `related` |
| CTA band ("Book a consultation") | every page | existing `ClosingCTA`, parameterised | — |
| Guide download (form → PDF) | 3 (Invest hub + before contact, Technology, Farmland) | new component | one per guide; built only when its PDF exists (§7) |
| Trust block (team, anonymous cases, legal framework) | home, contact, topic pages | new component (proposal "trust section") | compact / full |
| Language switcher | sitewide | replaces the EN/ES toggle | — |
| Fixed "Book a consultation" button | sitewide (nav) | new | proposal item |
| Breadcrumb | all non-home pages | new | + BreadcrumbList schema |
| Card grid | hubs (Invest, Services, News, Blog) | existing patterns | — |
| Comparison table | Real estate (places), Second passport | local (< 3) | — |

---

## 7. Asset plan

| Slot | Where | Have it? | Resolution | Note |
|---|---|---|---|---|
| Logo | header, footer, `Organization.logo` | yes | use existing | — |
| Sacramentum Capital mark | Capital page | in PDF only | visible placeholder (wordmark) until a file is provided | ask client |
| Topic page hero images | 9 topics | partly (`fotos/`, `public/images`) | existing photos where they fit; else visible placeholder + brief | photo library (proposal) |
| Team photos | Team page | yes (home team section) | reuse | — |
| Open Graph image | every page | no | **omit `og:image`** until a branded image per locale exists | never a guessed path |
| Favicon | sitewide | yes | existing | — |
| `AggregateRating` | — | no | **omit** | — |
| Organization / LocalBusiness facts (address, phone, sameAs) | schema | partly (contact page) | **only verified values**; omit unknown keys | sameAs: LinkedIn, AHK profile |
| Transaction figures (Capital) | Capital page | confidential | **build fails** on an unresolved/unapproved figure token | decision #7 |
| Tax figures (2026 regime) | Tax residency | unverified | **build fails** on unresolved token; section omitted until verified | RESEARCH-SUMMARY §5 |
| "Live in Uruguay" video | Why Uruguay | no | **section not built** — deferred | — |
| Guide PDFs (3) | Invest, Technology, Farmland | no | **download block not built** — deferred per guide | — |

**Photo brief:** `docs/PHOTO-BRIEF.md`, generated after the topic pages are built.

### Deferred sections and what unlocks each

| Section | Deferred because | Unlocked by |
|---|---|---|
| Video "Live in Uruguay" | no file | client sends the video |
| Investor guide download | no PDF | PDF |
| Technology guide download | no PDF | PDF |
| Farmland document download | no PDF | PDF |
| Tax figures in Tax residency | unverified | client/contador confirms the 2026 regime |
| German exit-tax detail (DE Tax page) | needs a German tax source | Steuerberater partner or approved sources |

---

## 8. Internal linking plan

| From | To | Placement |
|---|---|---|
| Home | Why Uruguay, Invest hub, Services hub, the 4 most-searched topics per locale | body + nav |
| Invest hub | 4 sector pages | card grid + body |
| Services hub | Residency (Soft Landing) · Family office (Strategic Advisory / Market Intelligence) · Sacramentum Capital (Investment Banking) | each service card links to its page |
| Residency | Tax residency · Second passport · Retire (EN/DE) · Real estate | body + related |
| Tax residency | Residency · Real estate (tax residency via investment) · Family office | body + related |
| Second passport | Residency · Tax residency | body + related |
| Retire | Residency · Real estate · Why Uruguay | body + related |
| Real estate | Residency · Tax residency · Farmland | body + related |
| Farmland | Family office · Real estate · Sacramentum Capital (agribusiness M&A) | body + related |
| Technology | Sacramentum Capital (tech M&A) · Services | body + related |
| Family office | Sacramentum Capital · Farmland · Real estate · Tax residency | body + related |
| Sacramentum Capital | Family office · Technology · Team | body + related |
| News article | its sector page (proposal: "connect each News article to its sector") | body + related |
| Every page | Contact (CTA band + fixed button) | sitewide |
| Footer | all topic pages of the current locale, legal pages | footer |

Rules: a link target with no page renders as text, never an `<a>`. A link exists only where the page data declares it. Links always stay within the current locale.

---

## 9. Conversion paths

| Page type | Primary CTA | Secondary | Form variant | Sticky | Success state |
|---|---|---|---|---|---|
| All pages | "Book a consultation" → `/{locale}/contact/` | — | — | fixed button in nav (proposal) | — |
| Topic pages | CTA band → contact | guide download where it exists | lead form (name, email, country, interest) | — | thank-you page with the PDF link |
| Contact | consultation form (existing Formspree) | email | consultation (existing fields + minimum-investment line, proposal) | — | `/{locale}/thank-you/` |
| Invest hub / before contact | investor guide download | — | lead form | — | thank-you with PDF |

**Response promise:** `PROVISIONAL` — needs the client's wording (e.g. "We reply within one business day").
A CTA label always resolves to the same destination. Every form submission and download is a GA4 event (proposal).

---

## 10. Redirects

301 from every current public URL. Old URLs served English to crawlers, so they map to `/en/`.

| Old URL | New URL | Status | Note |
|---|---|---|---|
| `/` | locale redirect (decision #2) | 302 | |
| `/invest` | `/en/why-uruguay/` | 301 | |
| `/invest#real-estate` etc. | sector pages | — | fragments are not sent to the server; the hub links to the sectors |
| `/services` | `/en/services/` | 301 | |
| `/services?card=soft-landing` | `/en/uruguay-residency/` | 301 | middleware reads the query |
| `/services?card=investment-banking` | `/en/sacramentum-capital/` | 301 | |
| `/services?card=strategic-advisory`, `?card=market-intelligence` | `/en/services/` | 301 | |
| `/news` · `/news/[id]` | `/en/news/` · `/en/news/[slug]/` | 301 | slug = current id at launch (PROVISIONAL; keyword slugs later with a second redirect hop avoided by doing it now if approved) |
| `/blog` · `/blog/[id]` | `/en/blog/` · `/en/blog/[slug]/` | 301 | |
| `/contact` | `/en/contact/` | 301 | |

---

## 11. Derivations

| Output | Derived from | Confirmed |
|---|---|---|
| Routes per locale | page registry | to implement |
| Navigation + footer | page registry + nav labels (translations) | to implement |
| Language switcher targets | page registry (slug per locale, fallback parent) | to implement |
| `sitemap.xml` (with hreflang alternates) | page registry, filtered by `robots` and existing locales | to implement |
| hreflang + canonical | page registry | to implement |
| Metadata (title, description, OG) | translations per page id + locale | to implement |
| Schema (Organization, BreadcrumbList, FAQPage, Article) | page type + verified facts + visible FAQ data | to implement |
| Related blocks | registry `related` | to implement |

---

## 12. Assumptions

| | Assumption | Basis | What would overturn it |
|---|---|---|---|
| ASSUMPTION: | Old URLs map to `/en/` | crawlers only ever received English | Search Console showing Spanish rankings on old URLs |
| ASSUMPTION: | The 8 news articles exist in ES and get a DE translation | `translations.ts` has ES; proposal includes full German site | client prefers news in EN/ES only |
| ASSUMPTION: | "Soft Landing" ≈ Residency & relocation; "Strategic Advisory" + "Market Intelligence" ≈ Family office & wealth | service descriptions on `/services` | client defines the services differently |
| ASSUMPTION: | The Formspree form stays as the endpoint | current code | client wants a CRM |
| ASSUMPTION: | Admin editing must keep working for all three languages | proposal ("editable from your admin panel") | — |

---

## 13. Approval

| | Name | Date |
|---|---|---|
| Proposed by | Claude | 2026-10-20 |
| Approved by | | |
| Changes requested | | |
