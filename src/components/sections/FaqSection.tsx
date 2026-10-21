"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/content/faq";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-[1000px]">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#013AFF]/10 border border-[#013AFF]/20 text-[#013AFF] text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            Answers & Clarity
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#111311] tracking-tight mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#4a524a]">
            Everything you need to know about our engagement model, intellectual property, timelines, and engineering standards.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border border-black/10 rounded-2xl overflow-hidden transition-all duration-200 bg-neutral-50/50 hover:bg-neutral-50"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#013AFF]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-lg font-bold text-[#111311] pr-2">
                    {faq.question}
                  </span>
                  <span
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-black/10 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#013AFF] text-white" : "text-[#111311]"
                    }`}
                  >
                    <ChevronDown size={15} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-4 sm:px-6 sm:pb-6 text-xs sm:text-base text-[#4a524a] leading-relaxed border-t border-black/5 pt-3 sm:pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

