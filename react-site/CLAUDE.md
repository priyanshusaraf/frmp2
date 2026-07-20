# react-site/CLAUDE.md — the guide for every future agent working on this app

Written by Claude Fable 5 (2026-07-19) after reviewing every line of this codebase. This is
the binding style guide for **content, code, and UI**. If an instruction here conflicts with
your instinct, follow this file — the conventions below were established deliberately and the
student's experience depends on them staying coherent.

**Start every session by reading `../PROGRESS.md`** (the single resume point) and end every
session by updating it. The vanilla `../site/` app is frozen — never edit it; it exists only
as the reference implementation the widgets and renderers were ported from.

---

## 1. Who you are writing for, and how to teach

This is not a documentation site and not a summary generator. The user is **one student
preparing for the FRM Part II exam** who chose this app over just rereading the Schweser
books because the books state facts without building understanding. Every sentence you write
must earn its place by doing one of three jobs: building intuition, preventing a specific
confusion, or converting knowledge into exam-ready recall.

The teaching doctrine, in order of priority:

1. **Ground everything in the source material.** All curriculum content is extracted from
   the Schweser books at the repository root (`Book N (1).md` full texts; `FRM2_*_CompleteBookN.md`
   condensed companions for Books 1–4; Book 5 has only the full text). Never invent facts,
   numbers, named lists, or committee structures. If the source doesn't say it, you don't
   write it. Rephrasing for clarity is the job; adding content is a defect.
2. **Intuition before formalism.** Sections are ordered teaches → why → intuition → eli5 →
   thinkLike → visual → breakdown → formulas → concepts → … deliberately: the student meets
   the *idea* three or four times before the first equation. When you write a formula's
   `plain` field, it must let a student who skipped the math still answer a conceptual exam
   question about it. Derivations are optional depth (`derivation`), never the main path.
3. **Start from a person, not a definition.** The best explanations in this app anchor on an
   actor and their incentive ("Start from who is reading the report and what they are allowed
   to do about it…", "Picture an interest rate swap between Bank A and Bank B…"). Prefer that
   shape over "X is defined as Y".
4. **Teach the trap, not just the truth.** The exam is built from misconceptions. Every
   reading carries `misconceptions` ({wrong, right} pairs — write the *wrong* one so it
   genuinely sounds plausible), `concepts[].pitfall`, and `connections.confused`. When you
   explain anything subtle, ask: what would a smart student get wrong here? Write that down.
5. **Concrete numbers over abstractions.** A worked example with $100M notional and 4%/100bp
   beats a paragraph of prose. Examples live in `concepts[].example`; counterexamples
   (`counter`) show where the concept breaks.
6. **Respect the student's time.** `highYield` stars are a contract: 5★ = "this WILL be on
   the exam", and downstream features (KeyPoints rail, planner weighting, home-page global
   high-yield list) consume them. Don't inflate stars. `summary` is one page, telegraphic,
   rereadable the morning of the exam.
7. **Never leave the student needing to ask "why?" elsewhere.** The whole reason this app
   exists is so the student never has to reach for another tool to understand a claim. When a
   statement is **counterintuitive** — anything that cuts against a natural assumption — you
   MUST supply the mechanism in the same breath, not just assert the surprising fact. Example
   of the failure (real, from r63): *"deposits have become LESS stable over time — depositors
   rate-shop across institutions"* states the surprise but not the WHY, so the student had to
   ask an AI. The fix is to explain the causal chain (online banking made moving money
   frictionless; deposit-insurance caps mean large balances flee first; competition means the
   whole deposit market reprices at once under stress) — **sourced from Schweser, never
   invented.** Give counterintuitive points MORE room, not less. Where students genuinely
   struggle, a simpler, slower explanation is correct; simpler ≠ oversimplified — never drop
   the exam-relevant nuance, just build the intuition before stating it.

