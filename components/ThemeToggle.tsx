"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * Light/dark switch. The initial class is applied by an inline script in
 * app/layout.tsx before first paint, so this only needs to read that state and
 * write it back on click.
 */
function subscribe(onChange: () => void) {
  // The <html> class is the source of truth; watch it so every toggle stays in sync.
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

const getSnapshot = () => document.documentElement.classList.contains("dark");
/** Server render and hydration assume light; the real value is read right after. */
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    root.classList.toggle("dark", next);
    root.classList.toggle("light", !next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* storage unavailable (private mode) — theme still applies for this page */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-custom bg-bg-1 text-text-secondary transition hover:text-brand-ink hover:border-brand-blue/40"
    >
      {isDark ? <Moon size={17} aria-hidden /> : <Sun size={17} aria-hidden />}
    </button>
  );
}
