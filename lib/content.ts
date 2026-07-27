/**
 * Single source of truth for all resume/portfolio content.
 * Values are taken exactly from the PRD (03-Content.md).
 * Edit contact links + siteUrl below before deploying.
 */

export const site = {
  name: "Anh Pha",
  title: "Junior QA Engineer",
  // Update this to your real production domain before deploying to Vercel.
  url: "https://anhpha.vercel.app",
  description:
    "Junior QA Engineer with hands-on experience in enterprise telecommunications software testing, manual testing, API testing, requirement review and release validation.",
  locale: "en_US",
};

export const contact = {
  email: "anhphavovan@gmail.com",
  // Optional links — fill in or leave empty to hide.
  linkedin: "",
  github: "",
  location: "Da Nang, Vietnam",
};

export const summary = site.description;

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description?: string;
}

export const experience: ExperienceItem[] = [
  {
    role: "QA Engineer",
    company: "B3Networks Vietnam",
    period: "Nov 2025 – Present",
    description:
      "Manual and API testing of enterprise CPaaS / telecom platforms, requirement review, and release validation.",
  },
  {
    role: "QC Intern",
    company: "RIKAI Technology",
    period: "",
    description: "Quality control and manual testing across web applications.",
  },
  {
    role: "QC Engineer Intern",
    company: "SupremeTech",
    period: "",
    description: "Test execution, defect reporting, and regression support.",
  },
];

export const skills: string[] = [
  "Manual Testing",
  "API Testing",
  "Regression",
  "Smoke",
  "Sanity",
  "Postman",
  "GitHub",
  "Kibana",
  "Jenkins",
  "Figma",
  "SIP/VoIP",
  "CPaaS",
  "Contact Center",
];

export const education = {
  degree: "Bachelor of IT",
  school: "University of Danang",
};

export const certification = {
  name: "TOEIC L&R 600",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];
