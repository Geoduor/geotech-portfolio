"use client";

import { useRef } from "react";
import { services } from "@/content/site";
import SectionLabel from "./SectionLabel";
import { useScrollProgress } from "./useScrollProgress";

const LINE = "I build AI tools and web platforms";

/** A line of giant text that slides sideways as you scroll through the section. */
export default function WhatIDo() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useScrollProgress(section, (p) => {
    const el = track.current;
    if (!el) return;
    const distance = Math.max(0, el.scrollWidth - window.innerWidth * 0.6);
    el.style.transform = `translate3d(${(-p * distance).toFixed(1)}px, 0, 0) rotate(-4deg)`;
  });

  return (
    <section
      ref={section}
      id="what"
      data-stage
      data-bg="#1a2cc4"
      data-ui="light"
      data-ring="0.55"
      data-cam="7.5"
      data-tilt="0.3"
      className="relative h-[260svh] text-white"
    >
      <div className="sticky top-0 flex h-svh flex-col justify-between overflow-hidden px-5 pb-6 pt-24 sm:px-8">
        <SectionLabel n="01">What I do</SectionLabel>

        <div
          ref={track}
          className="hd w-max whitespace-nowrap text-[clamp(7rem,38vh,22rem)] leading-none will-change-transform"
          style={{ transform: "rotate(-4deg)" }}
        >
          {LINE}
        </div>

        <div className="grid gap-5 pb-14 text-xs sm:grid-cols-2 sm:pb-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div key={service.id} className="border-t border-white/30 pt-3">
              <p className="text-[10px] opacity-70">0{i + 1}</p>
              <p className="mt-1 text-sm font-bold leading-snug">{service.title}</p>
              <p className="mt-1.5 hidden text-[11px] leading-snug opacity-80 lg:block">
                {service.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
