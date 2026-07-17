FRM.register({
  book: 5, reading: 93,
  session: "Current Issues in Financial Markets",
  title: "The Credit Suisse CoCo Wipeout: Facts, Misperceptions, and Lessons for Financial Regulation",
  tagline: "AT1 bonds zeroed while shareholders kept something — the creditor hierarchy upended, and CoCos revealed to be far less understood than their yields suggested.",

  teaches: `<p>Contingent convertible bond (CoCo) features and mechanics; the 2008 Bear Stearns rescue compared to the 2023 Credit Suisse rescue; the rationale for writing down Credit Suisse's CoCos; market reaction and lessons learned; and proposed CoCo structural reforms.</p>`,

  why: `<p>The Credit Suisse CoCo wipeout is the definitive real-world test of whether investors actually understood the instruments they were buying — and the answer, resoundingly, was no. This reading connects Book 3's Basel III capital framework (R60) directly to a live, controversial 2023 crisis event.</p>`,

  intuition: `<p>CoCos exist to solve one problem: how does a distressed-but-still-viable ("going concern") bank recapitalize FAST without a government bailout? Answer: build a bond that AUTOMATICALLY converts to equity (or writes down its principal) when a trigger fires — either a MECHANICAL trigger (a predefined capital ratio breach) or a DISCRETIONARY trigger (a regulator's judgment that the point of nonviability, PONV, has been reached). Basel III REQUIRES the discretionary/PONV trigger for CoCos to count as regulatory capital.</p>
  <p>Bear Stearns (2008) and Credit Suisse (2023) solved the SAME underlying problem (a systemically important bank in liquidity distress) with COMPLETELY DIFFERENT TOOLS: the U.S., lacking the authority to force anything directly, built an elaborate SPV (Fed senior tranche $29B + JPMorgan junior tranche $1B) to absorb troubled assets and facilitate a negotiated merger. Switzerland, under emergency law, had the authority to DIRECTLY TRIGGER the CoCo write-down (~CHF16 billion) — a much simpler mechanism, precisely because CoCos had been PRE-DESIGNED for exactly this scenario.</p>
  <p>The controversy: CoCos "worked exactly as designed" (a strong technical defense) — but the write-down happened WITHOUT shareholders being wiped out first, appearing to violate the traditional creditor hierarchy (bondholders senior to shareholders). This surprised the market (CDS spreads showed no anticipation until the day before), triggered lawsuits, and prompted EU regulators to publicly distance themselves — fearing contagion to the $250 billion European AT1 market.</p>`,

  formulas: [],

  concepts: [
    {
      name: "CoCo features and mechanics",
      def: "Two key design features: (1) the TRIGGER (mechanical — predefined capital ratio breach; or discretionary/PONV — point of nonviability, based on regulator judgment), and (2) the LOSS ABSORPTION MECHANISM (conversion to equity at a predefined rate, OR write-down of principal, partial or full).",
      pitfall: "Basel III requires ALL regulatory-capital CoCos to include a DISCRETIONARY (PONV) trigger — a mechanical-trigger-only CoCo does NOT qualify as regulatory capital. Also requires a minimum regulatory-capital-to-RWA ratio (the 'going concern' rule).",
      related: [{ r: 60, label: "R60 — CoCos introduced in the Basel III capital framework context" }],
      memory: "Going concern = still viable, CoCo write-down recapitalizes it to survive. Gone concern = already in liquidation/bankruptcy — a different animal entirely."
    },
    {
      name: "CoCos vs. TLAC bonds",
      def: "CoCos and total loss-absorbing capacity (TLAC) bonds both protect equity and minimize losses, but TLAC bonds specifically ensure G-SIB HOLDING COMPANIES have enough equity to absorb losses and let OPERATING AFFILIATES continue functioning during a resolution — a distinct mechanism from CoCo conversion/write-down.",
      related: []
    },
    {
      name: "The CoCo market and moral hazard",
      def: "CoCos offer higher yields than traditional bonds (a 2013 study: ~2.8% above subordinated bonds, ~4.7% above senior unsecured bonds of the same issuer) due to their lower priority of claim. Over 700 CoCo issuances raised ~$500B (2009-2015); over half include a mechanical trigger with principal write-down; most pre-2015 CoCos were AT1 instruments from developed-market banks.",
      pitfall: "CoCos are favored by well-capitalized, LARGER banks for three reasons: (1) low conversion risk given their health = a yield benefit, (2) senior bondholders benefit from the risk-reduction CoCos provide, (3) issuance historically hasn't hurt (often HELPED) share price. This creates a MORAL HAZARD: shareholders may favor write-down CoCos (rather than equity-conversion CoCos) BECAUSE losses get absorbed by CoCo investors, not shareholders — encouraging excessive risk-taking.",
      related: [],
      memory: "Write-down CoCos let shareholders keep their upside while CoCo bondholders absorb the downside — a structural incentive for shareholders to favor riskier bank behavior."
    },
    {
      name: "2008 Bear Stearns rescue",
      def: "Bear Stearns collapsed from subprime-securitization exposure. The Fed invoked the rarely-used Section 13(3) of the Federal Reserve Act (liquidity support only under 'unusual and urgent circumstances') to facilitate a JPMorgan merger.",
      example: "Mechanism: a collateralized SPV, financed by JPMorgan's $1B junior tranche and the Fed's $29B senior tranche, bought up to $30B of troubled Bear Stearns assets. Share price was initially proposed at $2/share, later raised to $10/share after shareholder pushback. Deal finalized May 2008.",
      related: [{ r: 76, label: "R76 — the repo-market run mechanics behind Bear Stearns' actual liquidity collapse" }]
    },
    {
      name: "2023 Credit Suisse rescue",
      def: "SVB's March 2023 collapse (R92) created systemic contagion spilling into Europe, destabilizing Credit Suisse — which required up to CHF50 billion in liquidity support from the Swiss National Bank.",
      example: "The Swiss National Bank and FINMA (Swiss Financial Market Supervisory Authority) organized a UBS takeover of Credit Suisse. As part of this, nearly CHF16 billion in Credit Suisse CoCos were FULLY WRITTEN DOWN, recapitalizing the balance sheet.",
      pitfall: "Unlike the U.S. in 2008, Switzerland had SIGNIFICANTLY MORE authority under Swiss emergency law — the federal government/FINMA could directly TRIGGER the CoCo write-down (per the CoCo bond documents' PONV clause), avoiding the more complex SPV route entirely.",
      related: [{ r: 92, label: "R92 — the SVB collapse that triggered this exact contagion" }],
      memory: "Same underlying problem (systemic bank rescue), completely different tools — the U.S. built an SPV from scratch (2008); Switzerland just pulled a lever that was already built into the CoCo contract (2023)."
    },
    {
      name: "Rationale for the CoCo write-down",
      def: "The Credit Suisse CoCo bond documents explicitly gave FINMA the authority to trigger conversion/write-down upon reaching the PONV. When FINMA exercised this, the CoCos FUNCTIONED EXACTLY AS DESIGNED.",
      pitfall: "The write-down quickly deleveraged Credit Suisse's balance sheet WITHOUT a complete creditor bailout — this was argued to help AVOID the moral hazard problem of encouraging future risk-taking via expected bailouts. A strong technical/legal defense — but one that clashed hard with market expectations (see below).",
      related: [],
      memory: "'It worked exactly as designed' is a defensible legal argument — but it doesn't mean the market UNDERSTOOD what it was designed to do."
    },
    {
      name: "Market reaction and lessons learned",
      def: "The full CoCo write-down WITHOUT shareholders being materially wiped out first caught investors by surprise — CDS spread analysis showed the market did NOT anticipate the write-down until the day before the takeover. Investors viewed this as a SUBVERSION of the traditional creditor hierarchy (bondholders should rank senior to shareholders in distress).",
      example: "Fallout: non-Swiss European regulators (EU Single Resolution Board, EBA, ECB) publicly distanced themselves, explicitly stating common shareholders would absorb losses FIRST in future crises, followed by AT1 write-down — partly to prevent contagion to the $250 billion European AT1 market. Multiple lawsuits followed, arguing FINMA didn't act in good faith and that the write-down contradicted accepted creditor hierarchy.",
      pitfall: "Investors understood CoCos were RISKIER than ordinary bonds (reflected in higher yields) but likely did NOT fully understand that write-down CoCos are, in effect, JUNIOR IN CLAIM TO EQUITY — a subtler and more severe risk than simply 'higher risk, higher yield.' Confusion was worsened by unclear PONV criteria (no precise, objective definition of when the point of nonviability is reached) and the coexistence of BOTH an automatic (CET1 ratio) trigger AND a discretionary (PONV) trigger in the same instrument.",
      related: [],
      memory: "Higher yield told investors 'this is riskier' — but it didn't tell them 'this ranks BELOW equity in a wipeout,' which is the specific, severe risk that actually materialized."
    },
    {
      name: "Proposed CoCo structural reforms",
      def: "A simplified model: SIMPLE design, OFF-THE-SHELF pricing, EASY recapitalization — with NO automatic or discretionary trigger at all. Instead, the ISSUER gets an OPTION to convert the CoCo's fixed-income component into equity at a specified strike price.",
      pitfall: "This removes REGULATORY judgment from determining whether a trigger has been met (eliminating PONV ambiguity) and makes pricing PREDICTABLE via standard option-pricing models (since it's now a clean issuer option, not a contingent, regulator-dependent event).",
      related: [],
      memory: "CoCos are inherently COUNTERCYCLICAL — they infuse equity exactly when a struggling bank needs capital most, a genuine structural advantage worth preserving even as trigger-design gets reformed."
    }
  ],

  connections: {
    from: [
      { r: 60, why: "CoCos were introduced there as part of Basel III's post-crisis capital framework; this reading is their real-world stress test." },
      { r: 92, why: "SVB's collapse (R92) is the direct contagion trigger that destabilized Credit Suisse, connecting these two 2023 case studies." }
    ],
    to: [],
    confused: [
      { what: "Mechanical trigger vs discretionary (PONV) trigger", how: "Mechanical: automatic, based on a predefined capital ratio breach. Discretionary/PONV: based on a REGULATOR's judgment that the bank has reached the point of nonviability — Basel III REQUIRES the PONV trigger for CoCos to count as regulatory capital." },
      { what: "Bear Stearns' SPV mechanism vs Credit Suisse's direct CoCo trigger", how: "Bear Stearns (2008): the U.S. lacked authority to act directly, so an elaborate SPV (Fed+JPMorgan tranches) was constructed. Credit Suisse (2023): Swiss emergency law gave FINMA direct authority to trigger the pre-built CoCo write-down mechanism — no SPV needed." },
      { what: "'CoCos worked as designed' vs. 'the market was blindsided'", how: "Both are true simultaneously — the LEGAL/TECHNICAL mechanism functioned exactly per the bond documents, but INVESTORS did not anticipate or fully understand that write-down CoCos rank junior to equity in this scenario, causing genuine market shock despite the mechanism's technical correctness." }
    ]
  },

  misconceptions: [
    { wrong: "\"The Credit Suisse CoCo write-down violated the terms of the CoCo bond documents.\"", right: "The write-down was explicitly authorized by the CoCo bond documents, which gave FINMA the authority to trigger conversion/write-down upon reaching the PONV — the CoCos functioned exactly as designed, even though the outcome shocked the market." },
    { wrong: "\"Bondholders always rank senior to shareholders under a CoCo structure, just like ordinary bonds.\"", right: "Write-down CoCos are, in effect, JUNIOR in claim to equity in a PONV scenario — the entire point of the instrument is to absorb losses before equity does in some designs, or at least independently of the traditional hierarchy, which is precisely what surprised and angered investors in the Credit Suisse case." },
    { wrong: "\"The 2008 Bear Stearns rescue and the 2023 Credit Suisse rescue used essentially the same regulatory tools.\"", right: "They used fundamentally different tools — Bear Stearns required building an entire collateralized SPV because the Fed/Treasury lacked direct authority to act; Credit Suisse's CoCo write-down was triggered directly by FINMA under Swiss emergency law, since the mechanism was pre-built into the bond contracts." },
    { wrong: "\"Higher CoCo yields meant investors fully understood the specific risk of a write-down ranking junior to equity.\"", right: "Investors understood CoCos were generally riskier (reflected in yield) but likely did NOT fully grasp the specific, severe risk that a write-down CoCo effectively ranks junior to equity claims — a critical, underappreciated distinction that the Credit Suisse case exposed." },
    { wrong: "\"Proposed CoCo reforms aim to make triggers more precise and better-defined.\"", right: "The proposed reform actually ELIMINATES triggers entirely (both mechanical and discretionary), replacing them with a simple ISSUER OPTION to convert at a specified strike price — removing regulatory judgment from the process altogether rather than refining it." }
  ],

  highYield: [
    { stars: 5, what: "The core controversy: CoCo write-down 'worked as designed' vs. apparent violation of creditor hierarchy — and why write-down CoCos effectively rank junior to equity.", why: "The single most important conceptual tension in this reading, and the crux of the entire market reaction." },
    { stars: 4, what: "Mechanical vs. discretionary (PONV) triggers, and Basel III's requirement that regulatory-capital CoCos include a PONV trigger.", why: "A precise, frequently tested regulatory requirement." },
    { stars: 4, what: "Bear Stearns (2008, SPV mechanism) vs. Credit Suisse (2023, direct CoCo trigger) — comparing rescue mechanisms.", why: "A rich compare-contrast case pair, frequently tested via mechanism-matching questions." },
    { stars: 3, what: "Market reaction: CDS spreads showing no anticipation, EU regulators' public distancing, and the proposed reforms (simple, off-the-shelf, issuer-option-based).", why: "The practical fallout and forward-looking reform direction, good for synthesis questions." },
    { stars: 3, what: "CoCo moral hazard: shareholders favoring write-down CoCos since losses fall on CoCo investors, not equity.", why: "A subtle incentive-structure point worth precise recall." }
  ],

  recall: [
    { q: "Why did the Credit Suisse CoCo write-down of March 2023 catch the market by surprise, despite functioning exactly as the bond documents specified?", a: "CDS spread analysis showed the market did not anticipate the write-down until the day before the takeover — investors understood CoCos were riskier than ordinary bonds (reflected in higher yields) but likely did not fully appreciate that write-down CoCos effectively rank JUNIOR to equity claims in a PONV scenario. The write-down occurred WITHOUT shareholders being wiped out first, which market participants interpreted as violating the traditional creditor hierarchy (bondholders senior to shareholders) — even though the CoCo documents technically authorized exactly this outcome." },
    { q: "Compare the regulatory tools used to rescue Bear Stearns (2008) and Credit Suisse (2023), and explain why they differed so dramatically.", a: "The U.S. Federal Reserve and Treasury had LIMITED direct authority to force a bank rescue in 2008, requiring the Fed to invoke a rarely-used provision (Section 13(3)) and construct an elaborate collateralized SPV (Fed $29B senior tranche + JPMorgan $1B junior tranche) to facilitate a negotiated merger. Switzerland's federal government had SIGNIFICANTLY MORE direct authority under Swiss emergency law in 2023 — FINMA could directly trigger the Credit Suisse CoCo write-down per the pre-existing bond documents, avoiding the need for any SPV at all. The difference reflects both differing legal authority AND the fact that CoCos (which didn't exist as a tool in 2008) were specifically designed to enable exactly this kind of fast, direct recapitalization." },
    { q: "Why did several non-Swiss European regulators publicly distance themselves from FINMA's decision to write down Credit Suisse's CoCos?", a: "The FINMA decision, by writing down CoCo bondholders without first wiping out shareholders, appeared to subvert the traditional creditor hierarchy — causing significant negative market reaction and investor confusion. European regulators (EU Single Resolution Board, EBA, ECB) were concerned this could cause CONTAGION fears across the roughly $250 billion European AT1 market, so they explicitly stated that future banking crises in their jurisdictions would have common shareholders absorb losses FIRST, before any AT1/CoCo write-down — reassuring the broader European CoCo market that FINMA's specific approach wouldn't necessarily be replicated elsewhere." },
    { q: "How does the proposed reformed CoCo structure differ fundamentally from the traditional trigger-based design that caused so much confusion in the Credit Suisse case?", a: "The proposed reform eliminates BOTH mechanical and discretionary triggers entirely. Instead of the instrument converting automatically or at a regulator's judgment, the ISSUER (the bank) is given an OPTION to convert the CoCo's fixed-income component into equity at a predefined strike price. This removes all regulatory judgment/ambiguity about when a trigger is met, and allows the instrument to be priced using standard, predictable option-pricing models — directly addressing the pricing uncertainty and PONV-ambiguity problems that plagued the original design." }
  ],

  hooks: [
    { title: "The lever that was already built", text: "2008: the U.S. had to build an entire machine (the SPV) from scratch to rescue Bear Stearns. 2023: Switzerland just pulled a lever that was already wired into the Credit Suisse CoCo contracts. That's the entire difference between the two rescues in one image." },
    { title: "Higher yield told half the story", text: "Investors knew CoCos paid more because they were riskier — what they didn't fully grasp was that 'riskier' specifically meant 'ranks below equity in exactly this scenario.' The yield premium was real; the specific risk it was compensating for was misunderstood." },
    { title: "It worked, and that's the problem", text: "The Credit Suisse case's deepest irony: the CoCo mechanism performed EXACTLY as engineered — and that flawless technical performance is precisely what triggered lawsuits, regulatory distancing, and a market-wide re-pricing of AT1 risk." }
  ],

  summary: `<p><strong>CoCos</strong>: post-2008 instrument recapitalizing 'going concern' banks via automatic conversion/write-down on trigger. <strong>Triggers</strong>: mechanical (capital ratio) or discretionary/PONV (regulator judgment) — Basel III REQUIRES PONV for regulatory capital status. <strong>Loss absorption</strong>: equity conversion (dilutes shareholders) or principal write-down (partial/full) — favored by well-capitalized banks, creating a moral-hazard incentive toward write-down CoCos. <strong>Bear Stearns (2008)</strong>: limited Fed/Treasury authority → elaborate SPV (Fed $29B + JPM $1B) → negotiated JPMorgan merger. <strong>Credit Suisse (2023)</strong>: Swiss emergency law → FINMA directly triggered ~CHF16B CoCo write-down → UBS takeover, following SVB-driven contagion. <strong>Controversy</strong>: write-down without shareholders wiped out first appeared to violate creditor hierarchy — market genuinely blindsided (CDS spreads), EU regulators publicly distanced themselves (protecting the $250B European AT1 market), lawsuits followed. <strong>Reform proposal</strong>: eliminate triggers entirely, replace with an issuer OPTION to convert at a strike price — simple, off-the-shelf-priced, removes regulatory ambiguity.</p>`
});
