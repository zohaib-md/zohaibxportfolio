import type { Metadata } from "next";
import "./globals.css";
import { SplashScreen } from "@/components/SplashScreen";
import { SoundProvider } from "@/components/providers/SoundProvider";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://mohdzohaib.com"),

  verification: {
    google: "googlec4efbddb082aa152",
  },

  title: {
    default: "Mohammad Zohaib · AI Systems Engineer · Agentic Platforms & Orchestration",
    template: "%s | Mohammad Zohaib",
  },

  description:
    "Mohammad Zohaib is an AI Systems Engineer specializing in Agentic Platforms, Multi-Agent Orchestration (LangGraph, MCP), Enterprise Integrations, and resilient full-stack systems. Based in India, available for impactful engineering roles and enterprise contracts.",

  keywords: [
    "Mohammad Zohaib",
    "AI Systems Engineer",
    "Agentic AI Engineer",
    "Multi-Agent Orchestration",
    "Model Context Protocol",
    "MCP Tools",
    "LangGraph Developer",
    "Agent Benchmarking",
    "Enterprise AI Systems",
    "AI Engineer India",
    "Software Developer India",
    "Full Stack Developer India",
    "Android Developer India",
    "Next.js Developer",
    "Kotlin Developer",
    "Jetpack Compose",
    "Laravel Developer",
    "Hyperzod developer",
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
    siteName: "Mohammad Zohaib — AI Systems Engineer",
    title: "Mohammad Zohaib · AI Systems Engineer · Agentic Platforms & Orchestration",
    description:
      "AI Systems Engineer building autonomous multi-agent pipelines, MCP-compliant tools, and enterprise orchestration platforms.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mohammad Zohaib — AI Systems Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohammad Zohaib · AI Systems Engineer · Agentic Platforms & Orchestration",
    description:
      "AI Systems Engineer building autonomous multi-agent pipelines, MCP-compliant tools, and enterprise orchestration platforms.",
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
      jobTitle: "AI Systems Engineer · Agentic Platforms & Orchestration",
      description:
        "AI Systems Engineer based in India, specializing in Agentic Platforms, Multi-Agent Orchestration (LangGraph, MCP), Enterprise Integrations, and resilient full-stack systems.",
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
        "Agentic AI Systems",
        "Multi-Agent Orchestration",
        "Model Context Protocol (MCP)",
        "LangGraph",
        "Agent Benchmarking & Evals",
        "Autonomous Enterprise Platforms",
        "Artificial Intelligence",
        "Machine Learning",
        "Large Language Models",
        "Full-Stack Architecture",
        "TypeScript",
        "Python",
        "Kotlin",
        "Jetpack Compose",
        "Next.js",
        "Laravel",
        "Vue.js",
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
      name: "Mohammad Zohaib — AI Systems Engineer",
      description:
        "Portfolio of Mohammad Zohaib, AI Systems Engineer specializing in Agentic Platforms and Multi-Agent Orchestration.",
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
        <SoundProvider>
          <SplashScreen />
          {children}
        </SoundProvider>
      </body>
    </html>
  );
}
