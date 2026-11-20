# QA Report

*Checked: `04-prototype/index.html` (201 lines) against `03-copywriting.md` (including its copy guardrails) and `02-strategy.md`.*

## 🔴 Must fix

None found.

## 🟡 Should fix

1. **The slogan and the H1 repeat each other** (hero, lines 114–115). The `<p class="slogan">` reads "Your AI controller. Reliable figures in weeks, not months." The `<h1>` directly below reads "Your AI controller for the Mittelstand." So the first thing a visitor sees is "Your AI controller" twice. Suggested fix: shorten the pill to "Reliable figures in weeks, not months." or move the slogan to the `<title>` or footer.
2. **"Works council ready from day one" has no qualifier** (Benefit 2, `<h3>`, line 140). Guardrail 4 says "works council ready" must not imply that approval is guaranteed. Suggested fix: change the `<p class="note">` on line 148 to something like "The package speeds up works council talks; approval remains your works council's decision." (Needs copywriter sign-off.)
3. **White numbers on the amber badges are hard to read** (CSS line 62, `.card .num`): about 2.2:1 contrast, below WCAG AA (4.5:1). Suggested fix: `color: var(--ink)` or a darker amber.
4. **Two nav links go to the same place** (lines 104–105): "Pilot" and "Book a demo" both point to `#cta`.
5. **Some link labels promise actions that don't happen** (lines 118–119, 175–178): all five CTAs point to `#demo-notice`. Acceptable for a prototype because the demo notice and footer explain it; a "(demo)" hint or `title` attribute would set expectations.
6. **Minor accessibility and SEO gaps:** no `<meta name="description">`; no `:hover` / `:focus-visible` styles for `.btn-light` and `.btn-outline-light` (the only buttons used); German terms (*Deckungsbeitrag*, *BWA*, *Kostenstelle*, *Betriebsvereinbarung*) could carry `lang="de"`.

## 🟢 Passed

- **HTML validity:** correct doctype, `lang`, charset and viewport; all tags closed and nested; one `<h1>`, `<h2>` per section, `<h3>` per card; every `aria-labelledby` and in-page anchor (`#top`, `#benefits`, `#cta`, `#demo-notice`) resolves.
- **Copy consistency (sentence by sentence):** hero headline, subheadline, CTA labels, trust line, all four benefit cards, receipt box and CTA section match `03-copywriting.md` exactly. The only added line (section lead, line 128) is consistent with the strategy's primary segment.
- **Guardrails:** no savings figures, accuracy rates, customer counts or prices; ERPs named only generically; traceability is a secondary callout, as the strategy requires.
- **Strategy alignment:** AI-controller positioning, finance-first buyer, German hosting, EU-only AI routing, Excel/Power BI export, no migration, no HR or performance use. Nothing contradicts `02-strategy.md`.
- **CTAs:** primary CTA ("Book a 30-minute demo") prominent in the hero and repeated in the CTA section.
- **Mobile layout:** `clamp()` font sizes, `flex-wrap` on header and CTAs, `@media (max-width: 760px)` stacks the grid and makes buttons full width; no fixed widths.
- **Placeholders:** no lorem ipsum, TODOs or `href="#"`; the page clearly states it is a demo and that the "Zahlwerk" name is fictional.

## Summary: deliverable?

**Yes, as a demo prototype.** No 🔴 issues; the HTML is valid, the copy matches `03-copywriting.md` and all guardrails are respected. The 🟡 items are polish; the most worthwhile are the slogan/H1 echo (1), the works-council qualifier (2) and the badge contrast (3).

*QA Agent · venture-team · round 1 (no fix loop needed)*
