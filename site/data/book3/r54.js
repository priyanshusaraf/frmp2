FRM.register({
  book: 3, reading: 54,
  session: "Operational Risk Focus Areas",
  title: "Case Study: Model Risk and Model Validation",
  tagline: "Puts numbers and tiers around R53's abstractions: a formal model risk tiering system, and three concrete failure modes drawn from real cases.",

  teaches: `<p>Model risk tiering (what drives how strict validation must be) and the three concrete failure modes: invalid assumptions, implementation error, input measurement error.</p>`,

  why: `<p>These three failure modes are R53's "error vs. misuse" split, cut a slightly different way — a more granular, case-study-friendly taxonomy that maps directly onto real model-risk incidents.</p>`,

  intuition: `<p>Think of the three failure modes as three different places in the model-building pipeline where things can go wrong: INVALID ASSUMPTIONS fail at the design stage (the foundational premises don't match reality). IMPLEMENTATION ERROR fails at the coding/execution stage (the logic is right on paper but wrong in code). INPUT MEASUREMENT ERROR fails at the data stage (the model logic and code are both fine, but what's fed in is wrong or mismeasured).</p>`,

  formulas: [],

  concepts: [
    {
      name: "Model risk tiering",
      def: "Drives how strict validation must be, based on: materiality of output, model complexity, whether it's client-facing, whether it's used for regulatory compliance.",
      example: "The model risk management (MRM) team sets documentation, data-quality, and version-control standards PROPORTIONAL to the tier.",
      related: [{ r: 53, label: "R53 — the validation framework applied more strictly at higher tiers" }],
      memory: "Higher materiality, complexity, client-facing exposure, or regulatory use → stricter validation standards."
    },
    {
      name: "Three failure modes",
      def: "Invalid assumptions: the model's foundational premises don't hold in the real world. Implementation error: the model logic is coded/executed incorrectly. Input measurement error: the data feeding the model is wrong or mismeasured.",
      pitfall: "These three failure modes map directly onto R53's 'error vs. misuse' split, cut differently: invalid assumptions and implementation error are both 'conceptual/execution' failures (the model itself, in some sense, is broken), while input measurement error is closer to a data-quality (R43-style loss-data) problem wearing a model-risk label.",
      related: [{ r: 53, label: "R53 — the errors-vs-misuse framing this reframes" }, { r: 43, label: "R43 — data quality issues, the same root cause wearing a different label" }],
      memory: "Assumptions wrong at design. Code wrong at build. Data wrong at input — three different failure points along the same pipeline."
    }
  ],

  connections: {
    from: [
      { r: 53, why: "Applies the abstract validation/error framework to a concrete tiering system and named failure modes." }
    ],
    to: [
      { r: 95, why: "AI risk management's governance framework builds on this same model-risk foundation." }
    ],
    confused: [
      { what: "Invalid assumptions vs implementation error", how: "Invalid assumptions: the DESIGN premise itself is wrong (e.g., assuming normal distribution when returns are fat-tailed). Implementation error: the design might be fine, but the CODE/EXECUTION doesn't match the design correctly." },
      { what: "Implementation error vs input measurement error", how: "Implementation error is a CODE/LOGIC problem; input measurement error is a DATA problem — the model's code could be flawless and still produce bad output if fed mismeasured inputs." }
    ]
  },

  misconceptions: [
    { wrong: "\"All model risk tiers require the same validation rigor.\"", right: "Validation strictness scales with tier, which is driven by materiality of output, model complexity, whether it's client-facing, and whether it's used for regulatory compliance — higher-tier models demand stricter documentation, data-quality, and version-control standards." },
    { wrong: "\"Input measurement error is fundamentally a model-design problem.\"", right: "It's closer to a data-quality problem (similar to R43's loss-data quality concerns) wearing a model-risk label — the model's logic and assumptions could be entirely sound while the data feeding it is simply wrong or mismeasured." }
  ],

  highYield: [
    { stars: 4, what: "Three failure modes: invalid assumptions, implementation error, input measurement error — and which pipeline stage each occurs at.", why: "The core case-study taxonomy of this reading, directly testable via scenario matching." },
    { stars: 3, what: "Model risk tiering factors (materiality, complexity, client-facing, regulatory use).", why: "A clean four-factor list driving proportional validation rigor." }
  ],

  recall: [
    { q: "A pricing model correctly implements its designed logic in code, and the underlying theoretical assumptions are sound, but the market data feeding the model contains stale, mismeasured prices. Which failure mode is this, and how does it differ from an implementation error?", a: "This is an input measurement error — the model's code and assumptions are both fine; the problem is purely in the DATA quality. An implementation error, by contrast, would mean the code itself doesn't correctly execute the intended (and otherwise sound) model logic — a coding/execution problem, not a data problem." },
    { q: "Why would a highly complex, client-facing model used for regulatory capital calculations require stricter validation than a simple internal reporting tool?", a: "Model risk tiering scales validation rigor with materiality of output, complexity, client-facing exposure, and regulatory use — all four factors point toward HIGH tiering for this model, demanding stricter documentation, data-quality, and version-control standards than a low-tier internal tool where errors have limited impact and no regulatory consequence." }
  ],

  hooks: [
    { title: "Three places to trip", text: "Design (wrong assumptions), build (wrong code), input (wrong data) — a model can trip at any one of three stages along its pipeline, and each trip needs a different fix." }
  ],

  summary: `<p><strong>Model risk tiering</strong> scales validation rigor with materiality, complexity, client-facing exposure, and regulatory use. <strong>Three failure modes</strong>: invalid assumptions (design-stage premise failure), implementation error (code/execution failure), input measurement error (data-stage failure, closer to a data-quality problem than a model problem) — mapping onto R53's error-vs-misuse split from a different angle.</p>`
});
