FRM.register({
  book: 3, reading: 42,
  session: "Operational Risk Overview",
  title: "Risk Identification",
  tagline: "Before you can measure or mitigate a risk, you have to find it — two directions to look (top-down, bottom-up), scenario analysis, and the Basel taxonomy one level deeper.",

  teaches: `<p>Top-down vs. bottom-up identification, scenario analysis and scenario workshops, and the Basel taxonomy extended to Level 2/3 with the alternative ORX taxonomy.</p>`,

  why: `<p>Combining top-down (strategic/emerging risks senior management sees) with bottom-up (operational detail business units see) gives a more complete picture than either alone. The ORX taxonomy's elevation of model risk and cyber risk to Level-1 status directly explains why R47-48 (cyber) and R53-54 (model risk) get entire dedicated readings later.</p>`,

  intuition: `<p>Top-down identification is like a satellite view — it catches strategic and emerging risks a business unit embedded in daily operations might miss entirely. Bottom-up is like a ground-level walkthrough — it catches the operational detail (a specific process gap, a specific control weakness) that senior management, working at altitude, simply can't see. Neither view alone is complete; the two are complements, not substitutes.</p>`,

  formulas: [],

  concepts: [
    {
      name: "Top-down vs. bottom-up identification",
      def: "Top-down: analyzing exposures & vulnerabilities, risk wheel, analyzing emerging risks. Bottom-up: event and loss data analysis, risk and control self-assessment (RCSA), process mapping.",
      pitfall: "Combining both gives a more complete picture than either alone — don't treat one as sufficient on its own.",
      related: [{ r: 43, label: "R43 — RCSA formalized with full mechanics" }],
      memory: "Top-down: satellite view, catches strategic risks. Bottom-up: ground view, catches operational detail."
    },
    {
      name: "Scenario analysis & scenario workshops",
      def: "Scenarios are extreme, financially severe, plausible-but-unlikely events used to bridge risk identification into quantitative assessment. Neutrality is critical (regulators want consistent results across iterations) — achieved through empirical evidence and documented rationale.",
      example: "Scenario workshops run in two phases: generation (brainstorm broadly, then screen) and selection (combine, drop, or add scenarios to reach a final list for assessment).",
      related: [{ r: 43, label: "R43 — quantitative assessment methods applied to these scenarios" }]
    },
    {
      name: "The Basel taxonomy, one level deeper",
      def: "Three levels: Level 1 = the seven broad event categories (from R40); Level 2 = 20 more specific categories; Level 3 = concrete examples.",
      example: "EDPM losses: small dollar amount, very high frequency. CPBP losses: infrequent, very large. The ORX taxonomy (2019) is a well-known alternative, expanding from 7 to 14 Level-1 categories by promoting some Basel Level-2 risks (third-party failure, statutory reporting/tax, business continuity, data management, information security/cyber, and model risk) up to Level 1 status.",
      pitfall: "The ORX taxonomy elevating 'model risk' and 'information security/cyber risk' to Level-1 status reflects exactly WHY R47-48 (cyber) and R53-54 (model risk) get entire dedicated readings later — these risks earned their own spotlight because they didn't fit neatly in the original 7-category Basel scheme.",
      related: [{ r: 47, label: "R47 — cyber risk, elevated to Level 1 under ORX" }, { r: 53, label: "R53 — model risk, elevated to Level 1 under ORX" }],
      memory: "ORX = Basel's 7 categories, split finer into 14 — cyber and model risk graduate to their own category."
    }
  ],

  connections: {
    from: [
      { r: 41, why: "Once governance roles are established, the next step is actually finding the risks to govern." },
      { r: 40, why: "The Level-1 Basel taxonomy introduced there gets extended to Levels 2 and 3 here." }
    ],
    to: [
      { r: 43, why: "Scenario analysis here feeds directly into R43's quantitative assessment machinery." },
      { r: 47, why: "Cyber risk's promotion to Level-1 under ORX foreshadows its dedicated reading." },
      { r: 53, why: "Model risk's promotion to Level-1 under ORX foreshadows its dedicated reading." }
    ],
    confused: [
      { what: "Top-down vs bottom-up identification", how: "Top-down catches strategic/emerging risks (satellite view); bottom-up catches operational/process-level detail (ground view) — complements, not substitutes." },
      { what: "Basel taxonomy vs ORX taxonomy", how: "Basel has 7 Level-1 categories; ORX (2019) expands to 14 by promoting specific Level-2 risks (cyber, model risk, third-party failure, etc.) up to their own Level-1 status." }
    ]
  },

  misconceptions: [
    { wrong: "\"Bottom-up risk identification alone is sufficient since it captures the real operational detail.\"", right: "Top-down identification catches strategic and emerging risks that business-unit-level bottom-up analysis might miss entirely — the two approaches are complements, and combining both gives a more complete picture." },
    { wrong: "\"The ORX taxonomy is just a renamed version of the Basel taxonomy with the same structure.\"", right: "ORX genuinely restructures the taxonomy, expanding from 7 to 14 Level-1 categories by PROMOTING specific risks (cyber, model risk, third-party failure, etc.) that were buried as Level-2 items under Basel, up to their own Level-1 status." }
  ],

  highYield: [
    { stars: 3, what: "Top-down vs. bottom-up identification methods and why combining both matters.", why: "A clean two-way comparison, frequently tested as matching or 'which approach catches X' questions." },
    { stars: 3, what: "ORX taxonomy's promotion of cyber and model risk to Level-1 status, and why.", why: "Directly explains the existence of later dedicated readings — a valuable synthesis insight." },
    { stars: 2, what: "Three-level Basel taxonomy structure (7 broad → 20 specific → concrete examples).", why: "Straightforward structural recall." }
  ],

  recall: [
    { q: "Why might a bank's bottom-up risk identification process miss an emerging risk that top-down analysis would catch?", a: "Bottom-up identification (RCSA, process mapping, loss data analysis) is grounded in existing business unit operations and historical events — it's poorly suited to spotting genuinely NEW, strategic, or emerging risks that haven't yet manifested in unit-level processes or loss data. Top-down analysis, done at a more strategic/enterprise level, is specifically designed to scan for these emerging and cross-cutting risks." },
    { q: "Why did the ORX taxonomy promote cyber risk and model risk to Level-1 status rather than leaving them as Level-2 categories under Basel's original scheme?", a: "These risks had grown significant and distinctive enough that treating them as sub-items buried under a broader Level-1 category (like 'business disruption & system failures' for cyber, or a modeling sub-item elsewhere) understated their importance and made them harder to track/report on their own — promoting them to Level-1 gives them the visibility and dedicated attention their growing significance warrants, foreshadowing why they get entire dedicated readings later in the book." }
  ],

  hooks: [
    { title: "Satellite view vs. ground view", text: "Top-down: fly high, see the whole landscape, spot emerging threats on the horizon. Bottom-up: walk the factory floor, see the crack in this specific pipe. Neither view alone tells the whole story." },
    { title: "Graduation day for cyber and model risk", text: "ORX's taxonomy is basically a graduation ceremony: cyber risk and model risk, once buried as sub-items, get promoted to their own Level-1 category — a promotion that foreshadows their own dedicated readings later in the book." }
  ],

  summary: `<p><strong>Top-down</strong> (exposures/vulnerabilities, risk wheel, emerging risks — strategic view) vs. <strong>bottom-up</strong> (event/loss data, RCSA, process mapping — operational view); combine both. <strong>Scenario analysis</strong>: extreme, plausible-but-unlikely events; neutrality via empirical evidence + documented rationale; workshops run generation → selection phases. <strong>Basel taxonomy</strong>: Level 1 (7 broad categories) → Level 2 (20 specific) → Level 3 (examples); EDPM small/frequent, CPBP infrequent/large. <strong>ORX taxonomy</strong> (2019): expands to 14 Level-1 categories, promoting cyber risk, model risk, third-party failure, and others — directly explaining why these topics earn dedicated readings later.</p>`
});
