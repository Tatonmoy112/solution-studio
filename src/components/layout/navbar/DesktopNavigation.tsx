import type { NavigationItem } from "@/config/navigation";
import { NavLink } from "./NavLink";

type DesktopNavigationProps = {
  items: readonly NavigationItem[];
  pathname: string;
  isAboutOpen: boolean;
  onAboutToggle: () => void;
  onAboutOpen: () => void;
  onAboutClose: () => void;
};

export function DesktopNavigation({
  items,
  pathname,
  isAboutOpen,
  onAboutToggle,
  onAboutOpen,
  onAboutClose,
}: DesktopNavigationProps) {
  return (
    <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 xl:flex 2xl:gap-10">
      {items.map((item) =>
        item.hasMegaMenu ? (
          <button
            key={item.href}
            type="button"
            aria-expanded={isAboutOpen}
            aria-controls="about-mega-menu"
            className={`inline-flex min-h-11 items-center rounded-lg px-2 text-base font-bold leading-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
              pathname === item.href || pathname.startsWith(`${item.href}/`)
                ? "text-brand"
                : "text-foreground hover:text-brand"
            }`}
            onClick={onAboutToggle}
            onMouseEnter={onAboutOpen}
            onFocus={onAboutOpen}
          >
            {item.label}
          </button>
        ) : (
          <span key={item.href} onMouseEnter={onAboutClose}>
            <NavLink item={item} pathname={pathname} />
          </span>
        ),
      )}
    </div>
  );
}
