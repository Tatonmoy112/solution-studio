"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationItems } from "@/content/company";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change during render without cascading effect renders
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-2.5 sm:px-4 sm:pt-3 md:px-8 md:pt-5 pointer-events-none">
      <div
        className={`max-w-[1400px] mx-auto flex flex-col overflow-hidden rounded-[20px] sm:rounded-[24px] px-4 py-2.5 sm:px-5 sm:py-3 transition-all duration-300 pointer-events-auto border border-black/10 backdrop-blur-md md:rounded-full md:px-8 md:py-3.5 ${
          mobileMenuOpen
            ? "bg-white/95 shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
            : isScrolled
            ? "bg-white/90 shadow-lg shadow-black/[0.04]"
            : "bg-white/75 shadow-sm"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo Left */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Solution Studio Home"
          >
            <div className="relative h-7 sm:h-8 md:h-9 w-28 sm:w-32 md:w-36">
              <Image
                src="/ss-logo.png"
                alt="Solution Studio Logo"
                fill
                priority
                sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 144px"
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav Center */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navigationItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href) && !item.href.includes("#");

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-[#013AFF] ${
                    isActive ? "text-[#013AFF] font-semibold" : "text-[#4B514B]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Right */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#013AFF] hover:bg-[#002ECC] text-white text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-200 shadow-sm hover:shadow-[0_4px_16px_rgba(1,58,255,0.3)] active:scale-95"
            >
              <span>Let&apos;s Build</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl text-[#181A18] hover:bg-black/5 transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileMenuOpen ? "close" : "menu"}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Expandable Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden overflow-hidden pt-4 pb-2 border-t border-black/10 mt-3"
            >
              <div className="flex flex-col gap-1.5">
                {navigationItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3.5 py-3 text-base font-semibold text-[#181A18] hover:text-[#013AFF] hover:bg-black/5 active:bg-black/10 rounded-xl transition-colors flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={14} className="text-[#6e766e]" />
                  </Link>
                ))}
                <div className="pt-3">
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-[#013AFF] hover:bg-[#002ECC] active:scale-[0.98] text-white text-sm font-semibold uppercase tracking-wider rounded-xl text-center shadow-md transition-all"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

