import type { ProjectArt as Art } from "../data/content";
import { cardScenes } from "../data/scenes";
import { StoneScene } from "./StoneScene";

function Workflow() {
  return (
    <div className="motif sheet flow">
      <span className="node node-start" />
      <span className="edge" />
      <span className="node">
        <i />
      </span>
      <span className="edge" />
      <span className="branch">
        <span className="node small">
          <i />
        </span>
        <span className="node small">
          <i />
        </span>
        <span className="node small">
          <i />
        </span>
      </span>
      <span className="edge" />
      <span className="node accent">
        <i />
      </span>
      <span className="edge" />
      <span className="node node-start" />
      <span className="flow-badge">10–15 s</span>
    </div>
  );
}

function Capture() {
  return (
    <div className="motif phone">
      <div className="phone-screen">
        <div className="notice">
          <span className="notice-icon" />
          <span className="notice-lines">
            <i />
            <i className="short" />
          </span>
          <b>R$ 42,90</b>
        </div>
        <div className="ledger">
          {["R$ 42,90", "R$ 18,00", "R$ 129,90", "R$ 7,50"].map((v, i) => (
            <div key={v} className={i === 0 ? "row fresh" : "row"}>
              <span className="dot" />
              <i />
              <b>{v}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Video() {
  return (
    <div className="motif reel">
      <div className="reel-frame">
        <span className="reel-banner" />
        <span className="reel-sub">
          <i />
          <i className="short" />
        </span>
        <span className="reel-progress">
          <i />
        </span>
      </div>
    </div>
  );
}

function Prices() {
  const rows = [
    ["R$ 1.249", 0.62],
    ["R$ 1.299", 0.7],
    ["R$ 1.349", 0.78],
    ["R$ 1.399", 0.86],
    ["R$ 1.459", 0.94],
  ] as const;
  return (
    <div className="motif sheet browser">
      <div className="browser-bar">
        <span />
        <span />
        <span />
        <i />
      </div>
      <div className="browser-body">
        {rows.map(([price, w], i) => (
          <div key={price} className={i === 0 ? "price best" : "price"}>
            <span className="store" />
            <span className="bar" style={{ width: `${w * 100}%` }} />
            <b>{price}</b>
          </div>
        ))}
      </div>
    </div>
  );
}

function Terminal() {
  const lines = [
    ["workday start", "brief"],
    ["workday log", "entry"],
    ["workday slack", "draft"],
    ["workday end", "report"],
  ];
  return (
    <div className="motif term">
      <div className="term-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="term-body">
        {lines.map(([cmd, out]) => (
          <p key={cmd}>
            <span className="prompt">$</span> {cmd}
            <span className="out">→ {out}</span>
          </p>
        ))}
        <p>
          <span className="prompt">$</span> <span className="caret" />
        </p>
      </div>
    </div>
  );
}

function Orbit() {
  return (
    <div className="motif orbit">
      <svg viewBox="0 0 320 220" focusable="false">
        <ellipse cx="160" cy="110" rx="140" ry="70" />
        <ellipse cx="160" cy="110" rx="92" ry="46" />
        <ellipse cx="160" cy="110" rx="44" ry="22" />
        <path className="route" d="M44 72 C 110 40, 150 150, 214 74 S 290 120, 292 120" />
        <circle className="planet" cx="160" cy="110" r="10" />
        <circle className="stop" cx="44" cy="72" r="6" />
        <circle className="stop" cx="214" cy="74" r="6" />
        <circle className="stop" cx="292" cy="120" r="6" />
      </svg>
      <code>GET /travel_plans?expand=true</code>
    </div>
  );
}

const motifs: Record<Art, () => React.JSX.Element> = {
  workflow: Workflow,
  capture: Capture,
  video: Video,
  prices: Prices,
  terminal: Terminal,
  orbit: Orbit,
};

export function ProjectArt({ art }: { art: Art }) {
  const Motif = motifs[art];
  return (
    <div className={`art art-${art}`} aria-hidden="true">
      <StoneScene layout={cardScenes[art]} />
      <Motif />
    </div>
  );
}
