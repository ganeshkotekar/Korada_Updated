# Korada Furniture – Website

A modern React + Vite + Tailwind CSS website for Korada Furniture Co. Pvt. Ltd.

## Tech Stack

- **React 18** with TypeScript
- **Vite 6** build tool
- **Tailwind CSS 4** for styling
- **Wouter** for client-side routing
- **Framer Motion** for animations
- **shadcn/ui** component library

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:5173

## Build & Deploy

```bash
npm run build
```

Output goes to `dist/` folder.

### Deploy to Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your GitHub repo
3. Framework: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**

The included `vercel.json` handles SPA routing automatically.

## Image Strategy

- All product images are stored locally in `/public/images/` — no external dependencies
- Factory/about images fall back gracefully to the old site if unavailable
- Hero slider uses local optimized images for fast load times

## Pages

- `/` — Home with hero slider, featured products, stats
- `/about` — Company story, values, factory
- `/products` — All products with search & category filter
- `/products/:id` — Individual product detail with image gallery
- `/catalogue` — Catalogue download page
- `/dealers` — Dealer locator

---

# Korada_Updated

(Local README header appended during merge resolution.)
