# Keyword & AI research · Summary (ES · EN · DE)

Stage 2 of Sacramentum Advisors, 19–20.10.2026. Input for the **Architecture Checkpoint** (Web System, GATE 2).
Details per language: [`RESEARCH-ES.md`](RESEARCH-ES.md) · [`RESEARCH-EN.md`](RESEARCH-EN.md) · [`RESEARCH-DE.md`](RESEARCH-DE.md).
Raw data: [`data/`](data/).

**Method:** SE Ranking Data API for search volume (AR, ES, UY · US, UK, CA, AU, DE, CH, NL · DE, AT, CH; ≈ 900 keywords + related)
and AI answer tests in ChatGPT and Gemini (32 prompts × 2 engines), with the AI vocabulary measured back in SE Ranking.
Volumes are tool estimates; Search Console will replace them after launch.

---

## 1. The five findings that shape the architecture

1. **The website is invisible today in Spanish and German.** It serves English only (`lang="en"`); Spanish appears client-side after
   clicking "ES". No sitemap, no robots.txt, no hreflang, a generic home `<title>` and English-only titles elsewhere. ChatGPT describes Sacramentum **only from LinkedIn**.
   → The `/es/ /en/ /de/` architecture is the precondition for everything else.

2. **People search topics, not "investing".** "Invertir en Uruguay / invest in Uruguay / in Uruguay investieren" has almost no volume
   in any language. Demand is for **residency, second passport, retirement, real estate, farmland** — and in German, **the exit tax**.

3. **AI answers are the main channel for this audience — and topic pages win them.** In clean ChatGPT tests Sacramentum appears
   only where its LinkedIn already uses the words (**family office**, **Plan B / asset protection**). It never appears for real estate,
   residency, tax or farmland, where firms with a dedicated page win (Guyer & Regules, Andersen, buyer's agents, small firms with
   dated articles). Gemini cites whoever wrote the most specific page.

4. **The 2026 tax regime is the biggest content gap.** Both AIs, in all three languages, give contradictory versions of Law 20.446 /
   the new *régimen de impatriados*. A correct, dated, sourced page becomes the reference. **Figures must be verified first.**

5. **Uruguay XXI's services directory** is the source the AIs use to recommend firms (cited in ES, EN and DE). Listing there is
   the most valuable off-site action.

---

## 2. Proposed page set (same pages in all three languages)

`PROVISIONAL` until the Architecture Checkpoint. Main keyword per language, volume = searches/month (sum of databases).

| Page | ES | EN | DE |
|---|---|---|---|
| Home | invertir en uruguay (UY 390) | (brand) | (brand) |
| Why Uruguay | por qué invertir en uruguay (—) | is uruguay safe 1.020 · safest country in south america 1.940 | sicherstes land südamerika 600 |
| **Residency** | residencia permanente uruguay 390 · migraciones uruguay 320 · residencia mercosur 140 | moving to uruguay 450 · permanent residency 300 · visa for us citizens 320 | auswandern nach uruguay 360 · uruguay visum 160 |
| **Tax residency** (+ DE: exit tax) | irpf uruguay 390 · residencia fiscal uruguay 140 · cambiar residencia fiscal 170 | uruguay taxes ≈ 90 (GEO page) | **wegzugsbesteuerung 3.420 · wegzugsteuer 2.400 · 6 astg 820** (needs German Steuerberater partner) |
| **Second passport** *(new)* | pasaporte uruguayo AR 260 · ES 210 · ciudadanía uruguaya 130 | uruguay passport 800 · second citizenship 1.620 · second passport 770 | zweite staatsbürgerschaft 270 · zweiter reisepass 110 |
| **Retire in Uruguay** *(new)* | costo de vida en uruguay (low) — could be an article | retire in uruguay 680 · cost of living 700 · retirement visa 300 | als rentner nach uruguay 160 · deutsche rente im ausland 340 · lebenshaltungskosten 450 |
| **Real estate** | casas en punta del este 320 · vivienda promovida 390 · inmobiliaria punta del este 480 | uruguay property 1.300 · uruguay real estate 790 · josé ignacio 350 | haus kaufen uruguay ≈ 480 · immobilien uruguay 490 · piriápolis 320 |
| **Farmland & forestry** | chacras en venta 960 · campos en venta en uruguay 480 | land / farmland / farms for sale ≈ 1.200 · timberland 400 | weak (functional; links to EN) |
| **Family office & wealth** *(new as page or section)* | wealth management ES 760 | (family office — no data; **ChatGPT already recommends Sacramentum**) | multi family office 450 · vermögensschutz 230 |
| Free zones & incentives | zona franca uruguay 460 | zonamerica 420 | (functional) |
| Technology · Sacramentum Capital · Team · FAQ · Contact | functional | functional | functional (+ Impressum/Datenschutz check) |

**Priority articles:** Uruguay vs Paraguay (all three languages; in DE ≈ 1.400 related searches, today written by Paraguay promoters) ·
Tax residency 2026 (all three, GEO) · Plan B for Argentinians (ES) · Cost of living / is Uruguay safe / retirement visa (EN) ·
Wegzugsbesteuerung & Uruguay, Mit Familie nach Uruguay – Deutsche Schule (DE) · How to buy property / a farm as a foreigner (all, GEO).

---

## 3. Messages for Inés (all languages)

- **"Independent advice"** is the criterion every AI uses to recommend someone — and ChatGPT questions Sacramentum's independence
  (link to Sacramentum Capital) in every answer about the firm. → Add a short **"How we work / how we are paid"** statement.
- **"Legal residency ≠ tax residency ≠ having assets in Uruguay"** — the clarification that appears in every residency answer.
- **Plan B** works as a message in all three languages; as a search term it exists only in English ("second passport") and German.
- **Family offices** named explicitly — the one audience where ChatGPT already recommends Sacramentum.
- Replace the site's own vocabulary where nobody searches it: *strategic asset acquisition, soft landing, market intelligence,
  agricultural land, luxury residential* → residency, real estate by place, farmland & ranches, etc. (tables in each language file).
- Avoid *haven* (EN), *Steuerparadies / Bankgeheimnis* (DE); speak of lawful diversification and legal certainty.
- Always **"Sacramentum Advisors"**, never "Sacramentum" alone (name collides with religious content).

## 4. Off-site

1. Uruguay XXI services directory. 2. LinkedIn wording aligned with the website. 3. AHK Uruguay profile (already listed).
4. Blog articles per topic, dated and sourced. 5. German Steuerberater partner for the exit-tax content.

## 5. To verify with the client before writing content

| Topic | Why |
|---|---|
| 2026 regime: Law 20.446 (16.12.2025), Decree 95/026, thresholds 12.5M UI / 625k UI per year / 183 days, 6 % → 12 %, closure of 3.5M UI + 60 days route | Contradictory in every AI answer |
| Decree 329/025 — new investment-promotion framework since 1.2.2026 | Affects the incentives page |
| Germany–Uruguay double-tax treaty | Gemini says none; its own source says "since 2011" |
| Switzerland–Uruguay DTA and investment-protection treaty | For Swiss family offices |
| Passport code URY for legal citizens since 2025 | Key fact for the second-passport page |
| Retiree regime Law 16.340 | "Retirement visa" page |
| Fee model / independence; relation to Sacramentum Capital | Independence statement |
| Team languages (German?) | Gemini prefers German-speaking advisors |
| Real estate as own service? | AIs describe it as one |
