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

### Pending

- **Gemini** prompt 9 (complete) and prompt 10 ("What is Sacramentum Advisors").
- **Clean re-run in ChatGPT** (temporary chat, one per prompt) of at least 6, 8 and 10 to measure Sacramentum's real presence.
