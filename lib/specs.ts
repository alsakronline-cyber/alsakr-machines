import type { T } from "./site";

const s = (ar: string, en: string): T => ({ ar, en });

export type Spec = {
  /** Technical data table. Values are typical and configurable per project. */
  table: { k: T; v: string }[];
  /** How the machine works, step by step. */
  steps: T[];
  /** Typical products / applications. */
  apps: T;
  faq: { q: T; a: T }[];
};

const K = {
  speed: s("الطاقة الإنتاجية", "Output"),
  range: s("مدى التعبئة", "Fill range"),
  accuracy: s("دقة التعبئة", "Accuracy"),
  heads: s("عدد الرؤوس / الفوهات", "Heads / nozzles"),
  frame: s("خامة الهيكل", "Frame material"),
  contact: s("الأجزاء الملامسة", "Contact parts"),
  plc: s("التحكم", "Control"),
  hmi: s("شاشة التشغيل", "HMI"),
  power: s("الكهرباء", "Power supply"),
  load: s("القدرة الكهربائية", "Installed power"),
  air: s("الهواء المضغوط", "Compressed air"),
  dims: s("الأبعاد التقريبية (ط×ع×ا)", "Approx. dimensions (L×W×H)"),
  weight: s("الوزن التقريبي", "Approx. weight"),
  film: s("عرض الفيلم", "Film width"),
  bag: s("مقاس الكيس", "Bag size"),
  seal: s("نظام اللحام", "Sealing"),
  label: s("مقاس الليبل", "Label size"),
  container: s("مقاس العبوة", "Container size"),
  caps: s("قطر الغطاء", "Cap diameter"),
  torque: s("عزم الغلق", "Capping torque"),
  conveyor: s("السير", "Conveyor"),
};

const common = {
  plc: { k: K.plc, v: "SIEMENS S7-1200 PLC" },
  hmi: { k: K.hmi, v: 'Schneider 7" – 10" touch' },
  power: { k: K.power, v: "380V 3Ph 50Hz / 220V" },
  air: { k: K.air, v: "6 bar · 0.3–0.8 m³/min" },
};

