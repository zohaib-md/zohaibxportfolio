import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TimelineSection } from "@/components/TimelineSection";
import { ProjectTimeline } from "@/components/ProjectTimeline";
import { ProductsSection } from "@/components/ProductsSection";
import { WebDesignCTA } from "@/components/WebDesignCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fef3c7]">
      <Navbar />
      <Hero />
      <TimelineSection />
      <ProjectTimeline />
      <ProductsSection />
      <WebDesignCTA />
    </main>
  );
}

