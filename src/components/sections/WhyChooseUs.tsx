"use client";

import { motion } from "framer-motion";
import { whyChooseUsContent } from "@/lib/content";
import { ShieldCheck, Workflow, MessageSquareText, TrendingUp, Handshake, Award } from "lucide-react";

export default function WhyChooseUs() {
  const { sectionTitle, items } = whyChooseUsContent;

  const icons = [
    <TrendingUp key="0" className="text-teal-500" size={24} />,
    <Workflow key="1" className="text-teal-500" size={24} />,
    <MessageSquareText key="2" className="text-teal-500" size={24} />,
    <ShieldCheck key="3" className="text-teal-500" size={24} />,
    <Handshake key="4" className="text-teal-500" size={24} />,
    <Award key="5" className="text-teal-500" size={24} />
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-[1550px]">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-teal-500 font-mono text-sm">03.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-normal font-heading">
              {sectionTitle}
            </h2>
          </div>
          <div className="w-20 h-1 bg-teal-500 rounded-full" />
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="tech-card p-8 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-teal-500/30 hover:bg-white/[0.02] transition-all group relative overflow-hidden"
            >
              {/* Corner Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-teal-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-500/10 text-teal-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {icons[index % icons.length]}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-500 transition-colors font-heading">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
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
