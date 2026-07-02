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
            <span className="text-teal-500 font-mono text-sm">06.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-normal font-heading">
              {sectionTitle}
            </h2>
          </div>
          <div className="w-20 h-1 bg-teal-500 rounded-full mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl font-light">
            {subtitle}
          </p>
        </div>

        {/* Process Steps Layout */}
        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-12 right-12 h-0.5 bg-gradient-to-r from-teal-500/20 via-teal-500/50 to-teal-500/10 -z-10" />

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
                  <div className="w-16 h-16 rounded-full bg-[#121212] border-2 border-teal-500 flex items-center justify-center font-mono font-bold text-lg text-teal-500 shadow-[0_0_15px_rgba(20,184,166,0.15)] group-hover:bg-teal-500 group-hover:text-[#121212] group-hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all duration-300">
                    {step.number}
                  </div>
                  
                  <div className="h-px bg-white/10 flex-1 lg:hidden" />
                </div>

                {/* Content */}
                <div className="space-y-2 lg:pt-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-500 transition-colors font-heading">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
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
