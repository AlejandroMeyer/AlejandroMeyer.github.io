// Object detection helpers (MediaPipe Object Detector, EfficientDet-Lite, 80 COCO classes)
import { ObjectDetector } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14";
import { createTask } from "./common.js";

export const MODELS = {
  lite0: { label: "EfficientDet-Lite0 (fast)", url: "https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite0/float16/1/efficientdet_lite0.tflite" },
  lite2: { label: "EfficientDet-Lite2 (more accurate)", url: "https://storage.googleapis.com/mediapipe-models/object_detector/efficientdet_lite2/float16/1/efficientdet_lite2.tflite" },
};

export function createDetector({ model, mode, scoreThreshold, maxResults }) {
  return createTask(ObjectDetector, {
    baseOptions: { modelAssetPath: MODELS[model].url },
    runningMode: mode, scoreThreshold, maxResults,
  });
}

// The same class always gets the same color
const cache = {};
export function colorFor(name) {
  if (!cache[name]) {
    let h = 0; for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    cache[name] = `hsl(${h % 360}, 85%, 58%)`;
  }
  return cache[name];
}

// Turn MediaPipe detections into plain objects
export function simplify(detections) {
  return detections.map((d) => {
    const c = d.categories[0] || {}, b = d.boundingBox;
    return { label: c.categoryName || "object", score: c.score || 0, box: { x: b.originX, y: b.originY, w: b.width, h: b.height } };
  });
}

// Draw boxes + labels. offsetX shifts everything (side-by-side view); mirror flips x for a selfie camera.
export function drawBoxes(ctx, objects, { width, mirror = false, offsetX = 0, highlight = -1 } = {}) {
  const lw = Math.max(2, width / 400), fs = Math.max(13, Math.round(width / 60));
  ctx.font = `600 ${fs}px "Segoe UI", system-ui, sans-serif`;
  ctx.textBaseline = "top";
  objects.forEach((o, i) => {
    const col = colorFor(o.label);
    const x = offsetX + (mirror ? width - o.box.x - o.box.w : o.box.x), y = o.box.y;
    const dim = highlight >= 0 && highlight !== i;
    ctx.globalAlpha = dim ? 0.25 : 1;
    if (highlight === i) { ctx.fillStyle = col; ctx.globalAlpha = 0.18; ctx.fillRect(x, y, o.box.w, o.box.h); ctx.globalAlpha = 1; }
    ctx.strokeStyle = col; ctx.lineWidth = highlight === i ? lw * 2 : lw;
    ctx.strokeRect(x, y, o.box.w, o.box.h);
    const text = `${o.label} ${Math.round(o.score * 100)}%`;
    const tw = ctx.measureText(text).width + 10, th = fs + 6;
    const ty = y - th < 0 ? y : y - th;
    ctx.fillStyle = col; ctx.fillRect(x - lw / 2, ty, tw, th);
    ctx.fillStyle = "#06101a"; ctx.fillText(text, x + 5 - lw / 2, ty + 3);
  });
  ctx.globalAlpha = 1;
}
