import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Cog, Gauge, ShieldCheck, Wallet, Factory } from "lucide-react";
import { getDict } from "@/lib/i18n";
import { brands, categories, industries, news, products, stats, videos } from "@/lib/data";
import Videos from "@/components/Videos";
import { site, type Locale } from "@/lib/site";
import Hero3D from "@/components/Hero3D";
import { Counter, GlowCard, QuoteButton, Reveal, btnGhost } from "@/components/client";
import { Container, CtaBand, MachineCard, NewsCard, SectionTitle, icons } from "@/components/ui";
import { ContactForm } from "@/components/Forms";

const catImg: Record<string, string> = {
  filling: "/img/fb/expo-filler.jpg", packaging: "/img/vffs.jpg", labelling: "/img/fb/labelling-machine.jpg", "end-of-line": "/img/fb/turnkey-line.jpg",
};

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const t = getDict(locale);
  const L = (p: string) => `/${locale}${p}`;
  const whyIcons = [Wallet, ShieldCheck, Cog, Factory];

  return (
    <>
      {/* HERO */}
      <section className="dark relative min-h-[100svh] overflow-hidden bg-ink-950 text-white">
        <div className="grid-bg absolute inset-0 opacity-70" />
        <div className="absolute -top-32 start-[-10%] h-[520px] w-[520px] rounded-full bg-brand-500/25 blur-[140px]" />
        <div className="absolute bottom-0 end-[-10%] h-[420px] w-[420px] rounded-full bg-brand-700/30 blur-[120px]" />
        <div className="absolute inset-0 lg:start-[38%]" aria-hidden>
          <Hero3D />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/40 lg:via-transparent lg:to-transparent lg:bg-gradient-to-r lg:from-ink-950 lg:via-ink-950/50 lg:to-transparent rtl:lg:bg-gradient-to-l" />

        <Container className="relative flex min-h-[100svh] flex-col justify-center pb-10 pt-32 lg:pb-40 lg:pt-36">
          <div className="max-w-2xl">
            <Reveal>
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-brand-300">
                <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" /></span>
                {t.hero.badge}
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display mt-6 text-5xl font-bold leading-[1.08] sm:text-6xl lg:text-7xl">
                {t.hero.title1}
                <span className="text-gradient block">{t.hero.title2}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}><p className="mt-6 max-w-xl text-lg leading-8 text-steel-400">{t.hero.sub}</p></Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap gap-3">
                <QuoteButton locale={locale} />
                <Link href={L("/machines/")} className={`${btnGhost} border-white/20 text-white`}>{t.cta.explore} <ArrowUpRight size={16} className="flip-rtl" /></Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.45} className="mt-12 lg:absolute lg:inset-x-6 lg:bottom-8 lg:mt-0">
            <div className="glass mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-3xl md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label.en} className="px-6 py-5">
                  <div className="font-display text-3xl font-bold text-white"><Counter to={s.value} suffix={s.suffix} /></div>
                  <div className="mt-1 text-xs text-steel-400">{s.label[locale]}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
        <div className="glass absolute end-6 top-32 hidden items-center gap-2 rounded-full px-4 py-2 text-xs lg:flex">
          <Gauge size={14} className="text-brand-300" /> {t.hero.live} · 6000 BPH
        </div>
      </section>

      {/* BRANDS MARQUEE */}
      <section className="border-y border-line py-8" aria-label={t.sections.brands}>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]" dir="ltr">
          <div className="flex w-max animate-marquee gap-16 pe-16">
            {[...brands, ...brands].map((b, i) => (
              <span key={i} className="font-display whitespace-nowrap text-2xl font-bold tracking-wider text-muted/60 transition hover:text-brand-500">{b.name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24">
        <Container>
          <SectionTitle kicker={t.why.kicker} title={t.why.title} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.why.items.map((w, i) => {
              const I = whyIcons[i];
              return (
                <Reveal key={w.t} delay={i * 0.08}>
                  <GlowCard className="h-full rounded-3xl">
                    <div className="surface h-full rounded-3xl border border-line p-7">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/10 text-brand-500"><I size={22} /></div>
                      <h3 className="font-display mt-6 text-lg font-bold">{w.t}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted">{w.d}</p>
                    </div>
                  </GlowCard>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CATEGORIES BENTO */}
      <section className="py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle kicker={t.sections.categories} title={t.sections.categoriesT} />
            <Link href={L("/machines/")} className={btnGhost}>{t.cta.all} <ArrowUpRight size={16} className="flip-rtl" /></Link>
          </div>
          <div className="mt-14 grid auto-rows-[260px] gap-5 md:grid-cols-3">
            {categories.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.08} className={i === 0 ? "md:col-span-2 md:row-span-2" : i === 3 ? "md:col-span-2" : ""}>
                <Link href={`${L("/machines/")}?cat=${c.id}`} className="group relative block h-full overflow-hidden rounded-3xl bg-ink-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={catImg[c.id]} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-1000 group-hover:scale-110 group-hover:opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7 text-white">
                    <div>
                      <span className="text-xs font-semibold text-brand-300">{products.filter((p) => p.category === c.id).length} {t.machines.results}</span>
                      <h3 className={`font-display mt-1 font-bold ${i === 0 ? "text-3xl" : "text-xl"}`}>{c.name[locale]}</h3>
                      <p className="mt-1 text-sm text-white/70">{c.desc[locale]}</p>
                    </div>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 backdrop-blur transition group-hover:bg-brand-500"><ArrowUpRight size={18} className="flip-rtl" /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FEATURED */}
      <section className="py-24">
        <Container>
          <SectionTitle kicker={t.sections.featured} title={t.sections.featuredT} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.filter((p) => p.featured).slice(0, 6).map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}><MachineCard p={p} locale={locale} /></Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* INDUSTRIES */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100 py-24 dark:from-ink-900 dark:via-ink-950 dark:to-ink-900">
        <div className="grid-bg absolute inset-0 opacity-50" />
        <Container className="relative">
          <SectionTitle kicker={t.sections.industries} title={t.sections.industriesT} />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => {
              const I = icons[ind.icon];
              return (
                <Reveal key={ind.id} delay={(i % 3) * 0.08}>
                  <Link href={`${L("/machines/")}?industry=${ind.id}`} className="group relative block h-full overflow-hidden rounded-3xl surface border border-line p-7 shadow-sm transition hover:-translate-y-1 hover:border-brand-500/60 hover:shadow-xl hover:shadow-brand-500/10">
                    <div className="flex items-center justify-between">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/10 text-brand-600 dark:text-brand-300"><I size={22} /></div>
                      <ArrowUpRight size={18} className="flip-rtl text-muted transition group-hover:text-brand-600 dark:text-brand-300" />
                    </div>
                    <h3 className="font-display mt-6 text-xl font-bold">{ind.name[locale]}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{ind.desc[locale]}</p>
                    <p className="mt-4 text-xs font-medium text-brand-600 dark:text-brand-300">{ind.examples[locale]}</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <Container>
          <SectionTitle kicker={t.sections.process} title={t.sections.processT} center />
          <div className="relative mt-16 grid gap-8 md:grid-cols-5">
            <div className="absolute inset-x-[10%] top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent md:block" />
            {t.process.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.1} className="relative text-center">
                <div className="surface mx-auto grid h-14 w-14 place-items-center rounded-full border-2 border-brand-500 font-display text-lg font-bold text-brand-500 shadow-lg shadow-brand-500/20">{i + 1}</div>
                <h3 className="font-display mt-5 font-bold">{s.t}</h3>
                <p className="mt-1 text-sm text-muted">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ABOUT TEASER */}
      <section className="py-24">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-line bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/project-2.jpg" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="glass absolute -bottom-6 end-6 rounded-2xl p-5 shadow-xl">
              <div className="font-display text-4xl font-bold text-brand-500">1995</div>
              <div className="text-xs text-muted">{t.about.steps[0].t}</div>
            </div>
          </Reveal>
          <div>
            <SectionTitle kicker={t.nav.about} title={t.about.sub} />
            <Reveal delay={0.1}><p className="mt-6 leading-8 text-muted">{t.about.story}</p></Reveal>
            <Reveal delay={0.15}>
              <ul className="mt-6 space-y-3">
                {t.about.u.map((u) => <li key={u} className="flex items-center gap-3 font-medium"><BadgeCheck size={20} className="text-brand-500" />{u}</li>)}
              </ul>
            </Reveal>
            <Reveal delay={0.2}><Link href={L("/about/")} className={`${btnGhost} mt-8`}>{t.cta.readMore} <ArrowUpRight size={16} className="flip-rtl" /></Link></Reveal>
          </div>
        </Container>
      </section>

      {/* VIDEOS */}
      <section className="py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle kicker={t.sections.videos} title={t.sections.videosT} />
            <Link href={L("/gallery/")} className={btnGhost}>{t.cta.all} <ArrowUpRight size={16} className="flip-rtl" /></Link>
          </div>
          <Reveal className="mt-14">
            <Videos items={videos.slice(0, 3)} locale={locale} />
          </Reveal>
        </Container>
      </section>

      {/* CLIENTS */}
      <section className="py-16">
        <Container>
          <SectionTitle kicker={t.sections.clients} title={t.sections.clientsT} center />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {["/img/client-1.jpg", "/img/client-2.jpg", "/img/client-3.jpg"].map((c) => (
              <div key={c} className="overflow-hidden rounded-2xl border border-line bg-white p-4 grayscale transition hover:grayscale-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c} alt="" loading="lazy" className="mx-auto h-40 w-full object-contain" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* NEWS */}
      <section className="py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle kicker={t.sections.news} title={t.sections.newsT} />
            <Link href={L("/news/")} className={btnGhost}>{t.cta.all} <ArrowUpRight size={16} className="flip-rtl" /></Link>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.slice(0, 3).map((n, i) => <Reveal key={n.slug} delay={i * 0.08}><NewsCard n={n} locale={locale} /></Reveal>)}
          </div>
        </Container>
      </section>

      <CtaBand locale={locale} />

      {/* CONTACT + MAP */}
      <section className="pb-24">
        <Container className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="surface h-full rounded-[2rem] border border-line p-8 sm:p-10">
              <h2 className="font-display text-3xl font-bold">{t.contact.title}</h2>
              <p className="mt-2 text-muted">{t.contact.sub}</p>
              <div className="mt-8"><ContactForm locale={locale} /></div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-line">
              <iframe title="Map" src={site.mapEmbed} className="h-full min-h-[420px] w-full dark:invert-[0.9] dark:hue-rotate-180" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
