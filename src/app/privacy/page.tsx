import { Metadata } from "next";
import Link from "next/link";
import { companyInfo } from "@/content/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Solution Studio Privacy Policy regarding lead information and data retention.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 md:px-12">
      <div className="container mx-auto max-w-[800px] bg-white p-5 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl border border-black/10 shadow-sm space-y-6 sm:space-y-8">
        <div>
          <span className="text-xs font-mono text-[#013AFF] uppercase font-bold tracking-wider">
            Legal & Compliance
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#111311] tracking-tight mt-2 mb-3 sm:mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#6e766e]">
            Last Updated: October 2026
          </p>
        </div>

        <section className="space-y-3 text-sm text-[#4a524a] leading-relaxed">
          <h2 className="text-lg font-bold text-[#111311]">1. Overview</h2>
          <p>
            Solution Studio (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting the privacy of visitors who interact with our corporate website. This Privacy Policy outlines our practices concerning the collection, use, and protection of information submitted through our contact and project inquiry forms.
          </p>
        </section>

        <section className="space-y-3 text-sm text-[#4a524a] leading-relaxed">
          <h2 className="text-lg font-bold text-[#111311]">2. Information We Collect</h2>
          <p>
            When you submit a project inquiry, we collect information you voluntarily provide, including:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Name and contact email address</li>
            <li>Company or organization name and optional telephone number</li>
            <li>Project specifications, budget parameters, and timeline requirements</li>
            <li>Anonymized cryptographic IP hash for rate limiting and spam prevention</li>
          </ul>
        </section>

        <section className="space-y-3 text-sm text-[#4a524a] leading-relaxed">
          <h2 className="text-lg font-bold text-[#111311]">3. Use of Information</h2>
          <p>
            We strictly use submitted inquiry data to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Assess technical project feasibility and prepare architectural proposals</li>
            <li>Communicate directly regarding your project requirements</li>
            <li>Prevent abuse, automated spam submissions, and denial-of-service threats</li>
          </ul>
          <p>
            We <strong>never sell, lease, or distribute</strong> your contact information to third-party advertisers or data brokers.
          </p>
        </section>

        <section className="space-y-3 text-sm text-[#4a524a] leading-relaxed">
          <h2 className="text-lg font-bold text-[#111311]">4. Data Storage & Security</h2>
          <p>
            All inquiries are stored within a secure PostgreSQL database hosted by Supabase with Row Level Security (RLS) policies permanently active. Direct public access is disabled, and communication with our servers is encrypted using modern TLS (HTTPS) standards.
          </p>
        </section>

        <section className="space-y-3 text-sm text-[#4a524a] leading-relaxed">
          <h2 className="text-lg font-bold text-[#111311]">5. Contact Us</h2>
          <p>
            If you have questions regarding this policy or wish to request the deletion of your inquiry data, contact us at:{" "}
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

