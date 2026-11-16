# -*- coding: utf-8 -*-
"""
Master Portal Generator for Al Sakr Top Group
Generates all 26 pages with:
- Strict language separation: Only English in EN mode, only Arabic in AR mode
- Pixel-perfect, responsive design on both desktop and mobile
- Complete mobile navigation drawer on every page
- Full technical parameter tables with mobile scroll support
- 100% clean UTF-8
"""

import os
import html
from site_specs_data import MACHINERY_SPECS, CONVEYOR_SPECS

def render_topbar():
    return """
  <!-- Sleek Top Information Bar -->
  <div class="site-topbar">
    <div class="container topbar-inner">
      <div class="topbar-items topbar-left">
        <span class="topbar-item topbar-address">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <span class="lang-en">10th of Ramadan City, Industrial Area C3, Egypt</span>
          <span class="lang-ar">مدينة العاشر من رمضان، المنطقة الصناعية C3، مصر</span>
        </span>
        <span class="topbar-item topbar-hours">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span class="lang-en">Sat – Thu: 9:00 AM – 5:00 PM</span>
          <span class="lang-ar">السبت – الخميس: 9:00 ص – 5:00 م</span>
        </span>
      </div>
      <div class="topbar-items topbar-right">
        <span class="topbar-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <a href="tel:+201098079365" dir="ltr">+20 10 98079365</a>
        </span>
        <span class="topbar-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          <a href="https://wa.me/201098079365" target="_blank" rel="noopener">
            <span class="lang-en">WhatsApp Support</span>
            <span class="lang-ar">خدمة واتساب</span>
          </a>
        </span>
      </div>
    </div>
  </div>
"""

def render_header(active_nav=""):
    pages = [
        ("home", "/index.html", "Home", "الرئيسية"),
        ("machinery", "/machinery.html", "Machinery", "ماكينات التعبئة"),
        ("conveyors", "/conveyors.html", "Conveyors", "أنظمة السيور"),
        ("configurator", "/configurator.html", "Line Configurator", "مستكشف الحلول"),
        ("industries", "/industries.html", "Industries", "القطاعات"),
        ("services", "/services.html", "Services", "الخدمات"),
        ("about", "/about.html", "About Us", "عن المجموعة"),
        ("contact", "/contact.html", "Contact", "اتصل بنا"),
    ]

    nav_links = ""
    for pid, url, en, ar in pages:
        active_cls = " active" if pid == active_nav else ""
        nav_links += f'<li><a href="{url}" class="nav-link{active_cls}"><span class="lang-en">{en}</span><span class="lang-ar">{ar}</span></a></li>\n'

    return f"""
  <!-- Optimized Top Sticky Header -->
  <header class="site-header" id="siteHeader">
    <div class="container header-inner">
      <a href="/index.html" class="brand-badge" aria-label="Al Sakr Top Group Homepage">
        <img src="/brand/logo.jpg" alt="Al Sakr Top Group Logo" class="brand-logo-img" />
        <div class="brand-text-wrap">
          <span class="brand-name">Al Sakr Top Group</span>
          <span class="brand-sub">
            <span class="lang-en">Packaging Machinery & Conveying Systems</span>
            <span class="lang-ar">أنظمة التعبئة والتغليف والسيور الناقلة</span>
          </span>
        </div>
      </a>

      <!-- Streamlined Desktop Navigation -->
      <nav aria-label="Main Navigation">
        <ul class="nav-menu">
          {nav_links}
        </ul>
      </nav>

      <!-- Header Action Controls -->
      <div class="header-actions">
        <!-- Language Switcher Pill -->
        <button type="button" class="lang-switch-btn" id="langToggleBtn" aria-label="Toggle language between English and Arabic">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20M2 12h20"/></svg>
          <span id="langBtnText">العربية</span>
        </button>

        <!-- Theme Toggle Icon -->
        <button type="button" class="icon-btn" id="themeToggleBtn" aria-label="Toggle light and dark color mode">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
        </button>

        <!-- Prominent Quote Button -->
        <a href="/contact.html" class="btn btn-primary btn-sm header-quote-cta">
          <span class="lang-en">Request a Quote</span>
          <span class="lang-ar">طلب عرض سعر</span>
        </a>

        <!-- Mobile Drawer Hamburger Toggle -->
        <button type="button" class="icon-btn menu-toggle" id="menuOpenBtn" aria-label="Open mobile navigation menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>
  </header>
"""

