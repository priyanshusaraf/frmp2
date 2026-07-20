import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { esc } from "../../lib/html.js";
import { useStore, setTocOpen } from "../../lib/store.js";

const EMPTY = [];

/* Sticky in-page table of contents, ported from the original buildTOC/teardownTOC.
   Rendered via a portal onto document.body (the original nav is position:fixed and
   appended directly to <body>, outside the page mount). Collapsed by default into a
   small chevron tab hugging the right edge (mid-height, iOS-style), so it never sits on
   top of the bottom-right notes button; expands into a floating panel on click. */
export default function ChapterTOC({ sections, rn }) {
  const navRef = useRef(null);
  const activeRef = useRef(null);
  const open = useStore((s) => (s.layout && s.layout.tocOpen) || false);
  const bms = useStore((s) => (s.bookmarks && s.bookmarks[rn]) || EMPTY);
  const bmIds = new Set(bms.map((b) => b.id));

  useEffect(() => {
    if (!open || !sections || !sections.length) return;
    const nav = navRef.current;
    if (!nav) return;

    const links = {};
    nav.querySelectorAll("a").forEach((a) => {
      links[a.getAttribute("data-target")] = a;
    });

    /* highlight the first section immediately so there's no flash of nothing-active */
    if (links[sections[0].id]) {
      links[sections[0].id].classList.add("active");
      activeRef.current = sections[0].id;
    }

    let observer = null;
    if (window.IntersectionObserver) {
      const visible = {};
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => { visible[entry.target.id] = entry.isIntersecting; });
          let activeId = null;
          for (let i = 0; i < sections.length; i++) {
            if (visible[sections[i].id]) { activeId = sections[i].id; break; }
          }
          if (!activeId) return;
          nav.querySelectorAll("a.active").forEach((a) => a.classList.remove("active"));
          if (links[activeId]) links[activeId].classList.add("active");
          activeRef.current = activeId;
        },
        { rootMargin: "-10% 0px -75% 0px", threshold: 0 }
      );
      sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el) observer.observe(el);
      });
    }

    return () => { if (observer) observer.disconnect(); };
  }, [sections, open]);

  if (!sections || !sections.length) return null;

  function onClick(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (!open) {
    return createPortal(
      <button className="edge-tab right" onClick={() => setTocOpen(true)}
              aria-label="On this page" title="On this page">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>,
      document.body
    );
  }

  return createPortal(
    <div className="rail-panel right">
      <div className="rail-panel-head">
        On this page
        <button className="rail-panel-close" onClick={() => setTocOpen(false)} aria-label="Collapse">✕</button>
      </div>
      <nav className="chapter-toc" ref={navRef}>
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <a href={"#" + s.id} data-target={s.id} onClick={(e) => onClick(e, s.id)}>
                {bmIds.has(s.id) && <span className="toc-bm">★</span>}
                <span dangerouslySetInnerHTML={{ __html: esc(s.txt) }} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>,
    document.body
  );
}
