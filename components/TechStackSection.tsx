"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const technologies = [
  "Kotlin",
  "Python",
  "TypeScript",
  "JavaScript",
  "PHP",
  "SQL",
  "Jetpack Compose",
  "Google Gemini API",
  "Anthropic Claude API",
  "OpenAI SDK",
  "Google ADK",
  "LangGraph",
  "MediaPipe",
  "ML Kit",
  "Room",
  "Retrofit",
  "Hilt",
  "CameraX",
  "Firebase",
  "WorkManager",
  "Django",
  "Laravel",
  "Vue 3",
  "Next.js",
  "React",
  "Tailwind CSS",
  "PostgreSQL",
  "MySQL",
  "SQLite",
  "Docker",
  "Git",
  "GitHub Actions",
];

export const TechStackSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance animation
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
          once: true,
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        clearProps: "transform",
      });

      // Cards staggered entrance (~0.025s incremental delay per card)
      gsap.fromTo(
        ".tech-card-item",
        { y: 35, opacity: 0 },
        {
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.025,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(".tech-card-item", { clearProps: "transform" });
          },
        }
      );
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full overflow-hidden border-b-[3.5px] border-black bg-[#bfdbfe] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Subtle dotted pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: "radial-gradient(#000000 1.2px, transparent 1.2px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* HEADER (centered) */}
        <div ref={headerRef} className="text-center mb-10 sm:mb-12">
          {/* H2 heading (60px Space Grotesk, bold, margin-bottom 16px) */}
          <h2 className="font-display text-[34px] sm:text-[46px] md:text-[54px] lg:text-[60px] font-bold text-black tracking-tight leading-tight mb-4">
            Technologies I Work With
          </h2>

          {/* Subhead (gray text, centered, 2 lines) */}
          <p className="font-display text-sm sm:text-base md:text-[17px] text-[#525252] font-normal max-w-xl mx-auto leading-relaxed">
            A curated stack of modern tools powering shipping speed and
            <br className="hidden sm:inline" /> reliability
          </p>
        </div>

        {/* TECH GRID (flex-wrap grid of individual cards) */}
        <div
          ref={gridRef}
          className="flex flex-wrap justify-center gap-3.5 sm:gap-4 lg:gap-5 w-full max-w-[1280px] mx-auto"
        >
          {technologies.map((tech) => (
            <div
              key={tech}
              className="tech-card-item relative w-[145px] sm:w-[169.15px] h-[120px] sm:h-[142px] rounded-[18px] sm:rounded-[20px] border-[3px] sm:border-[3.5px] border-black bg-white p-[16px_12px] sm:p-[20px_16px] shadow-[4px_4px_0_0_#000000] sm:shadow-[5px_5px_0_0_#000000] flex items-center justify-center text-center select-none transition-all duration-150 hover:-translate-y-1 hover:shadow-[7px_7px_0_0_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_0_#000000]"
              style={{
                willChange: "transform, opacity",
              }}
            >
              {/* Corner decorative square (Top-Left: yellow) */}
              <span className="absolute -top-[5px] -left-[5px] w-2.5 sm:w-3 h-2.5 sm:h-3 border-[2px] border-black bg-[#FACC15] pointer-events-none" />

              {/* Corner decorative square (Bottom-Right: pink) */}
              <span className="absolute -bottom-[5px] -right-[5px] w-2.5 sm:w-3 h-2.5 sm:h-3 border-[2px] border-black bg-[#F472B6] pointer-events-none" />

              {/* Tech Name */}
              <span className="font-display text-[13px] sm:text-[15px] font-bold text-black leading-snug break-words px-1">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
