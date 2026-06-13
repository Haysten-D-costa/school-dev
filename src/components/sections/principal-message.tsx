"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PRINCIPAL_MESSAGE } from "@/data/principal-message";
import { LEADERSHIP } from "@/data/leadership";

export default function PrincipalMessage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white border-t border-primary/8" aria-label="Leadership desk">
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
              Leadership
            </p>
            <h2 className="font-heading font-bold text-primary text-2xl sm:text-3xl">
              From the Leadership Desk
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* ── Photo column ────────────────────────────────────── */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            {/* Photo frame */}
            <div className="relative w-60 h-72 lg:w-full lg:h-80 shrink-0">
              {/* Red accent frame */}
              <div className="absolute -top-3 -left-3 w-full h-full border-2 border-primary/20 rounded-sm" />
              {/* Photo */}
              <div className="relative w-full h-full bg-cream-dark rounded-sm overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={LEADERSHIP[0].photo}
                  alt={LEADERSHIP[0].name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Red corner accent */}
              <div className="absolute bottom-0 right-0 w-10 h-10 bg-primary" />
            </div>

            {/* Name plate */}
            <div className="mt-5 text-center lg:text-left">
              <p className="font-heading font-bold text-primary text-lg">
                {PRINCIPAL_MESSAGE.name}
              </p>
              <p className="font-body text-[12px] tracking-widest text-neutral/55 mt-1">
                {PRINCIPAL_MESSAGE.designation}
              </p>
            </div>
          </motion.div>

          {/* ── Message column ──────────────────────────────────── */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.25 }}
          >
            {/* Pull quote */}
            <div className="relative mb-8">
              <Quote size={42} className="absolute -top-2 -left-2 text-primary/10 fill-primary/10" />
              <blockquote className="font-heading italic text-primary/80 text-xl sm:text-2xl leading-relaxed pl-4 border-l-4 border-primary/30">
                {PRINCIPAL_MESSAGE.shortQuote}
              </blockquote>
            </div>

            {/* Message preview */}
            <p className="font-body text-neutral/70 leading-relaxed text-base">
              {PRINCIPAL_MESSAGE.preview}
            </p>

            {/* Read more */}
            <Link
              href="/about/leadership"
              className="inline-flex items-center gap-2 mt-8 font-body text-[13px] tracking-[0.12em] uppercase text-primary font-semibold group"
            >
              Read Full Message
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1.5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
