FRM.register({
  book: 4, reading: 65,
  session: "Liquidity Risk Management",
  title: "Early Warning Indicators",
  tagline: "EWIs are the dashboard warning lights for liquidity risk — short and conceptual: what makes a good EWI, whose guidance shapes them, and how escalation works in practice.",

  teaches: `<p>What makes an EWI useful, the regulatory guidance shaping them (OCC, BCBS, Fed SR 10-6), and escalation mechanics via stoplight thresholds.</p>`,

  why: `<p>An EWI system is only as good as its ability to give ADVANCE notice — a backward-looking indicator tells you about a crisis after it's already begun. This reading is short because the concept is simple: build indicators that lead, not lag, and act on them via clear escalation rules.</p>`,

  intuition: `<p>Think of EWIs as a car's dashboard — you want the check-engine light BEFORE the engine seizes, not after. A useful EWI is forward-looking (predicts trouble, doesn't just report it), covers both internal (bank-specific) and external (market-wide) measures, and spans multiple time horizons (so you catch both fast-moving and slow-building problems).</p>`,

  formulas: [],

  concepts: [
    {
      name: "What makes an EWI useful",
      def: "Forward-looking (not backward-looking), covering both internal and external measures, leading rather than lagging, granular, and spanning multiple time horizons.",
      related: []
    },
    {
      name: "Regulatory guidance",
      def: "OCC (2012): EWIs for embedded-option instruments (e.g., callable debt) flagging likely exercise/contingent liability. BCBS (2008): general deterioration/funding-need signals. BCBS (2012): intraday liquidity indicators specifically. Fed SR 10-6: EWIs and event triggers consistent with the firm's own liquidity risk profile, giving advance notice to prepare and communicate internally/externally.",
      pitfall: "Know which regulator/year said what — a specific, testable list where questions ask 'which guidance addresses intraday liquidity specifically' (BCBS 2012) vs. 'which addresses embedded options' (OCC 2012).",
      related: [{ r: 68, label: "R68 — intraday liquidity risk management, the topic BCBS 2012 addresses" }],
      memory: "OCC: embedded options. BCBS 2008: general deterioration. BCBS 2012: intraday specifically. Fed SR 10-6: firm-specific triggers."
    },
    {
      name: "Escalation mechanics",
      def: "Green/amber/red stoplight thresholds: green = no action, amber = follow-up required, red = immediate action.",
      example: "Timely (often daily) reporting through an integrated data system, feeding into EWI dashboards, is increasingly standard practice.",
      related: [{ r: 4, label: "R4 — the traffic-light framework analogy from Basel backtesting" }]
    }
  ],

  connections: {
    from: [
      { r: 64, why: "EWIs watch for exactly the deterioration signals the leverage/liquidity feedback loops in R64 produce." }
    ],
    to: [
      { r: 73, why: "Contingency funding planning's monitoring/escalation component builds directly on EWI mechanics." }
    ],
    confused: [
      { what: "BCBS 2008 vs BCBS 2012 guidance", how: "BCBS 2008: general deterioration/funding-need signals. BCBS 2012: intraday liquidity indicators specifically — a later, narrower-scope guidance document." }
    ]
  },

  misconceptions: [
    { wrong: "\"A good EWI is primarily backward-looking, drawing on confirmed historical loss data.\"", right: "A useful EWI is FORWARD-looking and leading, not lagging — it should predict trouble before it fully materializes, not just report on losses that have already occurred." },
    { wrong: "\"BCBS's 2008 and 2012 guidance address the same liquidity risk topics.\"", right: "BCBS 2008 addresses GENERAL deterioration/funding-need signals; BCBS 2012 addresses INTRADAY liquidity indicators specifically — a narrower, later-developed guidance area." }
  ],

  highYield: [
    { stars: 3, what: "What makes an EWI useful: forward-looking, internal+external, leading, granular, multi-horizon.", why: "The core conceptual checklist of this reading." },
    { stars: 2, what: "Regulatory guidance sources and their specific focus (OCC embedded options, BCBS general vs. intraday, Fed SR 10-6 firm-specific).", why: "A specific matching-question list." },
    { stars: 2, what: "Green/amber/red escalation stoplight mechanics.", why: "A simple, quick-recall framework." }
  ],

  recall: [
    { q: "Why is 'forward-looking' listed as a defining characteristic of a useful EWI, rather than 'accurate' or 'comprehensive'?", a: "An EWI's entire purpose is to give ADVANCE WARNING before a liquidity crisis fully develops — a backward-looking or lagging indicator, however accurate or comprehensive, would only confirm a problem after it's already underway, defeating the purpose of an 'early' warning system." },
    { q: "A bank wants guidance specifically on monitoring intraday liquidity risk. Which regulatory document should it consult?", a: "BCBS (2012) — this guidance specifically addresses intraday liquidity indicators, distinct from BCBS's broader 2008 guidance on general deterioration/funding-need signals." }
  ],

  hooks: [
    { title: "The check-engine light, not the smoke", text: "A good EWI is the check-engine light that comes on before the engine seizes — not the smoke that appears after." }
  ],

  summary: `<p><strong>Useful EWIs</strong>: forward-looking, internal+external coverage, leading (not lagging), granular, multi-horizon. <strong>Regulatory guidance</strong>: OCC 2012 (embedded-option instruments), BCBS 2008 (general deterioration signals), BCBS 2012 (intraday liquidity specifically), Fed SR 10-6 (firm-specific triggers). <strong>Escalation</strong>: green (no action) / amber (follow-up) / red (immediate action) stoplight thresholds, timely (often daily) integrated reporting.</p>`
});
