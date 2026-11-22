"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log unexpected client or render errors
    console.error("Application render error:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#fef3c7] flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
        <div className="inline-block bg-[#f87171] text-black font-mono font-black text-xl md:text-2xl px-6 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 uppercase tracking-wider">
          Runtime Exception
        </div>

        <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black mb-4">
          Something Broke
        </h1>

        <p className="text-neutral-700 font-mono text-sm md:text-base mb-6">
          An unexpected application error interrupted page rendering.
        </p>

        {error.digest && (
          <p className="font-mono text-xs text-neutral-500 mb-6 bg-neutral-100 p-2 border-2 border-black inline-block">
            Digest: {error.digest}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center font-bold px-6 py-3 bg-[#fef18b] text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center font-bold px-6 py-3 bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
