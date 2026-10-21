"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Sparkles, Activity, Layers } from "lucide-react";

export default function DeviceMockupPreview() {
  return (
    <div className="relative w-full max-w-[580px] mx-auto lg:max-w-none flex items-center justify-center py-4 sm:py-6">
      {/* Ambient background glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#013AFF]/15 via-[#7C3AED]/20 to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* Floating Note Tag */}
      <motion.div
        initial={{ opacity: 0, y: -10, rotate: -3 }}
        animate={{ opacity: 1, y: 0, rotate: -4 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute -top-2 right-4 sm:right-10 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl border border-black/10 shadow-lg text-left rotate-[-4deg]"
      >
        <div className="text-[10px] font-mono uppercase tracking-wider text-[#6e766e]">
          Engineered by
        </div>
        <div className="text-xs font-bold text-[#111311] flex items-center gap-1 font-serif italic">
          <span>Your Vision, Our Code</span>
          <Sparkles size={12} className="text-[#013AFF]" />
        </div>
      </motion.div>

      {/* Laptop & Phone Composition Container */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9.5] flex items-center justify-center">
        {/* ================= LAPTOP MOCKUP ================= */}
        <div className="relative w-[92%] sm:w-[88%] h-[84%] bg-[#0B0F17] rounded-2xl p-2.5 sm:p-3 shadow-2xl border border-white/10 overflow-hidden flex flex-col">
          {/* Laptop Screen Bezel Top Bar */}
          <div className="flex items-center justify-between px-2 pb-2 border-b border-white/8 shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="px-3 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-white/50 truncate max-w-[160px] sm:max-w-xs">
              solutionstudio.bd/dashboard
            </div>
            <div className="flex items-center gap-1 text-white/40 text-[10px] font-mono">
              <Shield size={11} className="text-emerald-400" />
              <span>TLS 1.3</span>
            </div>
          </div>

          {/* Laptop Screen Inner Content */}
          <div className="flex-1 p-3 sm:p-4 bg-gradient-to-br from-[#0F172A] via-[#0B0F17] to-[#05080E] rounded-xl overflow-hidden flex flex-col justify-between relative">
            {/* Top Stats Strip */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-wider font-mono text-[#00BBA7] font-semibold">
                    Production Architecture
                  </span>
                  <h4 className="text-sm sm:text-base font-extrabold text-white tracking-tight">
                    Build Something Great
                  </h4>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-[#013AFF]/20 border border-[#013AFF]/40 text-[#60A5FA] text-[10px] font-semibold flex items-center gap-1">
                  <Activity size={10} className="animate-pulse" />
                  <span>99.98% Uptime</span>
                </div>
              </div>

              {/* Metric Cards Grid */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                  <div className="text-[9px] font-mono text-white/50">Throughput</div>
                  <div className="text-xs sm:text-sm font-bold text-white">4.8k req/s</div>
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                  <div className="text-[9px] font-mono text-white/50">Latency (p99)</div>
                  <div className="text-xs sm:text-sm font-bold text-emerald-400">22ms</div>
                </div>
                <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                  <div className="text-[9px] font-mono text-white/50">Security</div>
                  <div className="text-xs sm:text-sm font-bold text-[#60A5FA]">Zero Trust</div>
                </div>
              </div>
            </div>

            {/* Code / Visual Bottom Banner */}
            <div className="p-2 sm:p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-[10px] font-mono text-white/70">
              <div className="flex items-center gap-1.5 truncate">
                <Terminal size={12} className="text-[#013AFF] shrink-0" />
                <span className="truncate text-white/60">
                  const enterprise = await SolutionStudio.deploy();
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px] shrink-0 font-semibold">
                ACTIVE
              </span>
            </div>
          </div>
        </div>

        {/* ================= SMARTPHONE MOCKUP (Tilted Foreground) ================= */}
        <motion.div
          initial={{ opacity: 0, x: 20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="absolute -bottom-2 sm:-bottom-4 -right-1 sm:right-2 z-10 w-[38%] sm:w-[32%] aspect-[9/18] bg-[#000000] rounded-[24px] sm:rounded-[32px] p-2 shadow-2xl border-2 border-white/15 overflow-hidden flex flex-col"
        >
          {/* Dynamic Island / Notch */}
          <div className="w-12 sm:w-16 h-3 bg-black rounded-full mx-auto mb-1.5 shrink-0" />

          {/* Phone Screen */}
          <div className="flex-1 bg-gradient-to-b from-[#1E1B4B] via-[#0F172A] to-[#020617] rounded-[18px] sm:rounded-[24px] p-2.5 sm:p-3 text-white flex flex-col justify-between overflow-hidden">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[9px] text-white/60">
                <Layers size={10} className="text-[#A5B4FC]" />
                <span className="font-mono">SolutionApp</span>
              </div>
              <div className="text-xs sm:text-sm font-extrabold leading-tight tracking-tight">
                Better ideas.
                <br />
                <span className="text-[#818CF8]">Bigger impact.</span>
              </div>
            </div>

            {/* Mini action button */}
            <div className="space-y-1.5">
              <div className="h-6 sm:h-7 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-[10px] font-semibold text-white shadow-md">
                Launch Project
              </div>
              <div className="text-[8px] text-center text-white/40 font-mono">
                iOS & Android Native
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

