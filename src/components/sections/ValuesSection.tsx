"use client";

import { motion } from "framer-motion";
import { valuePillars } from "@/content/company";
import { ShieldCheck, Compass, Gauge, Handshake } from "lucide-react";

const valueIcons = [Compass, Gauge, ShieldCheck, Handshake];

export default function ValuesSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#013AFF]/20 rounded-full blur-[110px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-[#00BBA7]/20 rounded-full blur-[110px] sm:blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-[1400px] relative z-10">
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#00BBA7] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-4">
            Our Engineering Ethos
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Why High-Growth Companies Choose Solution Studio
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#cbd5cb] leading-relaxed">
            We don&apos;t act as an outsourced vendor throwing code over the fence. We operate as an embedded technology partner invested in your long-term operational success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {valuePillars.map((pillar, index) => {
            const Icon = valueIcons[index % valueIcons.length];

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-5 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#013AFF]/60 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/10 text-[#00BBA7] flex items-center justify-center mb-5 sm:mb-6">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2.5 sm:mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a1a8a1] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

