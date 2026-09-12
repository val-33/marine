# MARINE

Luxury marine industry landing page. Built with **Next.js 16**, **React 19**, **Tailwind v4**, and **TypeScript**. Styled after minimalist luxury-yacht brokerages — letter-spaced typography, dark hero imagery, silvered section backgrounds.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Structure

- `app/` — App Router entry (`layout.tsx`, `page.tsx`, `globals.css`)
- `components/` — page sections (`Header`, `Hero`, `Signature`, `FeaturedFleet`, `Charter`, `About`, `Brands`, `Contact`, `Footer`) plus the `YachtPlaceholder` SVG
- `lib/fleet.ts` — sample fleet data. Replace `image` fields with your own photos.

## Swap the demo visuals

- **Hero background** — edit the `backgroundImage` URL in [`components/Hero.tsx`](components/Hero.tsx).
- **Charter background** — edit the URL in [`components/Charter.tsx`](components/Charter.tsx).
- **About photo** — edit the `<img src>` in [`components/About.tsx`](components/About.tsx).
- **Fleet cards** — the cards currently render as branded SVG placeholders via `YachtPlaceholder`. To use real photos, edit [`components/FeaturedFleet.tsx`](components/FeaturedFleet.tsx) and replace the `<YachtPlaceholder />` block with an `<img src={y.image} />`.

## Deploy on Vercel

Push to GitHub, then import at <https://vercel.com/new> and pick this repository. No environment variables or build overrides required — Vercel auto-detects Next.js.
