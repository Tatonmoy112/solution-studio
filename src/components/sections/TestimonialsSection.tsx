"use client";

import { motion } from "framer-motion";
import { clientTestimonials } from "@/content/company";
import { Quote, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-neutral-50/70 border-t border-black/8 relative overflow-hidden">
      <div className="container mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00BBA7]/10 border border-[#00BBA7]/20 text-[#009988] text-xs font-semibold uppercase tracking-wider mb-4">
            Client Verification
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111311] tracking-tight mb-4">
            What Our Partners Say About Working With Us
          </h2>
          <p className="text-base text-[#4a524a]">
            Direct feedback from managing directors, engineering leads, and startup founders who trusted us with their systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-black/8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <Quote size={28} className="text-[#013AFF]/30 mb-6" />
                <p className="text-sm md:text-base text-[#2a302a] leading-relaxed mb-8 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-black/8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-[#111311]">{testimonial.clientName}</h3>
                    <p className="text-xs text-[#6e766e]">{testimonial.clientRole}</p>
                    <p className="text-xs font-semibold text-[#013AFF] mt-0.5">{testimonial.company}</p>
                  </div>
                  {testimonial.verified && (
                    <div className="inline-flex items-center gap-1 text-[11px] font-mono text-[#009988] bg-[#00BBA7]/10 px-2 py-0.5 rounded">
                      <CheckCircle2 size={12} />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

