FRM.register({
  book: 3, reading: 49,
  session: "Operational Risk Focus Areas",
  title: "Case Study: Financial Crime and Fraud",
  tagline: "AML/CFT is the three-lines-of-defense model applied to knowing your customer well enough to stop criminal money — anchored by the 2022 USAA fine for weak controls, not proven theft.",

  teaches: `<p>Three lines of defense for AML/CFT, customer risk factors and identification (FATF standards), cross-border group considerations, precise internal/external fraud definitions, money laundering's three phases, the shared four-control framework, and the USAA Federal Savings Bank case.</p>`,

  why: `<p>The USAA case is the cleanest illustration in the book that regulatory penalties can follow from CONTROL DEFICIENCIES ALONE — no proven theft or loss is required. This matters because it recalibrates how you should think about "is our AML program good enough" — the bar is control adequacy, not just absence of losses.</p>`,

  intuition: `<p>Money laundering follows a predictable three-phase journey: PLACEMENT (get illicit cash into the financial system — the riskiest phase for the criminal, easiest to detect), LAYERING (obscure the money's origin through complex transactions — the hardest phase to catch), INTEGRATION (reintroduce the now-"clean" money into the legitimate economy — by this point it looks like normal wealth). AML controls are most effective at placement and get progressively harder to apply as money moves through layering into integration.</p>`,

  formulas: [],

  concepts: [
    {
      name: "Three lines of defense for AML/CFT",
      def: "Line 1: front-office/customer-facing units — identify, assess, control ML/FT risk via written, communicated policies. Line 2: chief AML/CFT officer — ongoing monitoring. Line 3: internal audit of AML/CFT policy adherence.",
      related: [{ r: 41, label: "R41 — the three lines of defense model this reapplies" }]
    },
    {
      name: "Customer risk factors & identification (FATF standards)",
      def: "Background, occupation, source of income/wealth, country of origin/residence, product/service usage pattern, account purpose, linked accounts. Identification/verification documentation: passports, ID cards, driving licenses, transaction records, business correspondence.",
      pitfall: "Banks must also identify/verify persons acting ON BEHALF OF beneficial owners — not just the named account holder.",
      related: []
    },
    {
      name: "Cross-border AML/CFT groups",
      def: "Integrate customer/beneficial-owner/fund information group-wide, monitor significant relationships on a consolidated basis regardless of on/off-balance-sheet treatment, appoint a group-wide chief AML/CFT officer, coordinate group-wide information sharing (subject to local data-protection law), head office must be informed about high-risk customers.",
      example: "Supervisors follow FATF Recommendation 26 and the Core Principles for Effective Banking Supervision, applying a risk-based approach.",
      related: []
    },
    {
      name: "Internal vs. external fraud",
      def: "Internal fraud: losses from acts intending to defraud/misappropriate/circumvent rules involving at least one internal party (excludes discrimination events). External fraud: same intent, but by a third party only (robbery, forgery, hacking).",
      related: [{ r: 40, label: "R40 — internal/external fraud as two of the seven Basel event categories" }]
    },
    {
      name: "Money laundering's three phases",
      def: "Placement (introduce illicit funds into the financial system) → layering (obscure the funds' origin through complex transactions) → integration (reintroduce the now-'clean' funds into the legitimate economy).",
      related: ["Four-control framework"],
      memory: "Placement: get it in. Layering: hide the trail. Integration: spend it clean."
    },
    {
      name: "Four-control framework (shared: internal fraud, external fraud, AML)",
      def: "Selection (incl. know-your-customer/KYC due diligence for AML) → prevention → detection → deterrents.",
      related: []
    },
    {
      name: "USAA FSB (March 2022)",
      def: "Fined for failing to meet Bank Secrecy Act (BSA)/AML minimum standards and inadequate suspicious-activity monitoring/reporting — NOT for a specific known theft.",
      example: "Following sanctions, firms typically run AML remediation programs ('lookbacks') reviewing client information and re-reporting suspicious activity.",
      pitfall: "The USAA fine is a clean example that regulatory penalties can follow from CONTROL DEFICIENCIES ALONE — no proven loss event is required. Don't assume a regulatory fine implies an actual quantifiable loss occurred.",
      related: [],
      memory: "USAA was fined for having weak locks, not for proving anyone actually broke in."
    }
  ],

  connections: {
    from: [
      { r: 41, why: "The three lines of defense model is directly reapplied to the AML/CFT context." },
      { r: 40, why: "Internal and external fraud were already named as two of the seven Basel event categories." }
    ],
    to: [
      { r: 51, why: "Third-party risk management connects to KYC-style due diligence obligations." }
    ],
    confused: [
      { what: "Internal fraud vs external fraud", how: "Internal fraud requires at least ONE internal party's involvement; external fraud is committed by third parties ONLY, with no internal complicity." },
      { what: "Regulatory fine vs proven loss event", how: "A fine (like USAA's) can result purely from CONTROL DEFICIENCIES — no proven theft, fraud, or quantifiable loss is required for a bank to be penalized." }
    ]
  },

  misconceptions: [
    { wrong: "\"A bank can only be fined for AML failures if a specific instance of money laundering is proven.\"", right: "USAA was fined for failing to meet BSA/AML minimum standards and inadequate suspicious-activity monitoring — CONTROL DEFICIENCIES ALONE were sufficient grounds for the penalty, with no specific proven theft or laundering event required." },
    { wrong: "\"Money laundering's three phases are equally easy (or hard) for regulators to detect.\"", right: "Placement is generally the riskiest phase for launderers and easiest to detect (cash entering the system is conspicuous); layering is the hardest to catch (complex transactions obscure origin); by integration, the funds look like ordinary wealth." }
  ],

  highYield: [
    { stars: 4, what: "USAA case: fined for control deficiencies alone, no proven loss required.", why: "The single most important takeaway of this reading — a precise, frequently tested principle." },
    { stars: 4, what: "Money laundering's three phases (placement/layering/integration) and detection difficulty at each.", why: "A foundational AML vocabulary, reliably tested." },
    { stars: 3, what: "Internal vs. external fraud precise definitions.", why: "A clean two-way distinction with a specific inclusion/exclusion rule (discrimination events excluded)." },
    { stars: 2, what: "Three lines of defense for AML/CFT and cross-border group requirements.", why: "Supporting structural detail, reapplies R41's framework." }
  ],

  recall: [
    { q: "USAA Federal Savings Bank was fined in 2022 without any specific proven theft or laundering incident being cited. What does this reveal about regulatory enforcement standards?", a: "It shows that regulators can and do penalize banks purely for CONTROL DEFICIENCIES — failing to meet BSA/AML minimum standards and having inadequate suspicious-activity monitoring/reporting processes is sufficient grounds for a fine, independent of whether any actual money laundering or loss is proven to have occurred." },
    { q: "Why is the 'layering' phase of money laundering considered the hardest to detect, compared to placement and integration?", a: "Placement involves illicit cash physically entering the financial system, which is relatively conspicuous and subject to reporting thresholds. Layering deliberately obscures the funds' origin through complex, multi-step transactions specifically designed to break the audit trail — making it the phase where detection is intentionally hardest. By integration, the funds already appear as legitimate wealth, blending into normal economic activity." }
  ],

  hooks: [
    { title: "Weak locks, not proven burglary", text: "USAA's fine is the reading's central lesson: regulators can penalize you for having weak locks on the door, whether or not anyone actually broke in." },
    { title: "Get it in, hide the trail, spend it clean", text: "Placement, layering, integration — three phases, each progressively harder for regulators to catch, ending with money that looks completely legitimate." }
  ],

  summary: `<p><strong>Three lines of defense</strong> reapplied to AML/CFT: Line 1 (front office, policy execution), Line 2 (chief AML/CFT officer, monitoring), Line 3 (audit). <strong>Customer identification</strong> (FATF): background, occupation, income source, country, product usage, beneficial owners. <strong>Cross-border groups</strong>: consolidated monitoring, group-wide AML officer, FATF Rec. 26. <strong>Internal fraud</strong> (≥1 internal party) vs <strong>external fraud</strong> (third party only). <strong>Money laundering</strong>: placement (easiest to catch) → layering (hardest to catch) → integration (looks clean). <strong>Four-control framework</strong>: selection (KYC) → prevention → detection → deterrents. <strong>USAA (2022)</strong>: fined for BSA/AML control deficiencies ALONE — no proven theft required, the reading's central lesson.</p>`
});
