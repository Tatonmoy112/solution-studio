"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Sparkles, CheckCircle2 } from "lucide-react";
import { heroContent } from "@/content/company";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center pt-24 sm:pt-28 md:pt-36 pb-16 sm:pb-20 px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Dynamic Ambient Blur Glows */}
      <div className="absolute top-1/4 -right-16 w-72 sm:w-96 h-72 sm:h-96 md:w-[650px] md:h-[650px] bg-[#00BBA7]/10 rounded-full blur-[100px] sm:blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-72 sm:w-96 h-72 sm:h-96 md:w-[600px] md:h-[600px] bg-[#013AFF]/10 rounded-full blur-[110px] sm:blur-[130px] -z-10 pointer-events-none" />

      <div className="container mx-auto max-w-[1400px] z-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Core Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#013AFF]/10 border border-[#013AFF]/20 text-[#013AFF] text-[11px] sm:text-xs font-semibold tracking-wider uppercase w-fit mb-5 sm:mb-6">
            <Sparkles size={13} className="text-[#013AFF] shrink-0" />
            <span>Enterprise Software & Architecture Agency</span>
          </div>

          {/* Master Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#111311] leading-[1.12] sm:leading-[1.08] mb-5 sm:mb-6">
            Your Business Problems Deserve{" "}
            <span className="text-[#013AFF] underline decoration-[#013AFF]/20 decoration-wavy decoration-2">
              Real Solutions
            </span>{" "}
            — Not Just Code.
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-[#4a524a] leading-relaxed mb-8 sm:mb-10 max-w-2xl font-normal">
            {heroContent.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href={heroContent.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#013AFF] hover:bg-[#002ECC] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all duration-200 shadow-md hover:shadow-[0_8px_24px_rgba(1,58,255,0.35)] w-full sm:w-auto text-center"
            >
              <span>{heroContent.primaryCta.label}</span>
              <ArrowRight size={15} />
            </Link>

            <Link
              href={heroContent.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 bg-white hover:bg-neutral-50 active:scale-[0.98] text-[#111311] border border-black/15 font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all duration-200 w-full sm:w-auto text-center"
            >
              <span>{heroContent.secondaryCta.label}</span>
            </Link>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-6 text-xs text-[#5a625a]">
            <div className="inline-flex items-center gap-2">
              <CheckCircle2 size={15} className="text-[#00BBA7] shrink-0" />
              <span>Full IP & Source Code Ownership</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <CheckCircle2 size={15} className="text-[#00BBA7] shrink-0" />
              <span>100% In-House Senior Architecture</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <CheckCircle2 size={15} className="text-[#00BBA7] shrink-0" />
              <span>Sub-Second Performance SLA</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visual Telemetry Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5 relative flex justify-center items-center w-full mt-4 lg:mt-0"
        >
          <div className="relative w-full max-w-md aspect-auto sm:aspect-[4/4.5] rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-gradient-to-br from-white/95 via-white/85 to-neutral-50/90 border border-black/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] backdrop-blur-xl flex flex-col justify-between overflow-hidden gap-5 sm:gap-0">
            {/* Geometric Accent Line */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-bl from-[#013AFF]/20 to-transparent rounded-full blur-2xl pointer-events-none" />

            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between pb-3.5 sm:pb-4 border-b border-black/8">
              <div className="flex items-center gap-2">
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ef4444]/80 inline-block" />
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#f59e0b]/80 inline-block" />
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#10b981]/80 inline-block" />
              </div>
              <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-[#00BBA7] font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00BBA7] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00BBA7]" />
                </span>
                <span>SYSTEM HEALTH: 99.99%</span>
              </div>
            </div>

            {/* Simulated Architecture Telemetry */}
            <div className="my-auto py-2 sm:py-4 flex flex-col gap-4 sm:gap-5">
              <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-900 text-white font-mono text-[11px] sm:text-xs space-y-1.5 sm:space-y-2 shadow-inner overflow-x-auto">
                <div className="flex items-center justify-between text-[#a1a8a1] border-b border-white/10 pb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Terminal size={13} className="text-[#00BBA7]" />
                    <span>ENGINEERING_MANIFESTO.sh</span>
                  </span>
                  <span className="text-[#013AFF]">ACTIVE</span>
                </div>
                <p className="text-[#00BBA7]">$ evaluate --mission &quot;Solution Studio&quot;</p>
                <p className="text-neutral-300">
                  &gt; Business Outcome &gt; Output Volume<br />
                  &gt; Scalability: Enterprise-Ready<br />
                  &gt; RLS Database Policies: Enforced
                </p>
              </div>

              {/* Metric Pulse Items */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-black/8 shadow-sm">
                  <span className="text-[10px] sm:text-xs text-[#6e766e] font-mono uppercase block">Throughput</span>
                  <span className="text-lg sm:text-xl font-bold text-[#111311]">Sub-Second</span>
                  <span className="text-[10px] sm:text-[11px] text-[#00BBA7] block font-medium">Edge CDN Verified</span>
                </div>
                <div className="p-3 sm:p-3.5 rounded-xl bg-white border border-black/8 shadow-sm">
                  <span className="text-[10px] sm:text-xs text-[#6e766e] font-mono uppercase block">Reliability</span>
                  <span className="text-lg sm:text-xl font-bold text-[#111311]">Zero-Loss</span>
                  <span className="text-[10px] sm:text-[11px] text-[#013AFF] block font-medium">Durable Retries</span>
                </div>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="pt-3 border-t border-black/8 flex items-center justify-between text-[11px] sm:text-xs text-[#6e766e]">
              <span>Stack: Next.js • React 19 • Postgres</span>
              <span className="font-mono text-[#111311] font-semibold">v2.0.0</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

