"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";

type ProjectsProps = {
  projectList?: Project[];
  showAllButton?: boolean;
  title?: string;
  subtitle?: string;
};

export default function Projects({
  projectList,
  showAllButton = true,
  title = "Projects",
  subtitle = "A curated selection of enterprise builds, custom platforms, and product launches — crafted for clients across Bangladesh, Southeast Asia, and globally remote partnerships."
}: ProjectsProps) {
  const visibleProjects = projectList ?? projects.filter((project) => project.featured);

  return (
    <section id="projects" key="projects-section" className="py-24 px-6 md:px-12 bg-[#121212]">
      <div className="container mx-auto max-w-[1550px]">
        <div className="mb-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#013AFF] font-mono text-sm font-bold">03.</span>
                <h2 className="text-3xl md:text-5xl font-bold text-[#181A18] uppercase tracking-tighter">{title}</h2>
              </div>
              {subtitle ? (
                <p className="max-w-3xl text-[#4B514B] leading-relaxed">{subtitle}</p>
              ) : null}
            </div>

            {showAllButton ? (
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-[#00BBA7]/30 bg-[#00BBA7]/10 px-6 py-3 text-sm font-mono uppercase tracking-widest text-[#00BBA7] transition hover:border-[#00BBA7] hover:bg-[#00BBA7] hover:text-white font-semibold"
              >
                All Projects
              </Link>
            ) : null}
          </div>
          <div className="w-20 h-1 bg-[#013AFF] rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="tech-card rounded-2xl overflow-hidden flex flex-col group transition-all border border-black/10 bg-white shadow-sm hover:shadow-xl"
            >
              <div className="w-full overflow-hidden border-b border-black/10 relative bg-[#F9F9F9]">
                {project.hasImage ? (
                  <div className="relative w-full aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="bg-black/5 aspect-video flex items-center justify-center group-hover:bg-black/10 transition-colors">
                    <span className="text-[#555C55] font-mono text-sm uppercase tracking-widest">Project Preview</span>
                  </div>
                )}
                <Link
                  href={`/projects/${project.id}`}
                  className="absolute inset-0 bg-[#013AFF]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  <div className="bg-white p-4 rounded-full text-[#013AFF] transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-lg">
                    <ArrowUpRight size={24} />
                  </div>
                </Link>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#181A18] mb-3 group-hover:text-[#013AFF] transition-colors uppercase tracking-tight font-heading">
                  {project.title}
                </h3>
                <p className="text-[#555C55] text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest bg-[#00BBA7]/10 text-[#00BBA7] border border-[#00BBA7]/20 rounded-md font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-black/10 items-center">
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-[#00BBA7] hover:text-[#009988] transition-colors flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest font-semibold"
                    >
                      Details &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
