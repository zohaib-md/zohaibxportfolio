"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const ContactHeader: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(titleRef.current, {
        y: 35,
        opacity: 0,
        duration: 0.55,
        ease: "power3.out",
      }).from(
        subheadRef.current,
        {
          y: 20,
          opacity: 0,
          duration: 0.45,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#fef4c7] pt-36 sm:pt-40 md:pt-44 pb-14 sm:pb-16 border-b-[3.5px] border-black px-4 sm:px-6 lg:px-8 text-center"
    >
      {/* Background Dot Grid */}
      <div className="absolute inset-0 neo-dot-grid pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* H1 Heading: Plain Centered Bold */}
        <h1
          ref={titleRef}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-950 tracking-tight"
        >
          Get in Touch
        </h1>

        {/* Subhead */}
        <p
          ref={subheadRef}
          className="mt-4 text-base sm:text-lg md:text-xl text-neutral-600 font-sans font-medium max-w-xl mx-auto leading-relaxed"
        >
          Pick whichever way works best for you. I reply within 24 hours.
        </p>
      </div>
    </section>
  );
};
