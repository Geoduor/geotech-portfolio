"use client";

/**
 * Fades content in the first time it scrolls into view.
 *
 * Uses IntersectionObserver rather than an animation library so it stays
 * server-renderable from a Server Component and adds no runtime dependency.
 * The animation itself lives in globals.css and is disabled under
 * `prefers-reduced-motion`.
 *
 * `as` exists so this can wrap list items without inserting a `<div>` between
 * an `<ol>`/`<ul>` and its `<li>` children, which would be invalid markup.
 */

import { useEffect, useState, type ReactNode } from "react";

export default function Reveal({
  children,
  className = "",
  delayMs = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "li" | "section";
}) {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!element) return;

    if (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [element]);

  return (
    <Tag
      ref={setElement}
      className={`${shown ? "reveal" : "opacity-0"} ${className}`}
      style={shown && delayMs ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
