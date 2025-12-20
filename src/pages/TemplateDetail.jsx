// src/pages/TemplateDetail.jsx

import { useMemo, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { templates } from "../data/templates";   // ← 最重要：templates.js を参照

/* ============================
   Small Components
============================ */
function SectionTitle({ children }) {
  return (
    <h3 className="text-[11px] tracking-[0.32em] uppercase text-white/60 mb-5">
      {children}
    </h3>
  );
}

export default function TemplateDetail() {
  const { slug } = useParams();

  // templates.js から正しいデータを取得
  const t = useMemo(() => templates.find((x) => x.slug === slug), [slug]);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!t) {
    return (
      <section className="max-w-3xl mx-auto">
        <p className="text-white/70 mb-6">Template not found.</p>
        <Link
          className="text-xs tracking-[0.25em] uppercase text-white/70 hover:text-white"
          to="/templates"
        >
          Back to Templates
        </Link>
      </section>
    );
  }

  const isLive = t.status === "live" && t.gumroadUrl;
  const isPremium = t.tier === "premium";

  return (
    <section className="max-w-5xl mx-auto">
      {/* ================= Header ================= */}
      <div
        className={`
          mb-20 transition-all duration-[900ms] ease-out
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        <Link
          to="/templates"
          className="text-xs tracking-[0.25em] uppercase text-white/50 hover:text-white/75"
        >
          ← Templates
        </Link>

        {/* Title + tagline */}
        <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            {isPremium && (
              <p className="text-[11px] tracking-[0.35em] uppercase text-white/55 mb-5">
                Premium Template
              </p>
            )}

            <h1 className="text-4xl md:text-5xl font-light tracking-[0.14em] mb-5">
              {t.title}
            </h1>

            <p className="text-white/65 max-w-xl leading-relaxed">
              {t.tagline}
            </p>
          </div>

          {/* Buttons */}
          <div className="text-right">
            <p className="text-xs text-white/45 mb-4">
              {isLive ? "Instant download" : "Coming soon"}
            </p>

            <div className="flex flex-wrap justify-end gap-3">
              {/* Live preview */}
              <Link
                to={`/preview/${t.slug}`}
                className="
                  inline-block
                  border border-white/20
                  px-6 py-3
                  text-[11px] tracking-[0.28em] uppercase
                  text-white/75
                  hover:border-white/40
                  transition
                "
              >
                Live preview
              </Link>

              {/* Buy button */}
              {isLive ? (
                <a
                  href={t.gumroadUrl}
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
                  Buy — ${t.price}
                </a>
              ) : (
                <button
                  disabled
                  className="
                    inline-block
                    border border-white/15
                    px-10 py-3.5
                    text-[11px] tracking-[0.32em] uppercase
                    text-white/35
                    cursor-not-allowed
                  "
                >
                  Buy — ${t.price}
                </button>
              )}
            </div>

            {isPremium && t.premiumNote && (
              <p className="mt-5 text-xs text-white/45 max-w-xs leading-relaxed whitespace-pre-line">
                {t.premiumNote}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ================= Preview ================= */}
      <div className="grid md:grid-cols-3 gap-6 mb-24">
        {/* Main preview */}
        <div
          className="
            md:col-span-2 rounded-xl border border-white/10
            overflow-hidden relative animate-panel
          "
        >
          <img
            src={t.thumb}
            alt={`${t.title} main preview`}
            className="w-full object-cover animate-float-slow"
          />
        </div>

        {/* Sub preview */}
        <div
          className="
            rounded-xl border border-white/10
            overflow-hidden animate-panel delay-150
          "
        >
          <img
            src={`/previews/${t.slug}/product.png`}
            alt={`${t.title} sub preview`}
            className="w-full object-cover animate-float-soft"
          />
        </div>
      </div>

      {/* ================= Content ================= */}
      <div className="grid md:grid-cols-3 gap-16">
        {/* LEFT CONTENT */}
        <div className="md:col-span-2 space-y-16">
          {/* Highlights */}
          <div className="animate-panel">
            <SectionTitle>Highlights</SectionTitle>
            <ul className="space-y-2 text-white/70 text-sm">
              {t.highlights.map((h) => (
                <li key={h}>• {h}</li>
              ))}
            </ul>
          </div>

          {/* Included pages */}
          <div className="animate-panel delay-100">
            <SectionTitle>What's included</SectionTitle>
            <ul className="space-y-2 text-white/70 text-sm">
              {t.includedPages.map((p) => (
                <li key={p}>• {p}</li>
              ))}
              <li>• Organized file structure + README</li>
              <li>• Commercial license</li>
            </ul>
          </div>

          {/* Requirements */}
          <div className="animate-panel delay-200">
            <SectionTitle>Requirements</SectionTitle>
            <ul className="space-y-2 text-white/70 text-sm">
              {t.requirements.map((r) => (
                <li key={r}>• {r}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-12">
          {isPremium && t.premiumNote && (
            <div
              className="
                rounded-xl border border-white/15 bg-white/[0.035]
                p-7 animate-panel
              "
            >
              <SectionTitle>Positioning</SectionTitle>
              <p className="text-sm text-white/75 leading-relaxed whitespace-pre-line">
                {t.premiumNote}
              </p>
            </div>
          )}

          {/* License */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-7 animate-panel">
            <SectionTitle>License</SectionTitle>
            <p className="text-sm text-white/70 leading-relaxed">
              Commercial use is allowed.
              <br />
              Redistribution, resale, or sharing the files is not permitted.
            </p>
          </div>

          {/* Refund policy */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-7 animate-panel delay-100">
            <SectionTitle>Refund policy</SectionTitle>
            <p className="text-sm text-white/70 leading-relaxed">
              Due to the digital nature of this product,
              refunds are only available if the files have not been downloaded.
              <br />
              Please contact us within 7 days if you encounter technical issues.
            </p>
          </div>

          {/* Support */}
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-7 animate-panel delay-200">
            <SectionTitle>Support</SectionTitle>
            <p className="text-sm text-white/70 leading-relaxed">
              This template is sold as-is.
              <br />
              No customization or installation support is included.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
