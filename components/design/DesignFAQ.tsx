"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Depends on scope: a simple landing page can take under a week, a full product build takes longer. I'll give you a realistic timeline in the quote.",
  },
  {
    question: "Do you handle domain and hosting?",
    answer:
      "I can guide you through domain and hosting setup (I just went through this myself for this site), but you'll own the accounts directly.",
  },
  {
    question: "Can I update the site myself after launch?",
    answer:
      "Yes: I build with maintainability in mind and can walk you through making basic updates, or set things up in a CMS if that's a better fit.",
  },
  {
    question: "Is this your first paid design work?",
    answer:
      "I'm early in taking on client work, but I design and build production software daily, including Zonrad, a full product I'm building solo end-to-end. I bring the same care to client projects.",
  },
];

interface FAQCardProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQCard: React.FC<FAQCardProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    const el = contentRef.current;
    const icon = iconRef.current;
    if (!el || !icon) return;

    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (isOpen) {
        gsap.set(el, { height: "auto", autoAlpha: 1 });
        el.style.overflow = "visible";
        gsap.set(icon, { rotation: 45 });
      } else {
        gsap.set(el, { height: 0, autoAlpha: 0 });
        el.style.overflow = "hidden";
        gsap.set(icon, { rotation: 0 });
      }
      return;
    }

    gsap.killTweensOf([el, icon]);

    if (isOpen) {
      el.style.overflow = "hidden";
      gsap.fromTo(
        el,
        { height: 0, autoAlpha: 0 },
        {
          height: "auto",
          autoAlpha: 1,
          duration: 0.38,
          ease: "power2.out",
          onComplete: () => {
            if (el) el.style.overflow = "visible";
          },
        }
      );
      gsap.to(icon, {
        rotation: 45,
        duration: 0.3,
        ease: "power2.inOut",
      });
    } else {
      if (el) el.style.overflow = "hidden";
      gsap.to(el, {
        height: 0,
        autoAlpha: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
      gsap.to(icon, {
        rotation: 0,
        duration: 0.35,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  return (
    <div className="rounded-[20px] border-[3.5px] border-black bg-white shadow-[5px_5px_0_0_#000000] overflow-hidden transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#000000]">
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left cursor-pointer hover:bg-neutral-50/80 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-display font-bold text-base sm:text-lg text-black pr-4">
          {question}
        </span>
        <div className="w-8 h-8 rounded-full border-[2.5px] border-black bg-[#fef08a] flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0_0_#000000]">
          <svg
            ref={iconRef}
            className="w-4 h-4 text-black transform origin-center"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            viewBox="0 0 24 24"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </button>

      <div ref={contentRef} className="overflow-hidden w-full">
        <div className="px-6 pb-6 sm:px-8 sm:pb-6 pt-2 border-t-[2.5px] border-black/10">
          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export const DesignFAQ: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="relative w-full bg-[#fef4c7] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b-[3.5px] border-black">
      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-display text-[32px] sm:text-[42px] md:text-[48px] font-extrabold text-black tracking-tight leading-tight">
            Common Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 font-sans max-w-xl mx-auto">
            Everything you need to know before we start
          </p>
        </div>

        {/* Interactive Accordion List */}
        <div className="mt-12 sm:mt-16 space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => (
            <FAQCard
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndexes.includes(index)}
              onToggle={() => toggleIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
