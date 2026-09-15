import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/shared/PagePlaceholder";

export const metadata: Metadata = {
  title: "Clients | Solution Studio",
};

export default function ClientsPage() {
  return (
    <PagePlaceholder
      eyebrow="Clients"
      title="The Clients page is ready for its design."
      description="The route is active and waiting for the approved Clients page implementation."
    />
  );
}
