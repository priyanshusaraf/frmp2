# FRM Part II — Credit Risk Measurement and Management (Complete, Book 2)

**F R M PA R T I I  ·  C R E D I T R I S K M E A S U R E M E N T A N D M A N A G E M E N T**

# **The Complete Book 2 Story, Formulas & Traps**

_All 23 Readings, All 3 Study Sessions:_

_Credit Risk Analysis (17–24) · Credit Risk Estimation (25–30) · Counterparty Risk Management (31–39)_

Built directly from your Schweser Book 2 — every formula, every reading's story, worked examples, and the exam traps GARP likes to test — threaded into one continuous narrative from Reading 17 to Reading

39. Complete companion guide for Credit Risk Measurement & Management.

**Study Session 4 — Credit Risk Analysis:** Readings 17–24. The qualitative and bank-management spine: what credit risk is, how banks govern and price it, and how country/sovereign risk fits in.

**Study Session 5 — Credit Risk Estimation:** Readings 25–30. The quant core: default probabilities, Credit VaR, portfolio/copula models, structured credit, and credit derivatives.

**Study Session 6 — Counterparty Risk Management:** Readings 31–39. Derivatives-specific credit risk: netting, collateral, central clearing, exposure profiles, CVA, stress testing, and securitization mechanics.

### **Table of Contents**

**Study Session 4 — Credit Risk Analysis** Reading 17 · Fundamentals of Credit Risk 4 Reading 18 · Governance Reading 19 · Credit Risk Management Reading 20 · Capital Structure in Banks Reading 21 · Introduction to Credit Risk Modeling and Assessment Reading 22 · Credit Scoring and Rating Reading 23 · Credit Scoring and Retail Credit Risk Management Reading 24 · Country Risk

###### **Study Session 5 — Credit Risk Estimation**

Reading 25 · Estimating Default Probabilities Reading 26 · Credit Value at Risk Reading 27 · Portfolio Credit Risk Reading 28 · Structured Credit Risk Reading 29 · Credit Risk (in Derivatives) Reading 30 · Credit Derivatives

###### **Study Session 6 — Counterparty Risk Management**

Reading 31 · Derivatives Reading 32 · Counterparty Risk and Beyond Reading 33 · Netting, Close-Out, and Related Aspects Reading 34 · Margin (Collateral) and Settlement Reading 35 · Central Clearing Reading 36 · Future Value and Exposure Reading 37 · CVA Reading 38 · The Evolution of Stress Testing Counterparty Exposures Reading 39 · An Introduction to Securitization

###### **Closing**

Cross-Reading Synthesis: The Five Threads of Book 2

Complete Formula Index

##### S T U D Y S E S S I O N 4 O F 6

## **Credit Risk Analysis**

This session is the qualitative spine of the whole book. Before you can compute anything, you need the vocabulary and the bank's-eye view: what credit risk actually is (R17), how a bank governs and controls it (R18–19), how much capital it needs to hold against it (R20–21), how individual borrowers get scored (R22–23), and how a whole country can become the "borrower" (R24). Almost nothing here is heavily computational — the exception is R20/R21, where EL/UL and the Merton model first appear. Treat R17–19 and R22–24 as fast, conceptual reads; slow down for R20–21.

17 Fundamentals of Credit Risk · 18 Governance · 19 Credit Risk Management · 20 Capital Structure in Banks · 21 Intro to Credit Risk Modeling · 22 Credit Scoring and Rating · 23 Retail Credit Risk · 24 Country Risk

###### **S TUDY SESSION 4 · READING 17**

#### **Fundamentals of Credit Risk**

_Bouteille & Coogan-Pushner, The Handbook of Credit Risk Management, Ch. 1_

##### **The story**

Every reading after this one is really an elaboration of one sentence: _credit risk is the chance you lose money because someone else doesn't pay you back, on time, in full._ R17 exists to make you precise about that sentence before the book gets quantitative. It draws three careful distinctions you will be tested on directly (insolvency vs. default vs. bankruptcy), it catalogs the transaction types that create credit risk (lending isn't the only one — leases, receivables, prepayment, deposits, contingent claims, and derivatives all do too), and it walks through which kinds of entities carry which kinds of exposure. Nothing here is hard; the exam risk is sloppy vocabulary, not sloppy math.

###### **Insolvency vs. default vs. bankruptcy — the classic trap**

|**Term**|**Definition**|
|---|---|
|Insolvency|Liabilities > assets (negative equity). Can still be paying its bills.|
|Default|Fails to meet a contractual obligation (can happen without insolvency, e.g. a dispute).|
|Bankruptcy|Legal proceeding, usually after default: Chapter 7 (liquidation) or Chapter 11 (reorganization).|

###### **TRAP**

A company with liabilities exceeding assets that is _still paying everyone on time_ is insolvent, not in default and not bankrupt. The exam loves handing you a balance sheet with negative equity and a management team confidently meeting its obligations — the answer is "insolvent," full stop.

###### **Seven transaction types that generate credit risk**

Lending · leases · receivables · prepayment · deposits · contingent claims (insurance, pensions) · derivatives. Globally, the largest source of credit exposure by notional is derivatives (~$600 trillion), even though in the U.S. corporate obligations dominate.

###### **Who's exposed, and how**

Banks (lending + repo collateral risk + derivatives), asset managers (on behalf of clients), hedge funds (often _seek out_ default as a trade — short distressed debt, buy CDS protection), insurers (underwriting, investment, and _reinsurance recoverables_ — a slow-burn credit exposure that can take decades to settle), pension funds, corporations (receivables, short-term investments, derivatives, vendor financing, supply chain), and individuals (prepayment, deposits).

###### **THREAD**

_The "reinsurance recoverable" concept quietly reappears in R28/R39 as an example of long-tail, hard-to-model credit exposure, and the hedge-fund-as-creditopportunist idea reappears in R30 when protection buyers/sellers are discussed as speculators, not just hedgers._

###### **S TUDY SESSION 4 · READING 18**

#### **Governance**

_Bouteille & Coogan-Pushner, Ch. 2_

##### **The story**

If R17 defines the disease, R18 is the bank's immune system. It answers: who is allowed to take credit risk, who checks their work, and who has the authority to stop them? The **three lines of defense** is the organizing skeleton of the whole reading — memorize it cold, because it is GARP's favorite governance framework across multiple FRM topics, not just credit risk.

###### **Three lines of defense**

|**Line**|**Who**|**Role**|
|---|---|---|
|1st|Business owners|Own and manage the risk day to day (originate, price, monitor)|
|2nd|Risk mgmt / compliance / legal|Independent monitoring and oversight; sets guidelines & limits|
|3rd|Internal audit|Independent assurance that lines 1 and 2 are actually working|

###### **The four GSLO pillars of good governance**

- **Guidelines** — written credit policies; must be reviewed periodically and owned by the CRO's office.

-

- **Skills** — risk staff need real business fluency, not just modeling skill; delegation of authority is tied to transaction risk parameters (exposure size, credit quality, tenor).

- **Limits** — the maximum acceptable dollar loss, set at the aggregate and counterparty/sector/country level.

-

- **Oversight** — risk management must be organizationally independent from the profit center it oversees, with compensation delinked from the business unit's P&L.

###### **TRAP**

The exam will test that risk managers should _not_ be compensated based on the profitability of the desk they oversee — that's a conflict-of-interest question dressed up as a governance question.

###### **S TUDY SESSION 4 · READING 19**

#### **Credit Risk Management**

_Cross-referenced to bank credit policy & asset classification standards_

##### **The story**

R19 takes the governance skeleton from R18 and applies it specifically to a bank's loan book. Three ideas matter most: (1) how a bank **classifies** loans by health, (2) how it sets aside **loan loss provisions** against expected trouble, and (3) the four-step **workout process** when a loan actually goes bad.

###### **Asset classification spectrum**

Standard (pass) → specially mentioned (watch) → substandard → doubtful → loss. This is a health spectrum from "fine" to "already a write-off," and provisioning intensity should rise as you move right.

###### **IFRS 9's three-stage loss model (effective Jan 1, 2018)**

|**Stage**|**Asset condition**|**Loss model**|**Interest calculated on**|
|---|---|---|---|
|1|Performing|12-month expected loss|Gross amount|
|2|Any delinquency|Lifetime expected loss|Gross amount|
|3|Nonperforming|Lifetime expected loss|Net amount|
|**TRAP**||||

Stage 2 and Stage 3 both use _lifetime_ expected loss — the difference between them is whether interest income is computed on the gross or net (of provisions) carrying amount, not the loss horizon. This is a frequently-missed distinction.

###### **Expected loss vs. unexpected loss (first appearance)**

###### **DEFINITION**

EL = PD × LGD × EAD    (the "average" loss) — UL = the loss that isn't captured by the EL model, i.e. the variability around that average.

###### **THREAD**

_This EL/UL split is introduced qualitatively here but becomes fully quantitative in R20 — that's the reading where you actually calculate EL and UL with formulas and standard deviations. Keep this reading's definitions in your back pocket; R20 is where they get teeth._

###### **S TUDY SESSION 4 · READING 20**

#### **Capital Structure in Banks**

_Bottom-up economic capital for credit risk_

##### **The story**

This is the first genuinely computational reading in the book, and it's foundational — nearly every later Credit VaR reading (26, 27, 29) is a more sophisticated version of the same question this reading asks first: _if I know a loan's PD and loss rate, what's my average loss (EL), and how much worse could it plausibly get (UL)?_ The punchline is that portfolio UL is much smaller than the sum of individual ULs — diversification is doing real work — and the leftover gap between "worst case" and "expected case" is exactly what **economic capital** exists to cover.

###### **Expected loss**

