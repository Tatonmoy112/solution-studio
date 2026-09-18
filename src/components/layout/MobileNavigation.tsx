"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Send, X } from "lucide-react";
import {
  aboutNavigation,
  productNavigation,
  serviceNavigation,
  type MegaMenuKey,
  type NavigationItem,
} from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { NavLink } from "./navbar/NavLink";

type MobileNavigationProps = {
  items: readonly NavigationItem[];
  pathname: string;
};

const mobileMenuLinks: Record<MegaMenuKey, readonly { title: string; href: string }[]> = {
  about: aboutNavigation,
  services: serviceNavigation,
  product: productNavigation,
};

export function MobileNavigation({
  items,
  pathname,
}: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<MegaMenuKey | null>(null);
  const panelId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.documentElement.style.overflow;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.documentElement.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="grid size-[42px] place-items-center rounded-2xl border border-foreground bg-background text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? (
          <X aria-hidden="true" className="size-5" />
        ) : (
          <Menu aria-hidden="true" className="size-5" />
        )}
      </button>

      {isOpen ? (
        <div
          id={panelId}
          className="absolute inset-x-0 top-full z-50 pt-5"
        >
          <div className="flex max-h-[calc(100dvh-108px)] flex-col gap-3 overflow-y-auto rounded-[20px] border border-nav-border bg-background p-5 shadow-[0_24px_70px_rgba(16,34,56,0.14)]">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {items.map((item) => {
                if (!item.megaMenu) {
                  return (
                    <NavLink
                      key={item.href}
                      item={item}
                      pathname={pathname}
                      className="w-full justify-start px-3"
                      onNavigate={() => setIsOpen(false)}
                    />
                  );
                }

                const menu = item.megaMenu;
                const menuIsOpen = expandedMenu === menu;
                const submenuId = `${panelId}-${menu}`;

                return (
                  <div key={item.href} className="flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                      {menu === "product" ? (
                        <button
                          type="button"
                          aria-expanded={menuIsOpen}
                          aria-controls={submenuId}
                          className="flex min-h-11 flex-1 items-center justify-between rounded-lg px-3 text-base font-bold text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                          onClick={() => setExpandedMenu(menuIsOpen ? null : menu)}
                        >
                          {item.label}
                          <ChevronDown
                            aria-hidden="true"
                            className={`size-4 transition-transform ${menuIsOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                      ) : (
                        <NavLink
                          item={item}
                          pathname={pathname}
                          className="w-full flex-1 justify-start px-3"
                          onNavigate={() => setIsOpen(false)}
                        />
                      )}
                      {menu !== "product" ? (
                        <button
                          type="button"
                          aria-label={`${menuIsOpen ? "Close" : "Open"} ${item.label} submenu`}
                          aria-expanded={menuIsOpen}
                          aria-controls={submenuId}
                          className="grid size-11 shrink-0 place-items-center rounded-lg text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                          onClick={() => setExpandedMenu(menuIsOpen ? null : menu)}
                        >
                          <ChevronDown
                            aria-hidden="true"
                            className={`size-4 transition-transform ${menuIsOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                      ) : null}
                    </div>
                    {menuIsOpen ? (
                      <div id={submenuId} className="flex flex-col gap-1 rounded-xl bg-brand-soft p-2">
                        {mobileMenuLinks[menu].map((link) => (
                          <NavLink
                            key={link.title}
                            item={{ label: link.title, href: link.href }}
                            pathname={pathname}
                            className="w-full justify-start px-3 text-sm"
                            onNavigate={() => setIsOpen(false)}
                          />
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </nav>

            <Link
              href={siteConfig.contactHref}
              onClick={() => setIsOpen(false)}
              className="inline-flex h-[46px] w-full items-center justify-center gap-2 rounded-[78px] bg-action px-4 text-sm font-medium leading-none text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <span>Book An Intro Call</span>
              <span className="grid size-7 place-items-center rounded-full bg-slate-600 text-white">
                <Send aria-hidden="true" className="size-4" fill="currentColor" />
              </span>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
