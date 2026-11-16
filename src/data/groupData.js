/**
 * Al Sakr Top Group — Unified Corporate & Technical Data Model
 * Consolidated from alsakr-machines and alsakronline-cyber.github.io
 * Strict compliance: No spare parts listings, no individual vendor brands.
 */

export const groupInfo = {
  name: {
    en: "Al Sakr Top Group",
    ar: "مجموعة الصقر توب جروب",
  },
  legalName: {
    en: "ALSAKR for Trading & Manufacturing (Joint-Stock Co.)",
    ar: "الصقر للتجارة والتصنيع (ش.م.م)",
  },
  tagline: {
    en: "Turnkey Packaging Machinery & Intelligent Conveyor Systems — Engineered in Egypt to World Standards",
    ar: "خطوط التعبئة والتغليف المتكاملة وأنظمة السيور الذكية — بهندسة مصرية وفق أرقى المعايير العالمية",
  },
  founded: 1995,
  founder: {
    en: "Eng. Hemdan Sakr",
    ar: "المهندس حمدان صقر",
  },
  headquarters: {
    en: "Plot VH, Industrial Area C3, 10th of Ramadan City, Egypt",
    ar: "القطعة VH، المنطقة الصناعية C3، مدينة العاشر من رمضان، مصر",
  },
  workingHours: {
    en: "Saturday – Thursday: 9:00 AM – 5:00 PM",
    ar: "السبت – الخميس: 9:00 ص – 5:00 م",
  },
  phones: [
    { display: "+20 10 98079365", tel: "+201098079365", label: { en: "Machinery Division", ar: "قطاع الماكينات" } },
    { display: "+20 10 20588660", tel: "+201020588660", label: { en: "Conveying Division", ar: "قطاع السيور" } },
    { display: "+20 10 21717453", tel: "+201021717453", label: { en: "Customer Support", ar: "خدمة العملاء" } },
  ],
  whatsapp: "201098079365",
  emails: [
    { address: "info@topgroupco.com", label: { en: "General Inquiries", ar: "الاستفسارات العامة" } },
    { address: "sales@topgroupco.com", label: { en: "Sales & Proposals", ar: "المبيعات والعروض" } },
    { address: "hagar@topgroupco.com", label: { en: "Engineering & Conveying", ar: "الهندسة والسيور" } },
  ],
  socials: [
    { name: "Facebook", url: "https://www.facebook.com/ags2030/", icon: "facebook" },
    { name: "LinkedIn", url: "https://www.linkedin.com/company/143707116", icon: "linkedin" },
    { name: "YouTube", url: "https://www.youtube.com/@AlsakrForConveyingHandlingSyst", icon: "youtube" },
  ],
  mapEmbedUrl: "https://www.google.com/maps?q=Industrial+Area+C3,+10th+of+Ramadan+City,+Egypt&output=embed",
  
  // Statistical highlights (source-verified & flagged placeholders noted in documentation)
  stats: [
    {
      value: 1995,
      isYear: true,
      label: { en: "Year Founded", ar: "سنة التأسيس" },
      sub: { en: "Over 30 years industrial legacy", ar: "أكثر من 30 عاماً من الريادة الصناعية" }
    },
    {
      value: 200,
      suffix: "+",
      label: { en: "Conveyor Systems Installed", ar: "نظام سيور تم تركيبه" },
      sub: { en: "In modern food, pharma & FMCG plants", ar: "في مصانع الأغذية والأدوية والسلع الاستهلاكية" }
    },
    {
      value: 100,
      suffix: "%",
      label: { en: "Egyptian Engineering & Fabrication", ar: "هندسة وتصنيع محلي بالكامل" },
      sub: { en: "10th of Ramadan City plant facility", ar: "بمصانعنا في مدينة العاشر من رمضان" }
    },
    {
      value: 24,
      suffix: "/7",
      label: { en: "Technical Support & FAT", ar: "دعم فني واختبارات مصنعية" },
      sub: { en: "Full lifecycle maintenance & training", ar: "صيانة شاملة وتدريب تشغيلي مستمر" }
    }
  ]
};

/**
 * Packaging & Filling Machinery Division
 */
