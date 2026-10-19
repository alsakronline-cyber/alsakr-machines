import type { Locale } from "@/lib/site";
import { getDict } from "@/lib/i18n";
import { MachinesPage } from "../pages";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  return { title: getDict(locale).nav.machines };
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  return <MachinesPage locale={locale} />;
}
