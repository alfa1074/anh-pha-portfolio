import type { Metadata } from "next";

import { experience } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { FadeIn } from "@/components/fade-in";
import { ExperienceCard } from "@/components/experience-card";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional QA experience across enterprise telecom and CPaaS software testing.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        title="Experience"
        description="Roles across enterprise telecommunications and CPaaS software testing."
      />

      <section className="pb-16">
        <div className="grid gap-4">
          {experience.map((item, i) => (
            <FadeIn key={`${item.role}-${item.company}`} delay={i * 0.05}>
              <ExperienceCard item={item} />
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
