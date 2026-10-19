"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { getDict } from "@/lib/i18n";
import { products } from "@/lib/data";
import { site, waLink, type Locale } from "@/lib/site";

const field =
  "w-full rounded-xl border border-line bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-muted/70 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15";

type Values = Record<string, string>;

function compose(values: Values, labels: Record<string, string>) {
  return Object.entries(values)
    .filter(([, v]) => v.trim())
    .map(([k, v]) => `${labels[k] ?? k}: ${v}`)
    .join("\n");
}

function useSubmit(locale: Locale, subject: string) {
  const t = getDict(locale).contact;
  const [sent, setSent] = useState(false);
  const labels: Record<string, string> = {
    name: t.name, company: t.company, phone: t.phone, email: t.email, machine: t.machine,
    product: t.product, capacity: t.capacity, message: t.message,
  };
  const submit = (values: Values, via: "wa" | "mail") => {
    const body = `${subject}\n\n${compose(values, labels)}`;
    const url = via === "wa"
      ? waLink(body)
      : `mailto:${site.emails[1]}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener");
    setSent(true);
  };
  return { submit, sent, t };
}

function Actions({ locale, onMail }: { locale: Locale; onMail: () => void }) {
  const c = getDict(locale).cta;
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button type="submit" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-400">
        <Send size={16} className="flip-rtl" /> {c.send}
      </button>
      <button type="button" onClick={onMail} className="inline-flex items-center justify-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold transition hover:border-brand-500 hover:text-brand-500">
        <Mail size={16} /> {c.email}
      </button>
    </div>
  );
}

const read = (form: HTMLFormElement) => Object.fromEntries(new FormData(form).entries()) as Values;

export function QuoteForm({ locale, machine }: { locale: Locale; machine?: string }) {
  const { submit, sent, t } = useSubmit(locale, locale === "ar" ? "طلب عرض سعر" : "Quote request");
  return (
    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); submit(read(e.currentTarget), "wa"); }}>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder={t.name} aria-label={t.name} className={field} />
        <input name="company" placeholder={t.company} aria-label={t.company} className={field} />
        <input name="phone" required type="tel" placeholder={t.phone} aria-label={t.phone} className={field} />
        <input name="email" type="email" placeholder={t.email} aria-label={t.email} className={field} />
      </div>
      <select name="machine" defaultValue={machine ?? ""} aria-label={t.machine} className={`${field} surface`}>
        <option value="">{t.machine}: {t.any}</option>
        {products.map((p) => <option key={p.slug} value={p.name[locale]}>{p.name[locale]}</option>)}
      </select>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="product" placeholder={t.product} aria-label={t.product} className={field} />
        <input name="capacity" placeholder={t.capacity} aria-label={t.capacity} className={field} />
      </div>
      <textarea name="message" rows={3} placeholder={t.message} aria-label={t.message} className={field} />
      <Actions locale={locale} onMail={() => { const f = document.activeElement?.closest("form"); if (f) submit(read(f as HTMLFormElement), "mail"); }} />
      {sent && <p role="status" className="text-sm text-emerald-500">{t.ok}</p>}
    </form>
  );
}

export function ContactForm({ locale }: { locale: Locale }) {
  const { submit, sent, t } = useSubmit(locale, locale === "ar" ? "رسالة من الموقع" : "Website message");
  return (
    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); submit(read(e.currentTarget), "wa"); }}>
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" required placeholder={t.name} aria-label={t.name} className={field} />
        <input name="phone" required type="tel" placeholder={t.phone} aria-label={t.phone} className={field} />
      </div>
      <input name="email" type="email" placeholder={t.email} aria-label={t.email} className={field} />
      <textarea name="message" required rows={5} placeholder={t.message} aria-label={t.message} className={field} />
      <Actions locale={locale} onMail={() => { const f = document.activeElement?.closest("form"); if (f) submit(read(f as HTMLFormElement), "mail"); }} />
      {sent && <p role="status" className="text-sm text-emerald-500">{t.ok}</p>}
    </form>
  );
}
