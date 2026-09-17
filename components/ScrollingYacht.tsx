import { ScrollFlyIn } from "@/components/ui/scroll-fly-in";
import YachtSilhouette from "./YachtSilhouette";

export default function ScrollingYacht() {
  return (
    <section className="w-full bg-ink text-white">
      <ScrollFlyIn
        image={
          <YachtSilhouette
            width={880}
            className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] md:w-[880px] w-[560px]"
          />
        }
        imageAlt="A luxury motor yacht sailing across the horizon"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow text-[11px] md:text-xs text-white/60 mb-4">
            Sail with MARINE
          </p>
          <h2 className="tracked-heading text-white text-2xl md:text-4xl lg:text-5xl leading-[1.3]">
            Where the horizon
            <br className="hidden sm:block" /> becomes yours
          </h2>
          <p className="mt-8 max-w-xl mx-auto text-white/70 font-light leading-relaxed">
            Every passage begins with a single line on the map. Yours starts
            here.
          </p>
        </div>
      </ScrollFlyIn>
    </section>
  );
}
