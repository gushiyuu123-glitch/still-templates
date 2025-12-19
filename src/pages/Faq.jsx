export default function Faq() {
  return (
    <section className="max-w-3xl mx-auto aq-page-fade">
      {/* Title */}
      <h2 className="text-3xl font-light tracking-[0.12em] mb-10 aq-fade-up">
        FAQ
      </h2>

      {/* List */}
      <div className="space-y-10 text-sm leading-relaxed">

        {/* Item */}
        <div className="aq-fade-up aq-delay-1">
          <p className="text-white mb-2 font-medium tracking-wide">
            Do you offer customization?
          </p>
          <p className="text-white/70">
            No. Templates are sold as-is.  
            This keeps pricing simple and ensures consistent quality.
          </p>
        </div>

        <div className="aq-divider opacity-20"></div>

        {/* Item */}
        <div className="aq-fade-up aq-delay-2">
          <p className="text-white mb-2 font-medium tracking-wide">
            Do I need coding skills?
          </p>
          <p className="text-white/70">
            Basic HTML/CSS knowledge is recommended.  
            All templates are organized, readable, and easy to modify.
          </p>
        </div>

        <div className="aq-divider opacity-20"></div>

        {/* Item */}
        <div className="aq-fade-up aq-delay-3">
          <p className="text-white mb-2 font-medium tracking-wide">
            Do you provide refunds?
          </p>
          <p className="text-white/70">
            Refunds are available only if the files were not downloaded.  
            If you encounter technical issues, please contact us within 7 days.
          </p>
        </div>

      </div>
    </section>
  );
}
