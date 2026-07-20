import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useStore, allBookmarks } from "../lib/store.js";
import { META, rpath, readingMeta, bookOf } from "../lib/meta.js";

export default function Bookmarks() {
  /* selectors must return stable identities for useSyncExternalStore —
     select the raw slice and derive the (freshly-allocated) list via useMemo */
  const bmMap = useStore((s) => s.bookmarks);
  const items = useMemo(() => allBookmarks({ bookmarks: bmMap }), [bmMap]);
  const [bookFilter, setBookFilter] = useState("all");

  useEffect(() => { document.title = "Bookmarks — FRM Part II"; }, []);

  const filtered = useMemo(() => {
    if (bookFilter === "all") return items;
    const bn = Number(bookFilter);
    return items.filter((b) => {
      const book = bookOf(b.rn);
      return book && book.n === bn;
    });
  }, [items, bookFilter]);

  const groups = useMemo(() => {
    const map = new Map();
    for (const b of filtered) {
      if (!map.has(b.rn)) map.set(b.rn, []);
      map.get(b.rn).push(b);
    }
    const entries = [...map.entries()];
    for (const [, list] of entries) list.sort((a, b) => b.ts - a.ts);
    /* order reading groups by their most recent bookmark, newest first */
    entries.sort((a, b) => {
      const at = a[1][0] ? a[1][0].ts : 0;
      const bt = b[1][0] ? b[1][0].ts : 0;
      return bt - at;
    });
    return entries;
  }, [filtered]);

  return (
    <main className="page">
      <div className="crumbs">
        <Link to="/">Home</Link> / Bookmarks
      </div>
      <h1>Bookmarks</h1>
      <p style={{ fontSize: "0.9rem", color: "var(--text-dim)" }}>
        Section-level markers you've dropped while reading. Click the ☆ next to any section
        heading in a chapter to save it here for quick return.
      </p>

      {items.length > 0 ? (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", alignItems: "center", margin: "1rem 0" }}>
          <button className={"chip" + (bookFilter === "all" ? " active" : "")} onClick={() => setBookFilter("all")}>
            All books
          </button>
          {META.books.map((b) => (
            <button
              key={b.n}
              className={"chip" + (bookFilter === String(b.n) ? " active" : "")}
              onClick={() => setBookFilter(String(b.n))}
              style={bookFilter === String(b.n) ? { borderColor: b.color, color: b.color } : undefined}
            >
              Book {b.n}
            </button>
          ))}
        </div>
      ) : null}

      {groups.length === 0 ? (
        <div className="card" style={{ fontSize: "0.9rem", color: "var(--text-dim)" }}>
          {items.length === 0
            ? "No bookmarks yet. Open any reading and click the ☆ next to a section heading to save it here for quick return."
            : "No bookmarks in this book yet."}
        </div>
      ) : (
        groups.map(([rn, list]) => {
          const meta = readingMeta(rn);
          const book = bookOf(rn);
          return (
            <section key={rn} style={{ marginBottom: "1.75rem" }}>
              <div className="section-label" style={{ color: book ? book.color : "var(--text-faint)" }}>
                <Link to={rpath(rn)} style={{ color: "inherit" }}>
                  R{rn}{meta ? " · " + meta.t : ""} →
                </Link>
              </div>
              {list.map((b) => (
                <div key={b.id} className="card" style={{ marginBottom: "0.6rem" }}>
                  <Link to={rpath(rn)} state={{ scrollTo: b.id }}>
                    {b.txt}
                  </Link>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-faint)", marginTop: "0.3rem" }}>
                    {new Date(b.ts).toLocaleString()}
                  </div>
                </div>
              ))}
            </section>
          );
        })
      )}
    </main>
  );
}
