export default function Signature() {
  return (
    <section className="bg-stone-soft">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-24 md:py-32 text-center">
        <p className="eyebrow text-neutral-500 text-[11px] mb-6">MARINE</p>
        <h2 className="tracked-heading text-neutral-800 text-xl md:text-2xl lg:text-[26px] mb-10">
          The sign of experience
        </h2>
        <p className="mx-auto max-w-2xl text-neutral-600 leading-relaxed font-light">
          Our team of experts has extensive knowledge of every class of vessel
          and their features, providing tailored advice to our clients when
          selecting their ideal yacht, whether for private ownership, charter,
          or long-passage cruising.
        </p>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#fleet"
            className="group inline-flex items-center gap-3 border border-neutral-400 hover:border-neutral-800 px-8 py-4 transition-colors"
          >
            <span className="eyebrow text-[11px] text-neutral-800">
              Yachts for Sale
            </span>
            <ArrowIcon />
          </a>
          <a
            href="#charter"
            className="group inline-flex items-center gap-3 border border-neutral-400 hover:border-neutral-800 px-8 py-4 transition-colors"
          >
            <span className="eyebrow text-[11px] text-neutral-800">
              Yacht Charter
            </span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="w-3 h-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M4 12L12 4M12 4H6M12 4V10" />
    </svg>
  );
}
