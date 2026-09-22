import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { education, experience, site, skillGroups } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Geofry Oduor is a mechanical engineer turned AI and full-stack software engineer based in Kenya, building systems for agriculture, fraud detection and sports data.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
      <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-ink">
            About
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            From mechanical engineering to building AI systems.
          </h1>

          <div className="mt-7 space-y-5 text-lg leading-relaxed text-text-secondary">
            <p>
              I am a final-year Mechanical Engineering student at the Technical University
              of Kenya, and I build software. That is not a contradiction — engineering
              taught me to define the problem before reaching for a tool, and that habit
              turned out to matter more in software than any framework.
            </p>
            <p>
              I learned to build by shipping. I am currently training in AI and software
              development with Power Learn Project Africa and in software engineering at
              Zone01 Kisumu, and in parallel I have built multi-agent systems for Kenyan
              smallholder farmers, an anti-fraud detection agent, and a live sports
              platform for the Kenya Hockey Union.
            </p>
            <p>
              Before software, I coordinated logistics at Gantad Logistics and installed
              customer Wi-Fi links on the Safaricom agent network. Both jobs were about
              making systems work for people who just need the thing to work — which is
              still the standard I hold my software to.
            </p>
            <p>
              I am based in Kenya and work with clients remotely. If you have a problem
              that software can genuinely solve, I would like to hear about it.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Work with me
              <ArrowRight size={16} aria-hidden />
            </Link>
            <a
              href={site.cv}
              className="inline-flex items-center gap-2 rounded-xl border border-border-custom bg-bg-1 px-6 py-3.5 text-sm font-semibold text-text-primary transition hover:border-brand-blue/40 hover:text-brand-ink"
            >
              <Download size={16} aria-hidden />
              Download CV
            </a>
          </div>
        </Reveal>

        <Reveal delayMs={80} className="lg:sticky lg:top-24">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border-custom bg-bg-2 shadow-[var(--shadow-lift)]">
            <Image
              src={site.photo}
              alt={`Portrait of ${site.name}`}
              fill
              sizes="(max-width: 1024px) 90vw, 380px"
              className="object-cover"
            />
          </div>
          <p className="mt-4 flex items-center gap-2 text-sm text-text-tertiary">
            <MapPin size={15} aria-hidden />
            {site.location}
          </p>
        </Reveal>
      </div>

      {/* Experience */}
      <section aria-labelledby="experience-heading" className="mt-20">
        <h2
          id="experience-heading"
          className="font-display text-2xl font-bold tracking-tight"
        >
          Experience &amp; training
        </h2>
        <ol className="mt-8 space-y-3">
          {experience.map((item) => (
            <li
              key={`${item.title}-${item.org}`}
              className="grid gap-2 rounded-2xl border border-border-custom bg-bg-1 p-6 sm:grid-cols-[150px_1fr] sm:gap-8"
            >
              <span className="text-sm font-medium text-text-tertiary">{item.period}</span>
              <div>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="text-sm font-medium text-brand-ink">{item.org}</p>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Education */}
      <section aria-labelledby="education-heading" className="mt-14">
        <h2
          id="education-heading"
          className="font-display text-2xl font-bold tracking-tight"
        >
          Education
        </h2>
        <ol className="mt-8 space-y-3">
          {education.map((item) => (
            <li
              key={item.title}
              className="grid gap-2 rounded-2xl border border-border-custom bg-bg-1 p-6 sm:grid-cols-[150px_1fr] sm:gap-8"
            >
              <span className="text-sm font-medium text-text-tertiary">{item.period}</span>
              <div>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="text-sm font-medium text-brand-ink">{item.org}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section aria-labelledby="skills-heading" className="mt-14">
        <h2 id="skills-heading" className="font-display text-2xl font-bold tracking-tight">
          Technical skills
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
      </section>
    </div>
  );
}
