# -*- coding: utf-8 -*-
"""
Generates all 26 distinct pages for Al Sakr Top Group with strict language separation
and responsive mobile/desktop design.
"""

import os
import html
from site_specs_data import MACHINERY_SPECS, CONVEYOR_SPECS
from build_master_portal import render_full_page, render_cta

def build_machinery_catalog():
    # Build product cards
    cards = ""
    for mid, m in MACHINERY_SPECS.items():
        cards += f"""
        <div class="tech-product-card" data-cat="{m['category_en'].lower()}">
          <div class="card-thumb-wrap">
            <img src="{m['img']}" alt="{html.escape(m['name_en'])}" class="card-thumb-img" loading="lazy" onerror="this.src='/public/img/factory.jpg'" />
            <span class="card-cat-badge">
              <span class="lang-en">{m['category_en']}</span>
              <span class="lang-ar">{m['category_ar']}</span>
            </span>
          </div>
          <div class="card-content-area">
            <h3 class="card-item-title">
              <span class="lang-en">{html.escape(m['name_en'])}</span>
              <span class="lang-ar">{html.escape(m['name_ar'])}</span>
            </h3>
            <p class="card-item-desc">
              <span class="lang-en">{html.escape(m['summary_en'])}</span>
              <span class="lang-ar">{html.escape(m['summary_ar'])}</span>
            </p>
            <div class="card-tech-specs-row">
              <div class="mini-spec">
                <span class="mini-spec-lbl">
                  <span class="lang-en">Output Speed</span>
                  <span class="lang-ar">الإنتاجية القصوى</span>
                </span>
                <span class="mini-spec-val">{m['table'][0]['v']}</span>
              </div>
              <div class="mini-spec">
                <span class="mini-spec-lbl">
                  <span class="lang-en">Alloy Standard</span>
                  <span class="lang-ar">معيار السبيكة</span>
                </span>
                <span class="mini-spec-val">AISI 304 / 316L</span>
              </div>
            </div>
            <div class="card-btn-area">
              <a href="/machinery/{mid}.html" class="btn btn-primary btn-block">
                <span class="lang-en">View Technical Specs &rarr;</span>
                <span class="lang-ar">المواصفات الفنية التفصيلية &larr;</span>
              </a>
            </div>
          </div>
        </div>
        """

    content = f"""
    <!-- Machinery Page Hero -->
    <section class="page-hero">
      <div class="container page-hero-inner">
        <span class="badge badge-accent">
          <span class="lang-en">Industrial Packaging Division</span>
          <span class="lang-ar">قطاع ماكينات التعبئة والتغليف</span>
        </span>
        <h1>
          <span class="lang-en">Turnkey Packaging & Filling Machinery</span>
          <span class="lang-ar">ماكينات وخطوط التعبئة والتغليف المتطورة</span>
        </h1>
        <p class="page-hero-lead">
          <span class="lang-en">High-performance Egyptian industrial engineering fabricated in our 10th of Ramadan plant. Built with certified sanitary AISI 304/316L stainless steel, SIEMENS automation, and Schneider touchscreen control.</span>
          <span class="lang-ar">هندسة وتصنيع مصري متقدم بمصانعنا في مدينة العاشر من رمضان. مصنوعة من الاستانلس ستيل الصحي المعتمد 304 و 316L وأنظمة تحكم سيمنز وشاشات شنايدر الذكية.</span>
        </p>

        <!-- Division Metrics Strip -->
        <div class="hero-metrics-strip">
          <div class="metric-chip">
            <strong>1,000 – 6,000 BPH</strong>
            <span>
              <span class="lang-en">Speed Capacity</span>
              <span class="lang-ar">الطاقة الإنتاجية</span>
            </span>
          </div>
          <div class="metric-chip">
            <strong>50 ml – 20 L</strong>
            <span>
              <span class="lang-en">Dosing Volume</span>
              <span class="lang-ar">مدى التعبئة</span>
            </span>
          </div>
          <div class="metric-chip">
            <strong>±0.25%</strong>
            <span>
              <span class="lang-en">Filling Accuracy</span>
              <span class="lang-ar">دقة التعبئة</span>
            </span>
          </div>
          <div class="metric-chip">
            <strong>AISI 316L</strong>
            <span>
              <span class="lang-en">Contact Alloy</span>
              <span class="lang-ar">سبيكة الملامسة</span>
            </span>
          </div>
          <div class="metric-chip">
            <strong>SIEMENS S7-1200</strong>
            <span>
              <span class="lang-en">PLC Control</span>
              <span class="lang-ar">التحكم البرمجي</span>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Catalog Section with Category Filters -->
    <section class="section">
      <div class="container">
        <div class="filter-tabs-wrapper">
          <button type="button" class="filter-tab-btn active" data-filter="all">
            <span class="lang-en">All Machinery</span>
            <span class="lang-ar">جميع الماكينات</span>
          </button>
          <button type="button" class="filter-tab-btn" data-filter="filling">
            <span class="lang-en">Filling & Dosing</span>
            <span class="lang-ar">تعبئة ومعايرة</span>
          </button>
          <button type="button" class="filter-tab-btn" data-filter="labelling">
            <span class="lang-en">Labelling & Sleeve</span>
            <span class="lang-ar">ليبل وسليف</span>
          </button>
          <button type="button" class="filter-tab-btn" data-filter="packaging">
            <span class="lang-en">Packaging & Wrapping</span>
            <span class="lang-ar">تغليف وتعبئة</span>
          </button>
          <button type="button" class="filter-tab-btn" data-filter="end of line">
            <span class="lang-en">End of Line</span>
            <span class="lang-ar">نهاية الخط والبالتة</span>
          </button>
        </div>

        <div class="catalog-grid" id="machineryGrid">
          {cards}
        </div>
      </div>
    </section>

    <!-- Engineering Standards Section -->
    <section class="section" style="background: var(--bg-surface); border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
      <div class="container">
        <div class="section-header" style="text-align: center; max-width: 760px; margin: 0 auto 3rem;">
          <span class="section-tag">
            <span class="lang-en">Industrial Quality Standards</span>
            <span class="lang-ar">معايير الجودة والتصنيع المعتمدة</span>
          </span>
          <h2>
            <span class="lang-en">Engineered to International Packaging Standards</span>
            <span class="lang-ar">مصممة ومصنعة وفق أرقى المعايير العالمية</span>
          </h2>
        </div>
        <div class="pillars-row-grid" style="margin-top: 0;">
          <div class="pillar-feature-card">
            <div class="p-icon">🛡️</div>
            <h3>
              <span class="lang-en">Sanitary AISI 316L Contact</span>
              <span class="lang-ar">استانلس ستيل صحي 316L</span>
            </h3>
            <p>
              <span class="lang-en">All liquid contact nozzles, manifolds, and piston chambers feature food & pharma grade AISI 316L stainless steel with PTFE and Viton sanitary seals.</span>
              <span class="lang-ar">جميع الأجزاء الملامسة للسائل من مواسير وفوهات ومكابس مصنوعة من الاستانلس الصحي 316L المعتمد غذائياً ودوائياً مع جوانات التفلون والفيتون.</span>
            </p>
          </div>
          <div class="pillar-feature-card">
            <div class="p-icon">⚡</div>
            <h3>
              <span class="lang-en">Smart PLC & Servo Drives</span>
              <span class="lang-ar">تحكم ذكي بالـ PLC والسيرفو</span>
            </h3>
            <p>
              <span class="lang-en">Powered by industrial SIEMENS S7-1200 / S7-1500 controllers, Schneider touchscreens with recipe memory, and multi-axis servo synchronization.</span>
              <span class="lang-ar">أنظمة تحكم برمجية متطورة من سيمنز وشاشات لمس شنايدر لحفظ حتى 100 وصفة تشغيل ومزامنة دقيقة لمحركات السيرفو.</span>
            </p>
          </div>
          <div class="pillar-feature-card">
            <div class="p-icon">🧼</div>
            <h3>
              <span class="lang-en">CIP Automated Sanitization</span>
              <span class="lang-ar">توافق كامل مع الغسيل المكاني CIP</span>
            </h3>
            <p>
              <span class="lang-en">Integrated clean-in-place sanitary recirculation manifolds allow complete hygiene cycles without disassembling valves or piping circuits.</span>
              <span class="lang-ar">أنظمة تدوير غسيل وتعقيم مدمجة تتيح تنظيف الخط بالكامل في مكانه دون الحاجة لفك الصمامات أو الوصلات يدوياً.</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    {render_cta("Need a Custom Packaging Machine or Monobloc?", "هل تحتاج ماكينة تعبئة مخصصة لمشروعك؟", "Packaging Machinery Division", "قطاع ماكينات التعبئة والتغليف")}
    """

    page = render_full_page(
        title_en="Packaging & Filling Machinery Division",
        title_ar="قطاع ماكينات التعبئة والتغليف",
        desc_en="Explore Al Sakr Top Group's industrial automatic liquid fillers, rotary cappers, self-adhesive labellers, VFFS baggers, and cartoning lines.",
        desc_ar="استكشف ماكينات تعبئة السوائل الأوتوماتيكية والتغطية واللصق الذاتي والتغليف الرأسي والكرتنة من مجموعة الصقر توب جروب.",
        body_content=content,
        active_nav="machinery",
        breadcrumbs=[
            ("Home", "الرئيسية", "/index.html"),
            ("Packaging Machinery", "ماكينات التعبئة", "")
        ]
    )

    with open("machinery.html", "w", encoding="utf-8") as f:
        f.write(page)
    print("Generated: machinery.html")

