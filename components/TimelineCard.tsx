"use client";

import React, { useRef, useEffect } from "react";
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
  dotColor,
  bgColor,
  bullets = [],
  isExpanded,
  onToggle,
  children,
}) => {
  const collapsedWrapperRef = useRef<HTMLDivElement>(null);
  const expandedWrapperRef = useRef<HTMLDivElement>(null);
  const collapsedChevronRef = useRef<HTMLSpanElement>(null);
  const expandedChevronRef = useRef<HTMLSpanElement>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    const collapsedEl = collapsedWrapperRef.current;
    const expandedEl = expandedWrapperRef.current;
    const collapsedChev = collapsedChevronRef.current;
    const expandedChev = expandedChevronRef.current;

    if (!collapsedEl || !expandedEl) return;

    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (isExpanded) {
        gsap.set(collapsedEl, { display: "none", height: 0, opacity: 0 });
        gsap.set(expandedEl, { display: "block", height: "auto", opacity: 1 });
        if (collapsedChev) gsap.set(collapsedChev, { rotation: 180 });
        if (expandedChev) gsap.set(expandedChev, { rotation: 180 });
      } else {
        gsap.set(collapsedEl, { display: "flex", height: "auto", opacity: 1 });
        gsap.set(expandedEl, { display: "none", height: 0, opacity: 0 });
        if (collapsedChev) gsap.set(collapsedChev, { rotation: 0 });
        if (expandedChev) gsap.set(expandedChev, { rotation: 0 });
      }
      return;
    }

    // Kill any in-flight animations
    gsap.killTweensOf([collapsedEl, expandedEl, collapsedChev, expandedChev]);

    if (isExpanded) {
      // OPENING:
      // Show expanded wrapper, animate height from 0 to auto, fade in
      gsap.set(expandedEl, { display: "block" });
      gsap.fromTo(
        expandedEl,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.38, ease: "power2.out" }
      );

      // Smoothly shrink collapsed header and hide
      gsap.to(collapsedEl, {
        height: 0,
        opacity: 0,
        duration: 0.22,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(collapsedEl, { display: "none" });
        },
      });

      // Rotate both chevrons to 180
      if (collapsedChev) {
        gsap.to(collapsedChev, { rotation: 180, duration: 0.32, ease: "power2.out" });
      }
      if (expandedChev) {
        gsap.fromTo(
          expandedChev,
          { rotation: 0 },
          { rotation: 180, duration: 0.32, ease: "power2.out" }
        );
      }
    } else {
      // CLOSING:
      // Show collapsed wrapper, animate height from 0 to natural auto, fade in
      gsap.set(collapsedEl, { display: "flex" });
      gsap.fromTo(
        collapsedEl,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.32, ease: "power2.out" }
      );

      // Smoothly collapse expanded wrapper to height 0 and fade out
      gsap.to(expandedEl, {
        height: 0,
        opacity: 0,
        duration: 0.35,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(expandedEl, { display: "none" });
        },
      });

      // Rotate both chevrons back to 0
      if (collapsedChev) {
        gsap.fromTo(
          collapsedChev,
          { rotation: 180 },
          { rotation: 0, duration: 0.32, ease: "power2.out" }
        );
      }
      if (expandedChev) {
        gsap.to(expandedChev, { rotation: 0, duration: 0.32, ease: "power2.out" });
      }
    }
  }, [isExpanded]);

  return (
    <div
      onClick={onToggle}
      style={{ backgroundColor: bgColor }}
      className="group relative cursor-pointer select-none w-full max-w-[1104px] min-h-[110px] rounded-[20px] md:rounded-[24px] border-[3.5px] border-black p-6 sm:p-7 md:p-[32px] shadow-[5px_5px_0_0_#000000] md:shadow-[6px_6px_0_0_#000000] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#000000] flex flex-col justify-center"
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
      {/* Collapsed Header View */}
      <div
        ref={collapsedWrapperRef}
        className="overflow-hidden flex items-center justify-between gap-4 w-full"
      >
        <h3 className="font-display text-[26px] sm:text-[30px] md:text-[34px] font-extrabold text-black tracking-tight leading-tight">
          {title}
        </h3>

        <div className="flex-shrink-0">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            aria-label="Expand"
            className="flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full border-[2.5px] border-black bg-white shadow-[2px_2px_0_0_#000000] transition-transform active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            <span ref={collapsedChevronRef} className="inline-block leading-none text-xs md:text-sm text-black">
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

      {/* Expanded View (Header + Bullets + Children) */}
      <div ref={expandedWrapperRef} className="overflow-hidden w-full">
        {/* Top Pill / Meta Row */}
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

          {/* Right: Date Range Pill + Chevron Button */}
          <div className="flex items-center gap-2.5">
            <span className="inline-block rounded-full border-[2px] border-black bg-white px-3.5 py-1 text-xs sm:text-sm font-bold text-black shadow-[2px_2px_0_0_#000000]">
              {dateRange}
            </span>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggle();
              }}
              aria-label="Collapse"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border-[2.5px] border-black bg-white shadow-[2px_2px_0_0_#000000] transition-transform active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            >
              <span ref={expandedChevronRef} className="inline-block leading-none text-xs md:text-sm text-black">
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

        {/* Role / Degree Heading */}
        <h3 className="font-display mt-3.5 sm:mt-4 text-xl sm:text-2xl md:text-[26px] font-extrabold text-black tracking-tight">
          {role}
        </h3>

        {/* Organization + Location */}
        <div className="mt-1.5 flex items-center gap-1.5 flex-wrap text-sm sm:text-base font-semibold text-black">
          <span>{organization}</span>
          <span className="text-neutral-500 font-normal">• {location}</span>
        </div>

        {/* Collapsible Body (Bullets & Children) */}
        <div className="mt-4 pt-3.5 border-t-2 border-black/10">
          {bullets && bullets.length > 0 && (
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
          )}

          {children && <div className="mt-3">{children}</div>}
        </div>
      </div>
    </div>
  );
};
