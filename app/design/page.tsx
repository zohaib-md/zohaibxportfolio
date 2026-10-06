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
  title: "Web Design & Product Development — Mohammad Zohaib India",
  description:
    "Mohammad Zohaib designs and builds web products end-to-end: UI design, MVP development, landing pages, and full-stack builds for startups and small businesses. Based in India, available globally.",
  alternates: {
    canonical: "https://mohdzohaib.com/design",
  },
  openGraph: {
    title: "Web Design & Product Development — Mohammad Zohaib",
    description:
      "End-to-end web design and product development by Mohammad Zohaib. Landing pages, MVPs, and full-stack builds for startups. Based in India.",
    url: "https://mohdzohaib.com/design",
    type: "website",
  },
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
