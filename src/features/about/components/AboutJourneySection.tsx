import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";
import { aboutJourneyContent } from "../about.content";

export function AboutJourneySection() {
  const { eyebrow, title, years, milestone } = aboutJourneyContent;

  return (
    <section
      aria-labelledby="about-journey-title"
      className="grid w-full place-items-center bg-background px-5 py-[clamp(64px,7vw,100px)] sm:px-8 min-[1700px]:px-0"
    >
      <Container className="flex min-w-0 flex-col gap-12 xl:gap-20">
        <div className="flex min-w-0 flex-col gap-[31px]">
          <div className="flex min-w-0 flex-col items-start gap-6">
            <Eyebrow variant="plain" className="text-brand-strong">
              {eyebrow}
            </Eyebrow>
            <Heading
              id="about-journey-title"
              className="leading-[1.2] text-[#3c4a5c]"
            >
              {title}
            </Heading>
          </div>

          <div className="min-w-0">
            <div aria-hidden="true" className="h-1 w-full bg-nav-border">
              <div className="h-full w-1/5 bg-[#f79435]" />
            </div>
            <ol className="grid grid-cols-5 pt-3 font-sans text-[clamp(0.75rem,1.2vw,1.125rem)] leading-6 text-foreground">
              {years.map((year) => (
                <li key={year}>{year}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="grid min-w-0 gap-10 xl:grid-cols-2 xl:gap-14 min-[1700px]:grid-cols-[800px_764px]">
          <div className="flex min-w-0 flex-col justify-end gap-4">
            <span className="font-display text-[clamp(3.25rem,6vw,4.5rem)] font-bold leading-[70px] tracking-[-0.03em] text-[#c9cacc]">
              {milestone.year}
            </span>
            <Heading
              as="h3"
              className="text-2xl leading-10 text-[#3c4a5c]"
            >
              {milestone.title}
            </Heading>
            <Text className="max-w-[700px] text-justify text-muted">
              {milestone.description}
            </Text>
          </div>

          <div className="relative aspect-[764/350] min-w-0 overflow-hidden rounded-[20px] bg-surface-strong">
            {milestone.image.src ? (
              <Image
                src={milestone.image.src}
                alt={milestone.image.alt}
                fill
                sizes="(min-width: 1700px) 764px, (min-width: 1280px) 50vw, 100vw"
                className="object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                data-slot="about-journey-image-placeholder"
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_24%,rgba(255,255,255,0.8),transparent_48%),linear-gradient(145deg,#e8edf2,#d6e1e9)]"
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
