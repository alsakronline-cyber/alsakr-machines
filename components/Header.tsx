"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Globe, Menu, Phone, X, ArrowUpRight } from "lucide-react";
import { getDict } from "@/lib/i18n";
import { categories, products } from "@/lib/data";
import { site, type Locale } from "@/lib/site";
import { QuoteButton, ThemeToggle } from "./client";

export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/logo-dark.png" alt="ALSAKR" className={`${className} hidden w-auto dark:block`} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/logo-light.png" alt="ALSAKR" className={`${className} w-auto dark:hidden`} />
    </>
  );
}

export default function Header({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const path = usePathname() || `/${locale}/`;
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [mega, setMega] = useState(false);
  const other: Locale = locale === "ar" ? "en" : "ar";
  const switchHref = path.replace(/^\/(ar|en)/, `/${other}`);
  const L = (p: string) => `/${locale}${p}`;

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { setMobile(false); setMega(false); }, [path]);

  const nav = [
    { href: "/industries/", label: t.nav.industries },
    { href: "/automation/", label: t.nav.automation },
    { href: "/services/", label: t.nav.services },
    { href: "/about/", label: t.nav.about },
    { href: "/news/", label: t.nav.news },
    { href: "/contact/", label: t.nav.contact },
  ];
  const active = (href: string) => path.startsWith(L(href));

  return (
    <header className="fixed inset-x-0 top-0 z-[60]">
      <div className="hidden bg-ink-950 text-xs text-steel-400 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <span>{site.address[locale]}</span>
          <div className="flex items-center gap-5">
            <a href={`tel:${site.phones[0].replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-white" dir="ltr"><Phone size={12} />{site.phones[0]}</a>
            <a href={`mailto:${site.emails[0]}`} className="hover:text-white">{site.emails[0]}</a>
          </div>
        </div>
      </div>
      <div className={`transition-all duration-300 ${scrolled || mega ? "glass shadow-lg shadow-black/5" : "dark bg-transparent text-white"}`}>
        <div className="mx-auto flex h-18 max-w-7xl items-center gap-6 px-4 py-3 sm:px-6">
          <Link href={L("/")} aria-label="ALSAKR home" className="shrink-0"><Logo className="h-8 sm:h-9" /></Link>

          <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex" onMouseLeave={() => setMega(false)}>
            <button onMouseEnter={() => setMega(true)} onClick={() => setMega((v) => !v)} aria-expanded={mega}
              className={`flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm xl:px-4 font-medium transition hover:text-brand-500 ${active("/machines") ? "text-brand-500" : ""}`}>
              {t.nav.machines} <ChevronDown size={14} className={`transition ${mega ? "rotate-180" : ""}`} />
            </button>
            {nav.map((n) => (
              <Link key={n.href} href={L(n.href)} onMouseEnter={() => setMega(false)}
                className={`whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition xl:px-4 hover:text-brand-500 ${active(n.href) ? "text-brand-500" : ""}`}>
                {n.label}
              </Link>
            ))}

            <AnimatePresence>
              {mega && (
                <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.18 }}
                  className="surface absolute inset-x-0 top-full border-y border-line shadow-2xl" onMouseEnter={() => setMega(true)}>
                  <div className="mx-auto grid max-w-7xl grid-cols-5 gap-8 px-6 py-8">
                    {categories.map((c) => (
                      <div key={c.id}>
                        <Link href={`${L("/machines/")}?cat=${c.id}`} className="font-display text-sm font-bold text-brand-500">{c.name[locale]}</Link>
                        <p className="mt-1 text-xs text-muted">{c.desc[locale]}</p>
                        <ul className="mt-4 space-y-2">
                          {products.filter((p) => p.category === c.id).map((p) => (
                            <li key={p.slug}><Link href={L(`/machines/${p.slug}/`)} className="text-sm transition hover:text-brand-500">{p.name[locale]}</Link></li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <Link href={L("/machines/")} className="group relative overflow-hidden rounded-2xl bg-ink-900 p-5 text-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/img/liquid-filling.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-700 group-hover:scale-110" />
                      <div className="relative flex h-full flex-col justify-end">
                        <span className="font-display text-lg font-bold">{t.cta.explore}</span>
                        <span className="mt-1 flex items-center gap-1 text-sm text-brand-300">{products.length} {t.machines.results} <ArrowUpRight size={14} className="flip-rtl" /></span>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          <div className="ms-auto flex items-center gap-2 lg:ms-0">
            <Link href={switchHref} onClick={() => { try { localStorage.setItem("lang", other); } catch {} }}
              className="flex h-10 items-center gap-1.5 rounded-full border border-line px-3 text-sm font-medium transition hover:border-brand-500 hover:text-brand-500">
              <Globe size={16} /> <span className="hidden sm:inline">{t.lang}</span>
            </Link>
            <ThemeToggle locale={locale} />
            <QuoteButton locale={locale} className="hidden whitespace-nowrap rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-400 md:inline-flex" />
            <button className="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden" onClick={() => setMobile(true)} aria-label="Menu"><Menu size={18} /></button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.div className="fixed inset-0 z-[70] bg-black/50 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobile(false)}>
            <motion.aside className="surface absolute inset-y-0 end-0 flex w-[min(360px,88vw)] flex-col overflow-y-auto p-6"
              initial={{ x: locale === "ar" ? "-100%" : "100%" }} animate={{ x: 0 }} exit={{ x: locale === "ar" ? "-100%" : "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between">
                <Logo className="h-8" />
                <button onClick={() => setMobile(false)} aria-label="Close" className="rounded-full p-2"><X /></button>
              </div>
              <nav className="mt-8 flex flex-col gap-1">
                <Link href={L("/")} className="rounded-xl px-4 py-3 font-medium hover:bg-brand-500/10">{t.nav.home}</Link>
                <Link href={L("/machines/")} className="rounded-xl px-4 py-3 font-medium hover:bg-brand-500/10">{t.nav.machines}</Link>
                {[...nav, { href: "/gallery/", label: t.nav.gallery }, { href: "/careers/", label: t.nav.careers }].map((n) => (
                  <Link key={n.href} href={L(n.href)} className="rounded-xl px-4 py-3 font-medium hover:bg-brand-500/10">{n.label}</Link>
                ))}
              </nav>
              <div className="mt-auto pt-8"><QuoteButton locale={locale} className="w-full rounded-full bg-brand-500 px-6 py-3 font-semibold text-white" /></div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
