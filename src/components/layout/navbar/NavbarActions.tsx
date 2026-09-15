import Link from "next/link";
import { Search, Send } from "lucide-react";
import { siteConfig } from "@/config/site";

export function NavbarActions() {
  return (
    <div className="hidden items-center gap-3 xl:flex">
      <Link
        href="/blog"
        aria-label="Browse articles"
        className="grid size-[41px] place-items-center rounded-2xl border border-foreground bg-background text-foreground transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        <Search aria-hidden="true" className="size-[13px]" strokeWidth={1.8} />
      </Link>

      <Link
        href={siteConfig.contactHref}
        className="inline-flex h-[42px] min-w-[175px] items-center justify-center gap-2 rounded-[78px] bg-action px-4 text-sm font-medium leading-none text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] transition-colors hover:bg-brand-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        <span>Book An Intro Call</span>
        <span className="grid size-8 place-items-center rounded-full bg-slate-600 text-white">
          <Send aria-hidden="true" className="size-4" fill="currentColor" />
        </span>
      </Link>
    </div>
  );
}
