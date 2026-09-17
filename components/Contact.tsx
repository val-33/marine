"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import YachtSilhouette from "./YachtSilhouette";

export default function Contact() {
  const targetRef = useRef<HTMLDivElement>(null);

  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    const update = () => setScreenWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Yacht sails left → right across the sticky viewport.
  const yachtX = useTransform(
    scrollYProgress,
    [0.1, 0.9],
    [`${-1.6 * screenWidth}px`, `${1.6 * screenWidth}px`],
  );
  const yachtOpacity = useTransform(
    scrollYProgress,
    [0.1, 0.28, 0.72, 0.9],
    [0, 1, 1, 0],
  );

  // "Sail with MARINE" copy is visible before the yacht reaches centre;
  // as the yacht crosses, this copy fades out and the Get-in-Touch layer
  // fades in behind it.
  const beforeOpacity = useTransform(scrollYProgress, [0.35, 0.48], [1, 0]);
  const afterOpacity = useTransform(scrollYProgress, [0.52, 0.65], [0, 1]);

  return (
    <section
      id="contact"
      ref={targetRef}
      className="relative h-[200vh] bg-ink text-white"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* BEFORE — Sail with MARINE */}
        <motion.div
          style={{ opacity: beforeOpacity }}
          className="absolute inset-0 z-10 flex items-center justify-center px-6"
        >
          <div className="mx-auto max-w-3xl text-center">
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
        </motion.div>

        {/* AFTER — Get in Touch */}
        <motion.div
          style={{ opacity: afterOpacity }}
          className="absolute inset-0 z-10 flex items-center justify-center px-6 md:px-10"
        >
          <div className="mx-auto max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <p className="eyebrow text-white/60 text-[11px] mb-4">
                Get in Touch
              </p>
              <h2 className="tracked-heading text-white text-xl md:text-2xl lg:text-[26px] mb-6">
                Speak with a broker
              </h2>
              <p className="text-white/70 leading-relaxed font-light max-w-md text-sm md:text-base">
                Tell us what you are looking for: buying, selling, or
                chartering. A dedicated broker will be in touch within one
                business day.
              </p>

              <dl className="mt-8 space-y-4">
                <ContactRow
                  label="Head Office"
                  value="Port Vauban, Antibes, France"
                />
                <ContactRow label="Telephone" value="+33 4 00 00 00 00" />
                <ContactRow label="Email" value="hello@marine.example" />
              </dl>
            </div>

            <form
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" wide />
              <div className="sm:col-span-2">
                <label className="eyebrow text-[10px] text-white/60 block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full bg-transparent border-b border-white/30 focus:border-white outline-none py-2 text-white font-light resize-none"
                />
              </div>
              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center gap-3 border border-white/50 hover:border-white hover:bg-white hover:text-ink transition-colors px-8 py-3"
                >
                  <span className="eyebrow text-[11px]">Send Enquiry</span>
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Yacht — z-20 on top so it "wipes" across both layers */}
        <motion.div
          style={{ x: yachtX, opacity: yachtOpacity }}
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
        >
          <YachtSilhouette
            width={880}
            className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] md:w-[880px] w-[560px]"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="eyebrow text-[10px] text-white/50 mb-1">{label}</dt>
      <dd className="text-sm text-white/90 font-light">{value}</dd>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  wide,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  wide?: boolean;
}) {
  return (
    <div className={wide ? "sm:col-span-2" : ""}>
      <label className="eyebrow text-[10px] text-white/60 block mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-transparent border-b border-white/30 focus:border-white outline-none py-2 text-white font-light"
      />
    </div>
  );
}
