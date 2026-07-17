FRM.register({
  book: 3, reading: 45,
  session: "Operational Risk Overview",
  title: "Risk Reporting",
  tagline: "Closes the loop: identify → measure → mitigate → report, so the right people at the right altitude get the right information to act on.",

  teaches: `<p>The reporting cake (three tiers matching detail to audience seniority), what a comprehensive internal ORM report contains, reporting challenges specific to op risk, and external reporting (Pillar 3) plus combined assurance.</p>`,

  why: `<p>A report with the wrong altitude for its audience is useless — a board doesn't need daily transaction-level KRI detail, and a front-line manager can't act on a high-level board summary. Getting the "reporting cake" right is what makes the entire identify-measure-mitigate pipeline actually useful.</p>`,

  intuition: `<p>Think of the reporting cake as an inverted pyramid of detail: the bottom tier (business line managers) gets the FULL metric set, monitored daily — they need the raw detail to act in real time. The middle tier (operational risk committee) gets only ACTION-REQUIRED items, summarized monthly/quarterly — they need to know what needs a decision, not every data point. The top tier (executive/board risk committee) gets HIGH-LEVEL ONLY — they need the big picture, not the noise.</p>`,

  formulas: [],

  concepts: [
    {
      name: "The reporting cake",
      def: "Tier 1 (bottom): business line managers, risk champions — full metric set, monitored daily. Tier 2 (middle): operational risk committee — action-required items only, summaries monthly/quarterly. Tier 3 (top): executive & board risk committee — high-level only.",
      example: "A comprehensive internal ORM report includes: prioritized risks (top-10 + outlook), heatmap/risk register, risk appetite metrics, KRIs and issue monitoring, risk events/near misses, action plans/remediation, and emerging risks/horizon scanning.",
      related: [],
      memory: "Bottom: everything, daily. Middle: action items, monthly. Top: headlines only."
    },
    {
      name: "Reporting challenges specific to op risk",
      def: "Event data asymmetry: few high-severity/low-frequency events dominate, distorting simple averages. Escalation: large events and significant near-misses need explicit upward escalation. Small frequent losses: individually immaterial but worth analyzing for structural control gaps. Distribution shape: op risk losses aren't symmetric/bell-shaped — median/quartiles beat means. Qualitative data aggregation: three options — conversion and addition, categorization, or worst-case reporting.",
      pitfall: "Reporting a simple MEAN of op risk losses is misleading given the fat-tailed, asymmetric distribution shape — median/quartile-based reporting is more honest.",
      related: [{ r: 43, label: "R43 — the LDA's fat-tailed severity assumption, the root cause of this reporting challenge" }],
      memory: "Op risk losses are lopsided — report the median, not the mean, or a few catastrophic events will distort the picture."
    },
    {
      name: "External reporting (Pillar 3) & combined assurance",
      def: "Pillar 3 disclosure covers qualitative information, 10 years of historical losses, and the business indicator and subcomponents (the exact BI machinery detailed later in R62). Regulatory notification triggers: reputation, resilience, materiality, and stability criteria.",
      example: "Combined assurance aligns all three lines of defense so senior management/audit committee get ONE coherent picture rather than three overlapping ones.",
      related: [{ r: 62, label: "R62 — the business indicator this disclosure references" }]
    }
  ],

  connections: {
    from: [
      { r: 44, why: "Mitigation actions and their effectiveness are exactly what gets communicated up the reporting cake." }
    ],
    to: [
      { r: 46, why: "Reporting feeds into the integrated, enterprise-wide risk management picture." },
      { r: 62, why: "Pillar 3 disclosure's business indicator gets its full formula treatment." }
    ],
    confused: [
      { what: "Tier 1 vs Tier 2 vs Tier 3 reporting content", how: "Tier 1: full detail, daily. Tier 2: action-required items, monthly/quarterly. Tier 3: high-level only — the DETAIL LEVEL decreases as you go up, not just the frequency." },
      { what: "Mean vs median reporting for op risk losses", how: "Op risk losses are fat-tailed and asymmetric — a mean can be distorted by a few catastrophic events; median/quartiles give a more representative picture of the 'typical' loss experience." }
    ]
  },

  misconceptions: [
    { wrong: "\"The board risk committee should receive the same level of granular detail as business line managers, just less frequently.\"", right: "The reporting cake reduces DETAIL LEVEL, not just frequency, as you go up — the board gets high-level information only, while business line managers get the full metric set." },
    { wrong: "\"Reporting the average (mean) operational loss gives an accurate picture of typical risk exposure.\"", right: "Op risk losses are asymmetric and fat-tailed — a few high-severity events can distort the mean. Median/quartile-based reporting gives a more honest picture of typical exposure." }
  ],

  highYield: [
    { stars: 4, what: "The reporting cake: three tiers, their audiences, and content detail level.", why: "The organizing framework of this reading, frequently tested as 'which tier gets what.'" },
    { stars: 3, what: "Op risk reporting challenges: event data asymmetry, escalation, small frequent losses, distribution shape (mean vs median).", why: "A specific, named set of challenges — good for 'which challenge is this describing' scenario questions." },
    { stars: 2, what: "Combined assurance aligning all three lines of defense into one coherent report.", why: "A useful synthesis concept connecting back to R41's governance framework." }
  ],

  recall: [
    { q: "Why shouldn't the board risk committee receive the same detailed daily KRI reports that business line managers receive?", a: "The reporting cake matches detail to audience altitude — the board needs high-level, strategic information to oversee the firm's overall risk posture, not the operational noise of daily transaction-level metrics. Giving the board too much granular detail would bury the signals that actually require board-level decisions." },
    { q: "Why is reporting the mean operational loss potentially misleading, and what's the better alternative?", a: "Operational risk losses are asymmetric and fat-tailed — a small number of catastrophic, high-severity events can dramatically inflate or distort a simple average, making 'typical' losses look worse (or better) than they really are. Median and quartile-based reporting better represents the actual, typical loss experience without being skewed by rare extreme events." }
  ],

  hooks: [
    { title: "The reporting cake", text: "Bottom layer: everything, fresh daily. Middle layer: only what needs a decision. Top layer: the headline, once a quarter. Feed the board the whole cake and they'll choke on crumbs that don't matter." }
  ],

  summary: `<p><strong>Reporting cake</strong>: Tier 1 (business line, full detail, daily) → Tier 2 (ORM committee, action-required only, monthly/quarterly) → Tier 3 (board, high-level only). Comprehensive ORM report: top-10 risks, heatmap, appetite metrics, KRIs, events/near-misses, action plans, emerging risks. <strong>Challenges</strong>: event data asymmetry (rare severe events distort averages), escalation needs, small frequent losses (control-gap signal), asymmetric distribution (use median/quartiles not mean), qualitative aggregation (conversion, categorization, worst-case). <strong>Pillar 3</strong>: 10yr loss history + business indicator disclosure. <strong>Combined assurance</strong> aligns all three lines into one coherent picture.</p>`
});
