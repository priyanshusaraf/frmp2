# FRM Part II — Market Risk Measurement and Management (Complete, Book 1)

**F R M P A R T I I  ·  M A R K E T R I S K M E A S U R E M E N T A N D M A N A G E M E N T**

All 16 Readings, All 3 Study Sessions:

Risk Measurement (1-6) · Correlation Risk (7-9) · Term Structures & Volatility (10-16)

Built directly from your Schweser Book 1 · every formula, every reading's story, worked examples, and the exam traps GARP likes to test — threaded into one continuous narrative from Reading 1 to Reading 16.

Complete companion guide for Market Risk Measurement & Management.

# **The Big Picture Before You Read a Single Formula**

##### **WHY THESE FOUR READINGS ARE REALLY ONE STORY**

Every risk management decision — how much capital to hold, whether a trade is too risky, whether a bank's model is trustworthy — starts with a single question: **"how much could we lose, and how confident are we in that number?"** Readings 1–4 build that number from the ground up, then stress-test it, then break it deliberately (extreme events), then audit it. Nothing here is a standalone topic — each reading exists because the previous one has a specific weakness.

*[image omitted]*

|**Reading**|**What it builds**|**Why it exists (the weakness it fxes)**|
|---|---|---|
|**1. Estimating Market**<br>**Risk Measures**|VaR (historical & parametric), Expected<br>Shortfall, coherent risk measures, QQ plots|Baseline: how do you even compute a loss<br>number?|
|**2. Non-Parametric**<br>**Approaches**|Bootstrapping, density smoothing, age/<br>volatility/correlation-weighted and fltered<br>historical simulation|Fixes: plain historical sim treats all 1,000 days as<br>equally relevant and can't give you a VaR<br>"between" data points|
|**3. Extreme Value**<br>**Theory**|GEV distribution, Peaks-Over-Threshold,<br>Generalized Pareto, multivariate EVT|Fixes: everything in Readings 1–2 is calibrated to<br>"normal" days — none of them are built for<br>crashes|
|**4. Backtesting VaR**|Failure rates, z-test, Kupiec LR test, conditional<br>coverage, Basel trafc-light zones|Fixes: none of the above numbers mean anything<br>unless you can prove, statistically, that they work|

##### **THE EXAM-TRAP PATTERN ACROSS ALL FOUR READINGS**

GARP tests this topic in three layers, and you should drill all three, not just the middle one:

1. **Formula recall** — can you compute VaR, ES, a z-score, or an LR statistic correctly?

2. **Extreme / edge cases** — what happens when λ→1? when ξ=0 vs ξ>0? when n is very large or very small? what changes if you use profit/loss data instead of returns? These "what if the input is a boundary value" questions are where most candidates lose points.

3. **Conceptual traps** — sign conventions (VaR is quoted positive but is a negative quantile), the difference between unconditional and conditional coverage, why a model can be "too conservative" and still get flagged.

## **READING 1 — Estimating Market Risk Measures**

##### **WHERE THIS FITS IN THE STORY**

This is the foundation reading. Everything else in Market Risk — mapping, backtesting, FRTB, even fixed-income risk — assumes you already understand what VaR and Expected Shortfall are, how they are computed under different distributional assumptions, and how confident you can be in the number itself. Think of this reading as building a ruler; the rest of the book is about calibrating and stress-testing that ruler.

### **1. Return conventions — get this right before anything else**

Two ways to define P&L over a period: **arithmetic** (no reinvestment of interim payments — fine for short horizons) and **geometric/continuously-compounded** (reinvestment assumed, guarantees price can never go negative — used for longer horizons and for the lognormal VaR model below).

*[image omitted]*

##### **SIGN CONVENTION TRAP**

FRM always quotes VaR and losses as **positive numbers** , even though the underlying quantile is mathematically negative (it's in the left tail). "Expected loss is $1 million," never "expected profit is −$1 million." If an answer choice has the wrong sign, it's wrong — this is a free point if you internalize it now.

### **2. Historical Simulation VaR LO 1.a**

The simplest method: order your P&L/return observations from worst to best, and pick the observation that separates the tail (α) from the body (1−α). With _n_ observations at confidence level (1−α):

##### **RANK OF THE VAR OBSERVATION**

*[image omitted]*

##### **WORKED EXAMPLE**

1,000 monthly returns, 95% confidence → 5% of 1,000 = 50 observations in the tail, so the **51st** worst observation is the VaR cutoff (rank = 0.05×1000+1 = 51). If that return is −15.5% and you have $1,000,000 invested, monthly VaR = 15.5% × $1,000,000 = **$155,000** .

##### **EXTREME-CASE TRAP: 50TH VS 51ST OBSERVATION**

The textbook formula gives (α×n)+1 = 51st observation. But past FRM exams have also used simply (α×n) = 50th observation. **Know both conventions** — if the exam gives you a specific method, follow it; if ambiguous, the (αn) +1 convention is the "book" answer. This exact ambiguity has been tested before.

Historical simulation only works well if you believe the future will resemble the past — it cannot adapt to changing volatility regimes or shocks that never occurred in the sample. That single sentence is the entire motivation for Reading 2 and Reading 3.

### **3. Parametric VaR — Normal and Lognormal LO 1.b**

Instead of using the empirical data directly, assume a distribution. Two cases:

*[image omitted]*

##### **WORKED EXAMPLE — NORMAL P&L**

XYZ's annual P&L is normal with mean $15M, SD $10M. VaR(5%) = −15 + 10×1.65 = **$1.5M** |   VaR(1%) = −15 + 10×2.33 = **$8.3M** Notice VaR(1%) > VaR(5%) — a deeper confidence level always produces a larger (worse) VaR. If an exam question shows the reverse, something is wrong (or the question is testing whether you'll catch that impossibility).

For lognormal returns (used because it guarantees the asset price can never go negative — the same intuition as geometric returns above):

*[image omitted]*

##### **EXTREME-CASE TRAP: NORMAL VS LOGNORMAL VAR CONVERGENCE**

For **short time horizons and small return values** , lognormal VaR and normal (arithmetic) VaR converge to nearly the same number — because e^x ≈ 1+x when x is small. The exam may ask you to recognize this rather than compute it: if σ and the horizon are both small, don't be surprised the two methods "agree."

### **4. Expected Shortfall LO 1.c**

##### **WHY ES EXISTS**

VaR answers "what's the worst loss I won't exceed, 95% of the time?" — but says nothing about how bad the remaining 5% could be. Two portfolios can have identical VaR but wildly different tail severity. ES fixes this by **averaging the VaRs at increasingly deep confidence levels within the tail.**

*[image omitted]*

##### **WORKED EXAMPLE (N=5 SLICES)**

Divide the tail into 5 equal-probability slices, compute the VaR at each slice boundary (1%, 2%, 3%, 4%), and average the 4 resulting VaRs. As n → ∞ (more, thinner slices), ES converges to the true expected tail loss. This is exactly why ES is described as "the average loss given that VaR has been breached": E[L | L > VaR].

##### **TRAP: ES IS ALWAYS ≥ VAR AT THE SAME CONFIDENCE LEVEL**

Because ES is an average of losses that are all at least as bad as VaR, **ES ≥ VaR always** , at any confidence level, for any distribution. If an answer choice reverses this, it's automatically wrong.

### **5. Coherent Risk Measures LO 1.d**

ES is actually a special case of a broader family: a **coherent risk measure** is a weighted average of quantiles across the _entire_ distribution (not just the tail), where the weights reflect a chosen risk-aversion function. For ES specifically, the weight is 1/(1−c) inside the tail and zero everywhere else — i.e., ES is a coherent risk measure with a very particular (indicator-function) weighting scheme.

|**Feature**|**VaR**|**Expected Shortfall**|**Coherent Risk Measure (general)**|
|---|---|---|---|
|Region weighted|Single point|Tail only|Entire distribution|
|Weighting|N/A|Equal weight in tail|User-specifed risk-aversion function|
|Coherent? (subadditive)|No|Yes|Yes, by construction|

##### **CONCEPTUAL TRAP**

"Coherent risk measure" ≠ "ES." ES is _one example_ of a coherent risk measure. Don't let the exam use them as if interchangeable — the general coherent measure weights **every** quantile of the loss distribution, not only tail quantiles.

### **6. Standard Errors of Risk Measure Estimators LO 1.e**

An estimated VaR/ES is only as useful as its precision. The standard error of a quantile estimator:

