"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Send, Sparkles, X } from "lucide-react";
import { site, waLink, type Locale, type T } from "@/lib/site";

const s = (ar: string, en: string): T => ({ ar, en });
type Q = { id: string; label: T; options: T[] };

const common: Q[] = [
  { id: "industry", label: s("القطاع", "Industry"), options: [s("أغذية ومشروبات", "Food & beverage"), s("أدوية", "Pharmaceuticals"), s("مستحضرات تجميل", "Cosmetics"), s("منظفات وكيماويات", "Detergents & chemicals"), s("زيوت", "Oils"), s("كيماويات زراعية", "Agrochemicals")] },
  { id: "timeline", label: s("موعد التنفيذ", "Timeline"), options: [s("فوراً", "Immediately"), s("خلال 3 شهور", "Within 3 months"), s("خلال 6 شهور", "Within 6 months"), s("دراسة فقط", "Just researching")] },
];

/** Follow-up questions per machine type. */
const types: { id: string; name: T; questions: Q[] }[] = [
  { id: "liquid", name: s("ماكينة تعبئة سوائل", "Liquid filling machine"), questions: [
    { id: "viscosity", label: s("طبيعة المنتج", "Product type"), options: [s("سائل خفيف (مياه، عصير)", "Thin liquid (water, juice)"), s("متوسط اللزوجة (زيت، شامبو)", "Medium (oil, shampoo)"), s("لزج / كريم / معجون", "Thick (cream, paste)"), s("رغوي أو كيماوي", "Foamy or chemical")] },
    { id: "container", label: s("نوع العبوة", "Container"), options: [s("زجاجة", "Bottle"), s("جركن", "Jerrycan"), s("برطمان", "Jar"), s("جالون / براميل", "Gallon / drum")] },
    { id: "volume", label: s("حجم التعبئة", "Fill volume"), options: [s("حتى 500 مل", "Up to 500 ml"), s("0.5 – 5 لتر", "0.5 – 5 L"), s("5 – 20 لتر", "5 – 20 L")] },
    { id: "output", label: s("الإنتاج المطلوب", "Target output"), options: [s("حتى 1000 عبوة/ساعة", "Up to 1,000 BPH"), s("1000 – 3000 عبوة/ساعة", "1,000 – 3,000 BPH"), s("3000 – 6000 عبوة/ساعة", "3,000 – 6,000 BPH")] },
  ] },
  { id: "vffs", name: s("ماكينة تعبئة وتغليف رأسية (أكياس)", "Vertical bagging machine (VFFS)"), questions: [
    { id: "product", label: s("المنتج", "Product"), options: [s("بودرة", "Powder"), s("حبوب / بقوليات", "Grains / pulses"), s("سناكس / شيبسي", "Snacks / chips"), s("مجمدات", "Frozen food"), s("سوائل", "Liquids")] },
    { id: "bag", label: s("شكل الكيس", "Bag style"), options: [s("وسادة", "Pillow"), s("واقف بسوستة (دويباك)", "Stand-up / doypack"), s("كواترو", "Quattro"), s("ساشيه", "Sachet")] },
    { id: "weight", label: s("وزن العبوة", "Pack weight"), options: [s("حتى 100 جم", "Up to 100 g"), s("100 جم – 1 كجم", "100 g – 1 kg"), s("1 – 5 كجم", "1 – 5 kg")] },
    { id: "dosing", label: s("نظام الوزن", "Dosing system"), options: [s("موازين متعددة الرؤوس", "Multihead weigher"), s("بريمة (Auger)", "Auger"), s("أكواب حجمية", "Volumetric cups"), s("لا أعرف", "Not sure")] },
  ] },
  { id: "sachet", name: s("ماكينة ساشيه متعددة المسارات", "Multi-lane sachet machine"), questions: [
    { id: "product", label: s("المنتج", "Product"), options: [s("بودرة", "Powder"), s("سائل", "Liquid"), s("جل / كريم", "Gel / cream")] },
    { id: "weight", label: s("وزن الساشيه", "Sachet weight"), options: [s("2 – 10 جم", "2 – 10 g"), s("10 – 50 جم", "10 – 50 g"), s("50 – 120 جم", "50 – 120 g")] },
    { id: "lanes", label: s("عدد المسارات", "Lanes"), options: [s("2 – 4", "2 – 4"), s("5 – 8", "5 – 8"), s("حتى 10", "Up to 10")] },
  ] },
  { id: "labelling", name: s("ماكينة لصق ليبل (استيكر)", "Labelling machine"), questions: [
    { id: "shape", label: s("شكل العبوة", "Container shape"), options: [s("دائرية", "Round"), s("مسطحة / مربعة", "Flat / square"), s("بيضاوية", "Oval"), s("مخروطية", "Conical")] },
    { id: "labels", label: s("مواضع الليبل", "Label positions"), options: [s("وجه واحد", "Front only"), s("وجهين (أمامي وخلفي)", "Front & back"), s("لف كامل", "Full wrap"), s("ختم أمان على الغطاء", "Cap security seal")] },
    { id: "speed", label: s("السرعة المطلوبة", "Required speed"), options: [s("حتى 30 عبوة/دقيقة", "Up to 30 /min"), s("30 – 80 عبوة/دقيقة", "30 – 80 /min"), s("أكثر من 80", "80+ /min")] },
  ] },
  { id: "capping", name: s("ماكينة غطاء (كابينج)", "Capping machine"), questions: [
    { id: "cap", label: s("نوع الغطاء", "Cap type"), options: [s("قلاووظ", "Screw cap"), s("ضغط", "Press-on"), s("Twist-off", "Twist-off"), s("بخاخ / بامب", "Trigger / pump")] },
    { id: "container", label: s("نوع العبوة", "Container"), options: [s("زجاجة", "Bottle"), s("جركن", "Jerrycan"), s("برطمان", "Jar")] },
  ] },
  { id: "sleeve", name: s("ماكينة سليف حراري", "Shrink sleeve machine"), questions: [
    { id: "sleeve", label: s("نوع السليف", "Sleeve type"), options: [s("سليف كامل للجسم", "Full body sleeve"), s("شريط أمان على الغطاء", "Neck / cap band"), s("الاثنين معاً", "Both")] },
    { id: "tunnel", label: s("نوع النفق", "Shrink tunnel"), options: [s("بخار", "Steam"), s("هواء ساخن", "Hot air"), s("لا أعرف", "Not sure")] },
  ] },
  { id: "endline", name: s("نهاية الخط (شرنك، كرتنة، بالتة)", "End of line (shrink, carton, pallet)"), questions: [
    { id: "need", label: s("المطلوب", "Need"), options: [s("تغليف شرنك", "Shrink wrapping"), s("تعبئة في كراتين", "Cartoning / case packing"), s("لصق شريط الكرتون", "Carton taping"), s("رص على البالتات", "Palletizing"), s("لف البالتات استريتش", "Pallet stretch wrapping")] },
    { id: "rate", label: s("المعدل", "Rate"), options: [s("حتى 300 كرتونة/ساعة", "Up to 300 cases/h"), s("300 – 800 كرتونة/ساعة", "300 – 800 cases/h"), s("أكثر من 800", "800+ cases/h")] },
  ] },
  { id: "line", name: s("خط إنتاج متكامل (تسليم مفتاح)", "Complete turnkey line"), questions: [
    { id: "stages", label: s("مراحل الخط", "Line stages"), options: [s("تعبئة + غطاء", "Filling + capping"), s("تعبئة + غطاء + ليبل", "Filling + capping + labelling"), s("الخط كامل حتى البالتة", "Full line to pallet")] },
    { id: "budget", label: s("الميزانية التقريبية", "Approximate budget"), options: [s("اقتصادية", "Economy"), s("متوسطة", "Mid-range"), s("أعلى أداء", "High performance")] },
  ] },
];