def build_conveyors_catalog():
    cards = ""
    for cid, c in CONVEYOR_SPECS.items():
        cards += f"""
        <div class="tech-product-card">
          <div class="card-thumb-wrap">
            <img src="{c['poster']}" alt="{html.escape(c['name_en'])}" class="card-thumb-img" loading="lazy" onerror="this.src='/public/img/factory.jpg'" />
            <span class="card-cat-badge">
              <span class="lang-en">Internal Handling</span>
              <span class="lang-ar">أنظمة النقل والتداول</span>
            </span>
          </div>
          <div class="card-content-area">
            <h3 class="card-item-title">
              <span class="lang-en">{html.escape(c['name_en'])}</span>
              <span class="lang-ar">{html.escape(c['name_ar'])}</span>
            </h3>
            <p class="card-item-desc">
              <span class="lang-en">{html.escape(c['summary_en'])}</span>
              <span class="lang-ar">{html.escape(c['summary_ar'])}</span>
            </p>
            <div class="card-tech-specs-row">
              <div class="mini-spec">
                <span class="mini-spec-lbl">
                  <span class="lang-en">Linear Velocity</span>
                  <span class="lang-ar">سرعة السير</span>
                </span>
                <span class="mini-spec-val">Up to 60 m/min</span>
              </div>
              <div class="mini-spec">
                <span class="mini-spec-lbl">
                  <span class="lang-en">Chain / Profile</span>
                  <span class="lang-ar">خامة الجنزير</span>
                </span>
                <span class="mini-spec-val">Low-Friction POM / SUS</span>
              </div>
            </div>
            <div class="card-btn-area">
              <a href="/conveyors/{cid}.html" class="btn btn-primary btn-block">
                <span class="lang-en">View Conveyor Specs &rarr;</span>
                <span class="lang-ar">المواصفات الفنية للسيور &larr;</span>
              </a>
            </div>
          </div>
        </div>
        """

    content = f"""
    <!-- Conveyors Page Hero -->
    <section class="page-hero">
      <div class="container page-hero-inner">
        <span class="badge badge-accent">
          <span class="lang-en">Conveyor & Material Handling Systems</span>
          <span class="lang-ar">قطاع أنظمة السيور الناقلة والتداول</span>
        </span>
        <h1>
          <span class="lang-en">Intelligent Conveyor Systems & Factory Networks</span>
          <span class="lang-ar">أنظمة السيور الناقلة الذكية وشبكات المصانع المتكاملة</span>
        </h1>
        <p class="page-hero-lead">
          <span class="lang-en">Engineered for zero-jam flow, space-efficient vertical transport, and intelligent buffer accumulation. Designed in 3D CAD and fabricated at our 10th of Ramadan City manufacturing plant.</span>
          <span class="lang-ar">مصممة لمنع تكدس العبوات نهائياً، وتوفير المساحات الأرضية عبر المصاعد الحلزونية، والتخزين الديناميكي المؤقت لحماية كفاءة الخطوط الإنتاجية.</span>
        </p>

        <!-- Division Metrics Strip -->
        <div class="hero-metrics-strip">
          <div class="metric-chip">
            <strong>200+ Systems</strong>
            <span>
              <span class="lang-en">Installed Across Egypt</span>
              <span class="lang-ar">نظام تم تركيبه</span>
            </span>
          </div>
          <div class="metric-chip">
            <strong>Up to 60 m/min</strong>
            <span>
              <span class="lang-en">Variable Speeds</span>
              <span class="lang-ar">سرعات متغيرة</span>
            </span>
          </div>
          <div class="metric-chip">
            <strong>R = 150 mm</strong>
            <span>
              <span class="lang-en">Tight Bend Radius</span>
              <span class="lang-ar">نصف قطر المنحنى</span>
            </span>
          </div>
          <div class="metric-chip">
            <strong>1 to 12 Meters</strong>
            <span>
              <span class="lang-en">Spiral Elevation</span>
              <span class="lang-ar">ارتفاع الرفع الحلزوني</span>
            </span>
          </div>
          <div class="metric-chip">
            <strong>Zero Pressure</strong>
            <span>
              <span class="lang-en">Buffer Accumulation</span>
              <span class="lang-ar">تجميع بدون ضغط</span>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Catalog Section -->
    <section class="section">
      <div class="container">
        <div class="catalog-grid">
          {cards}
        </div>
      </div>
    </section>

    <!-- Engineering Comparison Table -->
    <section class="specs-table-section">
      <div class="container">
        <div class="section-header" style="text-align: center; max-width: 800px; margin: 0 auto 3rem;">
          <span class="section-tag">
            <span class="lang-en">Engineering Comparison</span>
            <span class="lang-ar">مقارنة المواصفات الهندسية للسيور</span>
          </span>
          <h2>
            <span class="lang-en">Conveyor System Technical Comparison Matrix</span>
            <span class="lang-ar">جدول مقارنة خصائص وأنظمة السيور</span>
          </h2>
        </div>

        <div class="specs-table-card">
          <table class="engineering-table">
            <thead>
              <tr>
                <th scope="col">
                  <span class="lang-en">Conveyor Architecture</span>
                  <span class="lang-ar">نوع منظومة السير</span>
                </th>
                <th scope="col">
                  <span class="lang-en">Speed Range</span>
                  <span class="lang-ar">السرعة القصوى</span>
                </th>
                <th scope="col">
                  <span class="lang-en">Primary Material</span>
                  <span class="lang-ar">الخامات الرئيسية</span>
                </th>
                <th scope="col">
                  <span class="lang-en">Key Advantage</span>
                  <span class="lang-ar">الميزة الهندسية</span>
                </th>
                <th scope="col">
                  <span class="lang-en">Ideal Application</span>
                  <span class="lang-ar">أبرز التطبيقات</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <span class="lang-en">Flexible Chain Conveyor</span>
                  <span class="lang-ar">سيور الجنزير المرنة</span>
                </th>
                <td>10 – 60 m/min</td>
                <td>Low-Friction POM / SUS304</td>
                <td>
                  <span class="lang-en">Continuous horizontal & vertical bends</span>
                  <span class="lang-ar">انعطافات أفقية ورأسية متواصلة</span>
                </td>
                <td>
                  <span class="lang-en">Bottles, Jars, Cans, Blisters</span>
                  <span class="lang-ar">الزجاجات والبرطمانات والكانز</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span class="lang-en">Continuous Spiral Elevator</span>
                  <span class="lang-ar">المصاعد الحلزونية الرأسية</span>
                </th>
                <td>15 – 50 m/min</td>
                <td>Overlapping POM Slats</td>
                <td>
                  <span class="lang-en">Compact Ø 1.2m vertical footprint</span>
                  <span class="lang-ar">مساحة مدمجة تبدأ من قطر 1.2م</span>
                </td>
                <td>
                  <span class="lang-en">Mezzanine & Multi-Floor elevation</span>
                  <span class="lang-ar">الرفع للطوابق والميزانين</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span class="lang-en">Dynamic Buffer Accumulation</span>
                  <span class="lang-ar">سيور التخزين المؤقت</span>
                </th>
                <td>
                  <span class="lang-en">Speed-matched</span>
                  <span class="lang-ar">متزامنة السرعة</span>
                </td>
                <td>Zero-Pressure micro-pitch chains</td>
                <td>
                  <span class="lang-en">Decouples machines to protect line OEE</span>
                  <span class="lang-ar">حماية كفاءة الخط وفصل الماكينات</span>
                </td>
                <td>
                  <span class="lang-en">Downstream buffer tables</span>
                  <span class="lang-ar">طاولات التجميع والتخزين</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span class="lang-en">Workpiece Pallet Conveyor</span>
                  <span class="lang-ar">سيور الباليتات وحوامل القطع</span>
                </th>
                <td>5 – 25 m/min</td>
                <td>Twin Timing Belt / Roller Chain</td>
                <td>
                  <span class="lang-en">±0.05 mm lift-and-locate precision</span>
                  <span class="lang-ar">دقة تمركز ±0.05 مم للروبوت</span>
                </td>
                <td>
                  <span class="lang-en">Robotic assembly & Testing loops</span>
                  <span class="lang-ar">التجميع الآلي وخلايا الفحص</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span class="lang-en">Gripper Wedge Conveyor</span>
                  <span class="lang-ar">السيور القابضة الرأسية</span>
                </th>
                <td>10 – 40 m/min</td>
                <td>Facing EPDM rubber pads</td>
                <td>
                  <span class="lang-en">True 90° vertical lift over walkways</span>
                  <span class="lang-ar">صعود رأسي 90° فوق الممرات</span>
                </td>
                <td>
                  <span class="lang-en">Walkway overhead bridging</span>
                  <span class="lang-ar">العبور فوق ممرات المشاة</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span class="lang-en">Modular Plastic Belt</span>
                  <span class="lang-ar">السيور البلاستيكية المعيارية</span>
                </th>
                <td>5 – 45 m/min</td>
                <td>FDA Polypropylene (PP/PE)</td>
                <td>
                  <span class="lang-en">Positive sprocket drive, 150–2000mm</span>
                  <span class="lang-ar">إدارة مسننة مانعة للانزلاق</span>
                </td>
                <td>
                  <span class="lang-en">Meat, Dairy, Wet Washdown Halls</span>
                  <span class="lang-ar">اللحوم والألبان والصالات الرطبة</span>
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <span class="lang-en">Turnkey Plant Network</span>
                  <span class="lang-ar">شبكات السيور المتكاملة للمصنع</span>
                </th>
                <td>Up to 24,000 UPH</td>
                <td>Centralized SCADA/Profinet</td>
                <td>
                  <span class="lang-en">Single-source engineering responsibility</span>
                  <span class="lang-ar">مسؤولية هندسية موحدة تسليم مفتاح</span>
                </td>
                <td>
                  <span class="lang-en">Complete factory material handling</span>
                  <span class="lang-ar">نقل المنتجات للمصنع بالكامل</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    {render_cta("Need a 3D Layout Simulation for Your Factory?", "هل تحتاج دراسة وتخطيط ثلاثي الأبعاد لمصنعك؟", "Conveyor Systems Division", "قطاع أنظمة السيور الناقلة")}
    """

    page = render_full_page(
        title_en="Intelligent Conveyor Systems Division",
        title_ar="قطاع أنظمة السيور الناقلة الذكية",
        desc_en="Explore Al Sakr Top Group's flexible plastic chain conveyors, spiral elevators, buffer accumulation systems, and turnkey plant conveying networks.",
        desc_ar="استكشف سيور الجنزير المرنة والمصاعد الحلزونية وطاولات التجميع المؤقت وشبكات السيور المتكاملة من مجموعة الصقر توب جروب.",
        body_content=content,
        active_nav="conveyors",
        breadcrumbs=[
            ("Home", "الرئيسية", "/index.html"),
            ("Conveyor Systems", "أنظمة السيور", "")
        ]
    )

    with open("conveyors.html", "w", encoding="utf-8") as f:
        f.write(page)
    print("Generated: conveyors.html")

