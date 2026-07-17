FRM.register({
  book: 2, reading: 31,
  session: "Counterparty Risk Management",
  title: "Derivatives",
  tagline: "Opens Session 6 by re-grounding counterparty risk in derivatives specifically: a hybrid of market risk (value swings) and credit risk (the other side not paying).",

  teaches: `<p>Exchange-traded vs. OTC derivatives, market participant tiers, and the ISDA Master Agreement's role as the legal chassis every later reading in this session elaborates on.</p>`,

  why: `<p>Derivatives counterparty risk can be managed either bilaterally (netting, collateral) or through a central counterparty (CCP) — the fork in the road that R32-35 walk down both branches of. This reading sets up that fork.</p>`,

  intuition: `<p>Counterparty risk in derivatives is unusual among credit risks because the exposure itself is uncertain in DIRECTION — unlike a loan (where you know you're the lender and roughly what's owed), a derivative's value can flip between positive and negative for either party as markets move. This bilateral, market-driven uncertainty is why derivatives credit risk needs its own dedicated toolkit rather than reusing loan-style credit risk models.</p>`,

  formulas: [],

  concepts: [
    {
      name: "Exchange-traded vs. OTC",
      def: "Exchange-traded: standardized terms, central/margined clearing, easy unwind. OTC: customized terms, bilateral (or centrally cleared by choice) clearing, can be difficult/costly to unwind.",
      related: [{ r: 35, label: "R35 — central clearing, the CCP alternative to bilateral OTC" }]
    },
    {
      name: "Market participant tiers",
      def: "Large players (global banks, huge diversified books), medium players (regional banks, narrower product range), end users (corporates/sovereigns, narrow hedging need).",
      pitfall: "End users often DON'T post collateral and therefore carry outsized counterparty risk relative to their trade size — a frequently tested asymmetry.",
      related: [{ r: 34, label: "R34 — collateral posting mechanics this asymmetry connects to" }]
    },
    {
      name: "ISDA Master Agreement",
      def: "Governs bilateral OTC trades: collateral terms, default/termination events, netting, and the close-out process.",
      intuition: "The legal chassis that every later reading in this session (R33, R34) elaborates on piece by piece.",
      related: [{ r: 33, label: "R33 — netting and close-out formalized" }, { r: 34, label: "R34 — the CSA, a component of this agreement" }]
    }
  ],

  connections: {
    from: [
      { r: 29, why: "Introduced CVA/DVA in a derivatives context; this reading zooms out to the full derivatives counterparty risk landscape." }
    ],
    to: [
      { r: 32, why: "Formalizes the bilateral/uncertain nature of counterparty risk this reading introduces." },
      { r: 35, why: "Central clearing is the structural alternative to the bilateral ISDA framework introduced here." }
    ],
    confused: [
      { what: "Exchange-traded vs OTC", how: "Exchange-traded is standardized and centrally margined (easy to unwind); OTC is customized and typically bilateral (harder to unwind), though it CAN be centrally cleared by choice." }
    ]
  },

  misconceptions: [
    { wrong: "\"End users (corporates/sovereigns) typically post as much collateral as large dealer banks.\"", right: "End users often DON'T post collateral at all, carrying outsized counterparty risk relative to their trade size — a key asymmetry in the market." },
    { wrong: "\"OTC derivatives can never be centrally cleared.\"", right: "OTC derivatives CAN be centrally cleared by choice — the OTC/exchange-traded distinction is about customization of terms, not exclusively about clearing mechanism." }
  ],

  highYield: [
    { stars: 3, what: "End users often don't post collateral, creating outsized counterparty risk relative to trade size.", why: "A frequently tested asymmetry connecting to collateral/CVA discussions later." },
    { stars: 2, what: "Exchange-traded vs OTC comparison (standardization, clearing, unwind flexibility).", why: "Foundational classification, straightforward recall." }
  ],

  recall: [
    { q: "Why do end users (corporates, sovereigns) often carry outsized counterparty risk relative to their derivative trade size?", a: "End users frequently don't post collateral against their derivative positions (unlike large dealer banks), so their actual uncollateralized exposure can be large relative to the trade's notional or economic purpose, even though their overall derivatives book is narrow and hedging-focused." },
    { q: "Can an OTC derivative be centrally cleared? What does this imply about the exchange-traded/OTC distinction?", a: "Yes — OTC derivatives can be centrally cleared by choice. The exchange-traded/OTC distinction is fundamentally about contract STANDARDIZATION (exchange-traded is standardized; OTC is customized), not strictly about clearing mechanism, since OTC trades can still route through a CCP." }
  ],

  hooks: [
    { title: "The fork in the road", text: "This reading is the fork: bilateral (ISDA, netting, collateral — R32-34) on one path, central clearing (CCP — R35) on the other. Everything downstream picks one path or compares both." }
  ],

  summary: `<p><strong>Exchange-traded</strong> (standardized, centrally margined, easy unwind) vs. <strong>OTC</strong> (customized, bilateral or centrally cleared by choice, potentially costly unwind). <strong>Market tiers</strong>: large players, medium players, end users (often don't post collateral — outsized risk relative to trade size). <strong>ISDA Master Agreement</strong> governs bilateral OTC trades: collateral terms, default/termination events, netting, close-out — the legal chassis R33-34 build on.</p>`
});
