FRM.register({
  book: 4, reading: 73,
  session: "Stress Testing, Contingency Planning & Liabilities",
  title: "Contingency Funding Planning",
  tagline: "The contingency funding plan (CFP) is the 'what do we actually do' document that liquidity stress testing feeds into. Five design considerations, then the CFP's five operating components.",

  teaches: `<p>Five CFP design considerations and five CFP components (governance, scenarios, contingent actions, monitoring/escalation, reporting).</p>`,

  why: `<p>A stress test tells you WHERE the gap would be; a CFP tells you WHAT TO DO about it. Without an actionable playbook, all the stress-testing sophistication in R71-72 is analysis without a plan.</p>`,

  intuition: `<p>The CFP must be an OPERATIONAL, ACTIONABLE, FLEXIBLE playbook — not a binder that sits on a shelf. Its scenarios must be CONSISTENT with the liquidity stress test scenarios (R71), and its contingent actions must be SIZED to the shortfall's amount, timing, and expected inflow — the nature (systemic vs. idiosyncratic) and magnitude of the stress determine which actions are actually viable.</p>`,

  formulas: [],

  concepts: [
    {
      name: "Five CFP design considerations",
      def: "Alignment to the firm's business/risk profile; integration with broader risk management frameworks; an operational, actionable, flexible playbook (not a binder that sits on a shelf); inclusive of appropriate stakeholders; supported by a communication plan.",
      related: []
    },
    {
      name: "Five CFP components",
      def: "Governance and oversight: corporate treasury, liquidity crisis team, management committee, board of directors — regularly tested at intervals for readiness. Scenarios and liquidity gap analysis: must be consistent with the liquidity stress test scenarios and link to recovery provisions. Contingent actions: sized to the shortfall's amount, timing, and expected inflow — nature (systemic/idiosyncratic) and magnitude of the stress determine which actions are viable. Monitoring and escalation: builds on EWIs (market/business measures + liquidity health measures), with three escalation levels. Data and reporting: often daily during stress, covering both current and required coverage of future liabilities/outflows.",
      example: "Escalation levels: Level 1 (heightened oversight of market conditions), Level 2 (clear negative business/liquidity impact), Level 3 (survival/going-concern focus).",
      pitfall: "Contingent actions viable in an IDIOSYNCRATIC crisis (e.g., selling assets, borrowing from healthy counterparties) may NOT be viable in a SYSTEMIC crisis (everyone needs the same actions simultaneously) — the nature of the stress determines which playbook pages actually work.",
      related: [{ r: 65, label: "R65 — the EWI framework this monitoring component builds on" }],
      memory: "Governance (who), scenarios (what's tested), contingent actions (what we do, sized to the gap), monitoring/escalation (three levels), reporting (daily under stress)."
    }
  ],

  connections: {
    from: [
      { r: 71, why: "The CFP's scenarios must be directly consistent with the liquidity stress test scenarios built there." },
      { r: 65, why: "The CFP's monitoring/escalation component builds directly on the EWI framework." }
    ],
    to: [
      { r: 74, why: "Deposit and nondeposit liability management are among the concrete funding actions a CFP might specify." }
    ],
    confused: [
      { what: "Systemic vs idiosyncratic contingent actions", how: "Idiosyncratic-crisis actions (e.g., selling assets to unaffected counterparties) may be unavailable in a SYSTEMIC crisis, where everyone needs the same actions at once — the viable action set depends on the crisis TYPE, not just its size." },
      { what: "CFP escalation Levels 1/2/3", how: "Level 1: heightened oversight (market conditions watched more closely). Level 2: clear negative business/liquidity impact (something is actually going wrong). Level 3: survival/going-concern focus (existential)." }
    ]
  },

  misconceptions: [
    { wrong: "\"A CFP should be a comprehensive, static reference document maintained primarily for regulatory compliance.\"", right: "A CFP must be an OPERATIONAL, ACTIONABLE, FLEXIBLE playbook — explicitly NOT a binder that sits on a shelf. It needs to be regularly tested for actual readiness, not just maintained as a compliance artifact." },
    { wrong: "\"The same contingent actions work regardless of whether a liquidity crisis is systemic or idiosyncratic.\"", right: "The nature (systemic vs. idiosyncratic) and magnitude of the stress determine which contingent actions are actually VIABLE — an action that works in an idiosyncratic crisis (e.g., borrowing from unaffected peers) may be unavailable in a systemic crisis where everyone needs the same resource simultaneously." }
  ],

  highYield: [
    { stars: 4, what: "Contingent actions must be sized to the shortfall and viable given the crisis's nature (systemic vs idiosyncratic).", why: "The core conceptual nuance of the CFP's contingent-actions component." },
    { stars: 3, what: "Three escalation levels (1: heightened oversight, 2: negative impact, 3: survival focus).", why: "A clean three-tier framework, good for quick recall." },
    { stars: 2, what: "Five CFP design considerations and five components.", why: "Foundational structural recall." }
  ],

  recall: [
    { q: "A bank's CFP specifies 'sell unencumbered securities to raise cash' as a Level 2 contingent action. Why might this action fail during a systemic crisis, even though it worked in a past idiosyncratic stress event?", a: "In a systemic crisis, MANY institutions face the same pressure simultaneously and may all be trying to sell similar securities at the same time — market depth and liquidity for those securities can evaporate exactly when everyone needs to sell, unlike an idiosyncratic crisis where the bank's own problem doesn't affect the broader market's capacity to absorb its asset sales." },
    { q: "Why must a CFP's scenarios be consistent with the liquidity stress test's scenarios rather than developed independently?", a: "The CFP is the action plan for WHAT TO DO when a liquidity gap identified by stress testing actually materializes — if the CFP's scenarios don't match the stress test's scenarios, the contingent actions might be sized for or triggered by the wrong circumstances, leaving a real gap between what stress testing identifies as a risk and what the CFP is actually prepared to respond to." }
  ],

  hooks: [
    { title: "Not a binder on a shelf", text: "A CFP that just sits in a drawer, dusted off for the auditor once a year, is worthless — it has to be a living, regularly-tested playbook people can actually execute under pressure." }
  ],

  summary: `<p><strong>Five design considerations</strong>: business/risk alignment, integration with broader risk frameworks, operational/actionable/flexible (not shelf-bound), stakeholder inclusion, communication plan. <strong>Five components</strong>: governance (treasury, crisis team, committee, board — regularly tested), scenarios (consistent with stress test, linked to recovery), contingent actions (sized to shortfall, viability depends on systemic vs. idiosyncratic nature), monitoring/escalation (EWI-based, 3 levels: oversight→impact→survival), data/reporting (often daily under stress).</p>`
});