def build_industries():
    industries_data = [
        {
            "id": "food",
            "name_en": "Food & Bakery Products",
            "name_ar": "صناعات الأغذية والمخابز",
            "img": "/public/img/vffs.jpg",
            "challenge_en": "High hygienic standards, zero product breakage, and washdown cleaning requirements without fungal or bacterial traps.",
            "challenge_ar": "معايير نظافة فائقة، منع كسر وتفتت المنتجات الهشة، وسهولة الغسيل والتعقيم دون وجود فجوات لتجمع البكتيريا.",
            "solution_en": "FDA-compliant modular plastic belts, multihead weigher VFFS baggers for grains, and thermoforming MAP vacuum trays.",
            "solution_ar": "سيور بلاستيكية معيارية معتمدة غذائياً، ماكينات تغليف رأسي بموازين ذكية للحبوب، وتشكيل حراري تحت الفاكيوم للحوم والأجبان.",
            "steps_en": ["Infeed Bucket Elevator", "VFFS Vertical Bagger", "Rotary Checkweigher", "Carton Packer"],
            "steps_ar": ["رافع تغذية بالدلاء", "ماكينة تغليف رأسي", "ميزان فحص دوار", "ماكينة كرتنة"],
            "links": [
                ("VFFS Vertical Bagger", "ماكينة التغليف الرأسي", "/machinery/vffs-packaging-machine.html"),
                ("Multi-Lane Sachet Machine", "ماكينة الساشيه متعددة المسارات", "/machinery/multi-lane-sachet-machine.html"),
                ("Modular Plastic Belts", "السيور البلاستيكية المعيارية", "/conveyors/modular-belt-conveyors.html")
            ]
        },
        {
            "id": "pharma",
            "name_en": "Pharmaceuticals & Healthcare",
            "name_ar": "الصناعات الدوائية والمستحضرات الطبية",
            "img": "/public/img/cartoning.jpg",
            "challenge_en": "Strict cGMP compliance, zero cross-contamination, high-accuracy syrup dosing, and automated leaflet insertion.",
            "challenge_ar": "مطابقة صارمة لمعايير cGMP الدوائية، منع التلوث المتبادل، دقة متناهية في تعبئة الشراب، وإدخال النشرات الورقية آلياً.",
            "solution_en": "AISI 316L peristaltic or piston liquid fillers, rotary capping with cap-presence sensors, and automatic horizontal cartoners.",
            "solution_ar": "تعبئة سوائل فائقة النقاء بأجزاء 316L، ماكينات غطاء بحساسات تأكيد الإغلاق، وماكينات كرتنة أفقية مع طي وإدخال النشرة.",
            "steps_en": ["Bottle Air Rinsing", "Precision Liquid Filler", "Rotary Capper", "Horizontal Cartoner"],
            "steps_ar": ["شطف العبوات بالهواء", "تعبئة سوائل دقيقة", "ماكينة غطاء دوارة", "ماكينة كرتنة أفقية"],
            "links": [
                ("Automatic Liquid Filler", "ماكينة تعبئة السوائل", "/machinery/liquid-filling-machine.html"),
                ("Automatic Cartoning Machine", "ماكينة الكرتنة الأوتوماتيكية", "/machinery/cartoning-machine.html"),
                ("Pallet Carrier Conveyors", "سيور الباليتات والتجميع", "/conveyors/pallet-conveyors.html")
            ]
        },
        {
            "id": "cosmetics",
            "name_en": "Cosmetics & Personal Care",
            "name_ar": "مستحضرات التجميل والعناية الشخصية",
            "img": "/public/img/capping.jpg",
            "challenge_en": "Handling high-viscosity lotions and pasty gels, fragile decorative bottles, and precision torque on trigger spray caps.",
            "challenge_ar": "التعامل مع الكريمات والجل عالي اللزوجة، حماية العبوات الديكورية من الخدش، وضبط عزم الغلق لبخاخات الاسبراي.",
            "solution_en": "Bottom-up diving nozzles to eliminate foaming, servo-controlled magnetic capping heads, and full-wrap self-adhesive labellers.",
            "solution_ar": "فوهات غاطسة تعبئ من القاع لمنع الرغوة، رؤوس غلق بالسيرفو تحمي الأغطية من التلف، وماكينات لصق الاستيكر الشفاف.",
            "steps_en": ["Viscous Piston Filler", "Trigger Spray Capper", "Self-Adhesive Labeller", "Spiral Elevator"],
            "steps_ar": ["تعبئة بالمكبس للكريمات", "ماكينة غطاء البخاخات", "ماكينة ليبل أوتوماتيكية", "مصعد حلزوني"],
            "links": [
                ("Liquid & Cream Filler", "ماكينة تعبئة السوائل والكريمات", "/machinery/liquid-filling-machine.html"),
                ("Automatic Capping Machine", "ماكينة إغلاق الأغطية", "/machinery/capping-machine.html"),
                ("Flexible Chain Conveyors", "سيور الجنزير المرنة", "/conveyors/flexible-chain-conveyors.html")
            ]
        },
        {
            "id": "chemicals",
            "name_en": "Household & Industrial Chemicals",
            "name_ar": "المنظفات والكيماويات المنزلية والصناعية",
            "img": "/public/img/drums.jpg",
            "challenge_en": "Corrosive liquids (bleach, acid cleaners, solvents), harsh chemical fumes, and heavy container transport.",
            "challenge_ar": "التعامل مع السوائل الحارقة والمؤكسدة (الكلور ومزيلات الدهون)، الأبخرة الكيماوية، ونقل العبوات الثقيلة.",
            "solution_en": "Anti-corrosion titanium/PTFE liquid contact packages, fume exhaust enclosures, and 2,000 kg palletizing stretch wrapping.",
            "solution_ar": "تجهيزات خاصة مقاومة للتآكل من التيتانيوم والتفلون وهود سحب الأبخرة، وخلايا رص آلي وتغليف بالاستريتش للأحمال الكبيرة.",
            "steps_en": ["Chemical Duty Filler", "Heavy Jerrycan Capper", "Front & Back Labeller", "Robotic Palletizer"],
            "steps_ar": ["تعبئة سوائل كيماوية", "ماكينة غطاء الجراكن", "ماكينة استيكر وجهين", "روبوت رص البالتات"],
            "links": [
                ("Chemical Liquid Filler", "ماكينة تعبئة السوائل الكيماوية", "/machinery/liquid-filling-machine.html"),
                ("Robotic Palletizer & Wrapper", "روبوت رص البالتات والاستريتش", "/machinery/palletizer-and-wrapping.html"),
                ("Spiral Vertical Conveyor", "السيور الحلزونية الرأسية", "/conveyors/spiral-conveyors.html")
            ]
        },
        {
            "id": "oils",
            "name_en": "Edible & Automotive Lube Oils",
            "name_ar": "الزيوت النباتية وزيوت المحركات",
            "img": "/public/img/fb/oil-line.jpg",
            "challenge_en": "Viscosity variations with temperature, high oil splatter risks, continuous multi-head speeds up to 6,000 BPH.",
            "challenge_ar": "تغير لزوجة الزيت مع درجات الحرارة، منع تناثر الزيوت على العبوات، والتشغيل المستمر بسرعات تصل إلى 6,000 عبوة/ساعة.",
            "solution_en": "Direct electromagnetic or mass flowmeters, positive drip-tray shut-off nozzles, and dynamic buffer tables to decouple lines.",
            "solution_ar": "فلوميتر كتلي عالي الدقة يزن بالجرام، فوهات مانعة للتنقيط تماماً، وسيور بفر ديناميكية تمنع توقف الخط الإنتاجي.",
            "steps_en": ["Mass Flowmeter Filler", "Snap/Screw Capper", "Full Wrap Labeller", "Buffer Accumulation Table"],
            "steps_ar": ["تعبئة بالفلوميتر الكتلي", "ماكينة غطاء قلاووظ وكبس", "ماكينة ليبل دائري", "طاولة تجميع مؤقت"],
            "links": [
                ("Flowmeter Liquid Filler", "ماكينة تعبئة الزيوت بالفلوميتر", "/machinery/liquid-filling-machine.html"),
                ("Heavy Capping Machine", "ماكينة إغلاق أغطية الزيوت", "/machinery/capping-machine.html"),
                ("Buffer Accumulation Systems", "طاولات التخزين المؤقت", "/conveyors/buffer-accumulation-conveyors.html")
            ]
        },
        {
            "id": "agro",
            "name_en": "Agrochemicals & Fertilizers",
            "name_ar": "الأسمدة والمبيدات الزراعية",
            "img": "/public/img/fb/chemical-drums.jpg",
            "challenge_en": "Dusty granular bagging environments, concentrated liquid pesticides, and toxic containment protocols.",
            "challenge_ar": "بيئات تعبئة الأسمدة الحبيبية كثيرة الأتربة، المبيدات السائلة المركزة، ومتطلبات الأمان الصناعي والبيئي.",
            "solution_en": "Dust-sealed auger and granule VFFS baggers, hermetic induction cap sealing units, and robust stainless steel lines.",
            "solution_ar": "ماكينات تعبئة رأسية معزولة الأتربة، سداد حراري بالأندكشن لمنع أي تسريب، وشاسيهات متينة تتحمل البيئة الزراعية.",
            "steps_en": ["Granule Bagging VFFS", "Induction Cap Sealer", "Shrink Film Bundler", "Pallet Stretch Wrapper"],
            "steps_ar": ["ماكينة تغليف حبيبات VFFS", "سداد حراري أندكشن", "ماكينة شرنك حزم", "تغليف بالتات بالاستريتش"],
            "links": [
                ("Granule VFFS Bagger", "ماكينة تعبئة الحبيبات VFFS", "/machinery/vffs-packaging-machine.html"),
                ("Shrink Sleeve Applicator", "ماكينة سليف الأغطية", "/machinery/shrink-sleeve-machine.html"),
                ("Turnkey Plant Networks", "شبكات السيور المتكاملة", "/conveyors/turnkey-conveying-systems.html")
            ]
        }
    ]

    cards_html = ""
    for ind in industries_data:
        steps_en_str = " &rarr; ".join([f"<span>{s}</span>" for s in ind["steps_en"]])
        steps_ar_str = " &larr; ".join([f"<span>{s}</span>" for s in ind["steps_ar"]])
        rec_links = "".join([f'<li><a href="{u}"><span class="lang-en">{ten}</span><span class="lang-ar">{tar}</span> <span class="lang-en">&rarr;</span><span class="lang-ar">&larr;</span></a></li>' for ten, tar, u in ind["links"]])

        cards_html += f"""
        <div class="industry-sector-card">
          <div class="sector-img-wrap">
            <img src="{ind['img']}" alt="{html.escape(ind['name_en'])}" loading="lazy" onerror="this.src='/public/img/factory.jpg'" />
          </div>
          <div class="sector-card-body">
            <h3>
              <span class="lang-en">{html.escape(ind['name_en'])}</span>
              <span class="lang-ar">{html.escape(ind['name_ar'])}</span>
            </h3>
            
            <div style="background: var(--bg-surface); border-radius: var(--radius-sm); padding: 0.85rem; font-size: 0.85rem;">
              <strong style="color: #ef4444; display: block; margin-bottom: 0.2rem;">
                <span class="lang-en">Engineering Challenge:</span>
                <span class="lang-ar">التحدي الهندسي:</span>
              </strong>
              <p style="margin: 0; color: var(--text-muted);">
                <span class="lang-en">{ind['challenge_en']}</span>
                <span class="lang-ar">{ind['challenge_ar']}</span>
              </p>
            </div>

            <div style="background: rgba(2, 132, 199, 0.08); border-left: 3px solid var(--brand-primary); padding: 0.85rem; font-size: 0.85rem;">
              <strong style="color: var(--brand-accent); display: block; margin-bottom: 0.2rem;">
                <span class="lang-en">Al Sakr Solution:</span>
                <span class="lang-ar">حل مجموعة الصقر:</span>
              </strong>
              <p style="margin: 0; color: var(--text-secondary);">
                <span class="lang-en">{ind['solution_en']}</span>
                <span class="lang-ar">{ind['solution_ar']}</span>
              </p>
            </div>

            <div style="font-size: 0.8rem; color: var(--text-muted); padding: 0.5rem 0;">
              <strong>
                <span class="lang-en">Typical Line Flow:</span>
                <span class="lang-ar">مسار الخط النموذجي:</span>
              </strong>
              <div class="lang-en" style="margin-top: 0.35rem; color: #38bdf8; line-height: 1.5;">{steps_en_str}</div>
              <div class="lang-ar" style="margin-top: 0.35rem; color: #38bdf8; line-height: 1.5;">{steps_ar_str}</div>
            </div>

            <div class="recommended-links-box">
              <h4>
                <span class="lang-en">Recommended Systems:</span>
                <span class="lang-ar">الأنظمة والمعدات الموصى بها:</span>
              </h4>
              <ul class="rec-equipment-list">
                {rec_links}
              </ul>
            </div>
          </div>
        </div>
        """

    content = f"""
    <!-- Industries Page Hero -->
    <section class="page-hero">
      <div class="container page-hero-inner">
        <span class="badge badge-accent">
          <span class="lang-en">Industrial Sectors</span>
          <span class="lang-ar">القطاعات والتطبيقات الصناعية</span>
        </span>
        <h1>
          <span class="lang-en">Industry-Tailored Engineering Solutions</span>
          <span class="lang-ar">حلول هندسية متخصصة ومصممة لكل قطاع صناعي</span>
        </h1>
        <p class="page-hero-lead">
          <span class="lang-en">Discover how Al Sakr Top Group engineers specific packaging lines and conveyor architectures to meet the rigorous chemical, sanitary, and output demands of six major manufacturing sectors.</span>
          <span class="lang-ar">استكشف كيف تطوع الصقر توب جروب خطوط التعبئة والتغليف والسيور لتلبي متطلبات النظافة الغذائية والدوائية ومقاومة الكيماويات والسرعات العالية.</span>
        </p>
      </div>
    </section>

    <!-- Sectors Grid -->
    <section class="section">
      <div class="container">
        <div class="industries-layout-grid">
          {cards_html}
        </div>
      </div>
    </section>

    {render_cta("Need an Industry-Specific Line Design?", "هل تحتاج تصميماً مخصصاً لقطاعك الصناعي؟", "Industry Sector Solutions", "الحلول القطاعية المتخصصة")}
    """

    page = render_full_page(
        title_en="Industrial Sectors & Turnkey Solutions",
        title_ar="القطاعات الصناعية والحلول المتكاملة",
        desc_en="Turnkey packaging and conveying solutions engineered for food, pharma, cosmetics, chemicals, edible oils, and agrochemicals by Al Sakr Top Group.",
        desc_ar="حلول متكاملة لخطوط التعبئة والتغليف والسيور للأغذية والأدوية والتجميل والكيماويات والزيوت والأسمدة من مجموعة الصقر توب جروب.",
        body_content=content,
        active_nav="industries",
        breadcrumbs=[
            ("Home", "الرئيسية", "/index.html"),
            ("Industries", "القطاعات", "")
        ]
    )

    with open("industries.html", "w", encoding="utf-8") as f:
        f.write(page)
    print("Generated: industries.html")

