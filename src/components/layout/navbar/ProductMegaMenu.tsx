import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { productNavigation } from "@/config/navigation";
import { MegaMenuFrame } from "./MegaMenuFrame";
import { MegaMenuNote } from "./MegaMenuNote";

type ProductMegaMenuProps = { onNavigate: () => void };

export function ProductMegaMenu({ onNavigate }: ProductMegaMenuProps) {
  return (
    <MegaMenuFrame
      menu="product"
      eyebrow="Explore products"
      title="Digital products with a purpose"
      description="See the experiences we create and bring your next idea to the team."
      onNavigate={onNavigate}
    >
      <div className="flex min-w-0 flex-col gap-[18px] p-[23px]">
        <div className="grid min-w-0 grid-cols-2 gap-5">
          {productNavigation.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={onNavigate}
              className="flex min-h-[225px] min-w-0 items-center gap-[15px] rounded-[10px] border border-nav-border bg-white p-[19px] transition-colors hover:border-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <span
                data-slot={`product-menu-image-${index + 1}`}
                aria-hidden="true"
                className="relative block h-[185px] w-[min(46%,249px)] shrink-0 overflow-hidden rounded-[10px] bg-[linear-gradient(145deg,#aacde5,#edf6fb)] 2xl:w-[249px]"
              >
                {item.imageSrc ? (
                  <Image src={item.imageSrc} alt="" fill sizes="249px" className="object-cover" />
                ) : null}
              </span>
              <span className="flex min-w-0 flex-1 flex-col gap-3">
                <span className="font-sans text-base font-bold uppercase leading-6 text-foreground">
                  {item.title}
                </span>
                <span className="font-sans text-base leading-6 text-muted">
                  {item.description}
                </span>
                <span className="inline-flex items-center gap-[5px] font-sans text-sm font-bold leading-none text-brand">
                  {item.action} <ArrowRight aria-hidden="true" className="size-5" />
                </span>
              </span>
            </Link>
          ))}
        </div>
        <MegaMenuNote href="/portfolio" action="See all work" onNavigate={onNavigate}>
          Discover more of what our team has created.
        </MegaMenuNote>
      </div>
    </MegaMenuFrame>
  );
}
