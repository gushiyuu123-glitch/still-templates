import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative max-w-5xl mx-auto text-center py-10">
      <span className="block text-[11px] tracking-[0.35em] uppercase text-white/60 mb-6">
        HTML Templates Collection
      </span>

      <h1 className="text-5xl md:text-6xl font-light tracking-[0.14em] leading-tight mb-10">
        Minimal Templates
        <br />
        Designed to Sell
      </h1>

      <p className="max-w-xl mx-auto text-sm md:text-base text-white/70 leading-relaxed mb-4">
        Crafted for cafés, salons, and quiet brands that value atmosphere, clarity,
        and restraint.
      </p>

      <p className="text-xs md:text-sm text-white/50 mb-14">
       Clean HTML • SEO-ready • Fully responsive • Easy to customize  
Used by designers and small studios worldwide
      </p>

      <div className="flex items-center justify-center gap-6">
        <Link
          to="/templates"
          className="inline-block border border-white/25 px-12 py-4 text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition"
        >
          Browse Templates
        </Link>
        <span className="text-xs text-white/40">From $19 · One-time purchase</span>
      </div>
    </section>
  );
}