def build_services():
    services_data = [
        ("01", "📐", "Factory Site Audit & 3D CAD Line Modeling", "معاينة الموقع والتصميم ثلاثي الأبعاد",
         "Our mechanical engineers visit your manufacturing facility to evaluate current line layout, measure ceiling clearances and floor geometries, and generate full 3D CAD line proposals that eradicate production bottlenecks before metal is cut.",
         "يقوم مهندسونا بزيارة مصنعك لدراسة المساحات والارتفاعات ومسارات الحركة وعمل تصميم ثلاثي الأبعاد يقضي على أي اختناقات قبل بدء التصنيع الفعلي."),
        ("02", "🏭", "Local Egyptian Fabrication (10th of Ramadan)", "تصنيع محلي بمصانعنا في العاشر من رمضان",
         "Fabricated at our dedicated plant in Industrial Area C3, 10th of Ramadan City using precision CNC laser cutting, press braking, TIG welding, and AISI 304/316L certified stainless steel. Eliminates foreign currency import premiums and overseas freight delays.",
         "تصنيع بأحدث ماكينات الليزر والـ CNC واللحام الصحي في مصنعنا بالعاشر من رمضان، مما يوفر تكاليف الاستيراد بالعملة الأجنبية ويضمن سرعة التوريد."),
        ("03", "🔍", "Factory Acceptance Testing (FAT)", "اختبارات القبول المصنعية الصارمة (FAT)",
         "Before any machine departs our facility, clients are invited to conduct rigorous FAT runs using their actual production bottles, caps, labels, and products. Speeds, filling accuracies, and safety trip circuits are validated and documented.",
         "قبل خروج أي ماكينة من المصنع، يجري العميل اختبارات تشغيل كاملة بعبواته ومنتجاته الفعلية للتأكد من الدقة والسرعة ووسائل الأمان وتوثيق المحضر رسمياً."),
        ("04", "🛠️", "Mechanical & Electrical On-Site Commissioning", "التركيب الميكانيكي والكهربائي بموقع العميل",
         "Our field engineering crews manage leveling, anchoring, electrical cable routing, sensor calibration, and integration with your existing utilities (compressed air, power, product feed tanks). Handover includes complete trial batch sign-off.",
         "يتولى مهندسونا وفنيونا التركيب الدقيق وضبط المناسيب وتمديدات الكابلات وتوصيل شبكات الهواء، ولا يتم التسليم إلا بعد إنتاج تشغيلة تجريبية ناجحة."),
        ("05", "👨‍🏫", "Operator & Maintenance Engineering Training", "تدريب المشغلين ومهندسي الصيانة",
         "Comprehensive on-machine training covering touchscreen recipe programming, changeover procedures, safety protocols, and daily preventative maintenance checklist routines in both Arabic and English.",
         "تدريب عملي لفريق عملك على شاشات التشغيل وتغيير مقاسات العبوات في دقائق، والتعامل مع تنبيهات الأعطال وإجراءات الصيانة الوقائية باللغتين العربية والإنجليزية."),
        ("06", "⚡", "Lifetime Local Technical Support & Field Response", "دعم فني محلي سريع واستجابة فورية",
         "Being based in 10th of Ramadan City means our service engineers can be on-site at your facility within hours across Egypt, preventing costly prolonged downtime. Comprehensive maintenance contracts available.",
         "تواجد مصنعنا وفريقنا في مدينة العاشر من رمضان يضمن وصول مهندسينا لمصنعك خلال ساعات معدودة لحل أي طارئ دون انتظار خبراء أجانب أو إجراءات معقدة.")
    ]

    cards_html = ""
    for num, icon, title_en, title_ar, desc_en, desc_ar in services_data:
        cards_html += f"""
        <div class="service-step-card">
          <div class="service-icon-wrap">{icon}</div>
          <div class="service-text-content">
            <span style="font-size: 0.8rem; font-weight: 800; color: var(--brand-accent); letter-spacing: 0.1em; display: block; margin-bottom: 0.25rem;">
              <span class="lang-en">PHASE {num}</span>
              <span class="lang-ar">المرحلة {num}</span>
            </span>
            <h3>
              <span class="lang-en">{html.escape(title_en)}</span>
              <span class="lang-ar">{html.escape(title_ar)}</span>
            </h3>
            <p class="lang-en">{html.escape(desc_en)}</p>
            <p class="lang-ar">{html.escape(desc_ar)}</p>
          </div>
        </div>
        """

    content = f"""
    <!-- Services Page Hero -->
    <section class="page-hero">
      <div class="container page-hero-inner">
        <span class="badge badge-accent">
          <span class="lang-en">Turnkey Engineering Lifecycle</span>
          <span class="lang-ar">الخدمات الهندسية ودورة حياة المشاريع</span>
        </span>
        <h1>
          <span class="lang-en">Comprehensive Engineering & Lifetime Support</span>
          <span class="lang-ar">الهندسة المتكاملة والدعم الفني الميداني مدى الحياة</span>
        </h1>
        <p class="page-hero-lead">
          <span class="lang-en">From initial 3D layout simulation to certified Factory Acceptance Testing (FAT), on-site installation, and rapid localized engineering support across Egypt and the Middle East.</span>
          <span class="lang-ar">من التخطيط ثلاثي الأبعاد إلى اختبارات القبول المصنعية والتركيب الميداني والدعم الهندسي المحلي الشامل في مصانع العاشر من رمضان ومحافظات مصر.</span>
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section">
      <div class="container">
        <div class="services-flow-grid">
          {cards_html}
        </div>
      </div>
    </section>

    {render_cta("Schedule a Factory Audit or Consultation", "احجز موعداً لمعاينة مصنعك أو استشارة هندسية", "Engineering Services Division", "قطاع الخدمات الهندسية")}
    """

    page = render_full_page(
        title_en="Engineering Services & Turnkey Support",
        title_ar="الخدمات الهندسية والدعم الفني",
        desc_en="3D CAD/CAM line design, local manufacturing in 10th of Ramadan, Factory Acceptance Testing (FAT), on-site commissioning, and lifetime support.",
        desc_ar="دراسات تخطيطية ثلاثية الأبعاد، وتصنيع محلي بالعاشر من رمضان، واختبارات قبول مصنعية، وتركيب ميداني، ودعم مستمر.",
        body_content=content,
        active_nav="services",
        breadcrumbs=[
            ("Home", "الرئيسية", "/index.html"),
            ("Services", "الخدمات", "")
        ]
    )

    with open("services.html", "w", encoding="utf-8") as f:
        f.write(page)
    print("Generated: services.html")

