"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const go = useCallback((next: number) => {
    const target = (next + TESTIMONIALS.length) % TESTIMONIALS.length;
    setDirection(next > current || (current === TESTIMONIALS.length - 1 && next === 0) ? 1 : -1);
    setCurrent(target);
  }, [current]);

  const t = TESTIMONIALS[current];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white border-t border-b border-primary/8" aria-label="Testimonials">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section label */}
        <motion.div
          className="flex items-center gap-3 mb-14"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <span className="block w-1 h-10 bg-primary" />
          <div>
            <p className="font-body text-[11px] tracking-[0.35em] uppercase text-primary/60 mb-1">
              Voices
            </p>
            <h2 className="font-heading font-bold text-primary text-2xl sm:text-3xl">
              What Our Community Says
            </h2>
          </div>
        </motion.div>

        {/* Carousel body */}
        <motion.div
          className="relative overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 48 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -48 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Quote */}
              <div className="mb-10 max-w-4xl">
                <Quote size={32} className="text-primary/20 fill-primary/10 mb-4" />
                <blockquote className="font-heading italic text-primary/80 text-base sm:text-lg leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Person row */}
              <div className="flex items-center gap-5">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-full border-2 border-primary/15 overflow-hidden shrink-0 bg-primary/10 flex items-center justify-center">
                  {t.image ? (
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <span className="font-heading font-black text-xl text-primary/40">
                      {t.initials}
                    </span>
                  )}
                </div>

                {/* Name / role */}
                <div>
                  <p className="font-heading font-bold text-primary text-lg leading-tight">
                    {t.name}
                  </p>
                  <p className="font-body text-sm tracking-wide text-neutral/50 mt-1">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Navigation — right-aligned */}
        <motion.div
          className="flex items-center justify-end gap-3 mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.55, delay: 0.3 }}
        >
          {/* Dot indicators */}
          <div className="flex items-center gap-2 mr-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-6 h-2 bg-primary"
                    : "w-2 h-2 bg-primary/20 hover:bg-primary/40"
                }`}
              />
            ))}
          </div>

          {/* Prev */}
          <button
            onClick={() => go(current - 1)}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary/50 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
          >
            <ChevronLeft size={16} />
          </button>

          {/* Next */}
          <button
            onClick={() => go(current + 1)}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary/50 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
          >
            <ChevronRight size={16} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
