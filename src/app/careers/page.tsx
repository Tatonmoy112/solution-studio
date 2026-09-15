import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/shared/PagePlaceholder";

export const metadata: Metadata = {
  title: "Careers | Solution Studio",
};

export default function CareersPage() {
  return (
    <PagePlaceholder
      eyebrow="Careers"
      title="The Careers page is ready for its design."
      description="The route is active and waiting for the approved Careers page implementation."
    />
  );
}
