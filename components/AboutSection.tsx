"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type HighlightColor = "yellow" | "cyan" | "pink" | "green";
type HighlightDirection = "ltr" | "rtl";

interface HighlightProps {
  children: React.ReactNode;
  color: HighlightColor;
  direction: HighlightDirection;
  indexInParagraph: number;
}

const COLOR_CLASSES: Record<HighlightColor, string> = {
  yellow: "bg-[#ffd93d]",
  cyan: "bg-[#66d9ef]",
  pink: "bg-[#ff6b9d]",
  green: "bg-[#a8e6cf]",
};

const Highlight: React.FC<HighlightProps> = ({
  children,
  color,
  direction,
  indexInParagraph,
}) => {
  return (
    <span className="relative inline-block px-1.5 py-0.5 mx-0.5 font-bold text-black align-baseline select-text isolate">
      {/* Highlighter Pen Fill Box */}
      <span
        data-direction={direction}
        data-index={indexInParagraph}
        className={`about-highlight-bg absolute inset-0 z-0 rounded-[3px] pointer-events-none ${COLOR_CLASSES[color]}`}
        style={{
          transformOrigin: direction === "ltr" ? "left center" : "right center",
          transform: "scaleX(0)",
          transition: "transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
          willChange: "transform",
        }}
        aria-hidden="true"
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
};

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const highlightBgs = Array.from(card.querySelectorAll<HTMLElement>(".about-highlight-bg"));
    if (highlightBgs.length === 0) return;

    interface HighlightItem {
      bg: HTMLElement;
      span: HTMLElement;
      direction: HighlightDirection;
      indexInParagraph: number;
    }

    const items: HighlightItem[] = highlightBgs.map((bg) => {
      const span = bg.parentElement as HTMLElement;
      const direction = (bg.getAttribute("data-direction") as HighlightDirection) || "ltr";
      const indexInParagraph = parseInt(bg.getAttribute("data-index") || "0", 10);
      return {
        bg,
        span,
        direction,
        indexInParagraph,
      };
    });

    const updateHighlights = () => {
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const scrollY = window.scrollY || window.pageYOffset;

      items.forEach((item) => {
        const rect = item.span.getBoundingClientRect();
        const elementTop = rect.top + scrollY;

        // Trigger threshold: when element reaches 82% of viewport height
        // Stagger multiple highlights in the same paragraph by 35px of scroll
        const triggerThreshold = windowHeight * 0.82 - item.indexInParagraph * 35;
        const startScroll = elementTop - triggerThreshold;
        const sweepDistance = 85; // 85px of scroll down sweeps from 0% to 100%

        // Calculate bidirectional progress: 0 to 1 as you scroll down, 1 to 0 as you scroll up
        const progress = Math.min(1, Math.max(0, (scrollY - startScroll) / sweepDistance));
        item.bg.style.transform = `scaleX(${progress})`;
      });
    };

    // Register ScrollTrigger to coordinate with GSAP ecosystem
    const st = ScrollTrigger.create({
      trigger: card,
      start: "top bottom",
      end: "bottom top",
      onUpdate: () => updateHighlights(),
    });

    // Window scroll listener for direct, instantaneous 60fps tracking as you scroll down
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateHighlights();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Initial check
    updateHighlights();

    // Re-check once splash screen unmounts and body scroll unlocks (2.1s)
    const splashTimer = setTimeout(() => {
      ScrollTrigger.refresh();
      updateHighlights();
    }, 2100);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      clearTimeout(splashTimer);
      st.kill();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[#fef3c7] pt-8 sm:pt-10 pb-20 sm:pb-24 md:pb-28 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Dot Grid Pattern */}
      <div className="absolute inset-0 neo-dot-grid pointer-events-none" />

      {/* Subtle decorative tape sticker in top-right area */}
      <div
        className="absolute right-6 sm:right-12 top-6 sm:top-8 w-14 sm:w-16 h-8 sm:h-10 bg-[#fde047] border-[2px] border-black/80 shadow-[2px_2px_0_0_rgba(0,0,0,0.35)] rotate-[-8deg] pointer-events-none z-10"
        aria-hidden="true"
      />

      <div className="relative z-20 mx-auto max-w-[1152px]">
        {/* Top-Left Aligned Heading Label */}
        <div className="mb-4 sm:mb-5">
          <span className="inline-block rounded-[4px] border-[3.5px] sm:border-[4px] border-black bg-[#ffd93d] px-4 py-1.5 sm:px-5 sm:py-2 font-display font-black text-xl sm:text-2xl tracking-tight text-black shadow-[4px_4px_0_0_#000000] sm:shadow-[5px_5px_0_0_#000000] leading-none select-none">
            ABOUT
          </span>
        </div>

        {/* Large White Neo-Brutalist Content Card */}
        <div
          ref={cardRef}
          className="rounded-none border-[3.5px] sm:border-[4px] border-black bg-white p-6 sm:p-10 md:p-14 lg:p-16 shadow-[8px_8px_0_0_#000000] sm:shadow-[10px_10px_0_0_#000000] md:shadow-[12px_12px_0_0_#000000]"
        >
          <div className="space-y-6 sm:space-y-8 md:space-y-9 text-[16px] sm:text-[18px] md:text-[19px] leading-relaxed sm:leading-[1.9] md:leading-[2.1] text-black font-normal">
            {/* Paragraph 1: Left-to-Right sweep */}
            <p className="about-paragraph">
              I am an Information Technology undergraduate pursuing my B.Tech, with a primary focus on{" "}
              <Highlight color="yellow" direction="ltr" indexInParagraph={0}>
                Android development
              </Highlight>{" "}
              and{" "}
              <Highlight color="cyan" direction="ltr" indexInParagraph={1}>
                full-stack systems
              </Highlight>
              . I enjoy building scalable, API-driven applications and understanding performance under real usage.
            </p>

            {/* Paragraph 2: Right-to-Left sweep */}
            <p className="about-paragraph">
              I have hands-on experience working as a{" "}
              <Highlight color="green" direction="rtl" indexInParagraph={0}>
                Software Development Intern at Hyperzod
              </Highlight>
              , an AI-first quick commerce SaaS platform, where I shipped production Android features and worked across the stack in{" "}
              <Highlight color="pink" direction="rtl" indexInParagraph={1}>
                Laravel and Vue.js
              </Highlight>
              . I prefer working close to the core logic of systems rather than only at the UI layer.
            </p>

            {/* Paragraph 3: Left-to-Right sweep */}
            <p className="about-paragraph">
              Alongside Android development, I have a strong interest in{" "}
              <Highlight color="cyan" direction="ltr" indexInParagraph={0}>
                on-device machine learning
              </Highlight>{" "}
              and{" "}
              <Highlight color="green" direction="ltr" indexInParagraph={1}>
                AI-integrated tooling
              </Highlight>
              . My project work includes building and open-sourcing{" "}
              <Highlight color="yellow" direction="ltr" indexInParagraph={2}>
                CLI agent tools
              </Highlight>{" "}
              with real test coverage - not just prompt wrappers, but systems with actual safety constraints.
            </p>

            {/* Paragraph 4: Right-to-Left sweep */}
            <p className="about-paragraph">
              I am driven by{" "}
              <Highlight color="yellow" direction="rtl" indexInParagraph={0}>
                continuous learning
              </Highlight>{" "}
              and a desire to write{" "}
              <Highlight color="green" direction="rtl" indexInParagraph={1}>
                clean, reliable software
              </Highlight>
              . Through internships, open-source projects, and problem-solving, I aim to build a strong foundation as I grow into a well-rounded engineer. Outside of code, I&apos;m a{" "}
              <Highlight color="pink" direction="rtl" indexInParagraph={2}>
                literati and orator
              </Highlight>{" "}
              at my college&apos;s cultural society - public speaking and writing keep me sharp in ways debugging alone doesn&apos;t.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
