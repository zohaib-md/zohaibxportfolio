"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const DesignHero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      if (badgeRef.current) {
        tl.from(badgeRef.current, {
          y: 20,
          scale: 0.9,
          opacity: 0,
          duration: 0.45,
          ease: "back.out(1.5)",
        });
      }

      tl.from(
        title1Ref.current,
        {
          y: 35,
          opacity: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        badgeRef.current ? "-=0.25" : undefined
      )
        .from(
          title2Ref.current,
          {
            y: 35,
            opacity: 0,
            duration: 0.55,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          bioRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          ctaRef.current,
          {
            y: 18,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.25"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#fef4c7] pt-32 sm:pt-40 md:pt-44 pb-16 sm:pb-20 border-b-[3.5px] border-black px-4 sm:px-6 lg:px-8 text-left"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Badge: "Open to design & build work" (no dot, light blue pill) */}
        <div ref={badgeRef} className="flex justify-start">
          <span className="inline-flex items-center rounded-full border-[2.5px] border-black bg-[#bfdbfe] px-4 py-1.5 text-xs sm:text-sm font-bold text-black shadow-[3px_3px_0_0_#000000]">
            Open to design &amp; build work
          </span>
        </div>

        {/* H1 Heading */}
        <h1 className="mt-5 sm:mt-6 flex flex-col items-start font-display text-[28px] xs:text-[32px] sm:text-[46px] md:text-[56px] font-extrabold text-black tracking-tight leading-[1.15]">
          <span ref={title1Ref}>Web Design &amp;</span>
          <span
            ref={title2Ref}
            className="mt-2 inline-block rounded-[14px] sm:rounded-[18px] md:rounded-[20px] border-[3px] sm:border-[3.5px] border-black bg-[#FACC15] px-4 sm:px-6 md:px-7 py-1 sm:py-1.5 md:py-2 text-black shadow-[4px_4px_0_0_#000000] md:shadow-[5.5px_5.5px_0_0_#000000] max-w-full"
          >
            Product Development
          </span>
        </h1>

        {/* Bio / Value Prop Paragraph */}
        <p
          ref={bioRef}
          className="mt-6 max-w-2xl text-base sm:text-lg md:text-[19px] text-neutral-800 leading-relaxed font-normal text-left"
        >
          I design and build products <strong className="font-bold text-black">end-to-end</strong>: from UI to deployment. Currently building <strong className="font-bold text-black">Zonrad</strong>, a multi-agent AI platform, solo. Open to landing pages, MVPs, and full-stack builds for startups and small businesses.
        </p>

        {/* Two CTA Buttons */}
        <div
          ref={ctaRef}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-start gap-3.5 sm:gap-5"
        >
          <a
            href="mailto:zohaibmohammad88@gmail.com?subject=Start%20a%20Project%20Conversation"
            className="inline-flex items-center justify-center rounded-2xl border-[3px] border-black bg-black px-5 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-base font-display font-bold text-white shadow-[4px_4px_0_0_#000000] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#000000] active:translate-x-0.5 active:translate-y-0.5 transition-all text-center"
          >
            Start a Project Conversation
          </a>
          <a
            href="mailto:zohaibmohammad88@gmail.com?subject=Inquiry%20via%20Portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border-[3px] border-black bg-white px-5 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-base font-display font-bold text-black shadow-[4px_4px_0_0_#000000] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#000000] active:translate-x-0.5 active:translate-y-0.5 transition-all text-center"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Email me
          </a>
        </div>
      </div>
    </section>
  );
};
