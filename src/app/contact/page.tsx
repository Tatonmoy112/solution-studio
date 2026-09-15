import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/shared/PagePlaceholder";

export const metadata: Metadata = {
  title: "Contact | Solution Studio",
};

export default function ContactPage() {
  return (
    <PagePlaceholder
      eyebrow="Contact"
      title="The Contact page is ready for its design."
      description="The route is active and waiting for the approved contact form and page implementation."
    />
  );
}
