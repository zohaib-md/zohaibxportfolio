import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TimelineSection } from "@/components/TimelineSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fef3c7]">
      <Navbar />
      <Hero />
      <TimelineSection />
    </main>
  );
}

