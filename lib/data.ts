import type { T } from "./site";

export type CategoryId = "filling" | "packaging" | "labelling" | "end-of-line";

const s = (ar: string, en: string): T => ({ ar, en });

export const categories: { id: CategoryId; name: T; desc: T }[] = [
  { id: "filling", name: s("التعبئة والتغطية", "Filling & Capping"), desc: s("تعبئة السوائل والكريمات وغلق جميع أنواع الأغطية", "Liquids, creams and pastes, plus every common cap type") },
  { id: "packaging", name: s("ماكينات التغليف", "Packaging Machines"), desc: s("تغليف رأسي وأفقي وساشيه متعدد المسارات", "VFFS, HFFS, multi-lane sachet and thermoforming") },
  { id: "labelling", name: s("اللصق والسليف", "Labelling & Sleeving"), desc: s("لصق الاستيكر والسليف الحراري بتكنولوجيا إيطالية", "Self-adhesive labels and shrink sleeves, Italian technology") },
  { id: "end-of-line", name: s("نهاية الخط", "End of Line"), desc: s("الشرنك والكرتنة والشريط والبالتة", "Shrink, cartoning, taping, palletizing and wrapping") },
];

export type IndustryId = "food" | "pharma" | "cosmetics" | "chemicals" | "oils" | "agro";

export const industries: { id: IndustryId; icon: string; img: string; name: T; desc: T; examples: T }[] = [
  { id: "food", icon: "Wheat", img: "/img/vffs.jpg", name: s("الأغذية والمشروبات", "Food & Beverage"),
    desc: s("خطوط صحية من الاستانلس ستيل لتعبئة العصائر والصوصات والحبوب والتوابل والمجمدات.", "Hygienic stainless-steel lines for juices, sauces, grains, spices and frozen food."),
    examples: s("عصائر · أرز · سكر · توابل · خضروات مجمدة", "Juices · Rice · Sugar · Spices · Frozen veg") },
  { id: "pharma", icon: "Pill", img: "/img/fb/supplements-line.jpg", name: s("الأدوية", "Pharmaceuticals"),
    desc: s("دقة تعبئة عالية وأجزاء ملامسة 316L وأنظمة CIP وتعقيم UV.", "High-accuracy dosing, 316L contact parts, CIP and UV sterilization options."),
    examples: s("شراب · نقط · مراهم · ساشيهات بودرة", "Syrups · Drops · Ointments · Powder sachets") },
  { id: "cosmetics", icon: "Sparkles", img: "/img/fb/shampoo-line.jpg", name: s("مستحضرات التجميل", "Cosmetics & Personal Care"),
    desc: s("تعبئة الكريمات والشامبو والجل بمكابس دقيقة ولصق استيكر احترافي.", "Piston filling for creams, shampoos and gels with premium labelling."),
    examples: s("شامبو · كريم · لوشن · عطور", "Shampoo · Creams · Lotions · Fragrance") },
  { id: "chemicals", icon: "FlaskConical", img: "/img/fb/bottles-turntable.jpg", name: s("المنظفات والكيماويات", "Detergents & Chemicals"),
    desc: s("إضافات مقاومة للكيماويات القوية وفوهات ضد التسريب.", "Aggressive-chemical-resistant add-ons and leak-proof nozzles."),
    examples: s("منظفات سائلة · مطهرات · دهانات", "Liquid detergents · Sanitizers · Paints") },
  { id: "oils", icon: "Droplets", img: "/img/fb/oil-line.jpg", name: s("الزيوت", "Edible & Lube Oils"),
    desc: s("تعبئة بالفلوميتر والمضخات للزيوت النباتية وزيت الزيتون وزيوت المحركات حتى 20 لتر.", "Flowmeter and pump filling for edible, olive and lube oils up to 20 L."),
    examples: s("زيت طعام · زيت زيتون · زيوت محركات", "Cooking oil · Olive oil · Lubricants") },
  { id: "agro", icon: "Sprout", img: "/img/fb/capping-head.jpg", name: s("الكيماويات الزراعية", "Agrochemicals"),
    desc: s("ماكينات آمنة لتعبئة المبيدات والأسمدة السائلة والبودرة.", "Safe filling of pesticides and liquid or powder fertilizers."),
    examples: s("مبيدات · أسمدة سائلة · مخصبات", "Pesticides · Liquid fertilizers · Boosters") },
];

export type Product = {
  slug: string;
  category: CategoryId;
  img: string;
  gallery: string[];
  name: T;
  short: T;
  desc: T;
  stats: { label: T; value: string }[];
  specs: T[];
  options: T[];
  industries: IndustryId[];
  featured?: boolean;
};

