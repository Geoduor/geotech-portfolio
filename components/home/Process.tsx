import Link from "next/link";
import { CONTACT_EMAIL, processSteps, site } from "@/content/site";
import SectionLabel from "./SectionLabel";

export default function Process() {
  return (
    <section
      id="process"
      data-stage
      data-bg="#070b1d"
      data-ui="light"
      data-ring="0"
      className="relative flex min-h-svh flex-col px-5 pb-20 pt-24 text-white sm:px-8"
    >
      <SectionLabel n="06">How I work</SectionLabel>
      <h2 className="hd mt-6 text-[clamp(4.5rem,17vw,14rem)]">Process</h2>

      <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-5">
        {processSteps.map((step) => (
          <article key={step.step} className="flex min-h-44 flex-col bg-[#070b1d] lg:min-h-56 p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
              {step.step}
            </p>
            <h3 className="hd mt-3 text-3xl">{step.title}</h3>
            <p className="mt-3 text-xs leading-snug text-white/70">{step.body}</p>
          </article>
        ))}
        <article className="flex min-h-44 flex-col bg-amber-400 lg:min-h-56 p-5 text-[#0a0f2c] md:col-span-2 lg:col-span-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em]">Right now</p>
          <h3 className="hd mt-3 text-3xl">Open to work</h3>
          <p className="mt-3 text-xs font-medium leading-snug">{site.availability}.</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-auto rounded-full bg-[#0a0f2c] px-4 py-2.5 text-center text-xs font-bold text-white"
          >
            Email me
          </a>
          <Link href="/services" className="mt-2 text-center text-[11px] font-semibold underline">
            What I can build
          </Link>
        </article>
      </div>
    </section>
  );
}
