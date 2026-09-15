import Image from "next/image";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";

type BlogCardProps = {
  title: string;
  category: string;
  publishedAt: string;
  dateLabel: string;
  image: { src: string | null; alt: string };
  theme: "charcoal" | "warm" | "slate";
};

const placeholderThemes = {
  charcoal:
    "bg-[radial-gradient(circle_at_35%_45%,#575758_0%,#292b2e_38%,#17191c_100%)]",
  warm: "bg-[radial-gradient(circle_at_65%_35%,#a58f80_0%,#665d58_45%,#2c3032_100%)]",
  slate:
    "bg-[radial-gradient(circle_at_50%_30%,#929596_0%,#53585a_45%,#22282a_100%)]",
} as const;

export function BlogCard({
  title,
  category,
  publishedAt,
  dateLabel,
  image,
  theme,
}: BlogCardProps) {
  return (
    <article className="flex min-w-0 flex-col gap-6 min-[1800px]:min-h-[474px]">
      <div
        className={`relative aspect-[527/351] w-full overflow-hidden rounded-[20px] ${placeholderThemes[theme]}`}
      >
        {image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1700px) 527px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <span
            data-slot="blog-preview-image-placeholder"
            className="absolute inset-0 grid place-items-center px-6 text-center font-sans text-sm font-medium text-white/70"
          >
            Journal image coming soon
          </span>
        )}
      </div>

      <div className="flex w-full max-w-[467px] min-w-0 flex-col gap-4 min-[1800px]:min-h-[99px]">
        <div className="flex min-h-[19px] w-full items-center gap-7 text-muted">
          <Text as="span" className="text-sm leading-none tracking-[-0.03em]">
            {category}
          </Text>
          <span aria-hidden="true" className="text-sm leading-none">
            |
          </span>
          <time
            dateTime={publishedAt}
            className="font-sans text-sm leading-none tracking-[-0.03em]"
          >
            {dateLabel}
          </time>
        </div>
        <Heading
          as="h3"
          variant="global"
          className="max-w-[410px] text-2xl leading-9 tracking-normal min-[1800px]:min-h-[64px]"
        >
          {title}
        </Heading>
      </div>
    </article>
  );
}
