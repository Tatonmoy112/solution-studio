"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-32 md:pt-20 pb-12 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Vertical Decorative Name Watermark */}
      <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden xl:block select-none pointer-events-none">
        <span className="text-vertical text-[12rem] font-black text-white/5 uppercase tracking-tighter">STUDIO</span>
      </div>

      <div className="container mx-auto max-w-5xl z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-teal-500 font-mono text-sm tracking-widest uppercase">00. Introduction</span>
            <div className="w-12 h-px bg-teal-500/30"></div>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-8 tracking-tighter text-white">
            We are <br />
            <span className="text-teal-500 drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]">
              Solution Studio
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-lg leading-relaxed font-light">
            We build scalable, modern software platforms specializing in custom <span className="text-white">ERP systems</span>, enterprise <span className="text-white">E-commerce storefronts</span>, and high-performance <span className="text-white">API integrations</span>.
          </p>

          <div className="flex flex-wrap gap-6">
            <a
              href="#projects"
              className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-[#121212] font-black uppercase tracking-widest transition-all hover:translate-x-2"
            >
              View Projects
            </a>
            <a
              href="/solution-studio-brochure.pdf"
              download
              className="px-8 py-4 border border-white/10 hover:border-teal-500 text-white font-bold uppercase tracking-widest transition-all"
            >
              Download Brochure
            </a>
          </div>


        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-first md:order-last mb-12 md:mb-0"
        >
          <div className="aspect-square w-full max-w-md mx-auto relative group">
            <div className="absolute inset-0 border-2 border-teal-500/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
            <div className="absolute inset-0 bg-[#1e1e1e] border border-white/5 overflow-hidden flex items-center justify-center">
              <img src="/logo.png" alt="Solution Studio Logo" className="w-4/5 h-4/5 object-contain p-4 hover:scale-105 transition-all duration-700" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-teal-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
