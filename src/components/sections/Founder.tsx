"use client";

import { motion } from "framer-motion";
import { founderContent } from "@/lib/content";
import Image from "next/image";

export default function Founder() {
  const { sectionTitle, messageLines, name, role } = founderContent;

  return (
    <section id="founder" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background subtle gradients */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[140px] -z-10" />

      <div className="container mx-auto max-w-[1550px]">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-teal-500 font-mono text-sm">08.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-normal font-heading">
              {sectionTitle}
            </h2>
          </div>
          <div className="w-20 h-1 bg-teal-500 rounded-full" />
        </div>

        {/* Redesigned Premium Editorial Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Author Profile info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6 lg:sticky lg:top-32"
          >
            <div className="space-y-3">
              <span className="text-teal-500 font-mono text-xs uppercase tracking-widest block">
                {"// Message from Leadership"}
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight font-heading">
                {name}
              </h3>
              <p className="text-teal-500 font-mono text-sm tracking-wider uppercase font-semibold">
                {role}
              </p>
            </div>
            
            <div className="h-[2px] w-16 bg-teal-500/30" />
            
            <div className="text-slate-500 text-xs font-mono uppercase tracking-widest space-y-1">
              <p>Solution Studio Bangladesh</p>
              <p>Authentic &bull; Outcome-driven</p>
            </div>
          </motion.div>

          {/* Right Column: Editorial Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 relative space-y-8 pl-4 lg:pl-8"
          >
            {/* Elegant large quote icon watermark behind text */}
            <span className="absolute -top-16 -left-6 md:-left-12 text-[10rem] font-serif text-teal-500/5 select-none leading-none pointer-events-none">
              &ldquo;
            </span>

            <div className="space-y-6 text-slate-300 text-lg md:text-xl leading-relaxed font-light relative z-10">
              {messageLines.map((line, idx) => (
                <p key={idx} className="relative">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 
          FUTURE PORTRAIT IMAGE INTEGRATION:
          The layout code with the portrait image is saved below as the 'FounderWithImage' component.
          To restore it in the future, you can swap the exports/returns or replace this section with the code below.
        */}
      </div>
    </section>
  );
}

// === ORIGINAL LAYOUT WITH PORTRAIT IMAGE (RETAINED FOR FUTURE RESTORATION) ===
export function FounderWithImage() {
  const { sectionTitle, messageLines, name, role, imagePath } = founderContent;
  
  return (
    <section id="founder" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-[1550px]">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-teal-500 font-mono text-sm">08.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-normal font-heading">
              {sectionTitle}
            </h2>
          </div>
          <div className="w-20 h-1 bg-teal-500 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Image with natural modern framing */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-[4/5] group">
              <div className="absolute inset-0 border-2 border-teal-500/20 translate-x-4 translate-y-4 rounded-3xl group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-3xl -z-10" />
              <div className="absolute inset-0 bg-[#1e1e1e] border border-white/5 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                <Image
                  src={imagePath}
                  alt={name}
                  fill
                  sizes="(max-w-768px) 100vw, 400px"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-teal-500 rounded-bl-3xl" />
            </div>
          </div>

          {/* Right Column: Personal message */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3">
              <span className="text-teal-500 font-mono text-xs uppercase tracking-widest">Direct message</span>
              <div className="w-8 h-px bg-teal-500/30" />
            </div>

            <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-light italic">
              {messageLines.map((line, idx) => (
                <p key={idx} className="relative pl-6">
                  {idx === 0 && (
                    <span className="absolute left-0 top-0 text-3xl font-serif text-teal-500/30 select-none leading-none">
                      &ldquo;
                    </span>
                  )}
                  {line}
                  {idx === messageLines.length - 1 && (
                    <span className="text-3xl font-serif text-teal-500/30 select-none leading-none inline-block ml-1">
                      &rdquo;
                    </span>
                  )}
                </p>
              ))}
            </div>

            <div className="pt-6 border-t border-white/5 flex flex-col gap-1">
              <h4 className="text-2xl font-bold text-white font-heading">
                {name}
              </h4>
              <p className="text-teal-500 font-mono text-sm tracking-wider uppercase">
                {role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
