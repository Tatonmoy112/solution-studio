import Image from "next/image";
import { ArrowRight, CodeXml, Palette, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button/Button";
import { Card } from "@/components/ui/card/Card";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";
import { cn } from "@/lib/cn";

const journeyIcons = {
  strategy: UsersRound,
  design: Palette,
  engineering: CodeXml,
} as const;

const journeyThemes = {
  blue: {
    card: "border-[#d9eafb] bg-[#eaf4fc]",
    icon: "bg-[#bfe1f6] text-brand-strong",
    category: "text-brand-strong",
    placeholder:
      "bg-[radial-gradient(circle_at_68%_28%,rgba(0,111,186,0.52),transparent_32%),linear-gradient(145deg,#174d72_0%,#0b243b_52%,#071623_100%)]",
  },
  peach: {
    card: "border-[#f8dfca] bg-[#fff1e5]",
    icon: "bg-[#f9d9ba] text-[#e87510]",
    category: "text-[#e87510]",
    placeholder:
      "bg-[radial-gradient(circle_at_30%_24%,rgba(232,117,16,0.46),transparent_30%),linear-gradient(145deg,#5c3821_0%,#271b16_50%,#15100d_100%)]",
  },
} as const;

type JourneyCardProps = {
  category: string;
  className?: string;
  cta: {
    href: string;
    label: string;
  };
  description: string;
  icon: keyof typeof journeyIcons;
  image: {
    alt: string;
    position: "left" | "right";
    src: string | null;
  };
  theme: keyof typeof journeyThemes;
  title: string;
};

export function JourneyCard({
  category,
  className,
  cta,
  description,
  icon,
  image,
  theme,
  title,
}: JourneyCardProps) {
  const Icon = journeyIcons[icon];
  const styles = journeyThemes[theme];
  const imageOnLeft = image.position === "left";

  return (
    <Card
      as="article"
      className={cn(
        "grid w-full max-w-[1384px] items-center justify-between gap-8 overflow-hidden px-5 py-10 shadow-[0_18px_50px_rgba(16,34,56,0.08)] sm:px-8 xl:min-h-[516px] xl:gap-5 xl:px-[50px] xl:pb-12 xl:pt-[88px]",
        imageOnLeft
          ? "xl:grid-cols-[570px_minmax(0,673px)]"
          : "xl:grid-cols-[minmax(0,673px)_570px]",
        styles.card,
        className,
      )}
    >
      <div
        className={cn(
          "flex w-full max-w-[673px] flex-col items-start gap-3 py-[17px]",
          imageOnLeft && "xl:order-2",
        )}
      >
        <div className="flex items-center gap-5">
          <span
            className={cn(
              "grid size-10 shrink-0 place-items-center rounded-[10px]",
              styles.icon,
            )}
          >
            <Icon aria-hidden="true" className="size-4" strokeWidth={1.6} />
          </span>
          <p
            className={cn(
              "text-base font-bold leading-6 tracking-normal uppercase",
              styles.category,
            )}
          >
            {category}
          </p>
        </div>

        <Heading as="h3" variant="feature" className="max-w-[673px]">
          {title}
        </Heading>
        <Text variant="feature" className="max-w-[612px] text-muted">
          {description}
        </Text>
        <Button
          href={cta.href}
          variant="dark"
          className="min-w-[233px] font-bold"
          endIcon={<ArrowRight className="size-5" strokeWidth={1.8} />}
        >
          {cta.label}
        </Button>
      </div>

      <div
        className={cn(
          "relative aspect-[3/2] w-full max-w-[570px] overflow-hidden rounded-[20px] bg-[#07192c] xl:aspect-[570/380]",
          imageOnLeft
            ? "xl:order-1 xl:justify-self-start"
            : "xl:justify-self-end",
        )}
      >
        {image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1280px) 570px, (min-width: 640px) 80vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            data-slot={`${icon}-journey-image-placeholder`}
            className={cn("absolute inset-0", styles.placeholder)}
          >
            <div className="absolute inset-0 bg-[linear-gradient(125deg,transparent_35%,rgba(255,255,255,0.08)_36%,transparent_37%)] bg-[length:42px_42px]" />
          </div>
        )}
      </div>
    </Card>
  );
}
