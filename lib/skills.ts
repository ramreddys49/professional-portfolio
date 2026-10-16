export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "Python", "Node.js", "REST APIs"],
  },
  {
    title: "Privacy Engineering",
    items: [
      "OneTrust CMP",
      "GDPR",
      "CCPA/CPRA",
      "GPP",
      "TCF",
      "Consent Management",
      "Privacy-by-Design",
    ],
  },
  {
    title: "Testing",
    items: ["Playwright", "WebdriverIO", "BrowserStack", "Vitest", "API Testing"],
  },
  {
    title: "Cloud and DevOps",
    items: ["Docker", "Jenkins", "GitHub Actions", "Azure"],
  },
  {
    title: "Engineering",
    items: [
      "Cross-Platform Integrations",
      "Debugging",
      "Observability",
      "Event-Driven Systems",
      "API Integration",
    ],
  },
];