export const machineryProducts = [
  {
    id: "liquid-filling-machine",
    category: "filling",
    name: {
      en: "Automatic Liquid Filling Machine",
      ar: "ماكينة تعبئة السوائل الأوتوماتيكية",
    },
    short: {
      en: "Inline automatic filling for free-flowing to highly viscous liquids from 50 ml to 20 L.",
      ar: "تعبئة خطية أوتوماتيكية للسوائل الخفيفة واللزجة من 50 مل حتى 20 لتر.",
    },
    description: {
      en: "Engineered for high accuracy and clean operation across water, juices, oils, creams, chemicals and detergents. Features stainless steel AISI 304 chassis, AISI 316L liquid contact parts, no-bottle no-fill safety logic, pneumatic anti-drip nozzles, and full touch-screen PLC automation.",
      ar: "صُممت لتحقيق أعلى درجات الدقة والتشغيل النظيف للمياه والعصائر والزيوت والكريمات والكيماويات والمنظفات. هيكل كامل من الاستانلس 304 وأجزاء ملامسة من الاستانلس 316L مع نظام أمان (لا زجاجة = لا تعبئة) وفوهات مانعة للتسريب وتحكم ذكي بشاشة لمس.",
    },
    img: "/public/img/liquid-filling.jpg",
    gallery: ["/public/img/liquid-filling.jpg", "/public/img/fb/expo-filler.jpg", "/public/img/fb/oil-line.jpg", "/public/img/fb/turnkey-line.jpg"],
    keyStats: [
      { label: { en: "Max Speed", ar: "أقصى إنتاجية" }, value: "6,000 BPH" },
      { label: { en: "Dosing Range", ar: "مدى التعبئة" }, value: "50 ml – 20 L" },
      { label: { en: "Accuracy", ar: "نسبة الدقة" }, value: "±0.25%" }
    ],
    specs: [
      { en: "Machine chassis in heavy-duty stainless steel AISI 304", ar: "شاسيه ماكينة متين من الاستانلس ستيل AISI 304" },
      { en: "All product contact parts in sanitary stainless steel AISI 316L", ar: "جميع الأجزاء الملامسة للمنتج من الاستانلس الصحي AISI 316L" },
      { en: "Filling tech: Piston pump, overflow, gear pump, or mass flowmeter", ar: "تقنيات التعبئة: مكبس، أوفر فلو، مضخة تروس، أو فلوميتر كتلي" },
      { en: "Smart no-bottle / no-fill optical sensor detection", ar: "مستشعرات ضوئية ذكية: لا عبوة = لا تعبئة" },
      { en: "Multi-axis diving nozzles with anti-foam bottom-up filling", ar: "فوهات غاطسة متعددة المحاور للتعبئة من القاع لمنع الرغوة" },
      { en: "CIP (Clean-in-Place) sanitary sanitization compatibility", ar: "توافق كامل مع أنظمة الغسيل والتعقيم في المكان (CIP)" }
    ],
    industries: ["food", "pharma", "cosmetics", "chemicals", "oils", "agro"]
  },
  {
    id: "capping-machine",
    category: "filling",
    name: {
      en: "Automatic Capping Machine",
      ar: "ماكينة الغطاء (الكابينج الأوتوماتيكية)",
    },
    short: {
      en: "High-precision capping for screw, press-on, twist-off, and child-resistant closures.",
      ar: "غلق عالي الدقة للأغطية القلاووظ والكبس والـ Twist-off والأغطية المقاومة للأطفال.",
    },
    description: {
      en: "Versatile automatic capping system with torque-controlled magnetic heads and automated sorting bowl/elevator. Seamlessly synchronizes with inline fillers and down-stream conveyors to prevent neck deformation or cap cross-threading.",
      ar: "نظام كابينج أوتوماتيكي متعدد الاستخدامات برؤوس مغناطيسية لضبط عزم الإحكام ومغذي أغطية أوتوماتيكي. يتكامل بانسيابية مع خطوط التعبئة وسيور النقل لمنع انحراف الغطاء أو تلف عنق الزجاجة.",
    },
    img: "/public/img/capping.jpg",
    gallery: ["/public/img/capping.jpg", "/public/img/capping-2.jpg", "/public/img/fb/capping-head.jpg", "/public/img/fb/capping-line.jpg"],
    keyStats: [
      { label: { en: "Cap Types", ar: "أنواع الأغطية" }, value: "Screw · Press · Twist" },
      { label: { en: "Torque Control", ar: "التحكم بالعزم" }, value: "Magnetic Clutch" },
      { label: { en: "Frame", ar: "الهيكل" }, value: "AISI 304 Stainless" }
    ],
    specs: [
      { en: "Calibrated magnetic torque heads with micrometer adjustment", ar: "رؤوس غلق مغناطيسية مع ضبط دقيق لمستوى العزم" },
      { en: "Automatic vibratory bowl or mechanical waterfall cap elevator", ar: "مغذي وموجّه أغطية أوتوماتيكي اهتزازي أو مصعد ميكانيكي" },
      { en: "Tool-less quick changeover for different bottle diameters", ar: "تغيير سريع للمقاسات دون الحاجة إلى أدوات معقدة" },
      { en: "Missing cap inspection and automatic rejection station", ar: "محطة فحص وجود الغطاء مع طرد أوتوماتيكي للعبوات المعيبة" }
    ],
    industries: ["food", "pharma", "cosmetics", "chemicals", "oils", "agro"]
  },
  {
    id: "labelling-machine",
    category: "labelling",
    name: {
      en: "Self-Adhesive Labelling Machine",
      ar: "ماكينة لصق الاستيكر (الليبل) الأوتوماتيكية",
    },
    short: {
      en: "High-speed wrap-around, front/back and top labelling engineered with Italian technology.",
      ar: "لصق أوتوماتيكي سريع على العبوات الأسطوانية والبيضاوية والمسطحة بتكنولوجيا إيطالية.",
    },
    description: {
      en: "Industrial self-adhesive labeler delivering pinpoint accuracy on bottles, jars, cans, and cartons at speeds up to 70 m/min. Equipped with multi-axis applicator adjustments, synchronised bottle spacing units, and optional thermal transfer date coders.",
      ar: "ماكينة لصق استيكر ذاتي اللصق بدقة فائقة على العبوات الدائرية والبيضاوية والكراتين بسرعات تصل إلى 70 م/دقيقة. مزودة بضبط متعدد المحاور لرؤوس اللصق وجهاز تباعد العبوات وطابعات تاريخ الإنتاج.",
    },
    img: "/public/img/fb/labelling-machine.jpg",
    gallery: ["/public/img/fb/labelling-machine.jpg", "/public/img/project-1.jpg"],
    keyStats: [
      { label: { en: "Linear Speed", ar: "سرعة السحب" }, value: "Up to 70 m/min" },
      { label: { en: "Drive Type", ar: "نظام الدفع" }, value: "Micro-Step Servo" },
      { label: { en: "Accuracy", ar: "دقة التمركز" }, value: "±0.5 mm" }
    ],
    specs: [
      { en: "Heavy-duty 304 stainless steel base and anodized aluminum supports", ar: "قاعدة قوية من الاستانلس ستيل 304 ودعامات ألومنيوم مؤكسد" },
      { en: "High-resolution optical label sensor with clear label capability", ar: "حساسات ضوئية فائقة الحساسية تدعم الاستيكر الشفاف والعادي" },
      { en: "Motorised wrapping belt station for 360° cylindrical bottles", ar: "سير تدوير كهربائي لالتفاف الليبل الكامل 360° حول الزجاجات" },
      { en: "Top stabilization belt for high-speed flat or oval containers", ar: "سير علوي لتثبيت وتوجيه العبوات البيضاوية والمفلطحة" }
    ],
    industries: ["food", "pharma", "cosmetics", "chemicals", "oils"]
  },
  {
    id: "shrink-sleeve-machine",
    category: "labelling",
    name: {
      en: "Automatic Shrink Sleeve Machine",
      ar: "ماكينة السليف الحراري (الشيرينك سليف)",
    },
    short: {
      en: "Full-body sleeve labeling and tamper-evident cap neck banding with heat tunnel.",
      ar: "سليف حراري لكامل جسم العبوة أو شريط أمان لضمان سلامة الغطاء مع نفق انكماش.",
    },
    description: {
      en: "Engineered for high-impact 360° decorative packaging and tamper-evident neck bands. Features high-speed servo rotary cutting blades and custom dual-zone steam or hot-air shrink tunnels for wrinkle-free finishing on irregular bottles.",
      ar: "ماكينة متطورة لتطبيق ملصقات السليف الشاملة وأشرطة الأمان حول الأغطية. تتميز بسكاكين قطع دوارة بسيرفو موتور وأنفاق انكماش بالبخار أو الهواء الساخن لتغليف متناسق بدون تجاعيد.",
    },
    img: "/public/img/fb/expo-filler.jpg",
    gallery: ["/public/img/fb/expo-filler.jpg", "/public/img/project-2.jpg"],
    keyStats: [
      { label: { en: "Application", ar: "نوع التطبيق" }, value: "Full Body & Neck Band" },
      { label: { en: "Cutting Drive", ar: "نظام القطع" }, value: "High-Speed Servo" },
      { label: { en: "Tunnel Type", ar: "نظام النفق" }, value: "Steam / Hot-Air Dual" }
    ],
    specs: [
      { en: "Servo-driven feeding mandrel with quick bottle format interchange", ar: "عمود توجيه بالسيرفو مع تبديل سريع لمقاسات العبوات" },
      { en: "Synchronized bottom brush and positioning belt", ar: "فرش سفلية وسير توجيه لضبط موضع السليف بدقة متناهية" },
      { en: "Integrated steam collector and temperature regulation", ar: "منظومة سحب بخار وتحكم ذكي بدرجات حرارة النفق" }
    ],
    industries: ["beverage", "food", "cosmetics", "chemicals"]
  },
  {
    id: "vffs-packaging-machine",
    category: "packaging",
    name: {
      en: "VFFS Vertical Packaging Machine",
      ar: "ماكينة التعبئة والتغليف الرأسية (VFFS)",
    },
    short: {
      en: "Continuous vertical bagging from 50 g to 5 kg for grains, powders, snacks and liquids.",
      ar: "تعبئة وتغليف رأسي متواصل من 50 جم حتى 5 كجم للحبوب والمساحيق والسناكس والسوائل.",
    },
    description: {
      en: "Robust vertical form-fill-seal system for pillow bags, gusseted bags, block-bottom, and quad-seal pouches. Integrates multi-head weighers, auger dosers, or volumetric cups with servo-driven film pull belts and pneumatic sealing jaws.",
      ar: "ماكينة تغليف رأسية قوية لتشكيل وتعبئة وغلق أكياس الوسادة والقاعدة المسطحة والكواترو. تتكامل مع موازين متعددة الرؤوس ومغذيات بريمة للمساحيق مع سحب الفيلم بسيرفو وفكوك لحام هوائية محكمة.",
    },
    img: "/public/img/vffs.jpg",
    gallery: ["/public/img/vffs.jpg", "/public/img/drums.jpg"],
    keyStats: [
      { label: { en: "Speed", ar: "السرعة" }, value: "Up to 60 bags/min" },
      { label: { en: "Weight Range", ar: "مدى الوزن" }, value: "50 g – 5 kg" },
      { label: { en: "Bag Styles", ar: "أشكال الأكياس" }, value: "Pillow · Gusset · Quad" }
    ],
    specs: [
      { en: "Twin servo motors for film pulling belts and horizontal seal", ar: "محركا سيرفو مزدوجان لسحب الفيلم وفكوك اللحام الأفقي" },
      { en: "Automatic optical film tracking with photocell registration", ar: "تتبع آلي لعلامة الطباعة (الفوتوسيل) لضبط مكان اللحام" },
      { en: "Nitrogen gas flushing port for extended food shelf-life", ar: "تجهيز بحقن النيتروجين لحفظ الأغذية وإطالة الصلاحية" }
    ],
    industries: ["food", "agro", "chemicals", "pharma"]
  },
  {
    id: "multi-lane-sachet-machine",
    category: "packaging",
    name: {
      en: "Multi-Lane Sachet Machine",
      ar: "ماكينة الساشيه متعددة المسارات",
    },
    short: {
      en: "High-density multi-lane packaging up to 10 lanes and 900 sachets/min for liquids and powders.",
      ar: "تعبئة ساشيه فائقة السرعة حتى 10 مسارات و900 ساشيه/دقيقة للسوائل والبودرة.",
    },
    description: {
      en: "Next-generation high-output machine producing 4-side sealed sachets for pharmaceuticals, ketchup, mayonnaise, shampoo, and powdered drinks. Fabricated in full AISI 304 with independent temperature loops on each lane.",
      ar: "جيل متطور من الماكينات عالية الطاقة الإنتاجية لتصنيع ساشيهات اللحام الرباعي للأدوية والكاتشب والمايونيز والشامبو والمشروبات البودرة. هيكل كامل من الاستانلس 304 مع تحكم حراري مستقل لكل مسار.",
    },
    img: "/public/img/multilane.png",
    gallery: ["/public/img/multilane.png"],
    keyStats: [
      { label: { en: "Output", ar: "الإنتاجية" }, value: "Up to 900/min" },
      { label: { en: "Lanes", ar: "عدد المسارات" }, value: "4 to 10 Lanes" },
      { label: { en: "Volume", ar: "الحجم" }, value: "2 g – 120 g" }
    ],
    specs: [
      { en: "Full sanitary stainless steel AISI 304 monobloc construction", ar: "بنية أحادية مدمجة بالكامل من الاستانلس ستيل الصحي AISI 304" },
      { en: "Easy-tear notch cutting and optional strip perforated linking", ar: "قطع شق سهل الفتح وخيار التثقيب لربط الساشيهات في أشرطة" },
      { en: "Dual doser capability for viscous gels or free-flowing granules", ar: "إمكانية تجهيز بوحدات جرعات مزدوجة للجل اللزج أو الحبيبات" }
    ],
    industries: ["pharma", "food", "cosmetics"]
  },
  {
    id: "thermoforming-machine",
    category: "packaging",
    name: {
      en: "Thermoforming Packaging Machine",
      ar: "ماكينة التشكيل الحراري (ثيرموفورمينج)",
    },
    short: {
      en: "Rigid and flexible film vacuum and modified atmosphere packaging (MAP).",
      ar: "تغليف بالتشكيل الحراري للأفلام الصلبة والمرنة تحت التفريغ والغاز المعدل (MAP).",
    },
    description: {
      en: "Designed for premium food and medical packaging. Creates custom blister trays from roll stock, inserts product, evacuates air or injects protective gas mixtures, and hermetically seals top film with quick die changeovers.",
      ar: "صُممت لتغليف الأغذية الفاخرة والمستلزمات الطبية. تشكل الصواني والعبوات من رول الفيلم، وتعبئ المنتج وتفرغ الهواء أو تحقن خليط الغاز الواقي مع لحام علوي محكم وتغيير سريع للقوالب.",
    },
    img: "/public/img/thermoforming.jpg",
    gallery: ["/public/img/thermoforming.jpg"],
    keyStats: [
      { label: { en: "Film Types", ar: "نوع الفيلم" }, value: "Rigid & Flexible" },
      { label: { en: "Atmosphere", ar: "الجو المحيط" }, value: "Vacuum & MAP" },
      { label: { en: "Die Change", ar: "تغيير القوالب" }, value: "Fast Tooling" }
    ],
    specs: [
      { en: "Heavy-duty Busch vacuum pump integration", ar: "مضخة تفريغ صناعية قوية عالية الكفاءة" },
      { en: "Modular forming, sealing and cutting stations", ar: "محطات تشكيل ولحام وقص معيارية متطورة" }
    ],
    industries: ["food", "pharma"]
  },
  {
    id: "flow-pack-machine",
    category: "packaging",
    name: {
      en: "Horizontal Flow-Pack Machine (HFFS)",
      ar: "ماكينة التغليف الأفقي (فلوباك)",
    },
    short: {
      en: "High-speed horizontal flow wrapping for solid bakery, confectionery, soaps, and hardware.",
      ar: "تغليف أفقي سريع لمنتجات المخابز والحلويات وقطع الصابون والأدوات الصلبة.",
    },
    description: {
      en: "High-speed horizontal wrapping with continuous infeed lugs, rotary heated sealing jaws, and synchronized reel holders for tight pillow wrap packaging.",
      ar: "ماكينة تغليف أفقي سريعة بناقل تغذية ذي نتوءات منتظمة وفكوك لحام دوارة ساخنة لحماية وتغليف القطع الصلبة بإحكام.",
    },
    img: "/public/img/flowpack.png",
    gallery: ["/public/img/flowpack.png"],
    keyStats: [
      { label: { en: "Speed", ar: "السرعة" }, value: "Up to 150 packs/min" },
      { label: { en: "Drive", ar: "نظام الدفع" }, value: "Triple Servo" },
      { label: { en: "Frame", ar: "الهيكل" }, value: "AISI 304 Stainless" }
    ],
    specs: [
      { en: "Touch screen recipe storage with digital length control", ar: "شاشة لمس مع ذاكرة برامج وضبط رقمي لطول الكيس" },
      { en: "No-product / no-bag sensing logic to eliminate wasted film", ar: "حساسات ذكية: لا منتج = لا كيس لمنع إهدار الفيلم" }
    ],
    industries: ["food", "cosmetics"]
  },
  {
    id: "cartoning-machine",
    category: "end-of-line",
    name: {
      en: "Automatic Cartoning Machine",
      ar: "ماكينة الكرتنة الأوتوماتيكية",
    },
    short: {
      en: "Automatic carton erecting, product loading (bottles, blisters, sachets) and tuck or glue closing.",
      ar: "تشكيل الكراتين وتعبئة المنتجات وغلقها أوتوماتيكياً بنظام الثني أو الغراء الساخن.",
    },
    description: {
      en: "Replaces manual labor at the cartoning stage. Feeds flat cartons from magazine, erects them with rotary vacuum arms, pushes items and leaflets inside, and securely seals flaps.",
      ar: "بديل متكامل للتعبئة اليدوية. تسحب الكراتين المطوية، وتفتحها بذراع شفط هوائي، وتدفع العبوات والنشرات بداخلها وتغلق الألسنة بإحكام.",
    },
    img: "/public/img/cartoning.jpg",
    gallery: ["/public/img/cartoning.jpg"],
    keyStats: [
      { label: { en: "Closure", ar: "نظام الغلق" }, value: "Tuck-in / Hot Melt" },
      { label: { en: "Feeding", ar: "التغذية" }, value: "Rotary Vacuum" },
      { label: { en: "Safety", ar: "الأمان" }, value: "Overload Clutch" }
    ],
    specs: [
      { en: "Leaflet insertion and batch embossing options", ar: "إمكانية إدخال النشرات الورقية وطباعة كود التشغيلة بالحفر" },
      { en: "Full enclosure guarding with CE safety interlocks", ar: "أبواب حماية شفافة مع حساسات أمان متطورة" }
    ],
    industries: ["pharma", "food", "cosmetics"]
  },
  {
    id: "palletizer-and-wrapping",
    category: "end-of-line",
    name: {
      en: "Robotic Palletizer & Stretch Wrapping Line",
      ar: "ماكينة الرص الآلي للبالتات والتغليف بالاستريتش",
    },
    short: {
      en: "End-of-line automated case stacking and motorized turntable stretch film wrapping.",
      ar: "رص آلي للكراتين على البالتات وتغليف نهائي بالفيلم المطاطي لحماية الشحنات.",
    },
    description: {
      en: "Turnkey end-of-line cell combining robotic or cartesian palletizing with an integrated 2,000 kg turntable stretch wrapper. Ensures stable, transport-ready pallet loads directly to warehouse dispatch.",
      ar: "خلية أوتوماتيكية متكاملة لنهاية الخط تجمع بين رص الكراتين بالذراع الآلي وتغليف البالتات حتى وزن 2000 كجم بالاستريتش لتجهيز الشحنات مباشرة للمستودع.",
    },
    img: "/public/img/palletizer.jpg",
    gallery: ["/public/img/palletizer.jpg", "/public/img/pallet-wrapper.png", "/public/img/taping.jpg", "/public/img/shrink.jpg"],
    keyStats: [
      { label: { en: "Load Capacity", ar: "أقصى حمولة" }, value: "2,000 kg" },
      { label: { en: "Turntable", ar: "قطر القرص" }, value: "Ø 1,650 mm" },
      { label: { en: "Pre-Stretch", ar: "نسبة الشد" }, value: "Up to 250%" }
    ],
    specs: [
      { en: "Programmable layer patterns for cartons, packs or sacks", ar: "أنماط رص مبرمجة للكراتين والعبوات والشكائر" },
      { en: "Automatic film clamp, cut and wipe-down system", ar: "مسك وقص ومسح الفيلم أوتوماتيكياً دون تدخل العامل" }
    ],
    industries: ["food", "chemicals", "oils", "agro", "beverage"]
  }
];

