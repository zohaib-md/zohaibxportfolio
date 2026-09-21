import React from "react";
import { BlogPost, getCategoryFromPost } from "@/lib/hashnode";

interface BlogPostCardProps {
  post: BlogPost;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  const category = getCategoryFromPost(post);

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  const readTime = post.readTimeInMinutes
    ? `${post.readTimeInMinutes} min read`
    : null;

  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between w-full h-full rounded-[22px] md:rounded-[26px] border-[3.5px] border-black bg-white p-6 sm:p-7 md:p-8 shadow-[5px_5px_0_0_#000000] md:shadow-[6px_6px_0_0_#000000] transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_0_#000000]"
    >
      <div>
        {/* Top-left: Category / Tag Pill */}
        <div className="mb-4 sm:mb-5 flex items-center justify-between">
          <span className="inline-flex items-center rounded-full border-[2px] border-black bg-[#FACC15] px-3.5 py-1 text-xs font-black uppercase tracking-wider text-black shadow-[2px_2px_0_0_#000000]">
            {category}
          </span>
        </div>

        {/* Post Title in distinctive BLUE (#2563EB) */}
        <h3 className="font-display text-xl sm:text-[22px] md:text-2xl font-black leading-tight tracking-tight text-[#2563EB] group-hover:underline transition-colors">
          {post.title}
        </h3>

        {/* Excerpt / Brief in gray regular weight text */}
        <p className="mt-3 text-sm sm:text-[15px] text-neutral-600 font-normal leading-relaxed line-clamp-3">
          {post.brief}
        </p>
      </div>

      {/* Card Footer: Date and Read Time */}
      {(formattedDate || readTime) && (
        <div className="mt-6 pt-5 border-t border-neutral-200">
          <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-500 font-medium">
            {formattedDate && <span>{formattedDate}</span>}
            {readTime && <span>{readTime}</span>}
          </div>
        </div>
      )}
    </a>
  );
};
