"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye } from "lucide-react";
import { heroContent } from "@/lib/content";

export default function Hero() {
  const [talkBtn, seeBtn] = heroContent.ctaButtons;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-36 md:pt-24 pb-16 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background Decorative Mesh Gradients */}
      <div className="absolute top-1/4 -right-1/4 w-96 h-96 md:w-[600px] md:h-[600px] bg-teal-500/10 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 md:w-[600px] md:h-[600px] bg-teal-600/5 rounded-full blur-[120px] -z-10" />

      {/* Grid Pattern Background overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] -z-20" />

      <div className="container mx-auto max-w-[1550px] z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="text-teal-500 font-mono text-sm tracking-widest uppercase">
              Bangladesh Growth Partner
            </span>
            <div className="w-12 h-px bg-teal-500/30" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter text-white font-heading mb-6">
            Your Business Problems Deserve{" "}
            <span className="text-teal-500 drop-shadow-[0_0_15px_rgba(20,184,166,0.25)]">
              Real Solutions
            </span>{" "}
            — Not Just Code
          </h1>

          <p className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed mb-10 max-w-2xl">
            {heroContent.subheadline}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={talkBtn.href}
              className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-[#121212] font-semibold text-base uppercase tracking-wider rounded-full transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_10px_20px_rgba(20,184,166,0.3)] flex items-center gap-2 group"
            >
              {talkBtn.text}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={seeBtn.href}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-teal-500/50 font-semibold text-base uppercase tracking-wider rounded-full transition-all duration-300 hover:translate-y-[-2px] flex items-center gap-2 group"
            >
              {seeBtn.text}
              <Eye size={18} className="group-hover:opacity-80 transition-opacity" />
            </a>
          </div>
        </motion.div>

        {/* Right Fluid Geometric Abstract Shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center items-center h-[400px] lg:h-[500px]"
        >
          <div className="relative w-full max-w-[400px] aspect-square">
            {/* Background ambient glow behind details */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-teal-700/5 rounded-3xl rotate-6 blur-md -z-10 scale-95" />
            
            {/* Outer border shape */}
            <div className="absolute inset-0 border border-teal-500/20 rounded-3xl rotate-12 transition-transform duration-700 hover:rotate-6" />

            {/* Main glass panel */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/5 rounded-3xl backdrop-blur-2xl flex flex-col justify-center items-center p-8 overflow-hidden shadow-2xl">
              {/* Dynamic abstract artwork representing "System" */}
              <div className="relative w-full h-full flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <div className="w-3 h-3 rounded-full bg-teal-500/80 shadow-[0_0_8px_var(--accent)]" />
                  <div className="h-px flex-1 bg-gradient-to-r from-teal-500/50 to-transparent mx-4" />
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                    SYSTEM OK
                  </span>
                </div>

                <div className="my-auto space-y-6">
                  {/* Floating abstract code and connections */}
                  <div className="h-2 w-3/4 bg-teal-500/30 rounded-full" />
                  <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                  <div className="relative pl-6 border-l-2 border-teal-500/40">
                    <div className="text-teal-500 font-mono text-xs mb-1">&gt; ANALYZING OUTCOME</div>
                    <div className="text-white text-2xl font-extrabold tracking-tighter">
                      OUTCOME &gt; OUTPUT
                    </div>
                  </div>
                  <div className="h-2 w-2/3 bg-white/5 rounded-full" />
                </div>

                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-mono text-slate-600">
                    LATENCY: 0ms
                  </span>
                  <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 bg-teal-500/30 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-teal-500/50 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Ambient small corner brackets */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-teal-500/40 rounded-tl-xl" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-teal-500/40 rounded-br-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
