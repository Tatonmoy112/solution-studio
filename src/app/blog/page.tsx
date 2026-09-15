import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/shared/PagePlaceholder";

export const metadata: Metadata = {
  title: "Blog | Solution Studio",
};

export default function BlogPage() {
  return (
    <PagePlaceholder
      eyebrow="Blog"
      title="The Blog page is ready for its design."
      description="The route is active and waiting for the approved Blog page implementation."
    />
  );
}
