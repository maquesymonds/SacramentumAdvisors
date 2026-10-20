# Keyword research · English

Stage 2 of Sacramentum Advisors. Same method as [`RESEARCH-ES.md`](RESEARCH-ES.md): SE Ranking for *how much* is searched,
AI answer tests (ChatGPT, Gemini) for *how people ask, what they get told and who gets cited*.

**Audience:** US/Canadian HNWIs and retirees ("gringos") and European HNWIs who search in English from their own country
(Germany, Switzerland, Netherlands, UK). That is why English keywords are measured in seven databases, not only the US.

---

## 1. SE Ranking (19.10.2026)

Databases: US, UK, CA, AU, DE, CH, NL. 200 seed keywords + related keywords and questions (US) for 10 seeds.
Raw data: [`data/serank-en-volumes.csv`](data/serank-en-volumes.csv), [`data/serank-en-related-questions.csv`](data/serank-en-related-questions.csv).

**English demand is several times larger than Spanish**, and ~60 % of it comes from the US. 119 of 200 seeds have data
(Spanish: ~40 %). Europeans do search in English: DE shows up in most clusters (e.g. "uruguay vs chile" 390 in DE).

Volumes = searches/month, sum of the seven databases unless stated (tool estimate, not measured).

| Cluster | Keywords with volume | Reading |
|---|---|---|
| **Retire / move / live** | retire in uruguay · retirement in uruguay (680 each, mostly US) · cost of living in uruguay (700) · is uruguay a good place to live (650) · best country in south america to live (750) · moving to uruguay (450) · relocate to uruguay (390) · uruguay quality of life (200) · uruguay retirement visa (260 US) | Largest Uruguay-specific cluster. The American "move/retire" intent is the biggest door into the site |
| **Safety & comparisons** | safest country in south america (1.940) · is uruguay safe (1.020) · uruguay vs argentina (1.460) · uruguay vs chile (500, 390 from DE) · uruguay vs paraguay (280) · uruguay vs costa rica (100) · uruguay vs portugal (80) | Decision-stage research; ideal for articles and GEO |
| **Residency & visas** | uruguay permanent residency (300) · uruguay residency (290) · uruguay residency requirements (210) · uruguay visa for us citizens (320 US) · uruguay immigration (350) · uruguay immigration lawyer (90 US, CPC 1.83 — buying intent) · uruguay digital nomad visa (180) | Core service page |
| **Citizenship / second passport / plan B** | second citizenship (1.620) · uruguay passport (800) · second passport (770) + "how to get a second passport" (390 US) · uruguay citizenship (630) · citizenship in uruguay (480 US) · how to get uruguay citizenship (110) · uruguay citizenship by investment (170) · flag theory (180) · plan b passport (90) · residency by investment (480) | **"Plan B" in English = second passport / second citizenship / flag theory.** Uruguay has no citizenship-by-investment — explaining that honestly is a GEO opportunity |
| **Golden visa / CBI (generic)** | golden visa (10.840) · citizenship by investment (3.710) · uruguay golden visa (120) | Generic, dominated by Portugal/Caribbean. Only "uruguay golden visa" is ours |
| **Real estate** | uruguay property (1.300 US) · uruguay real estate (790) · houses for sale in uruguay / montevideo (390 each) · punta del este real estate (380) · jose ignacio uruguay (350, 210 UK) · carrasco montevideo (310) · la barra uruguay (250) · montevideo apartments for sale (170) · uruguay beach houses for sale (110) | Strong. **UK and Canada search "uruguay real estate/houses for sale"; José Ignacio is a UK/DE search** |
| **Farmland, ranches, forestry** | uruguay land for sale (430) · uruguay farmland for sale (390) · uruguay farms for sale (360) · uruguay farmland (210) · agriculture in uruguay (170) · uruguay ranch for sale (90) · timberland investment (400) · forestry investment (240) · uruguay beef (370) | Clear and almost uncontested (difficulty 3–11) |
| **Wealth / asset protection** | asset protection (7.890, generic US) · offshore asset protection (130) · uruguay banking secrecy (20) | "wealth management uruguay", "family office uruguay", "uruguay private bank" have **no data** |
| **Tax** | uruguay taxes / taxation in uruguay (≈90 cluster) · uruguay tax rate (50) · uruguay income tax (30) | "uruguay tax residency", "uruguay tax holiday" have **no data** in Google — GEO-only topics, as in Spanish |
| **Business** | zonamerica (420) · doing business in uruguay (20) · uruguay company formation (10) | "uruguay free zone", "market entry uruguay", "nearshoring uruguay" **no data** |

