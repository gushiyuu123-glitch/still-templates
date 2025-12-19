import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import templates from "../data/templates.json";

function PriceLine({ t }) {
  if (t.status === "live") {
    return (
      <span className="text-xs text-white/70 tracking-wide">
        ${t.price}
      </span>
    );
  }

  return (
    <span className="text-xs text-white/40 tracking-wide">
      ${t.price} — Coming soon
    </span>
  );
}

function TierBadge({ tier }) {
  if (tier !== "premium") return null;

  return (
    <span
      className="
        absolute top-6 right-6
        text-[10px] tracking-[0.36em] uppercase
        text-white/70
      "
    >
      Premium
    </span>
  );
}

export default function Templates() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 初回マウント時に “展示会ライトON”
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="max-w-6xl mx-auto">
      {/* ================= Header ================= */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20">
        <div>
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/50 mb-4">
            Template Collection
          </p>
          <h2 className="text-2xl md:text-3xl tracking-[0.14em] font-light">
            Minimal HTML Templates
          </h2>
        </div>

        <p className="text-xs text-white/45 max-w-sm md:text-right leading-relaxed">
          Templates designed for cafés, salons, and quiet brands
          that sell through atmosphere, clarity, and structure.
        </p>
      </div>

      {/* ================= Grid ================= */}
      <div className="grid md:grid-cols-3 gap-14">
        {templates.map((t, index) => {
          const isPremium = t.tier === "premium";

          return (
            <Link
              key={t.slug}
              to={`/templates/${t.slug}`}
              className={`
                group relative
                p-8
                rounded-2xl
                border
                transition-all duration-700
                ${isPremium
                  ? "border-white/20 bg-white/[0.035] hover:border-white/45"
                  : "border-white/12 hover:border-white/30 bg-white/[0.02]"
                }
                hover:-translate-y-1.5 hover:shadow-[0_18px_60px_rgba(0,0,0,0.65)]
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              `}
              style={{
                transitionDelay: mounted ? `${index * 70}ms` : "0ms",
              }}
            >
              {/* Tier */}
              <TierBadge tier={t.tier} />

              {/* Thumbnail */}
              <div
                className={`
                  aspect-[4/3] rounded-xl mb-8
                  bg-center bg-cover bg-no-repeat
                  border border-white/10
                  transition-opacity duration-500
                  group-hover:opacity-90
                `}
                style={{
                  backgroundImage: `url(${t.thumb})`,
                }}
              />

              {/* Title & meta */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-sm md:text-base tracking-[0.06em] mb-1">
                    {t.title}
                  </h3>

                  <p className="text-xs text-white/60 leading-relaxed">
                    {t.tagline}
                  </p>
                </div>

                <PriceLine t={t} />
              </div>

              {/* Categories / Tags（あれば） */}
              {(t.categories || t.tags) && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {t.categories?.slice(0, 2).map((c) => (
                    <span
                      key={`cat-${t.slug}-${c}`}
                      className="
                        text-[10px]
                        px-2.5 py-1
                        rounded-full
                        border border-white/10
                        text-white/55
                        tracking-[0.16em] uppercase
                      "
                    >
                      {c}
                    </span>
                  ))}

                  {t.tags?.slice(0, 2).map((tag) => (
                    <span
                      key={`tag-${t.slug}-${tag}`}
                      className="
                        text-[10px]
                        px-2.5 py-1
                        rounded-full
                        bg-white/[0.04]
                        text-white/60
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mt-3">
                {t.highlights.slice(0, 3).map((h) => (
                  <span
                    key={h}
                    className="
                      text-[11px]
                      px-3 py-1
                      rounded-full
                      border border-white/10
                      text-white/55
                    "
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Premium note */}
              {isPremium && (
                <p className="mt-7 text-[11px] text-white/45 leading-relaxed">
                  Reference-grade project.
                  <br />
                  Designed to set a benchmark, not to blend in.
                </p>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
