import React from "react";

interface ReasonCard {
  title: string;
  description: string;
}

const reasonCards: ReasonCard[] = [
  {
    title: "Production experience, not just coursework",
    description:
      "Shipping real Vue and Laravel features at Hyperzod, an actual SaaS company with actual users, not just class projects.",
  },
  {
    title: "Full-stack range",
    description:
      "Comfortable moving between native mobile on Android and full-stack systems on the web. I adapt quickly to new stacks and never get stuck at the boundary between frontend and backend.",
  },
  {
    title: "I test what I build",
    description:
      "MiniSeek has 138 passing tests. jobbie has a documented safety model. I don't ship things I haven't verified.",
  },
];

export const WhyWorkWithMe: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#fef18b] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b-[3.5px] border-black">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 neo-dot-grid pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-display text-[32px] sm:text-[44px] md:text-[50px] font-bold text-black tracking-tight leading-tight">
            Why Work With Me
          </h2>
        </div>

        {/* 3-Column White Card Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {reasonCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-start rounded-[20px] md:rounded-[24px] border-[3.5px] border-black bg-white p-6 sm:p-7 md:p-8 shadow-[6px_6px_0_0_#000000] transition-all duration-150 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000000]"
            >
              <h3 className="font-display text-xl sm:text-2xl font-black text-black tracking-tight leading-snug">
                {card.title}
              </h3>
              <p className="mt-3.5 text-sm sm:text-base text-neutral-800 leading-relaxed font-normal">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
