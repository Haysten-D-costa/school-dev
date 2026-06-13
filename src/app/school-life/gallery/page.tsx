"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar, Footer } from "@/components/layout";
import { ALBUMS, COLLECTIONS } from "@/data/gallery";
import { Images, ArrowRight, Camera } from "lucide-react";

export default function GalleryPage() {
  const [activeAlbum, setActiveAlbum] = useState("all");

  const filtered =
    activeAlbum === "all"
      ? COLLECTIONS
      : COLLECTIONS.filter((c) => c.album === activeAlbum);

  const sorted = [...filtered].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────── */}
        <section className="relative bg-primary overflow-hidden pt-36 pb-14">
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: "linear-gradient(rgba(253,246,236,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(253,246,236,0.15) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 70% 90% at 15% 60%, rgba(253,246,236,0.06) 0%, transparent 65%)" }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-cream/20" />

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="block h-px w-10 bg-cream/50" />
              <span className="font-body text-cream/60 text-[11px] tracking-[0.35em] uppercase">School Life</span>
              <span className="block h-px w-10 bg-cream/50" />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Camera size={28} className="text-cream/40" />
              <h1 className="font-heading text-white font-bold leading-tight text-5xl sm:text-6xl lg:text-7xl">
                Gallery
              </h1>
            </div>
            <p className="font-body text-white/50 text-base md:text-lg max-w-xl leading-relaxed">
              Memories from classrooms, sports fields, and celebrations — browse by category.
            </p>
          </div>
        </section>

        {/* ── Collections ──────────────────────────────────────────── */}
        <section className="bg-cream py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

            {/* Album filter */}
            <div className="flex flex-wrap gap-2 mb-10">
              {ALBUMS.map((album) => (
                <button
                  key={album.id}
                  onClick={() => setActiveAlbum(album.id)}
                  className={`font-body text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full border transition-all duration-200 ${
                    activeAlbum === album.id
                      ? "bg-primary text-white border-primary"
                      : "bg-transparent text-neutral/60 border-neutral/20 hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {album.label}
                </button>
              ))}
            </div>

            {/* Count */}
            <div className="flex items-center gap-2 mb-8">
              <Images size={13} className="text-primary/40" />
              <span className="font-body text-neutral/40 text-xs tracking-wide">
                {sorted.length} collection{sorted.length !== 1 ? "s" : ""}
              </span>
            </div>

            {/* Collection cards */}
            {sorted.length === 0 ? (
              <div className="text-center py-24">
                <p className="font-body text-neutral/40 text-sm">No collections yet.</p>
              </div>
            ) : (
              <div key={activeAlbum} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sorted.map((col, i) => (
                  <Link
                    key={col.slug}
                    href={`/school-life/gallery/${col.slug}`}
                    style={{
                      animation: "fadeSlideUp 0.5s ease",
                      animationDelay: `${i * 80}ms`,
                      animationFillMode: "both",
                    }}
                    className="group block relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative aspect-video overflow-hidden bg-primary/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={col.cover}
                        alt={col.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                      {!col.cloudinaryFolder && col.images.length > 0 && (
                        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 rounded-full px-2.5 py-1">
                          <Images size={10} className="text-white/70" />
                          <span className="font-body text-white/80 text-[10px] font-semibold">
                            {col.images.length}
                          </span>
                        </div>
                      )}

                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <p className="font-body text-cream/70 text-[10px] tracking-[0.2em] uppercase mb-1">
                          {col.displayDate}
                        </p>
                        <h3 className="font-heading text-white font-bold text-lg leading-snug">
                          {col.title}
                        </h3>

                        <div className="flex items-center gap-1.5 mt-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                          <span className="font-body text-cream text-xs font-semibold">View Collection</span>
                          <ArrowRight size={12} className="text-cream" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
