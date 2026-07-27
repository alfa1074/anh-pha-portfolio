import type { Metadata } from "next";

import {
  site,
  contact,
  summary,
  experience,
  skills,
  education,
  certification,
} from "@/lib/content";
import { FadeIn } from "@/components/fade-in";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${site.name}, ${site.title}. ${summary}`,
  alternates: { canonical: "/resume" },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t py-6">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default function ResumePage() {
  return (
    <FadeIn as="article" className="pb-16 pt-16 sm:pt-20">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{site.name}</h1>
          <p className="mt-1 text-lg text-muted-foreground">{site.title}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            <a
              href={`mailto:${contact.email}`}
              className="transition-colors hover:text-foreground"
            >
              {contact.email}
            </a>
            {contact.location ? ` · ${contact.location}` : null}
          </p>
        </div>
        <PrintButton />
      </div>

      <Section title="Summary">
        <p className="leading-relaxed text-muted-foreground">{summary}</p>
      </Section>

      <Section title="Experience">
        <div className="space-y-5">
          {experience.map((item) => (
            <div key={`${item.role}-${item.company}`}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <p className="font-medium">
                  {item.role} &middot;{" "}
                  <span className="text-muted-foreground">{item.company}</span>
                </p>
                {item.period ? (
                  <span className="text-sm text-muted-foreground">
                    {item.period}
                  </span>
                ) : null}
              </div>
              {item.description ? (
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Skills">
        <p className="leading-relaxed text-muted-foreground">
          {skills.join(" · ")}
        </p>
      </Section>

      <Section title="Education">
        <p className="font-medium">{education.degree}</p>
        <p className="text-sm text-muted-foreground">{education.school}</p>
      </Section>

      <Section title="Certification">
        <p className="font-medium">{certification.name}</p>
      </Section>
    </FadeIn>
  );
}
