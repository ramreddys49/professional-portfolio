import { ArrowRight, Download } from "lucide-react";
import { Container } from "@/components/container";
import { NetworkVisual } from "@/components/network-visual";
import { ResumeLink } from "@/components/resume-link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-24"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent sm:tracking-[0.22em]">
            {site.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="mt-5 max-w-3xl font-serif text-[2.15rem] leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]"
          >
            <span className="block">{site.headline[0]}</span>
            <span className="block italic text-foreground/90">
              {site.headline[1]}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {site.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-on-accent transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Explore My Work
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <ResumeLink className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-transparent px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              <Download size={16} aria-hidden="true" />
              Download Resume
            </ResumeLink>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
            {site.capabilities.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <NetworkVisual />
      </Container>
    </section>
  );
}
