FRM.register({
  book: 3, reading: 58,
  session: "Capital and Regulatory Frameworks",
  title: "Capital Planning at Large Bank Holding Companies",
  tagline: "Takes everything conceptual from R57 and shows how one real supervisory regime — the Federal Reserve's Capital Plan Rule — operationalizes it for large U.S. bank holding companies.",

  teaches: `<p>The Capital Plan Rule and the seven CAP principles, and the key mechanics: firm-wide risk identification, model review, board evaluation, capital policy, loss estimation, PPNR projections.</p>`,

  why: `<p>This is the micro-level implementation of exactly the macro-to-micro stress testing challenge R55 raised in the abstract — R58 is what that translation looks like inside one bank's actual capital planning process. Read this as "R57's checklist, now with a named regulator and named process."</p>`,

  intuition: `<p>The Capital Plan Rule applies specifically to top-tier U.S. BHCs with $50B+ consolidated assets, requiring a robust internal capital adequacy process (CAP). The seven principles span the full lifecycle: risk management foundation, loss/resource estimation methods, capital adequacy assessment, capital planning/internal controls policies, and governance oversight — essentially R41's governance framework and R57's economic capital challenges, now codified into a specific regulatory requirement.</p>`,

  formulas: [],

  concepts: [
    {
      name: "The Capital Plan Rule & seven CAP principles",
      def: "Applies to top-tier U.S. BHCs with $50B+ consolidated assets, requiring a robust internal capital plan — the capital adequacy process (CAP). Seven principles span: risk management foundation, resource/loss estimation methods, capital adequacy, capital planning/internal controls policies, and governance oversight.",
      related: [{ r: 41, label: "R41 — the governance foundation this codifies" }]
    },
    {
      name: "Key mechanics",
      def: "Firm-wide risk identification must be comprehensive; models need independent, regular review/validation; the board must actively evaluate and approve the capital plan; a capital policy must define goals for issuance, usage, and distributions.",
      example: "Loss estimation should rest on sound theoretical/empirical grounds, blending quantitative and qualitative methods. Counterparty credit risk uses either a probabilistic approach (must show scenarios at least as severe as past observed events) or a deterministic approach (must span a wide range of stress scenarios).",
      pitfall: "Pre-provision net revenue (PPNR) projections must capture INTERRELATIONSHIPS among revenue, expense, and on/off-balance-sheet drivers within a scenario — not just project each line item independently. Net interest income methodology must incorporate current and projected balance sheet positions; noninterest income projections must reflect the stated scenario and business strategy.",
      related: [{ r: 57, label: "R57 — the counterparty credit risk challenges this operationalizes" }],
      memory: "PPNR isn't a sum of independently-projected line items — revenue, expense, and balance sheet drivers must move together, consistently, within the scenario."
    }
  ],

  connections: {
    from: [
      { r: 55, why: "The macro-to-micro stress testing challenge raised in the abstract there becomes this concrete supervisory process." },
      { r: 57, why: "Economic capital's challenges (validation, dependency modeling, CCR) get operationalized into named regulatory requirements here." }
    ],
    to: [
      { r: 59, why: "Basel capital regulation's origin story provides the broader regulatory context this US-specific process sits within." }
    ],
    confused: [
      { what: "Probabilistic vs deterministic counterparty credit risk approaches", how: "Probabilistic: must show scenarios AT LEAST AS SEVERE as past observed events. Deterministic: must span a WIDE RANGE of stress scenarios — different validation standards for different approach types." }
    ]
  },

  misconceptions: [
    { wrong: "\"PPNR projections can be built by independently projecting each revenue and expense line item.\"", right: "PPNR projections must capture the INTERRELATIONSHIPS among revenue, expense, and on/off-balance-sheet drivers WITHIN a scenario — independent, siloed projections would miss how these drivers move together under stress." },
    { wrong: "\"The Capital Plan Rule applies to all U.S. bank holding companies regardless of size.\"", right: "It applies specifically to top-tier U.S. BHCs with $50B+ in consolidated assets — a size-based threshold, not a universal requirement." }
  ],

  highYield: [
    { stars: 3, what: "Capital Plan Rule's $50B threshold and the seven CAP principles' scope.", why: "A specific, testable regulatory threshold and framework structure." },
    { stars: 3, what: "PPNR projections must capture interrelationships among revenue/expense/balance-sheet drivers, not siloed projections.", why: "A precise, frequently tested methodological requirement." },
    { stars: 2, what: "Probabilistic vs. deterministic counterparty credit risk approaches and their distinct validation standards.", why: "A clean two-way distinction for a specific risk type." }
  ],

  recall: [
    { q: "Why can't a bank's PPNR stress projection simply sum independently-forecasted revenue and expense line items?", a: "PPNR projections must capture the INTERRELATIONSHIPS among revenue, expense, and on/off-balance-sheet drivers within the given stress scenario — these drivers move together in economically consistent ways under stress (e.g., falling revenue often coincides with rising credit losses and changing funding costs), and independently projecting each line item would miss these real, scenario-consistent interactions." },
    { q: "A bank chooses a deterministic approach for modeling counterparty credit risk under its capital plan. What validation standard must this approach meet?", a: "The deterministic approach must span a WIDE RANGE of stress scenarios — as opposed to the probabilistic approach, which must instead demonstrate scenarios at least as severe as past observed historical events." }
  ],

  hooks: [
    { title: "Not just adding up the pieces", text: "PPNR isn't a spreadsheet where you sum independent rows — revenue, expenses, and balance sheet items are all holding hands under stress, and the projection has to respect that they move together." }
  ],

  summary: `<p><strong>Capital Plan Rule</strong>: applies to U.S. BHCs with $50B+ assets, requires the capital adequacy process (CAP) — seven principles spanning risk management, loss estimation, capital adequacy, planning/controls policy, and governance. <strong>Key mechanics</strong>: comprehensive firm-wide risk identification, independent model review, active board evaluation/approval, defined capital policy (issuance/usage/distributions). <strong>Loss estimation</strong>: sound theoretical/empirical grounds, quantitative+qualitative blend. <strong>CCR</strong>: probabilistic (≥ past severe events) or deterministic (wide scenario range) approaches. <strong>PPNR</strong> must capture interrelationships among revenue/expense/balance-sheet drivers within a scenario — not independently-projected line items.</p>`
});
