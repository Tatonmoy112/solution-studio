"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "Process", href: "#process" },
    { name: "Founder", href: "#founder" }
  ];

  const getLinkHref = (href: string) => {
    if (href.startsWith("/")) return href;
    if (href.startsWith("#")) return `/${href}`;
    return href;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6 pointer-events-none">
      <div
        className={`max-w-[1550px] mx-auto flex flex-col overflow-hidden rounded-[28px] px-5 py-3 transition-[background-color,box-shadow] duration-300 pointer-events-auto border border-black/10 backdrop-blur-md md:rounded-full md:px-8 md:py-4 ${
          mobileMenuOpen 
            ? "bg-[#F9F9F9]/95 shadow-[0_20px_60px_rgba(24,26,24,0.14)]"
            : isScrolled
              ? "bg-[#F9F9F9]/90 shadow-xl"
              : "bg-[#F9F9F9]/70 shadow-2xl"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo Left */}
          <Link href="/" className="group flex items-center transition-transform duration-300 hover:scale-105" aria-label="Solution Studio home">
            <img
              src="/ss logo.png"
              alt="Solution Studio"
              className="h-9 md:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Center */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={getLinkHref(link.href)}
                className="text-[#4B514B] hover:text-[#00BBA7] transition-colors text-sm font-medium tracking-wide font-heading"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button Right */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="px-6 py-2.5 bg-[#013AFF] hover:bg-[#002ecc] text-white font-semibold text-sm uppercase tracking-wider rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(1,58,255,0.4)]"
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex h-10 w-10 items-center justify-center text-[#181A18] hover:text-[#00BBA7] transition-colors cursor-pointer"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileMenuOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Dropdown Menu - Expanding inside the capsule */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0, y: -10 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -8 }}
              transition={{
                height: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.24, ease: "easeOut" },
                y: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
              }}
              className="overflow-hidden md:hidden"
            >
              <div className="flex flex-col items-center gap-2 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={getLinkHref(link.href)}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#4B514B] hover:text-[#00BBA7] transition-colors text-base font-medium w-full text-center py-3 font-heading border-b border-black/10 last:border-b-0"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 bg-[#013AFF] hover:bg-[#002ecc] text-white font-semibold text-sm uppercase tracking-wider rounded-full mt-2 transition-all"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
