import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Briefcase, Check, Clock, Download, Mail, MapPin, Phone, Plus, Target, Eye } from "lucide-react";
import { getDict } from "@/lib/i18n";
import { brands, categories, exhibitions, gallery, industries, jobs, news, products, services, stats, videos } from "@/lib/data";
import Videos from "@/components/Videos";
import { specs } from "@/lib/specs";
import { site, waLink, type Locale } from "@/lib/site";
import { Counter, Gallery, GlowCard, QuoteButton, Reveal, btnGhost, btnPrimary } from "@/components/client";
import { Container, CtaBand, MachineCard, NewsCard, PageHero, SectionTitle, icons } from "@/components/ui";
import MachinesExplorer from "@/components/MachinesExplorer";
import { ContactForm } from "@/components/Forms";

type P = { locale: Locale };
const crumbs = (locale: Locale, ...rest: { href: string; label: string }[]) => [
  { href: `/${locale}/`, label: getDict(locale).nav.home }, ...rest,
];

export function AboutPage({ locale }: P) {
  const t = getDict(locale);
  return (
    <>
      <PageHero title={t.about.title} sub={t.about.sub} img="/img/factory.jpg" crumbs={crumbs(locale, { href: `/${locale}/about/`, label: t.nav.about })} />
      <section className="py-24">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/fb/expo-filler.jpg" alt="" className="aspect-[4/3] w-full rounded-[2rem] border border-line object-cover" />
          </Reveal>
          <div>
            <SectionTitle kicker="ALSAKR" title={t.about.sub} />
            <Reveal delay={0.1}><p className="mt-6 text-lg leading-9 text-muted">{t.about.story}</p></Reveal>
          </div>
        </Container>
      </section>
      <section className="pb-24">
        <Container className="grid gap-6 md:grid-cols-2">
          {[[Target, t.about.mission, t.about.missionD], [Eye, t.about.vision, t.about.visionD]].map(([I, h, d], i) => {
            const Icon = I as typeof Target;
            return (
              <Reveal key={h as string} delay={i * 0.1}>
                <GlowCard className="h-full rounded-3xl">
                  <div className="surface h-full rounded-3xl border border-line p-8">
                    <Icon className="text-brand-500" size={28} />
                    <h3 className="font-display mt-5 text-2xl font-bold">{h as string}</h3>
                    <p className="mt-3 leading-8 text-muted">{d as string}</p>
                  </div>
                </GlowCard>
              </Reveal>
            );
          })}
        </Container>
      </section>
      <section className="bg-gradient-to-r from-brand-600 to-brand-500 py-20 text-white">
        <Container className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label.en} className="text-center">
              <div className="font-display text-5xl font-bold text-white"><Counter to={s.value} suffix={s.suffix} /></div>
              <div className="mt-2 text-sm text-white/80">{s.label[locale]}</div>
            </div>
          ))}
        </Container>
      </section>
      <section className="py-24">
        <Container>
          <SectionTitle kicker={t.about.timeline} title={t.about.timeline} center />
          <ol className="relative mx-auto mt-16 max-w-3xl border-s-2 border-brand-500/30">
            {t.about.steps.map((s, i) => (
              <Reveal key={s.y} delay={i * 0.08}>
                <li className="mb-10 ms-8">
                  <span className="absolute -start-[9px] mt-1.5 h-4 w-4 rounded-full border-4 border-[var(--bg)] bg-brand-500" />
                  <div className="font-display text-2xl font-bold text-brand-500">{s.y}</div>
                  <p className="mt-1 text-lg">{s.t}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>
      <CtaBand locale={locale} />
    </>
  );
}

export function MachinesPage({ locale }: P) {
  const t = getDict(locale);
  return (
    <>
      <PageHero title={t.machines.title} sub={t.machines.sub} img="/img/drums.jpg" crumbs={crumbs(locale, { href: `/${locale}/machines/`, label: t.nav.machines })} />
      <section className="py-16"><Container><MachinesExplorer locale={locale} /></Container></section>
      <CtaBand locale={locale} />
    </>
  );
}

export function MachineDetailPage({ locale, slug }: P & { slug: string }) {
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();
  const t = getDict(locale);
  const cat = categories.find((c) => c.id === p.category)!;
  const related = products.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3);
  const sp = specs[p.slug];
  const ar = locale === "ar";
  const productLd = {
    "@context": "https://schema.org", "@type": "Product", name: p.name.en, description: p.desc.en, image: p.img,
    brand: { "@type": "Brand", name: "ALSAKR" }, manufacturer: { "@type": "Organization", name: site.legal.en },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }} />
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 pb-16 pt-36 text-white">
        <div className="grid-bg absolute inset-0 opacity-60" />
        <div className="absolute -top-40 end-0 h-[500px] w-[500px] rounded-full bg-white/20 blur-[140px]" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <nav className="mb-5 flex flex-wrap gap-2 text-sm text-white/75">
              <Link href={`/${locale}/`} className="hover:text-white">{t.nav.home}</Link><span>/</span>
              <Link href={`/${locale}/machines/?cat=${cat.id}`} className="hover:text-white">{cat.name[locale]}</Link>
            </nav>
            <Reveal><h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">{p.name[locale]}</h1></Reveal>
            <Reveal delay={0.1}><p className="mt-5 text-lg leading-8 text-white/90">{p.desc[locale]}</p></Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {p.stats.map((s) => (
                  <div key={s.label.en} className="rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur">
                    <div className="text-xs text-white/75">{s.label[locale]}</div>
                    <div className="font-display mt-1 font-bold text-white" dir="ltr">{s.value}</div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <QuoteButton locale={locale} machine={p.name[locale]} />
                <a href={waLink(`${p.name[locale]}`)} target="_blank" rel="noopener" className={`${btnGhost} border-white/20 text-white`}>{t.cta.whatsapp}</a>
                <a href={site.catalog} download className={`${btnGhost} border-white/20 text-white`}><Download size={16} /> {t.cta.catalog}</a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-white p-6 shadow-2xl shadow-brand-500/20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.img} alt={p.name[locale]} className="h-full w-full animate-float object-contain" />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-8 lg:grid-cols-3">
          <div className="surface rounded-3xl border border-line p-8 lg:col-span-2">
            <h2 className="font-display text-2xl font-bold">{t.machines.specs}</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {p.specs.map((s) => (
                <li key={s.en} className="flex gap-3 text-sm leading-6"><Check size={18} className="mt-0.5 shrink-0 text-brand-500" />{s[locale]}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            {p.options.length > 0 && (
              <div className="surface rounded-3xl border border-line p-8">
                <h2 className="font-display text-xl font-bold">{t.machines.options}</h2>
                <ul className="mt-5 space-y-3">
                  {p.options.map((o) => <li key={o.en} className="flex gap-3 text-sm"><Plus size={18} className="shrink-0 text-brand-500" />{o[locale]}</li>)}
                </ul>
              </div>
            )}
            <div className="surface rounded-3xl border border-line p-8">
              <h2 className="font-display text-xl font-bold">{t.machines.industries}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.industries.map((id) => {
                  const ind = industries.find((x) => x.id === id)!;
                  return <Link key={id} href={`/${locale}/machines/?industry=${id}`} className="rounded-full border border-line px-3 py-1.5 text-xs font-medium hover:border-brand-500 hover:text-brand-500">{ind.name[locale]}</Link>;
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {sp && (
        <section className="pb-20">
          <Container className="grid gap-8 lg:grid-cols-5">
            <div className="surface overflow-hidden rounded-3xl border border-line lg:col-span-3">
              <h2 className="font-display border-b border-line px-8 py-5 text-2xl font-bold">{ar ? "البيانات الفنية" : "Technical data"}</h2>
              <table className="w-full text-sm">
                <tbody>
                  {sp.table.map((r, i) => (
                    <tr key={r.k.en} className={i % 2 ? "" : "bg-brand-500/[0.04]"}>
                      <th scope="row" className="w-2/5 px-8 py-3 text-start font-medium text-muted">{r.k[locale]}</th>
                      <td className="px-8 py-3 font-semibold" dir="ltr" style={{ textAlign: ar ? "right" : "left" }}>{r.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="border-t border-line px-8 py-3 text-xs text-muted">{ar ? "* القيم تقريبية وتختلف حسب الموديل والمنتج، ويتم تأكيدها في عرض السعر." : "* Typical values; they vary by model and product and are confirmed in your quotation."}</p>
            </div>
            <div className="space-y-8 lg:col-span-2">
              <div className="surface rounded-3xl border border-line p-8">
                <h2 className="font-display text-xl font-bold">{ar ? "كيف تعمل الماكينة" : "How it works"}</h2>
                <ol className="mt-6 space-y-5">
                  {sp.steps.map((st, i) => (
                    <li key={st.en} className="flex gap-4">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-500 text-sm font-bold text-white">{i + 1}</span>
                      <span className="pt-1 text-sm leading-6">{st[locale]}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="rounded-3xl bg-gradient-to-br from-brand-50 to-white p-8 ring-1 ring-brand-100 dark:from-brand-500/10 dark:to-transparent dark:ring-white/10">
                <h2 className="font-display text-xl font-bold">{ar ? "تطبيقات نموذجية" : "Typical applications"}</h2>
                <p className="mt-3 text-sm leading-7 text-muted">{sp.apps[locale]}</p>
              </div>
            </div>
          </Container>
          <Container className="mt-8">
            <div className="surface rounded-3xl border border-line p-8">
              <h2 className="font-display text-xl font-bold">{ar ? "أسئلة شائعة" : "Frequently asked questions"}</h2>
              <div className="mt-4 divide-y divide-[var(--line)]">
                {sp.faq.map((f) => (
                  <details key={f.q.en} className="group py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                      {f.q[locale]}
                      <Plus size={18} className="shrink-0 text-brand-500 transition group-open:rotate-45" />
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-muted">{f.a[locale]}</p>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {p.gallery.length > 1 && (
        <section className="pb-20">
          <Container>
            <h2 className="font-display mb-8 text-2xl font-bold">{t.machines.gallery}</h2>
            <Gallery images={p.gallery} className="columns-2 gap-4 md:columns-4" />
          </Container>
        </section>
      )}

      {videos.some((v) => v.product === p.slug) && (
        <section className="pb-20">
          <Container>
            <h2 className="font-display mb-8 text-2xl font-bold">{t.sections.videosT}</h2>
            <Videos items={videos.filter((v) => v.product === p.slug).slice(0, 3)} locale={locale} />
          </Container>
        </section>
      )}

      <section className="pb-8">
        <Container>
          <div className="glass flex flex-col items-center justify-between gap-6 rounded-3xl p-8 sm:flex-row">
            <p className="font-display text-xl font-bold">{t.machines.doubt}</p>
            <QuoteButton locale={locale} machine={p.name[locale]} />
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-20">
          <Container>
            <h2 className="font-display mb-10 text-3xl font-bold">{t.machines.related}</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => <MachineCard key={r.slug} p={r} locale={locale} />)}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

export function IndustriesPage({ locale }: P) {
  const t = getDict(locale);
  return (
    <>
      <PageHero title={t.nav.industries} sub={t.pages.industriesSub} img="/img/project-2.jpg" crumbs={crumbs(locale, { href: `/${locale}/industries/`, label: t.nav.industries })} />
      <section className="py-24">
        <Container className="space-y-6">
          {industries.map((ind, i) => {
            const I = icons[ind.icon];
            const list = products.filter((p) => p.industries.includes(ind.id)).slice(0, 4);
            return (
              <Reveal key={ind.id}>
                <div className={`surface grid overflow-hidden rounded-[2rem] border border-line lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="relative min-h-[280px] bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ind.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                  <div className="p-8 sm:p-12">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/10 text-brand-500"><I size={22} /></div>
                    <h2 className="font-display mt-5 text-3xl font-bold">{ind.name[locale]}</h2>
                    <p className="mt-3 leading-8 text-muted">{ind.desc[locale]}</p>
                    <p className="mt-3 text-sm font-medium text-brand-500">{ind.examples[locale]}</p>
                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {list.map((p) => (
                        <li key={p.slug}><Link href={`/${locale}/machines/${p.slug}/`} className="flex items-center gap-2 text-sm hover:text-brand-500"><ArrowUpRight size={14} className="flip-rtl text-brand-500" />{p.name[locale]}</Link></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </Container>
      </section>
      <CtaBand locale={locale} />
    </>
  );
}

export function AutomationPage({ locale }: P) {
  const t = getDict(locale);
  return (
    <>
      <PageHero title={t.nav.automation} sub={t.pages.automationSub} img="/img/fb/control-panel.jpg" crumbs={crumbs(locale, { href: `/${locale}/automation/`, label: t.nav.automation })} />
      <section className="py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {brands.filter((b) => b.img).map((b, i) => (
              <Reveal key={b.name} delay={(i % 2) * 0.08}>
                <GlowCard className="h-full rounded-3xl">
                  <div className="surface grid h-full overflow-hidden rounded-3xl border border-line sm:grid-cols-[200px_1fr]">
                    <div className="grid place-items-center bg-white p-6">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={b.img} alt={b.name} loading="lazy" className="max-h-40 object-contain" />
                    </div>
                    <div className="p-7">
                      <h2 className="font-display text-2xl font-bold">{b.name}</h2>
                      <p className="mt-3 text-sm leading-7 text-muted">{b.desc[locale]}</p>
                      <QuoteButton locale={locale} machine={b.name} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-500">{t.cta.quote} <ArrowUpRight size={14} className="flip-rtl" /></QuoteButton>
                    </div>
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {brands.filter((b) => !b.img).map((b) => (
              <div key={b.name} className="surface rounded-2xl border border-line p-5 text-center transition hover:border-brand-500">
                <div className="font-display text-lg font-bold">{b.name}</div>
                <div className="mt-1 text-xs text-muted">{b.desc[locale]}</div>
              </div>
            ))}
          </div>
          <Reveal>
            <a href={site.catalog} download className="group mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-brand-600 to-brand-500 p-8 text-white sm:flex-row">
              <div>
                <h3 className="font-display text-2xl font-bold">{t.pages.catalog}</h3>
                <p className="mt-1 text-white/85">{t.pages.catalogD}</p>
              </div>
              <span className={btnPrimary}><Download size={16} /> {t.cta.catalog}</span>
            </a>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

export function ServicesPage({ locale }: P) {
  const t = getDict(locale);
  return (
    <>
      <PageHero title={t.nav.services} sub={t.pages.servicesSub} img="/img/project-1.jpg" crumbs={crumbs(locale, { href: `/${locale}/services/`, label: t.nav.services })} />
      <section className="py-24">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const I = icons[s.icon];
            return (
              <Reveal key={s.title.en} delay={(i % 3) * 0.08}>
                <GlowCard className="h-full rounded-3xl">
                  <div className="surface h-full rounded-3xl border border-line p-8">
                    <div className="flex items-center justify-between">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500/10 text-brand-500"><I size={26} /></div>
                      <span className="font-display text-4xl font-bold text-brand-500/15">0{i + 1}</span>
                    </div>
                    <h2 className="font-display mt-6 text-xl font-bold">{s.title[locale]}</h2>
                    <p className="mt-3 text-sm leading-7 text-muted">{s.desc[locale]}</p>
                  </div>
                </GlowCard>
              </Reveal>
            );
          })}
        </Container>
      </section>
      <CtaBand locale={locale} />
    </>
  );
}

export function GalleryPage({ locale }: P) {
  const t = getDict(locale);
  return (
    <>
      <PageHero title={t.nav.gallery} sub={t.pages.gallerySub} img="/img/fb/oil-line.jpg" crumbs={crumbs(locale, { href: `/${locale}/gallery/`, label: t.nav.gallery })} />
      <section className="pt-20">
        <Container>
          <SectionTitle kicker={t.sections.videos} title={t.sections.videosT} />
          <div className="mt-10"><Videos items={videos} locale={locale} /></div>
        </Container>
      </section>
      <Exhibitions locale={locale} />
      <section className="py-20">
        <Container><Gallery images={gallery} className="columns-2 gap-4 md:columns-3 lg:columns-4" /></Container>
      </section>
    </>
  );
}

function Exhibitions({ locale }: P) {
  const t = getDict(locale);
  return (
    <section className="pt-20">
      <Container>
        <SectionTitle kicker={t.pages.events} title={t.pages.events} />
        {exhibitions.map((e) => (
          <div key={e.name.en} className="surface mt-10 overflow-hidden rounded-[2rem] border border-line">
            <div className="flex flex-wrap items-end justify-between gap-4 p-8">
              <div>
                <span className="text-sm font-semibold text-brand-500">{e.date[locale]} · {e.place[locale]}</span>
                <h3 className="font-display mt-1 text-2xl font-bold">{e.name[locale]}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-muted">{e.desc[locale]}</p>
              </div>
            </div>
            <div className="px-8 pb-8"><Gallery images={e.photos} className="columns-2 gap-4 md:columns-3" /></div>
          </div>
        ))}
      </Container>
    </section>
  );
}

export function NewsPage({ locale }: P) {
  const t = getDict(locale);
  return (
    <>
      <PageHero title={t.nav.news} sub={t.pages.newsSub} img="/img/fb/expo/stand-3.jpg" crumbs={crumbs(locale, { href: `/${locale}/news/`, label: t.nav.news })} />
      <section className="py-20">
        <Container className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((n, i) => <Reveal key={n.slug} delay={(i % 3) * 0.08}><NewsCard n={n} locale={locale} /></Reveal>)}
        </Container>
      </section>
      <Exhibitions locale={locale} />
      <div className="pb-20" />
    </>
  );
}

export function CareersPage({ locale }: P) {
  const t = getDict(locale);
  return (
    <>
      <PageHero title={t.nav.careers} sub={t.pages.careersSub} img="/img/factory.jpg" crumbs={crumbs(locale, { href: `/${locale}/careers/`, label: t.nav.careers })} />
      <section className="py-20">
        <Container className="max-w-4xl">
          <h2 className="font-display text-3xl font-bold">{t.pages.careersOpen}</h2>
          <div className="mt-8 space-y-4">
            {jobs.map((j) => (
              <div key={j.title.en} className="surface flex flex-col justify-between gap-4 rounded-2xl border border-line p-6 transition hover:border-brand-500 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/10 text-brand-500"><Briefcase size={20} /></div>
                  <div>
                    <h3 className="font-display font-bold">{j.title[locale]}</h3>
                    <p className="text-sm text-muted">{j.type[locale]}</p>
                  </div>
                </div>
                <a href={`mailto:${site.emails[0]}?subject=${encodeURIComponent(j.title.en)}`} className={btnPrimary}>{t.cta.apply}</a>
              </div>
            ))}
          </div>
          <p className="mt-10 text-muted">{t.pages.careersCv} <a href={`mailto:${site.emails[0]}`} className="font-semibold text-brand-500">{site.emails[0]}</a></p>
        </Container>
      </section>
    </>
  );
}

export function ContactPage({ locale }: P) {
  const t = getDict(locale);
  const cards = [
    { I: MapPin, h: t.contact.address, v: [site.address[locale]] },
    { I: Phone, h: t.contact.phones, v: site.phones, href: (x: string) => `tel:${x.replace(/\s/g, "")}`, ltr: true },
    { I: Mail, h: t.contact.emails, v: site.emails, href: (x: string) => `mailto:${x}` },
    { I: Clock, h: t.contact.hours, v: [site.hours[locale]] },
  ];
  return (
    <>
      <PageHero title={t.contact.title} sub={t.contact.sub} img="/img/siemens-panel.jpg" crumbs={crumbs(locale, { href: `/${locale}/contact/`, label: t.nav.contact })} />
      <section className="py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map(({ I, h, v, href, ltr }) => (
              <div key={h} className="surface rounded-3xl border border-line p-6">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/10 text-brand-500"><I size={20} /></div>
                <h2 className="font-display mt-4 font-bold">{h}</h2>
                {v.map((x) => href
                  ? <a key={x} href={href(x)} dir={ltr ? "ltr" : undefined} className="mt-1 block text-sm text-muted hover:text-brand-500">{x}</a>
                  : <p key={x} className="mt-1 text-sm text-muted">{x}</p>)}
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="surface rounded-[2rem] border border-line p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold">{t.contact.quoteTitle}</h2>
              <p className="mt-1 text-sm text-muted">{t.contact.quoteSub}</p>
              <div className="mt-6"><ContactForm locale={locale} /></div>
            </div>
            <div className="min-h-[460px] overflow-hidden rounded-[2rem] border border-line">
              <iframe title="Map" src={site.mapEmbed} className="h-full min-h-[460px] w-full dark:invert-[0.9] dark:hue-rotate-180" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
