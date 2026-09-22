import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "AI systems, full-stack platforms and backend services built by Geofry Oduor — agritech, fraud detection, sports data and education technology.",
  alternates: { canonical: "/projects" },
};

/**
 * Server Component. Project data comes from content/site.ts, so adding a
 * project is an edit to that file alone.
 */
export default function ProjectsPage() {
  const featured = projects.filter((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-ink">
          Portfolio
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Work that ships and keeps running.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
          A selection of systems I have designed and built across AI automation,
          enterprise tooling, sports data and education. Each one started as a real
          problem, not a tutorial.
        </p>
      </Reveal>

      <section aria-labelledby="featured-heading" className="mt-16">
        <h2
          id="featured-heading"
          className="font-display text-2xl font-bold tracking-tight"
        >
          Featured
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <Reveal key={project.id} delayMs={index * 60} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      {rest.length > 0 && (
        <section aria-labelledby="more-heading" className="mt-16">
          <h2 id="more-heading" className="font-display text-2xl font-bold tracking-tight">
            More projects
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((project, index) => (
              <Reveal key={project.id} delayMs={index * 60} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="mt-20 rounded-2xl border border-border-custom bg-bg-1 p-8 text-center sm:p-12">
        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          Need something like this built?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-text-secondary">
          Tell me about the problem and I will tell you honestly whether I am the right
          person for it.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Get in touch
          <ArrowRight size={16} aria-hidden />
        </Link>
      </section>
    </div>
  );
}
