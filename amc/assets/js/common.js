// Shared helpers for unit1_4, unit1_5, unit2_1 and unit2_2.
// Everything runs in the browser: no server, nothing is uploaded.
import { FilesetResolver } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14";

export const $ = (id) => document.getElementById(id);

let visionPromise;
export function vision() {
  visionPromise ??= FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm");
  return visionPromise;
}

// Create a MediaPipe task on the GPU, falling back to the CPU
export async function createTask(TaskClass, options) {
  const v = await vision();
  const withDelegate = (delegate) => ({ ...options, baseOptions: { ...options.baseOptions, delegate } });
  try { return await TaskClass.createFromOptions(v, withDelegate("GPU")); }
  catch (e) { return TaskClass.createFromOptions(v, withDelegate("CPU")); }
}

export function msg(text, err) { const el = $("msg"); el.textContent = text; el.className = "msg" + (err ? " err" : ""); el.style.display = ""; }
export function hideMsg() { $("msg").style.display = "none"; }

// Load a File / Blob / URL into an <img>
export function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("This file could not be read as an image."));
    img.src = typeof src === "string" ? src : URL.createObjectURL(src);
  });
}

// File picker, drag-and-drop on the stage and Ctrl+V paste, all calling onFile(file)
export function wireFileInputs({ input, stage, accept, onFile }) {
  const ok = (f) => f && accept.some((t) => f.type.startsWith(t));
  input.onchange = (e) => { const f = e.target.files[0]; if (ok(f)) onFile(f); e.target.value = ""; };
  stage.addEventListener("dragover", (e) => { e.preventDefault(); stage.classList.add("drag"); });
  stage.addEventListener("dragleave", () => stage.classList.remove("drag"));
  stage.addEventListener("drop", (e) => {
    e.preventDefault(); stage.classList.remove("drag");
    const f = [...e.dataTransfer.files].find(ok);
    if (f) onFile(f); else msg("Please drop a " + accept.map((t) => t.replace("/", "")).join(" or ") + " file.", true);
  });
  addEventListener("paste", (e) => {
    const f = [...(e.clipboardData?.files || [])].find(ok);
    if (f) onFile(f);
  });
}

// Webcam
export async function openCamera(video) {
  const stream = await navigator.mediaDevices.getUserMedia({ video: { width: { ideal: 1280 }, height: { ideal: 720 } }, audio: false });
  video.srcObject = stream;
  await video.play();
  return stream;
}
export function closeCamera(stream) { if (stream) stream.getTracks().forEach((t) => t.stop()); }

// Downloads
export function downloadCanvas(canvas, name) {
  canvas.toBlob((b) => saveBlob(b, name), "image/png");
}
export function downloadJSON(data, name) {
  saveBlob(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }), name);
}
function saveBlob(blob, name) {
  const a = Object.assign(document.createElement("a"), { href: URL.createObjectURL(blob), download: name });
  a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}

// Segmented button group: returns a getter, calls onChange(value)
export function segmented(el, onChange) {
  let value = el.querySelector("button.on")?.dataset.v;
  el.addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    el.querySelectorAll("button").forEach((x) => x.classList.toggle("on", x === b));
    value = b.dataset.v; onChange(value);
  });
  return () => value;
}

// Range slider with a live value label: <input id=X> + <b id=X-v>
export function slider(id, format, onChange) {
  const el = $(id), out = $(id + "-v");
  const show = () => { out.textContent = format(+el.value); };
  el.addEventListener("input", () => { show(); onChange(+el.value); });
  show();
  return () => +el.value;
}

// Smoothed frames-per-second counter
export function fpsMeter() {
  let last = performance.now(), fps = 0;
  return () => { const now = performance.now(), dt = now - last; last = now; fps = fps ? fps * 0.9 + (1000 / dt) * 0.1 : 1000 / dt; return fps; };
}
