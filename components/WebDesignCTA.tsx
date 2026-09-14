"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const WebDesignCTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 35,
        opacity: 0,
        duration: 0.65,
        ease: "power3.out",
      });
    }, containerRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="design"
      className="relative w-full overflow-hidden border-b-[3.5px] border-black bg-white py-24 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 text-center"
    >
      <div ref={containerRef} className="mx-auto max-w-3xl flex flex-col items-center">
        {/* Small Pill Badge: "Website Design" */}
        <span className="inline-flex items-center rounded-full border-[2px] border-black bg-[#fef08a] px-4 py-1 text-xs sm:text-sm font-bold text-black shadow-[2px_2px_0_0_#000000]">
          Website Design
        </span>

        {/* H2 Heading: "Need a website?" */}
        <h2 className="font-display mt-4 sm:mt-5 text-[38px] sm:text-[48px] md:text-[56px] font-bold text-black tracking-tight leading-tight">
          Need a website?
        </h2>

        {/* Subtitle Paragraph */}
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-neutral-600 font-normal max-w-xl leading-relaxed">
          Landing pages, multi-page sites, and custom builds &mdash; designed and built end-to-end. Fixed price, fast delivery.
        </p>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-black bg-black px-7 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-white shadow-[4px_4px_0_0_#000000] hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
          >
            <span>See services &amp; pricing</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};
