"use client";

import { motion } from "framer-motion";
import { processContent } from "@/lib/content";

export default function Process() {
  const { sectionTitle, subtitle, steps } = processContent;

  return (
    <section id="process" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[90px] -z-10" />

      <div className="container mx-auto max-w-[1550px]">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#013AFF] font-mono text-sm font-bold">06.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#181A18] uppercase tracking-normal font-heading">
              {sectionTitle}
            </h2>
          </div>
          <div className="w-20 h-1 bg-[#013AFF] rounded-full mb-6" />
          <p className="text-[#4B514B] text-lg max-w-2xl font-light">
            {subtitle}
          </p>
        </div>

        {/* Process Steps Layout */}
        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-12 right-12 h-0.5 bg-gradient-to-r from-[#00BBA7]/20 via-[#00BBA7]/50 to-[#00BBA7]/10 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-4 relative group"
              >
                {/* Step Circle & Number */}
                <div className="flex items-center lg:flex-col lg:items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-[#00BBA7] flex items-center justify-center font-mono font-bold text-lg text-[#00BBA7] shadow-[0_0_15px_rgba(0,187,167,0.15)] group-hover:bg-[#00BBA7] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(0,187,167,0.4)] transition-all duration-300">
                    {step.number}
                  </div>
                  
                  <div className="h-px bg-black/10 flex-1 lg:hidden" />
                </div>

                {/* Content */}
                <div className="space-y-2 lg:pt-2">
                  <h3 className="text-xl font-bold text-[#181A18] group-hover:text-[#00BBA7] transition-colors font-heading">
                    {step.title}
                  </h3>
                  <p className="text-[#555C55] text-sm leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
