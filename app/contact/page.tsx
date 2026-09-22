import type { Metadata } from "next";
import { Github, Mail, MapPin, Linkedin } from "lucide-react";
import CopyEmail from "@/components/CopyEmail";
import Reveal from "@/components/Reveal";
import { CONTACT_EMAIL, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Geofry Oduor — AI automation, multi-agent systems and full-stack web platforms. Tell me the problem and I will tell you honestly if I can help.",
  alternates: { canonical: "/contact" },
};

const nextSteps = [
  "You send a short description of the problem",
  "I reply with questions or a straight no if it is not a fit",
  "We take a short call to agree scope and success criteria",
  "You get a written scope and a fixed price before any work starts",
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-ink">
          Contact
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Let&rsquo;s talk about what you need built.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
          {site.availability
            ? "I am currently taking on new projects."
            : "I am not taking on new projects right now, but happy to talk."}{" "}
          Email is the fastest way to reach me.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal>
          <div className="rounded-2xl border border-border-custom bg-bg-1 p-8 shadow-[var(--shadow-card)]">
            <h2 className="font-display text-xl font-bold">Email me</h2>
            <p className="mt-2 text-sm text-text-secondary">
              Tell me what you are building, who it is for, and any deadline you are working
              to. A rough budget range helps me scope honestly.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Project%20enquiry`}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                <Mail size={16} aria-hidden />
                {CONTACT_EMAIL}
              </a>
              <CopyEmail email={CONTACT_EMAIL} />
            </div>

            <dl className="mt-8 space-y-4 border-t border-border-custom pt-6 text-sm">
              <div className="flex items-center gap-3">
                <dt className="sr-only">Location</dt>
                <MapPin size={16} aria-hidden className="text-text-tertiary" />
                <dd className="text-text-secondary">{site.location}</dd>
              </div>
              <div className="flex items-center gap-3">
                <dt className="sr-only">GitHub</dt>
                <Github size={16} aria-hidden className="text-text-tertiary" />
                <dd>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-brand-ink"
                  >
                    github.com/Geoduor
                  </a>
                </dd>
              </div>
              {site.linkedin && (
                <div className="flex items-center gap-3">
                  <dt className="sr-only">LinkedIn</dt>
                  <Linkedin size={16} aria-hidden className="text-text-tertiary" />
                  <dd>
                    <a
                      href={site.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-brand-ink"
                    >
                      LinkedIn
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </Reveal>

        <Reveal delayMs={80}>
          <div className="rounded-2xl border border-border-custom bg-bg-2 p-8">
            <h2 className="font-display text-xl font-bold">What happens next</h2>
            <ol className="mt-6 space-y-5">
              {nextSteps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span
                    aria-hidden
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-blue text-xs font-bold text-white"
                  >
                    {index + 1}
                  </span>
                  <p className="pt-0.5 text-sm leading-relaxed text-text-secondary">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-6 rounded-2xl border border-border-custom bg-bg-1 p-8">
            <h2 className="font-display text-lg font-bold">Helpful to include</h2>
            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              {[
                "The problem in plain language",
                "Who will use what we build",
                "Anything you already have (designs, data, an existing app)",
                "Your timeline and a rough budget range",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
