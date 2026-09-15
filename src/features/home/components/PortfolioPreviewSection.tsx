"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button/Button";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";
import { homePortfolioPreviewContent } from "../home.content";
import { PortfolioPreviewCard } from "./PortfolioPreviewCard";

export function PortfolioPreviewSection() {
  const { eyebrow, title, description, categories, projects, seeAll } =
    homePortfolioPreviewContent;
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const visibleProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) =>
          project.categories.some((category) => category === activeCategory),
        );

  return (
    <section
      aria-labelledby="home-portfolio-title"
      className="grid w-full place-items-center bg-background px-5 py-[clamp(72px,7vw,112px)] sm:px-8 min-[1700px]:px-0"
    >
      <Container className="flex min-w-0 flex-col items-center gap-10">
        <div className="flex w-full flex-col items-center gap-6 text-center">
          <Eyebrow className="border-brand/25 bg-brand-soft/70 text-brand-strong">
            {eyebrow}
          </Eyebrow>
          <Heading id="home-portfolio-title" variant="global">
            {title}
          </Heading>
          <Text variant="global" className="text-muted">
            {description}
          </Text>
          <div
            role="group"
            aria-label="Filter latest projects by category"
            className="flex min-h-[66px] w-full max-w-[696px] flex-wrap items-center justify-center gap-0 rounded-[24px] border border-nav-border bg-surface p-2.5 md:justify-between md:rounded-full"
          >
            {categories.map((category) => (
              <Button
                key={category.value}
                type="button"
                variant="dark"
                aria-pressed={activeCategory === category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`h-11 rounded-full px-4 font-sans text-base font-medium transition-colors ${
                  activeCategory === category.value
                    ? "bg-black text-white hover:bg-black"
                    : "bg-transparent text-[#1e2630] hover:bg-[#f1f2f4]"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {visibleProjects.length > 0 ? (
          <div
            aria-live="polite"
            className="grid w-full min-w-0 gap-5 md:grid-cols-2"
          >
            {visibleProjects.map((project) => (
              <PortfolioPreviewCard
                key={project.title}
                title={project.title}
                image={project.image}
                theme={project.theme}
              />
            ))}
          </div>
        ) : (
          <Text
            aria-live="polite"
            className="flex min-h-[375px] w-full items-center justify-center text-center text-muted"
          >
            No projects in this category yet.
          </Text>
        )}

        <Link
          href={seeAll.href}
          className="inline-flex min-h-11 items-center gap-3 px-4 font-sans text-base font-semibold text-foreground transition-colors hover:text-brand focus-visible:rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          {seeAll.label}
          <ArrowRight aria-hidden="true" className="size-5" strokeWidth={1.8} />
        </Link>
      </Container>
    </section>
  );
}
