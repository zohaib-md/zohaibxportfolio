import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HireHero } from "@/components/hire/HireHero";
import { WhatIBuild } from "@/components/hire/WhatIBuild";
import { WhyWorkWithMe } from "@/components/hire/WhyWorkWithMe";
import { ServiceDetail } from "@/components/hire/ServiceDetail";
import { SecondaryHireCTA } from "@/components/hire/SecondaryHireCTA";
import { FAQSection } from "@/components/hire/FAQSection";
import { FinalCTA } from "@/components/hire/FinalCTA";

export const metadata: Metadata = {
  title: "Hire Mohammad Zohaib — AI Engineer & Full-Stack Developer India",
  description:
    "Hire Mohammad Zohaib, an AI Engineer and Software Developer from India. Specializing in LLM integrations, agentic AI, Android (Kotlin/Jetpack Compose), Next.js, Laravel, and Vue.js. Available for freelance and full-time engagements globally.",
  alternates: {
    canonical: "https://mohdzohaib.com/hire",
  },
  openGraph: {
    title: "Hire Mohammad Zohaib — AI Engineer & Full-Stack Developer India",
    description:
      "Hire an AI Engineer and Full-Stack Developer from India. Expert in LLMs, Android, Next.js, and Laravel. Available for freelance and full-time projects globally.",
    url: "https://mohdzohaib.com/hire",
    type: "website",
  },
};

export default function HirePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* SECTION 1: HERO */}
      <HireHero />

      {/* SECTION 2: WHAT I BUILD */}
      <WhatIBuild />

      {/* SECTION 3: WHY WORK WITH ME */}
      <WhyWorkWithMe />

      {/* SECTION 4: DETAILED SERVICE BREAKDOWN */}
      <ServiceDetail />

      {/* SECTION 5: SECONDARY HIRE CTA */}
      <SecondaryHireCTA />

      {/* SECTION 6: COMMON QUESTIONS (FAQ) */}
      <FAQSection />

      {/* SECTION 7: FINAL CTA */}
      <FinalCTA />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
