import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { templates } from "../data/templates";

function SectionTitle({ children }) {
  return (
    <h3 className="text-[11px] tracking-[0.32em] uppercase text-white/60 mb-5">
      {children}
    </h3>
  );
}

function PremiumNote() {
  return (
    <div className="rounded-xl border border-white/15 bg-white/[0.035] p-7">
      <SectionTitle>Positioning</SectionTitle>
      <p className="text-sm text-white/75 leading-relaxed">
        This is not a starter template.
        <br />
        Black Orietta is designed as a reference-grade system for brands that
        value silence, restraint, and atmosphere over explanation.
      </p>
      <p className="mt-4 text-xs text-white/45 leading-relaxed">
        Built to set a benchmark — not to follow trends.
      </p>
    </div>
  );
}

export default function TemplateDetail() {
  const { slug } = useParams();
  const t = useMemo(() => templates.find((x) => x.slug === slug), [slug]);

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
      <div className="mb-20">
        <Link
          to="/templates"
          className="text-xs tracking-[0.25em] uppercase text-white/50 hover:text-white/75"
        >
          ← Templates
        </Link>

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

          {/* ========== BUTTON AREA (完全集約) ========== */}
          <div className="text-right">
            <p className="text-xs text-white/45 mb-4">
              {isLive ? "Instant download" : "Coming soon"}
            </p>

            <div className="flex flex-wrap justify-end gap-3">
              {/* Preview button */}
              {t.slug === "black-orietta" && (
                <Link
                  to="/preview/black-orietta"
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
              )}

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

            {isPremium && (
              <p className="mt-5 text-xs text-white/45 max-w-xs leading-relaxed">
                Typography-first. Minimal. Intentionally opinionated.
                <br />
                Designed for brands that communicate through mood.
              </p>
            )}
          </div>
        </div>
      </div>

{/* ================= Preview ================= */}
{/* ================= Preview ================= */}
<div className="grid md:grid-cols-3 gap-6 mb-24">
  {/* Main preview */}
  <img
    src={`/previews/${t.slug}/hero.png`}
    alt={`${t.title} main preview`}
    className="md:col-span-2 rounded-xl border border-white/10 object-cover w-full"
  />

  {/* Sub preview */}
  <img
    src={`/previews/${t.slug}/product.png`}
    alt={`${t.title} sub preview`}
    className="rounded-xl border border-white/10 object-cover w-full"
  />
</div>


      {/* ================= Content ================= */}
      <div className="grid md:grid-cols-3 gap-16">
        {/* LEFT */}
        <div className="md:col-span-2 space-y-16">
          <div>
            <SectionTitle>Highlights</SectionTitle>
            <ul className="space-y-2 text-white/70 text-sm">
              {t.highlights.map((h) => (
                <li key={h}>• {h}</li>
              ))}
            </ul>
          </div>

          <div>
            <SectionTitle>What&apos;s included</SectionTitle>
            <ul className="space-y-2 text-white/70 text-sm">
              {t.includedPages.map((p) => (
                <li key={p}>• {p}</li>
              ))}
              <li>• Organized file structure + README</li>
              <li>• Commercial license</li>
            </ul>
          </div>

          <div>
            <SectionTitle>Requirements</SectionTitle>
            <ul className="space-y-2 text-white/70 text-sm">
              {t.requirements.map((r) => (
                <li key={r}>• {r}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT */}
        <aside className="space-y-12">
          {isPremium && <PremiumNote />}

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-7">
            <SectionTitle>License</SectionTitle>
            <p className="text-sm text-white/70 leading-relaxed">
              Commercial use is allowed.
              <br />
              Redistribution, resale, or sharing the files is not permitted.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-7">
            <SectionTitle>Refund policy</SectionTitle>
            <p className="text-sm text-white/70 leading-relaxed">
              Due to the digital nature of this product,
              refunds are only available if the files have not been downloaded.
              <br />
              Please contact us within 7 days if you encounter technical issues.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-7">
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
