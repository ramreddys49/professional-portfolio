import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/skills";

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-24 border-t border-border py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="skills-heading"
          eyebrow="Capabilities"
          title="Technical Expertise"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-border bg-surface/50 p-5 sm:p-6"
            >
              <h3 className="text-sm font-semibold tracking-tight text-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-background/70 px-3 py-1.5 text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
