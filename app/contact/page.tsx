import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactCards } from "@/components/contact/ContactCards";

export const metadata: Metadata = {
  title: "Contact — Hire Mohammad Zohaib | AI Engineer & Developer India",
  description:
    "Get in touch with Mohammad Zohaib, an AI Engineer and Software Developer from India. Available for freelance projects, full-time roles, Android development, AI/LLM integrations, and full-stack web builds.",
  alternates: {
    canonical: "https://mohdzohaib.com/contact",
  },
  openGraph: {
    title: "Contact Mohammad Zohaib — AI Engineer & Developer India",
    description:
      "Hire Mohammad Zohaib for AI engineering, Android development, and full-stack web projects. Based in India, available globally.",
    url: "https://mohdzohaib.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ContactHeader />
      <ContactCards />
      <Footer />
    </main>
  );
}
