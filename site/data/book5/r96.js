FRM.register({
  book: 5, reading: 96,
  session: "Current Issues in Financial Markets",
  title: "Artificial Intelligence Risk Management Framework",
  tagline: "NIST's AI RMF: unlike traditional risk management (minimize the negative), AI RMF explicitly also aims to MAXIMIZE the positive — govern, map, measure, manage.",

  teaches: `<p>AI risk management's dual goal (minimize negative, maximize positive); risk measurement challenges, risk tolerance, risk prioritization, and organizational integration challenges; the OECD's five AI lifecycle categories and AI actors (including TEVV); the seven characteristics of trustworthy AI and their trade-offs; benefits of periodic AI RMF effectiveness evaluation; and the four core AI RMF functions (govern, map, measure, manage).</p>`,

  why: `<p>This reading organizes R94-95's scattered concerns (bias, opacity, fairness, explainability) into NIST's formal four-function structure — the closest thing to a standardized, auditable AI governance framework in the curriculum, directly analogous to R53's model risk management but built specifically for AI's unique challenges.</p>`,

  intuition: `<p>Traditional risk management asks "how do we minimize the downside?" AI RMF asks a genuinely different, DUAL question: "how do we minimize the downside AND maximize the upside?" — treating AI's positive potential (not just its risks) as an explicit objective, not an afterthought.</p>
  <p>The seven trustworthy-AI characteristics are NOT independent — trustworthiness follows "only as good as its weakest link," and characteristics trade off against each other (higher interpretability often costs lower privacy; higher accuracy often costs lower interpretability; higher accuracy often costs lower robustness/generalizability). ACCOUNTABLE AND TRANSPARENT and VALID AND RELIABLE are the two "fundamental" characteristics threading through all the others.</p>
  <p>The three-word distinction that anchors the whole "explainable AI" conversation: transparency = WHAT happened; explainability = HOW it happened; interpretability = WHY it happened. Three different questions, three different tools needed to answer them.</p>
  <p>The four RMF functions (govern, map, measure, manage) aren't strictly sequential — GOVERN is PERVASIVE across all three others (it's the constant backdrop), while map→measure→manage is a common but DISCRETIONARY order, not a rigid requirement.</p>`,

  formulas: [],

  concepts: [
    {
      name: "AI RMF's dual goal and risk measurement challenges",
      def: "AI RMF views AI systems as having BOTH positive and negative impacts — the explicit goal is to MINIMIZE negative impacts AND MAXIMIZE positive impacts, contrasting with traditional risk management's near-exclusive focus on minimizing negatives.",
      example: "Potential harms: compromised individual rights/safety, discrimination, reputational damage, financial losses, environmental damage. Risk measurement challenges: (1) third-party data/systems add complexity (opaque risk metrics, inconsistent standards); (2) new/incremental risks are hard to identify (little known about emergent risks); (3) NO universally accepted AI-specific risk measurement processes/metrics exist yet; (4) results DIFFER by AI lifecycle stage (design/development/deployment); (5) real-world risk can differ substantially from theoretical/pre-deployment measurement; (6) nontransparent systems are harder to measure; (7) AI substitutes for human decision-making, but benchmark/baseline metrics for comparison are hard or impossible to determine (humans and AI don't do things the same way).",
      pitfall: "AI RMF explicitly addresses risk MEASUREMENT and risk PRIORITIZATION — but does NOT prescribe risk TOLERANCE, which is determined independently (context/use-case/business-objective dependent) and evolves as policy conventions change.",
      related: [],
      memory: "Dual goal: NOT just minimize the bad — also maximize the good. That's the single biggest conceptual departure from traditional risk management frameworks."
    },
    {
      name: "Risk tolerance, prioritization, and organizational integration challenges",
      def: "Risk tolerance depends on context/use-case (limiting comparability across organizations) and evolves with policy. Risk prioritization: NOT optimal to reduce all risks to zero (some are too costly/impossible to eliminate) — greatest risks get priority; EXCESSIVE risk may require TEMPORARY CESSATION of development/deployment; systems handling sensitive data OR clearly impacting people get HIGHER priority (but lower-priority systems can still have harmful PERIPHERAL impacts — ongoing reassessment is required); RESIDUAL risk after mitigation must be fully DOCUMENTED to inform end users.",
      pitfall: "Organizational integration requires thinking about AI risk alongside OTHER risks (cybersecurity, etc.) for efficiency — but the GREATER challenge is CULTURAL change requiring 'tone from the top' (senior management commitment), not just technical control setup. Small/medium organizations face DIFFERENT AI-risk challenges than large ones.",
      related: [],
      memory: "Lower-priority AI systems aren't risk-free — they can still have peripheral harms, which is why ongoing reassessment (not a one-time priority label) is required."
    },
    {
      name: "AI lifecycle categories and AI actors",
      def: "OECD's five AI system categories: (1) People and Planet (human rights, societal/environmental well-being — actors: end users, advocacy/environmental groups, researchers), (2) Application Context (Plan and Design; Operate and Monitor), (3) Data and Input (Collect and Process Data), (4) AI Model (Build and Use Model; Verify and Validate), (5) Task and Output (Deploy and Use).",
      pitfall: "TEVV (test, evaluation, verification, validation) runs ON AN ONGOING BASIS during the corresponding lifecycle stage — useful for determining/monitoring risks, catching problems early. GREATER DIVERSITY among AI actors (professions, experiences) → more productive brainstorming → better creative risk solutions.",
      related: [{ r: 53, label: "R53 — the TEVV concept parallels traditional model validation's ongoing monitoring element" }],
      memory: "Five categories run from the broadest (People and Planet) to the narrowest (Task and Output) — a nested funnel from societal impact down to specific deployed outputs."
    },
    {
      name: "Seven characteristics of trustworthy AI",
      def: "(1) Valid and reliable — validated (unbiased testing confirming proper function for planned use) + reliable (performs without failure over time) + accurate (close to true values, considers Type I/II errors, generalizes beyond test scenarios) + robust/generalizable (functions acceptably across DIFFERENT scenarios, including unplanned-but-reasonable uses). (2) Safe — doesn't harm people/property/environment; safety built in from earliest design stages; incidents documented/prioritized; testing/simulation/oversight; a 'kill switch' for suspected misuse. (3) Secure and resilient — resilient (survives unplanned negative events); secure (guards against unauthorized access, ensures continuity/confidentiality/integrity against threats); security addresses cyberattack prevention/recovery, resilience addresses misuse/abuse. (4) Accountable and transparent — transparent (provides relevant system/output information, aids failure investigation); accountable (focuses on AI ACTORS' outcomes — accountability rises WITH risk level taken). (5) Explainable and interpretable — explainable (operational details conveyable); interpretable (output linkable to planned purpose, assessable/conveyable). (6) Privacy enhanced — anonymity/confidentiality throughout the lifecycle; privacy and security move TOGETHER (both rise together); privacy-enhancing technologies (PETs) trade off against transparency and (when data is scarce) accuracy/fairness. (7) Fair (managing harmful bias) — avoiding harmful bias/discrimination; what's 'fair' varies by population/context; removing one bias doesn't guarantee overall fairness (e.g., removing geographic bias while economic-access bias persists).",
      pitfall: "ACCOUNTABLE AND TRANSPARENT is the most FUNDAMENTAL characteristic (pervasive across ALL others); VALID AND RELIABLE is ALSO fundamental (relates to all characteristics EXCEPT accountable/transparent). Trustworthiness is only as good as its WEAKEST LINK — a holistic, not individual, evaluation is required. Key trade-offs: higher interpretability often costs lower privacy; higher accuracy often costs lower interpretability; higher accuracy often costs lower robustness.",
      example: "The transparency/explainability/interpretability triad: transparency = WHAT happened; explainability = HOW it happened; interpretability = WHY it happened.",
      related: [{ r: 95, label: "R95 — XAI approaches (LIME/SHAP) that operationalize explainability specifically" }],
      memory: "What (transparency) / How (explainability) / Why (interpretability) — three different questions about the same AI decision, each needing its own answer."
    },
    {
      name: "Three types of bias",
      def: "Systemic bias: embedded in data and the AI lifecycle generally. Computational/statistical bias: arises from poor sampling (unrepresentative items). Human-cognitive bias: the MOST PERVASIVE type — humans incorrectly believing how AI uses information or what its objective actually is.",
      pitfall: "Removing ONE type of bias (e.g., geographic) does NOT guarantee overall fairness — other unaddressed biases (e.g., economic access) can persist, undermining the 'fixed it' assumption.",
      related: [],
      memory: "Human-cognitive bias isn't a flaw IN the AI — it's a flaw in how HUMANS misunderstand what the AI is actually doing, and it's the most pervasive of the three types."
    },
    {
      name: "Benefits of periodic AI RMF effectiveness evaluation",
      def: "More robust oversight/mapping/measuring/mitigating with thorough documentation; greater understanding of trustworthiness-characteristic/sociotechnical/risk integration and trade-offs; clearer design/deployment decision-making; developed accountability rules/best practices; stronger AI risk culture; enhanced internal/external risk communication; better understanding of downstream risks; enhanced TEVV processes.",
      pitfall: "REDUCED OPERATING COSTS is explicitly NOT a direct benefit of frequent periodic evaluation — in fact, MORE FREQUENT evaluations incur INCREMENTAL COSTS (a commonly tested wrong-answer trap).",
      related: [],
      memory: "Periodic evaluation costs MORE, not less, in the near term — its benefits are about better risk understanding and culture, not cost savings."
    },
    {
      name: "Four AI RMF core functions: govern, map, measure, manage",
      def: "Govern: establishes internal risk management CULTURE and the process for determining/analyzing/mitigating risks; PERVASIVE across the other three functions; runs top-down (board sets mission/values/risk tolerance → senior management implements culture → lower management connects technical details to policy); covers third-party data/systems too. Map: sets up RISK FRAMING — determines context, then risk in relation to context; without mapping, AI actors across lifecycle stages can't coordinate, risking one stage's work being inadvertently compromised later; requires WIDE-RANGING input (internal + external); benefits: knowing strengths/weaknesses, real-life constraints causing undesirable results, predicting undesirable results from PLANNED use, and risks from UNINTENDED use. Measure: mixes NUMERICAL and NONNUMERICAL methods; a BRIDGING step from map's risk information to conclusions used in manage; includes documentation of functionality/trustworthiness, testing, performance assessment, actual-to-budget comparison; provides the OBJECTIVE basis for trade-off decisions (partial/complete overhaul, discontinuation, or added controls). Manage: risk resources distributed to mapped/measured risks (within the govern context); risks PRIORITIZED, mitigation occurs, action plans developed for incidents/errors.",
      pitfall: "The govern function is PERVASIVE (not sequential) — but once governance is established, MAP typically comes first, THEN measure, THEN manage — though this order is DISCRETIONARY, not mandatory. All four functions (map, measure, manage — NOT just govern) are explicitly NOT one-time processes; they continue as AI systems evolve.",
      related: [{ r: 95, label: "R95 — the practical XAI/fairness tools that operationalize the measure and manage functions" }],
      memory: "Govern is the constant backdrop (pervasive, ongoing). Map→Measure→Manage is the typical (but not mandatory) sequence built on top of that backdrop."
    }
  ],

  connections: {
    from: [
      { r: 94, why: "The bias, opacity, and regulatory-uncertainty concerns raised there get organized into this reading's formal four-function structure." },
      { r: 95, why: "The practical XAI tools and fairness frameworks developed there become concrete implementations of the measure and manage functions here." },
      { r: 53, why: "Traditional model risk management's validation discipline is the direct ancestor of this reading's TEVV and govern/map/measure/manage structure." }
    ],
    to: [],
    confused: [
      { what: "AI RMF's dual goal vs. traditional risk management's single goal", how: "Traditional risk management minimizes negatives ONLY; AI RMF explicitly ALSO aims to maximize positives — a genuinely different objective function, not just an expanded scope." },
      { what: "Transparency vs. explainability vs. interpretability", how: "Transparency=WHAT happened (raw information). Explainability=HOW it happened (operational mechanism). Interpretability=WHY it happened (linkage to purpose, justification) — three distinct questions." },
      { what: "Govern's pervasiveness vs. map→measure→manage's typical sequence", how: "Govern runs continuously ACROSS all stages (not a discrete step); map→measure→manage is a common (but discretionary, reorderable) sequence built within that governance backdrop." }
    ]
  },

  misconceptions: [
    { wrong: "\"AI risk management, like traditional risk management, focuses exclusively on minimizing negative impacts.\"", right: "AI RMF explicitly pursues a DUAL goal — minimizing negative impacts AND maximizing positive impacts — a genuine departure from traditional risk management's near-exclusive focus on the downside." },
    { wrong: "\"The AI RMF prescribes specific risk tolerance levels that organizations should adopt.\"", right: "AI RMF addresses risk measurement and prioritization, but risk TOLERANCE is determined independently by each organization based on context/use-case/business objectives — it is not prescribed by the framework." },
    { wrong: "\"Frequent periodic evaluation of AI risk management effectiveness directly reduces operating costs.\"", right: "More frequent evaluations actually INCUR incremental costs — reduced operating costs is, at best, an indirect, longer-term possibility, not a direct benefit of frequent evaluation." },
    { wrong: "\"Removing one identified source of bias (e.g., geographic bias) makes an AI system fully fair.\"", right: "Removing one bias type doesn't guarantee overall fairness — other unaddressed biases (e.g., economic-access disparities) can persist even after a specific bias is corrected." },
    { wrong: "\"The govern, map, measure, and manage functions must always be executed in that strict sequential order.\"", right: "While mapping typically comes first after governance is established, followed by measuring and managing, this ORDER IS DISCRETIONARY based on what's most beneficial to the user — govern itself is pervasive and ongoing throughout, not a discrete first step." }
    ],

  highYield: [
    { stars: 5, what: "Four AI RMF functions (govern, map, measure, manage) — their specific roles, and govern's pervasive (not sequential) nature.", why: "The core organizing framework of this reading and the single most tested content area." },
    { stars: 5, what: "Seven trustworthy AI characteristics, especially transparency (what) vs. explainability (how) vs. interpretability (why).", why: "A precise three-way distinction frequently tested, plus the fundamental/pervasive status of accountable-transparent and valid-reliable." },
    { stars: 4, what: "AI RMF's dual goal (minimize negative AND maximize positive) vs. traditional risk management's single goal.", why: "The foundational conceptual departure this whole framework is built around." },
    { stars: 3, what: "Risk measurement challenges (7 named) and risk prioritization nuances (lower-priority systems still need reassessment).", why: "A comprehensive, frequently tested challenge list." },
    { stars: 3, what: "Benefits of periodic evaluation, especially that cost reduction is NOT a direct benefit.", why: "A specific, testable exclusion from an otherwise long benefits list." },
    { stars: 2, what: "Three bias types (systemic, computational/statistical, human-cognitive) and human-cognitive bias's pervasiveness.", why: "A clean three-way classification, good for quick recall." }
  ],

  recall: [
    { q: "How does the AI risk management framework's core objective differ from that of traditional risk management frameworks?", a: "Traditional risk management focuses almost exclusively on MINIMIZING negative impacts. The AI RMF explicitly pursues a DUAL objective: minimizing negative impacts (harm to rights/safety, discrimination, reputational/financial/environmental damage) WHILE ALSO maximizing positive impacts from AI systems — treating AI's potential benefits as an explicit management goal, not just an afterthought to risk avoidance." },
    { q: "A user wants to know not just WHAT an AI system's output was, but WHY the system reached that particular conclusion. Which trustworthy-AI characteristic addresses this specific question, and how does it differ from a characteristic addressing HOW the system reached it?", a: "The WHY question is addressed by INTERPRETABILITY (linking output to the system's planned purpose and providing justification for the conclusion). This differs from EXPLAINABILITY, which addresses HOW the outcome was reached (conveying the operational mechanism/steps). Transparency, by contrast, addresses WHAT happened (providing raw system/output information) — three distinct questions requiring three distinct types of information." },
    { q: "Why might an organization's periodic evaluation of its AI risk management effectiveness increase costs in the short term, even though it's considered a valuable practice?", a: "Performing more frequent evaluations requires incremental resources (staff time, documentation, testing, review processes) — these are real, immediate costs. The benefits (stronger risk culture, better documentation, clearer decision-making, better downstream risk understanding) are valuable but are NOT the same as direct operating-cost reduction; in fact, reduced operating costs is explicitly flagged as NOT a direct benefit of frequent evaluation, at least in the current period." },
    { q: "Explain why the 'map' function in the AI RMF is described as essential for coordinating AI actors across different lifecycle stages.", a: "Without mapping (establishing context and understanding risks in relation to that context), AI actors working at different lifecycle stages have no way of knowing about or influencing what's being done at other stages. Since the stages are highly interdependent, work done correctly at an earlier stage (e.g., data collection) can be inadvertently undermined by decisions made later (e.g., model deployment) without a shared understanding of context and risk — mapping prevents this disorganized, uncoordinated process and gives users a basis for confidence in the overall AI system." }
  ],

  hooks: [
    { title: "Two goals, not one", text: "Traditional risk management is a shield — block the bad. AI RMF is a shield AND a spotlight — block the bad, but also actively chase the good. That dual mandate is the single biggest thing to remember about this framework." },
    { title: "What, how, why — three separate report cards", text: "Transparency tells you WHAT the AI did. Explainability tells you HOW. Interpretability tells you WHY. A system can ace one report card and fail another — they're genuinely different tests." },
    { title: "Governance is the weather, not a stop on the itinerary", text: "Map, measure, manage are stops on a trip. Govern is the weather system surrounding the whole journey — always present, shaping every stop, never itself just one more stop on the list." }
  ],

  summary: `<p><strong>AI RMF's dual goal</strong>: minimize negative AND maximize positive impacts (unlike traditional risk management). <strong>Measurement challenges</strong>: third-party data, new/incremental risks, no universal metrics, lifecycle-stage-dependent results, real-world vs. theoretical gaps, opacity, missing human benchmarks. <strong>Risk tolerance</strong> is context-dependent (not prescribed by AI RMF); <strong>prioritization</strong> favors sensitive-data/human-impact systems but requires ongoing reassessment of "lower-priority" systems too; residual risk must be documented. <strong>Five OECD lifecycle categories</strong>: People and Planet, Application Context, Data and Input, AI Model, Task and Output — TEVV runs ongoing throughout. <strong>Seven trustworthy characteristics</strong>: valid/reliable, safe, secure/resilient, accountable/transparent (most fundamental), explainable/interpretable, privacy enhanced, fair — transparency=WHAT, explainability=HOW, interpretability=WHY; trade-offs are inevitable (weakest-link principle). <strong>Three bias types</strong>: systemic, computational/statistical, human-cognitive (most pervasive). <strong>Periodic evaluation benefits</strong>: better documentation/culture/communication — NOT direct cost reduction. <strong>Four functions</strong>: govern (pervasive, cultural, ongoing) → map (risk framing/context) → measure (numerical+nonnumerical bridging step) → manage (prioritize, mitigate, act) — sequence after governance is typical but discretionary.</p>`
});
