"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { IconButton } from "@/components/ui/button/IconButton";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";
import { aboutAchievementsContent } from "../about.content";

type Award = (typeof aboutAchievementsContent.awards)[number];

function AchievementCard({ award }: { award: Award }) {
  const viewLabel = (
    <>
      View <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.8} />
    </>
  );

  return (
    <article className="flex min-h-[430px] min-w-0 flex-col justify-between gap-8 rounded-[20px] border border-[#e7e3df] bg-white p-6 text-[#3c4a5c]">
      <div className="flex flex-col gap-6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 flex-col gap-4 uppercase">
            <Text className="text-base font-medium leading-none tracking-[-0.03em]">
              {award.organization}
            </Text>
            <Text className="text-sm leading-none tracking-[-0.03em]">
              {award.yearLabel}
            </Text>
          </div>
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#c67d31] font-mono text-base leading-none tracking-[-0.03em] text-[#a95e1d]">
            {award.number}
          </span>
        </div>

        <span className="inline-flex h-[29px] w-fit items-center gap-2 rounded-xl border border-[#c67d31] px-3 font-sans text-sm leading-none tracking-[-0.03em] uppercase text-[#a95e1d]">
          <span aria-hidden="true" className="size-[3px] rounded-full bg-current" />
          {award.yearLabel}
        </span>
      </div>

      <div className="flex min-w-0 flex-col gap-2.5">
        <Heading
          as="h3"
          variant="serviceCard"
          className="max-w-[310px] text-2xl leading-8 tracking-[-0.03em]"
        >
          {award.category}
        </Heading>
        <div aria-hidden="true" className="h-px w-full bg-[#e0e2e4]" />
        <div className="flex items-center justify-between gap-3">
          <Text className="text-sm leading-none tracking-[-0.03em] uppercase">
            {award.country}
          </Text>
          {award.href ? (
            <a
              href={award.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-mono text-sm leading-none uppercase text-[#a95e1d] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {viewLabel}
            </a>
          ) : (
            <span
              aria-hidden="true"
              className="inline-flex items-center gap-1 font-mono text-sm leading-none uppercase text-[#a95e1d]"
            >
              {viewLabel}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export function AboutAchievementsSection() {
  const { eyebrow, title, titleAccent, description, backgroundSrc, summary, awards } =
    aboutAchievementsContent;
  const [firstAwardIndex, setFirstAwardIndex] = useState(0);
  const visibleAwards = [
    ...awards.slice(firstAwardIndex),
    ...awards.slice(0, firstAwardIndex),
  ];

  const selectPrevious = () => {
    setFirstAwardIndex((current) => (current - 1 + awards.length) % awards.length);
  };

  const selectNext = () => {
    setFirstAwardIndex((current) => (current + 1) % awards.length);
  };

  return (
    <section
      aria-labelledby="about-achievements-title"
      className="relative isolate grid w-full place-items-center overflow-hidden px-5 py-[clamp(72px,7vw,108px)] sm:px-8 min-[1700px]:px-0"
    >
      {backgroundSrc ? (
        <Image
          src={backgroundSrc}
          alt=""
          fill
          sizes="100vw"
          className="absolute inset-0 z-0 object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          data-slot="about-achievements-background-placeholder"
          className="absolute inset-0 z-0 bg-[repeating-linear-gradient(90deg,transparent_0_116px,rgba(58,74,92,0.08)_117px,transparent_118px),radial-gradient(ellipse_at_50%_35%,#fff9f4_0%,#fff_75%)]"
        />
      )}
      <Container className="relative z-10 flex min-w-0 flex-col gap-10">
        <div className="grid min-w-0 items-end gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)]">
          <div className="flex min-w-0 flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <Eyebrow variant="plain" className="text-brand-strong">
              {eyebrow}
            </Eyebrow>
            <Heading id="about-achievements-title" className="leading-[1.2] text-[#3c4a5c]">
              {title} <span className="text-[#d48229]">{titleAccent}</span>
            </Heading>
          </div>
          <Text className="text-center text-muted lg:justify-self-end lg:text-left">
            {description}
          </Text>
        </div>

        <div className="grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex min-h-[430px] min-w-0 flex-col justify-between gap-8 rounded-[20px] bg-[#050505] p-6 text-white">
            <Eyebrow variant="plain" className="text-white tracking-[-0.03em]">
              {summary.eyebrow}
            </Eyebrow>
            <Heading
              as="h3"
              variant="feature"
              className="max-w-[240px] text-4xl leading-10 text-[#eef4f9]"
            >
              {summary.title} <span className="block text-[#e9a241]">{summary.year}</span>
            </Heading>
            <Text className="font-mono text-sm leading-none tracking-[-0.03em] uppercase text-white">
              {summary.count}
            </Text>
          </div>

          {visibleAwards.map((award, index) => (
            <div
              key={award.id}
              className={
                index === 0
                  ? "min-w-0"
                  : index === 1
                    ? "hidden min-w-0 lg:block"
                    : "hidden min-w-0 xl:block"
              }
            >
              <AchievementCard award={award} />
            </div>
          ))}
        </div>

        <div
          role="group"
          aria-label="Achievement carousel controls"
          className="flex items-center justify-end gap-4"
        >
          <IconButton
            aria-label="Show previous achievement"
            onClick={selectPrevious}
            className="size-10 sm:size-6"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
          </IconButton>
          <IconButton
            aria-label="Show next achievement"
            onClick={selectNext}
            className="size-10 sm:size-6"
          >
            <ArrowRight aria-hidden="true" className="size-4" />
          </IconButton>
        </div>
        <p className="sr-only" aria-live="polite">
          Showing achievements starting with {awards[firstAwardIndex].category}
        </p>
      </Container>
    </section>
  );
}