def build_about():
    content = f"""
    <!-- About Page Hero -->
    <section class="page-hero">
      <div class="container page-hero-inner">
        <span class="badge badge-accent">
          <span class="lang-en">Industrial Legacy Since 1995</span>
          <span class="lang-ar">ريادة صناعية مستمرة منذ عام 1995</span>
        </span>
        <h1>
          <span class="lang-en">About Al Sakr Top Group</span>
          <span class="lang-ar">عن مجموعة الصقر توب جروب</span>
        </h1>
        <p class="page-hero-lead">
          <span class="lang-en">Founded in 1995 by Eng. Hemdan Sakr, ALSAKR for Trading & Manufacturing (Joint-Stock Co.) has developed into Egypt's foremost industrial packaging machinery and intelligent conveying systems builder.</span>
          <span class="lang-ar">تأسست عام 1995 بقيادة المهندس حمدان صقر، وتطورت شركة الصقر للتجارة والتصنيع (ش.م.م) لتصبح الصرح الصناعي الرائد في مصر في تصنيع خطوط التعبئة والتغليف وأنظمة السيور المتطورة.</span>
        </p>
      </div>
    </section>

    <!-- History & Plant Section -->
    <section class="section">
      <div class="container about-split-grid">
        <div class="about-media-frame">
          <img src="/public/img/factory.jpg" alt="Al Sakr 10th of Ramadan Plant" onerror="this.src='/public/img/project-1.jpg'" />
        </div>
        <div>
          <span class="badge badge-accent" style="margin-bottom: 0.75rem;">
            <span class="lang-en">Our Manufacturing Facility</span>
            <span class="lang-ar">مجمع مصانعنا بالعاشر من رمضان</span>
          </span>
          <h2 style="font-size: clamp(1.8rem, 3vw, 2.3rem); font-weight: 800; margin: 0.5rem 0 1rem;">
            <span class="lang-en">Engineering Sovereignty & World-Class Quality</span>
            <span class="lang-ar">توطين التكنولوجيا الهندسية بمعايير عالمية</span>
          </h2>
          <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1rem;">
            <span class="lang-en">Headquartered at Plot VH, Industrial Area C3 in 10th of Ramadan City, our facility houses specialized design engineering departments, precision CNC laser cutting and forming workshops, sanitary TIG welding bays, and dedicated assembly lines for liquid fillers, cappers, labellers, and complex conveying networks.</span>
            <span class="lang-ar">من مقرنا ومصانعنا بالقطعة VH في المنطقة الصناعية C3 بالعاشر من رمضان، نضم نخبة من مهندسي التصميم ومصانع التشكيل بالليزر وصالات التجميع المخصصة لماكينات التعبئة والتغطية واللصق وشبكات السيور.</span>
          </p>
          <div class="about-stats-strip">
            <div class="about-stat-chip">
              <span class="about-stat-num">1995</span>
              <span class="about-stat-lbl">
                <span class="lang-en">Founded in Egypt</span>
                <span class="lang-ar">سنة التأسيس</span>
              </span>
            </div>
            <div class="about-stat-chip">
              <span class="about-stat-num">200+</span>
              <span class="about-stat-lbl">
                <span class="lang-en">Conveyor Networks</span>
                <span class="lang-ar">شبكة سيور مركبة</span>
              </span>
            </div>
            <div class="about-stat-chip">
              <span class="about-stat-num">100%</span>
              <span class="about-stat-lbl">
                <span class="lang-en">Local Engineering</span>
                <span class="lang-ar">هندسة وتصنيع محلي</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission, Vision & Quality Pillars -->
    <section class="section" style="background: var(--bg-surface); border-top: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle);">
      <div class="container">
        <div class="section-header" style="text-align: center; max-width: 760px; margin: 0 auto 3rem;">
          <span class="section-tag">
            <span class="lang-en">Core Principles</span>
            <span class="lang-ar">المبادئ والأهداف الاستراتيجية</span>
          </span>
          <h2>
            <span class="lang-en">Mission, Vision & Engineering Standards</span>
            <span class="lang-ar">رسالتنا ورؤيتنا ومعاييرنا الهندسية</span>
          </h2>
        </div>

        <div class="pillars-row-grid" style="margin-top: 0;">
          <div class="pillar-feature-card">
            <div class="p-icon">🎯</div>
            <h3>
              <span class="lang-en">Our Mission</span>
              <span class="lang-ar">رسالتنا</span>
            </h3>
            <p>
              <span class="lang-en">Empowering Egyptian and regional food, pharma, and chemical manufacturers with robust, high-efficiency packaging lines and intelligent conveyors that match European standards without prohibitive import currency premiums.</span>
              <span class="lang-ar">تمكين المصانع المصرية والإقليمية في قطاعات الأغذية والأدوية والكيماويات بخطوط تعبئة وسيور متطورة تضاهي المعايير الأوروبية وبكفاءة اقتصادية مستدامة.</span>
            </p>
          </div>
          <div class="pillar-feature-card">
            <div class="p-icon">👁️</div>
            <h3>
              <span class="lang-en">Our Vision</span>
              <span class="lang-ar">رؤيتنا</span>
            </h3>
            <p>
              <span class="lang-en">To be the undisputed turnkey benchmark across the Middle East and Africa for industrial packaging automation, pioneering modular clean-conveying technologies and robotic end-of-line integration.</span>
              <span class="lang-ar">أن نكون المرجع الصناعي الأول في الشرق الأوسط وإفريقيا في أتمتة خطوط التعبئة والتغليف والسيور الذكية وخلايا الروبوت الصناعي.</span>
            </p>
          </div>
          <div class="pillar-feature-card">
            <div class="p-icon">⚙️</div>
            <h3>
              <span class="lang-en">Quality Standards</span>
              <span class="lang-ar">معايير الجودة</span>
            </h3>
            <p>
              <span class="lang-en">Strict fabrication using certified sanitary stainless steel AISI 304 frames and AISI 316L liquid contact components, SIEMENS automation, and comprehensive client FAT protocols before delivery.</span>
              <span class="lang-ar">التزام صارم بالاستانلس ستيل الصحي 304 و 316L المعتمد غذائياً، ومكونات التحكم الآلي من كبرى الشركات العالمية مثل سيمنز وشنايدر واختبارات مصنعية دقيقة.</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    {render_cta("Visit Our 10th of Ramadan Manufacturing Plant", "تفضل بزيارة مصنعنا بمدينة العاشر من رمضان", "About Al Sakr Top Group", "عن مجموعة الصقر توب جروب")}
    """

    page = render_full_page(
        title_en="About Al Sakr Top Group",
        title_ar="عن مجموعة الصقر توب جروب",
        desc_en="Over 30 years of Egyptian engineering excellence in packaging machinery and conveyor systems founded by Eng. Hemdan Sakr in 1995.",
        desc_ar="أكثر من 30 عاماً من الريادة الهندسية المصرية في ماكينات التعبئة والتغليف والسيور الناقلة تأسست عام 1995.",
        body_content=content,
        active_nav="about",
        breadcrumbs=[
            ("Home", "الرئيسية", "/index.html"),
            ("About Us", "عن المجموعة", "")
        ]
    )

    with open("about.html", "w", encoding="utf-8") as f:
        f.write(page)
    print("Generated: about.html")

