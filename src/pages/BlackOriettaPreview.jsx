// src/pages/BlackOriettaPreview.jsx
import { Link } from "react-router-dom";

const GUMROAD_URL = "https://gushikendesign.gumroad.com/l/istan";

export default function BlackOriettaPreview() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* ===== Top Bar ===== */}
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/templates/black-orietta"
            className="text-[11px] tracking-[0.28em] uppercase text-white/55 hover:text-white/85"
          >
            ← Back
          </Link>

          <a
            href={GUMROAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-[11px]
              tracking-[0.32em]
              uppercase
              border border-white/30
              px-6 py-2.5
              hover:bg-white hover:text-black
              transition
            "
          >
            Buy — $69
          </a>
        </div>
      </header>

      {/* ===== Main ===== */}
      <main className="max-w-6xl mx-auto px-6 py-16 md:py-24">

        {/* ======================== */}
        {/*  Hero Image              */}
        {/* ======================== */}
        <section className="mb-20">
          <img
            src="/previews/black-orietta/hero.png"
            alt="Black Orietta — Hero"
            className="w-full rounded-xl border border-white/10"
          />
        </section>

        {/* ======================== */}
        {/*  Lookbook Video          */}
        {/* ======================== */}
        <section className="mb-20">
          <video
            src="/previews/black-orietta/lookbook.mp4"
            className="w-full rounded-xl border border-white/10"
            muted
            autoPlay
            loop
            playsInline
          />
        </section>

        {/* ======================== */}
        {/*  Concept Copy            */}
        {/* ======================== */}
        <section className="mb-20 grid md:grid-cols-2 gap-12">
          <img
            src="/previews/black-orietta/copy.png"
            className="w-full rounded-xl border border-white/10"
            alt="Concept Copy"
          />
          <img
            src="/previews/black-orietta/message.png"
            className="w-full rounded-xl border border-white/10"
            alt="Brand Message"
          />
        </section>

        {/* ======================== */}
        {/*  Collection Section      */}
        {/* ======================== */}
        <section className="mb-20">
          <img
            src="/previews/black-orietta/collection.png"
            className="w-full rounded-xl border border-white/10"
            alt="Collection Section"
          />
        </section>

        {/* ======================== */}
        {/*  Product Section         */}
        {/* ======================== */}
        <section className="mb-20">
          <img
            src="/previews/black-orietta/product.png"
            className="w-full rounded-xl border border-white/10"
            alt="Product Section"
          />
        </section>

        {/* ======================== */}
        {/*  Light Section           */}
        {/* ======================== */}
        <section className="mb-32">
          <img
            src="/previews/black-orietta/light.png"
            className="w-full rounded-xl border border-white/10"
            alt="Light Section"
          />
        </section>

        {/* ======================== */}
        {/*  Bottom CTA              */}
        {/* ======================== */}
        <section className="mt-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-t border-white/10 pt-10">
          <div className="text-sm text-white/60">
            <p>Like what you see?</p>
            <p className="text-white/45">
              Get the full HTML/CSS files and structure via Gumroad.
            </p>
          </div>

          <a
            href={GUMROAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              border border-white/30
              px-10 py-3.5
              text-[11px] tracking-[0.32em] uppercase
              hover:bg-white hover:text-black
              transition
            "
          >
            Buy — $69
          </a>
        </section>
      </main>
    </div>
  );
}
