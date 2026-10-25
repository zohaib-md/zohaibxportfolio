import React from "react";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";

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

export const DesignFAQ: React.FC = () => {
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
        <FAQAccordion
          items={faqs}
          idPrefix="design-faq"
          className="mt-12 sm:mt-16 space-y-4 sm:space-y-5"
          cardClassName="rounded-[20px] border-[3.5px] border-black bg-white shadow-[5px_5px_0_0_#000000] overflow-hidden transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#000000]"
          questionClassName="font-display font-bold text-base sm:text-lg text-black pr-4"
          answerClassName="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal"
          iconWrapperClassName="w-8 h-8 rounded-full border-[2.5px] border-black bg-[#fef08a] flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0_0_#000000]"
          buttonClassName="hover:bg-neutral-50/80"
        />
      </div>
    </section>
  );
};