*[image omitted]*

##### **CONFIDENCE INTERVAL AROUND THE QUANTILE**

*[image omitted]*

##### **EXTREME-CASE / COMPARATIVE STATICS — THESE ARE TESTED**

- **n ↑ (more data)** → SE ↓ → narrower CI (more precision)

- **bin width h ↑** → f(q) ↑ (more mass captured) → SE ↓ → narrower CI

- • **p ↑ (tail probability up, i.e., less extreme quantile)** → SE ↑ up to p=0.5 where p(1−p) is maximized, then falls again. Deep-tail (small p) quantiles are estimated _more precisely in relative variance terms_ , but have far fewer data points supporting them — this is the tension that motivates Reading 3 (EVT).

*[image omitted]*

Plot empirical quantiles against theoretical (e.g., normal) quantiles at matching confidence levels. If both come from the same distribution family, the plot is a straight 45° line. Fatter-tailed empirical data (e.g., t-distribution) will match the normal near the median but **diverge in the tails** — this is exactly the visual signature of "returns look normal in the middle but have crash risk the normal distribution understates," which is the entire justification for needing EVT.

##### **TRAP**

QQ plots are a **visual/diagnostic** tool only — not a formal statistical test. If an answer choice says QQ plots "test" or "prove" a distributional assumption, that's wrong; they let you "identify" or "visually inspect" characteristics.

## **READING 2 — Non-Parametric Approaches**

##### **WHERE THIS FITS IN THE STORY**

Reading 1 gave you two extremes: assume nothing about the shape of the data (historical simulation) or assume a full parametric distribution (normal/lognormal). Reading 2 makes historical simulation _smarter_ without going all the way to a parametric assumption — it keeps the "let the data speak" philosophy of historical simulation but fixes its two biggest weaknesses: (1) treating a 3-year-old observation exactly like yesterday's, and (2) being stuck with only as many possible VaR levels as you have data points.

### **1. Bootstrap Historical Simulation LO 2.a**

Resample from your original data set **with replacement** , compute VaR (or ES) on each resampled draw, repeat many times, then average all the sample VaRs. This averaging is what makes bootstrapped estimates more precise than a single pass of historical simulation on raw data — you're essentially running Reading 1's method thousands of times and averaging out sampling noise.

##### **INTUITION, NOT A FORMULA TO MEMORIZE**

Think of it like polling: instead of trusting one sample of 1,000 voters, you draw thousands of resamples (with replacement) from that same pool of 1,000 and average your estimate across all the resamples — you get a more stable number even though you never collected new data.

### **2. Non-Parametric Density Estimation**

###### **LO 2.b**

Plain historical simulation with n observations only allows n possible confidence levels — you cannot compute a VaR "between" data points (e.g., 95.5% if you only have 100 observations). The fix: connect the midpoints of adjacent histogram bars to create a smoothed density, redistributing area between bars without losing any total probability mass. This lets you read off a VaR at _any_ confidence level continuously.

### **3. The Four Weighting Improvements LO 2.c**

##### **WHY PLAIN HISTORICAL SIMULATION IS FLAWED — MEMORIZE THIS REASONING, NOT JUST THE FIX**

Plain HS gives every observation in the window equal weight (1/n) and observations outside the window **zero** weight. This creates "ghost effects" — a single crash observation dominates VaR for exactly n days, then vanishes overnight from the calculation the moment it rolls out of the window, even though nothing in market conditions actually changed on that day.

#### **(a) Age-weighted (a.k.a. hybrid approach)**

##### **WEIGHT OF AN OBSERVATION I DAYS OLD**

*[image omitted]*

##### **EXTREME CASE**

λ → 1 recovers plain equal-weighted historical simulation exactly (no decay). λ close to 0 means only the most recent observations matter at all — a small change in λ can dramatically change how "reactive" your VaR is.

#### **(b) Volatility-weighted (Hull & White)**

*[image omitted]*

Adjusts each historical return by the ratio of current volatility forecast (day T, from GARCH/EWMA) to the volatility that prevailed on the day the return actually occurred. If markets are currently calmer than the historical window, old volatile returns get scaled down (and vice versa) — but critically, **the VaR calculation procedure itself is unchanged** ; only the input data changes.

##### **TRAP — THIS EXACT DISTINCTION HAS BEEN TESTED**

"Historic returns are adjusted, VaR calculation procedure is the same" is the correct characterization. Don't confuse "the data changes" with "the method changes" — the method is still literally historical simulation, just fed smarter inputs.

#### **(c) Correlation-weighted**

Same logic as volatility weighting but applied to the full variance-covariance matrix: diagonal elements (individual variances) and off-diagonal elements (covariances/correlations) are both updated to reflect current market conditions. This is strictly more general than volatility weighting alone — volatility weighting only updates the diagonal.

#### **(d) Filtered Historical Simulation (most comprehensive)**

Combines historical simulation with a conditional volatility model (GARCH or asymmetric GARCH): standardize returns by their conditional volatility, bootstrap the standardized residuals, then rescale. This captures volatility clustering and asymmetric shocks, and — unlike plain historical simulation — **can produce losses outside the historical range** because bootstrapped/rescaled shocks can combine in ways never observed historically.

### **4. Advantages / Disadvantages LO 2.d**

|**Advantages**|**Disadvantages**|
|---|---|
|Intuitive, simple, no distributional<br>assumption|Entirely dependent on the historical window used|
|Handles skewness/fat tails without<br>adjustment|Volatile historical periods → VaR/ES overstated|
|No variance-covariance matrix estimation<br>needed|Quiet historical periods → VaR/ES understated|
|Can combine methods (e.g. age +<br>volatility weighting)|Cannot see losses beyond the historical maximum (mostly true for plain HS; less<br>true for volatility/fltered HS)|

## **READING 3 — Parametric Approaches (II): Extreme Value Theory**

##### **WHERE THIS FITS IN THE STORY**

Readings 1 and 2 are both calibrated to the _bulk_ of the distribution — the "normal" 95% of days. But the days that actually bankrupt institutions are the 1-in-1000 events that barely appear in any historical sample. EVT is a completely different statistical philosophy: instead of fitting a distribution to the whole dataset and hoping the tail comes out right, EVT fits a distribution **only to the extreme observations themselves.**

### **1. Why Extreme Values Are Hard LO 3.a**

By definition there are very few extreme observations to estimate a model from, and some plausible extreme scenarios have simply never happened yet in your sample (the "unprecedented" flood, crash, or default wave). Any assumed distribution will have some error since we can never confirm it against the true (unobservable) tail.

### **2. Generalized Extreme Value (GEV) Distribution LO 3.b**

The Fisher-Tippett theorem: as sample size n grows, the distribution of sample _maxima_ Mn converges to:

*[image omitted]*

||||t-distribution, Pareto — the realistic case for<br>markets|
|---|---|---|---|
|ξ = 0|**Gumbel**|Light tail|Normal, lognormal|
|ξ < 0|**Weibull**|Bounded / thinner than<br>normal|Rare in fnance|

##### **EXTREME-CASE TRAP**

Because ξ < 0 (Weibull) almost never shows up in financial return data, FRM practically narrows the choice down to **ξ > 0 vs ξ = 0** — Fréchet vs Gumbel. Three decision rules for choosing between them, all fair game as conceptual questions: (1) you're confident about the parent distribution (e.g., you know it's t-distributed → assume ξ>0), (2) a statistical test fails to reject ξ=0 → use Gumbel, (3) when in doubt, assume ξ>0 to be conservative (avoid understating tail risk / "model risk").

Parameters μ (location) and σ (scale) are related to, but **not identical to** , the mean and standard deviation. Estimation methods: maximum likelihood (most rigorous), regression (order the extremes, simpler), and semi-parametric (Hill estimator — main challenge is choosing how many tail observations to include).

*[image omitted]*

Instead of modeling block maxima (GEV), POT models **every** observation that exceeds a threshold u. As u gets large, the Gnedenko-Pickands-Balkema-deHaan (GPBdH) theorem says the distribution of excess losses converges to the **Generalized Pareto (GP) distribution:**

*[image omitted]*

##### **THE THRESHOLD TRADE-OFF — A CLASSIC EXAM QUESTION**

u too **high** : fewer observations remain above it → poor parameter estimation, but the GPBdH approximation is more accurate. u too **low** : more observations, but the theorem's approximation breaks down because you're no longer looking at genuinely extreme events. This bias-variance style trade-off is tested directly and conceptually.

