/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Optimised images for better Core Web Vitals / SEO ranking
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
  },

  // Baseline hardening. None of these change rendering; they only restrict
  // what browsers are allowed to do with the response.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Never let the browser guess a content type — blocks the classic
          // "upload an image, get it sniffed as HTML/JS" path.
          { key: "X-Content-Type-Options", value: "nosniff" },

          // Don't leak full URLs to third parties; send origin on cross-site.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

          // Same-origin framing only. Nothing here embeds iframes, so this
          // closes clickjacking without breaking anything.
          { key: "X-Frame-Options", value: "SAMEORIGIN" },

          // The site uses no camera, microphone, location or payment APIs.
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
