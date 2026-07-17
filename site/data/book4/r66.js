FRM.register({
  book: 4, reading: 66,
  session: "Liquidity Risk Management",
  title: "The Investment Function in Financial-Services Management",
  tagline: "A survey reading on how banks actually invest their securities portfolios: what instruments exist, what factors drive selection, and what maturity strategies balance yield against liquidity and interest rate risk.",

  teaches: `<p>Money market vs. capital market instruments, selection factors, and maturity strategies (ladder, front-end load, back-end load, barbell, rate expectations) plus yield curve tools and duration-based immunization.</p>`,

  why: `<p>Why do banks hold securities portfolios at all, rather than just making loans? Income, liquidity, and collateral — this reading explains the strategic logic behind the bank's investment book, a foundational piece before diving into reserves management (R67) and ALM/duration techniques (R79) later.</p>`,

  intuition: `<p>Small banks skew toward safer government securities to offset riskier loan books; large banks tolerate more risk for yield (foreign securities, private debt, equity) — the securities portfolio's risk profile is chosen partly in relation to what's already on the loan side of the balance sheet, not in isolation.</p>
  <p>Maturity strategy is a spectrum: ladder (equal amounts across each maturity — simple, steady cash flow, but not income-maximizing) sits between front-end load (short-term concentration) and back-end load (long-term concentration), with barbell combining both extremes while avoiding the middle. Duration-matching to the planned holding period IMMUNIZES against interest rate risk by offsetting price risk against reinvestment risk — a preview of R79's fuller duration-gap treatment.</p>`,

  formulas: [],

  concepts: [
    {
      name: "Money market vs. capital market instruments",
      def: "Money market (≤1yr, low risk/yield): T-bills, short T-notes/bonds, federal agency securities, CDs, Eurocurrency deposits, banker's acceptances, commercial paper, short-term municipal obligations. Capital market (>1yr, higher risk/yield): Treasury notes/bonds, municipal notes/bonds, corporate notes/bonds.",
      example: "Newer instruments: structured notes, securitized assets (pass-throughs, CMOs, REMICs, MBBs), stripped securities (principal-only/interest-only).",
      related: []
    },
    {
      name: "Selection factors",
      def: "Expected return (YTM, holding period yield), tax exposure (taxable vs. tax-exempt, tax-equivalent yield, bank-qualified bonds), interest rate/credit/business/liquidity/call/prepayment/inflation risk, pledging requirements.",
      pitfall: "Small banks skew toward SAFER government securities to offset riskier loan books; large banks tolerate MORE risk for yield (foreign securities, private debt, equity) — bank size correlates with securities-portfolio risk appetite in a specific, testable direction.",
      related: []
    },
    {
      name: "Maturity strategies",
      def: "Ladder (spaced-maturity): equal amounts across each maturity interval — simple, frees cash steadily, but not income-maximizing. Front-end load: concentrate in short-term investments. Back-end load: concentrate in long-term investments. Barbell: combine front- and back-end (short + long, avoid the middle). Rate expectations: actively positioned on interest rate/economic forecasts.",
      example: "Yield curve tools: a downward-sloping curve signals expected rate declines; the carry trade borrows short/cheap to invest long/rich; riding the yield curve sells bonds after a price spike just before maturity.",
      related: ["Duration and immunization"],
      memory: "Ladder: steady and simple. Barbell: both ends, skip the middle. Front/back-end load: pick a side."
    },
    {
      name: "Duration and immunization",
      def: "Matching portfolio duration to the planned holding period immunizes against interest rate risk (offsetting price risk against reinvestment risk).",
      related: [{ r: 79, label: "R79 — the full duration-gap treatment this previews" }],
      memory: "Duration-matching cancels price risk against reinvestment risk — a preview of the fuller ALM/duration-gap story."
    }
  ],

  connections: {
    from: [],
    to: [
      { r: 67, why: "The investment portfolio described here is the same set of liquid assets managed day-to-day in reserves management." },
      { r: 79, why: "Duration-based immunization here is a preview of the full duration-gap ALM treatment." }
    ],
    confused: [
      { what: "Ladder vs barbell maturity strategy", how: "Ladder spreads investments EVENLY across all maturities; barbell concentrates at BOTH extremes (short and long) while avoiding the middle entirely — different shapes, different risk/return trade-offs." }
    ]
  },

  misconceptions: [
    { wrong: "\"Large banks and small banks tend to hold similarly risky securities portfolios.\"", right: "Small banks skew toward SAFER government securities (offsetting riskier loan books); large banks tolerate MORE risk for yield (foreign securities, private debt, equity) — portfolio risk appetite correlates with bank size in a specific direction." },
    { wrong: "\"A ladder maturity strategy maximizes income compared to other strategies.\"", right: "Ladder is simple and provides steady cash flow, but it is explicitly NOT income-maximizing — other strategies (like rate-expectations positioning) aim for higher income at the cost of more risk/complexity." }
  ],

  highYield: [
    { stars: 3, what: "Five maturity strategies (ladder, front-end, back-end, barbell, rate expectations) and their trade-offs.", why: "A clean five-item classification, good for matching-style questions." },
    { stars: 2, what: "Money market vs capital market instrument classification.", why: "Foundational vocabulary, straightforward recall." },
    { stars: 2, what: "Small vs large bank securities portfolio risk appetite.", why: "A specific, testable directional fact." }
  ],

  recall: [
    { q: "Why might a small community bank hold a more conservative securities portfolio (heavy in government securities) than a large money-center bank?", a: "Small banks typically have riskier, less-diversified LOAN books (concentrated in local businesses/consumers), so they use a safer securities portfolio to offset that loan-book risk. Large banks have more diversified loan books and greater risk-bearing capacity, allowing them to tolerate more securities-portfolio risk (foreign securities, private debt, equity) in pursuit of higher yield." },
    { q: "How does duration-matching to a planned holding period 'immunize' a bond portfolio against interest rate risk?", a: "When rates change, a bond's PRICE moves one way (e.g., rates rise, price falls) while its REINVESTMENT return on coupons moves the opposite way (e.g., rates rise, reinvested coupons earn more). Matching duration to the holding period balances these two offsetting effects so that, at the holding period's end, the two effects roughly cancel out, immunizing the portfolio's realized return against rate changes." }
  ],

  hooks: [
    { title: "Both ends, skip the middle", text: "A barbell strategy is exactly what it sounds like: weight sits at the short end and the long end, with nothing in between — like a barbell's weights, not its bar." }
  ],

  summary: `<p><strong>Money market</strong> (≤1yr: T-bills, CDs, CP) vs <strong>capital market</strong> (>1yr: Treasury/muni/corporate notes-bonds) instruments. <strong>Selection factors</strong>: return, tax exposure, multiple risk types, pledging requirements — small banks skew safer, large banks tolerate more risk for yield. <strong>Maturity strategies</strong>: ladder (steady, not income-max), front-end/back-end load, barbell (both extremes), rate expectations (active positioning). <strong>Duration-matching</strong> to holding period immunizes against rate risk by offsetting price risk against reinvestment risk.</p>`
});
