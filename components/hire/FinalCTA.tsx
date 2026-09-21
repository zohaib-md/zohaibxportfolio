import React from "react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#fef18b] py-20 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 border-b-[3.5px] border-black text-center">
      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Centered H2 */}
        <h2 className="font-display text-[34px] sm:text-[46px] md:text-[54px] font-bold text-black tracking-tight leading-tight">
          Want to work together?
        </h2>

        {/* Subhead Pitch */}
        <p className="mt-4 text-base sm:text-lg md:text-xl text-neutral-800 max-w-2xl mx-auto leading-relaxed font-normal">
          Freelance project, feature build, or a full-time conversation: send me a short note and I&apos;ll reply within a couple of days.
        </p>

        {/* Centered Black Button */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <a
            href="mailto:zohaibmohammad88@gmail.com"
            className="inline-flex items-center justify-center rounded-full border-[2.5px] border-black bg-black px-7 sm:px-9 py-3.5 sm:py-4 font-display font-bold text-base sm:text-lg text-white shadow-[4.5px_4.5px_0_0_#000000] hover:-translate-y-1 hover:shadow-[7px_7px_0_0_#000000] active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            Email zohaibmohammad88@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};
