export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  image?: ProjectImage;
  previewEyebrow: string;
};

export const projects: Project[] = [
  {
    slug: "privacy-xray",
    title: "Privacy X-Ray",
    subtitle: "Interactive Privacy Engineering Lab",
    description:
      "An educational project demonstrating consent management, privacy models, behavioral event inspection, and privacy-aware personalization.",
    capabilities: [
      "Consent management simulations",
      "GDPR and U.S. privacy models",
      "Behavioral event inspection",
      "Privacy-aware personalization",
      "Privacy-by-design demonstrations",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://privacy-xray.vercel.app",
    githubUrl: "https://github.com/ramreddys49/privacy-xray",
    image: {
      src: "/images/projects/privacy-xray.png",
      alt: "Privacy X-Ray educational lab showing consent and privacy simulation views",
      width: 3020,
      height: 1710,
    },
    previewEyebrow: "Educational project",
  },
  {
    slug: "feed-xray",
    title: "Feed X-Ray",
    subtitle: "Interactive Recommendation System Simulator",
    description:
      "An educational social-feed simulation showing how behavioral signals can influence inferred interests, ranking, and fictional sponsored selection.",
    capabilities: [
      "Behavioral event simulation",
      "Interest profiling",
      "Deterministic feed ranking",
      "Explainable recommendation factors",
      "Separate organic and commercial ranking signals",
      "Engineer Mode",
      "Interactive walkthrough",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vitest"],
    liveUrl: "https://feed-xray.vercel.app",
    githubUrl: "https://github.com/ramreddys49/feed-xray",
    image: {
      src: "/images/projects/feed-xray.png",
      alt: "Feed X-Ray educational simulator showing a ranked feed and recommendation explanations",
      width: 3024,
      height: 1714,
    },
    previewEyebrow: "Educational project",
  },
];
