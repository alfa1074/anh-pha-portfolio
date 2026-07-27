import type { Metadata } from "next";

import { summary, education, certification } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { FadeIn } from "@/components/fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description: summary,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About" />

      <FadeIn as="section" className="pb-16">
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {summary}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">{education.degree}</p>
              <p className="text-sm text-muted-foreground">{education.school}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Certification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">{certification.name}</p>
            </CardContent>
          </Card>
        </div>
      </FadeIn>
    </>
  );
}
