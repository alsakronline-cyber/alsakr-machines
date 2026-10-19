import type { Locale } from "./site";

const ar = {
  nav: {
    home: "الرئيسية", machines: "الماكينات", industries: "الصناعات", automation: "الأتمتة",
    services: "الخدمات", about: "من نحن", gallery: "المعرض", news: "الأخبار", careers: "الوظائف", contact: "تواصل معنا",
  },
  cta: {
    quote: "اطلب عرض سعر", explore: "استكشف الماكينات", catalog: "تحميل الكتالوج", whatsapp: "واتساب",
    call: "اتصل بنا", details: "التفاصيل", all: "عرض الكل", send: "إرسال عبر واتساب", email: "إرسال بالبريد",
    readMore: "اقرأ المزيد", apply: "قدّم الآن", watch: "شاهد", directions: "الاتجاهات",
  },
  hero: {
    badge: "منذ 1995 · صُنع في مصر",
    title1: "خطوط تعبئة وتغليف",
    title2: "بهندسة عالمية",
    sub: "نصمم ونصنّع ماكينات تعبئة السوائل والتغليف واللصق وخطوط الإنتاج المتكاملة بمكونات SIEMENS وSICK وSchneider، من الاستشارة حتى تسليم المفتاح.",
    scroll: "مرّر للأسفل",
    live: "الخط يعمل الآن",
  },
  why: {
    kicker: "لماذا الصقر",
    title: "ما الذي يميزنا",
    items: [
      { t: "قيمة عالية مقابل السعر", d: "أعلى جودة بأسعار مناسبة لتحقيق أفضل عائد على استثمارك." },
      { t: "جودة ممتازة", d: "أنظمة مبنية وفق المعايير الدولية بمكونات من Siemens وSick وSKF وFesto." },
      { t: "خدمات دورة الحياة", d: "دعم شامل من الصقر طوال دورة حياة النظام بالكامل." },
      { t: "تصنيع محلي", d: "مصنعنا في العاشر من رمضان يعني تسليماً أسرع وقطع غيار متوفرة دائماً." },
    ],
  },
  sections: {
    categories: "خطوط الإنتاج", categoriesT: "حلول لكل مرحلة في خطك",
    featured: "الأكثر طلباً", featuredT: "ماكينات مميزة",
    industries: "الصناعات", industriesT: "نخدم القطاعات الأكثر تطلباً",
    process: "كيف نعمل", processT: "من الفكرة حتى التشغيل",
    brands: "شركاء التكنولوجيا", brandsT: "مكونات من أفضل العلامات العالمية",
    clients: "عملاؤنا", clientsT: "شركاء نجاح يثقون بنا",
    news: "آخر الأخبار", newsT: "أخبار ومعارض ومشاريع",
    videos: "فيديوهات", videosT: "شاهد ماكيناتنا أثناء العمل",
    ctaT: "هل لديك تحدٍ في التعبئة أو الأتمتة؟",
    ctaD: "أرسل لنا منتجك وعبوتك وإنتاجك المستهدف وسيرد عليك مهندس متخصص خلال 24 ساعة.",
  },
  process: [
    { t: "استشارة", d: "نفهم منتجك وأهدافك" },
    { t: "تصميم", d: "تصميم ثلاثي الأبعاد للخط" },
    { t: "تصنيع", d: "تصنيع واختبار FAT بمصنعنا" },
    { t: "تركيب", d: "تركيب وتشغيل وتدريب" },
    { t: "دعم", d: "صيانة وقطع غيار مدى الحياة" },
  ],
  machines: {
    title: "الماكينات", sub: "تصفح خطوط التعبئة والتغليف والأتمتة من الصقر",
    search: "ابحث عن ماكينة…", allCats: "الكل", allInd: "كل الصناعات", results: "ماكينة",
    none: "لا توجد نتائج مطابقة.", specs: "المواصفات الفنية", options: "خيارات إضافية",
    gallery: "ألبوم الصور", industries: "مناسبة لـ", related: "ماكينات ذات صلة", doubt: "محتار تختار أي ماكينة؟ مهندسونا يساعدونك.",
  },
  about: {
    title: "من نحن", sub: "أكثر من 30 عاماً في دعم الصناعة المصرية",
    story: "أسسها المهندس حمدان صقر عام 1995، مهندس شغوف حلم بدعم الصناعات المصرية بمنتجات وحلول عالية الجودة. الصقر اليوم شركة مساهمة تدير ثلاث وحدات أعمال: تصنيع ماكينات التعبئة والتغليف، وحلول الأتمتة الصناعية، وتوريد قطع الغيار.",
    mission: "رسالتنا", missionD: "بناء شراكات طويلة الأمد مع العملاء والموردين تمكننا من تقديم أفضل الحلول بمعايير جودة عالية. نعمل عن قرب مع عملائنا من الاستشارة حتى المشاريع الجاهزة.",
    vision: "رؤيتنا", visionD: "أن نكون الشريك الهندسي الأول لخطوط التعبئة والتغليف في مصر والشرق الأوسط وأفريقيا.",
    units: "وحدات الأعمال", u: ["ماكينات التعبئة والتغليف", "حلول الأتمتة", "قطع الغيار الكهربائية والميكانيكية"],
    timeline: "رحلتنا",
    steps: [
      { y: "1995", t: "التأسيس على يد م. حمدان صقر" },
      { y: "2005", t: "بدء تصنيع أول خطوط تعبئة السوائل" },
      { y: "2015", t: "شراكات توريد مع SIEMENS وSICK وABB" },
      { y: "2021", t: "مصنع جديد بالعاشر من رمضان C3" },
      { y: "2026", t: "خطوط متكاملة وتصدير للمنطقة" },
    ],
  },
  contact: {
    title: "تواصل معنا", sub: "نسعد بالرد على استفساراتك وطلبات عروض الأسعار",
    name: "الاسم", company: "الشركة", phone: "رقم الهاتف", email: "البريد الإلكتروني", message: "رسالتك",
    machine: "الماكينة المطلوبة", product: "المنتج المراد تعبئته", capacity: "الإنتاج المطلوب", any: "غير محدد",
    address: "العنوان", hours: "مواعيد العمل", phones: "الهاتف", emails: "البريد", ok: "تم تجهيز رسالتك، سيتم فتح واتساب.",
    quoteTitle: "طلب عرض سعر", quoteSub: "املأ البيانات وسنرد عليك خلال 24 ساعة",
  },
  pages: {
    industriesSub: "حلول مخصصة لكل قطاع صناعي",
    automationSub: "وكيل وموزع لمكونات الأتمتة من أكبر العلامات العالمية مع مخزون محلي",
    servicesSub: "شريكك الهندسي طوال دورة حياة خط الإنتاج",
    gallerySub: "صور من مصنعنا ومشاريعنا", newsSub: "آخر أخبار الصقر والمعارض والمشاريع والمقالات",
    careersSub: "انضم لفريق يبني مستقبل الصناعة", careersOpen: "الوظائف المتاحة", careersCv: "لا تجد وظيفة مناسبة؟ أرسل سيرتك الذاتية إلى",
    events: "المعارض", types: { event: "معرض", news: "خبر", project: "مشروع", blog: "مقال" },
    catalog: "كتالوج الأتمتة", catalogD: "حمّل كتالوج منتجات الأتمتة الكامل PDF.",
  },
  footer: { about: "شركة مصرية رائدة في تصنيع ماكينات التعبئة والتغليف وخطوط الإنتاج وحلول الأتمتة منذ 1995.", links: "روابط", machines: "الماكينات", contact: "تواصل", rights: "جميع الحقوق محفوظة." },
  chat: { title: "فريق المبيعات", hi: "أهلاً بك 👋 كيف يمكننا مساعدتك اليوم؟", ph: "اكتب رسالتك…", online: "متصل الآن" },
  theme: { light: "الوضع الفاتح", dark: "الوضع الداكن" },
  lang: "English",
};

