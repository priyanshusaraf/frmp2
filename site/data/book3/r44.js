FRM.register({
  book: 3, reading: 44,
  session: "Operational Risk Overview",
  title: "Risk Mitigation",
  tagline: "Once risk is measured, what do you actually do about it? The four generic responses, four types of internal controls, the human-error taxonomy, and the practical playbook for crisis response and risk transfer.",

  teaches: `<p>The four T's of risk response, four types of internal controls (with automated-control risks and weak-control patterns), the human-error taxonomy that drives control design, contingency planning/crisis response, and insurance/outsourcing/reputation management.</p>`,

  why: `<p>Matching the RIGHT control type to the RIGHT failure mode is the practical payoff of all the identification and measurement work in R42-43. A slip needs different remediation than a deliberate violation — treating all human errors the same way wastes mitigation effort.</p>`,

  intuition: `<p>The human-error taxonomy is the key to smart control design: a SLIP (involuntary, inattention) needs better workspace design, not more training. A RULE-BASED MISTAKE (voluntary, following a flawed rule correctly) needs the RULE fixed, not the person punished. A KNOWLEDGE-BASED MISTAKE (voluntary, wrong choice in unfamiliar territory) needs better documentation/training/escalation paths. A VIOLATION (voluntary, deliberately breaking a KNOWN rule) is the only one that's not really an "error" at all — it needs supervision and detection (cameras, call recording), not training.</p>`,

  formulas: [],

  concepts: [
    {
      name: "Four T's of risk response",
      def: "Tolerate (fully accept), Treat (mitigate impact via action/remedy), Transfer (insurance, third parties), Terminate (eliminate exposure by discontinuing the activity).",
      related: []
    },
    {
      name: "Four types of internal controls",
      def: "Preventive (lower the chance of an event happening at all), Detective (alarm/flag the event quickly to limit loss), Corrective (reduce negative impact after the fact — BCP, backups), Directive (guidance for performing a task correctly — policies, training).",
      pitfall: "Automated controls beat manual ones for reliability but bring their own risks: Type 1 (false positive) and Type 2 (false negative) errors, and outages from system downtime/overcapacity. Weak-control patterns to watch for: 'optimistic' controls (too dependent on one individual, superficial) and 'collective' controls (diffused responsibility reduces accountability) — and the common bad habit of just piling on MORE of the same control type after a failure instead of diagnosing the actual gap.",
      related: [{ r: 48, label: "R48 — Equifax's directive-vs-operating control failure, a concrete example" }],
      memory: "Preventive stops it. Detective spots it. Corrective fixes it after. Directive tells you how to do it right."
    },
    {
      name: "Human error taxonomy",
      def: "Slip (involuntary, inattention/distraction — remedy: better workspace design, clearer accountability). Rule-based mistake (voluntary, flawed rule followed correctly — remedy: improve the rule, strengthen controls). Knowledge-based mistake (voluntary, wrong choice in an unfamiliar situation — remedy: better documentation, training, escalation paths). Violation (voluntary, not an error — deliberately breaking a known rule — remedy: better supervision/detection, cameras, call recording).",
      pitfall: "A 'violation' is explicitly NOT classified as an error in this taxonomy (it's deliberate) — don't lump it in with the other three, which are all genuine mistakes of varying voluntariness.",
      example: "Lean Six Sigma (DMAIC: define, measure, analyze, improve, control) and quality improvement (PDSA: plan, do, study, act) are the two named process-improvement cycles for reducing operational error at the design stage.",
      related: ["Four types of internal controls"],
      memory: "Slip=involuntary. Rule-based & knowledge-based=voluntary but genuine mistakes. Violation=voluntary AND deliberate — not a mistake at all."
    },
    {
      name: "Contingency planning & crisis response",
      def: "BCM (business continuity management) is the action plan for crisis scenarios, part of the broader BCP. Success factors: speed, competence (right specialist per task), transparency.",
      example: "Four phases of a major op-risk event: crisis → emergency response → recovery → restoration.",
      related: [{ r: 43, label: "R43 — resilience's narrower scope vs. BCM's breadth" }]
    },
    {
      name: "Insurance, outsourcing, reputation",
      def: "Insurance trades an ongoing premium for reduced loss volatility — many large banks self-insure small losses since insurance costs can exceed the benefit at that scale. Outsourcing transfers risk to a third party, but the degree of actual risk transfer is case-specific — sometimes it's genuine transfer, sometimes really risk-SHARING.",
      pitfall: "Reputation management splits into prevention (image/relationship building, contingency planning) and mitigation (fast, transparent communication) — two distinct phases with different tools.",
      related: [{ r: 50, label: "R50 — outsourcing risk, fully developed" }]
    }
  ],

  connections: {
    from: [
      { r: 43, why: "Once risk is measured/assessed, mitigation is the natural next action." }
    ],
    to: [
      { r: 45, why: "Mitigation actions and their effectiveness need to be reported to the right audience." },
      { r: 48, why: "Equifax's failure illustrates the directive-vs-operating control distinction concretely." },
      { r: 50, why: "Outsourcing as a risk-transfer tool gets its own dedicated, detailed treatment." }
    ],
    confused: [
      { what: "Preventive vs directive controls", how: "Directive controls provide GUIDANCE (a policy document); preventive controls actually LOWER the chance of the event happening. A written policy alone (directive) isn't the same as an operating control that prevents the bad outcome." },
      { what: "Rule-based mistake vs violation", how: "Rule-based mistake: voluntarily followed a rule that was flawed (not their fault, the rule was wrong). Violation: voluntarily broke a rule KNOWN to be correct — deliberate, not a mistake at all." },
      { what: "Risk transfer vs risk sharing (outsourcing)", how: "Whether outsourcing achieves genuine risk TRANSFER or merely risk-SHARING is case-specific — don't assume outsourcing always fully offloads risk." }
    ]
  },

  misconceptions: [
    { wrong: "\"A violation is just a severe version of a mistake, like a knowledge-based error.\"", right: "A violation is explicitly NOT classified as a mistake/error in this taxonomy — it's a deliberate, voluntary breaking of a KNOWN rule, requiring supervision/detection remedies rather than training or documentation fixes." },
    { wrong: "\"Outsourcing always fully transfers the underlying risk to the third party.\"", right: "The degree of actual risk transfer is case-specific — outsourcing can be genuine risk transfer OR effectively risk-sharing, depending on the arrangement." },
    { wrong: "\"After a control failure, adding more of the same type of control is a sound response.\"", right: "This is flagged as a common BAD habit — piling on more of the same control type without diagnosing the actual gap that caused the failure wastes effort and may not address the real vulnerability." },
    { wrong: "\"Large banks always purchase insurance for every operational risk exposure.\"", right: "Many large banks SELF-INSURE small losses, since insurance costs (premiums, deductibles, administrative overhead) can exceed the benefit at that scale." }
  ],

  highYield: [
    { stars: 5, what: "Human error taxonomy: slip, rule-based mistake, knowledge-based mistake, violation — voluntariness, cause, and remedy for each.", why: "The most precisely tested framework in this reading, with a clean four-way structure GARP loves to test via scenario matching." },
    { stars: 4, what: "Four types of internal controls (preventive/detective/corrective/directive) and automated-control risks (Type 1/2 errors).", why: "Foundational control vocabulary reused when analyzing case studies (R48, R50, R52)." },
    { stars: 3, what: "Four T's of risk response (tolerate/treat/transfer/terminate).", why: "A clean, simple classification, easy points if memorized." },
    { stars: 3, what: "Weak-control patterns: 'optimistic' and 'collective' controls, and piling-on-more-of-the-same-type as a bad habit.", why: "A subtle, frequently tested set of anti-patterns." }
  ],

  recall: [
    { q: "An employee, following a company policy that turns out to be flawed, makes an error that costs the bank money. What type of human error is this, and what's the correct remedy?", a: "A rule-based mistake — the employee voluntarily followed the rule/policy correctly, but the rule itself was flawed. The remedy is to IMPROVE THE RULE and strengthen controls, not to punish or retrain the employee, since they did nothing wrong given the (flawed) instructions they were given." },
    { q: "Distinguish a 'slip' from a 'violation' in the human error taxonomy, including the appropriate remedy for each.", a: "A slip is INVOLUNTARY — caused by inattention or distraction — and is remedied through better workspace design and clearer accountability structures. A violation is VOLUNTARY and deliberate — the person knowingly broke a rule they knew was correct — and is remedied through better supervision and detection (e.g., cameras, call recording), not training, since the person already knew the right course of action." },
    { q: "Why might a bank choose to self-insure small operational losses rather than purchase insurance for them?", a: "Insurance costs (premiums, deductibles, administrative overhead of claims) can exceed the expected benefit for small, frequent losses — for a large bank, self-insuring (absorbing these losses directly) can be more cost-effective than paying ongoing premiums for coverage whose expected payout doesn't justify the cost." }
  ],

  hooks: [
    { title: "Four kinds of 'oops'", text: "Slip: 'I wasn't paying attention.' Rule-based: 'I followed the rule exactly, but the rule was wrong.' Knowledge-based: 'I didn't know what to do, so I guessed wrong.' Violation: 'I knew exactly what to do, and chose not to.' Only the last one isn't really a mistake." },
    { title: "Four T's, four exits", text: "Tolerate (live with it), Treat (fix it), Transfer (hand it off), Terminate (stop doing the activity entirely) — four doors out of a risk, and picking the wrong one wastes resources." }
  ],

  summary: `<p><strong>Four T's</strong>: tolerate, treat, transfer, terminate. <strong>Four control types</strong>: preventive, detective, corrective, directive — automated controls add Type 1/2 error risk; avoid 'optimistic' (over-dependent) and 'collective' (diffused-responsibility) control patterns, and don't just pile on more of the same control type after a failure. <strong>Human error taxonomy</strong>: slip (involuntary, workspace fix) / rule-based mistake (voluntary, fix the rule) / knowledge-based mistake (voluntary, better training/docs) / violation (voluntary AND deliberate — not a mistake, needs supervision/detection). Improvement cycles: DMAIC, PDSA. <strong>BCM</strong>: speed, competence, transparency; four phases (crisis→emergency response→recovery→restoration). <strong>Insurance</strong> trades premium for reduced volatility (self-insure small losses); <strong>outsourcing</strong> transfer is case-specific (transfer vs. sharing); <strong>reputation management</strong> splits into prevention and mitigation.</p>`
});