**Exemplar worth rereading before any intuition/eli5 pass: R28's tranche-correlation
explanation** (user-flagged as the best writing in the app, 2026-07-21). Two moves worth
copying: (1) it opens with a *known, simpler* system before the real one — a fair-coin-flip
analogy for zero correlation, then perturbs it ("now raise the correlation... it's more like
flipping 1,000 coins that are all wired to tend to land the same way") rather than presenting
the correlated case cold; (2) the `eli5` reframes the entire tranche waterfall as apartment
rent tickets (Gold/Silver/Bronze paid in a fixed pecking order) and resolves the SAME
correlation mechanism through that frame, so a reader who only has the ELI5 still reaches the
real conclusion (senior hurt by correlation, equity helped by it) without needing the formal
version at all. Both explanations independently earn the punchline instead of just asserting
it — that's the bar.

### Prose style — HARD RULES (apply to every user-facing content field)

- **NO EM-DASHES OR EN-DASHES ANYWHERE** (`—`, `–`). They read as AI-generated and the product
  owner has banned them outright. Rewrite with a comma, colon, parentheses, or a full stop —
  usually a full stop or colon reads better anyway. This applies to ALL content fields
  (`teaches`, `why`, `intuition`, `eli5`, `thinkLike`, `concepts[].*`, `breakdown[].points`,
  `misconceptions`, `highYield`, `hooks`, `recall`, `summary`, taglines, quiz whys). A minus
  sign in math (`a-b`) or a hyphen in a compound word (`risk-weighted`) is fine; the banned
  characters are specifically the long dashes. Grep check before shipping any content edit:
  `grep -Rn '—\|–' src/data/<file>` must return nothing.
- **Human, plain tone.** Write the way a sharp tutor talks, not the way a textbook is printed.
  The tone-humanization + em-dash removal has NOT been verified across all 101 readings yet
  (see the content-quality workstream in `docs/superpowers/specs/2026-07-20-comfort-ui-v2-plan.md`).

### Content schema (each `src/data/bookN/rNN.js` default-exports this)

```
{ book, reading, session, title, tagline, teaches, why, intuition,
  eli5, thinkLike,                       // teaching layers (HTML strings)
  visual,                                // optional: `<div class="widget" data-widget="NAME" ...>`
  breakdown: [{title, points[]}],        // pointwise lists of enumerable ideas
  formulas: [{name, math, plain, note, derivation}],
  concepts: [{name, def, intuition, example, counter, pitfall, related, memory}],
  connections: { from:[{r,why}], to:[{r,why}], confused:[{what,how}] },
  misconceptions: [{wrong, right}],
  highYield: [{stars, what, why}],
  quiz: [{q, options[4], answer, why}],
  recall: [{q, a}], hooks: [{title, text}],
  sources: [{title, url, note}], pdf: {book, query}, summary }
```

Hard rules learned from production incidents:

- **Quiz**: exactly 4 options. `Quiz.jsx` (and `/mock`) **shuffle option order every round**,
  so (a) answer-index clustering in the data is harmless — never "rebalance" it — and
  (b) a `why` that says "Option A" or "B and C" points at a *random* option in the UI.
  Whys must paraphrase content ("Doubling the horizon scales VaR by √2, not 2…"), never
  reference letters. No "None/Both of the above" options — they're position-dependent.
- **LaTeX**: `formulas[].math` is real LaTeX (`\dfrac{\text{…}}{\text{…}}`), typeset by KaTeX
  when it "looks like TeX" (`lib/tex.js` `isTex`). Prose math uses `\( … \)` / `\[ … \]` —
  **never `$…$`**, because dollar amounts in source text must not be mangled. Bare English
  words inside math must be wrapped in `\text{}` (the validator rejects them).
- **`pdf.query`** must appear **verbatim** in the source MD (strip `**` and normalize curly
  quotes when grepping to check) — it drives the "Open source PDF" search-jump.
- **`sources`**: reputable domains only (regulators, exchanges, Investopedia-tier references,
  original papers). Check every URL's domain plausibility.
- **`visual` widgets**: the `data-widget` name MUST be registered in `src/widgets/*` or the
  chapter renders a "widget failed" box. Check
  `grep -rho 'register("[a-z0-9-]*"' src/widgets` before referencing a name. (r32/r45 shipped
  broken for a session because a content agent invented widget names.)
- Cross-references (`connections.from/to`, `concepts[].related` `{r, label}`) must resolve
  against reading numbers in `src/lib/meta-data.js`.

**Gate every content change** with `node scripts/validate-reading.mjs bookN/rNN.js NN`, and
after ANY multi-agent run over data files, import-sweep every touched file
(`node --input-type=module -e "await import('./src/data/$f')"`) — agents killed mid-edit can
leave unescaped quotes that the validator never gets to see.

---

## 2. How to write code here

Stack: **Vite + React 18, plain JSX, no TypeScript**, react-router `HashRouter`, Tailwind 3.4
(preflight OFF) coexisting with a legacy `src/styles/style.css`, Radix primitives, KaTeX,
pdfjs-dist. Keep the dependency list this small — adding a dependency needs a reason a
one-file utility can't satisfy.

### Architecture invariants (breaking these has bitten us before)

- **`src/lib/meta-data.js` is the single source of truth for structure** (books, readings,
  stars, deps, threads, graph). Never hardcode a reading count, book color, or path — derive
  via `lib/meta.js` helpers (`bookOf`, `readingMeta`, `rpath`, `bpath`).
- **Readings load lazily** (`src/lib/readings.js`). `useReading(rn)` for one reading,
  `useAllReadings()` for the full map — both return `null` while loading and **every consumer
  must render a loading state** (the pattern: keep the page's `h1`/lead visible, swap the body
  for a faint "Loading…" line). `getReading(rn)` is a sync cache read, only safe in components
  that render *after* the reading is already on screen (MiniMap, Highlighter). The legacy
  `readings` export is an initially-EMPTY map — never build an index from it at module scope.
  Do not revert to eager loading: it was a 5MB main bundle.
- **All user state lives in one versioned localStorage blob** via `src/lib/store.js`
  (`useSyncExternalStore`). Two iron rules: (1) selectors must return **stable identities** —
  `useStore((s) => s.x || {})` creates a fresh object per call and causes React #185 infinite
  loops; select the raw slice and default *outside* the selector. (2) Every reader treats
  newer keys as optional (old blobs lack them); mutations always spread the previous state.
  New user data = new optional key on the blob + mutation function in store.js, documented in
  the shape comment at the top. No other persistence, no backend.
- **Route-level code splitting**: Home/Book/Chapter are eager; everything else is
  `React.lazy` in `main.jsx` (PdfView especially — it isolates pdfjs). New pages follow that
  pattern and get: a route in main.jsx, a Study-menu entry in `Nav.jsx`, and a `PAGES` entry
  in `CommandPalette.jsx`.
- **Trusted-HTML rendering**: curriculum HTML goes through the `<Html>` component (which
  typesets `\( … \)` prose math). Formula math: `renderMath(f.math, display)` +
  `isTex() ? "f-tex" : ""` class + `fitMath(root)` after mount. Never render a content field
  as raw JSX text (it will print literal `<em>` tags) and never bypass `<Html>` with your own
  `dangerouslySetInnerHTML` for content fields.
- **Global keyboard handlers** must start with the guard:
  `if (e.metaKey||e.ctrlKey||e.altKey) return;` then bail if `e.target` is
  INPUT/TEXTAREA/contentEditable. Existing shortcuts (don't collide): `n` note, `⌘K` palette,
  `[`/`]` prev-next reading, `1-4`/`a-d` quiz answer, `Space`+`1-4` review grading.
- **Widgets** (`src/widgets/`) are imperative `(el) => void` draw functions registered by
  name, written in the ported vanilla style (`var`, string-built controls, `svgEl`/`shell`
  helpers). Colors ONLY via CSS variables so both themes work. Each widget reads params from
  `data-*` JSON attributes with defaults, draws once, and redraws on its own control input.
  Books 1–2 widgets live in `core.js`, books 3–5 in `book{3,4,5}.js`.

### Style

- Function components + hooks only; no classes, no HOCs, no context providers (the store
  pattern replaces them). Small files, one component per concern; page-level composition in
  `src/pages/`, chapter internals in `src/components/chapter/`, generic primitives in
  `src/components/ui/`.
- Match the file you're editing: this codebase mixes Tailwind utility classes (newer shell
  components) and inline `style={{}}` with CSS-variable values (older pages). Either is
  fine — **do not "clean up" one into the other in unrelated diffs.**
- Comments state constraints the code can't show (why a rAF retry exists, why a guard is
  needed), never narrate what the next line does.
