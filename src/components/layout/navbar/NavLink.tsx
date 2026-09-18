import Link from "next/link";
import type { NavigationItem } from "@/config/navigation";
import { cn } from "@/lib/cn";

type NavLinkProps = {
  item: NavigationItem;
  pathname: string;
  className?: string;
  onNavigate?: () => void;
};

export function NavLink({
  item,
  pathname,
  className,
  onNavigate,
}: NavLinkProps) {
  const isActive =
    item.href === "/"
      ? pathname === "/"
      : pathname === item.href || pathname.startsWith(`${item.href}/`);

  const sharedClassName = cn(
    "inline-flex min-h-11 items-center rounded-lg px-2 text-base font-bold leading-none transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
    isActive ? "text-brand" : "text-foreground hover:text-brand",
    className,
  );

  return (
    <Link
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      className={sharedClassName}
      onClick={onNavigate}
    >
      {item.label}
    </Link>
  );
}
