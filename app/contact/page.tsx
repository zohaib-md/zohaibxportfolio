import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactCards } from "@/components/contact/ContactCards";

export const metadata: Metadata = {
  title: "Get in Touch | Mohammad Zohaib — Android & Full-Stack Developer",
  description:
    "Get in touch with Mohammad Zohaib. Available for Android and full-stack development, freelance builds, and software engineering opportunities.",
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
