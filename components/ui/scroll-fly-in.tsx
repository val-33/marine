"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollFlyInProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Static text content, centred inside the sticky viewport. */
  children: React.ReactNode;
  /** Image (or any node — e.g. an inline SVG) that flies across as the user scrolls. */
  image?: React.ReactNode;
  /** Fallback: URL to a raster/SVG image if `image` is not provided. */
  imageUrl?: string;
  imageAlt?: string;
  /** Overall track height. Longer = slower cross. Defaults to 200vh. */
  trackClassName?: string;
}

/**
 * Scroll-linked "fly across" section. As the user scrolls through the
 * container, the `image` element translates from far off-screen left to
 * far off-screen right, fading in near the middle. Text stays centred.
 */
const ScrollFlyIn = React.forwardRef<HTMLDivElement, ScrollFlyInProps>(
  (
    { children, image, imageUrl, imageAlt = "Animated image", className, trackClassName, ...props },
    ref,
  ) => {
    const targetRef = React.useRef<HTMLDivElement>(null);

    // Combine forwarded ref with the local one we need for useScroll.
    React.useImperativeHandle(ref, () => targetRef.current as HTMLDivElement);

    // SSR-safe viewport width. Starts at 0 on the server; the effect fills
    // it in on the client and keeps it in sync with resizes.
    const [screenWidth, setScreenWidth] = React.useState(0);
    React.useEffect(() => {
      const update = () => setScreenWidth(window.innerWidth);
      update();
      window.addEventListener("resize", update, { passive: true });
      return () => window.removeEventListener("resize", update);
    }, []);

    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
    });

    // Sails left → right across the viewport with room to fully clear both
    // edges. Values scale with viewport width so the crossing feels the
    // same on every screen.
    const x = useTransform(
      scrollYProgress,
      [0.1, 0.9],
      [`${-1.6 * screenWidth}px`, `${1.6 * screenWidth}px`],
    );
    const opacity = useTransform(scrollYProgress, [0.1, 0.28, 0.72, 0.9], [0, 1, 1, 0]);

    return (
      <div
        ref={targetRef}
        className={cn("relative h-[200vh]", trackClassName, className)}
        {...props}
      >
        {/* Sticky viewport. No overflow-hidden so the animated element
            can travel completely off-screen. */}
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-visible">
          {/* Static text stays centred. */}
          <div className="relative z-10 w-full">{children}</div>

          {/* The flying element. */}
          <motion.div
            style={{ x, opacity }}
            className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
          >
            {image ? (
              image
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-auto h-auto max-w-none"
              />
            )}
          </motion.div>
        </div>
      </div>
    );
  },
);

ScrollFlyIn.displayName = "ScrollFlyIn";

export { ScrollFlyIn };
