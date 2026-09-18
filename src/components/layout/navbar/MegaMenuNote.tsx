import Link from "next/link";
import { ArrowRight } from "lucide-react";

type MegaMenuNoteProps = {
  children: string;
  action: string;
  href: string;
  onNavigate: () => void;
};

export function MegaMenuNote({ children, action, href, onNavigate }: MegaMenuNoteProps) {
  return (
    <div className="flex min-w-0 items-center justify-between gap-5">
      <p className="flex min-w-0 items-center gap-3 font-sans text-base font-medium leading-6 text-muted">
        <span aria-hidden="true" className="grid size-4 shrink-0 place-items-center rounded-full bg-brand/20">
          <span className="size-1 rounded-full bg-brand" />
        </span>
        {children}
      </p>
      <Link
        href={href}
        onClick={onNavigate}
        className="inline-flex shrink-0 items-center gap-2.5 font-sans text-base font-bold leading-none text-foreground transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        {action}
        <ArrowRight aria-hidden="true" className="size-5" />
      </Link>
    </div>
  );
}
