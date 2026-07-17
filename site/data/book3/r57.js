FRM.register({
  book: 3, reading: 57,
  session: "Capital and Regulatory Frameworks",
  title: "Range of Practices and Issues in Economic Capital Frameworks",
  tagline: "A challenges-and-limitations tour of everything economic capital modeling has to get right: risk measure choice, aggregation, validation, credit dependency, counterparty credit risk, IRRBB.",

  teaches: `<p>Risk measure tradeoffs, five aggregation methodologies, six qualitative + six quantitative model validation processes, the persistent challenges of dependency modeling/counterparty credit risk/IRRBB, and the BIS's 10 recommendations plus economic capital's four practical uses.</p>`,

  why: `<p>Mostly qualitative — treat it as a checklist reading. Understanding WHY each risk measure and aggregation method has structural weaknesses prepares you to critically evaluate any economic capital framework a question describes, rather than assuming any single approach is "correct."</p>`,

  intuition: `<p>No risk measure is perfect: standard deviation and VaR are both NOT coherent (violate monotonicity/subadditivity respectively), ES is coherent but harder to interpret and link to a target credit rating, and spectral measures are rarely used despite theoretical appeal. Similarly, no aggregation method is perfect: simple summation ignores diversification entirely, while full simulation is the most demanding and can create FALSE confidence (precision theater, not real precision).</p>`,

  visual: `<div class="widget" data-widget="raroc"></div>`,

  formulas: [],

  concepts: [
    {
      name: "Risk measure tradeoffs",
      def: "Standard deviation: not coherent (violates monotonicity), depends on distributional assumptions. VaR (most used): not coherent (violates subadditivity) — can distort internal capital allocation/limits. Expected shortfall: harder to interpret, link to target credit rating unclear. Spectral/distorted measures: rarely used, not intuitive — mainly academic.",
      related: [{ r: 1, label: "R1 — VaR/ES/coherent risk measures introduced" }, { r: 6, label: "R6 — VaR's non-subadditivity, the same flaw" }]
    },
    {
      name: "Five aggregation methodologies",
      def: "Simple summation (ignores diversification), constant diversification (summation minus a fixed %), variance-covariance matrix (flexible but hard to estimate correlations, misses nonlinearity/skew), copulas (hard to validate, hard to build the joint distribution), full modeling/simulation (most demanding, can create false confidence).",
      pitfall: "The variance-covariance approach is MOST COMMON in practice despite its estimation difficulty — banks often use a deliberately conservative (upward-biased) correlation matrix to compensate.",
      related: [{ r: 20, label: "R20 — the variance-covariance aggregation this applies to credit portfolios" }],
      memory: "Simplest (summation) to most sophisticated (full simulation) — but sophistication brings its own false-confidence risk."
    },
    {
      name: "Model validation processes",
      def: "Qualitative (6): use test, qualitative review, systems implementation testing, management oversight, data quality checks, assumption/sensitivity testing. Quantitative (6): input/parameter validation, model replication (rarely sufficient alone), benchmarking/hypothetical portfolios (only compares model-to-model, not to reality), backtesting (needs a quantifiable, comparable metric — not always available), P&L attribution (mostly used for market risk pricing models only), stress testing.",
      pitfall: "Benchmarking only compares MODEL-TO-MODEL, not model-to-reality — a frequently missed limitation. Backtesting needs a quantifiable comparable metric that isn't always available for op risk or credit risk models the way it is for market risk VaR.",
      related: [{ r: 53, label: "R53 — model validation's three elements, a related framework" }],
      memory: "12 processes total, 6 qualitative + 6 quantitative — each has a specific, named limitation worth knowing."
    },
    {
      name: "Dependency modeling, counterparty credit risk, IRRBB",
      def: "Credit dependency modeling questions the ASRF/Gaussian-copula assumption itself: normal-distribution defaults, stable correlations over time, and whether PD-LGD correlation and LGD variability are adequately captured.",
      example: "Counterparty credit risk: market-risk-style simulation doesn't allow netting across counterparties the way portfolio VaR does, and exposure must be modeled over multiple future horizons, not one short window. IRRBB: embedded optionality (mortgage prepayment on the asset side; the bank's rate-setting option and the depositor's withdrawal option on the liability side) makes cash flows genuinely indeterminate, requiring complex stochastic-path modeling.",
      related: [{ r: 27, label: "R27 — the single-factor/Gaussian-copula assumption being questioned here" }, { r: 79, label: "R79 — IRRBB and duration gap, the practical ALM treatment" }],
      memory: "Three persistent challenges: does the copula assumption hold (credit), can you net across time and counterparties (CCR), and can you even pin down the cash flows (IRRBB, with its embedded options)?"
    },
    {
      name: "BIS's 10 recommendations & practical uses",
      def: "10 BIS recommendations span: model use in capital adequacy assessment, senior management commitment, transparency/decision integration, risk identification, risk measures, risk aggregation, validation, credit dependency modeling, counterparty credit risk, and IRRBB.",
      example: "Four practical application areas: credit portfolio management (protects against risk deterioration), risk-based pricing (maximizes profitability via minimum RAROC-implied rates), customer profitability analysis (identifies unprofitable relationships to drop), management incentives (motivates staff participation, though studies show compensation is a MINOR actual driver of business-unit-level economic capital use).",
      pitfall: "Despite theoretical appeal, compensation/incentive linkage is a MINOR actual driver of economic capital adoption in practice — don't overstate its practical importance.",
      related: [{ r: 56, label: "R56 — RAROC, the pricing/incentive mechanism this feeds" }]
    }
  ],

  connections: {
    from: [
      { r: 56, why: "RAROC needs an economic capital denominator — this reading is the challenges checklist behind computing that denominator responsibly." }
    ],
    to: [
      { r: 58, why: "This reading's abstract challenges become concrete inside one real supervisory capital planning regime." }
    ],
    confused: [
      { what: "Standard deviation/VaR (not coherent) vs ES/spectral (coherent)", how: "Standard deviation violates monotonicity; VaR violates subadditivity — both fail to be coherent risk measures. ES and spectral measures ARE coherent, but ES is harder to interpret/link to credit ratings, and spectral measures are rarely used in practice." },
      { what: "Benchmarking vs backtesting as validation tools", how: "Benchmarking compares model-to-MODEL (or hypothetical portfolios) — never validates against actual reality. Backtesting compares model-to-ACTUAL outcomes, but needs a quantifiable metric that isn't always available." }
    ]
  },

  misconceptions: [
    { wrong: "\"The variance-covariance aggregation approach is uncommon in practice due to its correlation estimation difficulty.\"", right: "It's actually the MOST COMMON aggregation method in practice, despite the estimation difficulty — banks compensate by using deliberately conservative (upward-biased) correlation matrices." },
    { wrong: "\"Benchmarking a model against other models validates it against real-world outcomes.\"", right: "Benchmarking only compares model-to-model (or against hypothetical portfolios) — it never validates against actual reality, unlike backtesting (which does, when a suitable quantifiable metric exists)." },
    { wrong: "\"Linking economic capital to management compensation is the primary driver of its adoption across business units.\"", right: "Studies show compensation/incentive linkage is actually a MINOR actual driver of business-unit-level economic capital use in practice, despite its theoretical appeal as a motivator." },
    { wrong: "\"More sophisticated aggregation methods (like full simulation) always produce more trustworthy capital estimates.\"", right: "Full modeling/simulation is the most demanding approach and can create FALSE CONFIDENCE — sophistication doesn't guarantee accuracy, and can mask underlying model risk with an illusion of precision." }
  ],

  highYield: [
    { stars: 4, what: "Risk measure tradeoffs: which measures are coherent, and each measure's specific weakness.", why: "Directly builds on R1/R6's coherent risk measure concepts in a new economic capital context." },
    { stars: 4, what: "Five aggregation methodologies and their specific weaknesses, especially variance-covariance being most common despite difficulty.", why: "A precise, frequently tested list with a counter-intuitive 'most common despite hardest to estimate' fact." },
    { stars: 3, what: "Benchmarking's model-to-model-only limitation; backtesting's need for a quantifiable metric.", why: "A subtle but well-defined validation limitation." },
    { stars: 3, what: "IRRBB's embedded optionality challenge (prepayment, rate-setting option, withdrawal option).", why: "Connects to the practical ALM treatment in Book 4 (R79)." },
    { stars: 2, what: "Compensation as a minor (not primary) driver of economic capital adoption.", why: "A specific counter-intuitive fact worth a quick recall check." }
  ],

  recall: [
    { q: "A risk manager claims 'our economic capital model is validated because we benchmarked it against three competitor banks' models and got similar results.' What's the flaw in this validation claim?", a: "Benchmarking only compares the model to OTHER MODELS (or hypothetical portfolios), never to actual real-world outcomes. Getting similar results to competitor models proves consistency across models, not accuracy against reality — a genuinely flawed assumption shared across all compared models would go undetected by benchmarking alone." },
    { q: "Why might a bank prefer VaR over expected shortfall for economic capital, despite VaR's known lack of subadditivity?", a: "ES, while coherent (subadditive), is harder to interpret intuitively and its link to a specific target credit rating is less clear/established than VaR's — despite VaR's structural flaw (it can distort internal capital allocation since it isn't subadditive), practical interpretability and rating-linkage considerations can still favor VaR in practice." },
    { q: "Why does modeling interest rate risk in the banking book (IRRBB) require complex stochastic-path modeling rather than simple deterministic cash flow projections?", a: "IRRBB cash flows are genuinely indeterminate due to embedded optionality on both sides of the balance sheet: mortgage borrowers can prepay (asset-side option), while the bank has discretion in rate-setting and depositors can withdraw funds (liability-side options). These embedded options mean cash flow timing and amount depend on future, uncertain rate paths and behavioral responses, requiring stochastic modeling rather than a single deterministic projection." }
  ],

  hooks: [
    { title: "Comparing rulers, not measuring reality", text: "Benchmarking is like comparing your ruler to your neighbor's ruler — if both are slightly wrong in the same way, you'll agree perfectly and still both be measuring wrong. Only backtesting against the actual wall checks true length." },
    { title: "The illusion of precision", text: "Full simulation modeling can feel the most rigorous — more inputs, more Monte Carlo paths, more decimal places. But sophistication can manufacture FALSE confidence just as easily as it can manufacture real accuracy." }
  ],

  summary: `<p><strong>Risk measures</strong>: std dev & VaR not coherent (monotonicity/subadditivity violations); ES coherent but hard to interpret/rating-link; spectral rarely used. <strong>Aggregation</strong>: simple summation (no diversification credit) → constant diversification → variance-covariance (most common despite estimation difficulty — conservative correlations used) → copulas (hard to validate) → full simulation (most demanding, can create false confidence). <strong>Validation</strong>: 6 qualitative + 6 quantitative processes; benchmarking = model-to-model only (never reality); backtesting needs a quantifiable metric (not always available). <strong>Persistent challenges</strong>: credit dependency (questions the Gaussian-copula/ASRF assumption itself), CCR (netting across time/counterparties is hard), IRRBB (embedded optionality makes cash flows indeterminate). <strong>Practical uses</strong>: credit portfolio management, risk-based pricing, customer profitability, management incentives (a MINOR actual driver despite theoretical appeal).</p>`
});
