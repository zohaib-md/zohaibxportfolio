import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TimelineSection } from "@/components/TimelineSection";
import { ProjectTimeline } from "@/components/ProjectTimeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fef18b]">
      <Navbar />
      <Hero />
      <TimelineSection />
      <ProjectTimeline />
    </main>
  );
}

