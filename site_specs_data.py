# -*- coding: utf-8 -*-
"""
Al Sakr Top Group - Multi-Page Technical Website Generator
Builds all standalone section pages and dedicated technical description pages
with full parameter tables, operating steps, applications, and quote requests.
"""

import os
import html

# Master Specs Data parsed from specs.ts & groupData.js
MACHINERY_SPECS = {
    "liquid-filling-machine": {
        "id": "liquid-filling-machine",
        "name_en": "Automatic Liquid Filling Machine",
        "name_ar": "ماكينة تعبئة السوائل الأوتوماتيكية",
        "category_en": "Filling & Dosing",
        "category_ar": "تعبئة ومعايرة",
        "summary_en": "High-precision linear liquid filling machine for free-flowing to high-viscosity liquids from 50 ml to 20 L with servo diving nozzles and no-bottle no-fill logic.",
        "summary_ar": "ماكينة تعبئة خطية عالية الدقة للسوائل الخفيفة وشديدة اللزوجة من 50 مل حتى 20 لتر بفوهات غاطسة بالسيرفو ونظام أمان منع التعبئة بدون عبوة.",
        "img": "/public/img/liquid-filling.jpg",
        "gallery": ["/public/img/liquid-filling.jpg", "/public/img/fb/expo-filler.jpg", "/public/img/fb/oil-line.jpg"],
        "table": [
            {"k_en": "Production Speed", "k_ar": "الطاقة الإنتاجية", "v": "1,000 – 6,000 BPH"},
            {"k_en": "Filling Range", "k_ar": "مدى التعبئة", "v": "50 ml – 20 L"},
            {"k_en": "Filling Accuracy", "k_ar": "دقة التعبئة", "v": "±0.25% – ±0.5%"},
            {"k_en": "Heads / Nozzles", "k_ar": "عدد الرؤوس / الفوهات", "v": "2 – 16 Diving Nozzles"},
            {"k_en": "Frame Material", "k_ar": "خامة الهيكل", "v": "Stainless Steel AISI 304"},
            {"k_en": "Contact Parts", "k_ar": "الأجزاء الملامسة", "v": "Sanitary AISI 316L · PTFE · Viton"},
            {"k_en": "Conveyor", "k_ar": "السير الناقل", "v": "Slat Chain 82 – 190 mm POM / SUS"},
            {"k_en": "Automation Control", "k_ar": "نظام التحكم", "v": "SIEMENS S7-1200 PLC"},
            {"k_en": "Operator HMI", "k_ar": "شاشة التشغيل", "v": "Schneider 7\" – 10\" Color Touchscreen"},
            {"k_en": "Power Supply", "k_ar": "الكهرباء", "v": "380V 3Ph 50Hz / 220V"},
            {"k_en": "Installed Power", "k_ar": "القدرة الكهربائية", "v": "2 – 5 kW"},
            {"k_en": "Compressed Air", "k_ar": "الهواء المضغوط", "v": "6 bar · 0.3–0.8 m³/min"},
            {"k_en": "Dimensions (L×W×H)", "k_ar": "الأبعاد التقريبية", "v": "2500 × 1300 × 2300 mm"},
            {"k_en": "Approx. Weight", "k_ar": "الوزن التقريبي", "v": "650 – 1,200 kg"}
        ],
        "steps": [
            {"en": "Containers enter on the high-grade conveyor and are indexed and counted precisely by optical sensors.", "ar": "دخول العبوات على السير الناقل وعدّها وحصرها بحساسات ضوئية دقيقة."},
            {"en": "Pneumatic gating system clamps and aligns the containers directly under the filling nozzles.", "ar": "بوابات هوائية ذكية توقف وتثبت العبوات أسفل الفوهات بدقة متناهية."},
            {"en": "Diving nozzles descend to container bottoms (Bottom-Up filling) to prevent foaming and splashing.", "ar": "نزول الفوهات إلى قاع العبوة (Bottom-Up) والتعبئة التدريجية للأعلى لمنع تكوّن الرغوة."},
            {"en": "Dosing delivered via precision volumetric piston or digital mass flowmeter to programmed target.", "ar": "التعبئة بالمكبس الحجمي الدقيق أو الفلوميتر الكتلي حسب الحجم والوزن المبرمج."},
            {"en": "Pneumatic anti-drip shut-off activates and filled containers release smoothly to the capping station.", "ar": "إغلاق فوهات منع التنقيط الهوائية وخروج العبوات بسلاسة نحو ماكينة التغطية."}
        ],
        "apps_en": "Liquid detergents, shampoos, hand washes, edible and olive oils, automotive lube oils, juices, sauces, liquid fertilizers, and agrochemicals.",
        "apps_ar": "المنظفات السائلة، الشامبو والكريمات، الزيوت النباتية وزيت الزيتون، زيوت المحركات، العصائر والصوصات، المبيدات والأسمدة السائلة.",
        "faqs": [
            {
                "q_en": "Piston pump or electromagnetic flowmeter: what should I choose?",
                "q_ar": "ما الفرق بين التعبئة بالمكبس الحجمي والفلوميتر؟",
                "a_en": "Piston pumps excel with viscous liquids, creams, gels and pasty products offering high physical displacement accuracy. Electromagnetic or mass flowmeters are faster for conductive liquids and oils, allowing instant volume changes directly on the touchscreen without mechanical adjustments.",
                "a_ar": "المكبس الحجمي ممتاز للسوائل اللزجة والكريمات والجل بدقة إزاحة ميكانيكية فائقة. أما الفلوميتر فيمتاز بالسرعة للسوائل والزيوت ويتيح تغيير حجم التعبئة فورياً من شاشة اللمس دون ضبط يدوي."
            },
            {
                "q_en": "Can one machine handle multiple container sizes and shapes?",
                "q_ar": "هل يمكن تعبئة أكثر من حجم وشكل عبوة على نفس الماكينة؟",
                "a_en": "Yes. The HMI stores up to 100 product recipes. Rail widths and nozzle spacings adjust quickly without special tooling in under 10 minutes.",
                "a_ar": "نعم، يتم تخزين حتى 100 وصفة إنتاجية في الذاكرة. وتعديل عرض المسارات والمسافات بين الفوهات يتم بسرعة وبدون عدد خاصة خلال أقل من 10 دقائق."
            },
            {
                "q_en": "Is the system compatible with caustic or corrosive chemicals?",
                "q_ar": "هل تناسب الماكينة المنتجات الكيماوية القلوية أو الحارقة؟",
                "a_en": "Yes. We configure specialized anti-corrosion packages including PTFE/PVDF liquid lines, Viton sanitary gaskets, titanium or Hastelloy fasteners, and fume extraction hoods.",
                "a_ar": "نعم، نوفر حزمة خاصة لمقاومة الكيماويات تشمل مسارات PTFE/PVDF، وجوانات Viton، ومثبتات تيتانيوم، وهود شفط للأبخرة."
            }
        ]
    },
    "capping-machine": {
        "id": "capping-machine",
        "name_en": "Automatic Capping Machine",
        "name_ar": "ماكينة إغلاق وتغطية الأغطية الأوتوماتيكية",
        "category_en": "Filling & Dosing",
        "category_ar": "تعبئة ومعايرة",
        "summary_en": "Rotary and in-line capping machine for screw, twist-off, press-on, and trigger spray caps with precise magnetic or servo torque control.",
        "summary_ar": "ماكينة إغلاق أغطية خطية ودوارة للأغطية القلاووظ والكبس والتويست أوف والبخاخات مع تحكم دقيق في عزم الغلق بالسيرفو أو القابض المغناطيسي.",
        "img": "/public/img/capping.jpg",
        "gallery": ["/public/img/capping.jpg", "/public/img/capping-2.jpg", "/public/img/fb/expo-capper.jpg"],
        "table": [
            {"k_en": "Production Speed", "k_ar": "الطاقة الإنتاجية", "v": "1,200 – 6,000 BPH"},
            {"k_en": "Cap Diameter", "k_ar": "قطر الغطاء", "v": "Ø 20 – 120 mm"},
            {"k_en": "Capping Torque", "k_ar": "عزم الغلق", "v": "0.5 – 8.0 N·m (Servo / Magnetic)"},
            {"k_en": "Capping Heads", "k_ar": "رؤوس الغلق", "v": "1 – 6 Heads / 8-Wheel In-line Spindle"},
            {"k_en": "Container Dimensions", "k_ar": "مقاسات العبوات", "v": "Ø 30 – 200 mm · H 50 – 350 mm"},
            {"k_en": "Frame Material", "k_ar": "خامة الهيكل", "v": "AISI 304 Stainless Steel"},
            {"k_en": "Automation Control", "k_ar": "نظام التحكم", "v": "SIEMENS S7-1200 PLC"},
            {"k_en": "Operator HMI", "k_ar": "شاشة التشغيل", "v": "Schneider Touch HMI"},
            {"k_en": "Power Supply", "k_ar": "الكهرباء", "v": "380V 3Ph 50Hz / 220V"},
            {"k_en": "Installed Power", "k_ar": "القدرة الكهربائية", "v": "1.5 – 3.0 kW"},
            {"k_en": "Compressed Air", "k_ar": "الهواء المضغوط", "v": "6 bar · 0.2 m³/min"},
            {"k_en": "Dimensions (L×W×H)", "k_ar": "الأبعاد التقريبية", "v": "2000 × 1100 × 2000 mm"}
        ],
        "steps": [
            {"en": "Bulk caps are loaded into a sanitary ground-level elevator and sorted in the vibratory feeder bowl.", "ar": "تحميل الأغطية بكميات في رافع أرضي صحي ثم فرزها وتوجيهها في الهزاز الدوار."},
            {"en": "Oriented caps descend down a gravity chute directly to the container pick-and-place station.", "ar": "نزول الأغطية الموجهة في مسار انزلاقي نحو محطة التقاط ووضع الغطاء على فوهة العبوة."},
            {"en": "Synchronized side gripping belts clamp the container body securely to eliminate spinning slippage.", "ar": "سيور إمساك جانبية متزامنة تثبت جسم العبوة بإحكام لمنع دورانها أثناء الربط."},
            {"en": "Capping heads tighten the cap to exact pre-set torque via hysteresis magnetic clutch or servo motor.", "ar": "رؤوس الغلق تُحكم ربط الغطاء بالعزم المضبوط بدقة عبر قابض مغناطيسي أو محرك سيرفو."},
            {"en": "Optical inspection rejects any un-capped or tilted caps onto an auxiliary rejection conveyor.", "ar": "فحص ضوئي يفرز ويرفض أي عبوة بدون غطاء أو مائلة الغطاء إلى مسار الفرز الفرعي."}
        ],
        "apps_en": "Screw caps, sport caps, flip-tops, trigger sprays, twist-off closures on glass, PET, HDPE bottles and jerrycans.",
        "apps_ar": "أغطية القلاووظ والضغط والـ Twist-off والبخاخات للزجاجات والجراكن والبرطمانات البلاستيكية والزجاجية.",
        "faqs": [
            {
                "q_en": "How does the machine avoid damaging sensitive plastic caps or scratching prints?",
                "q_ar": "كيف تحافظ الماكينة على الأغطية الحساسة من الخدش أو التلف؟",
                "a_en": "Capping spindles utilize custom polyurethane or silicone grippers with calibrated slip torques that protect delicate logos and metallized coatings.",
                "a_ar": "تستخدم عجلات الغلق بكرات مصنوعة من البولي يوريثان أو السيليكون المخصص مع عزم انزلاق مدروس يحمي الشعارات والطلاءات المذهبة."
            }
        ]
    },
    "labelling-machine": {
        "id": "labelling-machine",
        "name_en": "Automatic Self-Adhesive Labelling Machine",
        "name_ar": "ماكينة لصق الليبل ذاتي اللصق الأوتوماتيكية",
        "category_en": "Labelling & Sleeve",
        "category_ar": "ليبل وسليف",
        "summary_en": "Industrial labelling machine for round, flat, and oval containers with single, double-sided, or full-wrap label application at up to 70 m/min.",
        "summary_ar": "ماكينة ليبل صناعية للعبوات الدائرية والمسطحة والبيضاوية للصق وجه واحد أو وجهين متقابلين أو لف كامل بسرعة تصل إلى 70 م/دقيقة.",
        "img": "/public/img/project-1.jpg",
        "gallery": ["/public/img/project-1.jpg", "/public/img/fb/rotary-labeller.jpg"],
        "table": [
            {"k_en": "Dispensing Speed", "k_ar": "سرعة التوزيع", "v": "Up to 200 bpm (0 – 70 m/min)"},
            {"k_en": "Label Dimensions", "k_ar": "مقاسات الليبل", "v": "W 15 – 250 mm · L 20 – 300 mm"},
            {"k_en": "Application Accuracy", "k_ar": "دقة اللصق", "v": "±0.5 – ±1.0 mm"},
            {"k_en": "Container Profiles", "k_ar": "أشكال العبوات", "v": "Round (Ø 25–120 mm), Flat, Oval, Square"},
            {"k_en": "Dispensing Heads", "k_ar": "رؤوس التوزيع", "v": "1 – 3 Heads (Front / Back / Wrap)"},
            {"k_en": "Drive System", "k_ar": "المحركات", "v": "Micro-step Stepper / Digital Servo Drives"},
            {"k_en": "Label Roll Size", "k_ar": "قطر رول الليبل", "v": "Core 76 mm · Outer Diameter ≤ 300 mm"},
            {"k_en": "Frame Material", "k_ar": "خامة الهيكل", "v": "AISI 304 Stainless Steel"},
            {"k_en": "Control System", "k_ar": "التحكم", "v": "SIEMENS PLC + Schneider Touchscreen"},
            {"k_en": "Power Supply", "k_ar": "الكهرباء", "v": "220V 1Ph 50Hz · 1.5 – 2.5 kW"},
            {"k_en": "Dimensions (L×W×H)", "k_ar": "الأبعاد التقريبية", "v": "2500 × 1300 × 1600 mm"}
        ],
        "steps": [
            {"en": "Infeed container spacing wheel regulates bottle gaps to create uniform pitch.", "ar": "عجلة تنظيم المسافات تفصل بين العبوات بانتظام لضمان التوقيت الدقيق."},
            {"en": "Overhead motorized stabilizing belt clamps containers firmly for wrinkle-free application.", "ar": "سير تثبيت علوي يتحرك بالتزامن لتثبيت العبوة عمودياً ومنع اهتزازها أثناء اللصق."},
            {"en": "Digital fork gap sensor detects label pitch and dispenses sticker with microsecond precision.", "ar": "حساس شوكي رقمي يحدد الفاصل بين الاستيكرات ويطلق الليبل بدقة أجزاء من الثانية."},
            {"en": "Wrap-around belt or pneumatic sponge rollers press label seamlessly onto container curves.", "ar": "سير لف دائري أو بكرات إسفنجية تضغط الليبل بنعومة لمنع وجود فقاعات هواء."},
            {"en": "Integrated hot-foil, thermal transfer or TIJ batch coder imprints expiry/mfg date.", "ar": "وحدة طباعة حرارية تطبع تاريخ الصلاحية ورقم التشغيلة بدقة متناهية."}
        ],
        "apps_en": "Bottles, jars, cans, and cartons in food, beverages, cosmetics, pharmaceutical syrups, agrochemicals, and household chemicals.",
        "apps_ar": "الزجاجات والبرطمانات والجراكن في الأغذية والمشروبات ومستحضرات التجميل والأدوية والكيماويات المنزلية.",
        "faqs": [
            {
                "q_en": "Can it apply clear transparent labels onto clear transparent bottles?",
                "q_ar": "هل يمكن لصق استيكر شفاف على عبوات بلاستيكية أو زجاجية شفافة؟",
                "a_en": "Yes. We equip the dispensing head with specialized ultrasonic or capacitive clear-label sensors that detect clear film backing without false triggers.",
                "a_ar": "نعم، يتم تزويد رأس اللصق بحساسات بالموجات فوق الصوتية مخصصة لليبل الشفاف لاكتشاف الحافة بدقة تامة."
            }
        ]
    },
    "shrink-sleeve-machine": {
        "id": "shrink-sleeve-machine",
        "name_en": "Automatic Shrink Sleeve Labelling Machine",
        "name_ar": "ماكينة تطبيق سليف الانكماش الحراري الأوتوماتيكية",
        "category_en": "Labelling & Sleeve",
        "category_ar": "ليبل وسليف",
        "summary_en": "High-speed sleeve applicator for full-body shrink labels and tamper-evident cap seals with synchronized servo rotary cutting and steam/hot-air tunnel.",
        "summary_ar": "ماكينة تلبيس سليف عالية السرعة لليبل الكامل وشريط الأمان للأغطية مع قص دوار بالسيرفو ونفق بخار أو هواء ساخن متكامل.",
        "img": "/public/img/shrink.jpg",
        "gallery": ["/public/img/shrink.jpg"],
        "table": [
            {"k_en": "Production Speed", "k_ar": "الطاقة الإنتاجية", "v": "Up to 250 containers/min"},
            {"k_en": "Container Dimensions", "k_ar": "أبعاد العبوات", "v": "Ø 28 – 125 mm · H 50 – 320 mm"},
            {"k_en": "Film Thickness", "k_ar": "سُمك الفيلم", "v": "0.035 – 0.070 mm (PVC, PETG, OPS)"},
            {"k_en": "Sleeve Cut Length", "k_ar": "طول السليف", "v": "30 – 250 mm"},
            {"k_en": "Cutting Mechanism", "k_ar": "آلية القص", "v": "Multi-blade Servo Rotary Cutter · ±1.0 mm"},
            {"k_en": "Shrink Tunnel Options", "k_ar": "خيارات نفق الانكماش", "v": "Steam Tunnel (0.2–0.4 MPa) or Hot-Air 12–18 kW"},
            {"k_en": "Frame Material", "k_ar": "خامة الهيكل", "v": "Sanitary AISI 304 Stainless Steel"},
            {"k_en": "Automation Control", "k_ar": "نظام التحكم", "v": "SIEMENS PLC with Synchronized Multi-axis Servo"},
            {"k_en": "Dimensions", "k_ar": "الأبعاد", "v": "2000 × 1000 × 2200 mm + Shrink Tunnel"}
        ],
        "steps": [
            {"en": "Continuous tubular film reel is unwound and tension-controlled by a dancers arm assembly.", "ar": "سحب رول الفيلم الأنبوبي والتحكم بشده بواسطة ذراع رقاص متوازن."},
            {"en": "Film is guided and opened around a precision bullet-shaped forming mandrel.", "ar": "توجيه الفيلم وفتحه بسلاسة حول قلب التشكيل (Mandrel) المصنوع بدقة حسب قطر العبوة."},
            {"en": "High-speed servo rotary knives slice the sleeve cleanly to exact millimeter length.", "ar": "سكاكين دوارة عالية السرعة بالسيرفو تقص السليف بطول دقيق بالملليمتر."},
            {"en": "Propelling rollers shoot the sleeve down over the bottle moving underneath on the conveyor.", "ar": "بكرات دفع سريعة تسقط السليف على العبوة المارة على السير بدقة فائقة."},
            {"en": "Container passes into the multi-zone steam or hot-air tunnel to shrink contour perfectly.", "ar": "مرور العبوة داخل نفق البخار متعدد المناطق لتنكمش الخامات وتتطابق مع تعرجات العبوة."}
        ],
        "apps_en": "Dairy bottles, fruit juice carafes, bottled water, bleach & detergent bottles, energy drinks, and tamper-proof neck bands.",
        "apps_ar": "زجاجات الألبان، عبوات العصائر، زجاجات المياه، المنظفات والمطهرات، ومشروبات الطاقة وأشرطة ضمان غلق الأغطية.",
        "faqs": [
            {
                "q_en": "When should I use a steam tunnel vs a hot-air electrical tunnel?",
                "q_ar": "متى أستخدم نفق البخار بدلاً من نفق الهواء الساخن؟",
                "a_en": "Steam tunnels provide uniform heat distribution ideal for complex contour glass or PET bottles and high-shrink PETG films without distortion. Hot-air tunnels are compact and require no boiler infrastructure, suitable for cap neck bands and straight cylindrical containers.",
                "a_ar": "نفق البخار يوفر توزيعاً حرارياً فائق النعومة ومثالياً للعبوات ذات المنحنيات المعقدة بدون تجاعيد. أما نفق الهواء الساخن فيمتاز بعدم الحاجة لغلاية بخار ومناسب لأشرطة العنق والعبوات الأسطوانية."
            }
        ]
    },
    "vffs-packaging-machine": {
        "id": "vffs-packaging-machine",
        "name_en": "Vertical Form Fill Seal Packaging Machine (VFFS)",
        "name_ar": "ماكينة التعبئة والتغليف الرأسية (VFFS)",
        "category_en": "Packaging & Wrapping",
        "category_ar": "تغليف وتعبئة",
        "summary_en": "Continuous and intermittent vertical bagger for pillow, gusseted, and block bottom pouches from 50 g to 5 kg with multihead weigher or auger doser.",
        "summary_ar": "ماكينة تعبئة وتغليف رأسية للأكياس الوسائدية والواقفة وذات القاع المسطح من 50 جم حتى 5 كجم مع ميزان متعدد الرؤوس أو بريمة بودرة.",
        "img": "/public/img/vffs.jpg",
        "gallery": ["/public/img/vffs.jpg"],
        "table": [
            {"k_en": "Packaging Speed", "k_ar": "سرعة التغليف", "v": "20 – 80 bags/min"},
            {"k_en": "Bagging Range", "k_ar": "وزن العبوة", "v": "50 g – 5 kg"},
            {"k_en": "Bag Dimensions", "k_ar": "مقاسات الكيس", "v": "W 80 – 350 mm · L 100 – 450 mm"},
            {"k_en": "Film Width", "k_ar": "عرض رول الفيلم", "v": "≤ 720 mm"},
            {"k_en": "Film Compatibility", "k_ar": "خامات الفيلم", "v": "BOPP/PE, PET/AL/PE, laminated foils, barrier films"},
            {"k_en": "Dosing Integration", "k_ar": "أنظمة المعايرة", "v": "10/14-Head Multihead Weigher, Servo Auger, Volumetric Cups"},
            {"k_en": "Sealing Jaws", "k_ar": "فكوك اللحام", "v": "Servo-driven constant heat or impulse sealers"},
            {"k_en": "Frame Construction", "k_ar": "هيكل الماكينة", "v": "Sanitary Stainless Steel AISI 304"},
            {"k_en": "Power & Air", "k_ar": "القدرة والهواء", "v": "380V 3Ph 50Hz · 4.5 kW · 6 bar air"},
            {"k_en": "Machine Footprint", "k_ar": "المساحة التقريبية", "v": "1500 × 1200 × 1800 mm (Bagger unit)"}
        ],
        "steps": [
            {"en": "Roll film is drawn over dynamic rollers with web alignment and photo-eye tracking.", "ar": "سحب رول الفيلم وتمريره عبر بكرات التوجيه وضبط الحواف بحساس الفوتوسيل."},
            {"en": "Forming shoulder shapes flat film into a vertical tube around the product chute.", "ar": "ياقة التشكيل (Shoulder) تحول الفيلم المسطح إلى أنبوب رأسي حول ماسورة الإنزال."},
            {"en": "Vertical heated sealing bar bonds the overlapping back seam of the pouch.", "ar": "فك اللحام الطولي الحراري يلحم ظهر الكيس بشكل متجانس."},
            {"en": "Multihead weigher or precision auger discharges exact weighed charge into the bag.", "ar": "الميزان متعدد الرؤوس أو البريمة الدقيقة تسقط الجرعة الموزونة بالكامل داخل الكيس."},
            {"en": "Horizontal servo jaws close, seal top and bottom, cut the bag, and discharge to takeaway belt.", "ar": "الفكوك الأفقية تلحم أسفل الكيس وأعلاه، وتقص الكيس ليخرج على سير الصعود."}
        ],
        "apps_en": "Rice, sugar, dry beans, lentils, snacks, potato chips, spices, milk powder, detergent powder, pet food, and frozen foods.",
        "apps_ar": "الأرز والسكر والبقوليات، السناكس والشيبسي، البهارات واللبن البودرة، مساحيق الغسيل، أغذية الحيوانات، والخضروات المجمدة.",
        "faqs": [
            {
                "q_en": "Can it produce standing quad-seal or gusseted block bags?",
                "q_ar": "هل تصنع الماكينة أكياساً واقفة ذات طيات جانبية وقاع مسطح (Gusset / Block)؟",
                "a_en": "Yes. With our pneumatic gusseting and quad-seal corner sealing device, the machine forms attractive standing pouches for premium retail shelves.",
                "a_ar": "نعم، بإضافة وحدة التطبيق الهوائي للطيات الجانبية وجهاز لحام الزوايا الأربع، تصنع الماكينة أكياساً واقفة ذات مظهر راقٍ للمتاجر."
            }
        ]
    },
    "multi-lane-sachet-machine": {
        "id": "multi-lane-sachet-machine",
        "name_en": "Multi-Lane Stick & Sachet Packaging Machine",
        "name_ar": "ماكينة تعبئة الساشيه والستيك متعددة المسارات",
        "category_en": "Packaging & Wrapping",
        "category_ar": "تغليف وتعبئة",
        "summary_en": "High-output packaging machine producing 2 to 10 parallel lanes of 4-side seal sachets or stick packs at up to 900 packs per minute.",
        "summary_ar": "ماكينة تعبئة فائقة الإنتاجية من 2 إلى 10 مسارات متوازية لإنتاج الساشيهات أو الستيك باك برباعي اللحام بسرعة تصل إلى 900 عبوة/دقيقة.",
        "img": "/public/img/multilane.png",
        "gallery": ["/public/img/multilane.png"],
        "table": [
            {"k_en": "Production Output", "k_ar": "الطاقة الإنتاجية", "v": "Up to 900 sachets/minute"},
            {"k_en": "Number of Lanes", "k_ar": "عدد المسارات", "v": "2 – 10 Parallel Lanes"},
            {"k_en": "Dosing Range", "k_ar": "مدى الجرعة", "v": "1 – 120 g / ml per sachet"},
            {"k_en": "Sachet Dimensions", "k_ar": "أبعاد الساشيه", "v": "W 25 – 100 mm · L 40 – 160 mm"},
            {"k_en": "Sealing Style", "k_ar": "نوع اللحام", "v": "4-Side Seal / Stick Pack · Easy-Tear Notch"},
            {"k_en": "Reel Width", "k_ar": "عرض الرول", "v": "Up to 1,000 mm"},
            {"k_en": "Construction", "k_ar": "مواصفات الهيكل", "v": "Full Sanitary Stainless Steel AISI 304 / 316L"},
            {"k_en": "Automation Platform", "k_ar": "منظومة التحكم", "v": "SIEMENS S7-1500 PLC + Motion Controller"},
            {"k_en": "Connected Load", "k_ar": "القدرة المركبة", "v": "6 – 10 kW · 380V 50Hz"},
            {"k_en": "Dimensions", "k_ar": "الأبعاد التقريبية", "v": "2000 × 1600 × 2400 mm"}
        ],
        "steps": [
            {"en": "Wide parent film reel is slit longitudinally into parallel strips matched to the lane layout.", "ar": "شق رول الفيلم العريض طولياً إلى أشرطة متوازية متطابقة مع عدد المسارات."},
            {"en": "Forming channels wrap each film strip into individual continuous sachets.", "ar": "قنوات التشكيل تطوي كل شريط فيلم لتشكيل الساشيهات بالتزامن."},
            {"en": "Independent micro-metering valves or multi-spindle augers dose each lane simultaneously.", "ar": "صمامات معايرة دقيقة أو بريمات مستقلة تضخ الجرعة المحددة لكل مسار في نفس اللحظة."},
            {"en": "Heated vertical and horizontal embossing dies seal all sides with tear notches.", "ar": "قوالب لحام حرارية طولية وعرضية تلحم الجوانب وتعمل شق الفتح السهل."},
            {"en": "High-speed guillotine cuts single sachets or perforated strip sets onto counting conveyor.", "ar": "سكين مقصلة سريع يقص الساشيهات مفردة أو في أشرطة متصلة نحو سير العد والتجميع."}
        ],
        "apps_en": "Instant 3-in-1 coffee, white sugar, sweeteners, drink powder, pharma powders, shampoo, cosmetic creams, honey, and tomato paste.",
        "apps_ar": "القهوة سريعة التحضير، السكر، البودرة الدوائية، الشامبو والكريمات، العسل والكاتشب ومعجون الطماطم.",
        "faqs": [
            {
                "q_en": "Can I operate fewer lanes initially and scale up later?",
                "q_ar": "هل يمكن البدء بعدد مسارات قليل والتوسع لاحقاً؟",
                "a_en": "Yes. Our modular design allows configuring e.g. 4 lanes on an 8-lane frame, with quick add-on tooling when your production demand grows.",
                "a_ar": "نعم، التصميم المعياري يتيح تشغيل 4 مسارات على هيكل يتسع لـ 8 مسارات، مع إمكانية إضافة المسارات المتبقية بسهولة عند نمو المبيعات."
            }
        ]
    },
    "thermoforming-machine": {
        "id": "thermoforming-machine",
        "name_en": "Industrial Thermoforming Packaging Machine",
        "name_ar": "ماكينة التشكيل الحراري الصناعية (ثيرموفورمينج)",
        "category_en": "Packaging & Wrapping",
        "category_ar": "تغليف وتعبئة",
        "summary_en": "Heavy-duty rollstock thermoformer for rigid and flexible film vacuum, gas flush (MAP), and skin packaging with quick die changeovers.",
        "summary_ar": "ماكينة تشكيل حراري من الرول للأفلام الصلبة والمرنة تحت التفريغ الهوائي وحقن الغاز المعدل (MAP) والتغليف الجلدي (Skin) بتغيير سريع للقوالب.",
        "img": "/public/img/thermoforming.jpg",
        "gallery": ["/public/img/thermoforming.jpg"],
        "table": [
            {"k_en": "Cycle Speed", "k_ar": "سرعة الدورات", "v": "6 – 12 cycles/min"},
            {"k_en": "Bottom Film Width", "k_ar": "عرض الفيلم السفلي", "v": "320 – 520 mm"},
            {"k_en": "Forming Depth", "k_ar": "أقصى عمق للتشكيل", "v": "Up to 120 mm"},
            {"k_en": "Packaging Technologies", "k_ar": "تقنيات التغليف", "v": "Vacuum · MAP (Modified Atmosphere) · Skin · Flexible · Rigid"},
            {"k_en": "Vacuum System", "k_ar": "مضخة التفريغ", "v": "Heavy-duty Busch Vacuum Pump (100–300 m³/h)"},
            {"k_en": "Chassis & Enclosure", "k_ar": "الهيكل والحماية", "v": "AISI 304 Stainless Steel Washdown Construction"},
            {"k_en": "PLC & Automation", "k_ar": "التحكم", "v": "SIEMENS PLC with 10\" Industrial Touch Screen"},
            {"k_en": "Total Connected Load", "k_ar": "القدرة الكهربائية", "v": "12 – 22 kW · 380V 3Ph 50Hz"},
            {"k_en": "Machine Dimensions", "k_ar": "الأبعاد الكلية", "v": "5000 – 8500 × 1100 × 1900 mm"}
        ],
        "steps": [
            {"en": "Bottom film is indexed forward and pre-heated in the thermal forming die station.", "ar": "سحب الفيلم السفلي وتسخينه مسبقاً داخل محطة قوالب التشكيل الحراري."},
            {"en": "Compressed air and vacuum pull heated film into female dies to create rigid/flexible trays.", "ar": "دفع الهواء المضغوط وسحب الفاكيوم لتشكيل الفيلم داخل القالب إلى صوانٍ متناسقة."},
            {"en": "Products are placed into shaped pockets manually or by robotic pick-and-place arms.", "ar": "وضع المنتجات داخل الفجوات المشكلة يدوياً أو بذراع روبوتية متطورة."},
            {"en": "Sealing chamber evacuates atmospheric air, injects preservation gas, and seals top barrier film.", "ar": "غرفة اللحام تفرغ الهواء الجوي، وتحقن خليط الغاز الحافظ (MAP) وتلحم الفيلم العلوي العازل."},
            {"en": "Cross-cut and circular rotary slitters separate individual sealed packages for carton packing.", "ar": "سكاكين طولية وعرضية دوارة تقص وتفصل العبوات النهائية لتخرج جاهزة للتداول."}
        ],
        "apps_en": "Fresh and processed meat, poultry, sliced cheese, fresh pasta, bakery, medical disposables, and sterile blister devices.",
        "apps_ar": "اللحوم الطازجة والمصنعة، الدواجن، الأجبان والشرائح، المخبوزات، المستلزمات الطبية والأجهزة المعقمة.",
        "faqs": [
            {
                "q_en": "How fast can we change dies for a different tray size?",
                "q_ar": "كم يستغرق تغيير قوالب التشكيل لمقاس صينية مختلف؟",
                "a_en": "Our quick-release die system enables complete tooling swaps within 15 to 30 minutes without needing cranes or specialized rigging.",
                "a_ar": "نظام الفك والتركيب السريع لقوالب التشكيل واللحام يتيح إتمام التغيير بالكامل خلال 15 إلى 30 دقيقة فقط."
            }
        ]
    },
    "flow-pack-machine": {
        "id": "flow-pack-machine",
        "name_en": "Horizontal Flow-Pack Machine (HFFS)",
        "name_ar": "ماكينة التغليف الأفقي (فلوباك)",
        "category_en": "Packaging & Wrapping",
        "category_ar": "تغليف وتعبئة",
        "summary_en": "Continuous high-speed horizontal flow wrapper for solid bakery items, biscuits, confectionery, detergents, soaps, and hardware at up to 230 packs/min.",
        "summary_ar": "ماكينة تغليف أفقي مستمرة وسريعة للمخبوزات والبسكويت والحلويات وقطع الصابون والأدوات الصلبة بسرعة تصل إلى 230 عبوة/دقيقة.",
        "img": "/public/img/flowpack.png",
        "gallery": ["/public/img/flowpack.png"],
        "table": [
            {"k_en": "Packaging Speed", "k_ar": "سرعة التغليف", "v": "40 – 230 packs/min"},
            {"k_en": "Bag Length Range", "k_ar": "طول الكيس", "v": "65 – 350 mm"},
            {"k_en": "Product Width Range", "k_ar": "عرض المنتج", "v": "30 – 140 mm"},
            {"k_en": "Max Product Height", "k_ar": "أقصى ارتفاع للمنتج", "v": "5 – 80 mm"},
            {"k_en": "Film Roll Width", "k_ar": "عرض رول الفيلم", "v": "≤ 450 mm"},
            {"k_en": "Drive Configuration", "k_ar": "المحركات", "v": "Triple Independent Servo Drives"},
            {"k_en": "Frame & Guards", "k_ar": "الهيكل والحماية", "v": "Full AISI 304 Stainless Steel"},
            {"k_en": "Control Platform", "k_ar": "نظام التحكم", "v": "PLC with 7\" Color Touchscreen"},
            {"k_en": "Power Requirement", "k_ar": "الكهرباء", "v": "220V 50Hz · 2.5 – 4.0 kW"},
            {"k_en": "Dimensions", "k_ar": "الأبعاد التقريبية", "v": "4000 × 950 × 1450 mm"}
        ],
        "steps": [
            {"en": "Items are placed on infeed flight lugs conveyor for synchronized pitch timing.", "ar": "تغذية المنتجات على سير الناقل ذي النتوءات لضبط التوقيت والمسافات."},
            {"en": "Forming box folds the reel film around product sides into a continuous tubular sleeve.", "ar": "صندوق التشكيل يطوي رول الفيلم حول المنتج ليصنع أنبوباً متصلاً."},
            {"en": "Bottom heated fin wheels pull the film and create a hermetic longitudinal fin seal.", "ar": "عجلات سحب ولحام حرارية سفلية تلحم الزعنفة الطولية بإحكام."},
            {"en": "Rotary heated sealing jaws make cross cut, end seal, and release individual packs.", "ar": "فكوك لحام دوارة تقص وتلحم طرفي العبوة وتطلق الكيس المغلف."},
            {"en": "Finished items discharge onto an incline takeaway conveyor.", "ar": "خروج المنتجات المغلفة على سير الصعود النهائي للتجميع والكرتنة."}
        ],
        "apps_en": "Biscuits, chocolate bars, wafer packs, bread rolls, dishwash sponges, hotel soaps, and plastic components.",
        "apps_ar": "البسكويت، الشوكولاتة، الويفر، المخبوزات، إسفنج الغسيل، قطع الصابون، والمستلزمات البلاستيكية.",
        "faqs": [
            {
                "q_en": "Does it support no-product / no-bag automation?",
                "q_ar": "هل تتوفر خاصية منع تغليف الأكياس الفارغة (No Product - No Bag)؟",
                "a_en": "Yes. Optical sensors verify product presence on infeed lugs; if a pocket is empty, film feed and jaw actuation pause, preventing wasted film.",
                "a_ar": "نعم، حساسات ضوئية تفحص وجود المنتج، وإذا كان المكان شاغراً يتوقف سحب الفيلم وحركة الفكوك لمنع إهدار الفيلم."
            }
        ]
    },
    "cartoning-machine": {
        "id": "cartoning-machine",
        "name_en": "Automatic Horizontal Cartoning Machine",
        "name_ar": "ماكينة تعبئة الكراتين الأوتوماتيكية (كرتنة)",
        "category_en": "End of Line",
        "category_ar": "نهاية الخط",
        "summary_en": "Continuous and intermittent horizontal cartoner for automatic carton erecting, leaflet inserting, product pushing, and tuck or hot-melt closure.",
        "summary_ar": "ماكينة كرتنة أفقية لسحب وتفتيح الكراتين، وإدخال النشرة الورقية والمنتج أوتوماتيكياً وغلق الألسنة بنظام الثني أو الغراء الساخن.",
        "img": "/public/img/cartoning.jpg",
        "gallery": ["/public/img/cartoning.jpg"],
        "table": [
            {"k_en": "Cartoning Speed", "k_ar": "سرعة الكرتنة", "v": "30 – 120 cartons/min"},
            {"k_en": "Carton Dimensions", "k_ar": "مقاسات الكرتونة", "v": "L 50–250 × W 20–120 × H 15–80 mm"},
            {"k_en": "Carton Grammage", "k_ar": "وزن خامة الكرتون", "v": "250 – 450 g/m²"},
            {"k_en": "Closure Method", "k_ar": "طريقة الغلق", "v": "Mechanical Tuck-in or Nordson Hot-Melt Glue"},
            {"k_en": "Leaflet Insertion", "k_ar": "إدخال النشرات", "v": "Automated GUK-type Leaflet Folder & Inserter"},
            {"k_en": "Feeding Integration", "k_ar": "التغذية والتكامل", "v": "Direct line feed for blisters, bottles, tubes, sachets"},
            {"k_en": "Safety & Protection", "k_ar": "الأمان والحماية", "v": "Torque overload clutch, safety interlocks, CE compliant"},
            {"k_en": "Control Platform", "k_ar": "نظام التحكم", "v": "SIEMENS PLC + Schneider Touch HMI"},
            {"k_en": "Dimensions", "k_ar": "الأبعاد الكلية", "v": "3500 × 1400 × 1800 mm"}
        ],
        "steps": [
            {"en": "Flat folded cartons in the storage magazine are picked and erected open by rotary vacuum suction arms.", "ar": "سحب الكراتين المسطحة من المخزن وتفتيحها بدقة عبر أذرع شفط هوائية دوارة."},
            {"en": "Transport buckets carry cartons in synchronization with the product infeed conveyor.", "ar": "جيوب ناقلة متزامنة تنقل الكراتين المفتوحة بمحاذاة مسار المنتجات القادمة."},
            {"en": "Leaflet folder inserts the prescription pamphlet or user manual ahead of the product.", "ar": "وحدة إدخال النشرات تطوي النشرة الورقية وتدخلها متزامنة مع المنتج."},
            {"en": "Servo-driven mechanical pusher slides the product smoothly inside the carton chamber.", "ar": "ذراع دفع ميكانيكي بالسيرفو يدفع المنتج والنشرة بنعومة داخل الكرتونة."},
            {"en": "Rotary guides fold the flaps, apply hot glue or tuck tabs, and emboss batch/expiry numbers.", "ar": "موجهات دوارة تطوي ألسنة الكرتونة وتغلقها بالثني أو الغراء مع طباعة رقم التشغيلة بالحفر."}
        ],
        "apps_en": "Bottles of syrup, pharmaceutical blister strips, cosmetic creams, tube pastes, confectionery, and food sachets.",
        "apps_ar": "زجاجات الشراب الدوائي، شرائط البليستر، أنابيب المراهم، مستحضرات التجميل، والساشيهات الغذائية.",
        "faqs": [
            {
                "q_en": "Does it detect missing leaflets or empty cartons?",
                "q_ar": "هل تكتشف الماكينة عدم وجود النشرة أو العبوة داخل الكرتونة؟",
                "a_en": "Yes. Optical sensors verify product presence and leaflet entry; incomplete cartons are automatically rejected without stopping the line.",
                "a_ar": "نعم، حساسات دقيقة تتأكد من دخول المنتج والنشرة بالكامل، وأي كرتونة غير مكتملة تُرفض تلقائياً دون إيقاف الخط."
            }
        ]
    },
    "palletizer-and-wrapping": {
        "id": "palletizer-and-wrapping",
        "name_en": "Robotic Palletizer & Automatic Stretch Wrapper Line",
        "name_ar": "خط رص البالتات بالروبوت والتغليف النهائي بالاستريتش",
        "category_en": "End of Line",
        "category_ar": "نهاية الخط",
        "summary_en": "End-of-line turnkey automation combining robotic or gantry case palletizing with high-capacity 2,000 kg motorized turntable stretch wrapping.",
        "summary_ar": "خلية آلية متكاملة لنهاية الخط تجمع بين رص الكراتين بالروبوت وتغليف البالتات حتى وزن 2000 كجم بالفيلم المطاطي مع شد مسبق حتى 250%.",
        "img": "/public/img/palletizer.jpg",
        "gallery": ["/public/img/palletizer.jpg", "/public/img/pallet-wrapper.png", "/public/img/taping.jpg"],
        "table": [
            {"k_en": "Palletizing Output", "k_ar": "طاقة الرص", "v": "Up to 12 cases/min (Robotic / Cartesian)"},
            {"k_en": "Max Payload per Pick", "k_ar": "أقصى حمولة للالتقاط", "v": "Up to 50 kg per pick cycle"},
            {"k_en": "Max Pallet Height", "k_ar": "أقصى ارتفاع للبالتة", "v": "Up to 2,400 mm"},
            {"k_en": "Turntable Diameter", "k_ar": "قطر القرص الدوار", "v": "Ø 1,650 – 2,000 mm"},
            {"k_en": "Max Pallet Load", "k_ar": "أقصى وزن للبالتة", "v": "≤ 2,000 kg"},
            {"k_en": "Film Pre-Stretch Ratio", "k_ar": "نسبة الشد المسبق", "v": "Up to 250% (Saves up to 60% film)"},
            {"k_en": "Turntable Speed", "k_ar": "سرعة الدوران", "v": "8 – 12 RPM with Soft-start / Soft-stop"},
            {"k_en": "Layer Patterns", "k_ar": "أنماط الرص", "v": "Multi-tier programmable recipes stored on HMI"},
            {"k_en": "Safety Perimeter", "k_ar": "حماية الأمان", "v": "Optoelectronic Light Curtains & Interlocked Fencing"}
        ],
        "steps": [
            {"en": "Sealed cartons arrive on the buffer accumulation conveyor and are spaced by metering stops.", "ar": "وصول الكراتين على سير التجميع وتنظيم تدفقها ببوابات هوائية."},
            {"en": "Robotic or cartesian gripper picks single cartons or complete rows securely.", "ar": "التقاط الكراتين بالذراع الآلي أو الدافع بحوامل مفرغة من الهواء أو كلابات ميكانيكية."},
            {"en": "Cartons are placed onto the wooden or plastic pallet in pre-programmed interlocking patterns.", "ar": "رص الكراتين على البالتة طبقة تلو الأخرى بأنماط متداخلة تضمن ثبات الشحنة."},
            {"en": "Pallet transfers to motorized turntable where pre-stretch carriage applies tensioned film.", "ar": "انتقال البالتة إلى القرص الدوار حيث تصعد عربة الشد المسبق لتغليف البالتة بإحكام."},
            {"en": "Automated clamp-and-cut trims the film tail, and the pallet is discharged ready for forklift dispatch.", "ar": "مسك وقص الفيلم آلياً وخروج البالتة النهائية جاهزة لنقلها فوراً بواسطة الرافعة الشوكية."}
        ],
        "apps_en": "Corrugated cartons, shrink-wrapped bottle packs, sacks of chemical powder, edible oil tins, and paint buckets.",
        "apps_ar": "كراتين الشحن، حزم الزجاجات المغلفة، شكائر المساحيق والكيماويات، صفائح الزيوت وجرادل الدهانات.",
        "faqs": [
            {
                "q_en": "How much stretch film does the motorized pre-stretch head save?",
                "q_ar": "كم يوفر رأس الشد المسبق الميكانيكي من استهلاك فيلم الاستريتش؟",
                "a_en": "By stretching each meter of film to 2.5–3.5 meters prior to application, pre-stretch saves up to 55–60% of consumable film costs compared to manual hand wrapping.",
                "a_ar": "بفضل مط كل متر من الفيلم إلى 2.5 - 3.5 أمتار قبل لفه، يوفر نظام الشد المسبق من 55% إلى 60% من استهلاك الفيلم مقارنة بالتغليف اليدوي."
            }
        ]
    }
}

