FRM.register({
  book: 2, reading: 35,
  session: "Counterparty Risk Management",
  title: "Central Clearing",
  tagline: "The third path alongside bilateral netting (R33) and bilateral collateral (R34): a CCP becomes the buyer to every seller and seller to every buyer, achieving multilateral netting across the whole market.",

  teaches: `<p>Novation and loss mutualization, initial margin vs. variation margin, and compression vs. netting.</p>`,

  why: `<p>Bilateral netting only nets exposures between two specific parties. A CCP achieves something structurally more powerful: multilateral netting across the ENTIRE market of cleared trades, drastically reducing the web of bilateral exposures — at the cost of concentrating risk into the CCP itself, which is why loss mutualization exists as a backstop.</p>`,

  intuition: `<p>Imagine ten banks all trading with each other bilaterally — a tangled web of exposures. Insert a CCP into the middle: now every bank faces only the CCP, not each other. On a member's default, the CCP (via novation) steps in as the substitute counterparty, so the original counterparties never face each other directly. If losses exceed the defaulter's own resources, the CCP draws first on its own capital, then on non-defaulting members' default-fund contributions — spreading ("mutualizing") the loss across the whole membership rather than concentrating it on whoever happened to trade with the defaulter.</p>`,

  formulas: [],

  concepts: [
    {
      name: "Novation and loss mutualization",
      def: "Novation: on a member's default, the CCP closes out the nonperforming side and substitutes itself (or a replacement) as the new counterparty — original counterparties no longer face each other directly.",
      example: "If losses exceed the defaulter's own margin and default-fund contribution, the CCP draws on its own capital and then non-defaulting members' default-fund contributions.",
      pitfall: "This loss mutualization spreads the hit across the whole membership rather than concentrating it on the defaulter's direct counterparties — a structural feature that concentrates systemic importance in the CCP itself.",
      related: [{ r: 33, label: "R33 — bilateral netting, the structure this generalizes to multilateral" }],
      memory: "Novation: the CCP steps between you and your original counterparty. Mutualization: everyone shares the pain if the cushion isn't enough."
    },
    {
      name: "Initial margin vs. variation margin",
      def: "Initial margin: covers worst-case future default losses, driven by market risk (not credit quality), typically cash + highly liquid government securities. Variation margin: trues up daily price changes, driven by daily (or intraday) mark-to-market moves, cash only.",
      pitfall: "Don't confuse the two: initial margin is a forward-looking cushion against a POTENTIAL future loss; variation margin is a backward-looking settlement of ALREADY-REALIZED price changes.",
      related: [{ r: 36, label: "R36 — PFE, the concept initial margin is sized against" }],
      memory: "Initial margin = cushion for the worst that COULD happen. Variation margin = settling what ALREADY happened today."
    },
    {
      name: "Compression vs. netting",
      def: "Portfolio compression cancels REAL offsetting trades outright (fewer contracts, same net exposure, lower gross exposure) rather than relying on the netting CALCULATION alone.",
      pitfall: "A physical reduction, not just an accounting one — compression changes what trades actually exist; netting just changes how existing trades are calculated together.",
      related: [{ r: 33, label: "R33 — trade compression introduced" }]
    }
  ],

  connections: {
    from: [
      { r: 31, why: "Central clearing is the structural alternative to the bilateral OTC/ISDA framework introduced there." },
      { r: 33, why: "Bilateral netting generalizes to CCP-based multilateral netting here." }
    ],
    to: [
      { r: 36, why: "Initial margin/variation margin become quantitative inputs to exposure profile and MPoR calculations." }
    ],
    confused: [
      { what: "Initial margin vs variation margin", how: "Initial margin covers potential FUTURE losses (market-risk-driven); variation margin settles ALREADY-REALIZED daily price changes (cash only)." },
      { what: "Bilateral netting vs central clearing's multilateral netting", how: "Bilateral netting only nets two parties' trades with each other; a CCP achieves multilateral netting across the WHOLE cleared market by interposing itself as counterparty to everyone." }
    ]
  },

  misconceptions: [
    { wrong: "\"Initial margin and variation margin serve the same purpose.\"", right: "Initial margin covers POTENTIAL future default losses (forward-looking, market-risk-driven); variation margin settles ALREADY-REALIZED daily mark-to-market changes (backward-looking, cash only) — different purposes, different drivers." },
    { wrong: "\"Central clearing eliminates counterparty risk entirely.\"", right: "It CONCENTRATES counterparty risk into the CCP itself. Loss mutualization (drawing on the CCP's capital, then non-defaulting members' default-fund contributions) exists precisely because losses can still exceed the defaulter's own resources." },
    { wrong: "\"Trade compression and netting achieve the same risk reduction through the same mechanism.\"", right: "Compression PHYSICALLY cancels real offsetting trades (reducing gross exposure and trade count); netting is an ACCOUNTING calculation that combines existing trades' values without removing any trades." }
  ],

  highYield: [
    { stars: 4, what: "Novation and loss mutualization mechanics — the CCP's role as universal counterparty and loss-absorption waterfall.", why: "The core conceptual mechanism of central clearing, frequently tested." },
    { stars: 4, what: "Initial margin (future-risk cushion) vs. variation margin (daily settlement) — purpose, driver, and typical form.", why: "A clean, precisely testable comparison table." },
    { stars: 3, what: "Compression (physical trade reduction) vs. netting (accounting calculation) distinction.", why: "A subtle but well-defined distinction, connects back to R33." }
  ],

  recall: [
    { q: "Explain the loss-absorption waterfall when a clearing member defaults and losses exceed its own margin and default-fund contribution.", a: "The CCP first draws on its own capital, and if that's insufficient, draws on non-defaulting members' default-fund contributions — this is loss mutualization, spreading the hit across the CCP's entire membership rather than concentrating it on whoever happened to trade directly with the defaulter." },
    { q: "Why is initial margin sized differently from variation margin, and what does each protect against?", a: "Initial margin is sized to cover a WORST-CASE future loss over the margin period of risk — it's forward-looking and driven by market risk/volatility, typically posted as cash plus highly liquid government securities. Variation margin simply trues up ALREADY-REALIZED daily (or intraday) price changes — backward-looking, cash only, and unrelated to worst-case future scenarios." },
    { q: "How does trade compression differ operationally from simply netting a portfolio of trades?", a: "Netting is a CALCULATION — it combines the values of existing trades to determine a single net exposure figure, but all the original trades still legally exist. Compression PHYSICALLY cancels real offsetting trades and replaces them with fewer trades that reproduce the same net cash flows — reducing gross notional and counterparty complexity, not just recalculating around it." }
  ],

  hooks: [
    { title: "Everyone faces the middleman", text: "Before clearing: ten banks facing each other in a tangled web. After clearing: ten banks all facing one CCP. Novation is the moment that web collapses into a hub-and-spoke." },
    { title: "Future cushion vs. today's bill", text: "Initial margin: the cushion for what MIGHT go wrong tomorrow. Variation margin: paying today's bill for what ALREADY happened today." }
  ],

  summary: `<p><strong>Novation</strong>: on default, the CCP substitutes itself as counterparty, closing out the defaulter — original parties never face each other. <strong>Loss mutualization</strong>: losses beyond the defaulter's margin/default-fund draw on CCP capital, then non-defaulting members' contributions. <strong>Initial margin</strong> (future-risk cushion, market-risk-driven, cash+liquid govt securities) vs. <strong>variation margin</strong> (daily mark-to-market settlement, cash only). <strong>Compression</strong> physically cancels offsetting trades (lower gross exposure, same net) — a physical reduction distinct from netting's accounting calculation.</p>`
});
