export type NavItem = {
  label: string;
  href: string;
};

export type SocialItem = {
  label: string;
  href: string;
  external: boolean;
};

export const site = {
  name: "Ramnarayan Reddy",
  legalName: "Ramnarayan Reddy Kagithapuram",
  title: "Ramnarayan Reddy | Privacy Engineer & Software Engineer",
  description:
    "Software engineer specializing in privacy technology, consent management, cross-platform integrations, and privacy-by-design. Explore professional experience and interactive engineering projects.",
  role: "Privacy Engineer | Software Engineer",
  location: "Atlanta, GA",
  siteUrl: "https://professional-portfolio-orpin-seven.vercel.app",
  eyebrow: "Privacy Engineer · Software Engineer",
  headline: ["Building privacy-conscious", "digital experiences."],
  intro:
    "I'm Ramnarayan Reddy, a privacy engineer and software engineer based in Atlanta, GA. I have 7+ years of experience in privacy engineering, consent management, cross-platform integrations, and technical troubleshooting.",
  capabilities: [
    "Privacy Engineering",
    "Consent Management",
    "Cross-Platform Integration",
    "Privacy-by-Design",
  ],
  footerTagline:
    "Privacy Engineering · Software Engineering · Interactive Systems",
  resumeHref: "/resume/ramnarayan-reddy.pdf",
  resumeAvailable: true,
  githubHref: "https://github.com/ramreddys49/",
  linkedinHref: "https://www.linkedin.com/in/ramnarayankag",
  email: "ramnarayanreddyk@gmail.com",
  about: [
    "I'm a privacy engineer and software engineer focused on building reliable, privacy-conscious digital experiences.",
    "My work includes consent-management integrations across web, mobile, and connected TV platforms, investigating complex technical issues, and collaborating across engineering teams.",
    "I also build interactive educational tools that make privacy technology and recommendation systems easier to understand. Privacy X-Ray and Feed X-Ray reflect that work.",
  ],
  contact: {
    headline: "Let's Connect",
    text: "I'm interested in opportunities involving software engineering, privacy technology, and platform integrations.",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/ramreddys49/",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ramnarayankag",
      external: true,
    },
    {
      label: "Email",
      href: "mailto:ramnarayanreddyk@gmail.com",
      external: false,
    },
  ] satisfies SocialItem[],
} as const;

export const metadataTitle = site.title;
export const metadataDescription = site.description;
