"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink, CheckCircle2, Trophy, Info } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ProjectDetails() {
  const params = useParams();
  const router = useRouter();
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#F9F9F9] text-[#181A18] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link href="/" className="text-teal-500 hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  const renderDemoButton = () => {
    if (project.demoStatus === "private") {
      return (
        <div className="group relative">
          <button className="px-8 py-4 bg-slate-800 text-slate-500 font-bold uppercase tracking-widest cursor-not-allowed flex items-center gap-2">
            Live Demo <Info size={16} />
          </button>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-[#1e1e1e] border border-teal-500/30 text-slate-300 text-xs rounded-lg opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity pointer-events-none z-50 text-center shadow-xl">
            Company project - privacy concern to show live.
          </div>
        </div>
      );
    }
    if (project.demoStatus === "not-live") {
      return (
        <div className="group relative">
          <button className="px-8 py-4 bg-slate-800 text-slate-500 font-bold uppercase tracking-widest cursor-not-allowed flex items-center gap-2">
            Live Demo <Info size={16} />
          </button>
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 p-3 bg-[#1e1e1e] border border-teal-500/30 text-slate-300 text-xs rounded-lg opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity pointer-events-none z-50 text-center shadow-xl">
            Development ongoing — not live yet.
          </div>
        </div>
      );
    }
    return (
      <a 
        href={project.demo} 
        target="_blank" 
        rel="noreferrer" 
        className="px-8 py-4 bg-[#013AFF] hover:bg-[#002ecc] text-white font-black uppercase tracking-widest transition-all rounded-full flex items-center gap-2 shadow-lg"
      >
        Live Demo <ExternalLink size={18} />
      </a>
    );
  };

  return (
    <main className="min-h-screen bg-[#F9F9F9] text-[#181A18]">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6 md:px-12">
        <div className="container mx-auto max-w-[1550px]">
          {/* Back Button */}
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[#555C55] hover:text-[#00BBA7] transition-colors mb-12 font-mono uppercase tracking-widest text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>

          {/* Header */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#013AFF] font-mono text-sm tracking-widest uppercase font-semibold">Project Overview</span>
                <div className="w-12 h-px bg-[#013AFF]/30"></div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter uppercase font-heading">{project.title}</h1>
              <p className="text-xl text-[#4B514B] leading-relaxed mb-10 font-light">
                {project.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {renderDemoButton()}
              </div>
            </div>

            <div className="tech-card rounded-2xl overflow-hidden border border-black/10 shadow-lg">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* Features */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-[#00BBA7]/10 rounded-lg text-[#00BBA7]">
                  <CheckCircle2 size={24} />
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tight font-heading">Key Features</h2>
              </div>
              <ul className="space-y-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-[#4B514B] leading-relaxed">
                    <span className="text-[#00BBA7] font-mono mt-1 font-bold">▸</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Solutions */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-[#00BBA7]/10 rounded-lg text-[#00BBA7]">
                  <Trophy size={24} />
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tight font-heading">Core Challenges</h2>
              </div>
              <ul className="space-y-4">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex gap-3 text-[#4B514B] leading-relaxed">
                    <span className="text-[#00BBA7] font-mono mt-1 font-bold">▸</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 tech-card p-12 rounded-3xl border border-black/10 bg-white shadow-md">
            <div className="flex items-center gap-3 mb-10 justify-center">
              <div className="w-12 h-px bg-[#013AFF]/40"></div>
              <h2 className="text-3xl font-bold uppercase tracking-tight text-center font-heading">Project Benefits</h2>
              <div className="w-12 h-px bg-[#013AFF]/40"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.benefits.map((benefit, i) => (
                <div key={i} className="flex flex-col gap-3 p-6 bg-[#F9F9F9] border border-black/10 rounded-2xl hover:border-[#013AFF]/40 transition-all">
                  <span className="text-[#013AFF] font-mono text-xl font-bold">0{i+1}.</span>
                  <p className="text-[#181A18] leading-relaxed font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Footer */}
          <div className="mt-24 pt-12 border-t border-black/10">
            <h3 className="text-sm font-mono text-[#555C55] uppercase tracking-[0.3em] mb-8 text-center font-semibold">Built With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-6 py-3 bg-[#00BBA7]/10 border border-[#00BBA7]/20 text-[#00BBA7] font-mono uppercase tracking-widest text-xs rounded-full hover:bg-[#00BBA7] hover:text-white transition-colors font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
