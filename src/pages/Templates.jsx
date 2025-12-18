import { Link } from "react-router-dom";
import { templates } from "../data/templates";

function PriceLine({ t }) {
  if (t.status === "live") {
    return (
      <span className="text-xs text-white/60 tracking-wide">
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
        text-white/65
      "
    >
      Premium
    </span>
  );
}

export default function Templates() {
  return (
    <section className="max-w-6xl mx-auto">
      {/* ================= Header ================= */}
      <div className="flex items-end justify-between gap-6 mb-20">
        <h2 className="text-2xl tracking-[0.12em]">Templates</h2>

        <p className="text-xs text-white/45 max-w-sm text-right leading-relaxed">
          Minimal layouts built for real businesses.
          <br />
          No fluff. No noise.
        </p>
      </div>

      {/* ================= Grid ================= */}
      <div className="grid md:grid-cols-3 gap-14">
        {templates.map((t) => {
          const isPremium = t.tier === "premium";

          return (
            <Link
              key={t.slug}
              to={`/templates/${t.slug}`}
              className={`
                group relative
                p-8
                transition-all duration-300
                ${
                  isPremium
                    ? "border border-white/20 bg-white/[0.035] hover:border-white/40"
                    : "border border-white/10 hover:border-white/30"
                }
                hover:-translate-y-1
              `}
            >
              {/* Tier */}
              <TierBadge tier={t.tier} />

           {/* Thumbnail */}
<div
  className={`
    aspect-[4/3] rounded-lg mb-8 bg-center bg-cover bg-no-repeat
    transition
    ${isPremium
      ? "group-hover:opacity-90"
      : "group-hover:opacity-95"
    }
  `}
  style={{
    backgroundImage: `url(${t.thumb})`,
  }}
/>


              {/* Title & meta */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-base tracking-wide mb-1">
                    {t.title}
                  </h3>

                  <p className="text-sm text-white/60 leading-relaxed">
                    {t.tagline}
                  </p>
                </div>

                <PriceLine t={t} />
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
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
