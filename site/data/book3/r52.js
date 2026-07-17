FRM.register({
  book: 3, reading: 52,
  session: "Operational Risk Focus Areas",
  title: "Case Study: Investor Protection and Compliance Risks in Investment Activities",
  tagline: "Four named regulations, then three bank fines (UBS, JPMorgan, Deutsche Bank) illustrating that penalties are sized to be punitive enough to exceed any benefit gained from the violation.",

  teaches: `<p>Four key investor-protection regulations (MiFID, MiFID II/MiFIR, Investor Protection Act, Volcker Rule) and the two categories of regulatory compliance risk.</p>`,

  why: `<p>Penalty sizing philosophy matters: fines aren't set to merely recover the ill-gotten gain — they're set punitively, specifically to exceed any benefit the firm gained from the violation, so that violating never becomes a positive-expected-value business decision.</p>`,

  intuition: `<p>If a fine only recovered exactly what a firm improperly gained, violating would be a free option — try it, and if caught, just give back the profit. Punitive fines destroy that logic by making the EXPECTED cost of violating exceed the expected benefit, which is why enforcement actions are deliberately sized larger than the underlying gain.</p>`,

  formulas: [],

  concepts: [
    {
      name: "Four key regulations",
      def: "MiFID (2007, EU): business/organizational conduct, disclosure & reporting to prevent market abuse. MiFID II / MiFIR (2014): advisor pay, conflicts of interest, best execution, independent advice, product governance. Investor Protection Act (part of Dodd-Frank, 2009, US): whistleblower protection, stronger OTC derivatives rules, SEC oversight expansion. Volcker Rule (Dodd-Frank): prohibits proprietary trading by commercial banks; also created the CFPB.",
      pitfall: "MiFID and MiFID II are distinct: MiFID is broad conduct/disclosure; MiFID II adds specific mechanics (advisor pay, best execution, product governance) — don't treat them as the same regulation with two names.",
      related: [{ r: 60, label: "R60 — Volcker Rule connects to the broader Dodd-Frank reform wave" }]
    },
    {
      name: "Two categories of regulatory compliance risk",
      def: "(1) Suitability, disclosure, and fiduciary responsibilities; (2) improper business/market practices.",
      example: "Effective compliance risk management needs strong trade/employee supervision, robust middle/back-office functions, training, and ethics culture.",
      related: []
    },
    {
      name: "Punitive fine sizing philosophy",
      def: "Fines (illustrated by UBS, JPMorgan, Deutsche Bank cases) are sized to be punitive enough to EXCEED any benefit the firm gained from the violation.",
      pitfall: "This is deterrence, not just restitution — a fine that merely recovers the ill-gotten gain leaves the expected value of violating at zero or better; punitive sizing makes violating a negative-expected-value decision.",
      related: [],
      memory: "A fine that just gives back the winnings is a free lottery ticket. Punitive fines make sure violating never pays."
    }
  ],

  connections: {
    from: [],
    to: [
      { r: 60, why: "The Volcker Rule and broader Dodd-Frank wave get their fuller regulatory-history treatment." }
    ],
    confused: [
      { what: "MiFID vs MiFID II/MiFIR", how: "MiFID (2007) is broad conduct/disclosure; MiFID II/MiFIR (2014) adds specific mechanics like advisor pay, best execution, and product governance — a more detailed successor, not a synonym." }
    ]
  },

  misconceptions: [
    { wrong: "\"Regulatory fines for investor protection violations are sized just to recover the firm's ill-gotten gains.\"", right: "Fines are deliberately sized to be PUNITIVE — exceeding the benefit gained — so that violating never becomes a rational, positive-expected-value business decision (deterrence, not restitution)." },
    { wrong: "\"MiFID and MiFID II are essentially the same regulation.\"", right: "MiFID (2007) covers broad business/organizational conduct and disclosure; MiFID II/MiFIR (2014) is a more detailed successor covering advisor pay, conflicts of interest, best execution, and product governance specifically." }
  ],

  highYield: [
    { stars: 3, what: "Punitive fine-sizing philosophy: exceeding the gained benefit, for deterrence.", why: "The core conceptual takeaway connecting all three bank fine examples." },
    { stars: 2, what: "Four key regulations and their specific focus areas.", why: "Straightforward classification recall." }
  ],

  recall: [
    { q: "Why are regulatory fines for investor protection violations typically sized well above the firm's actual illicit gain from the violation?", a: "If fines only recovered the ill-gotten gain, violating the rules would carry no real downside risk — worst case, you give back what you made. Sizing fines punitively (above the gain) ensures the expected cost of violating exceeds the expected benefit, making compliance the rational choice rather than merely a moral one." }
  ],

  hooks: [
    { title: "No free lottery tickets", text: "A fine that only returns the ill-gotten gain is a free lottery ticket for violators — try it, and worst case you just give the money back. Punitive fines burn the ticket before it's ever drawn." }
  ],

  summary: `<p><strong>Four regulations</strong>: MiFID (conduct/disclosure), MiFID II/MiFIR (advisor pay, best execution, product governance), Investor Protection Act (whistleblower, OTC derivatives, SEC oversight), Volcker Rule (bars proprietary trading, created CFPB). <strong>Two compliance risk categories</strong>: suitability/disclosure/fiduciary duties; improper business/market practices. <strong>Fine sizing</strong>: punitive, deliberately exceeding the gained benefit — deterrence, not restitution (illustrated by UBS, JPMorgan, Deutsche Bank cases).</p>`
});