- Defensive rendering: content code must never throw on a missing/malformed field — the
  orphan-safe pattern in `lib/highlights.js` (catch, skip, report) is the house standard.

---

## 3. UI doctrine

The bar is "credible commercial study tool", not "AI-generated dashboard". Concretely:

- **Dark-first, two themes.** Theme = `data-theme` on `<html>`, set pre-paint in
  `index.html`. Every color in JSX/SVG/CSS is a variable: text `var(--text)/--text-dim/
  --text-faint`, chrome `--border/--border-strong/--bg-raised/--bg-inset/--bg-hover`, semantic
  `--accent/--green/--red/--amber/--purple/--cyan/--pink` (+ `-soft` fills). Tailwind tokens
  map onto the same vars (`text-ink`, `text-dim`, `text-faint`, `border-line`,
  `border-linestrong`, `bg-raised`, `bg-inset`, `bg-hovered`, `bg-accent-soft`, `rounded-el`,
  `rounded-card`, `shadow-card`, `font-app`, `font-mono`). A hex literal in a component is a
  review failure (the only exceptions: the mind-map's fixed book palette and highlight-mark
  colors, which are shared across themes by design).
- **Book color is the identity system.** Anything scoped to a book uses `b.color` /
  `b.colorSoft` from META (kickers, progress bars, borders-left, dots, chips). Don't invent
  new accent colors per feature.
