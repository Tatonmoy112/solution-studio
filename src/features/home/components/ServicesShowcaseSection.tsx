"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { IconButton } from "@/components/ui/button/IconButton";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";
import { homeServicesContent } from "../home.content";
import { ServiceCapabilityCard } from "./ServiceCapabilityCard";

export function ServicesShowcaseSection() {
  const { eyebrow, title, description, cards } = homeServicesContent;
  const [activeIndex, setActiveIndex] = useState(0);

  const selectPrevious = () => {
    setActiveIndex((current) => (current - 1 + cards.length) % cards.length);
  };

  const selectNext = () => {
    setActiveIndex((current) => (current + 1) % cards.length);
  };

  return (
    <section
      aria-labelledby="home-services-title"
      className="grid w-full place-items-center bg-background px-5 py-[100px] sm:px-8 min-[1700px]:px-0"
    >
      <Container className="grid items-start gap-14 xl:grid-cols-[528px_1036px]">
        <div className="flex min-h-[430px] w-full max-w-[528px] flex-col justify-between gap-8">
          <div className="flex flex-col items-start gap-8">
            <Eyebrow className="border-brand/25 bg-brand-soft/70 text-brand-strong">
              {eyebrow}
            </Eyebrow>
            <Heading id="home-services-title">{title}</Heading>
            <Text className="text-muted">{description}</Text>
          </div>

          <div
            role="group"
            className="flex items-center gap-4"
            aria-label="Service card controls"
          >
            <IconButton aria-label="Show previous service" onClick={selectPrevious}>
              <ArrowLeft aria-hidden="true" className="size-4" />
            </IconButton>
            <IconButton aria-label="Show next service" onClick={selectNext}>
              <ArrowRight aria-hidden="true" className="size-4" />
            </IconButton>
          </div>
          <p className="sr-only" aria-live="polite">
            {cards[activeIndex].title} selected
          </p>
        </div>

        <div
          className="grid w-full max-w-[1036px] gap-5 rounded-[20px] ring-1 ring-inset ring-nav-border xl:h-[437px] xl:grid-cols-3"
          onMouseLeave={() => setActiveIndex(0)}
        >
          {cards.map((card, index) => (
            <ServiceCapabilityCard
              key={card.title}
              {...card}
              active={activeIndex === index}
              onActivate={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
