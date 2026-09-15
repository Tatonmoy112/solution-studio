import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";
import { homeWhoWeAreContent } from "../home.content";
import { ValueCard } from "./ValueCard";
import { WhoWeAreMedia } from "./WhoWeAreMedia";

export function WhoWeAreSection() {
  const { eyebrow, title, description, values, media } = homeWhoWeAreContent;

  return (
    <section
      aria-labelledby="who-we-are-title"
      className="grid w-full place-items-center overflow-hidden bg-white bg-[radial-gradient(circle,rgba(16,34,56,0.16)_1px,transparent_1px)] bg-[size:23px_23px] px-5 py-[clamp(72px,8vw,100px)] sm:px-8 min-[1700px]:px-0"
    >
      <Container className="grid items-center justify-between gap-12 xl:grid-cols-[minmax(0,800px)_minmax(480px,663px)]">
        <div className="flex min-w-0 flex-col gap-7">
          <div className="flex max-w-[800px] flex-col items-start gap-6">
            <Eyebrow className="border-brand/25 bg-brand-soft/70 text-brand-strong">
              {eyebrow}
            </Eyebrow>
            <Heading id="who-we-are-title" className="max-w-[700px] text-foreground">
              {title}
            </Heading>
            <Text className="max-w-[800px] text-muted">{description}</Text>
          </div>

          <div className="grid w-full gap-5 md:grid-cols-2">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>

        <WhoWeAreMedia {...media} />
      </Container>
    </section>
  );
}
