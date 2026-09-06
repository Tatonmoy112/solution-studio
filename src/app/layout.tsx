import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Security } from "@/components/Security";
import MicrosoftClarity from "@/components/MicrosoftClarity";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Solution Studio",
  description: "Solution Studio delivers scalable software solutions for enterprises, startups, and e-commerce platforms in Bangladesh and globally.",
  metadataBase: new URL("https://solutionstudio.bd"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Solution Studio",
    description: "Solution Studio delivers scalable software solutions for enterprises, startups, and e-commerce platforms in Bangladesh and globally.",
    url: "https://solutionstudio.bd",
    siteName: "Solution Studio",
    images: [
      {
        url: "/ss logo.png",
        alt: "Solution Studio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Solution Studio",
    description: "Solution Studio delivers scalable software solutions for enterprises, startups, and e-commerce platforms in Bangladesh and globally.",
    images: ["/ss logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Solution Studio",
    "url": "https://solutionstudio.bd",
    "logo": "https://solutionstudio.bd/ss%20logo.png",
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="48x48" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F9F9F9] text-[#181A18] selection:bg-teal-500/30 selection:text-teal-500" suppressHydrationWarning>
        <Security />
        <main className="min-h-screen">
          {children}
        </main>
        <MicrosoftClarity />
      </body>
    </html>
  );
}
