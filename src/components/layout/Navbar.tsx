"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "./Container";
import { MobileNavigation } from "./MobileNavigation";
import { AboutMegaMenu } from "./navbar/AboutMegaMenu";
import { DesktopNavigation } from "./navbar/DesktopNavigation";
import { NavbarActions } from "./navbar/NavbarActions";

export function Navbar() {
  const pathname = usePathname();
  const [aboutOpenAtPathname, setAboutOpenAtPathname] = useState<
    string | null
  >(null);
  const navbarRef = useRef<HTMLElement>(null);
  const isAboutOpen = aboutOpenAtPathname === pathname;

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setAboutOpenAtPathname(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setAboutOpenAtPathname(null);
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
        onMouseLeave={() => setAboutOpenAtPathname(null)}
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
          isAboutOpen={isAboutOpen}
          onAboutToggle={() =>
            setAboutOpenAtPathname((current) =>
              current === pathname ? null : pathname,
            )
          }
          onAboutOpen={() => setAboutOpenAtPathname(pathname)}
          onAboutClose={() => setAboutOpenAtPathname(null)}
        />

        <NavbarActions />
        <MobileNavigation
          key={pathname}
          items={primaryNavigation}
          pathname={pathname}
        />

        {isAboutOpen ? (
          <AboutMegaMenu onNavigate={() => setAboutOpenAtPathname(null)} />
        ) : null}
      </Container>
    </header>
  );
}