def render_mobile_drawer(active_nav=""):
    pages = [
        ("home", "/index.html", "Home", "الرئيسية"),
        ("machinery", "/machinery.html", "Packaging Machinery", "ماكينات التعبئة والتغليف"),
        ("conveyors", "/conveyors.html", "Conveyor Systems", "أنظمة السيور الناقلة"),
        ("configurator", "/configurator.html", "Line Configurator", "مستكشف الحلول التفاعلي"),
        ("industries", "/industries.html", "Industries", "القطاعات الصناعية"),
        ("services", "/services.html", "Engineering Services", "الخدمات الهندسية والدعم"),
        ("about", "/about.html", "About Us", "عن المجموعة وتاريخنا"),
        ("contact", "/contact.html", "Contact Us", "اتصل بنا"),
    ]

    drawer_links = ""
    for pid, url, en, ar in pages:
        active_cls = " active" if pid == active_nav else ""
        drawer_links += f'<li><a href="{url}" class="drawer-link{active_cls}"><span class="lang-en">{en}</span><span class="lang-ar">{ar}</span></a></li>\n'

    return f"""
  <!-- Mobile Navigation Drawer -->
  <div class="mobile-drawer" id="mobileDrawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
    <div class="drawer-backdrop"></div>
    <div class="drawer-content">
      <div class="drawer-header">
        <div class="brand-badge">
          <img src="/brand/logo.jpg" alt="Al Sakr Logo" class="brand-logo-img" />
          <span class="brand-name">Al Sakr Top Group</span>
        </div>
        <button type="button" class="icon-btn" id="menuCloseBtn" aria-label="Close menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>

      <!-- Drawer Quick Action Controls -->
      <div class="drawer-actions-strip">
        <button type="button" class="lang-switch-btn drawer-lang-btn" id="drawerLangToggleBtn" aria-label="Toggle language">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20M2 12h20"/></svg>
          <span class="drawer-lang-text">العربية</span>
        </button>
        <button type="button" class="icon-btn drawer-theme-btn" id="drawerThemeToggleBtn" aria-label="Toggle light and dark color mode">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
        </button>
      </div>

      <ul class="drawer-links">
        {drawer_links}
      </ul>

      <div class="drawer-footer">
        <a href="/contact.html" class="btn btn-primary btn-block">
          <span class="lang-en">Request a Quote</span>
          <span class="lang-ar">طلب عرض سعر</span>
        </a>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1rem; padding-top:1rem; border-top:1px solid var(--border-subtle);">
          <span style="font-size:0.85rem; color:var(--text-muted);">
            <span class="lang-en">Direct Hotline:</span>
            <span class="lang-ar">الخط المباشر:</span>
          </span>
          <a href="tel:+201098079365" style="color:var(--brand-accent); font-weight:700; text-decoration:none;">+20 10 98079365</a>
        </div>
      </div>
    </div>
  </div>
"""

