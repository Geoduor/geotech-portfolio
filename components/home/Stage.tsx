"use client";

/**
 * Wraps the whole home page.
 *
 *  - paints one fixed background colour that eases between sections
 *  - draws the faint grid lines
 *  - hosts the WebGL ring behind the content (skipped if WebGL is unavailable)
 *  - shows the loading intro
 *  - shares the "active project" with the Work section
 *
 * Each section opts in with data attributes:
 *   data-stage            marks it
 *   data-bg="#hex"        page colour while it is in the middle of the screen
 *   data-ui="light|dark"  colour of the fixed header and buttons over it
 *   data-ring="0..1"      ring opacity      data-cam="n"  camera distance
 *   data-tilt="rad"       ring tilt         data-lift="n"  raise the ring
 *   data-focus            pin the ring to the active project
 */

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { projects } from "@/content/site";
import type { RingHandle } from "./ring";

type StageContextValue = { active: number; setActive: (index: number) => void };

const StageContext = createContext<StageContextValue>({
  active: 0,
  setActive: () => {},
});

export const useStage = () => useContext(StageContext);

const SEEN_KEY = "geodr-intro-seen";

export default function Stage({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ringRef = useRef<RingHandle | null>(null);
  const [active, setActive] = useState(0);
  const [percent, setPercent] = useState(0);
  const [phase, setPhase] = useState<"loading" | "leaving" | "done">("loading");

  // Keep the ring in step with the Work section's selection.
  useEffect(() => {
    if (ringRef.current) ringRef.current.active = active;
  }, [active]);

  // Section tracking: colours, header tone and ring settings.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const sections = Array.from(root.querySelectorAll<HTMLElement>("[data-stage]"));

    const apply = (el: HTMLElement) => {
      if (bgRef.current && el.dataset.bg) bgRef.current.style.backgroundColor = el.dataset.bg;
      root.style.setProperty("--ui", el.dataset.ui === "dark" ? "#0a0f2c" : "#ffffff");
      root.style.setProperty("--ui-inv", el.dataset.ui === "dark" ? "#ffffff" : "#0a0f2c");
      const ring = ringRef.current;
      if (ring) {
        ring.params.opacity = Number(el.dataset.ring ?? 0);
        ring.params.distance = Number(el.dataset.cam ?? 8.5);
        ring.params.tilt = Number(el.dataset.tilt ?? 0.16);
        ring.params.lift = Number(el.dataset.lift ?? 0);
        ring.params.focus = el.dataset.focus !== undefined;
      }
    };

    let current: HTMLElement | null = null;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            current = entry.target as HTMLElement;
            apply(current);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    if (sections[0]) apply(sections[0]);

    // The ring may finish loading after the first section was applied.
    const retry = window.setInterval(() => {
      if (ringRef.current && current) {
        apply(current);
        window.clearInterval(retry);
      }
    }, 300);

    return () => {
      observer.disconnect();
      window.clearInterval(retry);
    };
  }, []);

  // WebGL ring.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let cancelled = false;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    import("./ring")
      .then(({ createRing }) => createRing(canvas, projects, reduced))
      .then((handle) => {
        if (cancelled) {
          handle.dispose();
          return;
        }
        ringRef.current = handle;
      })
      .catch(() => {
        /* No WebGL: the coloured background and the text still work. */
      });

    return () => {
      cancelled = true;
      ringRef.current?.dispose();
      ringRef.current = null;
    };
  }, []);

  // Loading intro.
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(SEEN_KEY) === "1";
    } catch {}
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduced) {
      const skip = requestAnimationFrame(() => {
        setPercent(100);
        setPhase("done");
      });
      return () => cancelAnimationFrame(skip);
    }

    const started = performance.now();
    const duration = 1500;
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - started) / duration, 1);
      setPercent(Math.round(100 * (1 - Math.pow(1 - t, 3))));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setPhase("leaving");
        try {
          sessionStorage.setItem(SEEN_KEY, "1");
        } catch {}
        window.setTimeout(() => setPhase("done"), 900);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <StageContext.Provider value={{ active, setActive }}>
      <div
        ref={rootRef}
        data-ready={phase !== "loading" ? "true" : "false"}
        className="relative overflow-x-clip"
        style={{ ["--ui" as string]: "#ffffff", ["--ui-inv" as string]: "#0a0f2c" }}
      >
        <div
          ref={bgRef}
          aria-hidden
          className="fixed inset-0 z-0 transition-colors duration-700 ease-out"
          style={{ backgroundColor: "#0b3fe0" }}
        />
        <canvas
          ref={canvasRef}
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[1] h-full w-full"
        />
        <div aria-hidden className="stage-grid pointer-events-none fixed inset-0 z-[2]" />

        <div className="relative z-10">{children}</div>

        {phase !== "done" && (
          <div
            className={`intro fixed inset-0 z-[100] flex flex-col justify-between bg-[#050a24] p-6 text-white sm:p-10 ${
              phase === "leaving" ? "intro-leave" : ""
            }`}
            role="status"
            aria-label="Loading"
          >
            <p className="font-display text-lg font-extrabold tracking-tight">Geodr.</p>
            <div className="flex items-end justify-between">
              <p className="hd text-[clamp(5rem,22vw,16rem)] leading-[0.8] tabular-nums">
                {String(percent).padStart(2, "0")}
              </p>
              <p className="max-w-[12rem] pb-2 text-right text-xs uppercase tracking-[0.2em] text-white/60">
                Geofry Oduor
                <br />
                Software engineer
              </p>
            </div>
          </div>
        )}
      </div>
    </StageContext.Provider>
  );
}
