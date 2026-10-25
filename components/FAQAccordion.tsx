"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCardProps extends FAQItem {
  id: string;
  isOpen: boolean;
  onToggle: () => void;
  cardClassName: string;
  questionClassName: string;
  answerClassName: string;
  iconWrapperClassName: string;
  buttonClassName?: string;
}

const FAQCard: React.FC<FAQCardProps> = ({
  id,
  question,
  answer,
  isOpen,
  onToggle,
  cardClassName,
  questionClassName,
  answerClassName,
  iconWrapperClassName,
  buttonClassName = "",
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
      el.style.overflow = "hidden";
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
    <div className={cardClassName}>
      <button
        type="button"
        id={`${id}-button`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-content`}
        className={`w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left cursor-pointer transition-colors ${buttonClassName}`}
      >
        <span className={questionClassName}>{question}</span>
        <div className={iconWrapperClassName}>
          <svg
            ref={iconRef}
            className="w-4 h-4 text-black transform origin-center"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </button>

      <div
        ref={contentRef}
        id={`${id}-content`}
        role="region"
        aria-labelledby={`${id}-button`}
        className="overflow-hidden w-full"
      >
        <div className="px-6 pb-6 sm:px-8 sm:pb-6 pt-2 border-t-[2.5px] border-black/10">
          <p className={answerClassName}>{answer}</p>
        </div>
      </div>
    </div>
  );
};

interface FAQAccordionProps {
  items: FAQItem[];
  idPrefix: string;
  className?: string;
  cardClassName: string;
  questionClassName: string;
  answerClassName: string;
  iconWrapperClassName: string;
  buttonClassName?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  idPrefix,
  className,
  cardClassName,
  questionClassName,
  answerClassName,
  iconWrapperClassName,
  buttonClassName,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className={className}>
      {items.map((item, index) => (
        <FAQCard
          key={item.question}
          id={`${idPrefix}-${index}`}
          question={item.question}
          answer={item.answer}
          isOpen={openIndexes.includes(index)}
          onToggle={() => toggleIndex(index)}
          cardClassName={cardClassName}
          questionClassName={questionClassName}
          answerClassName={answerClassName}
          iconWrapperClassName={iconWrapperClassName}
          buttonClassName={buttonClassName}
        />
      ))}
    </div>
  );
};
