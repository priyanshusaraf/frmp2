FRM.register({
  book: 2, reading: 32,
  session: "Counterparty Risk Management",
  title: "Counterparty Risk and Beyond",
  tagline: "The key distinction: counterparty risk is bilateral and its future value is highly uncertain — unlike lending risk, which is unilateral and reasonably certain.",

  teaches: `<p>Where counterparty risk shows up (securities financing, OTC derivatives), why CVA and credit limits are complementary (not substitutes), and a preview of the mitigation toolkit (R33-35).</p>`,

  why: `<p>This uncertainty about WHO owes WHOM, and how much, is exactly why derivatives credit risk needs its own exposure-modeling machinery (R36) instead of just reusing loan EAD — a loan's exposure is basically fixed and known; a derivative's exposure is a distribution over possible future values.</p>`,

  intuition: `<p>Lending risk: you know roughly what you're owed (the loan balance), and only one party can owe the other. Counterparty risk: either side could end up owing the other, and by how much depends entirely on where the market moves — a genuinely two-sided, uncertain-magnitude risk that a single EAD number cannot capture.</p>`,

  formulas: [],

  concepts: [
    {
      name: "Bilateral, uncertain-value nature of counterparty risk",
      def: "Unlike lending risk (unilateral, reasonably certain), counterparty risk is bilateral (either side could end up owing the other) and highly uncertain in magnitude (depends on where markets move).",
      pitfall: "This is exactly why derivatives credit risk needs its own exposure-modeling machinery (R36) instead of reusing loan EAD.",
      related: [{ r: 36, label: "R36 — the exposure-modeling machinery this uncertainty demands" }],
      memory: "Lending: one-way street, known destination. Counterparty risk: two-way street, destination depends on the weather (market moves)."
    },
    {
      name: "Where counterparty risk shows up",
      def: "Securities financing (repo, securities lending) and OTC derivatives (swaps, FX forwards, CDS).",
      related: []
    },
    {
      name: "CVA and credit limits are complementary, not substitutes",
      def: "CVA prices counterparty risk at the trade and counterparty level; credit limits cap it at the portfolio level.",
      pitfall: "A trade can PASS a CVA charge and still be BLOCKED by breaching an aggregate limit, and vice versa — the two mechanisms operate independently and can disagree.",
      related: [{ r: 37, label: "R37 — CVA formalized in full" }],
      memory: "CVA prices the risk; limits cap the risk. Passing one doesn't guarantee passing the other."
    },
    {
      name: "Mitigation toolkit (preview of R33-35)",
      def: "Trade only high-quality counterparties, cross-product netting, close-out, collateralization, walkaway features, diversification, exchanges/CCPs.",
      related: [{ r: 33, label: "R33 — netting and close-out formalized" }]
    }
  ],

  connections: {
    from: [
      { r: 31, why: "Establishes the derivatives context; this reading sharpens the specific bilateral-uncertainty distinction." }
    ],
    to: [
      { r: 36, why: "The exposure uncertainty described here becomes the exposure-modeling machinery (EE, PFE, EPE)." },
      { r: 37, why: "The CVA-vs-credit-limits complementary relationship gets fully priced out." }
    ],
    confused: [
      { what: "CVA vs credit limits", how: "CVA is a PRICE (trade/counterparty level); credit limits are a CAP (portfolio level). They're independent checks — a trade can pass one and fail the other." }
    ]
  },

  misconceptions: [
    { wrong: "\"If a trade passes its CVA charge, it will also be approved under the bank's credit limits.\"", right: "CVA and credit limits are complementary but INDEPENDENT checks — a trade can pass its CVA pricing and still be blocked by an aggregate portfolio-level limit breach, or vice versa." },
    { wrong: "\"Counterparty risk in derivatives is unilateral, like lending risk.\"", right: "It's BILATERAL — either party could end up owing the other, and the magnitude is highly uncertain, depending on future market moves. This is fundamentally different from a loan's roughly known, one-directional exposure." }
  ],

  highYield: [
    { stars: 3, what: "Counterparty risk's bilateral, uncertain nature vs. lending risk's unilateral, certain nature.", why: "The conceptual foundation for why R36's exposure machinery is necessary at all." },
    { stars: 3, what: "CVA and credit limits as complementary, independent checks.", why: "A clean, frequently tested 'these are not substitutes' conceptual point." }
  ],

  recall: [
    { q: "Why can't a bank simply use a loan's EAD concept to measure a derivative's counterparty exposure?", a: "A loan's exposure is roughly fixed and known (the outstanding balance), and only one party can be owed. A derivative's value can be positive or negative for either party depending on market moves — the exposure is bilateral and genuinely uncertain in magnitude, requiring a full exposure DISTRIBUTION (R36's EE/PFE/EPE) rather than a single known number." },
    { q: "A proposed trade has an acceptable CVA charge but would push the bank's aggregate exposure to that counterparty over its credit limit. What happens, and what does this reveal about CVA vs. credit limits?", a: "The trade is blocked despite passing its CVA pricing — this reveals that CVA (trade/counterparty-level pricing) and credit limits (portfolio-level caps) are complementary, INDEPENDENT controls, not substitutes for each other. Passing one doesn't guarantee passing the other." }
  ],

  hooks: [
    { title: "Two-way street vs one-way street", text: "Lending risk is a one-way street — you know who owes whom. Counterparty risk is a two-way street where the direction and size of the debt depend on which way the market wind blows." }
  ],

  summary: `<p>Counterparty risk is <strong>bilateral</strong> (either side could owe the other) and <strong>highly uncertain in magnitude</strong> (depends on market moves) — unlike lending risk's unilateral, roughly-known exposure. Shows up in <strong>securities financing</strong> and <strong>OTC derivatives</strong>. <strong>CVA</strong> (trade/counterparty-level pricing) and <strong>credit limits</strong> (portfolio-level caps) are complementary, independent checks — passing one doesn't guarantee passing the other. Mitigation toolkit preview: high-quality counterparties, netting, close-out, collateral, walkaway features, diversification, CCPs.</p>`
});
