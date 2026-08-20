import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/sections/Projects";
import { projects } from "@/data/projects";

export default function AllProjectsPage() {
  return (
    <main className="min-h-screen bg-[#F9F9F9] text-[#181A18] selection:bg-teal-500/30 selection:text-teal-500">
      <Navbar />
      <div className="pt-32 pb-24 px-6 md:px-12">
        <Projects
          projectList={projects}
          showAllButton={false}
          title="All Projects"
          subtitle="Browse every project in the portfolio and click any card to view full details."
        />
      </div>
      <Footer />
    </main>
  );
}
