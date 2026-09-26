import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";
import { aboutIntroductionContent } from "../about.content";

const imageLayouts = [
  "aspect-[315/380] min-[1700px]:left-[155px] min-[1700px]:top-[290px] min-[1700px]:h-[380px] min-[1700px]:w-[315px]",
  "aspect-[310/281] min-[1700px]:left-[497px] min-[1700px]:top-[280px] min-[1700px]:h-[281px] min-[1700px]:w-[310px]",
  "aspect-[331/461] min-[1700px]:left-[832px] min-[1700px]:top-[100px] min-[1700px]:h-[461px] min-[1700px]:w-[331px]",
  "aspect-[282/336] min-[1700px]:left-[1189px] min-[1700px]:top-[225px] min-[1700px]:h-[336px] min-[1700px]:w-[282px]",
  "aspect-[418/280] min-[1700px]:left-[497px] min-[1700px]:top-[586px] min-[1700px]:h-[280px] min-[1700px]:w-[418px]",
  "aspect-[313/225] min-[1700px]:left-[940px] min-[1700px]:top-[586px] min-[1700px]:h-[225px] min-[1700px]:w-[313px]",
] as const;

export function AboutIntroductionSection() {
  const { eyebrow, titleLines, description, images } =
    aboutIntroductionContent;

  return (
    <section
      aria-labelledby="about-introduction-title"
      className="grid w-full place-items-center bg-background px-5 py-[clamp(64px,7vw,100px)] sm:px-8 min-[1700px]:px-0"
    >
      <Container className="relative flex min-w-0 flex-col gap-10 border-t border-nav-border pt-9 min-[1700px]:min-h-[875px]">
        <div className="relative z-10 flex max-w-[810px] flex-col items-start gap-6">
          <Eyebrow variant="plain" className="text-brand-strong">
            {eyebrow}
          </Eyebrow>
          <Heading
            id="about-introduction-title"
            className="max-w-[810px] leading-[1.25] text-[#3c4a5c]"
          >
            {titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </Heading>
          <Text className="max-w-[810px] text-muted">{description}</Text>
        </div>

        <ul
          aria-label="Solution Studio team gallery"
          aria-hidden={images.every((image) => !image.src)}
          className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 min-[1700px]:absolute min-[1700px]:inset-0 min-[1700px]:block"
        >
          {images.map((image, index) => (
            <li
              key={image.id}
              aria-hidden={!image.src}
              className={`relative min-w-0 overflow-hidden bg-surface-strong min-[1700px]:absolute min-[1700px]:aspect-auto ${imageLayouts[index]}`}
            >
              {image.src ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1700px) 420px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  data-slot={`about-introduction-${image.id}-placeholder`}
                  className="absolute inset-0 bg-[radial-gradient(circle_at_30%_24%,rgba(255,255,255,0.8),transparent_48%),linear-gradient(145deg,#e8edf2,#d6e1e9)]"
                />
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
