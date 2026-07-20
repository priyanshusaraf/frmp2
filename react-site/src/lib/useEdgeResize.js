import { useState } from "react";

/* Shared right-edge drag-to-resize logic for the page column and per-list blocks.

   Robustness notes (this is a hotfix path — the drag was "sticking" to the cursor
   after the button was released):
   - Listen on `window`, not the handle, so a drag that leaves the thin handle still
     tracks and, crucially, ENDS.
   - `ev.buttons === 0` guard inside pointermove: if the button is already up (e.g. a
     touchpad pointerup was missed), the very next mouse movement ends the drag. This is
     what makes "let go = stop" reliable.
   - No setPointerCapture: capture was a likely cause of the missed release; window
     listeners + the buttons guard are enough and more predictable.
   - `factor` is 2 for a centered column (grows symmetrically) and 1 for a left-anchored
     block. Returns the live width during a drag (null otherwise). */
export function useEdgeResize({ targetRef, min = 240, factor = 1, onCommit, onReset }) {
  const [width, setWidth] = useState(null);

  function onPointerDown(e) {
    if (e.button != null && e.button !== 0) return; // primary button only
    e.preventDefault();
    const handle = e.currentTarget;
    const startX = e.clientX;
    const target = (targetRef && targetRef.current) || handle.parentElement;
    if (!target) return;
    const startW = target.getBoundingClientRect().width;
    let lastW = startW;
    handle.classList.add("dragging");
    const prevUserSelect = document.body.style.userSelect;
    document.body.style.userSelect = "none";

    function onMove(ev) {
      if (ev.buttons === 0) { end(); return; } // button released — stop even if pointerup was missed
      let w = startW + factor * (ev.clientX - startX);
      w = Math.max(min, Math.min(window.innerWidth - 32, w));
      lastW = w;
      setWidth(w);
    }
    function end() {
      handle.classList.remove("dragging");
      document.body.style.userSelect = prevUserSelect;
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", end);
      window.removeEventListener("pointercancel", end);
      window.removeEventListener("blur", end);
      if (onCommit) onCommit(lastW);
      setWidth(null);
    }
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", end);
    window.addEventListener("pointercancel", end);
    window.addEventListener("blur", end);
  }

  function onDoubleClick() {
    if (onReset) onReset();
    setWidth(null);
  }

  return { width, onPointerDown, onDoubleClick };
}
