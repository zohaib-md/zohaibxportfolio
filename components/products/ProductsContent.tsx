"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ProductCard } from "@/components/ProductCard";
import { personalData } from "@/lib/data";

export const ProductsContent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      if (badgeRef.current) {
        tl.from(badgeRef.current, {
          y: 20,
          scale: 0.9,
          opacity: 0,
          duration: 0.45,
          ease: "back.out(1.5)",
        });
      }

      tl.from(
        title1Ref.current,
        {
          y: 35,
          opacity: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        badgeRef.current ? "-=0.25" : undefined
      )
        .from(
          title2Ref.current,
          {
            y: 35,
            opacity: 0,
            duration: 0.55,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          subheadRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.45,
            ease: "power2.out",
          },
          "-=0.3"
        );

      gsap.fromTo(
        ".product-card-anim",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.25,
          clearProps: "all",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header (centered, yellow dotted background) */}
      <section className="relative w-full overflow-hidden bg-[#fef18b] pt-28 sm:pt-36 md:pt-40 pb-14 sm:pb-16 border-b-[3.5px] border-black px-4 sm:px-6 lg:px-8 text-center">
        {/* Background Dot Grid Pattern */}
        <div className="absolute inset-0 neo-dot-grid pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Small pill badge: "Digital Products" */}
          <div ref={badgeRef} className="flex justify-center">
            <span className="inline-flex items-center rounded-full border-[2.5px] border-black bg-[#bbf7d0] px-4 py-1 text-xs sm:text-[13px] font-bold text-black shadow-[3px_3px_0_0_#000000]">
              Digital Products
            </span>
          </div>

          {/* H2 Title: "Things I Build &" (plain text) + "Sell" (yellow pill box) */}
          <h1 className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 font-display text-[34px] sm:text-[46px] md:text-[54px] font-bold text-black leading-none tracking-tight">
            <span ref={title1Ref}>Things I Build &amp;</span>
            <span
              ref={title2Ref}
              className="inline-block rounded-[14px] md:rounded-[18px] border-[3px] md:border-[3.5px] border-black bg-[#FACC15] px-4 sm:px-5 py-1 sm:py-1.5 text-black shadow-[4px_4px_0_0_#000000] md:shadow-[5px_5px_0_0_#000000]"
            >
              Sell
            </span>
          </h1>

          {/* Subhead */}
          <p
            ref={subheadRef}
            className="mt-3 sm:mt-4 text-base sm:text-lg text-neutral-600 font-normal max-w-2xl mx-auto leading-relaxed"
          >
            Developer tools, AI products, and services. Built to solve real problems.
          </p>
        </div>
      </section>

      {/* Product Cards Grid Section */}
      <section className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 min-h-[45vh]">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {personalData.productsData.map((product) => (
              <div key={product.id} className="product-card-anim flex flex-col">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