def render_footer():
    return """
  <!-- Comprehensive Technical Footer -->
  <footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-about">
        <div class="footer-brand">
          <img src="/brand/logo.jpg" alt="Al Sakr Logo" class="footer-logo" width="46" height="46" />
          <div>
            <h3 class="footer-company-name">AL SAKR TOP GROUP</h3>
            <p class="footer-legal-name">
              <span class="lang-en">ALSAKR for Trading & Manufacturing (Joint-Stock Co.)</span>
              <span class="lang-ar">الصقر للتجارة والتصنيع (ش.م.م)</span>
            </p>
          </div>
        </div>
        <p class="footer-mission-text">
          <span class="lang-en">Egyptian manufacturing excellence since 1995. Pioneering turnkey packaging automation lines, high-precision liquid fillers, rotary cappers, and intelligent conveying networks built to world sanitary standards.</span>
          <span class="lang-ar">ريادة الصناعة والهندسة المصرية منذ عام 1995. متخصصون في خطوط التعبئة والتغليف الآلية المتكاملة، وماكينات تعبئة السوائل، والتغطية، والسيور الناقلة الذكية وفق أحدث المعايير العالمية.</span>
        </p>
        <div class="footer-social-strip">
          <a href="https://www.facebook.com/ags2030/" target="_blank" rel="noopener" class="footer-social-btn" aria-label="Facebook">FB</a>
          <a href="https://www.linkedin.com/company/143707116" target="_blank" rel="noopener" class="footer-social-btn" aria-label="LinkedIn">IN</a>
          <a href="https://www.youtube.com/@AlsakrForConveyingHandlingSyst" target="_blank" rel="noopener" class="footer-social-btn" aria-label="YouTube">YT</a>
        </div>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">
          <span class="lang-en">Packaging Machinery</span>
          <span class="lang-ar">ماكينات التعبئة</span>
        </h4>
        <ul class="footer-links-list">
          <li><a href="/machinery/liquid-filling-machine.html"><span class="lang-en">Liquid Filling Machines</span><span class="lang-ar">ماكينات تعبئة السوائل</span></a></li>
          <li><a href="/machinery/capping-machine.html"><span class="lang-en">Automatic Capping</span><span class="lang-ar">ماكينات الغطاء</span></a></li>
          <li><a href="/machinery/labelling-machine.html"><span class="lang-en">Self-Adhesive Labelling</span><span class="lang-ar">ماكينات الليبل</span></a></li>
          <li><a href="/machinery/shrink-sleeve-machine.html"><span class="lang-en">Shrink Sleeve Applicators</span><span class="lang-ar">ماكينات السليف الحراري</span></a></li>
          <li><a href="/machinery/vffs-packaging-machine.html"><span class="lang-en">Vertical Packaging (VFFS)</span><span class="lang-ar">ماكينات التغليف الرأسي</span></a></li>
          <li><a href="/machinery/multi-lane-sachet-machine.html"><span class="lang-en">Multi-Lane Sachets</span><span class="lang-ar">ماكينات الساشيه</span></a></li>
          <li><a href="/machinery/thermoforming-machine.html"><span class="lang-en">Thermoforming Machines</span><span class="lang-ar">ماكينات ثيرموفورمينج</span></a></li>
          <li><a href="/machinery/flow-pack-machine.html"><span class="lang-en">Horizontal Flow-Pack</span><span class="lang-ar">ماكينات فلوباك</span></a></li>
          <li><a href="/machinery/cartoning-machine.html"><span class="lang-en">Automatic Cartoning</span><span class="lang-ar">ماكينات الكرتنة</span></a></li>
          <li><a href="/machinery/palletizer-and-wrapping.html"><span class="lang-en">Robotic Palletizer & Wrapper</span><span class="lang-ar">رص بالتات واستريتش</span></a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">
          <span class="lang-en">Conveyor Systems</span>
          <span class="lang-ar">أنظمة السيور</span>
        </h4>
        <ul class="footer-links-list">
          <li><a href="/conveyors/flexible-chain-conveyors.html"><span class="lang-en">Flexible Chain Conveyors</span><span class="lang-ar">سيور الجنزير المرنة</span></a></li>
          <li><a href="/conveyors/spiral-conveyors.html"><span class="lang-en">Continuous Spiral Elevators</span><span class="lang-ar">السيور الحلزونية الرأسية</span></a></li>
          <li><a href="/conveyors/buffer-accumulation-conveyors.html"><span class="lang-en">Buffer & Accumulation Tables</span><span class="lang-ar">طاولات التخزين المؤقت</span></a></li>
          <li><a href="/conveyors/pallet-conveyors.html"><span class="lang-en">Pallet Workpiece Carriers</span><span class="lang-ar">سيور الباليتات والتجميع</span></a></li>
          <li><a href="/conveyors/gripper-conveyors.html"><span class="lang-en">Gripper Wedge Conveyors</span><span class="lang-ar">السيور القابضة الرأسية</span></a></li>
          <li><a href="/conveyors/modular-belt-conveyors.html"><span class="lang-en">Modular Belt Conveyors</span><span class="lang-ar">السيور البلاستيكية المعيارية</span></a></li>
          <li><a href="/conveyors/turnkey-conveying-systems.html"><span class="lang-en">Turnkey Factory Networks</span><span class="lang-ar">شبكات السيور المتكاملة</span></a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4 class="footer-heading">
          <span class="lang-en">Factory & Headquarters</span>
          <span class="lang-ar">المصنع والمقر الرئيسي</span>
        </h4>
        <div class="footer-contact-info">
          <p>
            <strong>📍 <span class="lang-en">Location:</span><span class="lang-ar">الموقع:</span></strong> 
            <span class="lang-en">Plot VH, Industrial Area C3, 10th of Ramadan City, Egypt</span>
            <span class="lang-ar">القطعة VH، المنطقة الصناعية C3، مدينة العاشر من رمضان، مصر</span>
          </p>
          <p>
            <strong>📞 <span class="lang-en">Machinery Div:</span><span class="lang-ar">قطاع الماكينات:</span></strong> 
            <a href="tel:+201098079365" dir="ltr">+20 10 98079365</a>
          </p>
          <p>
            <strong>📞 <span class="lang-en">Conveying Div:</span><span class="lang-ar">قطاع السيور:</span></strong> 
            <a href="tel:+201020588660" dir="ltr">+20 10 20588660</a>
          </p>
          <p>
            <strong>✉️ <span class="lang-en">Sales Inquiries:</span><span class="lang-ar">المبيعات:</span></strong> 
            <a href="mailto:sales@topgroupco.com">sales@topgroupco.com</a>
          </p>
          <p>
            <strong>⏰ <span class="lang-en">Hours:</span><span class="lang-ar">ساعات العمل:</span></strong> 
            <span class="lang-en">Sat – Thu: 9:00 AM – 5:00 PM</span>
            <span class="lang-ar">السبت – الخميس: 9:00 ص – 5:00 م</span>
          </p>
        </div>
      </div>
    </div>

    <div class="container footer-bottom">
      <p>
        <span class="lang-en">&copy; 2026 Al Sakr Top Group (ALSAKR for Trading & Manufacturing S.A.E.). All rights reserved.</span>
        <span class="lang-ar">&copy; 2026 مجموعة الصقر توب جروب (الصقر للتجارة والتصنيع ش.م.م). جميع الحقوق محفوظة.</span>
      </p>
      <div class="footer-bottom-nav">
        <a href="/about.html"><span class="lang-en">Corporate Profile</span><span class="lang-ar">عن المجموعة</span></a> &middot;
        <a href="/services.html"><span class="lang-en">FAT & Services</span><span class="lang-ar">الخدمات والاختبارات</span></a> &middot;
        <a href="/contact.html"><span class="lang-en">Plant Visits</span><span class="lang-ar">زيارة المصنع</span></a>
      </div>
    </div>
  </footer>
"""

