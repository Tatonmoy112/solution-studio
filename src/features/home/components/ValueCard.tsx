import { Boxes, CodeXml, Flag, Target } from "lucide-react";
import { Card } from "@/components/ui/card/Card";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";

const valueIcons = {
  target: Target,
  flag: Flag,
  code: CodeXml,
  blocks: Boxes,
} as const;

type ValueCardProps = {
  description: string;
  icon: keyof typeof valueIcons;
  title: string;
};

export function ValueCard({ description, icon, title }: ValueCardProps) {
  const Icon = valueIcons[icon];

  return (
    <Card
      as="article"
      className="flex min-h-[107px] w-full items-start gap-5 bg-white px-5 py-4 text-foreground"
    >
      <span className="grid size-8 shrink-0 place-items-center rounded-[10px] bg-brand-soft text-brand-strong">
        <Icon aria-hidden="true" className="size-4" strokeWidth={1.6} />
      </span>
      <div className="flex min-w-0 flex-col">
        <Heading as="h3" variant="card">
          {title}
        </Heading>
        <Text variant="card" className="max-w-[275px] text-muted">
          {description}
        </Text>
      </div>
    </Card>
  );
}
