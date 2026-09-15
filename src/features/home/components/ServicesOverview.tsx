import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { Heading } from "@/components/ui/typography/Heading";
import { homeJourneyContent } from "../home.content";
import { JourneyCard } from "./JourneyCard";

const stickyCardPositions = [
  "xl:top-24 xl:z-10",
  "xl:top-[120px] xl:z-20",
  "xl:top-36 xl:z-30",
] as const;

export function ServicesOverview() {
  const { eyebrow, title, cards } = homeJourneyContent;

  return (
    <section
      aria-labelledby="home-journey-title"
      className="grid w-full place-items-center bg-[#f8fafc] px-5 py-[clamp(72px,8vw,120px)] sm:px-8 min-[1700px]:px-0"
    >
      <Container className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <Eyebrow className="border-brand text-foreground">
            {eyebrow}
          </Eyebrow>
          <Heading id="home-journey-title">{title}</Heading>
        </div>

        <div className="grid w-full place-items-center gap-12">
          {cards.map((card, index) => (
            <JourneyCard
              key={card.category}
              {...card}
              className={cnStickyPosition(index)}
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
