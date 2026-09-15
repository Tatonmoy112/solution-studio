import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/typography/Eyebrow";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";
import { homeTrustedPartnersContent } from "../home.content";
import { PartnerLogoTile } from "./PartnerLogoTile";

export function TrustedPartnersSection() {
  const { eyebrow, title, description, partners } = homeTrustedPartnersContent;
  const repeatedPartners = Array.from({ length: 3 }, () => partners).flat();
  const groupWidth = repeatedPartners.length * 200;

  return (
    <section
      aria-labelledby="home-trusted-partners-title"
      className="grid w-full place-items-center overflow-hidden bg-[#071827] bg-[radial-gradient(circle_at_15%_100%,rgba(76,46,31,0.45),transparent_35%),radial-gradient(circle_at_98%_0%,rgba(8,51,93,0.7),transparent_55%),linear-gradient(115deg,#0d111b_0%,#071827_100%)] px-5 py-[72px] sm:px-8 min-[1700px]:px-0"
    >
      <Container className="flex min-w-0 flex-col items-center gap-12">
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <Eyebrow className="border-[#f7931e]/40 bg-white/5 text-[#f7931e]">
            {eyebrow}
          </Eyebrow>
          <Heading
            id="home-trusted-partners-title"
            variant="global"
            className="max-w-[700px] text-white"
          >
            {title}
          </Heading>
          <Text variant="global" className="max-w-[700px] text-white/70">
            {description}
          </Text>
        </div>

        <div
          role="region"
          aria-label="Technology partner logos"
          className="w-full overflow-hidden sm:px-[35px]"
        >
          <div className="flex w-max animate-[horizontal-marquee_30s_linear_infinite] will-change-transform hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:transform-none">
            {[0, 1].map((groupIndex) => (
              <ul
                key={groupIndex}
                aria-hidden={groupIndex === 1 ? "true" : undefined}
                className="flex h-[125px] shrink-0 items-center gap-[50px] pr-[50px]"
                style={{ width: `${groupWidth}px` }}
              >
                {repeatedPartners.map((partner, index) => (
                  <li
                    key={`${groupIndex}-${index}-${partner.name}`}
                    aria-hidden={groupIndex === 1 || index >= partners.length ? "true" : undefined}
                    className="shrink-0"
                  >
                    <PartnerLogoTile {...partner} />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
