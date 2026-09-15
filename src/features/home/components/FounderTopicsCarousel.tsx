import { homeFounderTopicsContent } from "../home.content";

export function FounderTopicsCarousel() {
  const { ariaLabel, items } = homeFounderTopicsContent;

  return (
    <section
      aria-label={ariaLabel}
      className="h-20 w-full overflow-hidden border-y border-[#33415a] bg-[#101a31]"
    >
      <div className="flex w-max animate-[horizontal-marquee_32s_linear_infinite] will-change-transform hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:transform-none">
        {[0, 1].map((groupIndex) => (
          <ul
            key={groupIndex}
            aria-hidden={groupIndex === 1 ? "true" : undefined}
            className="flex h-20 w-[1922px] shrink-0 items-center justify-between px-[68px]"
          >
            {items.map((item, itemIndex) => (
              <li
                key={`${groupIndex}-${itemIndex}-${item.label}`}
                className={`flex h-[33px] shrink-0 items-center whitespace-nowrap font-sans text-2xl font-semibold leading-none tracking-normal ${
                  item.accent ? "text-[#f7931e]" : "text-[#f8fafc]"
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
