import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DesignHero } from "@/components/design/DesignHero";
import { PricingSection } from "@/components/design/PricingSection";
import { RecentWork } from "@/components/design/RecentWork";
import { HowItWorks } from "@/components/design/HowItWorks";
import { DesignFAQ } from "@/components/design/DesignFAQ";
import { DesignFinalCTA } from "@/components/design/DesignFinalCTA";

export const metadata: Metadata = {
  title: "Web Design & Product Development — Mohammad Zohaib",
  description:
    "I design and build products end-to-end: from UI to deployment. Currently building Zonrad solo. Open to landing pages, MVPs, and full-stack builds for startups and small businesses.",
};

export default function DesignPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* GLOBAL NAVBAR */}
      <Navbar />

      {/* SECTION 1: HERO */}
      <DesignHero />

      {/* SECTION 2: HOW PRICING WORKS */}
      <PricingSection />

      {/* SECTION 3: RECENT WORK */}
      <RecentWork />

      {/* SECTION 4: HOW IT WORKS */}
      <HowItWorks />

      {/* SECTION 5: COMMON QUESTIONS */}
      <DesignFAQ />

      {/* SECTION 6: FINAL CTA */}
      <DesignFinalCTA />

      {/* GLOBAL FOOTER */}
      <Footer />
    </main>
  );
}
