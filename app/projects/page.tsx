import { Navbar } from "@/components/Navbar";
import { ProjectTimeline } from "@/components/ProjectTimeline";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Mohammad Zohaib | AI & Full-Stack Developer India",
  description:
    "Explore the projects built by Mohammad Zohaib — an AI Engineer and Software Developer from India. From LLM-powered tools and agentic AI systems to Android apps and full-stack web applications.",
  alternates: {
    canonical: "https://mohdzohaib.com/projects",
  },
  openGraph: {
    title: "Projects — Mohammad Zohaib | AI & Full-Stack Developer",
    description:
      "LLM pipelines, agentic AI systems, Android apps, and full-stack web projects by Mohammad Zohaib, Software Developer from India.",
    url: "https://mohdzohaib.com/projects",
    type: "website",
  },
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
