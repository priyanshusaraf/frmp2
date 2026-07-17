FRM.register({
  book: 2, reading: 22,
  session: "Credit Risk Analysis",
  title: "Credit Scoring and Rating",
  tagline: "Scores (300-850, individuals/small business) vs. ratings (AAA...D, large firms/governments) — two tools solving the same problem at different scales.",

  teaches: `<p>Through-the-cycle vs. point-in-time rating philosophies, behavioral vs. profit consumer scoring, the CRA rating process (5 steps), and the standard criticisms of rating agencies.</p>`,

  why: `<p>Ratings and scores drive capital requirements, pricing, and portfolio limits throughout the rest of the curriculum. Knowing WHO uses which philosophy (and why) explains a lot of observed rating behavior — like why agency ratings lag reality (through-the-cycle smoothing) while a bank's internal score reacts fast (point-in-time).</p>`,

  intuition: `<p>Through-the-cycle rating is like a report card that averages your performance over four years of school — stable, doesn't overreact to one bad semester, good for long-term decisions. Point-in-time is like a weekly quiz grade — reacts immediately, good for short-term lending decisions where you need to know RIGHT NOW if something changed.</p>`,

  formulas: [],

  concepts: [
    {
      name: "Through-the-cycle vs. point-in-time",
      def: "Through-the-cycle: long-term horizon, smooths the cycle, used by rating agencies, best for long-term loans. Point-in-time: short-term horizon, reacts fast, used by banks internally, best for short-term loans.",
      pitfall: "Don't assume one philosophy is objectively 'better' — each is fit for a specific purpose (long vs. short horizon decisions).",
      memory: "Through-the-cycle = report card average. Point-in-time = this week's quiz."
    },
    {
      name: "Consumer scoring: behavioral vs. profit",
      def: "Behavioral scoring: uses payment/purchase history, updates near real-time. Profit scoring: ignores behavior, optimizes account/customer profitability directly.",
      related: [{ r: 23, label: "R23 — retail credit risk management builds on this scoring foundation" }]
    },
    {
      name: "CRA rating process and criticisms",
      def: "Five steps: data collection → model fitting → model validation → risk-rating definition/validation → implementation (with ongoing monitoring feeding back into reevaluation).",
      pitfall: "Common criticisms: lack of transparency, conflicts of interest (issuer pays the rater), encouragement of higher debt loads, weak predictive power, and PROCYCLICALITY (ratings get worse exactly when the economy is already struggling, amplifying the downturn).",
      related: [{ r: 39, label: "R39 — the same issuer-pays conflict of interest in securitization ratings" }],
      memory: "Issuer pays the rater — the single most-cited rating agency conflict of interest."
    }
  ],

  connections: {
    from: [
      { r: 21, why: "CAMEL and default model families set up the broader context; this reading specializes into how ratings/scores are actually built." }
    ],
    to: [
      { r: 23, why: "Retail credit risk management applies the scoring concepts here to mortgage/card/auto underwriting specifically." },
      { r: 39, why: "The issuer-pays conflict of interest reappears identically in securitization tranche rating." }
    ],
    confused: [
      { what: "Through-the-cycle vs point-in-time", how: "Through-the-cycle smooths across the whole business cycle (agencies, long-term loans); point-in-time reacts to current conditions (banks internally, short-term loans)." },
      { what: "Behavioral vs profit scoring", how: "Behavioral scoring predicts default risk from payment history; profit scoring optimizes customer profitability directly, ignoring behavioral signals." }
    ]
  },

  misconceptions: [
    { wrong: "\"Point-in-time ratings are always more accurate than through-the-cycle ratings.\"", right: "Neither is universally better — through-the-cycle suits long-term decisions (avoiding overreaction to temporary conditions); point-in-time suits short-term decisions needing current information." },
    { wrong: "\"Rating agency procyclicality means ratings improve during downturns to help issuers.\"", right: "The opposite — procyclicality means ratings WORSEN exactly when the economy is already struggling, amplifying rather than dampening the downturn." }
  ],

  highYield: [
    { stars: 3, what: "Through-the-cycle vs. point-in-time: definitions, users, and best-fit horizon.", why: "A clean two-way comparison, frequently tested as a matching question." },
    { stars: 2, what: "CRA criticisms, especially issuer-pays conflict of interest and procyclicality.", why: "Recurring conceptual points, connects to R39's securitization rating conflicts." }
  ],

  recall: [
    { q: "Why would a bank use point-in-time ratings internally while relying on agency through-the-cycle ratings for long-term bond investments?", a: "Point-in-time ratings react quickly to current conditions, suiting the bank's short-term lending decisions where up-to-date risk assessment matters most. Through-the-cycle ratings smooth over the business cycle, better suited to long-term investment decisions where overreacting to temporary conditions would cause excessive portfolio turnover." },
    { q: "Explain the mechanism behind rating agency procyclicality and why it's considered a systemic risk concern.", a: "As economic conditions deteriorate, agencies downgrade ratings, which can trigger forced selling (many mandates require investment-grade holdings), further depressing prices and worsening conditions — ratings deteriorating exactly when the economy needs stability amplifies rather than dampens the downturn." }
  ],

  hooks: [
    { title: "Report card vs. pop quiz", text: "Through-the-cycle = your GPA (smoothed, stable). Point-in-time = this week's quiz grade (reactive, current). Different tools for different decision horizons." }
  ],

  summary: `<p><strong>Through-the-cycle</strong> (agencies, long-term loans, smooths the cycle) vs. <strong>point-in-time</strong> (banks internally, short-term loans, reacts fast). Consumer scoring: <strong>behavioral</strong> (payment history) vs. <strong>profit</strong> (customer profitability). <strong>CRA process</strong>: data → model fitting → validation → rating definition → implementation. <strong>Criticisms</strong>: lack of transparency, issuer-pays conflict of interest, encourages higher debt loads, weak predictive power, procyclicality (ratings worsen exactly when the economy is already struggling).</p>`
});
