# Anh Pha — Portfolio

Premium, minimal QA Engineer portfolio built to the PRD.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **TailwindCSS** + **shadcn/ui** components
- **Framer Motion** (fade-only animations, 0.5s)
- **next-themes** for light/dark mode
- Deploy target: **Vercel**

## Pages

`/` Home · `/about` · `/experience` · `/skills` · `/resume` · `/contact`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # run the production build
```

## Editing content

All content lives in one file: **`lib/content.ts`**.
Update your name, summary, experience, skills, education, certification, and
contact links there — every page reads from it.

Before deploying, update:

- `site.url` in `lib/content.ts` → your real Vercel domain (used by SEO,
  sitemap, robots, OpenGraph).
- `contact.linkedin` / `contact.github` → optional; leave empty to hide.

## SEO

- Per-page metadata + OpenGraph + Twitter cards
- Auto-generated `sitemap.xml`, `robots.txt`, `manifest.webmanifest`
- Dynamic OpenGraph image (`app/opengraph-image.tsx`)
- JSON-LD `Person` structured data

## Deploy to Vercel

1. Push this folder to a Git repo (GitHub/GitLab/Bitbucket).
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset auto-detects **Next.js** — no config needed.
4. Deploy, then set `site.url` to the assigned domain and redeploy.

## Design system

- Font: Inter · Max content width: 960px
- Light: bg `#FFFFFF`, text `#111111`
- Dark: bg `#09090B`, text `#FAFAFA`
- Components: Navbar, Hero, Experience Cards, Badge Skills, Footer
- Animation: fade only (0.5s), respects `prefers-reduced-motion`

## Accessibility

Skip-to-content link, semantic landmarks, keyboard-focusable controls,
`aria-current` nav state, reduced-motion support, and AA-contrast colors.

## The resume "PDF"

The Resume page has a **Download / Print PDF** button that opens the browser
print dialog with clean, ATS-friendly print styles — save as PDF from there.
