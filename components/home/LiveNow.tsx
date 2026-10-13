import { ArrowUpRight } from "lucide-react";
import ProjectVideo from "@/components/ProjectVideo";
import { projects } from "@/content/site";
import SectionLabel from "./SectionLabel";

export default function LiveNow() {
  const live = projects.filter((p) => p.featured && p.liveUrl).slice(0, 2);

  return (
    <section
      id="live"
      data-stage
      data-bg="#3a57f5"
      data-ui="light"
      data-ring="0.4"
      data-cam="9"
      data-tilt="0.4"
      className="relative flex min-h-svh flex-col px-5 pb-16 pt-24 text-white sm:px-8"
    >
      <SectionLabel n="02">Live now</SectionLabel>

      <div className="mt-8 grid flex-1 items-center gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="hd text-[clamp(5rem,20vw,17rem)]">
            Live
            <br />
            now
          </h2>
          <p className="mt-5 max-w-xs text-sm font-medium">
            Two of the products I&apos;ve built that are live today. Open one and try it.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 lg:ml-auto lg:max-w-xl">
          {live.map((project, i) => {
            const dark = i === 1;
            return (
              <li
                key={project.id}
                className={`flex flex-col rounded-2xl p-5 shadow-[0_24px_60px_-20px_rgba(0,0,10,0.55)] transition duration-300 hover:-translate-y-1.5 ${
                  dark ? "bg-[#0a0f2c] text-white sm:mt-10" : "bg-white text-[#0a0f2c]"
                }`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] opacity-60">
                  Project 0{i + 1} · {project.category}
                </p>
                <h3 className="hd mt-3 text-4xl">{project.title}</h3>
                <p className="mt-3 text-sm leading-snug opacity-80">{project.problem}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t) => (
                    <li
                      key={t}
                      className={`rounded px-2 py-0.5 text-[10px] font-semibold ${
                        dark ? "bg-white/10" : "bg-[#0a0f2c]/8"
                      }`}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-6 text-sm font-bold">
                  <a
                    href={project.liveUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 ${
                      dark ? "bg-white text-[#0a0f2c]" : "bg-[#0a0f2c] text-white"
                    }`}
                  >
                    Try it live
                    <ArrowUpRight size={15} aria-hidden />
                  </a>
                  {project.video && (
                    <ProjectVideo
                      video={project.video}
                      title={project.title}
                      className={`font-bold hover:underline ${dark ? "text-white" : "text-[#0a0f2c]"}`}
                    />
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