export const specs: Record<string, Spec> = {
  "liquid-filling-machine": {
    table: [
      { k: K.speed, v: "1,000 – 6,000 BPH" },
      { k: K.range, v: "50 ml – 20 L" },
      { k: K.accuracy, v: "±0.25% – ±0.5%" },
      { k: K.heads, v: "2 – 16" },
      { k: K.frame, v: "AISI 304" },
      { k: K.contact, v: "AISI 316L · PTFE · EPDM / Viton" },
      { k: K.conveyor, v: "Slat chain 82 – 190 mm" },
      common.plc, common.hmi, common.power,
      { k: K.load, v: "2 – 5 kW" },
      common.air,
      { k: K.dims, v: "2500 × 1300 × 2300 mm" },
      { k: K.weight, v: "650 – 1200 kg" },
    ],
    steps: [
      s("دخول العبوات على السير وعدّها بحساسات SICK.", "Containers enter on the conveyor and are counted by SICK sensors."),
      s("بوابات هوائية توقف العبوات أسفل الفوهات بدقة.", "Pneumatic gates index the containers precisely under the nozzles."),
      s("نزول الفوهات داخل العبوة (Bottom-up) لمنع الرغوة.", "Diving nozzles fill bottom-up to prevent foaming."),
      s("التعبئة بالمكبس أو الفلوميتر حسب الحجم المبرمج.", "Piston or flowmeter dosing to the programmed volume."),
      s("فوهات مانعة للتنقيط وخروج العبوات لماكينة الغطاء.", "Anti-drip nozzles close and containers move on to capping."),
    ],
    apps: s("المنظفات السائلة، الشامبو والكريمات، الزيوت النباتية وزيت الزيتون، زيوت المحركات، العصائر والصوصات، المبيدات والأسمدة السائلة.", "Liquid detergents, shampoos and creams, edible and olive oils, lube oils, juices and sauces, liquid pesticides and fertilizers."),
    faq: [
      { q: s("ما الفرق بين التعبئة بالمكبس والفلوميتر؟", "Piston or flowmeter: what's the difference?"), a: s("المكبس مناسب للسوائل اللزجة والكريمات بدقة عالية، والفلوميتر أسرع ومناسب للسوائل الخفيفة وتغيير الحجم من الشاشة مباشرة.", "Pistons suit viscous products and creams with high accuracy; flowmeters are faster for thin liquids and change volume straight from the HMI.") },
      { q: s("هل يمكن تعبئة أكثر من حجم على نفس الماكينة؟", "Can one machine fill several volumes?"), a: s("نعم، يتم حفظ حتى 100 برنامج تشغيل والتغيير بين المقاسات في دقائق.", "Yes. Up to 100 recipes are stored and changeover takes minutes.") },
      { q: s("هل تناسب المنتجات الكيماوية القوية؟", "Is it suitable for aggressive chemicals?"), a: s("نعم، مع إضافة الحماية الكيماوية وجوانات Viton وأجزاء ملامسة 316L.", "Yes, with the chemical-resistant package, Viton seals and 316L contact parts.") },
    ],
  },
  "capping-machine": {
    table: [
      { k: K.speed, v: "1,200 – 6,000 BPH" },
      { k: K.caps, v: "Ø 20 – 120 mm" },
      { k: K.torque, v: "0.5 – 8 N·m (servo, adjustable)" },
      { k: K.heads, v: "1 – 6 / 8-wheel spindle" },
      { k: K.container, v: "Ø 30 – 200 mm · H 50 – 350 mm" },
      { k: K.frame, v: "AISI 304" },
      common.plc, common.hmi, common.power,
      { k: K.load, v: "1.5 – 3 kW" },
      common.air,
      { k: K.dims, v: "2000 × 1100 × 2000 mm" },
    ],
    steps: [
      s("تغذية الأغطية أوتوماتيكياً من رافع أو هزاز وتوجيهها.", "Caps are fed and oriented by an elevator or vibratory bowl."),
      s("التقاط الغطاء ووضعه على فوهة العبوة.", "The cap is picked and placed on the container neck."),
      s("تثبيت العبوة بسيور جانبية لمنع الدوران.", "Side gripper belts hold the container to stop it spinning."),
      s("الغلق بعزم مضبوط بالسيرفو أو القابض المغناطيسي.", "Capping heads tighten to a set torque via servo or magnetic clutch."),
      s("حساس للتأكد من وجود الغطاء ورفض العبوة المعيبة.", "A sensor checks cap presence and rejects faulty containers."),
    ],
    apps: s("أغطية القلاووظ والضغط والـ Twist-off والبخاخات للزجاجات والجراكن والبرطمانات.", "Screw, press-on, twist-off and trigger caps on bottles, jerrycans and jars."),
    faq: [
      { q: s("هل تعمل مع أكثر من مقاس غطاء؟", "Does it handle several cap sizes?"), a: s("نعم، بتغيير أجزاء التغيير السريع خلال دقائق.", "Yes, with quick-change parts in a few minutes.") },
      { q: s("كيف يتم ضبط عزم الغلق؟", "How is torque controlled?"), a: s("بالسيرفو من الشاشة أو بقابض مغناطيسي، لضمان غلق متساوٍ بدون كسر الغطاء.", "By servo from the HMI or a magnetic clutch, for consistent tightness without breaking caps.") },
    ],
  },
  "labelling-machine": {
    table: [
      { k: K.speed, v: "Up to 200 /min (0 – 70 m/min)" },
      { k: K.label, v: "W 15 – 250 mm · L 20 – 300 mm" },
      { k: K.accuracy, v: "±0.5 – ±1 mm" },
      { k: K.container, v: "Ø 25 – 120 mm (round) · flat / oval" },
      { k: K.heads, v: "1 – 3 (front · back · wrap)" },
      { k: K.frame, v: "AISI 304" },
      { k: s("المحركات", "Drives"), v: "Stepper / servo" },
      { k: s("قطر رول الليبل", "Label roll"), v: "Core 76 mm · OD ≤ 300 mm" },
      common.plc, common.hmi,
      { k: K.power, v: "220V 1Ph 50Hz" },
      { k: K.load, v: "1.5 – 2.5 kW" },
      { k: K.dims, v: "2500 × 1300 × 1600 mm" },
    ],
    steps: [
      s("توسيط العبوة وتنظيم المسافات بعجلة فاصلة.", "Containers are centred and spaced by a separating wheel."),
      s("حساس المنتج يرسل إشارة لرأس اللصق.", "A product sensor triggers the label head."),
      s("حساس الليبل يحدد حافة الاستيكر بدقة.", "A label-gap sensor detects each label edge."),
      s("لصق الليبل ولفه بسير أو أسطوانة ضغط.", "The label is applied and wrapped by a belt or roller."),
      s("طباعة التاريخ والتشغيلة (اختياري) وخروج المنتج.", "Optional batch/date coding, then discharge."),
    ],
    apps: s("العبوات الدائرية والمسطحة والبيضاوية والمخروطية في الأغذية والأدوية والتجميل والمنظفات والزيوت.", "Round, flat, oval and conical containers in food, pharma, cosmetics, detergents and oils."),
    faq: [
      { q: s("هل يمكن لصق وجهين في نفس الوقت؟", "Can it label front and back at once?"), a: s("نعم، بنسخة الرأسين مع نظام توسيط للعبوات المسطحة.", "Yes, with the two-head version and a centring system for flat containers.") },
      { q: s("ما نوع الليبل المستخدم؟", "Which labels does it use?"), a: s("استيكر ذاتي اللصق (ورق، BOPP، شفاف) على رول قلب 76 مم.", "Self-adhesive labels (paper, BOPP, clear) on 76 mm cores.") },
    ],
  },
  "shrink-sleeve-machine": {
    table: [
      { k: K.speed, v: "Up to 250 /min" },
      { k: K.container, v: "Ø 28 – 125 mm · H 50 – 320 mm" },
      { k: s("سُمك الفيلم", "Film thickness"), v: "0.035 – 0.07 mm (PVC / PET / OPS)" },
      { k: s("طول السليف", "Sleeve length"), v: "30 – 250 mm" },
      { k: s("القص", "Cutting"), v: "Servo rotary cutter · ±1 mm" },
      { k: s("نفق الانكماش", "Shrink tunnel"), v: "Steam 0.2–0.4 MPa / hot air 12 kW" },
      { k: K.frame, v: "AISI 304" },
      common.plc, common.hmi, common.power,
      { k: K.dims, v: "2000 × 1000 × 2200 mm + tunnel" },
    ],
    steps: [
      s("فك الفيلم وتشكيله على مندريل حسب قطر العبوة.", "Film is unwound and opened over a mandrel sized to the container."),
      s("قص السليف بالسيرفو بطول دقيق.", "A servo cutter cuts each sleeve to length."),
      s("إسقاط السليف على العبوة المارة على السير.", "The sleeve is shot onto the passing container."),
      s("مرور العبوة في نفق البخار أو الهواء الساخن للانكماش.", "Containers pass a steam or hot-air tunnel to shrink the sleeve."),
    ],
    apps: s("سليف كامل للجسم وشريط أمان للأغطية للعصائر والألبان والمنظفات ومستحضرات التجميل.", "Full-body sleeves and tamper bands for juices, dairy, detergents and cosmetics."),
    faq: [
      { q: s("بخار أم هواء ساخن؟", "Steam or hot air?"), a: s("البخار يعطي انكماشاً أنعم للأشكال المعقدة، والهواء الساخن أبسط ولا يحتاج غلاية.", "Steam gives the smoothest shrink on complex shapes; hot air is simpler and needs no boiler.") },
    ],
  },
  "vffs-packaging-machine": {
    table: [
      { k: K.speed, v: "20 – 60 bags/min" },
      { k: K.range, v: "50 g – 5 kg" },
      { k: K.bag, v: "W 80 – 350 mm · L 100 – 450 mm" },
      { k: K.film, v: "≤ 720 mm" },
      { k: s("خامة الفيلم", "Film type"), v: "PE · OPP/CPP · laminated · aluminium" },
      { k: K.seal, v: "Back seal + top/bottom · servo jaws" },
      { k: s("أنظمة الوزن", "Dosing"), v: "Multihead weigher · auger · cups · liquid pump" },
      { k: K.frame, v: "Painted steel / AISI 304" },
      common.plc, common.hmi, common.power,
      { k: K.load, v: "3 – 5 kW" },
      common.air,
      { k: K.dims, v: "1500 × 1200 × 1800 mm (bagger)" },
    ],
    steps: [
      s("سحب الفيلم بسيور سيرفو وتشكيله حول الماسورة (Former).", "Servo belts pull the film around the forming tube."),
      s("لحام طولي لعمل الكيس من الخلف.", "A vertical sealer forms the back seam."),
      s("وزن المنتج بالموازين أو البريمة وإسقاطه داخل الكيس.", "The weigher or auger doses the product into the bag."),
      s("لحام عرضي وقص الكيس مع طباعة التاريخ.", "Horizontal jaws seal and cut the bag, with date coding."),
      s("خروج الكيس على سير فحص الوزن (اختياري).", "Bags discharge onto an optional checkweigher."),
    ],
    apps: s("الأرز والسكر والبقوليات، البهارات والبودرة، السناكس والشيبسي، المجمدات، الأسمدة والبذور.", "Rice, sugar and pulses, spices and powders, snacks and chips, frozen food, fertilizers and seeds."),
    faq: [
      { q: s("أي نظام وزن أختار؟", "Which dosing system do I need?"), a: s("الموازين متعددة الرؤوس للحبوب والسناكس، والبريمة للبودرة، والأكواب الحجمية للمنتجات المنتظمة الحبيبات.", "Multihead weighers for grains and snacks, augers for powders, volumetric cups for free-flowing granules.") },
      { q: s("هل يمكن عمل كيس واقف بسوستة؟", "Can it make zip stand-up pouches?"), a: s("نعم، مع وحدة الدويباك والسوستة.", "Yes, with the doypack and zipper unit.") },
    ],
  },
  "hffs-packaging-machine": {
    table: [
      { k: K.speed, v: "Up to 40 bags/min" },
      { k: K.range, v: "30 – 100 g / ml" },
      { k: K.bag, v: "W 60 – 150 mm · L 80 – 200 mm" },
      { k: K.seal, v: "3- or 4-side heat seal" },
      { k: K.film, v: "≤ 400 mm" },
      { k: K.frame, v: "Painted steel / AISI 304" },
      common.plc, common.hmi, common.power,
      { k: K.load, v: "3 – 4 kW" },
      { k: K.dims, v: "2200 × 900 × 1700 mm" },
    ],
    steps: [
      s("طي الفيلم أفقياً وتشكيل جيب الكيس.", "Film is folded horizontally to form the pouch."),
      s("لحامات جانبية لتكوين الكيس.", "Side seals create the pouch."),
      s("تعبئة البودرة أو السائل بالجرعة المحددة.", "Powder or liquid is dosed in."),
      s("لحام علوي وقص وطباعة التاريخ.", "Top seal, cut and date coding."),
    ],
    apps: s("الأرز والبودرة والسوائل والمجمدات في أكياس لحام ثلاثي أو رباعي.", "Rice, powders, liquids and frozen veg in 3- or 4-side-seal pouches."),
    faq: [
      { q: s("متى أختار HFFS بدلاً من VFFS؟", "When choose HFFS over VFFS?"), a: s("عندما تحتاج أكياس مسطحة بلحام رباعي أو منتجات تحتاج وضع أفقي.", "When you need flat 4-side-seal pouches or products that load best horizontally.") },
    ],
  },
  "multi-lane-sachet-machine": {
    table: [
      { k: K.speed, v: "Up to 900 sachets/min" },
      { k: s("عدد المسارات", "Lanes"), v: "2 – 10" },
      { k: K.range, v: "2 – 120 g / ml" },
      { k: K.bag, v: "W 30 – 100 mm · L 40 – 150 mm" },
      { k: K.seal, v: "4-side seal · easy-tear notch" },
      { k: K.film, v: "≤ 1000 mm" },
      { k: K.frame, v: "AISI 304 (full)" },
      common.plc, common.hmi, common.power,
      { k: K.load, v: "6 – 10 kW" },
      { k: K.dims, v: "2000 × 1600 × 2400 mm" },
    ],
    steps: [
      s("شق الفيلم العريض لعدة شرائط حسب عدد المسارات.", "Wide film is slit into strips, one per lane."),
      s("تشكيل الساشيهات في كل المسارات معاً.", "Sachets are formed across all lanes at once."),
      s("جرعة دقيقة بالبريمة أو مضخة المكبس لكل مسار.", "Each lane is dosed by its own auger or piston pump."),
      s("لحام وقص على شكل مفرد أو شرائط وعدّ أوتوماتيكي.", "Seal, cut singly or in strips, with automatic counting."),
    ],
    apps: s("القهوة والسكر واللبن البودرة، الشامبو والكريمات، الصوصات والعسل، الأدوية البودرة.", "Coffee, sugar and milk powder; shampoo and creams; sauces and honey; pharma powders."),
    faq: [
      { q: s("هل يمكن تشغيل عدد أقل من المسارات؟", "Can I start with fewer lanes?"), a: s("نعم، الماكينة قابلة للتوسع حتى 10 مسارات لاحقاً.", "Yes. The machine is expandable to 10 lanes later.") },
    ],
  },
  "thermoforming-machine": {
    table: [
      { k: K.speed, v: "6 – 12 cycles/min" },
      { k: s("عرض الفيلم السفلي", "Bottom film width"), v: "320 – 520 mm" },
      { k: s("عمق التشكيل", "Forming depth"), v: "≤ 120 mm" },
      { k: s("نوع التغليف", "Pack type"), v: "Vacuum · MAP · skin (option)" },
      { k: K.frame, v: "AISI 304" },
      common.plc, common.hmi, common.power,
      { k: K.load, v: "10 – 18 kW" },
      { k: K.dims, v: "4500 – 8000 × 1100 × 1900 mm" },
    ],
    steps: [
      s("تسخين الفيلم السفلي وتشكيله في القالب.", "The bottom film is heated and formed in the die."),
      s("وضع المنتج يدوياً أو أوتوماتيكياً.", "Products are loaded manually or automatically."),
      s("تفريغ الهواء أو حقن غاز وإغلاق بالفيلم العلوي.", "Vacuum or gas flush, then top-film sealing."),
      s("قص العبوات وخروجها.", "Packs are cut and discharged."),
    ],
    apps: s("الأجبان واللحوم والمخبوزات والأدوات الطبية.", "Cheese, meat, bakery and medical devices."),
    faq: [{ q: s("كم يستغرق تغيير القالب؟", "How long is a die change?"), a: s("حوالي 15 – 30 دقيقة حسب المقاس.", "About 15 – 30 minutes depending on size.") }],
  },
  "flow-pack-machine": {
    table: [
      { k: K.speed, v: "40 – 230 packs/min" },
      { k: K.bag, v: "L 65 – 320 mm · W 30 – 110 mm" },
      { k: s("ارتفاع المنتج", "Product height"), v: "5 – 60 mm" },
      { k: K.film, v: "≤ 450 mm" },
      { k: K.seal, v: "Fin seal + end seal (servo box-motion)" },
      common.plc, common.hmi,
      { k: K.power, v: "220V 50Hz" },
      { k: K.load, v: "2.5 – 4 kW" },
      { k: K.dims, v: "4000 × 950 × 1450 mm" },
    ],
    steps: [
      s("تغذية المنتج على سير بأصابع دافعة.", "Products are fed on a finger conveyor."),
      s("تشكيل الفيلم حول المنتج ولحام طولي.", "Film wraps the product with a fin seal."),
      s("لحام عرضي وقص بفكوك دوارة.", "Rotary jaws end-seal and cut each pack."),
    ],
    apps: s("البسكويت والشوكولاتة والصابون والخبز والأدوات.", "Biscuits, chocolate, soap, bread and hardware."),
    faq: [{ q: s("هل تعمل مع منتجات غير منتظمة؟", "Does it handle irregular products?"), a: s("نعم، مع ضبط طول الكيس بالحساس.", "Yes, with sensor-based bag-length control.") }],
  },
  "shrink-wrapping-machine": {
    table: [
      { k: K.speed, v: "8 – 25 packs/min" },
      { k: s("أقصى مقاس للحزمة", "Max. pack size"), v: "L 600 × W 400 × H 350 mm" },
      { k: s("الفيلم", "Film"), v: "POF / PE 15 – 80 µm" },
      { k: s("النفق", "Tunnel"), v: "Hot air · 9 – 18 kW" },
      common.plc,
      { k: K.power, v: "380V 3Ph 50Hz" },
      common.air,
      { k: K.dims, v: "4200 × 1500 × 1800 mm" },
    ],
    steps: [
      s("تجميع العبوات في حزم.", "Containers are grouped into bundles."),
      s("لف الفيلم ولحام L أو لحام كامل.", "Film is wrapped and L-sealed or fully sealed."),
      s("انكماش الفيلم في النفق الحراري وتبريده.", "Film shrinks in the heat tunnel and cools."),
    ],
    apps: s("حزم الزجاجات والعلب والكراتين الصغيرة.", "Bundles of bottles, cans and small cartons."),
    faq: [{ q: s("هل يناسب الزجاجات الكبيرة؟", "Does it suit large bottles?"), a: s("نعم، بنفق 18 كيلووات للحزم الثقيلة.", "Yes, with the 18 kW tunnel for heavy bundles.") }],
  },
  "cartoning-machine": {
    table: [
      { k: K.speed, v: "30 – 120 cartons/min" },
      { k: s("مقاس الكرتونة", "Carton size"), v: "L 50 – 250 × W 20 – 120 × H 15 – 80 mm" },
      { k: s("الغلق", "Closing"), v: "Tuck-in / hot-melt glue" },
      common.plc, common.hmi, common.power,
      common.air,
      { k: K.dims, v: "3500 × 1400 × 1800 mm" },
    ],
    steps: [
      s("سحب الكرتونة المسطحة وفتحها.", "A flat carton blank is picked and opened."),
      s("دفع المنتج والنشرة داخل الكرتونة.", "The product and leaflet are pushed in."),
      s("غلق الأجناب بالطي أو الغراء.", "Flaps are tucked or glued shut."),
      s("طباعة التشغيلة وفحص وجود المنتج.", "Batch coding and presence check."),
    ],
    apps: s("الأدوية والكريمات والأغذية المعبأة.", "Pharma, creams and packaged food."),
    faq: [{ q: s("هل تضع النشرة الداخلية؟", "Does it insert leaflets?"), a: s("نعم، بوحدة طي وإدخال النشرة.", "Yes, with the leaflet folding and insertion unit.") }],
  },
  "carton-taping-machine": {
    table: [
      { k: K.speed, v: "Up to 20 cartons/min" },
      { k: s("مقاس الكرتونة", "Carton size"), v: "L ≥ 150 · W 150 – 500 · H 120 – 500 mm" },
      { k: s("عرض الشريط", "Tape width"), v: "48 – 72 mm" },
      { k: K.power, v: "220V 50Hz · 0.4 kW" },
      { k: K.dims, v: "1800 × 900 × 1400 mm" },
    ],
    steps: [
      s("إدخال الكرتونة وطي الأجناب العلوية.", "The carton enters and top flaps are folded."),
      s("سحب الكرتونة بسيور جانبية.", "Side belts drive the carton through."),
      s("لصق الشريط من أعلى وأسفل في نفس الوقت.", "Tape is applied top and bottom at once."),
    ],
    apps: s("غلق كراتين الشحن لكل الصناعات.", "Sealing shipping cases in every industry."),
    faq: [{ q: s("هل الضبط أوتوماتيكي للمقاس؟", "Is size adjustment automatic?"), a: s("متوفر يدوي سريع أو أوتوماتيكي حسب الموديل.", "Quick manual or fully automatic, depending on model.") }],
  },
  palletizer: {
    table: [
      { k: K.speed, v: "Up to 12 cases/min (robotic)" },
      { k: s("الحمولة", "Payload"), v: "≤ 50 kg per pick" },
      { k: s("ارتفاع البالتة", "Pallet height"), v: "≤ 1800 mm" },
      { k: s("أنماط الرص", "Patterns"), v: "Programmable from HMI" },
      common.plc, common.hmi,
      { k: K.power, v: "380V 3Ph 50Hz" },
      { k: K.load, v: "4 – 8 kW" },
    ],
    steps: [
      s("وصول الكراتين على سير التجميع.", "Cases arrive on the accumulation conveyor."),
      s("التقاط الكرتونة بالروبوت أو الدافع.", "The robot or pusher picks each case."),
      s("الرص حسب النمط المبرمج طبقة بطبقة.", "Cases are stacked layer by layer to the programmed pattern."),
      s("خروج البالتة الكاملة لماكينة الاستريتش.", "Full pallets move on to stretch wrapping."),
    ],
    apps: s("كراتين وأجولة وجراكن في نهاية خطوط الإنتاج.", "Cases, sacks and jerrycans at the end of the line."),
    faq: [{ q: s("هل يحتاج مساحة كبيرة؟", "Does it need a lot of space?"), a: s("الروبوت يحتاج تقريباً 3 × 3 م لخلية بالتتين.", "A robotic cell needs roughly 3 × 3 m for two pallets.") }],
  },
  "pallet-wrapper": {
    table: [
      { k: s("قطر الترابيزة", "Turntable"), v: "Ø 1650 – 2000 mm" },
      { k: s("الحمولة", "Load"), v: "≤ 2000 kg" },
      { k: s("ارتفاع التغليف", "Wrap height"), v: "≤ 2400 mm" },
      { k: s("الشد المسبق", "Pre-stretch"), v: "Up to 250%" },
      { k: s("السرعة", "Speed"), v: "8 – 12 rpm" },
      { k: K.power, v: "220V 50Hz · 1.5 kW" },
    ],
    steps: [
      s("وضع البالتة على الترابيزة الدوارة.", "The pallet is placed on the turntable."),
      s("تثبيت طرف الفيلم وبدء الدوران.", "The film tail is attached and rotation starts."),
      s("صعود ونزول عربة الفيلم مع شد مسبق.", "The pre-stretch carriage travels up and down."),
      s("قص الفيلم وإنهاء الدورة.", "Film is cut and the cycle ends."),
    ],
    apps: s("تأمين البالتات للشحن والتخزين.", "Securing pallets for shipping and storage."),
    faq: [{ q: s("كم يوفر الشد المسبق من الفيلم؟", "How much film does pre-stretch save?"), a: s("حتى 60% من استهلاك الفيلم مقارنة بالتغليف اليدوي.", "Up to 60% of film compared with hand wrapping.") }],
  },
};
