import Link from "next/link";
import { Facebook, Mail, MapPin, Phone, Youtube, Twitter, Download } from "lucide-react";
import { getDict } from "@/lib/i18n";
import { products } from "@/lib/data";
import { site, type Locale } from "@/lib/site";
import { Logo } from "./Header";

export default function Footer({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const L = (p: string) => `/${locale}${p}`;
  const links = [
    ["/about/", t.nav.about], ["/industries/", t.nav.industries], ["/automation/", t.nav.automation], ["/services/", t.nav.services],
    ["/gallery/", t.nav.gallery], ["/news/", t.nav.news], ["/careers/", t.nav.careers], ["/contact/", t.nav.contact],
  ];
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-950 text-steel-400">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="dark"><Logo className="h-10" /></div>
          <p className="mt-5 text-sm leading-7">{t.footer.about}</p>
          <div className="mt-6 flex gap-3">
            {[
              [site.social.facebook, Facebook, "Facebook"],
              [site.social.youtube, Youtube, "YouTube"],
              [site.social.twitter, Twitter, "X"],
            ].map(([href, Icon, label]) => {
              const I = Icon as typeof Facebook;
              return (
                <a key={label as string} href={href as string} target="_blank" rel="noopener" aria-label={label as string}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition hover:border-brand-500 hover:bg-brand-500 hover:text-white">
                  <I size={16} />
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <h3 className="font-display font-bold text-white">{t.footer.machines}</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {products.slice(0, 7).map((p) => <li key={p.slug}><Link href={L(`/machines/${p.slug}/`)} className="hover:text-brand-400">{p.name[locale]}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="font-display font-bold text-white">{t.footer.links}</h3>
          <ul className="mt-5 grid grid-cols-2 gap-2.5 text-sm">
            {links.map(([h, l]) => <li key={h}><Link href={L(h)} className="hover:text-brand-400">{l}</Link></li>)}
          </ul>
          <a href={site.catalog} download className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white hover:border-brand-500">
            <Download size={14} /> {t.cta.catalog}
          </a>
        </div>
        <div>
          <h3 className="font-display font-bold text-white">{t.footer.contact}</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-brand-400" />{site.address[locale]}</li>
            {site.phones.map((p) => (
              <li key={p} className="flex gap-3"><Phone size={18} className="shrink-0 text-brand-400" /><a dir="ltr" href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-white">{p}</a></li>
            ))}
            {site.emails.map((e) => (
              <li key={e} className="flex gap-3"><Mail size={18} className="shrink-0 text-brand-400" /><a href={`mailto:${e}`} className="hover:text-white">{e}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs sm:flex-row">
          <span>© {new Date().getFullYear()} {site.legal[locale]}. {t.footer.rights}</span>
          <span className="font-display tracking-widest text-steel-400/60">TOP GROUP · AL SAKR MACHINES</span>
        </div>
      </div>
    </footer>
  );
}
