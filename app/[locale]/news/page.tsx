import type { Locale } from "@/lib/site";
import { getDict } from "@/lib/i18n";
import { NewsPage } from "../pages";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  return { title: getDict(locale).nav.news };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  return <NewsPage locale={locale} />;
}
