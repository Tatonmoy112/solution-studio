import { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import { Code2, Layers, Globe, Smartphone, Server, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Services & Technical Capabilities",
  description:
    "Explore our full suite of enterprise software capabilities: custom ERP architectures, modern web platforms, Flutter mobile apps, and cloud DevOps.",
};

const iconMap = {
  Code2,
  Layers,
  Globe,
  Smartphone,
  Server,
};

export default function ServicesPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12">
      <div className="container mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#013AFF]/10 border border-[#013AFF]/20 text-[#013AFF] text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            Capabilities Catalog
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111311] tracking-tight mb-4 sm:mb-6">
            Enterprise Engineering Services Built for Mission-Critical Demands
          </h1>
          <p className="text-sm sm:text-lg text-[#4a524a] leading-relaxed">
            We partner with growing businesses and large enterprises to build systems that scale effortlessly. Every solution is tailored to your business model with strict type safety, modular architecture, and zero bloated templates.
          </p>
        </div>

        {/* Detailed Service Cards */}
        <div className="space-y-10 sm:space-y-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.iconName as keyof typeof iconMap] || Code2;

            return (
              <section
                key={service.id}
                id={service.slug}
                className="scroll-mt-32 p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-white border border-black/10 shadow-sm grid lg:grid-cols-12 gap-6 sm:gap-10 items-start"
              >
                {/* Left Description */}
                <div className="lg:col-span-6 space-y-5 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#013AFF]/10 text-[#013AFF] flex items-center justify-center shrink-0">
                      <Icon size={22} className="sm:w-6 sm:h-6" />
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#6e766e]">
                      Service 0{index + 1}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-3xl font-extrabold text-[#111311] tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#4a524a] leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Typical Use Cases */}
                  <div className="pt-2">
                    <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#111311] mb-2">
                      Typical High-Impact Scenarios
                    </h3>
                    <ul className="space-y-1.5 text-xs text-[#555d55]">
                      {service.useCases.map((uc) => (
                        <li key={uc} className="flex items-start gap-2">
                          <span className="text-[#013AFF] font-bold">•</span>
                          <span>{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-[#013AFF] hover:bg-[#002ECC] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm"
                  >
                    <span>Request Technical Scope</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Right Specifications */}
                <div className="lg:col-span-6 bg-neutral-50/70 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-black/8 space-y-5 sm:space-y-6">
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#111311] mb-3">
                      Key Engineering Deliverables
                    </h3>
                    <div className="space-y-2.5">
                      {service.keyDeliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2a302a]">
                          <Check size={16} className="text-[#00BBA7] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 sm:pt-6 border-t border-black/8">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#111311] mb-3">
                      Primary Technology Stack
                    </h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 sm:px-3 py-1 rounded-lg bg-white border border-black/10 text-xs font-mono text-[#181a18] shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

