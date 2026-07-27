import Link from "next/link";

import { site, summary } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/fade-in";

export function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <FadeIn>
        <p className="text-sm font-medium text-muted-foreground">
          {site.title}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {summary}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/experience">View experience</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}