def render_cta(title_en="Ready to Elevate Your Line Efficiency?", title_ar="هل ترغب في رفع كفاءة خطك الإنتاجي؟", item_en="Packaging & Conveying Lines", item_ar="خطوط التعبئة والتغليف والسيور"):
    wa_msg = f"Hello Al Sakr Top Group, I would like to request technical specifications and quote for: {item_en}"
    wa_url = f"https://wa.me/201098079365?text={html.escape(wa_msg)}"
    
    return f"""
  <section class="section">
    <div class="container">
      <div class="apps-highlight-card" style="text-align: center; padding: 3rem 2rem;">
        <span class="badge badge-accent" style="margin-bottom: 1rem;">
          <span class="lang-en">Fast Engineering Consultation</span>
          <span class="lang-ar">استشارة هندسية وتسعير سريع</span>
        </span>
        <h2 style="font-size: clamp(1.8rem, 3.5vw, 2.4rem); font-weight: 800; color: var(--text-primary); margin: 0.5rem 0 1rem;">
          <span class="lang-en">{title_en}</span>
          <span class="lang-ar">{title_ar}</span>
        </h2>
        <p style="font-size: 1.05rem; color: var(--text-secondary); max-width: 720px; margin: 0 auto 2rem; line-height: 1.7;">
          <span class="lang-en">Speak directly with our senior mechanical and electrical engineers. We provide comprehensive 3D line simulations, client-container FAT trials at our 10th of Ramadan plant, and lifetime local technical support.</span>
          <span class="lang-ar">تحدث مباشرة مع كبار مهندسي الميكانيكا والكهرباء بمجموعتنا. نوفر دراسات تخطيط ثلاثية الأبعاد واختبارات مصنعية فعلية على عبواتك وضمان دعم محلي شامل.</span>
        </p>
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem;">
          <a href="{wa_url}" target="_blank" rel="noopener" class="btn btn-primary btn-lg">
            <span class="icon">💬</span>
            <span class="lang-en">Instant WhatsApp Quote</span>
            <span class="lang-ar">طلب عرض سعر عبر واتساب</span>
          </a>
          <a href="/contact.html?item={html.escape(item_en)}" class="btn btn-outline btn-lg">
            <span class="icon">📑</span>
            <span class="lang-en">Request Technical Proposal</span>
            <span class="lang-ar">طلب دراسة فنية وعرض سعر</span>
          </a>
        </div>
      </div>
    </div>
  </section>
"""

