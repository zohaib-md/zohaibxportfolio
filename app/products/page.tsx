import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductsContent } from "@/components/products/ProductsContent";

export const metadata: Metadata = {
  title: "Products — Mohammad Zohaib",
  description:
    "Developer tools, AI products, and services. Built to solve real problems.",
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
