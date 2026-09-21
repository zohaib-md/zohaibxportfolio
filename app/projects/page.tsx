import { Navbar } from "@/components/Navbar";
import { ProjectTimeline } from "@/components/ProjectTimeline";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Mohammad Zohaib",
  description: "A timeline of projects I've built and deployed.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#fef18b]">
      <Navbar />
      <ProjectTimeline isPage={true} />
      <Footer />
    </main>
  );
}
