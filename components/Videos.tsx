"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { fbVideoEmbed, type Video } from "@/lib/data";
import type { Locale } from "@/lib/site";

/** Grid of Facebook videos; clicking a card plays it in a modal with Facebook's embedded player. */
export default function Videos({ items, locale, className = "grid gap-6 md:grid-cols-3" }: { items: Video[]; locale: Locale; className?: string }) {
  const [active, setActive] = useState<Video | null>(null);
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div className={className}>
        {items.map((v) => (
          <button key={v.id} onClick={() => setActive(v)} className="group relative block aspect-video w-full overflow-hidden rounded-3xl bg-ink-900 text-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={v.poster} alt="" loading="lazy" className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/20 to-transparent" />
            <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur transition group-hover:scale-110 group-hover:bg-brand-500">
              <Play size={24} fill="currentColor" className="ms-1" />
            </span>
            <span className="absolute inset-x-0 bottom-0 p-5 font-semibold leading-snug text-white">{v.title[locale]}</span>
          </button>
        ))}
      </div>
      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-[90] grid place-items-center bg-black/90 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <motion.div initial={{ scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <div className="aspect-video overflow-hidden rounded-2xl bg-black">
                <iframe src={fbVideoEmbed(active.id)} title={active.title[locale]} className="h-full w-full" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
              </div>
              <p className="mt-4 text-center font-semibold text-white">{active.title[locale]}</p>
            </motion.div>
            <button aria-label="Close" onClick={() => setActive(null)} className="absolute end-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><X /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
