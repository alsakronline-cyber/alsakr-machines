# Al Sakr Top Group — Unified Corporate Website

Official bilingual (English / Arabic) marketing and engineering platform for **Al Sakr Top Group** (الصقر توب جروب / الصقر للتجارة والتصنيع ش.م.م), combining the group's two industrial divisions:
1. **Packaging & Filling Machinery Division** (Al Sakr Machines)
2. **Conveying & Material Handling Systems Division** (Al Sakr Conveying)

---

## 1. Key Design & Content Decisions

### Strategic Brand Consolidation
- **Single Brand Identity**: Replaced fragmented sub-brands with **Al Sakr Top Group** (*الصقر توب جروب*), positioning the enterprise as an integrated industrial automation power with over 30 years of manufacturing excellence in Egypt (founded in 1995 by Eng. Hemdan Sakr).
- **Strict Compliance with Constraints**:
  - **No Spare Parts**: All standalone spare parts catalogs, lookup wizards, and individual replacement part listings have been completely removed. After-sales service is framed professionally as *Preventive Maintenance, Line Overhauls, and Rapid Field Support*.
  - **No Individual Vendor Brands**: Standalone brand logos marquees (Siemens, Sick, ABB, Schneider, Sanyo Denki, YA-VA, etc.) have been removed so the company does not appear as a component reseller. The engineering copy highlights that all Al Sakr lines are built using *world-class PLC automation, precision servo drives, and sanitary stainless steel (AISI 304/316L)*.
  - **Uninvented Truthful Content**: Only facts confirmed by source material are displayed. Incomplete or placeholder statistics from the original repositories have been clearly flagged.

### UI/UX & Interaction Architecture
- **Bilingual First-Class Experience**: Seamless toggling between English (LTR) and Arabic (RTL) without full-page reloads. Layouts utilize CSS logical properties (`margin-inline-start`, `padding-inline-end`) ensuring flawless typography and directional icon alignment.
- **Dark & Light Industrial Themes**: Built on modern CSS design tokens with default dark atmospheric industrial styling and accessible light mode.
- **Interactive Line Configurator & Solution Finder**: Allows plant managers to select their Industry, Handling Stage, and Packaging Format to instantly calculate matching machinery + conveyor pairing, with 1-click transfer into the quotation wizard.
- **Unified Machinery & Conveyor Portfolio**: Filterable product catalog with technical spec modals, capacity metrics, and high-resolution photography.
- **Multi-Step Quotation Wizard**: Formats specifications into structured inquiries for direct WhatsApp (`wa.me`) or Email (`mailto:`) transmission with zero backend dependencies.
- **Mobile-First Ergonomics**: Sticky blurred navigation, mobile drawer menu, and fixed bottom action bar for thumb-friendly mobile conversions.

---

## 2. Directory Structure

```
alsakr-machine/
├── index.html                   # Master production-ready semantic HTML5 platform
├── package.json                 # Node/NPM scripts for dev and preview
├── README.md                    # Project documentation & deployment guide
├── public/                      # Static assets & media
│   ├── brand/
│   │   ├── logo.jpg             # Official Al Sakr circular badge logo
│   │   └── favicon.png          # High-res favicon
│   ├── img/                     # Real machinery photography & factory installations
│   │   ├── liquid-filling.jpg
│   │   ├── capping.jpg
│   │   ├── vffs.jpg
│   │   ├── multilane.png
│   │   ├── palletizer.jpg
│   │   └── fb/                  # Facebook factory & exhibition photos
│   └── media/                   # Conveyor system poster assets & showreel
│       ├── showreel.webp
│       ├── flex-chain-food.webp
│       ├── flex-spiral.webp
│       ├── buffer-chain.webp
│       └── factory-system.webp
└── src/                         # Modular application source code
    ├── data/
    │   └── groupData.js         # Unified bilingual data model
    ├── i18n/
    │   └── translations.js      # Complete English and Arabic dictionaries
    ├── styles/
    │   └── main.css             # Unified responsive design system (CSS variables, RTL, dark/light)
    └── scripts/
        └── app.js               # Reactive client-side application logic
```

---

## 3. Flagged Items for Client Confirmation

Per strict instruction not to invent unsupported details, the following items from the source repositories are flagged for owner confirmation before public launch:

1. **Statistical Metrics**:
   - The original machinery repository noted: *"only 'years' comes from the existing site. Other figures (850+ projects, 400+ clients, 120+ engineers) are placeholders to confirm before publishing."*
   - Conveying site noted: *"10+ years, 200+ conveyors installed, 12+ countries"*.
   - The unified website currently presents verified anchors: **1995 Founding Year (30+ years)**, **200+ Conveyor Systems Delivered**, and **10th of Ramadan Manufacturing Plant**. Final numbers should be verified by the sales director.
2. **Primary Sales Phone & Email**:
   - Machinery site listed: `+20 10 98079365` and `info@topgroupco.com` / `sales@topgroupco.com`.
   - Conveying site listed: `+20 10 20588660` and `hagar@topgroupco.com`.
   - All three are currently unified under departmental labels on the website.
3. **Product Catalog PDF**:
   - Confirmation whether a unified 2026/2027 Group Catalog PDF is available to replace `/public/automation-catalog.pdf`.

---

## 4. How to Run Locally

You can preview the website immediately using any local web server:

### Option A: Using NPM
```bash
npm start
# Opens at http://localhost:3000
```

### Option B: Using Python
```bash
python -m http.server 3000
# Opens at http://localhost:3000
```

---

## 5. Deployment Guide

Because the website is static and serverless:
1. **GitHub Pages**: Push this repository to GitHub and enable GitHub Pages under *Settings -> Pages -> Deploy from branch (main / root)*.
2. **Netlify / Vercel**: Connect the repository with Publish Directory set to `.` (root).
