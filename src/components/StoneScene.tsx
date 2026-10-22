import { useId } from "react";

type Tone = "chalk" | "sand" | "taupe" | "slate";

type Pebble = { x: number; y: number; rx: number; ry: number; tilt?: number; tone: Tone; seed: number };
type Leaf = { x: number; y: number; length: number; angle: number; scale?: number };

export type SceneLayout = {
  width: number;
  height: number;
  horizon: number;
  wall: [string, string, string];
  floor: [string, string];
  light: { x: number; y: number };
  pebbles: Pebble[];
  mounds?: { x: number; width: number; height: number }[];
  leaves?: Leaf[];
};

const tones: Record<Tone, [string, string, string, string]> = {
  chalk: ["#fbf8f2", "#ebe4d8", "#cbbfac", "#9d907c"],
  sand: ["#f3ebdd", "#dccfb9", "#b8a78d", "#857560"],
  taupe: ["#d9cfc0", "#b3a590", "#8b7c68", "#5f5345"],
  slate: ["#b9b3aa", "#8f8880", "#6a645d", "#45403b"],
};

function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pebblePath({ x, y, rx, ry, tilt = 0, seed }: Pebble): string {
  const rand = rng(seed);
  const a2 = 0.03 + rand() * 0.05;
  const a3 = 0.015 + rand() * 0.03;
  const p2 = rand() * Math.PI * 2;
  const p3 = rand() * Math.PI * 2;
  const n = 28;
  const cos = Math.cos(tilt);
  const sin = Math.sin(tilt);
  const pts: [number, number][] = [];
  for (let i = 0; i < n; i++) {
    const th = (i / n) * Math.PI * 2;
    const r = 1 + a2 * Math.sin(2 * th + p2) + a3 * Math.sin(3 * th + p3);
    let px = Math.cos(th) * rx * r;
    let py = Math.sin(th) * ry * r;
    if (py > 0) py *= 0.82 + 0.18 * (1 - Math.abs(Math.sin(th)) ** 3);
    const tx = px * cos - py * sin;
    py = px * sin + py * cos;
    px = tx;
    pts.push([x + px, y + py]);
  }
  let d = `M${pts[0][0].toFixed(1)},${pts[0][1].toFixed(1)}`;
  for (let i = 0; i < n; i++) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2_ = pts[(i + 1) % n];
    const p3_ = pts[(i + 2) % n];
    const c1 = [p1[0] + (p2_[0] - p0[0]) / 6, p1[1] + (p2_[1] - p0[1]) / 6];
    const c2 = [p2_[0] - (p3_[0] - p1[0]) / 6, p2_[1] - (p3_[1] - p1[1]) / 6];
    d += `C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2_[0].toFixed(1)},${p2_[1].toFixed(1)}`;
  }
  return d + "Z";
}

function leafPath(leaf: Leaf): string[] {
  const { x, y, length, angle, scale = 1 } = leaf;
  const paths: string[] = [];
  const steps = 16;
  const bend = 0.0009 * length;
  for (let i = 2; i < steps; i++) {
    const t = i / steps;
    const sx = x + Math.cos(angle) * length * t;
    const sy = y + Math.sin(angle) * length * t + bend * (length * t) ** 2 * 0.002;
    const size = Math.sin(Math.PI * t) * 150 * scale;
    for (const side of [-1, 1]) {
      const a = angle + side * (0.95 - t * 0.35);
      const ex = sx + Math.cos(a) * size;
      const ey = sy + Math.sin(a) * size + size * 0.18;
      const w = 7 * scale * (1 - t * 0.4);
      const nx = -Math.sin(a) * w;
      const ny = Math.cos(a) * w;
      const mx = (sx + ex) / 2;
      const my = (sy + ey) / 2;
      paths.push(
        `M${sx.toFixed(1)},${sy.toFixed(1)}Q${(mx + nx).toFixed(1)},${(my + ny).toFixed(1)} ${ex.toFixed(1)},${ey.toFixed(1)}Q${(mx - nx).toFixed(1)},${(my - ny).toFixed(1)} ${sx.toFixed(1)},${sy.toFixed(1)}Z`,
      );
    }
  }
  return paths;
}

