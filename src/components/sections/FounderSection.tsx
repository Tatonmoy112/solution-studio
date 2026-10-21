"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { founderBio } from "@/content/company";

export default function FounderSection() {
  return (
    <section id="founder" className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-black/10 shadow-xl bg-neutral-100">
              <Image
                src={founderBio.imagePath}
                alt={`${founderBio.name} - ${founderBio.role}`}
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-mono uppercase tracking-widest text-[#00BBA7] block font-semibold mb-1">
                  Architecture & Leadership
                </span>
                <h3 className="text-2xl font-bold font-heading">{founderBio.name}</h3>
                <p className="text-xs text-neutral-300 font-mono mt-0.5">
                  {founderBio.role}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#013AFF]/10 border border-[#013AFF]/20 text-[#013AFF] text-xs font-semibold uppercase tracking-wider mb-6 w-fit">
              Founder&apos;s Perspective
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111311] tracking-tight mb-8">
              &ldquo;Software Is Not Measured in Features. It Is Measured in Outcomes.&rdquo;
            </h2>

            <div className="space-y-5 text-base md:text-lg text-[#4a524a] leading-relaxed mb-8">
              {founderBio.statement.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-black/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#013AFF] text-white flex items-center justify-center font-bold text-sm">
                TT
              </div>
              <div>
                <p className="font-bold text-[#111311] text-sm">{founderBio.name}</p>
                <p className="text-xs text-[#6e766e]">{founderBio.role} • Solution Studio</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

