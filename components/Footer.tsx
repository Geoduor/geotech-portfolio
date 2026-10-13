import Link from "next/link";
import { Github, Mail, MapPin, Download } from "lucide-react";
import { CONTACT_EMAIL, nav, site } from "@/content/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#070b1d] text-white">
      <p aria-hidden className="hd mx-auto max-w-6xl select-none px-6 pt-12 text-[clamp(3.5rem,15vw,11rem)] leading-[0.85] text-white">
        Geofry Oduor
      </p>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight"
          >
            <span
              aria-hidden
              className="grid h-8 w-8 place-items-center rounded-lg bg-brand-blue text-sm font-bold text-white"
            >
              GO
            </span>
            {site.brand}
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            {site.intro}
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-white/50">
            <MapPin size={15} aria-hidden />
            {site.location}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Navigate</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/" className="text-white/70 hover:text-amber-300">
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-white/70 hover:text-amber-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Get in touch</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 text-white/70 hover:text-amber-300"
              >
                <Mail size={15} aria-hidden />
                {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/70 hover:text-amber-300"
              >
                <Github size={15} aria-hidden />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={site.cv}
                className="inline-flex items-center gap-2 text-white/70 hover:text-amber-300"
              >
                <Download size={15} aria-hidden />
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Software engineer · Kenya</p>
        </div>
      </div>
    </footer>
  );
}
