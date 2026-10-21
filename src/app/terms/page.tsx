import { Metadata } from "next";
import Link from "next/link";
import { companyInfo } from "@/content/company";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing the use of Solution Studio website and consulting services.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12">
      <div className="container mx-auto max-w-[800px] bg-white p-5 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl border border-black/10 shadow-sm space-y-6 sm:space-y-8">
        <div>
          <span className="text-xs font-mono text-[#013AFF] uppercase font-bold tracking-wider">
            Legal & Compliance
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#111311] tracking-tight mt-2 mb-3 sm:mb-4">
            Terms of Service
          </h1>
          <p className="text-xs text-[#6e766e]">
            Last Updated: October 2026
          </p>
        </div>

        <section className="space-y-3 text-sm text-[#4a524a] leading-relaxed">
          <h2 className="text-lg font-bold text-[#111311]">1. Acceptance of Terms</h2>
          <p>
            By accessing or browsing this website, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue your use of our site.
          </p>
        </section>

        <section className="space-y-3 text-sm text-[#4a524a] leading-relaxed">
          <h2 className="text-lg font-bold text-[#111311]">2. Intellectual Property Rights</h2>
          <p>
            All content, brand trademarks, architectural case studies, diagrams, text, and imagery displayed on this site are the exclusive property of Solution Studio or its respective client licensors. No content may be reproduced or mirrored without prior written consent.
          </p>
        </section>

        <section className="space-y-3 text-sm text-[#4a524a] leading-relaxed">
          <h2 className="text-lg font-bold text-[#111311]">3. Engineering Engagements</h2>
          <p>
            Submitting a contact form or project inquiry does not establish a formal agency-client contract. Formal engineering contracts, statements of work (SOW), warranties, and deliverables are governed by separate, legally executed Master Services Agreements (MSA).
          </p>
        </section>

        <section className="space-y-3 text-sm text-[#4a524a] leading-relaxed">
          <h2 className="text-lg font-bold text-[#111311]">4. Inquiries & Communications</h2>
          <p>
            For questions regarding these terms, contact us at:{" "}
            <a href={`mailto:${companyInfo.email}`} className="text-[#013AFF] underline">
              {companyInfo.email}
            </a>.
          </p>
        </section>

        <div className="pt-6 border-t border-black/10">
          <Link href="/" className="text-xs font-semibold text-[#013AFF] hover:underline">
            ← Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

