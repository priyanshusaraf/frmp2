FRM.register({
  book: 2, reading: 18,
  session: "Credit Risk Analysis",
  title: "Governance",
  tagline: "If R17 defines the disease, this reading is the bank's immune system: who is allowed to take credit risk, who checks their work, and who can stop them.",

  teaches: `<p>The three lines of defense is the organizing skeleton of this entire reading — memorize it cold, because it is GARP's favorite governance framework across multiple FRM topics, not just credit risk. You also learn the four GSLO pillars of good governance.</p>`,

  why: `<p>Every risk framework in the curriculum — credit, market, operational — eventually asks "who's accountable, and who checks them?" Getting this organizational skeleton right here means you recognize it instantly when it resurfaces in operational risk governance (Book 3) and model risk management.</p>`,

  intuition: `<p>Think of a bank's risk governance as a court system: the business owners (1st line) are the ones taking action; risk management/compliance (2nd line) is the judge watching for rule violations in real time; internal audit (3rd line) is the appeals court checking whether the judge and the actors both did their jobs properly, after the fact.</p>`,

  formulas: [],

  concepts: [
    {
      name: "Three lines of defense",
      def: "1st line — business owners: own and manage risk day to day (originate, price, monitor). 2nd line — risk management/compliance/legal: independent monitoring and oversight, sets guidelines and limits. 3rd line — internal audit: independent assurance that lines 1 and 2 are actually working.",
      pitfall: "This exact three-tier structure reappears across FRM topics (operational risk, model risk) — don't relearn it as a 'new' framework each time you see it in a different book.",
      related: [{ r: 41, label: "R41 — the same three lines of defense in operational risk governance" }],
      memory: "1st line acts, 2nd line watches, 3rd line audits the watcher."
    },
    {
      name: "The four GSLO pillars",
      def: "Guidelines (written credit policies, reviewed periodically, owned by the CRO's office). Skills (risk staff need real business fluency, not just modeling skill; delegation of authority tied to transaction risk parameters). Limits (maximum acceptable dollar loss, set at aggregate and counterparty/sector/country level). Oversight (risk management must be organizationally independent from the profit center it oversees, with compensation delinked from the business unit's P&L).",
      pitfall: "The exam will test that risk managers should NOT be compensated based on the profitability of the desk they oversee — a conflict-of-interest question dressed up as a governance question.",
      related: ["Three lines of defense"],
      memory: "G-S-L-O: Guidelines, Skills, Limits, Oversight — the four pillars holding up the governance roof."
    }
  ],

  connections: {
    from: [
      { r: 17, why: "Establishes what credit risk IS; this reading establishes who's accountable for managing it." }
    ],
    to: [
      { r: 19, why: "Applies this governance skeleton specifically to a bank's loan book — classification, provisioning, workout." },
      { r: 41, why: "The three lines of defense framework reappears verbatim in operational risk governance." }
    ],
    confused: [
      { what: "2nd line vs 3rd line", how: "2nd line (risk management) sets and monitors limits in real time as part of ongoing operations; 3rd line (internal audit) independently checks, after the fact, whether both the 1st and 2nd lines are actually doing their jobs." }
    ]
  },

  misconceptions: [
    { wrong: "\"A risk manager's compensation tied to the desk's profitability creates better alignment of incentives.\"", right: "The exact opposite — it's a classic conflict of interest. Risk management must be organizationally independent, with compensation DELINKED from the business unit's P&L." },
    { wrong: "\"Internal audit's job is to monitor risk-taking in real time, like risk management does.\"", right: "Internal audit (3rd line) provides independent assurance AFTER the fact that lines 1 and 2 are functioning — it doesn't do real-time monitoring, that's the 2nd line's job." }
  ],

  highYield: [
    { stars: 4, what: "Three lines of defense — the exact role of each line.", why: "GARP's favorite governance framework, reused across multiple FRM topics beyond credit risk." },
    { stars: 3, what: "GSLO pillars, especially the Oversight/compensation independence trap.", why: "The compensation conflict-of-interest question is a reliable, easy point if memorized." }
  ],

  recall: [
    { q: "A trader's manager is also the person responsible for approving that trader's risk limits, and the manager's bonus depends on the desk's P&L. What governance principle is violated?", a: "The Oversight pillar — risk management/limit-setting must be organizationally independent from the profit center, with compensation delinked from that unit's P&L. This setup creates a direct conflict of interest." },
    { q: "Distinguish the 2nd and 3rd lines of defense using their timing and independence.", a: "The 2nd line (risk management, compliance, legal) provides ongoing, real-time independent monitoring and limit-setting as risk is being taken. The 3rd line (internal audit) provides independent assurance AFTER the fact that both the 1st and 2nd lines are functioning as intended." }
  ],

  hooks: [
    { title: "The court system", text: "1st line = the actors (business). 2nd line = the judge watching in real time (risk management). 3rd line = the appeals court reviewing the whole trial afterward (internal audit)." },
    { title: "G-S-L-O", text: "Guidelines, Skills, Limits, Oversight — four pillars, and Oversight is the one exam questions love: never let the judge share the actor's paycheck." }
  ],

  summary: `<p><strong>Three lines of defense</strong>: 1st (business owners — originate/manage), 2nd (risk mgmt/compliance — independent real-time oversight, sets limits), 3rd (internal audit — independent after-the-fact assurance). <strong>GSLO pillars</strong>: Guidelines (written policy, CRO-owned), Skills (business fluency + risk-tiered delegation), Limits (max acceptable loss, multiple levels), Oversight (organizational independence, compensation delinked from the business unit's P&L — the classic tested conflict-of-interest trap).</p>`
});
