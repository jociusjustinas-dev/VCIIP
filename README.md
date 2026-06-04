# VCIIP Web

Frontend prototype for the VCIIP website. Built for quick local review, GitHub, Vercel previews, and later WordPress custom theme handoff.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS v4
- Lucide icons

## Commands

```bash
npm install
npm run dev
npm run build
```

Local URL after `npm run dev`:

```text
http://localhost:5173
```

## Design Direction

The site can borrow layout rhythm and section logic from the Human Intelligence Webflow template, but the VCIIP palette is the source of truth:

- `#14323A` primary deep petrol
- `#00FFBB` accent for CTAs, active states, selected borders, and UI signals
- `#FFFFFF` clean surfaces
- `#F6F5F3` page background and quiet bands

## WordPress Handoff Principle

React components are written as section-level building blocks so they can later map to WordPress template partials and ACF field groups.
