import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Layers3,
  UsersRound,
} from "lucide-react";
import { aboutNavigation } from "@/config/navigation";

const icons = {
  company: Building2,
  team: UsersRound,
  services: Layers3,
  careers: BriefcaseBusiness,
} as const;

type AboutMegaMenuProps = {
  onNavigate: () => void;
};

export function AboutMegaMenu({ onNavigate }: AboutMegaMenuProps) {
  return (
    <div
      id="about-mega-menu"
      className="absolute inset-x-0 top-full z-50 hidden pt-[41px] xl:block"
    >
      <div className="grid min-h-[380px] grid-cols-[400px_1fr] overflow-hidden rounded-[20px] border border-nav-border bg-background shadow-[0_24px_70px_rgba(16,34,56,0.14)]">
        <div className="flex flex-col justify-between gap-8 bg-surface p-8">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-sm font-bold uppercase leading-[1.2] text-brand">
              About Solution Studio
            </span>
            <h2 className="max-w-[339px] font-display text-[27px] font-bold leading-[1.35] text-foreground">
              Thoughtful digital products, built for real growth.
            </h2>
            <p className="max-w-[336px] text-base leading-6 text-muted">
              We combine product thinking, design, and engineering to turn
              ambitious ideas into useful experiences.
            </p>
          </div>

          <Link
            href="/about"
            onClick={onNavigate}
            className="inline-flex h-[42px] w-full items-center justify-between gap-2 rounded-[10px] bg-foreground px-4 text-base font-bold leading-none text-white transition-colors hover:bg-brand-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <span>Discover our company</span>
            <ArrowUpRight aria-hidden="true" className="size-5" />
          </Link>
        </div>

        <div className="flex min-w-0 flex-col gap-8 p-8">
          <div className="relative min-h-[150px] overflow-hidden rounded-[20px] bg-[linear-gradient(110deg,#071726_0%,#0d3151_58%,#006fba_100%)] p-5 text-white">
            <div className="relative z-10 flex max-w-[560px] flex-col items-start gap-2">
              <span className="rounded-[10px] bg-white/10 px-[10px] py-1.5 font-mono text-sm font-bold uppercase leading-[1.2] backdrop-blur-sm">
                Design. Build. Improve.
              </span>
              <h3 className="font-display text-[21px] font-bold leading-[1.5]">
                Engineering ideas into useful products
              </h3>
              <p className="text-base leading-6 text-white/75">
                One collaborative team from first concept to continuous growth.
              </p>
            </div>
            <Image
              src="/images/brand/ss favicon.png"
              alt=""
              width={231}
              height={241}
              aria-hidden="true"
              className="absolute right-8 top-1/2 h-[124px] w-[119px] -translate-y-1/2 object-contain opacity-40"
            />
          </div>

          <div className="grid flex-1 grid-cols-4 gap-5">
            {aboutNavigation.map((item) => {
              const Icon = icons[item.icon];

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  className="flex min-w-0 flex-col gap-3 rounded-[10px] border border-transparent p-3 transition-colors hover:border-nav-border hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <span className="grid size-10 place-items-center rounded-[10px] bg-brand-soft text-brand">
                    <Icon aria-hidden="true" className="size-4" />
                  </span>
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="text-base font-bold leading-6 text-foreground">
                      {item.title}
                    </span>
                    <span className="text-sm leading-5 text-muted">
                      {item.description}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
