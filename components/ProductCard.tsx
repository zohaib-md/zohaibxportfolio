import React from "react";
import Link from "next/link";
import { ProductItem } from "@/lib/data";

export interface ProductCardProps {
  product: ProductItem;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className = "",
}) => {
  // Placeholder / Inactive card ("More coming soon")
  if (product.isPlaceholder) {
    return (
      <div
        className={`product-card-item relative flex flex-col items-center justify-center text-center w-full h-full min-h-[300px] sm:min-h-[340px] rounded-[22px] md:rounded-[26px] border-[3px] border-[#c0c4de] bg-[#E8EAFB] shadow-[6px_6px_0_0_#9ca3af] p-6 sm:p-8 select-none ${className}`}
      >
        <span className="font-display font-bold text-base sm:text-lg text-[#7c82a5] tracking-wide">
          {product.name || "More coming soon"}
        </span>
      </div>
    );
  }

  const isExternal = product.href?.startsWith("http");
  const theme = product.theme || "yellow";

  // Theme-specific styles
  const themeStyles = {
    yellow: {
      container: "bg-[#FACC15] text-black border-black shadow-[6px_6px_0_0_#000000]",
      badge: "bg-[#bbf7d0] text-black border-black shadow-[1.5px_1.5px_0_0_#000000]",
      price: "text-black font-display font-black text-lg sm:text-xl",
      name: "text-black",
      tagline: "text-black",
      desc: "text-black/85",
      tag: "border-black/30 text-black/80 bg-black/5",
      cta: "text-black",
    },
    dark: {
      container: "bg-[#09181C] text-white border-black shadow-[6px_6px_0_0_#000000]",
      badge: "bg-[#132A30] text-[#2DD4BF] border-[#2DD4BF]/40",
      price: "text-[#F97316] font-display font-bold text-sm sm:text-base",
      name: "text-white",
      tagline: "text-[#2DD4BF]",
      desc: "text-neutral-400",
      tag: "border-white/20 text-neutral-300 bg-white/5",
      cta: "text-[#2DD4BF]",
    },
    lavender: {
      container: "bg-[#E6F0FE] text-black border-black shadow-[6px_6px_0_0_#000000]",
      badge: "bg-[#bbf7d0] text-black border-black shadow-[1.5px_1.5px_0_0_#000000]",
      price: "text-black font-display font-bold text-sm sm:text-base",
      name: "text-black",
      tagline: "text-black",
      desc: "text-neutral-700",
      tag: "border-black/25 text-black/75 bg-black/5",
      cta: "text-black",
    },
  }[theme];

  return (
    <div
      className={`product-card-item group relative flex flex-col justify-between w-full h-full min-h-[252px] rounded-[22px] md:rounded-[26px] border-[3.5px] p-6 sm:p-7 md:p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_0_#000000] select-none ${themeStyles.container} ${className}`}
    >
      {/* Primary Card Navigation Link Overlay */}
      {isExternal ? (
        <a
          href={product.href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-0 rounded-[22px] md:rounded-[26px]"
          aria-label={`${product.name} - ${product.tagline}`}
        />
      ) : (
        <Link
          href={product.href || "#"}
          className="absolute inset-0 z-0 rounded-[22px] md:rounded-[26px]"
          aria-label={`${product.name} - ${product.tagline}`}
        />
      )}

      {/* Card Contents (pointer-events-none so click passes through to overlay, with pointer-events-auto on nested links) */}
      <div className="relative z-10 flex flex-col justify-between h-full pointer-events-none">
        <div>
          {/* Top Row: Left Badge + Right Price/Support Link */}
          <div className="flex items-center justify-between gap-2 w-full">
            {/* Left Badge */}
            {product.badge && (
              <span
                className={`inline-flex items-center rounded-full border-[2px] px-3 py-1 text-xs font-bold leading-none ${themeStyles.badge}`}
              >
                {product.badge}
              </span>
            )}

            {/* Right: Price OR Buy Me a Coffee link */}
            {product.price ? (
              <span className={themeStyles.price}>{product.price}</span>
            ) : product.coffeeUrl ? (
              <a
                href={product.coffeeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border-[1.5px] border-black bg-white hover:bg-[#FFDD00] text-xs font-bold text-black transition-all shadow-[2px_2px_0_0_#000000] hover:-translate-y-0.5"
                title="Support on Buy Me a Coffee"
              >
                <svg
                  width="14"
                  height="14"
                  className="w-3.5 h-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                  <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                  <line x1="6" y1="2" x2="6" y2="4" />
                  <line x1="10" y1="2" x2="10" y2="4" />
                  <line x1="14" y1="2" x2="14" y2="4" />
                </svg>
                <span>Buy me a coffee</span>
              </a>
            ) : null}
          </div>

          {/* Product Body */}
          <div className="mt-4">
            <h3
              className={`font-display text-2xl sm:text-[26px] font-black leading-tight tracking-tight ${themeStyles.name}`}
            >
              {product.name}
            </h3>
            <p
              className={`font-bold text-sm sm:text-[15px] mt-2 leading-snug ${themeStyles.tagline}`}
            >
              {product.tagline}
            </p>
            <p
              className={`text-xs sm:text-sm mt-2.5 leading-relaxed ${themeStyles.desc}`}
            >
              {product.description}
            </p>

            {/* Tag pills row (small outlined pills, matching reference screenshot) */}
            {product.tags && product.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`inline-flex items-center rounded-lg border-[1.5px] px-2.5 py-1 text-xs font-semibold ${themeStyles.tag}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 pt-2">
          <span
            className={`font-display font-bold text-sm sm:text-base inline-flex items-center gap-1.5 group-hover:underline ${themeStyles.cta}`}
          >
            {product.ctaText}
          </span>
        </div>
      </div>
    </div>
  );
};
