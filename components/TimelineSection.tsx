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
  const headerRef = useRef<HTMLDivElement>(null);
  const titleExpRef = useRef<HTMLSpanElement>(null);
  const badgeEduRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
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
      // Elegant, smooth transition for Experience & Education heading on scroll
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });

      headerTl
        .from(titleExpRef.current, {
          y: 45,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
        })
        .from(
          badgeEduRef.current,
          {
            scale: 0.84,
            y: 35,
            rotation: -3,
            opacity: 0,
            duration: 0.7,
            ease: "back.out(1.7)",
          },
          "-=0.55"
        )
        .from(
          subtitleRef.current,
          {
            y: 22,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.45"
        );

      // Rail line draw down on scroll
      gsap.from(".timeline-rail-line", {
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

      // Cards staggered entrance
      gsap.from(".timeline-item-row", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    // Refresh ScrollTrigger calculations after initial layout pass
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  const timelineItems: TimelineEntry[] = personalData.timelineData || [];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full overflow-hidden border-t-[2.5px] sm:border-t-[3px] border-b-[3.5px] border-black bg-white py-20 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1152px]">
        {/* Section Header */}
        <div ref={headerRef} className="mb-14 sm:mb-16 md:mb-20 text-center">
          <h2 className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 font-display text-[34px] sm:text-[46px] md:text-[60px] font-bold text-black leading-none tracking-tight">
            <span ref={titleExpRef} className="inline-block leading-none">
              Experience
            </span>
            <span
              ref={badgeEduRef}
              className="inline-block rounded-[14px] md:rounded-[16px] border-[3px] md:border-[3.5px] border-black bg-[#FACC15] text-black shadow-[4px_4px_0_0_#000000] md:shadow-[5px_5px_0_0_#000000] leading-none whitespace-nowrap"
              style={{ padding: "4px 8px" }}
            >
              &amp; Education
            </span>
          </h2>
          <p
            ref={subtitleRef}
            className="mt-3 sm:mt-4 text-base sm:text-lg text-neutral-500 font-normal"
          >
            A journey through my professional growth
          </p>
        </div>

        {/* Timeline Structure (1152px total width: 48px rail + 1104px card) */}
        <div className="relative mx-auto max-w-[1152px] w-full">
          {/* Vertical Timeline Rail Line */}
          <div
            className="timeline-rail-line absolute bottom-[55px] top-[55px] z-0 w-[3px] bg-black"
            style={{ left: "22.5px" }}
          />

          {/* Timeline Entries (40px padding-bottom per row) */}
          <div className="relative z-10">
            {timelineItems.map((item) => {
              const isExpanded = expandedIds.has(item.id);

              return (
                <div
                  key={item.id}
                  className="timeline-item-row relative flex items-start w-full pb-[40px] last:pb-0"
                >
                  {/* Left Rail Column: 48px wide with 24px Dot Marker vertically centered on 110px card */}
                  <div className="relative z-10 flex w-[48px] flex-shrink-0 items-start justify-center pt-[43px]">
                    <button
                      type="button"
                      onClick={() => toggleEntry(item.id)}
                      aria-label={`Toggle ${item.title}`}
                      style={{ backgroundColor: item.dotColor }}
                      className="h-6 w-6 rounded-full border-[3px] border-black shadow-[3px_3px_0_0_#000000] transition-transform duration-150 hover:scale-110 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
                    />
                  </div>

                  {/* Right Column: 1104px Max-Width Card */}
                  <div className="min-w-0 flex-1 max-w-[1104px]">
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
