FRM.register({
  book: 3, reading: 48,
  session: "Operational Risk Focus Areas",
  title: "Case Study: Cyberthreats and Information Security Risks",
  tagline: "Pairs a framework overview with the 2017 Equifax breach as the illustrative failure — connect specific control gaps to the generic frameworks named here.",

  teaches: `<p>Three cybersecurity frameworks (NIST CSF, CIS Critical Security Controls, ISO 27001), the CIA protection triad, behavioral vs. technical controls, and Equifax's five specific failure points.</p>`,

  why: `<p>Equifax's core failure wasn't a lack of framework — it was failing to EXECUTE a known patch management policy. This is the clearest real-world illustration in the book of the directive-vs-operating control distinction from R44: having a policy on paper isn't the same as an operating control that actually prevents the bad outcome.</p>`,

  intuition: `<p>Equifax had the frameworks and policies in place — the failure was execution. A known vulnerability existed, a patch was available, and the patch management POLICY existed on paper (directive control) — but it wasn't actually applied (no operating preventive control). This is precisely the R44 lesson: directive controls (policies, training, guidance) tell you what SHOULD happen; preventive/detective controls actually MAKE it happen or catch it when it doesn't.</p>`,

  formulas: [],

  concepts: [
    {
      name: "Three cybersecurity frameworks",
      def: "NIST CSF: voluntary; five steps — identify, protect, detect, respond, recover. CIS Critical Security Controls: detailed, continuously updated technical control checklist. ISO 27001: certifiable ISMS (Information Security Management System) standard.",
      related: []
    },
    {
      name: "Core protection triad (CIA) and control types",
      def: "Confidentiality, integrity, availability (CIA). Controls split into behavioral (training, awareness, password hygiene) and technical (prevention/detection/mitigation tooling).",
      related: [{ r: 44, label: "R44 — control types (preventive/detective/corrective/directive) applied to cyber specifically" }]
    },
    {
      name: "Equifax (2017) — five failure points",
      def: "Insufficient IT asset inventory, failure to enforce patch management policy, inconsistent employee communication, an expired SSL certificate, poor external/public communication.",
      pitfall: "Equifax's core failure wasn't a lack of a FRAMEWORK — it was failing to EXECUTE a known patch management policy. The exam likes to test that having a policy on paper (directive control) isn't the same as an operating (preventive/detective) control.",
      related: [{ r: 44, label: "R44 — directive vs preventive/detective control distinction, illustrated concretely here" }],
      memory: "Five failure points: didn't know what assets they had, didn't patch what they knew about, didn't communicate internally, let a certificate expire, and communicated badly afterward — a full-stack breakdown."
    }
  ],

  connections: {
    from: [
      { r: 47, why: "Applies the generic cyber-resilience categories to a real, dissected case." },
      { r: 44, why: "The directive-vs-operating control distinction is concretely illustrated by Equifax's actual failure mode." }
    ],
    to: [],
    confused: [
      { what: "Having a policy vs. executing a policy", how: "Equifax had a written patch management POLICY (directive control) but failed to ACTUALLY PATCH the vulnerability (missing preventive/operating control) — a policy on paper is not the same as an enforced control." }
    ]
  },

  misconceptions: [
    { wrong: "\"Equifax's breach happened because they lacked a cybersecurity framework or policy.\"", right: "Equifax had a patch management POLICY in place — the failure was EXECUTION. This illustrates that a directive control (a policy document) is not the same as an operating preventive control that actually gets applied." },
    { wrong: "\"NIST CSF is a mandatory, certifiable standard like ISO 27001.\"", right: "NIST CSF is VOLUNTARY (five steps: identify, protect, detect, respond, recover); ISO 27001 is the certifiable ISMS standard — don't conflate the two frameworks' mandate status." }
  ],

  highYield: [
    { stars: 4, what: "Equifax's five failure points, especially the patch-management-policy-existed-but-wasn't-executed lesson.", why: "The signature case study lesson of this reading — directly tests understanding of directive vs. operating controls from R44." },
    { stars: 3, what: "Three cybersecurity frameworks (NIST CSF voluntary 5-step, CIS technical checklist, ISO 27001 certifiable).", why: "A clean three-way classification, good for matching-style questions." },
    { stars: 2, what: "CIA triad and behavioral vs. technical control split.", why: "Foundational vocabulary, straightforward recall." }
  ],

  recall: [
    { q: "Equifax had a documented patch management policy before its 2017 breach. Why did the breach still happen, and what governance lesson does this illustrate?", a: "The policy existed on paper (a directive control) but was not actually EXECUTED — the known vulnerability wasn't patched in practice. This illustrates that directive controls (policies, guidance) are necessary but not sufficient; they must be paired with operating preventive/detective controls that actually enforce the intended behavior." },
    { q: "Distinguish NIST CSF from ISO 27001 in terms of mandate and structure.", a: "NIST CSF is a VOLUNTARY framework organized around five steps (identify, protect, detect, respond, recover). ISO 27001 is a CERTIFIABLE standard for an Information Security Management System (ISMS) — organizations can be formally certified against it, unlike NIST CSF." }
  ],

  hooks: [
    { title: "The policy that stayed on paper", text: "Equifax's patch policy was real — printed, filed, presumably read by someone. It just never made it into the actual server. A directive control that never becomes an operating control is a policy for show." }
  ],

  summary: `<p><strong>Three frameworks</strong>: NIST CSF (voluntary, 5 steps), CIS Critical Security Controls (technical checklist), ISO 27001 (certifiable ISMS). <strong>CIA triad</strong>: confidentiality, integrity, availability; controls split behavioral/technical. <strong>Equifax (2017)</strong>: insufficient asset inventory, failed patch enforcement, inconsistent communication, expired SSL certificate, poor public communication — the core lesson is that a directive control (policy) without operating enforcement (preventive/detective) is not a real control.</p>`
});
