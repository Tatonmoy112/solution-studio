import Hero from "@/components/sections/Hero";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
// import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ValuesSection from "@/components/sections/ValuesSection";
// import TestimonialsSection from "@/components/sections/TestimonialsSection";
// import FounderSection from "@/components/sections/FounderSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesSection />
      {/* Temporarily hidden: Featured Case Studies & Deployed Systems */}
      {/* <FeaturedProjectsSection /> */}
      <ProcessSection />
      <ValuesSection />
      {/* Temporarily hidden: What Our Partners Say About Working With Us */}
      {/* <TestimonialsSection /> */}
      {/* Temporarily hidden: Founder Section ("Software Is Not Measured in Features. It Is Measured in Outcomes.") */}
      {/* <FounderSection /> */}
      <FaqSection />
      <ContactSection />
    </>
  );
}

