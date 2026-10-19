"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { getDict } from "@/lib/i18n";
import { categories, industries, products, type CategoryId, type IndustryId } from "@/lib/data";
import type { Locale } from "@/lib/site";
import { MachineCard } from "./ui";

export default function MachinesExplorer({ locale }: { locale: Locale }) {
  const t = getDict(locale).machines;
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<CategoryId | "all">("all");
  const [ind, setInd] = useState<IndustryId | "all">("all");

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const c = p.get("cat") as CategoryId | null;
    const i = p.get("industry") as IndustryId | null;
    if (c && categories.some((x) => x.id === c)) setCat(c);
    if (i && industries.some((x) => x.id === i)) setInd(i);
  }, []);

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    return products.filter((p) =>
      (cat === "all" || p.category === cat) &&
      (ind === "all" || p.industries.includes(ind)) &&
      (!term || [p.name.ar, p.name.en, p.short.ar, p.short.en].some((s) => s.toLowerCase().includes(term)))
    );
  }, [q, cat, ind]);

  const chip = (on: boolean) =>
    `whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition ${on ? "border-brand-500 bg-brand-500 text-white shadow-lg shadow-brand-500/30" : "border-line hover:border-brand-500 hover:text-brand-500"}`;

  return (
    <div>
      <div className="glass sticky top-24 md:top-32 z-30 -mx-2 mb-10 flex flex-col gap-4 rounded-3xl p-3 lg:flex-row lg:items-center">
        <label className="relative flex-1">
          <Search size={18} className="pointer-events-none absolute start-4 top-1/2 -translate-y-1/2 text-muted" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t.search} aria-label={t.search}
            className="w-full rounded-full border border-line bg-transparent py-3 pe-4 ps-11 text-sm outline-none focus:border-brand-500" />
        </label>
        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          <button className={chip(cat === "all")} onClick={() => setCat("all")}>{t.allCats}</button>
          {categories.map((c) => <button key={c.id} className={chip(cat === c.id)} onClick={() => setCat(c.id)}>{c.name[locale]}</button>)}
        </div>
        <select value={ind} onChange={(e) => setInd(e.target.value as IndustryId | "all")} aria-label={t.allInd}
          className="surface rounded-full border border-line px-4 py-3 text-sm outline-none focus:border-brand-500">
          <option value="all">{t.allInd}</option>
          {industries.map((i) => <option key={i.id} value={i.id}>{i.name[locale]}</option>)}
        </select>
      </div>
      <p className="mb-6 text-sm text-muted">{list.length} {t.results}</p>
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.div key={p.slug} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.25 }}>
              <MachineCard p={p} locale={locale} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {list.length === 0 && <p className="py-20 text-center text-muted">{t.none}</p>}
    </div>
  );
}