const control: T[] = [
  s("تحكم كامل بـ SIEMENS PLC الألمانية", "Fully controlled by SIEMENS PLC"),
  s("شاشة لمس Schneider Electric الفرنسية", "Schneider Electric touch-screen HMI"),
  s("جميع الحساسات من إنتاج SICK AG الألمانية", "All sensors made by SICK AG"),
  s("حفظ برامج التشغيل لكل مقاس وتغيير سريع وسهل", "Stored recipes per size with quick, easy changeover"),
];

export const products: Product[] = [
  {
    slug: "liquid-filling-machine", category: "filling", featured: true,
    img: "/img/fb/expo-filler.jpg",
    gallery: ["/img/fb/expo-filler.jpg", "/img/liquid-filling.jpg", "/img/fb/turnkey-line.jpg", "/img/fb/oil-line.jpg", "/img/fb/bottles-turntable.jpg", "/img/drums.jpg", "/img/siemens-panel.jpg", "/img/project-1.jpg", "/img/project-2.jpg"],
    name: s("ماكينة تعبئة السوائل الأوتوماتيكية", "Automatic Liquid Filling Machine"),
    short: s("تعبئة خطية أوتوماتيكية للسوائل الخفيفة واللزجة من 50 مل حتى 20 لتر.", "Inline automatic filling for free-flowing and viscous liquids, 50 ml to 20 L."),
    desc: s(
      "من المياه والمطهرات إلى المعاجين والكريمات والدهانات: صُممت ماكينات الصقر لتعبئة مدى واسع من السوائل بدرجات لزوجة مختلفة، مع أقل هدر وأقل توقف وأعلى درجات الأمان وجودة المنتج.",
      "From water and sanitizers to pastes, creams and paints, ALSAKR fillers handle a wide spectrum of viscosities with strict waste control, minimum downtime, product protection and long-term reliability."
    ),
    stats: [
      { label: s("الإنتاجية", "Output"), value: "6000 BPH" },
      { label: s("مدى التعبئة", "Fill range"), value: "50 ml – 20 L" },
      { label: s("الدقة", "Accuracy"), value: "±0.25%" },
    ],
    specs: [
      s("شاسيه من الاستانلس ستيل AISI 304", "Machine chassis in stainless steel AISI 304"),
      s("تقنيات تعبئة: Overflow، مكبس، مضخة تروس، فلوميتر", "Overflow, piston pump, gear pump and flowmeter technologies"),
      s("جميع الأجزاء الملامسة للمنتج من الاستانلس 316L", "All contact parts in stainless steel AISI 316L"),
      s("نظام: لا زجاجة = لا تعبئة", "No-bottle, no-fill system"),
      s("فوهات تعبئة عالية الجودة ضد التسريب", "High-quality leak-proof filling nozzles"),
      s("تخزين حتى 100 برنامج تشغيل", "Store up to 100 programs on the HMI"),
      s("عرض السير حتى 190 مم", "Conveyor widths up to 190 mm"),
      ...control,
    ],
    options: [
      s("نظام CIP جاهز", "CIP-ready system"),
      s("نظام تعقيم بالأشعة فوق البنفسجية UV", "UV sterilization system"),
      s("تنظيف ذاتي لسير الكونفيور", "Self-cleaning conveyor slats"),
      s("إضافة مقاومة للكيماويات القوية", "Aggressive-chemical-resistant add-on"),
      s("سيور تغذية وترابيزة دوارة", "Infeed conveyors / turntables"),
      s("نظام فحص حجم التعبئة", "Fill-volume inspection system"),
    ],
    industries: ["food", "pharma", "cosmetics", "chemicals", "oils", "agro"],
  },
  {
    slug: "capping-machine", category: "filling", featured: true,
    img: "/img/fb/capping-head.jpg", gallery: ["/img/fb/capping-head.jpg", "/img/capping.jpg", "/img/fb/capping-line.jpg", "/img/fb/bottles-turntable.jpg", "/img/capping-2.jpg"],
    name: s("ماكينة الغطاء (الكابينج)", "Capping Machine"),
    short: s("غلق أوتوماتيكي للأغطية القلاووظ والضغط والـ Twist-off.", "Automatic screw, press and twist-off capping."),
    desc: s(
      "نختار التقنية المناسبة حسب خصائص المنتج والعبوة ونوع الغطاء والإنتاج اليومي والتكلفة مقابل الأداء، لجميع أنواع الأغطية الشائعة.",
      "Matched to your product, container, cap type, daily output and cost-versus-performance target, ALSAKR offers the right technology for all common cap types."
    ),
    stats: [
      { label: s("الأغطية", "Cap types"), value: "Screw · Press · Twist" },
      { label: s("التحكم", "Control"), value: "SIEMENS PLC" },
      { label: s("الهيكل", "Frame"), value: "AISI 304" },
    ],
    specs: [
      s("رؤوس غلق بعزم قابل للضبط", "Adjustable-torque capping heads"),
      s("تغذية أغطية أوتوماتيكية", "Automatic cap feeding (elevator / vibratory)"),
      s("تكامل مباشر مع خط التعبئة", "Direct integration with the filling line"),
      ...control,
    ],
    options: [s("رؤوس سيرفو", "Servo capping heads"), s("فحص وجود الغطاء", "Cap-presence inspection"), s("رافع أغطية", "Cap elevator")],
    industries: ["food", "pharma", "cosmetics", "chemicals", "oils", "agro"],
  },
  {
    slug: "labelling-machine", category: "labelling", featured: true,
    img: "/img/fb/labelling-machine.jpg", gallery: ["/img/fb/labelling-machine.jpg", "/img/labelling.jpg", "/img/labelling-2.jpg", "/img/labelling-3.jpg", "/img/saturno.png"],
    name: s("ماكينة لصق الاستيكر", "Self-Adhesive Labelling Machine"),
    short: s("لصق على العبوات الأسطوانية والبيضاوية والمستطيلة بتكنولوجيا إيطالية.", "Cylindrical, oval and rectangular labelling, Italian technology."),
    desc: s(
      "أياً كان شكل عبوتك أسطوانياً أو بيضاوياً أو مستطيلاً، لدى الصقر حل لصق مناسب. أنظمة مبنية على تكنولوجيا إيطالية تضمن وصول منتجك للسوق بأفضل شكل.",
      "Whether your product is cylindrical, elliptical or rectangular, ALSAKR has a labelling solution for it, built on Italian technology so your products go to market in perfect shape."
    ),
    stats: [
      { label: s("السرعة", "Speed"), value: "0 – 70 m/min" },
      { label: s("المحركات", "Motors"), value: "Stepper" },
      { label: s("الكهرباء", "Power"), value: "220V 50Hz" },
    ],
    specs: [
      s("هيكل من الاستانلس ستيل AISI 304", "Stainless steel AISI 304 construction"),
      s("سرعة متغيرة من 0 حتى 70 متر/دقيقة", "Variable speed 0–70 m/min"),
      s("رأس لصق بضبط أفقي ورأسي وميل", "Label head with horizontal, vertical and tilt adjustment"),
      s("عرض السير القياسي 85 / 170 / 250 مم", "Standard conveyor width 85 / 170 / 250 mm"),
      s("طول السير 2000 أو 3000 مم", "Conveyor length 2000 or 3000 mm"),
      ...control,
    ],
    options: [
      s("لف كامل أو جزئي للعبوات الدائرية", "Rotary wrap / semi-wrap for round bottles"),
      s("سير جانبي للعبوات المخروطية", "Side-belt wrap for conical products"),
      s("نظام توسيط للعبوات البيضاوية", "Centering system for oval products"),
      s("طابعة تاريخ الإنتاج والصلاحية", "Hot/dry batch & expiry coder"),
      s("ترابيزة تحميل وتفريغ 800 / 1000 مم", "Load / discharge turntables 800 / 1000 mm"),
      s("نظام هوائي لختم الأمان", "Pneumatic security-seal applicator"),
    ],
    industries: ["food", "pharma", "cosmetics", "chemicals", "oils"],
  },
  {
    slug: "shrink-sleeve-machine", category: "labelling", featured: true,
    img: "/img/sleeve.jpg", gallery: ["/img/sleeve.jpg", "/img/sleever.jpg"],
    name: s("ماكينة السليف الحراري", "Shrink Sleeve Machine"),
    short: s("سليف كامل للجسم أو شريط أمان على الغطاء.", "Full-body sleeves and tamper-evident cap bands."),
    desc: s(
      "سواء كنت تحتاج سليف كامل للعبوة أو شريط أمان على الغطاء، لدى الصقر حل سليف حراري مبني على تكنولوجيا إيطالية.",
      "Whether you need a full-body application or a security band on the cap, ALSAKR has a shrink-sleeve solution built on Italian technology."
    ),
    stats: [
      { label: s("التطبيق", "Application"), value: "Body · Neck" },
      { label: s("التكنولوجيا", "Technology"), value: "Italian" },
      { label: s("النفق", "Tunnel"), value: "Steam / Hot air" },
    ],
    specs: [s("قص دقيق للسليف بالسيرفو", "Servo-driven precision sleeve cutting"), s("نفق انكماش بالبخار أو الهواء الساخن", "Steam or hot-air shrink tunnel"), ...control],
    options: [s("رأسين للجسم والغطاء معاً", "Dual head for body + cap band"), s("مولد بخار", "Steam generator")],
    industries: ["food", "cosmetics", "chemicals", "pharma"],
  },
  {
    slug: "vffs-packaging-machine", category: "packaging", featured: true,
    img: "/img/vffs.jpg", gallery: ["/img/vffs.jpg", "/img/vffs-2.jpg"],
    name: s("ماكينة التعبئة الرأسية VFFS", "VFFS Vertical Packaging Machine"),
    short: s("تعبئة من 50 جرام حتى 5 كجم بأشكال أكياس متعددة.", "50 g to 5 kg in pillow, block-bottom, quattro and stand-up bags."),
    desc: s(
      "ماكينات التعبئة الرأسية من تصنيع الصقر لتعبئة الحبوب والبودرة والسوائل، بأداء ممتاز مقابل السعر وتغيير سريع للمقاسات وتجهيزات متنوعة.",
      "ALSAKR vertical form-fill-seal machines pack grains, powders and liquids with an outstanding price/performance ratio, fast changeover and multiple equipment packages."
    ),
    stats: [
      { label: s("الإنتاجية", "Output"), value: "60 bags/min" },
      { label: s("الوزن", "Weight"), value: "50 g – 5 kg" },
      { label: s("الهيكل", "Frame"), value: "Steel / AISI 304" },
    ],
    specs: [
      s("شاسيه حديد مدهون إلكتروستاتيك أو استانلس AISI 304", "Powder-coated steel or AISI 304 stainless chassis"),
      s("أوزان من 50 جرام إلى 5 كيلوجرام", "Fill weights from 50 g to 5 kg"),
      s("إنتاجية حتى 60 كيس في الدقيقة", "Up to 60 bags per minute"),
      s("أكياس: وسادة، قاعدة، كواترو، واقف بسوستة", "Pillow, block-bottom, quattro and zip stand-up pouches"),
      ...control,
    ],
    options: [s("وزان متعدد الرؤوس", "Multihead weigher"), s("مغذي بريمة للبودرة", "Auger filler for powders"), s("أكواب حجمية", "Volumetric cup filler"), s("حقن نيتروجين", "Nitrogen flushing"), s("طابعة تاريخ", "Date coder")],
    industries: ["food", "agro", "chemicals", "pharma"],
  },
  {
    slug: "hffs-packaging-machine", category: "packaging",
    img: "/img/drums.jpg", gallery: ["/img/drums.jpg", "/img/vffs-3.jpg"],
    name: s("ماكينة التعبئة الأفقية HFFS", "HFFS Horizontal Packaging Machine"),
    short: s("ساشيه لحام ثلاثي أو رباعي للأرز والبودرة والسوائل والمجمدات.", "3/4-side-seal sachets for rice, powder, liquids and frozen veg."),
    desc: s(
      "ماكينات الصقر الأفقية قابلة للتخصيص لتعبئة الأرز والبودرة والسوائل والخضروات المجمدة في أكياس لحام رباعي.",
      "ALSAKR HFFS machines can be customized to pack rice, powders, liquids and frozen vegetables in 4-side-seal sachets."
    ),
    stats: [
      { label: s("الإنتاجية", "Output"), value: "40 bags/min" },
      { label: s("الوزن", "Weight"), value: "30 – 100 g" },
      { label: s("اللحام", "Seal"), value: "3 / 4 side" },
    ],
    specs: [
      s("شاسيه حديد مدهون أو استانلس AISI 304", "Powder-coated steel or AISI 304 chassis"),
      s("أوزان من 30 إلى 100 جرام", "Fill weights 30 – 100 g"),
      s("إنتاجية حتى 40 كيس في الدقيقة", "Up to 40 bags per minute"),
      s("أنظمة تعبئة للبودرة أو السوائل", "Powder or liquid dosing systems"),
      ...control,
    ],
    options: [s("طابعة تاريخ الإنتاج والصلاحية", "Production / expiry date printer"), s("سير خروج المنتج", "Product outfeed conveyor"), s("تغذية أوتوماتيك للمنتج", "Automatic product feeding")],
    industries: ["food", "pharma", "agro"],
  },
  {
    slug: "multi-lane-sachet-machine", category: "packaging", featured: true,
    img: "/img/multilane.png", gallery: ["/img/multilane.png"],
    name: s("ماكينة ساشيه متعددة المسارات", "Multi-Lane Sachet Machine"),
    short: s("حتى 10 مسارات و900 ساشيه في الدقيقة، من 2 إلى 120 جرام.", "Up to 10 lanes and 900 sachets/min, 2 g to 120 g."),
    desc: s(
      "ماكينات متعددة المسارات لتعبئة البودرة والسوائل في ساشيهات لحام رباعي، مصنوعة بالكامل من الاستانلس AISI 304 وقابلة للتوسع حتى 10 مسارات.",
      "Multi-lane machines for powders and liquids in 4-side-seal sachets, built fully from AISI 304 stainless and expandable to 10 lanes."
    ),
    stats: [
      { label: s("الإنتاجية", "Output"), value: "900 /min" },
      { label: s("الوزن", "Weight"), value: "2 – 120 g" },
      { label: s("المسارات", "Lanes"), value: "≤ 10" },
    ],
    specs: [s("مصنوعة بالكامل من الاستانلس AISI 304", "Fully made of stainless steel AISI 304"), s("تعبئة من 2 جرام حتى 120 جرام", "Fills from 2 g up to 120 g"), s("حتى 10 مسارات", "Up to 10 lanes"), ...control],
    options: [s("قص شرائط أو مفرد", "Strip or single cut"), s("شق سهل الفتح", "Easy-tear notch")],
    industries: ["food", "pharma", "cosmetics"],
  },
  {
    slug: "thermoforming-machine", category: "packaging",
    img: "/img/thermoforming.jpg", gallery: ["/img/thermoforming.jpg"],
    name: s("ماكينة التشكيل الحراري", "Thermoforming Machine"),
    short: s("تعمل بالأفلام الصلبة والمرنة مع تغيير قوالب سهل.", "Runs rigid and flexible films with easy die change."),
    desc: s(
      "ماكينة تغليف بالتشكيل الحراري تعمل بالأفلام الصلبة والمرنة بأداء ممتاز مقابل السعر، مع سهولة تغيير القوالب وتجهيزات متعددة.",
      "Thermoforming packaging for rigid and flexible films with an outstanding price/performance ratio, easy die change and multiple equipment packages."
    ),
    stats: [
      { label: s("الأفلام", "Films"), value: "Rigid · Flexible" },
      { label: s("القوالب", "Dies"), value: "Quick change" },
      { label: s("الخيارات", "Options"), value: "Vacuum · MAP" },
    ],
    specs: [s("تغيير قوالب سريع", "Quick die change"), s("تغليف تحت تفريغ أو بالغاز المعدل", "Vacuum or MAP packaging"), ...control],
    options: [s("طباعة على الفيلم العلوي", "Top-web printing")],
    industries: ["food", "pharma"],
  },
  {
    slug: "flow-pack-machine", category: "packaging",
    img: "/img/flowpack.png", gallery: ["/img/flowpack.png"],
    name: s("ماكينة الفلوباك", "Flow Pack Machine"),
    short: s("تغليف أفقي للمنتجات الصلبة: بسكويت، صابون، حلويات.", "Flow wrapping for solids: biscuits, soap, confectionery."),
    desc: s("ماكينة فلوباك للتغليف الأفقي السريع للمنتجات الصلبة بلحام محكم.", "Flow-wrapper for fast horizontal packing of solid products with tight fin and end seals."),
    stats: [
      { label: s("النوع", "Type"), value: "Flow wrap" },
      { label: s("الدفع", "Drive"), value: "Servo" },
      { label: s("الهيكل", "Frame"), value: "AISI 304" },
    ],
    specs: [...control],
    options: [s("تغذية أوتوماتيك", "Automatic infeed")],
    industries: ["food", "cosmetics"],
  },
  {
    slug: "shrink-wrapping-machine", category: "end-of-line",
    img: "/img/shrink.jpg", gallery: ["/img/shrink.jpg"],
    name: s("ماكينة الشرنك", "Shrink Wrapping Machine"),
    short: s("لحام L ونفق حراري لتجميع العبوات.", "L-sealer and shrink tunnel for bundling packs."),
    desc: s("ماكينات شرنك أوتوماتيكية لتجميع وتغليف العبوات بفيلم حراري.", "Automatic shrink wrappers that bundle and protect packs with heat-shrink film."),
    stats: [
      { label: s("النوع", "Type"), value: "L-sealer" },
      { label: s("النفق", "Tunnel"), value: "Hot air" },
      { label: s("التشغيل", "Mode"), value: "Auto" },
    ],
    specs: [...control], options: [],
    industries: ["food", "chemicals", "cosmetics", "oils"],
  },
  {
    slug: "cartoning-machine", category: "end-of-line",
    img: "/img/cartoning.jpg", gallery: ["/img/cartoning.jpg"],
    name: s("ماكينة الكرتنة", "Cartoning Machine"),
    short: s("تشكيل وتعبئة وغلق الكرتون أوتوماتيكياً.", "Automatic carton erecting, loading and closing."),
    desc: s("ماكينات كرتنة عالية الأتمتة لتعبئة المنتجات في علب كرتونية.", "Highly automated cartoners that load products into folding cartons."),
    stats: [
      { label: s("النوع", "Type"), value: "Carton" },
      { label: s("التشغيل", "Mode"), value: "Auto" },
      { label: s("التحكم", "Control"), value: "PLC" },
    ],
    specs: [...control], options: [],
    industries: ["pharma", "food", "cosmetics"],
  },
  {
    slug: "carton-taping-machine", category: "end-of-line",
    img: "/img/taping.jpg", gallery: ["/img/taping.jpg"],
    name: s("ماكينة لصق شريط الكرتون", "Carton Taping Machine"),
    short: s("غلق الكراتين بالشريط من أعلى وأسفل.", "Top and bottom carton tape sealing."),
    desc: s("ماكينة غلق كراتين بالشريط اللاصق بضبط سهل للمقاسات.", "Case tape sealer with easy size adjustment."),
    stats: [
      { label: s("الغلق", "Seal"), value: "Top · Bottom" },
      { label: s("الشريط", "Tape"), value: "48 – 72 mm" },
      { label: s("التشغيل", "Mode"), value: "Semi / Auto" },
    ],
    specs: [s("ضبط سهل للعرض والارتفاع", "Easy width & height adjustment")], options: [],
    industries: ["food", "chemicals", "cosmetics", "oils", "agro", "pharma"],
  },
  {
    slug: "palletizer", category: "end-of-line",
    img: "/img/palletizer.jpg", gallery: ["/img/palletizer.jpg"],
    name: s("ماكينة البالتة", "Palletizer"),
    short: s("رص الكراتين على البالتات أوتوماتيكياً.", "Automatic case stacking on pallets."),
    desc: s("حلول بالتة أوتوماتيكية وروبوتية لنهاية خط الإنتاج.", "Automatic and robotic palletizing for the end of the line."),
    stats: [
      { label: s("النوع", "Type"), value: "Robotic" },
      { label: s("الأنماط", "Patterns"), value: "Programmable" },
      { label: s("التحكم", "Control"), value: "PLC" },
    ],
    specs: [...control], options: [],
    industries: ["food", "chemicals", "oils", "agro"],
  },
  {
    slug: "pallet-wrapper", category: "end-of-line",
    img: "/img/pallet-wrapper.png", gallery: ["/img/pallet-wrapper.png"],
    name: s("ماكينة تغليف البالتات", "Pallet Stretch Wrapper"),
    short: s("تغليف البالتات بالاستريتش لحماية الشحنات.", "Stretch-film wrapping that secures shipments."),
    desc: s("ماكينة لف البالتات بفيلم الاستريتش مع ضبط الشد وعدد اللفات.", "Turntable stretch wrapper with adjustable film tension and wrap count."),
    stats: [
      { label: s("الترابيزة", "Turntable"), value: "Ø 1650 mm" },
      { label: s("الحمل", "Load"), value: "2000 kg" },
      { label: s("الفيلم", "Film"), value: "Pre-stretch" },
    ],
    specs: [s("ضبط شد الفيلم وعدد اللفات", "Adjustable film tension and wrap cycles")], options: [],
    industries: ["food", "chemicals", "oils", "agro"],
  },
];

