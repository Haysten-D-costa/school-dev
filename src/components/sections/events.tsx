"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { EVENTS, CATEGORY_COLORS, CATEGORY_LABELS } from "@/data/events";

export default function Events() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const displayed = EVENTS.slice(0, 3);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream-dark/50" aria-label="Upcoming events">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <span className="block w-1 h-10 bg-primary" />
            <div>
              <p className="font-body text-[11px] tracking-[0.35em] uppercase text-primary/60 mb-1">
                What&apos;s On
              </p>
              <h2 className="font-heading font-bold text-primary text-2xl sm:text-3xl">
                Upcoming Events
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <Link
              href="/school-life/news"
              className="inline-flex items-center gap-2 font-body text-[13px] tracking-[0.1em] uppercase text-primary font-semibold group"
            >
              View All Events
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1.5" />
            </Link>
          </motion.div>
        </div>

        {/* Event grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed.map((event, i) => (
            <motion.article
              key={event.id}
              className="bg-cream rounded-sm overflow-hidden shadow-sm hover:shadow-md border border-cream-dark/60 transition-all duration-300 hover:-translate-y-1 flex"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              {/* Date block */}
              <div className="w-16 shrink-0 bg-primary flex flex-col items-center justify-center py-4 px-2 text-center">
                <span className="font-heading font-black text-cream text-2xl leading-none">
                  {event.day}
                </span>
                <span className="font-body text-cream/70 text-[10px] tracking-[0.15em] uppercase mt-1">
                  {event.month}
                </span>
                <span className="font-body text-cream/40 text-[10px] mt-0.5">
                  {event.year}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1 min-w-0">
                {/* Category badge */}
                <span
                  className={`inline-block self-start text-[10px] font-body font-bold tracking-[0.12em] uppercase px-2 py-0.5 rounded-sm mb-2 ${
                    CATEGORY_COLORS[event.category]
                  }`}
                >
                  {CATEGORY_LABELS[event.category]}
                </span>

                {/* Title */}
                <h3 className="font-heading font-bold text-primary text-base leading-snug mb-2">
                  {event.title}
                </h3>

                {/* Description */}
                <p className="font-body text-neutral/60 text-[13px] leading-relaxed flex-1 mb-3">
                  {event.description}
                </p>

                {/* Time */}
                {event.time && (
                  <div className="flex items-center gap-1.5 text-primary/50 text-[11px] font-body">
                    <Clock size={11} />
                    {event.time}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