/**
 * Conveying & Material Handling Systems Division
 */
export const conveyingProducts = [
  {
    id: "flexible-chain-conveyors",
    name: {
      en: "Flexible Chain Conveyors",
      ar: "سيور الجنزير المرنة (فليكس شين)",
    },
    short: {
      en: "Low-friction plastic-chain conveyors that turn, climb and descend in one continuous run.",
      ar: "سيور بجنزير بلاستيكي منخفض الاحتكاك تنعطف وتصعد وتهبط في مسار متواصل بدون نقاط تحويل.",
    },
    description: {
      en: "Engineered from anodized aluminum or SUS304 stainless steel profiles with self-lubricating POM plastic chains. Negotiates tight horizontal curves and vertical inclines on a single motor drive, eliminating transfer jams on packaging lines.",
      ar: "مُصنعة من هياكل ألومنيوم مؤكسد أو ستانلس ستيل SUS304 مع جنازير بولي أسيتال (POM) ذاتية التزييت. تنعطف أفقياً ورأسياً بمحرك واحد مما يوفر المساحة ويمنع تكدس العبوات.",
    },
    poster: "/public/media/flex-chain-food.webp",
    keyStats: [
      { label: { en: "Chain Widths", ar: "عرض الجنزير" }, value: "44 – 295 mm" },
      { label: { en: "Max Speed", ar: "أقصى سرعة" }, value: "Up to 60 m/min" },
      { label: { en: "Single Run", ar: "الطول بمحرك" }, value: "Up to 30 meters" }
    ],
    specs: [
      { en: "Horizontal bends down to 150 mm radius for space-restricted layouts", ar: "منحنيات أفقية بنصف قطر يبدأ من 150 مم للمساحات الضيقة" },
      { en: "Options for friction-top, roller-top, and no-gap chain links", ar: "خيارات لجنزير عالي الاحتكاك، دوار، أو بدون فراغات للعبوات غير المستقرة" },
      { en: "Direct connection with fillers, cappers, labellers and cartoners", ar: "توصيل مباشر مع ماكينات التعبئة والتغطية واللصق والكرتنة" }
    ],
    industries: ["food", "pharma", "fmcg", "beverage", "cosmetics"]
  },
  {
    id: "spiral-conveyors",
    name: {
      en: "Spiral Conveyors (Vertical Elevators)",
      ar: "السيور الحلزونية (المصاعد اللولبية)",
    },
    short: {
      en: "Continuous vertical product flow on a compact footprint — elevates or lowers between floors.",
      ar: "نقل رأسي متواصل على أصغر مساحة ممكنة لرفع أو خفض المنتجات بين الطوابق والميزانين.",
    },
    description: {
      en: "Replaces slow mechanical lifts and cumbersome incline conveyors. Transports cartons, bottles, trays and bags vertically up or down in a continuous helix, saving valuable factory floor space and creating built-in cooling or buffer capacity.",
      ar: "البديل المثالي للمصاعد والمنحدرات الطويلة. تنقل الكراتين والزجاجات والأكياس رأسياً لأعلى أو لأسفل في مسار حلزوني متصل موفرة مساحات أرضية ثمينة وتوفر تبريداً أو تخزيناً مؤقتاً.",
    },
    poster: "/public/media/flex-spiral.webp",
    keyStats: [
      { label: { en: "Lift Height", ar: "ارتفاع الرفع" }, value: "1.0 m – 12.0 m" },
      { label: { en: "Footprint", ar: "قطر المساحة" }, value: "From Ø 1.2 m" },
      { label: { en: "Load per Item", ar: "وزن القطعة" }, value: "Up to 25 kg" }
    ],
    specs: [
      { en: "Smooth, continuous transport without indexing stops or tipping risks", ar: "تدفق انسيابي هادئ ومستمر دون توقفات متكررة أو خطر سقوط العبوات" },
      { en: "Heavy-duty frame in painted steel, anodized aluminum or SUS304", ar: "هيكل قوي من الحديد المدهون أو الألومنيوم أو الستانلس ستيل بالكامل" },
      { en: "Custom infeed and outfeed tangents to match any plant ceiling height", ar: "مقاطع دخول وخروج مخصصة لتلائم أي ارتفاع أو مسار داخل المصنع" }
    ],
    industries: ["food", "beverage", "fmcg", "logistics", "chemicals"]
  },
  {
    id: "buffer-accumulation-conveyors",
    name: {
      en: "Buffer & Accumulation Conveyors",
      ar: "سيور التجميع والتخزين المؤقت (بفر سيستم)",
    },
    short: {
      en: "Decouples production machinery so a short downstream stop never halts the entire line.",
      ar: "تفصل بين محطات الخط بحيث لا يتسبب توقف ماكينة واحدة في إيقاف خط الإنتاج بالكامل.",
    },
    description: {
      en: "Protects overall equipment effectiveness (OEE). When downstream machines like cartoners or labellers pause, products are collected gently without high line pressure and released smoothly when the line resumes.",
      ar: "تحمي الكفاءة الكلية للخط (OEE). عند توقف ماكينة الكرتنة أو اللصق للحظات، تتجمع العبوات بهدوء دون ضغط تلامسي وتُعاد للمسار بسلاسة فور عودة التشغيل.",
    },
    poster: "/public/media/buffer-chain.webp",
    keyStats: [
      { label: { en: "Buffer Time", ar: "زمن التجميع" }, value: "1 – 15 Minutes" },
      { label: { en: "Lanes", ar: "عدد الحارات" }, value: "1 – 12 Lanes" },
      { label: { en: "Logic", ar: "نظام التدفق" }, value: "FIFO & Dynamic" }
    ],
    specs: [
      { en: "Low back-pressure rollers and micro-pitch low-friction chains", ar: "بكرات منخفضة الضغط وجنازير دقيقة لمنع احتكاك وخدش العبوات" },
      { en: "Integrated optical zone sensors and speed-matching variable drives", ar: "حساسات ضوئية ومغيرات سرعة تتكيف تلقائياً مع وتيرة الماكينات" }
    ],
    industries: ["beverage", "pharma", "fmcg", "food"]
  },
  {
    id: "pallet-conveyors",
    name: {
      en: "Pallet & Workpiece Fixture Conveyors",
      ar: "سيور الباليتات وحوامل القطع الصناعية",
    },
    short: {
      en: "Precision workpiece positioning through automated assembly, robotic cells and inspection.",
      ar: "نقل وتمركز حوامل المنتجات بدقة متناهية عبر محطات التجميع وخلايا الروبوت والفحص.",
    },
    description: {
      en: "Engineered for high-precision manufacturing. Workpieces ride on standardized carrier pallets around a loop with pneumatic stop gates, lift-and-locate positioning units, and automated diverters for testing, assembly, or robotic interaction.",
      ar: "مخصصة لعمليات التجميع والتصنيع الدقيق. تتحرك المنتجات على حوامل قياسية في مسار مغلق مع بوابات إيقاف هوائية ووحدات رفع وتمركز دقيقة للتكامل مع الروبوتات.",
    },
    poster: "/public/media/pallet-chain.webp",
    keyStats: [
      { label: { en: "Pallet Width", ar: "أبعاد الباليت" }, value: "160 – 640 mm" },
      { label: { en: "Repeatability", ar: "دقة التمركز" }, value: "±0.05 mm" },
      { label: { en: "Max Pallet Load", ar: "حمولة الباليت" }, value: "Up to 50 kg" }
    ],
    specs: [
      { en: "High-accuracy positioning modules for robotic vision and screwdriving", ar: "وحدات تثبيت فائقة الدقة لرؤية الروبوتات وربط المسامير الآلي" },
      { en: "RFID workpiece tracking tag compatibility for smart MES integration", ar: "دعم شرائح RFID لتتبع المنتجات والربط مع أنظمة إدارة المصنع (MES)" }
    ],
    industries: ["assembly", "automotive", "electronics", "medical"]
  },
  {
    id: "gripper-elevating-conveyors",
    name: {
      en: "Gripper & Elevating Conveyors",
      ar: "السيور القابضة وسيور الرفع الرأسي (جريبر)",
    },
    short: {
      en: "Facing synchronized chains gently grip containers from both sides for vertical elevation.",
      ar: "جنزيران متزامنان يقبضان على العبوة بلطف من الجانبين لرفعها أو خفضها رأسياً.",
    },
    description: {
      en: "Ideal for overhead walkway bridging and multi-level bottle transfer. Two facing flexible chains with durable elastomeric grip pads hold bottles or cans gently, raising or lowering them vertically up to 90 degrees.",
      ar: "الحل الأمثل للعبور فوق الممرات الأرضية ونقل الزجاجات بين المستويات. جنزيران متقابلان ببطانات مطاطية ناعمة يقبضان على العبوات ويرفعانها رأسياً بزاوية 90 درجة بأمان كامل.",
    },
    poster: "/public/media/gripper-conveyor.webp",
    keyStats: [
      { label: { en: "Vertical Angle", ar: "زاوية الصعود" }, value: "Up to 90° (Vertical)" },
      { label: { en: "Container Width", ar: "عرض العبوة" }, value: "20 – 300 mm" },
      { label: { en: "Speed", ar: "السرعة" }, value: "Up to 40 m/min" }
    ],
    specs: [
      { en: "Quick-adjust handwheel for rapid package width changeovers", ar: "عجلة يد سريعة لضبط المسافة بين الجنزيرين حسب مقاس العبوة" },
      { en: "Sanitary stainless steel washdown frame structure", ar: "هيكل متين من الستانلس ستيل ملائم لمناطق الغسيل بالماء" }
    ],
    industries: ["beverage", "cosmetics", "food", "pharma"]
  },
  {
    id: "modular-belt-conveyors",
    name: {
      en: "Modular Plastic Belt Conveyors",
      ar: "السيور البلاستيكية المعيارية (موديولار بلت)",
    },
    short: {
      en: "Heavy-duty, hygienic interlocking plastic belts for wide, wet, frozen, or heavy goods.",
      ar: "سيور بلاستيكية معيارية متينة وصحية للأحمال الثقيلة والمنتجات العريضة والمجمدة والرطبة.",
    },
    description: {
      en: "Constructed from interlocking thermoplastic modules driven by positive sprockets. Eliminates belt slippage and mistracking, with open-hinge structures allowing fast, thorough washdown for food, dairy, and meat processing halls.",
      ar: "مُصنعة من قطع بلاستيكية حرارية متداخلة تدور على تروس مسننة مانعة للانزلاق والانحراف. تصميم مفصلي مفتوح يتيح غسيلاً وتعقيماً سهلاً لمصانع اللحوم والألبان والأغذية.",
    },
    poster: "/public/media/modular-belt.webp",
    keyStats: [
      { label: { en: "Belt Widths", ar: "عرض السير" }, value: "150 – 2,000 mm" },
      { label: { en: "Max Load", ar: "أقصى حمولة" }, value: "150 kg/meter" },
      { label: { en: "Temperature", ar: "درجات الحرارة" }, value: "-40°C to +100°C" }
    ],
    specs: [
      { en: "Positive sprocket drive prevents tracking issues even when wet or oiled", ar: "إدارة مسننة تمنع الانحراف تماماً حتى مع وجود السوائل أو الزيوت" },
      { en: "FDA-approved polyoxymethylene (POM) and polypropylene (PP) grades", ar: "خامات بلاستيكية معتمدة من إدارة الغذاء والدواء (FDA)" },
      { en: "Individual module repair capability reduces maintenance downtime", ar: "إمكانية استبدال القطع المتضررة فقط دون الحاجة لتغيير السير بالكامل" }
    ],
    industries: ["food", "beverage", "logistics", "meat-processing"]
  },
  {
    id: "turnkey-conveying-systems",
    name: {
      en: "Turnkey Plant Conveying Networks",
      ar: "شبكات السيور والنقل المتكاملة (تسليم مفتاح)",
    },
    short: {
      en: "Factory-wide material handling architectures synchronizing every process and packaging machine.",
      ar: "شبكات نقل متكاملة لمصنعك بالكامل تربط وتنسق بين جميع ماكينات التعبئة والتغليف.",
    },
    description: {
      en: "Single-source engineering for complete manufacturing facilities. From 3D plant layout simulation to centralized PLC electrical panels, safety perimeter guarding, mechanical crossovers, and turnkey line commissioning.",
      ar: "مسؤولية هندسية موحدة لمصنعك. تشمل التخطيط ثلاثي الأبعاد ومحاكاة خطوط التدفق ولوحات التحكم الكهربائية المركزية وحواجز الأمان والتشغيل التجريبي الكامل حتى التسليم.",
    },
    poster: "/public/media/factory-system.webp",
    keyStats: [
      { label: { en: "Engineering Scope", ar: "نطاق الهندسة" }, value: "3D Layout → Handover" },
      { label: { en: "Controls", ar: "نظام التحكم" }, value: "Centralized SCADA/PLC" },
      { label: { en: "Safety Standards", ar: "معايير الأمان" }, value: "Full CE Practice" }
    ],
    specs: [
      { en: "Comprehensive 3D layout simulation and bottleneck elimination study", ar: "محاكاة شاملة ثلاثية الأبعاد ودراسة للقضاء على نقاط الاختناق في الخط" },
      { en: "Master PLC synchronization keeping all fillers, labelers, and packers in balance", ar: "مزامنة برمجية مركزية تضمن التوازن وتمنع تكدس الخطوط" },
      { en: "Full documentation package including electrical schematics and manuals", ar: "ملف توثيقي كامل يشمل المخططات الكهربائية والميكانيكية وكتيبات التشغيل" }
    ],
    industries: ["food", "pharma", "beverage", "fmcg", "chemicals", "assembly"]
  }
];

