FRM.register({
  book: 3, reading: 53,
  session: "Operational Risk Focus Areas",
  title: "Supervisory Guidance on Model Risk Management",
  tagline: "Model risk is a distinct animal: not a single event, but a systematic risk baked into every decision the model informs. Two ways it bites: the model itself is wrong, or a correct model is used the wrong way.",

  teaches: `<p>How model risk is sized, model development discipline, and the three elements of model validation.</p>`,

  why: `<p>Model risk was promoted to Level-1 status under the ORX taxonomy (R42) — this reading gives it the dedicated treatment that promotion implied, and its errors-vs-misuse distinction repeats directly in R54's case studies.</p>`,

  intuition: `<p>A model can fail in two fundamentally different ways: it can simply be WRONG (a coding bug, a bad assumption, miscalibrated parameters), or it can be CORRECT but used OUT OF CONTEXT — applied to a situation its designers never intended, where its assumptions quietly stop holding. The second failure mode is sneakier because nothing about the model itself is broken; the mismatch is between the model and its application.</p>`,

  formulas: [],

  concepts: [
    {
      name: "Sizing model risk",
      def: "Depends on model complexity, uncertainty in inputs/assumptions, and potential impact on users.",
      pitfall: "Mitigation: restrict use, analyze performance, continually recalibrate, and always CONTEXTUALIZE model output against other information rather than treating it as gospel — a model's output is an input to a decision, not the decision itself.",
      related: []
    },
    {
      name: "Model development discipline",
      def: "Clear objective aligned with intended use, thorough documentation of strengths/weaknesses, rigorous testing (both quantitative and qualitative aspects).",
      pitfall: "Don't neglect the QUALITATIVE side of testing — model risk isn't purely a numbers problem; documentation quality and conceptual soundness matter as much as statistical fit.",
      related: ["Three elements of model validation"]
    },
    {
      name: "Three elements of model validation",
      def: "Conceptual soundness: documentation review, live testing, single/multi-variable sensitivity analysis. Ongoing monitoring: process verification (data input integrity) + benchmarking (compare vs. other models/data). Outcomes analysis: parallel analysis of amended models + backtesting (out-of-sample period, consistent with the model's forecast horizon).",
      pitfall: "Backtesting for model validation must use a time period DIFFERENT FROM the one used to build the model, but CONSISTENT WITH the model's actual forecast horizon — both conditions are tested, not just one. A common error is satisfying only one condition (e.g., using a different period but a mismatched horizon).",
      related: [{ r: 54, label: "R54 — concrete tiering and failure modes built on this validation framework" }],
      memory: "Conceptual soundness = is the design sound? Ongoing monitoring = is it still behaving? Outcomes analysis = did it actually predict correctly, out-of-sample?"
    }
  ],

  connections: {
    from: [
      { r: 42, why: "Model risk's promotion to Level-1 status under the ORX taxonomy foreshadows this dedicated reading." }
    ],
    to: [
      { r: 54, why: "The formal tiering system and three concrete failure modes build directly on this reading's validation framework." },
      { r: 95, why: "AI risk management (Book 5) extends model risk concepts to AI/ML models specifically." }
    ],
    confused: [
      { what: "Model error vs model misuse", how: "A model ERROR means the model itself is wrong (bad code, bad assumptions). MODEL MISUSE means a correct model is applied out of the context it was designed for — different failure modes requiring different fixes." },
      { what: "Backtesting period requirements", how: "Must be BOTH a different period from model-building AND consistent with the model's forecast horizon — satisfying only one condition is an incomplete backtest." }
    ]
  },

  misconceptions: [
    { wrong: "\"Model risk only arises when a model contains an actual error or bug.\"", right: "Model risk also arises when a CORRECT model is used the wrong way — applied out of the context it was designed for, where its assumptions no longer hold. This misuse failure mode is just as important as outright errors." },
    { wrong: "\"Backtesting a model just requires using data from a period different than the one used to build it.\"", right: "It ALSO requires that the out-of-sample period be consistent with the model's actual forecast horizon — both conditions must hold, not just one." },
    { wrong: "\"Model validation is primarily a quantitative/statistical exercise.\"", right: "Rigorous testing must include both quantitative AND qualitative aspects — documentation quality and conceptual soundness matter alongside statistical performance." }
  ],

  highYield: [
    { stars: 5, what: "Backtesting requirement: different period from model-building AND consistent with forecast horizon (both conditions).", why: "Explicitly flagged as a frequently tested dual-condition trap." },
    { stars: 4, what: "Model risk's two failure modes: the model is wrong (error) vs. a correct model misused out of context.", why: "The foundational conceptual distinction of this reading, repeated in R54's case studies." },
    { stars: 3, what: "Three elements of model validation (conceptual soundness, ongoing monitoring, outcomes analysis).", why: "A clean three-part framework, good for classification questions." }
  ],

  recall: [
    { q: "A credit risk model performs well on the data used to build it, and is then tested on a completely different, more recent period — but that period covers only 3 months while the model is designed to forecast 12-month default rates. Is this a valid backtest?", a: "No — while the period is different from the model-building period (satisfying one condition), it is NOT consistent with the model's 12-month forecast horizon (failing the second condition). A valid backtest requires BOTH: a different time period AND consistency with the model's actual forecast horizon." },
    { q: "A statistically sound prepayment model, validated for prime residential mortgages, is applied without modification to a subprime portfolio and produces poor predictions. Is this a model error or model misuse?", a: "Model misuse — the model itself may be perfectly correct for its intended context (prime mortgages), but applying it out of context (subprime, with different borrower behavior) is a mismatch between the model and its application, not a flaw in the model's internal logic or coding." }
  ],

  hooks: [
    { title: "Wrong tool vs. right tool, wrong job", text: "A model ERROR is a broken hammer. Model MISUSE is a perfectly good hammer being used to drive a screw — nothing wrong with the hammer, everything wrong with the application." },
    { title: "The two-condition backtest", text: "A valid backtest needs BOTH a different time period AND a matching horizon — like testing a weather forecaster on a different week (not the training week) but still checking THEIR ACTUAL forecast window (not a mismatched one)." }
  ],

  summary: `<p>Model risk bites two ways: the model is WRONG (error), or a CORRECT model is MISUSED out of context. <strong>Sizing</strong>: complexity, input uncertainty, potential impact — mitigate via restricted use, performance analysis, recalibration, and contextualizing output. <strong>Development discipline</strong>: clear objective, thorough documentation, rigorous quantitative AND qualitative testing. <strong>Three validation elements</strong>: conceptual soundness (documentation, sensitivity analysis), ongoing monitoring (process verification, benchmarking), outcomes analysis (parallel analysis, backtesting). <strong>Backtesting</strong> requires BOTH a different time period from model-building AND consistency with the model's forecast horizon.</p>`
});
