# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server with HMR.
- `npm run build` — production build to `dist/`.
- `npm run preview` — serve the built `dist/` locally to verify a production build.

No test runner or linter is configured.

## Architecture

Personal portfolio for a Junior Data Analyst, built with React 19 + Vite + Tailwind CSS v4 + Framer Motion. Single-page app, no router — navigation is smooth-scroll anchors between sections (`#home`, `#about`, `#skills`, `#projects`, `#education`, `#certifications`, `#connect`, `#contact`).

### Stack notes
- Tailwind v4 is configured via the Vite plugin (`@tailwindcss/vite`), not a config file. Theme tokens and custom utilities live in `src/index.css` under `@theme` and `@layer`. The dark navy palette and accent colors (blue/cyan/purple) are CSS custom properties — use them rather than hardcoded colors.
- Animations use Framer Motion. Shared reveal variants are in `src/lib/motion.js` (`container`, `item`, `fadeUp`, `viewport`). Scroll-triggered reveals use `whileInView` with `viewport={{ once: true }}`.
- Brand icons (GitHub, LinkedIn) are NOT in lucide-react (removed in recent versions). They're custom SVGs in `src/components/BrandIcons.jsx`, exported as `Github` and `Linkedin` as drop-in replacements. Import them from there, not lucide-react.
- Recharts powers the hero's animated dashboard composition. Decorative mock data only — never presented as real analysis.

### Data is editable, not hardcoded
All personal content lives in `src/data/` as plain JS exports — profile links, skills, projects, education, certifications. Edit these files to update the site; components read from them. Projects and certifications are explicitly marked as placeholders (`placeholder: true`) and must not be presented as real achievements. The spec is firm: do not invent degrees, certification names, institutions, or proficiency percentages.

- `profile.js` — name, title, tagline, intro, LinkedIn/GitHub/email links, CV path, short bio.
- `skills.js` — skill groups; `icon` field maps to the icon switch in `Skills.jsx`.
- `projects.js` — project cards + category filter; each has optional `repo`, `image`, `placeholder`.
- `education.js` — education timeline + certifications array (empty by default renders an honest "in progress" state).

### Contact form
Functional via Netlify Forms (not a fake submission). A hidden static `<form name="contact">` in `index.html` lets Netlify detect the form at build time; the React form in `Contact.jsx` mirrors those field names and POSTs to `/`. `netlify.toml` configures the build and SPA redirects. On deploy to Netlify, submissions appear in the site dashboard and can forward to email.

### Component layout
`src/App.jsx` composes: `AnimatedBackground` (decorative fixed grid + floating dots) → `PageLoader` (brief fade) → `Navbar` (sticky, active-section spy, mobile menu) → section components → `Footer` → `ScrollToTop`. `SectionHeading` is the reusable eyebrow+title+subtitle header used across sections.
