"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalData, ProjectEntry } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ProjectTimelineProps {
  isPage?: boolean;
}

export const ProjectTimeline: React.FC<ProjectTimelineProps> = ({ isPage = false }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleBox1Ref = useRef<HTMLSpanElement>(null);
  const titleBox2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleProject = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header scroll entrance animation
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });

      if (badgeRef.current) {
        headerTl.from(badgeRef.current, {
          y: 20,
          scale: 0.9,
          opacity: 0,
          duration: 0.5,
          ease: "back.out(1.5)",
        });
      }

      headerTl
        .from(
          titleBox1Ref.current,
          {
            y: 35,
            rotation: isPage ? 0 : -2,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          badgeRef.current ? "-=0.3" : undefined
        )
        .from(
          titleBox2Ref.current,
          {
            y: 35,
            rotation: isPage ? 0 : 2,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .from(
          subtitleRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.35"
        );

      // Vertical timeline rail animation
      gsap.from(".project-rail-line", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
        scaleY: 0,
        transformOrigin: "top center",
        duration: 0.8,
        ease: "power2.out",
      });

      // Cards staggered entrance animation
      gsap.from(".project-item-row", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [isPage]);

  const projects: ProjectEntry[] = personalData.projectsData || [];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`relative w-full overflow-hidden bg-[#fef18b] px-3.5 sm:px-6 lg:px-8 ${
        isPage
          ? "pt-24 sm:pt-36 md:pt-40 pb-16 sm:pb-24 md:pb-28 border-b-0 min-h-screen"
          : "py-16 sm:py-24 md:py-28 border-b-[3.5px] border-black"
      }`}
    >
      {/* Background Dot Grid Pattern matching hero */}
      <div className="absolute inset-0 neo-dot-grid pointer-events-none" />

      {/* Confetti Shapes (homepage section only) */}
      {!isPage && (
        <>
          {/* Confetti Shape 1: Top-Left Rotated White Square */}
          <div
            className="confetti-shape absolute -left-4 sm:left-8 top-16 sm:top-20 w-14 sm:w-24 h-14 sm:h-24 bg-white border-[3px] sm:border-[3.5px] border-black shadow-[4px_4px_0_0_#000000] sm:shadow-[6px_6px_0_0_#000000] rotate-[-8deg] pointer-events-none z-0"
            aria-hidden="true"
          />

          {/* Confetti Shape 2: Top-Right Rotated Light-Blue Rectangle */}
          <div
            className="confetti-shape absolute -right-4 sm:right-10 top-20 sm:top-28 w-16 sm:w-28 h-12 sm:h-18 bg-[#bfdbfe] border-[3px] sm:border-[3.5px] border-black shadow-[4px_4px_0_0_#000000] sm:shadow-[6px_6px_0_0_#000000] rotate-[-5deg] pointer-events-none z-0"
            aria-hidden="true"
          />

          {/* Confetti Shape 3: Bottom Rotated Pink Rectangle */}
          <div
            className="confetti-shape absolute left-[15%] sm:left-[22%] bottom-8 sm:bottom-12 w-16 sm:w-28 h-8 sm:h-12 bg-[#fca5a5] border-[3px] sm:border-[3.5px] border-black shadow-[4px_4px_0_0_#000000] sm:shadow-[5px_5px_0_0_#000000] rotate-[3deg] pointer-events-none z-0"
            aria-hidden="true"
          />
        </>
      )}

      <div className="relative z-10 mx-auto max-w-[1152px]">
        {/* Section Header */}
        <div ref={headerRef} className="mb-10 sm:mb-16 md:mb-20 text-center">
          {isPage ? (
            <>
              {/* H2 split in two boxes: "Featured" (plain black text) + "Projects" (white box, black border, hard shadow) */}
              <h2 className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 md:gap-5 font-display text-[28px] xs:text-[34px] sm:text-[46px] md:text-[60px] font-bold text-black leading-none tracking-tight">
                {/* Plain black text: Featured */}
                <span
                  ref={titleBox1Ref}
                  className="inline-block leading-none"
                >
                  Featured
                </span>

                {/* White Box: Projects */}
                <span
                  ref={titleBox2Ref}
                  className="inline-block rounded-[12px] md:rounded-[18px] border-[2.5px] md:border-[3.5px] border-black bg-white px-4 sm:px-7 py-1.5 sm:py-3 shadow-[3px_3px_0_0_#000000] md:shadow-[6px_6px_0_0_#000000] leading-none"
                >
                  Projects
                </span>
              </h2>

              {/* Subhead */}
              <p
                ref={subtitleRef}
                className="mt-2.5 sm:mt-4 text-sm sm:text-lg text-neutral-600 font-normal"
              >
                A timeline of projects I&apos;ve built and deployed
              </p>
            </>
          ) : (
            <>
              {/* Small Black Pill Badge */}
              <div ref={badgeRef} className="inline-block mb-3 sm:mb-4">
                <span className="inline-flex items-center rounded-full bg-black px-3.5 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-black uppercase tracking-wider text-white shadow-[2px_2px_0_0_#000000] sm:shadow-[2.5px_2.5px_0_0_#000000]">
                  FEATURED PROJECTS
                </span>
              </div>

              {/* H2 Split across two boxes: "Timeline" and "of Builds" */}
              <h2 className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 md:gap-5 font-display text-[28px] xs:text-[34px] sm:text-[46px] md:text-[60px] font-bold text-black leading-none tracking-tight">
                {/* White Box: Timeline */}
                <span
                  ref={titleBox1Ref}
                  className="inline-block rounded-[12px] md:rounded-[18px] border-[2.5px] md:border-[3.5px] border-black bg-white px-4 sm:px-7 py-1.5 sm:py-3 shadow-[3px_3px_0_0_#000000] md:shadow-[6px_6px_0_0_#000000]"
                >
                  Timeline
                </span>

                {/* White Box: of Builds */}
                <span
                  ref={titleBox2Ref}
                  className="inline-block rounded-[12px] md:rounded-[18px] border-[2.5px] md:border-[3.5px] border-black bg-white px-4 sm:px-7 py-1.5 sm:py-3 shadow-[3px_3px_0_0_#000000] md:shadow-[6px_6px_0_0_#000000]"
                >
                  of Builds
                </span>
              </h2>

              {/* Subtitle */}
              <p
                ref={subtitleRef}
                className="mt-2.5 sm:mt-4 text-sm sm:text-lg text-neutral-600 font-normal"
              >
                A timeline of projects I&apos;ve built and deployed
              </p>
            </>
          )}
        </div>

        {/* Timeline Structure (1152px total width: 48px rail + 1104px card) */}
        <div className="relative mx-auto max-w-[1152px] w-full">
          {/* Vertical Timeline Rail Line */}
          <div
            className="project-rail-line absolute bottom-[45px] sm:bottom-[55px] top-[45px] sm:top-[55px] z-0 w-[2.5px] sm:w-[3px] bg-black left-[15px] sm:left-[22.5px]"
          />

          {/* Timeline Entries (40px padding-bottom per row) */}
          <div className="relative z-10">
            {projects.map((project) => {
              const isExpanded = expandedIds.has(project.id);

              return (
                <div
                  key={project.id}
                  className="project-item-row relative flex items-start w-full pb-8 sm:pb-[40px] last:pb-0"
                >
                  {/* Left Rail Column: 32px (mobile) / 48px (desktop) wide with Dot Marker */}
                  <div className="relative z-10 flex w-[32px] sm:w-[48px] flex-shrink-0 items-start justify-center pt-[32px] sm:pt-[43px]">
                    <button
                      type="button"
                      onClick={() => toggleProject(project.id)}
                      aria-label={`Toggle ${project.title}`}
                      className="h-5 w-5 sm:h-6 sm:w-6 rounded-full border-[2.5px] sm:border-[3px] border-black bg-[#10B981] shadow-[2px_2px_0_0_#000000] sm:shadow-[3px_3px_0_0_#000000] transition-transform duration-150 hover:scale-110 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                    />
                  </div>

                  {/* Right Column: Max-Width White Card */}
                  <div className="min-w-0 flex-1 max-w-[1104px]">
                    <ProjectCard
                      project={project}
                      isExpanded={isExpanded}
                      onToggle={() => toggleProject(project.id)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
