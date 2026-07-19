# Highlights & study-aids batch — design

Date: 2026-07-19 · Scope: `react-site/` only (vanilla `site/` stays frozen)

## 1. User ideas (verbatim intent, recorded)

1. **Highlighting** specific components/passages per reading.
2. For a highlighted section, **find relevant quiz questions or eli5 material** covering it.
3. **Compilation of highlights by color** (color = user-defined meaning).
4. Instant **"take quick note"** that quotes the highlighted section.
5. **External-event / case-study inline links**: underline a passage, show a small
   widget beside it; clicking reveals a quick preview with an expand option linking
   to the actual case study. *User: not important for v1.*
6. Show the **exam-priority stars** on each reading's own page (currently only on
   book/home lists).
7. **Manim animations** for quant sections.
8. **"Key points to remember"** as an optional widget on the left side (left rail
   is empty — the TOC docks right).

Reviewer (Fable) additions accepted into the same batch:

9. **Regression fix**: `Chapter.jsx` stopped rendering `eli5`, `thinkLike`,
   `breakdown`, `Quiz`, `MiniMap`, and `sources` — the TOC lists them but the JSX
   never mounts them. All book-1–5 enriched content is invisible until this is fixed.
10. **Continue studying** card on Home (last visited reading).
11. Quiz **"retake wrong answers only"** mode.
12. **Keyboard nav**: `[` / `]` for previous/next reading.
13. **Export highlights + notes to Markdown** from the highlights page.

## 2. What ships now vs. later

**Now (this batch):** items 1–4, 6, 8–13.
**Deferred:**
- Item 5 (inline case-study previews) — v2, per user.
- Item 7 (manim): manim is not installed on this machine and needs a Python +
  ffmpeg + LaTeX toolchain (a machine-level install we won't do unprompted), and
  good scenes are their own project. Concrete plan when picked up: a `manim/`
  dir at repo root with one scene file per animation; render pre-compressed
  `.webm` into `react-site/public/anim/`; a small `<VideoFigure>` component and
  an optional `anim: {file, caption}` field per reading; candidates = component
  VaR geometry (r85), Vasicek loss distribution, copula sampling, EWMA vs GARCH
  decay. Interactive SVG widgets remain the primary visual-teaching tool —
  video is passive; widgets recompute.

## 3. Data contracts (implemented in `lib/store.js` by the main session FIRST; agents consume, never edit, `store.js`)

```js
// store blob additions (all optional for old blobs):
highlights: { [rn]: [ {
  id,            // random slug
  color,         // 'y' | 'g' | 'b' | 'r'
  text,          // exact quote, normalized whitespace, <= 600 chars
  prefix, suffix,// 32 normalized chars of context each side (anchoring)
  section,       // nearest section-label id at creation time ('' ok)
  ts
} ] },
hlLabels: { y, g, b, r },      // user-editable legend, e.g. y: "definition"
lastVisited: { rn, ts },
```

Mutations: `addHighlight(rn, h)`, `removeHighlight(rn, id)`,
`setHighlightColor(rn, id, color)`, `setHlLabel(color, label)`, `touchVisited(rn)`.
Notes keep using the existing `addNote({rn, section, quote, text, kind})`.

## 4. Components & division of work

**Main session (Fable) — owns `Chapter.jsx`, `store.js`, `main.jsx`, `Nav.jsx`, CSS:**
- store.js additions above; CSS for `mark.hl.hl-{y|g|b|r}` (theme-aware, light/dark)
  and the left rail; `touchVisited` effect + `[`/`]` key nav + header stars
  (`readingMeta(rn).hy`) in Chapter.jsx; restore the six missing sections
  (item 9) in the same order as the TOC `pushSec` list; `KeyPoints.jsx` left rail
  (portal, fixed left, `min-width: 1400px`, collapsible; content = the reading's
  `highYield` items with stars >= 4, cap 6); mount `Highlighter`; add
  `/highlights` route + Study-menu nav link; final build + verification.

**Agent A — highlight engine (new files + mount-ready):**
- `src/lib/highlights.js`: pure anchoring logic. Normalize text (collapse
  whitespace) over the chapter content root; store quote+prefix+suffix; re-attach
  by scanning a concatenated normalized-text/node-offset map, disambiguating
  multiple quote occurrences by prefix/suffix score; wrap matched ranges'
  text-node segments in `<mark class="hl hl-<color>" data-hl="<id>">`. Unfound
  highlights are orphans: keep the record, never crash, expose `paint()` result
  `{painted, orphaned}`.
- `src/components/chapter/Highlighter.jsx`: `<Highlighter rn containerRef />`.
  Paints on mount/rn-change (retry once on rAF for late KaTeX/widget DOM).
  Selection toolbar on non-collapsed mouseup selection inside the root: 4 color
  dots + "Note" + "Read in source" (absorb the PDF search-jump action currently
  in `ReadInSource.jsx` so there is ONE toolbar; keep the same `/pdf/:bn?q=`
  Link semantics). Clicking an existing mark opens a popover: color swap, remove,
  inline quick-note textarea (calls `addNote` with the quote pre-filled), and a
  "Related in this reading" list from `lib/related.js` (render only if it
  returns matches).

**Agent B — `src/pages/Highlights.jsx`:**
- Route `/highlights`. All highlights grouped by reading, filter chips by color
  and book; editable color-legend labels (via `setHlLabel`); orphan badge
  ("content changed") for records the chapter can no longer anchor (flag only if
  cheaply detectable — else omit); click-through to `/chapter/:rn`; "Export
  Markdown" button producing highlights + their notes grouped by reading.

**Agent C — `src/lib/related.js`:**
- `findRelated(readingData, text, max = 4)` → `[{type: 'quiz'|'concept'|'eli5'|'formula', label, snippet, sectionId}]`.
  Stopword-stripped keyword overlap scoring against quiz q/why, concept
  name/def, eli5 text, formula name/plain. Pure function, no imports from
  components; deterministic; returns `[]` when nothing scores.

**Agent D — quick wins (owns `Quiz.jsx`, `Home.jsx` only):**
- Quiz: after a completed round with wrongs, "Retake wrong only" re-rounds just
  the missed questions (scores from partial rounds don't overwrite `best` from
  full rounds — only full-quiz rounds call `recordQuiz`).
- Home: "Continue studying" card from `lastVisited` (skip if unset) linking to
  the chapter, showing title + book + stars.

## 5. Verification

- `npm run build` green; import-sweep every touched data/lib file.
- Headless render spot-checks (the outstanding PROGRESS item): r02, r67, r85
  via `vite preview` + headless Chrome, grep for widget failures/undefined; plus
  a smoke pass of `/highlights` and one chapter with the six restored sections.
- Manual-ish check: selection toolbar appears, highlight persists across reload
  (localStorage), quote lands in a note.

## 6. Risks

- Anchoring across KaTeX-rendered formulas: quotes that span TeX spans may not
  re-anchor after re-render — acceptable; they become orphans, never errors.
- Two selection toolbars (old ReadInSource + new) would collide — resolved by
  absorbing ReadInSource's action into the Highlighter toolbar (one toolbar).
- Parallel agents: file ownership is strictly disjoint (see section 4); the main
  session is the only writer of shared files.
