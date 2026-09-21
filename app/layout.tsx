import type { Metadata } from "next";
import "./globals.css";
import { SplashScreen } from "@/components/SplashScreen";

export const metadata: Metadata = {
  title: "Mohammad Zohaib · Software Developer & Full-Stack Engineer",
  description:
    "Portfolio of Mohammad Zohaib, Software Developer and Software Dev Intern at Hyperzod. Building agentic AI systems, LLM pipelines, Android apps, and full-stack solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="neo">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#fef3c7]">
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
