"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code2, Layers, Globe, Smartphone, Server, ArrowRight, Check } from "lucide-react";
import { services } from "@/content/services";

const iconMap = {
  Code2,
  Layers,
  Globe,
  Smartphone,
  Server,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00BBA7]/10 border border-[#00BBA7]/20 text-[#009988] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-4">
              Core Capabilities
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#111311] tracking-tight">
              Enterprise Software Solutions Engineered for Scale
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#013AFF] hover:text-[#002ECC] group w-fit"
          >
            <span>Explore Complete Capabilities</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent =
              iconMap[service.iconName as keyof typeof iconMap] || Code2;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-5 sm:p-8 rounded-2xl bg-white border border-black/8 shadow-sm hover:shadow-xl hover:border-[#013AFF]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#013AFF]/10 text-[#013AFF] flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 group-hover:bg-[#013AFF] group-hover:text-white transition-all duration-300">
                    <IconComponent size={22} />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#111311] tracking-tight mb-2.5 sm:mb-3">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4a524a] leading-relaxed mb-5 sm:mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-2 mb-5 sm:mb-6">
                    {service.keyDeliverables.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-[#2a302a]">
                        <Check size={14} className="text-[#00BBA7] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags & Deep Dive Link */}
                <div className="pt-5 sm:pt-6 border-t border-black/6">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-neutral-100 text-[#3a423a] text-[10px] sm:text-[11px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/services#${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#013AFF] group-hover:underline"
                  >
                    <span>View Specifications</span>
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

