/**
 * Al Sakr Top Group — Unified Interactive Client Logic
 */

import { groupInfo, machineryProducts, conveyingProducts, industries, engineeringServices, exhibitionsAndNews, faqs } from '../data/groupData.js';
import { translations } from '../i18n/translations.js';

let currentLang = 'en';
let currentTheme = 'dark'; // Dark mode default to match official high-tech industrial aesthetic
let activeCategory = 'all';

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  renderAllContent();
  initEventListeners();
  initConfigurator();
  initScrollSpy();
});

/**
 * Language Management
 */
function initLanguage() {
  try {
    const saved = localStorage.getItem('alsakr_lang');
    if (saved === 'ar' || saved === 'en') {
      currentLang = saved;
    } else {
      // User requirement: keep every language separated ONLY when I switch button.
      // Default to English cleanly so Arabic and English are never auto-mixed or forced.
      currentLang = 'en';
    }
  } catch (e) {
    currentLang = 'en';
  }
  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  currentLang = lang;
  try { localStorage.setItem('alsakr_lang', lang); } catch (e) {}

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  const t = translations[lang] || translations.en;

  // 1. Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });

  // 2. Update select dropdown option texts dynamically
  document.querySelectorAll('option[data-en][data-ar]').forEach(opt => {
    opt.textContent = lang === 'ar' ? opt.dataset.ar : opt.dataset.en;
  });

  // 3. Update input & textarea placeholders dynamically
  document.querySelectorAll('[data-placeholder-en][data-placeholder-ar]').forEach(el => {
    el.placeholder = lang === 'ar' ? el.dataset.placeholderAr : el.dataset.placeholderEn;
  });

  // 4. Update language toggle buttons across header and mobile drawer
  const labelText = lang === 'ar' ? 'English' : 'العربية';
  const ariaLabel = lang === 'ar' ? 'Switch to English' : 'التحويل إلى اللغة العربية';

  document.querySelectorAll('.lang-switch-btn, #langToggleBtn, #drawerLangToggleBtn').forEach(btn => {
    const textSpan = btn.querySelector('#langBtnText, .drawer-lang-text') || btn.querySelector('span');
    if (textSpan) {
      textSpan.textContent = labelText;
    }
    btn.setAttribute('aria-label', ariaLabel);
  });

  // 5. Re-render dynamic blocks with updated language
  renderStats();
  renderProducts();
  renderIndustries();
  renderTimeline();
  renderExhibitions();
  renderFaqs();
  updateConfiguratorResult();
}

/**
 * Theme Management (Always defaults to dark industrial blue aesthetic)
 */
function initTheme() {
  try {
    const saved = localStorage.getItem('alsakr_theme');
    currentTheme = (saved === 'light') ? 'light' : 'dark';
  } catch (e) {
    currentTheme = 'dark';
  }
  applyTheme(currentTheme);
}

