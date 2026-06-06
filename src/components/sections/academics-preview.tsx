"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Sprout, BookOpen, FlaskConical, Trophy, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PROGRAMS } from "@/data/programs";

const ICON_MAP: Record<string, LucideIcon> = {
  Sprout, BookOpen, FlaskConical, Trophy,
};

export default function AcademicsPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream" aria-label="Academic programmes">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <p className="font-body text-[11px] tracking-[0.35em] uppercase text-primary/60 mb-3">
            Curriculum
          </p>
          <h2 className="font-heading font-bold text-primary text-2xl sm:text-3xl md:text-4xl">
            Academic Programmes
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="block h-px w-12 bg-primary/20" />
            <span className="block w-2 h-2 rounded-full bg-primary/30" />
            <span className="block h-px w-12 bg-primary/20" />
          </div>
        </motion.div>

        {/* Programme cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {PROGRAMS.map((prog, i) => {
            const Icon = ICON_MAP[prog.icon];
            return (
              <motion.div
                key={prog.label}
                className={`group relative flex flex-col rounded-sm overflow-hidden border transition-all duration-300 ${
                  prog.comingSoon
                    ? "border-cream-dark/60 bg-cream/60 opacity-80"
                    : "border-cream-dark/80 bg-primary text-cream shadow-lg shadow-primary/20 hover:-translate-y-1.5 hover:shadow-xl"
                }`}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                {/* Ribbon */}
                {prog.featured && (
                  <div className="absolute top-4 right-4 bg-cream text-primary text-[10px] font-body font-bold tracking-[0.15em] uppercase px-2.5 py-1">
                    Enrolling Now
                  </div>
                )}
                {prog.comingSoon && (
                  <div className="absolute top-4 right-4 bg-primary/10 text-primary/60 text-[10px] font-body font-bold tracking-[0.15em] uppercase px-2.5 py-1">
                    Coming Soon
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-sm flex items-center justify-center mb-5 ${
                      prog.comingSoon ? "bg-primary/8" : "bg-cream/15"
                    }`}
                  >
                    <Icon size={22} className={prog.comingSoon ? "text-primary/40" : "text-cream"} />
                  </div>

                  {/* Grades badge */}
                  <span
                    className={`inline-block self-start text-[10px] font-body font-bold tracking-[0.15em] uppercase px-2.5 py-1 mb-3 ${
                      prog.comingSoon ? "bg-primary/8 text-primary/50" : "bg-cream/15 text-cream/80"
                    }`}
                  >
                    {prog.grades}
                  </span>

                  {/* Title */}
                  <h3
                    className={`font-heading font-bold text-xl mb-3 ${
                      prog.comingSoon ? "text-primary/60" : "text-cream"
                    }`}
                  >
                    {prog.label}
                  </h3>

                  {/* Description */}
                  <p
                    className={`font-body text-sm leading-relaxed mb-5 flex-1 ${
                      prog.comingSoon ? "text-neutral/40" : "text-cream/70"
                    }`}
                  >
                    {prog.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {prog.highlights.map((h) => (
                      <li
                        key={h}
                        className={`flex items-center gap-2 font-body text-[13px] ${
                          prog.comingSoon ? "text-neutral/40" : "text-cream/75"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            prog.comingSoon ? "bg-primary/20" : "bg-cream/50"
                          }`}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {prog.href ? (
                    <Link
                      href={prog.href}
                      className="inline-flex items-center gap-2 font-body text-[13px] tracking-widest uppercase font-semibold group-hover:gap-3 transition-all duration-200 text-cream"
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-2 font-body text-[13px] tracking-widest uppercase font-semibold text-primary/30 cursor-default">
                      Details Coming Soon
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
