"use client";

import { motion } from "framer-motion";
import { engineeringProcess } from "@/content/company";
import { CheckCircle2 } from "lucide-react";

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden bg-white">
      <div className="container mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00BBA7]/10 border border-[#00BBA7]/20 text-[#009988] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-4">
            Engineering Methodology
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#111311] tracking-tight mb-4">
            How We Build: From First Principles to Zero-Downtime Release
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#4a524a] leading-relaxed">
            We don&apos;t rush into drafting UI mockups before solving the data model. Our four-stage engineering methodology guarantees predictable delivery, auditable code, and systems built to last.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {engineeringProcess.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative p-5 sm:p-8 rounded-2xl bg-neutral-50/70 border border-black/8 flex flex-col justify-between hover:bg-white hover:border-[#013AFF]/30 hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#013AFF]">
                    {step.step}
                  </span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#013AFF]/10 text-[#013AFF] flex items-center justify-center font-mono text-xs font-bold">
                    ✓
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#111311] tracking-tight mb-1">
                  {step.title}
                </h3>

                <p className="text-[11px] sm:text-xs font-mono text-[#00BBA7] font-semibold mb-3 sm:mb-4">
                  {step.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#4a524a] leading-relaxed mb-5 sm:mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="pt-4 border-t border-black/8 space-y-1.5">
                <span className="text-[11px] font-mono uppercase text-[#6e766e] tracking-wider block mb-1">
                  Deliverables:
                </span>
                {step.deliverables.map((deliv) => (
                  <div key={deliv} className="flex items-start gap-1.5 text-xs text-[#2a302a]">
                    <CheckCircle2 size={12} className="text-[#00BBA7] mt-0.5 shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