type Dict = typeof ar;

const en: Dict = {
  nav: {
    home: "Home", machines: "Machines", industries: "Industries", automation: "Automation",
    services: "Services", about: "About", gallery: "Gallery", news: "News", careers: "Careers", contact: "Contact",
  },
  cta: {
    quote: "Request a Quote", explore: "Explore Machines", catalog: "Download Catalog", whatsapp: "WhatsApp",
    call: "Call us", details: "Details", all: "View all", send: "Send via WhatsApp", email: "Send by email",
    readMore: "Read more", apply: "Apply now", watch: "Watch", directions: "Directions",
  },
  hero: {
    badge: "Since 1995 · Made in Egypt",
    title1: "Filling & Packaging Lines",
    title2: "Engineered to World Standards",
    sub: "We design and build liquid fillers, packaging, labelling machines and complete turnkey lines with SIEMENS, SICK and Schneider components, from first consultation to handover.",
    scroll: "Scroll",
    live: "Line running live",
  },
  why: {
    kicker: "Why ALSAKR",
    title: "What makes us special",
    items: [
      { t: "High value for money", d: "The highest quality at reasonable prices for the best return on your investment." },
      { t: "Premium quality", d: "Built to international standards with best-in-class components from Siemens, Sick, SKF and Festo." },
      { t: "Life-cycle services", d: "Comprehensive ALSAKR support for the entire life of your system." },
      { t: "Local manufacturing", d: "Our 10th of Ramadan factory means faster delivery and spare parts always in stock." },
    ],
  },
  sections: {
    categories: "Production lines", categoriesT: "Solutions for every stage of your line",
    featured: "Most requested", featuredT: "Featured machines",
    industries: "Industries", industriesT: "Serving the most demanding sectors",
    process: "How we work", processT: "From idea to production",
    brands: "Technology partners", brandsT: "Components from global leaders",
    clients: "Our clients", clientsT: "Partners who trust us",
    news: "Latest", newsT: "News, exhibitions & projects",
    videos: "Videos", videosT: "See our machines in action",
    ctaT: "Facing a packaging or automation challenge?",
    ctaD: "Tell us your product, container and target output, and a specialist engineer will reply within 24 hours.",
  },
  process: [
    { t: "Consult", d: "We learn your product and goals" },
    { t: "Design", d: "3D engineering of the line" },
    { t: "Build", d: "Manufacturing & FAT in our plant" },
    { t: "Install", d: "Commissioning & training" },
    { t: "Support", d: "Lifetime service & spare parts" },
  ],
  machines: {
    title: "Machines", sub: "Browse ALSAKR filling, packaging and automation lines",
    search: "Search machines…", allCats: "All", allInd: "All industries", results: "machines",
    none: "No matching machines.", specs: "Technical specifications", options: "Additional options",
    gallery: "Photo gallery", industries: "Suitable for", related: "Related machines", doubt: "Not sure which machine to choose? Our engineers will help.",
  },
  about: {
    title: "About us", sub: "Over 30 years supporting Egyptian industry",
    story: "Founded in 1995 by Eng. Hemdan Sakr, a passionate engineer who dreamed of supporting Egyptian industries with premium-quality products and solutions. ALSAKR is now a joint-stock company operating three business units: filling & packaging machinery, industrial automation, and spare parts supply.",
    mission: "Our mission", missionD: "Building long-term partnerships with both customers and suppliers lets us offer the best solutions at high quality standards. We work closely with our clients from consulting to turnkey projects.",
    vision: "Our vision", visionD: "To be the first-choice engineering partner for filling and packaging lines across Egypt, the Middle East and Africa.",
    units: "Business units", u: ["Filling & packaging machines", "Automation solutions", "Electrical & mechanical spare parts"],
    timeline: "Our journey",
    steps: [
      { y: "1995", t: "Founded by Eng. Hemdan Sakr" },
      { y: "2005", t: "First liquid filling lines manufactured" },
      { y: "2015", t: "Supply partnerships with SIEMENS, SICK, ABB" },
      { y: "2021", t: "New factory in 10th of Ramadan C3" },
      { y: "2026", t: "Turnkey lines exported across the region" },
    ],
  },
  contact: {
    title: "Contact us", sub: "We're happy to answer your questions and quote requests",
    name: "Name", company: "Company", phone: "Phone", email: "Email", message: "Your message",
    machine: "Machine of interest", product: "Product to fill", capacity: "Target output", any: "Not sure",
    address: "Address", hours: "Working hours", phones: "Phone", emails: "Email", ok: "Message ready, opening WhatsApp.",
    quoteTitle: "Request a quote", quoteSub: "Fill in the details and we'll reply within 24 hours",
  },
  pages: {
    industriesSub: "Tailored solutions for every sector",
    automationSub: "Authorized supply of automation components from global brands, with local stock",
    servicesSub: "Your engineering partner for the whole life of your line",
    gallerySub: "Inside our factory and projects", newsSub: "ALSAKR news, exhibitions, projects and articles",
    careersSub: "Join the team building the future of industry", careersOpen: "Open positions", careersCv: "No suitable role? Send your CV to",
    events: "Exhibitions", types: { event: "Exhibition", news: "News", project: "Project", blog: "Article" },
    catalog: "Automation catalog", catalogD: "Download the full automation products catalog (PDF).",
  },
  footer: { about: "A leading Egyptian manufacturer of filling & packaging machines, production lines and automation solutions since 1995.", links: "Links", machines: "Machines", contact: "Contact", rights: "All rights reserved." },
  chat: { title: "Sales team", hi: "Hi there 👋 How can we help you today?", ph: "Type your message…", online: "Online now" },
  theme: { light: "Light mode", dark: "Dark mode" },
  lang: "العربية",
};

export const dict = { ar, en };
export const getDict = (l: Locale) => dict[l];
export type { Dict };
