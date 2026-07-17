FRM.register({
  book: 2, reading: 17,
  session: "Credit Risk Analysis",
  title: "Fundamentals of Credit Risk",
  tagline: "Every later reading is an elaboration of one sentence: credit risk is the chance you lose money because someone else doesn't pay you back, on time, in full.",

  teaches: `<p>This reading makes that one sentence precise before the book gets quantitative. It draws three careful distinctions (insolvency vs. default vs. bankruptcy), catalogs the seven transaction types that create credit risk, and maps which kinds of entities carry which kinds of exposure. Nothing here is hard math — the exam risk is sloppy vocabulary.</p>`,

  why: `<p>Before you can compute EL, PD, or Credit VaR, you need airtight definitions — otherwise a well-worded exam question (a balance sheet with negative equity but current payments) will catch you conflating three legally distinct states. This reading also broadens your view of WHERE credit risk lives: not just loans, but leases, receivables, deposits, insurance, and — the single largest source globally — derivatives (~$600 trillion notional).</p>`,

  intuition: `<p>Think of insolvency, default, and bankruptcy as three separate clocks that don't have to tick together. Insolvency is a balance-sheet STATE (liabilities > assets) — you can be insolvent and still pay every bill on time. Default is a contractual EVENT (you failed to meet an obligation) — it can happen even without insolvency, e.g., a payment dispute. Bankruptcy is a legal PROCEEDING, usually triggered after default, that resolves the situation via liquidation (Chapter 7) or reorganization (Chapter 11).</p>`,

  formulas: [],

  concepts: [
    {
      name: "Insolvency vs. default vs. bankruptcy",
      def: "Insolvency: liabilities > assets (negative equity) — can still be paying bills on time. Default: fails to meet a contractual obligation (can happen without insolvency, e.g., a dispute). Bankruptcy: legal proceeding, usually after default — Chapter 7 (liquidation) or Chapter 11 (reorganization).",
      pitfall: "A company with liabilities exceeding assets that is STILL PAYING everyone on time is insolvent, not in default and not bankrupt. The exam loves handing you a balance sheet with negative equity and a confidently-paying management team — the answer is 'insolvent,' full stop.",
      related: [{ r: 20, label: "R20 — where these concepts become quantitative (EL/UL)" }],
      memory: "Insolvency = a state. Default = an event. Bankruptcy = a proceeding. Three different clocks."
    },
    {
      name: "Seven transaction types that generate credit risk",
      def: "Lending, leases, receivables, prepayment, deposits, contingent claims (insurance, pensions), derivatives.",
      example: "Globally, the largest source of credit exposure by notional is derivatives (~$600 trillion), even though in the U.S. corporate obligations dominate.",
      related: [{ r: 31, label: "R31 — derivatives counterparty risk, this exposure type in depth" }]
    },
    {
      name: "Who's exposed, and how",
      def: "Banks (lending + repo collateral risk + derivatives), asset managers (on behalf of clients), hedge funds (often SEEK OUT default as a trade — short distressed debt, buy CDS protection), insurers (underwriting, investment, and reinsurance recoverables — a slow-burn exposure that can take decades to settle), pension funds, corporations (receivables, vendor financing), individuals (prepayment, deposits).",
      pitfall: "Hedge funds are a distinctive case: unlike most credit-exposed entities, they can be net SHORT credit risk deliberately, as a speculative or hedging trade — don't assume every entity's relationship to credit risk is 'exposed and trying to avoid it.'",
      related: [{ r: 30, label: "R30 — protection buyers/sellers as speculators, not just hedgers" }, { r: 28, label: "R28 — reinsurance recoverables as long-tail credit exposure" }],
      memory: "Reinsurance recoverables: a claim that can take decades to actually get paid — a slow-burn credit exposure."
    }
  ],

  connections: {
    from: [],
    to: [
      { r: 20, why: "The EL/UL framework needs these precise definitions of what 'default' even means before it can be quantified." },
      { r: 28, why: "Reinsurance recoverables reappear as an example of long-tail, hard-to-model credit exposure." },
      { r: 30, why: "The hedge-fund-as-credit-opportunist idea reappears when protection buyers/sellers are discussed as speculators." }
    ],
    confused: [
      { what: "Insolvency vs default", how: "Insolvency is a balance-sheet condition; default is a contractual failure. Neither implies the other — a solvent company can default on a technicality, and an insolvent company can keep paying everyone." }
    ]
  },

  misconceptions: [
    { wrong: "\"Negative equity (liabilities > assets) means a company is in default.\"", right: "That's insolvency, a distinct state. Default requires actually failing to meet a contractual obligation — an insolvent company can still be current on all payments." },
    { wrong: "\"Lending is the primary source of credit risk globally.\"", right: "By notional, derivatives (~$600 trillion) are the largest global source of credit exposure, even though corporate obligations dominate within the U.S. specifically." },
    { wrong: "\"All entities exposed to credit risk are trying to minimize it.\"", right: "Hedge funds often deliberately SEEK OUT default exposure as a trade — shorting distressed debt or buying CDS protection speculatively, not just hedging." }
  ],

  highYield: [
    { stars: 4, what: "Insolvency vs. default vs. bankruptcy — precise definitions and the classic 'still paying but insolvent' trap.", why: "The single most reliably tested vocabulary distinction in this reading." },
    { stars: 2, what: "Seven transaction types generating credit risk, with derivatives as the largest global source.", why: "Straightforward recall, occasionally tested with a 'which is NOT a source' format." },
    { stars: 2, what: "Reinsurance recoverables as long-tail credit exposure; hedge funds as credit-risk seekers.", why: "Sets up thematic callbacks in R28 and R30 — recognizing the thread earns synthesis points." }
  ],

  recall: [
    { q: "A company's balance sheet shows liabilities exceeding assets by $50M, but it has met every payment obligation this year. Is it insolvent, in default, or bankrupt?", a: "Insolvent only. Insolvency is a balance-sheet state (negative equity); default requires an actual failure to meet a contractual obligation, which hasn't happened here; bankruptcy is a legal proceeding usually triggered by default." },
    { q: "Why is 'derivatives' surprising as the single largest global source of credit risk exposure by notional?", a: "Most people intuitively associate credit risk with lending, but derivatives notional (~$600 trillion globally) dwarfs corporate lending exposure — though within the U.S. specifically, corporate obligations dominate, so the answer depends on scope (global vs. domestic)." },
    { q: "How does a hedge fund's relationship to credit risk differ from a typical insurer's?", a: "An insurer is generally trying to manage/minimize credit exposure it takes on through underwriting and investment. A hedge fund often deliberately SEEKS OUT default exposure as a speculative trade — e.g., shorting distressed debt or buying CDS protection to profit from a credit event, not just hedging one." }
  ],

  hooks: [
    { title: "Three clocks, not one", text: "Insolvency, default, and bankruptcy tick independently. A balance sheet can show insolvency for years while every clock for default and bankruptcy stays silent." },
    { title: "$600 trillion hiding in plain sight", text: "Everyone thinks 'loans' when they hear credit risk — but derivatives notional dwarfs it globally. The biggest source of credit risk isn't the one that comes to mind first." }
  ],

  summary: `<p><strong>Insolvency</strong> (liabilities > assets, a state) ≠ <strong>default</strong> (failing an obligation, an event) ≠ <strong>bankruptcy</strong> (a legal proceeding, usually post-default: Chapter 7 liquidation or Chapter 11 reorganization) — a company can be insolvent while paying everyone on time. Seven transaction types generate credit risk: <strong>lending, leases, receivables, prepayment, deposits, contingent claims, derivatives</strong> — derivatives (~$600T) is the largest global source by notional. Exposure varies by entity: banks, asset managers, hedge funds (often SEEK default exposure speculatively), insurers (reinsurance recoverables = long-tail exposure), pension funds, corporations, individuals.</p>`
});
