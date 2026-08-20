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
        className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-[#121212] font-black uppercase tracking-widest transition-all flex items-center gap-2"
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
            className="flex items-center gap-2 text-slate-500 hover:text-teal-500 transition-colors mb-12 font-mono uppercase tracking-widest text-sm"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>

          {/* Header */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-teal-500 font-mono text-sm tracking-widest uppercase">Project Overview</span>
                <div className="w-12 h-px bg-teal-500/30"></div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter uppercase">{project.title}</h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-10 font-light">
                {project.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {renderDemoButton()}
              </div>
            </div>

            <div className="tech-card rounded-2xl overflow-hidden border border-white/5">
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
                <div className="p-2 bg-teal-500/10 rounded-lg text-teal-500">
                  <CheckCircle2 size={24} />
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tight">Key Features</h2>
              </div>
              <ul className="space-y-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-slate-400 leading-relaxed">
                    <span className="text-teal-500 font-mono mt-1">▸</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Solutions */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-teal-500/10 rounded-lg text-teal-500">
                  <Trophy size={24} />
                </div>
                <h2 className="text-2xl font-bold uppercase tracking-tight">Core Challenges</h2>
              </div>
              <ul className="space-y-4">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex gap-3 text-slate-400 leading-relaxed">
                    <span className="text-teal-500 font-mono mt-1">▸</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 tech-card p-12 rounded-3xl border border-white/5 bg-white/[0.01]">
            <div className="flex items-center gap-3 mb-10 justify-center">
              <div className="w-12 h-px bg-teal-500/30"></div>
              <h2 className="text-3xl font-bold uppercase tracking-tight text-center">Project Benefits</h2>
              <div className="w-12 h-px bg-teal-500/30"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.benefits.map((benefit, i) => (
                <div key={i} className="flex flex-col gap-3 p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-teal-500/30 transition-all">
                  <span className="text-teal-500 font-mono text-xl">0{i+1}.</span>
                  <p className="text-slate-300 leading-relaxed font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Footer */}
          <div className="mt-24 pt-12 border-t border-white/5">
            <h3 className="text-sm font-mono text-slate-500 uppercase tracking-[0.3em] mb-8 text-center">Built With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-6 py-3 bg-white/5 border border-white/10 text-white font-mono uppercase tracking-widest text-xs rounded-full hover:border-teal-500 transition-colors"
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
