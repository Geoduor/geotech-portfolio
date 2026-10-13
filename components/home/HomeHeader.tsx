"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { CONTACT_EMAIL, site } from "@/content/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#live", label: "Featured" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#more", label: "More" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  ...(site.linkedin ? [{ href: site.linkedin, label: "LinkedIn" }] : []),
  { href: site.github, label: "GitHub" },
  { href: site.cv, label: "Résumé" },
];

/** Fixed header. Its colour follows --ui, which the Stage sets per section. */
export default function HomeHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-40 flex items-start justify-between px-5 py-4 text-[color:var(--ui)] transition-colors duration-500 sm:px-8"
      >
        <a href="#top" className="block leading-tight" aria-label="Geofry Oduor, back to top">
          <span className="block font-display text-base font-extrabold tracking-tight">
            Geodr.
          </span>
          <span className="block text-[11px] font-medium opacity-80">
            AI &amp; software developer · Kenya
          </span>
        </a>

        <nav aria-label="Primary" className="hidden gap-6 text-xs font-semibold md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:underline">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden gap-4 text-xs font-semibold md:flex">
          {socials.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="hover:underline"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="inline-flex h-9 w-9 items-center justify-center md:hidden"
        >
          <Menu size={22} aria-hidden />
        </button>
      </header>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[60] flex flex-col bg-[#050a24] p-6 text-white md:hidden"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="ml-auto inline-flex h-9 w-9 items-center justify-center"
          >
            <X size={24} aria-hidden />
          </button>
          <nav className="mt-6 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="hd py-1 text-5xl"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
            {socials.map((l) => (
              <a key={l.label} href={l.href} className="inline-flex items-center gap-1">
                {l.label}
                <ArrowUpRight size={14} aria-hidden />
              </a>
            ))}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
        </div>
      )}

      <a
        href="#contact"
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-3 rounded-full bg-[#07091a] py-2 pl-5 pr-2 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition hover:scale-[1.03] sm:bottom-6 sm:right-6"
      >
        Say hello
        <span
          aria-hidden
          className="grid h-8 w-8 place-items-center rounded-full bg-amber-400 text-[#07091a]"
        >
          <ArrowUpRight size={16} />
        </span>
      </a>
    </>
  );
}
