# Comfort-focused UI batch — design + agent contracts (2026-07-20)

Six UI changes to `react-site/` aimed at reading comfort. The orchestrating session
owns the shared foundation (store contract, CSS classes, route/nav wiring). Each feature's
component work is then fanned out to one Sonnet subagent per **disjoint** file.

## Shared foundation (owned by orchestrator, landed BEFORE fan-out)

### store.js additions (all keys optional; readers default; mutations spread prev state)
- `layout: { pageWidth, keyPointsOpen, tocOpen }`
  - `setPageWidth(px)` — number, or `null`/undefined to clear (reset to default). Clamp NOT done here; caller clamps.
  - `setKeyPointsOpen(bool)`, `setTocOpen(bool)`.
- `bookmarks: { [rn]: [ { id, txt, ts } ] }` — `id` = `slugify(sectionTitle)`.
  - `toggleBookmark(rn, { id, txt })` — add if absent, remove if present.
  - `isBookmarked(state, rn, id)` — pure helper against a passed state slice.
  - `allBookmarks(state)` — flat `[{ rn, id, txt, ts }]` newest first, for the /bookmarks page.
- `lastVisited: { rn, ts, y, section }` — extend existing.
  - `touchVisited(rn, extra)` — `extra` optional `{ y, section }`. Called on chapter open (no extra)
    and throttled on scroll (with extra). Only writes when rn or a provided field changes materially.

### style.css classes (owned by orchestrator; agents reference by name)
- `.corner-pill` — floating collapsed rail button (fixed, bottom corner, rounded, subtle).
  Variants `.corner-pill.left` / `.corner-pill.right`.
- `.rail-panel` — the expanded floating card that a pill opens (fixed, anchored above its pill,
  `max-height:66vh; overflow:auto`). `.rail-panel.left` / `.rail-panel.right`.
- `.rail-panel-head` (title row + close ✕), `.rail-panel-close`.
- Existing `.key-points*` / `.chapter-toc*` inner styles are kept for list/link markup;
  the docked `@media(min-width:1400px){ position:fixed... }` wrappers are removed — rails are now
  pills at ≥1000px, driven by JS open state, not width-docked.
- `.page-resize` — thin drag handle on the right edge of `main.page` (visible on hover, `cursor:ew-resize`).
- `.section-label` gains room for `.bookmark-toggle` (small ☆/★ button, `.bookmark-toggle.on`).
- `.chapter-toc a .toc-bm` — the ★ marker shown next to a bookmarked section in the panel.

### route / nav wiring (orchestrator)
- `main.jsx`: `const Bookmarks = lazy(() => import("./pages/Bookmarks.jsx"))` + `<Route path="/bookmarks">`.
- `Nav.jsx`: add `["/bookmarks", "Bookmarks", Bookmark]` to `STUDY_ITEMS` (import `Bookmark` from lucide).
- `CommandPalette.jsx`: add `{ label: "Bookmarks", path: "/bookmarks" }` to `PAGES`.

## Feature → agent (disjoint files)

1. **KeyPoints.jsx** — collapsed `.corner-pill.left` (dot + "Key points"); click expands `.rail-panel.left`
   with the existing highYield list. Open state from `layout.keyPointsOpen` via `setKeyPointsOpen`
   (default collapsed). Portal to body. Render only ≥1000px (CSS handles hiding, but also guard mount).
2. **ChapterTOC.jsx** — collapsed `.corner-pill.right` ("On this page"); click expands `.rail-panel.right`
   with the TOC. Keeps IntersectionObserver active-section tracking. Reads `rn` prop + `bookmarks[rn]`;
   bookmarked sections show a `★` (`.toc-bm`). Open state from `layout.tocOpen` via `setTocOpen`.
3. **Highlighter.jsx** — toggle fix. (a) Mark popover: clicking the *active* color removes the highlight.
   (b) Selection toolbar: when the selection intersects an existing `mark.hl` (via `range.intersectsNode`),
   enter edit mode — active color outlined; clicking it removes, clicking another recolors; no duplicate add.
4. **SectionLabel.jsx + new pages/Bookmarks.jsx** — SectionLabel accepts optional `rn`; when present renders
   a `.bookmark-toggle` calling `toggleBookmark(rn, { id: slugify(txt), txt })`, `.on` when bookmarked.
   Bookmarks.jsx: `allBookmarks(state)` grouped by reading, each links to `/chapter/:rn` + `#id`, empty state teaches.
5. **Chapter.jsx** — (a) `.page-resize` handle: drag changes column width by 2×dx (centered), clamp
   [720, viewport-32], double-click resets; width from `layout.pageWidth` applied as inline maxWidth;
   persist via `setPageWidth`; mount handle only ≥1100px. (b) Scroll: save throttled scroll y + nearest
   section label via `touchVisited(rn, {y, section})`; on arrival with `location.state.resume`, restore y
   after `d` + math/widgets settle (rAF), else keep scroll-to-top. (c) Pass `rn` to every `<SectionLabel>`
   and to `<ChapterTOC>`.
6. **Home.jsx + Book.jsx** — Continue-studying card: show `lastVisited.section` ("…left off in X"),
   Resume link passes `state={{ resume: true }}`. Mirror the card atop the Book reading list.

## Verification (orchestrator, after all agents land)
`npm run build` (zero new warnings) → import-sweep touched files → headless render-check a chapter
(grep 0 failure markers). Interactive bits (drag, highlight toggle, bookmark toggle) flagged for user test.
Update PROGRESS.md.
