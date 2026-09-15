"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RotateCcw } from "lucide-react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="grid flex-1 place-items-center px-5 py-16">
      <section
        aria-labelledby="error-title"
        className="flex w-full max-w-2xl flex-col items-center gap-6 text-center"
      >
        <span className="font-mono text-sm font-bold uppercase text-brand">
          Something went wrong
        </span>
        <div className="flex flex-col gap-3">
          <h1
            id="error-title"
            className="font-display text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl"
          >
            We could not load this page.
          </h1>
          <p className="text-base leading-7 text-muted">
            Try the request again. If the problem continues, return to the home
            page.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-action px-5 text-sm font-bold text-white transition-colors hover:bg-brand-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <RotateCcw aria-hidden="true" className="size-4" />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-nav-border px-5 text-sm font-bold text-foreground transition-colors hover:border-brand hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Go to home
          </Link>
        </div>
        {error.digest ? (
          <p className="font-mono text-xs text-muted">
            Reference: {error.digest}
          </p>
        ) : null}
      </section>
    </main>
  );
}