export const brands = [
  { name: "SIEMENS", img: "/img/siemens.jpg", desc: s("وحدات تحكم PLC وحلول أتمتة صناعية متكاملة.", "PLCs and complete industrial automation.") },
  { name: "SICK", img: "/img/sick.jpg", desc: s("حساسات ذكية لأتمتة المصانع واللوجستيات والعمليات بأمان وكفاءة.", "Sensor intelligence for factory, logistics and process automation.") },
  { name: "ABB", img: "/img/abb.jpg", desc: s("انفرترات ABB من 0.37 حتى 400 كيلووات متوفرة في مخزوننا المحلي.", "ABB drives from 0.37 kW to 400 kW in our local stock.") },
  { name: "Schneider", img: "/img/schneider.jpg", desc: s("منتجات التحكم وشاشات HMI ومكونات اللوحات.", "Control products, HMIs and panel components.") },
  { name: "Sanyo Denki", img: "", desc: s("محركات سيرفو ومراوح تبريد يابانية.", "Japanese servo systems and cooling fans.") },
  { name: "TOHO", img: "", desc: s("وحدات تحكم في درجة الحرارة.", "Temperature controllers.") },
  { name: "MURR", img: "", desc: s("حلول التوصيل والتوزيع الكهربائي للماكينات.", "Connectivity and power distribution for machines.") },
  { name: "RTA", img: "", desc: s("درايفرات ومحركات خطوة إيطالية.", "Italian stepper motor drives.") },
  { name: "Caho", img: "", desc: s("مكونات صناعية مساعدة.", "Auxiliary industrial components.") },
  { name: "Findeva", img: "", desc: s("مستشعرات ومفاتيح صناعية.", "Industrial sensors and switches.") },
];

