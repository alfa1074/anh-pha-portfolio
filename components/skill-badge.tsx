import { Badge } from "@/components/ui/badge";

export function SkillBadge({ label }: { label: string }) {
  return (
    <Badge variant="secondary" className="text-sm font-medium">
      {label}
    </Badge>
  );
}
