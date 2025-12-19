import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section
      className="
        relative max-w-5xl mx-auto text-center
        aq-page-fade aq-section-top px-6
      "
    >
      {/* Eyebrow */}
      <span
        className="
          block text-[11px]
          tracking-[0.38em]
          uppercase
          text-white/55
          mb-8
          aq-fade-up aq-delay-1
        "
      >
        HTML Templates Collection
      </span>

      {/* Title */}
      <h1
        className="
          text-[40px] md:text-[64px]
          font-light
          tracking-[0.16em]
          leading-[1.18]
          text-white
          mb-10
          aq-fade-up aq-delay-2
        "
      >
        Minimal Templates
        <br />
        Designed to Sell
      </h1>

      {/* Description */}
      <p
        className="
          max-w-xl mx-auto
          text-[15px] md:text-[17px]
          text-white/70
          leading-relaxed
          mb-6
          aq-fade-up aq-delay-3
        "
      >
        Crafted for cafés, salons, and quiet brands that value atmosphere,
        clarity, and commercial strength.
      </p>

      {/* Subline */}
      <p
        className="
          text-[11px] md:text-[12px]
          text-white/45
          tracking-wide
          mb-16
          aq-fade-up aq-delay-4
        "
      >
        Clean HTML • SEO-ready • Responsive • Easy to customize  
        <br />
        Trusted by designers and small studios worldwide
      </p>

      {/* CTA buttons */}
      <div
        className="
          flex items-center justify-center gap-6
          mb-14 aq-fade-up aq-delay-5
        "
      >
        <Link
          to="/templates"
          className="
            inline-block
            border border-white/[0.28]
            px-14 py-4
            text-[11px]
            tracking-[0.32em]
            uppercase
            text-white/85
            hover:bg-white hover:text-black
            transition-all
          "
        >
          Browse Templates
        </Link>

        <span className="text-xs text-white/40 tracking-wide">
          From $19 · One-time purchase
        </span>
      </div>

      {/* Featured link */}
      <Link
        to="/templates/black-orietta"
        className="
          inline-block
          text-[11px]
          tracking-[0.32em]
          uppercase
          text-white/55
          hover:text-white
          transition-all
          aq-fade-up aq-delay-6
        "
      >
        Featured: Black Orietta →
      </Link>
    </section>
  );
}
