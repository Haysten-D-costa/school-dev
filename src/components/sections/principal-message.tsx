"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PRINCIPAL_MESSAGE } from "@/data/principal-message";

export default function PrincipalMessage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream" aria-label="Principal's message">
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
              From the Principal&apos;s Desk
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
              {/* Photo placeholder */}
              <div className="relative w-full h-full bg-cream-dark rounded-sm overflow-hidden flex items-center justify-center">
                <div className="text-center text-neutral/30">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <span className="font-heading font-black text-3xl text-primary/40">AF</span>
                  </div>
                  <p className="font-body text-xs tracking-wide">Principal&apos;s Photo</p>
                </div>
              </div>
              {/* Red corner accent */}
              <div className="absolute bottom-0 right-0 w-10 h-10 bg-primary" />
            </div>

            {/* Name plate */}
            <div className="mt-5 text-center lg:text-left">
              <p className="font-heading font-bold text-primary text-lg">
                {PRINCIPAL_MESSAGE.name}
              </p>
              <p className="font-body text-[12px] tracking-[0.1em] text-neutral/55 mt-1">
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
                &ldquo;{PRINCIPAL_MESSAGE.shortQuote}&rdquo;
              </blockquote>
            </div>

            {/* Message body */}
            <div className="space-y-4">
              {PRINCIPAL_MESSAGE.message
                .trim()
                .split("\n\n")
                .map((para, i) => (
                  <p key={i} className="font-body text-neutral/70 leading-relaxed text-base">
                    {para.replace(/\n/g, " ")}
                  </p>
                ))}
            </div>

            {/* Read more */}
            <Link
              href="/about/principal"
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
