import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fef3c7] flex flex-col justify-between">
      <Navbar />

      <section className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-xl w-full bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
          <div className="inline-block bg-[#f87171] text-black font-mono font-black text-6xl md:text-8xl px-6 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6">
            404
          </div>
          <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black mb-4">
            Lost In The Architecture
          </h1>
          <p className="text-neutral-700 font-mono text-sm md:text-base mb-8">
            The route or resource you requested does not exist or has been relocated.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center font-bold px-6 py-3 bg-[#fef18b] text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Back to Home
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center font-bold px-6 py-3 bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