###### **EL FOR A SINGLE ASSET**

EL = EA × PD × LR EA = exposure amount (EAD) · PD = probability of default · LR = loss rate (LGD) = 1 − recovery rate

###### **Unexpected loss — the variability around EL**

###### **SINGLE-ASSET UL**

UL = EA × √[ PD·σLR² + LR²·σPD² ] σPD² = PD(1−PD) under a binomial default assumption

###### **WORKED EXAMPLE**

$2,000,000 commitment, $1,800,000 outstanding, PD = 1%, LR = 40%, σPD = 10%, σLR = 30%. EL = 1,800,000 × 0.01 × 0.40 = **$7,200** . UL = 1,800,000 × √[0.01×0.3² + 0.4²×0.1²] = **$90,000** (5% of exposure).

###### **Portfolio EL and UL — where diversification shows up**

###### **PORTFOLIO EL (JUST ADDS UP)**

**PORTFOLIO UL (CROSS-TERMS MATTER)**

*[image omitted]*

If every pairwise ρ=1, ULP = ΣULi (no diversification benefit at all). In every realistic case ρ<1, so ULP < ΣULi. A 20-asset portfolio has 190 unique correlation pairs; a 100-asset portfolio has 4,950 — which is exactly why practitioners collapse pairwise correlation into one representative number instead of estimating each pair.

###### **Risk contribution — each asset's slice of UL P**

**TWO-ASSET RISK CONTRIBUTION**

RC1 = (UL1² + ρ12UL1UL2) / ULP    (and RC1+RC2=ULP)

###### **Economic capital**

Economic capital = the distance between the expected outcome and a chosen extreme confidence level (typically 99.97%), expressed as a multiple of ULP (the "capital multiplier," CM): **EC = CM × ULP** . Credit losses are modeled with a **beta distribution** (bounded 0–100%, flexible skew) rather than normal — credit losses are inherently skewed: capped upside (get paid back in full), fat left tail (default).

###### **TRAP**

Increasing recovery rate _decreases_ LR, which decreases EL — but the exam likes to combine a recovery-rate change with a PD change in the same question and ask for net direction. Both a PD decrease and an RR increase point the same way (EL down); make sure you're not sign-flipping one of them.

###### **THREAD**

_EL = PD×LGD×EAD is the single most-repeated formula in this entire book — it resurfaces verbatim in R21 (CAMEL/IRB), R28 (structured tranches), R38 (stress testing), with only notation changes. Nail it here and every later reading gets easier._

###### **S TUDY SESSION 4 · READING 21**

#### **Introduction to Credit Risk Modeling and Assessment**

_Doumpos, Lemonakis, Niklis & Zopounidis, Ch. 1_

##### **The story**

This reading has three separate jobs, and the exam treats each as fair game: (1) CAMEL, a bank health-check mnemonic; (2) the regulatory capital ratio (CAR) and the IRB formula that sits under it; (3) the three families of default-prediction models, with the **Merton model** as the star. Merton is the single most important model in the whole book — it comes back in R25 (in more precise form) and R29, so get comfortable with it here.

###### **CAMEL**

**C** apital adequacy · **A** sset quality · **M** anagement · **E** arnings · **L** iquidity. "Asset quality" is the delinquent-loan bucket — a frequent quiz target.

###### **Capital adequacy ratio & the IRB capital formula**

**CAR** CAR = Capital (Tier 1 + Tier 2) / Risk-Weighted Assets   — minimum α = 8% (Basel II) or 10.5% (Basel III)

###### **IRB CAPITAL CHARGE K**

K = LGD × [ N( √(1/(1−R))·N<sup>−1</sup> (PD) + √(R/(1−R))·N<sup>−1</sup> (0.999) ) − PD ] × β(maturity adj.)

Two comparative-statics results are exam favorites: asset correlation R _decreases_ as PD increases (higher-PD firms are more idiosyncratic); R _increases_ with firm size (bigger firms move more with the broad economy). Maturity adjustment β is higher for _low_ -PD borrowers (they have more room to deteriorate) and capital requirements rise with maturity.

###### **Three families of default models**

|**Approach**|**Basis**|**Applies to**|
|---|---|---|
|Judgmental (5C)|Character, Capacity, Capital, Collateral, Conditions — expert opinion|Consumer + corporate; best when no history exists (e.g. project finance)|
|Empirical|Historical data, ML pattern-finding|Consumer + corporate|
|Financial (market) models|Structural (Merton) or reduced-form (Poisson jump)|Corporate only — needs market data|

###### **The Merton model**

Equity is a call option on firm assets, struck at the face value of debt L. If assets AT > L at maturity, shareholders "exercise" by repaying debt; otherwise they walk away and creditors get the assets.

|**EQUITY VALUE (BLACK-SCHO**|**LES-MERTON)**<br>E = A·N(d1) − L·e<sup>−rT</sup>·N(d2)|
|---|---|
|**RISK-NEUTRAL PD**|PDRN= N(−d2)|
|**REAL-WORLD PD**|replace r with μ (expected asset return) inside d2|
|**DISTANCE TO DEFAULT**|DD = d2(standard deviations of asset value above the default point)|

###### **Merton's cousins**

- **Moody's-KMV EDF** — uses historical (not normal) default distribution; default point = short-term debt + ½ long-term debt.

- **CreditMetrics** — mark-to-market, uses a rating transition matrix + credit spreads; not a rating tool itself.

-

- **CreditRisk+** — ignores capital structure entirely, models only default/no-default via a Poisson process; needs the least data.

###### **RAROC**

###### **RISK-ADJUSTED RETURN ON CAPITAL**

RAROC = Loan revenue / Capital at risk  —  loan revenue = Loan value × (spread + fees − losses − costs) × (1−tax)

Capital at risk can be approximated via duration: ΔL = −D × L × Δi, or via unexpected loss: α × LGD × EAD (α ≈ 2.6σ at 99.5% under normality, but 5–6σ in practice given skew). A loan is profitable if RAROC > the bank's own cost of capital.

###### **TRAP**

Merton's default point uses _only short-term debt_ ; Moody's-KMV adds half of long-term debt. This is the most commonly tested Merton-vs-KMV distinction — don't mix it up with the other difference (historical vs. standard normal distribution).

###### **S TUDY SESSION 4 · READING 22**

#### **Credit Scoring and Rating**

_Credit rating agency methodologies_

##### **The story**

Scores (300–850, individuals/small business) vs. ratings (AAA...D, large firms/governments) are two different tools solving the same problem at different scales. The two philosophies that matter most for the exam:

|**Philosophy**|**Horizon**|**Used by**|**Best for**|
|---|---|---|---|
|Through-the-cycle|Long-term, smooths the cycle|Rating agencies|Long-term loans|
|Point-in-time|Short-term, reacts fast|Banks internally|Short-term loans|

Consumer scoring splits into **behavioral** (uses payment/purchase history, updates near real-time) and **profit scoring** (ignores behavior, optimizes account/ customer profitability directly).

###### **CRA rating process (5 steps) & criticisms**

Data collection → model fitting → model validation → risk-rating definition/validation → implementation (with ongoing monitoring feeding back into reevaluation). Common criticisms: lack of transparency, conflicts of interest (issuer pays the rater), encouragement of higher debt loads, weak predictive power, and **procyclicality** (ratings get worse exactly when the economy is already struggling, amplifying the downturn).

###### **S TUDY SESSION 4 · READING 23**

#### **Credit Scoring and Retail Credit Risk Management**

##### **The story**

Retail credit risk (mortgages, cards, auto loans) behaves differently from corporate credit risk in ways the exam tests directly: any single retail default barely moves the needle (small, granular exposures), but lenders _can_ act preemptively (tighten underwriting, adjust cutoff scores) whereas corporate lenders often see the warning signs too late. The **"dark side"** of retail credit is when a systemic shock hits asset values and default rates simultaneously (2008 housing: falling home prices + rising defaults at once).

###### **Scorecard evaluation: CAP and AR**

The cumulative accuracy profile (CAP) plots how well a scorecard ranks bad accounts; the accuracy ratio (AR) is a single summary statistic — closer to 1 is a better-discriminating model.

###### **Mortgage underwriting variables**

FICO score, loan-to-value (LTV), debt-to-income (DTI), payment type, documentation type. **Cutoff scores** are the pass/fail thresholds that determine approval and pricing.

###### **Risk-based pricing (RBP)**

Charge higher-risk customers more, lower-risk customers less, calibrated against key performance metrics at each risk band to balance risk against profitability across the customer relationship cycle (market → screen → manage → cross-sell).

###### **TRAP**

Don't confuse retail's "small exposures, minimal single-default impact" with "low risk overall" — the dark-side scenario is precisely about correlated, portfolio-wide deterioration, which retail portfolios are not immune to.

###### **S TUDY SESSION 4 · READING 24**

#### **Country Risk: Determinants, Measures, and Implications**

##### **The story**

R24 closes Session 4 by scaling the "borrower" from a firm up to an entire country. Sources of country risk: stage of economic life cycle, political risk (corruption, violence, expropriation risk, continuity of risk), legal-system quality, and overreliance on a single commodity/export.

###### **Foreign currency default vs. local currency default**

Foreign currency defaults are intuitive: the country literally can't print dollars/euros to pay foreign debt. Local currency defaults are less obvious — a country _can_ print its own currency, so why default? Three reasons: (1) pre-1971 gold standard constrained money printing, (2) shared currencies (euro) strip out independent monetary policy, (3) sometimes the inflation cost of debasement is judged worse than the cost of default outright.

###### **Consequences of sovereign default (memorize the rough magnitudes)**

- GDP growth falls 0.5%–2.0%

