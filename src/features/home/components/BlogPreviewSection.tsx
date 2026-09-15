"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { IconButton } from "@/components/ui/button/IconButton";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";
import { BlogCard } from "@/features/blog/components/BlogCard";
import { homeBlogPreviewContent } from "../home.content";

export function BlogPreviewSection() {
  const { eyebrow, title, description, articles } = homeBlogPreviewContent;
  const [firstArticleIndex, setFirstArticleIndex] = useState(0);
  const visibleArticles = [
    ...articles.slice(firstArticleIndex),
    ...articles.slice(0, firstArticleIndex),
  ];

  const selectPrevious = () => {
    setFirstArticleIndex((current) =>
      (current - 1 + articles.length) % articles.length,
    );
  };

  const selectNext = () => {
    setFirstArticleIndex((current) => (current + 1) % articles.length);
  };

  return (
    <section
      aria-labelledby="home-blog-preview-title"
      className="grid w-full place-items-center bg-background px-5 py-[clamp(72px,7vw,112px)] sm:px-8 min-[1800px]:px-0"
    >
      <Container className="flex min-w-0 max-w-[1621px] flex-col gap-12">
        <div className="flex w-full flex-col items-center gap-5 text-center">
          <Eyebrow className="border-brand/25 bg-brand-soft/70 text-brand-strong">
            {eyebrow}
          </Eyebrow>
          <Heading
            id="home-blog-preview-title"
            variant="global"
            className="max-w-[450px]"
          >
            {title}
          </Heading>
          <Text variant="global" className="text-muted">
            {description}
          </Text>
        </div>

        <div className="relative min-w-0">
          <div className="grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleArticles.map((article, index) => (
              <div
                key={article.title}
                className={
                  index === 0
                    ? "min-w-0"
                    : index === 1
                      ? "hidden min-w-0 md:block"
                      : "hidden min-w-0 xl:block"
                }
              >
                <BlogCard {...article} />
              </div>
            ))}
          </div>

          <div
            role="group"
            aria-label="Journal carousel controls"
            className="flex items-center justify-between pt-8 min-[1800px]:absolute min-[1800px]:inset-x-[-34px] min-[1800px]:top-[calc(351px/2)] min-[1800px]:p-0"
          >
            <IconButton
              aria-label="Show previous journal"
              onClick={selectPrevious}
              className="size-10 min-[1800px]:size-6"
            >
              <ArrowLeft aria-hidden="true" className="size-5 min-[1800px]:size-4" />
            </IconButton>
            <IconButton
              aria-label="Show next journal"
              onClick={selectNext}
              className="size-10 min-[1800px]:size-6"
            >
              <ArrowRight aria-hidden="true" className="size-5 min-[1800px]:size-4" />
            </IconButton>
          </div>
          <p className="sr-only" aria-live="polite">
            Showing journals starting with {articles[firstArticleIndex].title}
          </p>
        </div>
      </Container>
    </section>
  );
}
