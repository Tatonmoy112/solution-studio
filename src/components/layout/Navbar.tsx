"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavigation, type MegaMenuKey } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "./Container";
import { MobileNavigation } from "./MobileNavigation";
import { AboutMegaMenu } from "./navbar/AboutMegaMenu";
import { DesktopNavigation } from "./navbar/DesktopNavigation";
import { NavbarActions } from "./navbar/NavbarActions";
import { ProductMegaMenu } from "./navbar/ProductMegaMenu";
import { ServicesMegaMenu } from "./navbar/ServicesMegaMenu";

export function Navbar() {
  const pathname = usePathname();
  const [openAtPathname, setOpenAtPathname] = useState<{
    menu: MegaMenuKey;
    pathname: string;
  } | null>(null);
  const navbarRef = useRef<HTMLElement>(null);
  const activeMenu = openAtPathname?.pathname === pathname ? openAtPathname.menu : null;

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setOpenAtPathname(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const region = (event.target as HTMLElement).closest<HTMLElement>(
        '[id$="-mega-menu"]',
      );
      if (region) {
        navbarRef.current
          ?.querySelector<HTMLButtonElement>(`[aria-controls="${region.id}"]`)
          ?.focus();
      }
      setOpenAtPathname(null);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header
      ref={navbarRef}
      className="relative z-50 grid w-full place-items-center border-b border-nav-border bg-background px-5 py-5"
    >
      <Container
        as="nav"
        aria-label="Primary navigation"
        className="relative flex min-h-[47px] items-center justify-between gap-6"
        onMouseLeave={() => setOpenAtPathname(null)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            setOpenAtPathname(null);
          }
        }}
      >
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="inline-flex h-[47px] w-[126px] shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <Image
            src={siteConfig.logo}
            alt={siteConfig.name}
            width={1090}
            height={330}
            priority
            sizes="126px"
            className="h-auto w-[126px] object-contain"
          />
        </Link>

        <DesktopNavigation
          items={primaryNavigation}
          pathname={pathname}
          activeMenu={activeMenu}
          onMenuToggle={(menu) =>
            setOpenAtPathname((current) =>
              current?.pathname === pathname && current.menu === menu
                ? null
                : { menu, pathname },
            )
          }
          onMenuOpen={(menu) => setOpenAtPathname({ menu, pathname })}
          onMenuClose={() => setOpenAtPathname(null)}
        />

        <NavbarActions />
        <MobileNavigation
          key={pathname}
          items={primaryNavigation}
          pathname={pathname}
        />

        {activeMenu === "about" ? (
          <AboutMegaMenu onNavigate={() => setOpenAtPathname(null)} />
        ) : null}
        {activeMenu === "services" ? (
          <ServicesMegaMenu onNavigate={() => setOpenAtPathname(null)} />
        ) : null}
        {activeMenu === "product" ? (
          <ProductMegaMenu onNavigate={() => setOpenAtPathname(null)} />
        ) : null}
      </Container>
    </header>
  );
}
