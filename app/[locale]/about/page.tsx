import type { Locale } from "@/lib/site";
import { getDict } from "@/lib/i18n";
import { AboutPage } from "../pages";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  return { title: getDict(locale).nav.about };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  return <AboutPage locale={locale} />;
}
