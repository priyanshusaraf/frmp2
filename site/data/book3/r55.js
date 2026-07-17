FRM.register({
  book: 3, reading: 55,
  session: "Operational Risk Focus Areas",
  title: "Stress Testing Banks",
  tagline: "Makes the case for supervisory stress testing as a post-crisis risk tool superior to static capital ratios, then digs into why designing a genuinely coherent stress test is hard.",

  teaches: `<p>The disclosure evolution (SCAP → CCAR), the coherence problem in scenario design, and macro-to-micro translation mechanics.</p>`,

  why: `<p>Direct setup for R58's capital planning and the Basel capital math in R59-62. Understanding why stress test design is genuinely hard (scenarios must be extreme AND plausible simultaneously) prepares you for the practical complexity in R58's real supervisory regime.</p>`,

  intuition: `<p>The coherence problem: a scenario can be extreme in ONE dimension (say, unemployment) but become implausible once you consider all dimensions jointly — real economic risk is multi-factor, and shocking one variable to an extreme while leaving others untouched can produce an internally inconsistent, unrealistic scenario. Genuinely coherent stress scenarios require ensuring all shocked variables move together in a way that could actually happen.</p>
  <p>Macro-to-micro translation is the mechanical challenge of turning big, abstract shocks (unemployment, GDP growth, home price index) into bank-specific, product-specific, geography-specific revenue and loss numbers — the balance sheet evolves quarter by quarter, with each quarter's stressed income/loss feeding into the next quarter's starting balance sheet, typically over a two-year horizon.</p>`,

  formulas: [],

  concepts: [
    {
      name: "The disclosure evolution: SCAP → CCAR",
      def: "SCAP (US, 2009): full bank-level disclosure — high transparency, first post-crisis macro-prudential test. CCAR (initial, 2011): only macro-scenario results published, not bank-level. CCAR (revised, 2012): back to near-SCAP level of bank-level detail.",
      example: "EBA's Irish and European stress tests required significant disclosure too — the goal in every case was restoring market trust in the banking system through transparency.",
      related: [],
      memory: "SCAP: full transparency. Early CCAR: pulled back. Revised CCAR: transparency restored."
    },
    {
      name: "The coherence problem",
      def: "Scenarios must be extreme AND plausible simultaneously — genuinely hard because real risk is multi-factor (a scenario extreme in one dimension may be unrealistic when all dimensions are considered jointly).",
      related: []
    },
    {
      name: "Macro-to-micro translation",
      def: "Stress tests start from macro factors (unemployment, GDP growth, home price index) and must map them down to bank-specific, product-specific, geography-specific revenue and loss outcomes.",
      example: "Mechanically: the starting balance sheet generates quarter 1's stressed income/loss, which produces the quarter-end balance sheet, feeding into quarter 2, and so on — typically over a two-year horizon, with capital and liquidity ratios required to hold throughout.",
      pitfall: "The same 'intermediate risk factor' mapping problem also appears in R46's ERM stress-testing taxonomy and R57's economic capital challenges — recognize this as a recurring translation problem, not a one-off issue.",
      related: [{ r: 46, label: "R46 — the same macro-to-micro mapping challenge previewed" }, { r: 58, label: "R58 — where this mechanics becomes an actual supervisory process" }],
      memory: "Macro shocks (unemployment, GDP) → bank-specific losses → next quarter's starting balance sheet → repeat, for 2 years."
    }
  ],

  connections: {
    from: [
      { r: 46, why: "The stress-testing taxonomy previewed there gets applied specifically to bank-wide supervisory stress tests here." }
    ],
    to: [
      { r: 58, why: "This reading's macro-to-micro challenge becomes the concrete mechanics of one real regulatory regime." }
    ],
    confused: [
      { what: "SCAP vs initial CCAR vs revised CCAR disclosure levels", how: "SCAP: full bank-level. Initial CCAR: only macro-scenario results, NOT bank-level. Revised CCAR: back to near-SCAP bank-level detail — disclosure levels went full → reduced → restored, not a linear progression." }
    ]
  },

  misconceptions: [
    { wrong: "\"Stress test disclosure has steadily increased in transparency since SCAP.\"", right: "It's non-monotonic: SCAP (2009) had full bank-level disclosure, initial CCAR (2011) pulled back to macro-scenario-only results, and revised CCAR (2012) restored near-SCAP bank-level detail." },
    { wrong: "\"A scenario that's extreme in one economic variable is automatically a valid stress scenario.\"", right: "The coherence problem means a scenario extreme in ONE dimension can be implausible when ALL dimensions are considered jointly — genuinely coherent scenarios require internally consistent, jointly plausible shocks across multiple variables." }
  ],

  highYield: [
    { stars: 3, what: "SCAP → CCAR (initial) → CCAR (revised) disclosure evolution, and the non-monotonic pattern.", why: "A specific, precisely testable historical sequence." },
    { stars: 3, what: "The coherence problem: extreme AND plausible simultaneously, multi-factor risk.", why: "The conceptual core of why stress test design is genuinely hard — a recurring GARP theme." },
    { stars: 2, what: "Macro-to-micro translation mechanics (quarterly balance sheet evolution over a 2-year horizon).", why: "Sets up R58's concrete supervisory process." }
  ],

  recall: [
    { q: "Why did stress test disclosure levels move from SCAP's full transparency to initial CCAR's reduced disclosure, and then back to near-SCAP detail under revised CCAR?", a: "The reading doesn't specify the exact motivations for each shift, but the pattern illustrates that disclosure calibration is an ongoing balancing act — full transparency (SCAP, initial CCAR pullback, revised CCAR restoration) reflects evolving judgments about how much bank-specific detail serves the goal of restoring market trust versus other considerations (e.g., competitive sensitivity, market stability)." },
    { q: "Why is it insufficient to simply shock unemployment to a historically extreme level in isolation when designing a stress scenario?", a: "Real economic risk is multi-factor — an extreme unemployment shock considered in isolation, without corresponding (and jointly plausible) shocks to GDP growth, home prices, and other correlated variables, may not represent a scenario that could actually occur. The coherence problem requires all shocked variables to move together in an internally consistent, jointly plausible way." }
  ],

  hooks: [
    { title: "One variable can't tell the whole story", text: "Shocking unemployment alone to a historic extreme, while leaving GDP and home prices untouched, is like writing a disaster movie where only the volcano erupts but the sky stays sunny — the coherence problem demands the whole scene make sense together." }
  ],

  summary: `<p><strong>Disclosure evolution</strong>: SCAP (2009, full bank-level) → CCAR initial (2011, macro-only) → CCAR revised (2012, near-SCAP detail) — non-monotonic. <strong>Coherence problem</strong>: scenarios must be extreme AND plausible jointly across multiple factors — a single-dimension extreme shock can be unrealistic when considered with all other variables. <strong>Macro-to-micro translation</strong>: macro factors (unemployment, GDP, home prices) mapped to bank/product/geography-specific outcomes; balance sheet evolves quarter-by-quarter over a typical 2-year horizon, with capital/liquidity ratios required to hold throughout.</p>`
});
