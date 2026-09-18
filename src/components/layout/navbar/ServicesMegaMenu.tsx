import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, Layers3, Code2 } from "lucide-react";
import { serviceNavigation, servicesMenuFeatureImageSrc } from "@/config/navigation";
import { MegaMenuFrame } from "./MegaMenuFrame";
import { MegaMenuNote } from "./MegaMenuNote";

const icons = { strategy: Compass, design: Layers3, engineering: Code2 } as const;

type ServicesMegaMenuProps = { onNavigate: () => void };

export function ServicesMegaMenu({ onNavigate }: ServicesMegaMenuProps) {
  return (
    <MegaMenuFrame
      menu="services"
      eyebrow="What we do"
      title="One team for the whole journey"
      description="From first strategy to launch and beyond, we build the experiences that move your business forward."
      onNavigate={onNavigate}
    >
      <div className="flex min-w-0 flex-col gap-5 px-[31px] pb-[29px] pt-[23px]">
        <div className="grid grid-cols-3 gap-8 border-b border-nav-border pb-5 2xl:max-w-[1100px] 2xl:grid-cols-[repeat(3,300px)] 2xl:justify-between">
          {serviceNavigation.map((column) => {
            const Icon = icons[column.icon];
            return (
              <div key={column.title} className="flex min-w-0 flex-col gap-5">
                <Link
                  href={column.href}
                  onClick={onNavigate}
                  className="inline-flex items-center gap-5 rounded-[10px] font-sans text-base font-bold uppercase leading-6 text-foreground transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-[#c5e0f2] text-[#123f61]">
                    <Icon aria-hidden="true" className="size-4" strokeWidth={1.5} />
                  </span>
                  {column.title}
                </Link>
                <ul className="flex flex-col gap-3 font-sans text-base font-medium leading-6 text-muted">
                  {column.items.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="flex min-h-[150px] items-center justify-between gap-5 rounded-[10px] bg-[#eaf4fb] p-[18px]">
          <div className="flex min-w-0 items-center gap-5">
            <div
              data-slot="services-menu-feature-image"
              className="relative size-[113px] shrink-0 overflow-hidden rounded-[10px] bg-[linear-gradient(135deg,#87b8db,#d6e9f4)]"
              aria-hidden="true"
            >
              {servicesMenuFeatureImageSrc ? (
                <Image src={servicesMenuFeatureImageSrc} alt="" fill sizes="113px" className="object-cover" />
              ) : null}
            </div>
            <div className="flex min-w-0 flex-col items-start gap-2">
              <span className="rounded-[10px] bg-white px-2.5 py-1.5 font-mono text-sm font-bold uppercase leading-[1.2] text-foreground">
                Working together
              </span>
              <h3 className="font-display text-[21px] font-bold leading-[1.5] text-foreground">
                Built around your goals, from day one.
              </h3>
              <p className="font-sans text-base leading-6 text-muted">
                Explore how our team turns complex ideas into useful products.
              </p>
            </div>
          </div>
          <Link
            href="/services"
            onClick={onNavigate}
            className="inline-flex shrink-0 items-center gap-2.5 font-sans text-base font-bold leading-none text-foreground hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            All services <ArrowRight aria-hidden="true" className="size-5" />
          </Link>
        </div>

        <MegaMenuNote href="/contact" action="Talk to us" onNavigate={onNavigate}>
          Have a challenge in mind? We can help you find a path forward.
        </MegaMenuNote>
      </div>
    </MegaMenuFrame>
  );
}
