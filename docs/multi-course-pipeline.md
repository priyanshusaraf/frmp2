# Adding a new course (CFA L1, FRM Part I, …) — the pipeline

Written 2026-07-20, after the FRM Part II build. Status: **design, not yet executed.**
The decision on 2026-07-20 was to finish and ship Part II first and restructure only when a
second course is actually about to be added — the abstraction should be written once we know
what genuinely varies between courses, not guessed at now.

This file exists so that when that day comes, the method is already settled.

---

## 1. What went wrong the first time, in one sentence

Enrichment agents were **file-scoped but not source-scoped**: each of the 101 agents could
read the whole 250k-token book to write one reading. That is 101 × 250k ≈ 25M input tokens
per pass. Chunking the source *before* the LLM stage, so an agent only ever sees its own
chapter, cuts the same pass to ~1.2M input tokens.

Anthropic's own multi-agent write-up puts numbers on the general effect: agents use ~4× the
tokens of chat, multi-agent systems ~15×, and token usage alone explains ~80% of performance
variance. The lever ranking for this workload is:

**chunking ≫ batch API ≫ model tiering ≫ prompt caching.**

Caching matters, but for the *system prompt*, not the source text. See §4.

## 2. Stage 1 — PDF → Markdown

Schweser-style books are born-digital with a real text layer, moderate algebraic math, and
many small ruled tables. That profile does **not** need a heavyweight OCR/VLM stack.

**Default recommendation: Mathpix Convert API at $0.005/page.** Purpose-built for STEM,
emits LaTeX/Markdown/MMD, and MMD is trivially close to the Markdown format already in this
repo. A 3,000-page course costs **~$15** with zero ops. This is the pragmatic answer and the
one to use unless there is a reason not to.

Cheaper, more setup — only worth it at several courses:

1. **Triage (free):** `pymupdf4llm` over every page; classify plain-prose / has-table /
   has-math / is-figure by regex. Costs nothing, takes ~2 minutes for 3,000 pages.
2. **Bulk (free, local):** `marker` on a GPU. Handles most Schweser math, which is algebraic
   rather than journal-grade. `MinerU 2.5` beats it on pure formula fidelity (CDM 88.46,
   OmniDocBench 90.67) if a 4090-class GPU is available.
