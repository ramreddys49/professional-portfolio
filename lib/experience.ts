export type ExperienceRole = {
  id: string;
  company: string;
  location?: string;
  role: string;
  start: string;
  end?: string;
  startDate: string;
  endDate?: string;
  note?: string;
  summary?: string;
  highlights: string[];
};

export const experience: ExperienceRole[] = [
  {
    id: "cnn-wbd-privacy",
    company: "CNN / Warner Bros. Discovery",
    role: "Software Engineer — Privacy Technology",
    start: "August 2019",
    end: "Present",
    startDate: "2019-08",
    note: "Contractor through November 2021. Employee since December 2021.",
    summary:
      "Privacy and consent-management work across web, mobile, and connected TV platforms.",
    highlights: [
      "Consent management across web, mobile, and CTV.",
      "GDPR and U.S. privacy requirements.",
      "OneTrust CMP and consent-layer troubleshooting.",
      "TCF, GPP, and downstream privacy signals.",
      "API, WebView, and application lifecycle debugging.",
      "Automated privacy validation.",
      "Cross-platform engineering collaboration.",
    ],
  },
  {
    id: "okyte-python-ui",
    company: "Okyte Inc",
    location: "Denver, CO",
    role: "Python / UI Developer",
    start: "May 2019",
    end: "July 2019",
    startDate: "2019-05",
    endDate: "2019-07",
    highlights: [
      "Data automation.",
      "Data protection and recovery workflows.",
      "Reusable UI components.",
      "Jenkins and Docker deployment support.",
    ],
  },
  {
    id: "centene-software-developer",
    company: "Centene Corporation",
    location: "St. Louis, MO",
    role: "Software Developer",
    start: "March 2018",
    end: "April 2019",
    startDate: "2018-03",
    endDate: "2019-04",
    highlights: [
      "Healthcare application development.",
      "Access controls and encryption.",
      "Secure API integration.",
      "Authentication.",
      "Agile and CI/CD delivery.",
    ],
  },
];
