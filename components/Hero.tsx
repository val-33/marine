export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=2400&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/70" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-6">
        <p className="eyebrow text-[11px] md:text-xs mb-8 text-white/80">
          Est. 2005 · Mediterranean
        </p>
        <h1 className="tracked-heading text-white text-[22px] sm:text-[28px] md:text-[38px] lg:text-[46px] leading-[1.35] max-w-5xl">
          Experience the luxury
          <br className="hidden sm:block" /> with our yachts
        </h1>
        <p className="mt-10 max-w-2xl text-white/80 font-light text-sm md:text-base leading-relaxed">
          Our fleet delivers superior quality and unrivalled value. A curated
          selection of luxury yachts from the world&apos;s leading builders,
          crafted for those who know the sea.
        </p>

        <a
          href="#fleet"
          aria-label="Scroll to fleet"
          className="mt-14 inline-flex flex-col items-center gap-4 group motion-safe-only animate-scroll-bob"
        >
          <span className="eyebrow text-[11px] text-white/90 group-hover:text-white transition-colors">
            Discover
          </span>
          <span className="relative block h-14 w-px overflow-hidden bg-white/20">
            <span className="absolute inset-x-0 top-0 block h-5 bg-gradient-to-b from-transparent via-white/70 to-white motion-safe-only animate-scroll-cue" />
          </span>
        </a>
      </div>

    </section>
  );
}
