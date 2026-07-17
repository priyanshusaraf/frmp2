FRM.register({
  book: 3, reading: 41,
  session: "Operational Risk Overview",
  title: "Risk Governance",
  tagline: "Who's in charge of operational risk? Three levels: the regulatory framework, the committee structure, and the three lines of defense — the single most-recycled framework in this entire book.",

  teaches: `<p>Basel II's three pillars applied to operational risk, the committee structure (bottom → middle → top), the three lines of defense in full mechanics, and risk appetite/risk culture.</p>`,

  why: `<p>The three lines of defense, first seen in Credit Risk Book 2, gets its fullest treatment here — and reapplies nearly verbatim across cyber risk (R47), AML/CFT, and ERM generally (R46). Master it here once and you answer governance questions in almost any later reading without relearning the framework.</p>`,

  intuition: `<p>Think of the three lines as a factory floor, a quality inspector, and an external auditor. Line 1 (the floor workers) generates and manages risk day-to-day. Line 2 (quality inspector) independently monitors Line 1's work — and critically, must have ZERO involvement in Line 1's actual work, or the inspection becomes a self-review with no teeth. Line 3 (external auditor) checks that BOTH Line 1 and Line 2 are doing their jobs, maintaining its own independent risk list.</p>`,

  formulas: [],

  concepts: [
    {
      name: "Basel II's three pillars, applied to operational risk",
      def: "Pillar 1 (regulatory capital): minimum capital for unexpected op-risk losses, minimum liquidity coverage, BCBS's Principles for Sound Management of Operational Risk. Pillar 2 (supervisory review): extra capital for risks not in Pillar 1 (concentration, compliance, governance risk), plus voluntary disclosure/self-assessment. Pillar 3 (market discipline): mandatory quarterly/annual risk disclosures.",
      related: [{ r: 59, label: "R59 — the full Basel II framework in depth" }]
    },
    {
      name: "Committee structure: bottom → middle → top",
      def: "Lowest: numerous small committees per business activity/country, feeding data upward. Middle: organization risk committee aggregates firm-wide op risk, reports to the top. Top: board (enterprise) risk committee oversees everything, evaluates major incidents, and must have members with current, relevant risk management experience.",
      related: []
    },
    {
      name: "Three lines of defense — full mechanics",
      def: "Line 1 (+ 'Line 1.5'): risk owners (front line); sometimes a risk champion bridges to Line 2 — generate, measure, and manage their own risk. Line 2: independent risk management — develop ORM policy, cross-examine Line 1's work, must have ZERO involvement in Line 1 to avoid a self-review threat. Line 3: internal audit — fully independent review of Lines 1 and 2; keeps its own risk list separate from Line 2's.",
      pitfall: "Line 2 must have ZERO involvement in Line 1 work to avoid a 'self-review threat' — a subtle but frequently tested independence requirement. Also: some areas (legal/compliance, IT security) genuinely straddle multiple lines and can't be cleanly classified into just one.",
      related: [{ r: 47, label: "R47 — the same three-lines model applied to cyber risk" }, { r: 18, label: "R18 — the same framework first introduced in Credit Risk" }],
      memory: "Line 1 does. Line 2 watches (with zero hands-on involvement). Line 3 audits both."
    },
    {
      name: "Risk appetite and risk culture",
      def: "The board sets risk appetite: evaluate significant risks, set limits distinguishing acceptable from unacceptable outcomes, establish controls. Risk appetite statements should be simple, explain WHY certain risks are accepted/declined/minimized, and increasingly include disruption/impact tolerances for key services.",
      example: "Risk culture is linked to ethics ('tone at the top'), a board-level code of conduct, and compensation structure that doesn't reward excessive risk-taking.",
      related: []
    }
  ],

  connections: {
    from: [
      { r: 40, why: "Establishes what op risk is; this reading establishes who's accountable for managing it." },
      { r: 18, why: "The three lines of defense framework was first introduced in Credit Risk governance." }
    ],
    to: [
      { r: 42, why: "Once governance roles are clear, the next step is actually identifying risk." },
      { r: 47, why: "The three lines of defense reapplies nearly verbatim to cyber risk governance." },
      { r: 46, why: "ERM's governance triad builds directly on this reading's three lines of defense." }
    ],
    confused: [
      { what: "Line 2's independence requirement", how: "Line 2 must have ZERO involvement in Line 1's actual risk-taking work — not just 'limited' involvement — to avoid a self-review threat where the reviewer is checking its own work." }
    ]
  },

  misconceptions: [
    { wrong: "\"Line 2 can have some limited involvement in Line 1's work, as long as it maintains overall independence.\"", right: "Line 2 must have ZERO involvement in Line 1 work — any involvement creates a self-review threat that undermines the entire independence structure." },
    { wrong: "\"Every risk area (legal, IT security, etc.) can be cleanly assigned to exactly one line of defense.\"", right: "Some areas (legal/compliance, IT security) genuinely straddle multiple lines and resist clean classification into just one — the framework isn't always perfectly tidy in practice." }
  ],

  highYield: [
    { stars: 5, what: "Three lines of defense: exact roles, and Line 2's zero-involvement independence requirement.", why: "The most-recycled framework in the entire book — reapplied in R47 (cyber) and R46 (ERM) nearly verbatim." },
    { stars: 3, what: "Basel II's three pillars applied specifically to operational risk.", why: "Sets up the fuller Basel II treatment in R59." },
    { stars: 2, what: "Committee structure (bottom/middle/top) and risk appetite/culture basics.", why: "Straightforward supporting recall." }
  ],

  recall: [
    { q: "A Line 2 risk manager occasionally helps a business unit design a new trading control, in addition to independently reviewing that unit's risk reports. What governance principle does this violate?", a: "Line 2 must have ZERO involvement in Line 1's actual risk-taking/control-design work to avoid a 'self-review threat.' By helping design the control, the Line 2 manager would later be reviewing (in part) their own work, undermining the independence the three-lines structure is meant to guarantee." },
    { q: "Why can't legal/compliance or IT security always be cleanly assigned to a single line of defense?", a: "These functions often perform both risk-taking/advisory activities (Line 1-like) and independent oversight/policy-setting activities (Line 2-like) simultaneously, depending on context — their dual nature means they can genuinely straddle multiple lines rather than fitting neatly into one." }
  ],

  hooks: [
    { title: "Floor, inspector, auditor", text: "Line 1 works the floor. Line 2 inspects — but never touches the machinery. Line 3 audits whether the floor AND the inspector are both doing their jobs honestly." }
  ],

  summary: `<p><strong>Basel II pillars for op risk</strong>: Pillar 1 (capital), Pillar 2 (supervisory review, ICAAP), Pillar 3 (disclosure). <strong>Committee structure</strong>: bottom (per-business small committees) → middle (org risk committee) → top (board risk committee). <strong>Three lines of defense</strong>: Line 1 (risk owners, generate/manage risk), Line 2 (independent oversight, ZERO involvement in Line 1 work — avoids self-review threat), Line 3 (internal audit, independently reviews both prior lines, own risk list). Some functions (legal, IT security) straddle multiple lines. <strong>Risk appetite/culture</strong>: board sets limits and tolerances; culture tied to ethics, tone at the top, and non-perverse compensation.</p>`
});
