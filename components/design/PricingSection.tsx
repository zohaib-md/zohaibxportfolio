import React from "react";

export const PricingSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b-[3.5px] border-black">
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="font-display text-[32px] sm:text-[42px] md:text-[48px] font-extrabold text-black tracking-tight leading-tight">
            How Pricing Works
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 font-sans max-w-xl mx-auto">
            No inflated packages: a fair quote based on your actual scope
          </p>
        </div>

        {/* Single Neo-Brutalist Scope Card */}
        <div className="mt-12 sm:mt-14 max-w-3xl mx-auto rounded-[24px] md:rounded-[28px] border-[3.5px] border-black bg-[#fef9c3] p-8 sm:p-12 shadow-[7px_7px_0_0_#000000] text-center">
          <div className="inline-flex items-center rounded-full border-[2.5px] border-black bg-white px-4 py-1 text-xs sm:text-sm font-bold text-black shadow-[2.5px_2.5px_0_0_#000000] mb-6">
            Transparent &amp; Predictable Scope
          </div>

          <p className="font-display text-lg sm:text-xl md:text-2xl font-bold text-black leading-relaxed max-w-2xl mx-auto">
            &ldquo;Every project is different, so I don&apos;t do one-size-fits-all pricing. Send me your brief and I&apos;ll reply with a clear, fixed-price quote and realistic timeline within 24 hours: no surprises, no scope creep charged later.&rdquo;
          </p>

          {/* Value Commitments */}
          <div className="mt-8 pt-8 border-t-[2.5px] border-black/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="flex items-start gap-2.5">
              <span className="font-display font-black text-[#10b981] text-base">✓</span>
              <span className="text-xs sm:text-sm font-semibold text-neutral-800">
                24-hour turnaround on briefs
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="font-display font-black text-[#10b981] text-base">✓</span>
              <span className="text-xs sm:text-sm font-semibold text-neutral-800">
                Fixed price agreed upfront
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="font-display font-black text-[#10b981] text-base">✓</span>
              <span className="text-xs sm:text-sm font-semibold text-neutral-800">
                Milestone-based delivery
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 sm:mt-10 flex justify-center">
            <a
              href="mailto:zohaibmohammad88@gmail.com?subject=Design%20%26%20Build%20Quote%20Request"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border-[3px] border-black bg-black px-8 sm:px-10 py-3.5 sm:py-4 text-base font-display font-bold text-[#facc15] shadow-[4px_4px_0_0_#000000] hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#000000] active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              Get a Quote
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
