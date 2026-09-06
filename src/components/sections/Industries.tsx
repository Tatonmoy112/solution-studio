"use client";

import { motion } from "framer-motion";
import { industriesContent } from "@/lib/content";
import { Factory, HeartPulse, ShoppingBag, GraduationCap, Rocket, Building2 } from "lucide-react";
import React from "react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Factory,
  HeartPulse,
  ShoppingBag,
  GraduationCap,
  Rocket,
  Building2,
};

export default function Industries() {
  const { sectionTitle, subtitle, items } = industriesContent;

  return (
    <section id="industries" className="py-24 px-6 md:px-12 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-teal-500/5 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-[1550px] relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#013AFF] font-mono text-sm font-bold">05.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#181A18] uppercase tracking-normal font-heading">
              {sectionTitle}
            </h2>
          </div>
          <div className="w-20 h-1 bg-[#013AFF] rounded-full mb-6" />
          <p className="text-[#4B514B] text-lg max-w-2xl font-light">
            {subtitle}
          </p>
        </div>

        {/* 3x2 Industry Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Factory;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-black/10 hover:border-[#00BBA7]/40 hover:shadow-lg transition-all group"
              >
                <div className="p-3 bg-[#00BBA7]/10 text-[#00BBA7] rounded-xl group-hover:scale-105 transition-transform duration-300">
                  <IconComponent size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-[#181A18] mb-1 group-hover:text-[#00BBA7] transition-colors font-heading truncate">
                    {item.title}
                  </h3>
                  <p className="text-[#555C55] text-xs leading-relaxed font-light line-clamp-2">
                    {item.description}
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
