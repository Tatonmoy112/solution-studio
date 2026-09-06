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
            <span className="text-[#013AFF] font-mono text-sm font-bold">04.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#181A18] uppercase tracking-normal font-heading">
              {sectionTitle}
            </h2>
          </div>
          <div className="w-20 h-1 bg-[#013AFF] rounded-full" />
        </div>

        {/* 2x3 Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Code2;
            const isBlueContext = index % 2 === 0;
            const accentColor = isBlueContext ? "#013AFF" : "#00BBA7";
            const hoverBgClass = isBlueContext ? "group-hover:bg-[#013AFF]/10" : "group-hover:bg-[#00BBA7]/10";
            const hoverTextClass = isBlueContext ? "group-hover:text-[#013AFF]" : "group-hover:text-[#00BBA7]";

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative flex flex-col justify-between p-8 rounded-2xl border border-black/10 bg-white hover:translate-y-[-6px] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Accent Top Border on Hover */}
                <div 
                  className="absolute top-0 left-0 w-full h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ backgroundColor: accentColor }}
                />

                <div>
                  <div 
                    className={`mb-6 inline-flex p-4 rounded-xl ${hoverBgClass} transition-all duration-300`}
                    style={{ color: accentColor, backgroundColor: `${accentColor}10` }}
                  >
                    <IconComponent size={26} />
                  </div>

                  <h3 className={`text-xl font-bold text-[#181A18] mb-3 font-heading ${hoverTextClass} transition-colors tracking-tight`}>
                    {item.title}
                  </h3>

                  <p className="text-[#555C55] text-sm leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono transition-colors mt-auto font-medium" style={{ color: accentColor }}>
                  <span>{isBlueContext ? "TECH ARCHITECTURE" : "BUSINESS OUTCOME"}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