### **4. VaR and Expected Shortfall under POT**

*[image omitted]*

##### **WORKED EXAMPLE**

β = 0.75, ξ = 0.25, u = 1%, Nu/n = 5%, confidence c = 99% (so 1−c = 0.01):

VaR = 1 + (0.75/0.25)×[(0.05/0.01)<sup>−0.25</sup> − 1]... work through the algebra exactly as in the reading; the mechanical steps are: (1) compute (Nu/n)/(1−c) or its inverse per the exact formula orientation used, (2) raise to the power −ξ, (3) plug into the bracket, (4) then feed the resulting VaR into the ES formula, which only needs VaR, ξ, β, and u — no re-derivation from scratch.

##### **FORMULA-RECALL TRAP**

Note the structural relationship: **ES is a simple linear function of VaR** once you already have it — this means if you're given VaR directly in a question, you should never need to recompute the whole POT VaR formula to get ES. Also note ES/VaR > 1 whenever ξ > 0, consistent with "ES ≥ VaR" from Reading 1.

### **5. GEV vs POT LO 3.d**

||**GEV**|**POT**|
|---|---|---|
|Focuses on|Distribution of block maxima|Distribution of exceedances over threshold u|
|Parameters|3 (μ, σ, ξ)|2 (β, ξ) — fewer, but needs choice of u|
|Shared parameter|ξ (tail index) — identical i|nterpretation in both|
|Data efciency|Can discard a lot of data (only keeps block maxima)|Uses all data above threshold|

### **6. Multivariate EVT LO 3.f**

Extreme events are often **correlated** across assets/markets (a terrorist attack on oil infrastructure hits oil companies AND broader risk sentiment). Standard tools — elliptical distributions, covariance matrices — fail for modeling joint tail dependence. The solution is **copulas** from the EV-copula family.

##### **THE "CURSE OF DIMENSIONALITY" TRAP — NUMERIC AND CONCEPTUAL**

If a univariate extreme event occurs 1-in-100, a joint extreme event for 2 independent variables occurs roughly 1- in-10,000 (100×100); for 3 variables, roughly 1-in-1,000,000. **The number of parameters to estimate grows while the number of genuinely extreme joint observations shrinks** — this tension is exactly analogous to the POT threshold trade-off, just in higher dimensions. If you see a question with these numbers, it's testing this exact multiplication.

## **READING 4 — Backtesting VaR**

##### **WHERE THIS FITS IN THE STORY**

Readings 1–3 gave you three different ways to produce a VaR number. This reading answers the only question that actually matters to a regulator: **how do you know any of these numbers can be trusted?** Backtesting is the audit step — and it's the reading most likely to show up as a "which statistic tests what" conceptual question, so the map of tests matters more than any single formula here.

### **1. What Backtesting Is LO 4.a**

Compare predicted VaR losses to actual realized losses over a testing period. An **exception** = an actual loss that exceeds the predicted VaR. At a 95% confidence VaR, exceptions should occur roughly 5% of the time; too many exceptions ⇒ model understates risk; too few ⇒ model is overly conservative (which also has a cost — misallocated capital). Basel requires 99% confidence VaR backtested over 250 days; more than 4 exceptions triggers penalties.

### **2. Why Backtesting Is Hard LO 4.b**

VaR is computed on a **static** portfolio snapshot, but actual P&L reflects intraday trading, fees, commissions, and bid-ask spread effects the VaR model never captured. Fix: backtest with short (daily) holding periods and compare against "cleaned" returns (adjusted to remove non-risk P&L items like fee income), and track both actual and hypothetical (staticportfolio) returns.

### **3. Failure Rates and the z-test**

###### **LO 4.c**

*[image omitted]*

##### **WORKED EXAMPLE**

95% VaR, 252 days, 22 exceptions observed. p = 0.05, T = 252, x = 22.

z = (22 − 0.05×252) / √(0.05×0.95×252) = (22 − 12.6) / 3.46 ≈ **2.72** .

2.72 > 1.96 (critical value at 95%) → reject the null hypothesis that the model is unbiased → too many exceptions, model likely understates risk.

##### **CONCEPTUAL TRAP — TWO DIFFERENT CONFIDENCE LEVELS IN THE SAME PROBLEM**

The confidence level used to _compute_ VaR (e.g., 95%) is not the same as the confidence level used to _test_ whether the number of exceptions is acceptable (also often 95%, i.e., z-critical = 1.96, but conceptually a separate decision). Don't assume these must match, and don't confuse "VaR confidence level" with "backtest confidence level" when a question deliberately uses two different numbers.

*[image omitted]*

||**Type I error**|**Type II error**|
|---|---|---|
|Defnition|Reject a correct model|Fail to reject an incorrect model|
|Backtesting<br>example|Model is fne, but bad luck produces ≥5 exceptions<br>at 99% confdence (happens ≈10.8% of the time<br>even with a correct model)|Model is fawed, but by chance produces <5<br>exceptions and slips through (happens ≈12.8% of the<br>time, evaluated at 97% confdence)|
|Who bears the<br>cost|Bank penalized unfairly|Regulator misses a bad model — systemic risk|

##### **EXTREME-CASE TRAP: REGULATORS CARE MORE ABOUT TYPE II**

Regulators are structurally more worried about Type II errors (a dangerous model slipping through) than Type I (an accurate model getting unlucky), which is exactly why the Basel framework imposes penalties starting at just 5 exceptions even though a correct model can plausibly generate that many "by bad luck" over 10% of the time. Also know: using a 99% confidence level for VaR requires roughly **1.24×** more capital than 97.5%, giving banks an incentive to game the confidence level lower — which is exactly why Basel mandates 99%.

### **5. Unconditional Coverage — the Kupiec LR test LO 4.c**

|**KUPIEC UNCONDITIONAL COVERAGE LR STATISTIC**|
|---|

*[image omitted]*

Distributed χ² with 1 degree of freedom under the null. Reject the model if LRuc > **3.84** (= 1.96², the square of the normal critical value at 95% — this connection is a common "aha" the exam likes to test).

##### **WORKED EXAMPLE**

T=252, p=0.05, N=12 (expected N = 0.05×252 = 12.6, so 12 is very close to expectation). Plugging in gives LRuc well below 3.84 → **fail to reject** , model validated.

*[image omitted]*

##### **WHY THIS EXISTS**

LRuc only counts _how many_ exceptions occurred — not _when_ . If exceptions cluster together (e.g., 8 exceptions in one turbulent month, zero the rest of the year), the total count could still look statistically fine, but clustering is itself a red flag: it suggests correlations shifted or the trading book changed, and the model failed to adapt.

##### **CHRISTOFFERSEN CONDITIONAL COVERAGE STATISTIC**

*[image omitted]*

##### **TRAP**

You are NOT required to compute LRind or LRcc by hand for the exam — but you must know **what the test is for** (clustering / independence of exceptions over time) and the two rejection thresholds: reject overall model if LRcc > 5.99 (χ² with 2 df); reject independence alone if LRind > 3.84 (χ² with 1 df).

### **7. Basel Rules for Backtesting LO 4.f**

|**Zone**|**Exceptions (250 days,**<br>**99% VaR)**|**Capital**<br>**multiplier k**|**Interpretation**|
|---|---|---|---|
|**Green**|0–4|3.00 (no<br>penalty)|Consistent with an accurate model|
|**Yellow**|5–9|3.40 – 3.85|Supervisor discretion — could be bad luck, intraday trading efects,<br>model inaccuracy, or integrity issues|
|**Red**|10+|4.00|Automatic penalty|

##### **TRAP: THE FOUR CAUSES OF YELLOW-ZONE EXCEPTIONS**

Know all four named causes, because "the sample is small / small sample size" is a classic _wrong_ distractor that is NOT one of the four official categories: (1) model's basic integrity is lacking (bad data/code — penalty applies), (2) model accuracy needs improvement (penalty applies), (3) intraday trading activity (penalty considered), (4) bad luck / abnormal market conditions (no penalty guidance — expected to happen sometimes).

## **READING 5 — VaR Mapping**

##### **WHERE THIS FITS IN THE STORY**

Study Session 1 built the VaR/ES machinery on a single P&L series. Real portfolios have thousands of positions — you can't backtest or stress-test each one individually. Mapping is the bridge: replace each position with its exposure to a small set of common risk factors (interest rates, FX, equity indices), so all the Reading 1-4 machinery can run on a manageable number of variables instead of thousands.

