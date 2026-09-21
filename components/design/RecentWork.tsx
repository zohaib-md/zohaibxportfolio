"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export interface CaseStudyItem {
  id: string;
  category: string;
  title: string;
  description: string;
  metadata: string;
  status?: string;
  linkText?: string;
  linkUrl?: string;
  isExternal?: boolean;
}

const caseStudies: CaseStudyItem[] = [
  {
    id: "zonrad",
    category: "Case Study",
    title: "Zonrad",
    description:
      "An AI-native workspace for orchestrating autonomous agents, contextual reasoning, and tool-driven workflows. Built solo end-to-end, from brand identity to production interface.",
    metadata: "2026 · Product Design & Full-Stack",
    status: "In development",
    linkText: "View Case Study",
    linkUrl: "https://github.com/zohaib-md/zonrad",
    isExternal: true,
  },
  {
    id: "upcoming-build",
    category: "Case Study",
    title: "Upcoming Case Study",
    description:
      "Full-stack SaaS architecture and responsive interface design for an AI-integrated commercial platform. In-depth system breakdown publishing soon.",
    metadata: "2026 · Full-Stack & UI Architecture",
    status: "In development",
    linkText: "Teardown coming soon",
  },
  {
    id: "your-project",
    category: "Collaboration",
    title: "Your Project",
    description:
      "Have a web product, landing page, or SaaS idea? Partner with me to design and develop your product from concept to production launch.",
    metadata: "2026 · Design & Development",
    status: "Open for booking",
    linkText: "Start a conversation",
    linkUrl: "mailto:zohaibmohammad88@gmail.com?subject=Design%20%26%20Build%20Inquiry",
  },
];

export const RecentWork: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".case-study-card",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2,
          clearProps: "all",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative w-full bg-[#bfdbfe] py-20 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 border-b-[3.5px] border-black"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <p className="text-[11px] font-bold uppercase tracking-widest text-neutral-700 mb-3">
            Selected Work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-tight">
            Case Studies
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-neutral-800 font-sans leading-relaxed">
            Products and interfaces designed and engineered end-to-end.
          </p>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 items-stretch">
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="case-study-card group flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white overflow-hidden transition-all duration-300 hover:border-neutral-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            >
              {/* Top Project Visual */}
              {study.id === "zonrad" && (
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0c0d12] border-b border-neutral-100 flex items-center justify-center p-4 sm:p-5 select-none">
                  <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.45)] transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                    <img
                      src="/zonrad-preview.png"
                      alt="Zonrad: Autonomous Agent Workspace"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              )}

              {study.id === "upcoming-build" && (
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0e1117] border-b border-neutral-100 flex items-center justify-center p-6 select-none">
                  {/* Subtle Architectural Spec Wireframe */}
                  <div className="w-full max-w-[270px] rounded-xl border border-white/10 bg-white/[0.02] p-4 text-left backdrop-blur-sm transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                    <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                      <span>Spec 02</span>
                      <span>SaaS Platform</span>
                    </div>
                    <div className="mt-2.5 text-sm font-semibold text-neutral-200 font-display">
                      Platform Architecture &amp; UI
                    </div>
                    {/* Minimal structural wireframe lines */}
                    <div className="mt-3.5 space-y-2">
                      <div className="h-1.5 w-full rounded-full bg-white/10" />
                      <div className="h-1.5 w-4/5 rounded-full bg-white/5" />
                      <div className="h-1.5 w-2/3 rounded-full bg-white/5" />
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-neutral-400 font-mono">
                      <span>Phase: Engineering</span>
                      <span className="text-neutral-500">2026</span>
                    </div>
                  </div>
                </div>
              )}

              {study.id === "your-project" && (
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#f9f8f5] border-b border-neutral-200/60 flex items-center justify-center p-6 select-none">
                  {/* Subtle Studio Collaboration Wireframe */}
                  <div className="w-full max-w-[270px] rounded-xl border border-neutral-200/80 bg-white p-4 text-left shadow-[0_2px_12px_-2px_rgba(0,0,0,0.04)] transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                    <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                      <span>New Inquiry</span>
                      <span>Q3 / Q4</span>
                    </div>
                    <div className="mt-2.5 text-sm font-semibold text-neutral-900 font-display">
                      Next Web Build &amp; MVP
                    </div>
                    <p className="mt-1 text-xs text-neutral-500 font-sans">
                      From concept to production launch
                    </p>
                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[10px] text-neutral-600 font-sans">
                      <span className="font-medium text-neutral-700">Open for booking</span>
                      <span className="text-neutral-400 font-mono">24h quote</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Editorial Content Area */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  {/* Category Eyebrow */}
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
                    {study.category}
                  </span>

                  {/* Restrained Project Title */}
                  <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight transition-colors group-hover:text-black">
                    {study.title}
                  </h3>

                  {/* One-Line / Short Description */}
                  <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed font-sans font-normal">
                    {study.description}
                  </p>
                </div>

                {/* Footer Metadata & Minimal Link */}
                <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between gap-3 text-xs text-neutral-400 flex-wrap">
                  <div className="flex items-center gap-1.5 text-neutral-500 font-medium">
                    <span>{study.metadata}</span>
                    {study.status && (
                      <>
                        <span className="text-neutral-300">·</span>
                        <span className="text-neutral-600">{study.status}</span>
                      </>
                    )}
                  </div>

                  {study.linkUrl ? (
                    <a
                      href={study.linkUrl}
                      target={study.isExternal ? "_blank" : undefined}
                      rel={study.isExternal ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 font-semibold text-neutral-900 transition-colors hover:text-black"
                    >
                      <span>{study.linkText}</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                        &rarr;
                      </span>
                    </a>
                  ) : (
                    <span className="text-neutral-400 font-medium italic">
                      {study.linkText}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