/**
 * Target Industrial Sectors
 */
export const industries = [
  {
    id: "food",
    name: { en: "Food & Bakery", ar: "الأغذية والمخابز" },
    icon: "wheat",
    img: "/public/img/vffs.jpg",
    desc: {
      en: "Hygienic stainless steel lines and FDA-compliant washdown conveyors for grains, powders, sauces, snacks, and frozen food.",
      ar: "خطوط استانلس ستيل صحية وسيور قابلة للغسيل معتمدة غذائياً لتعبئة الحبوب والمساحيق والصوصات والمجمدات.",
    },
    examples: { en: "Juices · Rice · Sugar · Spices · Frozen veg · Dough", ar: "عصائر · أرز · سكر · توابل · خضروات مجمدة · مخبوزات" },
    recommendedMachinery: ["liquid-filling-machine", "vffs-packaging-machine", "flow-pack-machine"],
    recommendedConveyors: ["modular-belt-conveyors", "spiral-conveyors", "flexible-chain-conveyors"]
  },
  {
    id: "pharma",
    name: { en: "Pharmaceuticals", ar: "الصناعات الدوائية" },
    icon: "pill",
    img: "/public/img/fb/supplements-line.jpg",
    desc: {
      en: "GMP-compliant packaging and low-particle conveying with 316L contact parts, CIP wash, and high dosing precision.",
      ar: "خطوط مطابقة لمعايير التصنيع الدوائي الجيد (GMP) بأجزاء تلامس 316L ودقة جرعات فائقة مع غسيل CIP.",
    },
    examples: { en: "Syrups · Drops · Ointments · Powder sachets · Blister packs", ar: "شراب · نقط · مراهم · ساشيهات بودرة · شرائط أقراص" },
    recommendedMachinery: ["liquid-filling-machine", "capping-machine", "multi-lane-sachet-machine", "cartoning-machine"],
    recommendedConveyors: ["flexible-chain-conveyors", "buffer-accumulation-conveyors"]
  },
  {
    id: "cosmetics",
    name: { en: "Cosmetics & Personal Care", ar: "مستحضرات التجميل والعناية الشخصية" },
    icon: "sparkles",
    img: "/public/img/fb/shampoo-line.jpg",
    desc: {
      en: "Volumetric piston filling for viscous lotions, shampoos, and creams with high-aesthetic label alignment and sleeve security.",
      ar: "تعبئة بمكابس دقيقة للوشن والشامبو والكريمات مع لصق ليبل عالي الدقة وسليف حراري جذاب للعبوات.",
    },
    examples: { en: "Shampoo · Body lotions · Creams · Perfumes · Sanitizers", ar: "شامبو · لوشن · كريمات · عطور · مطهرات" },
    recommendedMachinery: ["liquid-filling-machine", "labelling-machine", "shrink-sleeve-machine"],
    recommendedConveyors: ["flexible-chain-conveyors", "gripper-elevating-conveyors"]
  },
  {
    id: "chemicals",
    name: { en: "Detergents & Industrial Chemicals", ar: "المنظفات والكيماويات الصناعية" },
    icon: "flask",
    img: "/public/img/fb/bottles-turntable.jpg",
    desc: {
      en: "Corrosion-proof dosing systems and anti-foam nozzle technology designed for corrosive chemicals and thick detergents.",
      ar: "أنظمة تعبئة مقاومة للكيماويات والقلويات وفوهات مانعة للرغوة والتسريب مصممة للمنظفات والكيماويات المنزلية.",
    },
    examples: { en: "Liquid detergents · Chlorine · Disinfectants · Paint · Solvents", ar: "منظفات سائلة · كلور · مطهرات · دهانات · مذيبات" },
    recommendedMachinery: ["liquid-filling-machine", "capping-machine", "palletizer-and-wrapping"],
    recommendedConveyors: ["spiral-conveyors", "flexible-chain-conveyors"]
  },
  {
    id: "oils",
    name: { en: "Edible & Lubricant Oils", ar: "زيوت الطعام والزيوت الصناعية" },
    icon: "droplets",
    img: "/public/img/fb/oil-line.jpg",
    desc: {
      en: "Mass flowmeter and gear pump filling lines handling containers from 250 ml to 20 L with zero oil dripping on containers.",
      ar: "خطوط تعبئة بالفلوميتر ومضخات التروس للزيوت النباتية وزيوت المحركات من 250 مل حتى 20 لتر بدون أي تسريب.",
    },
    examples: { en: "Cooking oil · Olive oil · Engine oil · Hydraulic lubricants", ar: "زيت طعام · زيت زيتون · زيوت محركات · شحومات هيدروليكية" },
    recommendedMachinery: ["liquid-filling-machine", "capping-machine", "labelling-machine"],
    recommendedConveyors: ["modular-belt-conveyors", "buffer-accumulation-conveyors"]
  },
  {
    id: "agro",
    name: { en: "Agrochemicals & Fertilizers", ar: "الكيماويات الزراعية والأسمدة" },
    icon: "sprout",
    img: "/public/img/fb/capping-head.jpg",
    desc: {
      en: "Vapour-recovery filling, inductive cap sealing, and chemical-safe handling for liquid and powder crop protection agents.",
      ar: "تعبئة آمنة مع سحب الأبخرة وغلق محكم بالحث الكهرومغناطيسي للمبيدات الزراعية والأسمدة السائلة والبودرة.",
    },
    examples: { en: "Pesticides · Liquid fertilizers · Soil nutrients · Seeds", ar: "مبيدات · أسمدة سائلة · مخصبات زراعية · بذور" },
    recommendedMachinery: ["liquid-filling-machine", "vffs-packaging-machine", "capping-machine"],
    recommendedConveyors: ["flexible-chain-conveyors", "spiral-conveyors"]
  }
];

