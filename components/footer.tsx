import { FolderGit2, Mail } from "lucide-react";
import { Container } from "@/components/container";
import { LinkedInIcon } from "@/components/linkedin-icon";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 sm:py-12">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <p className="text-sm font-medium text-foreground">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.location}</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-muted">
            {site.footerTagline}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted">
          {site.socials.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                aria-label={
                  item.external
                    ? `${item.label} profile (opens in a new tab)`
                    : `Email ${site.email}`
                }
              >
                {item.label === "GitHub" ? (
                  <FolderGit2 size={15} aria-hidden="true" />
                ) : null}
                {item.label === "LinkedIn" ? <LinkedInIcon size={14} /> : null}
                {item.label === "Email" ? (
                  <Mail size={15} aria-hidden="true" />
                ) : null}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
