import Image from "next/image";
import { Crosshair, Headphones, Sparkles, Star, TrendingUp } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";
import { aboutImpactContent } from "../about.content";

const focusIcons = [Sparkles, Crosshair, TrendingUp, Headphones] as const;

export function AboutImpactSection() {
  const { eyebrow, title, description, focusAreas, feature, metrics } =
    aboutImpactContent;

  return (
    <section
      aria-labelledby="about-impact-title"
      className="grid w-full place-items-center bg-[#ffffff] px-5 py-[clamp(72px,7vw,100px)] text-white sm:px-8 min-[1700px]:px-0"
    >
      <Container className="flex min-w-0 flex-col gap-10">
        <div className="grid min-w-0 items-end gap-7 min-[1200px]:grid-cols-[minmax(0,1fr)_minmax(0,676px)]">
          <div className="flex min-w-0 flex-col items-start gap-6">
            <Eyebrow variant="plain" className="text-brand">
              {eyebrow}
            </Eyebrow>
            <Heading id="about-impact-title" className="leading-[1.2] text-white">
              {title}
            </Heading>
          </div>
          <Text className="max-w-[676px] text-white/75">{description}</Text>
        </div>

        <div className="grid min-w-0 gap-4 rounded-[20px] bg-[#f7f7f9] p-4 min-[1200px]:grid-cols-[412px_minmax(0,1fr)]">
          <div className="relative isolate flex min-h-[420px] min-w-0 flex-col justify-between gap-8 overflow-hidden rounded-[20px] bg-[#356d97] p-5 text-white">
            {feature.backgroundSrc ? (
              <Image
                src={feature.backgroundSrc}
                alt=""
                fill
                sizes="(min-width: 1200px) 412px, 100vw"
                className="object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                data-slot="about-impact-feature-background-placeholder"
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_78%,rgba(159,205,232,0.14),transparent_42%),radial-gradient(ellipse_at_28%_22%,rgba(159,205,232,0.1),transparent_45%),linear-gradient(135deg,#366e98,#32648e)]"
              />
            )}

            <div className="relative z-10 flex flex-wrap items-start gap-1.5">
              {focusAreas.map((area, index) => {
                const Icon = focusIcons[index];
                return (
                  <span
                    key={area}
                    className="inline-flex h-7 items-center gap-1 rounded-full bg-white px-4 py-0.5 font-sans text-sm font-normal leading-none tracking-[-0.03em] text-[#3a4a5c]"
                  >
                    <Icon aria-hidden="true" className="size-4 shrink-0" strokeWidth={1.4} />
                    {area}
                  </span>
                );
              })}
            </div>

            <div className="relative z-10 flex min-w-0 flex-col gap-2.5">
              <div aria-hidden="true" className="flex h-6 items-center gap-2.5">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} className="size-5 fill-white stroke-white" />
                ))}
              </div>
              <Text className="text-sm leading-5 tracking-[-0.03em] text-white/90">
                {feature.message}
              </Text>
              <div className="flex flex-col gap-1 border-t border-white/70 pt-3">
                <Text className="text-sm font-bold leading-none text-white">
                  {feature.name}
                </Text>
                <Text className="text-sm leading-none tracking-[-0.03em] text-white/85">
                  {feature.role}
                </Text>
              </div>
            </div>
          </div>

          <div className="grid min-w-0 gap-4 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div
                key={metric.id}
                className="flex min-h-[202px] min-w-0 flex-col justify-between gap-5 rounded-[20px] bg-white p-5 text-[#101315]"
              >
                {metric.value ? (
                  <Heading
                    as="h3"
                    className="text-[40px] leading-10 tracking-normal text-[#101315]"
                  >
                    {metric.value}
                  </Heading>
                ) : (
                  <div
                    aria-hidden="true"
                    data-slot={`about-impact-${metric.id}-value-placeholder`}
                    className={`h-10 rounded-md bg-surface-strong ${metric.placeholderWidth}`}
                  />
                )}
                <Text className="text-base leading-6 text-[#3a4a5c]">
                  {metric.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
