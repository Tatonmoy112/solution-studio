import { FounderSection } from "@/features/home/components/FounderSection";
import { FounderTopicsCarousel } from "@/features/home/components/FounderTopicsCarousel";
import { HeroSection } from "@/features/home/components/HeroSection";
import { BlogPreviewSection } from "@/features/home/components/BlogPreviewSection";
import { PortfolioPreviewSection } from "@/features/home/components/PortfolioPreviewSection";
import { ServicesOverview } from "@/components/shared/ServicesOverview";
import { ServicesShowcaseSection } from "@/features/home/components/ServicesShowcaseSection";
import { TrustedTeamsSection } from "@/features/home/components/TrustedTeamsSection";
import { TrustedPartnersSection } from "@/features/home/components/TrustedPartnersSection";
import { WhoWeAreSection } from "@/features/home/components/WhoWeAreSection";
import { homeJourneyContent } from "@/features/home/home.content";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <WhoWeAreSection />
      <ServicesOverview
        cards={homeJourneyContent.cards}
        heading={{
          eyebrow: homeJourneyContent.eyebrow,
          id: "home-journey-title",
          title: homeJourneyContent.title,
        }}
      />
      <TrustedTeamsSection />
      <ServicesShowcaseSection />
      <FounderSection />
      <FounderTopicsCarousel />
      <PortfolioPreviewSection />
      <TrustedPartnersSection />
      <BlogPreviewSection />
    </main>
  );
}
