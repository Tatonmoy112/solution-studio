import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MegaMenuKey } from "@/config/navigation";
import { siteConfig } from "@/config/site";

type MegaMenuFrameProps = {
  menu: MegaMenuKey;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  onNavigate: () => void;
};

const panelMinHeight: Record<MegaMenuKey, string> = {
  about: "min-h-[min(380px,calc(100dvh-108px))]",
  services: "",
  product: "min-h-[min(315px,calc(100dvh-108px))]",
};

export function MegaMenuFrame({
  menu,
  eyebrow,
  title,
  description,
  children,
  onNavigate,
}: MegaMenuFrameProps) {
  return (
    <div
      id={`${menu}-mega-menu`}
      role="region"
      aria-label={`${menu} menu`}
      className="absolute inset-x-0 top-full z-50 hidden pt-[41px] xl:block"
    >
      <div
        className={`grid max-h-[calc(100dvh-108px)] grid-cols-[minmax(320px,400px)_minmax(0,1fr)] overflow-x-hidden overflow-y-auto rounded-[20px] border border-nav-border bg-[#f5faff] shadow-[0_24px_70px_rgba(16,34,56,0.18)] ${panelMinHeight[menu]}`}
      >
        <div className={`relative flex min-w-0 flex-col justify-between gap-8 bg-[radial-gradient(circle_at_80%_25%,rgba(255,166,61,0.30),transparent_29%),linear-gradient(125deg,#1165a0_0%,#005c9c_100%)] px-8 pt-8 text-white ${menu === "product" ? "pb-6" : "pb-8"}`}>
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-sm font-bold uppercase leading-[1.2]">
              {eyebrow}
            </span>
            <h2 className="max-w-[339px] font-display text-[27px] font-bold leading-[1.35]">
              {title}
            </h2>
            <p className="max-w-[339px] font-sans text-base leading-6 text-white/85">
              {description}
            </p>
          </div>
          <Link
            href={siteConfig.contactHref}
            onClick={onNavigate}
            className="inline-flex h-[42px] w-full shrink-0 items-center justify-center gap-2.5 rounded-[10px] bg-white px-4 font-sans text-base font-bold leading-none text-foreground transition-colors hover:bg-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get a Proposal
            <ArrowRight aria-hidden="true" className="size-5" />
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
