import type { Metadata } from "next";
import { Cairo, Space_Grotesk } from "next/font/google";
import "../globals.css";
import { locales, site, type Locale } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FloatingActions, QuoteProvider, ScrollProgress } from "@/components/client";
import LeadPopup from "@/components/LeadPopup";

const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo", weight: ["400", "500", "600", "700", "800"] });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk", weight: ["400", "500", "600", "700"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const ar = locale === "ar";
  return {
    title: { default: site.name[locale], template: `%s | ${site.name[locale]}` },
    description: ar
      ? "الصقر للتجارة والتصنيع: تصنيع ماكينات تعبئة السوائل والتغليف الرأسي والأفقي ولصق الاستيكر وخطوط الإنتاج المتكاملة في مصر منذ 1995."
      : "ALSAKR Trading & Manufacturing: liquid filling, VFFS/HFFS packaging, labelling machines and turnkey production lines made in Egypt since 1995.",
    icons: { icon: "/img/logo-light.png" },
    alternates: { languages: { ar: "/ar/", en: "/en/" } },
  };
}

// Set the theme before paint to avoid a flash.
const themeScript = `try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}`;

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legal.en,
    alternateName: site.name.en,
    foundingDate: "1995",
    email: site.emails[0],
    telephone: site.phones[0],
    address: { "@type": "PostalAddress", streetAddress: "Plot VH, Industrial Area C3", addressLocality: "10th of Ramadan", addressCountry: "EG" },
    sameAs: Object.values(site.social),
  };
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={`${cairo.variable} ${grotesk.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <QuoteProvider locale={locale}>
          <ScrollProgress />
          <Header locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
          <FloatingActions locale={locale} />
          <LeadPopup locale={locale} />
        </QuoteProvider>
      </body>
    </html>
  );
}
