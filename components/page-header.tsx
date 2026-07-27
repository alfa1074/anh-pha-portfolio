import { FadeIn } from "@/components/fade-in";

export function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <FadeIn as="section" className="pb-8 pt-16 sm:pt-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      {description ? (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
