"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const HireHero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { y: 20, scale: 0.9, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.45,
            ease: "back.out(1.5)",
            clearProps: "all",
          }
        );
      }

      tl.fromTo(
        title1Ref.current,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power3.out",
          clearProps: "all",
        },
        badgeRef.current ? "-=0.25" : undefined
      )
        .fromTo(
          title2Ref.current,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: "power3.out",
            clearProps: "all",
          },
          "-=0.4"
        )
        .fromTo(
          subheadRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            ease: "power2.out",
            clearProps: "all",
          },
          "-=0.3"
        )
        .fromTo(
          bioRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            ease: "power2.out",
            clearProps: "all",
          },
          "-=0.3"
        )
        .fromTo(
          ctaRef.current,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            clearProps: "all",
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
        {/* Badge: "Open to new projects" */}
        <div ref={badgeRef} className="flex justify-start">
          <span className="inline-flex items-center rounded-full border-[2.5px] border-black bg-[#bbf7d0] px-4 py-1.5 text-xs sm:text-sm font-bold text-black shadow-[3px_3px_0_0_#000000]">
            Open to new projects
          </span>
        </div>

        {/* H1 Heading */}
        <h1 className="mt-5 sm:mt-6 flex flex-col items-start font-display text-[36px] sm:text-[50px] md:text-[60px] font-bold text-black tracking-tight leading-[1.1]">
          <span ref={title1Ref}>Hire an Android &amp; Full-Stack</span>
          <span
            ref={title2Ref}
            className="mt-2 inline-block rounded-[14px] md:rounded-[18px] border-[3.5px] border-black bg-[#FACC15] px-5 sm:px-7 py-1 sm:py-1.5 text-black shadow-[4.5px_4.5px_0_0_#000000] md:shadow-[5.5px_5.5px_0_0_#000000]"
          >
            Developer
          </span>
        </h1>

        {/* Subhead */}
        <p
          ref={subheadRef}
          className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg font-bold text-neutral-700 tracking-wide text-left"
        >
          Kotlin &middot; Jetpack Compose &middot; Full-Stack Systems &middot; AI-Integrated Apps
        </p>

        {/* Bio Paragraph */}
        <p
          ref={bioRef}
          className="mt-5 max-w-3xl text-sm sm:text-base md:text-[17px] text-neutral-800 leading-relaxed font-normal text-left"
        >
          I&apos;m a Software Dev Intern at <strong className="font-bold text-black">Hyperzod</strong>, an AI-first quick commerce SaaS platform, where I ship production Vue and Laravel features across the stack. Outside work, I build native Android apps and open-source developer tools: CLI agents with real test coverage, not toy demos. I pick up new technologies flexibly to solve problems end-to-end. Available for freelance builds, feature work, and open to full-time roles after graduation.
        </p>

        {/* Two CTA Buttons */}
        <div
          ref={ctaRef}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-start gap-4 sm:gap-5"
        >
          <a
            href="mailto:zohaibmohammad88@gmail.com?subject=Start%20a%20Project%20Conversation"
            className="inline-flex items-center justify-center rounded-full border-[2.5px] border-black bg-black px-6 sm:px-8 py-3 text-sm sm:text-base font-display font-bold text-white shadow-[4px_4px_0_0_#000000] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#000000] active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            Start a Project Conversation
          </a>
          <a
            href="https://cal.com/mohammad-zohaib-seahzf/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-[2.5px] border-black bg-white px-6 sm:px-8 py-3 text-sm sm:text-base font-display font-bold text-black shadow-[4px_4px_0_0_#000000] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#000000] active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
};