def build_contact():
    content = f"""
    <!-- Contact Page Hero -->
    <section class="page-hero">
      <div class="container page-hero-inner">
        <span class="badge badge-accent">
          <span class="lang-en">Direct Engineering Contact</span>
          <span class="lang-ar">قنوات الاتصال المباشرة</span>
        </span>
        <h1>
          <span class="lang-en">Contact Al Sakr Top Group</span>
          <span class="lang-ar">تواصل مع الإدارة والمصنع مباشرة</span>
        </h1>
        <p class="page-hero-lead">
          <span class="lang-en">Visit our manufacturing facility in 10th of Ramadan City, speak directly with division engineers, or submit a request for quotation and technical proposal.</span>
          <span class="lang-ar">تفضل بزيارة مصانعنا في مدينة العاشر من رمضان، أو تواصل مباشرة مع مهندسي القطاعات لطلب عروض الأسعار والدراسات الفنية.</span>
        </p>
      </div>
    </section>

    <!-- Contact Details & Form Section -->
    <section class="section">
      <div class="container contact-split-grid">
        <div class="contact-panel">
          <h3>
            <span class="lang-en">Direct Division Extensions</span>
            <span class="lang-ar">أرقام القطاعات والإدارات</span>
          </h3>
          
          <div class="contact-channel-item">
            <span class="channel-icon">📍</span>
            <div class="channel-body">
              <strong>
                <span class="lang-en">Plant & Headquarters:</span>
                <span class="lang-ar">المصنع والمقر الرئيسي:</span>
              </strong>
              <p class="lang-en">Plot VH, Industrial Area C3, 10th of Ramadan City, Sharqia Governorate, Egypt</p>
              <p class="lang-ar">القطعة VH، المنطقة الصناعية C3، مدينة العاشر من رمضان، محافظة الشرقية، مصر</p>
            </div>
          </div>

          <div class="contact-channel-item">
            <span class="channel-icon">📞</span>
            <div class="channel-body">
              <strong>
                <span class="lang-en">Packaging Machinery Division:</span>
                <span class="lang-ar">قطاع ماكينات التعبئة والتغليف:</span>
              </strong>
              <p><a href="tel:+201098079365" dir="ltr">+20 10 98079365</a></p>
            </div>
          </div>

          <div class="contact-channel-item">
            <span class="channel-icon">📞</span>
            <div class="channel-body">
              <strong>
                <span class="lang-en">Conveyor & Handling Systems Division:</span>
                <span class="lang-ar">قطاع أنظمة السيور والتداول:</span>
              </strong>
              <p><a href="tel:+201020588660" dir="ltr">+20 10 20588660</a></p>
            </div>
          </div>

          <div class="contact-channel-item">
            <span class="channel-icon">💬</span>
            <div class="channel-body">
              <strong>
                <span class="lang-en">WhatsApp Instant Support:</span>
                <span class="lang-ar">خدمة العملاء والواتساب الفوري:</span>
              </strong>
              <p><a href="https://wa.me/201098079365" target="_blank" rel="noopener">+20 10 98079365</a> &middot; <a href="https://wa.me/201021717453" target="_blank" rel="noopener">+20 10 21717453</a></p>
            </div>
          </div>

          <div class="contact-channel-item">
            <span class="channel-icon">✉️</span>
            <div class="channel-body">
              <strong>
                <span class="lang-en">Official Email:</span>
                <span class="lang-ar">البريد الإلكتروني المعتمد:</span>
              </strong>
              <p><a href="mailto:sales@topgroupco.com">sales@topgroupco.com</a> &middot; <a href="mailto:info@topgroupco.com">info@topgroupco.com</a></p>
            </div>
          </div>

          <div class="contact-channel-item">
            <span class="channel-icon">⏰</span>
            <div class="channel-body">
              <strong>
                <span class="lang-en">Working Hours:</span>
                <span class="lang-ar">مواعيد العمل الرسمية:</span>
              </strong>
              <p class="lang-en">Saturday – Thursday: 9:00 AM – 5:00 PM (Friday Closed)</p>
              <p class="lang-ar">السبت – الخميس: 9:00 ص – 5:00 م (الجمعة عطلة أسبوعية)</p>
            </div>
          </div>
        </div>

        <div class="contact-panel">
          <h3>
            <span class="lang-en">Request Technical Proposal</span>
            <span class="lang-ar">طلب عرض سعر ودراسة فنية</span>
          </h3>
          <form id="quoteReqForm" onsubmit="event.preventDefault(); window.submitQuote(this);">
            <div class="field-group">
              <label for="fName">
                <span class="lang-en">Contact Name *</span>
                <span class="lang-ar">الاسم بالكامل *</span>
              </label>
              <input type="text" id="fName" name="name" required class="input-control" placeholder="e.g. Eng. Tarek Mahmoud" />
            </div>

            <div class="field-group">
              <label for="fCompany">
                <span class="lang-en">Company / Factory Name *</span>
                <span class="lang-ar">اسم الشركة أو المصنع *</span>
              </label>
              <input type="text" id="fCompany" name="company" required class="input-control" placeholder="e.g. Modern Food Industries" />
            </div>

            <div class="fields-row">
              <div class="field-group">
                <label for="fPhone">
                  <span class="lang-en">Phone / WhatsApp *</span>
                  <span class="lang-ar">رقم الهاتف / الواتساب *</span>
                </label>
                <input type="tel" id="fPhone" name="phone" required class="input-control" placeholder="+20 10..." />
              </div>
              <div class="field-group">
                <label for="fEmail">
                  <span class="lang-en">Email Address</span>
                  <span class="lang-ar">البريد الإلكتروني</span>
                </label>
                <input type="email" id="fEmail" name="email" class="input-control" placeholder="name@company.com" />
              </div>
            </div>

            <div class="field-group">
              <label for="fEquip">
                <span class="lang-en">Equipment of Interest</span>
                <span class="lang-ar">المعدة أو النظام المطلوب</span>
              </label>
              <select id="fEquip" name="equipment" class="input-control">
                <option value="Liquid Filling Machine" data-en="Automatic Liquid Filling Machine" data-ar="ماكينة تعبئة السوائل الأوتوماتيكية">Automatic Liquid Filling Machine</option>
                <option value="Automatic Capping Machine" data-en="Automatic Capping Machine" data-ar="ماكينة إغلاق وتغطية الأغطية">Automatic Capping Machine</option>
                <option value="Self-Adhesive Labelling Machine" data-en="Self-Adhesive Labelling Machine" data-ar="ماكينة لصق الليبل ذاتي اللصق">Self-Adhesive Labelling Machine</option>
                <option value="Shrink Sleeve Machine" data-en="Shrink Sleeve Machine" data-ar="ماكينة تطبيق سليف الانكماش الحراري">Shrink Sleeve Machine</option>
                <option value="Vertical Packaging VFFS" data-en="Vertical Packaging (VFFS)" data-ar="ماكينة التعبئة والتغليف الرأسية">Vertical Packaging (VFFS)</option>
                <option value="Multi-Lane Sachet Machine" data-en="Multi-Lane Sachet Machine" data-ar="ماكينة تعبئة الساشيه متعددة المسارات">Multi-Lane Sachet Machine</option>
                <option value="Thermoforming Packaging Machine" data-en="Thermoforming Packaging Machine" data-ar="ماكينة التشكيل الحراري ثيرموفورمينج">Thermoforming Packaging Machine</option>
                <option value="Horizontal Flow-Pack Machine" data-en="Horizontal Flow-Pack (HFFS)" data-ar="ماكينة التغليف الأفقي فلوباك">Horizontal Flow-Pack (HFFS)</option>
                <option value="Automatic Cartoning Machine" data-en="Automatic Cartoning Machine" data-ar="ماكينة تعبئة الكراتين الأوتوماتيكية">Automatic Cartoning Machine</option>
                <option value="Robotic Palletizer & Wrapper" data-en="Robotic Palletizer & Stretch Wrapper" data-ar="خط رص البالتات بالروبوت والاستريتش">Robotic Palletizer & Stretch Wrapper</option>
                <option value="Flexible Chain Conveyors" data-en="Flexible Chain Conveyor Systems" data-ar="سيور الجنزير المرنة فليكس شين">Flexible Chain Conveyor Systems</option>
                <option value="Continuous Spiral Elevators" data-en="Continuous Spiral Elevators" data-ar="السيور الحلزونية والمصاعد الرأسية">Continuous Spiral Elevators</option>
                <option value="Buffer Accumulation System" data-en="Buffer & Accumulation Systems" data-ar="طاولات وسيور التخزين المؤقت">Buffer & Accumulation Systems</option>
                <option value="Complete Turnkey Factory Line" data-en="Complete Turnkey Factory Line" data-ar="خط مصنع متكامل تسليم مفتاح">Complete Turnkey Factory Line</option>
              </select>
            </div>

            <div class="field-group">
              <label for="fDetails">
                <span class="lang-en">Production Details (Speed BPH, Container Volumes, Product Type)</span>
                <span class="lang-ar">تفاصيل المشروع (السرعة، أحجام العبوات، نوع المنتج)</span>
              </label>
              <textarea id="fDetails" name="details" rows="3" class="input-control" placeholder="Please specify: target capacity BPH, bottle material, viscosity, factory location..."></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-block btn-lg" style="margin-top: 0.5rem;">
              <span class="icon">🚀</span>
              <span class="lang-en">Submit Request via WhatsApp & Email</span>
              <span class="lang-ar">إرسال الطلب عبر واتساب والبريد</span>
            </button>
          </form>
        </div>
      </div>

      <!-- Google Map -->
      <div class="container map-embed-wrapper">
        <iframe 
          src="https://www.google.com/maps?q=Industrial+Area+C3,+10th+of+Ramadan+City,+Egypt&output=embed" 
          width="100%" 
          height="420" 
          style="border:0; display:block;" 
          allowfullscreen="" 
          loading="lazy">
        </iframe>
      </div>
    </section>
    """

    page = render_full_page(
        title_en="Contact Al Sakr Top Group",
        title_ar="اتصل بمجموعة الصقر توب جروب",
        desc_en="Contact Al Sakr Top Group factory in 10th of Ramadan City. Machinery division +201098079365, Conveyor division +201020588660.",
        desc_ar="تواصل مع مصنع مجموعة الصقر توب جروب بمدينة العاشر من رمضان. قطاع الماكينات +201098079365، قطاع السيور +201020588660.",
        body_content=content,
        active_nav="contact",
        breadcrumbs=[
            ("Home", "الرئيسية", "/index.html"),
            ("Contact Us", "اتصل بنا", "")
        ]
    )

    with open("contact.html", "w", encoding="utf-8") as f:
        f.write(page)
    print("Generated: contact.html")

def build_configurator():
    content = f"""
    <!-- Configurator Hero -->
    <section class="page-hero">
      <div class="container page-hero-inner">
        <span class="badge badge-accent">
          <span class="lang-en">Interactive Engineering Tool</span>
          <span class="lang-ar">أداة هندسية تفاعلية</span>
        </span>
        <h1>
          <span class="lang-en">Production Line Configurator</span>
          <span class="lang-ar">محدد ومطابق معدات خطوط الإنتاج</span>
        </h1>
        <p class="page-hero-lead">
          <span class="lang-en">Select your product's physical state, packaging format, and required hourly capacity. Our engineering engine matches the ideal filling, capping, labelling, conveying, and palletizing architecture instantly.</span>
          <span class="lang-ar">حدد نوع منتجك وشكل العبوة والطاقة الإنتاجية المطلوبة في الساعة، ليقوم محركنا بمطابقة الماكينات ومنظومة السيور المثالية لمصنعك فوراً.</span>
        </p>
      </div>
    </section>

    <!-- Configurator Wizard Panel -->
    <section class="section">
      <div class="container">
        <div class="wizard-panel">
          <form id="configForm" class="wizard-inputs-grid">
            <div>
              <label for="cfgProduct" style="display:block; font-weight:700; color:var(--text-primary); margin-bottom:0.5rem;">
                <span class="lang-en">1. Product Physical State:</span>
                <span class="lang-ar">1. الحالة الفيزيائية للمنتج:</span>
              </label>
              <select id="cfgProduct" class="input-control">
                <option value="liquid-thin" data-en="Thin Free-Flowing Liquid (Water, Juices, Bleach)" data-ar="سائل خفيف القوام (مياه، عصائر، كلور)">Thin Free-Flowing Liquid (Water, Juices, Bleach)</option>
                <option value="liquid-viscous" data-en="Viscous Liquid / Cream (Shampoo, Oils, Creams, Sauces)" data-ar="سائل لزج / كريمي (شامبو، زيوت، كريمات، صوصات)">Viscous Liquid / Cream (Shampoo, Oils, Creams, Sauces)</option>
                <option value="powder" data-en="Fine Powder (Milk, Flour, Spices, Detergents)" data-ar="بودرة ناعمة (لبن، بهارات، مساحيق غسيل)">Fine Powder (Milk, Flour, Spices, Detergents)</option>
                <option value="granules" data-en="Granules / Grains (Rice, Sugar, Lentils, Fertilizer)" data-ar="حبوب ومحببات (أرز، سكر، بقوليات، أسمدة)">Granules / Grains (Rice, Sugar, Lentils, Fertilizer)</option>
                <option value="solid" data-en="Solid Individual Pieces (Biscuits, Soaps, Hardware)" data-ar="قطع صلبة مفردة (بسكويت، صابون، أدوات)">Solid Individual Pieces (Biscuits, Soaps, Hardware)</option>
              </select>
            </div>

            <div>
              <label for="cfgContainer" style="display:block; font-weight:700; color:var(--text-primary); margin-bottom:0.5rem;">
                <span class="lang-en">2. Packaging Container Format:</span>
                <span class="lang-ar">2. شكل ونوع العبوة:</span>
              </label>
              <select id="cfgContainer" class="input-control">
                <option value="bottle" data-en="Bottles / Jars (PET, HDPE, Glass) with Caps" data-ar="زجاجات / برطمانات (بلاستيك، زجاج) مع أغطية">Bottles / Jars (PET, HDPE, Glass) with Caps</option>
                <option value="pouch-pillow" data-en="Pillow / Gusset Flexible Bag (50g – 5kg)" data-ar="أكياس مرنة وسائدية أو واقفة (50 جم – 5 كجم)">Pillow / Gusset Flexible Bag (50g – 5kg)</option>
                <option value="sachet" data-en="Multi-Lane Small Sachet / Stick Pack (1g – 100g)" data-ar="ساشيهات صغيرة أو ستيك متعدد المسارات (1 – 100 جم)">Multi-Lane Small Sachet / Stick Pack (1g – 100g)</option>
                <option value="tray" data-en="Thermoformed Blister / MAP Vacuum Tray" data-ar="صواني تشكيل حراري وتفريغ هواء MAP">Thermoformed Blister / MAP Vacuum Tray</option>
                <option value="carton" data-en="Cardboard Box / Secondary Cartons" data-ar="كراتين وصناديق كرتونية">Cardboard Box / Secondary Cartons</option>
              </select>
            </div>

            <div>
              <label for="cfgOutput" style="display:block; font-weight:700; color:var(--text-primary); margin-bottom:0.5rem;">
                <span class="lang-en">3. Target Production Speed:</span>
                <span class="lang-ar">3. الطاقة الإنتاجية المستهدفة:</span>
              </label>
              <select id="cfgOutput" class="input-control">
                <option value="low" data-en="Entry Speed (Up to 1,500 units/hr)" data-ar="سرعة قياسية (حتى 1,500 عبوة/ساعة)">Entry Speed (Up to 1,500 units/hr)</option>
                <option value="mid" data-en="Standard High Speed (2,000 – 4,000 units/hr)" data-ar="سرعة عالية قياسية (2,000 – 4,000 عبوة/ساعة)">Standard High Speed (2,000 – 4,000 units/hr)</option>
                <option value="high" data-en="Industrial Peak Speed (4,500 – 8,000+ units/hr)" data-ar="سرعة إنتاجية قصوى (4,500 – 8,000+ عبوة/ساعة)">Industrial Peak Speed (4,500 – 8,000+ units/hr)</option>
              </select>
            </div>

            <div class="wizard-action-col">
              <button type="button" class="btn btn-primary btn-block btn-lg" onclick="window.runLineConfigurator()">
                <span class="icon">⚙️</span>
                <span class="lang-en">Generate Matched Production Line</span>
                <span class="lang-ar">توليد توصية الخط الهندسي المتكامل</span>
              </button>
            </div>
          </form>

          <div id="cfgResults" class="cfg-results-panel" style="margin-top: 2.5rem; display: none;">
            <div class="results-header" style="border-bottom: 1px solid var(--border-subtle); padding-bottom: 1rem; margin-bottom: 1.5rem;">
              <span class="badge badge-accent">
                <span class="lang-en">Configured Architecture</span>
                <span class="lang-ar">التشكيلة الهندسية الموصى بها</span>
              </span>
              <h3 style="margin-top: 0.5rem;">
                <span class="lang-en">Matched Machinery & Conveying Sequence</span>
                <span class="lang-ar">المعدات ومنظومة السيور المطابقة لمتطلباتك</span>
              </h3>
            </div>
            <div id="cfgMatchedCards" class="catalog-grid">
              <!-- Dynamic cards injected via JavaScript -->
            </div>
          </div>
        </div>
      </div>
    </section>

    {render_cta("Need an Engineering Consultation on Your Configured Line?", "هل ترغب في استشارة هندسية حول الخط المقترح؟", "Configured Production Line", "الخط الإنتاجي المقترح")}
    """

    page = render_full_page(
        title_en="Interactive Production Line Configurator",
        title_ar="محدد ومطابق معدات خطوط الإنتاج",
        desc_en="Match packaging machinery and conveyor systems to your specific product, container type, and production speed with Al Sakr Top Group.",
        desc_ar="طابق ماكينات التعبئة والتغليف وأنظمة السيور مع منتجك وسرعتك الإنتاجية المستهدفة عبر الأداة الهندسية التفاعلية.",
        body_content=content,
        active_nav="configurator",
        breadcrumbs=[
            ("Home", "الرئيسية", "/index.html"),
            ("Line Configurator", "مستكشف الحلول", "")
        ]
    )

    with open("configurator.html", "w", encoding="utf-8") as f:
        f.write(page)
    print("Generated: configurator.html")

