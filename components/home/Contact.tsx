import { CONTACT_EMAIL, site } from "@/content/site";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  const year = new Date().getFullYear();
  return (
    <section
      id="contact"
      data-stage
      data-bg="#0b3fe0"
      data-ui="light"
      data-ring="0.3"
      data-cam="9"
      data-tilt="0.25"
      className="relative flex min-h-svh flex-col px-5 pb-6 pt-24 text-white sm:px-8"
    >
      <SectionLabel n="08">Contact</SectionLabel>

      <div className="relative mt-6 flex flex-1 flex-wrap items-center justify-between gap-8">
        <h2 className="hd relative text-[clamp(7rem,32vw,28rem)] leading-[0.8]">
          Talk
          <span
            aria-hidden
            className="absolute -bottom-2 left-[38%] -rotate-6 font-serif text-[0.22em] font-bold normal-case italic tracking-normal text-amber-400"
          >
            to me
          </span>
        </h2>

        <div className="max-w-xs text-sm font-semibold leading-snug">
          <p>
            Hiring, or building something? Tell me about the problem and I&apos;ll get back
            to you.
          </p>
          <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 underline">
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
          <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 underline">
            {site.linkedin && (
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            )}
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={site.cv}>Résumé</a>
          </p>
        </div>
      </div>

      <footer className="grid gap-4 border-t border-white/30 pb-14 pt-4 text-[11px] font-medium sm:grid-cols-3 sm:pb-2 sm:pr-40">
        <p>
          © {year} {site.brand} · {site.name}
        </p>
        <nav aria-label="Pages" className="flex flex-wrap gap-x-4 gap-y-1">
          <a href="/projects">All projects</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/certificates">Certificates</a>
        </nav>
        <p className="sm:text-right">{site.location}</p>
      </footer>
    </section>
  );
}
