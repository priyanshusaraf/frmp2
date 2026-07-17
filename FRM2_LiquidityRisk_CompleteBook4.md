# FRM Part II — Liquidity and Treasury Risk Measurement and Management (Complete, Book 4)

**F R M PA R T I I  ·  L I Q U I D I T Y A N D T R E A S U RY R I S K M E A S U R E M E N T A N D M A N A G E M E N T**

# **The Complete Book 4 Story, Formulas & Traps**

_All 19 Readings, All 3 Study Sessions:_

_Liquidity Risk Management (64–70) · Stress Testing, Contingency Planning & Deposits (71–76) · Repos, Liquidity Transfer & Interest Rate Risk (77–82)_

Built directly from your Schweser Book 4 — every formula, every reading's story, worked examples, and the exam traps GARP likes to test — threaded into one continuous narrative from Reading 64 to Reading 82. Complete companion guide for Liquidity and Treasury Risk Measurement and Management.

**Study Session 10 — Liquidity Risk Management:** Readings 64–70. The core toolkit: liquidity-adjusted VaR, leverage and the economic balance sheet, early warning indicators, the investment function, reserves management, intraday liquidity, and monitoring cash flows.

**Study Session 11 — Stress Testing, Contingency Planning, Deposits, and Nondeposit Liabilities:** Readings 71–76. Dealer bank failure mechanics, liquidity stress test design, reporting, contingency funding plans, and how banks price deposits and nondeposit funding. **Study Session 12 — Repos, Liquidity Transfer, and Interest Rate Risk Management:** Readings 77–82. Repo mechanics and specials, liquidity transfer pricing, the global dollar shortage, covered interest parity, duration gap management, and illiquid asset premiums.

### **Table of Contents**

###### **Study Session 10 — Liquidity Risk Management**

Reading 64 · Liquidity Risk

Reading 65 · Liquidity and Leverage Reading 66 · Early Warning Indicators

Reading 67 · The Investment Function in Financial-Services Management Reading 68 · Liquidity and Reserves Management: Strategies and Policies Reading 69 · Intraday Liquidity Risk Management Reading 70 · Monitoring Liquidity

###### **Study Session 11 — Stress Testing, Contingency Planning, Deposits, Nondeposit Liabilities**

Reading 71 · The Failure Mechanics of Dealer Banks

Reading 72 · Liquidity Stress Testing

Reading 73 · Liquidity Risk Reporting and Stress Testing

Reading 74 · Contingency Funding Planning

Reading 75 · Managing and Pricing Deposit Services Reading 76 · Managing Nondeposit Liabilities

###### **Study Session 12 — Repos, Liquidity Transfer, and Interest Rate Risk Management**

Reading 77 · Repurchase Agreements and Financing

Reading 78 · Liquidity Transfer Pricing: A Guide to Better Practice

Reading 79 · The US Dollar Shortage in Global Banking

Reading 80 · Covered Interest Parity Lost: The Cross-Currency Basis

Reading 81 · Risk Management for Changing Interest Rates: ALM and Duration Reading 82 · Illiquid Assets

###### **Closing**

Cross-Reading Synthesis: The Five Threads of Book 4

Complete Formula Index

##### S T U D Y S E S S I O N 1 0 O F 1 2

## **Liquidity Risk Management**

This session builds the liquidity toolkit from the ground up: how to price the cost of exiting a position (LVaR, R64), how leverage amplifies both returns and liquidity fragility (R65), how to see trouble coming (early warning indicators, R66), how banks actually invest and manage reserves day to day (R67–68), and how liquidity gets managed at the finest possible time scale — intraday and via full cash-flow monitoring (R69–70). R64, R65, and R69 carry real calculation weight; the rest are heavier on process and vocabulary.

64 Liquidity Risk · 65 Liquidity and Leverage · 66 Early Warning Indicators · 67 Investment Function · 68 Reserves Management · 69 Intraday Liquidity · 70 Monitoring Liquidity

###### **S TUDY SESSION 10 · READING 64**

#### **Liquidity Risk**

_Hull, Risk Management and Financial Institutions, Ch. 24_

##### **The story**

This reading opens the book with the two faces of liquidity risk that everything else builds on: **trading (transactions) liquidity risk** — can I exit this position without moving the price against myself? — and **funding liquidity risk** — can I roll my financing before it comes due? It gives you the LVaR formula machinery for the first, three unforgettable case studies for the second, the Basel III liquidity ratios, and closes with liquidity black holes: what happens when everyone tries to exit the same door at once.

###### **Cost of liquidation — normal markets**

###### **BID-OFFER SPREAD & COST TO LIQUIDATE ONE POSITION**

p = offer − bid  —  s = p / mid-market price  —  cost = s × (α/2) α = mid-market dollar value of the position Cost = Σi=1n [αi × si / 2]

###### **COST TO LIQUIDATE A BOOK OF N POSITIONS**

###### **WORKED EXAMPLE**

2M shares ABC (bid $25.50, offer $27.00) + 500K shares XYZ (bid $45.00, offer $46.50). ABC: mid=$26.25, value=$52.5M, s=1.50/26.25=5.714%. XYZ: mid=$45.75, value=$22.875M, s=1.50/45.75=3.279%. Cost = (52.5M×0.05714/2)+(22.875M×0.03279/2) = **$1,874,961** .

###### **Cost of liquidation — stressed markets**

###### **STRESSED COST (SPREAD MEAN Μ, SD Σ, CONFIDENCE Z=Γ)**

Coststressed = Σ { αi × [μi + γσi] / 2 }

###### **WORKED EXAMPLE (95% CONFIDENCE, Z=1.645)**

Same two positions, mean spread=$1.5, SD=$2.5 for both. ABC: μ=5.714%, σ=9.524%. XYZ: μ=3.279%, σ=5.464%. Cost = {52.5M×[0.05714+1.645(0.09524)]/2} + {22.875M×[0.03279+1.645(0.05464)]/2} = **$7,015,577** — roughly 3.7× the normal-market cost.

###### **Liquidity-adjusted VaR (LVaR)**

###### **LVAR**

LVaR = VaR + Cost of liquidation (normal or stressed)

Trade-off in unwind speed: quick unwind → less market-risk (mid-price-moves-against-you) exposure but more spread-widening exposure; slow unwind → the reverse. Amihud's liquidity measure (2002): compares |daily return| to daily dollar volume — lower liquidity is empirically associated with higher expected returns (illiquidity is compensated).

###### **Funding liquidity risk: six sources of liquidity**

Cash and treasuries · retail/wholesale deposits (both surprisingly unstable — easy to move between institutions chasing rate) · trading book liquidation (works less well precisely when markets are stressed) · securitization (dried up almost overnight in the 2007 subprime crisis) · borrowing ability (rates/tenors worsen exactly when needed most) · central bank borrowing (expensive, haircut-laden, and carries a negative signaling cost — hence banks try to keep it quiet).

###### **Three case studies (know the mechanism, not just the name)**

|**Case**|**Mechanism**|
|---|---|
|Northern Rock (2007)|Funded long-term mortgages with short-term debt; a public emergency-funding request triggered a visible bank run (£2B withdrawn in a week);<br>ultimately nationalized.|
|Ashanti Goldfields<br>(1999)|Short gold forwards to hedge shareholders; a surprise 15-central-bank gold-sale moratorium spiked gold prices 25%+; margin calls on the (illiquid,<br>physical) hedge couldn't be met in cash.|
|Metallgesellschaft|Long near-dated oil futures hedging long-dated fixed-price supply contracts; falling oil prices triggered margin calls; the firm unwound the hedge at<br>a $1.3B loss under cash-flow pressure.|

All three share one lesson: **the hedge or asset can be economically sound (or even profitable on paper) and still bankrupt you on a cash-timing mismatch** — margin calls are due in cash, now, regardless of whether the underlying position is "right."

###### **Basel III liquidity ratios (introduced here, detailed further in R61 of Book 3)**

|**LCR**||
|---|---|
||LCR = HQLA / net cash outfows over 30 days ≥ 100%|
|**NSFR**||
||NSFR = available stable funding / required stable funding ≥ 100%|

17 BIS principles span five buckets: the fundamental principle (adequate framework + supervisory oversight), governance (risk tolerance, board sign-off, liquidity costs priced into new products), measurement/management (cash-flow projection, diversified funding, intraday positions, collateral management, stress testing, a contingency funding plan, and an HQLA buffer), disclosure, and supervisory responsibilities.

