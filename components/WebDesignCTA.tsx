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
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    }, containerRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="design"
      className="relative w-full overflow-hidden border-b-[3.5px] border-black bg-white py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center"
    >
      <div ref={containerRef} className="mx-auto max-w-2xl flex flex-col items-center">
        {/* Small Pill Badge: "Website Design" */}
        <span className="inline-flex items-center rounded-full border-[3px] border-black bg-[#fef08a] px-4 py-1.5 text-[13px] sm:text-[14px] font-bold text-black shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]">
          Website Design
        </span>

        {/* H2 Heading: "Need a website?" */}
        <h2 className="font-display mt-4 sm:mt-5 text-[28px] sm:text-[34px] md:text-[40px] font-bold text-black tracking-tight leading-tight">
          Need a website?
        </h2>

        {/* Subtitle Paragraph */}
        <p className="mt-3.5 sm:mt-4 text-[14px] sm:text-[15px] md:text-base text-[#525252] font-normal leading-relaxed max-w-lg">
          Landing pages, multi-page sites, and custom builds &mdash;
          <br className="hidden sm:inline" />
          {" "}designed and built end-to-end. Fixed price, fast delivery.
        </p>

        {/* CTA Button */}
        <div className="mt-7 sm:mt-8">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-[16px] border-[3px] border-black bg-black px-[32px] py-[16px] font-display text-[18px] font-medium text-white shadow-[5px_5px_0_0_rgba(0,0,0,0.85)] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.85)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
          >
            <span>See services &amp; pricing</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};
