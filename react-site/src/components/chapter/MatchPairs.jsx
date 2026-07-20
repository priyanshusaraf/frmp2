import { useMemo, useState } from "react";
import Html from "../Html.jsx";
import Button from "../ui/button.jsx";

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* Click-to-pair matching drill for `pairs[]`: [{left, right}]. Both columns
   are shuffled independently so left/right positions don't co-vary with the
   answer. Selecting one item from each side checks the pair; a miss is shown
   briefly (not silently reset) so the student sees which wrong pairing they tried. */
export default function MatchPairs({ pairs, color }) {
  const leftOrder = useMemo(() => shuffle(pairs.map((_, i) => i)), [pairs]);
  const rightOrder = useMemo(() => shuffle(pairs.map((_, i) => i)), [pairs]);
  const [matched, setMatched] = useState(new Set());
  const [selLeft, setSelLeft] = useState(null);
  const [selRight, setSelRight] = useState(null);
  const [miss, setMiss] = useState(null); // { left, right } briefly shown as wrong

  if (!pairs || !pairs.length) return null;

  function chooseLeft(idx) {
    if (matched.has(idx) || miss) return;
    setSelLeft(idx);
    if (selRight !== null) evaluate(idx, selRight);
  }
  function chooseRight(idx) {
    if (matched.has(idx) || miss) return;
    setSelRight(idx);
    if (selLeft !== null) evaluate(selLeft, idx);
  }
  function evaluate(l, r) {
    if (l === r) {
      setMatched((m) => new Set(m).add(l));
      setSelLeft(null);
      setSelRight(null);
    } else {
      setMiss({ left: l, right: r });
      setTimeout(() => {
        setMiss(null);
        setSelLeft(null);
        setSelRight(null);
      }, 700);
    }
  }
  function reset() {
    setMatched(new Set());
    setSelLeft(null);
    setSelRight(null);
    setMiss(null);
  }

  const done = matched.size === pairs.length;

  function cellStyle(idx, side) {
    const isMatched = matched.has(idx);
    const isSel = side === "left" ? selLeft === idx : selRight === idx;
    const isMiss = miss && (side === "left" ? miss.left === idx : miss.right === idx);
    return {
      padding: "0.5rem 0.7rem",
      borderRadius: "var(--radius, 8px)",
      border: "1px solid " + (isMatched ? "var(--green)" : isMiss ? "var(--red)" : isSel ? color : "var(--border)"),
      background: isMatched ? "var(--green-soft, var(--bg-inset))" : "var(--bg-raised)",
      fontSize: "0.86rem",
      cursor: isMatched ? "default" : "pointer",
      opacity: isMatched ? 0.6 : 1,
      transition: "border-color 0.15s, opacity 0.15s",
    };
  }

  return (
    <div className="card">
      <p style={{ fontSize: "0.82rem", color: "var(--text-dim)", margin: "0 0 0.7rem" }}>
        Click a name, then click its matching scope. {matched.size}/{pairs.length} matched.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {leftOrder.map((idx) => (
            <div key={idx} role="button" tabIndex={0} style={cellStyle(idx, "left")}
              onClick={() => chooseLeft(idx)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); chooseLeft(idx); } }}>
              <Html as="span" html={pairs[idx].left} />
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          {rightOrder.map((idx) => (
            <div key={idx} role="button" tabIndex={0} style={cellStyle(idx, "right")}
              onClick={() => chooseRight(idx)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); chooseRight(idx); } }}>
              <Html as="span" html={pairs[idx].right} />
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "0.7rem" }}>
        {done ? (
          <p style={{ fontSize: "0.86rem", color: "var(--green)" }}>All matched.</p>
        ) : (
          <Button size="sm" variant="outline" onClick={reset}>Reset</Button>
        )}
      </div>
    </div>
  );
}
