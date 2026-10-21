import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  portfolioPricingData,
  type PricingTier,
} from "@/content/portfolio-pricing";
import DeviceMockupPreview from "@/components/portfolio/DeviceMockupPreview";
import {
  Check,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  Globe,
  Smartphone,
  Palette,
  PenTool,
  Megaphone,
  Code2,
  Database,
  PlusCircle,
  MessageSquare,
  CheckCircle2,
  Rocket,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Software Solutions Portfolio & Pricing | Solution Studio",
  description:
    "Comprehensive pricing and feature specifications for Solution Studio's digital solutions, web applications, mobile apps, and custom software systems.",
  robots: {
    index: false,
    follow: false,
  },
};

const serviceIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Globe,
  Smartphone,
  Palette,
  PenTool,
  Megaphone,
  Code2,
  Database,
  PlusCircle,
};

const processIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  MessageSquare,
  PenTool,
  Code2,
  CheckCircle2,
  Rocket,
};

export default function PortfolioPricingPage() {
  const { hero, pricingTiers, servicesSection, howWeWork, ctaBanner, footer, headerCategories } =
    portfolioPricingData;

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-[#111311] selection:bg-[#013AFF] selection:text-white">
      {/* ================= TOP DOCUMENT HEADER ================= */}
      <header className="border-b border-black/8 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-3.5 sm:py-4 flex items-center justify-between">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/" className="relative h-8 sm:h-9 w-32 sm:w-36 block">
              <Image
                src="/ss-logo.png"
                alt="Solution Studio Logo"
                fill
                priority
                className="object-contain object-left"
              />
            </Link>
            <div className="hidden sm:block h-5 w-px bg-black/10" />
            <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest text-[#6e766e] uppercase font-semibold">
              We Design / Develop / Deliver
            </span>
          </div>

          {/* Sub-nav Category Pills */}
          <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar">
            {headerCategories.map((cat, i) => (
              <span
                key={cat}
                className={`font-mono text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-1 rounded-md tracking-wider transition-colors ${
                  i === 0
                    ? "bg-neutral-100 text-[#111311]"
                    : "text-[#6e766e] hover:text-[#111311]"
                }`}
              >
                {cat}
                {i < headerCategories.length - 1 && (
                  <span className="ml-1 sm:ml-2 text-black/20">/</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-14 space-y-16 sm:space-y-24">
        {/* ================= HERO SECTION ================= */}
        <section className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#013AFF]/8 border border-[#013AFF]/20 text-[#013AFF] text-[11px] font-semibold uppercase tracking-wider font-mono">
              <ShieldCheck size={13} />
              <span>{hero.eyebrow}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#111311] tracking-tight leading-[1.12]">
              {hero.titlePrefix}{" "}
              <span className="block mt-1 sm:mt-1.5">
                {hero.titleMiddle}{" "}
                <span className="bg-gradient-to-r from-[#013AFF] via-[#6366F1] to-[#7928CA] bg-clip-text text-transparent">
                  {hero.titleAccent}
                </span>
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#4a524a] leading-relaxed max-w-xl">
              {hero.description}
            </p>

            {/* 3 Core Value Anchors */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-8 border-t border-black/8">
              {hero.pillars.map((pillar) => (
                <div key={pillar.label} className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-[#111311]">
                    {pillar.label}
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#6e766e] font-medium">
                    {pillar.highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Device Visual Mockup */}
          <div className="lg:col-span-6">
            <DeviceMockupPreview />
          </div>
        </section>

        {/* ================= 3-TIER PRICING PACKAGES GRID ================= */}
        <section className="space-y-8 sm:space-y-12 scroll-mt-24" id="pricing-plans">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-mono uppercase font-bold text-[#013AFF] tracking-wider">
              Transparent Project Investment
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111311] tracking-tight">
              Software Packages & Deliverables
            </h2>
            <p className="text-xs sm:text-sm text-[#4a524a]">
              Predictable, milestone-driven pricing in Bangladeshi Taka (BDT) tailored to your operational scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {pricingTiers.map((tier: PricingTier) => {
              const isPopular = tier.isPopular;

              return (
                <div
                  key={tier.id}
                  className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                    isPopular
                      ? "bg-white border-2 border-[#6366F1] shadow-xl ring-4 ring-[#6366F1]/10 md:-translate-y-2"
                      : "bg-white border border-black/10 shadow-sm hover:shadow-md"
                  }`}
                >
                  {/* Top Popular Badge */}
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-[11px] font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
                      <Sparkles size={12} />
                      <span>Most Popular</span>
                    </div>
                  )}

                  <div className="space-y-5 sm:space-y-6">
                    {/* Header Details */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-mono uppercase font-bold tracking-wider text-[#111311]">
                        {tier.name}
                      </h3>
                      <p className="text-xs text-[#555d55] leading-relaxed min-h-[48px]">
                        {tier.subtitle}
                      </p>
                    </div>

                    {/* Price Tag */}
                    <div className="pt-1">
                      <div className="text-3xl sm:text-4xl font-extrabold text-[#111311] tracking-tight">
                        {tier.price}
                      </div>
                      <span className="text-xs text-[#6e766e] font-mono">
                        {tier.priceSubtext}
                      </span>
                    </div>

                    {/* Target Audience Pill */}
                    <div
                      className={`text-xs font-semibold py-2 px-3.5 rounded-xl text-center tracking-tight ${
                        tier.badgeStyle === "gradient"
                          ? "bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white shadow-sm"
                          : tier.badgeStyle === "dark"
                          ? "bg-[#0F172A] text-white shadow-xs"
                          : "bg-[#EEF2FF] text-[#4F46E5]"
                      }`}
                    >
                      {tier.badge}
                    </div>

                    {/* Deliverables Checklist */}
                    <div className="space-y-3 pt-2">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#111311]">
                        Key Features & Deliverables
                      </div>
                      <ul className="space-y-2.5 text-xs text-[#3a423a]">
                        {tier.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <span className="w-4 h-4 rounded-full bg-[#6366F1]/10 text-[#6366F1] flex items-center justify-center shrink-0 mt-0.5">
                              <Check size={11} strokeWidth={3} />
                            </span>
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Estimated Delivery */}
                    <div className="pt-2 flex items-center gap-2 text-xs font-medium text-[#111311] border-t border-black/6">
                      <Clock size={14} className="text-[#6366F1] shrink-0" />
                      <span>
                        Estimated delivery: <strong>{tier.estimatedDelivery}</strong>
                      </span>
                    </div>

                    {/* Scope Disclaimer Box */}
                    <div className="p-3 rounded-xl bg-neutral-50/80 border border-black/6 flex items-start gap-2 text-[11px] text-[#555d55] leading-relaxed">
                      <Info size={14} className="text-[#6366F1] shrink-0 mt-0.5" />
                      <span>{tier.disclaimer}</span>
                    </div>
                  </div>

                  {/* CTA Action Button */}
                  <div className="pt-6 space-y-2">
                    <Link
                      href={`/contact?service=${encodeURIComponent(
                        tier.contactTierParam
                      )}&budget=${encodeURIComponent(tier.contactBudgetParam)}`}
                      className={`w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm active:scale-[0.98] ${
                        isPopular
                          ? "bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] text-white shadow-md hover:shadow-lg"
                          : tier.badgeStyle === "dark"
                          ? "bg-neutral-900 hover:bg-neutral-800 text-white"
                          : "bg-neutral-100 hover:bg-neutral-200 text-[#111311]"
                      }`}
                    >
                      <span>Select {tier.name}</span>
                      <ArrowRight size={14} />
                    </Link>

                    <Link
                      href={`/portfolio/${tier.id}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-[11px] font-mono text-[#555d55] hover:text-[#013AFF] hover:bg-black/4 transition-colors"
                    >
                      <span>View Detailed Scope & Timeline</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= WHAT WE OFFER / SERVICES 8-GRID ================= */}
        <section className="space-y-8 sm:space-y-12">
          <div className="text-left space-y-1.5">
            <span className="text-[11px] font-mono uppercase font-bold text-[#00BBA7] tracking-wider block">
              {servicesSection.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111311] tracking-tight">
              {servicesSection.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#4a524a]">
              {servicesSection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {servicesSection.services.map((item) => {
              const Icon = serviceIconMap[item.iconName] || Globe;

              return (
                <div
                  key={item.id}
                  className="p-5 rounded-2xl bg-white border border-black/8 hover:border-black/15 shadow-2xs hover:shadow-sm transition-all duration-200 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-sm font-bold text-[#111311] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#555d55] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono uppercase font-semibold text-[#6e766e]">
                    {item.category}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= HOW WE WORK (5-STEP PROCESS) ================= */}
        <section className="space-y-6 sm:space-y-8 p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-neutral-50/70 border border-black/8">
          <div className="text-left space-y-1">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#111311] tracking-tight">
              {howWeWork.title}
            </h2>
            <p className="text-xs text-[#4a524a]">{howWeWork.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 items-center">
            {howWeWork.steps.map((step) => {
              const Icon = processIconMap[step.iconName] || MessageSquare;

              return (
                <div key={step.number} className="relative flex flex-col items-center text-center p-3.5 rounded-xl bg-white border border-black/6 shadow-2xs">
                  <div className="w-10 h-10 rounded-full bg-[#013AFF]/8 text-[#013AFF] flex items-center justify-center mb-2">
                    <Icon size={18} />
                  </div>
                  <span className="font-mono text-[10px] font-bold text-[#6e766e]">
                    {step.number}
                  </span>
                  <span className="text-xs font-bold text-[#111311] mt-0.5">
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= GET STARTED CTA CARD ================= */}
        <section className="p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0B0F17] via-[#111827] to-[#0B0F17] text-white shadow-xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#013AFF]/20 via-[#7C3AED]/20 to-transparent blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left CTA */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-[#00BBA7]">
                {ctaBanner.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                {ctaBanner.headline}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-lg leading-relaxed">
                {ctaBanner.description}
              </p>
              <div className="pt-2">
                <Link
                  href={ctaBanner.buttonHref}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#013AFF] hover:bg-[#002ECC] active:scale-95 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <span>{ctaBanner.buttonText}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right Contact Details */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 space-y-3.5 text-xs">
              <div className="flex items-center gap-3 text-neutral-200">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#60A5FA]">
                  <Mail size={15} />
                </div>
                <a
                  href={`mailto:${ctaBanner.email}`}
                  className="hover:underline truncate font-mono"
                >
                  {ctaBanner.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-neutral-200">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#34D399]">
                  <Globe size={15} />
                </div>
                <span className="font-mono">{ctaBanner.website}</span>
              </div>

              <div className="flex items-center gap-3 text-neutral-200">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#F472B6]">
                  <MapPin size={15} />
                </div>
                <span>{ctaBanner.location}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= DOCUMENT FOOTER ================= */}
        <footer className="pt-4 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e766e]">
          <div className="flex items-center gap-3">
            <div className="relative h-6 w-24">
              <Image
                src="/ss-logo.png"
                alt="Solution Studio Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <span>•</span>
            <span className="font-medium">{footer.tagline}</span>
          </div>
          <div className="font-mono text-[11px]">{footer.copyright}</div>
        </footer>
      </main>
    </div>
  );
}
