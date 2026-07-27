import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ExperienceItem } from "@/lib/content";

export function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <CardTitle>{item.role}</CardTitle>
          {item.period ? (
            <span className="text-sm text-muted-foreground">{item.period}</span>
          ) : null}
        </div>
        <p className="text-sm font-medium text-muted-foreground">
          {item.company}
        </p>
      </CardHeader>
      {item.description ? (
        <CardContent>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </CardContent>
      ) : null}
    </Card>
  );
}