###### **Liquidity black holes and positive feedback trading**

**Negative feedback traders** (buy on dips, sell on rallies) stabilize markets and dominate when liquidity is healthy. **Positive feedback traders** (buy as prices rise, sell as they fall) destabilize markets when they dominate. Causes of positive feedback trading: stop-loss rules, trend/breakout trading, predatory trading (frontrunning a known upcoming large liquidation), delta-hedging large short option positions, and unmet margin calls forcing liquidation into an already-falling market. **Black Monday (Oct 19, 1987)** is the textbook case: portfolio insurance programs (synthetic puts on $60B+ of equity) mechanically sold into the decline, with $12B of required selling only $4B executed by Friday's close — the backlog compounded into Monday's crash.

Leveraging (more credit → higher asset demand → higher prices → higher collateral value → more credit, a reinforcing loop) and deleveraging (the same loop in reverse) explain both 1990s "irrational exuberance" and the mid-2000s housing bubble. Uniform regulation across very different institution types (banks vs. pension funds vs. insurers) can itself create black holes, since everyone is forced to react identically to the same shock at the same time — diversity of regulatory treatment is a stabilizing feature, not a bug.

###### **TRAP**

Retail/wholesale deposits are frequently assumed to be a "stable" funding source because they're insured or long-relationship — but the reading is explicit that they've become _less_ stable over time as depositors easily rate-shop across institutions.

**S TUDY SESSION 10 · READING 65**

#### **Liquidity and Leverage**

_Malz, Financial Risk Management, Ch. 12_

##### **The story**

This reading formalizes the transactions-liquidity/funding-liquidity split from R64 and adds the piece that makes it dangerous: **leverage** . It shows exactly how margin loans, short sales, and derivatives each create leverage differently, using a specific tool — the "economic balance sheet" — that shows up again implicitly whenever a later reading asks you to reason about implicit leverage.

###### **Transactions liquidity risk vs. funding liquidity risk**

**Transactions (market) liquidity risk** : the act of trading itself moves the price against you. **Funding (balance sheet) liquidity risk** : your own (or perceived) creditworthiness deteriorates, so creditors withdraw or reprice credit. **Maturity mismatch** (funding long-term assets with short-term liabilities) is profitable — short-term lenders bear less risk and demand a lower rate — but creates **rollover (cliff) risk** : the risk that refinancing isn't available, or only at escalating rates. The two risks feed each other: tighter collateral terms (funding risk) can force an early, lossy unwind (transactions risk); conversely, being forced to sell illiquid assets first (to preserve liquid ones) can deepen realized losses, worsening funding risk further. Severe liquidity stress can cascade into **systemic risk** as one counterparty's illiquidity ripples through payment/clearing/settlement systems.

###### **Fractional-reserve banking & liquidity transformation**

Banks take in $100 of deposits, hold a fraction (say $10) for redemptions, lend the rest ($90) — this is **asset-liability management (ALM)** , and it works because deposits are "sticky" (customers rarely switch banks). If withdrawals exceed reserves, a bank faces suspension of convertibility, or in the extreme, a bank run. Offbalance-sheet vehicles (ABCP conduits, SIVs) extended this same liquidity-transformation logic pre-crisis by funding longer-maturity assets with short-term asset-backed commercial paper — profitable on the funding-cost spread, but it didn't eliminate risk, just moved it off-balance-sheet, feeding 2007–09 fragility. MMMFs use amortized-cost accounting (SEC Rule 2a-7, no daily mark-to-market) with a fixed $1.00 NAV — **"breaking the buck"** is when credit write-downs or a run push NAV below $1.00.

###### **Collateral markets: margin loans, repos, securities lending, TRS**

**Haircut** : the gap between collateral value and amount lent (e.g., lend $95 against $100 collateral). **Variation margin/remargining** : additional collateral posted as values move, protecting the lender. **Rehypothecation** : pledged collateral gets re-loaned/re-pledged, so collateral "circulates" through the system. Margin loans: Fed Reg T sets initial margin at 50%; brokers hold securities in "street name" (easing seizure and enabling re-lending to short sellers). Repos: collateralized shortterm sale-with-buyback; interest is implied by the spot-forward price gap. Securities lending: loan securities for a fee ("rebate"); lender keeps dividends/interest. Total return swaps (TRS): pay a fee for the total return of a reference asset without owning it — economically a long position financed synthetically (and a short for the counterparty providing the return).

###### **Leverage ratio and the leverage effect**

###### **LEVERAGE RATIO**

**LEVERAGE EFFECT (ROE)**

L = total assets / equity rE = L×rA − (L−1)×rD rA=ROA, rD=cost of debt

###### **WORKED EXAMPLE**

ROA=5%, cost of debt=2%.

Assets=$2, equity=$1 (L=2): ROE = 2(5%)−1(2%) = **8%** .

Assets=$4, equity=$1 (L=4): ROE = 4(5%)−3(2%) = **14%** — leverage amplifies ROE as long as ROA > cost of debt, but it's a double-edged sword: the same multiplier amplifies losses when ROA < cost of debt.

**EFFECT OF A CHANGE IN LEVERAGE**

ΔROE = ΔL × (ROA − cost of debt)

###### **Economic balance sheets — measuring implicit leverage**

###### **MARGIN LOAN (H=50% HAIRCUT, REG T MINIMUM)**

$100 owner equity buys $100 stock outright (L=1.0). With 50% borrowed: $100 equity + $50 margin loan buys $150 of stock → **leverage ratio = 150/100 = 1.5** .

###### **SHORT SALE**

Borrow $100 stock, sell it (proceeds held as restricted collateral) + post $50 margin → economic balance sheet shows $200 assets over $100 equity → **leverage ratio = 2.0** — higher than the long-margin case because the full value of the stock is borrowed (leverage is inherent in a short, a choice in a long).

**Gross vs. net leverage** : gross leverage = all assets (incl. short-sale cash proceeds) / capital; net leverage = (longs − shorts) / capital. If the short is a hedge, gross leverage overstates true risk by ignoring the offsetting position.

###### **DERIVATIVES (CASH-EQUIVALENT ECONOMIC BALANCE SHEET)**

Futures/forwards/swaps: linear, zero NPV at initiation — represented at full notional market value. Options: nonlinear, nonzero NPV — represented at the **deltaequivalent** value, not full notional (a 50-delta call on $100 of index ≈ a $50 synthetic long financed by a $50 broker loan).

###### **Systematic funding liquidity risk (2007–09 case studies)**

LBOs/leveraged loans: "hung loans" undistributed to investors when CLO/CDO demand dried up. Merger arbitrage hedge funds: losses when deals were abandoned as financing disappeared (a systematic, not idiosyncratic, risk). Convertible arbitrage: leveraged, thin-clientele strategy — funding evaporation plus redemptiondriven forced selling widened the gap between convertible prices and their replicating portfolios without drawing in arbitrage capital.

###### **Transactions liquidity risk mechanics & the LVaR position-liquidation formula**

