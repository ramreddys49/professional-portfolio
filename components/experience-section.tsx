import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/experience";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-24 border-t border-border py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          id="experience-heading"
          eyebrow="Background"
          title="Professional Experience"
        />
        <ol className="mt-12 space-y-12">
          {experience.map((role) => (
            <li
              key={role.id}
              className="relative border-l border-border pl-6 sm:pl-8"
            >
              <span
                className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border border-background bg-accent"
                aria-hidden="true"
              />
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                <time dateTime={role.startDate}>{role.start}</time>
                {" – "}
                {role.endDate ? (
                  <time dateTime={role.endDate}>{role.end}</time>
                ) : (
                  <span>{role.end ?? "Present"}</span>
                )}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {role.role}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {role.company}
                {role.location ? ` · ${role.location}` : ""}
              </p>
              {role.note ? (
                <p className="mt-2 text-sm leading-6 text-muted/90">{role.note}</p>
              ) : null}
              {role.summary ? (
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:text-base">
                  {role.summary}
                </p>
              ) : null}
              <ul className="mt-5 max-w-3xl space-y-2">
                {role.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-7 text-muted"
                  >
                    <span
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
