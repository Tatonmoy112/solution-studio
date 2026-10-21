import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getPackageDetailBySlug,
  getAllPackageSlugs,
  portfolioPricingData,
} from "@/content/portfolio-pricing";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock,
  ShieldCheck,
  Layers,
  Palette,
  Code2,
  Database,
  Rocket,
  HelpCircle,
  CheckCircle2,
  Mail,
  Globe,
  MapPin,
  Calendar,
  DollarSign,
  PlusCircle,
  FileCode,
} from "lucide-react";

const domainIconMap: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  Palette,
  Code2,
  Database,
  ShieldCheck,
  Rocket,
  Layers,
  FileCode,
};

export async function generateStaticParams() {
  const slugs = getAllPackageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageDetailBySlug(slug);

  if (!pkg) {
    return {
      title: "Package Not Found | Solution Studio",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${pkg.name} Package Specifications & Scope | Solution Studio`,
    description: pkg.tagline,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = getPackageDetailBySlug(slug);

  if (!pkg) {
    notFound();
  }

  const { footer } = portfolioPricingData;

  return (
    <div className="min-h-screen bg-[#FDFDFC] text-[#111311] selection:bg-[#013AFF] selection:text-white">
      {/* ================= TOP SUB-HEADER ================= */}
      <header className="border-b border-black/8 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-3.5 sm:py-4 flex items-center justify-between">
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
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#6e766e] hover:text-[#111311] transition-colors"
            >
              <ArrowLeft size={13} />
              <span>All Packages</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-md bg-neutral-100 text-[#111311] tracking-wider uppercase hidden sm:inline-block">
              Tier {pkg.tierNumber} • {pkg.name}
            </span>
            <Link
              href={`/contact?service=${encodeURIComponent(
                pkg.contactTierParam
              )}&budget=${encodeURIComponent(pkg.contactBudgetParam)}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#013AFF] hover:bg-[#002ECC] active:scale-95 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm"
            >
              <span>Inquire Now</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-14 space-y-16 sm:space-y-24">
        {/* ================= HERO SECTION ================= */}
        <section className="space-y-6 sm:space-y-8">
          <div className="space-y-4 max-w-4xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#013AFF]/8 border border-[#013AFF]/20 text-[#013AFF] text-[11px] font-semibold uppercase tracking-wider font-mono">
              <ShieldCheck size={13} />
              <span>
                Tier {pkg.tierNumber} • {pkg.badge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111311] tracking-tight leading-[1.15]">
              {pkg.heroHeadline}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#4a524a] leading-relaxed max-w-3xl">
              {pkg.tagline}
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 pt-2">
            <div className="p-5 rounded-2xl bg-white border border-black/8 shadow-2xs space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#6e766e]">
                <DollarSign size={14} className="text-[#013AFF]" />
                <span>Investment</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#111311] tracking-tight">
                {pkg.price}
              </div>
              <p className="text-[11px] text-[#6e766e] font-mono">
                {pkg.priceSubtext}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-black/8 shadow-2xs space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#6e766e]">
                <Clock size={14} className="text-[#00BBA7]" />
                <span>Delivery Timeline</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#111311] tracking-tight">
                {pkg.deliveryTime}
              </div>
              <p className="text-[11px] text-[#6e766e] font-mono">
                Milestone-driven sprints
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-black/8 shadow-2xs space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#6e766e]">
                <Calendar size={14} className="text-[#6366F1]" />
                <span>Scope Model</span>
              </div>
              <div className="text-base sm:text-lg font-bold text-[#111311] tracking-tight line-clamp-1 pt-1">
                {pkg.investmentSummary}
              </div>
              <p className="text-[11px] text-[#6e766e] font-mono">
                Transparent deliverables
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-black/8 shadow-2xs space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#6e766e]">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>Payment Checkpoints</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#111311] leading-relaxed pt-1">
                {pkg.paymentTranches}
              </div>
              <p className="text-[11px] text-[#6e766e] font-mono">
                Zero surprise fees
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href={`/contact?service=${encodeURIComponent(
                pkg.contactTierParam
              )}&budget=${encodeURIComponent(pkg.contactBudgetParam)}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#013AFF] hover:bg-[#002ECC] active:scale-95 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <span>Book & Customize {pkg.name}</span>
              <ArrowRight size={15} />
            </Link>

            <a
              href="#deliverables"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 active:scale-95 text-[#111311] text-xs font-semibold uppercase tracking-wider transition-all duration-200"
            >
              <span>Explore Deliverables</span>
              <ArrowRight size={14} className="rotate-90" />
            </a>
          </div>
        </section>

        {/* ================= WHO THIS IS BEST FOR ================= */}
        <section className="space-y-6 sm:space-y-8">
          <div className="space-y-1.5 text-left">
            <span className="text-[11px] font-mono uppercase font-bold text-[#013AFF] tracking-wider block">
              Ideal Scenarios & Alignment
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111311] tracking-tight">
              Who This Package Is Built For
            </h2>
            <p className="text-xs sm:text-sm text-[#4a524a]">
              Tailored specifically to deliver maximum return on investment for these business stages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {pkg.idealFor.map((item, idx) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-white border border-black/8 shadow-2xs space-y-2.5 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#013AFF]/8 text-[#013AFF] font-mono text-xs font-bold flex items-center justify-center">
                    0{idx + 1}
                  </div>
                  <h3 className="text-sm font-bold text-[#111311] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#555d55] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-2 text-[10px] font-mono uppercase font-semibold text-[#00BBA7] flex items-center gap-1">
                  <CheckCircle2 size={12} />
                  <span>Verified Match</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CATEGORIZED DOMAIN DELIVERABLES ================= */}
        <section className="space-y-8 sm:space-y-12 scroll-mt-24" id="deliverables">
          <div className="space-y-1.5 text-left">
            <span className="text-[11px] font-mono uppercase font-bold text-[#6366F1] tracking-wider block">
              Comprehensive Technical Breakdown
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111311] tracking-tight">
              Full Package Deliverables & Scope
            </h2>
            <p className="text-xs sm:text-sm text-[#4a524a]">
              Every engineering, design, and infrastructure asset included in this tier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {pkg.domainDeliverables.map((domain) => {
              const Icon = domainIconMap[domain.iconName] || Code2;

              return (
                <div
                  key={domain.category}
                  className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border border-black/8 shadow-sm space-y-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4F46E5] flex items-center justify-center shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#111311] tracking-tight">
                        {domain.category}
                      </h3>
                      <span className="text-[11px] font-mono text-[#6e766e]">
                        Production Standard
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {domain.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-[#3a423a]">
                        <span className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={11} strokeWidth={3} />
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= STEP-BY-STEP ROADMAP & MILESTONES ================= */}
        <section className="space-y-8 sm:space-y-12 scroll-mt-24" id="milestones">
          <div className="space-y-1.5 text-left">
            <span className="text-[11px] font-mono uppercase font-bold text-[#00BBA7] tracking-wider block">
              Phased Execution Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111311] tracking-tight">
              Milestone Roadmap & Payment Checkpoints
            </h2>
            <p className="text-xs sm:text-sm text-[#4a524a]">
              Structured in clear phases with verified deliverables before progressing to the next stage.
            </p>
          </div>

          <div className="space-y-4">
            {pkg.milestones.map((milestone) => (
              <div
                key={milestone.phase}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-black/8 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-5 transition-all hover:border-black/15"
              >
                {/* Left Phase Info */}
                <div className="space-y-1.5 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#013AFF]/10 text-[#013AFF] text-[10px] font-mono font-bold uppercase">
                      {milestone.phase} • {milestone.timeline}
                    </span>
                    <span className="text-xs font-mono text-[#6e766e] hidden sm:inline">
                      — Verified Phase
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#111311] tracking-tight">
                    {milestone.title}
                  </h3>
                  <p className="text-xs text-[#555d55] leading-relaxed">
                    {milestone.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {milestone.deliverables.map((del) => (
                      <span
                        key={del}
                        className="inline-flex items-center gap-1 text-[11px] font-mono bg-neutral-100 text-[#444b44] px-2.5 py-1 rounded-md"
                      >
                        <Check size={11} className="text-[#00BBA7]" />
                        <span>{del}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Payment Checkpoint Pill */}
                <div className="shrink-0 bg-neutral-50 border border-black/6 p-3 sm:p-4 rounded-xl text-left md:text-right space-y-1">
                  <span className="text-[10px] font-mono uppercase text-[#6e766e] font-semibold block">
                    Financial Checkpoint
                  </span>
                  <div className="text-xs sm:text-sm font-bold text-[#111311]">
                    {milestone.paymentCheckpoint}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= TECH STACK & ARCHITECTURE ================= */}
        <section className="space-y-6 sm:space-y-8 p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-neutral-50/70 border border-black/8">
          <div className="space-y-1 text-left">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#111311] tracking-tight">
              Enterprise Tech Stack & Standards
            </h2>
            <p className="text-xs text-[#4a524a]">
              We build with modern, high-speed technologies that guarantee long-term maintainability.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {pkg.techStack.map((tech) => (
              <div
                key={tech.name}
                className="p-3.5 sm:p-4 rounded-xl bg-white border border-black/6 shadow-2xs space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-[#111311]">
                    {tech.name}
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-neutral-100 text-[#555d55]">
                    {tech.badge}
                  </span>
                </div>
                <div className="text-[11px] text-[#6e766e] font-mono">
                  {tech.role}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SCOPE BOUNDARIES & ADD-ONS ================= */}
        <section className="space-y-6 sm:space-y-8">
          <div className="space-y-1 text-left">
            <span className="text-[11px] font-mono uppercase font-bold text-[#013AFF] tracking-wider block">
              Transparent Project Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111311] tracking-tight">
              Scope Inclusions, Boundaries & Add-ons
            </h2>
            <p className="text-xs sm:text-sm text-[#4a524a]">
              Clear expectations to prevent scope creep and ensure smooth project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Inclusions */}
            <div className="p-6 rounded-2xl bg-white border border-black/8 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">
                <CheckCircle2 size={16} />
                <span>What Is Included</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#3a423a]">
                {pkg.scopeBoundaries.included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Out of Scope */}
            <div className="p-6 rounded-2xl bg-white border border-black/8 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#6e766e]">
                <HelpCircle size={16} />
                <span>Out of Scope / Separate</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#555d55]">
                {pkg.scopeBoundaries.outOfScope.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-black/30 font-bold shrink-0 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Add-ons */}
            <div className="p-6 rounded-2xl bg-white border border-black/8 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#013AFF]">
                <PlusCircle size={16} />
                <span>Optional Add-ons</span>
              </div>
              <div className="space-y-3">
                {pkg.scopeBoundaries.addOns.map((addon) => (
                  <div
                    key={addon.title}
                    className="p-3 rounded-xl bg-neutral-50 border border-black/6 flex items-center justify-between text-xs gap-2"
                  >
                    <span className="font-medium text-[#111311] leading-snug">
                      {addon.title}
                    </span>
                    <span className="font-mono font-bold text-[#013AFF] shrink-0">
                      {addon.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= PACKAGE SPECIFIC FAQS ================= */}
        <section className="space-y-6 sm:space-y-8">
          <div className="space-y-1 text-left">
            <span className="text-[11px] font-mono uppercase font-bold text-[#6366F1] tracking-wider block">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111311] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#4a524a]">
              Key policies regarding source code ownership, milestones, and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {pkg.faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-black/8 shadow-2xs space-y-2.5"
              >
                <h3 className="text-sm sm:text-base font-bold text-[#111311] tracking-tight">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-[#555d55] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= GET STARTED CTA CARD ================= */}
        <section className="p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#0B0F17] via-[#111827] to-[#0B0F17] text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#013AFF]/20 via-[#7C3AED]/20 to-transparent blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] font-mono uppercase font-bold tracking-wider text-[#00BBA7]">
                READY TO BEGIN?
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                Launch Your {pkg.name} Project With Solution Studio.
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 max-w-lg leading-relaxed">
                Connect with our senior engineering team to schedule your kickoff call and receive your detailed technical milestone roadmap.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href={`/contact?service=${encodeURIComponent(
                    pkg.contactTierParam
                  )}&budget=${encodeURIComponent(pkg.contactBudgetParam)}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#013AFF] hover:bg-[#002ECC] active:scale-95 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <span>Book {pkg.name} Package</span>
                  <ArrowRight size={15} />
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                >
                  <span>Compare Other Tiers</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 space-y-3.5 text-xs">
              <div className="flex items-center gap-3 text-neutral-200">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#60A5FA]">
                  <Mail size={15} />
                </div>
                <a
                  href="mailto:sales@solutionstudio.bd"
                  className="hover:underline truncate font-mono"
                >
                  sales@solutionstudio.bd
                </a>
              </div>

              <div className="flex items-center gap-3 text-neutral-200">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#34D399]">
                  <Globe size={15} />
                </div>
                <span className="font-mono">www.solutionstudio.bd</span>
              </div>

              <div className="flex items-center gap-3 text-neutral-200">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#F472B6]">
                  <MapPin size={15} />
                </div>
                <span>Gazipur, Dhaka, Bangladesh</span>
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

