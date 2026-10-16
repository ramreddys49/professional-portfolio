import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { ProjectPreview } from "@/components/project-preview";
import { cn } from "@/lib/cn";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  reverse?: boolean;
};

export function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  return (
    <article className="grid items-center gap-8 rounded-[2rem] border border-border bg-surface/40 p-5 transition-colors hover:border-accent/25 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">
      <div className={cn(reverse && "lg:order-2")}>
        <ProjectPreview project={project} />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {project.previewEyebrow}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted">{project.subtitle}</p>
        <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
          {project.description}
        </p>
        <ul className="mt-6 space-y-2">
          {project.capabilities.map((capability) => (
            <li key={capability} className="flex gap-2 text-sm leading-6 text-muted">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span>{capability}</span>
            </li>
          ))}
        </ul>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted"
            >
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label={`Live demo of ${project.title} (opens in a new tab)`}
          >
            Live Demo
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label={`GitHub repository for ${project.title} (opens in a new tab)`}
          >
            <FolderGit2 size={16} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
