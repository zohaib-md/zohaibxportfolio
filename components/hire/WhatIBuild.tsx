"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface BuildCard {
  title: string;
  description: string;
  bg: string;
  bullets: string[];
}

const buildCards: BuildCard[] = [
  {
    title: "AI Systems & Agents",
    description:
      "Autonomous agent runtimes, tool execution sandboxes, and safety benchmarks built with test-driven evaluation suites.",
    bg: "bg-[#DCFCE7]",
    bullets: [
      "Zonrad: Agent SDK platform with client-side tool execution",
      "Ratchet: Adversarial safety benchmark evaluating permission layers vs. prompt rules",
      "MiniSeek: Local-first agent harness with 138 passing tests",
    ],
  },
  {
    title: "Frontend Design & Web Systems",
    description:
      "Interactive user interfaces, modern design systems, and responsive full-stack web applications.",
    bg: "bg-[#DBEAFE]",
    bullets: [
      "Tactile, high-craft web design with smooth GSAP animations & micro-interactions",
      "Modular UI components, theme builders, and state systems in Vue 3 & Next.js",
      "Scalable backend APIs and database schemas in Laravel & PostgreSQL",
    ],
  },
  {
    title: "Mobile & Edge Engineering",
    description:
      "Native Android applications in Kotlin and Jetpack Compose featuring on-device ML and offline-first data stores.",
    bg: "bg-[#FEF08A]",
    bullets: [
      "AvatarX: On-device biometric mapping via MediaPipe, ML Kit, and Gemini",
      "Expectr: Personal finance tracker with local-first SQLite storage",
      "Zenith Launcher: Distraction-free launcher with Android platform APIs",
    ],
  },
  {
    title: "Developer Tooling & Open Source",
    description:
      "CLI tools, developer utilities, and open-source packages designed with privacy, clean APIs, and automated CI/CD.",
    bg: "bg-[#FCE7F3]",
    bullets: [
      "Jobbie: Privacy-first CLI for job tailoring and document drafting",
      "Strict input validation, predictable error handling, and zero telemetry",
      "Maintainer of open-source developer tooling and benchmarks",
    ],
  },
];

import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const WhatIBuild: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".build-card-item",
        { y: 35, opacity: 0 },
        {
          scrollTrigger: {
            trigger: cardsRef.current || sectionRef.current,
            start: "top 88%",
            once: true,
          },
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          onComplete: () => {
            gsap.set(".build-card-item", { clearProps: "all" });
          },
        }
      );
    }, sectionRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b-[3.5px] border-black">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-display text-[32px] sm:text-[44px] md:text-[50px] font-bold text-black tracking-tight leading-tight">
            What I Build
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 font-normal max-w-2xl mx-auto leading-relaxed">
            Full-lifecycle craft: AI platforms, interactive frontend design, and scalable systems
          </p>
        </div>

        {/* 2x2 Pastel Card Grid */}
        <div
          ref={cardsRef}
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch"
        >
          {buildCards.map((card) => (
            <div
              key={card.title}
              className={`build-card-item flex flex-col justify-between rounded-[22px] md:rounded-[26px] border-[3.5px] border-black p-6 sm:p-8 shadow-[6px_6px_0_0_#000000] ${card.bg} transition-all duration-150 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000000]`}
            >
              <div>
                <h3 className="font-display text-2xl sm:text-[26px] font-black text-black tracking-tight leading-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-neutral-900 leading-relaxed font-normal">
                  {card.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {card.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm sm:text-[15px] font-medium text-black"
                    >
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-black" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
