import Image from "next/image";
import { Heading } from "@/components/ui/typography/Heading";

type PageBannerProps = {
  title: string;
  backgroundSrc?: string | null;
  headingId?: string;
};

export function PageBanner({
  title,
  backgroundSrc,
  headingId = "page-banner-title",
}: PageBannerProps) {
  return (
    <div className="w-full px-4 sm:px-6">
      <section
        aria-labelledby={headingId}
        className="relative isolate grid h-[400px] w-full place-items-center overflow-hidden rounded-[20px] bg-[#090908] p-[10px] text-white"
      >
        {backgroundSrc ? (
          <Image
            src={backgroundSrc}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        ) : null}
        <Heading
          as="h1"
          id={headingId}
          className="relative z-10 flex min-h-[65px] max-w-full items-center text-center text-[clamp(2.25rem,4vw,3rem)] leading-none tracking-normal text-white"
        >
          {title}
        </Heading>
      </section>
    </div>
  );
}