/**
 * Engineering Services & Project Delivery Workflow
 */
export const engineeringServices = [
  {
    step: "01",
    title: { en: "Line Consultation & Needs Assessment", ar: "الاستشارات ودراسة متطلبات الخط" },
    desc: {
      en: "Our senior industrial engineers examine your packaging specifications, viscosity, bottle geometry, factory layout, and target hourly output to define the optimal line configuration and budget.",
      ar: "يدرس مهندسونا المتخصصون مواصفات منتجك ولزوجته وأشكال العبوات ومخطط المصنع وسرعة الإنتاج المستهدفة لاقتراح أفضل تركيبة ماكينات وسيور متوافقة مع ميزانيتك.",
    },
    icon: "compass"
  },
  {
    step: "02",
    title: { en: "3D Mechanical & Electrical Engineering", ar: "التصميم الميكانيكي والكهربائي ثلاثي الأبعاد" },
    desc: {
      en: "We create full 3D layout simulations, material flow diagrams, and custom electrical schematics using advanced CAD/CAM software to optimize footprint before any steel is cut.",
      ar: "نقوم بإنشاء محاكاة ثلاثية الأبعاد كاملة وتصميم مسار تدفق المنتجات والرسومات الكهربائية عبر برامج CAD/CAM المتقدمة لضمان استغلال المساحة قبل بدء التصنيع.",
    },
    icon: "box"
  },
  {
    step: "03",
    title: { en: "Precision In-House Manufacturing & FAT", ar: "التصنيع الدقيق والاختبار المصنعي (FAT)" },
    desc: {
      en: "All machinery chassis, conveyor tracks, and electrical panels are fabricated at our 10th of Ramadan City plant with rigorous Factory Acceptance Tests (FAT) using your actual containers.",
      ar: "يتم تصنيع وتجميع الماكينات وهياكل السيور ولوحات التحكم بمصانعنا في مدينة العاشر من رمضان مع إجراء اختبارات القبول المصنعية (FAT) بحضور العميل وباستخدام عبواته الفعلية.",
    },
    icon: "factory"
  },
  {
    step: "04",
    title: { en: "Site Installation, SAT & Commissioning", ar: "التركيب الميداني واختبارات الموقع والتشغيل" },
    desc: {
      en: "Experienced Al Sakr engineering crews handle mechanical anchoring, electrical wiring, PLC network tuning, and real production-speed Site Acceptance Testing (SAT) on your factory floor.",
      ar: "تتولى فرقنا الهندسية المتخصصة التثبيت الميكانيكي والتوصيلات الكهربائية وضبط شبكة التحكم واختبارات القبول الميدانية (SAT) بسرعة الإنتاج الكاملة في مصنعك.",
    },
    icon: "wrench"
  },
  {
    step: "05",
    title: { en: "Operator Training & Lifetime Technical Support", ar: "تدريب المشغلين والدعم الفني المستمر" },
    desc: {
      en: "Comprehensive hands-on training for your operators and maintenance staff, paired with direct rapid-response field support and scheduled preventive maintenance visits.",
      ar: "تدريب عملي شامل لفرق التشغيل والصيانة بمصنعك، مصحوباً باستجابة فنية سريعة وزيارات صيانة وقائية دورية لضمان استدامة الإنتاجية طوال دورة حياة المعدات.",
    },
    icon: "shield"
  }
];

