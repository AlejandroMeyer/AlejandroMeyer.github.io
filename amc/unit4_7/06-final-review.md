# Project Integration Report: Zahlwerk

*Prepared by: Reviewer Agent | Date: 2026-11-20 | Inputs: `01-research.md`, `02-strategy.md`, `03-copywriting.md`, `04-prototype/index.html`, `05-qa-report.md`*

## Executive Summary

The team took Zahlwerk from market research to a QA-checked landing page. The research is well sourced and honest about what it could not find. The strategy turns it into a clear, defensible position: a finance-first "AI controller" for 50–499-employee manufacturers and wholesalers on non-S/4HANA ERPs, with works-council readiness and flat pricing as the main selling points. The copy and the prototype follow that strategy closely. The chain from research to prototype holds together better than usual. The weak spots are not consistency between stages. They are (1) a statistic that is attributed to the wrong population and carried into the pitch, (2) an English-only page for a buyer group the product says it serves in German, (3) copy that describes as finished things the strategy still lists as Phase 0 to-dos, and (4) no direct answer anywhere in the customer-facing material to the hardest strategic question: why Zahlwerk instead of Zeit AI. The concept is a credible basis for discovery interviews. It is not yet ready to put in front of customers or investors.

## Stage Outputs Overview

| Stage | Output | Status |
|---|---|---|
| 1. Research | `01-research.md`: trends, 6 competitor groups, ICP, barriers and opportunities, 20 sources | Complete. Strong sourcing; there are gaps in market size, ERP market shares and current Excel usage, and they are labelled |
| 2. Strategy | `02-strategy.md`: positioning, beachhead and secondary segment, 4 differentiators, startup comparison, 4-phase GTM, risks, open questions | Complete. Clearly separates facts, [Assumption] and [Info gap]; no pricing hypothesis or unit economics |
| 3. Copywriting | `03-copywriting.md`: slogan, website copy, 8 pitch points, explicit guardrails | Complete. Follows the strategy; one statistic misattributed; the pitch is not a full deck |
| 4. Prototype | `04-prototype/index.html`: single-page landing site, 201 lines | Complete as a demo. Matches the copy word for word; English only; does not show the product |
| 5. QA | `05-qa-report.md`: 0 must-fix, 6 should-fix items | Complete. Accurate within its scope; the should-fix items were not applied (no fix round) |

## Strengths

- **Facts and assumptions are kept apart all the way through.** The [Assumption] and [Info gap] labels in the strategy become explicit copy guardrails (no savings figures, prices, customer counts, or named ERPs). QA then checks the page against those guardrails. This discipline is the project's best quality.
- **The strategy faces the uncomfortable facts.** It says traceability is table stakes because Zeit AI already claims it, that sovereignty "gets us onto the shortlist but does not win the deal", and that the DATEV/proALPHA connector advantage is unproven. It then narrows to a vertical, CFO-led wedge instead of claiming broad advantages.
- **Barriers become features.** Works council co-determination (§ 87 BetrVG), GDPR/AVV and EU AI Act exposure are researched with sources, turned into a productised compliance package, and given a prominent place in the copy and on the page. The note "does not evaluate employee performance" ties back to keeping out of Annex III.
- **The stages are consistent.** The hero, the four benefits, the "receipt" callout and the CTA follow positioning statement → differentiators → copy → HTML with no drift. The lead message order matches the strategy's priorities: finance depth, works council, pricing, time-to-value. Traceability correctly comes second.
- **GTM fits the buyer.** Founder-led selling to win design partners, then ERP system houses, tax advisors and the IHK, matches the research finding that the Mittelstand buys through trusted intermediaries. The phases have exit criteria.

## Areas for Improvement

1. **A statistic is attributed to the wrong group.** Pitch point 6 says "69% of *firms* would use a German AI provider". Source [S10] is a Bitkom survey of 1,005 *consumers*. The same source is used in the research and strategy as B2B decision criteria ("trust 62%, country of origin 48% outweigh cost 19%"). The sovereignty argument is plausible, but its main number does not describe buyers. An investor or CFO who checks it will lose trust, and this is exactly the "every figure has a receipt" promise the product makes. Pitch point 2 also blends the 85% figure (non-users) with the 66% figure (AI users) as if they described one group.
2. **The page language does not fit the market.** The product's pitch is German-language controlling for German CFOs, but the prototype is `lang="en"` with only an English slogan. The German slogan exists only as an "alternative for testing". QA did not flag this. A German-first page (with English as an option) is needed before any customer sees it.
3. **The copy describes unbuilt things as finished.** "Template works agreement drafted with employment-law specialists", "EU-only AI processing" and the DATEV/SKR connectors are all Phase 0 to-dos or open [Info gap] items in the strategy (the law firm is not engaged and the hosting/LLM provider is not chosen). This is fine for a concept study. It has to be fixed before publishing, because German consumer-protection law (UWG) and the trust-first buyer both punish unsupported claims.
4. **The competitive answer is missing from the customer-facing material.** The strategy calls the startup comparison "the hardest question". Yet neither the copy nor the pitch points mention Zeit AI, Scavenger AI or amber, or explain why a finance-first position beats Zeit AI's 600+ connectors. The pitch also has no slides on market size, business model, team or the funding ask. It is a message outline, not a deck.
5. **The scope creeps slightly.** The hero promises "finance *and sales* reporting in weeks", but the strategy moves sales and margin analysis to Phase 2. The positioning statement already contains this wording, so the copy is faithful to it, but the claim gets ahead of the phase plan.
6. **The prototype does not show the product.** A page selling an *agentic* AI controller has no example question and answer, no report mock-up and no traceability click-through. It shows the message only. The most persuasive element for a sceptical controller is missing.
7. **The QA findings are still open.** The slogan/H1 repetition, the missing qualifier on "works council ready" (guardrail 4, which the copywriter set and then did not apply), the 2.2:1 badge contrast and the missing focus styles were all found, but no fix round followed.
8. **The commercial model is still a blank.** The strategy deliberately has no price, ACV, CAC or partner revenue-share hypothesis. Even a rough range anchored to the Power BI F2 figure (about US$262/month) would make the discovery interviews and the partner programme testable.

## Recommended Next Steps (by priority)

1. **Fix the evidence base of the pitch.** Restate the sovereignty point as consumer sentiment, or replace it with B2B data. Separate the 85% and 66% populations. Re-check every number in the copy against its source.
2. **Run the Phase 0 validation before building anything more.** Hold 20–30 CFO/controller interviews covering ERP distribution, willingness to pay and works council experience. Do a hands-on teardown of Zeit AI, Scavenger AI and amber, focused on native DATEV/proALPHA/abas coverage. Whether differentiator 1 holds decides whether the positioning survives.
3. **Write the competitive answer and a pricing hypothesis.** Add a "why not Zeit AI / Power BI Copilot" section to the pitch, plus a tentative flat-price range to test in interviews.
4. **Make the prototype German-first and show the product.** Translate the page (keep English as an option), add one realistic German query example (e.g. "Wie hat sich der Deckungsbeitrag je Kostenstelle im Q3 entwickelt?") with an answer whose figures link back to the source bookings, and apply the six QA should-fix items, especially the works council qualifier.
5. **Rewrite unbuilt features as commitments for a later public version.** Use wording such as "we will provide…" or "available in the pilot…" until the law-firm template, the hosting provider and the connectors exist.
6. **Complete the deck.** Add market sizing (an estimate of the segment count from primary research), business model, GTM phases, team and the funding ask.
