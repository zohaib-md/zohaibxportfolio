"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalData } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const helloRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fast, snappy, synchronized entrance timeline
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(photoRef.current, {
        y: 20,
        duration: 0.35,
        ease: "power2.out",
      })
        .from(
          ".confetti-shape",
          {
            scale: 0.85,
            duration: 0.3,
            stagger: 0.04,
            ease: "back.out(1.4)",
          },
          "-=0.2"
        )
        .from(
          [
            helloRef.current,
            titleRef.current,
            subtitleRef.current,
            bioRef.current,
            ctaRef.current,
            badgeRef.current,
          ],
          {
            y: 12,
            duration: 0.3,
            stagger: 0.03,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fef3c7] pt-28 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Dot Grid Pattern */}
      <div className="absolute inset-0 neo-dot-grid pointer-events-none" />

      {/* Confetti Shape 1: Top-Left Blue Rectangle (partially behind navbar) */}
      <div
        className="confetti-shape absolute left-6 sm:left-10 top-16 w-24 sm:w-28 h-16 sm:h-20 bg-[#60a5fa] border-[3.5px] border-black shadow-[6px_6px_0_0_#000000] rounded-none rotate-[1deg] pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Confetti Shape 2: Top-Right Pink/Magenta Rectangle */}
      <div
        className="confetti-shape absolute right-6 sm:right-10 top-24 sm:top-28 w-16 sm:w-20 h-24 sm:h-32 bg-[#f472b6] border-[3.5px] border-black shadow-[6px_6px_0_0_#000000] rounded-none rotate-[3.5deg] pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Confetti Shape 3: Green Square (below and to the right of photo, fully visible) */}
      <div
        className="confetti-shape absolute top-[72%] sm:top-[74%] lg:top-[70%] left-[24%] sm:left-[26%] lg:left-[27%] xl:left-[28%] w-28 sm:w-32 lg:w-36 h-28 sm:h-32 lg:h-36 bg-[#34d399] border-[3.5px] border-black shadow-[6px_6px_0_0_#000000] rounded-none rotate-[-6deg] pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* Main Two-Column Hero Container */}
      <div className="relative z-30 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Column: Profile Photo */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start lg:pl-2 xl:pl-6 relative">
          <div
            ref={photoRef}
            className="neo-card relative h-72 w-72 sm:h-80 sm:w-80 lg:h-[350px] lg:w-[350px] xl:h-[370px] xl:w-[370px] overflow-hidden rounded-[32px] bg-white border-[3.5px] border-black shadow-[7px_7px_0_0_#000000] transition-transform hover:-translate-y-1 hover:shadow-[9px_9px_0_0_#000000] duration-200 z-20"
          >
            <Image
              src={personalData.photo}
              alt={`${personalData.firstName} ${personalData.lastName}`}
              fill
              priority
              className="object-cover scale-[1.35] origin-[58%_45%]"
              sizes="(max-width: 640px) 288px, (max-width: 1024px) 350px, 370px"
            />
          </div>
        </div>

        {/* Right Column: Hero Content Block (~55% width) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left relative">
          {/* Eyebrow / Hello Label */}
          <p
            ref={helloRef}
            className="font-display text-lg text-black mb-1 select-none"
          >
            {personalData.eyebrow}
          </p>

          {/* H1 Heading: Name with Underline + Highlighter Box */}
          <h1
            ref={titleRef}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-[70px] text-black leading-tight flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-3"
          >
            {/* First Name with Yellow Underline */}
            <span className="neo-underline inline-block pb-0.5 text-black">
              {personalData.firstName}
            </span>

            {/* Last Name inside Blue Highlighter Box */}
            <span className="inline-block rounded-xl border-[3.5px] border-black bg-[#bfdbfe] px-3.5 py-1 shadow-[4.5px_4.5px_0_0_#000000] text-black">
              {personalData.lastName}
            </span>
          </h1>

          {/* Subheading / Positioning Line */}
          <p
            ref={subtitleRef}
            className="font-display font-bold text-xl sm:text-2xl text-black leading-snug mb-3 max-w-xl"
          >
            {personalData.title}
          </p>

          {/* Body Paragraph with bold keywords */}
          <p
            ref={bioRef}
            className="font-sans text-base sm:text-[17px] text-black leading-relaxed max-w-xl mb-6"
            dangerouslySetInnerHTML={{ __html: personalData.bioHtml }}
          />

          {/* CTA Buttons Row */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full sm:w-auto mb-3"
          >
            {/* Primary CTA (Hire Me) */}
            <Link
              href={personalData.hireLink}
              className="btn-neo w-full sm:w-auto !bg-[#facc15] hover:!bg-[#facc15] active:!bg-[#facc15] border-[3px] border-black rounded-xl px-7 py-3 text-base font-display font-bold flex items-center justify-center gap-2"
            >
              Hire Me
              <span className="text-sm font-bold">→</span>
            </Link>

            {/* Secondary CTA (See My Work) */}
            <Link
              href={personalData.workLink}
              className="btn-neo w-full sm:w-auto !bg-white hover:!bg-white active:!bg-white border-[3px] border-black rounded-xl px-7 py-3 text-base font-display font-bold flex items-center justify-center gap-2"
            >
              See My Work
              <span className="text-sm font-bold">→</span>
            </Link>
          </div>

          {/* Location Badge + Confetti Shape 4 relative container */}
          <div ref={badgeRef} className="pt-1 relative z-20">
            <span className="inline-block rounded-md border-[3px] border-black bg-black px-3.5 py-1 text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-white shadow-[3px_3px_0_0_#000000]">
              {personalData.location}
            </span>

            {/* Confetti Shape 4: Bottom-Right White Rectangle (underneath/behind the badge) */}
            <div
              className="confetti-shape absolute -bottom-8 -right-36 sm:-right-40 w-36 sm:w-44 h-16 sm:h-20 bg-white border-[3.5px] border-black shadow-[6px_6px_0_0_#000000] rounded-none rotate-[3deg] pointer-events-none -z-10"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