/** Inbox that receives every website enquiry. */
export const LEAD_EMAIL = "info@alsakronline.com";

/**
 * Sends an enquiry by email through FormSubmit (no server needed on a static site).
 * The very first submission triggers a one-time activation email to LEAD_EMAIL.
 */
export async function emailLead(subject: string, fields: Record<string, string>) {
  try {
    await fetch(`https://formsubmit.co/ajax/${LEAD_EMAIL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ _subject: subject, _template: "table", _captcha: "false", _source: location.href, ...fields }),
    });
    return true;
  } catch {
    return false;
  }
}

/** The machine-finder questionnaire, used in the popup and inline on the home page. */
export function MachineFinderForm({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [type, setType] = useState("");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ name: "", phone: "", email: "" });
  const [sent, setSent] = useState(false);

  const current = useMemo(() => types.find((x) => x.id === type), [type]);
  const questions = current ? [...current.questions, ...common] : [];
  const answered = questions.filter((q) => answers[q.id]).length;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!current) return;
    const title = ar ? "طلب ترشيح ماكينة من الموقع" : "Machine recommendation request";
    const fields: Record<string, string> = { [ar ? "نوع الماكينة" : "Machine type"]: current.name[locale] };
    questions.forEach((q) => { if (answers[q.id]) fields[q.label[locale]] = answers[q.id]; });
    if (contact.name) fields[ar ? "الاسم" : "Name"] = contact.name;
    fields[ar ? "الهاتف" : "Phone"] = contact.phone;
    if (contact.email) fields[ar ? "البريد" : "Email"] = contact.email;
    const text = [title, ...Object.entries(fields).map(([k, v]) => `${k}: ${v}`)].join("\n");
    // Open WhatsApp inside the click so popup blockers allow it, then send the email in the background.
    window.open(waLink(text), "_blank", "noopener");
    emailLead(`${title} – ${current.name.en}`, fields);
    setSent(true);
  };

  const field = "surface w-full rounded-xl border border-line px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15";

  if (sent)
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <CheckCircle2 size={48} className="text-emerald-500" />
        <p className="font-display text-xl font-bold">{ar ? "تم إرسال طلبك" : "Your request has been sent"}</p>
        <p className="max-w-md text-sm text-muted">{ar ? `أرسلنا التفاصيل على واتساب والبريد، وسيتواصل معك مهندس خلال 24 ساعة. للاستعجال: ${site.phones[0]}` : `We sent your details by WhatsApp and email. An engineer will contact you within 24 hours. Urgent? ${site.phones[0]}`}</p>
        <button type="button" onClick={() => { setSent(false); setType(""); setAnswers({}); }} className="mt-2 text-sm font-semibold text-brand-500">{ar ? "طلب جديد" : "New request"}</button>
      </div>
    );

  return (
    <form onSubmit={submit} className="space-y-4">
      {current && (
        <div className="h-1.5 overflow-hidden rounded-full bg-brand-500/15">
          <motion.div className="h-full rounded-full bg-brand-500" animate={{ width: `${(answered / questions.length) * 100}%` }} />
        </div>
      )}
      <label className="block">
        <span className="mb-1.5 block text-sm font-semibold">{ar ? "نوع الماكينة" : "Machine type"}</span>
        <select required value={type} onChange={(e) => { setType(e.target.value); setAnswers({}); }} className={field}>
          <option value="" disabled>{ar ? "اختر نوع الماكينة…" : "Choose a machine type…"}</option>
          {types.map((x) => <option key={x.id} value={x.id}>{x.name[locale]}</option>)}
        </select>
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        {questions.map((q, i) => (
          <motion.label key={type + q.id} className="block" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <span className="mb-1.5 block text-sm font-semibold">{q.label[locale]}</span>
            <select value={answers[q.id] ?? ""} onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))} className={field}>
              <option value="">{ar ? "اختر…" : "Select…"}</option>
              {q.options.map((o) => <option key={o.en} value={o[locale]}>{o[locale]}</option>)}
            </select>
          </motion.label>
        ))}
      </div>

      {current && (
        <motion.div className="grid gap-3 sm:grid-cols-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <input value={contact.name} onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))} placeholder={ar ? "الاسم" : "Name"} aria-label={ar ? "الاسم" : "Name"} className={field} />
          <input required type="tel" value={contact.phone} onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))} placeholder={ar ? "رقم الهاتف" : "Phone"} aria-label={ar ? "رقم الهاتف" : "Phone"} className={field} />
          <input type="email" value={contact.email} onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))} placeholder={ar ? "البريد (اختياري)" : "Email (optional)"} aria-label={ar ? "البريد" : "Email"} className={field} />
        </motion.div>
      )}

      <button type="submit" disabled={!current}
        className="shine flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-50">
        <Send size={16} className="flip-rtl" /> {ar ? "أرسل عبر واتساب والبريد" : "Send via WhatsApp & email"}
      </button>
    </form>
  );
}

/** Opens the questionnaire 5 seconds after every page load; visitors close it with ✕, "Not now", Esc or a click outside. */
export default function LeadPopup({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[85] flex items-end justify-center bg-black/55 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
          <motion.div role="dialog" aria-modal="true" aria-labelledby="lead-title"
            className="surface relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-line shadow-2xl sm:rounded-3xl"
            initial={{ y: 60, opacity: 0, scale: 0.96 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", damping: 24, stiffness: 260 }} onClick={(e) => e.stopPropagation()}>
            <div className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-ink-800 p-6 text-white">
              <div className="grid-bg absolute inset-0 opacity-30" />
              <button onClick={() => setOpen(false)} aria-label={ar ? "إغلاق" : "Close"} className="absolute end-3 top-3 rounded-full p-2 text-white/80 transition hover:bg-white/15 hover:text-white"><X size={20} /></button>
              <motion.span className="relative inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold"
                animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 2.4 }}>
                <Sparkles size={14} /> {ar ? "مستشار الماكينات" : "Machine finder"}
              </motion.span>
              <h2 id="lead-title" className="font-display relative mt-3 text-2xl font-bold">{ar ? "ما الماكينة المناسبة لمصنعك؟" : "Which machine fits your plant?"}</h2>
              <p className="relative mt-1 text-sm text-white/80">{ar ? "أجب عن أسئلة قصيرة وسيرشح لك مهندسونا الحل الأنسب خلال 24 ساعة." : "Answer a few quick questions and our engineers will recommend the right solution within 24 hours."}</p>
            </div>
            <div className="p-6">
              <MachineFinderForm locale={locale} />
              <div className="mt-4 text-center">
                <button type="button" onClick={() => setOpen(false)} className="text-sm font-semibold text-muted hover:text-brand-500">{ar ? "ليس الآن" : "Not now"}</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
