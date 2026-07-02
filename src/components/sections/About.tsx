"use client";

import { motion } from "framer-motion";
import { aboutContent, valuesContent } from "@/lib/content";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  const { quoteBlock, descriptionParagraphs, sectionTitle, questionTitle, questionSubtitle } = aboutContent;
  const { mission, vision } = valuesContent;

  return (
    <section id="about" className="py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto max-w-[1550px]">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-teal-500 font-mono text-sm">02.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-normal font-heading">
              {sectionTitle}
            </h2>
          </div>
          <div className="w-20 h-1 bg-teal-500 rounded-full" />
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Heading, Paragraphs, Mission & Vision */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight font-heading">
                {questionTitle}
              </h3>
              <div className="space-y-4">
                {descriptionParagraphs.map((para, i) => (
                  <p key={i} className="text-slate-300 text-lg leading-relaxed font-light">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="tech-card p-6 rounded-2xl border border-white/5 bg-white/[0.01]"
              >
                <span className="text-xs font-mono text-teal-500 uppercase tracking-widest block mb-3">{mission.title}</span>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {mission.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="tech-card p-6 rounded-2xl border border-white/5 bg-white/[0.01]"
              >
                <span className="text-xs font-mono text-teal-500 uppercase tracking-widest block mb-3">{vision.title}</span>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {vision.description}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Styled Quote Block */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-teal-950/20 to-transparent border border-teal-500/20 shadow-xl overflow-hidden"
            >
              {/* Decorative light overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-6">
                <span className="text-4xl text-teal-500/30 font-serif leading-none select-none">
                  &ldquo;
                </span>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                      Most software companies ask:
                    </p>
                    <p className="text-lg md:text-xl text-slate-400 italic">
                      &ldquo;{quoteBlock.question}&rdquo;
                    </p>
                  </div>

                  <div className="w-10 h-px bg-teal-500/30 my-4" />

                  <div className="space-y-1">
                    <p className="text-xs font-mono text-teal-500 uppercase tracking-widest">
                      We ask:
                    </p>
                    <p className="text-2xl md:text-3xl font-extrabold text-white font-heading tracking-tight leading-tight">
                      &ldquo;{quoteBlock.answer}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-2 pt-6 border-t border-white/5">
                  <p className="text-teal-500 font-extrabold font-heading text-lg tracking-tight">
                    That single shift changes everything.
                  </p>
                  <p className="text-slate-500 text-xs uppercase tracking-widest font-mono">
                    The Studio Philosophy
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
