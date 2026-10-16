import { FolderGit2, Mail } from "lucide-react";
import { Container } from "@/components/container";
import { LinkedInIcon } from "@/components/linkedin-icon";
import { ResumeLink } from "@/components/resume-link";
import { site } from "@/lib/site";

const actions = [
  {
    href: site.githubHref,
    label: "GitHub",
    ariaLabel: "GitHub profile (opens in a new tab)",
    external: true,
    icon: "github" as const,
  },
  {
    href: site.linkedinHref,
    label: "LinkedIn",
    ariaLabel: "LinkedIn profile (opens in a new tab)",
    external: true,
    icon: "linkedin" as const,
  },
  {
    href: `mailto:${site.email}`,
    label: "Email",
    ariaLabel: `Email ${site.email}`,
    external: false,
    icon: "mail" as const,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t border-border py-20 sm:py-24"
    >
      <Container>
        <div className="rounded-[2rem] border border-border bg-surface/50 px-6 py-12 sm:px-10 sm:py-16">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
            Connect
          </p>
          <h2
            id="contact-heading"
            className="mt-3 font-serif text-4xl tracking-tight text-foreground sm:text-5xl"
          >
            {site.contact.headline}
          </h2>
          <p className="mt-3 text-sm text-muted">{site.location}</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
            {site.contact.text}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {actions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                aria-label={action.ariaLabel}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {action.icon === "github" ? (
                  <FolderGit2 size={16} aria-hidden="true" />
                ) : null}
                {action.icon === "linkedin" ? <LinkedInIcon size={15} /> : null}
                {action.icon === "mail" ? (
                  <Mail size={16} aria-hidden="true" />
                ) : null}
                {action.label}
              </a>
            ))}
            <ResumeLink className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
              Download Resume
            </ResumeLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