3. **Repair (paid, ~10% of pages):** send only the pages where the bulk output fails
   validation (unbalanced `$`/`\`, no `|` in a page tagged has-table, suspiciously short
   output) to Mathpix. ~$0.50 per 1,000 pages.

Do **not** use a vision model as the primary converter. It is non-deterministic, silently
drops content, and gives no page-level completeness guarantee — roughly $61/1,000 pages on
Opus 4.8 for a worse result. It is a repair tool, not a pipeline.

Avoid Nougat entirely (known repetition-loop degeneration; superseded).

## 3. Stage 2 — chunking. This is the step that saves the money

**Deterministic code, zero tokens.** Split each book's Markdown into per-reading segments by
heading regex, driven by the course's own reading list, and write them to
`chunks/r{NN}.md`. Every downstream agent gets *only* its chunk.

Enforce it mechanically: an enrichment agent must not have Read/Grep access to the full
`Book N.md`. If the agent *can* read the book, eventually it will.

Validate the split before spending anything on enrichment: every reading has a non-empty
chunk, chunk sizes are plausible, and no chunk is the whole book.

## 4. Stage 3 — enrichment

Not an agent workload. Per-reading enrichment needs no tools, no iteration, and no
exploration — the three things agents cost you for. Use **batch requests**, one per reading.

Request shape:

```
tools:    []                                   <- empty, or frozen. NEVER per-reading:
                                                  changing tool defs invalidates every cache.
system:   [ {text: TEACHING_DOCTRINE + SCHEMA + ONE_GOLD_EXEMPLAR,
             cache_control: {type: "ephemeral", ttl: "1h"}} ]   <- byte-identical for all N
messages: [ {role: "user", content: [
             {type: "text", text: chunk_rNN},   <- varies. NOT cached. See below.
             {type: "text", text: "Emit the module for reading NN."} ]} ]
```

Three rules that are easy to get wrong:

- **Do not cache the source chunk.** It differs per reading, so caching it writes N distinct
  entries at 1.25–2× input price and never reads any of them. Net loss. This is the single
  most common caching mistake. Cache the chunk *only* if one reading gets multiple passes
  (draft → quiz → repair); two reads are what justify the write.
- **Minimum cacheable prefix is 1,024 tokens** on Opus 4.8 / Sonnet 5 (4,096 on Haiku 4.5).
  Below it, caching silently does nothing — no error, just `cache_creation_input_tokens: 0`.
  Verify with `usage.cache_read_input_tokens`; if it is 0 across runs you have a silent
  invalidator, usually a timestamp or unsorted JSON in the system prompt.
- **Use the 1-hour TTL with the Batch API.** Batches routinely exceed the 5-minute window,
  and cache hits inside a batch are best-effort (observed 30–98%).

Batch gives **50% off input and output**, stacks with caching, and 101 independent
latency-insensitive requests is exactly its use case.

**Model tiering — where to spend and where not:**

| Stage | Model | Why |
|---|---|---|
| Chunking, heading split, `pdf.query` verbatim check | none (code) | regex and string match |
| Markdown cleanup, de-hyphenation | Haiku 4.5 | mechanical |
| **`intuition`, `eli5`, `misconceptions`, `pitfall`, star calibration** | **Opus 4.8, effort high** | this is the product. Do not downgrade. |
| Formulas → LaTeX + `plain` | Opus 4.8 / Sonnet 5 | a wrong formula is worse than none |
| Quiz generation | Sonnet 5 | constrained, schema-driven, validator-checkable |
| Schema repair loop | Haiku 4.5, or just the validator | `validate-reading.mjs` already does this |

Use **structured outputs** (JSON schema) for the reading object: cheaper than prose-then-parse
and it enforces the schema at generation time. Schema compile cost is paid once, then cached
24h.

**Expected cost, one course, one full pass:** ~$15 conversion + ~$11 batched enrichment +
~$2 mechanical passes ≈ **$30**. Scaling to CFA L1/L2/L3 + FRM I ≈ **$120–150 total**.
Compare the current re-read-the-book pattern, which is low hundreds *per course, per pass*.

## 5. The repo structure — when we do move

Deferred by decision, but the target is a **monorepo with a shared engine**:

```
academics-software/
  packages/engine/        all React components, widgets, store, renderers, validator
                          — course-agnostic, knows nothing about FRM
  courses/frm-p2/         meta-data.js + data/ + public/pdfs/ + source/ + chunks/
  courses/cfa-l1/         same shape
  CLAUDE.md               the pipeline + doctrine (this file, promoted)
```

The reason for monorepo over copied siblings: a copied app is exactly how `site/` and
`react-site/` diverged, and every UI fix then has to be applied N times. Today's session
fixed seven UI defects; under a copy-per-course layout that is seven fixes × N courses.

What has to become course-agnostic before this is real (all currently FRM-specific):

- `lib/meta-data.js` — books/readings/threads/graph must load from the course, not be baked in
- book colors and the mind-map palette
- the "FRM · Part II" nav title, favicon, meta description
- `lib/drills.js` — the 14 calculation generators are FRM-specific; needs a per-course registry
- `scripts/validate-reading.mjs` — already course-agnostic, keep it that way

**Do not start this by moving files.** Start by making `react-site` load its structure from a
single course manifest, in place. When that works, the physical move is trivial.

## 6. The "drop a folder and run Claude" workflow

Target: drop `courses/cfa-l1/source/*.pdf` and say *"add the CFA L1 section"*. For that to
work without re-deriving everything each time, the repo-root `CLAUDE.md` must carry a
**course-onboarding runbook** the agent follows:

1. Read the course manifest (`courses/<id>/course.json`): title, books, reading list with
   exam-priority stars, dependency edges. **This is the one artifact a human must supply** —
   it cannot be reliably inferred from the PDFs, and everything else derives from it.
2. Convert `source/*.pdf` → `source/*.md` (§2).
3. Chunk to `chunks/r{NN}.md` and validate the split (§3). **Gate: fail loudly here.**
4. Batch-enrich each chunk into `data/bookN/rNN.js` (§4).
5. Run `validate-reading.mjs` over every file; batch-repair failures with Haiku.
6. Import-sweep every file (`node --input-type=module -e "await import(...)"`) — agents
   killed mid-edit leave unescaped quotes the validator never gets to see.
7. Build, render-check a sample of chapters over HTTP, report.

Step 1 is the human's job. Steps 2–7 should be scripted, not improvised per session.

## 7. Verified sources

- Anthropic [pricing](https://platform.claude.com/docs/en/about-claude/pricing) ·
  [prompt caching](https://platform.claude.com/docs/en/build-with-claude/prompt-caching) ·
  [batch processing](https://platform.claude.com/docs/en/build-with-claude/batch-processing) ·
  [multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)
- [Mathpix API pricing](https://mathpix.com/pricing/api) ·
  [marker](https://github.com/datalab-to/marker) ·
  [MinerU 2.5](https://arxiv.org/html/2509.22186v1) ·
  [Docling](https://arxiv.org/html/2501.17887v1)

**Unverified, confirm before committing:** Datalab's hosted per-page base rate (their pricing
page would not render; only the $0.30/1K add-on is published) and Reducto's ~$0.015/credit
(third-party summaries only).

**Tokenizer caveat:** Opus 4.7+, Sonnet 5 and Fable 5 use a newer tokenizer producing ~30%
more tokens for the same text. Any budget baselined on an older model is understated —
re-measure with `count_tokens` before committing to a number.
