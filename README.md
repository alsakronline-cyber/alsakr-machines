# Top Group | Al Sakr Machines: website

Bilingual (Arabic RTL / English) static site built with Next.js 15, Tailwind CSS 4, Three.js (React Three Fiber) and Framer Motion.

## Run locally
```
npm install
npm run dev        # development at http://localhost:3000
npm run build      # static export into ./out
npm start          # serve ./out at http://localhost:3000
```

## Where to edit content
- `lib/site.ts`: phones, WhatsApp, emails, address, social links, map
- `lib/data.ts`: machines, categories, industries, brands, services, stats, news, jobs, gallery
- `lib/i18n.ts`: all UI text in Arabic and English
- `public/img/`: images (logo, machines). `public/automation-catalog.pdf`: catalog download

Note: the stats in `lib/data.ts` (projects, clients, staff), the news posts and the timeline years are placeholders. Confirm them before publishing.
