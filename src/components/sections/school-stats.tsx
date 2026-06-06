"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SCHOOL_STATS } from "@/data/stats";

export default function SchoolStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-primary py-14 md:py-16" aria-label="School statistics">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {SCHOOL_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`flex flex-col items-center text-center py-6 px-4 ${
                i < SCHOOL_STATS.length - 1
                  ? "border-r border-cream/10 last:border-0"
                  : ""
              } ${i >= 2 ? "border-t lg:border-t-0 border-cream/10" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
            >
              <p className="font-heading font-black text-cream text-4xl sm:text-5xl leading-none mb-2">
                {stat.value}
              </p>
              <p className="font-body font-semibold text-cream/80 text-sm tracking-wide mb-1">
                {stat.label}
              </p>
              <p className="font-body text-cream/40 text-[11px] tracking-[0.15em] uppercase">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