// NOTE: only "years" comes from the existing site. Other figures are placeholders to confirm before publishing.
export const stats = [
  { value: 2026 - 1995, suffix: "+", label: s("سنة خبرة", "Years of experience") },
  { value: 850, suffix: "+", label: s("مشروع منفذ", "Projects completed") },
  { value: 400, suffix: "+", label: s("عميل سعيد", "Happy clients") },
  { value: 120, suffix: "+", label: s("مهندس وفني", "Engineers & technicians") },
];

export const services = [
  { icon: "MessagesSquare", title: s("الاستشارات ودراسة الخط", "Consulting & Line Study"), desc: s("نحلل منتجك وعبوتك وإنتاجك المستهدف لنقترح الخط الأمثل والتكلفة.", "We study your product, pack and target output to propose the optimal line and budget.") },
  { icon: "PencilRuler", title: s("التصميم الهندسي", "Engineering Design"), desc: s("تصميم ميكانيكي وكهربائي ثلاثي الأبعاد مخصص لمصنعك.", "Custom 3D mechanical and electrical design for your plant.") },
  { icon: "Factory", title: s("التصنيع والتجميع", "Manufacturing"), desc: s("تصنيع محلي بمصنعنا بالعاشر من رمضان بمكونات عالمية.", "Built in our 10th of Ramadan factory with global components.") },
  { icon: "Wrench", title: s("التركيب والتشغيل", "Installation & Commissioning"), desc: s("تركيب واختبار وتشغيل تجريبي في موقعك وتدريب فريقك.", "On-site installation, FAT/SAT testing and operator training.") },
  { icon: "LifeBuoy", title: s("خدمة ما بعد البيع", "After-Sales Service"), desc: s("دعم فني طوال دورة حياة الماكينة وصيانة وقائية.", "Life-cycle technical support and preventive maintenance.") },
  { icon: "Package", title: s("قطع الغيار والأتمتة", "Spare Parts & Automation"), desc: s("مخزون محلي من قطع غيار SIEMENS وSICK وABB وSchneider.", "Local stock of SIEMENS, SICK, ABB and Schneider parts.") },
];

