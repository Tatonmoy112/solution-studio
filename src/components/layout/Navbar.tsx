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
        className={`max-w-[1550px] mx-auto flex flex-col transition-all duration-300 pointer-events-auto border border-white/5 backdrop-blur-md shadow-2xl ${
          mobileMenuOpen 
            ? "rounded-3xl bg-[#121212]/95 p-6" 
            : isScrolled
              ? "rounded-full bg-[#121212]/90 py-3 px-6"
              : "rounded-full bg-[#121212]/70 py-4 px-8"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo Left */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-teal-500 overflow-hidden relative group-hover:scale-105 transition-transform bg-[#1e1e1e] flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Solution Studio Logo" 
                className="w-4/5 h-4/5 object-contain" 
              />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-teal-500 transition-colors font-heading tracking-tighter">
              STUDIO<span className="text-teal-500">.</span>
            </span>
          </Link>

          {/* Desktop Nav Center */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={getLinkHref(link.href)}
                className="text-slate-300 hover:text-white transition-colors text-sm font-medium tracking-wide font-heading"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button Right */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="px-6 py-2.5 bg-teal-500 hover:bg-teal-600 text-[#121212] font-semibold text-sm uppercase tracking-wider rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(20,184,166,0.4)]"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu - Expanding inside the capsule */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden flex flex-col items-center gap-2 pt-6 md:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={getLinkHref(link.href)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-300 hover:text-white text-base font-medium w-full text-center py-3 font-heading border-b border-white/5 last:border-b-0"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-teal-500 hover:bg-teal-600 text-[#121212] font-semibold text-sm uppercase tracking-wider rounded-full mt-4 transition-all"
              >
                Let's Talk
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