- Borrowing costs rise 0.5%–1.0%

- Bilateral trade can drop ~8% (trade retaliation)

-

- ~14% probability of a banking crisis following sovereign default

-

- Frequent political leadership turnover

###### **TRAP**

Composite country-risk scores from different providers (PRS, Euromoney, World Bank) are _not standardized against each other_ — they're best used as internal rankings, not as cross-provider comparisons or as a precise cardinal measure of risk.

##### S T U D Y S E S S I O N 5 O F 6

## **Credit Risk Estimation**

This is the quant heart of the book — six readings, almost all formula-dense, that build a single connected machine: estimate a default probability (R25) → turn portfolios of default probabilities into a VaR number (R26, R27) → apply that machinery to structured/tranched products (R28) → extend it to derivatives counterparty risk (R29) → price the credit derivatives that hedge or speculate on all of it (R30). Hazard rates, the Gaussian copula, and the CDS spread formula are the three tools that keep reappearing — learn them once here and you'll recognize them in Session 6's CVA and securitization readings too.

25 Estimating Default Probabilities · 26 Credit Value at Risk · 27 Portfolio Credit Risk · 28 Structured Credit Risk · 29 Credit Risk (Derivatives) · 30 Credit Derivatives

###### **S TUDY SESSION 5 · READING 25**

#### **Estimating Default Probabilities**

_Hull, Risk Management and Financial Institutions, Ch. 17_

##### **The story**

This is arguably the single most important reading in Book 2 — it's the toolbox every later quant reading draws from: Altman's Z-score, rating migration matrices, hazard rates, CDS mechanics and spreads, the CDS-bond basis, real-world vs. risk-neutral PDs, and a sharper version of the Merton model. Budget real time here.

###### **Altman's Z-score (LDA in action)**

###### **Z-SCORE FOR PUBLIC MANUFACTURERS**

Z = 1.2X + 1.4X + 3.3X + 0.6X + 0.999X 1 2 3 4 5

X1=WC/TA, X2=RE/TA, X3=EBIT/TA, X4=MV equity/BV liabilities, X5=Sales/TA. Z>3: no default likely · 2.7–3: potential default · 1.8–2.7: reasonable probability of default · <1.8: high likelihood of default.

###### **Rating migration matrices → cumulative & marginal PD**

Cumulative PD is read straight off the matrix (e.g. AA-rated: 0.02% by Yr1, 0.06% by Yr2, 0.11% by Yr3). Marginal PD in year t = cumulative(t) − cumulative(t−1). Investment-grade marginal PD tends to _rise_ in the early years (stable-looking issuers can deteriorate); low-grade (junk) marginal PD tends to _fall_ after the early years (survivors of the risky early period are self-selected as sturdier).

###### **Hazard rate (default intensity)**

###### **CONSTANT HAZARD RATE Λ**

PD by time t: Q(t) = 1 − e<sup>−λt</sup>

###### **APPROXIMATE HAZARD RATE FROM CREDIT SPREAD (BOND NEAR PAR)**

λ ≈ s(T) / (1 − RR)    where s(T) = credit spread (annual expected loss)

###### **WORKED EXAMPLE**

3/5/10-yr CDS spreads = 80/90/110bps, RR=65%. → avg hazard(3yr)=2.29%, avg hazard(5yr)=2.57%, avg hazard(10yr)=3.14%. Forward hazard rate between Yr3– 5: [(5×2.57%)−(3×2.29%)]/2 = **2.99%** .

A more precise hazard-rate calc (for bonds priced away from par) compares the price of a risk-free bond to the risky bond; the price gap is the PV of expected loss, which is set equal to Σ(discounted LGD × Q) and solved for Q.

###### **Recovery rates**

