"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

export interface TimelineCardProps {
  id: string;
  type?: "work" | "education";
  tag: string;
  title: string;
  role: string;
  organization: string;
  location: string;
  dateRange: string;
  dateRangeFormatted?: string;
  projectCount?: string;
  dotColor: string;
  bgColor: string;
  bullets?: string[];
  isExpanded: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  tag,
  title,
  role,
  organization,
  location,
  dateRange,
  dateRangeFormatted,
  projectCount = "1 Project",
  dotColor,
  bgColor,
  bullets = [],
  isExpanded,
  onToggle,
  children,
}) => {
  const expandableRef = useRef<HTMLDivElement>(null);
  const companyChevronRef = useRef<HTMLSpanElement>(null);
  const isInitialMount = useRef(true);

  // Role-level expand state (second level of expand/collapse for achievements)
  const [roleExpanded, setRoleExpanded] = useState(true);
  const bulletsRef = useRef<HTMLDivElement>(null);
  const roleChevronRef = useRef<HTMLSpanElement>(null);
  const isRoleInitialMount = useRef(true);

  const displayDatePill = dateRangeFormatted || dateRange;

  // Company-level expand/collapse animation
  useEffect(() => {
    const el = expandableRef.current;
    const chev = companyChevronRef.current;
    if (!el || !chev) return;

    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (isExpanded) {
        gsap.set(el, { height: "auto", autoAlpha: 1 });
        gsap.set(chev, { rotation: 180 });
      } else {
        gsap.set(el, { height: 0, autoAlpha: 0 });
        gsap.set(chev, { rotation: 0 });
      }
      return;
    }

    gsap.killTweensOf([el, chev]);

    if (isExpanded) {
      gsap.fromTo(
        el,
        { height: 0, autoAlpha: 0 },
        { height: "auto", autoAlpha: 1, duration: 0.38, ease: "power2.out" }
      );
      gsap.to(chev, {
        rotation: 180,
        duration: 0.3,
        ease: "power2.inOut",
      });
    } else {
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

  // Role-level expand/collapse animation
  useEffect(() => {
    const bEl = bulletsRef.current;
    const rChev = roleChevronRef.current;
    if (!bEl || !rChev) return;

    if (isRoleInitialMount.current) {
      isRoleInitialMount.current = false;
      if (roleExpanded) {
        gsap.set(bEl, { height: "auto", autoAlpha: 1 });
        gsap.set(rChev, { rotation: 180 });
      } else {
        gsap.set(bEl, { height: 0, autoAlpha: 0 });
        gsap.set(rChev, { rotation: 0 });
      }
      return;
    }

    gsap.killTweensOf([bEl, rChev]);

    if (roleExpanded) {
      gsap.fromTo(
        bEl,
        { height: 0, autoAlpha: 0 },
        { height: "auto", autoAlpha: 1, duration: 0.32, ease: "power2.out" }
      );
      gsap.to(rChev, {
        rotation: 180,
        duration: 0.3,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(bEl, {
        height: 0,
        autoAlpha: 0,
        duration: 0.25,
        ease: "power2.inOut",
      });
      gsap.to(rChev, {
        rotation: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [roleExpanded]);

  return (
    <div
      onClick={onToggle}
      style={{ backgroundColor: bgColor }}
      className="group relative cursor-pointer select-none w-full max-w-[1104px] rounded-[20px] md:rounded-[24px] border-[3.5px] border-black p-6 sm:p-7 md:p-[32px] shadow-[5px_5px_0_0_#000000] md:shadow-[6px_6px_0_0_#000000] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#000000] flex flex-col justify-center"
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
      {/* 
        COMPANY HEADER BLOCK (Permanent — Never unmounts or moves)
        Matches reference: Company name top-left, location below it, two pills side-by-side,
        and fixed-size chevron button at top-right.
      */}
      <div className="w-full">
        <div className="flex items-start justify-between gap-4 w-full">
          <div className="min-w-0 flex-1">
            {/* Company Name */}
            <h3 className="font-display text-[26px] sm:text-[30px] md:text-[34px] font-extrabold text-black tracking-tight leading-tight">
              {title}
            </h3>

            {/* Location (plain gray text) */}
            <p className="mt-1 text-sm sm:text-base font-normal text-neutral-500">
              {location}
            </p>

            {/* Inline Pills: Date-range pill + Project-count pill */}
            <div className="mt-3 flex items-center gap-2.5 flex-wrap">
              {/* Date-Range Pill: Light Blue Background */}
              <span className="inline-flex items-center rounded-full border-[2.5px] border-black bg-[#bfdbfe] px-3.5 py-1 text-xs sm:text-sm font-bold text-black shadow-[2.5px_2.5px_0_0_#000000]">
                {displayDatePill}
              </span>

              {/* Project-Count Pill: Yellow Background */}
              <span className="inline-flex items-center rounded-full border-[2.5px] border-black bg-[#fef08a] px-3.5 py-1 text-xs sm:text-sm font-bold text-black shadow-[2.5px_2.5px_0_0_#000000]">
                {projectCount}
              </span>
            </div>
          </div>

          {/* Fixed-Size Chevron Button (top-right, ~48-52px, never resizes or reflows) */}
          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
              aria-label={isExpanded ? "Collapse" : "Expand"}
              className="flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full border-[2.5px] border-black bg-white shadow-[2px_2px_0_0_#000000] transition-transform active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            >
              <span
                ref={companyChevronRef}
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

      {/* 
        EXPANDED ROLE-ENTRY BLOCK (Children inside the SAME card container)
        Smoothly reveals via GSAP height animation directly below the company pills.
      */}
      <div ref={expandableRef} className="overflow-hidden w-full">
        <div className="mt-5 pt-5 border-t-2 border-black/10">
          {/* Small Role-Entry Header */}
          <div className="flex items-center justify-between gap-3 flex-wrap">
            {/* Left: Indicator Dot + Tag Pill */}
            <div className="flex items-center gap-2">
              <span
                style={{ backgroundColor: dotColor }}
                className="inline-block h-3 w-3 rounded-full border border-black shadow-[1px_1px_0_0_#000000]"
              />
              <span className="inline-block rounded-full border-[2px] border-black bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-black shadow-[2px_2px_0_0_#000000]">
                {tag}
              </span>
            </div>

            {/* Right: Date-Range Pill + Role Chevron Button */}
            <div className="flex items-center gap-2.5">
              <span className="inline-block rounded-full border-[2px] border-black bg-white px-3.5 py-1 text-xs sm:text-sm font-bold text-black shadow-[2px_2px_0_0_#000000]">
                {dateRange}
              </span>

              {/* Second-Level Fixed-Size Chevron for Role Bullets */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setRoleExpanded((prev) => !prev);
                }}
                aria-label={roleExpanded ? "Collapse details" : "Expand details"}
                className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-[2.5px] border-black bg-white shadow-[2px_2px_0_0_#000000] transition-transform active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
              >
                <span
                  ref={roleChevronRef}
                  className="inline-block leading-none text-xs md:text-sm text-black"
                  style={{ transformOrigin: "center center" }}
                >
                  <svg
                    className="w-4 h-4"
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

          {/* Role Title */}
          <h4 className="font-display mt-3.5 sm:mt-4 text-xl sm:text-2xl md:text-[26px] font-extrabold text-black tracking-tight">
            {role}
          </h4>

          {/* Sub-role / Organization • Location */}
          <div className="mt-1.5 flex items-center gap-1.5 flex-wrap text-sm sm:text-base font-semibold text-black">
            <span>{organization}</span>
            <span className="text-neutral-500 font-normal">• {location}</span>
          </div>

          {/* Second-level collapsible bullets container */}
          <div ref={bulletsRef} className="overflow-hidden">
            {bullets && bullets.length > 0 && (
              <div className="mt-4 pt-3.5 border-t-2 border-black/10">
                <ul className="space-y-2.5">
                  {bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm sm:text-[15px] leading-relaxed text-neutral-900"
                    >
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-[1px] bg-black shadow-[1.5px_1.5px_0_0_#000000]" />
                      <span className="flex-1 font-normal">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {children && <div className="mt-3">{children}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};
