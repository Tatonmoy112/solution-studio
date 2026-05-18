"use client";

import { motion } from "framer-motion";
import { Award, Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="flex gap-12">
          {/* Vertical Decoration */}
          <div className="hidden lg:flex flex-col items-center justify-start pt-4 shrink-0">
            <span className="text-vertical text-7xl font-black text-white/5 uppercase select-none tracking-tighter">
              STUDIO
            </span>
            <div className="w-px h-32 bg-white/5 mt-4"></div>
          </div>

          <div className="flex-1">
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-teal-500 font-mono text-sm">01.</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
                  About Us
                </h2>
              </div>
              <div className="w-20 h-1 bg-teal-500 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-slate-300 text-xl leading-relaxed mb-6 font-semibold">
                  Solution Studio is a premier software engineering agency delivering web, mobile, and custom software solutions for enterprises and startups.
                </p>
                <p className="text-slate-400 text-lg leading-relaxed">
                  We build scalable, high-performance applications with clean, maintainable code and intuitive user experiences. Every project is crafted to meet enterprise standards with fully responsive designs, optimized performance, and robust security protocols.
                </p>
              </div>

              <div className="space-y-6">
                <div className="tech-card p-6 rounded-xl flex gap-4 items-start hover:border-teal-500/50 transition-all">
                  <div className="p-3 bg-teal-500/10 text-teal-500 rounded-lg">
                    <Award size={24} />
                  </div>
                  <div className="w-full">
                    <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">
                      Our Journey
                    </h3>

                    <div className="space-y-8">
                      <div className="relative pl-6 border-l border-white/10">
                        <div className="absolute w-2.5 h-2.5 bg-teal-500/30 rounded-full -left-[5.5px] top-1.5 ring-4 ring-[#121212]"></div>
                        <p className="text-slate-400 font-bold">
                          Global Enterprise Scaling
                        </p>
                        <p className="text-teal-500/50 text-sm font-medium mt-1">
                          Roadmap Goal • 2027
                        </p>
                        <p className="text-slate-500 text-xs mt-1 uppercase tracking-wider">
                          Future Expansion Phase
                        </p>
                      </div>

                      <div className="relative pl-6 border-l border-white/10">
                        <div className="absolute w-2.5 h-2.5 bg-teal-500/50 rounded-full -left-[5.5px] top-1.5 ring-4 ring-[#121212]"></div>
                        <p className="text-slate-300 font-bold">
                          ERP & E-Commerce Rollouts
                        </p>
                        <p className="text-teal-500/60 text-sm font-medium mt-1">
                          Active Phase • 2026
                        </p>
                        <p className="text-slate-500 text-xs mt-1 uppercase tracking-wider">
                          Upcoming Deployments
                        </p>
                      </div>

                      <div className="relative pl-6 border-l border-white/10">
                        <div className="absolute w-2.5 h-2.5 bg-teal-500 rounded-full -left-[5.5px] top-1.5 ring-4 ring-[#121212]"></div>
                        <p className="text-slate-200 font-bold">
                          Agency Foundation
                        </p>
                        <p className="text-teal-500/80 text-sm font-medium mt-1">
                          Solution Studio Launch • 2026
                        </p>
                        <p className="text-slate-500 text-xs mt-1 uppercase tracking-wider">
                          Dhaka, Bangladesh & Remote
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tech-card p-6 rounded-xl flex gap-4 items-start hover:border-teal-500/50 transition-all">
                  <div className="p-3 bg-teal-500/10 text-teal-500 rounded-lg">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">
                      Our Approach
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      We combine modern tech stacks, agile methodologies, and scalable architectures to deliver solutions that drive growth, improve efficiency, and enhance user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
