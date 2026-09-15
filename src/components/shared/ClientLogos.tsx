import Image from "next/image";

type ClientLogo = {
  name: string;
  src: string | null;
  width: number;
};

type ClientLogosProps = {
  logos: readonly ClientLogo[];
};

export function ClientLogos({ logos }: ClientLogosProps) {
  return (
    <div
      role="region"
      aria-label="Trusted client logos"
      className="w-full max-w-[1216px] overflow-hidden"
    >
      <div className="flex w-max animate-[horizontal-marquee_28s_linear_infinite] will-change-transform hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:transform-none">
        {[0, 1].map((groupIndex) => (
          <div
            key={groupIndex}
            aria-hidden={groupIndex === 1 ? "true" : undefined}
            className="flex h-[46px] w-[1216px] shrink-0 items-center justify-around gap-2.5"
          >
            {logos.map((logo) => (
              <div
                key={`${groupIndex}-${logo.name}`}
                className="grid h-[46px] shrink-0 place-items-center"
                style={{ width: `${logo.width}px` }}
              >
                {logo.src ? (
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    width={logo.width}
                    height={46}
                    sizes={`${logo.width}px`}
                    className="h-[46px] w-auto object-contain grayscale"
                  />
                ) : (
                  <span className="font-display text-lg font-bold leading-none tracking-[-0.03em] text-foreground/55 grayscale">
                    {logo.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
