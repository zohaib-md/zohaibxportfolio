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
    default: "Mohammad Zohaib · Software & Systems Engineer · AI Platforms",
    template: "%s | Mohammad Zohaib",
  },

  description:
    "Mohammad Zohaib is a Software & Systems Engineer building AI platforms, autonomous agent runtimes, and scalable backend infrastructure. Intern at Hyperzod.",

  keywords: [
    "Mohammad Zohaib",
    "Software Engineer",
    "Systems Engineer",
    "AI Platforms",
    "Agent Runtimes",
    "Model Context Protocol",
    "LangGraph",
    "Full Stack Developer",
    "Android Developer",
    "Kotlin",
    "Next.js",
    "Laravel",
    "Hyperzod",
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
    siteName: "Mohammad Zohaib — Software & Systems Engineer",
    title: "Mohammad Zohaib · Software & Systems Engineer · AI Platforms",
    description:
      "Software & Systems Engineer building AI platforms, autonomous agent runtimes, and scalable backend infrastructure.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mohammad Zohaib — Software & Systems Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mohammad Zohaib · Software & Systems Engineer · AI Platforms",
    description:
      "Software & Systems Engineer building AI platforms, autonomous agent runtimes, and scalable backend infrastructure.",
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
      jobTitle: "Software & Systems Engineer",
      description:
        "Software & Systems Engineer based in India, building AI platforms, autonomous agent runtimes, and scalable backend infrastructure.",
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
        "AI Platforms",
        "Agent Runtimes",
        "Model Context Protocol (MCP)",
        "Distributed Systems",
        "Full-Stack Architecture",
        "Python",
        "TypeScript",
        "Kotlin",
        "Next.js",
        "Laravel",
        "Vue.js",
        "Redis",
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
      name: "Mohammad Zohaib — Software & Systems Engineer",
      description:
        "Portfolio of Mohammad Zohaib, Software & Systems Engineer specializing in AI platforms and backend architecture.",
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
