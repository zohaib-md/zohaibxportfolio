"use client";

import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";

export type PrimaryCtaLinkProps = ComponentProps<"a"> & {
  variant?: "dark" | "light";
};

export function PrimaryCtaLink({
  variant = "light",
  className,
  children,
  ...props
}: PrimaryCtaLinkProps) {
  return (
    <a
      className={cn(
        "relative inline-flex cursor-pointer items-center justify-center transition-transform",
        variant === "dark" ? "bg-neutral-900 text-white" : "bg-white text-black",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
