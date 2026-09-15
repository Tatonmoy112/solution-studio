import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button/Button";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";
import { homeHeroContent } from "../home.content";
import { HeroBackground } from "./HeroBackground";
import { HeroGateway } from "./HeroGateway";

export function HeroSection() {
  const { title, description, cta } = homeHeroContent;

  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative isolate grid min-h-[calc(100svh-88px)] w-full place-items-center overflow-hidden bg-[#020914] text-white"
    >
      <HeroBackground />

      <Container className="relative z-10 grid min-h-[calc(100svh-88px)] items-end px-5 py-[clamp(64px,12vh,120px)] sm:px-8 min-[1700px]:px-0">
        <div className="flex w-full max-w-[960px] flex-col gap-6">
          <Heading
            as="h1"
            variant="hero"
            id="home-hero-title"
            className="max-w-[835px] text-white"
          >
            <span className="flex flex-wrap items-center gap-x-[14px] gap-y-4">
              <span>{title.firstLine}</span>
              <HeroGateway word={title.gateway} />
            </span>
            <span className="block">
              {title.secondLine}{" "}
              <em className="font-accent font-normal">{title.accent}</em>
            </span>
          </Heading>

          <div aria-hidden="true" className="h-px w-full bg-white/35" />

          <div className="flex flex-col items-start gap-5">
            <Text variant="hero" className="max-w-[689px] text-white/85">
              {description}
            </Text>
            <Button
              href={cta.href}
              variant="inverse"
              className="min-w-[169px]"
              endIcon={<ArrowRight className="size-[18px]" strokeWidth={1.8} />}
            >
              {cta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