function applyTheme(theme) {
  currentTheme = theme;
  try { localStorage.setItem('alsakr_theme', theme); } catch (e) {}
  document.documentElement.setAttribute('data-theme', theme);

  const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`;
  const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;

  document.querySelectorAll('#themeToggleBtn, #drawerThemeToggleBtn').forEach(btn => {
    btn.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  });
}

/**
 * Render Dynamic Content Blocks
 */
function renderAllContent() {
  renderStats();
  renderProducts();
  renderIndustries();
  renderTimeline();
  renderExhibitions();
  renderFaqs();
}

function renderStats() {
  const container = document.getElementById('statsStrip');
  if (!container) return;

  container.innerHTML = groupInfo.stats.map(s => `
    <div class="stat-item">
      <div class="stat-value">${s.isYear ? s.value : s.value + (s.suffix || '')}</div>
      <div class="stat-label">${s.label[currentLang]}</div>
      <div class="stat-sub">${s.sub[currentLang]}</div>
    </div>
  `).join('');
}

function renderProducts() {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  let combined = [];

  if (activeCategory === 'all') {
    combined = [
      ...machineryProducts.map(p => ({ ...p, type: 'machinery' })),
      ...conveyingProducts.map(c => ({ ...c, type: 'conveying', category: 'conveying' }))
    ];
  } else if (activeCategory === 'conveying') {
    combined = conveyingProducts.map(c => ({ ...c, type: 'conveying', category: 'conveying' }));
  } else {
    combined = machineryProducts
      .filter(p => p.category === activeCategory)
      .map(p => ({ ...p, type: 'machinery' }));
  }

  container.innerHTML = combined.map(item => {
    const isMachinery = item.type === 'machinery';
    const imgSrc = isMachinery ? item.img : item.poster;
    const catLabel = getCategoryLabel(item.category);

    return `
      <div class="product-card" data-category="${item.category}" data-id="${item.id}">
        <div class="card-media-wrap">
          <img 
            src="${imgSrc}" 
            alt="${item.name[currentLang]}" 
            class="card-img" 
            loading="lazy"
            onerror="this.onerror=null; this.src='/img/liquid-filling.jpg';"
          />
          <span class="card-category-badge">${catLabel}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title">${item.name[currentLang]}</h3>
          <p class="card-short">${item.short[currentLang]}</p>
          
          <div class="card-stats-row">
            ${(item.keyStats || []).map(ks => `
              <div>
                <div class="stat-mini-val">${ks.value}</div>
                <div class="stat-mini-lbl">${ks.label[currentLang]}</div>
              </div>
            `).join('')}
          </div>

          <div class="card-actions">
            <a href="/${isMachinery ? 'machinery' : 'conveyors'}/${item.id}.html" class="btn btn-outline btn-sm">
              ${translations[currentLang].btnViewDetails}
            </a>
            <a href="https://wa.me/201098079365?text=${encodeURIComponent('Inquiry: ' + item.name.en)}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
              ${translations[currentLang].btnRequestQuote}
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Card links are now direct <a> tags to dedicated detail pages
}

function getCategoryLabel(cat) {
  const map = {
    filling: { en: "Filling & Capping", ar: "التعبئة والتغطية" },
    packaging: { en: "Packaging Machines", ar: "ماكينات التغليف" },
    labelling: { en: "Labelling & Sleeving", ar: "اللصق والسليف" },
    "end-of-line": { en: "End of Line", ar: "نهاية الخط والبالتة" },
    conveying: { en: "Conveyor Systems", ar: "أنظمة السيور" }
  };
  return map[cat] ? map[cat][currentLang] : cat;
}

function renderIndustries() {
  const container = document.getElementById('industriesGrid');
  if (!container) return;

  container.innerHTML = industries.map(ind => `
    <div class="industry-card">
      <div class="industry-img-wrap">
        <img 
          src="${ind.img}" 
          alt="${ind.name[currentLang]}" 
          class="card-img" 
          loading="lazy"
          onerror="this.onerror=null; this.src='/img/vffs.jpg';"
        />
      </div>
      <div class="industry-body">
        <h3 class="industry-title">${ind.name[currentLang]}</h3>
        <p class="industry-desc">${ind.desc[currentLang]}</p>
        <div class="industry-examples">
          ${ind.examples[currentLang]}
        </div>
      </div>
    </div>
  `).join('');
}

function renderTimeline() {
  const container = document.getElementById('timelineWrap');
  if (!container) return;

  container.innerHTML = engineeringServices.map(srv => `
    <div class="timeline-step">
      <div class="timeline-num">${srv.step}</div>
      <h3 class="timeline-title">${srv.title[currentLang]}</h3>
      <p class="timeline-desc">${srv.desc[currentLang]}</p>
    </div>
  `).join('');
}

function renderExhibitions() {
  const container = document.getElementById('exhibitionGrid');
  if (!container) return;

  container.innerHTML = exhibitionsAndNews.map(item => `
    <div class="exhibition-card">
      <div class="exhibition-img-wrap">
        <img 
          src="${item.img}" 
          alt="${item.title[currentLang]}" 
          class="card-img" 
          loading="lazy"
          onerror="this.onerror=null; this.src='/img/project-1.jpg';"
        />
      </div>
      <div class="exhibition-body">
        <div class="exhibition-date">${item.date}</div>
        <h3 class="exhibition-title">${item.title[currentLang]}</h3>
        <p class="exhibition-summary">${item.summary[currentLang]}</p>
      </div>
    </div>
  `).join('');
}

