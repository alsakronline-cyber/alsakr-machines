"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useMotionValue, useScroll, useSpring, animate } from "framer-motion";
import { ArrowUp, MessageCircle, Moon, Send, Sun, X, ChevronLeft, ChevronRight } from "lucide-react";
import { getDict } from "@/lib/i18n";
import { waLink, type Locale } from "@/lib/site";
import { QuoteForm } from "./Forms";

/* ---------- Quote modal ---------- */
const QuoteCtx = createContext<{ open: (machine?: string) => void }>({ open: () => {} });
export const useQuote = () => useContext(QuoteCtx);

export function QuoteProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const [state, setState] = useState<{ open: boolean; machine?: string }>({ open: false });
  const t = getDict(locale);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setState({ open: false });
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <QuoteCtx.Provider value={{ open: (machine) => setState({ open: true, machine }) }}>
      {children}
      <AnimatePresence>
        {state.open && (
          <motion.div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setState({ open: false })}>
            <motion.div role="dialog" aria-modal="true" aria-label={t.contact.quoteTitle}
              className="surface relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-t-3xl border border-line p-6 shadow-2xl sm:rounded-3xl sm:p-8"
              initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }} onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setState({ open: false })} aria-label="Close" className="absolute end-4 top-4 rounded-full p-2 text-muted hover:bg-brand-500/10">
                <X size={20} />
              </button>
              <h2 className="font-display text-2xl font-bold">{t.contact.quoteTitle}</h2>
              <p className="mt-1 text-sm text-muted">{t.contact.quoteSub}</p>
              <div className="mt-6"><QuoteForm locale={locale} machine={state.machine} /></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </QuoteCtx.Provider>
  );
}

export function QuoteButton({ locale, machine, className, children }: { locale: Locale; machine?: string; className?: string; children?: React.ReactNode }) {
  const { open } = useQuote();
  return (
    <button onClick={() => open(machine)} className={className ?? btnPrimary}>
      {children ?? getDict(locale).cta.quote}
    </button>
  );
}

export const btnPrimary =
  "shine inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-brand-500/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400";
export const btnGhost =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-line px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-500";

/* ---------- Theme ---------- */
export function ThemeToggle({ locale }: { locale: Locale }) {
  const [dark, setDark] = useState(true);
  useEffect(() => setDark(document.documentElement.classList.contains("dark")), []);
  const t = getDict(locale).theme;
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };
  return (
    <button onClick={toggle} aria-label={dark ? t.light : t.dark} title={dark ? t.light : t.dark}
      className="grid h-10 w-10 place-items-center rounded-full border border-line transition hover:border-brand-500 hover:text-brand-500">
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

/* ---------- Motion helpers ---------- */
export function Reveal({ children, delay = 0, className, y = 28 }: { children: React.ReactNode; delay?: number; className?: string; y?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(mv, to, { duration: 2, ease: "easeOut", onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, to, mv]);
  return <span ref={ref}>{val.toLocaleString("en")}{suffix}</span>;
}

/** Card whose border glows toward the cursor. */
export function GlowCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`card-glow ${className}`}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
      }}>
      {children}
    </div>
  );
}

