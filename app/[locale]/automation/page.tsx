import type { Locale } from "@/lib/site";
import { getDict } from "@/lib/i18n";
import { AutomationPage } from "../pages";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  return { title: getDict(locale).nav.automation };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  return <AutomationPage locale={locale} />;
}
