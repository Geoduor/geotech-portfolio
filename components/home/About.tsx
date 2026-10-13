"use client";

import { useRef } from "react";
import SectionLabel from "./SectionLabel";
import { useScrollProgress } from "./useScrollProgress";

/** Words marked with `*` are picked out in the accent colour. */
const STATEMENT =
  "I'm Geofry Oduor, a software engineer in Kenya. I build *AI* tools and full-stack web platforms for agriculture, healthcare, sports and education. I've built *7* projects, 6 of them live. When I'm not coding, I'm on the *hockey* pitch.";

const words = STATEMENT.split(" ").map((w) => ({
  text: w.replace(/\*/g, ""),
  accent: w.includes("*"),
}));

/** A big statement whose words fill in as you scroll. */
export default function About() {
  const section = useRef<HTMLElement>(null);
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  useScrollProgress(section, (p) => {
    const total = words.length;
    refs.current.forEach((el, i) => {
      if (!el) return;
      const fill = Math.min(1, Math.max(0, p * 1.25 * total - i));
      el.style.opacity = String(0.16 + 0.84 * fill);
    });
  });

  return (
    <section
      ref={section}
      id="about"
      data-stage
      data-bg="#edf0fc"
      data-ui="dark"
      data-ring="0"
      className="relative h-[240svh] text-[#0a0f2c]"
    >
      <div className="sticky top-0 flex h-svh flex-col justify-center overflow-hidden px-5 sm:px-8">
        <div className="absolute left-5 top-24 sm:left-8">
          <SectionLabel n="04">About me</SectionLabel>
        </div>
        <p className="hd mx-auto max-w-5xl text-center text-[clamp(1.9rem,5.4vw,4.6rem)] leading-[1.02]">
          {words.map((w, i) => (
            <span
              key={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className={w.accent ? "text-[#1237e8]" : ""}
              style={{ opacity: 0.16 }}
            >
              {w.text}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
