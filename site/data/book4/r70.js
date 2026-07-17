FRM.register({
  book: 4, reading: 70,
  session: "Stress Testing, Contingency Planning & Liabilities",
  title: "The Failure Mechanics of Dealer Banks",
  tagline: "Large dealer banks are structurally exposed to a specific liquidity-death-spiral because their business depends entirely on counterparties' continued confidence in their solvency.",

  teaches: `<p>The failure mechanism common to dealer bank collapses, and the policy responses (tri-party repo utilities, TARP).</p>`,

  why: `<p>This reading is the real-world payoff of R63/R64's abstract funding-liquidity-risk mechanics, applied to a specific and structurally fragile institution type. The mechanism here — confidence-driven exit accelerating the very crisis it fears — is a self-fulfilling dynamic worth recognizing anywhere it recurs.</p>`,

  intuition: `<p>The moment prime-brokerage clients or repo/derivatives counterparties start QUESTIONING solvency (not necessarily confirming it), they rationally move to exit positions or shrink exposure — and that very withdrawal ACCELERATES the liquidity crisis, regardless of whether the initial solvency concern was justified. It's a self-fulfilling dynamic, structurally similar to a bank run but operating through wholesale/institutional channels rather than retail depositors.</p>`,

  visual: `<div class="widget" data-widget="spiral"></div>`,

  formulas: [],

  concepts: [
    {
      name: "The failure mechanism",
      def: "The moment prime-brokerage clients or repo/derivatives counterparties start questioning solvency (not necessarily confirming it), they rationally move to exit positions or shrink exposure — and that very withdrawal accelerates the liquidity crisis, regardless of whether the initial solvency concern was justified.",
      pitfall: "It's a self-fulfilling dynamic, structurally similar to a bank run but operating through WHOLESALE/INSTITUTIONAL channels rather than retail depositors — don't assume dealer bank failures require actual retail depositor panic.",
      related: [{ r: 63, label: "R63 — Northern Rock, the retail-depositor version of the same mechanism" }],
      memory: "A dealer bank run doesn't need retail depositors lining up outside a branch — it happens through prime brokerage clients and repo counterparties quietly pulling exposure."
    },
    {
      name: "Policy responses",
      def: "Tri-party repo utilities and clearing banks (emergency infrastructure proposals to reduce contagion risk in repo/OTC markets). TARP (2008): designed to address adverse selection in 'toxic' asset markets by offering below-market financing and absorbing losses above a pre-specified threshold.",
      related: [{ r: 76, label: "R76 — the tri-party repo mechanics this policy response targets" }]
    }
  ],

  connections: {
    from: [
      { r: 63, why: "This reading's mechanism is a real-world case of the funding-liquidity-risk death spiral introduced there." },
      { r: 64, why: "Leverage's amplifying role in liquidity fragility is exactly what makes dealer banks structurally vulnerable." }
    ],
    to: [
      { r: 76, why: "The repo market mechanics behind Bear Stearns and Lehman's specific collapses get full treatment there." }
    ],
    confused: [
      { what: "Dealer bank run vs. retail bank run", how: "Both are self-fulfilling confidence spirals, but a dealer bank run operates through WHOLESALE channels (prime brokerage clients, repo/derivatives counterparties exiting), while a retail bank run (like Northern Rock) involves depositors physically withdrawing funds." }
    ]
  },

  misconceptions: [
    { wrong: "\"A dealer bank's liquidity crisis requires an actual, confirmed solvency problem to begin.\"", right: "The mechanism triggers the moment counterparties start QUESTIONING solvency — not necessarily confirming it. The very act of counterparties rationally reducing exposure accelerates the crisis regardless of whether the initial concern was justified." },
    { wrong: "\"Dealer bank failures are fundamentally different from traditional bank runs.\"", right: "They're structurally similar self-fulfilling dynamics — the key difference is the CHANNEL (wholesale/institutional counterparties vs. retail depositors), not the underlying confidence-driven mechanism." }
  ],

  highYield: [
    { stars: 4, what: "The core failure mechanism: questioning (not confirming) solvency triggers a self-fulfilling wholesale-channel run.", why: "The single most important conceptual takeaway of this reading." },
    { stars: 2, what: "Policy responses: tri-party repo utilities/clearing banks, and TARP's specific design purpose.", why: "Supporting factual detail." }
  ],

  recall: [
    { q: "Why can a dealer bank collapse even if its underlying assets are not actually insolvent?", a: "Once prime-brokerage clients and repo/derivatives counterparties merely start QUESTIONING the bank's solvency, they rationally begin exiting positions and reducing exposure to protect themselves — this withdrawal of confidence and funding itself accelerates a genuine liquidity crisis, regardless of whether the original solvency concern was factually justified. It's a self-fulfilling dynamic." },
    { q: "How does a dealer bank run differ mechanically from a classic retail bank run like Northern Rock's?", a: "Both share the same self-fulfilling confidence-driven logic, but a dealer bank run operates through WHOLESALE/INSTITUTIONAL channels — prime brokerage clients and repo/derivatives counterparties reducing exposure — rather than retail depositors physically withdrawing cash from branches." }
  ],

  hooks: [
    { title: "The whisper that becomes true", text: "A dealer bank doesn't need proof of insolvency to die — a whisper of doubt is enough to start counterparties exiting, and their exit itself makes the whisper come true." }
  ],

  summary: `<p><strong>Failure mechanism</strong>: counterparties merely QUESTIONING (not confirming) solvency trigger rational exit, which itself accelerates the liquidity crisis — a self-fulfilling dynamic operating through wholesale/institutional channels (prime brokerage, repo, derivatives) rather than retail depositors. <strong>Policy responses</strong>: tri-party repo utilities/clearing banks (contagion-reduction infrastructure), TARP (addressed adverse selection in toxic asset markets via below-market financing and loss absorption above a threshold).</p>`
});
