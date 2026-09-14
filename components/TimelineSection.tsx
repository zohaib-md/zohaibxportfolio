"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalData, TimelineEntry } from "@/lib/data";
import { TimelineCard } from "./TimelineCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const TimelineSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleEntry = (id: string) => {
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
      // Header entrance animation
      gsap.from(".timeline-header-anim", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 25,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Rail line draw down
      gsap.from(".timeline-rail-line", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        scaleY: 0,
        transformOrigin: "top center",
        duration: 0.7,
        ease: "power2.out",
      });

      // Cards staggered entrance
      gsap.from(".timeline-item-row", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 35,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const timelineItems: TimelineEntry[] = personalData.timelineData || [];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full border-b-[3.5px] border-black bg-white py-20 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16 md:mb-20 text-center">
          <h2 className="timeline-header-anim flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight">
            <span>Experience</span>
            <span className="inline-block rounded-[14px] border-[3.5px] border-black bg-[#facc15] px-4 py-1.5 sm:px-5 sm:py-2 text-black shadow-[4px_4px_0_0_#000000] md:shadow-[5px_5px_0_0_#000000]">
              &amp; Education
            </span>
          </h2>
          <p className="timeline-header-anim mt-3 sm:mt-4 text-base sm:text-lg text-neutral-500 font-normal">
            A journey through my professional growth
          </p>
        </div>

        {/* Timeline Structure */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Timeline Rail Line */}
          <div
            className="timeline-rail-line absolute bottom-7 top-7 z-0 w-[3px] bg-black"
            style={{ left: "1.25rem" }}
          />

          {/* Timeline Entries */}
          <div className="relative z-10 space-y-7 sm:space-y-8 md:space-y-9">
            {timelineItems.map((item) => {
              const isExpanded = expandedIds.has(item.id);

              return (
                <div
                  key={item.id}
                  className="timeline-item-row relative flex items-start gap-4 sm:gap-6 md:gap-7"
                >
                  {/* Circular Dot Marker on the Timeline Line */}
                  <div className="relative z-10 flex w-10 flex-shrink-0 items-center justify-center pt-6 sm:pt-7">
                    <button
                      type="button"
                      onClick={() => toggleEntry(item.id)}
                      aria-label={`Toggle ${item.title}`}
                      style={{ backgroundColor: item.dotColor }}
                      className="h-5 w-5 sm:h-6 sm:w-6 rounded-full border-[3px] border-black shadow-[3px_3px_0_0_#000000] transition-transform duration-150 hover:scale-110 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                    />
                  </div>

                  {/* Card to the right of the timeline */}
                  <div className="min-w-0 flex-1">
                    <TimelineCard
                      {...item}
                      isExpanded={isExpanded}
                      onToggle={() => toggleEntry(item.id)}
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
