import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";

/* =========================================
   Dior Gold Exhibition — Hero
   静寂の中に金の光が差すミニマル Hero
========================================= */
export default function Home() {
  const titleRef = useRef(null);
  const leadRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.1 });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        leadRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" },
        "-=0.7"
      );
  }, []);

  return (
    <section className="relative max-w-5xl mx-auto text-center py-24 aq-page-fade">
      {/* Dior Light Fog */}
      <div className="absolute inset-0 -z-10 opacity-[0.22] bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.08),transparent_60%)]"></div>

      {/* Gold Line */}
      <div className="w-20 h-px mx-auto mb-10 bg-[linear-gradient(90deg,transparent,rgba(255,213,140,0.7),transparent)]"></div>

      {/* Label */}
      <span className="block text-[11px] tracking-[0.35em] uppercase text-white/60 mb-6">
        HTML Templates Collection
      </span>

      {/* Title */}
      <h1
        ref={titleRef}
        className="text-5xl md:text-6xl font-light tracking-[0.14em] leading-tight mb-8 animate-float-soft"
      >
        Minimal Templates
        <br />
        Built for Real Brands
      </h1>

      {/* Lead */}
      <p
        ref={leadRef}
        className="max-w-xl mx-auto text-sm md:text-base text-white/70 leading-relaxed mb-5"
      >
        Templates crafted for cafés, salons, and quiet luxury brands.
        <br className="hidden md:block" />
        Designed with clarity, atmosphere, and commercial strength.
      </p>

      <p className="text-xs md:text-sm text-white/50 mb-14">
        Clean HTML • SEO-ready • Fully responsive • Easy to customize
      </p>

      {/* CTA */}
      <div ref={ctaRef} className="flex items-center justify-center gap-6 mb-10">
        <Link
          to="/templates"
          className="
            inline-block border border-white/25 px-14 py-4
            text-xs tracking-[0.3em] uppercase
            hover:bg-white hover:text-black transition
            aq-hover-lift
          "
        >
          Browse Templates
        </Link>

        <span className="text-xs text-white/40">From $19 · One-time purchase</span>
      </div>

      {/* Featured link */}
      <Link
        to="/templates/black-orietta"
        className="inline-block text-xs tracking-[0.28em] uppercase text-white/50 hover:text-white transition aq-fade-horizontal aq-delay-2"
      >
        Featured: Black Orietta →
      </Link>
    </section>
  );
}
