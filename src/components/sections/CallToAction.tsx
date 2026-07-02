"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-16 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-[1550px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative p-12 md:p-20 rounded-3xl bg-gradient-to-r from-teal-900/30 to-teal-950/20 border border-teal-500/20 flex flex-col lg:flex-row justify-between items-center gap-10 overflow-hidden shadow-2xl"
        >
          {/* Decorative fluid design elements */}
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 max-w-3xl text-center lg:text-left relative z-10">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-heading leading-tight tracking-tight">
              Ready to Build Software That Drives <span className="text-teal-500">Real Outcomes</span>?
            </h3>
            <p className="text-slate-400 text-base md:text-lg font-light max-w-xl">
              Stop paying for deliverables that check boxes but don&apos;t solve your business bottlenecks. Let&apos;s build systems that grow with you.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <a
              href="#contact"
              className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-[#121212] font-bold text-base uppercase tracking-wider rounded-full transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_10px_20px_rgba(20,184,166,0.3)] flex items-center gap-3 group"
            >
              Let&apos;s Get Started
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
