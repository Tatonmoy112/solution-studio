import type { Metadata } from "next";
import { PageBanner } from "@/components/shared/PageBanner";
import { ServicesOverview } from "@/components/shared/ServicesOverview";
import { aboutPageBannerContent, aboutValuesContent } from "@/features/about/about.content";
import { AboutIntroductionSection } from "@/features/about/components/AboutIntroductionSection";
import { AboutWhoWeAreSection } from "@/features/about/components/AboutWhoWeAreSection";
import { AboutJourneySection } from "@/features/about/components/AboutJourneySection";
import { AboutImpactSection } from "@/features/about/components/AboutImpactSection";
import { AboutTeamImageSection } from "@/features/about/components/AboutTeamImageSection";
import { AboutAchievementsSection } from "@/features/about/components/AboutAchievementsSection";
import { AboutGrowthBannerSection } from "@/features/about/components/AboutGrowthBannerSection";

export const metadata: Metadata = {
  title: "About | Solution Studio",
};

export default function AboutPage() {
  return (
    <main className="flex-1 pb-16">
      <PageBanner {...aboutPageBannerContent} headingId="about-page-title" />
      <AboutIntroductionSection />
      <AboutWhoWeAreSection />
      <AboutJourneySection />
      <AboutImpactSection />
      <AboutTeamImageSection />
      <ServicesOverview
        cards={aboutValuesContent.cards}
        heading={{
          eyebrow: aboutValuesContent.eyebrow,
          id: "about-values-title",
          title: aboutValuesContent.title,
        }}
        variant="compact"
      />
      <AboutAchievementsSection />
      <AboutGrowthBannerSection />
    </main>
  );
}
