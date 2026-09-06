"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { footerContent, contactInfo } from "@/lib/content";
import { Mail, Phone, MapPin, AlertCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showComingSoon = (name: string) => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }

    setToastMessage(`${name} profile is currently being set up. Coming soon!`);
    toastTimerRef.current = setTimeout(() => {
      setToastMessage(null);
      toastTimerRef.current = null;
    }, 4000);
  };

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "Process", href: "#process" },
    { name: "Founder", href: "#founder" },
    { name: "Contact", href: "#contact" }
  ];

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string) => {
    if (name.toLowerCase() === "facebook") {
      // Allow navigation to the verified facebook link
      return;
    }
    
    // Prevent navigation for LinkedIn, Twitter, GitHub
    e.preventDefault();
    showComingSoon(name);
  };

  return (
    <footer className="py-16 px-6 md:px-12 border-t border-black/10 bg-[#F9F9F9] text-[#181A18] relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-teal-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-[1550px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center w-fit transition-transform duration-300 hover:scale-105" aria-label="Solution Studio home">
              <img 
                src="/ss logo.png" 
                alt="Solution Studio" 
                className="h-10 md:h-12 w-auto object-contain" 
              />
            </Link>
            <p className="text-[#343934] text-lg font-medium leading-relaxed font-heading mt-2">
              &ldquo;{footerContent.tagline}&rdquo;
            </p>
            <p className="text-[#555C55] text-sm w-full md:max-w-xs">
              Solution Studio delivers bespoke software systems that drive outcomes, not just deliverables.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-[#181A18] font-heading tracking-wider uppercase">Navigation</h4>
            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={`/${link.href}`}
                  className="text-[#4B514B] hover:text-[#00BBA7] text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-[#181A18] font-heading tracking-wider uppercase">Contact Us</h4>
            <ul className="space-y-3 text-sm text-[#4B514B]">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#00BBA7] shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-[#00BBA7] transition-colors break-all">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#00BBA7] shrink-0" />
                <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="hover:text-[#00BBA7] transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#00BBA7] shrink-0 mt-0.5" />
                <span>
                  {contactInfo.address.join(", ")}
                </span>
              </li>
            </ul>
          </div>

          {/* Socials & Markets */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-[#181A18] font-heading tracking-wider uppercase">Connect</h4>
            <div className="flex flex-wrap gap-4 mb-4">
              {footerContent.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => handleSocialClick(e, social.name)}
                  className="text-[#4B514B] hover:text-[#00BBA7] transition-colors text-sm font-medium font-heading cursor-pointer"
                >
                  {social.name}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-black/10">
              <span className="text-[10px] text-[#555C55] font-mono uppercase tracking-widest block">
                HQ: Gazipur, Bangladesh
              </span>
              <span className="text-[10px] text-[#555C55] font-mono uppercase tracking-widest block mt-1">
                Serving: Worldwide & Remote-first
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[#555C55] text-xs">
            &copy; {new Date().getFullYear()} Solution Studio. All rights reserved.
          </p>
          <p className="text-[#555C55] text-[10px] uppercase tracking-widest font-mono">
            Crafted for Outcomes &bull; Bangladesh
          </p>
        </div>
      </div>

      {/* Floating Modern Toast Notification */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {toastMessage && (
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                role="status"
                aria-live="assertive"
                className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 p-4 bg-white border border-teal-500/30 text-[#181A18] rounded-xl shadow-[0_10px_30px_rgba(20,184,166,0.15)] max-w-sm"
              >
                <AlertCircle size={20} className="text-teal-500 shrink-0" />
                <div className="flex-1 text-sm font-heading font-medium pr-2">
                  {toastMessage}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
                    toastTimerRef.current = null;
                    setToastMessage(null);
                  }}
                  className="text-[#555C55] hover:text-teal-600 transition-colors shrink-0 cursor-pointer"
                  aria-label="Dismiss notification"
                >
                  <X size={16} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </footer>
  );
}
