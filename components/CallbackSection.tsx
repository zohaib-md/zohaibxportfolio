"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const CallbackSection: React.FC = () => {
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        clearProps: "transform",
      });
    }, containerRef);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!whatsapp.trim()) return;
    setSubmitted(true);
  };

  return (
    <section
      id="callback"
      className="relative w-full overflow-hidden border-b-[3.5px] border-black bg-[#fef3c7] py-14 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div
        ref={containerRef}
        className="mx-auto max-w-[448px] flex flex-col items-center text-center"
      >
        {/* Heading: "Want a Callback?" */}
        <h2 className="font-display text-[30px] sm:text-[36px] md:text-[40px] font-bold text-black tracking-tight leading-tight flex items-center justify-center flex-wrap gap-2">
          <span>Want a</span>
          <span className="inline-flex items-center rounded-[12px] md:rounded-[14px] border-[3px] border-black bg-[#FCA5A5] px-2.5 py-1 text-black shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]">
            Callback?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-2.5 sm:mt-3 text-sm sm:text-[15px] md:text-base text-[#525252] font-normal leading-relaxed">
          Leave your WhatsApp and I&apos;ll be in touch.
        </p>

        {/* Form */}
        <div className="mt-7 sm:mt-8 w-full">
          {submitted ? (
            <div className="w-full rounded-[14px] border-[3px] border-black bg-white p-5 text-center shadow-[4px_4px_0_0_rgba(0,0,0,0.85)]">
              <p className="font-display font-bold text-base text-black">
                Thanks for reaching out!
              </p>
              <p className="mt-1 text-sm text-[#525252]">
                I&apos;ll message you on WhatsApp shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3.5">
              {/* WhatsApp number input */}
              <input
                type="tel"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="WhatsApp number"
                className="font-display w-full h-[50px] rounded-[14px] border-[3px] border-black bg-white px-4 py-3 text-base text-black placeholder:text-neutral-400 shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] outline-none focus:translate-x-0.5 focus:translate-y-0.5 focus:shadow-[2px_2px_0_0_rgba(0,0,0,0.85)] transition-all"
              />

              {/* Email address input (optional) */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address (optional)"
                className="font-display w-full h-[50px] rounded-[14px] border-[3px] border-black bg-white px-4 py-3 text-base text-black placeholder:text-neutral-400 shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] outline-none focus:translate-x-0.5 focus:translate-y-0.5 focus:shadow-[2px_2px_0_0_rgba(0,0,0,0.85)] transition-all"
              />

              {/* Submit button */}
              <button
                type="submit"
                className="font-display w-full h-[62px] inline-flex items-center justify-center rounded-[14px] border-[3px] border-black bg-black px-8 py-4 text-[16px] font-bold text-white shadow-[4px_4px_0_0_rgba(0,0,0,0.85)] hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_rgba(0,0,0,0.85)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
              >
                Request Callback
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
