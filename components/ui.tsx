import Link from "next/link";
import {
  ArrowUpRight, Droplets, Factory, FlaskConical, LifeBuoy, MessagesSquare, Package, PencilRuler, Pill,
  Sparkles, Sprout, Wheat, Wrench, type LucideIcon,
} from "lucide-react";
import { getDict } from "@/lib/i18n";
import type { Product, news as newsData } from "@/lib/data";
import { site, type Locale } from "@/lib/site";
import { GlowCard, QuoteButton, Reveal, btnGhost } from "./client";

export const icons: Record<string, LucideIcon> = {
  Droplets, Factory, FlaskConical, LifeBuoy, MessagesSquare, Package, PencilRuler, Pill, Sparkles, Sprout, Wheat, Wrench,
};

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function SectionTitle({ kicker, title, sub, center }: { kicker: string; title: string; sub?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-500">
        <span className="h-px w-8 bg-brand-500" /> {kicker}
      </span>
      <h2 className="font-display mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-base leading-8 text-muted">{sub}</p>}
    </Reveal>
  );
}

export function PageHero({ title, sub, img, crumbs }: { title: string; sub?: string; img?: string; crumbs?: { href: string; label: string }[] }) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-20 pt-40 text-white">
      {img && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-950/70 to-ink-950" />
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="absolute -top-40 start-1/3 h-96 w-96 rounded-full bg-brand-500/30 blur-[120px]" />
      <Container className="relative">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-sm text-steel-400">
            {crumbs.map((c, i) => (
              <span key={c.href} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                <Link href={c.href} className="hover:text-white">{c.label}</Link>
              </span>
            ))}
          </nav>
        )}
        <Reveal><h1 className="font-display max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{title}</h1></Reveal>
        {sub && <Reveal delay={0.1}><p className="mt-5 max-w-2xl text-lg leading-8 text-steel-400">{sub}</p></Reveal>}
      </Container>
    </section>
  );
}

export function MachineCard({ p, locale }: { p: Product; locale: Locale }) {
  const t = getDict(locale);
  return (
    <GlowCard className="group h-full rounded-3xl">
      <Link href={`/${locale}/machines/${p.slug}/`} className="surface flex h-full flex-col overflow-hidden rounded-3xl border border-line transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-500/10">
        <div className="relative aspect-[4/3] overflow-hidden bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.img} alt={p.name[locale]} loading="lazy" className="h-full w-full object-contain p-4 transition duration-700 group-hover:scale-105" />
          <span className="absolute start-4 top-4 rounded-full bg-ink-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            {p.stats[0].value}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-bold leading-snug">{p.name[locale]}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{p.short[locale]}</p>
          <div className="mt-auto flex items-center justify-between pt-5 text-sm font-semibold text-brand-500">
            {t.cta.details}
            <span className="grid h-9 w-9 place-items-center rounded-full border border-line transition group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white">
              <ArrowUpRight size={16} className="flip-rtl" />
            </span>
          </div>
        </div>
      </Link>
    </GlowCard>
  );
}

export function NewsCard({ n, locale }: { n: (typeof newsData)[number]; locale: Locale }) {
  const t = getDict(locale);
  return (
    <article className="surface group flex h-full flex-col overflow-hidden rounded-3xl border border-line">
      <div className="relative aspect-[16/10] overflow-hidden bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={n.img} alt="" loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute start-4 top-4 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white">{t.pages.types[n.type]}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <time className="text-xs text-muted" dateTime={n.date}>
          {new Date(n.date).toLocaleDateString(locale === "ar" ? "ar-EG" : "en-GB", { day: "numeric", month: "long", year: "numeric" })}
        </time>
        <h3 className="font-display mt-2 text-lg font-bold leading-snug">{n.title[locale]}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{n.excerpt[locale]}</p>
      </div>
    </article>
  );
}

export function CtaBand({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-500 to-ink-800 p-10 text-white sm:p-16">
            <div className="grid-bg absolute inset-0 opacity-40" />
            <div className="absolute -end-20 -top-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">{t.sections.ctaT}</h2>
                <p className="mt-4 text-white/80">{t.sections.ctaD}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <QuoteButton locale={locale} className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-700 shadow-xl transition hover:-translate-y-0.5" />
                <a href={site.catalog} download className={`${btnGhost} border-white/40 text-white hover:border-white hover:text-white`}>{t.cta.catalog}</a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
