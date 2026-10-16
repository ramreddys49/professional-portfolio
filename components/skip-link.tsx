export function SkipLink() {
  return (
    <a
      href="#main"
      className="fixed left-4 top-4 z-[100] -translate-y-16 rounded-full bg-accent px-4 py-2 text-sm font-medium text-on-accent opacity-0 transition-all focus:translate-y-0 focus:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      Skip to content
    </a>
  );
}
