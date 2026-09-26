import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button/Button";
import { Heading } from "@/components/ui/typography/Heading";
import { aboutGrowthBannerContent } from "../about.content";

export function AboutGrowthBannerSection() {
  const { titleLines, backgroundSrc, cta } = aboutGrowthBannerContent;

  return (
    <section
      aria-labelledby="about-growth-banner-title"
      className="grid w-full place-items-center bg-background px-5 py-[clamp(64px,7vw,100px)] sm:px-8 min-[1700px]:px-0"
    >
      <Container className="relative isolate flex min-h-[360px] max-w-[1615px] items-start overflow-hidden rounded-[20px] bg-[#0a0d15] px-8 py-16 sm:min-h-[420px] lg:px-[67px] lg:pb-[135px] lg:pt-[90px]">
        {backgroundSrc ? (
          <Image
            src={backgroundSrc}
            alt=""
            fill
            sizes="(min-width: 1700px) 1615px, 100vw"
            className="absolute inset-0 z-0 object-cover object-center"
          />
        ) : (
          <div
            aria-hidden="true"
            data-slot="about-growth-banner-background-placeholder"
            className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_63%_95%,rgba(220,103,17,0.35),transparent_37%),radial-gradient(circle_at_65%_45%,rgba(228,98,15,0.18),transparent_20%),linear-gradient(125deg,#090c13_0%,#15151c_55%,#070b12_100%)]"
          />
        )}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.28),transparent_58%)]"
        />

        <div className="relative z-10 flex w-full max-w-[459px] flex-col items-start gap-6">
          <Heading
            id="about-growth-banner-title"
            variant="feature"
            className="text-[clamp(1.75rem,4vw,2rem)] leading-[1.33] tracking-normal uppercase text-white"
          >
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </Heading>
          <Button
            href={cta.href}
            variant="primary"
            className="w-[233px] bg-[#e68d2e] font-bold hover:bg-[#c57220] focus-visible:outline-[#e68d2e]"
            endIcon={<ArrowRight className="size-4" strokeWidth={1.8} />}
          >
            {cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
