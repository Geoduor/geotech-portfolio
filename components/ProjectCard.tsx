import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/content/site";

/**
 * Server component — deliberately free of client hooks so it can render inside
 * any page (Server or Client) without a "use client" boundary.
 */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border-custom bg-bg-1 p-6 shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-[var(--shadow-lift)]">
      <p className="text-xs font-bold uppercase tracking-wider text-brand-ink">
        {project.category}
      </p>

      <h3 className="mt-2 font-display text-xl font-semibold text-text-primary">
        {project.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
        {project.problem}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        {project.solution}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <li
            key={item}
            className="rounded-full border border-border-custom bg-bg-2 px-2.5 py-1 text-xs text-text-secondary"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center gap-5 border-t border-border-custom pt-4 text-sm">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-brand-ink hover:underline"
          >
            View live
            <ArrowUpRight size={15} aria-hidden />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-text-secondary hover:text-brand-ink"
          >
            <Github size={15} aria-hidden />
            Source
          </a>
        )}
        {!project.liveUrl && !project.githubUrl && (
          <span className="text-text-tertiary">Private engagement</span>
        )}
      </div>
    </article>
  );
}
