import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How quickly can you start?",
    answer:
      "For freelance and scoped project work, usually within a few days depending on my internship schedule. For full-time roles, I'm available after graduation.",
  },
  {
    question: "How do you charge?",
    answer:
      "Fixed-price for well-scoped feature work or small projects. Open to discussing rates based on scope; send details and I'll quote fairly.",
  },
  {
    question: "Are you looking for full-time roles?",
    answer:
      "Yes, I'm open to full-time Android or full-stack software engineering roles starting after I graduate. Happy to discuss timelines.",
  },
  {
    question: "Can you work with an existing codebase?",
    answer:
      "Yes. I work in an existing production codebase at Hyperzod daily, auditing code, extending features, and fixing bugs. Send me a look at it and I'll be upfront about fit.",
  },
];

export const FAQSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#fef18b] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b-[3.5px] border-black">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 neo-dot-grid pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-display text-[32px] sm:text-[44px] md:text-[50px] font-bold text-black tracking-tight leading-tight">
            Common Questions
          </h2>
        </div>

        {/* Stacked Full-Width Cards */}
        <div className="mt-12 sm:mt-16 space-y-6 sm:space-y-7">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[20px] md:rounded-[24px] border-[3.5px] border-black bg-[#fef9c3] p-6 sm:p-7 md:p-8 shadow-[6px_6px_0_0_#000000] text-left transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_#000000]"
            >
              <h3 className="font-display text-lg sm:text-xl font-black text-black tracking-tight leading-snug">
                {faq.question}
              </h3>
              <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-neutral-800 leading-relaxed font-normal">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
