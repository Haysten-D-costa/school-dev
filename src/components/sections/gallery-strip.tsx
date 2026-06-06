"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import { GALLERY_IMAGES } from "@/data/gallery";

export default function GalleryStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-primary overflow-hidden" aria-label="School gallery">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <span className="block w-1 h-10 bg-cream/40" />
            <div>
              <p className="font-body text-[11px] tracking-[0.35em] uppercase text-cream/50 mb-1">
                <Camera size={11} className="inline mr-1.5 -mt-0.5" />
                Moments
              </p>
              <h2 className="font-heading font-bold text-cream text-2xl sm:text-3xl">
                Life at SJHS
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <Link
              href="/school-life/gallery"
              className="inline-flex items-center gap-2 font-body text-[13px] tracking-[0.1em] uppercase text-cream/70 hover:text-cream font-semibold group transition-colors duration-200"
            >
              View Full Gallery
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1.5" />
            </Link>
          </motion.div>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              className={`relative overflow-hidden rounded-sm group cursor-pointer ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
              style={{ aspectRatio: i === 0 ? "1/1" : "4/3" }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                <Camera
                  size={20}
                  className="text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