function renderFaqs() {
  const container = document.getElementById('faqAccordion');
  if (!container) return;

  container.innerHTML = faqs.map((f, idx) => `
    <div class="faq-item ${idx === 0 ? 'open' : ''}">
      <button type="button" class="faq-question-btn" aria-expanded="${idx === 0}">
        <span>${f.q[currentLang]}</span>
        <svg class="faq-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <div class="faq-answer">
        <p>${f.a[currentLang]}</p>
      </div>
    </div>
  `).join('');

  // Attach Accordion Toggle
  container.querySelectorAll('.faq-question-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.parentElement;
      const isOpen = parent.classList.contains('open');

      container.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('open');
        item.querySelector('.faq-question-btn')?.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        parent.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * Interactive Solution Configurator
 */
function initConfigurator() {
  const indSelect = document.getElementById('configIndustry');
  const stageSelect = document.getElementById('configStage');
  const pkgSelect = document.getElementById('configPkg');
  const actionBtn = document.getElementById('configuratorTransferBtn');

  if (!indSelect || !stageSelect || !pkgSelect) return;

  const update = () => updateConfiguratorResult();

  indSelect.addEventListener('change', update);
  stageSelect.addEventListener('change', update);
  pkgSelect.addEventListener('change', update);

  if (actionBtn) {
    actionBtn.addEventListener('click', () => {
      const rec = getConfiguredRecommendation();
      openQuoteModalWithPreset(`${rec.machineName} + ${rec.conveyorName} (${rec.industryName})`);
    });
  }
}

function getConfiguredRecommendation() {
  const indVal = document.getElementById('configIndustry')?.value || 'food';
  const stageVal = document.getElementById('configStage')?.value || 'filling';
  const pkgVal = document.getElementById('configPkg')?.value || 'bottles';

  const industryObj = industries.find(i => i.id === indVal) || industries[0];

  let machineMatch = machineryProducts[0];
  let conveyorMatch = conveyingProducts[0];

  if (stageVal === 'filling') {
    machineMatch = machineryProducts.find(m => m.id === 'liquid-filling-machine') || machineryProducts[0];
    conveyorMatch = conveyingProducts.find(c => c.id === 'flexible-chain-conveyors') || conveyingProducts[0];
  } else if (stageVal === 'bagging') {
    machineMatch = pkgVal === 'sachets' 
      ? machineryProducts.find(m => m.id === 'multi-lane-sachet-machine')
      : machineryProducts.find(m => m.id === 'vffs-packaging-machine');
    conveyorMatch = conveyingProducts.find(c => c.id === 'modular-belt-conveyors') || conveyingProducts[0];
  } else if (stageVal === 'labelling') {
    machineMatch = machineryProducts.find(m => m.id === 'labelling-machine') || machineryProducts[2];
    conveyorMatch = conveyingProducts.find(c => c.id === 'flexible-chain-conveyors') || conveyingProducts[0];
  } else if (stageVal === 'multi-level') {
    conveyorMatch = conveyingProducts.find(c => c.id === 'spiral-conveyors') || conveyingProducts[1];
    machineMatch = machineryProducts.find(m => m.id === 'palletizer-and-wrapping') || machineryProducts[0];
  } else if (stageVal === 'buffer') {
    conveyorMatch = conveyingProducts.find(c => c.id === 'buffer-accumulation-conveyors') || conveyingProducts[2];
    machineMatch = machineryProducts.find(m => m.id === 'liquid-filling-machine') || machineryProducts[0];
  } else if (stageVal === 'end-line') {
    machineMatch = machineryProducts.find(m => m.id === 'palletizer-and-wrapping') || machineryProducts[0];
    conveyorMatch = conveyingProducts.find(c => c.id === 'pallet-conveyors') || conveyingProducts[0];
  } else if (stageVal === 'turnkey') {
    conveyorMatch = conveyingProducts.find(c => c.id === 'turnkey-conveying-systems') || conveyingProducts[6];
    machineMatch = machineryProducts.find(m => m.id === 'liquid-filling-machine') || machineryProducts[0];
  }

  return {
    industryName: industryObj.name[currentLang],
    machineName: machineMatch.name[currentLang],
    conveyorName: conveyorMatch.name[currentLang],
    summary: currentLang === 'ar' 
      ? `نوصي بدمج ${machineMatch.name.ar} مع ${conveyorMatch.name.ar} لتحقيق أقصى استقرار وإنتاجية في قطاع ${industryObj.name.ar}.`
      : `Recommended pairing: ${machineMatch.name.en} synchronized with ${conveyorMatch.name.en} for maximum throughput and zero bottle tipping in ${industryObj.name.en}.`
  };
}

function updateConfiguratorResult() {
  const resultTitleEl = document.getElementById('finderResultTitle');
  const resultDetailsEl = document.getElementById('finderResultDetails');
  if (!resultTitleEl || !resultDetailsEl) return;

  const rec = getConfiguredRecommendation();
  resultTitleEl.textContent = `${rec.machineName} + ${rec.conveyorName}`;
  resultDetailsEl.textContent = rec.summary;
}

/**
 * Product Details Modal
 */
function openProductDetailsModal(id, type) {
  const modal = document.getElementById('detailsModal');
  const titleEl = document.getElementById('detailsModalTitle');
  const bodyEl = document.getElementById('detailsModalBody');
  if (!modal || !titleEl || !bodyEl) return;

  let item = null;
  if (type === 'conveying') {
    item = conveyingProducts.find(c => c.id === id);
  } else {
    item = machineryProducts.find(m => m.id === id);
  }

  if (!item) return;

  titleEl.textContent = item.name[currentLang];

  const imgSrc = item.img || item.poster;

  bodyEl.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      <div style="position: relative; border-radius: 12px; overflow: hidden; max-height: 380px; background: #000;">
        <img 
          src="${imgSrc}" 
          alt="${item.name[currentLang]}" 
          style="width: 100%; height: 100%; object-fit: cover;" 
          onerror="this.onerror=null; this.src='/img/liquid-filling.jpg';"
        />
      </div>

      <div>
        <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem;">
          ${currentLang === 'ar' ? 'الوصف الهندسي' : 'Engineering Overview'}
        </h4>
        <p style="font-size: 0.94rem; color: var(--text-secondary); line-height: 1.7;">
          ${item.description[currentLang]}
        </p>
      </div>

      <div style="background: rgba(2, 132, 199, 0.12); border: 1px solid var(--border-card); border-radius: 12px; padding: 1.35rem;">
        <h4 style="font-size: 1rem; font-weight: 800; color: var(--brand-accent); margin-bottom: 0.75rem;">
          ${currentLang === 'ar' ? 'المواصفات الفنية القياسية' : 'Standard Technical Specifications'}
        </h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.55rem;">
          ${(item.specs || []).map(sp => {
            const text = typeof sp === 'string' ? sp : (sp[currentLang] || sp.en || '');
            return `
              <li style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.9rem; color: #ffffff;">
                <span style="color: var(--brand-accent); font-weight: 800;">✓</span>
                <span>${text}</span>
              </li>
            `;
          }).join('')}
        </ul>
      </div>

      <div style="display: flex; align-items: center; justify-content: flex-end; gap: 1rem; margin-top: 1rem;">
        <button type="button" class="btn btn-outline close-details-modal-btn">
          ${translations[currentLang].closeModal}
        </button>
        <button type="button" class="btn btn-primary" id="modalRequestQuoteBtn">
          ${translations[currentLang].btnRequestQuote}
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');

  bodyEl.querySelector('.close-details-modal-btn')?.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  bodyEl.querySelector('#modalRequestQuoteBtn')?.addEventListener('click', () => {
    modal.classList.remove('active');
    openQuoteModalWithPreset(item.name[currentLang]);
  });
}

/**
 * Quote Request Wizard Modal
 */
function openQuoteModalWithPreset(presetName = '') {
  const modal = document.getElementById('quoteModal');
  if (!modal) return;

  const notesInput = document.getElementById('formNotes');
  if (notesInput && presetName) {
    notesInput.value = (currentLang === 'ar' 
      ? `طلب دراسة وعرض سعر لـ: ${presetName}`
      : `Inquiry for: ${presetName}`);
  }

  modal.classList.add('active');
}

/**
 * Global Event Listeners
 */
function initEventListeners() {
  // Language Switchers (Desktop Header + Mobile Drawer + any .lang-switch-btn)
  document.querySelectorAll('#langToggleBtn, #drawerLangToggleBtn, .lang-switch-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      applyLanguage(currentLang === 'en' ? 'ar' : 'en');
    });
  });

  // Theme Switchers (Desktop Header + Mobile Drawer)
  document.querySelectorAll('#themeToggleBtn, #drawerThemeToggleBtn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  });

  // Mobile Menu Drawer Open & Close
  const mobileDrawer = document.getElementById('mobileDrawer');
  document.getElementById('menuOpenBtn')?.addEventListener('click', () => {
    mobileDrawer?.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  const closeDrawer = () => {
    mobileDrawer?.classList.remove('active');
    document.body.style.overflow = '';
  };

  document.getElementById('menuCloseBtn')?.addEventListener('click', closeDrawer);
  mobileDrawer?.querySelector('.drawer-backdrop')?.addEventListener('click', closeDrawer);
  mobileDrawer?.querySelectorAll('.drawer-link')?.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Category Filter Buttons (Handles both catalog tab buttons and index pills)
  const filterBtns = document.querySelectorAll('.filter-tab-btn, .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterVal = (btn.dataset.filter || 'all').toLowerCase();

      // On catalog pages (e.g. machinery.html)
      const subpageCards = document.querySelectorAll('#machineryGrid .tech-product-card, #machineryGrid .product-card');
      if (subpageCards.length) {
        subpageCards.forEach(card => {
          const cat = (card.dataset.cat || card.dataset.category || '').toLowerCase();
          if (filterVal === 'all' || cat.includes(filterVal) || filterVal.includes(cat)) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      }

      // On index.html
      activeCategory = filterVal;
      renderProducts();
    });
  });

  // Modal Closers
  document.querySelectorAll('.modal-close-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });

  // Global CTA for Quote Modal
  document.querySelectorAll('.trigger-quote-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      openQuoteModalWithPreset();
    });
  });

  // Back to top button
  document.getElementById('backToTopBtn')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Quote Form Submission (WhatsApp & Mailto Generation)
  const quoteForm = document.getElementById('quoteWizardForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleQuoteSubmit(quoteForm);
    });
  }
}