export type NewsType = "event" | "news" | "project" | "blog";
// Sample posts: replace with real company news.
export const news: { slug: string; date: string; type: NewsType; img: string; title: T; excerpt: T }[] = [
  { slug: "food-africa-2025", date: "2025-12-09", type: "event", img: "/img/fb/expo/stand-2.jpg",
    title: s("الصقر في معرض Food Africa وProcessing & Packaging 2025", "ALSAKR at Food Africa & Processing and Packaging 2025"),
    excerpt: s("عرضنا أحدث خطوط التعبئة والتغليف الذكية في جناحنا بالقاعة 1 – G38، من 9 إلى 12 ديسمبر 2025 بالقاهرة.", "We showcased our latest smart filling and packing lines at Hall 1 – Stand G38, 9–12 December 2025, Cairo.") },
  { slug: "new-multilane", date: "2026-06-02", type: "news", img: "/img/multilane.png",
    title: s("إطلاق الجيل الجديد من ماكينات الساشيه متعددة المسارات", "New-generation multi-lane sachet machine"),
    excerpt: s("حتى 900 ساشيه في الدقيقة بهيكل استانلس كامل.", "Up to 900 sachets per minute with a full stainless frame.") },
  { slug: "detergent-line", date: "2026-03-18", type: "project", img: "/img/project-2.jpg",
    title: s("تسليم خط تعبئة منظفات متكامل", "Turnkey detergent filling line delivered"),
    excerpt: s("خط كامل من التعبئة حتى البالتة لعميل محلي.", "A complete line from filling to palletizing for a local manufacturer.") },
  { slug: "choose-filling-technology", date: "2026-01-12", type: "blog", img: "/img/liquid-filling.jpg",
    title: s("كيف تختار تقنية التعبئة المناسبة لسائلك؟", "Choosing the right filling technology"),
    excerpt: s("Overflow أم مكبس أم فلوميتر؟ دليل سريع حسب اللزوجة والدقة.", "Overflow, piston or flowmeter? A quick guide by viscosity and accuracy.") },
];

