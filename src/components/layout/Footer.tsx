import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { footerContent } from "@/config/footer";
import { siteConfig } from "@/config/site";
import { FooterAffiliations } from "./footer/FooterAffiliations";
import { FooterBackground } from "./footer/FooterBackground";
import { FooterLeadForm } from "./footer/FooterLeadForm";
import { FooterLinkGroup } from "./footer/FooterLinkGroup";
import { FooterSocialLinks } from "./footer/FooterSocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grid w-full place-items-center bg-background px-5 pt-8 pb-[38px] sm:px-8">
      <div className="relative w-full max-w-[1823px] rounded-[20px] bg-[#222321]">
        <div className="relative flex min-h-[463px] flex-col items-center justify-center gap-5 overflow-hidden rounded-t-[20px] px-5 py-16 min-[1700px]:h-[463px] min-[1700px]:justify-start min-[1700px]:gap-0 min-[1700px]:pt-[147px] min-[1700px]:pb-0">
          <FooterBackground src={footerContent.backgroundSrc} />
          <h2 className="relative z-10 flex min-h-[121px] w-full max-w-[1086px] items-center justify-center text-center font-accent text-[clamp(2.25rem,4vw,4.8125rem)] font-medium leading-none text-white">
            {footerContent.headline}
          </h2>
          <div className="relative z-10 flex w-full justify-center">
            <FooterLeadForm />
          </div>
        </div>

        <div className="grid min-h-[518px] w-full items-start justify-items-center rounded-b-[20px] bg-[#242421] bg-[radial-gradient(circle_at_50%_10%,#292a29_0%,#222321_70%)] px-6 pt-[72px] pb-[150px] sm:px-12 min-[1700px]:h-[518px] min-[1700px]:px-0 min-[1700px]:pt-[120px] min-[1700px]:pb-0">
          <div className="grid w-full max-w-[1601px] gap-14 min-[1700px]:grid-cols-[460px_840px] min-[1700px]:gap-[301px]">
            <div className="flex w-full max-w-[460px] flex-col gap-[70px]">
              <div className="flex flex-col gap-6">
                <Link
                  href="/"
                  aria-label={`${siteConfig.name} home`}
                  className="inline-flex h-[51px] w-[138px] items-center focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Image
                    src={siteConfig.logo}
                    alt={siteConfig.name}
                    width={1090}
                    height={330}
                    sizes="138px"
                    className="h-auto w-[138px] object-contain brightness-0 invert"
                  />
                </Link>
                <p className="max-w-[407px] font-sans text-base font-normal leading-[22px] text-white/70">
                  {footerContent.description}
                </p>
              </div>
              <FooterSocialLinks links={footerContent.socialLinks} />
            </div>

            <div className="grid min-w-0 gap-10 sm:grid-cols-2 xl:grid-cols-[107px_107px_minmax(0,1fr)] xl:gap-12 min-[1700px]:w-[840px] min-[1700px]:gap-[128px]">
              {footerContent.linkGroups.map((group, index) => (
                <FooterLinkGroup
                  key={`${group.title}-${index}`}
                  title={group.title}
                  ariaLabel={group.ariaLabel}
                  items={group.items}
                />
              ))}
              <FooterAffiliations
                aiBadges={footerContent.aiBadges}
                memberships={footerContent.memberships}
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 flex min-h-[60px] w-[calc(100%-48px)] max-w-[1304px] -translate-x-1/2 flex-wrap items-center justify-center gap-1.5 rounded-t-[24px] bg-background px-5 py-3 text-center font-sans text-sm leading-5 text-foreground sm:text-base">
          <span>© {year}. Developed with</span>
          <Heart aria-label="love" className="size-4 shrink-0 fill-red-500 text-red-500" />
          <span>by {siteConfig.name}</span>
        </div>
      </div>
    </footer>
  );
}
