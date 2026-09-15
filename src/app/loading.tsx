export default function Loading() {
  return (
    <main
      aria-busy="true"
      aria-live="polite"
      className="grid flex-1 place-items-center px-5 py-16"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <span
          aria-hidden="true"
          className="size-10 animate-spin rounded-full border-[3px] border-brand-soft border-t-brand"
        />
        <p className="text-sm font-bold text-muted">Loading page…</p>
      </div>
    </main>
  );
}