- **Established patterns — reuse, don't reinvent:** `.section-label` with colored dot for
  section starts; `.card` (+ `.card.accent`) for grouped content; `.chip` for filter pills
  (active = colored border + colored text); `.kicker` for the small colored eyebrow above
  h1; `.stat-row`/`.stat` for number tiles; `.reading-row` for reading lists; `Progress`
  bar with per-book color; `Badge` tones green/amber/red for scores. Radix (`components/ui/`)
  for anything with open/close semantics — dialog, popover, accordion.
- **Type scale is quiet:** body ~0.9rem, secondary 0.82–0.88rem, metadata 0.72–0.78rem,
  numbers and counts in `font-mono`. Emphasis comes from weight and color, not size jumps.
- **Interaction details are the polish:** hover states on everything clickable
  (`hover:border-linestrong hover:bg-hovered` or color shift), `transition-colors`,
  keyboard access for anything with onClick (role="button", tabIndex, Enter/Space), loading
  states for every async boundary, and empty states that *teach* ("No highlights yet.
  Select any passage of text inside a chapter…" — every empty state tells the student how
  to create the thing).
- Layout: content column `main.page` (~860px), wide pages `main.page.wide`; docked rails
  (TOC right, KeyPoints left) only ≥1400px via portals to `<body>`.

---

## 4. Verification — nothing ships without this

```bash
npm run build                                   # must stay green, zero warnings you introduced
node scripts/validate-reading.mjs bookN/rNN.js NN   # after any content edit
# render-check (dist does NOT work over file:// — ES-module CORS):
npm run build && cd dist && python3 -m http.server 4177 &
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu \
  --virtual-time-budget=9000 --dump-dom "http://localhost:4177/index.html#/chapter/32" \
  | grep -c 'widget failed\|undefined<\|>null<\|tex-error'   # must print 0
```

Spot-check at minimum: home, one chapter per touched book, and every page whose code you
changed. Interactive behavior (text selection → highlight toolbar, keyboard shortcuts)
cannot be verified headless — flag it for the user instead of claiming it works.

## 5. Working as a fleet

For fan-out work (per-reading content passes, per-file conversions): one agent per file,
file-scoped prompts that paste the exact API contract, agents do NOT run builds (they
collide); the orchestrating session builds, import-sweeps, render-checks, and fixes after
all agents land. Reuse the enrichment workflow script referenced in `../PROGRESS.md` for
content passes. Update `../PROGRESS.md` (and the feature table) before ending the session —
it is the only memory the next session is guaranteed to have.

**Never run `git stash`, `git reset`, or any other repo-wide git state change from inside a
fan-out agent.** Agents share one working tree with the orchestrator and with each other; a
stash/pop on a dirty tree can silently drop or reorder another agent's or the orchestrator's
uncommitted edits (this happened on 2026-07-21 — a content agent's stash/pop wiped four
infra files the orchestrator had just written, recovered only because the orchestrator still
had the edits in its own context and could redo them). Agents touch only their assigned
files with Edit/Write; if a file-scoped edit needs a clean baseline, re-read the file, don't
stash.

## 6. Roadmap: cross-reading core-concept system (NOT YET BUILT — spec only)

Requested 2026-07-21: reused, theory-dense models (the motivating example: Vasicek WCDR,
which is defined once in R21 and then referenced by name across R8/R11/R12/R13/R14/R26/R27/
R29/R59) currently get re-explained thin or not at all when they resurface in a later
reading. The ask is a Wikipedia-style cross-reference system: hover a model's name anywhere
it's reused → short snippet pops up → "Learn more" opens a dedicated, deeper-than-the-book
explanation page → a "Back to reading" button returns to wherever you came from (shown only
if you arrived from an actual reading, not from a concepts index). This is a multi-phase,
usage-intensive build — do NOT implement it opportunistically inside an unrelated session;
treat it as its own scoped project. Decisions already made with the user (do not re-litigate
without asking):