# Conveyors Technical Data
CONVEYOR_SPECS = {
    "flexible-chain-conveyors": {
        "id": "flexible-chain-conveyors",
        "name_en": "Flexible Plastic Chain Conveyors",
        "name_ar": "سيور الجنزير المرنة (فليكس شين)",
        "summary_en": "Low-friction POM plastic-chain conveyors that turn horizontal corners, climb, and descend in one continuous path without transfer drop-points.",
        "summary_ar": "سيور بجنزير بلاستيكي منخفض الاحتكاك تنعطف أفقياً ورأسياً في مسار متواصل بدون نقاط تحويل أو سقوط للعبوات.",
        "poster": "/public/media/flex-chain-food.webp",
        "table": [
            {"k_en": "Chain Width Range", "k_ar": "عرض الجنزير", "v": "44, 63, 83, 103, 140, 175, 295 mm"},
            {"k_en": "Conveying Speed", "k_ar": "أقصى سرعة نقل", "v": "Up to 60 m/min (Inverter Controlled)"},
            {"k_en": "Single Drive Run", "k_ar": "أقصى طول بمحرك واحد", "v": "Up to 30 meters continuous"},
            {"k_en": "Bend Radius", "k_ar": "نصف قطر المنحنى", "v": "Tight bends from R = 150 mm"},
            {"k_en": "Beam Construction", "k_ar": "خامة مسار الشاسيه", "v": "Anodized Structural Aluminum / Sanitary SUS304"},
            {"k_en": "Chain Material", "k_ar": "خامة الجنزير", "v": "Low-friction POM (Polyoxymethylene)"},
            {"k_en": "Drive Unit", "k_ar": "وحدة المحرك", "v": "SEW / Bonfiglioli Helical Bevel Gearmotor"},
            {"k_en": "Guide Rails", "k_ar": "الموجهات الجانبية", "v": "Fully adjustable stainless steel brackets with UHMW-PE wear strips"}
        ],
        "steps": [
            {"en": "Containers transition smoothly from packaging machine discharges onto continuous low-friction chain.", "ar": "خروج العبوات بسلاسة من ماكينة التعبئة مباشرة إلى جنزير السير منخفض الاحتكاك."},
            {"en": "Conveyor negotiates tight 90-degree and 180-degree factory bends without separate transfer plates.", "ar": "دوران السير في منحنيات 90 و 180 درجة داخل المصنع دون الحاجة لصواني تحويل وسيطة."},
            {"en": "Incline and decline sections transport products vertically between ceiling mezzanines.", "ar": "صعود وهبوط المنتجات عبر ميول منتظمة لربط الطوابق والميزانين بسلاسة."},
            {"en": "Adjustable dual guide rails cradle varied bottle contours to prevent toppling at high line velocities.", "ar": "موجهات جانبية مزدوجة تحتضن جسم العبوة لمنع الانقلاب مع السرعات العالية."}
        ],
        "apps_en": "Pharmaceutical bottles, cosmetics vials, dairy containers, cartons, cans, and snack pouches.",
        "apps_ar": "زجاجات الأدوية، مستحضرات التجميل، عبوات الألبان والعصائر، الكراتين الصغيرة والكانز.",
        "faqs": [
            {
                "q_en": "Can flexible chain conveyors operate inside wet washdown environments?",
                "q_ar": "هل تعمل سيور الفليكس شين في بيئات الغسيل بالماء والمنظفات؟",
                "a_en": "Yes. We supply SUS304 stainless steel open-beam models designed specifically for CIP food and beverage halls.",
                "a_ar": "نعم، نصنع هياكل مفتوحة بالكامل من الستانلس ستيل 304 مخصصة لمناطق الغسيل الغذائي وسهولة الصرف والتنظيف."
            }
        ]
    },
    "spiral-conveyors": {
        "id": "spiral-conveyors",
        "name_en": "Continuous Spiral Vertical Elevators",
        "name_ar": "السيور الحلزونية والمصاعد الرأسية اللولبية",
        "summary_en": "Continuous vertical elevation or lowering of cases, bottles, trays, and bags on a compact footprint from Ø 1.2 meters.",
        "summary_ar": "رفع وخفض متواصل للمنتجات والكراتين والعبوات رأسياً بين الطوابق على أصغر مساحة ممكنة تبدأ من قطر 1.2 متر.",
        "poster": "/public/media/flex-spiral.webp",
        "table": [
            {"k_en": "Elevation Height", "k_ar": "ارتفاع الرفع", "v": "1.0 m – 12.0 meters"},
            {"k_en": "Footprint Diameter", "k_ar": "قطر المساحة الأرضية", "v": "From Ø 1,200 mm"},
            {"k_en": "Unit Load Capacity", "k_ar": "وزن القطعة الواحدة", "v": "Up to 35 kg per item"},
            {"k_en": "Linear Belt Speed", "k_ar": "سرعة السير", "v": "Up to 50 m/min"},
            {"k_en": "Slat Belt Width", "k_ar": "عرض السير الحلزوني", "v": "200, 300, 400, 500, 600 mm"},
            {"k_en": "Central Column", "k_ar": "العمود المركزي", "v": "Precision heavy-duty steel tube with low-friction roller track"},
            {"k_en": "Drive Motor", "k_ar": "محرك التشغيل", "v": "Single top-mounted high-efficiency gearmotor"},
            {"k_en": "Safety System", "k_ar": "حساسات الأمان", "v": "Automatic chain tension monitoring and thermal motor overload"}
        ],
        "steps": [
            {"en": "Cartons or containers enter the spiral conveyor at ground floor tangent.", "ar": "دخول الكراتين أو العبوات عند النقطة المماسية السفلية للمصعد الحلزوني."},
            {"en": "Continuous overlapping chain slats carry items upward along the helical steel spiral track.", "ar": "شرائح الجنزير المتداخلة تنقل المنتجات لأعلى في مسار حلزوني هادئ وثابت."},
            {"en": "Rolling bearing friction technology ensures smooth, vibration-free ascent.", "ar": "تكنولوجيا محامل التدحرج تضمن صعوداً هادئاً بدون أي اهتزاز للمنتجات."},
            {"en": "Items discharge smoothly onto elevated mezzanine conveyors directly into high-bay warehousing.", "ar": "خروج المنتجات بسلاسة على مستوى الميزانين نحو المستودعات أو خطوط التغليف العلوية."}
        ],
        "apps_en": "Cartons, beverage cases, bottle packs, bags, totes, and cold-storage buffer cooling loops.",
        "apps_ar": "الكراتين، باكتات العصائر والمياه، الأكياس، الصناديق البلاستيكية، ومسارات التبريد البطيء للمخبوزات.",
        "faqs": [
            {
                "q_en": "How much floor space does a spiral conveyor save compared to a straight incline belt?",
                "q_ar": "كم توفر السيور الحلزونية من المساحة مقارنة بالسيور المائلة المستقيمة؟",
                "a_en": "A spiral elevator elevates up to 6 meters in a compact 1.8-meter footprint, whereas a straight incline requires over 18 meters of valuable factory floor space.",
                "a_ar": "يوفر السير الحلزوني رفعاً حتى 6 أمتار على مساحة قطرها 1.8 متر فقط، بينما يتطلب السير المائل المستقيم أكثر من 18 متراً طولياً من أرضية المصنع."
            }
        ]
    },
    "buffer-accumulation-conveyors": {
        "id": "buffer-accumulation-conveyors",
        "name_en": "Buffer & Dynamic Accumulation Conveyor Tables",
        "name_ar": "سيور التجميع والتخزين المؤقت (بفر سيستم)",
        "summary_en": "Decouples line machinery with dynamic zero-pressure accumulation, protecting line OEE during downstream machine stops.",
        "summary_ar": "تفصل بين محطات الخط وتجمع العبوات بدون ضغط تلامسي لحماية كفاءة الخط الإجمالية (OEE) أثناء توقف أي ماكينة.",
        "poster": "/public/media/buffer-chain.webp",
        "table": [
            {"k_en": "Accumulation Buffer Time", "k_ar": "زمن التخزين المؤقت", "v": "1 – 15 Minutes line buffer"},
            {"k_en": "Parallel Lanes", "k_ar": "عدد الحارات المتوازية", "v": "2 – 12 Parallel Lanes"},
            {"k_en": "Accumulation Logic", "k_ar": "طريقة التجميع", "v": "FIFO (First In First Out) & Bi-directional Dynamic Tables"},
            {"k_en": "Pressure Control", "k_ar": "التحكم في الضغط", "v": "Zero-pressure optical zone sensor control"},
            {"k_en": "Chain Surface", "k_ar": "سطح السير", "v": "Micro-pitch low-friction plastic or roller-top chain"},
            {"k_en": "Frame Material", "k_ar": "خامة الهيكل", "v": "Sanitary AISI 304 Stainless Steel"}
        ],
        "steps": [
            {"en": "Downstream cartoner or labeller signals a micro-stoppage or reel changeover.", "ar": "توقف مؤقت في ماكينة اللصق أو الكرتنة لتغيير رول أو ضبط تشغيلي."},
            {"en": "Diverter gates guide the continuous stream of incoming bottles seamlessly into the buffer lanes.", "ar": "بوابات التحويل توجه تدفق العبوات القادمة بسلاسة إلى حارات التجميع المؤقت."},
            {"en": "Upstream filler and capper continue running at 100% rated output without stopping.", "ar": "استمرار ماكينات التعبئة والتغطية السابقة في العمل بكامل طاقتها دون توقف."},
            {"en": "When downstream machine resumes, stored containers merge smoothly back into single file.", "ar": "فور عودة تشغيل الماكينة اللاحقة، يُعاد دمج العبوات في مسار فردي منتظم بتدرج ذكي."}
        ],
        "apps_en": "High-speed beverage bottling, edible oil packaging, dairy filling lines, and pharmaceutical blister packing.",
        "apps_ar": "خطوط تعبئة المشروبات السريعة، خطوط تعبئة الزيوت، مصانع الألبان، وخطوط الشراب الدوائي.",
        "faqs": [
            {
                "q_en": "How does dynamic buffering increase overall factory efficiency?",
                "q_ar": "كيف يرفع نظام البفر الديناميكي كفاءة المصنع الإجمالية؟",
                "a_en": "Preventing filling line halts during brief label roll or tape changes increases net line output (OEE) by 15% to 25% across every shift.",
                "a_ar": "منع توقف ماكينات التعبئة أثناء تغيير بكرات الليبل أو أشرطة اللصق يرفع الإنتاجية الصافية للخط بنسبة 15% إلى 25% في كل وردية."
            }
        ]
    },
    "pallet-conveyors": {
        "id": "pallet-conveyors",
        "name_en": "Precision Workpiece Pallet & Carrier Conveyors",
        "name_ar": "سيور الباليتات وحوامل القطع الصناعية الدقيقة",
        "summary_en": "Precision carrier transfer loop with pneumatic stop gates and lift-and-locate units for robotic assembly and automated testing.",
        "summary_ar": "مسار مغلق لنقل حوامل المنتجات مع بوابات إيقاف هوائية ووحدات رفع وتمركز دقيقة للتجميع الآلي وخلايا الروبوت.",
        "poster": "/public/media/pallet-chain.webp",
        "table": [
            {"k_en": "Carrier Pallet Sizes", "k_ar": "مقاسات حوامل الباليت", "v": "160 × 160 mm up to 640 × 640 mm"},
            {"k_en": "Positioning Accuracy", "k_ar": "دقة التمركز والتثبيت", "v": "±0.05 mm Repeatability"},
            {"k_en": "Max Pallet Payload", "k_ar": "حمولة الباليت الواحد", "v": "Up to 50 kg"},
            {"k_en": "Conveyor Type", "k_ar": "نوع السير", "v": "Twin-strand timing belt or accumulation roller chain"},
            {"k_en": "Workstation Modules", "k_ar": "وحدات المحطات", "v": "Pneumatic stop gates, lift-and-locate, 90° transverse diverters"},
            {"k_en": "Smart Tracking", "k_ar": "تتبع المنتجات", "v": "Integrated RFID tag carrier pockets for MES tracking"}
        ],
        "steps": [
            {"en": "Workpieces are loaded onto precision CNC-machined fixture pallets at the origin station.", "ar": "تثبيت القطع على حوامل باليت مصنعة بالتحكم الرقمي CNC عند محطة البداية."},
            {"en": "Twin timing belts transport carrier pallets smoothly through sequential assembly stations.", "ar": "سيور مسننة مزدوجة تنقل الباليتات بسلاسة بين محطات التجميع المتتابعة."},
            {"en": "Pneumatic lift-and-locate unit lifts the pallet off belts, pinning it with ±0.05 mm robotic accuracy.", "ar": "وحدة الرفع الهوائي ترفع الباليت عن السير وتثبته بدقة ±0.05 مم لأعمال الروبوت."},
            {"en": "Automated operations complete, pallet returns to belt and transfers to testing or packaging.", "ar": "انتهاء العملية الآلية، ثم هبوط الباليت على السير لينتقل لمحطة الفحص أو التغليف."}
        ],
        "apps_en": "Automotive electronics, medical device assembly, domestic appliance lines, and robotic screw-driving cells.",
        "apps_ar": "الإلكترونيات والسيارات، تجميع الأجهزة الطبية، تصنيع الأجهزة المنزلية، وخلايا ربط المسامير بالروبوت.",
        "faqs": [
            {
                "q_en": "Can each pallet carry independent testing data?",
                "q_ar": "هل يمكن لكل باليت حمل بيانات فحص مستقلة؟",
                "a_en": "Yes. Every carrier features an embedded RFID chip that logs test results and routes defective assemblies to rejection spurs automatically.",
                "a_ar": "نعم، يحمل كل باليت شريحة RFID تسجل نتائج الفحص وتحول القطع المعيبة تلقائياً إلى مسار فرعي للإصلاح."
            }
        ]
    },
    "gripper-conveyors": {
        "id": "gripper-conveyors",
        "name_en": "Gripper & Elevating Conveyors (Wedge Elevators)",
        "name_ar": "السيور القابضة وسيور الرفع الرأسي (جريبر)",
        "summary_en": "Synchronized facing side chains with soft elastomeric pads gently grip bottles or cans to elevate up to 90 degrees over walkways.",
        "summary_ar": "جنزيران متزامنان ببطانات مطاطية ناعمة يقبضان على العبوات من الجانبين لرفعها رأسياً حتى 90 درجة للعبور فوق الممرات.",
        "poster": "/public/media/gripper-conveyor.webp",
        "table": [
            {"k_en": "Elevation Angle", "k_ar": "زاوية الصعود والرفع", "v": "Up to 90° (True Vertical)"},
            {"k_en": "Container Width Range", "k_ar": "عرض العبوات", "v": "20 – 300 mm (Adjustable Handwheel)"},
            {"k_en": "Elevation Speed", "k_ar": "سرعة الرفع", "v": "Up to 40 m/min"},
            {"k_en": "Gripper Pad Material", "k_ar": "خامة بطانات الإمساك", "v": "Food-grade EPDM / Silicone rubber pads"},
            {"k_en": "Frame Construction", "k_ar": "خامة الهيكل", "v": "Heavy-duty SUS304 Stainless Steel"},
            {"k_en": "Drive Synchronization", "k_ar": "تزامن المحركات", "v": "Dual mechanically linked or electronically geared servo drives"}
        ],
        "steps": [
            {"en": "Containers enter from single-lane conveyor and pass into the tapered wedge infeed.", "ar": "دخول العبوات من السير الفردي إلى مقطع الدخول المخروطي للسير القابض."},
            {"en": "Opposing synchronized gripper chains close gently around container sides.", "ar": "إطباق الجنزيرين المتقابلين برفق على جانبي العبوة ببطانات مطاطية ناعمة."},
            {"en": "Items are conveyed vertically overhead to bridge across factory traffic walkways.", "ar": "رفع العبوات رأسياً لأعلى لتعبر فوق ممرات المشاة ورافعات الشوكة في المصنع."},
            {"en": "At the upper elevation, chains diverge smoothly, releasing containers onto elevated distribution belts.", "ar": "عند المستوى العلوي، يتباعد الجنزيران بسلاسة لتنطلق العبوات على سيور التوزيع العلوية."}
        ],
        "apps_en": "Glass bottles, aluminum cans, PET jars, plastic tubs, and empty container inversion for air rinsing.",
        "apps_ar": "الزجاجات، عبوات الكانز، العبوات البلاستيكية، وقلب العبوات الفارغة لشطفها بالهواء المعقم.",
        "faqs": [
            {
                "q_en": "Can this system invert containers upside-down for air or water cleaning?",
                "q_ar": "هل يمكن لهذا النظام قلب العبوات رأساً على عقب لتنظيفها بالهواء أو الماء؟",
                "a_en": "Yes. Our S-curve inverter gripper rotates containers 180° to blow de-ionized air inside and re-inverts them upright before filling.",
                "a_ar": "نعم، نصنع وحدات جريبر على شكل حرف S تقلب العبوة 180 درجة لشطفها بالهواء المؤين ثم تعيدها لوضعها الطبيعي قبل التعبئة."
            }
        ]
    },
    "modular-belt-conveyors": {
        "id": "modular-belt-conveyors",
        "name_en": "Modular Plastic Belt Conveyors",
        "name_ar": "السيور البلاستيكية المعيارية (موديولار بلت)",
        "summary_en": "Heavy-duty, washdown interlocking thermoplastic belts driven by positive sprockets for wide, wet, frozen, or heavy industrial goods.",
        "summary_ar": "سيور بلاستيكية معيارية متينة قابلة للغسيل والتعقيم، تدور على مسننات مانعة للانزلاق للأحمال الثقيلة والمنتجات العريضة والمجمدة.",
        "poster": "/public/media/modular-belt.webp",
        "table": [
            {"k_en": "Belt Widths", "k_ar": "عرض السير الموديولار", "v": "150 mm up to 2,000 mm"},
            {"k_en": "Load Capacity", "k_ar": "قدرة التحمل", "v": "Up to 150 kg per linear meter"},
            {"k_en": "Operating Temperature", "k_ar": "نطاق درجات الحرارة", "v": "-40°C to +100°C (Deep Freeze to Hot Baking)"},
            {"k_en": "Drive Engagement", "k_ar": "طريقة الإدارة", "v": "Positive square-bore sprocket drive (Zero slip)"},
            {"k_en": "Plastic Materials", "k_ar": "الخامات المعتمدة", "v": "FDA-approved Polypropylene (PP), Polyethylene (PE), Polyacetal (POM)"},
            {"k_en": "Chassis Framework", "k_ar": "شاسيه السير", "v": "SUS304 Stainless Steel with open cleanout access"}
        ],
        "steps": [
            {"en": "Wide or unpacked products feed directly onto the sanitary interlocking thermoplastic belt.", "ar": "تغذية المنتجات العريضة أو المكشوفة مباشرة على السير البلاستيكي الصحي المتداخل."},
            {"en": "Positive sprockets pull belt squarely without belt tracking errors or edge fraying.", "ar": "تروس مسننة مربعة تدير السير بانتظام تام دون أي انحراف جانبي أو تآكل للحواف."},
            {"en": "Open mesh surface allows continuous fluid drainage, cooling airflow, or blast freezing.", "ar": "سطح شبكي مفتوح يسمح بتصريف السوائل وتدفق هواء التبريد أو التجميد السريع."},
            {"en": "Hinged frame lifters permit high-pressure water sanitization underneath in minutes.", "ar": "مفصلات رفع تتيح غسيل وتعقيم أسفل السير بالماء الساخن والمطهرات خلال دقائق."}
        ],
        "apps_en": "Meat and poultry processing, seafood, bakery cooling, dairy packaging, corrugated carton lines, and wet bottling halls.",
        "apps_ar": "مصانع اللحوم والدواجن والأسماك، تبريد المخبوزات، خطوط الألبان، مصانع الكرتون، وصالات التعبئة الرطبة.",
        "faqs": [
            {
                "q_en": "What happens if a belt module is damaged by an accidental impact?",
                "q_ar": "ماذا يحدث إذا تضررت قطعة من السير نتيجة صدمة غير مقصودة؟",
                "a_en": "Only the individual interlocking modules need replacing by withdrawing a retention rod in 2 minutes, avoiding costly full-belt replacements.",
                "a_ar": "يتم سحب خابور التثبيت واستبدال القطعة المتضررة فقط خلال دقيقتين دون الحاجة لتغيير السير بالكامل."
            }
        ]
    },
    "turnkey-conveying-systems": {
        "id": "turnkey-conveying-systems",
        "name_en": "Turnkey Plant Conveying Networks & SCADA Integration",
        "name_ar": "شبكات السيور والنقل المتكاملة للمصانع (تسليم مفتاح)",
        "summary_en": "Factory-wide material handling engineering synchronizing every filler, labeller, cartoner, and palletizer under centralized PLC/SCADA control.",
        "summary_ar": "هندسة شبكات نقل متكاملة للمصنع بالكامل تربط وتنسق بين جميع ماكينات الإنتاج والتعبئة والتغليف بنظام تحكم مركزي SCADA/PLC.",
        "poster": "/public/media/factory-system.webp",
        "table": [
            {"k_en": "Project Scope", "k_ar": "نطاق المشروع", "v": "3D CAD Simulation → Local Manufacturing → On-Site Commissioning"},
            {"k_en": "Automation Network", "k_ar": "شبكة التحكم", "v": "Centralized SIEMENS Profinet / Industrial Ethernet"},
            {"k_en": "Safety Standards", "k_ar": "معايير السلامة", "v": "Emergency stop circuit, perimeter safety guarding, CE standards"},
            {"k_en": "Line Capacity", "k_ar": "طاقة الخط", "v": "Synchronized up to 24,000 units/hour"},
            {"k_en": "Electrical Enclosures", "k_ar": "لوحات الكهرباء", "v": "Rittal IP55/IP65 with Schneider and Siemens switchgear"},
            {"k_en": "Documentation", "k_ar": "الملف الهندسي", "v": "Complete mechanical drawings, electrical schematics, and spare parts list"}
        ],
        "steps": [
            {"en": "Detailed 3D layout modeling and line balance bottleneck analysis of your factory floor.", "ar": "تصميم ثلاثي الأبعاد ودراسة تدفق ومحاكاة دقيقة لمنع الاختناق وتكدس العبوات."},
            {"en": "Precision fabrication in our 10th of Ramadan City plant using laser-cut AISI 304 frames.", "ar": "تصنيع دقيق بمصانعنا في مدينة العاشر من رمضان بأحدث ماكينات الليزر والشاسيهات 304."},
            {"en": "Comprehensive Factory Acceptance Testing (FAT) with client containers before dispatch.", "ar": "إجراء اختبارات القبول المصنعية (FAT) بحضور العميل وعبواته الفعلية قبل التوريد."},
            {"en": "On-site mechanical installation, master electrical cabling, sensor tuning, and handover.", "ar": "التركيب الميكانيكي بالموقع، وتمديد شبكات الكهرباء المركزية وضبط الحساسات والتسليم النهائي."}
        ],
        "apps_en": "Complete turnkey food and beverage bottling plants, edible oil refineries, pharmaceutical complexes, and detergent packaging facilities.",
        "apps_ar": "مصانع الأغذية والمشروبات المتكاملة، مصافي زيوت الطعام، مصانع الأدوية، ومجمعات تصنيع المنظفات الكيماوية.",
        "faqs": [
            {
                "q_en": "Do you provide electrical integration with our existing machines from other manufacturers?",
                "q_ar": "هل تدمجون لوحات التحكم مع ماكيناتنا الحالية من شركات أخرى؟",
                "a_en": "Yes. Our engineering team installs interlocking sensors and interface relays that synchronize conveyor line speeds with any existing packaging equipment.",
                "a_ar": "نعم، يقوم مهندسونا بتركيب حساسات التزامن ومرحلات الربط التي تضبط سرعة السيور آلياً مع وتيرة أي ماكينة موجودة بالمصنع."
            }
        ]
    }
}

print("Specs master data loaded successfully.")
