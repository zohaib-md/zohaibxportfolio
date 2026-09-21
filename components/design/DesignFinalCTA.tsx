import React from "react";

export const DesignFinalCTA: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#fef18b] py-20 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 border-b-[3.5px] border-black text-center">
      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Centered H2 */}
        <h2 className="font-display text-[34px] sm:text-[46px] md:text-[54px] font-extrabold text-black tracking-tight leading-tight">
          Have a project in mind?
        </h2>

        {/* Subhead Pitch */}
        <p className="mt-4 text-base sm:text-lg md:text-xl text-neutral-800 max-w-2xl mx-auto leading-relaxed font-normal">
          Landing page, MVP, or full product: send me a brief and I&apos;ll reply within 24 hours.
        </p>

        {/* Centered Black Button */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <a
            href="mailto:zohaibmohammad88@gmail.com?subject=Project%20Inquiry%20via%20Design%20Page"
            className="inline-flex items-center justify-center gap-2.5 rounded-full border-[2.5px] border-black bg-black px-8 sm:px-10 py-4 font-display font-bold text-base sm:text-lg text-[#facc15] shadow-[4.5px_4.5px_0_0_#000000] hover:-translate-y-1 hover:shadow-[7px_7px_0_0_#000000] active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Email zohaibmohammad88@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};