function handleQuoteSubmit(form) {
  const scope = form.elements['scope']?.value || 'General';
  const industry = form.elements['industry']?.value || '';
  const product = form.elements['product']?.value || '';
  const container = form.elements['container']?.value || '';
  const speed = form.elements['speed']?.value || '';
  const notes = form.elements['notes']?.value || '';
  const name = form.elements['name']?.value || '';
  const company = form.elements['company']?.value || '';
  const phone = form.elements['phone']?.value || '';
  const email = form.elements['email']?.value || '';
  const city = form.elements['city']?.value || '';

  const msgLines = [
    `*Al Sakr Top Group — Line & Machine Quotation Request*`,
    `----------------------------------------`,
    `• Scope: ${scope}`,
    `• Industry: ${industry}`,
    `• Product: ${product}`,
    `• Container/Pack: ${container}`,
    `• Target Speed: ${speed}`,
    `• Client: ${name} (${company || 'Factory'})`,
    `• Phone: ${phone}`,
    `• Email: ${email}`,
    `• City/Location: ${city}`,
    `• Details/Notes: ${notes}`,
    `----------------------------------------`,
    `Sent from official website configurator`
  ];

  const fullText = msgLines.join('\n');
  const waUrl = `https://wa.me/${groupInfo.whatsapp}?text=${encodeURIComponent(fullText)}`;
  const mailSubject = `Quotation Request: ${company || name} - ${product || scope}`;
  const mailUrl = `mailto:${groupInfo.emails[1].address}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(fullText)}`;

  // Present dispatch options
  const resultBox = document.getElementById('quoteDispatchResult');
  if (resultBox) {
    resultBox.innerHTML = `
      <div style="background: rgba(37, 211, 102, 0.12); border: 1px solid rgba(37, 211, 102, 0.35); border-radius: 12px; padding: 1.5rem; text-align: center;">
        <h4 style="color: #25d366; font-size: 1.15rem; font-weight: 800; margin-bottom: 0.5rem;">
          ${translations[currentLang].quoteSentSuccess}
        </h4>
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; margin-top: 1rem;">
          <a href="${waUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            ${translations[currentLang].btnSendWhatsApp}
          </a>
          <a href="${mailUrl}" class="btn btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            ${translations[currentLang].btnSendEmail}
          </a>
        </div>
      </div>
    `;
    resultBox.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.open(waUrl, '_blank');
  }
}

