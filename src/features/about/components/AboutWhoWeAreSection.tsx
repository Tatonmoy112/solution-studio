import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";
import { aboutWhoWeAreContent } from "../about.content";

export function AboutWhoWeAreSection() {
  const { eyebrow, title, detailTitle, description, images } =
    aboutWhoWeAreContent;

  return (
    <section
      aria-labelledby="about-who-we-are-title"
      className="grid w-full place-items-center bg-[#fbfbfd] px-5 py-[clamp(64px,7vw,100px)] sm:px-8 min-[1700px]:px-0"
    >
      <Container className="flex min-w-0 flex-col gap-12">
        <div className="grid min-w-0 gap-8 lg:grid-cols-2 lg:gap-5">
          <div className="flex min-w-0 flex-col items-start gap-6">
            <Eyebrow variant="plain" className="text-brand-strong">
              {eyebrow}
            </Eyebrow>
            <Heading
              id="about-who-we-are-title"
              className="leading-[1.2] text-[#3c4a5c]"
            >
              {title}
            </Heading>
          </div>

          <div className="flex min-w-0 flex-col gap-5">
            <Heading
              as="h3"
              className="text-[clamp(1.25rem,2vw,1.5rem)] leading-8 text-[#3c4a5c]"
            >
              {detailTitle}
            </Heading>
            <Text className="text-muted">{description}</Text>
          </div>
        </div>

        <ul
          aria-label="Solution Studio people and workspace"
          aria-hidden={images.every((image) => !image.src)}
          className="grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {images.map((image) => (
            <li
              key={image.id}
              aria-hidden={!image.src}
              className="relative aspect-[527/350] min-w-0 overflow-hidden rounded-[20px] bg-surface-strong"
            >
              {image.src ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  data-slot={`about-who-we-are-${image.id}-placeholder`}
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
