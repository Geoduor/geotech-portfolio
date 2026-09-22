import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, Bot, Download, LayoutDashboard, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import {
  processSteps,
  projects,
  services,
  site,
  skillGroups,
  stats,
  testimonials,
} from "@/content/site";

const serviceIcons: Record<string, LucideIcon> = {
  bot: Bot,
  layout: LayoutDashboard,
  server: Server,
  activity: Activity,
};

export default function Home() {
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative overflow-hidden border-b border-border-custom">
        <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-70" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div>
            {site.availability && (
              <p className="inline-flex items-center gap-2 rounded-full border border-border-custom bg-bg-1 px-3 py-1.5 text-xs font-medium text-text-secondary">
                <span className="relative flex h-2 w-2" aria-hidden>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                {site.availability}
              </p>
            )}

            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-brand-ink">
              {site.name} — {site.role}
            </p>

            <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              I build AI systems and web platforms that solve real problems.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
              {site.intro}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Start a project
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-xl border border-border-custom bg-bg-1 px-6 py-3.5 text-sm font-semibold text-text-primary transition hover:border-brand-blue/40 hover:text-brand-ink"
              >
                See my work
              </Link>
              <a
                href={site.cv}
                className="inline-flex items-center gap-2 rounded-xl px-3 py-3.5 text-sm font-medium text-text-secondary transition hover:text-brand-ink"
              >
                <Download size={16} aria-hidden />
                Download CV
              </a>
            </div>
          </div>

          <Reveal className="mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border-custom bg-bg-2 shadow-[var(--shadow-lift)]">
              <Image
                src={site.photo}
                alt={`Portrait of ${site.name}`}
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------------------- Stats */}
      <section aria-label="At a glance" className="border-b border-border-custom bg-bg-1">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 py-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-bold text-text-primary">
                  {stat.value}
                </span>
                <span className="mt-1 block text-sm text-text-secondary">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ------------------------------------------------------------ Services */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-ink">
            What I do
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Services built around outcomes, not billable hours.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">
            Every engagement starts with a written scope and a fixed price, so you always
            know what you are getting before work begins.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon] ?? Bot;
            return (
              <Reveal key={service.id} delayMs={index * 60}>
                <article className="flex h-full flex-col rounded-2xl border border-border-custom bg-bg-1 p-7 shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-[var(--shadow-lift)]">
                  <span
                    aria-hidden
                    className="grid h-11 w-11 place-items-center rounded-xl bg-brand-blue/10 text-brand-ink"
                  >
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {service.summary}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-text-secondary">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-ink hover:underline"
          >
            See how engagements work
            <ArrowRight size={15} aria-hidden />
          </Link>
        </div>
      </section>

      {/* -------------------------------------------------------- Featured work */}
      <section className="border-y border-border-custom bg-bg-1">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-ink">
              Selected work
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Systems shipped, running, and solving the problem they were built for.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, index) => (
              <Reveal key={project.id} delayMs={index * 60} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-ink hover:underline"
            >
              View all {projects.length} projects
              <ArrowRight size={15} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- Process */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-ink">
            How we work together
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            A process with no surprises in it.
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.step}
              delayMs={index * 60}
              className="h-full rounded-2xl border border-border-custom bg-bg-1 p-6"
            >
              <span
                aria-hidden
                className="font-display text-3xl font-bold text-brand-blue/35"
              >
                {step.step}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* -------------------------------------------------------------- Stack */}
      <section className="border-y border-border-custom bg-bg-1">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Tools I build with
          </h2>
          <dl className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <dt className="text-xs font-bold uppercase tracking-wider text-text-tertiary">
                  {group.label}
                </dt>
                <dd className="mt-3 space-y-1.5 text-sm text-text-secondary">
                  {group.items.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* -------------------------------------------------------- Testimonials
          Renders only when real, attributable quotes exist in content/site.ts. */}
      {testimonials.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            What clients say
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote
                key={item.author}
                className="rounded-2xl border border-border-custom bg-bg-1 p-7"
              >
                <p className="text-lg leading-relaxed text-text-primary">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-5 text-sm text-text-secondary">
                  <span className="font-semibold text-text-primary">{item.author}</span>
                  {", "}
                  {item.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------ Final CTA */}
      <section className="border-t border-border-custom bg-bg-1">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:py-24">
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Have a problem worth solving?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-secondary">
            Tell me what you are trying to build. I will come back with an honest read on
            scope, timeline and cost — free of charge.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Start a project
              <ArrowRight size={16} aria-hidden />
            </Link>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border-custom bg-bg-0 px-6 py-3.5 text-sm font-semibold text-text-primary transition hover:border-brand-blue/40 hover:text-brand-ink"
            >
              Browse my code
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
