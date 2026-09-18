import type { MegaMenuKey, NavigationItem } from "@/config/navigation";
import { NavLink } from "./NavLink";

type DesktopNavigationProps = {
  items: readonly NavigationItem[];
  pathname: string;
  activeMenu: MegaMenuKey | null;
  onMenuToggle: (menu: MegaMenuKey) => void;
  onMenuOpen: (menu: MegaMenuKey) => void;
  onMenuClose: () => void;
};

export function DesktopNavigation({
  items,
  pathname,
  activeMenu,
  onMenuToggle,
  onMenuOpen,
  onMenuClose,
}: DesktopNavigationProps) {
  const focusMenu = (menu: MegaMenuKey) => {
    requestAnimationFrame(() => {
      document.querySelector<HTMLAnchorElement>(`#${menu}-mega-menu a`)?.focus();
    });
  };

  return (
    <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 xl:flex 2xl:gap-10">
      {items.map((item) => {
        const menu = item.megaMenu;
        return menu ? (
          <button
            key={item.href}
            type="button"
            aria-expanded={activeMenu === menu}
            aria-controls={`${menu}-mega-menu`}
            className={`inline-flex min-h-11 items-center rounded-lg px-2 text-base font-bold leading-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
              activeMenu === menu || pathname === item.href || pathname.startsWith(`${item.href}/`)
                ? "text-brand"
                : "text-foreground hover:text-brand"
            }`}
            onClick={(event) => {
              if (event.detail === 0) {
                onMenuOpen(menu);
                focusMenu(menu);
              } else {
                onMenuToggle(menu);
              }
            }}
            onMouseEnter={() => onMenuOpen(menu)}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown") {
                event.preventDefault();
                onMenuOpen(menu);
                focusMenu(menu);
              }
            }}
          >
            {item.label}
          </button>
        ) : (
          <span key={item.href} onMouseEnter={onMenuClose} onFocus={onMenuClose}>
            <NavLink item={item} pathname={pathname} />
          </span>
        );
      })}
    </div>
  );
}
