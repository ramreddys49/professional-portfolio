import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

type PlaceholderSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
};

export function PlaceholderSection({
  id,
  eyebrow,
  title,
}: PlaceholderSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-24 border-t border-border py-20 sm:py-24"
    >
      <Container>
        <SectionHeading id={`${id}-heading`} eyebrow={eyebrow} title={title} />
        <div className="mt-10 rounded-2xl border border-border bg-surface/70 px-6 py-16 sm:px-8">
          <p className="max-w-md text-sm leading-6 text-muted">
            This section is reserved for Phase 2. Content will be added without
            placeholder case studies or invented details.
          </p>
        </div>
      </Container>
    </section>
  );
}