/**
 * Scroll Spy & Sticky Header Styling
 */
function initScrollSpy() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });
}


/**
 * Standalone Line Configurator (configurator.html)
 */
window.runLineConfigurator = function() {
  const productType = document.getElementById('cfgProduct')?.value || 'liquid-thin';
  const containerType = document.getElementById('cfgContainer')?.value || 'bottle';
  const outputLevel = document.getElementById('cfgOutput')?.value || 'mid';

  const recommendations = [];

  // Filler / Bagger selection
  if (productType.startsWith('liquid')) {
    recommendations.push({
      name_en: 'Automatic Liquid Filling Machine',
      name_ar: 'ماكينة تعبئة السوائل الأوتوماتيكية',
      url: '/machinery/liquid-filling-machine.html',
      desc_en: 'Inline servo-driven liquid filler with diving nozzles for 50 ml – 20 L.',
      desc_ar: 'ماكينة تعبئة سوائل خطية بمحركات سيرفو ونوازل غاطسة من 50 مل حتى 20 لتر.'
    });
    recommendations.push({
      name_en: 'Automatic Capping Machine',
      name_ar: 'ماكينة إغلاق وتغطية الأغطية',
      url: '/machinery/capping-machine.html',
      desc_en: 'Screw, press-on, and twist-off cap closure with magnetic torque control.',
      desc_ar: 'إغلاق محكم لأغطية القلاووظ والكبس والتويست أوف بعزم مغناطيسي دقيق.'
    });
  } else if (productType === 'powder' || productType === 'granules') {
    if (containerType === 'sachet') {
      recommendations.push({
        name_en: 'Multi-Lane Sachet Packaging Machine',
        name_ar: 'ماكينة تعبئة الساشيه متعددة المسارات',
        url: '/machinery/multi-lane-sachet-machine.html',
        desc_en: 'High-output 2-10 lane sachets at up to 900/min with auger dosing.',
        desc_ar: 'إنتاجية فائقة من 2 إلى 10 مسارات بسرعة حتى 900 كيس/دقيقة بتعبئة حلزونية بريمة.'
      });
    } else {
      recommendations.push({
        name_en: 'Vertical Form Fill Seal (VFFS) Machine',
        name_ar: 'ماكينة التعبئة والتغليف الرأسية VFFS',
        url: '/machinery/vffs-packaging-machine.html',
        desc_en: 'Pillow and gusset bags from 50 g to 5 kg with multihead weigher.',
        desc_ar: 'أكياس وسائدية وقائمة من 50 جم حتى 5 كجم مع ميزان إلكتروني متعدد الرؤوس.'
      });
    }
  } else if (productType === 'solid') {
    recommendations.push({
      name_en: 'Horizontal Flow-Pack Machine (HFFS)',
      name_ar: 'ماكينة التغليف الأفقي فلوباك HFFS',
      url: '/machinery/flow-pack-machine.html',
      desc_en: 'High-speed pillow wrapping for biscuits, soaps, and hardware items.',
      desc_ar: 'تغليف وسائدي فائق السرعة لقطع البسكويت والصابون والأدوات المنزلية.'
    });
  }

  // Container-specific additions
  if (containerType === 'bottle') {
    recommendations.push({
      name_en: 'Self-Adhesive Labelling Machine',
      name_ar: 'ماكينة لصق الليبل ذاتي اللصق',
      url: '/machinery/labelling-machine.html',
      desc_en: 'Front, back, or full-wrap labelling at up to 200 bpm with optical sensor.',
      desc_ar: 'لصق ليبل وجه وظهر أو لولبي دائري بسرعة حتى 200 عبوة/دقيقة بحساسات ضوئية.'
    });
  } else if (containerType === 'tray') {
    recommendations.push({
      name_en: 'Thermoforming Packaging Machine',
      name_ar: 'ماكينة التشكيل الحراري ثيرموفورمينج',
      url: '/machinery/thermoforming-machine.html',
      desc_en: 'Vacuum and MAP packaging for food, meat, cheese, and medical products.',
      desc_ar: 'تفريغ هواء وحقن غاز MAP للحوم والأجبان والمستلزمات الطبية المعقمة.'
    });
  } else if (containerType === 'carton') {
    recommendations.push({
      name_en: 'Automatic Cartoning Machine',
      name_ar: 'ماكينة تعبئة الكراتين الأوتوماتيكية',
      url: '/machinery/cartoning-machine.html',
      desc_en: 'Automatic carton erecting, product loading, and hot-melt glue closure.',
      desc_ar: 'فتح الكراتين آلياً وتلقيم المنتج والغلق باللسان أو الغراء الساخن.'
    });
  }

  // End of line
  if (outputLevel === 'high') {
    recommendations.push({
      name_en: 'Robotic Palletizer & Stretch Wrapper',
      name_ar: 'خط رص البالتات بالروبوت والاستريتش',
      url: '/machinery/palletizer-and-wrapping.html',
      desc_en: 'End-of-line robotic palletizing with 2,000 kg automatic rotary stretch wrapper.',
      desc_ar: 'رص كراتين آلي بذراع روبوتي وتغليف استريتش دوار لحمولة 2000 كجم.'
    });
  }

  // Conveying
  recommendations.push({
    name_en: 'Flexible Chain Conveyor Network',
    name_ar: 'شبكة سيور الجنزير المرنة فليكس شين',
    url: '/conveyors/flexible-chain-conveyors.html',
    desc_en: 'Low-friction POM chain for 3D factory curves, inclines, and high-speed line linking.',
    desc_ar: 'جنزير بولي أسيتال منخفض الاحتكاك للمنحنيات ثلاثية الأبعاد وربط الماكينات.'
  });

  if (outputLevel === 'mid' || outputLevel === 'high') {
    recommendations.push({
      name_en: 'Dynamic Buffer & Accumulation Table',
      name_ar: 'طاولة وسيور التخزين والتجميع المؤقت',
      url: '/conveyors/buffer-accumulation-conveyors.html',
      desc_en: 'Zero-pressure FIFO accumulation protecting line uptime during downstream stoppages.',
      desc_ar: 'تخزين ديناميكي بدون ضغط لحماية استمرارية الخط عند توقف المحطات التالية.'
    });
  }

  // Render results
  const panel = document.getElementById('cfgResults');
  const cards = document.getElementById('cfgMatchedCards');
  if (panel && cards) {
    panel.style.display = 'block';
    cards.innerHTML = recommendations.map(r => `
      <div class="tech-product-card">
        <div class="card-content-area">
          <span class="card-cat-badge">
            <span class="lang-en">Recommended Solution</span>
            <span class="lang-ar">حل هندسي موصى به</span>
          </span>
          <h3 class="card-item-title">
            <span class="lang-en">${r.name_en}</span>
            <span class="lang-ar">${r.name_ar}</span>
          </h3>
          <p class="card-item-desc">
            <span class="lang-en">${r.desc_en}</span>
            <span class="lang-ar">${r.desc_ar}</span>
          </p>
          <div class="card-btn-area">
            <a href="${r.url}" class="btn btn-primary btn-block">
              <span class="lang-en">View Technical Specifications &rarr;</span>
              <span class="lang-ar">عرض المواصفات الفنية الكاملة &larr;</span>
            </a>
          </div>
        </div>
      </div>
    `).join('');
    panel.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Contact Form Submission via WhatsApp
 */
window.submitQuote = function(form) {
  const data = new FormData(form);
  const name = data.get('name') || '';
  const company = data.get('company') || '';
  const phone = data.get('phone') || '';
  const email = data.get('email') || '';
  const equipment = data.get('equipment') || '';
  const details = data.get('details') || '';

  const msg = [
    '━━━━ Al Sakr Top Group — Quotation Request ━━━━',
    `👤 Name: ${name}`,
    `🏭 Company: ${company}`,
    `📞 Phone: ${phone}`,
    email ? `✉️ Email: ${email}` : '',
    `⚙️ Equipment: ${equipment}`,
    details ? `📋 Details: ${details}` : '',
    '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
  ].filter(Boolean).join('\n');

  const waUrl = `https://wa.me/201098079365?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
};
