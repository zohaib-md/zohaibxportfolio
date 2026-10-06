import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlogContent } from "@/components/blog/BlogContent";
import { getHashnodePosts } from "@/lib/hashnode";
import type { Metadata } from "next";

export const revalidate = 3600; // Revalidate every 1 hour

export const metadata: Metadata = {
  title: "Blog — Mohammad Zohaib | AI & Software Development",
  description:
    "Read thoughts and technical articles by Mohammad Zohaib on AI engineering, LLM development, Android (Kotlin), full-stack web development, and building software products from India.",
  alternates: {
    canonical: "https://mohdzohaib.com/blog",
  },
  openGraph: {
    title: "Blog — Mohammad Zohaib | AI & Software Development",
    description:
      "Technical articles on AI engineering, LLMs, Android, and full-stack development by Mohammad Zohaib, Software Developer from India.",
    url: "https://mohdzohaib.com/blog",
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = await getHashnodePosts();

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <BlogContent posts={posts} />
      <Footer />
    </main>
  );
}