/**
 * Projects & Exhibitions
 */
export const exhibitionsAndNews = [
  {
    id: "food-africa-2025",
    date: "9 – 12 Dec 2025",
    title: {
      en: "Al Sakr Showcase at Food Africa & Processing and Packaging 2025",
      ar: "مشاركة الصقر في معرض Food Africa وProcessing & Packaging 2025",
    },
    summary: {
      en: "Live demonstration of our high-speed automatic liquid fillers, flexible chain conveyors, and self-adhesive labeling machines at Cairo International Convention Centre (Hall 1, Stand G38).",
      ar: "عرض حي لأحدث ماكينات تعبئة السوائل الأوتوماتيكية وسيور الجنزير المرنة وماكينات لصق الليبل بمركز القاهرة الدولي للمؤتمرات (صالة 1، جناح G38).",
    },
    img: "/public/img/fb/expo/stand-1.jpg"
  },
  {
    id: "turnkey-detergent-line",
    date: "March 2026",
    title: {
      en: "Turnkey Multi-Level Detergent Filling & Packing Line Delivered",
      ar: "تسليم خط متكامل لتعبئة وتغليف المنظفات متعدد المستويات",
    },
    summary: {
      en: "Delivered a fully integrated packaging line comprising an anti-corrosion liquid filler, rotary capping station, buffer accumulation conveyors, and end-of-line palletizing for an Egyptian chemical producer.",
      ar: "تسليم خط إنتاج وتعبئة متكامل يشمل ماكينة تعبئة سوائل مقاومة للأحماض، ومحطة غطاء دوارة، وسيور تجميع مؤقت، وخلية رص آلي للكراتين لمصنع كيماويات مصري.",
    },
    img: "/public/img/project-2.jpg"
  },
  {
    id: "multi-lane-sachet-launch",
    date: "June 2026",
    title: {
      en: "New High-Speed 10-Lane Multi-Lane Sachet Machine Deployed",
      ar: "تشغيل الجيل الجديد من ماكينات الساشيه متعددة المسارات (10 مسارات)",
    },
    summary: {
      en: "Achieving output speeds up to 900 sachets per minute with full sanitary stainless steel monobloc structure for leading food and pharmaceutical companies.",
      ar: "تحقيق سرعات تصل إلى 900 ساشيه بالدقيقة بهيكل كامل من الاستانلس ستيل الصحي لكبرى شركات الأغذية والأدوية.",
    },
    img: "/public/img/multilane.png"
  }
];