export function StoneScene({ layout, className, align = "xMidYMid" }: { layout: SceneLayout; className?: string; align?: string }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const id = (name: string) => `${uid}-${name}`;
  const { width: W, height: H, horizon, light } = layout;
  const sorted = [...layout.pebbles].sort((a, b) => a.y + a.ry - (b.y + b.ry));

  return (
    <svg
      className={className}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio={`${align} slice`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={id("wall")} x1="0" y1="0" x2="1" y2="0.35">
          <stop offset="0" stopColor={layout.wall[0]} />
          <stop offset="0.55" stopColor={layout.wall[1]} />
          <stop offset="1" stopColor={layout.wall[2]} />
        </linearGradient>
        <linearGradient id={id("floor")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={layout.floor[0]} />
          <stop offset="1" stopColor={layout.floor[1]} />
        </linearGradient>
        <radialGradient id={id("glow")} cx={light.x / W} cy={light.y / H} r="0.75">
          <stop offset="0" stopColor="#fffaf0" stopOpacity="0.55" />
          <stop offset="1" stopColor="#fffaf0" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={id("blend")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={layout.floor[0]} stopOpacity="0" />
          <stop offset="0.5" stopColor={layout.floor[0]} stopOpacity="0.7" />
          <stop offset="1" stopColor={layout.floor[0]} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id("horizon")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#5a4d3c" stopOpacity="0" />
          <stop offset="0.5" stopColor="#5a4d3c" stopOpacity="0.16" />
          <stop offset="1" stopColor="#5a4d3c" stopOpacity="0" />
        </linearGradient>
        {(Object.keys(tones) as Tone[]).map((tone) => {
          const [hi, base, shade, edge] = tones[tone];
          return (
            <radialGradient key={tone} id={id(`stone-${tone}`)} cx="0.36" cy="0.26" r="0.86" fx="0.33" fy="0.2">
              <stop offset="0" stopColor={hi} />
              <stop offset="0.38" stopColor={base} />
              <stop offset="0.78" stopColor={shade} />
              <stop offset="1" stopColor={edge} />
            </radialGradient>
          );
        })}
        <linearGradient id={id("bounce")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.6" stopColor="#fff6e6" stopOpacity="0" />
          <stop offset="1" stopColor="#fff6e6" stopOpacity="0.32" />
        </linearGradient>
        <filter id={id("soft")} filterUnits="userSpaceOnUse" x={-W} y={-H} width={W * 3} height={H * 3}>
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id={id("softer")} filterUnits="userSpaceOnUse" x={-W} y={-H} width={W * 3} height={H * 3}>
          <feGaussianBlur stdDeviation="34" />
        </filter>
        <filter id={id("contact")} filterUnits="userSpaceOnUse" x={-W} y={-H} width={W * 3} height={H * 3}>
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <filter id={id("leaf")} filterUnits="userSpaceOnUse" x={-W} y={-H} width={W * 3} height={H * 3}>
          <feGaussianBlur stdDeviation="11" />
        </filter>
        <filter id={id("speckle")} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="2" seed="7" result="n" />
          <feColorMatrix
            in="n"
            values="0 0 0 0 0.32  0 0 0 0 0.27  0 0 0 0 0.21  14 0 0 0 -9.4"
            result="dots"
          />
          <feComposite in="dots" in2="SourceAlpha" operator="in" />
        </filter>
        <filter id={id("pores")} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="1" seed="3" result="n" />
          <feColorMatrix in="n" values="0 0 0 0 1  0 0 0 0 0.98  0 0 0 0 0.94  9 0 0 0 -5.9" result="dots" />
          <feComposite in="dots" in2="SourceAlpha" operator="in" />
        </filter>
        <filter id={id("grain")} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="11" result="n" />
          <feColorMatrix in="n" type="saturate" values="0" result="g" />
          <feComponentTransfer in="g">
            <feFuncA type="linear" slope="0" intercept="0.11" />
          </feComponentTransfer>
        </filter>
        <filter id={id("sand")} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="2" seed="5" result="n" />
          <feColorMatrix in="n" values="0 0 0 0 0.45  0 0 0 0 0.38  0 0 0 0 0.3  6 0 0 0 -3.4" />
        </filter>
        <clipPath id={id("frame")}>
          <rect width={W} height={H} />
        </clipPath>
        {sorted.map((p, i) => (
          <clipPath key={i} id={id(`clip-${i}`)}>
            <path d={pebblePath(p)} />
          </clipPath>
        ))}
      </defs>

      <g clipPath={`url(#${id("frame")})`}>
        <rect width={W} height={horizon} fill={`url(#${id("wall")})`} />
        <rect width={W} height={H} fill={`url(#${id("glow")})`} />
        {layout.leaves && (
          <g filter={`url(#${id("leaf")})`} fill="#4f4334" opacity="0.17">
            {layout.leaves.flatMap((leaf, i) => leafPath(leaf).map((d, j) => <path key={`${i}-${j}`} d={d} />))}
          </g>
        )}
        <rect y={horizon} width={W} height={H - horizon} fill={`url(#${id("floor")})`} />
        <rect y={horizon - 40} width={W} height={80} fill={`url(#${id("horizon")})`} filter={`url(#${id("soft")})`} />
        <rect y={horizon} width={W} height={H - horizon} filter={`url(#${id("sand")})`} opacity="0.55" />
        <rect y={horizon - 70} width={W} height={140} fill={`url(#${id("blend")})`} />
        {layout.mounds?.map((m, i) => (
          <g key={i}>
            <ellipse
              cx={m.x + m.width * 0.1}
              cy={horizon + m.height * 0.25}
              rx={m.width * 0.55}
              ry={m.height * 0.35}
              fill="#6e604c"
              opacity="0.22"
              filter={`url(#${id("softer")})`}
            />
            <path
              d={`M${m.x - m.width / 2},${H} C${m.x - m.width / 4},${H - m.height * 0.5} ${m.x - m.width / 7},${H - m.height} ${m.x},${H - m.height} C${m.x + m.width / 6},${H - m.height} ${m.x + m.width / 4},${H - m.height * 0.45} ${m.x + m.width / 2},${H} Z`}
              fill={layout.floor[0]}
              filter={`url(#${id("contact")})`}
            />
            <path
              d={`M${m.x},${H - m.height} C${m.x + m.width / 6},${H - m.height} ${m.x + m.width / 4},${H - m.height * 0.45} ${m.x + m.width / 2},${H} L${m.x + m.width * 0.1},${H} Z`}
              fill="#8a7a63"
              opacity="0.28"
              filter={`url(#${id("soft")})`}
            />
          </g>
        ))}

        {sorted.map((p, i) => {
          const d = pebblePath(p);
          const ground = p.y + p.ry * 0.86;
          const away = Math.sign(p.x - light.x) || 1;
          return (
            <g key={i}>
              <ellipse
                cx={p.x + away * p.rx * 0.55}
                cy={ground}
                rx={p.rx * 1.25}
                ry={p.ry * 0.22}
                fill="#3d3326"
                opacity="0.32"
                filter={`url(#${id("softer")})`}
              />
              <ellipse
                cx={p.x + away * p.rx * 0.08}
                cy={ground}
                rx={p.rx * 0.82}
                ry={Math.max(4, p.ry * 0.07)}
                fill="#2a221a"
                opacity="0.6"
                filter={`url(#${id("contact")})`}
              />
              <path d={d} fill={`url(#${id(`stone-${p.tone}`)})`} />
              <g clipPath={`url(#${id(`clip-${i}`)})`}>
                <path d={d} fill={`url(#${id("bounce")})`} />
                <ellipse
                  cx={p.x - p.rx * 0.32}
                  cy={p.y - p.ry * 0.45}
                  rx={p.rx * 0.42}
                  ry={p.ry * 0.3}
                  fill="#ffffff"
                  opacity="0.38"
                  filter={`url(#${id("softer")})`}
                />
                <ellipse
                  cx={p.x + p.rx * 0.75}
                  cy={p.y + p.ry * 0.2}
                  rx={p.rx * 0.5}
                  ry={p.ry * 0.9}
                  fill="#3a2f22"
                  opacity="0.18"
                  filter={`url(#${id("softer")})`}
                />
                <path d={d} filter={`url(#${id("speckle")})`} opacity="0.55" />
                <path d={d} filter={`url(#${id("pores")})`} opacity="0.35" />
              </g>
            </g>
          );
        })}
        <rect width={W} height={H} filter={`url(#${id("grain")})`} style={{ mixBlendMode: "multiply" }} />
      </g>
    </svg>
  );
}
