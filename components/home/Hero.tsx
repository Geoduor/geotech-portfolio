import Image from "next/image";
import { site, skillGroups } from "@/content/site";

const WORD = "GEOFRY";
const columns = skillGroups.filter((g) =>
  ["Frontend", "Backend & data", "AI & automation"].includes(g.label),
);

export default function Hero() {
  return (
    <section
      id="top"
      data-stage
      data-bg="#0b3fe0"
      data-ui="light"
      data-ring="0.6"
      data-cam="8.5"
      data-tilt="0.16"
      className="relative flex min-h-svh flex-col justify-between px-5 pb-6 pt-24 text-white sm:px-8"
    >
      {/* Profile chip */}
      <div className="fade-after-intro absolute right-5 top-16 hidden items-center gap-3 rounded-lg bg-white/10 p-2 pr-3 backdrop-blur sm:right-8 sm:flex">
        <span className="relative h-9 w-9 overflow-hidden rounded-md bg-white/20">
          <Image src={site.photo} alt="" fill sizes="36px" className="object-cover" />
        </span>
        <span className="leading-tight">
          <span className="block text-xs font-bold">{site.name}</span>
          <span className="block text-[10px] opacity-80">{site.role}</span>
        </span>
        <a
          href={site.cv}
          className="ml-2 rounded-full bg-white px-3 py-1 text-[10px] font-bold text-[#0a0f2c]"
        >
          Résumé
        </a>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <h1
          aria-label={site.name}
          className="hd select-none text-center text-[clamp(5.5rem,31vw,40rem)] leading-[0.82] text-white"
        >
          <span className="hero-clip" aria-hidden>
            {WORD.split("").map((letter, i) => (
              <span key={i} className="hero-letter" style={{ ["--i" as string]: i }}>
                {letter}
              </span>
            ))}
          </span>
        </h1>
      </div>

      <div className="fade-after-intro grid gap-6 pb-14 text-xs sm:pb-0 lg:grid-cols-[1fr_1.2fr] lg:items-end">
        <div className="max-w-md space-y-1.5 font-semibold leading-snug">
          <p className="text-sm sm:text-base">{site.tagline}</p>
          <p className="font-medium opacity-90">
            Final-year mechanical engineering student, building AI tools and full-stack
            platforms.
          </p>
          <p className="font-medium opacity-80">
            {site.availability}. Based in {site.location.replace("Kenya — ", "")}.
          </p>
        </div>
        <dl className="hidden grid-cols-3 gap-4 border-t border-white/30 pt-3 sm:grid">
          {columns.map((col, i) => (
            <div key={col.label}>
              <dt className="text-[10px] opacity-70">0{i + 1}</dt>
              <dd>
                <span className="block text-xs font-bold">{col.label}</span>
                <span className="block text-[11px] opacity-80">
                  {col.items.slice(0, 3).join(", ")}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
