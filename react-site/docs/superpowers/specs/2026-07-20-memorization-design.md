# Memorization design — institutional/list-heavy content (2026-07-20)

The student's weak spot isn't Book 1/2 intuition-heavy material, it's the theory-dense,
list-heavy, low-intuition stuff: Book 4 liquidity/op-risk governance (ALCO, FSA reporting
cadences, named report lists), FRTB (R16 — liquidity horizons, backtesting vs. P&L
attribution, standardized vs. internal models), and named-committee/governance material
generally. There's no formula to derive it from and no physical analogy that carries the
whole weight — it's "learn this specific list, in this specific order, with these specific
names attached." This spec covers (1) how to write about that content differently, with real
before/after rewrites, (2) new memorization mechanisms beyond flashcards, (3) a build-first
recommendation, and (4) division of work for a follow-up pass, mirroring
`2026-07-20-comfort-ui-design.md`'s format.

**What already exists — don't rebuild these:**
- `src/lib/store.js` already has a working SM-2-lite spaced-repetition engine (`srs`,
  `gradeCard`, `dueCards`) running over `recall` Q&A cards, surfaced at `src/pages/Review.jsx`
  (book-filterable, Space-to-reveal, 1-4 keyboard grading). This is the right place to extend,
  not replace.
- `src/lib/drills.js` + `src/pages/Drills.jsx`: seeded, regenerating calculation drills with a
  `finish()` helper that formats/dedupes/shuffles options — good numeric-answer infrastructure,
  but zero list-reconstruction or matching drills exist yet.
- `Quiz.jsx` already supports "retake wrong only" and per-round option shuffling.
- The schema already has `concepts[].memory` (a compressed mnemonic sentence) and `hooks`
  (`{title, text}`, a named memorable image) — both are used well in some readings (R16's
  "Subtract, don't add" hook, book4 r72's "Wholesale pricing/volume report = the market's own
  gossip about your credit standing") and inconsistently in others. No schema field currently
  captures an *ordered list as a first-class memorization target* — `breakdown` is presentation
  only, not something a drill can quiz against systematically.

---

## 1. Tone & phrasing doctrine for institutional/list-heavy content

The general doctrine (`react-site/CLAUDE.md` section 1) says "start from a person, not a
definition" and "ground everything in intuition before formalism." That works when there's a
mechanism to build intuition from (VaR's math, an option's payoff). Institutional content has
no mechanism — Basel didn't derive the FSA's four reporting cadences from first principles,
it wrote them down. Two things change when there's no derivation to lean on:

### 1a. Replace "why does this work" with "why THIS order / why THESE categories"

For a formula, "why" means the mechanism. For an arbitrary list, "why" has to mean something
else: why does the list have this shape, why is it ordered this way, what's the organizing
axis a person could reconstruct the list FROM even without memorizing every item. The
teacher's job is to find that axis and state it before the enumeration, not after.

R72 (book4, liquidity reporting) already does this well — worth pointing new content passes
at as the target, not just describing it abstractly:

> "Daily: cash flows & maturity mismatch for market-wide stress tests... Quarterly: funding
> and currency analysis... Think of the whole reporting suite as a funnel that starts broad...
> and narrows toward the single number regulators and senior management care about most."

That's the model: state the organizing axis (reporting frequency scales with how fast the
underlying risk can move) BEFORE the list, so a student who forgets "is funding concentration
monthly or quarterly" can rederive it ("concentration is structural, changes slowly →
monthly, not daily") instead of needing raw recall.

### 1b. Before/after rewrites (real content from this codebase)

**Example 1 — a named list with no stated axis (generic-AI failure mode vs. fixed)**

BEFORE (the failure mode — this is what an ungrounded first draft of R72's cadence section
would look like, enumerating with no organizing idea, the kind of text a content pass must
NOT produce):
> "FSA best practice recommends the following reporting frequencies: daily reports for cash
> flow and maturity mismatch; weekly reports for firm-specific stress tests and wholesale
> liabilities; monthly reports for liquidity buffer, funding concentration, and off-balance
> sheet items; and quarterly reports for funding and currency analysis."

AFTER (what's actually in `r72.js`, the doctrine-compliant version — same facts, but the axis
comes first and does the memorization work):
> "Reporting frequency scales with how quickly the underlying risk can change: daily for
> market-wide cash flow/maturity mismatch (fast-moving), weekly for firm-specific stress tests
> (slower-moving, since a firm-specific liquidity problem usually builds over days, not
> hours), monthly for buffer/concentration/off-balance-sheet items (structural, doesn't
> change overnight), and quarterly for funding and currency analysis (strategic, slow-moving)."