**No data** (not searched this way): invest in uruguay (30 only), uruguay investment advisor, soft landing uruguay,
market entry uruguay, uruguay family office, uruguay wealth management, uruguay tax residency, uruguay free zone, uruguay startups.

**First conclusions**
1. In English the site's own vocabulary ("strategic asset acquisition", "soft landing", "market intelligence") has no searches.
   People search **retire / move / live / residency / passport / property / farmland**.
2. The **US retiree/relocator** is the largest searchable audience; the **European HNWI** shows up in real estate (José Ignacio, La Barra),
   comparisons (vs Chile, vs Paraguay) and Montevideo.
3. **Plan B** exists in English as **second passport / second citizenship / flag theory** — a clear content angle.
4. As in Spanish: tax residency, tax holiday, family office and wealth topics are **AI-answer topics, not Google topics**.

---

## 2. AI answer tests

### ChatGPT · prompts 1–10 (19.10.2026)

⚠️ **Not a clean test.** All ten prompts were run in one ChatGPT conversation that already knew about Sacramentum; ChatGPT says so
itself ("this is not technically equivalent to ten new chats without memory"). Vocabulary, competitors, sources and answer
structure are usable. **Sacramentum's mentions (prompts 6 and 8) are not** — to be re-run in temporary chats.

| # | Prompt | Firms recommended | Sources cited |
|---|---|---|---|
| 1 | US citizen, $2M, plan B | Guyer & Regules, Andersen + "a US international tax attorney" | gub.uy (Migración), DGI, **IRS** |
| 2 | Retire in Uruguay | Andersen, Guyer & Regules | RetireFinder, Andersen |
| 3 | Second passport | — (official sources only) | gub.uy — Electoral Court, *Carta de Ciudadanía* |
| 4 | German entrepreneur, family + wealth | Guyer & Regules, Andersen | DGI, Guyer & Regules |
| 5 | Uruguay vs Portugal vs Paraguay | — | Portal das Finanças (PT), DGI |
| 6 | Punta del Este / José Ignacio | Guyer & Regules, *(Sacramentum — contaminated)* | DGI, Argenprop, Forbes Uruguay |
| 7 | Farmland / forestry | Andersen, **Atlantika Group**, Uruguay XXI | IMPO, Andersen, Uruguay XXI (2026 forestry report) |
| 8 | Family office | Guyer & Regules, Andersen, Atlantika, *(Sacramentum — contaminated)* | **Uruguay XXI Investor's Guide**, LinkedIn |
| 9 | European tech company | Uruguay XXI, Guyer & Regules, Andersen; Zonamerica, WTC Free Zone, Aguada Park | **Uruguay XXI — Investor Service Directory**, Uruguay XXI FAQ |
| 10 | What is Sacramentum | — | **LinkedIn only** ("end-to-end advisory… invest, relocate, or purchase property", "2–10 employees") |

**Readings**

1. **In English the competition is two firms: Guyer & Regules and Andersen.** They appear in 7 of 9 thematic answers, because they
   publish service pages for exactly these topics (residency, tax residency, relocation, farmland, private clients). Atlantika Group
   appears for real assets. In Spanish the field was wider; in English it is concentrated — and beatable with equally specific pages.
