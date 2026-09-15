import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/shared/PagePlaceholder";

export const metadata: Metadata = {
  title: "Services | Solution Studio",
};

export default function ServicesPage() {
  return (
    <PagePlaceholder
      eyebrow="Services"
      title="The Services page is ready for its design."
      description="The route is active and waiting for the approved Services page implementation."
    />
  );
}
