FRM.register({
  book: 2, reading: 23,
  session: "Credit Risk Analysis",
  title: "Credit Scoring and Retail Credit Risk Management",
  tagline: "Retail credit risk (mortgages, cards, auto loans) behaves differently from corporate credit risk: any single default barely moves the needle, but the 'dark side' is correlated, portfolio-wide deterioration.",

  teaches: `<p>How retail credit risk differs from corporate; scorecard evaluation (CAP and AR); mortgage underwriting variables and cutoff scores; risk-based pricing.</p>`,

  why: `<p>2008 was fundamentally a retail credit story — the "dark side" scenario (falling home prices + rising defaults simultaneously) is exactly what makes granular, individually-tiny retail exposures capable of producing systemic losses. Understanding this prevents the common error of assuming "small individual exposure" means "low portfolio risk."</p>`,

  intuition: `<p>Retail lenders have an advantage corporate lenders often lack: they can act preemptively — tighten underwriting standards or raise cutoff scores before a downturn fully arrives, since the portfolio is granular and each new loan is a fresh decision point. Corporate lenders, by contrast, are often locked into existing large exposures and see warning signs too late to act.</p>
  <p>But this advantage evaporates in the "dark side" scenario: a systemic shock (like a housing crash) hits asset VALUES and DEFAULT RATES simultaneously — collateral values fall exactly as borrowers default more, a double blow that no amount of granularity protects against.</p>`,

  formulas: [],

  concepts: [
    {
      name: "Retail vs corporate credit risk",
      def: "Any single retail default barely moves the needle (small, granular exposures), but lenders CAN act preemptively (tighten underwriting, adjust cutoff scores) whereas corporate lenders often see warning signs too late.",
      pitfall: "Don't confuse retail's 'small exposures, minimal single-default impact' with 'low risk overall' — the dark-side scenario is precisely about correlated, portfolio-wide deterioration, which retail portfolios are not immune to.",
      related: ["The 'dark side' of retail credit"],
      memory: "Granularity protects against ONE bad borrower, not against everyone getting worse at once."
    },
    {
      name: "The 'dark side' of retail credit",
      def: "When a systemic shock hits asset values and default rates simultaneously — the 2008 housing example: falling home prices + rising defaults at once.",
      intuition: "Falling collateral values mean lower recovery exactly when more borrowers are defaulting — a double-whammy correlated shock that granularity cannot diversify away.",
      related: [{ r: 25, label: "R25 — recovery rate negatively correlated with default rate, the same mechanism" }]
    },
    {
      name: "Scorecard evaluation: CAP and AR",
      def: "Cumulative accuracy profile (CAP) plots how well a scorecard ranks bad accounts; accuracy ratio (AR) is a single summary statistic — closer to 1 is better discrimination.",
      related: []
    },
    {
      name: "Mortgage underwriting variables and risk-based pricing",
      def: "FICO score, loan-to-value (LTV), debt-to-income (DTI), payment type, documentation type. Cutoff scores are pass/fail thresholds determining approval and pricing. Risk-based pricing (RBP): charge higher-risk customers more, lower-risk customers less.",
      related: [{ r: 22, label: "R22 — the underlying scoring philosophies feeding these variables" }]
    }
  ],

  connections: {
    from: [
      { r: 22, why: "Applies the general scoring concepts specifically to mortgage/card/auto underwriting." }
    ],
    to: [
      { r: 25, why: "The recovery-rate/default-rate negative correlation mechanism reappears explicitly." },
      { r: 39, why: "Loss curves and prepayment tools for securitized retail pools build directly on these underwriting variables." }
    ],
    confused: [
      { what: "Retail 'small exposure' vs 'low risk'", how: "Small individual exposure limits single-default impact, but says nothing about correlated, systemic (dark-side) risk across the whole portfolio." }
    ]
  },

  misconceptions: [
    { wrong: "\"Retail credit portfolios are inherently low-risk because individual loans are small.\"", right: "Individual granularity limits single-default impact, but the 'dark side' scenario — a systemic shock hitting values and defaults simultaneously — can devastate the whole portfolio at once, as 2008 demonstrated." },
    { wrong: "\"Retail lenders have no advantage over corporate lenders in managing credit risk.\"", right: "Retail lenders CAN act preemptively (tighten cutoffs, adjust underwriting) before a downturn fully materializes — an advantage corporate lenders, often locked into existing large exposures, frequently lack." }
  ],

  highYield: [
    { stars: 3, what: "The 'dark side' of retail credit: correlated shock to values AND defaults simultaneously.", why: "The central conceptual trap of this reading — small exposure ≠ low systemic risk." },
    { stars: 2, what: "CAP/AR scorecard evaluation and mortgage underwriting variables (FICO, LTV, DTI).", why: "Straightforward recall, occasionally paired with a scorecard-comparison question." }
  ],

  recall: [
    { q: "Why doesn't the granularity of a retail loan portfolio protect against the 'dark side' scenario?", a: "Granularity protects against idiosyncratic, single-borrower risk — one default barely affects the whole pool. But the dark-side scenario is a SYSTEMATIC shock hitting asset values and default rates simultaneously across the entire portfolio at once — no amount of diversification across individually small loans helps when the shock is common to all of them." },
    { q: "What preemptive action can a retail lender take that a corporate lender typically cannot, and why?", a: "A retail lender can tighten underwriting standards or raise cutoff scores for NEW originations quickly, since retail lending is a continuous flow of small, fresh decisions. A corporate lender is often locked into large existing exposures already on the books, with less ability to preemptively adjust before warning signs become undeniable." }
  ],

  hooks: [
    { title: "The double blow", text: "The dark side isn't one bad thing — it's two bad things at once: home prices fall (less recovery) AND defaults rise (more losses) simultaneously. That simultaneity is what makes 'small loans' add up to a systemic crisis." }
  ],

  summary: `<p>Retail credit: small individual exposures limit single-default impact, and lenders can act preemptively (tighten cutoffs) — but the <strong>'dark side'</strong> is a systemic shock hitting asset values AND default rates simultaneously (2008 housing), which granularity cannot protect against. <strong>CAP/AR</strong> evaluate scorecard discrimination power. Mortgage underwriting: FICO, LTV, DTI, payment/documentation type, cutoff scores. <strong>Risk-based pricing</strong> charges by risk band across the customer lifecycle.</p>`
});
