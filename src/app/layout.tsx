import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MicrosoftClarity from "@/components/analytics/MicrosoftClarity";

const fontSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#013AFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://solutionstudio.bd"),
  title: {
    default: "Solution Studio — Enterprise Software Engineering & Custom ERPs",
    template: "%s | Solution Studio",
  },
  description:
    "Solution Studio is an engineering agency delivering custom software, ERP architectures, modern web platforms, and mobile apps that drive measurable business outcomes.",
  keywords: [
    "Software Agency",
    "Enterprise Software",
    "Custom ERP",
    "Next.js Development",
    "NestJS",
    "Flutter App Development",
    "Bangladesh Software Company",
    "Web Development Agency",
  ],
  authors: [{ name: "Solution Studio Team" }],
  creator: "Solution Studio",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Solution Studio — Enterprise Software Engineering & Custom ERPs",
    description:
      "Scaling businesses through high-throughput web platforms, custom ERPs, and resilient mobile applications.",
    url: "https://solutionstudio.bd",
    siteName: "Solution Studio",
    images: [
      {
        url: "/ss-logo.png",
        width: 1200,
        height: 630,
        alt: "Solution Studio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solution Studio — Enterprise Software Engineering",
    description:
      "Scaling businesses through high-throughput web platforms, custom ERPs, and resilient mobile applications.",
    images: ["/ss-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Solution Studio",
    url: "https://solutionstudio.bd",
    logo: "https://solutionstudio.bd/ss-logo.png",
    description:
      "Enterprise software engineering, custom ERP architectures, and scalable digital systems.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "House # 55, Road # Hazi Askor Ali Road, Khapara, Tongi",
      addressLocality: "Gazipur",
      postalCode: "1712",
      addressCountry: "BD",
    },
    telephone: "+8801316571406",
    email: "hello@solutionstudio.bd",
    sameAs: [
      "https://www.facebook.com/share/1bmLnLLAY6/?mibextid=wwXIfr",
      "https://linkedin.com/company/solution-studio-bd",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontMono.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[#fbfbfb] text-[#111311] selection:bg-[#013AFF]/15 selection:text-[#013AFF] overflow-x-hidden"
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MicrosoftClarity />
      </body>
    </html>
  );
}
