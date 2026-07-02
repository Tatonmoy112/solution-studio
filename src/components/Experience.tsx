"use client";

import { motion } from "framer-motion";
import { Briefcase, Activity } from "lucide-react";

export default function Experience() {
  const services = [
    {
      title: "Web Development",
      subtitle: "Enterprise websites, portals & applications",
      period: "Web",
      achievements: [
        "Enterprise websites, portals & web applications engineered with Next.js, React, and TypeScript.",
        "Built for speed, SEO, and conversion — responsive across every device."
      ]
    },
    {
      title: "Mobile Development",
      subtitle: "Cross-platform mobile apps for iOS and Android",
      period: "Mobile",
      achievements: [
        "Cross-platform iOS & Android apps built with Flutter & Dart.",
        "Native-level performance, smooth animations, and a unified codebase for faster delivery and lower maintenance cost."
      ]
    },
    {
      title: "Custom Systems",
      subtitle: "Tailored ERP, CRM & operations software",
      period: "Systems",
      achievements: [
        "Bespoke ERP, CRM, inventory managers, and operational dashboards tailored to your business logic.",
        "Secured with role-based access, audit trails, and robust database design."
      ]
    },
    {
      title: "E-Commerce Solutions",
      subtitle: "Shopify, WooCommerce & Magento stores",
      period: "E-Commerce",
      achievements: [
        "Full-scale stores on WooCommerce, Shopify, or Magento.",
        "Integrated payments, live inventory sync, shipping modules, and conversion-focused storefront layouts."
      ]
    },
    {
      title: "CMS Development",
      subtitle: "Flexible, secure & scalable content managers",
      period: "CMS",
      achievements: [
        "Scalable content platforms on WordPress, Magento, or Shopify.",
        "Custom plugins, clean API integrations, and intuitive editors — so your team publishes without touching code."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-[1550px]">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-teal-500 font-mono text-sm">03.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">Services</h2>
          </div>
          <div className="w-20 h-1 bg-teal-500 rounded-full"></div>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-16">
          {services.map((service, index) => (
            <div key={index} className="relative pl-10">
              {/* Timeline Dot */}
              <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-teal-500 ring-4 ring-[#121212] z-20"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                  <div className="text-teal-500/80 font-medium text-lg flex items-center gap-2">
                    <Briefcase size={18} />
                    <span className="cursor-default">
                      {service.subtitle}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-slate-400 text-sm h-fit border border-white/5">
                  <Activity size={14} /> {service.period}
                </div>
              </div>

              <div className="tech-card p-8 rounded-2xl relative z-10 hover:border-teal-500/30 transition-all">
                <ul className="space-y-4">
                  {service.achievements.map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500/50 mt-2.5 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
