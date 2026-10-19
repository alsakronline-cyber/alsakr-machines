import type { Locale } from "@/lib/site";
import { locales } from "@/lib/site";
import { products } from "@/lib/data";
import { MachineDetailPage } from "../../pages";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return locales.flatMap((locale) => products.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug, ...r } = await params; const locale = r.locale as Locale;
  const p = products.find((x) => x.slug === slug);
  return p ? { title: p.name[locale], description: p.short[locale], openGraph: { images: [p.img] } } : {};
}

export default async function Page({ params }: { params: Params }) {
  const { slug, ...r } = await params; const locale = r.locale as Locale;
  return <MachineDetailPage locale={locale} slug={slug} />;
}
