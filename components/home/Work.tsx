"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/site";
import SectionLabel from "./SectionLabel";
import { useStage } from "./Stage";
import { useScrollProgress } from "./useScrollProgress";

const n = projects.length;
/** Viewport heights of scrolling given to each project. */
const PER_PROJECT = 55;

/**
 * Pinned section. Scrolling steps through the projects while the 3D ring turns
 * to bring each one to the front. The list on the right jumps to a project.
 */
export default function Work() {
  const section = useRef<HTMLElement>(null);
  const { active, setActive } = useStage();

  useScrollProgress(section, (p) => {
    const next = Math.min(n - 1, Math.floor(p * n));
    setActive(next);
  });

  function jump(index: number) {
    const el = section.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const travel = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + ((index + 0.5) / n) * travel, behavior: "smooth" });
  }

  const project = projects[active];

  return (
    <section
      ref={section}
      id="work"
      data-stage
      data-focus
      data-bg="#060a1c"
      data-ui="light"
      data-ring="1"
      data-cam="5.4"
      data-tilt="0.05"
      data-lift="0.3"
      className="relative text-white"
      style={{ height: `${100 + n * PER_PROJECT}svh` }}
    >
      <div className="sticky top-0 flex h-svh flex-col justify-between overflow-hidden px-5 pb-20 pt-20 sm:px-8 sm:pb-6">
        <div>
          <SectionLabel n="03">Selected work</SectionLabel>
          <h2 className="hd mt-3 text-[clamp(3.5rem,11vw,9rem)]">My work</h2>
        </div>

        <ol
          className="absolute right-5 top-24 hidden w-52 space-y-0.5 text-xs lg:block sm:right-8"
          aria-label="Projects"
        >
          {projects.map((p, i) => (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => jump(i)}
                aria-current={i === active}
                className={`flex w-full gap-3 border-l-2 py-1.5 pl-3 text-left transition ${
                  i === active
                    ? "border-amber-400 font-bold text-white"
                    : "border-white/15 text-white/55 hover:text-white"
                }`}
              >
                <span className="tabular-nums opacity-70">0{i + 1}</span>
                <span>{p.title}</span>
              </button>
            </li>
          ))}
          <li className="pt-3 pl-3">
            <Link href="/projects" className="inline-flex items-center gap-1 font-bold text-amber-300">
              See all work <ArrowUpRight size={13} aria-hidden />
            </Link>
          </li>
        </ol>

        <div className="max-w-md" aria-live="polite">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] opacity-70">
            0{active + 1} / 0{n} · {project.category} · {project.liveUrl ? "Live" : "Source only"}
          </p>
          <h3 className="hd mt-2 text-4xl sm:text-5xl">{project.title}</h3>
          <p className="mt-2 text-xs leading-snug text-white/80 sm:text-sm">{project.problem}</p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 5).map((t) => (
              <li key={t} className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-semibold">
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-bold">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[#0a0f2c]"
              >
                Visit live <ArrowUpRight size={14} aria-hidden />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/40 px-4 py-2"
              >
                Source <ArrowUpRight size={14} aria-hidden />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
