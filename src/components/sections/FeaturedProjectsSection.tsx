"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { projects } from "@/content/projects";

export default function FeaturedProjectsSection() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-neutral-50/80 border-t border-black/8 relative">
      <div className="container mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#013AFF]/10 border border-[#013AFF]/20 text-[#013AFF] text-xs font-semibold uppercase tracking-wider mb-4">
              Proven Delivery
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111311] tracking-tight">
              Featured Case Studies & Deployed Systems
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#013AFF] hover:text-[#002ECC] group w-fit"
          >
            <span>View All Client Systems</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featured.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="group flex flex-col rounded-3xl bg-white border border-black/10 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] w-full bg-neutral-900 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} Preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-mono font-medium border border-white/20">
                    {project.industry}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#111311] text-xs font-semibold">
                    <ShieldCheck size={13} className="text-[#00BBA7]" />
                    <span>Verified Production</span>
                  </span>
                </div>

                {/* Bottom Metric Pill */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div
                        key={m.label}
                        className="px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md text-white border border-white/15 text-xs"
                      >
                        <span className="font-bold text-[#00BBA7] mr-1.5">{m.value}</span>
                        <span className="text-neutral-300">{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-xs font-mono text-[#013AFF] uppercase font-semibold">
                      Client: {project.client}
                    </span>
                    <span className="text-xs text-[#6e766e]">{project.year}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#111311] tracking-tight mb-3 group-hover:text-[#013AFF] transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-[#4a524a] leading-relaxed mb-6">
                    {project.summary}
                  </p>
                </div>

                {/* Tags & Action Link */}
                <div className="pt-6 border-t border-black/8 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-neutral-100 text-[#3a423a] text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#013AFF] uppercase tracking-wider group-hover:underline"
                  >
                    <span>Read Architecture Case Study</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

