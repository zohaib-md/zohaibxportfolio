import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { TimelineSection } from "@/components/TimelineSection";
import { ProjectTimeline } from "@/components/ProjectTimeline";
import { ProductsSection } from "@/components/ProductsSection";
import { WebDesignCTA } from "@/components/WebDesignCTA";
import { CallbackSection } from "@/components/CallbackSection";
import { TechStackSection } from "@/components/TechStackSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fef3c7]">
      <Navbar />
      <Hero />
      <AboutSection />
      <TimelineSection />
      <ProjectTimeline />
      <ProductsSection />
      <WebDesignCTA />
      <CallbackSection />
      <TechStackSection />
      <Footer />
    </main>
  );
}

