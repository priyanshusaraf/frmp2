FRM.register({
  book: 2, reading: 24,
  session: "Credit Risk Analysis",
  title: "Country Risk: Determinants, Measures, and Implications",
  tagline: "Session 4 closes by scaling the 'borrower' from a firm up to an entire country.",

  teaches: `<p>Sources of country risk (economic life cycle stage, political risk, legal-system quality, commodity dependence); foreign vs. local currency default and why a country would default when it could theoretically print money; consequences of sovereign default with memorizable magnitudes.</p>`,

  why: `<p>Sovereign default seems paradoxical — why would a country default on debt in its own currency when it can print more? This reading resolves the paradox and gives you the actual measured consequences of default (GDP, borrowing costs, trade), which shows sovereign default is costly, not a free escape valve.</p>`,

  intuition: `<p>Foreign currency default is intuitive: the country literally can't print dollars or euros to pay foreign-currency debt. Local currency default is the puzzle — a country CAN print its own currency, so why would it ever default instead? Three answers: (1) historically, a gold standard constrained money printing (pre-1971), (2) shared currencies (like the euro) strip out independent monetary policy entirely, (3) sometimes the INFLATION cost of debasing the currency is judged worse than the cost of default outright — printing money to pay debt just shifts the pain onto everyone holding that currency.</p>`,

  formulas: [],

  concepts: [
    {
      name: "Sources of country risk",
      def: "Stage of economic life cycle, political risk (corruption, violence, expropriation risk, continuity of risk), legal-system quality, overreliance on a single commodity/export.",
      related: []
    },
    {
      name: "Foreign vs. local currency default",
      def: "Foreign currency default: the country can't print foreign currency to pay foreign debt (intuitive). Local currency default: the country COULD print its own currency, but defaults anyway.",
      example: "Three reasons for local currency default: (1) pre-1971 gold standard constrained money printing, (2) shared currencies (euro) strip out independent monetary policy, (3) the inflation cost of debasement is sometimes judged worse than the cost of default outright.",
      pitfall: "Local currency default is the more surprising, more heavily tested case — memorize all three reasons, not just 'they chose not to print money.'",
      memory: "Local currency default isn't about CAN'T print money — it's about printing being judged WORSE than defaulting."
    },
    {
      name: "Consequences of sovereign default",
      def: "GDP growth falls 0.5%-2.0%. Borrowing costs rise 0.5%-1.0%. Bilateral trade can drop ~8% (trade retaliation). ~14% probability of a banking crisis following sovereign default. Frequent political leadership turnover.",
      pitfall: "Composite country-risk scores from different providers (PRS, Euromoney, World Bank) are NOT standardized against each other — best used as internal rankings, not cross-provider comparisons or precise cardinal risk measures.",
      memory: "GDP down 0.5-2%, borrowing costs up 0.5-1%, trade down ~8%, banking crisis odds ~14% — rough magnitudes worth memorizing as a set."
    }
  ],

  connections: {
    from: [
      { r: 17, why: "Extends the credit-risk vocabulary (default, etc.) up from firms to sovereign entities." }
    ],
    to: [
      { r: 92, why: "The Credit Suisse CoCo case (Book 5) involves sovereign-adjacent regulatory intervention dynamics." }
    ],
    confused: [
      { what: "Foreign currency default vs local currency default", how: "Foreign: literal inability to print the needed currency. Local: ABLE to print, but chooses default because printing/inflation is judged costlier, or monetary policy is constrained (gold standard, shared currency)." }
    ]
  },

  misconceptions: [
    { wrong: "\"A country can never rationally default on debt denominated in its own currency, since it can always print more.\"", right: "Local currency default happens precisely because the INFLATION cost of printing enough money is sometimes judged worse than defaulting outright — plus constraints like a gold standard (historical) or a shared currency (e.g., euro) can remove the printing option entirely." },
    { wrong: "\"Country risk scores from different providers (PRS, Euromoney, World Bank) can be compared directly against each other.\"", right: "They are NOT standardized against each other — each provider's score is best used as an internal ranking system, not as a precise, cross-comparable cardinal measure." }
  ],

  highYield: [
    { stars: 3, what: "The three reasons local currency default happens despite the ability to print money.", why: "The single most surprising, most-tested concept in this reading." },
    { stars: 2, what: "Consequences of sovereign default (approximate magnitudes: GDP, borrowing costs, trade, banking crisis probability).", why: "A memorizable numeric set, occasionally tested for rough magnitude recognition." }
  ],

  recall: [
    { q: "Why might a country with its own printing press still choose to default on local-currency debt rather than inflate it away?", a: "Because the economic cost of the resulting inflation (currency debasement, loss of purchasing power across the whole economy, potential hyperinflation) can be judged worse than the cost of an outright default — printing doesn't eliminate the pain, it just redistributes it onto everyone holding that currency." },
    { q: "A member of a currency union (like the eurozone) faces a debt crisis. Why is its situation different from a country with its own independent currency?", a: "A shared currency strips the country of independent monetary policy — it cannot unilaterally print more of the shared currency to ease its debt burden, removing an option a fully sovereign currency-issuing country would have (even if that option is often unattractive anyway)." }
  ],

  hooks: [
    { title: "Printing isn't free", text: "A country CAN print money to pay local debt — but printing just trades a default for an inflation crisis. Sometimes leaders judge the inflation crisis worse and default anyway." }
  ],

  summary: `<p><strong>Country risk sources</strong>: economic life cycle stage, political risk, legal-system quality, commodity dependence. <strong>Foreign currency default</strong>: literal inability to print foreign currency. <strong>Local currency default</strong> (the surprising case): possible despite printing ability, due to (1) gold standard constraints (historical), (2) shared currency removing monetary policy independence, (3) inflation cost judged worse than default. <strong>Consequences</strong>: GDP −0.5 to −2.0%, borrowing costs +0.5 to +1.0%, trade −~8%, ~14% banking crisis probability, political turnover. Country risk scores across providers are NOT standardized against each other.</p>`
});
