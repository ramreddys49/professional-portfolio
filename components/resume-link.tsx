import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

type ResumeLinkProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function ResumeLink({ children, className, onClick }: ResumeLinkProps) {
  if (!site.resumeAvailable) {
    return null;
  }

  return (
    <a
      href={site.resumeHref}
      download
      onClick={onClick}
      className={cn(className)}
      aria-label="Download resume PDF"
    >
      {children}
    </a>
  );
}
