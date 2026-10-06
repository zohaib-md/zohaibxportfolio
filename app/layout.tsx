import type { Metadata } from "next";
import "./globals.css";
import { SplashScreen } from "@/components/SplashScreen";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://mohdzohaib.com"),

  verification: {
    google: "googlec4efbddb082aa152",
  },

  title: {
    default: "Mohammad Zohaib · AI Engineer & Software Developer India",
    template: "%s | Mohammad Zohaib",
  },

  description:
    "Mohammad Zohaib is an AI Engineer and Software Developer based in India. Specializing in LLM pipelines, agentic AI systems, Android development (Kotlin/Jetpack Compose), and full-stack web engineering (Next.js, Laravel, Vue.js). Available for freelance and full-time opportunities.",

  keywords: [
    "Mohammad Zohaib",
    "AI Engineer India",
    "Software Developer India",
    "Full Stack Developer India",
    "Android Developer India",
    "LLM Engineer",
    "Machine Learning Engineer",
    "Next.js Developer",
    "React Developer India",
    "Kotlin Developer",
    "Jetpack Compose",
    "Laravel Developer",
    "freelance developer India",
    "hire software developer India",
    "Hyperzod developer",
    "agentic AI developer",
    "mohdzohaib",
    "zohaib portfolio",
  ],

  authors: [{ name: "Mohammad Zohaib", url: "https://mohdzohaib.com" }],
  creator: "Mohammad Zohaib",
  publisher: "Mohammad Zohaib",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://mohdzohaib.com",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://mohdzohaib.com",
    siteName: "Mohammad Zohaib — AI Engineer & Software Developer",
    title: "Mohammad Zohaib · AI Engineer & Software Developer India",
    description:
      "AI Engineer and Software Developer based in India. Building LLM pipelines, agentic AI systems, Android apps, and full-stack web products. Available for freelance and full-time roles.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mohammad Zohaib — AI Engineer & Software Developer India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohammad Zohaib · AI Engineer & Software Developer India",
    description:
      "AI Engineer and Software Developer based in India. Building LLM pipelines, agentic AI, Android apps, and full-stack web products.",
    images: ["/opengraph-image"],
    creator: "@mohdzohaib",
  },

  category: "technology",
};

// JSON-LD Structured Data — tells Google exactly who you are
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mohdzohaib.com/#person",
      name: "Mohammad Zohaib",
      givenName: "Mohammad",
      familyName: "Zohaib",
      jobTitle: "AI Engineer & Software Developer",
      description:
        "AI Engineer and Software Developer based in India, specializing in LLM pipelines, agentic AI systems, Android development, and full-stack web engineering.",
      url: "https://mohdzohaib.com",
      image: {
        "@type": "ImageObject",
        url: "https://mohdzohaib.com/me.jpg",
        width: 400,
        height: 400,
      },
      sameAs: [
        "https://github.com/zohaib-md",
        "https://www.linkedin.com/in/mohammad-zohaib-279794204/",
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Large Language Models",
        "Agentic AI Systems",
        "Android Development",
        "Kotlin",
        "Jetpack Compose",
        "Next.js",
        "React",
        "TypeScript",
        "Laravel",
        "Vue.js",
        "Full-Stack Development",
      ],
      nationality: {
        "@type": "Country",
        name: "India",
      },
      worksFor: {
        "@type": "Organization",
        name: "Hyperzod",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://mohdzohaib.com/#website",
      url: "https://mohdzohaib.com",
      name: "Mohammad Zohaib — AI Engineer & Software Developer",
      description:
        "Portfolio of Mohammad Zohaib, AI Engineer and Software Developer based in India.",
      publisher: {
        "@id": "https://mohdzohaib.com/#person",
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" data-theme="neo" className={cn("font-sans")}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#fef3c7]">
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
