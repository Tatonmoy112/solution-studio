import Image from "next/image";
import { Bot, BrainCircuit, Orbit, Sparkles, Star } from "lucide-react";

type AiBadge = {
  name: string;
  icon: "bot" | "sparkles" | "brain" | "star" | "orbit";
  href: string | null;
};

type Membership = {
  name: string;
  src: string | null;
};

type FooterAffiliationsProps = {
  aiBadges: readonly AiBadge[];
  memberships: readonly Membership[];
};

const icons = {
  bot: Bot,
  sparkles: Sparkles,
  brain: BrainCircuit,
  star: Star,
  orbit: Orbit,
} as const;

export function FooterAffiliations({
  aiBadges,
  memberships,
}: FooterAffiliationsProps) {
  return (
    <div className="flex min-w-0 flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h3 className="font-sans text-lg font-semibold leading-[22px] text-white/90">
          Explore AI Summary
        </h3>
        <div aria-label="AI summary services" className="flex flex-wrap gap-2.5">
          {aiBadges.map((badge) => {
            const Icon = icons[badge.icon];
            const className =
              "grid size-10 place-items-center rounded-[10px] border border-white/15 bg-white/5 text-white/80";

            return badge.href ? (
              <a
                key={badge.name}
                href={badge.href}
                aria-label={badge.name}
                className={`${className} transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
              >
                <Icon aria-hidden="true" className="size-5" />
              </a>
            ) : (
              <span
                key={badge.name}
                title={`${badge.name} link coming soon`}
                data-slot="footer-ai-badge-placeholder"
                className={className}
              >
                <Icon aria-hidden="true" className="size-5" />
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-sans text-lg font-semibold leading-[22px] text-white/90">
          Proud Member
        </h3>
        <div className="flex max-w-[273px] flex-wrap items-center gap-4">
          {memberships.map((member) => (
            <div
              key={member.name}
              className="relative grid h-[46px] min-w-[70px] max-w-[129px] flex-1 place-items-center overflow-hidden"
            >
              {member.src ? (
                <Image
                  src={member.src}
                  alt={`${member.name} logo`}
                  fill
                  sizes="129px"
                  className="object-contain"
                />
              ) : (
                <span
                  data-slot="footer-membership-logo-placeholder"
                  className="px-1 text-center font-sans text-xs font-bold leading-3 text-white/75"
                >
                  {member.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
