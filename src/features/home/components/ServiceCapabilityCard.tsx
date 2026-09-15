import Image from "next/image";
import Link from "next/link";
import { CodeXml, MonitorSmartphone, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card/Card";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";
import { cn } from "@/lib/cn";

const serviceIcons = {
  software: CodeXml,
  mobile: Smartphone,
  web: MonitorSmartphone,
} as const;

const serviceThemes = {
  blue: {
    card: "border-[#dbe9f6] bg-[#eaf4fc]",
    accent: "bg-brand",
    icon: "border-brand/25 bg-white/60 text-brand-strong",
    placeholder:
      "bg-[radial-gradient(circle_at_70%_24%,rgba(0,111,186,0.6),transparent_32%),linear-gradient(145deg,#d9ebff_0%,#76aeef_42%,#0a54ce_100%)]",
  },
  peach: {
    card: "border-[#f5ddc9] bg-[#fff1e5]",
    accent: "bg-[#e87510]",
    icon: "border-[#e87510]/25 bg-white/60 text-[#e87510]",
    placeholder:
      "bg-[radial-gradient(circle_at_72%_22%,rgba(255,255,255,0.9),transparent_26%),linear-gradient(145deg,#e8f2ff_0%,#72a8f5_45%,#1556d8_100%)]",
  },
} as const;

type ServiceCapabilityCardProps = {
  active: boolean;
  description: string;
  href: string;
  icon: keyof typeof serviceIcons;
  image: {
    alt: string;
    src: string | null;
  };
  onActivate: () => void;
  theme: keyof typeof serviceThemes;
  title: string;
};

export function ServiceCapabilityCard({
  active,
  description,
  href,
  icon,
  image,
  onActivate,
  theme,
  title,
}: ServiceCapabilityCardProps) {
  const Icon = serviceIcons[icon];
  const styles = serviceThemes[theme];

  return (
    <Card
      as={Link}
      href={href}
      aria-label={`Explore ${title}`}
      onFocus={onActivate}
      onMouseEnter={onActivate}
      className={cn(
        "block w-full overflow-hidden p-6 text-foreground transition-[height,background-color,border-color] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand xl:w-[332px]",
        active ? "h-[437px]" : "h-[435px]",
        styles.card,
      )}
    >
      <div
        className={cn(
          "flex flex-col transition-[height,gap] duration-300 ease-out motion-reduce:transition-none",
          active ? "h-[387px] gap-[70px]" : "h-[385px] gap-0",
        )}
      >
        <div
          aria-hidden={!image.src}
          className={cn(
            "relative w-full shrink-0 overflow-hidden rounded-[20px] border border-white/60 transition-[height,opacity] duration-300 ease-out motion-reduce:transition-none",
            active ? "h-[147px] opacity-100" : "h-0 opacity-0",
          )}
        >
          {image.src ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="284px"
              className="object-cover"
            />
          ) : (
            <div
              data-slot={`${icon}-service-image-placeholder`}
              className={cn("absolute inset-0", styles.placeholder)}
            />
          )}
        </div>

        <div className="flex min-h-0 flex-1 flex-col justify-between">
          <Heading as="h3" variant="serviceCard" className="w-full max-w-[282px]">
            {title}
          </Heading>

          <div className="flex flex-col items-start gap-4">
            <span aria-hidden="true" className={cn("h-px w-14", styles.accent)} />
            <Text
              variant="serviceCard"
              className="h-[110px] w-full max-w-[282px] overflow-hidden text-muted"
            >
              {description}
            </Text>
            <span
              className={cn(
                "grid w-6 place-items-center overflow-hidden rounded-[5px] border transition-[height,opacity]",
                styles.icon,
                active
                  ? "pointer-events-none h-0 border-transparent opacity-0"
                  : "h-6 opacity-100",
              )}
            >
              <Icon aria-hidden="true" className="h-[15px] w-3" strokeWidth={1.4} />
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
