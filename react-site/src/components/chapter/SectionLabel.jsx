import { slugify } from "../../lib/html.js";
import { useStore, isBookmarked, toggleBookmark } from "../../lib/store.js";

/* Ported from the original label(txt, color) helper — same markup + id (used by the TOC).
   Optional rn prop adds a section bookmark toggle (star) after the text. */
export default function SectionLabel({ txt, color, rn }) {
  const id = slugify(txt);
  /* hook must run unconditionally; returns a boolean primitive, so it's a stable identity */
  const on = useStore((s) => isBookmarked(s, rn, id));

  return (
    <div className="section-label" id={id}>
      <span className="dot" style={{ background: color || "var(--accent)" }} />
      {txt}
      {rn ? (
        <button
          type="button"
          className={"bookmark-toggle" + (on ? " on" : "")}
          onClick={() => toggleBookmark(rn, { id, txt })}
          aria-label={on ? "Remove bookmark" : "Bookmark this section"}
          title={on ? "Bookmarked" : "Bookmark this section"}
        >
          {on ? "★" : "☆"}
        </button>
      ) : null}
    </div>
  );
}
