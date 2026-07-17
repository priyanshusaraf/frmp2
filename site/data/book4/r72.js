FRM.register({
  book: 4, reading: 72,
  session: "Stress Testing, Contingency Planning & Liabilities",
  title: "Liquidity Risk Reporting and Stress Testing",
  tagline: "Takes R71's framework and attaches it to specific named reports with specific cadences — the FSA-derived best practices here are a common exam target since they're concrete and listable.",

  teaches: `<p>Reporting cadence (FSA-style best practice) and named reports, including the cash flow survival report — the single most important liquidity stress report.</p>`,

  why: `<p>A stress-testing framework is useless without a reporting cadence that actually gets the right information to the right people fast enough — this reading gives you the concrete, named artifacts a treasury department actually produces.</p>`,

  intuition: `<p>Reporting frequency scales with how quickly the underlying risk can change: daily for market-wide cash flow/maturity mismatch (fast-moving), weekly for firm-specific tests and wholesale liability (slower-moving but still active), monthly for buffer/concentration/off-balance-sheet (structural), quarterly for funding/currency analysis (strategic, slow-moving).</p>`,

  formulas: [],

  concepts: [
    {
      name: "Reporting cadence (FSA-style best practice)",
      def: "Daily: cash flows & maturity mismatch for market-wide stress tests. Weekly: cash flows & maturity mismatch for firm-specific tests; wholesale liability. Monthly: liquidity buffer, funding concentration, off-balance-sheet. Quarterly: funding and currency analysis.",
      pitfall: "FSA treatment rules: callable/demand deposits treated as ONE-DAY tenor; derivatives EXCLUDED from liquidity ratio calculations (except pay-date coupons); undrawn commitments ARE included as a cash outflow.",
      related: [],
      memory: "Faster-moving risk (market-wide, daily) gets reported faster; slower-moving structural risk (funding/currency, quarterly) gets reported less often."
    },
    {
      name: "Named reports",
      def: "Deposit tracker (current/forecast deposit size), daily liquidity report (liquid assets, liabilities by maturity, cumulative liquidity), funding maturity gap/mismatch report (assets vs liabilities by time bucket), funding source concentration report (deposit diversity, watched by senior Treasury), undrawn commitment report (stress-scenario draw risk), cash flow survival report (tracks the Basel III 30-day survival horizon), wholesale pricing and volume report (funding cost benchmarked against peers).",
      pitfall: "The CASH FLOW SURVIVAL REPORT is explicitly named as the single most important liquidity stress report — it tracks the Basel III 30-day survival horizon directly. The wholesale pricing and volume report is USED BY REGULATORS to flag banks of concern.",
      related: [{ r: 60, label: "R60 — the LCR's 30-day survival horizon this report tracks" }],
      memory: "Cash flow survival report = the single most important report in this whole reading — it's the LCR's 30-day question, made concrete."
    }
  ],

  connections: {
    from: [
      { r: 71, why: "Attaches the abstract stress-testing framework to concrete named reports and cadences." }
    ],
    to: [
      { r: 73, why: "Contingency funding planning's data/reporting component builds on this reading's reporting cadence." }
    ],
    confused: [
      { what: "Daily vs weekly vs monthly vs quarterly report content", how: "Daily/weekly reports focus on cash flows/maturity mismatch (fast-moving); monthly covers structural items (buffer, concentration, off-balance-sheet); quarterly covers strategic funding/currency analysis (slowest-moving)." }
    ]
  },

  misconceptions: [
    { wrong: "\"Derivatives are included in liquidity ratio calculations like other balance sheet items.\"", right: "FSA treatment rules explicitly EXCLUDE derivatives from liquidity ratio calculations (except pay-date coupons) — a specific, testable carve-out." },
    { wrong: "\"Undrawn credit commitments are excluded from liquidity stress calculations since they haven't been drawn yet.\"", right: "Undrawn commitments ARE included as a cash outflow under FSA treatment rules — the potential for drawdown under stress must be accounted for, not ignored just because it hasn't happened yet." }
  ],

  highYield: [
    { stars: 4, what: "The cash flow survival report as the single most important liquidity stress report, tracking the 30-day Basel III horizon.", why: "Explicitly flagged as the signature report of this reading — directly connects to R60's LCR." },
    { stars: 3, what: "FSA treatment rules: callable/demand deposits as one-day tenor, derivatives excluded, undrawn commitments included.", why: "A specific, precisely testable set of treatment rules." },
    { stars: 2, what: "Reporting cadence table (daily/weekly/monthly/quarterly) and named reports list.", why: "Good for matching-style recall questions." }
  ],

  recall: [
    { q: "Why does the cash flow survival report hold special significance among all the named liquidity reports?", a: "It directly tracks the Basel III 30-day survival horizon — the same underlying question the LCR (liquidity coverage ratio) answers: can the institution survive 30 days of severe stress on its available liquid assets? Because this maps so directly onto the core regulatory liquidity standard, it's considered the single most important liquidity stress report." },
    { q: "Under FSA treatment rules, how should a bank treat an undrawn $10M credit line commitment to a corporate client in its liquidity stress calculations?", a: "It should be included AS A CASH OUTFLOW — even though undrawn, FSA rules require accounting for the potential that the client draws on the commitment during stress, rather than excluding it simply because it hasn't been drawn yet." }
  ],

  hooks: [
    { title: "The 30-day report that matters most", text: "Among all the named reports, the cash flow survival report is the headline act — it's the LCR's 30-day question, tracked report-by-report instead of just computed as one ratio." }
  ],

  summary: `<p><strong>Reporting cadence</strong>: daily (market-wide cash flows/mismatch) → weekly (firm-specific, wholesale liability) → monthly (buffer, concentration, off-balance-sheet) → quarterly (funding/currency). <strong>FSA rules</strong>: callable/demand deposits = one-day tenor; derivatives excluded from liquidity ratios; undrawn commitments included as outflows. <strong>Named reports</strong>: deposit tracker, daily liquidity report, funding maturity gap report, funding concentration report, undrawn commitment report, <strong>cash flow survival report</strong> (the single most important — tracks Basel III's 30-day horizon), wholesale pricing/volume report (regulators use this to flag concern).</p>`
});