/**
 * Frequently Asked Questions
 */
export const faqs = [
  {
    q: {
      en: "Are your machines and conveyor systems designed and manufactured in Egypt?",
      ar: "هل يتم تصميم وتصنيع الماكينات وأنظمة السيور لديكم في مصر؟"
    },
    a: {
      en: "Yes. Al Sakr Top Group operates a dedicated manufacturing and assembly facility in Industrial Area C3, 10th of Ramadan City, Egypt. We perform all mechanical engineering, CNC fabrication, electrical panel assembly, and testing in-house according to strict international industrial standards.",
      ar: "نعم. تمتلك مجموعة الصقر توب جروب مصنعاً متكاملاً للتصنيع والتجميع في المنطقة الصناعية C3 بمدينة العاشر من رمضان بمصر. نقوم بجميع أعمال الهندسة الميكانيكية وتشكيل المعادن وتجميع لوحات التحكم والبرمجة محلياً وفق أرقى المعايير العالمية."
    }
  },
  {
    q: {
      en: "Can you provide a complete turnkey production line from filling to palletizing?",
      ar: "هل يمكنكم توريد خط إنتاج متكامل من التعبئة وحتى الرص على البالتات؟"
    },
    a: {
      en: "Absolutely. Turnkey line engineering is our core specialty. We synchronize liquid filling, capping, sleeve/label application, cartoning, flexible conveying networks, spiral elevators, and robotic palletizing into a balanced, single-supplier integrated system.",
      ar: "بالتأكيد. توريد الخطوط المتكاملة بنظام تسليم المفتاح هو صميم تخصصنا. نقوم بربط ومزامنة ماكينات التعبئة والتغطية واللصق والسليف والكرتنة مع شبكات السيور المرنة والمصاعد الحلزونية والرص الآلي كشريك هندسي موحد."
    }
  },
  {
    q: {
      en: "What materials and automation standards do you use in your equipment?",
      ar: "ما هي الخامات ومعايير الأتمتة المستخدمة في معداتكم؟"
    },
    a: {
      en: "We construct all frames from sanitary AISI 304 stainless steel or anodized industrial aluminum, with AISI 316L for liquid-contact parts in food and pharmaceutical lines. Automation features touch-screen PLC controllers, precision servo drives, and optical sensors.",
      ar: "نستخدم الاستانلس ستيل الصحي AISI 304 أو الألومنيوم المؤكسد للهياكل، مع استخدام استانلس AISI 316L للأجزاء الملامسة للسوائل في الخطوط الغذائية والدوائية، وتعتمد أتمتتنا على وحدات PLC بشاشات لمس ومحركات سيرفو متطورة وحساسات ضوئية دقيقة."
    }
  },
  {
    q: {
      en: "How long does a typical custom machine or conveyor project take to deliver?",
      ar: "كم تستغرق فترة تسليم ماكينة أو مشروع سيور مخصص؟"
    },
    a: {
      en: "Individual machines and standard conveyor modules are typically delivered within 3 to 6 weeks. Complete turnkey production line installations usually range from 8 to 14 weeks from approved 3D layout to factory floor commissioning.",
      ar: "تتراوح مدة تصنيع وتسليم الماكينات الفردية ووحدات السيور القياسية بين 3 إلى 6 أسابيع، بينما تتراوح مدة الخطوط المتكاملة وشبكات السيور الكبرى بين 8 إلى 14 أسبوعاً من اعتماد المخطط ثلاثي الأبعاد وحتى التشغيل التجريبي النهائي."
    }
  },
  {
    q: {
      en: "What after-sales service and warranty do you provide?",
      ar: "ما هو مستوى الضمان وخدمات ما بعد البيع التي تقدمونها؟"
    },
    a: {
      en: "We provide a comprehensive 12-month mechanical and electrical warranty, coupled with on-site operator training, Factory Acceptance Testing (FAT), and scheduled preventive maintenance service visits from our Egyptian engineering team.",
      ar: "نقدم ضماناً شاملاً لمدة 12 شهراً يشمل الأجزاء الميكانيكية والكهربائية، مع تدريب عملي للمشغلين، واختبارات قبول مصنعية (FAT)، وزيارات صيانة وقائية دورية مدعومة بفريق مهندسين متواجدين في مصر لسرعة الاستجابة."
    }
  }
];
