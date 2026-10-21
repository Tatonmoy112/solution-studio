import { Metadata } from "next";
import StatsSection from "@/components/sections/StatsSection";
import ValuesSection from "@/components/sections/ValuesSection";
// import FounderSection from "@/components/sections/FounderSection";

export const metadata: Metadata = {
  title: "About Solution Studio — Engineering Standards & Leadership",
  description:
    "Learn about Solution Studio's mission, engineering ethos, leadership, and our commitment to building outcome-driven custom software.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-16 sm:pb-20">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 md:px-12 mb-12 sm:mb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#013AFF]/10 border border-[#013AFF]/20 text-[#013AFF] text-xs font-semibold uppercase tracking-wider mb-3 sm:mb-4">
            Agency Profile
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111311] tracking-tight mb-4 sm:mb-6">
            We Started With One Fundamental Question: &ldquo;What Problem Are You Trying to Solve?&rdquo;
          </h1>
          <p className="text-base sm:text-lg text-[#4a524a] leading-relaxed mb-4 sm:mb-6">
            At Solution Studio, we don&apos;t just write code. We sit with business owners, map operating realities, identify points of manual friction, and architect digital systems that eliminate operational bottlenecks permanently.
          </p>
          <p className="text-sm sm:text-base text-[#4a524a] leading-relaxed">
            Whether validating an initial product idea, digitizing an entire manufacturing floor, or scaling high-volume retail transactions — we operate as an embedded technology partner, not just a vendor.
          </p>
        </div>
      </div>

      <StatsSection />
      <ValuesSection />
      {/* Temporarily hidden: Founder Section ("Software Is Not Measured in Features. It Is Measured in Outcomes.") */}
      {/* <FounderSection /> */}
    </div>
  );
}

