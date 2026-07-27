import type { Metadata } from "next";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

import { contact, site } from "@/lib/content";
import { PageHeader } from "@/components/page-header";
import { FadeIn } from "@/components/fade-in";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name}, ${site.title}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        description="Open to QA opportunities. The fastest way to reach me is email."
      />

      <FadeIn as="section" className="pb-16">
        <div className="flex flex-wrap items-center gap-3">
          <Button asChild>
            <a href={`mailto:${contact.email}`}>
              <Mail className="h-4 w-4" />
              Email me
            </a>
          </Button>
          {contact.linkedin ? (
            <Button asChild variant="outline">
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          ) : null}
          {contact.github ? (
            <Button asChild variant="outline">
              <a href={contact.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          ) : null}
        </div>

        <dl className="mt-10 space-y-4 text-sm">
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-muted-foreground" aria-hidden />
            <dt className="sr-only">Email</dt>
            <dd>
              <a
                href={`mailto:${contact.email}`}
                className="transition-colors hover:text-foreground"
              >
                {contact.email}
              </a>
            </dd>
          </div>
          {contact.location ? (
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-muted-foreground" aria-hidden />
              <dt className="sr-only">Location</dt>
              <dd className="text-muted-foreground">{contact.location}</dd>
            </div>
          ) : null}
        </dl>
      </FadeIn>
    </>
  );
}