export const jobs = [
  { title: s("مهندس كهرباء وتحكم", "Electrical & Controls Engineer"), type: s("دوام كامل · العاشر من رمضان", "Full-time · 10th of Ramadan") },
  { title: s("مهندس مبيعات ماكينات", "Machinery Sales Engineer"), type: s("دوام كامل · القاهرة", "Full-time · Cairo") },
  { title: s("فني صيانة ميكانيكية", "Mechanical Service Technician"), type: s("دوام كامل · ميداني", "Full-time · Field") },
];

export const gallery = [
  "/img/fb/expo-filler.jpg", "/img/fb/capping-head.jpg", "/img/fb/shampoo-line.jpg", "/img/fb/turnkey-line.jpg",
  "/img/fb/oil-line.jpg", "/img/fb/labelling-machine.jpg", "/img/fb/bottles-turntable.jpg", "/img/fb/capping-line.jpg", "/img/fb/supplements-line.jpg", "/img/fb/control-panel.jpg",
  "/img/liquid-filling.jpg", "/img/labelling-2.jpg", "/img/project-1.jpg", "/img/capping.jpg",
  "/img/vffs.jpg", "/img/project-2.jpg", "/img/sleeve.jpg", "/img/siemens-panel.jpg",
  "/img/multilane.png", "/img/thermoforming.jpg", "/img/labelling-3.jpg", "/img/factory.jpg",
];

