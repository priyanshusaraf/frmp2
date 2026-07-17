FRM.register({
  book: 2, reading: 33,
  session: "Counterparty Risk Management",
  title: "Netting, Close-Out, and Related Aspects",
  tagline: "Netting is the single biggest lever for reducing bilateral counterparty exposure — instead of summing only positive-value trades, sum ALL trades into one net figure.",

  teaches: `<p>Payment netting vs. close-out netting, bilateral vs. multilateral netting, walkaway clauses, trade compression, and termination events/break clauses.</p>`,

  why: `<p>This only helps if trades can have NEGATIVE MtM — a portfolio of only long option positions (always ≥0 in value) gets NO netting benefit at all. Understanding this boundary condition prevents overestimating netting's power in every portfolio.</p>`,

  intuition: `<p>Without netting, if a defaulting counterparty owes you on some trades and you owe them on others, you'd still have to pay your obligations in full while only recovering a fraction of what they owe you (as an unsecured creditor). Netting fixes this asymmetry: on default, ALL trades (positive and negative) collapse into one net termination amount — so you only owe (or are owed) the difference, not the gross amounts.</p>`,

  formulas: [],

  concepts: [
    {
      name: "Payment netting vs. close-out netting",
      def: "Payment netting: combine cash flows from different contracts into a single net payment (ongoing, pre-default). Close-out netting: on default, net ALL contract values with that counterparty into one termination amount.",
      related: ["Bilateral vs multilateral netting"]
    },
    {
      name: "Bilateral vs multilateral netting",
      def: "Bilateral netting: between 2 parties. Multilateral netting: many parties, usually via a central hub like a CCP.",
      related: [{ r: 35, label: "R35 — central clearing achieves multilateral netting" }]
    },
    {
      name: "Netting's boundary condition",
      def: "Netting only helps if trades CAN have negative MtM.",
      pitfall: "A portfolio of only long option positions (always ≥0 in value) gets NO netting benefit at all — there's nothing negative to offset against. Don't assume netting always meaningfully reduces exposure; it depends on the portfolio's composition.",
      related: [{ r: 36, label: "R36 — the netting factor formula, which reflects exactly this logic" }],
      memory: "Netting needs SOME negative-value trades to net against — all-positive portfolios get zero benefit."
    },
    {
      name: "Walkaway clauses, trade compression, termination events",
      def: "Walkaway clauses: let a non-defaulting party walk away from its OWN liabilities to a defaulter while still claiming what it's owed (asymmetric, controversial). Trade compression: cancels offsetting trades and replaces them with fewer trades, cutting GROSS exposure while preserving NET exposure. Termination events/break clauses: let a party exit before a counterparty actually goes bankrupt, at replacement value.",
      pitfall: "Trade compression changes gross exposure but NOT net exposure — don't confuse it with a risk-reducing tool in the net-exposure sense; its benefit is operational/counterparty-count reduction, not risk reduction per se.",
      related: [{ r: 35, label: "R35 — compression vs netting, formalized" }],
      memory: "Compression: fewer trades, same net exposure — an operational cleanup, not a risk reduction."
    }
  ],

  connections: {
    from: [
      { r: 32, why: "Formalizes the netting mitigation tool previewed in the R32 toolkit list." }
    ],
    to: [
      { r: 34, why: "Collateral (R34) is the next lever after netting for shrinking exposure further." },
      { r: 36, why: "The netting factor formula in R36 directly quantifies this reading's diversification logic." }
    ],
    confused: [
      { what: "Payment netting vs close-out netting", how: "Payment netting is routine, ongoing (combining cash flows); close-out netting is triggered specifically by DEFAULT (combining all contract VALUES into one termination amount)." },
      { what: "Trade compression vs netting", how: "Compression physically cancels offsetting trades, reducing GROSS exposure and counterparty count while preserving NET exposure — it doesn't reduce net risk the way netting calculations do." }
    ]
  },

  misconceptions: [
    { wrong: "\"Netting always meaningfully reduces exposure to a counterparty.\"", right: "Only if the portfolio has trades with BOTH positive and negative potential MtM. A portfolio of only long option positions (always ≥0) gets zero netting benefit — there's nothing negative to offset." },
    { wrong: "\"Trade compression reduces net exposure to a counterparty.\"", right: "It reduces GROSS exposure and the number of outstanding trades, while preserving NET exposure — it's an operational simplification, not a net risk reduction tool." },
    { wrong: "\"Walkaway clauses are symmetric — both parties can invoke them equally.\"", right: "They're explicitly asymmetric and controversial: they let the NON-defaulting party walk away from its own liabilities to the defaulter while still claiming what it's owed." }
  ],

  highYield: [
    { stars: 4, what: "Netting's boundary condition: no benefit if all trades are same-signed (e.g., all long options).", why: "A precise, frequently tested limitation that prevents overestimating netting's universal power." },
    { stars: 3, what: "Payment netting vs. close-out netting — timing and trigger differences.", why: "A clean two-way distinction, good matching-question material." },
    { stars: 3, what: "Trade compression reduces gross exposure/counterparty count, NOT net exposure.", why: "A specific, testable distinction between operational and risk-reducing tools." }
  ],

  recall: [
    { q: "A hedge fund holds only long call and put option positions against a single counterparty (all values ≥0). How much does netting reduce its exposure to that counterparty?", a: "Zero benefit. Netting relies on offsetting positive and negative trade values — with an all-long-options portfolio, every trade has non-negative value, so there's nothing negative to net against, and gross exposure equals net exposure." },
    { q: "Distinguish payment netting from close-out netting in terms of when each applies.", a: "Payment netting operates continuously in normal operations, combining periodic cash flows from different contracts into one net payment. Close-out netting is triggered specifically by a counterparty's DEFAULT, combining the values of ALL outstanding contracts into a single net termination amount owed." },
    { q: "Why does trade compression reduce gross exposure without reducing net exposure?", a: "Compression identifies and cancels REAL offsetting trades (e.g., a pay-fixed swap and an economically opposite receive-fixed swap), replacing many trades with fewer that produce the same net cash flow profile. Since the offsetting trades were already netting against each other economically, canceling them removes gross notional and counterparty complexity without changing the underlying net exposure." }
  ],

  hooks: [
    { title: "Nothing to net against", text: "Netting is a seesaw — it needs weight on both sides (positive AND negative trade values) to balance out exposure. An all-long-options portfolio only has weight on one side; the seesaw can't do anything." }
  ],

  summary: `<p><strong>Payment netting</strong> (ongoing cash flows) vs. <strong>close-out netting</strong> (triggered by default, nets ALL contract values). <strong>Bilateral</strong> (2 parties) vs. <strong>multilateral</strong> (many, via CCP) netting. Netting's benefit REQUIRES trades with both positive and negative potential value — an all-long-options portfolio gets zero netting benefit. <strong>Walkaway clauses</strong>: asymmetric, let non-defaulting party keep what's owed while walking from its own liabilities. <strong>Trade compression</strong>: cuts gross exposure/counterparty count, preserves net exposure (operational, not risk-reducing). <strong>Termination events</strong>: exit before actual bankruptcy, at replacement value.</p>`
});
