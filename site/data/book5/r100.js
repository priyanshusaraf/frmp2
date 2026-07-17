FRM.register({
  book: 5,
  reading: 100,
  session: "Current Issues in Financial Markets",
  title: "The Crypto Ecosystem: Key Elements and Risks",
  tagline: "Every 'new' risk in crypto is an old risk from Books 1-4 (liquidity spirals, runs, counterparty failure, opacity) wearing a blockchain costume.",

  teaches: "The building blocks of the crypto ecosystem (unbacked crypto, stablecoins, smart contracts, DeFi), the structural flaws baked into that ecosystem (the scalability trilemma, congestion/fragmentation, the stablecoin-anchor problem, false decentralization claims, the oracle problem), and the risks crypto poses to four distinct parties — investors, governments, regulators, and traditional financial institutions — plus the policy menu (containment, regulation, bans, CBDCs) for addressing them.",

  why: "This reading matters less for novel finance theory and more as a pattern-recognition exercise: nearly every crypto 'flaw' is a familiar risk-management concept from earlier books recurring in a new wrapper — congestion/fees are a liquidity-cost problem, fragmentation is a network/interoperability version of market segmentation, false decentralization is a concentration/counterparty-risk problem, and cryptoization is essentially a currency-substitution version of a bank run. Recognizing the analogy is the fastest way to retain this reading and the fastest way to eliminate wrong exam answers that ignore these parallels.",

  intuition: "Picture crypto as a financial system that had to reinvent, from scratch, every piece of infrastructure that traditional finance built over centuries (settlement, credit intermediation, price discovery, dispute resolution) — except it did so in about 15 years, with no lender of last resort, no deposit insurance, and marketing that claims it doesn't need any of that because it's 'decentralized.' The structural flaws in this reading are exactly the seams where that reinvention is incomplete: the trilemma is a hard constraint (you can't have security + decentralization + scale all at once, so something always gives), fragmentation is what happens when projects route around the trilemma by forking off new chains, the oracle problem is DeFi's version of 'garbage in, garbage out' for anything that needs real-world data, and false decentralization is the reveal that most 'trustless' systems still have a small number of humans who can move markets.",

  formulas: [],

  concepts: [
    {
      name: "Blockchain and its confirmation process",
      def: "A blockchain is a digital ledger recording transactions in an open, unalterable, decentralized manner — every participant holds a copy. New transactions are verified by competing validators ('miners'), who are rewarded in cryptocurrency for successful verification; once confirmed, a transaction is placed into a 'block' that cannot be changed without network approval. Wallet owner identities are private, but the transaction history is publicly viewable — hence 'pseudo-anonymous,' not fully anonymous.",
      intuition: "The blockchain trades a single trusted intermediary (a bank's ledger) for a redundant, publicly verifiable ledger maintained by many competing parties — the cost of removing the trusted intermediary is the validation competition (mining) that consumes resources and creates the congestion problems discussed below.",
      example: null,
      counter: "Pseudo-anonymous is not the same as anonymous — the full transaction history is public and traceable, which is precisely why blockchain analytics firms can (with effort) de-anonymize wallet activity; true anonymity would make this impossible.",
      pitfall: "Don't conflate 'private identity' with 'private transaction history' — only the former is true of blockchains; the latter is explicitly public.",
      related: ["Scalability trilemma", "Proof-of-work vs. proof-of-stake"],
      memory: "Pseudo-anonymous: your name is hidden, but everything you've ever done with that wallet is on a public billboard forever."
    },
    {
      name: "Unbacked crypto, stablecoins, smart contracts, DeFi (the four key elements)",
      def: "Unbacked crypto (e.g., Bitcoin, Ethereum) has no supporting asset — value is purely supply/demand driven, making it too volatile to serve as a medium of exchange. Stablecoins are pegged to an independent asset (usually USD, sometimes gold or other cryptoassets) to reduce volatility; asset-backed stablecoins are supported by bonds/bank deposits managed by a centralized intermediary, while algorithmic stablecoins use arbitrage with a paired volatile token instead of real-world collateral (TerraUSD is the canonical failed example). Smart contracts are self-executing blockchain code that triggers predetermined actions when conditions are met, eliminating intermediaries; composability lets multiple smart contracts combine into more sophisticated transactions. DeFi is blockchain-based financial services (borrow/lend/trade/invest) without a central intermediary — potentially more open/transparent/efficient, but complex, hack-vulnerable, volatile, and offers no recourse for fraud or theft.",
      intuition: "This is a value chain: unbacked crypto is too volatile to transact with → stablecoins exist to fix that volatility problem → smart contracts exist to automate transactions using those (relatively) stable units → DeFi is the ecosystem of financial services built entirely out of composed smart contracts.",
      example: "TerraUSD, an algorithmic stablecoin, tried to maintain its peg via arbitrage with its paired volatile token Luna rather than real-world collateral — when the arbitrage mechanism failed under stress, both collapsed together, illustrating exactly why algorithmic stablecoins lack the collateral cushion asset-backed stablecoins have.",
      counter: "It's tempting to think all stablecoins are equally 'safe' because they're all 'pegged' — but asset-backed and algorithmic stablecoins have fundamentally different failure modes (collateral quality/liquidity risk vs. arbitrage-mechanism/reflexivity risk).",
      pitfall: "MODULE QUIZ 102.1 Q1 tests this directly: 'algorithmic stablecoins are backed by real-world assets' is the LEAST accurate (false) statement — algorithmic stablecoins are explicitly NOT backed by real-world assets.",
      related: ["Stablecoin anchors", "The oracle problem"],
      memory: "Unbacked = wild. Stablecoin = tamed (by collateral OR by arbitrage — two very different tamers). Smart contract = the robot that executes. DeFi = the whole robot economy."
    },
    {
      name: "The scalability trilemma",
      def: "A blockchain can only achieve two of three properties simultaneously: (1) security (protecting the network from attack), (2) decentralization (distributing power broadly, not concentrating it), and (3) scalability (processing many transactions per second).",
      intuition: "This is crypto's version of the classic 'pick two' engineering trade-off (like the CAP theorem in distributed databases) — you cannot get all three because the mechanisms that provide security and decentralization (many independent validators competing/verifying) are inherently what slows throughput down.",
      example: "Bitcoin prioritizes security and decentralization but sacrifices scalability (slow, low transactions-per-second) — congestion and high fees are the direct symptom.",
      counter: "Newer blockchains that boast higher transaction throughput are not 'solving' the trilemma — they are typically sacrificing security or decentralization (often centralizing around fewer, larger validators) to get there.",
      pitfall: "MODULE QUIZ 102.2 Q1's correct answer is A (security, decentralization, scalability) — expect a distractor list containing plausible-sounding but wrong properties.",
      related: ["Congestion", "Fragmentation", "False decentralization claims"],
      memory: "Pick two: Secure, Decentralized, Scalable — 'SDS,' you can't have all three."
    },
    {
      name: "Congestion and fragmentation",
      def: "Congestion occurs when a network can't process transactions fast enough for demand, driving up validator fees. Fragmentation is the resulting proliferation of alternative, often-incompatible blockchains (e.g., Terra) built with greater capacity but typically weaker security/more centralization — causing lack of interoperability, greater hack vulnerability on smaller/less-secure chains, and decreased network effects.",
      intuition: "Congestion is the trilemma's scalability constraint biting in real time; fragmentation is the market's response to that constraint — but the response itself recreates the trilemma trade-off on each new chain (buying scale by giving up security/decentralization) while ALSO adding a new problem (incompatibility between chains).",
      example: "A user paying high transaction fees during a period of high Bitcoin network demand is experiencing congestion directly; that user moving to a newer, faster, but less secure/less decentralized chain to avoid the fee is contributing to fragmentation.",
      counter: null,
      pitfall: "Fragmentation is presented as a NEGATIVE side-effect (interoperability loss, hack risk, weaker network effects) — don't assume 'more blockchains' is automatically a sign of healthy ecosystem growth.",
      related: ["Scalability trilemma"],
      memory: "Congestion = the traffic jam. Fragmentation = everyone building their own road instead of widening the highway — now the roads don't connect."
    },
    {
      name: "Stablecoin anchors (nominal anchor problem)",
      def: "A stablecoin's value is pegged to a 'nominal anchor' (fiat currency, gold, or a basket of goods) to reduce volatility relative to unbacked crypto. Choosing an appropriate anchor is difficult: fiat currencies can themselves be volatile, precious metals aren't very liquid, and issuers are incentivized to invest reserve assets in riskier, higher-yielding assets to boost returns and diversify — which undermines the transparency and asset quality the peg depends on.",
      intuition: "The peg is only as strong as the reserve backing it — an issuer chasing yield on the reserve assets is quietly re-introducing the volatility the stablecoin was supposed to eliminate.",
      example: null,
      counter: "MODULE QUIZ 102.2 Q2 clarifies a specific nuance: stablecoins pegged to USD don't have to be directly convertible into USD itself — TerraUSD, for instance, was convertible into its paired token Luna to maintain the 1:1 USD peg, not into actual dollars.",
      pitfall: "Don't assume 'stablecoin' guarantees low volatility and high liquidity as an automatic property — it's an intended design goal that depends entirely on anchor quality/transparency, and it can fail (TerraUSD).",
      related: ["Unbacked crypto, stablecoins, smart contracts, DeFi"],
      memory: "The anchor is only as strong as what it's tied to — a yield-chasing reserve manager is quietly cutting the anchor chain."
    },
    {
      name: "False decentralization claims",
      def: "Despite marketing as 'decentralized,' actual decision-making power in crypto/DeFi tends to concentrate among a small number of validators, due to operational costs. Proof-of-work (PoW) systems face congestion-driven power concentration; proof-of-stake (PoS) systems (validators post coin collateral) reduce congestion but still concentrate power/coins because operational costs are largely fixed. 'Contract incompleteness' (impossible to write agreements covering all future scenarios) and its DeFi analogue 'algorithm incompleteness' (impossible to write code covering all situations) require some centralized governance to patch gaps — represented by governance tokens (given to developers/insiders who become part-owners with voting rights). Centralization also shows up in trading: centralized exchanges (CEXs, off-chain order books, lower cost) dominate over decentralized exchanges (DEXs, automated market-maker protocols), and CEXs lack traditional exchange regulatory oversight, repeatedly showing weak risk management (FTX 2022, Mt. Gox 2014).",
      intuition: "'Decentralized' is a marketing claim that collides with the economics of running infrastructure: someone has to pay operational costs, and whoever pays tends to accumulate influence — whether that's PoW miners, PoS stakers, or governance-token holders patching incomplete code.",
      example: "The November 2022 FTX bankruptcy (billions in customer losses) and the 2014 Mt. Gox failure (over $400 million in bitcoin losses) are both named professor's-note examples of centralized-exchange failures with inadequate risk management/governance controls — a direct echo of R90/R91's due-diligence and fraud-prediction themes from earlier in Book 5.",
      counter: "PoS is often marketed as an improvement over PoW (less congestion, lower energy use) — but the reading is explicit that PoS STILL leads to power/coin concentration, just through a different mechanism (fixed operational costs favoring large stakers) rather than solving centralization.",
      pitfall: "Governance tokens are a centralizing feature, not a decentralizing one — they concentrate voting power among developers/insiders who received them, precisely to patch 'algorithm incompleteness.'",
      related: ["The oracle problem", "Risks to crypto investors"],
      memory: "PoW concentrates power via mining costs; PoS concentrates power via staking costs — different roads, same destination: a small group ends up in charge."
    },
    {
      name: "The oracle problem",
      def: "Smart contracts cannot access off-chain (real-world) information directly and must rely on 'oracles' to feed them external data (event outcomes, asset prices). The oracle problem is the challenge of ensuring that data is accurate — a compromised or malicious oracle can feed false data, causing smart contracts to execute incorrectly, enabling market manipulation and losses with little recourse (since oracles, like the rest of DeFi, are typically decentralized).",
      intuition: "This is DeFi's 'garbage in, garbage out' problem, sharpened by the fact that smart contracts execute automatically and irreversibly once triggered — a bad oracle input doesn't just produce a bad report, it produces an executed, hard-to-reverse financial transaction.",
      example: "MODULE QUIZ 102.1 Q2's correct answer notes that importing data into a blockchain for smart-contract use necessarily requires a third party (the oracle) — smart contracts cannot fetch real-world data for themselves.",
      counter: "It might seem like decentralization would make oracles more trustworthy (no single point of failure) — but the reading notes decentralization here actually makes recourse HARDER when an oracle is compromised, since there's no central party to hold accountable.",
      pitfall: "MODULE QUIZ 102.1 Q1's correct (least accurate) answer choice is about algorithmic stablecoins, but choice C ('smart contracts cannot directly access off-chain information') is TRUE, not the flawed statement — don't mix up which module-quiz answer is testing which concept.",
      related: ["False decentralization claims", "Smart contracts"],
      memory: "Smart contracts are blind to the outside world — oracles are their eyes, and a poked-out eye (compromised oracle) leads the contract straight into a wall."
    },
    {
      name: "Risks to crypto investors",
      def: "High volatility makes crypto a risky asset class; the largely unregulated, new industry attracts scammers/fraudsters; investors face wallet-hacking and exchange-compromise/collapse risk, with fund recovery slow or impossible after an exchange bankruptcy. Large investors have generally benefited at the expense of small (retail) investors.",
      intuition: "This concept is a specific instance of a very general pattern from Book 5's due-diligence readings (R89-91): new, unregulated, opaque markets systematically transfer wealth from less-informed small investors to better-informed large ones.",
      example: null,
      counter: null,
      pitfall: null,
      related: ["Predicting fraud by investment managers (R91)", "Risks to traditional financial institutions"],
      memory: "New + unregulated + volatile = a wealth pump from small investors to large ones."
    },
    {
      name: "Risks to governments",
      def: "Crypto's pseudo-anonymity aids money laundering and terrorist financing, complicating law enforcement's ability to track/trace transactions. Crypto use can erode tax revenue. Widespread payment adoption of crypto threatens financial stability since it is decentralized and outside government control. 'Cryptoization' — crypto substituting for local currency, especially in emerging markets during instability — can create a self-reinforcing loss of monetary sovereignty (crypto flight puts more downward pressure on the domestic currency).",
      intuition: "Cryptoization is structurally identical to old-fashioned currency substitution/dollarization crises, except the substitute asset (crypto) is even harder for the government to track or control than a foreign currency would be.",
      example: "In an emerging-market currency crisis, residents fleeing into crypto instead of (or alongside) a foreign hard currency accelerates the local currency's decline — a feedback loop analogous to how liquidity spirals feed on themselves in Book 4's ALM material.",
      counter: null,
      pitfall: "Don't conflate 'cryptoization' (currency substitution risk to sovereignty/stability) with 'money laundering/terrorist financing' risk — they are two DISTINCT risks to governments in this taxonomy, not the same concept restated.",
      related: ["Risks to regulators"],
      memory: "Cryptoization is dollarization's ghost — same currency-substitution mechanism, harder-to-trace substitute."
    },
    {
      name: "Risks to regulators",
      def: "Regulators struggle to keep pace with the rapidly evolving crypto industry; crypto's global nature clashes with country-by-country laws, creating jurisdictional enforcement and coordination challenges. Anonymity/pseudo-anonymity aids illicit activity (tax evasion, money laundering, terrorism financing), and tracing transactions remains difficult for law enforcement.",
      intuition: "This is essentially the supervisory-comparability problem from R99 (jurisdiction comparability, cross-border coordination) recurring in a new domain — global asset, local rulebooks.",
      example: null,
      counter: null,
      pitfall: null,
      related: ["Comparability obstacles (R98/R99)"],
      memory: "One global asset, dozens of incompatible rulebooks — jurisdiction arbitrage by design, not accident."
    },
    {
      name: "Risks to traditional financial institutions",
      def: "Interaction between crypto and traditional finance has been limited so far (crypto mostly used for speculation) but is expected to grow. Banks gain crypto exposure by lending to crypto-exposed customers or offering crypto services directly — demonstrated in late 2022 when a crypto price plunge spilled over and contributed to the demise of at least two banks with significant crypto-sector customers. Tokenization (adding a digital 'token' representation of a real-world asset like real estate or stocks to a programmable ledger, including ownership details) could deepen crypto/traditional-finance interconnection and raise crypto's systemic importance. Regulatory uncertainty complicates institutional operation in the space; in the long run, crypto's cheaper/faster money transfer could pose a competitive threat.",
      intuition: "This is the crypto-specific instance of the R92 SVB lesson: concentrated exposure to a single volatile, correlated customer base (there, tech/VC deposits; here, crypto-sector customers) can take down a bank even without the bank directly holding the volatile asset itself.",
      example: "MODULE QUIZ 102.3 Q1's correct answer (D — retail investors speculating on crypto values) is the LEAST likely channel of interconnectedness; exchanges partnering with banks, banks offering crypto services, and asset managers launching crypto funds are all MORE direct interconnection channels than pure retail speculation.",
      counter: "Interconnectedness so far has been limited — don't assume the crypto-traditional finance linkage is already systemically large; the reading frames this as a growing, not yet fully realized, risk.",
      pitfall: "Tokenization is presented as a FUTURE growth channel for interconnectedness, not a current major risk — distinguish 'has happened' (bank exposure to crypto-sector depositors, 2022) from 'could happen' (tokenization deepening ties).",
      related: ["Review of the Federal Reserve's Supervision of Silicon Valley Bank (R92)"],
      memory: "Banks don't need to hold crypto to be hurt by it — they just need crypto-exposed customers, exactly like SVB didn't need to hold tech-startup risk directly, just tech-startup deposits."
    },
    {
      name: "Policy actions: containment, regulation, bans, CBDCs",
      def: "Containment limits crypto's connection to traditional finance (e.g., prohibiting banks from offering crypto services) — protects consumers/reduces contagion risk but can stifle innovation. Regulation establishes rules/oversight (licensing exchanges, AML/CFT requirements; FATF provides guidance) — preserves market integrity but is expensive/complex. Bans prohibit crypto entirely — eliminates the risk but tends to push activity into the underground economy. Additional constructive policy actions: developing clear comprehensive regulations (FSB-coordinated), increasing cross-border cooperation/coordination, encouraging crypto-adjacent innovation within traditional finance (e.g., FedNow instant payments), and developing central bank digital currencies (CBDCs) as a safer/more efficient transfer alternative.",
      intuition: "These three core policy stances (containment / regulate / ban) trade off the same variables in different proportions: consumer protection and financial-stability insulation vs. innovation and market development — with bans maximizing the former at the cost of driving activity underground (arguably making it LESS visible and harder to regulate, not safer).",
      example: "MODULE QUIZ 102.3 Q2's correct answer (B — encourage CBDCs) is favored over taxing transactions heavily, banning ICOs/DEXs, or imposing strict exchange/wallet regulation, because CBDCs reduce costs, enhance financial inclusion, and bolster financial-system integrity without the enforcement/innovation-stifling costs of the other options.",
      counter: "Banning crypto might seem like the most protective option, but the reading is explicit that bans have the unintended consequence of driving activity underground — arguably WORSE for oversight than regulation, which at least keeps activity visible.",
      pitfall: "Don't treat 'more restriction = more safety' as a monotonic relationship in this reading's framework — heavy-handed taxation or bans can backfire by discouraging legitimate use while pushing illegitimate use further out of view.",
      related: ["Risks to regulators", "Risks to governments"],
      memory: "Contain = build a wall between crypto and banks. Regulate = license and watch it. Ban = drive it underground. CBDC = out-compete it with a safer public alternative."
    }
  ],

  connections: {
    from: [
      { r: 91, why: "The FTX and Mt. Gox exchange-failure examples echo R91's fraud-prediction and due-diligence themes — centralized crypto exchanges showed exactly the weak governance/risk-management red flags that Book 5's due-diligence readings teach investors to look for." },
      { r: 92, why: "Banks failing due to concentrated exposure to crypto-sector customers (late 2022) is structurally the same lesson as SVB's failure from concentrated exposure to correlated tech/VC depositors — concentration risk materializing through customer base rather than direct asset holdings." },
      { r: 63, why: "Cryptoization and exchange-collapse dynamics are currency-substitution and run analogues of the funding-liquidity spirals covered in Book 4's liquidity risk foundations." }
    ],
    to: [
      { r: 101, why: "Digital Resilience and Financial Stability (the final reading) shifts from crypto-specific structural risk to the broader cyber/ICT infrastructure risk (cloud computing, systemic tech dependence) that also threatens traditional finance directly." }
    ],
    confused: [
      { what: "R99 vs. R100", how: "R99's climate-risk governance principles (three lines of defense, concentration risk in risk appetite) are a DIFFERENT domain's governance framework — don't apply climate-specific principle numbers to crypto risk questions, even though both readings discuss 'emerging, undermeasured risk' as a theme." }
    ]
  },

  misconceptions: [
    { wrong: "Algorithmic stablecoins are backed by real-world assets like bonds or bank deposits.", right: "Algorithmic stablecoins are NOT backed by real-world assets — they use arbitrage with a paired volatile token (as TerraUSD did with Luna) instead of collateral; only asset-backed stablecoins hold bonds/bank deposits as backing." },
    { wrong: "A USD-pegged stablecoin must be directly convertible into actual US dollars.", right: "A USD-pegged stablecoin does not have to be directly convertible into actual US dollars — it may be convertible into another cryptoasset engineered to maintain the peg (as TerraUSD was into Luna)." },
    { wrong: "Proof-of-stake solves the centralization problem that proof-of-work has.", right: "PoS does not solve centralization — it still concentrates power and coin ownership among a small number of validators, just via a different mechanism (fixed operational costs favoring large stakers rather than mining competition)." },
    { wrong: "Some smart contracts can fetch real-world data for themselves without an oracle.", right: "Smart contracts cannot fetch real-world data on their own under any design — they always require an oracle (a third party) to bring off-chain information on-chain; this is a structural limitation, not an implementation choice." },
    { wrong: "Retail investor speculation is a major direct channel of crypto-traditional finance interconnectedness.", right: "Retail investor speculation is the LEAST direct channel — exchange-bank partnerships, banks offering crypto services, and asset managers launching crypto funds are all more direct channels." },
    { wrong: "Banning crypto eliminates the risks it poses.", right: "Banning crypto does not eliminate its risks — it tends to drive activity into the underground economy, potentially making oversight harder, not easier." },
    { wrong: "Crypto and traditional finance/the real economy are already deeply and systemically interconnected today.", right: "Interconnectedness has been LIMITED to date (crypto has mainly been used for speculation) — don't overstate current systemic linkage, even though the reading expects it to grow." }
  ],

  highYield: [
    { stars: 4, what: "The scalability trilemma.", why: "Security, decentralization, scalability — pick only two. A near-guaranteed matching/identification question." },
    { stars: 4, what: "Algorithmic vs. asset-backed stablecoins.", why: "Algorithmic (e.g., TerraUSD) is NOT backed by real assets and relies on arbitrage with a volatile paired token; asset-backed IS collateralized by bonds/deposits via a centralized intermediary." },
    { stars: 4, what: "PoW AND PoS both concentrate power.", why: "Despite decentralization marketing, both lead to power/coin concentration — via different mechanisms (mining costs vs. staking costs)." },
    { stars: 3, what: "The oracle problem.", why: "Smart contracts cannot access off-chain data directly; a compromised oracle causes bad executions with little recourse given typical oracle decentralization." },
    { stars: 3, what: "Four distinct risk-bearer categories.", why: "Investors (volatility/fraud/hacks), governments (AML/CFT, tax revenue, cryptoization/monetary sovereignty), regulators (jurisdictional coordination), traditional financial institutions (exposure via lending/services, tokenization, competitive threat)." },
    { stars: 3, what: "Cryptoization.", why: "Crypto substituting for local currency in unstable emerging markets, reinforcing currency decline — a distinct risk-to-governments concept, not to be merged with AML/CFT risk." },
    { stars: 2, what: "Policy menu trade-offs.", why: "Containment (wall off, but stifles innovation), regulation (license/oversee, but costly/complex), bans (eliminate, but push underground), CBDCs (compete via a safer public alternative)." }
  ],

  recall: [
    { q: "What three properties can a blockchain achieve only two of, per the scalability trilemma?", a: "Security, decentralization, and scalability." },
    { q: "How does an algorithmic stablecoin maintain its peg, and how does that differ from an asset-backed stablecoin?", a: "Algorithmic stablecoins use arbitrage with a paired volatile token (no real-world collateral) — e.g., TerraUSD/Luna. Asset-backed stablecoins are collateralized by bonds/bank deposits managed by a centralized intermediary." },
    { q: "Does proof-of-stake eliminate the power-concentration problem seen in proof-of-work systems?", a: "No — PoS still concentrates power/coin ownership among a small number of large validators, driven by largely fixed operational costs, just through a different mechanism than PoW mining." },
    { q: "What is the oracle problem, and why is it hard to get recourse when it occurs?", a: "Smart contracts can't access off-chain data directly and rely on oracles to supply it; if an oracle is compromised or malicious, smart contracts execute on false data, and because oracles are typically decentralized, there's little recourse." },
    { q: "What is cryptoization, and why is it particularly likely in emerging markets during instability?", a: "Cryptoization is crypto replacing local currency as a store of value/medium of exchange; during instability, residents fleeing to crypto puts further downward pressure on the domestic currency, threatening monetary sovereignty and financial stability." },
    { q: "Which channel of crypto-traditional finance interconnectedness is LEAST direct: exchange-bank partnerships, banks offering crypto services, asset managers launching crypto funds, or retail investors speculating on crypto?", a: "Retail investors speculating on crypto values — the other three represent direct institutional-level linkages." },
    { q: "What is the main drawback of an outright crypto ban as a policy response?", a: "It tends to drive crypto activity into the underground economy rather than eliminating it, potentially making oversight harder." },
    { q: "Why might encouraging central bank digital currencies (CBDCs) be a more favorable policy response than heavy taxation or bans?", a: "CBDCs can reduce payment costs, enhance financial inclusion, and bolster financial-system integrity, without the enforcement difficulty or innovation-stifling effects of bans/heavy taxation/strict exchange regulation." }
  ],

  hooks: [
    { title: "Crypto's CAP theorem", text: "The trilemma is crypto's CAP theorem: Secure, Decentralized, Scalable — pick two." },
    { title: "TerraUSD", text: "The one worked example to remember for algorithmic stablecoins: no real collateral, arbitrage with Luna, collapsed when the arbitrage broke." },
    { title: "Different tollbooths, same jam", text: "PoW and PoS both end up concentrated — different tollbooths (mining costs vs. staking costs), same traffic jam of power." },
    { title: "Dollarization's cousin", text: "Cryptoization = dollarization's harder-to-trace cousin." },
    { title: "SVB echo", text: "Banks don't need to own crypto to get hurt by it — they just need crypto-exposed customers (echo of SVB)." }
  ],

  summary: "The crypto ecosystem is built from four layered elements: unbacked crypto (too volatile to use as money) → stablecoins (pegged, either asset-backed or algorithmic, to fix that volatility) → smart contracts (self-executing code automating transactions) → DeFi (financial services built from composed smart contracts). Structural flaws recur because the ecosystem is young: the scalability trilemma forces a permanent trade-off among security/decentralization/scalability; congestion and its offspring fragmentation degrade interoperability and security; stablecoin anchors are only as sound as their (sometimes yield-chasing) reserve backing; 'decentralization' is often a marketing claim undercut by real power concentration in PoW mining, PoS staking, governance tokens, and centralized exchanges (FTX, Mt. Gox); and the oracle problem means smart contracts are only as trustworthy as the off-chain data feeding them. Crypto poses distinct risks to four parties — investors (volatility, fraud, exchange collapse), governments (AML/CFT, tax revenue, cryptoization), regulators (jurisdictional fragmentation), and traditional financial institutions (indirect exposure via customers, future tokenization-driven interconnection, competitive threat) — addressed through a policy menu of containment, regulation, bans, and CBDC development, each with its own cost/benefit trade-off."
});
