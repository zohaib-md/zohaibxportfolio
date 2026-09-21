import React from "react";

const tags = [
  "Android developer for hire",
  "Kotlin developer",
  "Full-stack engineer",
  "Software engineer",
  "Remote-friendly",
];

export const SecondaryHireCTA: React.FC = () => {
  return (
    <section className="w-full bg-[#bfdbfe] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b-[3.5px] border-black">
      <div className="mx-auto max-w-6xl text-left">
        {/* Main Headline */}
        <h2 className="font-display text-[28px] sm:text-[38px] md:text-[44px] font-bold text-black tracking-tight leading-tight max-w-4xl">
          Hire an Android &amp; Full-Stack Developer: Available for Freelance &amp; Full-Time
        </h2>

        {/* Body Description */}
        <p className="mt-4 text-base sm:text-lg text-neutral-900 max-w-3xl leading-relaxed font-normal">
          Looking to hire an Android developer or full-stack engineer? I&apos;m open to freelance feature work and MVPs now, and full-time roles starting after graduation. Based in Delhi NCR, open to remote.
        </p>

        {/* Pill Tags Row */}
        <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border-[2px] border-black bg-white/80 px-4 py-1.5 text-xs sm:text-sm font-bold text-black shadow-[2.5px_2.5px_0_0_#000000]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
