import type { Metadata } from "next";
import Link from "next/link";
import { Activity, ArrowRight, Bot, Check, LayoutDashboard, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import { processSteps, services, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI automation, multi-agent systems, full-stack web platforms and backend APIs — scoped with a fixed quote before any work starts.",
  alternates: { canonical: "/services" },
};

const serviceIcons: Record<string, LucideIcon> = {
  bot: Bot,
  layout: LayoutDashboard,
  server: Server,
  activity: Activity,
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-ink">
          Services
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Software that earns its keep.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
          I work on a small number of engagements at a time so each one gets real
          attention. Here is what I take on.
        </p>
      </Reveal>

      <div className="mt-16 space-y-6">
        {services.map((service, index) => {
          const Icon = serviceIcons[service.icon] ?? Bot;
          return (
            <Reveal key={service.id} delayMs={index * 50}>
              <article
                id={service.id}
                className="scroll-mt-24 rounded-2xl border border-border-custom bg-bg-1 p-8 shadow-[var(--shadow-card)] lg:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
                  <div>
                    <span
                      aria-hidden
                      className="grid h-12 w-12 place-items-center rounded-xl bg-brand-blue/10 text-brand-ink"
                    >
                      <Icon size={23} />
                    </span>
                    <h2 className="mt-5 font-display text-2xl font-bold tracking-tight">
                      {service.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-text-secondary">
                      {service.summary}
                    </p>
                  </div>

                  <div className="lg:pt-1">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-text-tertiary">
                      What you get
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-text-secondary">
                          <Check
                            size={17}
                            aria-hidden
                            className="mt-0.5 shrink-0 text-brand-blue"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      {/* Process */}
      <section aria-labelledby="process-heading" className="mt-20">
        <Reveal>
          <h2
            id="process-heading"
            className="font-display text-3xl font-bold tracking-tight"
          >
            How an engagement runs
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">
            Fixed scope, fixed price, weekly working software.
          </p>
        </Reveal>

        <ol className="mt-10 space-y-4">
          {processSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.step}
              delayMs={index * 50}
              className="flex gap-6 rounded-2xl border border-border-custom bg-bg-1 p-6"
            >
              <span
                aria-hidden
                className="font-display text-2xl font-bold text-brand-blue/35"
              >
                {step.step}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Fit */}
      <section className="mt-20 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border-custom bg-bg-1 p-8">
          <h2 className="font-display text-xl font-bold">A good fit if you…</h2>
          <ul className="mt-5 space-y-3 text-sm text-text-secondary">
            {[
              "Have a specific problem worth automating or productising",
              "Want a working prototype to test with real users",
              "Need an AI feature integrated into an existing product",
              "Value clear scope over an open-ended retainer",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <Check size={17} aria-hidden className="mt-0.5 shrink-0 text-brand-blue" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border-custom bg-bg-2 p-8">
          <h2 className="font-display text-xl font-bold">Probably not a fit if you…</h2>
          <ul className="mt-5 space-y-3 text-sm text-text-secondary">
            {[
              "Need a fixed-headcount team on site",
              "Are looking for the lowest possible hourly rate",
              "Want an idea built with no defined success criteria",
              "Need 24/7 production on-call cover",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-text-tertiary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-20 rounded-2xl border border-border-custom bg-bg-1 p-8 text-center sm:p-12">
        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          Let&rsquo;s scope it out
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-text-secondary">
          Send me the problem in plain language. If it is not a good fit, I will say so and
          point you somewhere better.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Start a conversation
          <ArrowRight size={16} aria-hidden />
        </Link>
      </section>

      <p className="mt-8 text-center text-sm text-text-tertiary">
        Prefer to see the work first?{" "}
        <Link href="/projects" className="text-brand-ink hover:underline">
          Browse the portfolio
        </Link>{" "}
        or{" "}
        <a href={site.cv} className="text-brand-ink hover:underline">
          download my CV
        </a>
        .
      </p>
    </div>
  );
}