*[image omitted]*

Mapping is useful when: (1) there are too many positions to model individually, (2) you need a common risk-factor "language" across very different instruments, (3) an asset has insufficient history (e.g., an IPO) so you map it to factors that DO have history, and (4) exposures change over time (e.g., bonds rolling down the curve).

### **2. General vs. Specific Risk**

###### **LO 5.b**

More risk factors → smaller specific (residual/idiosyncratic) risk, but more computation. A 5,000-stock portfolio needs ~12.5 million pairwise covariances if modeled stock-by-stock; mapping each stock to a single market index via its β collapses this to one factor.

*[image omitted]*

##### **TRAP**

Specific risk is not fixed — it is a function of how finely you define general risk factors. Adding a credit-risk factor, then a currency factor, to a bond portfolio's duration-only model keeps shrinking "specific risk" further. Don't treat specific risk as an intrinsic, unchangeable property of the asset.

### **3. Fixed-Income Mapping: 3 Methods LO 5.c, 5.d**

|**Method**|**What it captures**|**Precision**|
|---|---|---|
|Principal<br>mapping|Only the principal repayment, at the weighted-average life|Simplest, least precise|
|Duration<br>mapping|Maps the whole portfolio to a zero-coupon bond of matching duration|Better, still one number|
|Cash fow<br>mapping|Every individual cash fow mapped to its own maturity zero, incl. inter-maturity<br>correlations|Most precise, most<br>complex|

*[image omitted]*

##### **WORKED EXAMPLE (WHY THE THREE METHODS DISAGREE)**

$100M 1-year bond (3.5% coupon) + $100M 5-year bond (5% coupon). Principal mapping: average life = 3 years → VaR = $200M × 1.4841% = **$2.968M** . Duration mapping: duration = 2.768 years → interpolated VaR% = 1.3687% → **$2.737M** . Cash flow mapping (undiversified, ignoring correlation) = **$2.674M** ; once inter-maturity correlations are incorporated, diversified VaR falls further to **$2.615M** . Notice the ranking: principal ≥ duration ≥ cash flow (undiversified) ≥ cash flow (diversified) — more precision almost always means a lower, more realistic VaR because it captures genuine diversification the cruder methods miss.

##### **UNDIVERSIFIED VAR (PERFECT CORRELATION, Ρ=1)**

*[image omitted]*

**DIVERSIFIED VAR (MATRIX ALGEBRA WITH CORRELATION MATRIX R)**

*[image omitted]*

### **4. Stress Testing & Benchmarking LO 5.e, 5.f**

Stressing each zero by its own VaR (assuming ρ=1) reproduces undiversified VaR without doing matrix algebra — but breaks down the moment correlations aren't perfect. **Tracking error VaR** measures a portfolio's VaR relative to a benchmark; minimizing tracking error is _not_ the same objective as minimizing absolute VaR — a portfolio can have the lowest absolute VaR and simultaneously the highest tracking error (a barbell vs. a bulleted benchmark is the classic example).

### **5. Mapping Derivatives LO 5.g**

Forwards, FRAs, and swaps can be decomposed into linear combinations of basic building blocks (e.g., a currency forward = long foreign bill + short domestic bill + spot FX position) — the delta-normal method applies cleanly. Options are nonlinear; delta-normal VaR is only a reasonable local approximation over short (e.g., one-day) horizons where delta is roughly stable — it breaks down over longer horizons where delta itself moves meaningfully.

##### **TRAP**

Delta-normal VaR for options is a first-order (linear) approximation. If a question emphasizes a long horizon or a large price move, delta-normal VaR will understate true option risk — that's precisely why FRTB and other frameworks lean on full revaluation or delta-gamma methods for options books.

## **READING 6 — Messages From the Academic Literature**

##### **WHERE THIS FITS**

A conceptual bridge reading — almost entirely qualitative, no heavy formulas. It previews themes (liquidity risk, stressed VaR, integrated capital) that get built out fully in later books. Treat it as "the research summary chapter" sitting between the VaR toolkit (R1-5) and correlation risk (R7-9).

|**Theme**|**Key takeaway**|
|---|---|
|VaR time horizon|No universal "correct" horizon — depends on portfolio liquidity and purpose. 10-day is a convention,<br>not a law of nature.|
|Time-varying volatility|Ignoring it understates risk; but incorporating it makes VaR procyclical and estimation noisier.|
|Liquidity risk|**Exogenous**= market-wide bid/ask cost (→ liquidity-adjusted VaR, LVaR).**Endogenous**= your own<br>trade size moves the price — most relevant for large/complex/illiquid positions and high-stress<br>conditions.|
|VaR vs ES vs spectral|VaR is not subadditive (a merged portfolio's VaR can exceed the sum of its parts' VaRs — a genuine<br>faw). ES is always subadditive and captures tail severity. Spectral risk measures generalize ES<br>further with a full risk-aversion weighting function (ES is the special "fat tail weight" case).|
|Unifed vs.<br>compartmentalized risk|Basel is compartmentalized (sum of separate market+credit+op risk capital) — a non-integrated<br>approach. Ignoring interaction/diversifcation efects across risk types can mis-measure true risk in<br>either direction.|
|Top-down vs bottom-up<br>aggregation|Top-down studies fnd diversifcation (ratio<1). Bottom-up studies are mixed — some fnd risk<br>_compounding_(ratio>1), especially when risks aren't cleanly separable.|
|Leverage &<br>procyclicality|Leverage is inversely related to net worth — booms loosen VaR constraints (more borrowing), busts<br>tighten them (forced asset sales), creating a feedback loop that VaR-based capital regulation can<br>actually_amplify_.|

##### **TRAP**

"VaR is not subadditive" is one of the most-tested one-liners in this book — it is the single biggest theoretical argument for preferring Expected Shortfall in a regulatory context, and it's exactly why FRTB (Reading 16) replaces VaR with ES.

## **READING 7 — Correlation Basics**

##### **WHERE THIS FITS — START OF STUDY SESSION 2**

Study Session 1 treated correlation as an input you already have (e.g., inside a covariance matrix for cash-flow mapping). Study Session 2 asks: where does correlation risk actually come from, how do you price products that are bets ON correlation, and how did correlation misunderstanding help cause the 2008 crisis? This reading is the survey; Readings 8-9 go deep on the empirics and the modeling machinery (copulas).

### **1. Portfolio Mean/Variance — the foundation LO 7.a**

*[image omitted]*

##### **TRAP**

Return/risk ratio rises as correlation falls — but this is a smooth, continuous relationship, not a step function. Don't assume diversification benefit only exists at extreme (near −1) correlations; even a drop from +0.9 to +0.5 meaningfully improves the ratio.

### **2. Wrong-Way Risk in CDS LO 7.a**

Wrong-way risk (WWR): the reference asset and the CDS-seller counterparty are positively correlated, so the CDS is most likely to be needed exactly when the seller is least able to pay. The relationship between CDS spread and correlation is **non-monotonic** — near ρ = −1 the spread can rise slightly (since simultaneous default of both becomes nearly impossible, but replacement-cost risk after single default still bites).

### **3. Correlation Options & Correlation Swaps**

###### **LO 7.c, 7.d**

For almost every multi-asset correlation strategy, **lower correlation → higher option price** (more dispersion = better chance of a favorable payout). The one notable exception: an option on the _worse-of_ two assets, where lower correlation reduces the price. Quanto options: lower correlation between the underlying and the FX rate → higher quanto price.

*[image omitted]*

##### **WORKED EXAMPLE**

Buyer pays fixed 0.2, notional $1M, 3 assets with ρ₂,₁=0.6, ρ₃,₁=0.2, ρ₃,₂=0.04. Realized ρ = (0.6+0.2+0.04)/3 = 0.28. Payoff = $1,000,000×(0.28−0.20) = **$80,000** .

### **4. VaR and Correlation LO 7.e**

*[image omitted]*

VaR increases as correlation between portfolio assets increases — diversification benefit shrinks as ρ→1. Basel requires capital ≥ 3× the 10-day VaR for trading-book assets.

##### **WORKED EXAMPLE**

