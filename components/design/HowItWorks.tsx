import React from "react";

interface StepItem {
  step: string;
  title: string;
  description: string;
  bgColor: string;
}

const steps: StepItem[] = [
  {
    step: "01",
    title: "Book a call",
    description: "A quick intro call to understand your goals and timeline.",
    bgColor: "#DBEAFE", // Pastel Blue
  },
  {
    step: "02",
    title: "Brief & quote",
    description: "You share what you need. I send a fixed-price quote within 24 hours.",
    bgColor: "#DCFCE7", // Pastel Green
  },
  {
    step: "03",
    title: "Design & build",
    description: "I design and develop, sharing progress along the way for your feedback.",
    bgColor: "#FEF08A", // Pastel Yellow
  },
  {
    step: "04",
    title: "Launch",
    description: "Final review and handoff. You own everything.",
    bgColor: "#FCE7F3", // Pastel Pink
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b-[3.5px] border-black">
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-display text-[32px] sm:text-[42px] md:text-[48px] font-extrabold text-black tracking-tight leading-tight">
            How It Works
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 font-sans max-w-xl mx-auto">
            From first call to live site in 4 steps
          </p>
        </div>

        {/* 4 Steps Horizontal Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
          {steps.map((item, index) => (
            <div
              key={item.step}
              style={{ backgroundColor: item.bgColor }}
              className="relative rounded-[24px] border-[3.5px] border-black p-6 sm:p-7 shadow-[5px_5px_0_0_#000000] flex flex-col justify-between transition-all duration-150 hover:-translate-y-1 hover:shadow-[7px_7px_0_0_#000000]"
            >
              <div>
                {/* Step Number */}
                <div className="font-display font-black text-3xl sm:text-4xl text-black/25 select-none">
                  {item.step}
                </div>

                {/* Step Title */}
                <h3 className="mt-4 font-display text-lg sm:text-xl font-extrabold text-black tracking-tight">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="mt-2.5 text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Connecting indicator on desktop (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <div className="w-7 h-7 rounded-full bg-white border-[2.5px] border-black flex items-center justify-center shadow-[2px_2px_0_0_#000000]">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-black"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
