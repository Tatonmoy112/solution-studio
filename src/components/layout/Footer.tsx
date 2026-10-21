import Link from "next/link";
import Image from "next/image";
import { companyInfo, navigationItems } from "@/content/company";
import { services } from "@/content/services";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0d0f0e] text-[#f1f5f1] pt-14 sm:pt-20 pb-8 sm:pb-12 px-4 sm:px-6 md:px-12 border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#013AFF]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 pb-10 sm:pb-16 border-b border-white/10">
          {/* Brand & Manifesto Column */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
            <Link href="/" className="inline-block w-fit" aria-label="Solution Studio Home">
              <div className="relative h-8 sm:h-9 w-36 sm:w-40 brightness-0 invert">
                <Image
                  src="/ss-logo.png"
                  alt="Solution Studio Logo"
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-[#a1a8a1] text-sm sm:text-base leading-relaxed max-w-md">
              Enterprise software engineering, custom ERP architectures, and scalable web platforms. We build reliable digital backbones that turn complex business operations into automated growth engines.
            </p>

            <div className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#cbd5cb] pt-1">
              <a
                href={`mailto:${companyInfo.email}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors group break-all sm:break-normal"
              >
                <Mail size={16} className="text-[#013AFF] shrink-0 group-hover:scale-110 transition-transform" />
                <span>{companyInfo.email}</span>
              </a>
              <a
                href={`tel:${companyInfo.phone.replace(/[\s-]/g, "")}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Phone size={16} className="text-[#00BBA7] shrink-0 group-hover:scale-110 transition-transform" />
                <span>{companyInfo.phone}</span>
              </a>
              <div className="inline-flex items-start gap-2 text-[#889088] leading-relaxed">
                <MapPin size={16} className="text-[#889088] shrink-0 mt-0.5" />
                <span>{companyInfo.address.join(" • ")}</span>
              </div>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest font-mono">
              Engineering Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-sm text-[#a1a8a1] hover:text-white transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Case Studies */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest font-mono">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#a1a8a1] hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-[#00BBA7] font-medium hover:underline"
                >
                  Start an Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Governance */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest font-mono">
              Governance
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-[#a1a8a1]">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  XML Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#889088]">
          <p>© {currentYear} {companyInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {companyInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

