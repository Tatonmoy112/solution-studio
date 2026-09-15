import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/shared/PagePlaceholder";

export const metadata: Metadata = {
  title: "About | Solution Studio",
};

export default function AboutPage() {
  return (
    <PagePlaceholder
      eyebrow="About"
      title="The About page is ready for its design."
      description="The route is active and waiting for the approved About page implementation."
    />
  );
}
