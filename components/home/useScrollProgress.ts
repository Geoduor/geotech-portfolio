"use client";

import { useEffect, useRef, type RefObject } from "react";

/**
 * Reports how far through a tall, sticky section the visitor has scrolled
 * (0 at the top, 1 when the section's bottom reaches the bottom of the screen).
 * Calls are batched to one per animation frame.
 */
export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  onProgress: (progress: number) => void,
) {
  const callback = useRef(onProgress);
  useEffect(() => {
    callback.current = onProgress;
  });

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const progress = travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : 0;
      callback.current(progress);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ref]);
}
