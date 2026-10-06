/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Optimised images for better Core Web Vitals / SEO ranking
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
