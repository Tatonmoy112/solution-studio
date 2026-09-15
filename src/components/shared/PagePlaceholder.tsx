import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type PagePlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PagePlaceholder({
  eyebrow,
  title,
  description,
}: PagePlaceholderProps) {
  return (
    <main className="grid flex-1 place-items-center px-5 py-16">
      <section
        aria-labelledby="placeholder-title"
        className="flex w-full max-w-2xl flex-col items-center gap-6 text-center"
      >
        <span className="font-mono text-sm font-bold uppercase text-brand">
          {eyebrow}
        </span>
        <div className="flex flex-col gap-3">
          <h1
            id="placeholder-title"
            className="font-display text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl"
          >
            {title}
          </h1>
          <p className="text-base leading-7 text-muted">{description}</p>
        </div>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-action px-5 text-sm font-bold text-white transition-colors hover:bg-brand-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Return home
        </Link>
      </section>
    </main>
  );
}
