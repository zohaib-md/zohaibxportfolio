"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { BlogPostCard } from "@/components/BlogPostCard";
import { BlogPost } from "@/lib/hashnode";

interface BlogContentProps {
  posts: BlogPost[];
}

export const BlogContent: React.FC<BlogContentProps> = ({ posts }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(title1Ref.current, {
        y: 35,
        opacity: 0,
        duration: 0.55,
        ease: "power3.out",
      })
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

      if (posts.length > 0) {
        gsap.fromTo(
          ".blog-card-anim",
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
      } else {
        gsap.fromTo(
          ".blog-empty-anim",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
            delay: 0.2,
            clearProps: "all",
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [posts.length]);

  return (
    <div ref={containerRef}>
      {/* Page Header with Yellow Dotted Background */}
      <section className="relative w-full overflow-hidden bg-[#fef18b] pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-20 border-b-[3.5px] border-black px-4 sm:px-6 lg:px-8 text-center">
        {/* Background Dot Grid Pattern */}
        <div className="absolute inset-0 neo-dot-grid pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl">
          {/* H1 Split across two boxes: "Blog" (plain text) + "Posts" (white box) */}
          <h1 className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 font-display text-[34px] sm:text-[46px] md:text-[60px] font-bold text-black leading-none tracking-tight">
            <span ref={title1Ref} className="inline-block leading-none">
              Blog
            </span>
            <span
              ref={title2Ref}
              className="inline-block rounded-[14px] md:rounded-[18px] border-[3px] md:border-[3.5px] border-black bg-white px-5 sm:px-7 py-2 sm:py-3 shadow-[4px_4px_0_0_#000000] md:shadow-[6px_6px_0_0_#000000] leading-none"
            >
              Posts
            </span>
          </h1>

          {/* Subhead */}
          <p
            ref={subheadRef}
            className="mt-3 sm:mt-4 text-base sm:text-lg text-neutral-600 font-normal"
          >
            Thoughts on development, design, and building products
          </p>
        </div>
      </section>

      {/* Blog Post Grid Section */}
      <section className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {posts.map((post) => (
                <div key={post.id} className="blog-card-anim flex">
                  <BlogPostCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            /* Graceful Empty State */
            <div className="blog-empty-anim mx-auto max-w-xl text-center py-20 px-6 rounded-[22px] border-[3.5px] border-black bg-white shadow-[6px_6px_0_0_#000000]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl border-[2.5px] border-black bg-[#FEF08A] mb-4 shadow-[3px_3px_0_0_#000000]">
                <svg
                  className="w-8 h-8 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-black mb-2">
                No posts yet: check back soon
              </h3>
              <p className="text-neutral-600">
                New articles and thoughts will appear automatically here.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
