import { useMemo, useState } from "react";
import Html from "../Html.jsx";
import Button from "../ui/button.jsx";

/* Some list items are authored with their canonical numbered name up front
   ("Tier 1: ...", "Pillar 2: ...", "Step 3: ...") because that name is real
   exam content. Shown as-is, the digit hands the ordering answer to the
   student for free. Strip it from the pool/unchecked view; reveal the full
   original text (numbered name included) once the round is checked, so the
   naming is still taught, just not usable as a shortcut mid-drill. */
const LEADING_ORDINAL = /^(tier|step|phase|level|line|pillar|stage)\s*\d+\s*[:.,)]?\s*/i;
function hideOrdinal(html) {
  const stripped = html.replace(LEADING_ORDINAL, "");
  return stripped || html;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* Order-reconstruction drill for one `lists[]` entry: { id, title, axis, items }.
   `items` is authored in the correct order; the student rebuilds that order from
   a shuffled pool. Checking compares the picked index sequence against identity. */
function OneList({ list, color }) {
  const order = useMemo(() => shuffle(list.items.map((_, i) => i)), [list.id]);
  const [pool, setPool] = useState(order);
  const [answer, setAnswer] = useState([]);
  const [checked, setChecked] = useState(false);
  const [showAxis, setShowAxis] = useState(false);

  const allPlaced = answer.length === list.items.length;
  const result = checked ? answer.map((idx, pos) => idx === pos) : null;
  const allCorrect = result && result.every(Boolean);

  function pick(idx) {
    if (checked) return;
    setPool((p) => p.filter((i) => i !== idx));
    setAnswer((a) => [...a, idx]);
  }
  function unpick(pos) {
    if (checked) return;
    const idx = answer[pos];
    setAnswer((a) => a.filter((_, i) => i !== pos));
    setPool((p) => [...p, idx]);
  }
  function reset() {
    setPool(shuffle(list.items.map((_, i) => i)));
    setAnswer([]);
    setChecked(false);
    setShowAxis(false);
  }

  return (
    <div className="card" style={{ marginBottom: "0.8rem" }}>
      <h3 style={{ margin: 0 }}><Html as="span" html={list.title} /></h3>
      <p style={{ fontSize: "0.82rem", color: "var(--text-dim)", margin: "0.3rem 0 0.7rem" }}>
        Click items below in the correct order.
      </p>

      <div
        style={{
          display: "flex", flexDirection: "column", gap: "0.35rem",
          minHeight: `${list.items.length * 2.2}rem`, marginBottom: "0.7rem",
        }}
      >
        {list.items.map((_, pos) => {
          const idx = answer[pos];
          const ok = checked && idx !== undefined ? idx === pos : null;
          return (
            <div
              key={pos}
              role={idx !== undefined && !checked ? "button" : undefined}
              tabIndex={idx !== undefined && !checked ? 0 : undefined}
              onClick={() => idx !== undefined && unpick(pos)}
              onKeyDown={(e) => { if ((e.key === "Enter" || e.key === " ") && idx !== undefined) { e.preventDefault(); unpick(pos); } }}
              style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                padding: "0.45rem 0.6rem", borderRadius: "var(--radius, 8px)",
                border: "1px solid " + (ok === true ? "var(--green)" : ok === false ? "var(--red)" : "var(--border)"),
                background: idx !== undefined ? "var(--bg-raised)" : "var(--bg-inset)",
                fontSize: "0.88rem",
                cursor: idx !== undefined && !checked ? "pointer" : "default",
              }}
            >
              <span style={{ fontFamily: "var(--font-mono, monospace)", color: "var(--text-faint)", fontSize: "0.78rem" }}>
                {pos + 1}
              </span>
              {idx !== undefined ? (
                <Html as="span" html={checked ? list.items[idx] : hideOrdinal(list.items[idx])} />
              ) : (
                <span style={{ color: "var(--text-faint)" }}>empty</span>
              )}
            </div>
          );
        })}
      </div>

      {pool.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "0.7rem" }}>
          {pool.map((idx) => (
            <button
              key={idx}
              className="chip"
              style={{ cursor: "pointer", border: "1px solid " + color, color }}
              onClick={() => pick(idx)}
            >
              <Html as="span" html={hideOrdinal(list.items[idx])} />
            </button>
          ))}
        </div>
      )}

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
        <Button size="sm" variant="default" disabled={!allPlaced} onClick={() => setChecked(true)}>
          Check order
        </Button>
        <Button size="sm" variant="outline" onClick={reset}>Shuffle again</Button>
        <Button size="sm" variant="ghost" onClick={() => setShowAxis((s) => !s)}>
          {showAxis ? "Hide the rule" : "Why this order?"}
        </Button>
      </div>

      {checked && (
        <p style={{ fontSize: "0.86rem", marginTop: "0.6rem", color: allCorrect ? "var(--green)" : "var(--red)" }}>
          {allCorrect ? "Correct order." : "Not quite. Green rows are right, red rows are wrong. Click a filled row to swap it back and retry."}
        </p>
      )}
      {showAxis && list.axis && (
        <p style={{ fontSize: "0.86rem", color: "var(--text-dim)", marginTop: "0.4rem", paddingTop: "0.4rem", borderTop: "1px solid var(--border)" }}>
          <strong>The rule: </strong><Html as="span" html={list.axis} />
        </p>
      )}
    </div>
  );
}

export default function ListBuilder({ lists, color }) {
  if (!lists || !lists.length) return null;
  return (
    <div>
      {lists.map((list) => <OneList key={list.id} list={list} color={color} />)}
    </div>
  );
}
