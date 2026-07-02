"use client";

import { motion } from "framer-motion";
import { servicesContent } from "@/lib/content";
import { Settings, Code2, Smartphone, Cpu, Globe, TrendingUp } from "lucide-react";
import React from "react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Settings,
  Code2,
  Smartphone,
  Cpu,
  Globe,
  TrendingUp,
};

export default function Services() {
  const { sectionTitle, items } = servicesContent;

  return (
    <section id="services" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto max-w-[1550px]">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-teal-500 font-mono text-sm">04.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-normal font-heading">
              {sectionTitle}
            </h2>
          </div>
          <div className="w-20 h-1 bg-teal-500 rounded-full" />
        </div>

        {/* 2x3 Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Code2;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative flex flex-col justify-between p-8 rounded-2xl border border-white/5 bg-[#161616]/40 hover:bg-[#1c1c1c]/60 hover:translate-y-[-6px] hover:border-teal-500/30 transition-all duration-300 overflow-hidden"
              >
                {/* Accent Top Border on Hover */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-teal-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                <div>
                  <div className="mb-6 inline-flex p-4 bg-teal-500/5 text-teal-500 rounded-xl group-hover:bg-teal-500/10 group-hover:scale-110 transition-all duration-300">
                    <IconComponent size={26} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 font-heading group-hover:text-teal-500 transition-colors tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-teal-500/70 group-hover:text-teal-500 transition-colors mt-auto">
                  <span>BUILD SYSTEM</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-ping group-hover:block hidden" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