def build_all_machine_detail_pages():
    for mid, m in MACHINERY_SPECS.items():
        table_rows = ""
        for row in m["table"]:
            table_rows += f"""
            <tr>
              <th scope="row">
                <span class="lang-en">{html.escape(row["k_en"])}</span>
                <span class="lang-ar">{html.escape(row["k_ar"])}</span>
              </th>
              <td><strong>{html.escape(row["v"])}</strong></td>
            </tr>
            """

        steps_html = ""
        for idx, step in enumerate(m["steps"], start=1):
            steps_html += f"""
            <div class="op-step-card">
              <div class="op-step-num">0{idx}</div>
              <div class="op-step-text">
                <p class="lang-en">{html.escape(step["en"])}</p>
                <p class="lang-ar">{html.escape(step["ar"])}</p>
              </div>
            </div>
            """

        faq_html = ""
        for faq in m.get("faqs", []):
            faq_html += f"""
            <details class="faq-card-item">
              <summary class="faq-summary-heading">
                <span class="lang-en">{html.escape(faq["q_en"])}</span>
                <span class="lang-ar">{html.escape(faq["q_ar"])}</span>
              </summary>
              <div class="faq-content-drawer">
                <p class="lang-en">{html.escape(faq["a_en"])}</p>
                <p class="lang-ar">{html.escape(faq["a_ar"])}</p>
              </div>
            </details>
            """

        thumbs_html = ""
        for g_img in m.get("gallery", [m["img"]]):
            thumbs_html += f"""
            <button type="button" class="detail-thumb-btn" onclick="document.getElementById('mainDetailImg').src='{g_img}'">
              <img src="{g_img}" alt="{html.escape(m['name_en'])}" onerror="this.src='/public/img/factory.jpg'" />
            </button>
            """

        wa_text = f"Inquiry for {m['name_en']}: Please send technical specifications and price quotation."
        wa_url = f"https://wa.me/201098079365?text={html.escape(wa_text)}"

        content = f"""
        <!-- Product Detail Hero -->
        <section class="detail-hero-section">
          <div class="container detail-hero-grid">
            <div class="detail-media-box">
              <img id="mainDetailImg" src="{m['img']}" alt="{html.escape(m['name_en'])}" class="detail-main-img" onerror="this.src='/public/img/factory.jpg'" />
              <div class="detail-thumbs-strip">
                {thumbs_html}
              </div>
            </div>

            <div class="detail-info-box">
              <div class="detail-badges-row">
                <span class="badge badge-accent">
                  <span class="lang-en">{m['category_en']}</span>
                  <span class="lang-ar">{m['category_ar']}</span>
                </span>
                <span class="badge badge-success">
                  <span class="lang-en">10th of Ramadan Manufacturing</span>
                  <span class="lang-ar">تصنيع محلي بالعاشر من رمضان</span>
                </span>
                <span class="badge badge-info">
                  <span class="lang-en">Sanitary AISI 316L Contact</span>
                  <span class="lang-ar">استانلس ستيل صحي 316L</span>
                </span>
              </div>

              <h1 class="detail-title">
                <span class="lang-en">{html.escape(m['name_en'])}</span>
                <span class="lang-ar">{html.escape(m['name_ar'])}</span>
              </h1>

              <p class="detail-summary-p">
                <span class="lang-en">{html.escape(m['summary_en'])}</span>
                <span class="lang-ar">{html.escape(m['summary_ar'])}</span>
              </p>

              <div class="detail-standards-box">
                <div class="standard-item">
                  <span class="standard-icon">🛡️</span>
                  <div>
                    <strong>
                      <span class="lang-en">Sanitary Alloy Construction</span>
                      <span class="lang-ar">خامات صحية معتمدة</span>
                    </strong>
                    <p>
                      <span class="lang-en">Chassis in heavy-gauge AISI 304 stainless steel; all product contact parts in certified AISI 316L.</span>
                      <span class="lang-ar">هيكل كامل من الاستانلس 304 وجميع الأجزاء الملامسة للمنتج من الاستانلس الصحي 316L.</span>
                    </p>
                  </div>
                </div>
                <div class="standard-item">
                  <span class="standard-icon">⚡</span>
                  <div>
                    <strong>
                      <span class="lang-en">Automation & Motion Control</span>
                      <span class="lang-ar">أتمتة وتحكم ذكي</span>
                    </strong>
                    <p>
                      <span class="lang-en">SIEMENS S7-1200 PLC, Schneider color touch HMI with recipe memory, and multi-axis servo drives.</span>
                      <span class="lang-ar">تحكم سيمنز S7-1200 وشاشة لمس شنايدر بذاكرة وصفات ومزامنة حركة بالسيرفو.</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="detail-cta-row">
                <a href="{wa_url}" target="_blank" rel="noopener" class="btn btn-primary btn-lg">
                  <span class="icon">💬</span>
                  <span class="lang-en">Request Technical Quote on WhatsApp</span>
                  <span class="lang-ar">طلب عرض سعر ومواصفات عبر واتساب</span>
                </a>
                <a href="/contact.html?item={html.escape(m['name_en'])}" class="btn btn-outline btn-lg">
                  <span class="icon">📑</span>
                  <span class="lang-en">Request Formal Technical Proposal</span>
                  <span class="lang-ar">طلب دراسة فنية وعرض سعر رسمي</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Technical Specification Parameters Table -->
        <section class="specs-table-section">
          <div class="container">
            <div class="section-header" style="text-align: center; max-width: 780px; margin: 0 auto 3rem;">
              <span class="section-tag">
                <span class="lang-en">Engineering Parameters</span>
                <span class="lang-ar">المواصفات الفنية المعتمدة</span>
              </span>
              <h2>
                <span class="lang-en">Technical Specifications & Engineering Matrix</span>
                <span class="lang-ar">جدول المواصفات والبيانات الهندسية</span>
              </h2>
              <p style="color: var(--text-secondary);">
                <span class="lang-en">Values are typical for standard line configurations and can be customized to your specific container dimensions and factory utilities.</span>
                <span class="lang-ar">البيانات الموضحة قياسية ويمكن تخصيصها حسب أحجام عبواتك وسرعات خط إنتاجك ومصادر الطاقة في مصنعك.</span>
              </p>
            </div>

            <div class="specs-table-card">
              <table class="engineering-table">
                <thead>
                  <tr>
                    <th scope="col" style="width: 42%;">
                      <span class="lang-en">Parameter / Characteristic</span>
                      <span class="lang-ar">البند والمواصفة الفنية</span>
                    </th>
                    <th scope="col" style="width: 58%;">
                      <span class="lang-en">Technical Specification & Range</span>
                      <span class="lang-ar">القيمة الهندسية والمدى التشغيلي</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {table_rows}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- Step-by-Step Operating Principles -->
        <section class="steps-section">
          <div class="container">
            <div class="section-header" style="text-align: center; max-width: 760px; margin: 0 auto 2rem;">
              <span class="section-tag">
                <span class="lang-en">Operational Sequence</span>
                <span class="lang-ar">آلية ومراحل التشغيل</span>
              </span>
              <h2>
                <span class="lang-en">How the Machine Operates (Step-by-Step)</span>
                <span class="lang-ar">مراحل دورة التشغيل خطوة بخطوة</span>
              </h2>
            </div>

            <div class="steps-grid">
              {steps_html}
            </div>
          </div>
        </section>

        <!-- Product Applications -->
        <section class="apps-box-section">
          <div class="container">
            <div class="apps-highlight-card">
              <div class="apps-header-row">
                <span class="apps-icon-badge">🎯</span>
                <div>
                  <h3>
                    <span class="lang-en">Typical Product Applications</span>
                    <span class="lang-ar">أبرز التطبيقات والمنتجات المناسبة</span>
                  </h3>
                </div>
              </div>
              <div class="apps-body-text">
                <p class="lang-en">{html.escape(m['apps_en'])}</p>
                <p class="lang-ar">{html.escape(m['apps_ar'])}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Technical FAQs -->
        <section class="faq-wrap-section">
          <div class="container">
            <div class="section-header" style="text-align: center; max-width: 760px; margin: 0 auto 2rem;">
              <span class="section-tag">
                <span class="lang-en">Engineering Q&A</span>
                <span class="lang-ar">الأسئلة الفنية الشائعة</span>
              </span>
              <h2>
                <span class="lang-en">Frequently Asked Technical Questions</span>
                <span class="lang-ar">إجابات الخبراء والمهندسين</span>
              </h2>
            </div>

            <div class="faq-accordion-list">
              {faq_html}
            </div>
          </div>
        </section>

        {render_cta(f"Request a Tailored Proposal for {m['name_en']}", f"طلب عرض سعر ومواصفات لـ {m['name_ar']}", m['name_en'], m['name_ar'])}
        """

        page = render_full_page(
            title_en=m["name_en"],
            title_ar=m["name_ar"],
            desc_en=m["summary_en"],
            desc_ar=m["summary_ar"],
            body_content=content,
            active_nav="machinery",
            breadcrumbs=[
                ("Home", "الرئيسية", "/index.html"),
                ("Machinery", "ماكينات التعبئة", "/machinery.html"),
                (m["name_en"], m["name_ar"], "")
            ]
        )

        out_path = os.path.join("machinery", f"{mid}.html")
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(page)
        print(f"Generated: {out_path}")

