FRM.register({
  book: 4, reading: 68,
  session: "Liquidity Risk Management",
  title: "Intraday Liquidity Risk Management",
  tagline: "Zooms into the finest time scale of liquidity management: within a single day. Highly listy, highly testable on which-item-goes-where.",

  teaches: `<p>Uses vs. sources of intraday liquidity, four governance pillars, and tracking flows vs. monitoring risk levels.</p>`,

  why: `<p>Intraday liquidity risk is easy to overlook because it resolves within a day — but a bank that can't meet its intraday obligations creates systemic risk across the payment system, which is exactly why the systemic-risk metric (intraday credit relative to Tier 1 capital) gets singled out.</p>`,

  intuition: `<p>Uses and sources of intraday liquidity are two sides of the same coin: the biggest USE is outgoing wire transfers; the biggest SOURCE is incoming funds flow. Intraday credit (from central banks) is the one source with a genuine, non-trivial financial cost — unlike owned cash or liquid assets, which cost nothing extra to use.</p>
  <p>The key systemic-risk metric is intraday credit relative to Tier 1 capital — NOT daily maximum usage (which is about the bank's OWN exposure) or client usage (which is about CLIENT-specific risk). This distinction between "my own risk," "my client's risk," and "my contribution to systemic risk" is the reading's central conceptual payoff.</p>`,

  formulas: [],

  concepts: [
    {
      name: "Uses vs. sources of intraday liquidity",
      def: "Uses: outgoing wire transfers (the single biggest use), PCS system settlements, nostro account funding, collateral pledging, asset purchases/funding. Sources: cash balances, incoming funds flow (the single biggest source), intraday credit (from central banks), liquid assets, overnight borrowings/other term funding.",
      pitfall: "Intraday credit may carry an explicit interest cost or require high-quality collateral (an opportunity cost) — this is the ONE source with a genuine, non-trivial financial cost, unlike owned cash/liquid assets.",
      related: [],
      memory: "Biggest use: outgoing wires. Biggest source: incoming funds. Only costly source: intraday credit."
    },
    {
      name: "Governance — four pillars",
      def: "Active risk management (treat it as manageable, not a passive given). Integration with risk governance (three lines of defense: treasury, corporate risk management, internal audit — corporate risk management is the emphasized second line here). Risk assessment (focused on settlement risk). Risk measurement and monitoring (dollar value of credit provided to customers vs. used by the firm).",
      related: [{ r: 41, label: "R41 — the three lines of defense model reapplied here" }]
    },
    {
      name: "Tracking flows vs. monitoring risk levels",
      def: "Tracking: total payments, other cash transactions, settlement positions, time-sensitive obligations, total intraday credit lines to clients, total bank intraday credit lines available/used. Monitoring risk: daily maximum intraday liquidity usage (most negative balance/credit line limit), intraday credit relative to Tier 1 capital, client intraday credit usage, payment throughput.",
      pitfall: "The metric that specifically captures the bank's contribution to SYSTEMIC risk is intraday credit relative to Tier 1 capital — NOT daily maximum usage (about the bank's own exposure) or client usage (about client-specific risk). This three-way distinction is the reading's central conceptual test.",
      related: [],
      memory: "My own risk (daily max usage), my client's risk (client usage), everyone's risk (intraday credit/Tier 1) — three different lenses, three different metrics."
    }
  ],

  connections: {
    from: [
      { r: 67, why: "Reserves management's day-to-day treasury function zooms into this reading's finest, intraday time scale." }
    ],
    to: [
      { r: 69, why: "Monitoring liquidity's full cash-flow term structure builds on this reading's intraday-specific tracking." }
    ],
    confused: [
      { what: "Daily maximum usage vs intraday credit/Tier 1 capital", how: "Daily maximum usage measures the bank's OWN exposure at its worst intraday moment; intraday credit/Tier 1 capital measures the bank's contribution to SYSTEMIC risk — different questions, different metrics." }
    ]
  },

  misconceptions: [
    { wrong: "\"Daily maximum intraday liquidity usage is the key metric for systemic risk.\"", right: "The key systemic-risk metric is intraday credit relative to Tier 1 capital. Daily maximum usage measures the bank's OWN exposure, not its contribution to the broader payment-system risk." },
    { wrong: "\"All sources of intraday liquidity (cash, liquid assets, intraday credit) carry similar costs.\"", right: "Intraday credit is the ONE source with a genuine, non-trivial financial cost (explicit interest or collateral opportunity cost) — owned cash and liquid assets don't carry this same cost structure." }
  ],

  highYield: [
    { stars: 4, what: "The systemic-risk metric: intraday credit relative to Tier 1 capital, distinct from daily maximum usage and client usage.", why: "Explicitly flagged as the reading's central, most-tested conceptual distinction." },
    { stars: 3, what: "Uses (biggest: outgoing wires) vs. sources (biggest: incoming funds; only costly source: intraday credit).", why: "A precise, listy classification GARP likes to test with 'which is the single biggest X' questions." },
    { stars: 2, what: "Four governance pillars, especially the three-lines-of-defense reapplication.", why: "Connects to R41's foundational governance framework." }
  ],

  recall: [
    { q: "A bank wants to measure its own contribution to systemic payment-system risk, not just its personal exposure. Which metric should it use?", a: "Intraday credit relative to Tier 1 capital — this metric specifically captures how much unsecured, available intraday credit the bank extends relative to its capital base, reflecting its potential impact on the broader financial system if that credit were to fail. Daily maximum usage only measures the bank's own worst-case exposure, and client usage only measures client-specific risk." },
    { q: "Why is intraday credit singled out as the one source of intraday liquidity with a genuine financial cost?", a: "Unlike a bank's own cash balances or liquid assets (which cost nothing extra to deploy intraday), intraday credit from central banks typically requires either an explicit interest charge or high-quality collateral to be pledged (an opportunity cost of tying up that collateral) — making it the one source where using it has a real, measurable financial cost." }
  ],

  hooks: [
    { title: "Three lenses on risk", text: "My own worst moment (daily max usage), my client's exposure (client usage), everyone's exposure through me (intraday credit/Tier 1) — three metrics answering three genuinely different questions." }
  ],

  summary: `<p><strong>Uses</strong>: outgoing wires (biggest), PCS settlements, nostro funding, collateral pledging, asset purchases. <strong>Sources</strong>: cash balances, incoming funds (biggest), intraday credit (the ONE costly source), liquid assets, overnight borrowings. <strong>Four governance pillars</strong>: active risk management, three-lines integration, risk assessment (settlement risk focus), measurement/monitoring. <strong>Tracking</strong> (payments, settlement positions, credit lines) vs. <strong>monitoring risk</strong> (daily max usage=own exposure; intraday credit/Tier1=systemic risk — the key distinction; client usage=client-specific risk).</p>`
});
