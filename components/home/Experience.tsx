import { education, experience } from "@/content/site";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section
      id="experience"
      data-stage
      data-bg="#f4f5fb"
      data-ui="dark"
      data-ring="0"
      className="relative flex min-h-svh flex-col px-5 pb-20 pt-24 text-[#0a0f2c] sm:px-8"
    >
      <SectionLabel n="05">Experience &amp; training</SectionLabel>
      <div className="mt-8 grid flex-1 gap-10 lg:grid-cols-[minmax(0,1fr)_28rem] lg:items-center">
        <div>
          <h2 className="hd text-[clamp(3.5rem,11.5vw,10rem)]">Background</h2>
          <p className="mt-4 max-w-xs text-sm font-medium">
            Engineering school, a software programme, an AI course, and two jobs before
            that. Each one shaped how I build.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-[#0a0f2c] text-white shadow-[0_30px_80px_-30px_rgba(10,15,44,0.6)]">
          <div className="border-b border-white/10 px-5 py-4">
            <p className="hd text-2xl">My story</p>
            <p className="text-[11px] text-white/60">Where I&apos;ve worked and studied</p>
          </div>
          <ol className="divide-y divide-white/10">
            {experience.map((item, i) => (
              <li key={item.title} className="px-5 py-4">
                <p className="flex justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  <span>{item.period}</span>
                  <span>0{i + 1}</span>
                </p>
                <p className="mt-1 text-sm font-bold">{item.title}</p>
                <p className="text-xs text-amber-300">{item.org}</p>
                <p className="mt-1.5 text-xs leading-snug text-white/70">{item.body}</p>
              </li>
            ))}
            {education.map((item) => (
              <li key={item.title} className="px-5 py-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  {item.period} · Education
                </p>
                <p className="mt-1 text-sm font-bold">{item.title}</p>
                <p className="text-xs text-amber-300">{item.org}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