- **Which models qualify — automatic, not curated.** Any name that appears in `formulas[]`
  or `concepts[]` across 2+ readings (normalized match) is auto-promoted to a "core concept."
  No manual registry to maintain.
- **Depth beyond the book is allowed.** Core-concept pages MAY include general finance
  knowledge not present in the Schweser source (unlike every other content field in this
  app) — but it MUST be clearly labeled as beyond-exam-scope ("Extra depth" / "Beyond the
  exam") so a student never mistakes outside content for something GARP will test. This is a
  deliberate, scoped exception to the "never invent, only from Schweser" hard rule in section
  1 — it applies ONLY to this feature's extra-depth layer, nowhere else.
- **Piecewise formula breakdown wanted.** For a formula like WCDR, every symbol needs its own
  explained row (what it is, why it's there, e.g. why the inverse-normal, why the √ρ), not
  one paragraph — the R21 "Show the math" derivation is a good base to build from but isn't
  itself piecewise.

Proposed build (not yet started, no code written):

1. **`src/lib/coreConcepts.js`** — scans `useAllReadings()`, builds `{ slug, name,
   homeReading (lowest rn it appears in), refs: [rn...] }` for every formula/concept name
   that recurs across 2+ readings.
2. **`/concepts` index + `/concept/:slug` page** — lazy routes like other secondary pages;
   the deep-dive page renders the home reading's existing formula/concept content as the
   base layer, plus a new optional authored layer (`formulas[].terms: [{symbol, meaning,
   why}]` for the piecewise breakdown, `formulas[].deepDive` HTML for the extra-depth
   section, visually separated and labeled per the rule above).
3. **Inline reference + hover snippet** — later readings that reuse a core-concept name get
   it wrapped (auto-detected, not manually authored, same keyword-match style as
   `lib/related.js`) in a small component rendering a dotted-underline term; hover (desktop)
   or tap (mobile — hover doesn't exist on touch, needs a tap-to-open fallback) shows a short
   auto-generated snippet via a Radix HoverCard/Popover, with a "Learn more →" link to
   `/concept/:slug`.
4. **Back-to-reading button** — navigate to the concept page with router `state: {
   fromReading: rn }` (same convention as the existing `state.resume`/`state.scrollTo` on
   Chapter.jsx); the concept page shows "← Back to Reading {rn}" only when that state key is
   present, so arriving via `/concepts` or a bare link shows no button.

Sequencing, because this touches every reading that reuses any core concept (a large
fan-out): **Phase 1** — auto-detection lib + `/concepts` index + basic `/concept/:slug` page
(book-layer content only) + back-to-reading button, no hover snippets yet, no extra-depth
content yet. **Phase 2** — piecewise `terms[]` breakdown + first authored `deepDive` content,
piloted on Vasicek WCDR only. **Phase 3** — the inline hover-snippet linking pass across all
readings that reference an established core concept (the expensive phase; do as a dedicated
fleet run, one agent per file, following section 5's rules).

## 7. Roadmap: further ideas scoped 2026-07-21 (NOT YET BUILT — spec only)

Four more requests from the same session, deliberately scoped here instead of built, so a
future session with more usage budget can implement them without re-deriving requirements.
**When the user says something like "check CLAUDE.md for what's left and implement it,"
this section (and section 6) is what they mean.** Treat each as its own scoped project —
brainstorm/confirm specifics with the user before building, the way section 6 was handled,
since these are still spec-level, not fully nailed down.

### 7.1 Foundational-concept revision system

The problem, in the user's words: for FRM Part II specifically (as opposed to Part I / CFA
Level I), readings constantly assume prerequisite concepts the student learned earlier and
may have quietly forgotten — the user's own example was forgetting that equity is the lowest
tranche in the capital structure while reading R28's correlation material, which depends on
already knowing the tranche waterfall. This is a *different* problem from section 6's
core-concept system: section 6 is about a reused ADVANCED model resurfacing (Vasicek WCDR);
this is about a basic/foundational prerequisite silently assumed and never re-taught. Needs
its own design pass before building — open questions to resolve with the user: how are
"foundational prerequisite" facts identified (a new lightweight tag on `concepts[]`/
`connections.from`? auto-derived from `connections.from` external-prereq entries that already
exist in the schema?); what the revision surface looks like (a dedicated page, an inline
just-in-time reminder when a reading's `connections.from` references a prerequisite the
student hasn't visited/marked done, both?); whether it plugs into the existing SRS engine
(section 2.1 of the memorization spec) as another card source, which seems like the natural
fit given the infrastructure already exists.

### 7.2 Settings page

New `/settings` page (lazy route, Study-menu + command-palette entry, same pattern as every
other secondary page). **Build now, when this gets picked up: font size only** — a `layout`
store key (e.g. `layout.fontScale`, multiplier applied as a CSS custom property on `<html>`
or `main.page`, following the existing `--text`/`--text-dim` CSS-variable convention so it
doesn't fight the type scale doctrine in section 3). Everything else the user mentioned (font
family, background color/theme granularity beyond the existing dark/light toggle) is
explicitly deferred — "not that important," in the user's words — so don't build those until
asked again, even though the settings page shell should probably be laid out to accommodate
them later (a simple list of labeled controls, not a one-off single-field page that has to be
restructured when more settings arrive).

### 7.3 Paid-access device licensing (auth + device binding)

For when this app is distributed for money. Full rule set as specified by the user
2026-07-21 (do not simplify or reinterpret without re-confirming — these numbers were
deliberate):

- Account requires a user ID + password, **plus additional device-binding signal** beyond
  credentials alone (exact mechanism TBD at design time — e.g. a server-issued device token
  stored per device — since credentials alone can't enforce device limits).
- Each account gets **exactly one "computer" slot and one "phone" slot** as primary devices —
  both may be used concurrently, no restriction between them.
- If the account is used from a device that isn't one of the two current primary devices:
  that new device gets a **4-hour access window**, after which it's locked out, and **cannot
  attempt access again for 2 days** — UNLESS the user promotes it to replace a primary device
  during that window (see next rule).
- **Primary device reassignment (swapping which computer/phone is "the" primary) is allowed
  at most once per 7 days.** This is the actual anti-sharing mechanism: someone who wants to
  hand the account to a friend can technically do it, but only by burning their one
  reassignment per week and giving up their own access in the process — not something a
  legitimate single user would ever hit accidentally.
- If a legitimate user needs off-primary-device access outside these rules (e.g. traveling,
  borrowed device, lost phone), the intended path is a **support enquiry to us**, not a
  product-side self-service override — i.e. this is a deliberately strict default with a
  human escape hatch, not a fully automated flow.

This needs backend infrastructure this repo does not currently have (there is no
server/auth/payments layer yet — see PROGRESS.md's "Deferred / later" list, which already
flagged "any backend/auth/payments" as out of scope for the current local-storage-only
architecture). Scoping this now is explicitly about **capturing the exact business rule**
before it's forgotten, not about being close to buildable — implementing it is a distinct,
large project (needs a backend, a database, session/device-token management, and a support
workflow) that should get its own brainstorm-through-plan cycle whenever the product is
ready to charge for access.

### 7.4 Split-view source material alongside a reading

Let the student open source material (the full Schweser book, `Book N (1).md`/PDF) and/or
the condensed companion PDF (`FRM2_*_CompleteBookN.md`/PDF, Books 1-4 only) in a side pane
next to the reading, instead of navigating away to `/pdf/:bn`. Requested combinations: source
alone on one side, condensed alone, or both open at once (one per side) while the reading (or
nothing) occupies the remaining space. This is a natural extension of the existing
`PdfView.jsx` (already lazy-loads pdfjs, already used by the "Open source PDF ↗" button and
the `/pdf/:bn` route) rather than a new subsystem: the design should reuse `PdfView` as a
mountable pane in a resizable split layout (likely following the `useEdgeResize.js` drag
pattern already used for the reading-width resizer and the per-list `Resizable.jsx`
component), with a `layout` store key for which pane(s) are open and at what split ratio.
Open questions for the design pass: whether split view is available on mobile at all (screen
width makes a true side-by-side unrealistic below some breakpoint — probably desktop-only,
falling back to the existing full-screen `/pdf/:bn` on narrow viewports) and whether the
condensed-companion PDF needs its own query-jump support like `d.pdf.query` already provides
for the full source.
