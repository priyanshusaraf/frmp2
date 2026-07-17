FRM.register({
  book: 3, reading: 50,
  session: "Operational Risk Focus Areas",
  title: "Guidance on Managing Outsourcing Risk",
  tagline: "The regulatory-guidance counterpart to R51's real-world case study — six risk categories, six program elements, and the specific contract clauses regulators expect to see.",

  teaches: `<p>Six risks from outsourcing, the six-part outsourcing risk management program, three due diligence review areas, and the long, testable list of contract provisions.</p>`,

  why: `<p>Outsourcing doesn't eliminate risk — it transforms operational risk into vendor management risk, plus adds concentration and reputational dimensions that a purely internal process wouldn't carry. This reading gives you the regulator's checklist for managing that transformation responsibly.</p>`,

  intuition: `<p>You can outsource the ACTIVITY but not the ACCOUNTABILITY — the six-part program (assess, diligence, contract, incentive review, monitor, continuity plan) exists precisely because regulators hold the outsourcing bank responsible for outcomes, regardless of who's actually performing the work.</p>`,

  formulas: [],

  concepts: [
    {
      name: "Six risks from outsourcing",
      def: "Compliance, concentration, reputation, country, operational, legal.",
      related: [{ r: 51, label: "R51 — these risks manifesting concretely in real cases" }]
    },
    {
      name: "Six-part outsourcing risk management program",
      def: "Risk assessments, due diligence in selecting providers, contract provisions, incentive compensation review, oversight/monitoring, business continuity/contingency plans.",
      related: ["Due diligence — three review areas"]
    },
    {
      name: "Due diligence — three review areas",
      def: "Business background, reputation, and strategy; financial performance and condition; operations and internal controls.",
      related: []
    },
    {
      name: "Contract provisions",
      def: "Scope, cost/compensation, incentive compensation, right to audit, performance standards, oversight/monitoring, confidentiality/security, ownership and license, indemnification, default/termination, dispute resolution, limits on liability, insurance, customer complaints, provider's own business resumption plan, foreign-based provider considerations, subcontracting rights.",
      pitfall: "This is a LONG, testable list — the exam can ask which specific clause addresses a described scenario (e.g., 'what if the provider itself subcontracts the work further' → subcontracting rights clause).",
      related: [],
      memory: "The contract is where accountability gets written down in enforceable detail — every risk in the six-category list should map to a specific clause."
    }
  ],

  connections: {
    from: [
      { r: 42, why: "Third-party failure was one of the risks promoted to Level-1 status under the ORX taxonomy, foreshadowing this dedicated treatment." }
    ],
    to: [
      { r: 51, why: "The generic guidance here becomes concrete in Capital One and Morgan Stanley's real failures." }
    ],
    confused: [
      { what: "Six risks (compliance/concentration/reputation/country/operational/legal) vs six-part program (assess/diligence/contract/incentive/monitor/continuity)", how: "The six RISKS are what can go wrong; the six-part PROGRAM is what the bank does to manage those risks — don't conflate the risk list with the response framework." }
    ]
  },

  misconceptions: [
    { wrong: "\"Outsourcing an activity also outsources the accountability for that activity's outcomes.\"", right: "Regulators hold the outsourcing bank accountable regardless of who performs the work — you can outsource the activity, never the accountability." },
    { wrong: "\"A vendor contract mainly needs to specify scope and cost.\"", right: "Regulators expect a long, specific list of provisions: audit rights, performance standards, confidentiality, indemnification, termination, liability limits, insurance, subcontracting rights, and more — scope and cost are just two of many essential clauses." }
  ],

  highYield: [
    { stars: 3, what: "Six risks from outsourcing (compliance, concentration, reputation, country, operational, legal).", why: "A clean six-item list, frequently tested for classification of a described risk scenario." },
    { stars: 3, what: "Contract provisions list — especially audit rights, subcontracting rights, and business resumption planning.", why: "GARP likes testing which specific clause addresses a described contractual gap." },
    { stars: 2, what: "Six-part outsourcing risk management program and three due diligence review areas.", why: "Supporting structural detail." }
  ],

  recall: [
    { q: "A bank outsources loan servicing to a vendor. The vendor later fails to meet regulatory standards, and the bank is fined. Why is the bank held responsible rather than just the vendor?", a: "Accountability cannot be outsourced — regulators hold the originating bank responsible for outcomes in outsourced activities, since customers and the financial system are ultimately affected by the bank's choices regardless of which entity performs the underlying work." },
    { q: "A vendor contract doesn't specify whether the vendor can further subcontract the work to a fourth party. What risk does this create, and what contract provision addresses it?", a: "It creates uncontrolled visibility risk — the bank may lose track of who's actually handling its data/processes if the vendor subcontracts without restriction. The 'subcontracting rights' contract provision specifically addresses this by defining whether and how further subcontracting is permitted and disclosed." }
  ],

  hooks: [
    { title: "You can hire the work, not the blame", text: "Outsourcing lets you hire someone else to DO the work. It never lets you hire someone else to TAKE the blame when it goes wrong." }
  ],

  summary: `<p><strong>Six outsourcing risks</strong>: compliance, concentration, reputation, country, operational, legal. <strong>Six-part program</strong>: risk assessment, due diligence, contract provisions, incentive compensation review, oversight/monitoring, business continuity plans. <strong>Due diligence</strong>: business background/strategy, financial condition, operations/controls. <strong>Contract provisions</strong> (long, testable list): scope, cost, incentive compensation, audit rights, performance standards, confidentiality, ownership, indemnification, termination, dispute resolution, liability limits, insurance, complaints, provider's own BCP, foreign-provider considerations, subcontracting rights.</p>`
});
