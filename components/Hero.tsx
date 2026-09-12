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
          className="mt-14 inline-flex flex-col items-center gap-3 group"
        >
          <span className="eyebrow text-[11px] text-white/90 group-hover:text-white transition-colors">
            Discover
          </span>
          <span className="block h-10 w-px bg-white/50 group-hover:bg-white transition-colors" />
        </a>
      </div>

    </section>
  );
}
