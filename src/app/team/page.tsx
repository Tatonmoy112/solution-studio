import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/shared/PagePlaceholder";

export const metadata: Metadata = {
  title: "Team | Solution Studio",
};

export default function TeamPage() {
  return (
    <PagePlaceholder
      eyebrow="Team"
      title="The Team page is ready for its design."
      description="The route is active and waiting for the approved Team page implementation."
    />
  );
}