/* ---------- Lightbox gallery ---------- */
export function Gallery({ images, className = "" }: { images: string[]; className?: string }) {
  const [i, setI] = useState<number | null>(null);
  useEffect(() => {
    if (i === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setI(null);
      if (e.key === "ArrowRight") setI((v) => (v === null ? v : (v + 1) % images.length));
      if (e.key === "ArrowLeft") setI((v) => (v === null ? v : (v - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, images.length]);
  return (
    <>
      <div className={className}>
        {images.map((src, k) => (
          <button key={src + k} onClick={() => setI(k)} className="group relative mb-4 block w-full overflow-hidden rounded-2xl border border-line bg-white break-inside-avoid">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" loading="lazy" className="w-full object-cover transition duration-700 group-hover:scale-105" />
            <span className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent opacity-0 transition group-hover:opacity-100" />
          </button>
        ))}
      </div>
      <AnimatePresence>
        {i !== null && (
          <motion.div className="fixed inset-0 z-[90] grid place-items-center bg-black/90 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setI(null)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img key={i} src={images[i]} alt="" className="max-h-[85vh] max-w-full rounded-xl bg-white object-contain" initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} />
            <button aria-label="Close" className="absolute end-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><X /></button>
            <button aria-label="Previous" onClick={(e) => { e.stopPropagation(); setI((i - 1 + images.length) % images.length); }} className="absolute start-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><ChevronLeft className="flip-rtl" /></button>
            <button aria-label="Next" onClick={(e) => { e.stopPropagation(); setI((i + 1) % images.length); }} className="absolute end-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"><ChevronRight className="flip-rtl" /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------- Floating WhatsApp, live chat and back-to-top ---------- */
function WhatsAppIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.81 11.81 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41" />
    </svg>
  );
}

export function FloatingActions({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const [chat, setChat] = useState(false);
  const [msg, setMsg] = useState("");
  const [top, setTop] = useState(false);
  useEffect(() => {
    const on = () => setTop(window.scrollY > 800);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className="fixed bottom-5 end-5 z-[70] flex flex-col items-end gap-3">
      <AnimatePresence>
        {chat && (
          <motion.div initial={{ opacity: 0, y: 16, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.96 }}
            className="surface w-[min(340px,calc(100vw-40px))] overflow-hidden rounded-3xl border border-line shadow-2xl">
            <div className="flex items-center gap-3 bg-gradient-to-r from-brand-600 to-brand-500 p-4 text-white">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-white/20"><WhatsAppIcon size={20} /></div>
              <div className="flex-1">
                <div className="font-semibold">{t.chat.title}</div>
                <div className="flex items-center gap-1.5 text-xs text-white/80"><span className="h-2 w-2 rounded-full bg-emerald-300" />{t.chat.online}</div>
              </div>
              <button onClick={() => setChat(false)} aria-label="Close" className="rounded-full p-1 hover:bg-white/20"><X size={18} /></button>
            </div>
            <div className="grid-bg space-y-3 p-4">
              <div className="max-w-[85%] rounded-2xl rounded-ss-sm bg-brand-500/10 px-4 py-3 text-sm">{t.chat.hi}</div>
            </div>
            <form className="flex gap-2 border-t border-line p-3"
              onSubmit={(e) => { e.preventDefault(); window.open(waLink(msg || t.chat.hi), "_blank", "noopener"); setMsg(""); }}>
              <input value={msg} onChange={(e) => setMsg(e.target.value)} placeholder={t.chat.ph} aria-label={t.chat.ph}
                className="flex-1 rounded-full border border-line bg-transparent px-4 py-2 text-sm outline-none focus:border-brand-500" />
              <button className="grid h-10 w-10 place-items-center rounded-full bg-brand-500 text-white" aria-label="Send"><Send size={16} className="flip-rtl" /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {top && (
          <motion.button initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0 })} aria-label="Back to top"
            className="glass grid h-11 w-11 place-items-center rounded-full shadow-lg"><ArrowUp size={18} /></motion.button>
        )}
      </AnimatePresence>
      <button onClick={() => setChat((v) => !v)} aria-label={t.chat.title}
        className="grid h-12 w-12 place-items-center rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/40 transition hover:scale-105">
        {chat ? <X size={20} /> : <MessageCircle size={20} />}
      </button>
      <a href={waLink(locale === "ar" ? "مرحباً، أريد الاستفسار عن ماكيناتكم" : "Hello, I'd like to ask about your machines")} target="_blank" rel="noopener"
        aria-label="WhatsApp" className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-500/40 transition hover:scale-105">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <WhatsAppIcon />
      </a>
    </div>
  );
}

/* ---------- Extra motion ---------- */
/** Thin brand-coloured bar at the top of the viewport that tracks scroll progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  return <motion.div aria-hidden style={{ scaleX }} className="fixed inset-x-0 top-0 z-[75] h-[3px] origin-left bg-gradient-to-r from-brand-300 via-brand-500 to-brand-700 rtl:origin-right" />;
}

/** Tilts its child in 3D toward the cursor. Disabled for touch and reduced-motion users. */
export function Tilt({ children, className = "", max = 8 }: { children: React.ReactNode; className?: string; max?: number }) {
  const rx = useMotionValue(0), ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 18 }), sry = useSpring(ry, { stiffness: 200, damping: 18 });
  return (
    <motion.div className={className} style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const r = e.currentTarget.getBoundingClientRect();
        ry.set(((e.clientX - r.left) / r.width - 0.5) * max * 2);
        rx.set(-((e.clientY - r.top) / r.height - 0.5) * max * 2);
      }}
      onPointerLeave={() => { rx.set(0); ry.set(0); }}>
      {children}
    </motion.div>
  );
}
