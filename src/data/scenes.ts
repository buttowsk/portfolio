import type { SceneLayout } from "../components/StoneScene";

const wallWarm: [string, string, string] = ["#e6e0d5", "#ddd5c8", "#cfc5b5"];
const floorWarm: [string, string] = ["#ede6da", "#d8ccb9"];

export const heroScene: SceneLayout = {
  width: 800,
  height: 1000,
  horizon: 690,
  wall: ["#ece8e0", "#e3dcd0", "#d6ccbc"],
  floor: floorWarm,
  light: { x: 120, y: 120 },
  leaves: [
    { x: 860, y: 40, length: 520, angle: 2.55, scale: 1.1 },
    { x: 900, y: 300, length: 420, angle: 2.9, scale: 0.9 },
  ],
  mounds: [{ x: 760, width: 520, height: 120 }],
  pebbles: [
    { x: 430, y: 820, rx: 230, ry: 92, tilt: -0.03, tone: "taupe", seed: 4 },
    { x: 452, y: 672, rx: 168, ry: 76, tilt: 0.05, tone: "sand", seed: 9 },
    { x: 438, y: 540, rx: 112, ry: 66, tilt: -0.06, tone: "chalk", seed: 21 },
    { x: 452, y: 430, rx: 64, ry: 46, tilt: 0.08, tone: "slate", seed: 33 },
    { x: 140, y: 905, rx: 70, ry: 50, tilt: 0.1, tone: "chalk", seed: 12 },
  ],
};

export const aboutScene: SceneLayout = {
  width: 1400,
  height: 560,
  horizon: 400,
  wall: ["#a99c87", "#c8bca9", "#e6dfd2"],
  floor: ["#e2d9ca", "#cdbfa9"],
  light: { x: 1100, y: 80 },
  leaves: [
    { x: 1480, y: -40, length: 560, angle: 2.6, scale: 1 },
    { x: 1500, y: 180, length: 420, angle: 3.0, scale: 0.8 },
  ],
  mounds: [{ x: 1050, width: 640, height: 150 }],
  pebbles: [
    { x: 400, y: 470, rx: 190, ry: 170, tilt: 0, tone: "chalk", seed: 2 },
    { x: 690, y: 520, rx: 80, ry: 52, tilt: 0.12, tone: "taupe", seed: 17 },
  ],
};

export const cardScenes: Record<string, SceneLayout> = {
  workflow: {
    width: 800,
    height: 600,
    horizon: 430,
    wall: wallWarm,
    floor: floorWarm,
    light: { x: 140, y: 60 },
    leaves: [{ x: 880, y: -20, length: 380, angle: 2.6, scale: 0.75 }],
    pebbles: [
      { x: 640, y: 520, rx: 120, ry: 62, tone: "taupe", seed: 41 },
      { x: 650, y: 438, rx: 70, ry: 44, tone: "chalk", seed: 42 },
    ],
  },
  capture: {
    width: 800,
    height: 600,
    horizon: 410,
    wall: ["#d9d0c1", "#e3dccf", "#ebe6dc"],
    floor: floorWarm,
    light: { x: 680, y: 60 },
    pebbles: [
      { x: 150, y: 520, rx: 110, ry: 80, tone: "sand", seed: 51 },
      { x: 690, y: 560, rx: 60, ry: 40, tone: "slate", seed: 52 },
    ],
  },
  video: {
    width: 800,
    height: 600,
    horizon: 440,
    wall: ["#cfc4b2", "#ddd4c5", "#e9e3d8"],
    floor: ["#e6dece", "#d3c5ae"],
    light: { x: 620, y: 40 },
    leaves: [{ x: -80, y: -40, length: 420, angle: 0.55, scale: 0.8 }],
    mounds: [{ x: 120, width: 380, height: 90 }],
    pebbles: [{ x: 660, y: 520, rx: 95, ry: 88, tone: "chalk", seed: 61 }],
  },
  prices: {
    width: 800,
    height: 600,
    horizon: 450,
    wall: wallWarm,
    floor: floorWarm,
    light: { x: 160, y: 40 },
    pebbles: [
      { x: 120, y: 540, rx: 85, ry: 52, tone: "slate", seed: 71 },
      { x: 700, y: 530, rx: 120, ry: 70, tone: "chalk", seed: 72 },
    ],
  },
  terminal: {
    width: 800,
    height: 600,
    horizon: 420,
    wall: ["#b9ad99", "#cdc2b0", "#e2dbcf"],
    floor: ["#ddd3c3", "#c9bba4"],
    light: { x: 700, y: 50 },
    leaves: [{ x: 900, y: 80, length: 380, angle: 2.9, scale: 0.7 }],
    pebbles: [
      { x: 110, y: 520, rx: 95, ry: 64, tone: "taupe", seed: 81 },
      { x: 118, y: 438, rx: 58, ry: 38, tone: "sand", seed: 82 },
    ],
  },
  orbit: {
    width: 800,
    height: 600,
    horizon: 450,
    wall: ["#e6e0d5", "#dbd2c4", "#c9beac"],
    floor: floorWarm,
    light: { x: 200, y: 60 },
    pebbles: [
      { x: 560, y: 540, rx: 60, ry: 44, tone: "slate", seed: 91 },
      { x: 680, y: 535, rx: 95, ry: 72, tone: "sand", seed: 92 },
    ],
  },
};