Market microstructure frictions: trade processing costs, inventory management (dealers must be compensated for holding inventory risk), adverse selection (dealers can't tell informed from uninformed traders — wider spreads compensate for "lemons risk"), and differences of opinion (harder to find a counterparty when everyone agrees things are bad, as in a crisis, than when they disagree).

###### **EXPECTED TRANSACTIONS COST & 99% SPREAD RISK FACTOR**

expected cost = mid-price × s/2  —  spread risk factor = ½(s + 2.33σs)

###### **WORKED EXAMPLE**

Ask=$100, bid=$99, σs=0.0002. Mid=$99.50, s=(100−99)/99.5=1.005%. Expected cost = 99.50×0.01005/2 = **$0.50** . Spread risk factor = ½[0.01005+2.33(0.0002)] = **0.5258%** .

###### **NAIVE T-DAY VAR (SQUARE-ROOT-OF-TIME, OVERSTATES RISK)**

VaR(T) = VaR(1-day) × √T

###### **CORRECTED VAR FOR A POSITION LIQUIDATED EVENLY OVER T DAYS**

VaR(T)adjusted = VaR(1-day) × √{ (1/T)Σi=1T i² } e.g. T=4 → multiplier 1.3693, i.e. +37%, less than the naive √4=2.0 (+100%)

###### **Measuring market liquidity: tightness, depth, resiliency**

**Tightness (width)** : round-trip cost = bid-ask spread + commissions; narrower = more liquid. **Depth** : how large an order can be absorbed without moving price. **Resiliency** : how fast the market snaps back to equilibrium after a lumpy order. Hedge funds manage funding liquidity via cash, unpledged assets ("assets in the box" — only Treasury bills proved reliably acceptable as crisis collateral), and unused borrowing capacity (revocable — haircuts can rise or collateral can be refused right when it's needed).

###### **TRAP**

The corrected T-day liquidation VaR formula gives a smaller adjustment than naive square-root-of-time scaling — don't default to √T when a position is actually being unwound gradually rather than held intact for the full period.

**S TUDY SESSION 10 · READING 66**

#### **Early Warning Indicators**

##### **The story**

EWIs are the dashboard warning lights for liquidity risk — this reading is short and conceptual: what makes a good EWI, whose guidance shapes them, and how escalation works in practice.

###### **What makes an EWI useful**

Forward-looking (not backward-looking), covering both internal and external measures, leading rather than lagging, granular, and spanning multiple time horizons.

###### **Regulatory guidance (know who said what)**

OCC (2012): EWIs for embedded-option instruments (e.g., callable debt) flagging likely exercise/contingent liability. BCBS (2008): general deterioration/ funding-need signals. BCBS (2012): intraday liquidity indicators specifically. Fed SR 10-6: EWIs and event triggers consistent with the firm's own liquidity risk profile, giving advance notice to prepare and communicate internally/externally.

###### **Escalation mechanics**

Green/amber/red stoplight thresholds: green = no action, amber = follow-up required, red = immediate action. Timely (often daily) reporting through an integrated data system, feeding into EWI dashboards, is increasingly standard practice.

###### **S TUDY SESSION 10 · READING 67**

#### **The Investment Function in Financial-Services Management**

##### **The story**

A survey reading on how banks actually invest their securities portfolios: what instruments exist, what factors drive selection, and what maturity strategies banks use to balance yield against liquidity and interest rate risk.

###### **Money market vs. capital market instruments**

Money market (≤1yr, low risk/yield): T-bills, short T-notes/bonds, federal agency securities, CDs, Eurocurrency deposits, banker's acceptances, commercial paper, short-term municipal obligations. Capital market (>1yr, higher risk/yield): Treasury notes/bonds, municipal notes/bonds, corporate notes/bonds. Newer instruments: structured notes, securitized assets (pass-throughs, CMOs, REMICs, MBBs), and stripped securities (principal-only/ interest-only).

###### **Selection factors**

Expected return (YTM, holding period yield) · tax exposure (taxable vs. tax-exempt, tax-equivalent yield, bank-qualified bonds) · interest rate, credit, business, liquidity, call, prepayment, and inflation risk · pledging requirements. Small banks skew toward safer government securities to offset riskier loan books; large banks tolerate more risk for yield (foreign securities, private debt, equity).

###### **Maturity strategies**

|**Strategy**|**Approach**|
|---|---|
|Ladder (spaced-maturity)|Equal amounts across each maturity interval — simple, frees cash steadily, but not income-maximizing|
|Front-end load|Concentrate in short-term investments|
|Back-end load|Concentrate in long-term investments|
|Barbell|Combine front- and back-end (short + long, avoid the middle)|
|Rate expectations|Actively positioned on interest rate/economic forecasts|

**Yield curve tools** : a downward-sloping curve signals expected rate declines; the **carry trade** borrows short/cheap to invest long/rich; **riding the yield curve** sells bonds after a price spike just before maturity. **Duration** : matching portfolio duration to the planned holding period _immunizes_ against interest rate risk (offsetting price risk against reinvestment risk).

###### **S TUDY SESSION 10 · READING 68**

#### **Liquidity and Reserves Management: Strategies and Policies**

##### **The story**

This reading gives you the bank treasurer's actual day job: measuring the net liquidity position, choosing a management strategy, estimating liquidity needs with four named approaches, and managing legal reserve requirements. The four estimation approaches and the reserve formula are the testable core.

###### **Net liquidity position**

###### **NET LIQUIDITY POSITION**

###### L = supplies of liquidity − demands for liquidity

L<0: liquidity deficit, must raise funds. L>0: liquidity surplus, invest the excess. Costs of managing liquidity: search/transaction costs, interest costs on borrowed funds, and opportunity costs of liquidating assets.

###### **Three liquidity management strategies**

Asset conversion (hold liquid assets, convert to cash as needed: T-bills, CDs, munis, interbank deposits, repos, Eurocurrency loans, fed funds, agency securities) · liability management (borrow to cover needs: jumbo negotiable CDs, repos, Eurocurrency issuance, fed funds borrowing, discount window, FHLB advances) · balanced approach (blend of both).

###### **Four approaches to estimating liquidity requirements**

|**Approach**|**Logic**|
|---|---|
|Sources and uses of<br>funds|Deposit increases ↑ liquidity; loan increases ↓ liquidity. Positive gap = surplus, negative gap = deficit.|
|Structure of funds|Split funding sources into hot money / vulnerable funds / core deposits by withdrawal likelihood; reserve each category per an operating rule; can<br>extend to best/likely/worst-case scenario probabilities.|
|Liquidity indicator|Ratio-based, benchmarked to industry experience (see ratio table below)|
|Market signals<br>(discipline)|Watch public confidence, stock price, forced asset sales, borrowing risk premiums, central bank borrowing, credit commitments|

Liquidity indicator ratios where _higher = more liquid_ : cash position, liquid securities, core deposit ratio, hot money ratio, net fed funds/repo position. Ratios where _higher = less liquid_ : capacity ratio, loan commitments ratio, pledged securities ratio, deposit composition ratio, deposit brokerage index.

###### **Legal reserves**

###### **TOTAL REQUIRED LEGAL RESERVES**

= reservable liabilities × the applicable reserve ratio (summed across each reservable category)

Reserve computation period, then a maintenance period starting 30 days after the computation period begins. Excess reserves = legal reserves > required; deficit = legal reserves < required — the goal is zero excess and zero (penalty-triggering) deficit. A **clearing balance** is reserve held voluntarily at the Fed to cover debit items. The fed funds market is the cheap-but-volatile go-to for covering a deficit; alternatives: sell liquid securities, draw balances at other institutions, use repos, borrow Eurocurrency, or sell time deposits.

###### **TRAP**

Liquidity indicators split into two directions of interpretation (higher-is-more-liquid vs. higher-is-less-liquid) — memorize which bucket each named ratio falls into rather than assuming "higher is always safer."

###### **S TUDY SESSION 10 · READING 69**

#### **Intraday Liquidity Risk Management**

##### **The story**

Zooms into the finest time scale of liquidity management: within a single day. Three parts — what uses/creates intraday liquidity needs, how it's governed, and how it's tracked/measured. Highly listy, highly testable on which-item-goes-where.

###### **Uses vs. sources of intraday liquidity**

|**Uses**|**Sources**|
|---|---|
|Outgoing wire transfers (the single biggest use)|Cash balances|
|PCS system settlements|Incoming funds flow (the single biggest source)|
|Nostro account funding|Intraday credit (from central banks)|
|Collateral pledging|Liquid assets|
|Asset purchases/funding|Overnight borrowings; other term funding|

Intraday credit may carry an explicit interest cost or require high-quality collateral (an opportunity cost) — this is the one source with a genuine, non-trivial financial cost, unlike owned cash/liquid assets.

###### **Governance — four pillars**

Active risk management (treat it as manageable, not a passive given) · integration with risk governance (three lines of defense: treasury, corporate risk management, internal audit — _corporate risk management_ is the emphasized second line here) · risk assessment (focused on settlement risk) · risk measurement and monitoring (dollar value of credit provided to customers vs. used by the firm).

###### **Tracking flows vs. monitoring risk levels**

**Tracking** : total payments, other cash transactions, settlement positions, time-sensitive obligations, total intraday credit lines to clients, total bank intraday credit lines available/used. **Monitoring risk** : daily maximum intraday liquidity usage (most negative balance / credit line limit), **intraday credit relative to Tier 1 capital** (the key systemic-risk metric — unsecured, available intraday credit over Tier 1), client intraday credit usage, payment throughput.

###### **TRAP**

The metric that specifically captures the bank's contribution to _systemic_ risk is intraday credit relative to Tier 1 capital — not daily maximum usage (which is about the bank's own exposure) or client usage (which is about client-specific risk).

###### **S TUDY SESSION 10 · READING 70**

#### **Monitoring Liquidity**

##### **The story**

Closes Session 10 with the formal vocabulary for monitoring cash flows over time — a dense alphabet soup of "term structure of X" concepts that all describe the same underlying idea: lay out expected (and stressed) cash flows date by date and check whether the cumulative position ever goes negative.

###### **Cash flow taxonomy**

Deterministic (known timing) vs. stochastic (random timing); deterministic vs. stochastic amount. Stochastic amounts split into: credit-related, behavioral (counterparty decisions), indexed/contingent (market-variable driven), and new-business driven.

###### **Liquidity options**

The right to give/receive cash from the bank at preset terms (e.g., a prepayment option, a deposit withdrawal right). Exercise depends on the option-holder's own cash-flow needs (not necessarily bank profitability), and has two effects on the bank: a balance-sheet effect (the repaid/withdrawn amount) and a P&L effect (spread between contract terms and current market terms at exercise).

###### **Three components of liquidity risk**

**Quantitative liquidity risk** : receiving less cash than expected (market liquidity risk — can't sell an asset quickly at fair value — is a component). **Funding cost risk** : paying more than expected to raise funds (spread over risk-free). Together these form the full economic liquidity risk.

###### **Liquidity generation capacity (LGC)**

The bank's ability to generate cash beyond contractual inflows, from balance sheet expansion or shrinkage. Security-linked (BSL): secured debt issuance, secured credit-line draws, asset/repo sales. Security-unlinked: unsecured bond issuance, new unsecured deposits, unsecured credit-line draws. **TSLGC** (term structure of LGC): liquidity generatable by a given future date. **TSCLGC** (cumulated): running total up to that date.

###### **The full family of term structures**

###### **TSECF / TSECCF (THE MATURITY LADDER)**

TSECF = expected cash flows by date up to the longest contract maturity TSECCF = cumulative running total of TSECF — ideally stays positive at every date

A negative TSECCF at some future date is a precursor to insolvency — this is the single most important number a Treasury department watches. **TSL0** (term structure of expected liquidity): whether the institution can cover negative cumulated cash flows at a given date. **TSLaR** (term structure of liquidity-at-risk): unexpected cash flows at each date, i.e. the gap between average and minimum (worst-case) levels — the "at risk" analog of VaR applied to liquidity.

###### **TSAA (TERM STRUCTURE OF AVAILABLE ASSETS)**

Increases from: reverse repo, buy/sellback, security borrowing. Decreases from: repo, sell/buyback, security lending.

Possession (not ownership) drives whether an asset counts toward TSAA-based liquidity generation. Repo/reverse repo transactions affect TSAA and TSLGC but do _not_ flow through TSECF/TSECCF — a frequently tested distinction, since most other transaction types (including outright purchases/sales) hit all of these measures together.

###### **TRAP**

Repo and reverse repo transactions are the one transaction type that moves TSAA without moving TSECF/TSECCF — because a repo is economically a secured loan, not a cash-flow-generating sale, even though a security's legal title changes hands.

##### S T U D Y S E S S I O N 1 1 O F 1 2

## **Stress Testing, Contingency Planning, Deposit Services, and Nondeposit Liabilities**

This session moves from measuring liquidity (Session 10) to stress-testing it and planning for its failure. R71 is a real-world case study (dealer bank failure mechanics); R72–74 build the liquidity stress testing and contingency funding planning framework; R75–76 shift to the liability side of the balance sheet — how banks actually price deposits and choose among nondeposit funding sources. Mostly conceptual; R75's deposit pricing formula and R76's available funds gap are the calculation exceptions.

71 Dealer Bank Failure Mechanics · 72 Liquidity Stress Testing · 73 Liquidity Risk Reporting · 74 Contingency Funding Planning · 75 Managing/Pricing Deposits · 76 Managing Nondeposit Liabilities

###### **S TUDY SESSION 11 · READING 71**

#### **The Failure Mechanics of Dealer Banks**

##### **The story**

A short, case-driven reading: large dealer banks are structurally exposed to a specific liquidity-death-spiral because their business (OTC derivatives, repo, prime brokerage) depends entirely on counterparties' continued confidence in their solvency.

###### **The failure mechanism**

The moment prime-brokerage clients or repo/derivatives counterparties start _questioning_ solvency (not necessarily confirming it), they rationally move to exit positions or shrink exposure — and that very withdrawal accelerates the liquidity crisis, regardless of whether the initial solvency concern was justified. It's a selffulfilling dynamic, structurally similar to a bank run but operating through wholesale/institutional channels rather than retail depositors.

###### **Policy responses**

Tri-party repo utilities and clearing banks (emergency infrastructure proposals to reduce contagion risk in repo/OTC markets). TARP (2008): designed to address adverse selection in "toxic" asset markets by offering below-market financing and absorbing losses above a pre-specified threshold.

**S TUDY SESSION 11 · READING 72**

#### **Liquidity Stress Testing**

##### **The story**

Builds the formal liquidity stress-testing framework: four funding-liquidity categories, one core sufficiency formula, and six design dimensions that determine whether a stress test is actually useful or just theater.

###### **Four categories of funding liquidity**

**Operational** : day-to-day operating needs. **Contingent** : high-quality liquid assets + credit facilities held for stressed scenarios. **Strategic** : funds reserved for investment opportunities. **Restricted** : liquid assets with predetermined, fixed operational uses (not freely available).

###### **Stressed liquidity asset buffer**

###### **STRESSED BUFFER SUFFICIENCY**

stressed liquidity asset buffer = (normal) liquidity asset buffer − stressed cash outflows + stressed cash inflows

###### **Six stress test design dimensions**

**Scope** : consolidated firm-wide as the starting point, but also parent-only, subsidiary-level, business-line, or business-unit tests. **Scenario development** : establish a benchmark funding/liquidity level first; historical scenarios (real, but few examples) vs. hypothetical (forward-looking, best available information); distinguish systemic-only, idiosyncratic-only, and combined scenarios; **reverse stress tests** assume failure and work backward to find the critical drivers — a useful supplement to forward-looking hypotheticals. **Assumptions** : "garbage in, garbage out" — key assumptions are investment portfolio haircuts, deposit outflows, unsecured wholesale funding, collateral requirements, other contingent liabilities, business reduction. **Outputs** : stress assumptions, current liquidity position metrics, future liquidity position metrics, capital/performance metrics. **Governance** : ALCO, treasury (1st line), risk management (2nd line), internal audit (3rd line), model risk management. **Integration with other models** : capital stress testing, asset-liability management, and funds transfer pricing (FTP) should all be consistent with the liquidity stress test.

###### **S TUDY SESSION 11 · READING 73**

#### **Liquidity Risk Reporting and Stress Testing**

##### **The story**

Takes R72's framework and attaches it to specific named reports with specific cadences — the FSA-derived best practices here are a common exam target since they're concrete and listable.

###### **Reporting cadence (FSA-style best practice)**

|**Frequency**|**Content**|
|---|---|
|Daily|Cash flows & maturity mismatch for market-wide stress tests|
|Weekly|Cash flows & maturity mismatch for firm-specific tests; wholesale liability|
|Monthly|Liquidity buffer, funding concentration, off-balance-sheet|
|Quarterly|Funding and currency analysis|

FSA treatment rules: callable/demand deposits treated as one-day tenor; derivatives excluded from liquidity ratio calculations (except pay-date coupons); undrawn commitments _are_ included as a cash outflow.

###### **Named reports**

Deposit tracker (current/forecast deposit size) · daily liquidity report (liquid assets, liabilities by maturity, cumulative liquidity) · funding maturity gap/mismatch report (assets vs. liabilities by time bucket) · funding source concentration report (deposit diversity, watched by senior Treasury) · undrawn commitment report (stress-scenario draw risk) · **cash flow survival report** (tracks the Basel III 30-day survival horizon — the single most important liquidity stress report) · wholesale pricing and volume report (funding cost benchmarked against peers — used by regulators to flag banks of concern).

**S TUDY SESSION 11 · READING 74**

#### **Contingency Funding Planning**

##### **The story**

The contingency funding plan (CFP) is the "what do we actually do" document that liquidity stress testing (R72) feeds into. Five design considerations, then the CFP's five operating components — governance, scenarios, contingent actions, monitoring/escalation, and reporting.

###### **Five CFP design considerations**

Alignment to the firm's business/risk profile · integration with broader risk management frameworks · an operational, actionable, flexible playbook (not a binder that sits on a shelf) · inclusive of appropriate stakeholders · supported by a communication plan.

###### **Five CFP components**

**Governance and oversight** : corporate treasury, liquidity crisis team, management committee, board of directors — regularly tested at intervals for readiness. **Scenarios and liquidity gap analysis** : must be consistent with the liquidity stress test scenarios and link to recovery provisions. **Contingent actions** : sized to the shortfall's amount, timing, and expected inflow — nature (systemic/idiosyncratic) and magnitude of the stress determine which actions are viable. **Monitoring and escalation** : builds on EWIs (market/business measures + liquidity health measures), with three escalation levels — Level 1 (heightened oversight of market conditions), Level 2 (clear negative business/liquidity impact), Level 3 (survival/going-concern focus). **Data and reporting** : often daily during stress, covering both current and required coverage of future liabilities/outflows.

###### **S TUDY SESSION 11 · READING 75**

#### **Managing and Pricing Deposit Services**

##### **The story**

Shifts to the liability side: what deposit products exist, the three ways banks price them, and the social/ regulatory tensions (lifeline banking, overdraft protection) that come with deposit-taking.

###### **Transaction vs. nontransaction deposits**

**Transaction** (payment-use): noninterest checking, interest checking, MMDAs, mobile check deposits. **Nontransaction** (savings-use): passbook savings, time accounts (CDs), retirement deposits (IRA/Keogh).

###### **Three deposit pricing methods**

|**Method**|**Logic**|
|---|---|
|Cost-plus|Price covers direct + overhead costs + profit margin|
|Marginal pricing|Compares marginal cost of raising additional funds to the yield earned reinvesting them|
|Conditional pricing|Fee waived/reduced if a condition (e.g., minimum balance) is met — used to attract desirable customers|

###### **Social and regulatory challenges**

**Lifeline banking** : the unresolved question of whether banks (given deposit-insurance backing by taxpayers) owe society basic affordable banking access for lowincome/undocumented/undereducated customers. Other live issues: deposit insurance, overdraft protection (and its social costs), and truth-in-savings disclosure requirements.

###### **S TUDY SESSION 11 · READING 76**

#### **Managing Nondeposit Liabilities**

##### **The story**

Closes Session 11 with the non-deposit half of bank funding: what sources exist, how to size the funding gap you need to fill, and the two ways to estimate the bank's overall cost of funds.

###### **Nondeposit funding sources**

Fed funds (overnight interbank) · repos (collateralized short-term) · discount window (Fed loan, requires acceptable collateral) · FHLB advances (historically mortgage-lender-focused) · negotiable (jumbo) CDs (legally deposits, functionally money-market instruments — domestic, dollar-denominated, Yankee, thrift variants) · Eurocurrency deposits (Eurodollar = USD deposits at non-U.S. banks) · commercial paper (days to 270 days, discount-issued) · long-term nondeposit debt (more a secondary-capital source than a funding source).

###### **Available funds gap**

###### **AVAILABLE FUNDS GAP**

= (current + projected loans and other investments) − (current + expected deposit inflows and other available funds)

Choice among nondeposit sources depends on: relative cost, risk (interest rate risk, availability risk), needed maturity, and regulatory requirements.

###### **Two ways to estimate overall funding cost**

|**Approach**|**Orientation**|
|---|---|
|Historical average cost|Backward-looking: cost of all funding raised to date (interest + noninterest costs + required shareholder return)|
|Pooled funds|Forward-looking: minimum return the bank must earn on_new_loans/securities to cover the cost of all new funds (deposits + nondeposit + equity)|

##### S T U D Y S E S S I O N 1 2 O F 1 2

## **Repos, Liquidity Transfer, and Interest Rate Risk Management**

The final session is the most formula-dense in the book: repo settlement mechanics and specials trading (R77), the matched-maturity marginal cost approach to liquidity transfer pricing (R78), the global dollar funding gap (R79), covered interest parity violations (R80), duration gap management (R81), and illiquid asset premiums (R82). R77, R78, R80, and R81 all carry real calculation weight — budget your remaining practice-question time here.

77 Repurchase Agreements · 78 Liquidity Transfer Pricing · 79 US Dollar Shortage · 80 Covered Interest Parity · 81 ALM and Duration Techniques · 82 Illiquid Assets

###### **S TUDY SESSION 12 · READING 77**

#### **Repurchase Agreements and Financing**

##### **The story**

Repos are the workhorse of short-term secured funding, and this reading builds them from the settlement formula up through their starring role in two 2008 collapses (Bear Stearns, Lehman) to the specials-trading mechanics that make Treasury auction dynamics tradeable. Dense and calculation-heavy — budget real time here.

###### **Repo mechanics and settlement**

###### **REPURCHASE PRICE**

Repurchase price = Contract price × [1 + repo rate × (days/360)]

###### **WORKED EXAMPLE**

Borrow $11M for 31 days at 0.3% (30bps annualized): Repurchase price = $11,000,000 × [1 + 0.003×(31/360)] = **$11,002,842** .

**Repo** = the transaction from the borrower/seller's side; **reverse repo** = same trade from the lender/buyer's side. Rates are always quoted annualized, actual/360 day count (standard money-market convention).

###### **Motivations: borrowers vs. lenders**

Borrowers: cheap secured funding (vs. unsecured) and bond-position financing (roll/renew via back-to-back repo trades if switching counterparties). The tradeoff between repo's cheap-but-unstable financing and equity's stable-but-expensive financing is **liquidity management** . Lenders: cash management (reverse repo as a low-risk short-term investment — money market funds, municipalities restricted from riskier assets) or short position financing (obtain specific bond collateral via reverse repo, then short-sell it).

###### **Counterparty risk vs. liquidity risk in repos**

**Counterparty (credit) risk** : borrower default — mitigated by collateral (lender simply sells it). **Liquidity risk** : adverse change in collateral value/liquidity during the repo term — mitigated by haircuts, margin calls, shorter terms, and higher-quality collateral. Repos are short-term and secured, so credit risk is usually minor; liquidity risk (collateral value/liquidity during stress) is the more persistent concern.

###### **Lehman and Bear Stearns — the 2008 case studies**

|**Firm**|**Mechanism**|
|---|---|
|Lehman<br>Brothers|JPM (tri-party repo agent) lent intraday on secured, initially haircut-free terms; as risk rose (Aug 2008), JPM phased in haircuts, exposure exceeding $100B in<br>the final week. Lehman alleged JPM abused insider access to drain ~$14B in collateral while already overcollateralized; JPM maintained it acted in good faith<br>against deteriorating, overstated collateral values.|
|Bear|Shifted from unsecured commercial paper to secured term repo pre-2007 (seemingly more stable) — but as lenders grew unwilling to roll term repos in the|
|Stearns|crisis, terms shortened, haircuts grew, and a March 2008 confidence-driven run led to mass non-rollover and collapse (bailed out, then sold to JPM).|

###### **General collateral vs. special collateral**

**General collateral (GC)** : lender cares only about the broad security category, not a specific issue — gets the highest repo rate (the "GC rate"). Fed funds-GC spread widens when Treasuries are scarce or during stress. **Special collateral** : lender wants a _specific_ security (for shorting/financing purposes) — accepts a lower "special rate" in exchange for getting that exact bond.

###### **Special spreads and the Treasury auction cycle**

**SPECIAL SPREAD** Special spread = GC rate − special rate

**On-the-run (OTR)** = most recently issued (most liquid); **off-the-run (OFR)** = everything else. OTR issues are the preferred short-covering vehicle, so they see the widest special spreads. Pattern: spreads _narrow_ right after an auction (fresh OTR supply depresses the special rate further) and _widen_ before the next auction (shorts must roll into the still-scarce current OTR issue). Spread is bounded: floor at 0% special rate (below that, no one would lend the bond — free financing has a limit), cap at the GC rate; post-2009, a failed-trade penalty rate = max(3% − fed funds rate, 0) sets a tighter effective cap.

###### **Financing value of a special bond**

###### **FINANCING VALUE ($100 NOTIONAL)**

Value = $100 × special spread × (days/360)

###### **WORKED EXAMPLE**

Special spread=0.18%, expected special period=90 days: Value = 100 × 0.0018 × (90/360) = **$0.045** per $100 (4.5 cents) of financing value.

###### **TRAP**

The fed funds-GC spread (funds rate vs. GC rate) and the special spread (GC rate vs. special rate) are two _different_ spreads measuring different things — don't conflate them when a question describes market stress widening "the spread."

###### **S TUDY SESSION 12 · READING 78**

#### **Liquidity Transfer Pricing: A Guide to Better Practice**

##### **The story**

Liquidity transfer pricing (LTP) answers a deceptively simple question: how much should a business unit be charged (or credited) for the liquidity it uses (or provides)? Pre-crisis, many banks answered "nothing" — this reading is a post-2009-survey-based tour of four LTP approaches, ending at the recommended best practice (matched-maturity marginal cost), plus contingent liquidity pricing for undrawn commitments.

###### **LTP process and governance best practices**

LTP should be centrally managed by a **group treasury** , using the marginal cost of funds matched to product maturity (historically LIBOR/swap curve; going forward, SOFR-based). Loans (assets) are charged a liquidity premium; deposits (liabilities) are credited for the liquidity they provide, based on maturity. Precrisis deficiencies: decentralized funding with weak controls, LMIS unable to compute granular costs, compensation schemes rewarding profits that ignored liquidity cost, underpricing via zero/average-cost approaches, no stress-test-based sizing of the liquidity cushion, illiquid long-term assets funded on cheap overnight money, and flat average charges that ignored business-line-specific contingent risk.

###### **Four LTP approaches (in ascending order of quality)**

|**Approach**|**Mechanics**|**Key flaw**|
|---|---|---|
|Zero cost|Rate = swap curve, no spread added at all|Liquidity treated as free — massively underprices long-term<br>illiquid assets|
|Pooled average cost|One flat spread above/below swap curve for all maturities|Undercharges long-tenor assets, overcharges short; distorts<br>loan-to-deposit ratio if spread is adjusted|
|Separate average cost|Different flat spread for assets vs. liabilities, still flat across maturities|Same maturity-blindness, just for two curves instead of one|
|Matched-maturity marginal<br>cost (best practice)|Spread varies by maturity, based on the bank's actual current market cost of<br>funds (via internal swaps stripping fixed-to-floating)|Operationally harder to build/maintain, but prices risk<br>correctly|

###### **WORKED EXAMPLE (BULLET LOANS, WHY AVERAGE-COST UNDERPRICES LONG TENOR)**

Bank MMM (marginal, matched-maturity) charges 1bp/1yr and 80bps/5yr precrisis on $100,000 loans → $10 and $80. Bank AVG (average cost) charges a flat 2bps regardless of maturity → $20 for _both_ the 1-year and 5-year loan. The 5-year loan is underpriced by 4× under the average approach.

###### **AMORTIZING LOAN (TRANCHING APPROACH, ~DURATION LOGIC)**

A 5-year, $500,000 loan repaying $100,000 principal/year is treated as five separate $100,000 bullet loans at 1,2,3,4,5 years and summed — the total charge lands close to (but under) a pure 5-year bullet loan's charge, reflecting that principal is returned progressively, not all at maturity.

###### **WEIGHTED-AVERAGE LIFE (WAL) METHOD — FOR UNCERTAIN-CASH-FLOW AMORTIZING POOLS**

Charge = matched-maturity rate at the portfolio's WAL × portfolio balance

###### **WORKED EXAMPLE**

$1B of 15-year amortizing loans expected to actually repay (via prepayment behavior) over a WAL of 8 years; current 8-year matched-maturity rate = 58bps → charge = 0.0058 × $1B = **$5.8 million** .

Deposits: "sticky" (term deposits) vs. "hot/volatile" (demand deposits, savings, transaction accounts) — credit given should reflect actual expected duration of the funding, exactly mirroring the asset-side logic.

###### **Contingent liquidity risk pricing**

###### **CONTINGENT COMMITMENT CHARGE RATE**

Rate charged = (probability of drawdown × undrawn amount × liquidity cushion cost) / total credit line amount

###### **WORKED EXAMPLE**

$20M line, $5M drawn, $15M undrawn with 70% probability of draw, liquidity cushion cost = 15bps. Rate = (0.70 × $15M × 0.0015) / $20M = 0.07875% → charge = 0.0007875 × $20M = **$15,750** .

The liquidity cushion itself (per LCR/NSFR) should be built from cash and government securities — not overnight funding — and its cost should be attributed to the business activities most likely to draw on it, rather than spread as a flat average across all assets.

###### **TRAP**

The matched-maturity marginal cost of funds curve sits _above_ the average cost curve for long-tenor assets but _below_ it for short-tenor assets — it's not simply "always higher" than average cost; it correctly reprices risk in both directions relative to a flat average.

###### **S TUDY SESSION 12 · READING 79**

#### **The US Dollar Shortage in Global Banking and the International Policy Response**

##### **The story**

A macro-level case study in exactly the funding-gap/rollover-risk concept from R65 and R70, scaled up to the entire global banking system's USD exposure — and the unprecedented central-bank swap network the Fed built to fix it. Mostly conceptual, with one key measurement idea (bounding the funding gap) worth knowing precisely.

###### **How banks funded USD asset growth (three channels)**

Borrow domestic currency → convert spot → buy the USD asset; convert domestic liabilities to USD via FX swap; borrow USD directly in the interbank market. A **funding gap** exists whenever the USD asset investment horizon exceeds the maturity of the USD liabilities/swaps funding it — _domestic_ -currency mismatches are backstopped by the home central bank (lender of last resort in its own currency), but no central bank outside the Fed can create USD, so foreign-currency funding gaps are structurally more dangerous.

###### **Measuring the funding gap: bounds via nonbank liability maturity**

|**If USD liabilities to nonbanks are...**|**Bound established**|
|---|---|
|Longer-term|Lower bound = net USD position to nonbanks|
|Shorter-term|Upper bound = gross USD position to nonbanks|

BIS estimated the European bank USD funding gap at $1–1.2 trillion by mid-2007 (rising to $2–2.2 trillion if money-market funding is also treated as short-term). Vulnerabilities are visible only at the _consolidated, global_ balance sheet level — a bank's home-country balance sheet alone can badly understate true exposure, since foreign offices often book the majority of foreign-currency claims (Switzerland: ~80% of total consolidated assets are foreign claims, ~80% of which are booked outside Switzerland itself).

###### **Causes of the shortage & the Fed's swap network response**

Causes: maturity transformation growth, disrupted FX swap markets, money markets shunning bank paper, central banks drawing down their own USD reserves, illiquid USD assets that couldn't be sold without large losses, off-balance-sheet vehicles returning to balance sheets, and drawn-down credit commitments — all compounding into a widening gap as asset holding periods lengthened just as funding maturities shortened.

**Policy response** : the Fed extended reciprocal swap lines to other central banks (ECB, Swiss National Bank first, later Canada/England/Japan, then more broadly), collateralized by foreign currency, letting foreign central banks auction USD locally even to banks with no U.S. subsidiary or insufficient collateral. Made _unlimited_ for the ECB, BoE, and Swiss National Bank in late 2008 — effectively making the Fed an international lender of last resort. Two structural benefits: only the Fed can create unlimited USD (a template transferable to other currencies), and the swap network created no Fed counterparty credit risk since the lines were fully collateralized (credit monitoring of individual banks remained the foreign central bank's job).

###### **S TUDY SESSION 12 · READING 80**

#### **Covered Interest Parity Lost: Understanding the Cross-Currency Basis**

##### **The story**

CIP is supposed to be an iron law — a textbook no-arbitrage condition. This reading explains why it's been persistently _violated_ since 2008, using two related instruments (FX swaps and cross-currency basis swaps) to define the "basis," then gives the two-part explanation for why the basis opened up and why arbitrage hasn't closed it since.

###### **Covered interest parity — the baseline condition**

###### **CIP**

F = S × (1+r)/(1+r*)  —  equivalently: (F−S) = S × (r−r*) r = USD rate, r* = foreign currency rate, S = spot, F = forward

Two ways to "invest in USD" should have identical return: invest directly at r, or convert to FC at spot, invest at r*, and lock in reconversion at the forward rate F. A gap between these two returns is a risk-free arbitrage — which is exactly what CIP violations represent.

###### **FX swaps vs. cross-currency basis swaps**

||**FX swap**|**Cross-currency basis swap**|
|---|---|---|
|Term|Short-term (typically <1yr)|Long-term (often >1yr)|
|Reconversion at maturity|At the forward rate F|At the_original_spot rate S|
|Interim payments|None (single forward points quote)|Periodic interest exchanged: each leg's reference rate + the basis (b)|

###### **CROSS-CURRENCY BASIS (B)**

b = the adjustment to the USD leg's rate that restores CIP, given a "too-wide" forward premium (F−S)

Since 2008, the USD has traded at a persistent premium in FX swaps (F is higher than CIP alone would predict) — so the basis b is typically positive: the USD borrower pays the basis on top of the USD rate; the FC borrower pays less than the FC rate by the basis amount. If CIP held exactly, b=0 and the cross-currency swap is just a plain floating-for-floating currency swap.

###### **Two causes of a nonzero basis**

(1) **Decline in market liquidity** in underlying spot/forward FX — wider bid-ask spreads raise the transaction cost of executing the arbitrage, eating the potential profit. (2) **Risk premia** from rising counterparty credit risk (FX market counterparties) and rising sovereign credit risk (government bonds used as collateral in the arbitrage, measured via sovereign CDS spreads) — even small risk-premia increases can matter a lot if one currency's hedging demand is large.

###### **Why the basis opened (demand) and why it hasn't closed (limits to arbitrage)**

**Three demand sources** for currency hedging that grew post-crisis: banks hedging balance-sheet currency mismatches via FX swaps; institutional investors (insurers, banks) hedging foreign-currency portfolio risk; U.S. nonfinancial firms issuing foreign-currency debt when foreign credit spreads narrow, then swapping proceeds back to USD.

**Why arbitrage hasn't closed the gap** : exploiting the basis requires expanding the arbitrageur's balance sheet, which brings credit risk (both legs), capital/funding risk, and mark-to-market liquidity risk. Post-crisis regulatory, shareholder, and creditor pressure has made market participants manage balance sheets far more conservatively than before — these "limits to arbitrage" are why persistent CIP violations survive despite being, in principle, a textbook risk-free arbitrage.

###### **TRAP**

The cross-currency basis and the forward premium (F−S) are related but distinct — the basis is specifically the interest-rate _adjustment_ needed to restore CIP given an observed forward premium, not the forward premium itself.

###### **S TUDY SESSION 12 · READING 81**

#### **Risk Management for Changing Interest Rates: Asset-Liability Management and Duration Techniques**

##### **The story**

The book's other truly formula-dense reading alongside R64/R77/R78. Two complementary tools: **IS (interest- sensitive) gap** protects net interest income/margin; **duration gap** protects net worth (equity value). Know both formulas, both sign conventions, and both sets of limitations cold — this reading is a favorite for multi-part calculation questions.

###### **Net interest margin (NIM) and the IS gap**

###### **NIM**

NIM = NII / earning assets  —  NII = interest income − interest expense

###### **WORKED EXAMPLE**

Total assets=$50B, earning assets=$45B, interest income=$4B, interest expense=$2.2B. NIM = (4−2.2)/45 = **4.00%** .

###### **IS GAP (PER REPRICING BUCKET)**

IS gap = IS assets − IS liabilities

Positive IS gap = **asset sensitive** (rates ↑ → NII/NIM ↑; rates ↓ → NII/NIM ↓). Negative IS gap = **liability sensitive** (opposite). IS gap = 0 → NII/NIM unaffected by rate changes (under the simplifying assumption that all rates move together).

###### **CHANGE IN NII FROM A RATE CHANGE**

ΔNII = Δrate × IS gap

###### **WORKED EXAMPLE (MULTI-BUCKET)**

0–30 day bucket IS gap = −700 (liability sensitive): a +1% rate move → ΔNII = 0.01×(−700) = **−$7.00** . 31–90 day bucket IS gap = +900 (asset sensitive): +1% → ΔNII = 0.01×900 = **+$9.00** . If the _cumulative_ IS gap across all buckets is zero and all rates move in lockstep, overall NII is unaffected.

Relative gap = IS gap / total assets. Interest sensitivity ratio (ISR) = IS assets / IS liabilities. A bank confident in its rate forecast may deliberately skew the IS gap toward asset- or liability-sensitivity to profit from the expected move — the gap is a risk-management lever, not just a passive risk measure.

###### **Duration and the leverage-adjusted duration gap**

###### **DURATION-BASED % PRICE CHANGE**

###### Δ(value)/value ≈ −D × Δi

###### **WORKED EXAMPLE (PORTFOLIO DURATION)**

Weighted-average duration computed from position values as weights; e.g. discount rate rising 2.5%→3.0% (Δi=0.5%) on a portfolio with duration D: %Δassets = −D×0.005; applied to $250M assets with computed D≈5.28 gives Δvalue ≈ **−$6.6 million** .

###### **LEVERAGE-ADJUSTED DURATION GAP**

Dgap = DA − (Total Liabilities/Total Assets) × DL

To fully insulate net worth from rate changes, a bank needs DA = (TL/TA) × DL — _not_ simply DA=DL, because assets almost always exceed liabilities (positive equity), so equal percentage value changes on unequal dollar bases still move net worth.

**Duration gap sign**

**Effect of rising rates on net worth**

|Zero|Net worth insulated from rate changes|
|---|---|
|Positive (typical bank: long-duration assets, short-duration liabilities)|Net worth falls (assets lose more value than liabilities)|
|Negative|Net worth rises (liabilities lose more value than assets)|

ALCO's process: compute each asset/liability's duration, weight by market value, sum to portfolio durations, then compute the gap — and consider adding convexity for a better approximation on larger rate moves.

###### **Limitations of each tool**

**IS gap** : assumes all asset/liability rates move by the same amount (rarely true — banks reprice loan rates faster than savings rates, addressed partially via a _weighted_ IS gap with rate-sensitivity weights); repricing timing is often ambiguous (demand deposits/savings can reprice anytime at the bank's discretion); a zero cumulative gap can still mask real within-year NII volatility if repricing speeds differ across buckets.

**Duration gap** : hard to define cash-flow patterns (and thus duration) for demand deposits/savings; prepayment uncertainty on loans; more accurate for small rate changes only (convexity matters more for large moves); assumes a parallel shift of a parallel yield curve (unrealistic when short and long rates diverge, or the curve twists); duration itself shifts as rates change.

###### **TRAP**

A typical bank funding long-duration, fixed-rate mortgages with short-duration deposits/repos has a _negative_ IS gap (liability sensitive — short-tenor liabilities reprice faster) _and_ a _positive_ duration gap (long-duration assets exposed more than short-duration liabilities) — these two gaps often point in seemingly "opposite" directions on the same balance sheet, and both are simultaneously correct. Don't assume IS gap sign and duration gap sign must match.

**S TUDY SESSION 12 · READING 82**

#### **Illiquid Assets**

##### **The story**

Closes the book by turning the lens from bank liquidity management to portfolio-level illiquidity: how illiquid markets actually behave, why reported returns on illiquid assets systematically lie to you (three biases), and whether the "illiquidity premium" everyone assumes exists is actually real.

###### **Four characteristics of illiquid markets**

Nearly all asset classes are illiquid to some degree (even public equities have some friction); illiquid asset markets are collectively huge (U.S. residential mortgages ~$16T, institutional real estate ~$9T vs. NYSE+Nasdaq combined ~$17T in 2012); illiquid assets dominate most portfolios (~90% of individual wealth ex-human-capital; endowments/pensions have roughly quadrupled illiquid allocations since the mid-1990s); and liquidity can dry up even in normally-liquid markets during stress (repo/CP froze in 2008; auction-rate securities remained frozen for years afterward) — major liquidity crises recur roughly once a decade globally.

###### **Market imperfections that create illiquidity**

Participation costs (a "clientele effect" — only specialized investors can access some markets) and transaction costs (taxes, commissions, due diligence) are the textbook frictions — but three more subtle frictions mean an asset can stay illiquid _no matter how high_ the transaction cost paid: **search frictions** (can't find a counterparty at all, e.g. a buyer for a Manhattan skyscraper), **asymmetric information** (fear of trading with a better-informed counterparty — the "lemons" problem — can freeze a market entirely), **price impact** (large trades move the market), and **funding constraints** (illiquid assets are often debt-financed; a credit crunch removes the ability to transact regardless of price).

###### **Three reported-return biases (all inflate reported illiquid-asset performance)**

|**Bias**|**Mechanism**|**Effect**|
|---|---|---|
|Survivorship bias|Poorly-performing funds stop reporting or never start; failed<br>funds drop out of databases|Reported returns overstated ~1–2% (mutual funds), up to ~4% for illiquid assets|
|Sample selection<br>bias|Assets/companies are sold/reported when values are high<br>(zombie/shell companies simply aren't marked)|Alpha overstated (one VC study: reported alpha >90% vs. −7% corrected); beta and<br>variance understated (fewer, only-high prices flatten the SML)|
|Infrequent<br>trading|Stale, smoothed prices between trades|Betas, volatility, and correlations all understated|

###### **UNSMOOTHING EXAMPLE**

NCREIF reported real estate return, Dec 2008: −8.3%; unsmoothed (noise added back): **−36.3%** . Reported SD that quarter: 2.25%; unsmoothed SD: **6.26%** (vs. ~7.5% for stocks). S&P 500/NCREIF correlation rose from 9.2% to 15.8% once unsmoothed — illiquid assets look far less risky and far less correlated with equities than they actually are, purely due to stale pricing.

###### **Is there really an illiquidity risk premium?**

**Across asset classes** : the naive Ilmanen-style chart (venture capital ~16–17% down to cash ~4%) suggests a clean illiquidity-return relationship — but this is likely an illusion, because (1) the three biases above inflate illiquid-asset returns, (2) illiquid assets carry risks beyond pure illiquidity that aren't properly adjusted for (one study: risk-adjusted, most investors do better in the S&P 500 than in private equity), (3) there's no investable "index" for illiquid asset classes (nobody actually owns the NCREIF's thousands of properties), and (4) you're forced to rely on manager skill with no way to isolate passive/index returns from true alpha.

**Within asset classes** : here the premium looks genuine — less liquid assets earn more than more liquid ones within the same class (T-bond vs. T-note yield gaps during the crisis exceeding 5% despite near-identical cash flows; illiquidity explains ~7% of investment-grade and ~22% of junk bond yield variation; equity illiquidity premia estimated at 1–8% depending on measure, with a stark ~1% listed vs. ~20% OTC-stock gap).

###### **Four ways to harvest illiquidity premiums**

(1) Passive allocation to illiquid asset classes · (2) liquidity security selection (pick less-liquid names within a class) · (3) act as a market maker (buy at a discount from urgent sellers, sell at a premium to urgent buyers — e.g., DFA in small-cap equities) · (4) **dynamic factor strategies** (long illiquid, short liquid, rebalance countercyclically) — the reading identifies this last one as easiest to implement and likely to have the _largest_ effect on portfolio returns.

###### **Portfolio allocation implications**

Illiquidity reduces optimal holdings (rarer expected liquidity events → lower optimal allocation), causes allocation drift between rebalancing opportunities (can't correct until the next liquidity event arrives), removes the ability to hedge against a declining untradeable position, rules out arbitrage (which requires continuous trading), and demands a genuine illiquidity premium in return for the lock-up. Real-world lesson: Harvard's endowment fell >$8B (22%) in 2008 and faced 50% discounts trying to sell private equity stakes for operating cash — only liquid assets can actually be "eaten." Skilled, resourced investors (elite endowments) may still find illiquid markets attractive precisely because of their inefficiency and information asymmetry — but the same features that create opportunity for the skilled create losses for the unskilled.

### **Cross-Reading Synthesis: The Five Threads of Book 4**

Liquidity and Treasury Risk is unusually cohesive for an FRM book — nearly every reading is really an elaboration of one core tension: _the asset you hold may not convert into the cash you owe, exactly when you need it to._ Five recurring threads make that tension precise.

###### **1. Transactions liquidity risk vs. funding liquidity risk, over and over**

First split apart in R64, formalized with full mechanics in R65, and then re-applied at every scale: intraday (R69), the full cash-flow term structure (R70), dealer banks specifically (R71), the global USD system (R79), and individual portfolios (R82). Whenever a reading asks "what kind of liquidity risk is this," the answer is almost always one of these two, or their interaction (funding risk forcing a transactions-risk fire sale, or vice versa).

###### **2. Maturity mismatch → rollover (cliff) risk, at every scale**

R65 introduces the concept for a generic firm; R79 scales it up to the entire global banking system's USD funding gap; R81 gives it the most precise treatment via the IS gap and duration gap. The mechanism is identical each time: fund something long-dated with something short-dated, profit from the spread in normal times, and face existential risk the moment refinancing isn't available on the old terms.

###### **3. Cash-timing mismatches can bankrupt an economically "correct" position**

R64's three case studies (Northern Rock, Ashanti Goldfields, Metallgesellschaft) all share this lesson, and it resurfaces in R77's Bear Stearns/Lehman studies and R82's Harvard endowment example: being right about an asset's long-run value is no protection against a margin call, a redemption, or an operating cash need that's due today, in cash, regardless of your balance sheet's paper health.

###### **4. The marginal, matched-maturity principle beats every flat/average shortcut**

This shows up as the single best-practice answer across multiple readings: matched-maturity marginal cost in LTP (R78) beats zero-cost and average-cost approaches; duration-matching (DA vs. leverage-adjusted DL) in ALM (R81) beats simple maturity-matching; risk-based, granular contingent-liquidity pricing (R78) beats flat average charges. The pattern: whenever a bank uses a flat, averaged, or backward-looking price for something that is genuinely maturity- or riskdependent, it creates a hidden subsidy that someone eventually exploits.

###### **5. Reported numbers understate real risk almost everywhere in this book**

Stressed LVaR is dramatically larger than normal-market LVaR (R64) — roughly 3.7× in the reading's own worked example. Square-root-of-time VaR overstates the risk of a position that's actually liquidated gradually (R65). Average-cost LTP understates the true funding cost of long-tenor assets (R78). And illiquid-asset reported returns are inflated while their true risk (volatility, beta, correlation) is understated by three separate biases (R82). The through-line: naive, backwardlooking, or oversimplified measurement methods systematically flatter risk across liquidity and treasury topics — always ask "what would the corrected/stressed/ unsmoothed number look like?"

###### **Formula-dense vs. conceptual readings — where to spend practice-question reps**

**Heaviest formula load (drill hardest):** R64 (LVaR), R65 (leverage effect, transactions cost), R68 (reserves), R77 (repo settlement, specials), R78 (LTP, contingent pricing), R80 (CIP), R81 (IS gap, duration gap).

**Mostly conceptual (fast review, spot-check with questions):** R66, R67, R69, R70, R71, R72, R73, R74, R75, R76, R79, R82 (R82 has numeric examples but the exam emphasis is conceptual).

### **Complete Formula Index**

Stressed buffer = normal buffer − stressed outflows + stressed inflows

###### **R64 — Liquidity Risk**

p=offer−bid, s=p/mid, cost=s×(α/2) Stressed cost: Σ{α×[μ+γσ]/2} LVaR = VaR + cost of liquidation LCR = HQLA/30-day net outflow ≥100% NSFR = ASF/RSF ≥100%

###### **R65 — Liquidity and Leverage**

L = total assets/equity rE = L×rA − (L−1)×rD

ΔROE = ΔL×(ROA−cost of debt) Margin loan leverage = 1/h (haircut) Expected cost = mid×s/2; spread risk factor=½(s+2.33σs) Corrected T-day VaR = VaR(1d)×√[(1/T)Σi²]

###### **R68 — Reserves Management**

L = supplies−demands of liquidity Total required legal reserves = Σ(reservable liability×ratio) Liquidity indicator ratios (cash position, core deposit, hot money, capacity, etc.)

###### **R70 — Monitoring Liquidity**

TSECF / TSECCF (maturity ladder, cumulative) TSLGC / TSCLGC (liquidity generation capacity) TSAA (available assets); TSLaR (liquidity-at-risk)

**R72 — Liquidity Stress Testing**

###### **R75/76 — Deposits & Nondeposit Liabilities**

Marginal deposit pricing: cost of new funds vs. yield earned Available funds gap = projected loans/investments − projected deposits/available funds

###### **R77 — Repurchase Agreements**

Repurchase price = contract price×[1+rate×(days/360)] Special spread = GC rate − special rate Financing value = $100×spread×(days/360) Failed-trade penalty = max(3%−fed funds rate, 0)

###### **R78 — Liquidity Transfer Pricing**

WAL charge = matched-maturity rate at WAL × balance Contingent charge rate = (P(draw)×undrawn×cushion cost)/total line

###### **R80 — Covered Interest Parity**

F = S×(1+r)/(1+r*) (F−S) = S×(r−r*) Cross-currency basis (b) = CIP-restoring adjustment to USD rate

###### **R81 — ALM and Duration**

NIM = NII/earning assets IS gap = IS assets − IS liabilities ΔNII = Δrate × IS gap %Δvalue ≈ −D×Δi Dgap = DA − (TL/TA)×DL
