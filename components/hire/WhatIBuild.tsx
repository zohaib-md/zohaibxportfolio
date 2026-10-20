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
    title: "AI Agents & Autonomous Systems",
    description:
      "Deterministic agent harnesses, multi-agent orchestration, and MCP tool platforms built with empirical safety constraints and eval benchmarks.",
    bg: "bg-[#DCFCE7]",
    bullets: [
      "Zonrad: Agent SDK platform & canvas orchestration",
      "Ratchet: Adversarial safety benchmark (0/30 baseline failures after constraints)",
      "MiniSeek: Local-first agent harness (138 passing tests, sandboxed execution)",
    ],
  },
  {
    title: "Enterprise Integrations & Full-Stack",
    description:
      "Scalable backend architectures, provider-agnostic integration layers, and real-time event-driven infrastructure.",
    bg: "bg-[#DBEAFE]",
    bullets: [
      "Production multi-agent pipelines with LangGraph & Model Context Protocol (MCP)",
      "High-throughput event streaming & Redis pub/sub caching layers",
      "Resilient REST/GraphQL APIs with idempotent webhook handlers",
    ],
  },
  {
    title: "Android & Edge Intelligence",
    description:
      "Native Android apps in Kotlin and Jetpack Compose, featuring on-device ML: pose estimation, segmentation, and offline-first data stores.",
    bg: "bg-[#FEF08A]",
    bullets: [
      "AvatarX: On-device generation via MediaPipe + ML Kit + Gemini",
      "Expectr: AI-powered finance engine (100% Compose)",
      "Zenith Launcher: Distraction-free digital wellbeing launcher",
    ],
  },
  {
    title: "Developer Tooling & Open Source",
    description:
      "Open-source developer platforms, automated CLI workflows, and testing harnesses engineered for reliability.",
    bg: "bg-[#FCE7F3]",
    bullets: [
      "Jobbie: Privacy-first resume tailoring & job application CLI",
      "Strict schema validation & deterministic runtime wrappers",
      "Production-ready documentation and automated CI/CD pipelines",
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
            End-to-end delivery: autonomous AI agents, enterprise systems, and native mobile apps
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
