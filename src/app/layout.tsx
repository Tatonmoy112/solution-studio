import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Security } from "@/components/Security";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Solution Studio",
  description: "Solution Studio delivers scalable software solutions for enterprises, startups, and e-commerce platforms in Bangladesh and globally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#121212] text-white selection:bg-teal-500/30 selection:text-teal-500" suppressHydrationWarning>
        <Security />
        <div className="fixed right-8 bottom-0 hidden lg:flex flex-col items-center gap-6 z-40">
          <span className="text-vertical text-5xl xl:text-6xl font-black text-white/5 uppercase select-none tracking-tighter">STUDIO</span>
          <div className="w-px h-32 bg-teal-500/50"></div>
        </div>

        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