Recovery rate = trading price (as % of face) roughly one month after default. Senior debt recovers more than subordinated. **Recovery rate is negatively correlated with default rate** — weak economies produce both more defaults _and_ lower recoveries on those defaults (a double-whammy that shows up again in R28's tranche analysis).

###### **CDS mechanics**

Protection buyer pays a periodic spread (quarterly, in arrears, standard dates Mar/Jun/Sep/Dec 20) until maturity or credit event. On default: physical settlement swaps par for bonds (protection buyer delivers the **cheapest-to-deliver** , or CTD, bond among eligible obligations); cash settlement pays par minus the CTD's post-default price. Standardized coupon = 100bps for investment grade; the gap between the fair spread and the fixed coupon is settled as an **up-front premium** .

**UP-FRONT PREMIUM RULE**

CDS spread > fixed coupon → buyer pays seller PV(spread−coupon) up front. CDS spread < fixed coupon → seller pays buyer PV(spread−coupon) up front.

###### **CDS spread vs. bond yield spread — the arbitrage logic**

###### **CDS-BOND BASIS**

CDS-bond basis = CDS spread − bond yield spread  (should ≈ 0)

If CDS spread < bond yield spread: buy the bond + buy CDS protection → earn more than risk-free. If CDS spread > bond yield spread: sell the bond + sell CDS protection → borrow below risk-free.

###### **TRAP**

Basis can be nonzero in practice for very specific reasons: bonds trading away from par, CDS counterparty risk, the CTD option (positive basis), CDS excluding accrued interest (negative basis), and restructuring clauses (positive basis). The exam sometimes asks you to identify _which direction_ a specific friction pushes the basis — know the list, not just that "frictions exist."

###### **Real-world vs. risk-neutral PD**

Risk-neutral PD assumes assets grow at the risk-free rate; real-world PD assumes assets grow at risk-free + risk premium (so real-world asset values are higher → real-world PD is _lower_ than risk-neutral PD, for the same debt level). **Use risk-neutral PDs for valuation/pricing; use real-world PDs for scenario analysis.** Bond-implied (risk-neutral) hazard rates run far above historical (real-world) hazard rates — the gap is compensation for systematic risk, illiquidity, and unsystematic risk that can't be fully diversified in a bond book.

###### **Merton model — precise numeric version**

###### **SETUP**

ET = max(VT − D, 0); solve simultaneously: E0 = Black-Scholes call on V0, and σEE0 = N(d1)σVV0

###### **WORKED EXAMPLE**

E0=$3M, σE=80%, D=$10M, T=1yr, r=5% → solving gives V0=$12.40M, σV=21.23%, N(d1)=0.9117, N(d2)=0.873. Risk-neutral PD = N(−d2) = **12.7%** . Distance to default d2 = 1.1408. Expected loss on debt = (9.51−9.40)/9.51 = **1.2%** of no-default value.

###### **THREAD**

_The hazard-rate formula λ≈s/(1−RR) is the direct ancestor of R30's full CDS-spread valuation and R37's CVA formula. The risk-neutral-vs-real-world PD distinction resurfaces explicitly in R29's guidance table and implicitly every time a later reading asks you to choose which PD estimate to plug into a pricing vs. a stress-testing formula._

**S TUDY SESSION 5 · READING 26**

#### **Credit Value at Risk**

_Malz, Financial Risk Management, Ch. 8, Sections 8.1–8.3_

##### **The story**

Credit VaR asks the market-risk-VaR question ("how bad can losses get at confidence X?") but for credit losses — and the mechanics are genuinely different: a 1- year horizon instead of 1-day, and heavier modeling machinery instead of simple historical simulation, because credit losses are lumpy and rare rather than smoothly distributed daily moves. This reading is a survey of the four main modeling families you'll see fight it out across the rest of the book: Vasicek, CreditRisk+, CreditMetrics, and the correlation (Gaussian copula) model.

###### **Market VaR vs. Credit VaR**

||**Market VaR**|**Credit VaR**|
|---|---|---|
|Horizon|1 day|1 year|
|Main tool|Historical simulation|Elaborate models (transition matrices, copulas)|

###### **Rating transition matrices — multi-period math**

Extend a 1-year matrix to N years by raising it to the N-th power (matrix multiplication, but for a single diagonal entry it's just that probability raised to the N). For periods under 1 year, take the fractional root (e.g. 3 months = 4th root of the 1-year probability). Longer horizons → lower odds of keeping the same rating; shorter horizons → higher odds. Caveat: this assumes independence across periods, but **rating momentum** (a recent downgrade raises the odds of another) violates that assumption in reality.

###### **Vasicek's Gaussian copula model (also the Basel IRB engine)**

###### **WORST-CASE DEFAULT RATE**

###### WCDR(T,X) = N[ (N<sup>−1</sup> (PD) + √ρ·N<sup>−1</sup> (X)) / √(1−ρ) ]

ρ (credit correlation) is proxied by the correlation between firms' ROA/ROE. Limitation: no tail correlation (correlation is assumed constant, but real defaults cluster more violently in the tail than a constant-ρ model predicts).

###### **CreditRisk+ (Credit Suisse)**

Independent-default binomial → Poisson approximation (small PD, many loans) → if the expected number of defaults itself follows a gamma distribution, the Poisson becomes a **negative binomial** . As uncertainty (σ) about the default rate rises, the chance of many simultaneous defaults rises and the loss distribution becomes positively skewed (vs. symmetric under low/no correlation).

###### **CreditMetrics (JPMorgan)**

Unlike Vasicek/CreditRisk+, CreditMetrics captures **both defaults and downgrades** via Monte Carlo simulation over a rating transition matrix. Each trial: simulate year-end rating → if default, loss = EAD×LGD; if no default, loss = mark-to-market change using the credit-spread term structure for the new rating.

###### **Correlation model**

Rating changes for different firms are linked via a Gaussian copula, with the copula correlation set equal to the firms' equity return correlation — this is the direct bridge to R27's and R29's single-factor/copula machinery.

###### **Credit spread risk & rebalancing strategy**

**Constant level of risk** (sell downgraded bonds, replace with same-rated new ones) produces _smaller_ credit VaR than **buy-and-hold** (ride out the downgrade), because buy-and-hold fully absorbs big downgrade/default losses instead of continuously refreshing back to the target rating.

**TRAP**

Vasicek and CreditRisk+ capture _defaults only_ ; CreditMetrics captures _defaults and downgrades_ . When a question asks "which model would you use if you also care about migration risk, not just default," the answer is CreditMetrics.

###### **S TUDY SESSION 5 · READING 27**

#### **Portfolio Credit Risk**

_Malz, Financial Risk Management, Ch. 9_

##### **The story**

R27 is where the single-factor model gets built from scratch — the same model underlying Vasicek (R26), the CDO copula pricing in R30, and the Gaussian copula in R29. The intuition to hold onto throughout: default correlation doesn't change the _expected_ loss of a portfolio, but it massively changes the _shape_ of the loss distribution — specifically the fat tail that credit VaR is trying to measure.

###### **Default correlation for a two-firm portfolio**

###### **DEFAULT CORRELATION**

ρ12 = (π12 − π1π2) / √[π1(1−π1)·π2(1−π2)]

Drawbacks of the full correlation-based framework: explodes combinatorially (2<sup>n</sup> outcomes, n(n−1)/2 pairwise correlations — 10 firms = 1,024 outcomes, 45 pairs), doesn't fit option-like credit positions (guarantees, revolvers, convertibles), and defaults are rare so correlation estimates are noisy (typical assumed value ≈ 0.05).

###### **Credit VaR at the correlation extremes (build intuition here first)**

###### **Ρ=1: ACTS LIKE ONE CREDIT**

$1,000,000 portfolio, n credits, PD=2%, RR=0%. At 95% confidence: 98% chance of $0 loss, 2% chance of total $1,000,000 loss. EL=$20,000. Credit VaR (95%) = quantile − EL = 0 − 20,000 = **−$20,000** (interpreted as $0 credit VaR at 95% since loss doesn't exceed EL at that confidence; at 99% VaR = $1,000,000− $20,000= **$980,000** ).

###### **Ρ=0, N=50: BINOMIAL, GRANULARITY KICKS IN**

95th percentile of defaults (Binomial(50, 0.02)) = 3 → credit loss = 3×$20,000=$60,000. Credit VaR(95%) = 60,000−20,000 = **$40,000** .

###### **Ρ=0, N=1,000: MORE GRANULAR → VAR SHRINKS FURTHER**

95th percentile defaults = 28 → loss = $28,000. Credit VaR(95%) = 28,000−20,000 = **$8,000** .

**Granularity effect:** more (smaller) credits → lower credit VaR, because the law of large numbers pulls realized loss toward expected loss. This effect is weaker when PD itself is very low.

###### **The single-factor model**

###### **ASSET RETURN**

ai = βim + √(1−βi²)·εi    default if ai ≤ ki

Key property: **conditional independence** — once the market factor m is realized, defaults across firms are independent (all the correlation lives in the shared exposure to m). Conditional on m, the default distribution is Normal with mean βim and standard deviation √(1−βi²) — less than the unconditional SD of 1.

###### **PAIRWISE DEFAULT CORRELATION (EQUAL PARAMETERS ACROSS FIRMS)**

ρdefault = [N2(k,k,β²) − π²] / [π(1−π)]

###### **REALIZED MARKET VALUE FOR A TARGET LOSS LEVEL**

β=0.25, confidence=99% → default threshold z=−2.33. Realized market factor = (k − √(1−β²)·z) / β = **−0.296** (worked via the conditioning relationship).

###### **Credit VaR by simulation (copula method, 4 steps)**

(1) Define the copula function (usually normal/Gaussian) → (2) simulate default times → (3) get portfolio P&L per scenario → (4) aggregate into a loss distribution and read off the VaR quantile.

###### **TRAP**

Granularity reduces credit VaR by shrinking idiosyncratic noise, but it does _not_ reduce systematic (correlation-driven) risk — a highly granular portfolio with high pairwise correlation can still have large credit VaR. Don't let "more loans = automatically safer" become your default assumption on the exam.

###### **THREAD**

_This single-factor model, unchanged, is exactly what R28 uses to explain tranche behavior and exactly what R30 uses (via the one-factor Gaussian copula) to price synthetic CDO tranches. If the algebra here feels solid, R28 and R30 become mostly relabeling._

###### **S TUDY SESSION 5 · READING 28**

#### **Structured Credit Risk**

_Malz, Financial Risk Management, Ch. 9_

##### **The story**

R28 applies R27's single-factor machinery to tranched products. The single most-tested idea in this reading is a 2×2 grid: how default **probability** and default **correlation** separately affect each tranche's mean value and its tail risk (credit VaR) — and the two factors move tranches in _opposite_ directions for correlation but the _same_ direction for probability. Get this grid cold.

###### **Capital structure of a securitization**

Senior (largest, safest, lowest coupon) → mezzanine/junior (absorbs losses after equity is wiped out, higher coupon) → equity/first-loss (smallest, absorbs first losses, residual/variable return, usually thin). Credit enhancement: internal (overcollateralization, excess spread) or external (monoline wraps/insurance).

###### **Waterfall mechanics (worked)**

###### **WATERFALL EXAMPLE**

1,000 loans × $1M, rate = reference+300bps, senior/junior/equity = 80/15/5%, spreads 1%/5%, OC trigger cap = $15M equity.

At 0% default, reference=5%: pool cash flow = $1B×8%=$80M. Senior coupon=$800M×6%=$48M. Junior coupon=$150M×10%=$15M. Residual=$80M−$48M− $15M=$17M → equity capped at $15M, **$2M diverts to trust** .

At 4% default: pool cash flow=$1B×8%×(1−0.04)=$76.8M. Senior+junior still paid in full ($63M). Residual=$13.8M < $15M cap → **equity gets $13.8M, nothing diverts to trust.**

###### **Key participants and their conflicts**

Originator → underwriter (structures & markets the deal, warehouses collateral risk) → credit rating agencies (set attachment points — conflict: paid by the issuer, wants bigger issuance) → servicer (collects/distributes cash, resolves defaults — conflict: delaying foreclosure extends fee income against investors' interest) → manager (if actively managed — often bears first loss to align incentives) → custodian/trustee (administrative, least conflicted).

###### **The core comparative-statics grid**

|**Change**|**Effect on senior**|**Effect on mezzanine**|**Effect on equity**|
|---|---|---|---|
|↑ default probability (ρ fixed)|Value ↓, VaR ↑|Mixed|Value ↓, VaR ↓ (less variation)|
|↑ default correlation (PD fixed)|Value ↓, VaR ↑|Mixed (behaves like senior at low PD, like equity at high PD)|Value ↑, VaR ↑|

Why correlation helps equity: low correlation → defaults cluster near their expectation (predictable, so equity is reliably wiped out a little); high correlation → outcomes polarize toward "almost no defaults" or "mass defaults," and the "almost no defaults" scenarios are pure upside for the first-loss piece.

Convexity: equity shows positive convexity (thin tranche, so early default-rate increases hurt fast then taper); senior shows negative convexity (mirror image); mezzanine flips sign depending on default-rate regime.

###### **Default '01 and other structural risks**

Default sensitivities are always positive (all tranches hurt by more defaults) and largest when losses are close to a tranche's attachment point (like high option gamma at-the-money). Other risk factors: systematic risk (can't be diversified away even with a well-spread pool), tranche thinness (equity/mezzanine 95% and 99% VaR are close together — once you're hit, the hit is severe), and loan granularity (fewer, bigger loans → more tail risk at the loan level, same idea as R27).

###### **Implied correlation**

Directly analogous to Black-Scholes implied volatility: back out the ρ that makes the model tranche price match the observed market price. **Compound (tranche) correlation** shows a "smile" (high for junior, dips, rises again for senior); **base correlation** shows a "skew" (rises monotonically with seniority). Either pattern existing at all is evidence the one-factor Gaussian model is imperfect — under a perfectly correct model, implied correlation would be flat across tranches.

**TRAP**

Rising default correlation is _bad_ for senior tranches and _good_ for equity tranches — the opposite of what "correlation = more risk = bad for everyone" intuition suggests. This asymmetry, and the mixed mezzanine case, is the single most heavily tested concept in R28.

**S TUDY SESSION 5 · READING 29**

#### **Credit Risk (in Derivatives)**

_Hull, Risk Management and Financial Institutions, Ch. 25_

##### **The story**

R29 is a bridge reading: it recaps R25's default-probability toolkit, then introduces **CVA/DVA** for the first time (fully developed later in R37) and the **Gaussian copula** for the first time in its one-factor form (building directly on R27). If R37 feels overwhelming later, it's because R29 rushed through the same ideas — come back to this reading's CVA section as a running start.

###### **Recap: hazard rate, unconditional vs. conditional PD**

Using Moody's data: for a B-rated bond, unconditional Yr4 default = 4.484%, survival through Yr3 = 86.485%, conditional Yr4 default = 4.484%/86.485% = **5.185%** . Average hazard rate from spread: λ = s(T)/(1−RR).

###### **ISDA Master Agreement & default mechanics**

Two loss scenarios for the non-defaulting party: (1) its exposure is positive and exceeds posted collateral → becomes an unsecured creditor for the shortfall; (2) the defaulting party's exposure is positive but less than collateral posted to it → non-defaulting party is owed the return of excess collateral.

###### **CVA and DVA — first appearance**

###### **DEFINITIONS**

CVA = PV(expected cost to the bank if counterparty defaults) DVA = PV(expected cost to the counterparty if the bank itself defaults) — a _benefit_ to the bank's own book value f = f − CVA + DVA nd

###### **VALUE INCLUDING DEFAULT RISK**

**Wrong-way risk** : PD positively correlated with exposure (bad). **Right-way risk** : PD negatively correlated with exposure (good). A new transaction positively correlated with the existing book raises both CVA and DVA; negatively correlated lowers both.

###### **Credit risk mitigants**

**Netting** example: exposures of +5, −7, +10, −2 (millions) → gross exposure = 5+10=$15M, netted exposure = 5−7+10−2= **$6M** . **Collateral agreements** and **downgrade triggers** (closeout or extra collateral if the counterparty's rating falls below a threshold) round out the toolkit.

**SINGLE UNCOLLATERALIZED DERIVATIVE — NO SIMULATION NEEDED** f = fnd × e<sup>−(credit spread)×T</sup> (discount the no-default value by the counterparty's credit spread, if DVA=0)

###### **Default correlation models: reduced-form vs. structural**

||**Reduced-form**|**Structural (Merton-style)**|
|---|---|---|
|Speed|Fast, simple|Slow, computationally intensive|
|Achievable correlation|Low (hard to get two firms defaulting in the same narrow window)|Can be set arbitrarily high|
|Captures econ. cycle|Yes (hazard rates tied to macro variables)|Less directly|

###### **One-factor Gaussian copula — time-to-default version**

Transforms non-normal times-to-default into standard normal variables via each firm's own marginal default distribution; the joint (bivariate normal) structure is the "copula." Correlation here is called the **copula correlation** .

###### **CREDIT VAR VIA COPULA**

V(T,X) = N[ (N<sup>−1</sup> (Q(T)) + √ρ·N<sup>−1</sup> (X)) / √(1−ρ) ]  —  Credit VaR = L × (1−RR) × V(T,X)

###### **TRAP**

This V(T,X) formula is _identical in structure_ to Vasicek's WCDR formula from R26 — same equation, different reading's notation. If you memorize one, you've memorized both; don't waste study time treating them as separate formulas.

###### **S TUDY SESSION 5 · READING 30**

#### **Credit Derivatives**

_Gregory, The xVA Challenge, Ch. 2_

##### **The story**

R30 closes Session 5 by putting a precise price on the CDS spread you've been treating as a given input since R25. This is the most calculation-heavy reading in the book after R25/R28 — walk through the PV-of-payments = PV-of-payoff logic slowly, because everything else (binary CDS, credit indices, up-front premiums, synthetic CDOs) is a variation on this one balance equation.

###### **CDS spread — the core balance equation**

Set PV(expected premium payments + accrual) = PV(expected payoff) and solve for spread s.

###### **WORKED EXAMPLE (3-YR CDS, Λ=3%, RR=35%, R=4%, ANNUAL SETTLEMENT, DEFAULT MID-YEAR)**

Survival probs: Yr1=97.045%, Yr2=94.176%, Yr3=91.393%. PV(expected payments)=2.6123s. PV(expected accrual)=0.0406s. Total PV(payments)=2.6529s. PV(expected payoff, RR=35%) computed from mid-year default probabilities & discount factors. Solving PV(payments)=PV(payoff) → **s = 1.99%** .

###### **Risk-neutral PD implied by market spread**

The PD used is not the "true" PD — it's whatever hazard rate makes the model spread match the quoted market spread (solved by iteration/Solver). Convenient result: the recovery rate assumption barely matters for matching a given market spread, because RN PD ≈ proportional to 1/(1−RR) — a higher assumed RR just implies a correspondingly higher RN PD, netting out.

###### **Marking CDS to market**

###### **MTM TO PROTECTION SELLER**

MtM = PV(expected payments at original spread) − PV(expected payoff at current market parameters)

If the spread has widened since inception, the protection buyer gains and the seller loses (protection is now worth more).

###### **Binary CDS**

Pays full notional on default regardless of recovery (RR effectively = 0% in the payoff calc only). Because the payoff side is bigger (no recovery offset), a binary CDS spread is always _higher_ than the equivalent vanilla CDS spread (e.g., 3.06% binary vs. 1.99% vanilla in the worked example above).

###### **Credit indices (CDX NA IG, iTraxx Europe)**

125 equally-weighted investment-grade names. On one default: contract continues with 124 names, protection seller pays (1−RR)×notional for that name, and the ongoing annual payment shrinks proportionally (divide by 125, subtract). Updated twice a year to roll out fallen angels.

###### **Fixed coupons & up-front payments (standardized contracts)**

###### **UP-FRONT PAYMENT**

Up-front = (spread − fixed coupon) × duration × notional

###### **WORKED EXAMPLE**

Fixed coupon=100bps, market spread=65bps, duration=4.125, notional=$100,000. Price > 100 (since coupon > spread) → **protection seller pays buyer** the up-front difference.

###### **CDS forwards & options**

Forwards: lock a spread for a CDS starting later; ceases if the reference entity defaults before start. Options: pay a premium for the right (not obligation) to enter at a strike spread — forwards at market rates require no premium, options always do.

###### **Total return swaps (TRS) vs. CDS**

TRS pays the total return (price change + coupons) of a bond in exchange for a floating rate — hedges _both_ credit risk and interest-rate risk (unlike a pure CDS), and functions as a financing tool (synthetic leverage on the bond).

###### **Synthetic CDOs and tranche spreads**

###### **WORKED EXAMPLE**

$100M notional, 25 bonds × $4M each, avg CDS spread=2% → annual spread income=$2M. Equity (5%, $5M): absorbs first 5% of losses, earns 10%/yr ($0.5M). Mezzanine (20%, $20M): absorbs losses 5%–25%, earns 5.625%/yr ($1.125M). Senior (75%, $75M): absorbs losses >25%, earns 0.5%/yr ($0.375M).

###### **BREAKEVEN SPREAD**

s × (A + B) = C  —  A = PV(notional outstanding over life), B = PV(final accrual on losses), C = PV(expected credit losses)

One-factor Gaussian copula approach: assumes homogeneous default-time distribution Q(t) across the pool and a single constant pairwise correlation ρ; conditional PD given the common factor F is used with the binomial distribution to get the probability of exactly k defaults out of n by time t.

###### **Implied correlation (recap from R28, now with vocabulary)**

**Compound (tranche) correlation** : iterative search matching one tranche's model spread to its market spread — shows a "correlation smile." **Base correlation** : cumulative, built from compound correlations — shows a "correlation skew," rising with seniority. Either pattern is a symptom that the one-factor model doesn't perfectly fit the market.

Alternatives to the one-factor Gaussian copula: heterogeneous models (different default-time distributions per name), other copulas (Student's t, Archimedean, Clayton, Marshall-Olkin), random recovery rates, implied copula models, and dynamic (structural/reduced-form) models.

###### **TRAP**

At inception, synthetic CDO tranches are priced to earn a spread _consistent with their seniority_ , not an equal spread across tranches — equity earns far more per dollar of notional than senior, which reflects its much higher expected loss, not an arbitrage.

##### S T U D Y S E S S I O N 6 O F 6

## **Counterparty Risk Management**

The longest session (9 readings) and the most operationally detailed. It takes the credit-risk machinery from Session 5 and asks: specifically for _derivatives_ counterparties, how do you reduce exposure (netting, collateral, central clearing: R31–35), how do you measure exposure precisely over time (R36), how do you turn that exposure into a single price (CVA: R37), how do you stress it (R38), and finally — a bit of a standalone topic — how does securitization actually work mechanically (R39). R36→R37 is the tightest and most important sequence: exposure profiles feed directly into the CVA formula.

31 Derivatives · 32 Counterparty Risk and Beyond · 33 Netting, Close-Out · 34 Margin (Collateral) and Settlement · 35 Central Clearing · 36 Future Value and Exposure · 37 CVA · 38 Stress Testing Counterparty Exposures · 39 Introduction to Securitization

###### **S TUDY SESSION 6 · READING 31**

#### **Derivatives**

_Gregory, The xVA Challenge, Ch. 2_

##### **The story**

R31 opens Session 6 by re-grounding counterparty risk in derivatives specifically: it's a hybrid of market risk (the value swings) and credit risk (the chance the other side doesn't pay), and it can be managed either bilaterally or through a central counterparty (CCP) — the fork in the road that R32–35 will walk down both branches of.

###### **Exchange-traded vs. OTC**

||**Exchange-traded**|**OTC**|
|---|---|---|
|Terms|Standardized|Customized|
|Clearing|Central, margined|Bilateral (or centrally cleared by choice)|
|Unwind flexibility|Easy|Can be difficult/costly|

###### **Market participant tiers**

Large players (global banks, huge diversified books) · medium players (regional banks, narrower product range) · end users (corporates/sovereigns, narrow hedging need, **often don't post collateral** and therefore carry outsized counterparty risk relative to their trade size).

###### **ISDA Master Agreement**

Governs bilateral OTC trades: collateral terms, default/termination events, netting, and the close-out process — the legal chassis that every later reading in this session (33, 34) elaborates on piece by piece.

###### **S TUDY SESSION 6 · READING 32**

#### **Counterparty Risk and Beyond**

##### **The story**

The key distinction R32 wants you to internalize: counterparty risk is **bilateral** and its future value is **highly uncertain** (either side could end up owing the other, and by how much depends on where the market moves) — unlike lending risk, which is unilateral and reasonably certain (you know roughly what you're owed). This uncertainty is exactly why derivatives credit risk needs its own exposure-modeling machinery (R36) instead of just reusing loan EAD.

###### **Where counterparty risk shows up**

Securities financing (repo, securities lending) and OTC derivatives (swaps, FX forwards, CDS).

###### **CVA and credit limits are complementary, not substitutes**

CVA prices counterparty risk at the trade and counterparty level; credit limits cap it at the portfolio level. A trade can pass a CVA charge and still be blocked by breaching an aggregate limit, and vice versa.

###### **Mitigation toolkit (preview of R33–35)**

Trade only high-quality counterparties · cross-product netting · close-out · collateralization · walkaway features · diversification · exchanges/CCPs.

###### **S TUDY SESSION 6 · READING 33**

#### **Netting, Close-Out, and Related Aspects**

##### **The story**

Netting is the single biggest lever for reducing bilateral counterparty exposure, and R33 formalizes it: instead of summing only the positive-value trades against a defaulting counterparty, you sum _all_ trades (positive and negative) into one net figure. This only helps if trades can have negative MtM — a portfolio of only long option positions (always ≥ 0 in value) gets no netting benefit at all.

###### **Payment netting vs. close-out netting**

Payment netting: combine cash flows from different contracts into a single net payment. Close-out netting: on default, net _all_ contract values with that counterparty into one termination amount. Bilateral netting (2 parties) vs. multilateral netting (many parties, usually via a central hub like a CCP).

###### **Other risk-reduction mechanics**

**Walkaway clauses** let a non-defaulting party walk away from its own liabilities to a defaulter while still claiming what it's owed (asymmetric, controversial). **Trade compression** cancels offsetting trades and replaces them with fewer trades, cutting gross exposure while preserving net exposure. **Termination events/ break clauses** let a party exit before a counterparty actually goes bankrupt, at replacement value.

###### **S TUDY SESSION 6 · READING 34**

#### **Margin (Collateral) and Settlement**

_Gregory, The xVA Challenge, Ch. 7_

##### **The story**

If netting (R33) shrinks exposure by combining trades, collateral shrinks exposure by actually posting assets against it. R34 is the legal and mechanical detail of how that posting works — the Credit Support Annex (CSA) is the contract that governs it, and its parameters (threshold, minimum transfer amount, initial margin) are exactly the levers that reappear quantitatively in R36 and R37 when exposure and CVA get calculated.

###### **Credit Support Annex (CSA) — the collateral rulebook**

Defines what can be posted, how it's valued, when it moves, and what happens on trigger events. Key parameters: threshold, minimum transfer amount, initial margin.

**CREDIT SUPPORT AMOUNT (VARIATION MARGIN)**

Credit support amount = Exposure − Threshold  (collateral is called if positive, up to the threshold; a negative result means posting is required)

###### **Roles & collateral types**

**Valuation agent** : calls for collateral, handles all the exposure/market-value/credit-support-amount calculations. Collateral types: cash (most common), government/agency securities, MBS, corporate bonds/CP, letters of credit, equity.

###### **Collateral disputes**

Arise from valuation differences, market-data timing mismatches, netting-rule disagreements, or disputes over previously-posted collateral. Resolution: notify by end of next business day → transfer undisputed amounts → for unresolved amounts, request independent third-party quotes.

###### **S TUDY SESSION 6 · READING 35**

#### **Central Clearing**

##### **The story**

R35 is the "third path" alongside bilateral netting (R33) and bilateral collateral (R34): instead of managing risk trade-by-trade with each counterparty, insert a central counterparty (CCP) that becomes the buyer to every seller and the seller to every buyer, achieving **multilateral** netting across the whole market instead of just bilateral netting between two names.

###### **Novation & loss mutualization**

**Novation** : on a member's default, the CCP closes out the nonperforming side and substitutes itself (or a replacement) as the new counterparty — original counterparties no longer face each other directly. If losses exceed the defaulter's own margin and default-fund contribution, the CCP draws on its own capital and then non-defaulting members' default-fund contributions — **loss mutualization** spreads the hit across the whole membership rather than concentrating it.

###### **Initial margin vs. variation margin**

||**Initial margin**|**Variation margin**|
|---|---|---|
|Purpose|Cover worst-case future default losses|True up daily price changes|
|Driven by|Market risk (not credit quality)|Daily (or intraday) mark-to-market moves|
|Typical form|Cash + highly liquid govt securities|Cash only|

###### **Compression vs. netting**

Portfolio compression cancels real offsetting trades outright (fewer contracts, same net exposure, lower gross exposure) rather than relying on the netting _calculation_ alone — a physical reduction, not just an accounting one.

###### **THREAD**

_Everything in R31–35 — netting, collateral parameters, CCP margin — becomes numerical input in R36 (exposure profiles) and R37 (CVA formula terms). If a term here feels abstract, hold on: it gets a formula attached to it two readings later._

###### **S TUDY SESSION 6 · READING 36**

#### **Future Value and Exposure**

_Gregory, The xVA Challenge, Ch. 17_

##### **The story**

R36 builds the exposure vocabulary that R37's CVA formula plugs directly into — treat this as "R37's input data." The core distinction: **expected exposure** (average of the potential-loss part of the value distribution) vs. **potential future exposure** (a high-confidence worst case at one point in time). Get the shape of exposure profiles for different product types memorized — it's tested visually and verbally, not just numerically.

###### **The exposure metric family**

|**Metric**|**Meaning**|
|---|---|
|Expected MtM|Expected value of the transaction at a future date (can be negative)|
|Expected exposure (EE)|Expected loss if MtM is positive AND counterparty defaults (only the positive part counts)|
|Potential future exposure (PFE)|High-confidence worst-case MtM at a specific future date|
|Expected positive exposure (EPE)|Average of EE across time — a single summary number|
|Expected negative exposure (ENE)|Mirror of EPE from the counterparty's perspective|
|Effective EE / EPE|Non-decreasing EE (captures rollover risk on sub-1-year trades) / its average|

###### **Credit exposure vs. VaR — three extra considerations**

**Application** : exposure is used for both pricing and risk management (VaR is risk management only). **Time horizon** : exposure spans many future dates (drift, vol, co-dependence all matter); VaR's short horizon lets you ignore them. **Risk mitigants** : netting and (especially future, uncertain) collateral must be modeled into exposure in a way VaR doesn't need to worry about.

###### **Exposure profile shapes by product (know these silhouettes)**

|**Product**|**Shape**|**Why**|
|---|---|---|
|Bonds/loans/repos|≈ flat at notional|PFE tracks the notional almost 1:1|
|Interest rate swaps|Peaked (hump)|Balances rising rate uncertainty against shrinking remaining cash flows (roll-off)|
|FX / cross-currency swaps|Monotonically increasing|High FX vol + large final notional exchange dominates|
|Long options|Rising until exercise|Time value + potential to move deep ITM|
|Long-protection CDS|Rises then jumps to (1−RR) at a credit event|Spread widening pre-default, then the default payoff itself|

Payment frequency: receiving more often than paying reduces exposure (cash comes in faster than it's owed out). Exercise dates: a swaption has higher exposure than the equivalent forward swap _before_ the exercise date, but lower exposure _after_ (the forward swap doesn't get the option to walk away from a negative-value state).

###### **Netting factor formula**

**NETTING FACTOR FOR N EXPOSURES, COMMON CORRELATION Ρ**

Netting factor = √[ (1 + (n−1)ρ) / n ]

ρ=1 → factor=100% (no benefit). ρ=0, n=2 → factor=71%. ρ=0, n=4 → factor=50%. More exposures + lower correlation = bigger netting benefit. Perfect negative correlation gives the maximum benefit (trades fully offset).

###### **Margin period of risk (MPoR) — the five steps**

(1) Valuation/margin call → (2) receiving collateral → (3) settlement (cash: intraday; govt bonds: ~1 day; corporate bonds: ~3 days) → (4) grace period → (5) liquidation/close-out/re-hedge.

###### **EE AND PFE DURING THE MPOR**

EE(MPoR) = current exposure × √(MPoR days / 250) × volatility term  —  PFE(MPoR) = z-score(confidence) × volatility × √(MPoR/250)

###### **WORKED EXAMPLE**

7% annual vol, 10-day MPoR, 250 trading days, 99% confidence (z=2.33): PFE = 2.33 × 0.07 × √(10/250) = **3.27%** of notional.

###### **Collateral volatility & correlation with the trade**

σoverall = √(σcollateral² + σexposure²) **WITH CORRELATION Ρ** σoverall = √(σtrade² + σcollateral² − 2ρσtradeσcollateral)

###### **Collateral parameters that create residual exposure**

MPoR, threshold (uncollateralized band), minimum transfer amount, initial margin (reduces exposure), rounding. Collateral is **path-dependent** : today's required collateral depends on what was already posted.

###### **Funding exposure vs. credit exposure — five differences**

Defining value (subjective/close-out-dependent for credit, objective for funding) · MPoR (assumes default for credit; funding delay doesn't require default) · aggregation (credit nets by counterparty; funding can reuse margin across the whole portfolio) · wrong-way risk (a credit-only concept) · segregation (restricts reuse, affects both differently).

Collateral impact matrix: non-segregated cash and rehypothecatable securities help _both_ counterparty risk and funding cost (if haircuts are adequate); segregated collateral helps counterparty risk only (can't be reused); a counterparty's own bonds as collateral help funding but are nearly useless for counterparty risk mitigation (worthless exactly when needed — the collateral defaults with the counterparty).

###### **TRAP**

PFE analysis silently assumes a strongly collateralized position and ignores wrong-way risk, collateral-value uncertainty, and liquidity/liquidation risk — when a question asks for PFE's limitations, these specific omissions (not "it's just an estimate") are the tested answer.

###### **S TUDY SESSION 6 · READING 37**

#### **CVA**

_Siddique & Hasan, Ch. 4_

##### **The story**

This is the capstone quant reading of Session 6: it takes R36's exposure profiles and R25's default probabilities and multiplies them together into a single price for counterparty risk. Structurally, everything in this reading is a variation on one formula — CVA = −Σ(exposure × default probability × loss rate, discounted) — that gets extended for netting, collateral, bilateral risk (DVA), and running-spread form.

###### **The base CVA formula**

**CVA (NO WRONG-WAY RISK, NO NETTING, NO COLLATERAL)**

CVA = −(1−RR) × Σi EE(ti) × qi × DF(ti) qi = probability of default in interval i; negative sign because CVA is a cost

###### **CVA as a running spread**

*[image omitted]*

Assumptions behind the shortcut: EPE constant over the profile, PD constant over the profile, EE/PD symmetric over the profile.

###### **How credit spread & recovery assumptions move CVA**

↑ credit spread → ↑ CVA, but nonlinearly (PD is capped at 100%; right at default, CVA actually ticks down slightly, then hits zero in default itself). Curve shape: upward-sloping spread curve → lower CVA than flat or downward-sloping (front-loaded low risk). ↑ recovery rate → ↑ implied PD but _↓ CVA_ overall (less lossgiven-default dominates). A higher _actual_ recovery (vs. settled recovery) at the same settled assumption → lower CVA.

###### **Netting and collateral inside CVA**

Netting reduces CVA because it reduces exposure at settlement — evaluate the _change_ in CVA from a new trade, not just its standalone CVA, when deciding if it's worth doing. Collateral reduces CVA by shrinking EE (not by changing default probability). Minimum transfer amount and threshold _increase_ CVA (they create windows of uncollateralized exposure); a higher initial margin (a "negative threshold") _decreases_ CVA.

###### **MPOR SCALING (SQUARE-ROOT-OF-TIME)**

CVA(20-day MPoR) ≈ CVA(10-day MPoR) × √2  (bigger negative number)

At MPoR ≈ 40 days, collateralized CVA is roughly _half_ the uncollateralized CVA — a useful anchor number.

###### **Incremental CVA vs. marginal CVA — a frequently confused pair**

||**Incremental CVA**|**Marginal CVA**|
|---|---|---|
|Question<br>answered|What does adding THIS new trade change CVA by, given netting with the<br>existing book?|How much of the TOTAL netted CVA is attributable to each individual<br>trade?|
|Use case|Pricing a new trade|Understanding which existing trades drive the counterparty's CVA (ex-post<br>attribution)|
|Formula change|Substitute ΔEE (the incremental EE from the new trade)|Substitute marginal EE for each trade|

CVA with netting is never higher than CVA without netting (netting can't increase exposure). Netting benefit shrinks with transaction size — incremental CVA approaches standalone CVA as the new trade gets large relative to the existing book.

###### **Converting upfront CVA to a running spread**

###### **WORKED EXAMPLE**

5yr payer swap, notional=$100M, risky duration=3.75, standalone CVA=−$90,000 → spread = −90,000/(3.75×100,000,000) = **−2.40bps** (then solved recursively since adding the spread itself changes the contract value and thus the CVA).

###### **Bilateral CVA (BCVA) — both sides can default**

###### **BCVA (MIRROR-IMAGE CVA + DVA)**

BCVA = CVA(of counterparty) + DVA(of the institution, its "own CVA")

Implications: (1) BCVA can be _positive_ if DVA > CVA (the institution is riskier than its counterparty) — standalone unilateral CVA can only be negative; (2) BCVA is symmetric — if Party 1's BCVA is +X, Party 2's is −X; (3) netting can be a disadvantage under BCVA if the institution's own DVA dominates, since without netting the institution could selectively settle only its favorable (positive MtM) contracts; (4) in theory, if both sides agree on parameters, all market BCVAs net to zero.

###### **BCVA AS A SPREAD**

BCVA spread = −(counterparty spread × EPE) − (−institution spread × ENE)

###### **WORKED EXAMPLE**

EPE=5%, ENE=3%, counterparty spread=300bps, institution spread=200bps → BCVA = (−5%×300) − (−3%×200) = **−9bps** (net charge to the counterparty).

###### **Wrong-way risk (WWR) and right-way risk (RWR)**

WWR: exposure and PD positively correlated → ↑CVA, ↓DVA. RWR: negatively correlated → ↓CVA, ↑DVA. Counterintuitive fact: _higher_ credit quality actually amplifies WWR's impact, because a high-quality name defaulting is a rarer, more surprising (and often more correlated-with-catastrophe) event.

Classic worked scenarios: a long put option is WWR if exposure and counterparty PD both rise together (payoff grows exactly as the payer weakens); the 2007– 09 crisis is the textbook CDS WWR example (monoline insurers' own creditworthiness collapsed exactly as their CDS payout obligations spiked); a Japanese bank's FX swap to fund USD via JPY became WWR post-Lehman as JPY appreciation increased its exposure while U.S. counterparty credit quality simultaneously deteriorated.

###### **WWR modeling approaches**

|**Approach**|**Method**|**Weakness**|
|---|---|---|
|Hazard rate|Simulate credit spreads stochastically, compute conditional EPE given|Easiest, but tends to understate the true dependence → underestimates|
|(intensity)|default paths|WWR|
|Structural|Joint (bivariate) distribution of default time and exposure|Relies on a pre-existing exposure distribution that may not be relevant|
|Parametric|Direct historical link between portfolio value and credit spreads|Needs historical data that reflects the current regime|
|Jump|FX (or other) jump at default, sized by a residual-value factor (1−RV)|Best captures the "cliff" nature of sovereign/large-firm WWR events|

###### **Collateral and CCPs under WWR**

Gradually rising exposure → collateral helps (there's time to call for more). A sudden jump in exposure (e.g., a currency devaluation) → collateral can't be collected fast enough to help much. WWR collateral examples: a payer swap collateralized by a high-quality government bond (rates up → swap value up but bond value/margin down, same direction of pain); a firm posting its own bonds as collateral (the most direct case — worthless exactly when needed). CCPs are exposed to WWR through member margin and default-fund contributions; mitigation includes higher margin/default-fund requirements for high-credit-quality members and higher haircuts on risky posted collateral.

###### **TRAP**

Marginal CVA (trade-level attribution of an existing netted CVA) is frequently confused with incremental CVA (the effect of adding a brand-new trade). If the question says "which trades are driving this counterparty's CVA," that's marginal; if it says "should we do this new trade," that's incremental.

###### **THREAD**

_Everything quantitative in R36 (EE, EPE, ENE, netting factor, MPoR) is the direct input set to this reading's CVA formula — if the numbers in a CVA question don't make sense, the missing piece is almost always an R36 exposure concept._

###### **S TUDY SESSION 6 · READING 38**

#### **The Evolution of Stress Testing Counterparty Exposures**

##### **The story**

R38 asks what happens to R36's exposure metrics and R37's CVA when you shock the world — equity crashes, rate shocks, credit events. It's shorter and more conceptual than R36/R37, but it reuses their vocabulary directly.

###### **Four CCR exposure measures (recap with stress framing)**

|**Measure**|**Definition**|
|---|---|
|Current exposure (replacement cost)|max(0, market value) on default today, assuming zero recovery|
|Peak exposure|High percentile (95%/99%) of the exposure distribution at a future date|
|Expected exposure|Mean of the exposure distribution at a future date|
|EPE|Time-weighted average of expected exposures|

###### **CCR as credit risk, market risk, or both**

Treat as credit risk → exposed to CVA volatility if CVA isn't marked. Treat as market risk → can hedge market moves but stays exposed to counterparty default/ creditworthiness decline. Treating it as _both_ is the prudent (if operationally harder) approach.

###### **Stress testing current exposure — two shortcomings**

(1) Aggregation is hard and ignores counterparty credit quality entirely; (2) it provides no information about wrong-way risk (a static market shock says nothing about whether exposure and PD move together).

###### **Stressed expected loss**

Loan portfolio: ELi = PDi×EADi×LGDi, summed across the portfolio; stress by shocking PD to get ELS, and the stress loss is ELS − EL. Derivatives portfolio: ELi is a function of PDi, LGDi, and EPEi multiplied by an alpha factor (α) that scales EPE up to account for portfolio effects.

###### **S TUDY SESSION 6 · READING 39**

#### **An Introduction to Securitization**

##### **The story**

R39 closes the book by returning to securitization mechanics from R28, but from the plumbing side: who the participants are, how the SPV isolates assets from the originator's bankruptcy risk, the three SPV structure types, and — the most exam-dense part — the full set of named performance ratios (delinquency ratio, default ratio, MPR, DSCR, WAC, WAM, WAL, CPR, PSA). These ratios show up as plug-and-chug calculation questions, so make sure you can compute each one, not just define it.

###### **Participants and the true sale**

Originator (creates the assets, sells them) → issuer/SPV (a legally distinct entity — this separateness is what makes it a "true sale," insulating investors from the originator's own insolvency) → structuring agent (designs tranches/triggers) → trustee (safeguards investor interests, monitors covenants) → financial guarantor (wraps the deal with insurance, common in master trusts) → custodian (holds/moves cash and securities) → credit rating agencies (set attachment points, same conflict-of-interest issue as R28).

###### **Cash waterfall, first-loss piece, overcollateralization**

**Overcollateralization** : pool assets (e.g. 101 mortgages) exceed the notes issued against them (100 mortgages) — investors absorb one default "for free." **Firstloss piece** = equity tranche, usually retained by the originator (skin in the game). **Cash waterfall** : senior paid before junior; if a coverage test fails, principal starts amortizing senior-first instead of paying subordinate interest.

###### **Three SPV structures**

|**Structure**|**Mechanics**|**Typical assets**|
|---|---|---|
|Amortizing (pass-<br>through)|Principal & interest paid on a schedule as received; valued via WAL, needs prepayment assumptions|Residential/commercial mortgages,<br>consumer loans|
|Revolving|Principal reinvested into new receivables during a revolving period; repaid via controlled amortization<br>or "soft bullet" lump sum|Credit card debt, auto loans|
|Master trust|One SPV structure supports multiple/frequent issuances; often paired with a second grantor trust;<br>excess spread shared across series|Credit card ABS, mortgages|

###### **Why financial institutions securitize**

Funding (diversifies funding mix, matches asset/liability duration, SPV often has a higher rating → cheaper funding than the originator's own debt) · balance sheet/capital management (Basel-driven regulatory capital relief since SPVs aren't banks) · risk management (removes non-performing assets and their reputational drag). Investor benefits: access to new diversified asset classes, customizable risk-return via tranching, often higher risk-adjusted return than similarly-rated corporate bonds.

###### **Credit enhancements (recap + two new ones from R28)**

Overcollateralization · pool insurance (third-party covers principal loss) · subordination (class B doesn't get principal until class A is redeemed) · **margin step-up** (coupon increases after a call date the issuer chooses not to exercise, compensating investors) · excess spread.

###### **Performance ratios — the calculation zoo**

###### **CREDIT CARD ABS TRIGGER RATIOS**

Total pool = $57.8M, current=$49.9M, 30dpd=$5.75M, 60dpd=$1.27M, 90dpd=$0.88M, written off=$1.1M, monthly P&I=$1.56M. Delinquency ratio = 90dpd / total pool = 880,000/57,800,000 = **1.522%** Default ratio = written-off / total pool = 1,100,000/57,800,000 = **1.903%** Monthly payment rate (MPR) = monthly P&I / total pool = 1,560,000/57,800,000 = **2.699%**

**MBS PERFORMANCE TOOLS**

DSCR = NOI / total debt payments — e.g. $89,572,500/$87,958,000 = **1.02** (DSCR<1 means the pool doesn't generate enough cash to cover debt service; residential is typically 2.5–3.0, riskier pools need higher).

WAC = Σ(pool balance × pool rate)/total balance — e.g. ($6M×7.8%+$10M×6.0%+$4M×5.0%)/$20M = **6.34%** .

WAM = Σ(pool weight × months to maturity) — e.g. weighting $6M/180d, $10M/360d, $4M/90d by pool size gives a blended weighted maturity in days. WAL = Σ(time to maturity × pool factor) — captures prepayment-adjusted average life, computed column-by-column across each note's outstanding balance and repayment timing.

###### **Auto loan & prepayment tools**

**Loss curve** : cumulative expected loss over the pool's life — prime loans show an even distribution, subprime a steeper early curve. **Absolute prepayment speed (APS)** : actual period payments as % of the total pool balance, used to value the implicit prepayment call option.

###### **CPR and PSA**

###### **CONSTANT PREPAYMENT RATE FROM SMM**

CPR = 1 − (1−SMM)<sup>12</sup>

###### **WORKED EXAMPLE**

SMM=1.5% → CPR = 1−(1−0.015)<sup>12</sup> = **16.59%** .

**PSA (Public Securities Association) benchmark** : 100% PSA assumes CPR starts at 0% and rises 0.2%/month for 30 months, then holds flat at 6%. A 50% PSA scenario rises 0.1%/month to a 3% plateau; 150% PSA rises 0.3%/month to a 9% plateau. Other prepayment scenarios are expressed as a percentage of this 100% base case.

###### **TRAP**

The most senior class of notes is _not_ the overcollateralized one — overcollateralization protects the senior tranche by making the _lowest_ /most junior class absorb excess collateral risk. Also: the SPV's _liability_ side (notes issued) has a lower cost than its _asset_ side (receivables) — that gap is exactly the excess spread, so don't flip asset/liability in your head when this is tested.

### **Cross-Reading Synthesis: The Five Threads of Book 2**

Five ideas get introduced early and then keep reappearing in sharper form. Recognizing them as the _same_ idea — not five separate topics — is what makes the "connect the dots" GARP questions solvable under time pressure.

###### **1. EL = PD × LGD × EAD, everywhere**

First formalized in R20, this exact multiplication reappears (sometimes disguised in notation) in R21's IRB capital formula, R28's tranche loss modeling, R37's CVA formula, and R38's stressed expected loss. If you can spot which of the three inputs a question is changing, you can usually sign the direction of the answer without touching a calculator.

###### **2. The Merton model, three depths**

R21 introduces Merton conceptually (equity as a call option on firm assets) and its cousins (Moody's-KMV, CreditMetrics, CreditRisk+). R25 gives you the precise numerical machinery (solve simultaneously for V0 and σV, then N(−d2) and distance-to-default). R29 reuses it once more inside the CVA/derivatives context. Three passes at the same option-pricing logic — master it in R25 and R21/R29 become recall, not new learning.

###### **3. Hazard rates & the CDS spread engine**

λ ≈ s/(1−RR) is introduced in R25, generalized into the full PV(payments)=PV(payoff) balance equation in R30, reused for the Gaussian copula's default-time transform in R29, and becomes the discounting engine inside R37's CVA formula. This is the most "linearly built" thread in the book — each reading adds one layer on the same core equation.

###### **4. The single-factor / Gaussian copula model, three applications**

Built from scratch in R27 (conditional independence, conditional mean βm and SD √(1−β²)), it's Vasicek's engine in R26, the CDO tranche pricing engine in R28/ R30, and the time-to-default transform in R29. The formula V(T,X) in R29 and WCDR(T,X) in R26 are the identical equation wearing different reading numbers — don't study them twice.

###### **5. Exposure → CVA, the Session 6 spine**

R31–35 build the risk-mitigation toolkit (netting, collateral, central clearing) qualitatively. R36 turns that toolkit into exposure metrics (EE, PFE, EPE, netting factor, MPoR). R37 multiplies those exposure metrics by default probabilities to get a single price: CVA. R38 stresses the whole pipeline. If a CVA calculation isn't working out, the missing piece is almost always a mis-specified R36 exposure term, not the CVA formula itself.

###### **Formula-dense vs. conceptual readings — where to spend practice-question reps**

**Heaviest formula load (drill hardest):** R20, R21, R25, R26, R27, R28, R29, R30, R36, R37, R39.

**Mostly conceptual (fast review, spot-check with questions):** R17, R18, R19, R22, R23, R24, R31, R32, R33, R34, R35, R38.

### **Complete Formula Index**

###### **R20 — Capital Structure in Banks**

EL = EA × PD × LR

UL = EA√[PDσLR²+LR²σPD²]

ULP² = ΣΣρijULiULj RCi (risk contribution, 2-asset case) EC = CM × ULP

###### **R21 — Credit Risk Modeling**

CAR = Capital / RWA (≥8% Basel II, ≥10.5% Basel III) IRB capital K = LGD×[N(...)−PD]×β Merton: E=A·N(d1)−Le<sup>−rT</sup> N(d2) RAROC = loan revenue / capital at risk ΔL = −D×L×Δi unexpected loan loss = α×LGD×EAD

###### **R25 — Default Probabilities**

Altman Z = 1.2X1+1.4X2+3.3X3+0.6X4+0.999X5 Q(t) = 1−e<sup>−λt</sup> λ ≈ s(T)/(1−RR) CDS-bond basis = CDS spread − bond yield spread Merton PD, DD (precise numeric form)

###### **R29 — Credit Risk in Derivatives**

f = fnd − CVA + DVA f = fnd×e<sup>−spread×T</sup> (DVA=0 case) V(T,X) [Gaussian copula, same as WCDR] Credit VaR = L×(1−RR)×V(T,X)

###### **R30 — Credit Derivatives**

PV(payments) = PV(payoff) → solve for CDS spread s Up-front = (spread−coupon)×duration×notional Synthetic CDO breakeven: s×(A+B)=C

###### **R36 — Future Value and Exposure**

Netting factor = √[(1+(n−1)ρ)/n] PFE(MPoR) = z×σ×√(MPoR/250)

σoverall (collateral vol, correlated / uncorrelated cases)

###### **R37 — CVA**

CVA = −(1−RR)ΣEE(ti)qiDF(ti) CVA spread ≈ −EPE×credit spread BCVA = CVA + DVA (mirror-image, symmetric) BCVA spread = −(spreadA×EPE) −(−spreadB×ENE)

###### **R38 — Stress Testing**

###### **R26 — Credit VaR**

WCDR(T,X) = N[(N−1(PD)+√ρN−1(X))/√(1−ρ)] Rating matrix: N-year = (1-year matrix)<sup>N</sup>

ELi = PDi×EADi×LGDi (loan) ELi = f(PDi,LGDi,α×EPEi) (derivatives)

###### **R39 — Securitization**

###### **R27 — Portfolio Credit Risk**

ρ12=(π12−π1π2)/√[π1(1−π1)π2(1−π2)] ai=βim+√(1−βi²)εi Conditional: mean=βim, SD=√(1−βi²) Credit VaR = quantile(loss) − EL

###### **R28 — Structured Credit Risk**

Waterfall: senior → junior → equity (residual, OC-capped) Default '01 = tranche value shock ÷ 10bps PD shift

Delinquency ratio = 90dpd / total pool Default ratio = written-off / total pool MPR = monthly P&I / total pool DSCR = NOI / total debt payments WAC = Σ(pool balance×rate)/total balance WAM = Σ(weight×months to maturity) WAL = Σ(time to maturity×pool factor) CPR = 1−(1−SMM)<sup>12</sup> 100% PSA: CPR 0→6% over 30mo, then flat
