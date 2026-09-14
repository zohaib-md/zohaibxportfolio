"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const ProductsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance animation
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      // Cards staggered entrance
      gsap.from(".product-card-item", {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
        y: 35,
        opacity: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: "power2.out",
      });
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative w-full overflow-hidden border-b-[3.5px] border-black bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* HEADER ROW (flex, space-between, items aligned to flex-end) */}
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pb-2"
        >
          {/* Left Column (Pill badge + H2) */}
          <div className="flex flex-col items-start">
            {/* Small Pill Badge: "Digital Products" */}
            <span className="inline-flex items-center rounded-full border-[2px] border-black bg-[#e1cef7] px-3.5 py-1 text-xs sm:text-[13px] font-bold text-black shadow-[2px_2px_0_0_#000000]">
              Digital Products
            </span>

            {/* H2 Title: "Tools I Sell" (48px Space Grotesk) */}
            <h2 className="font-display mt-3 sm:mt-4 text-[34px] sm:text-[42px] md:text-[48px] font-bold text-black tracking-tight leading-none flex items-center flex-wrap gap-2.5">
              <span>Tools I</span>
              <span className="inline-block rounded-[12px] md:rounded-[14px] border-[3px] border-black bg-[#FACC15] px-3.5 py-1 text-black shadow-[4px_4px_0_0_#000000]">
                Sell
              </span>
            </h2>
          </div>

          {/* Right Column: "View all →" button */}
          <div className="flex-shrink-0">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full border-[2.5px] border-black bg-black px-6 py-2.5 text-sm sm:text-base font-bold text-white shadow-[3.5px_3.5px_0_0_#000000] hover:-translate-y-0.5 hover:shadow-[4.5px_4.5px_0_0_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              <span>View all</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        {/* 
          PRODUCT CARDS GRID (3 cards side by side, equal width)
          As per note: Currently all 3 cards are in the "coming soon" placeholder style
          (light lavender bg, soft shadow, "More coming soon" centered text).
        */}
        <div
          ref={cardsRef}
          className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full"
        >
          {/* Card 1: Placeholder / Coming Soon */}
          <div className="product-card-item w-full min-h-[251.59px] rounded-[20px] md:rounded-[24px] border-[2.5px] border-[#999999] bg-[#e6f0fe] p-6 shadow-[5px_5px_0_0_#94a3b8] flex items-center justify-center select-none transition-transform hover:-translate-y-0.5">
            <span className="font-display text-sm sm:text-base font-semibold text-neutral-400 tracking-wide">
              More coming soon
            </span>
          </div>

          {/* Card 2: Placeholder / Coming Soon */}
          <div className="product-card-item w-full min-h-[251.59px] rounded-[20px] md:rounded-[24px] border-[2.5px] border-[#999999] bg-[#e6f0fe] p-6 shadow-[5px_5px_0_0_#94a3b8] flex items-center justify-center select-none transition-transform hover:-translate-y-0.5">
            <span className="font-display text-sm sm:text-base font-semibold text-neutral-400 tracking-wide">
              More coming soon
            </span>
          </div>

          {/* Card 3: Placeholder / Coming Soon */}
          <div className="product-card-item w-full min-h-[251.59px] rounded-[20px] md:rounded-[24px] border-[2.5px] border-[#999999] bg-[#e6f0fe] p-6 shadow-[5px_5px_0_0_#94a3b8] flex items-center justify-center select-none transition-transform hover:-translate-y-0.5">
            <span className="font-display text-sm sm:text-base font-semibold text-neutral-400 tracking-wide">
              More coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
