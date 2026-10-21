import { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Contact & Project Inquiries",
  description:
    "Initiate a project inquiry with Solution Studio's senior software architects. Get technical scoping and preliminary feedback within 24 business hours.",
};

export default function ContactPage() {
  return (
    <div className="pt-16 sm:pt-24">
      <ContactSection />
      <FaqSection />
    </div>
  );
}

