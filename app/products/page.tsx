import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductsContent } from "@/components/products/ProductsContent";

export const metadata: Metadata = {
  title: "Products — Mohammad Zohaib | AI Tools & Developer Products",
  description:
    "Developer tools, AI products, and software services built by Mohammad Zohaib, an AI Engineer from India. Built to solve real problems for developers and businesses.",
  alternates: {
    canonical: "https://mohdzohaib.com/products",
  },
  openGraph: {
    title: "Products — Mohammad Zohaib | AI Tools & Developer Products",
    description:
      "AI tools and developer products by Mohammad Zohaib, Software Developer from India. Built to solve real problems.",
    url: "https://mohdzohaib.com/products",
    type: "website",
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ProductsContent />
      <Footer />
    </main>
  );
}
