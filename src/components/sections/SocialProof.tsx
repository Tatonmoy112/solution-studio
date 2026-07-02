"use client";

import { motion } from "framer-motion";
import { statsContent } from "@/lib/content";

export default function SocialProof() {
  return (
    <section className="py-10 bg-[#0c0c0c] border-y border-white/5 relative z-20">
      <div className="container mx-auto max-w-[1550px] px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          <span className="text-xs font-mono text-slate-500 uppercase tracking-[0.25em] md:w-1/4 text-center md:text-left">
            Studio by the Numbers
          </span>
          
          <div className="flex flex-col sm:flex-row flex-1 justify-around items-center gap-8 sm:gap-4 w-full">
            {statsContent.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 text-center sm:text-left"
              >
                <span className="text-3xl md:text-4xl font-extrabold text-teal-500 font-heading">
                  {stat.number}
                </span>
                <div className="h-8 w-px bg-white/10 hidden sm:block" />
                <span className="text-sm font-medium text-slate-400 font-heading uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
