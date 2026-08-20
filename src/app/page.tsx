import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import Values from "@/components/sections/Values";
import Founder from "@/components/sections/Founder";
import CallToAction from "@/components/sections/CallToAction";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F9F9] text-[#181A18] selection:bg-teal-500/30 selection:text-teal-500">
      <Navbar />
      <Hero />
      <SocialProof />
      <About />
      <WhyChooseUs />
      <Services />
      <Industries />
      <Process />
      <Values />
      <Founder />
      <CallToAction />
      <Contact />
      <Footer />
    </main>
  );
}