$8M in asset A (σ=1.5%), $4M in asset B (σ=2%), ρ=0.6, 99% confidence (z=2.33), 10-day horizon. Build the covariance matrix, compute σ_P via matrix multiplication, then 10-day VaR = z×σ_P×√10. Answer ≈ **$1.325M** ; required capital = 3×$1.325M ≈ **$3.97M** .

### **5. Correlation and the 2008 Crisis LO 7.b**

##### **THE EXACT MECHANISM — FREQUENTLY TESTED AS A SCENARIO QUESTION**

Hedge funds went **long the CDO equity tranche, short the mezzanine tranche** , believing the position was correlation-hedged. When GM/Ford were downgraded to junk (May 2005): equity tranche spreads _increased_ (losses on the long leg) while mezzanine tranche correlations _decreased_ , lowering mezzanine spreads (losses on the short leg too — the short position's spread should have risen to profit them, but instead fell). Both legs lost money simultaneously — the exact opposite of what a "hedge" should do. Root cause: tranche correlation dynamics were poorly understood by the copula models in use (Reading 9).

### **6. Correlation, Concentration & Systemic Risk LO 7.f, 7.g**

Concentration ratio = 1/(number of equally-sized exposures). Lower concentration ratio + lower default correlation both reduce the joint (worst-case) probability of default.

##### **WORKED EXAMPLE — CONCENTRATION RATIO AND EXPECTED LOSS**

$5M loan to one company, 5% default probability → concentration ratio 1.0, EL = 0.05×$5M = **$250,000** . Split into two $2.5M loans (5% PD each), default correlation 1.0 → concentration ratio 0.5, joint PD replicates the single-loan case → EL still **$250,000** . Drop correlation to 0.5 → EL falls; drop to 0 → EL falls further to just **$12,500** (0.05×0.05×$5M). **Lower correlation + lower concentration → materially lower worst-case loss.**

Default term structures rise with maturity for investment-grade bonds (more time for things to go wrong) but are frontloaded for non-investment-grade bonds (survive the near-term crisis → PD falls thereafter).

## **READING 8 — Empirical Properties of Correlation**

##### **WHERE THIS FITS**

Reading 7 established that correlation risk matters everywhere. This reading asks the empirical question: how does correlation actually behave — across the business cycle, over time (mean reversion), and in terms of its statistical distribution? This is the evidence base that later justifies (in R9-R16) why models need updating correlations rather than static assumptions.

*[image omitted]*

##### **THE COUNTER-INTUITIVE RESULT — HEAVILY TESTED**

Correlation LEVEL is highest in recessions (37.0%) — stocks crash together. But correlation VOLATILITY is highest in NORMAL periods (83.0%), not recessions (80.5%) — investors are most uncertain about market direction in normal times (during a recession/expansion, direction is at least "expected"). Don't assume "highest during recession" applies to both level AND volatility — it only applies to level.

### **2. Mean Reversion and Autocorrelation**

**LO 8.b**

*[image omitted]*

Estimate mean reversion rate _a_ via regression: regress (S_t − S_{t-1}) on S_{t-1}; the slope coefficient β = −a. A high mean reversion rate (e.g., 79%) means large deviations from the mean revert quickly.

**KEY IDENTITY: MEAN REVERSION + 1-PERIOD AUTOCORRELATION = 1**

*[image omitted]*

##### **WORKED EXAMPLE**

Oct 2022 correlation = 30%, long-run mean = 35%, regression gives mean reversion rate = 78%. Expected Nov 2022 correlation = 30% + 0.78×(35%−30%) = **33.9%** . If mean reversion is 78%, one-period autocorrelation = 1 − 0.78 = **22%** — no separate calculation needed once you have one of the two.

### **3. Best-Fit Distributions LO 8.c**

|**Correlation type**|**Best-ft distribution**|**Mean reversion rate**|
|---|---|---|
|Equity|**Johnson SB**|High (~79%)|
|Bond|**Generalized Extreme Value**(normal is also decent)|Low (~26%)|
|Default probability|**Johnson SB**|Low (~30%), closer to bond|

##### **TRAP**

Normal, lognormal, and beta distributions are explicitly called out as POOR fits for equity correlations — if an answer choice offers "normal distribution" for equity correlation, it's a distractor. Note the interesting split: equity and default correlations share the same best-fit family (Johnson SB) despite very different underlying economics, while bonds are the outlier (GEV).

## **READING 9 — Financial Correlation Modeling: Bottom-Up (Copulas)**

##### **WHERE THIS FITS**

Readings 7-8 established that correlation is real, economically important, and empirically messy (non-normal, regime-dependent). This reading gives you the actual machinery Wall Street used pre-2008 (and still uses, more carefully) to build a joint distribution out of individually messy marginal distributions: the copula.

*[image omitted]*

Core idea: take marginal distributions with awkward, hard-to-relate shapes, map each one (percentile-to-percentile) onto a well-behaved distribution (standard normal), and define the correlation structure there instead — because correlation is only cleanly defined for well-behaved joint distributions. Crucially, this preserves each individual marginal distribution exactly while adding a workable joint dependence structure.

### **2. Gaussian Copula for Default LO 9.b**

*[image omitted]*

##### **WORKED EXAMPLE — MAPPING DEFAULT PROBABILITIES**

Company B's 1-year cumulative default probability maps to N⁻¹(Q_B(t)) on the standard normal; same for Company C. With bivariate normal M₂ and default correlation ρ, the joint default probability is read off the bivariate normal CDF at those two mapped points. The exam will NOT ask you to compute the bivariate normal integral by hand — focus on the mapping logic and what each symbol represents.

### **3. Correlated Default Time**

###### **LO 9.c**

For n > 2 assets, a Cholesky decomposition generates correlated samples from the n-variate standard normal. Each sample is matched against the market-implied cumulative default probability curve Q_i(τ) (via Excel or a Newton-Raphson search) to back out a simulated default time. This is repeated (e.g., 100,000 times) to build up a distribution of default times — there's no closed-form solution, so simulation is unavoidable.

##### **WHY COPULAS FELL OUT OF FAVOR — THE EXAM LIKES THIS NARRATIVE**

The Gaussian copula was popular because it reduced a 100+ asset CDO correlation problem to a single tractable multivariate function. But it badly underestimated **tail dependence** (the tendency of assets to crash together in extremes) — precisely the multivariate-EVT concern flagged back in Reading 3. The Gaussian copula assumes normal-style tail behavior; real crises exhibit fat-tailed, highly dependent joint crashes the Gaussian copula structurally cannot capture. This is a direct thematic callback: Reading 3 (EVT/tail dependence) → Reading 9 (Gaussian copula's failure to capture exactly that).

## **READING 10 — Empirical Approaches to Risk Metrics and Hedging**

##### **WHERE THIS FITS — START OF STUDY SESSION 3**

Study Session 2 was about correlation between different assets. Study Session 3 turns to a very specific and practically important correlation question: how do different points and instruments on the _interest rate curve_ move together, and how do you hedge one bond position with another when they don't move in perfect lockstep? This reading is the practical hedging toolkit that motivates the more theoretical term-structure models in Readings 11-15.

### **1. Why DV01-Neutral Hedging Fails LO 10.a**

A DV01-neutral hedge assumes the hedge instrument's yield moves 1-for-1 with the hedged position's yield. In reality (e.g., nominal T-bond hedged with TIPS), the nominal yield typically moves by _more than_ one basis point per basis point move in the real yield — the relationship isn't 1:1, and a naive DV01 hedge leaves residual risk.

### **2. Regression Hedge & the Hedge Adjustment Factor (β)**

###### **LO 10.b, 10.c, 10.d**

*[image omitted]*

##### **WORKED EXAMPLE**

Regression gives β = 1.0198 (nominal yield moves 1.0198bp per 1bp real-yield move). Selling $100M T-bond → buy $100M × (DV01_N/DV01_R) × 1.0198 ≈ **$82.55M TIPS** (using the DV01 ratio embedded in the reading's numbers). The bigger picture: a regression-based hedge also gives you the hedged portfolio's expected volatility (R² and standard error of the regression) — something a naive DV01 hedge never tells you.

##### **TRAP**

The regression hedge assumes β is **constant over time** — a known unrealistic simplification. The correct practical response is estimating β over multiple time windows and comparing, not treating it as ever truly fixed.

### **3. Two-Variable Regression Hedge LO 10.e**

Hedge an illiquid maturity (e.g., 20-year swap) with two liquid maturities (10Y and 30Y) using a two-variable regression; the resulting risk weights (β coefficients) tell you how to split the hedge (e.g., 22% in the 10Y, 78% in the 30Y). Twovariable hedges generally improve R² over a single-variable hedge, but are not foolproof — they can fail badly in a genuine crisis when historical relationships break down.

### **4. Level vs. Change Regressions LO 10.f**

Change-on-change (Δy on Δx) vs level-on-level (y on x) — both give unbiased, consistent coefficients, but in **both** cases the error terms are correlated over time (serially correlated), meaning neither approach is fully statistically efficient. A third specification allows today's error to partly carry over from yesterday's error plus a new shock — explicitly modeling this serial correlation.

*[image omitted]*

PCA re-expresses correlated rate changes across the whole curve (e.g., 30 maturities) as a small number of **uncorrelated** factors, ranked by variance explained. Properties: (1) sum of PC variances = sum of individual rate variances (no information lost), (2) PCs are mutually uncorrelated by construction, (3) each PC captures the maximum remaining variance given the earlier ones. In practice the first 3 PCs — commonly interpreted as **level, slope, and curvature** — explain the overwhelming majority of yield curve variation, letting you hedge against the whole curve with just 3 factors instead of 30.

## **READING 11 — The Science of Term Structure Models**

##### **WHERE THIS FITS**

Reading 10 hedged bonds empirically, using historical regression relationships. Readings 11-15 build the theoretical machinery underneath: how do you actually construct an arbitrage-free model of how rates evolve, price a bond or option using that model, and understand the assumptions baked into the model? Reading 11 lays the mechanical foundation (binomial trees, backward induction, risk-neutral pricing) that Readings 12-14 will build increasingly sophisticated drift and volatility structures on top of.

*[image omitted]*

**Backward induction:** you can't value node 0 without knowing node 1's values, and can't know node 1 without node 2 — so you start at maturity and work backward. At each node, bond value = average of the two next-period present values (bond value + any coupon), discounted at that node's forward rate.

##### **TRAP**

The tree is built to be **arbitrage-free** — meaning the model-computed price of an on-the-run bond must equal its actual market price. If it doesn't, the tree (or its rates) needs recalibration — a tree is not "correct" just because it's internally consistent; it must also reconcile with the market.

### **2. True vs. Risk-Neutral Probabilities**

###### **LO 11.c, 11.d**

Using naive 50/50 "true" probabilities in backward induction generally will NOT reproduce the market price. Two equivalent fixes: (1) keep 50/50 probabilities but adjust the _rates_ on the tree until the model price matches market (what we did above), or (2) keep the rates as given but adjust the _probabilities_ (risk-neutral probabilities) until the model price matches market. Both methods give the same derivative value — the difference between true and risk-neutral probabilities is the **interest rate drift** .

### **3. Pricing Options via Backward Induction**

###### **LO 11.e**

Three steps: (1) price the underlying bond at every node, (2) compute intrinsic option value at maturity nodes (e.g., max(0, bond price − strike) for a call), (3) discount back through the tree using risk-neutral probabilities. An Americanstyle feature would require comparing intrinsic value vs. continuation value at EVERY node, not just maturity.

### **4. Option-Adjusted Spread (OAS)**

###### **LO 11.f**

OAS is the constant spread added to every discount rate in the tree needed to make the model price equal the observed market price. If market price < model price, OAS > 0 and the bond is **trading cheap** ; if market price > model price, the bond is **trading rich** . OAS only adjusts the discounting rates, not the cash flow projections themselves — this distinction (discount rate adjustment vs. cash flow adjustment) is a common trap.

### **5. Recombining vs. Non-Recombining Trees LO 11.g**

Recombining: up-then-down = down-then-up (same rate, fewer nodes, computationally simpler). Non-recombining ("statedependent volatility"): the two paths land on genuinely different rates — more realistic in some settings but multiplies computational complexity rapidly over many periods.

### **6. Time Steps & the Black-Scholes-Merton Mismatch**

###### **LO 11.i, 11.j**

Smaller time steps → more accurate, more computationally expensive — a direct trade-off, no free lunch.

##### **TRAP: WHY BSM CANNOT BE USED FOR BONDS — THREE NAMED REASONS**

(1) BSM assumes no upper bound on the underlying price, but a bond has a maximum value (reached when rates hit zero); (2) BSM assumes a constant risk-free rate, but bond payoffs literally ARE driven by changing rates — selfcontradictory; (3) BSM assumes constant volatility, but bond price volatility must fall to zero as the bond approaches maturity (pull-to-par). All three of these specific reasons are individually testable.

### **7. Callable and Putable Bonds LO 11.j**

**Callable bonds:** exhibit negative convexity below the "y′" yield threshold (price appreciation is capped by the call price as rates fall) but behave like an ordinary option-free bond (positive convexity) above y′. This also worsens reinvestment risk — investors receive their cash back exactly when reinvestment rates are low. **Putable bonds:** the put price creates a value floor as rates rise, so the price falls less than an option-free bond above y′, but converges to option-free behavior at low yields.

## **READING 12 — The Evolution of Short Rates and the Shape of the Term Structure**

##### **WHERE THIS FITS**

Reading 11 gave you the mechanics of trees; this reading asks WHY the yield curve has the shape it does. Two forces are isolated: (1) pure expectations of future short rates, and (2) the mathematical fact that averaging discount factors (convexity) systematically pulls yields down relative to naive expectations. This convexity insight is the direct forerunner of the drift models (Vasicek, Ho-Lee) in Reading 13.

*[image omitted]*

If future 1-year rates are expected to rise, the curve is upward sloping; if expected to fall, downward sloping; if flat expectations, flat curve. This logic works well for short-to-medium horizons, but for very long horizons (e.g., 30 years) nobody credibly forecasts specific short rates that far out — instead, long-run real rate + long-run inflation expectations anchor the level of the curve.

**2. Interest Rate Volatility and Convexity LO 12.b, 12.c, 12.d**

*[image omitted]*

Jensen's inequality: the expected value of a convex function (like a discount factor, 1/(1+r)) is greater than the function evaluated at the expected value. Applied here: because bond prices are a convex function of yield, adding volatility to future rate uncertainty **lowers** the implied spot rate relative to using the simple expected rate — this reduction IS "the value of convexity."

##### **WORKED EXAMPLE**

1-year rate = 8%, and next year's rate will be 10% or 6% (50/50). Expected price using the two actual rates: 0.5×(1/1.10)+0.5×(1/1.06) = $0.92624. Price using the simple expected rate (8%): 1/1.08 = $0.92593. Since $0.92624 > $0.92593, the "true" (volatility-aware) price is higher → implied yield is LOWER than the naive 8% expectation — this gap (in this case ≈1.84bp) is the value of convexity.

##### **TRAP**

The value of convexity increases with BOTH **maturity** (more compounding of the effect) AND **volatility** (more dispersion in the averaging). A question that varies only one of these while holding the other fixed is testing whether you know both drivers independently move convexity in the same direction.

### **3. Risk Premium LO 12.e**

Risk-averse investors demand compensation beyond the risk-neutral expected return for bearing interest rate risk. Adding e.g. a 30bp/year risk premium lowers the zero-coupon bond's price (relative to the risk-neutral price) and raises its expected holding-period return above the risk-neutral rate — this is a separate, additive effect on top of (not a substitute for) the convexity adjustment above.

## **READING 13 — The Art of Term Structure Models: Drift**

##### **WHERE THIS FITS**

This is the formula-heaviest reading in the book, and it's really one continuous idea told in four increasingly flexible versions: start with a model that has no opinion about direction (Model 1), add a constant expected direction (Model 2), let that direction vary by time period (Ho-Lee), then let it actively pull back toward a long-run anchor (Vasicek). Each model is a strict generalization of the one before it.

*[image omitted]*

Recombining tree, 50/50 up/down, no directional bias. **Limitations:** predicts a flat volatility term structure (real markets show a hump shape), only one risk factor (parallel shifts only — contradicts observed nonparallel curve moves), and always carries positive probability of negative rates (worse for longer horizons and lower starting rate levels).

##### **WORKED EXAMPLE**

r₀=6%, σ=1.2%/yr, monthly steps (dt=1/12). SD of monthly rate change = 1.2%×√(1/12) = 0.346%. After 2 periods: upper node 6%+2(0.346%)=6.692%, middle 6% (unchanged — no drift!), lower 6%−2(0.346%)=5.308%.

### **2. Model 2 — Constant Drift LO 13.a**

*[image omitted]*

Adds constant λ (drift = risk premium + expected rate change combined). Tree still recombines, but the middle node at time 2 = r₀+2λdt ≠ r₀. Better fits typical upward-sloping curves, but calibrated λ can be unrealistically large, and assuming one constant risk premium forever is a stretch for long horizons.

### **3. Ho-Lee Model — Time-Dependent Drift LO 13.d**

*[image omitted]*

λ(t) can differ every period — more flexible, and each λ_t is calibrated against the observed market rate for that maturity. If λ₁=λ₂=…, Ho-Lee collapses exactly to Model 2 — Model 2 is a special case of Ho-Lee, and Model 1 is a special case of Model 2 (λ=0). This nesting (Model 1 ⊂ Model 2 ⊂ Ho-Lee) is itself a testable fact.

### **4. Vasicek Model — Mean Reversion LO 13.f, 13.g, 13.h**

*[image omitted]*

k = speed of mean reversion (larger k → faster pull back to θ). Unlike the previous three, the Vasicek tree does NOT naturally recombine — the up-down and down-up paths land on different rates, because the reversion adjustment depends on how far the current rate already is from θ. Forcing recombination requires averaging the two middle nodes and solving for new (non-50/50) probabilities p and q.

##### **TRAP — THIS IS THE SINGLE MOST COMMONLY CONFUSED CONCEPT ACROSS R11-14**

Vasicek produces a **declining** (not flat, not hump-shaped) volatility term structure — short rates are overstated in volatility, long rates understated, because mean reversion dampens long-horizon uncertainty. It also implies **nonparallel** shifts (a shock to the short rate matters less the further out you go) — the opposite of Model 1's parallelshift-only behavior. A large k = shocks are short-lived (revert fast); small k = shocks are long-lived (revert slowly).

### **5. Arbitrage-Free vs. Equilibrium Models**

###### **LO 13.e**

Arbitrage-free models are calibrated to match observed market prices exactly (good for pricing illiquid/derivative instruments relative to liquid ones) but are useless for **relative value analysis** — if you assume the market is already correctly priced (which is what "arbitrage-free" means), you can't use the model to say one security is cheap relative to another. For that, you need an equilibrium model instead.

## **READING 14 — The Art of Term Structure Models: Volatility and Distribution**

##### **WHERE THIS FITS**

Reading 13 varied the drift term across four models. This reading holds a similar structure but varies the VOLATILITY term instead — first letting volatility change deterministically over time (Model 3), then letting volatility depend on the LEVEL of rates themselves (CIR and lognormal models), which is what finally guarantees rates can never go negative.

### **1. Model 3 — Time-Dependent Volatility LO 14.a, 14.b, 14.c**

*[image omitted]*

Volatility decays exponentially from an initial σ toward 0 (or follows whatever deterministic path is specified). Especially useful for pricing caps/floors, whose value depends critically on forecasted σ(t) at multiple future dates. Under specific conditions (matching decay rate to Vasicek's mean-reversion rate), Model 3 and Vasicek can produce IDENTICAL terminal standard deviations — but Model 3 still implies parallel shifts (unlike Vasicek), so they're not really the same model in disguise.

**2. CIR and Lognormal — Level-Dependent Volatility LO 14.d, 14.e**

*[image omitted]*

|**Model**|**Basis point vol behavior**|**Yield vol**|**Can go negative?**|
|---|---|---|---|
|CIR|Increases with √r (at a_decreasing_rate)|Not constant|No|
|Lognormal (Model 4)|Increases linearly with r (=σr)|Constant (σ)|No|
|Model 1 / Vasicek (normal)|Constant, independent of r|Not constant|Yes (this is the faw)|

##### **TRAP**

Don't confuse "basis point volatility" (volatility of the level change dr, in bps) with "yield volatility" (volatility of the percentage change, σ). CIR has NEITHER constant — but the lognormal model has CONSTANT yield volatility even though its basis point volatility still increases with the rate level. This exact distinction has been directly tested.

### **3. Lognormal With Drift vs. Mean Reversion LO 14.f**

Lognormal with deterministic drift: modeled in log-space (additive there), but because e^x ≈ 1+x for small x, the effect on actual RATES is **multiplicative** , not additive like Ho-Lee. Lognormal with mean reversion is the **Black-Karasinski model** — combines mean reversion (Vasicek-style, but in log-space) with time-varying volatility; like Vasicek, its tree does not naturally recombine and requires recalibrating the time step (dt) between periods to force recombination.

##### **TRAP**

"Ho-Lee's drift terms are additive; the lognormal model's drift terms are multiplicative" — this exact additive-vsmultiplicative contrast is the crux of an entire exam question type. Get the direction right: it's lognormal that's multiplicative, not Ho-Lee.

## **READING 15 — Volatility Smiles**

##### **WHERE THIS FITS**

Readings 11-14 built term-structure models for rates. This reading pivots to a parallel idea for options generally: if the Black-Scholes-Merton model were exactly right, implied volatility would be flat across all strikes. It isn't — and the specific SHAPE of that departure (smile vs. skew vs. frown) tells you exactly what the market believes about the true (non-lognormal) shape of the underlying's return distribution.

### **1. Put-Call Parity ⇒ Equal Implied Vol LO 15.b**

*[image omitted]*

Because put-call parity is a pure no-arbitrage relationship (holds regardless of the true underlying distribution), any deviation of market price from the BSM price must be identical in dollar terms for a call and a put at the same strike/ maturity. This forces **implied volatility for a call and put at the same strike to be equal** — a mechanical, modelindependent fact, not an empirical observation.

*[image omitted]*

|**Shape**|**Market**|**What it implies about the true**<br>**distribution**|**Cause(s)**|
|---|---|---|---|
|Smile|FX options|Fatter tails on BOTH sides than<br>lognormal — bigger chance of<br>extreme moves either direction|Volatility jumps/regime shifts; less pronounced for<br>long-dated options|
|Skew /<br>"smirk"|Equity options|Left-skewed — down moves more<br>likely/severe than up moves, vs.<br>lognormal|Leverage efect (falling equity → higher leverage →<br>higher vol) and "crashophobia" (post-1987 crash fear<br>premium on OTM puts)|

Anticipated price ATM options have HIGHER implied Expected binary/news event creates a bimodal (not Frown jump (bimodal vol than away-from-the-money — fat-tailed) distribution outcome) opposite of the smile pattern

##### **TRAP**

"Crashophobia" is about the PRICE of protection (deep OTM puts carry a fear premium), not a claim that actual realized volatility rises when prices fall — don't conflate the leverage effect's story (volatility genuinely does rise) with crashophobia's story (a risk-aversion premium, independent of whether volatility itself changes).

### **3. Alternative Smile Parameterizations & Vol Surfaces LO 15.f, 15.g**

Instead of X/S₀, traders sometimes use X alone (less stable, price-level dependent), X/F₀ (forward price — often preferred since forward = theoretical ATM expectation), or option delta (works even for non-European/American payoffs). A **volatility surface** = volatility smile (across strikes) × volatility term structure (across maturities) combined into one 3-D pricing tool.

### **4. Impact on the Greeks LO 15.h**

Two competing effects when equity price changes: (1) moving along the existing smile curve (as X/S₀ changes), and (2) the WHOLE curve shifting up or down (since equity price and volatility are typically negatively correlated). **Effect (2) dominates in practice.** The **minimum variance delta** incorporates this whole-curve shift and is LOWER than the standard BSM delta, which ignores it entirely.

## **READING 16 — Fundamental Review of the Trading Book (FRTB)**

##### **WHERE THIS FITS — THE CAPSTONE OF THE ENTIRE BOOK**

This reading is where every earlier thread gets cashed in by regulation. VaR's non-subadditivity and blindness to tail severity (Reading 1, 6) is why FRTB replaces it with **Expected Shortfall** . Backtesting weaknesses (Reading 4) directly shape FRTB's specific backtesting and P&L attribution rules. Correlation-across-liquidity-horizons (Study Session 2) motivates the multi-horizon liquidity structure below. If Study Session 1 asked "how do we measure risk," Reading 16 is regulators' final answer: "here is what banks must actually hold capital against, and why the old answer wasn't good enough."

*[image omitted]*

##### **WORKED EXAMPLE — THE CANONICAL FRTB MOTIVATING CASE**

$950M bond portfolio, 2% annual default probability, discretized as: 3-in-5 chance of $0 loss, 2-in-5 chance of total ($950M) loss, conditional on being in the "bad" tail. At 95% confidence, **VaR = $0** (default probability is below 5%, so the threshold loss is zero) — VaR says "no problem." But **ES = 40% × $950M = $380M** — ES correctly captures that IF you're in the tail, the loss is catastrophic. This gap between a reassuring VaR and an alarming ES is exactly the scenario FRTB was designed to prevent regulators from missing.

Under a normal distribution, 99% VaR and 97.5% ES are numerically very close (2.326σ vs. 2.338σ above the mean) — but they diverge sharply under fat-tailed distributions, which is the whole point of preferring ES.

### **2. Liquidity Horizons LO 16.b**

*[image omitted]*

Five categories (10/20/40/60/120 days) replace a single 10-day horizon for everything. The **internal models-based approach (IMA)** computes a waterfall of shocks ES₁ through ES₅ — ES₁ shocks all categories together, ES₂ holds category 1 fixed and shocks 2-5, and so on — then combines them scaled by the square root of the horizon differences (a direct echo of the √t scaling rule from Reading 1's return-horizon conventions).

### **3. Trading Book vs. Banking Book LO 16.c**

Dual test for trading-book classification: (1) the bank must be able to actually trade the asset, AND (2) the trading desk must actively manage its risk. Once classified, reclassification is heavily restricted (extraordinary circumstances only) specifically to shut down the regulatory arbitrage where banks moved assets between books to get more favorable capital treatment.

### **4. Backtesting and P&L Attribution Under FRTB LO 16.c**

*[image omitted]*

Stressed ES itself is NOT backtested (the extreme conditions it targets won't recur with predictable frequency) — instead, VaR is still backtested (1-day horizon, latest 12 months, at 99% or 97.5% confidence). More than 12 exceptions at 99%, or more than 30 at 97.5%, forces a bank onto the standardized approach. Separately, P&L attribution compares actual vs. model P&L: ratio D/A should stay within ±10%, and Var(D)/Var(A) should stay under 20%; four or more breaches in 12 months again forces the standardized approach.

### **5. Credit Risk and Securitizations LO 16.c**

The incremental risk charge (IRC, from Basel II.5) addresses two distinct risks: **credit spread risk** (mark- to-market impact of spread changes, handled via ES) and **jump-to-default risk** (measured via 99% VaR, one-year horizon) — a genuinely different confidence framework than the trading-book ES calculation, deliberately, because default is a discrete jump event rather than a continuous P&L process. Securitizations move from bank-specific internal models (which created large cross-bank capital variation under Basel II.5's CRM charge) to a single standardized approach under FRTB.

##### **TRAP**

Don't merge the "97.5% ES for general market risk" framework with the "99% VaR for jump-to-default" framework — they are two different measures, at two different confidence levels, for two conceptually different risks (continuous spread risk vs. discrete default risk), coexisting within the same overall FRTB capital calculation.

**The Whole Book, One Map**

##### **THE COMPLETE NARRATIVE ARC, START TO FINISH**

Study Session 1 (Readings 1-6) builds and stress-tests a single risk number: VaR, then Expected Shortfall, made smarter with non-parametric methods, made robust to catastrophe with EVT, and validated with backtesting — closing with mapping (how to apply it to real portfolios) and an academic literature survey previewing what's still missing (liquidity, integration, procyclicality). Study Session 2 (Readings 7-9) asks where the correlation INSIDE that risk number actually comes from, how it behaves empirically, and how to model it jointly across many assets with copulas. Study Session 3 (Readings 10-16) turns to the interest rate curve specifically: empirical hedging (R10), the mechanics of pricing off a rate tree (R11), why the curve has the shape it does (R12), a full taxonomy of drift models (R13) and volatility models (R14), the options-market analogue of "the model isn't quite right" (R15, volatility smiles), and finally the regulatory capstone that ties the VaR-vs-ES lesson from Reading 1 directly to what banks must hold capital against today (R16, FRTB).

### **The five biggest cross-reading threads**

|**Thread**|**Where it starts**|**Where it resolves / reappears**|
|---|---|---|
|**VaR is not enough — you**<br>**need the tail (ES)**|R1: ES defned to fx<br>VaR's blindness to tail<br>severity|R3 (EVT models the tail directly), R6 (VaR not subadditive), R16<br>(FRTB formally replaces VaR with ES as the regulatory standard)|
|**Fat tails / extreme**<br>**dependence keep**<br>**showing up**|R1: QQ plots reveal fat<br>tails vs normal|R3 (EVT/ξ>0 built for exactly this), R9 (Gaussian copula's failure to<br>capture tail dependence — same blind spot, diferent tool)|
|**Correlation is not static**|R2: age/vol/correlation-<br>weighted historical<br>simulation|R7 (correlation risk defned broadly), R8 (empirically, correlation<br>itself mean-reverts and spikes in recessions), R9 (copulas model<br>joint dependence explicitly)|
|**A single risk factor can't**<br>**capture everything —**<br>**decompose**|R5: VaR mapping onto<br>risk factors|R10 (PCA decomposes the whole yield curve into 3 factors),<br>R13-14 (term structure models decompose rate evolution into drift<br>+ volatility components)|
|**Model assumptions have**<br>**testable failure modes**|R1: normal vs lognormal<br>VaR convergence for<br>small σ|R11 (why BSM fails for bonds), R13-14 (why Model 1's normal<br>assumption allows negative rates, and how CIR/lognormal fx it),<br>R15 (why BSM's constant-vol assumption fails, producing smiles)|

### **Full formula index (all 16 readings)**

|**#**|**Reading**|**Signature formula**|
|---|---|---|
|1|Estimating Market Risk<br>Measures|VaR = −μ+σz_α; Lognormal VaR = P₀[1−e^(μ_R−σ_R z_α)]|
|2|Non-Parametric Approaches|w(i) = λ^(i−1)(1−λ)/(1−λⁿ)|
|3|Extreme Value Theory|GEV CDF (ξ shape parameter); POT VaR = u+(β/ξ)[(n/N_u(1−c))^−ξ−1]|
|4|Backtesting VaR|z=(x−pT)/√(p(1−p)T); LR_uc reject if >3.84|
|5|VaR Mapping|Undiversifed VaR = Σ|xᵢ|Vᵢ; Diversifed VaR via matrix algebra|
|6|Academic Literature|(conceptual — VaR non-subadditivity is the key idea)|
|7|Correlation Basics|σ_P = √(w_X²σ_X²+w_Y²σ_Y²+2w_Xw_Yσ_Xσ_Yρ); correlation swap payof|
|8|Empirical Correlation<br>Properties|Mean reversion + autocorrelation = 1|
|9|Copula Modeling|C_GD = M_n[N⁻¹(Q₁(t)),…;ρ_M]|

|10|Empirical Hedging & PCA|F_R×DV01_R×β = F_N×DV01_N|
|---|---|---|
|11|Science of Term Structure|Node value = avg. of two discounted next-period values|
|12|Evolution of Short Rates|Jensen's inequality: E[1/(1+r)] > 1/(1+E[r])|
|13|Term Structure Drift|Model1: dr=σdw → Model2: dr=λdt+σdw → Ho-Lee: dr=λ(t)dt+σdw → Vasicek:<br>dr=k(θ−r)dt+σdw|
|14|Term Structure Volatility|CIR: dr=k(θ−r)dt+σ√r·dw; Lognormal: d ln(r)=λ(t)dt+σdw|
|15|Volatility Smiles|Put-call parity ⇒ equal implied vol for calls/puts at same strike|
|16|FRTB|VaR₉₉%≈μ+2.326σ vs ES₉₇.₅%≈μ+2.338σ; liquidity-adjusted ES waterfall|

### **35-day exam clock: where Market Risk should sit**

##### **A PRACTICAL NOTE, NOT A CURRICULUM POINT**

Market Risk is one of the largest-weighted topics in FRM Part II. Within it, Readings 1, 4, 7, 13, and 16 are the highest-density formula readings and deserve the most practice-question repetition. Readings 6, 8, 9, and 12 are more conceptual/narrative and can be reviewed faster once the story above is internalized — but don't skip their traps, since GARP likes testing the "counter-intuitive empirical result" style question (e.g., R8's correlation-volatilitypeaks-in-normal-times) precisely because it's easy to mis-remember under exam pressure.
