import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { Heading } from "@/components/ui/typography/Heading";
import { JourneyCard, type JourneyCardContent } from "./JourneyCard";

const stickyCardPositions = [
  "xl:top-24 xl:z-10",
  "xl:top-[120px] xl:z-20",
  "xl:top-36 xl:z-30",
] as const;

type ServicesOverviewProps = {
  ariaLabel?: string;
  cards: readonly JourneyCardContent[];
  heading?: {
    eyebrow: string;
    id: string;
    title: string;
  };
  variant?: "standard" | "compact";
};

export function ServicesOverview({
  ariaLabel,
  cards,
  heading,
  variant = "standard",
}: ServicesOverviewProps) {
  return (
    <section
      aria-labelledby={heading?.id}
      aria-label={heading ? undefined : ariaLabel}
      className={`grid w-full place-items-center px-5 sm:px-8 min-[1700px]:px-0 ${
        variant === "compact"
          ? "bg-white py-[clamp(64px,7vw,100px)]"
          : "bg-[#f8fafc] py-[clamp(72px,8vw,120px)]"
      }`}
    >
      <Container className={`flex flex-col items-center ${heading ? "gap-16" : ""}`}>
        {heading ? (
          <div
            className={`flex flex-col items-center gap-6 text-center ${
              variant === "compact"
                ? "w-full border-t border-nav-border pt-3"
                : ""
            }`}
          >
            <Eyebrow
              variant={variant === "compact" ? "plain" : "pill"}
              className={
                variant === "compact"
                  ? "text-brand-strong"
                  : "border-brand text-foreground"
              }
            >
              {heading.eyebrow}
            </Eyebrow>
            <Heading
              id={heading.id}
              className={variant === "compact" ? "text-[#3c4a5c]" : undefined}
            >
              {heading.title}
            </Heading>
          </div>
        ) : null}

        <div
          className={`grid w-full place-items-center ${
            variant === "compact" ? "gap-1" : "gap-12"
          }`}
        >
          {cards.map((card, index) => (
            <JourneyCard
              key={card.category}
              {...card}
              className={cnStickyPosition(index)}
              variant={variant}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function cnStickyPosition(index: number) {
  return `xl:sticky ${stickyCardPositions[index] ?? stickyCardPositions[0]}`;
}
