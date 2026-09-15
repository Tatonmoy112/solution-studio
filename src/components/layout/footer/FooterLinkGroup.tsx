import Link from "next/link";

type FooterLinkGroupProps = {
  title: string;
  ariaLabel: string;
  items: readonly { label: string; href: string | null }[];
};

export function FooterLinkGroup({ title, ariaLabel, items }: FooterLinkGroupProps) {
  return (
    <nav aria-label={ariaLabel} className="flex min-w-0 flex-col gap-9">
      <h3 className="font-sans text-lg font-semibold leading-[22px] text-white/90">
        {title}
      </h3>
      <ul className="flex flex-col gap-[26px]">
        {items.map((item) => (
          <li key={item.label} className="min-h-[19px]">
            {item.href ? (
              <Link
                href={item.href}
                className="font-sans text-base leading-[19px] text-white/70 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-sans text-base leading-[19px] text-white/45">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
