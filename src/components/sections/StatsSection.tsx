"use client";

import { motion } from "framer-motion";
import { companyStats } from "@/content/company";

export default function StatsSection() {
  return (
    <section className="py-10 sm:py-12 px-4 sm:px-6 md:px-12 border-y border-black/8 bg-white/70 backdrop-blur-md">
      <div className="container mx-auto max-w-[1400px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-12">
          {companyStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col text-left"
            >
              <span className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#111311] tracking-tight font-heading whitespace-nowrap">
                <span className="text-[#013AFF]">{stat.value.slice(0, -1)}</span>
                <span>{stat.value.slice(-1)}</span>
              </span>
              <span className="text-xs sm:text-base font-semibold text-[#181a18] mt-1 line-clamp-2">
                {stat.label}
              </span>
              {stat.subtext && (
                <span className="text-[11px] sm:text-xs text-[#6e766e] mt-0.5 line-clamp-2">
                  {stat.subtext}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

