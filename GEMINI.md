# Gemini Portfolio Developer Guidelines (GEMINI.md)

This document is the foundational team-shared authority for architectural decisions, development conventions, and agent workflows in this repository. All contributors and AI agents MUST adhere to these rules.

---

## 🚀 Technical Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org) & **React 19**
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (PostCSS integration) with custom CSS variables
- **Animation & 3D**: [GSAP](https://gsap.com) (with `@gsap/react`), [Framer Motion](https://framer.com/motion), [Three.js](https://threejs.org), and [React Three Fiber](https://r3f.docs.pmnd.rs) (R3F) / [Drei](https://github.com/pmndrs/drei)
- **Icons & Notifications**: [Lucide React](https://lucide.dev) & [Sonner](https://sonner.emilkowal.ski)
- **Deployment & Analytics**: [Vercel](https://vercel.com) & `@vercel/analytics`

---

## 📂 Architecture & Directory Structure

```text
C:\Users\user\Desktop\PROJECTS\geotech-portfolio\
├───app\                       # Next.js App Router (pages & layout)
│   ├───about\                 # About Page
│   ├───contact\               # Contact Page
│   ├───projects\              # Projects Listing Page
│   ├───services\              # Services Offering Page
│   ├───components\            # App-specific/3D components (e.g., PortfolioScene)
│   ├───globals.css            # Tailwind Imports & Semantic CSS Variables
│   ├───layout.tsx             # Root Shell, HTML structures, font providers, scripts
│   └───page.tsx               # Home Page
├───components\                # Global Shared Presentation Components
│   ├───Navbar.tsx             # Header navigation
│   ├───Footer.tsx             # Footer layout
│   └───...                    # Reusable modules (ProjectCard, ThemeToggle, Reveal)
├───content\
│   └───site.ts                # SINGLE SOURCE OF TRUTH FOR ALL COPY/TEXT
├───public\                    # Static files (CV, images, 3D assets)
└───package.json               # Dependencies and scripts
```

---

## 🎨 Design Tokens & Theming

Theme-driven styling is built around semantic CSS variables configured in `app/globals.css`. Do not hardcode arbitrary hex codes in classes.

- **Surfaces**: Use Tailwind classes like `bg-bg-0`, `bg-bg-1`, `bg-bg-2`, `bg-bg-3` to handle light/dark mode surfaces dynamically.
- **Text Color**: Use `text-text-primary`, `text-text-secondary`, `text-text-tertiary` for automatically AA contrast-compliant copy.
- **Brand Accents**: Use `bg-brand-blue` / `text-brand-ink` / `text-brand-accent` for brand-colored CTAs and alerts.
- **Borders & Rings**: Use `border-border-custom` and `focus:ring-ring`.

---

## 🛠️ Core Engineering Mandates

### 1. The Single Copy Source of Truth (`content/site.ts`)
*   **RULE**: All static texts, emails, links, headings, and lists MUST be declared in `content/site.ts`.
*   **DO NOT** hardcode text, descriptions, links, or lists directly inside components or pages.
*   To update site copy, always modify `content/site.ts` first, and import the constants (e.g., `site`, `projects`, `services`, `CONTACT_EMAIL`) into components.

### 2. Next.js 16 / React 19 Conventions
*   **Next.js 16 Breaking Changes**: This project uses Next.js 16. Verify any newer routing or layout conventions inside `node_modules/next/dist/docs/` if unexpected behaviour occurs.
*   **Server Components by Default**: Pages and layout files in the `app/` folder should remain Server Components.
*   **Selective Client Components**: Mark components with `"use client"` ONLY when they use client hooks (`useState`, `useEffect`), GSAP/ScrollTrigger animations, Framer Motion, or React Three Fiber canvases (such as `app/components/PortfolioScene.tsx` and `components/Navbar.tsx`).

### 3. Animation & 3D Performance
*   **GSAP / ScrollTrigger**: Always clean up or scope GSAP animations properly using `@gsap/react`'s `useGSAP` hook or reference scoping to avoid memory leaks.
*   **R3F Canvas**: Isolate expensive Three.js / Canvas logic into discrete Client Components and wrap them in a standard `<Suspense>` boundary and `<ErrorBoundary>` (from `react-error-boundary`) as done in `PortfolioScene.tsx`.

### 4. Accessibility (A11y) & SEO
*   **Focus Management**: All interactive elements (buttons, links) must have clear outlines and comply with keyboard navigation.
*   **Skip Link**: A skip link (`#main-content`) is present in `app/layout.tsx`. Ensure pages have a matching ID element.
*   **Aria Roles**: Supply appropriate `aria-hidden` or screen-reader descriptions (`sr-only`) on decorative/abstract elements like animations, stats labels, and grid overlays.
*   **Metadata**: Ensure SEO descriptions, canonical tags, and Open Graph objects are managed through Next.js `metadata` and `viewport` exports using values sourced from `content/site.ts`.

---

## ⚙️ Standard Workflows & Commands

### Development
Start the local Next.js development server:
```powershell
npm run dev
```

### Static Analysis & Verification
Run the ESLint suite before pushing or committing changes:
```powershell
npm run lint
```

### Build & Production Test
Ensure the application compiles cleanly into production-ready assets:
```powershell
npm run build
```
