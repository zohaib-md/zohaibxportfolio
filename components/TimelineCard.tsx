"use client";

import React from "react";

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
      {/* Collapsed View */}
      {!isExpanded && (
        <div className="flex items-center justify-between gap-4 w-full">
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
              <span className="inline-block leading-none text-xs md:text-sm text-black">
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
      )}

      {/* Expanded View */}
      {isExpanded && (
        <div className="w-full">
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
                <span className="inline-block leading-none text-xs md:text-sm text-black">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
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
      )}
    </div>
  );
};
