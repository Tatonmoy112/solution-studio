"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/forms/ContactForm";
import { companyInfo } from "@/content/company";
import { Mail, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-neutral-50/60 border-t border-black/8 relative">
      <div className="container mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Context & Direct Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 sm:space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#013AFF]/10 border border-[#013AFF]/20 text-[#013AFF] text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
                Let&apos;s Build Together
              </div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#111311] tracking-tight mb-3 sm:mb-4">
                Start a Technical Conversation
              </h2>
              <p className="text-sm sm:text-base text-[#4a524a] leading-relaxed">
                Whether you need a custom enterprise system, want to migrate a legacy codebase, or require architectural consultation, our principal engineers are ready to assess your goals.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3 sm:space-y-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-black/8 shadow-sm flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#013AFF]/10 text-[#013AFF] flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] sm:text-xs font-mono uppercase text-[#6e766e] block">Email Inquiries</span>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-sm sm:text-base font-bold text-[#111311] hover:text-[#013AFF] transition-colors break-all sm:break-normal"
                  >
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-black/8 shadow-sm flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#00BBA7]/10 text-[#00BBA7] flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] sm:text-xs font-mono uppercase text-[#6e766e] block">Direct Line & WhatsApp</span>
                  <a
                    href={`tel:${companyInfo.phone.replace(/[\s-]/g, "")}`}
                    className="text-sm sm:text-base font-bold text-[#111311] hover:text-[#013AFF] transition-colors"
                  >
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-black/8 shadow-sm flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 text-[#111311] flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] sm:text-xs font-mono uppercase text-[#6e766e] block">HQ / Office Location</span>
                  <span className="text-xs sm:text-sm font-semibold text-[#111311] block leading-snug">
                    {companyInfo.address.join(", ")}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-black/8 shadow-sm flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 text-[#111311] flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] sm:text-xs font-mono uppercase text-[#6e766e] block">Response Guarantee</span>
                  <span className="text-xs sm:text-sm font-semibold text-[#111311] block leading-snug">
                    All inquiries reviewed within 24 business hours
                  </span>
                </div>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-white/80 border border-black/8 flex items-start sm:items-center gap-3 text-xs text-[#4a524a] leading-relaxed">
              <ShieldCheck size={18} className="text-[#00BBA7] shrink-0 mt-0.5 sm:mt-0" />
              <span>We execute Non-Disclosure Agreements (NDAs) prior to detailed architecture reviews upon request.</span>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