2. **Uruguay XXI appears again as the source for "who helps"** (Investor's Guide, Investor Service Directory). The listing there is
   now confirmed as a priority in both languages.
3. **ChatGPT still describes Sacramentum from LinkedIn**, not from the website (which only serves English to crawlers but has
   generic titles and no service pages per topic).
4. **Audience-specific angles the answers raise — each one is a section or article:**
   - *Americans:* US citizens stay taxed on worldwide income; FBAR / foreign-account reporting; "hire a US international tax attorney".
   - *Germans:* German exit tax on company shareholdings before moving; "coordinated German–Uruguayan team".
   - *Second passport:* Uruguay is **not** citizenship-by-investment. Legal citizenship after 3 years (with family) or 5 (without),
     Article 75 of the Constitution, Carta de Ciudadanía at the Electoral Court, absences > 6 months can restart the count, and the
     **passport nationality notation** issue. Honest, precise content here is rare and highly citable.
   - *Retirees:* monthly budget tables by lifestyle (single/couple, modest/comfortable), Montevideo vs Punta del Este vs Piriápolis,
     "rent 3–6 months first", "high-quality, not low-cost".
   - *Comparisons:* Portugal's NHR closed to new entrants in 2024; Paraguay = territorial and cheap but weaker institutions;
     Uruguay = stability + coastal life + cost.
   - *Asset protection:* framed as **lawful diversification, not secrecy** — the tone Sacramentum should use.
5. **The 2026 tax change appears again** (answers 1, 4, 5): "neither country should be evaluated using outdated expatriate tax guides".

**AI vocabulary measured in SE Ranking** ([`data/serank-en-ai-vocab.csv`](data/serank-en-ai-vocab.csv)) — 69 terms, 44 without data:

| With volume (7 databases) | Total | Note | Use |
|---|---|---|---|
| fbar · us expat taxes · renounce us citizenship | 11.260 · 930 · 1.160 | Generic US tax topics | Mention + link out in the US-audience section; not a target |
| paraguay residency · panama residency | 770 · 410 | Competing countries | Comparison articles ("Uruguay vs Paraguay / Panama residency") |
| piriapolis uruguay | 470 (DE 320) | | "Where to live" section |
| best places to live in uruguay | 190 | | Article / "where to live" |
| portugal nhr · portugal non habitual resident | 170 · 120 | Europeans comparing | Comparison article |
| uruguay citizenship requirements | 150 | | Second-passport page H2 |
| exit tax germany · germany exit tax | 140 · 90 (DE) | | German page (in German: *Wegzugsbesteuerung*) |
| american expats in uruguay | 80 | | US-audience section |
| uruguay forestry | 90 | | Farmland page |
| guyer regules · uruguay xxi · aguada park · comap uruguay | 50 · 40 · 30 · 20 | Brand/navigational | — |

Without data: uruguay naturalization (10), carta de ciudadania, us expat taxes uruguay, uruguay health insurance for expats,
jose ignacio vs punta del este, uruguay free zone benefits, family office uruguay/latin america, employer of record uruguay (20).

### Gemini · prompts 1–9 (19.10.2026)

Prompt 9 arrived truncated, prompt 10 not yet received. Answer 8 came back in Spanish.

**Sacramentum does not appear in any of the nine.**

Gemini lists its sources for every paragraph, which shows **which pages win in English AI answers.** Almost none are big law firms:
they are small firms, relocation services and blogs that publish **specific, dated English articles** ("2026 guide", "step-by-step",
"what changed").

| # | Topic | Firms recommended | Pages cited (the GEO competition) |
|---|---|---|---|
| 1 | US citizen, plan B | — | liveandinvestoverseas.com, henleyglobal.com, **guyer.com.uy (post on 2026 regime)**, nicolasdemodena.com/blog, **modopunta.com "Tax residency in Uruguay 2026 – guide for foreign buyers"**, globaltax.com.uy (several), thewanderinginvestor.com, murblz.com, nomadcapitalist.com, taxsummaries.pwc.com, a LinkedIn post, taxfreeresidency.com |
| 2 | Retire | Uruguay Relocation Companion (relocationuy.com, packages $850–1.800), Aldo's Relocation, **Expat Services Uruguay ("vetted by Uruguay XXI")**, AAF / uruguayrelocation.uy | propertyinuruguay.com, liveandinvestoverseas.com, uruwhy.uy, citycost.org, goresident.com, expatsi.com, getwherenext.com, bullseyeretirement.com, smartasset.com, **uruguayxxi.gub.uy services directory** |
| 3 | Second passport | — | immigrantinvest.com, libertymundo.com, globaltax.com.uy, **rva.com.uy**, luxurypunta.com, uyresidencias.com, gub.uy |
| 4 | German entrepreneur | — | uy.andersen.com, **castellan.com.uy "keys to decide before and after Jan 1 2026"**, outboundinvestment.com, globaltax.com.uy, flytorelocation.com "moving from Germany to Uruguay", uruguaysothebysrealty.com/en/blog "what changed under the 2026 regulations", taxsummaries.pwc.com, irglobal.com, ferrere.com, rva.com.uy, clg.com.uy |
| 5 | Uruguay vs Portugal vs Paraguay | — | paraguaysovereign.com, paraguayexplained.com, nomadsignal.io, imidaily.com, ipanemapartners.com, YouTube, Facebook groups |
| 6 | Punta del Este / José Ignacio | **Property Hunter Uruguay (buyer's agent)**, INGAR, Andersen | laciteuruguay.com, janushermes.com "buying property in Uruguay as a foreigner 2026", **santiagopereyra.com.uy**, ingar.com.uy, nicolasdemodena.com, van-bevern.com |
| 7 | Farmland / forestry | — | **farmlanduruguay.com**, **camposonline.com.uy (EN articles)**, uy.andersen.com, escritorioarrospide.com.uy, investinag.com, uyresidencias.com |
| 8 | Family office | The Private Advisors, Three Sixty MFO, CLG, FDI, Southeast WM, CKC, IBF Negocios, BDA Foderé, Dentons, Alpadis, EY | alpadis.com, dentons.com (2022 article), becaadvisors.com, Zonamerica interviews, **uruguayxxi.gub.uy services directory** |
| 9 | European tech company | — | uruguayxxi.gub.uy (investor guide, startups article, services directory), wtcmontevideofreezone.com, zonamerica.com, rva.com.uy, vui.gub.uy, globaltax.com.uy |

**Readings**

1. **ChatGPT recommends big firms (Guyer & Regules, Andersen); Gemini cites whoever wrote the most specific page.** Sacramentum
   can compete in Gemini (and in Google's AI Overviews, same engine) now — with articles — while building the reputation ChatGPT relies on.
2. **Small players win with one good English article:** modopunta.com, nicolasdemodena.com, castellan.com.uy, santiagopereyra.com.uy,
   farmlanduruguay.com, globaltax.com.uy (which has a page per question). This is the model for Sacramentum's English blog.
3. **Uruguay XXI's services directory is cited a third time** (Gemini 2, 8, 9), and Gemini calls Expat Services Uruguay "vetted by
   Uruguay XXI" because it is listed. Confirmed as the single most valuable off-site action.
4. **The 2026 tax regime is now described in detail — and still inconsistently.**
   - Gemini 4 (citing PwC, Castellan, Sotheby's, Global Tax): **Law 20.446**, in force 1/1/2026; tax holiday for new residents requires
     real estate ≥ **12.5M UI (~USD 2M)**, or **625k UI/year (~USD 100k)** into approved funds, or > 183 days; the old
     **3.5M UI + 60 days route is closed to new residents**; after 11 years a 5-year phase at **6 %**, then **12 %**; foreign rents and
     capital gains now in scope.
   - Gemini 6 still lists the 3.5M UI + 60 days route as available; Gemini 2 still says "0 % for over a decade" without conditions.
   - → A precise, sourced, dated page is still missing from the market. **Verify every figure with the client before publishing.**
5. **New audience-specific facts (to verify):** German exit tax (*Wegzugsbesteuerung*) for ≥ 1 % shareholdings when leaving the EU/EEA,
   and Gemini claims there is no Germany–Uruguay double-tax treaty that solves it (**check — may be wrong**); forced heirship
   (*porción legítima*) on assets located in Uruguay; AML / source-of-funds documentation; retiree regime **Law 16.340**
   (USD 1.500/month + USD 100k home or bonds → duty-free household goods and car); "Uruguay has no separate retirement visa"
   while people search "uruguay retirement visa" (300).
6. **Comparison content is owned by Paraguay promoters** (paraguaysovereign.com, paraguayexplained.com): Uruguay is described from
   its competitors' point of view. A Uruguay-side comparison page fills that gap.

**Gemini vocabulary measured** ([`data/serank-en-gemini-vocab.csv`](data/serank-en-gemini-vocab.csv)) — 50 terms, 37 without data:
uruguay retirement visa (300) · uruguay passport visa free countries (110) · uruguay dual citizenship (80) ·
switzerland of south america (70) · uruguay cedula (70) · upm uruguay (50). Everything about the 2026 regime, forced heirship,
buyer's agents, family offices and relocation services: **no data** — AI-only topics.

### Clean re-run · ChatGPT 6, 8, 10 + Gemini 10

| # | Sacramentum mentioned? | Who else | Source used for Sacramentum |
|---|---|---|---|
| ChatGPT 6 · Punta del Este / José Ignacio | **No** | **Property Hunter Uruguay** (buyer-only, 3 % fee), Guyer & Regules, Posadas, La Cité | — |
| ChatGPT 8 · Family office | **Yes — listed first** under "independent and specialist investment advisers", and in the final shortlist ("interview Sacramentum Advisors and GFA") | GFA Uruguay, CrossFrontier Advisors, Ferrere, Guyer & Regules, PwC, Puente, Nobilis, Gletir | **LinkedIn** ("investors and family offices… invest, relocate or acquire property") |
| ChatGPT 10 · What is Sacramentum | (brand query) | — | **LinkedIn only.** Six areas incl. "Wealth diversification and Plan B strategies" and "Technology market entry". Adds: independence and fee model not verifiable |
| Gemini 10 · What is Sacramentum | (brand query) | — | **sacramentumadvisors.com** + LinkedIn posts + infonegocios.biz. Full team: Inés Bonicelli, **Pablo Mautone (ex J.P. Morgan / Lehman)**, Chiara Toscani, Advisory Board Omar Paganini, Guillermo Dietrich, Paulina Fernández Rubio |

**Readings**
1. **Sacramentum already wins one query cleanly: family office.** That is exactly the phrase its LinkedIn uses. Proof that
   *the words a firm publishes are the words it gets recommended for* — and that the website, today, contributes nothing to ChatGPT.
2. **Gemini reads the website, ChatGPT does not** (ChatGPT's answers never cite sacramentumadvisors.com). Likely causes: no sitemap,
   no robots.txt, a generic home `<title>` (other pages have English-only titles), no page per service. The stage-2 technical work addresses all four.
3. **Pablo Mautone is on the website's team section** (Gemini read it there) — open question from the Spanish research resolved.
4. **ChatGPT flags the independence question every time** ("verify referral fees, commissions"). A short, explicit
   "How we are paid / independence" statement on the site answers it and turns a doubt into a differentiator.
5. Uruguay XXI data point useful for copy: advisory firms in Uruguay managed **USD 42 bn** in 2024, ~88 % for non-residents.

---

## 3. Synthesis · English

### 3.1 What we learned

1. **English has real Google demand** (≈ 4–5× Spanish), led by the US: retire / move / cost of living, residency, second passport,
   real estate, farmland. Europeans search in English too (José Ignacio, La Barra, Piriápolis, "uruguay vs chile" from DE/UK).
2. **"Plan B" in English = second passport / second citizenship / flag theory.** Uruguay is not citizenship-by-investment; the honest
   residency-to-citizenship path (3 / 5 years) is a high-value page.
3. **AI competition is split:** ChatGPT recommends Guyer & Regules and Andersen (and, for family offices, Sacramentum);
   Gemini cites whoever has the most specific, dated English page (modopunta, Castellan, Santiago Pereyra, farmlanduruguay, globaltax).
4. **The 2026 tax regime is the most valuable and most confused topic** across both languages and both AIs.
5. **Uruguay XXI's services directory is cited in both languages** — listing there is the top off-site action.

### 3.2 English page map (draft · §14 format)

`PROVISIONAL`. Same page set as Spanish; the keyword changes per language. Volumes = sum of US, UK, CA, AU, DE, CH, NL (SE Ranking estimate).

| URL | Main keyword | Volume | Intent | Type | Why it exists |
|---|---|---|---|---|---|
| `/en/` | (brand) · uruguay investment advisory | no data | commercial | home | Entry, brand |
| `/en/why-uruguay/` | is uruguay safe · safest country in south america | 1.020 · 1.940 | informational | hub | + uruguay quality of life (200), switzerland of south america (70). Exists today as `/invest` |
| `/en/uruguay-residency/` | uruguay permanent residency · uruguay residency | 300 · 290 | commercial | service | + moving to uruguay (450), relocate (390), visa for us citizens (320), immigration (350), retirement visa (300), requirements (210), digital nomad visa (180) |
| `/en/uruguay-citizenship-second-passport/` | uruguay passport · uruguay citizenship | 800 · 630 (+ citizenship in uruguay 480) | commercial | service | + second passport (770), second citizenship (1.620), how to get a second passport (390), citizenship requirements (150), dual citizenship (80). **New page — also in ES** ("pasaporte uruguayo" AR 260 · ES 210) |
| `/en/uruguay-tax-residency/` | uruguay taxes / taxation in uruguay | ≈ 90 | commercial | service | GEO: 2026 regime, tax holiday, US/German angles |
| `/en/retire-in-uruguay/` | retire in uruguay · cost of living in uruguay | 680 · 700 | commercial | service | + retirement in uruguay (680), is uruguay a good place to live (650), best places to live (190). Largest US cluster |
| `/en/uruguay-real-estate/` | uruguay property · uruguay real estate | 1.300 · 790 | commercial | sector | + punta del este real estate (380), jose ignacio (350), houses for sale in uruguay (390), carrasco (310), la barra (250). Buyer-side positioning |
| `/en/uruguay-farmland/` | uruguay land for sale · uruguay farmland for sale | 430 · 390 | commercial | sector | + farms for sale (360), farmland (210), timberland investment (400), agriculture in uruguay (170), ranch (90), forestry (90) |
| `/en/free-zones-incentives/` | zonamerica | 420 (navigational) | commercial | sector | Functional + tech companies |
| `/en/technology/` | — | — | — | sector | Functional (client request) |
| `/en/sacramentum-capital/` | — | — | — | service | Functional (brand) |
| `/en/family-office/` | (family office uruguay — no data) | — | commercial | service | **GEO: the one query where ChatGPT already recommends Sacramentum.** Could be a section of Services instead — decide at the Architecture Checkpoint |
| `/en/team/` · `/en/faq/` · `/en/contact/` | — | — | — | functional | Trust, GEO answers, required |

**Articles**

| URL | Keyword | Volume | Justification |
|---|---|---|---|
| `/en/blog/uruguay-tax-residency-2026/` | — | no data | **GEO** — the gap in both AIs |
| `/en/blog/uruguay-vs-paraguay-residency/` | uruguay vs paraguay · paraguay residency | 280 · 770 | Passes threshold; today written by Paraguay promoters |
| `/en/blog/uruguay-vs-portugal/` | uruguay vs portugal · portugal nhr | 80 · 290 | Europeans comparing |
| `/en/blog/uruguay-vs-chile/` | uruguay vs chile | 500 (390 DE) | Passes threshold |
| `/en/blog/is-uruguay-safe/` | is uruguay safe | 1.020 | Passes threshold (could live in Why Uruguay) |
| `/en/blog/cost-of-living-in-uruguay/` | cost of living in uruguay | 700 | Passes threshold (could live in Retire) |
| `/en/blog/buying-property-in-uruguay-as-a-foreigner/` | buying property in uruguay | 80 | **GEO** — step-by-step format both AIs cite |
| `/en/blog/uruguay-retirement-visa/` | uruguay retirement visa | 300 | Passes threshold; answer: there is no separate visa — Law 16.340 regime |

### 3.3 Copy changes for Inés (English site)

| Today | Proposal | Why |
|---|---|---|
| Home `<title>` "Sacramentum Advisors" (other pages have English-only titles) | e.g. "Sacramentum Advisors · Invest, Relocate and Get Residency in Uruguay" + one title per page | The home title says nothing about what or where; no title exists in ES/DE |
| Meta description "Principled leadership for strategic asset acquisition… lifestyle assets" | Say what, where and for whom: residency, real estate, farmland, investment, for foreign families and investors | Nobody searches "strategic asset acquisition" |
| Hero eyebrow "Strategic Asset Acquisition" | **Residency, real estate and investment in Uruguay** | Matches searches and how AIs describe the firm |
| Hero "…Latin America's premier **haven**" | Drop "haven" | In English it reads as *tax haven*; both AIs frame Uruguay as lawful diversification, not secrecy |
| Sector "Agricultural Land" | **Farmland & ranches** | "uruguay farmland/farms/land for sale" ≈ 1.200 |
| Sector "Luxury Residential" | **Real estate in Punta del Este, José Ignacio & Montevideo** | Searches are by place, not by "luxury" |
| Sector "Estancias & Equestrian" | Merge into Farmland & ranches | One strong page |
| Service "Soft Landing Partnerships" | **Residency & relocation** (soft landing as subtitle) | "soft landing uruguay" = 0; residency/relocate/moving ≈ 1.500 |
| — (new) | **Second passport / path to citizenship** | 3.000+ searches; nobody explains it honestly |
| — (new) | **Plan B** as a message ("Uruguay as your plan B") | ChatGPT already associates Sacramentum with "Plan B strategies" from LinkedIn |
| — (new) | **Family offices** named explicitly in Services | The one query where ChatGPT recommends Sacramentum |
| — (new) | Short "**How we work / independence**" statement (fee model, no undisclosed commissions) | ChatGPT raises the independence question in every answer about Sacramentum |
| "tax holiday for tax residents" (Why Uruguay) | Rewrite to the **2026 regime** once verified | Outdated statements are what AIs flag |

### 3.4 Off-site (GEO)

1. **Uruguay XXI services directory** — cited in both languages, both AIs.
2. **LinkedIn company page** — ChatGPT's only source on Sacramentum. Keep wording identical to the website (Plan B, family offices,
   residency, real estate, farmland).
3. **English articles on the blog**, dated and sourced — the format Gemini cites from small firms.

### 3.5 To verify with the client

- 2026 regime figures (Law 20.446: 12.5M UI, 625k UI/year, 6 % → 12 %, closure of the 3.5M UI + 60 days route for new residents).
- Germany–Uruguay double-tax treaty status (Gemini says none; likely wrong).
- Retiree regime Law 16.340 details.
- Whether Sacramentum is paid only by the client (independence statement).
