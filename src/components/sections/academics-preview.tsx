"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { BookOpen, ArrowRight, FlaskConical, Trophy } from "lucide-react";

const PROGRAMS = [
  {
    icon: BookOpen,
    label: "Primary School",
    grades: "Grades I – V",
    href: "/academics/primary",
    description:
      "A nurturing foundation that sparks curiosity and builds core literacy, numeracy, and creative skills in a safe, joyful environment.",
    highlights: ["Activity-based learning", "Language arts & STEM", "Sports & arts integration"],
  },
  {
    icon: FlaskConical,
    label: "Secondary School",
    grades: "Grades VI – X",
    href: "/academics/secondary",
    description:
      "Rigorous academics aligned with the CBSE curriculum, developing critical thinkers and preparing students for board examinations.",
    highlights: ["CBSE curriculum", "Science & Mathematics focus", "Counselling & career guidance"],
    featured: true,
  },
  {
    icon: Trophy,
    label: "Higher Secondary",
    grades: "Grades XI – XII",
    href: "/academics/higher-secondary",
    description:
      "Specialised streams in Science, Commerce, and Arts that equip students for competitive entrance exams and university admission.",
    highlights: ["Science, Commerce, Arts", "Expert faculty mentors", "Entrance exam coaching"],
  },
];

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROGRAMS.map((prog, i) => {
            const Icon = prog.icon;
            return (
              <motion.div
                key={prog.label}
                className={`group relative flex flex-col rounded-sm overflow-hidden border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                  prog.featured
                    ? "border-primary bg-primary text-cream shadow-lg shadow-primary/20"
                    : "border-cream-dark/80 bg-cream hover:border-primary/30"
                }`}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                {/* Featured ribbon */}
                {prog.featured && (
                  <div className="absolute top-4 right-4 bg-cream text-primary text-[10px] font-body font-bold tracking-[0.15em] uppercase px-2.5 py-1">
                    Popular
                  </div>
                )}

                <div className="p-7 flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-sm flex items-center justify-center mb-5 ${
                      prog.featured ? "bg-cream/15" : "bg-primary/8"
                    }`}
                  >
                    <Icon size={22} className={prog.featured ? "text-cream" : "text-primary"} />
                  </div>

                  {/* Grades badge */}
                  <span
                    className={`inline-block self-start text-[10px] font-body font-bold tracking-[0.15em] uppercase px-2.5 py-1 mb-3 ${
                      prog.featured ? "bg-cream/15 text-cream/80" : "bg-primary/8 text-primary/70"
                    }`}
                  >
                    {prog.grades}
                  </span>

                  {/* Title */}
                  <h3
                    className={`font-heading font-bold text-xl mb-3 ${
                      prog.featured ? "text-cream" : "text-primary"
                    }`}
                  >
                    {prog.label}
                  </h3>

                  {/* Description */}
                  <p
                    className={`font-body text-sm leading-relaxed mb-5 flex-1 ${
                      prog.featured ? "text-cream/70" : "text-neutral/60"
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
                          prog.featured ? "text-cream/75" : "text-neutral/65"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            prog.featured ? "bg-cream/50" : "bg-primary/40"
                          }`}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={prog.href}
                    className={`inline-flex items-center gap-2 font-body text-[13px] tracking-[0.1em] uppercase font-semibold group-hover:gap-3 transition-all duration-200 ${
                      prog.featured ? "text-cream" : "text-primary"
                    }`}
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
