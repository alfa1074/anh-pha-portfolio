import type { Metadata } from "next";

import { skills } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { FadeIn } from "@/components/fade-in";
import { SkillBadge } from "@/components/skill-badge";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "QA skills: manual testing, API testing, regression, and telecom/CPaaS domain expertise.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        title="Skills"
        description="Testing practices, tools, and telecom domain expertise."
      />

      <FadeIn as="section" className="pb-16">
        <ul className="flex flex-wrap gap-2" aria-label="Skills">
          {skills.map((skill) => (
            <li key={skill}>
              <SkillBadge label={skill} />
            </li>
          ))}
        </ul>
      </FadeIn>
    </>
  );
}