// Public videos from the company Facebook page (facebook.com/ags2030), embedded with Facebook's player.
export type Video = { id: string; poster: string; title: T; product?: string; industry?: IndustryId };
export const videos: Video[] = [
  { id: "2038545836842865", poster: "/img/fb/oil-line.jpg", product: "liquid-filling-machine", industry: "oils",
    title: s("خط تعبئة وتغليف زيوت الطعام", "Edible oil filling & packaging line") },
  { id: "2213324285880743", poster: "/img/fb/labelling-machine.jpg", product: "labelling-machine", industry: "cosmetics",
    title: s("ماكينة لصق الليبل على العبوات", "Bottle labelling machine") },
  { id: "4533817426878266", poster: "/img/fb/bottles-turntable.jpg", product: "liquid-filling-machine", industry: "agro",
    title: s("خط إنتاج متكامل للأسمدة والمبيدات", "Complete fertilizer & pesticide line") },
  { id: "4622431931409388", poster: "/img/fb/capping-line.jpg", product: "capping-machine", industry: "food",
    title: s("تعبئة السوائل الغذائية بالتكنولوجيا المناسبة", "Food liquids filling, the right technology") },
  { id: "2119286305340802", poster: "/img/fb/videos/2119286305340802.jpg", product: "liquid-filling-machine", industry: "oils",
    title: s("خط تعبئة وتغليف زيت الزيتون", "Olive oil filling & packaging line") },
  { id: "4403967446599914", poster: "/img/fb/videos/4403967446599914.jpg", product: "liquid-filling-machine", industry: "food",
    title: s("خط تعبئة العصائر والسوائل الغذائية", "Juice & food liquids filling line") },
  { id: "1362723590264250", poster: "/img/multilane.png", product: "multi-lane-sachet-machine", industry: "pharma",
    title: s("ماكينة تعبئة الساشيه بسرعة ودقة", "Fast, accurate sachet packing") },
  { id: "1776655903556115", poster: "/img/fb/videos/1776655903556115.jpg", product: "liquid-filling-machine", industry: "agro",
    title: s("خطوط الأسمدة والمبيدات والمخصبات الزراعية", "Fertilizer, pesticide & agro lines") },
  { id: "1112143514851785", poster: "/img/fb/control-panel.jpg",
    title: s("مكونات عالمية في كل ماكينة", "World-class components in every machine") },
];

export const fbVideoEmbed = (id: string) =>
  `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(`https://www.facebook.com/ags2030/videos/${id}/`)}&show_text=false&width=1280&height=720`;

// Real exhibition photos from the company Facebook page.
export const exhibitions = [
  {
    name: s("معرض Food Africa وProcessing & Packaging", "Food Africa & Processing and Packaging"),
    place: s("القاهرة · القاعة 1 – جناح G38", "Cairo · Hall 1 – Stand G38"),
    date: s("9 – 12 ديسمبر 2025", "9 – 12 December 2025"),
    desc: s("عرضنا ماكينة تعبئة السوائل الأوتوماتيكية وماكينات لصق الليبل والتعبئة الرأسية، والتقينا بعملائنا وشركائنا من مختلف القطاعات.", "We exhibited our automatic liquid filler, labelling and VFFS machines and met customers and partners from across the industry."),
    photos: ["/img/fb/expo/stand-1.jpg", "/img/fb/expo/stand-2.jpg", "/img/fb/expo/stand-3.jpg", "/img/fb/expo/stand-4.jpg", "/img/fb/expo-filler.jpg", "/img/fb/expo/invite-2025.jpg"],
  },
];
