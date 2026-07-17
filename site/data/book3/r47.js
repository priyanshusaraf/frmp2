FRM.register({
  book: 3, reading: 47,
  session: "Operational Risk Focus Areas",
  title: "Cyber-Resilience: Range of Practices",
  tagline: "A survey of how regulators globally approach cyber risk — deliberately non-prescriptive, so the exam tests the categories of practice rather than one 'correct' standard.",

  teaches: `<p>Five areas of cyber governance, four areas of cyber risk management & response, five information-sharing channels, and third-party cyber risk dimensions.</p>`,

  why: `<p>Cyber risk was promoted to Level-1 status under the ORX taxonomy (R42) precisely because it doesn't fit neatly into a generic operational risk framework — this reading gives it the dedicated treatment that promotion implied.</p>`,

  intuition: `<p>Since practices vary widely by jurisdiction with no single global standard, the exam tests the CATEGORIES regulators look at rather than one specific rulebook. Think of it as a checklist across governance (who's responsible), risk management/response (what do we actually do), information sharing (how do we learn from others), and third-party risk (what about our vendors' cyber posture).</p>`,

  formulas: [],

  concepts: [
    {
      name: "Five areas of cyber governance",
      def: "Cybersecurity strategy, management roles & responsibilities (board/senior management, often the three-lines model again), awareness (training, risk culture), architecture & standards, workforce (IT staff training, defined roles).",
      related: [{ r: 41, label: "R41 — the three lines of defense model reapplied here" }]
    },
    {
      name: "Four areas of cyber risk management & response",
      def: "Supervision of cyber-resilience, information security controls (threat detection, business impact analysis, recovery planning), incident response and recovery, cybersecurity/resilience metrics.",
      pitfall: "No standardized quantitative metrics exist yet for cybersecurity — forward-looking indicators are increasingly valued over backward-looking data, since backward-looking metrics (like past incident counts) say little about emerging threat readiness.",
      related: []
    },
    {
      name: "Information-sharing channels",
      def: "Bank-to-bank (depends on trust level), bank-to-regulator (usually mandated), regulator-to-regulator (rare, cross-border), regulator-to-bank (uncommon, little formal guidance), banks/regulators-to-security agencies (mostly voluntary).",
      pitfall: "Know all five — a frequently tested list where the exam asks which channel is 'usually mandated' vs. 'mostly voluntary' vs. 'rare.'",
      related: [],
      memory: "Mandated: bank→regulator. Rare: regulator↔regulator. Voluntary: bank/regulator→security agencies."
    },
    {
      name: "Third-party cyber risk dimensions",
      def: "Governance of interconnections, business continuity/availability, information confidentiality & integrity, visibility into third-party (and sub-outsourcing) relationships, auditing/testing rights, resources and skills of the outsourcing institution's own oversight staff.",
      related: [{ r: 50, label: "R50 — outsourcing risk generally, this cyber-specific lens applied there too" }]
    }
  ],

  connections: {
    from: [
      { r: 42, why: "Cyber risk's promotion to Level-1 status under the ORX taxonomy directly foreshadows this dedicated reading." },
      { r: 41, why: "The three lines of defense model reapplies here to cyber governance specifically." }
    ],
    to: [
      { r: 48, why: "The Equifax case study concretely illustrates these framework categories failing in practice." }
    ],
    confused: [
      { what: "Bank-to-regulator vs regulator-to-bank information sharing", how: "Bank-to-regulator is usually MANDATED; regulator-to-bank is uncommon with little formal guidance — the flow of information is asymmetric, not a two-way street with equal obligations." }
    ]
  },

  misconceptions: [
    { wrong: "\"There's a single global standard for cybersecurity practices that all regulators follow.\"", right: "Practices are deliberately non-prescriptive and vary significantly by jurisdiction — the exam tests the CATEGORIES of practice, not one universal rulebook." },
    { wrong: "\"Backward-looking cybersecurity metrics (like past incident counts) are the most valuable indicators.\"", right: "Forward-looking indicators are increasingly valued over backward-looking data, since standardized quantitative metrics don't yet exist and past incidents say little about emerging threat readiness." }
  ],

  highYield: [
    { stars: 3, what: "Five information-sharing channels and their relative mandate/frequency (mandated vs voluntary vs rare).", why: "A specific, memorizable list frequently tested for which channel is which." },
    { stars: 3, what: "Five areas of cyber governance and four areas of cyber risk management/response.", why: "The core classification structure of this reading." },
    { stars: 2, what: "Third-party cyber risk dimensions.", why: "Connects to the broader outsourcing risk theme (R50-51)." }
  ],

  recall: [
    { q: "Why does this reading emphasize categories of cyber risk practice rather than a single prescriptive standard?", a: "Cyber regulatory practices vary significantly by jurisdiction, with no single global standard — the framework is deliberately non-prescriptive, so understanding the CATEGORIES (governance areas, risk management areas, information-sharing channels) matters more than memorizing one specific regulatory regime's exact rules." },
    { q: "Which information-sharing channel is usually mandated, and which is typically voluntary?", a: "Bank-to-regulator sharing is usually MANDATED (banks must report to their supervisors). Banks/regulators-to-security-agencies sharing is mostly VOLUNTARY. Regulator-to-regulator sharing is rare and cross-border-dependent; regulator-to-bank sharing is uncommon with little formal guidance." }
  ],

  hooks: [
    { title: "No single rulebook", text: "Cyber regulation is a patchwork quilt, not a single blanket — different jurisdictions, different rules. Learn the CATEGORIES the quilt is stitched from, not any one square." }
  ],

  summary: `<p><strong>Five governance areas</strong>: strategy, roles/responsibilities, awareness, architecture/standards, workforce. <strong>Four risk management/response areas</strong>: supervision, information security controls, incident response/recovery, metrics (no standard quantitative metrics yet; forward-looking valued over backward-looking). <strong>Five information-sharing channels</strong>: bank-to-bank (trust-dependent), bank-to-regulator (mandated), regulator-to-regulator (rare), regulator-to-bank (uncommon), banks/regulators-to-security agencies (voluntary). <strong>Third-party cyber risk</strong>: interconnection governance, continuity/availability, confidentiality/integrity, visibility into sub-outsourcing, audit rights, oversight staff resources.</p>`
});
