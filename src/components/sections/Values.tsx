"use client";

import { motion } from "framer-motion";
import { valuesContent } from "@/lib/content";
import { Target, Shield, MessageSquare, Sparkles, Handshake } from "lucide-react";
import React from "react";

const iconMap = [
  <Target key="0" className="text-teal-500" size={24} />,
  <Shield key="1" className="text-teal-500" size={24} />,
  <MessageSquare key="2" className="text-teal-500" size={24} />,
  <Sparkles key="3" className="text-teal-500" size={24} />,
  <Handshake key="4" className="text-teal-500" size={24} />
];

export default function Values() {
  const { sectionTitle, items } = valuesContent;

  return (
    <section className="py-24 px-6 md:px-12 bg-[#060606] border-y border-white/5 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-950/10 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-[1550px] relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-teal-500 font-mono text-sm">07.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-normal font-heading">
              {sectionTitle}
            </h2>
          </div>
          <div className="w-20 h-1 bg-teal-500 rounded-full" />
        </div>

        {/* 3x2 Centered Layout Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`tech-card p-8 rounded-2xl border border-white/5 bg-[#121212]/50 hover:bg-[#121212]/80 hover:border-teal-500/30 transition-all duration-300 group relative overflow-hidden ${
                index === 3 ? "lg:col-start-1 lg:col-span-1" : ""
              }`}
            >
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-col gap-6">
                <div className="p-3 bg-teal-500/10 text-teal-500 rounded-xl w-fit group-hover:scale-110 group-hover:bg-teal-500/20 transition-all duration-300">
                  {iconMap[index] || <Sparkles className="text-teal-500" size={24} />}
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white font-heading group-hover:text-teal-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
