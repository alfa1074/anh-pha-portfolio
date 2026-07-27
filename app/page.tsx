import Link from "next/link";

import { experience, skills } from "@/lib/content";
import { Hero } from "@/components/hero";
import { FadeIn } from "@/components/fade-in";
import { ExperienceCard } from "@/components/experience-card";
import { SkillBadge } from "@/components/skill-badge";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <Hero />

      <FadeIn as="section" className="border-t py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <Button asChild variant="link" className="px-0">
            <Link href="/experience">View all</Link>
          </Button>
        </div>
        <div className="mt-6 grid gap-4">
          {experience.slice(0, 2).map((item) => (
            <ExperienceCard key={`${item.role}-${item.company}`} item={item} />
          ))}
        </div>
      </FadeIn>

      <FadeIn as="section" className="border-t py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
          <Button asChild variant="link" className="px-0">
            <Link href="/skills">View all</Link>
          </Button>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </FadeIn>
    </>
  );
}
