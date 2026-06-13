"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { CollectionImage } from "@/data/gallery";

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images:  CollectionImage[];
  index:   number;
  onClose: () => void;
  onPrev:  () => void;
  onNext:  () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  const image = images[index];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
        aria-label="Close"
      >
        <X size={18} />
      </button>

      <p className="absolute top-5 left-1/2 -translate-x-1/2 font-body text-white/40 text-xs tracking-widest select-none">
        {index + 1} / {images.length}
      </p>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-3 md:left-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
        aria-label="Previous"
      >
        <ChevronLeft size={22} />
      </button>

      <div
        className="flex flex-col items-center px-16 md:px-24 max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          className="max-h-[78vh] max-w-full object-contain rounded-xl shadow-2xl"
        />
        <p className="font-body text-white/40 text-sm mt-4 text-center">{image.alt}</p>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-3 md:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
        aria-label="Next"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}

export default function CollectionView({ images }: { images: CollectionImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev  = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next  = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    const items = gridRef.current?.querySelectorAll<HTMLElement>("[data-gi]");
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -32px 0px" }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [images]);

  return (
    <>
      <div
        ref={gridRef}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3"
      >
        {images.map((img, i) => (
          <button
            key={img.id}
            data-gi
            onClick={() => setLightboxIndex(i)}
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: `opacity 0.45s ease ${(i % 5) * 55}ms, transform 0.45s ease ${(i % 5) * 55}ms`,
            }}
            className="group relative aspect-square overflow-hidden rounded-xl bg-primary/8 cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-primary/30"
            aria-label={`Open ${img.alt}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-end p-3">
              <p className="font-body text-white text-[11px] leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-left line-clamp-2">
                {img.alt}
              </p>
            </div>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
