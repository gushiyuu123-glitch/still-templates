export default function Faq() {
  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-light tracking-[0.12em] mb-8">FAQ</h2>

      <div className="space-y-8 text-sm text-white/75 leading-relaxed">
        <div>
          <p className="text-white mb-2">Do you offer customization?</p>
          <p>No. Templates are sold as-is.</p>
        </div>

        <div>
          <p className="text-white mb-2">Do I need coding skills?</p>
          <p>Basic HTML/CSS knowledge is recommended.</p>
        </div>

        <div>
          <p className="text-white mb-2">Do you provide refunds?</p>
          <p>
            Refunds are available only if the files were not downloaded. Contact us within 7 days.
          </p>
        </div>
      </div>
    </section>
  );
}
