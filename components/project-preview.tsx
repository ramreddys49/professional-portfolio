import Image from "next/image";
import type { Project } from "@/lib/projects";

type ProjectPreviewProps = {
  project: Project;
};

export function ProjectPreview({ project }: ProjectPreviewProps) {
  if (project.image) {
    return (
      <div className="relative aspect-[16/9] overflow-hidden rounded-[1.4rem] border border-border bg-surface">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          sizes="(min-width: 1024px) 36vw, (min-width: 768px) 70vw, 100vw"
          className="h-full w-full object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div
      className="relative isolate overflow-hidden rounded-[1.4rem] border border-border bg-surface px-6 py-10 sm:px-8 sm:py-12"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(45,212,191,0.14),transparent_42%),radial-gradient(circle_at_88%_82%,rgba(56,189,248,0.08),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="relative max-w-md">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-accent">
          {project.previewEyebrow}
        </p>
        <p className="mt-4 font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </p>
        <p className="mt-3 text-sm leading-6 text-muted">{project.subtitle}</p>
      </div>
    </div>
  );
}