def build_all_conveyor_detail_pages():
    for cid, c in CONVEYOR_SPECS.items():
        table_rows = ""
        for row in c["table"]:
            table_rows += f"""
            <tr>
              <th scope="row">
                <span class="lang-en">{html.escape(row["k_en"])}</span>
                <span class="lang-ar">{html.escape(row["k_ar"])}</span>
              </th>
              <td><strong>{html.escape(row["v"])}</strong></td>
            </tr>
            """

        steps_html = ""
        for idx, step in enumerate(c["steps"], start=1):
            steps_html += f"""
            <div class="op-step-card">
              <div class="op-step-num">0{idx}</div>
              <div class="op-step-text">
                <p class="lang-en">{html.escape(step["en"])}</p>
                <p class="lang-ar">{html.escape(step["ar"])}</p>
              </div>
            </div>
            """

        faq_html = ""
        for faq in c.get("faqs", []):
            faq_html += f"""
            <details class="faq-card-item">
              <summary class="faq-summary-heading">
                <span class="lang-en">{html.escape(faq["q_en"])}</span>
                <span class="lang-ar">{html.escape(faq["q_ar"])}</span>
              </summary>
              <div class="faq-content-drawer">
                <p class="lang-en">{html.escape(faq["a_en"])}</p>
                <p class="lang-ar">{html.escape(faq["a_ar"])}</p>
              </div>
            </details>
            """

        wa_text = f"Inquiry for Conveyor: {c['name_en']}: Please send technical specifications and line layout study."
        wa_url = f"https://wa.me/201098079365?text={html.escape(wa_text)}"

        content = f"""
        <!-- Conveyor Detail Hero -->
        <section class="detail-hero-section">
          <div class="container detail-hero-grid">
            <div class="detail-media-box">
              <img id="mainDetailImg" src="{c['poster']}" alt="{html.escape(c['name_en'])}" class="detail-main-img" onerror="this.src='/public/img/factory.jpg'" />
            </div>

            <div class="detail-info-box">
              <div class="detail-badges-row">
                <span class="badge badge-accent">
                  <span class="lang-en">Material Handling Division</span>
                  <span class="lang-ar">أنظمة السيور والتداول</span>
                </span>
                <span class="badge badge-success">
                  <span class="lang-en">Modular Egyptian Fabrication</span>
                  <span class="lang-ar">تصنيع محلي معياري</span>
                </span>
                <span class="badge badge-info">
                  <span class="lang-en">Low-Friction POM / SUS304</span>
                  <span class="lang-ar">استانلس 304 وبلاستيك POM</span>
                </span>
              </div>

              <h1 class="detail-title">
                <span class="lang-en">{html.escape(c['name_en'])}</span>
                <span class="lang-ar">{html.escape(c['name_ar'])}</span>
              </h1>

              <p class="detail-summary-p">
                <span class="lang-en">{html.escape(c['summary_en'])}</span>
                <span class="lang-ar">{html.escape(c['summary_ar'])}</span>
              </p>

              <div class="detail-standards-box">
                <div class="standard-item">
                  <span class="standard-icon">🔄</span>
                  <div>
                    <strong>
                      <span class="lang-en">Seamless Line Synchronization</span>
                      <span class="lang-ar">مزامنة كاملة لخطوط الإنتاج</span>
                    </strong>
                    <p>
                      <span class="lang-en">Variable-speed drives eliminate bottle collisions, jams, and line pressure spikes.</span>
                      <span class="lang-ar">مغيرات سرعة تمنع تصادم وتكدس العبوات وضغط التلامس في الخط.</span>
                    </p>
                  </div>
                </div>
                <div class="standard-item">
                  <span class="standard-icon">📐</span>
                  <div>
                    <strong>
                      <span class="lang-en">Custom 3D CAD Factory Layout</span>
                      <span class="lang-ar">تخطيط ثلاثي الأبعاد مخصص للمصنع</span>
                    </strong>
                    <p>
                      <span class="lang-en">Engineered to match your ceiling heights, mezzanine levels, and machine clearances.</span>
                      <span class="lang-ar">تصميم يطابق مساحات مصنعك وارتفاعات الميزانين وأماكن الماكينات بدقة.</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="detail-cta-row">
                <a href="{wa_url}" target="_blank" rel="noopener" class="btn btn-primary btn-lg">
                  <span class="icon">💬</span>
                  <span class="lang-en">Request Conveyor Quote on WhatsApp</span>
                  <span class="lang-ar">طلب عرض سعر للسيور عبر واتساب</span>
                </a>
                <a href="/contact.html?item={html.escape(c['name_en'])}" class="btn btn-outline btn-lg">
                  <span class="icon">📑</span>
                  <span class="lang-en">Request Plant Layout Study</span>
                  <span class="lang-ar">طلب دراسة تخطيطية ومخطط مصنع</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Specifications Table -->
        <section class="specs-table-section">
          <div class="container">
            <div class="section-header" style="text-align: center; max-width: 780px; margin: 0 auto 3rem;">
              <span class="section-tag">
                <span class="lang-en">Technical Data</span>
                <span class="lang-ar">البيانات الفنية والهندسية</span>
              </span>
              <h2>
                <span class="lang-en">Conveyor System Technical Parameters</span>
                <span class="lang-ar">المواصفات الهندسية لمنظومة السيور</span>
              </h2>
            </div>

            <div class="specs-table-card">
              <table class="engineering-table">
                <thead>
                  <tr>
                    <th scope="col" style="width: 42%;">
                      <span class="lang-en">Parameter</span>
                      <span class="lang-ar">البند الفني</span>
                    </th>
                    <th scope="col" style="width: 58%;">
                      <span class="lang-en">Technical Specification</span>
                      <span class="lang-ar">المواصفة والقيم المعتمدة</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {table_rows}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- Operating Principles -->
        <section class="steps-section">
          <div class="container">
            <div class="section-header" style="text-align: center; max-width: 760px; margin: 0 auto 2rem;">
              <span class="section-tag">
                <span class="lang-en">Material Handling Flow</span>
                <span class="lang-ar">مسار تدفق الحركة</span>
              </span>
              <h2>
                <span class="lang-en">How the Conveyor Routes Products</span>
                <span class="lang-ar">مراحل توجيه ونقل المنتجات خطوة بخطوة</span>
              </h2>
            </div>

            <div class="steps-grid">
              {steps_html}
            </div>
          </div>
        </section>

        <!-- Applications -->
        <section class="apps-box-section">
          <div class="container">
            <div class="apps-highlight-card">
              <div class="apps-header-row">
                <span class="apps-icon-badge">🏭</span>
                <div>
                  <h3>
                    <span class="lang-en">Suitable Industrial Sectors & Packaging</span>
                    <span class="lang-ar">القطاعات الصناعية الملائمة</span>
                  </h3>
                </div>
              </div>
              <div class="apps-body-text">
                <p class="lang-en">{html.escape(c['apps_en'])}</p>
                <p class="lang-ar">{html.escape(c['apps_ar'])}</p>
              </div>
            </div>
          </div>
        </section>

        <!-- FAQs -->
        <section class="faq-wrap-section">
          <div class="container">
            <div class="section-header" style="text-align: center; max-width: 760px; margin: 0 auto 2rem;">
              <span class="section-tag">
                <span class="lang-en">Conveyor Engineering FAQ</span>
                <span class="lang-ar">الأسئلة الشائعة عن أنظمة السيور</span>
              </span>
              <h2>
                <span class="lang-en">Frequently Asked Questions</span>
                <span class="lang-ar">إجابات الخبراء</span>
              </h2>
            </div>

            <div class="faq-accordion-list">
              {faq_html}
            </div>
          </div>
        </section>

        {render_cta(f"Request a Layout Study for {c['name_en']}", f"طلب دراسة تخطيطية لـ {c['name_ar']}", c['name_en'], c['name_ar'])}
        """

        page = render_full_page(
            title_en=c["name_en"],
            title_ar=c["name_ar"],
            desc_en=c["summary_en"],
            desc_ar=c["summary_ar"],
            body_content=content,
            active_nav="conveyors",
            breadcrumbs=[
                ("Home", "الرئيسية", "/index.html"),
                ("Conveyors", "أنظمة السيور", "/conveyors.html"),
                (c["name_en"], c["name_ar"], "")
            ]
        )

        out_path = os.path.join("conveyors", f"{cid}.html")
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(page)
        print(f"Generated: {out_path}")

if __name__ == "__main__":
    print("Re-generating all portal catalog and section pages with strict language separation...")
    build_machinery_catalog()
    build_conveyors_catalog()
    build_industries()
    build_services()
    build_about()
    build_contact()
    build_configurator()

    print("Re-generating all machine detail pages...")
    build_all_machine_detail_pages()

    print("Re-generating all conveyor detail pages...")
    build_all_conveyor_detail_pages()

    print("All 26 pages re-generated with strict language separation and mobile drawer!")