The difference isn't wording, it's information architecture: the AFTER version gives the
student a rule ("frequency ∝ how fast risk moves") that regenerates all four answers, so a
partial memory failure ("is concentration weekly or monthly?") is recoverable by reasoning
instead of fatal.

**Example 2 — committee/governance ownership, no anchor to a decision**

BEFORE (states facts with no reason to remember which committee owns what):
> "The ALCO is responsible for overseeing bank liquidity risk. The FSA requires ILAS firms to
> follow specific reporting cadences and content requirements."

AFTER (from `r72.js`'s `hooks` field, actual shipped content):
> "Every report answers one management question. Deposit tracker → 'are we lending too much
> relative to our deposits?' Concentration report → 'what happens if our biggest depositor
> leaves?' Undrawn commitment report → 'what if every customer draws their credit line at
> once?' Wholesale pricing report → 'does the market think we're in trouble?' Learn the
> reports by the question each one answers, not just its name."

This is the general move for committee/report/role taxonomies: don't teach the NAME first,
teach the QUESTION the thing exists to answer, then the name becomes a label for something
already understood rather than raw vocabulary.

**Example 3 — a regulatory change stated as a fact, not a story**

BEFORE (a plausible AI-generated first draft — states the change with no narrative
compression):
> "FRTB replaced the Basel II.5 framework, which used a 10-day 99% VaR and a supplementary
> 250-day stressed VaR, with a single measure: 97.5% Expected Shortfall calculated over a
> stressed historical window."

AFTER (`r16.js`'s actual `hooks` entry, "Subtract, don't add"):
> "Basel I: 10-day 99% VaR. Basel II.5: that PLUS a 250-day stressed VaR (addition). FRTB:
> BOTH torn out and replaced by one 97.5% stressed ES (subtraction, then substitution). The
> exam trap is assuming FRTB just adds a third layer."

The AFTER version compresses three regulatory regimes into a three-beat rhythm (base, add,
subtract-and-replace) and explicitly preempts the exam trap (assuming FRTB is additive) in
the same breath — this is "teach the trap, not just the truth" (doctrine rule 4) applied to
institutional history instead of a formula.

**Example 4 — two easily-confused named tests, told apart by mechanism not just definition**

BEFORE (defines both correctly but gives no way to keep them straight under exam pressure):
> "Backtesting compares VaR exceedances against the confidence level. P&L attribution
> compares the risk model's predicted P&L against the desk's actual P&L."

AFTER (`r16.js`'s actual `memory` field on that concept):
> "Two audits: backtesting counts exceptions (like R4); P&L attribution checks whether the
> model's OWN P&L story matches the actual desk's."

Six words apiece ("counts exceptions" / "checks its own story") do the disambiguation work a
full paragraph of correct-but-flat definition wouldn't, because they're built to be recalled
under pressure, not just understood once while reading calmly.

**Example 5 — a taxonomy with a memorable but non-obvious grouping key**

BEFORE (a flat listing that gives the reader no way to reconstruct it):
> "The Merton family of default models includes Moody's-KMV, CreditMetrics, and CreditRisk+.
> KMV modifies the default point calculation. CreditMetrics uses rating transitions.
> CreditRisk+ uses a Poisson process."

AFTER (`r21.js`'s actual `pitfall`/`memory` fields):
> "Don't confuse CreditMetrics (accounts for ALL loans and rating migrations, i.e. upgrades
> AND downgrades) with CreditRisk+ (only cares about bankruptcy/bad-credit scenarios, i.e.
> default only)." / "KMV = Merton + half the long-term debt + real (not normal) historical
> data."

The grouping key here is "how much does each cousin diverge from Merton, and along which
single axis" (default point definition, migration-vs-default-only scope, data requirement) —
stated as a delta from a known anchor (Merton) rather than three independent facts.

### 1c. What "sounds like AI" vs "sounds like a teacher" looks like, distilled

- AI: enumerates in the order the source material happened to list things. Teacher: reorders
  around the axis that makes the list self-generating (frequency-by-volatility, degrees of
  deviation-from-an-anchor, "the question this thing answers").
- AI: defines every item to the same depth. Teacher: spends most words on the ONE item that's
  hardest to keep straight (the cash flow survival report, the CreditMetrics/CreditRisk+
  split) and one clause each on the rest.
- AI: states facts. Teacher: states facts AND preempts the specific wrong answer a tired
  student will pick on exam day (`misconceptions`, `pitfall`).
- AI produces prose that is accurate but forgettable because nothing in the sentence is built
  to be retrieved later under pressure — no rhythm, no compression, no delta-from-anchor.
  Teacher-voice sentences are shaped for the retrieval moment, not just the reading moment.

---

## 2. Memorization mechanisms beyond flashcards

Each mechanism: what it is, why it fits THIS content specifically, and where it lives in the
existing app.

### 2.1 Spaced repetition, extended to cover institutional facts specifically (not just `recall`)

**What:** The `srs`/`gradeCard`/`dueCards`/`Review.jsx` engine already exists and works. It
currently only pulls from `recall` cards. Extend it to also generate cards from
`highYield` items and from a new `lists` schema field (2.2) — i.e. treat every discrete,
named, memorizable fact as a reviewable unit, not just the readings that happen to have
`recall` written for them.

**Why for this content specifically:** Retrieval practice (testing effect) is well-established
as more durable than re-reading, and spaced review specifically targets the failure mode of
institutional facts: they decay fast because there's no mechanism to rederive them from if
forgotten (unlike a formula you can re-derive). SRS scheduling is the correct tool exactly
because there's nothing else propping the memory up between exam-prep sessions.

**Shape:** No new store keys needed. Add a `topicTags` field (see 2.6) so `Review.jsx` can
filter by "op-risk" / "governance" / "FRTB" in addition to book, and a card-source toggle
(`recall` / `highYield` / `lists`) in the existing book-filter UI. Card `id` scheme extends
naturally: `"rn:hy:i"`, `"rn:list:j:k"`.

### 2.2 "Build the list" reconstruction drill

**What:** The student is shown a list's title/prompt (e.g. "FSA reporting cadence, fastest to
slowest") and a shuffled bag of the individual items (as short chips/tokens); they drag or
click to assemble them in the correct order, then get instant right/wrong per position plus
the axis-sentence as feedback ("frequency scales with how fast the risk can move").

**Why for this content specifically:** This is the single most direct fit for "learn this
specific list, in this specific order." Ordered-recall is a distinct memory task from
item-recognition (flashcards test "do I recognize this name," not "do I know where it goes"),
and named regulatory lists (liquidity horizons 10/20/40/60/120 days, the FSA cadence tiers,
the named-reports list) are graded/ordered by design, so getting the order right IS the
content, not incidental to it.

**Shape:** New schema field per reading:
```
lists: [{ id, title, axis, items: [string] }]  // items in correct order; axis = the one-line organizing rule
```
(R72 would get `lists: [{ id: "cadence", title: "FSA reporting cadence", axis: "frequency scales with how fast the risk can change", items: ["Daily — market-wide cash flow/maturity mismatch", "Weekly — firm-specific stress tests, wholesale liability", "Monthly — liquidity buffer, concentration, off-balance-sheet", "Quarterly — funding and currency analysis"] }]`, extractable straight from the existing `breakdown` entry of the same name — this is a reshaping of data already written, not new research.)
New component `src/components/chapter/ListBuilder.jsx` (or a drill type in `Drills.jsx` if
kept generic-across-readings), rendered inline in the chapter body near the source
`breakdown` card, or aggregated into a new `/lists` page the same way `Glossary.jsx`
aggregates concepts across all readings.

### 2.3 Committee/name matching (drag-drop or click-to-pair)

**What:** Two columns — named entities (ALCO, FSA, a named report, a Basel committee) on one
side, their one-line responsibility/scope on the other, shuffled; student pairs them; wrong
pairs stay visibly wrong until corrected (not just "try again" — show which pairing was
attempted).

**Why for this content specifically:** Governance content is fundamentally relational (who
owns what), and paired-associate matching is a distinct retrieval shape from both flashcards
and ordered lists — it trains "given the name, produce the scope" AND "given the scope, produce
the name" in the same exercise, which flashcards only do one direction at a time (whichever
side is the "front"). This directly targets the ask: "which committee owns model validation
sign-off."

**Shape:** New schema field:
```
pairs: [{ left, right }]   // left = name, right = one-line scope/responsibility; both directions quizzable
```
Small standalone component, `src/components/chapter/MatchPairs.jsx`. Uses the existing
seeded-shuffle utility pattern from `Quiz.jsx`/`drills.js`. Can start as click-to-select
(click left item, click matching right item) rather than true drag-drop — much less UI
complexity, same retrieval value, still buildable in an afternoon.

### 2.4 Interleaved cross-book drill sessions

**What:** A "mixed session" mode on top of `Review.jsx`/`Drills.jsx`: instead of filtering to
one book, deliberately interleave op-risk (book4), FRTB (R16), and governance items from
across all five books in one sitting, in random (not curriculum) order.

**Why for this content specifically:** Interleaving (vs. blocked practice) is one of the more
robust findings in the retrieval-practice literature specifically because it forces the
retrieval cue to include "which topic is this even about," which is exactly the skill that
fails on exam day when questions arrive in random order across the whole curriculum, not
grouped by reading. Institutional lists that superficially resemble each other (FSA cadence
tiers vs. FRTB liquidity horizons vs. Basel loss event categories) are also exactly the kind
of content interleaving protects against cross-contamination on ("wait, was that the FSA list
or the FRTB list?").

**Shape:** No new schema. `Review.jsx` already has a `bookFilter` array — add a `topicTags`
based filter (see 2.6) alongside it, and a "shuffle across selected" toggle that's already
close to default behavior (`dueCards` doesn't currently sort by book). Mostly a UI addition:
a preset chip row ("Op-risk mix", "Governance mix", "FRTB only") above the existing filter,
each mapping to a tag-based `filteredCards` predicate instead of (or in addition to) book
numbers.

### 2.5 "Explain it back" self-test prompt

**What:** A prompt shown after a reading's content (or standalone in a review session) that
asks the student to explain a mechanism or list ordering out loud/in writing before revealing
the model answer — e.g. "Without looking: why are FRTB's liquidity horizons ordered
10/20/40/60/120 rather than evenly spaced? What's the underlying rule?" Answer reveal shows
the actual axis sentence from the reading.

**Why for this content specifically:** This is the "generation effect" (attempting to produce
an explanation before seeing it strengthens retention more than reading the explanation
again) applied directly to axis-sentences (1a) — it forces the student to retrieve the
ORGANIZING RULE, not just the list, which is precisely the thing that makes an arbitrary list
reconstructible under exam pressure instead of raw-memorized.

**Shape:** Reuses the `axis` field proposed in 2.2's `lists` schema (no new field needed) —
a prompt is just "why this order?" with the `axis` string as the reveal. Cheapest mechanism
to build: a small component that takes a `lists[]` entry and renders prompt → reveal, no new
store state beyond optionally logging "attempted" via the existing `srs` grading UI
(`gradeCard` already accepts an arbitrary `cardId` string, so `"rn:list:id:axis"` slots in for
free).

### 2.6 Topic tags for cross-book filtering (infrastructure other mechanisms depend on)

**What:** A lightweight `topicTags: [string]` field per reading (e.g. `["op-risk",
"governance", "basel"]`, `["frtb", "market-risk", "regulation"]`), independent of the existing
per-reading `tag` (a one-line description string, not a filterable category) and independent
of `session` (too fine-grained, one per reading cluster).

**Why:** 2.1 and 2.4 both need a way to select "all the institutional-memory content" across
books without the student manually picking books 2/4/5. This isn't a memorization mechanism
on its own, it's the filter key the others need to be genuinely cross-book instead of
per-book.

**Shape:** New optional array field on the reading schema. `META`/`meta-data.js` doesn't need
to know about it (unlike `hy`/`deps`, which drive nav/planner); it only needs to be read at
runtime by `Review.jsx`/`Drills.jsx` from the loaded reading data, same access pattern already
used for `recall`.

---

## 3. Prioritized recommendation — build these first

Given solo, client-side, no backend, and that `srs`/`Review.jsx` already exists:

1. **2.1 (SRS coverage extension) + 2.6 (topic tags).** This is the highest leverage-to-effort
   ratio: the hard part (spaced-repetition scheduling, grading UI, keyboard shortcuts) is
   ALREADY BUILT. Extending it to `highYield` and adding tag-based filtering is glue code, not
   new mechanics, and immediately makes the existing tool useful for op-risk/governance
   review sessions instead of just the readings that happen to have rich `recall` arrays.
2. **2.2 (list reconstruction / "build the list").** This is the mechanism most specific to
   the stated problem ("learn this list, in this order") and the one flashcards genuinely
   cannot do (order-recall vs. item-recognition are different tasks). It's also the cheapest
   NEW schema field to backfill, since most of the target readings already have a `breakdown`
   entry that's 90% of the way to a `lists` entry (add an `axis` line, done).
3. **2.3 (committee/name matching).** Second new mechanism, not first, because it needs new
   content authored specifically for pairs (`pairs: [{left,right}]` isn't derivable from
   existing fields the way `lists` is derivable from `breakdown`) — but it directly answers
   "which committee owns X," the single most concrete complaint in the ask, so it's worth the
   extra authoring cost right after list-building ships.

2.4 (interleaving) and 2.5 (explain-it-back) are cheap follow-ons once 2.1/2.2/2.6 land (2.4
is a UI toggle on Review.jsx, 2.5 reuses the `lists.axis` field) — sequence them right after,
not in the same pass, so the first pass stays reviewable in one sitting.

---

## 4. Division of work for the follow-up implementation pass

Mirrors the comfort-UI spec's split: orchestrator owns shared foundation, agents get
disjoint per-file work.

### Shared foundation (orchestrator, land BEFORE fan-out)

- `store.js`: no new keys needed for 2.1/2.4 (existing `srs` covers any `cardId` string).
  For 2.2/2.3 completion tracking, extend `srs` cards to accept the new id schemes
  (`"rn:list:id"`, `"rn:pair:i"`) — this is a documentation-only change to the shape comment,
  not new code, since `gradeCard`/`dueCards` are already id-agnostic.
- `scripts/validate-reading.mjs`: extend to validate new optional fields (`lists`,
  `topicTags`, `pairs`) when present — shape checks only (array of objects with required
  sub-keys), matching how `quiz`/`recall` are currently validated.
- New route/nav wiring: `/lists` page (if built standalone rather than inline-only) needs a
  `main.jsx` lazy route + `Nav.jsx` `STUDY_ITEMS` entry + `CommandPalette.jsx` `PAGES` entry,
  same three-file pattern as the comfort-UI Bookmarks page.
- `Review.jsx` filter-bar changes (card-source toggle, topic-tag chips, interleave preset
  row) are shared UI the content agents don't touch — land this once, in the orchestrator's
  pass, before any content-schema fan-out, since agents rewriting readings shouldn't also be
  touching the review page.

### Content/schema work (Sonnet subagents, one per file, file-scoped prompts)

- **Tone pass on institutional readings**: book4 r63-r80 (liquidity/reporting/governance),
  book1 r16 (FRTB — largely already strong, spot-check only), book5 governance/committee
  readings (r90, r96-r99, r101). Prompt each agent with: the axis-first rule (1a), the
  five before/after examples above as the target register, and explicit instruction to
  strengthen `hooks`/`memory`/`pitfall` fields where they're thin, NOT to add new facts.
- **Backfill `lists` field**: for each reading with a `breakdown` entry describing an ordered
  or named-set list (most of book4 r63-r80, book1 r16, relevant book5 governance readings),
  add `lists: [{id, title, axis, items}]` derived from the existing `breakdown` entry plus one
  new `axis` sentence per list, extracted from (or newly written to match) the existing
  `intuition`/`thinkLike` prose. This is mechanical reshaping, not new research, and can be
  done by the same agent doing the tone pass on that file.
- **Backfill `pairs` field**: new authoring work (not derivable from existing fields) for
  committee/named-entity readings specifically (book4 governance sections, book5 r90/r96-r99),
  sourced from the same Schweser material per the content rule in root `CLAUDE.md` — one
  `{left, right}` per name/responsibility mentioned in the reading's `concepts`.
- **`topicTags`**: cheapest field, can be assigned in the same pass as the tone/lists work per
  file (2-4 tags per reading, drawn from a small fixed vocabulary the orchestrator defines
  upfront, e.g. `op-risk, governance, frtb, basel, liquidity, credit-risk, market-risk` — fix
  the vocabulary before fan-out so agents don't invent synonyms).

### App/UI work (orchestrator or a dedicated UI agent, after content lands)

- `src/components/chapter/ListBuilder.jsx` — new component for 2.2, rendered either inline
  near the source `breakdown` card in `Chapter.jsx` or aggregated on a new `/lists` page.
- `src/components/chapter/MatchPairs.jsx` — new component for 2.3, click-to-pair (not
  drag-drop) to keep it in scope.
- `Review.jsx` extensions — card-source toggle (`recall`/`highYield`/`lists`), topic-tag
  filter chips alongside the existing book filter, interleave-preset row.
- `Drills.jsx` extensions (optional, if list/pair drills are surfaced there instead of a new
  page) — new drill "kinds" alongside the existing calculation generators, reusing the
  `finish()`-style option-building helpers where applicable (list/pair drills don't need
  numeric formatting but do need the same seeded-shuffle-and-dedupe pattern).

### Verification (orchestrator, after all agents land)

Same as every prior pass: `npm run build` (zero new warnings), `node scripts/validate-reading.mjs`
on every touched file, import-sweep, headless render-check a chapter from each touched book,
and grep every touched content file for em/en-dashes (`grep -Rn '—\|–' src/data/<file>`) since
tone-pass agents are the group most likely to reintroduce them. Interactive mechanics
(drag/click on ListBuilder, MatchPairs, Review keyboard grading) get flagged for the student
to test manually, not claimed as verified. Update `PROGRESS.md` before ending the session.
