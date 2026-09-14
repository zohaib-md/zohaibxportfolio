"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ProjectEntry } from "@/lib/data";

export interface ProjectCardProps {
  project: ProjectEntry;
  isExpanded: boolean;
  onToggle: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isExpanded,
  onToggle,
}) => {
  const expandableRef = useRef<HTMLDivElement>(null);
  const chevronRef = useRef<HTMLSpanElement>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    const el = expandableRef.current;
    const chev = chevronRef.current;
    if (!el || !chev) return;

    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (isExpanded) {
        gsap.set(el, { height: "auto", autoAlpha: 1 });
        el.style.overflow = "visible";
        gsap.set(chev, { rotation: 180 });
      } else {
        gsap.set(el, { height: 0, autoAlpha: 0 });
        el.style.overflow = "hidden";
        gsap.set(chev, { rotation: 0 });
      }
      return;
    }

    gsap.killTweensOf([el, chev]);

    if (isExpanded) {
      el.style.overflow = "hidden";
      gsap.fromTo(
        el,
        { height: 0, autoAlpha: 0 },
        {
          height: "auto",
          autoAlpha: 1,
          duration: 0.38,
          ease: "power2.out",
          onComplete: () => {
            if (el) el.style.overflow = "visible";
          },
        }
      );
      gsap.to(chev, {
        rotation: 180,
        duration: 0.3,
        ease: "power2.inOut",
      });
    } else {
      if (el) el.style.overflow = "hidden";
      gsap.to(el, {
        height: 0,
        autoAlpha: 0,
        duration: 0.28,
        ease: "power2.inOut",
      });
      gsap.to(chev, {
        rotation: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [isExpanded]);

  return (
    <div
      onClick={onToggle}
      className="group relative cursor-pointer select-none w-full max-w-[1104px] rounded-[20px] md:rounded-[24px] border-[3.5px] border-black bg-white p-6 sm:p-7 md:p-[32px] shadow-[5px_5px_0_0_#000000] md:shadow-[6px_6px_0_0_#000000] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#000000] flex flex-col justify-center"
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle();
        }
      }}
    >
      {/* HEADER ROW (Permanent: Icon + Title/Badge + Plain Tech + Fixed Chevron) */}
      <div className="w-full">
        <div className="flex items-center justify-between gap-4 w-full">
          {/* Left: Thumbnail + Info */}
          <div className="flex items-center gap-3.5 sm:gap-4 md:gap-5 min-w-0 flex-1">
            {/* Project Monogram / Thumbnail */}
            <div
              style={{ backgroundColor: project.accentBg || "#F3F4F6" }}
              className="flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14 md:h-[56px] md:w-[56px] rounded-[12px] sm:rounded-[14px] border-[2.5px] border-black flex items-center justify-center font-display font-black text-base sm:text-lg text-black shadow-[2px_2px_0_0_#000000]"
            >
              {project.monogram}
            </div>

            {/* Info: Title + Year Badge + Tech Summary */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                <h3 className="font-display text-lg sm:text-xl md:text-[24px] font-extrabold text-black tracking-tight leading-tight">
                  {project.title}
                </h3>

                {/* Mint/Light-Green Year Pill Badge */}
                <span className="inline-flex items-center rounded-full border-[2px] border-black bg-[#bbf7d0] px-3 sm:px-3.5 py-0.5 text-xs sm:text-[13px] font-bold text-black shadow-[2px_2px_0_0_#000000]">
                  {project.year}
                </span>
              </div>

              {/* Collapsed Tech Stack Line: Plain text separated by · */}
              <p className="mt-1 text-xs sm:text-sm md:text-[15px] font-normal text-neutral-500 truncate">
                {project.techSummary}
              </p>
            </div>
          </div>

          {/* Right: Fixed-Size Circular Chevron Toggle Button (48px, never resizes) */}
          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
              aria-label={isExpanded ? "Collapse project" : "Expand project"}
              className="flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full border-[2.5px] border-black bg-white shadow-[2px_2px_0_0_#000000] transition-transform active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            >
              <span
                ref={chevronRef}
                className="inline-block leading-none text-xs md:text-sm text-black"
                style={{ transformOrigin: "center center" }}
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* EXPANDED DETAILS (Divider + Description + Tech Pills + View Details CTA) */}
      <div ref={expandableRef} className="overflow-hidden w-full">
        <div className="mt-5 pt-5 border-t-2 border-black/10 px-0.5">
          {/* Description Paragraph */}
          <p className="text-neutral-700 font-normal text-sm sm:text-base leading-relaxed max-w-4xl">
            {project.description}
          </p>

          {/* Expanded Tech Stack Pills */}
          <div className="mt-4 flex items-center gap-2 sm:gap-2.5 flex-wrap pb-1">
            {project.techList.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border-[2px] border-black bg-white px-3.5 sm:px-4 py-1 text-xs sm:text-sm font-bold text-black shadow-[2px_2px_0_0_#000000]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View Details Button (Yellow Pill with external link icon) */}
          <div className="mt-5 pt-1">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2.5 rounded-full border-[2.5px] border-black bg-[#FACC15] px-5 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-bold text-black shadow-[3.5px_3.5px_0_0_#000000] hover:-translate-y-0.5 hover:shadow-[4.5px_4.5px_0_0_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              <span>View Details</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
