export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ar";

export type T = { ar: string; en: string };

export const site = {
  name: { ar: "توب جروب | الصقر للماكينات", en: "Top Group | Al Sakr Machines" },
  legal: { ar: "الصقر للتجارة والتصنيع", en: "ALSAKR for Trading & Manufacturing" },
  founded: 1995,
  phones: ["+20 102 108 0088", "+20 55 438 0909"],
  whatsapp: "201021080088",
  emails: ["info@topgroupco.com", "sales@topgroupco.com"],
  address: {
    ar: "القطعة VH، المنطقة الصناعية C3، العاشر من رمضان، مصر",
    en: "Plot VH, Industrial Area C3, 10th of Ramadan City, Egypt",
  },
  hours: { ar: "السبت – الخميس: 9 ص – 5 م", en: "Sat – Thu: 9:00 AM – 5:00 PM" },
  mapEmbed:
    "https://www.google.com/maps?q=Industrial+Area+C3,+10th+of+Ramadan+City,+Egypt&output=embed",
  social: {
    facebook: "https://www.facebook.com/ags2030/",
    youtube: "https://www.youtube.com/channel/UC9oAg0d8ADdNk8kdnI4SeQQ",
    twitter: "https://twitter.com/dubNE3MtXg6YKcz",
  },
  catalog: "/automation-catalog.pdf",
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
