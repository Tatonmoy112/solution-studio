import Image from "next/image";
import { cn } from "@/lib/cn";

const placeholderThemes = {
  amber:
    "bg-[radial-gradient(circle_at_70%_20%,rgba(255,207,110,0.62),transparent_35%),linear-gradient(135deg,#76501a_0%,#362514_62%,#17120d_100%)]",
  charcoal:
    "bg-[radial-gradient(circle_at_68%_78%,rgba(62,152,115,0.35),transparent_40%),linear-gradient(135deg,#252b2a_0%,#101715_65%,#080c0b_100%)]",
  indigo:
    "bg-[radial-gradient(circle_at_65%_25%,rgba(92,139,234,0.5),transparent_38%),linear-gradient(135deg,#222c47_0%,#121a32_62%,#080d1e_100%)]",
  forest:
    "bg-[radial-gradient(circle_at_75%_25%,rgba(143,180,93,0.42),transparent_38%),linear-gradient(135deg,#3d4631_0%,#1d2d20_58%,#0d1610_100%)]",
} as const;

type PortfolioPreviewCardProps = {
  image: { src: string | null; alt: string };
  theme: keyof typeof placeholderThemes;
  title: string;
};

export function PortfolioPreviewCard({
  image,
  theme,
  title,
}: PortfolioPreviewCardProps) {
  return (
    <article
      aria-label={title}
      className="relative aspect-[32/15] w-full min-w-0 overflow-hidden rounded-[20px] bg-[#101820]"
    >
      {image.src ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1700px) 800px, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          data-slot="portfolio-preview-image-placeholder"
          className={cn("absolute inset-0 grid place-items-center", placeholderThemes[theme])}
        >
          <span className="rounded-full border border-white/30 bg-black/25 px-5 py-3 font-sans text-base font-semibold text-white/90 backdrop-blur-sm">
            {title}
          </span>
        </div>
      )}
    </article>
  );
}
