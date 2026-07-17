FRM.register({
  book: 4, reading: 74,
  session: "Stress Testing, Contingency Planning & Liabilities",
  title: "Managing and Pricing Deposit Services",
  tagline: "Shifts to the liability side: what deposit products exist, the three ways banks price them, and the social/regulatory tensions that come with deposit-taking.",

  teaches: `<p>Transaction vs. nontransaction deposits, three deposit pricing methods, and social/regulatory challenges (lifeline banking, overdraft protection, truth-in-savings).</p>`,

  why: `<p>Deposit pricing directly determines a bank's funding cost and stability — the choice among cost-plus, marginal, and conditional pricing reflects different strategic priorities (cost recovery vs. economic efficiency vs. customer targeting).</p>`,

  intuition: `<p>Marginal pricing is the economically "correct" approach: compare the marginal COST of raising additional funds to the YIELD earned reinvesting them — if raising one more dollar of deposits costs less than what you can earn deploying it, raise it; otherwise don't. Cost-plus pricing is simpler but less precise (covers direct + overhead costs + profit margin, regardless of what the funds could actually earn). Conditional pricing is a targeting tool — waive or reduce a fee if a condition (e.g., minimum balance) is met, specifically to attract desirable customers.</p>`,

  formulas: [],

  concepts: [
    {
      name: "Transaction vs. nontransaction deposits",
      def: "Transaction (payment-use): noninterest checking, interest checking, MMDAs, mobile check deposits. Nontransaction (savings-use): passbook savings, time accounts (CDs), retirement deposits (IRA/Keogh).",
      related: []
    },
    {
      name: "Three deposit pricing methods",
      def: "Cost-plus: price covers direct + overhead costs + profit margin. Marginal pricing: compares marginal cost of raising additional funds to the yield earned reinvesting them. Conditional pricing: fee waived/reduced if a condition (e.g., minimum balance) is met — used to attract desirable customers.",
      pitfall: "Marginal pricing is the economically precise approach (compares cost to reinvestment yield); cost-plus is simpler but ignores what the funds could actually earn; conditional pricing is a customer-targeting tool, not a pure cost-recovery mechanism.",
      related: [],
      memory: "Cost-plus: cover costs plus margin. Marginal: compare cost to what you'd earn. Conditional: waive fees to attract the RIGHT customers."
    },
    {
      name: "Social and regulatory challenges",
      def: "Lifeline banking: the unresolved question of whether banks (given deposit-insurance backing by taxpayers) owe society basic affordable banking access for low-income/undocumented/undereducated customers. Other live issues: deposit insurance, overdraft protection (and its social costs), truth-in-savings disclosure requirements.",
      related: []
    }
  ],

  connections: {
    from: [
      { r: 67, why: "Deposit categorization (hot money vs core deposits) from reserves management directly informs deposit pricing strategy." }
    ],
    to: [
      { r: 75, why: "Nondeposit liability management is the natural complement — the other half of the bank's funding side." }
    ],
    confused: [
      { what: "Cost-plus vs marginal pricing", how: "Cost-plus covers costs+margin regardless of reinvestment opportunity; marginal pricing explicitly compares the cost of new funds to the yield earned deploying them — a genuinely economic (not just accounting) approach." }
    ]
  },

  misconceptions: [
    { wrong: "\"Cost-plus and marginal pricing are essentially the same approach with different names.\"", right: "Cost-plus simply covers direct+overhead costs+margin, regardless of what the funds could earn. Marginal pricing explicitly compares the marginal COST of new funds to the YIELD from reinvesting them — a genuinely different, economically-grounded decision rule." },
    { wrong: "\"Conditional pricing is primarily a cost-recovery mechanism like cost-plus pricing.\"", right: "Conditional pricing is a CUSTOMER-TARGETING tool — waiving/reducing fees when a condition (like a minimum balance) is met, specifically to attract and retain desirable customers, not primarily to recover costs." }
  ],

  highYield: [
    { stars: 3, what: "Three deposit pricing methods and their distinct logics (cost-plus, marginal, conditional).", why: "A clean three-way classification, frequently tested for which method a scenario describes." },
    { stars: 2, what: "Transaction vs. nontransaction deposit categorization.", why: "Foundational vocabulary." },
    { stars: 2, what: "Lifeline banking and other social/regulatory tensions.", why: "Conceptual context, occasionally tested." }
  ],

  recall: [
    { q: "A bank sets its CD rates by comparing the cost of attracting new deposits to the return it can earn reinvesting those funds in new loans. What pricing method is this, and how does it differ from cost-plus pricing?", a: "This is marginal pricing — it explicitly weighs the MARGINAL COST of new funds against the YIELD from reinvesting them, a genuinely economic decision rule. Cost-plus pricing, by contrast, simply covers the account's direct costs, overhead allocation, and a profit margin, without reference to what the raised funds could actually earn if deployed." },
    { q: "A bank waives monthly account fees for customers who maintain a $1,500 minimum balance. What pricing method is this, and what is its strategic purpose?", a: "This is conditional pricing — its strategic purpose is to attract and retain DESIRABLE customers (those able to maintain higher balances) by rewarding a specific behavior, rather than purely to recover costs or match funding economics." }
  ],

  hooks: [
    { title: "Three ways to set a price", text: "Cost-plus: cover my costs. Marginal: compare my cost to what I'll earn. Conditional: reward the customers I want to keep." }
  ],

  summary: `<p><strong>Transaction</strong> (checking, MMDAs) vs. <strong>nontransaction</strong> (savings, CDs, retirement) deposits. <strong>Three pricing methods</strong>: cost-plus (costs+margin), marginal (cost vs. reinvestment yield — the economically precise approach), conditional (fee waived if a condition like minimum balance is met — customer targeting). <strong>Social/regulatory issues</strong>: lifeline banking (affordable access debate), deposit insurance, overdraft protection, truth-in-savings disclosure.</p>`
});
