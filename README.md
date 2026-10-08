# Geofry Oduor — Portfolio

Personal portfolio of Geofry Oduor, an AI & software developer and final-year mechanical engineering student based in Kenya (Kisumu / Nairobi).

**Live site:** https://geotech-portfolio.vercel.app
**GitHub:** https://github.com/Geoduor

## What the site contains

| Page | Route | What it shows |
| --- | --- | --- |
| Home | `/` | Introduction, key numbers, services, featured projects, working process, tools |
| Services | `/services` | What I build, how an engagement runs, and who it is a good fit for |
| Work | `/projects` | All projects, with live links, source links and (where available) a promo video |
| About | `/about` | Background, experience and training, education, technical skills |
| Certificates | `/certificates` | Certificates from Zone01 Kisumu, Power Learn Project and GOMYCODE |
| Contact | `/contact` | Email, GitHub, LinkedIn and what happens after you get in touch |

The site is responsive from 320 px phones up to desktop and supports light and dark themes.

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router) with React 19 and TypeScript
- [Tailwind CSS](https://tailwindcss.com) 4, with colour tokens defined in `app/globals.css`
- [lucide-react](https://lucide.dev) icons and [sonner](https://sonner.emilkowal.ski) toasts
- Vercel Analytics, deployed on [Vercel](https://vercel.com)
- Fonts: Inter (Google Fonts) and a self-hosted faux-Cyrillic display font

## Project structure

```
app/
  page.tsx            Home page
  services/           Services page
  projects/           Work page
  about/              About page
  certificates/       Certificates page
  contact/            Contact page
  layout.tsx          Shared layout, fonts, site-wide metadata
  fonts/              Self-hosted display font (Geodr Faux) and its OFL licence
  globals.css         Design tokens (colours, spacing, dark mode) and base styles
  sitemap.ts          Generates /sitemap.xml
  robots.ts           Generates /robots.txt
components/
  Navbar.tsx, Footer.tsx, ThemeToggle.tsx
  ProjectCard.tsx     One project card
  ProjectVideo.tsx    "Watch" button that opens a project video in a dialog
  Reveal.tsx          Fade-in on scroll
  CopyEmail.tsx       "Copy email" button
content/
  site.ts             All of the site's text and data (see below)
scripts/
  build-faux-cyrillic-font.py   Rebuilds the display font from Montserrat
public/
  Geofry_Oduor_CV.pdf, geofry-portrait.jpg
  certificates/       Certificate images
  videos/             Project videos and their poster images
```

## Updating the content

Almost everything you read on the site lives in **`content/site.ts`**, so you rarely need to touch a component.

| To change | Edit in `content/site.ts` |
| --- | --- |
| Name, role, intro, location, links, availability badge | `site` |
| The four numbers on the home page | `stats` |
| Services and their bullet points | `services` |
| Projects (order, text, links, featured flag) | `projects` |
| Working process steps | `processSteps` |
| Skills shown on Home and About | `skillGroups` |
| Experience and education | `experience`, `education` |
| Certificates | `certificates` |
| Contact email | `CONTACT_EMAIL` |

### Add or edit a project

Add an object to the `projects` array. **The array order is the display order**, and each section lists its projects in that order.

```ts
{
  id: "my-project",
  title: "My Project",
  category: "Sports Platform",
  problem: "The problem it addresses, in one sentence.",
  solution: "What was built, based on what the project actually does.",
  tech: ["React", "FastAPI"],
  githubUrl: "https://github.com/Geoduor/my-project",
  liveUrl: "https://example.com", // or null
  featured: false,                // true shows it in "Featured" and on the home page
}
```

- The home page shows the first **three** featured projects, which fills one row. Keep exactly three featured so the grid stays even.
- The stats on the home page (`stats`) are numbers you can check against this list. Update them when you add or remove a project.

### Add a promo video to a project

1. Put the video (MP4, H.264) and a poster image in `public/videos/`.
2. Add a `video` entry to the project:

```ts
video: {
  src: "/videos/my-project-ad.mp4",
  poster: "/videos/my-project-ad-poster.jpg",
  label: "Watch ad",
},
```

The card then shows a button that opens the video in a dialog. The video file is not downloaded until someone presses play.

### Fonts

- **Headings, the "Geodr." brand and the big numbers** use **Geodr Faux**, a faux-Cyrillic display font: the letters R, N, W, U, Y and D (and r, n, w, u, y) are drawn as the Cyrillic letters Я, И, Ш, Ц, Ч and Д. The page text is still ordinary Latin, so search engines, screen readers and copy/paste are unaffected.
- **Paragraphs, buttons and small labels** use Inter, so longer text stays easy to read.
- Geodr Faux is generated from [Montserrat](https://github.com/JulietaUla/Montserrat) (SIL Open Font License 1.1, see `app/fonts/OFL.txt`) with `scripts/build-faux-cyrillic-font.py`. Edit the `SWAPS` list in that script and re-run it to change which letters are swapped.
- To use a different display font, change the `faux` definition in `app/layout.tsx` (or point it at another font file in `app/fonts/`). To use the faux-Cyrillic look everywhere, set `--font-sans` to the same variable in `app/globals.css`.

### Replace the CV, photo or certificates

Replace the file in `public/` using the same file name, or change the path in `content/site.ts`.

## Run it locally

You need Node.js 20.9 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
```

Other commands:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

The build downloads the Inter font from Google Fonts, so it needs internet access. The display font is self-hosted (see Fonts below).

## Deploy

The site is deployed on Vercel from the `main` branch. Every push to `main` triggers a new deployment, so a change reaches the live site once it is merged.

If the domain changes, update `site.url` in `content/site.ts`. It feeds the canonical URLs, Open Graph tags, sitemap and `robots.txt`.

## Notes for contributors and AI coding tools

This project uses a version of Next.js with breaking changes from older releases. Before writing code, read the relevant guide in `node_modules/next/dist/docs/` (see `AGENTS.md`).
