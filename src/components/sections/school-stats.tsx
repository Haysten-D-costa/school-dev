"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SCHOOL_STATS } from "@/data/stats";

export default function SchoolStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-cream py-14 md:py-16" aria-label="School statistics">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {SCHOOL_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center text-center bg-white rounded-xl border border-primary/8 shadow-sm py-8 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
            >
              <p className="font-heading font-black text-primary text-4xl sm:text-5xl leading-none mb-2">
                {stat.value}
              </p>
              <p className="font-body font-semibold text-neutral text-sm tracking-wide mb-1">
                {stat.label}
              </p>
              <p className="font-body text-neutral/40 text-[11px] tracking-[0.15em] uppercase">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
