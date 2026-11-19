// 468-point 3D face mesh helpers (MediaPipe Face Landmarker)
import { FaceLandmarker } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14";
import { createTask } from "./common.js";

const MODEL = "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";

export function createLandmarker({ mode, numFaces }) {
  return createTask(FaceLandmarker, {
    baseOptions: { modelAssetPath: MODEL },
    runningMode: mode, numFaces,
    outputFaceBlendshapes: true,
    minFaceDetectionConfidence: 0.5, minFacePresenceConfidence: 0.5, minTrackingConfidence: 0.5,
  });
}

export const STYLES = {
  full: "Full mesh + contours",
  contours: "Contours only",
  wireframe: "Triangular wireframe",
  dots: "468 landmark dots",
  features: "Key features (eyes, irises, lips)",
};

// mesh = thin triangle lines, line = contours, dot = landmark points, iris = iris rings
export const SCHEMES = {
  cyan: { label: "Neon cyan", mesh: "rgba(0, 200, 230, .45)", line: "#00f0ff", dot: "#c8fbff", iris: "#ff4fd8" },
  green: { label: "Matrix green", mesh: "rgba(0, 190, 70, .45)", line: "#00ff66", dot: "#d4ffd9", iris: "#ffffff" },
  magenta: { label: "Cyberpunk magenta", mesh: "rgba(200, 0, 160, .45)", line: "#ff2bd6", dot: "#ffd3f6", iris: "#00f0ff" },
  gold: { label: "Warm gold", mesh: "rgba(210, 150, 20, .45)", line: "#ffc83d", dot: "#fff1c4", iris: "#ff6a3d" },
  white: { label: "Pure white", mesh: "rgba(255, 255, 255, .35)", line: "#ffffff", dot: "#ffffff", iris: "#9fd0ff" },
  depth: { label: "3D depth map", depth: true, iris: "#ffffff" },
};

const C = FaceLandmarker;
const CONTOURS = C.FACE_LANDMARKS_CONTOURS;
const FEATURES = [...C.FACE_LANDMARKS_LEFT_EYE, ...C.FACE_LANDMARKS_RIGHT_EYE, ...C.FACE_LANDMARKS_LIPS, ...C.FACE_LANDMARKS_LEFT_EYEBROW, ...C.FACE_LANDMARKS_RIGHT_EYEBROW];
const IRISES = [...C.FACE_LANDMARKS_LEFT_IRIS, ...C.FACE_LANDMARKS_RIGHT_IRIS];

// Near = warm red, far = blue
function depthColor(z, zmin, zmax, alpha = 1) {
  const t = zmax > zmin ? (z - zmin) / (zmax - zmin) : 0.5;
  return `hsla(${Math.round(t * 230)}, 95%, 58%, ${alpha})`;
}

/**
 * Draw every face onto ctx.
 * opts: { width, height, style, scheme, thickness, pointRadius, mirror, offsetX }
 */
export function drawFaces(ctx, faces, opts) {
  const { width: w, height: h, style, thickness, pointRadius, mirror = false, offsetX = 0 } = opts;
  const sc = SCHEMES[opts.scheme] || SCHEMES.cyan;
  const scale = Math.max(1, Math.min(w, h) / 720);
  const lw = thickness * scale;
  ctx.lineCap = "round";

  for (const lm of faces) {
    const P = lm.map((p) => [offsetX + (mirror ? 1 - p.x : p.x) * w, p.y * h, p.z]);
    let zmin = Infinity, zmax = -Infinity;
    if (sc.depth) for (const p of P) { if (p[2] < zmin) zmin = p[2]; if (p[2] > zmax) zmax = p[2]; }

    const lines = (conns, color, width, alpha) => {
      ctx.lineWidth = width;
      if (!sc.depth) {
        ctx.strokeStyle = color; ctx.beginPath();
        for (const { start, end } of conns) { ctx.moveTo(P[start][0], P[start][1]); ctx.lineTo(P[end][0], P[end][1]); }
        ctx.stroke(); return;
      }
      for (const { start, end } of conns) {
        ctx.strokeStyle = depthColor((P[start][2] + P[end][2]) / 2, zmin, zmax, alpha);
        ctx.beginPath(); ctx.moveTo(P[start][0], P[start][1]); ctx.lineTo(P[end][0], P[end][1]); ctx.stroke();
      }
    };
    const dots = (idx, r) => {
      for (const i of idx) {
        ctx.fillStyle = sc.depth ? depthColor(P[i][2], zmin, zmax) : sc.dot;
        ctx.beginPath(); ctx.arc(P[i][0], P[i][1], r, 0, 7); ctx.fill();
      }
    };
    const irises = () => lines(IRISES, sc.iris, lw * 1.2, 1);

    if (style === "full") { lines(C.FACE_LANDMARKS_TESSELATION, sc.mesh, Math.max(0.6, lw * 0.5), 0.5); lines(CONTOURS, sc.line, lw * 1.3, 1); irises(); }
    else if (style === "contours") { lines(CONTOURS, sc.line, lw * 1.5, 1); irises(); }
    else if (style === "wireframe") { lines(C.FACE_LANDMARKS_TESSELATION, sc.depth ? null : sc.line, Math.max(0.6, lw * 0.6), 0.9); }
    else if (style === "dots") { dots(P.keys(), pointRadius * scale); }
    else if (style === "features") { lines(FEATURES, sc.line, lw * 1.5, 1); irises(); dots([468, 473].filter((i) => P[i]), pointRadius * scale * 1.5); }
  }
}

// Four readable expression scores (0..1) from the 52 ARKit-style blendshapes
export function expressions(blendshapes) {
  const s = {}; for (const c of blendshapes?.categories || []) s[c.categoryName] = c.score;
  const g = (k) => s[k] || 0;
  return {
    Smile: (g("mouthSmileLeft") + g("mouthSmileRight")) / 2,
    "Eye blink (left)": g("eyeBlinkLeft"),
    "Eye blink (right)": g("eyeBlinkRight"),
    "Jaw open": g("jawOpen"),
    "Brow raise": Math.max(g("browInnerUp"), (g("browOuterUpLeft") + g("browOuterUpRight")) / 2),
  };
}

// Render expression bars for each face into a container
export function renderExpressions(el, result) {
  const faces = result?.faceBlendshapes || [];
  if (!faces.length) { el.innerHTML = '<div class="empty">No face detected.</div>'; return; }
  el.innerHTML = faces.map((b, i) => {
    const ex = expressions(b);
    return (faces.length > 1 ? `<div class="face-tag">Face ${i + 1}</div>` : "") +
      Object.entries(ex).map(([k, v]) => `<div class="bar"><div><span>${k}</span><span>${Math.round(v * 100)}%</span></div><div class="track"><div class="fill" style="width:${(v * 100).toFixed(1)}%"></div></div></div>`).join("");
  }).join("");
}
