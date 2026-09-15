import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/shared/PagePlaceholder";

export const metadata: Metadata = {
  title: "Portfolio | Solution Studio",
};

export default function PortfolioPage() {
  return (
    <PagePlaceholder
      eyebrow="Portfolio"
      title="The Portfolio page is ready for its design."
      description="The route is active and waiting for the approved portfolio implementation."
    />
  );
}
