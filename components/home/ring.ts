/**
 * The rotating 3D ring of project panels behind the home page.
 *
 * Plain three.js, loaded lazily from the Stage component so it never blocks the
 * first paint. Each project becomes one curved panel on a cylinder. If a project
 * has an `image` it is used as the texture; otherwise a poster is drawn from the
 * project's own text (title, category, tech) so nothing on it is invented.
 */

import type { Project } from "@/content/site";

export type RingParams = {
  /** 0 hides the ring; 1 shows it fully. */
  opacity: number;
  /** Camera distance from the front panel. Smaller = closer. */
  distance: number;
  /** Tilt of the ring in radians. */
  tilt: number;
  /** Moves the whole ring up (world units) so text can sit beneath it. */
  lift: number;
  /** When true the ring stops spinning and shows `activeRef.current`. */
  focus: boolean;
};

export type RingHandle = {
  params: RingParams;
  /** Index of the project to bring to the front while `params.focus` is on. */
  active: number;
  dispose: () => void;
};

const PALETTES: [string, string][] = [
  ["#1237e8", "#6a8bff"],
  ["#0e8f6f", "#6be0b8"],
  ["#5b2fd6", "#a98bff"],
  ["#c2410c", "#ffb380"],
  ["#0f5ea8", "#7cc4ff"],
  ["#a21caf", "#f0a0ff"],
  ["#334155", "#94a3b8"],
];

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function drawPoster(project: Project, index: number, total: number): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext("2d")!;
  const [c1, c2] = PALETTES[index % PALETTES.length];

  const grad = ctx.createLinearGradient(0, 0, 1024, 640);
  grad.addColorStop(0, c1);
  grad.addColorStop(1, c2);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 640);

  // Browser-style top bar.
  ctx.fillStyle = "rgba(0,0,0,0.28)";
  ctx.fillRect(0, 0, 1024, 64);
  ["#ff6b6b", "#ffd166", "#6be08a"].forEach((c, i) => {
    ctx.fillStyle = c;
    ctx.beginPath();
    ctx.arc(40 + i * 30, 32, 9, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.fillStyle = "rgba(255,255,255,0.8)";
  ctx.font = "500 24px system-ui, sans-serif";
  const host = project.liveUrl ? new URL(project.liveUrl).host : "source on GitHub";
  ctx.fillText(host, 150, 41);

  const num = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.font = "600 26px system-ui, sans-serif";
  ctx.fillText(`${num}  ·  ${project.category.toUpperCase()}`, 56, 128);

  ctx.fillStyle = "#ffffff";
  ctx.font = "92px Anton, Impact, 'Arial Narrow', sans-serif";
  const lines = wrapText(ctx, project.title.toUpperCase(), 900).slice(0, 3);
  lines.forEach((l, i) => ctx.fillText(l, 56, 235 + i * 100));

  // Tech chips.
  let x = 56;
  ctx.font = "600 26px system-ui, sans-serif";
  for (const tech of project.tech.slice(0, 5)) {
    const w = ctx.measureText(tech).width + 36;
    if (x + w > 980) break;
    ctx.fillStyle = "rgba(0,0,0,0.3)";
    ctx.beginPath();
    ctx.roundRect(x, 540, w, 54, 27);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.fillText(tech, x + 18, 576);
    x += w + 12;
  }
  return canvas;
}

export async function createRing(
  canvas: HTMLCanvasElement,
  projects: Project[],
  reducedMotion: boolean,
): Promise<RingHandle> {
  const THREE = await import("three");

  if (document.fonts?.load) {
    try {
      await document.fonts.load("92px Anton");
    } catch {
      /* Fall back to Impact. */
    }
  }

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  const group = new THREE.Group();
  scene.add(group);

  const count = projects.length;
  const step = (Math.PI * 2) / count;
  const R = 4.6;
  const arc = step * 0.78;
  const height = 2.05;

  const loader = new THREE.TextureLoader();
  const materials: import("three").MeshBasicMaterial[] = [];
  const textures: import("three").Texture[] = [];

  projects.forEach((project, i) => {
    const texture = new THREE.CanvasTexture(drawPoster(project, i, count));
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
    textures.push(texture);

    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      toneMapped: false,
    });
    materials.push(material);

    if (project.image) {
      loader.load(project.image, (loaded) => {
        loaded.colorSpace = THREE.SRGBColorSpace;
        loaded.anisotropy = 4;
        material.map = loaded;
        material.needsUpdate = true;
        textures.push(loaded);
      });
    }

    const geometry = new THREE.CylinderGeometry(R, R, height, 28, 1, true, -arc / 2, arc);
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.y = i * step;
    group.add(mesh);
  });

  const handle: RingHandle = {
    params: { opacity: 0.6, distance: 8.5, tilt: 0.16, lift: 0, focus: false },
    active: 0,
    dispose: () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("scroll", onScroll);
      group.children.forEach((c) => (c as import("three").Mesh).geometry.dispose());
      materials.forEach((m) => m.dispose());
      textures.forEach((t) => t.dispose());
      renderer.dispose();
    },
  };

  const cur = { opacity: 0, distance: 8.5, tilt: 0.16, lift: 0 };
  let rot = 0;
  let aspect = 1;
  let pointerX = 0;
  let pointerY = 0;
  let scrollY = window.scrollY;
  let scrollVel = 0;
  let last = performance.now();
  let raf = 0;

  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    aspect = w / h;
    renderer.setSize(w, h, false);
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
  }
  function onPointer(e: PointerEvent) {
    pointerX = (e.clientX / window.innerWidth) * 2 - 1;
    pointerY = (e.clientY / window.innerHeight) * 2 - 1;
  }
  function onScroll() {
    const y = window.scrollY;
    scrollVel += (y - scrollY) * 0.0016;
    scrollY = y;
  }
  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", onPointer, { passive: true });
  window.addEventListener("scroll", onScroll, { passive: true });

  const TAU = Math.PI * 2;

  function frame(now: number) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    const p = handle.params;

    // Time-based easing so slower devices still arrive at the same pace.
    const ease = reducedMotion ? 1 : 1 - Math.exp(-dt * 5);
    cur.opacity += (p.opacity - cur.opacity) * ease;
    cur.distance += (p.distance - cur.distance) * ease;
    cur.tilt += (p.tilt - cur.tilt) * ease;
    cur.lift += (p.lift - cur.lift) * ease;

    if (p.focus) {
      const target = -handle.active * step;
      // Take the shortest way round.
      let diff = (target - rot) % TAU;
      if (diff > Math.PI) diff -= TAU;
      if (diff < -Math.PI) diff += TAU;
      rot += diff * (reducedMotion ? 1 : 1 - Math.exp(-dt * 5));
    } else if (!reducedMotion) {
      rot += dt * 0.1 + scrollVel;
    }
    scrollVel *= 0.9;

    // Narrow screens need the camera further back to fit the panel.
    const fit = aspect < 1 ? 1 + (1 - aspect) * 1.6 : 1;
    camera.position.set(pointerX * 0.25, 0.35 - pointerY * 0.15, R + cur.distance * fit);
    camera.lookAt(0, 0, R * 0.5);
    group.rotation.set(cur.tilt, rot, 0);
    group.position.set(0, cur.lift, 0);

    for (let i = 0; i < count; i++) {
      const angle = i * step + rot;
      const facing = (Math.cos(angle) + 1) / 2; // 1 front, 0 back
      materials[i].opacity = cur.opacity * (0.16 + 0.84 * Math.pow(facing, 1.6));
    }

    if (cur.opacity > 0.01) renderer.render(scene, camera);
    else renderer.clear();
  }
  raf = requestAnimationFrame(frame);

  return handle;
}
