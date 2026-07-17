FRM.register({
  book: 3, reading: 51,
  session: "Operational Risk Focus Areas",
  title: "Case Study: Third-Party Risk Management",
  tagline: "Extends R50's outsourcing framework into full TPRM — including fourth- and fifth-party exposures (your vendor's vendors) — anchored by Capital One and Morgan Stanley failures.",

  teaches: `<p>The TPRM lifecycle (five stages), and the single lesson both Capital One and Morgan Stanley illustrate: accountability cannot be outsourced.</p>`,

  why: `<p>This is the concrete, real-world payoff of R50's abstract guidance. Both cases share the same root lesson despite different technical failures — a vendor's failure remains the bank's regulatory and reputational problem, full stop.</p>`,

  intuition: `<p>Third-party risk doesn't stop at your direct vendor — it extends to YOUR VENDOR'S VENDORS (fourth-party) and beyond (fifth-party), a chain of dependency that's often invisible until something breaks. Capital One and Morgan Stanley are different technical failures (one a cloud misconfiguration, one decommissioned hardware disposal) but the same governance lesson: you own the outcome regardless of how many layers of vendors sit between you and the failure.</p>`,

  formulas: [],

  concepts: [
    {
      name: "TPRM lifecycle (five stages)",
      def: "(1) Business model decision — what should even be outsourced. (2) Evaluation, risk rating, due diligence — proportional to relationship complexity/length. (3) Contracts, SLAs, contract management — periodically reviewed. (4) Ongoing monitoring — reassessment triggers defined in advance. (5) Remediation or termination — grievance period, exit/termination clause.",
      related: [{ r: 50, label: "R50 — the outsourcing risk framework this extends" }],
      memory: "Decide → Diligence → Contract → Monitor → Remediate/Exit — a full lifecycle, not a one-time decision."
    },
    {
      name: "Fourth- and fifth-party exposure",
      def: "Your vendor's vendors (fourth-party) and beyond (fifth-party) — a chain of dependency often invisible until something breaks.",
      pitfall: "Visibility into sub-outsourcing relationships is exactly the third-party cyber risk dimension named in R47 — the concern isn't hypothetical, it's a recurring named risk category.",
      related: [{ r: 47, label: "R47 — visibility into sub-outsourcing named as a third-party cyber risk dimension" }]
    },
    {
      name: "The shared lesson: accountability cannot be outsourced",
      def: "The single lesson GARP wants from both Capital One and Morgan Stanley cases: even when the underlying FUNCTION can be outsourced, accountability for the outcome cannot.",
      pitfall: "A vendor's failure is STILL the bank's regulatory and reputational problem — this is the single most important takeaway of the reading, worth memorizing as a standalone principle.",
      related: [{ r: 50, label: "R50 — the same principle stated in the guidance reading" }],
      memory: "Two different companies, two different technical failures, one identical lesson: you can't outsource the blame."
    }
  ],

  connections: {
    from: [
      { r: 50, why: "Applies the generic outsourcing risk management guidance to concrete, real failures." }
    ],
    to: [],
    confused: [
      { what: "Third-party vs fourth-party vs fifth-party risk", how: "Third-party is your direct vendor; fourth-party is your vendor's vendor; fifth-party goes one layer further — visibility and accountability get progressively harder to maintain at each remove." }
    ]
  },

  misconceptions: [
    { wrong: "\"If a vendor's failure caused a data breach, the vendor bears primary regulatory responsibility, not the bank.\"", right: "Accountability cannot be outsourced — even when the underlying function/failure originates with a vendor, the bank remains regulatorily and reputationally responsible for the outcome." },
    { wrong: "\"Third-party risk management only needs to consider your direct vendors.\"", right: "TPRM must also consider fourth-party (your vendor's vendors) and fifth-party exposures — dependency chains extend beyond your direct contractual relationships and are often invisible until something breaks." }
  ],

  highYield: [
    { stars: 4, what: "The shared lesson: accountability cannot be outsourced, illustrated by Capital One and Morgan Stanley.", why: "Explicitly flagged as the single most important takeaway from both cases combined." },
    { stars: 3, what: "TPRM five-stage lifecycle.", why: "A clean process framework, good for sequencing/matching questions." },
    { stars: 2, what: "Fourth- and fifth-party exposure concept.", why: "Extends R47's third-party cyber risk dimension into a fuller vendor-chain concept." }
  ],

  recall: [
    { q: "Two banks suffer very different technical failures involving third-party vendors, yet both draw the same regulatory consequence. What's the shared lesson?", a: "Accountability cannot be outsourced — regardless of the specific technical cause (a vendor's cloud misconfiguration, improper hardware disposal, or any other failure), the originating bank remains responsible for the outcome in the eyes of regulators and the public. Outsourcing the FUNCTION never outsources the ACCOUNTABILITY." },
    { q: "Why might a bank's third-party risk management program fail to catch a risk that ultimately causes a major incident, even after thorough due diligence on its direct vendor?", a: "The risk may originate at the fourth-party or fifth-party level — a subcontractor of the bank's direct vendor, invisible to the bank's own due diligence process unless the contract specifically requires visibility into and audit rights over sub-outsourcing relationships." }
  ],

  hooks: [
    { title: "The vendor's vendor's vendor", text: "Third-party, fourth-party, fifth-party — each link in the chain is a place risk can hide. Capital One and Morgan Stanley both learned that the chain doesn't end where your contract does." }
  ],

  summary: `<p><strong>TPRM lifecycle</strong> (5 stages): business model decision → evaluation/due diligence → contracts/SLAs → ongoing monitoring → remediation/termination. <strong>Fourth- and fifth-party exposure</strong>: risk chains extend beyond direct vendors, often invisible without explicit sub-outsourcing visibility and audit rights. <strong>Shared lesson</strong> (Capital One + Morgan Stanley): accountability cannot be outsourced — a vendor's failure remains the bank's regulatory and reputational problem, regardless of the specific technical cause.</p>`
});
