# Strategy & Positioning: Agentic AI BI Platform for German SMEs

*Prepared by: Strategy Agent | Date: 2026-11-20 | Input: `01-research.md` (source tags [S#] refer to that report)*
*Working product name: **Zahlwerk** (German for "number works"; a placeholder pending trademark and domain checks)*

> **How to read this document:** Every factual claim refers to the research report. Statements marked **[Assumption]** are strategic choices or planning hypotheses and have not been validated. Statements marked **[Info gap]** mean the research cannot support a judgement yet and further investigation is recommended.

---

## 1. Product Positioning

**Core positioning statement**

> **Zahlwerk is the AI controller for the German Mittelstand: it connects to the ERP, DATEV and Excel files a company already uses, and within weeks delivers German-language, source-traceable finance and sales reporting. It is hosted in Germany and ships with a ready-made works council and GDPR package, so firms without a data team can use agentic BI without DAX, migrations or unpredictable capacity bills.**

**Short form (for pitch decks and website):** *"Your AI controller: from ERP and Excel to reliable figures in weeks, hosted in Germany and approved by the works council."*

**What the statement says, and why**

| Element | Choice | Basis in research |
|---|---|---|
| **Who we are** | An agent that works like a controller (it prepares data, closes reports and answers questions), not a generic dashboard tool | The main barrier is missing know-how (85% of non-users) and low AI skills (66%) [S1]. Agents that do the data engineering themselves address this directly [S1][S17] |
| **For whom** | Mittelstand firms with ERP and Excel but no data team, with the CFO/head of controlling as the buyer | Target profile in research section 3 [S3][S17] |
| **Problem** | Days of manual Excel reporting with data spread over ERP, CRM and spreadsheets | Pain point 1 [S19][S17] |
| **Difference** | (a) German Mittelstand ERP/DATEV/SKR03/04 depth, (b) compliance shipped with the product (works agreement template, AVV, anonymisation by default), (c) flat, predictable pricing, (d) time-to-value in weeks | Differentiation space and opportunities in research sections 2 and 4 [S7][S12][S14][S20] |

**What Zahlwerk deliberately is *not***
- Not an enterprise data platform competing with Fabric, SAP BDC or Qlik on breadth. Those vendors are strong on bundling and ecosystem [S12][S13][S15]. We compete on getting started.
- Not an HR or performance-analytics tool. That keeps us out of the possible Annex III high-risk category from December 2027 [S7] and lowers works council friction [S20].
- Not a replacement for Jedox-style planning (FP&A) in phase 1. We focus on actuals reporting and analysis. Planning can follow later **[Assumption]**.

---

## 2. Target Segment

### Primary segment (beachhead): "Controller-led manufacturers and wholesalers on mid-market ERPs"

| Attribute | Definition |
|---|---|
| Size | About **50–499 employees** (€5–250M turnover range from the research profile) |
| Industry | **Manufacturing and wholesale/distribution** |
| IT landscape | Runs a **non-S/4HANA ERP** (e.g. Microsoft Dynamics/Business Central, proALPHA, abas, Sage, SAP Business One) and/or **DATEV** for accounting, plus many Excel files; no data engineering team |
| Buyer / champion | CFO or head of controlling (economic buyer, together with the managing director); controller as daily user and champion |
| Entry use case | Monthly close reporting, P&L, liquidity, cost centres, then sales and margin analysis |

**Why this segment first**
1. **Ability to buy.** Firms with more than 50 employees are more than twice as likely to have completed a digitalisation project as the smallest firms, and the bottom half of firms hold almost no digital capital [S3]. AI adoption is also much higher in the 20+ employee population (57%) than across all SMEs (about 25%) [S1][S2]. We start where budgets and readiness exist.
2. **Highest pain with low regulatory risk.** Controlling and finance reporting is high-pain (days of Excel work) and low HR risk, which makes it the cleanest wedge use case [S19][research section 4].
3. **Gaps in the incumbents.** SAP's agentic stack mainly serves S/4HANA cloud customers. ECC, on-prem and Business One users must migrate first, and the stack is costly for firms under 500 employees [S13]. Power BI Copilot needs paid capacity and DAX/Power Query skills [S12]. Firms on mid-market ERPs without a data team are the least well served by both.
4. **Industry fit.** Manufacturing and trade are named as the core of the target profile [S3][S17]. Qlik's installed base there [S15] shows that these firms do buy analytics, which helps budget justification.

**[Info gap]** No public count of firms in this segment exists, and there is no data on ERP vendor market shares in the Mittelstand [research 1.3, section 4]. **Before committing the connector roadmap, we need primary research: the size of the segment and which 2–3 ERPs dominate it.** The segment boundaries (50–499, manufacturing/wholesale) are an inference, not a published statistic.

### Secondary segment (phase 2): "Smaller DATEV-centred firms, reached through tax advisors"

| Attribute | Definition |
|---|---|
| Size | About **20–49 employees** |
| IT landscape | Accounting mainly through DATEV and an external tax advisor; Excel for everything else |
| Entry use case | Standardised P&L, liquidity and key-figure reporting from DATEV data |

**Why second, not first:** These firms are more cash-constrained and hesitant [S3], so direct acquisition is expensive. Their accounting data, however, runs through a small number of tax advisors, who are named in the research as trusted channels [research section 4]. A productised, low-price DATEV package sold through tax advisors could reach them efficiently once the DATEV connector exists for the primary segment **[Assumption]**.

**Deprioritised for now**
- **SAP S/4HANA customers:** SAP Joule agents are the natural choice for them [S13].
- **Salesforce-centric firms:** Tableau Next/Agentforce fits there [S14].
- **Micro-firms (under 20 employees):** low digital capital and budgets [S3].
- **B2B services:** part of the research profile, but they lack the ERP/inventory/margin complexity that makes our wedge valuable. Revisit later **[Assumption]**.

---

## 3. Differentiation Strategy

### 3.1 Competitive map: where each competitor is weak for our segment

| Competitor | Their weakness for our segment [research section 2] | Our counter |
|---|---|---|
| **Excel (the real competitor)** [S19] | Manual, error-prone, days per monthly close | Automates the close reports while keeping Excel as an export and input channel, so controllers do not have to give up their tool |
| **Power BI + Copilot / Fabric** [S12] | Copilot needs paid capacity (F2 from about US$262/month list); needs DAX/Power Query; US vendor | No modelling skills required; flat price that includes the AI; German hosting |
| **SAP SAC / BDC + Joule** [S13] | Cloud-first; Business One and ECC users must migrate first; costly under 500 employees | Works with the ERP as it is today, with no migration needed |
| **Tableau Next / Agentforce** [S14] | CRM-centric; reportedly about US$40/user/month (unverified) | ERP- and finance-centric; no per-user AI fees |
| **Qlik** [S15] | Enterprise complexity; no public pricing for agentic features | Transparent public pricing; set up in weeks |
| **Jedox, Bissantz** [S16] | Strong with controllers but not agent-native | Agent-native from day one. Possible partner rather than rival: we cover actuals and automation, they cover planning **[Assumption]** |
| **Zeit AI, Scavenger AI, amber** [S17][S18] | Early stage, small teams; same niche | See 3.3: we must differentiate on depth, not on the "sovereign AI BI" claim |

### 3.2 The four differentiating selling points

1. **"Speaks Mittelstand finance": deep German accounting and ERP logic.**
   Pre-built connectors and domain models for DATEV exports, the SKR03/SKR04 charts of accounts, and the 2–3 most common mid-market ERPs (to be selected after validation). The agent understands German controlling terms (e.g. *Deckungsbeitrag*, *BWA*, *Kostenstelle*) in German-language natural-language queries. Basis: the research lists ERP connectors and SKR logic as both a barrier and the main open differentiation space [research sections 2 and 4].
   **[Info gap]** It is unknown how many competitors already have native DATEV or proALPHA connectors [research section 2]. **This is the most important claim to validate.** If Zeit AI's 600+ connectors already cover these well [S17], the differentiation must shift to the finance domain logic (SKR mapping, close templates) and away from connectivity alone.

2. **"Works council ready": compliance shipped as part of the product.**
   - A **template works agreement (Betriebsvereinbarung)**, written with an employment-law firm, plus a technical fact sheet for the works council.
   - **Employee-level data is anonymised or aggregated by default** (e.g. no sales-per-employee views unless explicitly configured), and audit logs can be restricted. Under BAG case law, being objectively capable of monitoring is enough to trigger co-determination [S20]. Defaults that limit this capability shorten the negotiation.
   - **AVV, subprocessor list, LLM-routing disclosure, no training on customer data**; AI-literacy onboarding material (Art. 4) and Art. 50 transparency labels [S7].
   - This turns the barriers with the highest cited share (data protection 66%, legal uncertainty 56%) [S1] into selling points. None of the competitor profiles in the research mention a works council package [research section 2]. *That is not proof that none exists, but it suggests a gap.*

3. **"Every figure has a receipt": traceability that controllers can audit.**
   Every number in an answer or report links back to the ERP or DATEV booking it came from. Accuracy and traceability are decision criterion 3 [research section 3]. **Note:** Zeit AI already claims transaction-level traceability [S17], so this is **table stakes, not a unique feature**. We must have it, but we cannot lead with it.

4. **"One price, no surprises": predictable pricing.**
   A flat monthly price per company (by tier, based on data sources or company size), with AI usage included and **no capacity units and no per-user AI surcharge**. Cost uncertainty is cited by 54–63% [S1], and capacity-based pricing from Microsoft and Tableau makes it worse [S12][S14]. A low-entry, fixed-scope starter package fits tight budgets [S3].
   **[Info gap]** The research contains no data on willingness to pay or competitor price points for German startups. **Price levels must come from discovery interviews.** The Power BI F2 entry price (about US$262/month list) [S12] is a useful external anchor that buyers will compare us against.

### 3.3 Hosting and sovereignty: necessary, but not enough on its own

German hosting is the **top decision criterion**: trust (62%) and country of origin (48%) outweigh cost (19%), and 69% would use a German AI provider versus 41% for a US one [S10]. Zahlwerk will therefore run on German sovereign infrastructure (STACKIT, Delos or AWS European Sovereign Cloud [S11]; final choice **[Info gap]**, compare cost and LLM availability), with an open-model option and EU-only LLM routing.

However, Zeit AI (German data centres) and amber (sovereignty pitch) already make this claim [S17][S18]. **Sovereignty gets us onto the shortlist but does not win the deal.** We win on points 1, 2 and 4 combined: finance depth, works council readiness and predictable pricing, delivered through a trusted local channel (section 4).

### 3.4 Positioning against the AI-native startups (the hardest question)

| | Zeit AI [S17] | Scavenger AI [S18] | amber [S18] | **Zahlwerk** |
|---|---|---|---|---|
| Core pitch | Autonomous data engineer for the mid-market | AI-powered BI for the European Mittelstand | AI data layer, sovereignty | **AI controller: finance-first agentic BI** |
| Lead user | Data/IT side (inferred from the pitch) | Not specified in research | Data layer (inferred) | **Controller / CFO** |
| Funding | €5M | €2.5M seed | €7M Series A | Pre-seed **[Assumption]** |

**Strategic choice:** Instead of being a horizontal data platform, we take a **vertical, function-specific position: finance and controlling first**. This is narrower, but it gives a clear buyer (CFO), a clear wedge (monthly close), and a space that is hard for horizontal players to copy quickly without domain content. **[Info gap]** The research does not detail the startups' actual product depth, pricing or customers. A hands-on competitor teardown (demos, pricing requests, customer reference calls) is recommended before final messaging.

---

## 4. Go-to-Market Plan (GTM)

### 4.1 Channel strategy

The Mittelstand buys through trusted local IT system houses, consultancies, tax advisors and chambers, and direct online sales alone are unlikely to work [research section 4, qualitative inference]. We therefore combine **founder-led direct sales for the first reference customers** with **partner channels for scale**.

| Channel | Role | Why | Phase |
|---|---|---|---|
| **Founder-led direct sales** to CFOs/controllers | Win design partners and first references | Local peer references are decision criterion 5 [research section 3]; partners need proof before they resell | 0–1 |
| **ERP system houses / implementation partners** (for the selected mid-market ERPs) | Main scale channel; they also handle onboarding | Trusted advisors that already own the customer relationship and ERP data access [research section 4] | 1–2 |
| **Tax advisors (Steuerberater)** | Channel for the DATEV-centred secondary segment | Trusted channel named in research; access to DATEV data [research section 4] | 2 |
| **IHK (chambers) events and regional Mittelstand networks** | Credibility and lead generation, especially in AI-literacy formats | Chambers named as trusted channel [research section 4]; the Art. 4 AI-literacy duty creates demand for training [S7] | 1–2 |
| **German-language content marketing** (LinkedIn, webinars, guides) | Inbound demand and education | Targets the skills gap [S1] and the legal uncertainty: e.g. "Works council and AI agents: a guide", "From BWA to dashboard in 30 days" | 0–2 |
| **Funding support service** | Lower the entry barrier | Help customers apply for state digital bonuses (e.g. Digitalbonus.Bayern until end-2027, Hessen DIGI-Zuschuss) and the KfW ERP-Förderkredit Digitalisierung [S8][S9] | 1–2 |
| **Trade fairs** | Later-stage brand building | **[Info gap]** The research names no specific fairs or their cost-benefit for this segment. Evaluate in phase 1 | 2 |

**Regional focus [Assumption]:** Start in Bavaria and Hesse because both still have state digital grant programmes [S8], which makes the funding argument usable there. The density of target firms per state was not researched **[Info gap]**.

### 4.2 Phased plan

**Phase 0 — Validation (months 0–3)**
- 20–30 discovery interviews with CFOs/controllers in the primary segment. Goals: (a) which ERPs they run, (b) willingness to pay, (c) how they experience works council and data protection hurdles in practice.
- Competitor teardown of Zeit AI, Scavenger AI and amber; check whether they have native DATEV and proALPHA/abas connectors.
- Select the **first 2 ERP connectors plus DATEV** based on the results.
- Draft the works agreement template and AVV package with an employment and data protection law firm.
- Choose the hosting provider (STACKIT / Delos / AWS ESC) and EU LLM routing.
- **Exit criterion [Assumption]:** at least 3 signed design-partner letters of intent.

**Phase 1 — Design partners and first paid pilots (months 3–9)**
- 3–5 design partners, then fixed-price pilots with a clear promise, e.g. **"Automated monthly close report in 30 days"** (time-to-value in weeks is decision criterion 2 [research section 3]).
- Measure and document hours saved per monthly close, error reduction, and works council approval time. These become case studies, since peer references are a key buying criterion [research section 3].
- Recruit 2–3 ERP system-house partners and co-sell the first deals with them.
- Start the German content programme and the first IHK AI-literacy workshops.
- **Exit criterion [Assumption]:** 5+ paying customers, 2+ referenceable case studies, at least one works agreement signed using our template.

**Phase 2 — Partner-led scaling (months 9–18)**
- Partner programme for system houses (certification, revenue share, onboarding playbook).
- Expand use cases from finance to **sales and margin analysis** (second wedge [research section 4]).
- Launch the productised **DATEV package for tax advisors** (secondary segment).
- Add the next ERP connectors based on pipeline demand.
- Evaluate trade fair presence and a possible planning partnership (e.g. with an FP&A vendor) **[Assumption]**.

**Phase 3 — DACH expansion (from about month 18)**
- Austria and Switzerland have similar Mittelstand structures and speak German [research section 4]. Note that Austria's KMU.DIGITAL programme ends after 2027 [S8], so the funding argument there is time-limited.
- **[Info gap]** Swiss data protection rules, local ERP/accounting standards and channel structures in AT/CH were not researched.

### 4.3 Risks to this plan and mitigations

| Risk | Basis | Mitigation |
|---|---|---|
| Microsoft or SAP bundle "good enough" agentic BI at near-zero marginal cost | [S12][S13] | Stay out of S/4HANA and M365-heavy accounts; compete on time-to-value, finance depth and works council readiness; offer Excel and Power BI export instead of fighting them |
| A funded startup (e.g. Zeit AI) covers the same connectors and finance logic | [S17][S18] | Phase 0 teardown; stay vertical (finance-first); move fast with partner exclusivity in selected ERP ecosystems **[Assumption]** |
| Long sales cycles because of works council and DSB reviews | [S20] | Pre-packaged works agreement template, DSB fact sheet, anonymisation by default |
| Weak economy and tight budgets | [S3] | Low-entry fixed-price pilot; state grant and KfW loan support [S8][S9] |
| Use cases slide into HR/performance evaluation and become high-risk | [S7] | Product policy: no employee performance scoring; contractual use restriction |

### 4.4 Open questions for the next steps (summary of information gaps)

1. Size of the 50–499-employee manufacturing/wholesale segment and its ERP vendor distribution.
2. Native DATEV/proALPHA/abas connector coverage among competitors, especially the German startups.
3. Willingness to pay and acceptable price levels for a flat company-level subscription.
4. Current, representative data on Excel's share in Mittelstand controlling (the latest figures date from 2009–2017 [S19]).
5. The best sovereign hosting provider for cost and LLM availability.
6. Regional density of target firms, relevant trade fairs, and AT/CH regulatory and channel conditions.