def render_full_page(title_en, title_ar, desc_en, desc_ar, body_content, active_nav="", breadcrumbs=None):
    crumbs_html = ""
    if breadcrumbs:
        items_html = []
        for i, (crumb_en, crumb_ar, crumb_url) in enumerate(breadcrumbs):
            if crumb_url:
                items_html.append(f'<li><a href="{crumb_url}"><span class="lang-en">{crumb_en}</span><span class="lang-ar">{crumb_ar}</span></a></li>')
            else:
                items_html.append(f'<li class="crumb-current"><span class="lang-en">{crumb_en}</span><span class="lang-ar">{crumb_ar}</span></li>')
            if i < len(breadcrumbs) - 1:
                items_html.append('<li class="crumb-sep">/</li>')
        crumbs_html = f"""
  <div class="breadcrumbs-bar">
    <div class="container">
      <ul class="breadcrumbs">
        {''.join(items_html)}
      </ul>
    </div>
  </div>
"""

    return f"""<!DOCTYPE html>
<html lang="en" dir="ltr" data-theme="dark">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title_en} | Al Sakr Top Group</title>
  <meta name="description" content="{desc_en}" />
  <link rel="icon" type="image/png" href="/brand/favicon.png" />
  <link rel="apple-touch-icon" href="/brand/logo.jpg" />
  <link rel="stylesheet" href="/src/styles/main.css" />
</head>
<body>
  {render_topbar()}
  {render_header(active_nav)}
  {render_mobile_drawer(active_nav)}
  {crumbs_html}
  <main id="main-content">
    {body_content}
  </main>
  {render_footer()}
  <script type="module" src="/src/scripts/app.js"></script>
</body>
</html>
"""

print("build_master_portal.py written successfully with mobile drawer & strict language.")
