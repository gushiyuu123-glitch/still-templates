export default function License() {
  return (
    <section className="max-w-3xl mx-auto aq-page-fade">
      {/* Title */}
      <h2 className="text-3xl font-light tracking-[0.12em] mb-10 aq-fade-up">
        License
      </h2>

      <div className="space-y-10 text-sm leading-relaxed">

        {/* Block 1 */}
        <div className="aq-fade-up aq-delay-1">
          <p className="text-white/75">
            You may use purchased templates for personal and commercial projects.
            This includes client work, portfolio sites, and brand websites.
          </p>
        </div>

        <div className="aq-divider opacity-20"></div>

        {/* Block 2 */}
        <div className="aq-fade-up aq-delay-2">
          <p className="text-white/75">
            You may not redistribute, resell, or share template files — in whole or in part.
            Redistribution includes uploading the files to GitHub, sharing them privately,
            or using them as part of another product.
          </p>
        </div>

        <div className="aq-divider opacity-20"></div>

        {/* Block 3 */}
        <div className="aq-fade-up aq-delay-3">
          <p className="text-white/75">
            No trademark rights are included.  
            Images shown in previews are for demonstration only and are not included
            in the downloadable files.
          </p>
        </div>

        <div className="aq-divider opacity-10"></div>

        {/* Block 4 — Nice subtle closing note */}
        <div className="aq-fade-up aq-delay-3">
          <p className="text-xs text-white/45 tracking-wide">
            Straightforward. Quiet. Made to help real brands move.
          </p>
        </div>

      </div>
    </section>
  );
}
