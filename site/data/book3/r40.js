FRM.register({
  book: 3, reading: 40,
  session: "Operational Risk Overview",
  title: "Introduction to Operational Risk and Resilience",
  tagline: "Operational risk is defined by exclusion as much as inclusion: the risk of loss from failed processes, people, systems, and external events — everything that isn't market or credit risk, but still hits the P&L.",

  teaches: `<p>The seven Basel II event-type categories, five characteristics that make op risk uniquely hard to manage, and operational resilience — the newer idea that some disruptions can't be prevented, only survived.</p>`,

  why: `<p>This reading gives you the classification skeleton that structures the entire book. Understanding WHY op risk is hard (heterogeneous, idiosyncratic, heavy-tailed, interconnected, dynamic) explains why it needs a completely different toolkit than market or credit risk's clean statistical models.</p>`,

  intuition: `<p>Market and credit risk have relatively clean statistical structures — prices move, borrowers default, and you can build probability distributions from history. Operational risk is different: it's everything else that can go wrong, from a rogue employee to a hurricane to a coding bug — a genuinely heterogeneous grab-bag with no single unifying statistical shape, which is exactly why it resisted quantification for so long.</p>
  <p>Operational RESILIENCE is a mindset shift: instead of "prevent all disruptions" (impossible for tail events), assume severe, infrequent disruptions WILL happen, and make sure the firm survives them — a shift from prevention to survival.</p>`,

  formulas: [],

  concepts: [
    {
      name: "The seven Basel II event-type categories",
      def: "Internal fraud (employee misappropriation, mismarking positions). External fraud (robbery, hacking, third-party theft). Employment practices & workplace safety (discrimination claims, workers' comp). Clients, products & business practices — CPBP (fiduciary breaches, misselling, antitrust). Damage to physical assets (natural disasters, terrorism). Business disruption & system failures (hardware/software failures, utility outages). Execution, delivery & process management — EDPM (data entry errors, failed mandatory reporting).",
      pitfall: "EDPM events are HIGH-frequency, LOW-severity; CPBP events are LOW-frequency, HIGH-severity. The exam likes to test this frequency/severity contrast directly (also seen again in R42's taxonomy discussion).",
      related: [{ r: 42, label: "R42 — the taxonomy one level deeper" }],
      memory: "EDPM: death by a thousand paper cuts. CPBP: rare but catastrophic lawsuits."
    },
    {
      name: "Five characteristics that make op risk hard to manage",
      def: "Heterogeneous (wildly different event types), idiosyncratic (firm-specific, not market-driven), heavy-tailed (rare catastrophic events dominate), interconnected (one failure cascades into others), dynamic (risk profile shifts as technology/business models change).",
      related: []
    },
    {
      name: "Operational resilience",
      def: "Shifts the mindset from 'prevent all disruptions' to 'assume severe, infrequent disruptions will happen — make sure the firm survives them.' Elements: business continuity, key (important) services, impact tolerance levels, disruption processes, feedback.",
      example: "BCBS's seven principles of operational resilience: governance, operational risk management, business continuity planning and testing, mapping interconnections and interdependencies, third-party dependency management, incident management, and ICT/cybersecurity.",
      related: [{ r: 43, label: "R43 — the seven-step operational resilience process in full mechanical detail" }],
      memory: "'Important business services' and 'impact tolerances' get their full mechanical process in R43 — this reading gives vocabulary, R43 gives the process."
    }
  ],

  connections: {
    from: [],
    to: [
      { r: 41, why: "Governance (who's in charge) is the natural next question after defining what op risk is." },
      { r: 42, why: "The Basel taxonomy introduced here gets a level deeper (Level 2/3 categories)." },
      { r: 43, why: "The resilience vocabulary here gets its full seven-step process." }
    ],
    confused: [
      { what: "EDPM vs CPBP frequency/severity", how: "EDPM = high-frequency, low-severity (paper cuts). CPBP = low-frequency, high-severity (catastrophic lawsuits) — opposite ends of the frequency/severity spectrum." },
      { what: "Business continuity management (BCM) vs operational resilience", how: "BCM is broader, covering continuity for all processes; resilience is narrower, focused specifically on 'important business services' and impact tolerances — clarified further in R43." }
    ]
  },

  misconceptions: [
    { wrong: "\"Execution/delivery/process management (EDPM) events are rare but catastrophic.\"", right: "EDPM events are HIGH-frequency, LOW-severity (data entry errors, etc.) — it's CPBP (clients/products/business practices) events that are low-frequency, high-severity." },
    { wrong: "\"Operational resilience means preventing all operational disruptions.\"", right: "Resilience explicitly ACCEPTS that severe, infrequent disruptions will happen — the goal shifts from prevention to ensuring survival and continuity of important services through the disruption." }
  ],

  highYield: [
    { stars: 5, what: "The seven Basel event-type categories, memorized cold, with examples.", why: "The foundational classification skeleton for the entire book — every later reading assumes fluency here." },
    { stars: 4, what: "EDPM (high-freq/low-sev) vs CPBP (low-freq/high-sev) frequency-severity contrast.", why: "A precise, frequently tested directional pairing." },
    { stars: 3, what: "Five characteristics that make op risk hard to manage.", why: "A clean five-item list, good for quick conceptual recall." },
    { stars: 2, what: "BCBS's seven principles of operational resilience.", why: "Supporting detail, useful context for R43's deeper process." }
  ],

  recall: [
    { q: "A bank experiences thousands of small data-entry errors each year, and separately faces a rare but massive mis-selling lawsuit. Which Basel event-type category does each belong to, and what does this reveal about their frequency/severity profile?", a: "Data-entry errors are execution, delivery & process management (EDPM) — high-frequency, low-severity. The mis-selling lawsuit is clients, products & business practices (CPBP) — low-frequency, high-severity. Together they illustrate op risk's genuinely heterogeneous loss profile, spanning both ends of the frequency-severity spectrum." },
    { q: "Why does operational resilience represent a mindset shift rather than just 'more of the same' risk management?", a: "Traditional risk management tries to PREVENT bad outcomes. Resilience accepts that some severe, infrequent disruptions are effectively unpreventable, and instead focuses on ensuring the firm's most important services can survive and recover from them — a shift from prevention to survival planning." }
  ],

  hooks: [
    { title: "Everything else", text: "Op risk is the 'everything else' bucket — not market moves, not credit defaults, but everything from a hacker to a hurricane to a fat-fingered trade. Its heterogeneity IS its defining trait." },
    { title: "Paper cuts vs. lawsuits", text: "EDPM: a thousand tiny paper cuts (frequent, minor). CPBP: a rare but devastating lawsuit (infrequent, catastrophic). Memorize the pairing by imagining the actual pain profile." }
  ],

  summary: `<p>Op risk = loss from failed processes, people, systems, external events. <strong>Seven Basel categories</strong>: internal fraud, external fraud, employment practices, CPBP (low-freq/high-sev), damage to physical assets, business disruption/system failures, EDPM (high-freq/low-sev). <strong>Five hard-to-manage characteristics</strong>: heterogeneous, idiosyncratic, heavy-tailed, interconnected, dynamic. <strong>Operational resilience</strong>: shift from prevention to survival — important business services, impact tolerances, BCBS's seven principles.</p>`
});
