import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { certificates, projects } from "@/content/site";
import SectionLabel from "./SectionLabel";

export default function More() {
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="more"
      data-stage
      data-bg="#cdd6ff"
      data-ui="dark"
      data-ring="0"
      className="relative flex min-h-svh flex-col px-5 pb-20 pt-24 text-[#0a0f2c] sm:px-8"
    >
      <SectionLabel n="07">Certificates &amp; more projects</SectionLabel>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
        <h2 className="hd text-[clamp(5rem,20vw,16rem)]">More</h2>
        <p className="max-w-[16rem] pb-3 text-sm font-medium">
          Programmes I&apos;ve completed, and the rest of the things I&apos;ve built.
        </p>
      </div>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((cert) => (
          <li key={cert.id}>
            <Link
              href="/certificates"
              className="flex h-full min-h-36 flex-col rounded-lg bg-[#0a0f2c] p-4 text-white transition hover:-translate-y-1"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">
                Certificate · {cert.issuer}
              </span>
              <span className="hd mt-2 text-2xl leading-none">{cert.title}</span>
              <span className="mt-auto pt-4 text-[11px] text-white/60">{cert.date}</span>
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/certificates"
            className="flex h-full min-h-36 flex-col justify-between rounded-lg bg-amber-400 p-4 transition hover:-translate-y-1"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
              Certificates
            </span>
            <span className="hd text-3xl leading-none">See them all</span>
            <ArrowUpRight size={18} aria-hidden className="self-end" />
          </Link>
        </li>

        {rest.map((p) => (
          <li key={p.id}>
            <a
              href={p.liveUrl ?? p.githubUrl ?? "/projects"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-full min-h-28 flex-col rounded-lg bg-[#0a0f2c] p-4 text-white transition hover:-translate-y-1"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">
                More work · {p.category}
              </span>
              <span className="hd mt-2 text-2xl leading-none">{p.title}</span>
              <span className="mt-auto flex items-center justify-between pt-3 text-[11px] text-white/60">
                {p.liveUrl ? "Live site" : "Source on GitHub"}
                <ArrowUpRight size={14} aria-hidden />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
