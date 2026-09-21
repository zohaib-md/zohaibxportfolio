import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BlogContent } from "@/components/blog/BlogContent";
import { getHashnodePosts } from "@/lib/hashnode";
import type { Metadata } from "next";

export const revalidate = 3600; // Revalidate every 1 hour

export const metadata: Metadata = {
  title: "Blog — Mohammad Zohaib",
  description: "Thoughts on development, design, and building products",
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
