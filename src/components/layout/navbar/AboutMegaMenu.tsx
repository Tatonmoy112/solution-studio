import Link from "next/link";
import Image from "next/image";
import {
  CalendarDays,
  Handshake,
  Image as ImageIcon,
  BriefcaseBusiness,
  UsersRound,
  UserRound,
} from "lucide-react";
import { aboutMenuBannerImageSrc, aboutNavigation } from "@/config/navigation";
import { MegaMenuFrame } from "./MegaMenuFrame";

const icons = {
  team: UsersRound,
  gallery: ImageIcon,
  clients: UserRound,
  events: CalendarDays,
  partnerships: Handshake,
  career: BriefcaseBusiness,
} as const;

type AboutMegaMenuProps = { onNavigate: () => void };

export function AboutMegaMenu({ onNavigate }: AboutMegaMenuProps) {
  return (
    <MegaMenuFrame
      menu="about"
      eyebrow="Get to know us"
      title="The team and story behind Solution Studio"
      description="People, partners and the culture that powers the work - explore who we are."
      onNavigate={onNavigate}
    >
      <div className="flex min-w-0 flex-col gap-8 p-[31px]">
        <div
          data-slot="about-menu-banner-image"
          className="relative flex min-h-[150px] flex-col justify-start overflow-hidden rounded-[20px] bg-[linear-gradient(25deg,#607d91,#a5b3b9)] p-5 text-white"
        >
          {aboutMenuBannerImageSrc ? (
            <Image src={aboutMenuBannerImageSrc} alt="" fill sizes="(min-width: 1536px) 1156px, 100vw" className="object-cover" />
          ) : null}
          <span aria-hidden="true" className="absolute inset-0 bg-[#26313c]/75" />
          <span className="relative w-fit rounded-[10px] bg-white/75 px-2.5 py-1.5 font-mono text-sm font-bold uppercase leading-[1.2] text-[#26313c]">
            Inside the agency
          </span>
          <h3 className="relative pt-4 font-display text-[21px] font-bold leading-[1.5]">
            A team built around your goals.
          </h3>
          <p className="relative pt-1 font-sans text-base leading-6 text-white/85">
            Strategists, designers &amp; engineers - meet the people.
          </p>
        </div>
        <div className="grid h-[130px] min-w-0 shrink-0 grid-flow-col grid-cols-3 grid-rows-2 gap-x-5 gap-y-6 2xl:grid-cols-[repeat(3,262px)] 2xl:justify-between">
          {aboutNavigation.map((item) => {
            const Icon = icons[item.icon];
            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={onNavigate}
                className="flex min-w-0 items-center gap-5 rounded-[10px] border border-transparent transition-colors hover:border-nav-border hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-[#c5e0f2] text-[#123f61]">
                  <Icon aria-hidden="true" className="size-4" strokeWidth={1.5} />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="font-sans text-base font-bold leading-6 text-foreground">
                    {item.title}
                  </span>
                  <span className="whitespace-nowrap font-sans text-base leading-6 text-muted">
                    {item.description}
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </MegaMenuFrame>
  );
}
