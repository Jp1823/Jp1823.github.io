# jp1823.github.io

Personal website and portfolio of João Abreu, MSc student in Informatics Engineering at the University of Minho.

**Live:** [jp1823.github.io](https://jp1823.github.io)

## Overview

A static, bilingual (Portuguese and English) site that presents selected projects and a résumé. It is built with [Astro](https://astro.build), ships no client-side JavaScript beyond a small language redirect, and is deployed to GitHub Pages through GitHub Actions on every push to `main`.

## Tech stack

| Area | Choice |
|---|---|
| Framework | Astro (static output) |
| Language | TypeScript |
| Content | Astro content collections (Markdown and JSON, schema-validated) |
| Styling | Plain CSS with custom properties |
| Typography | JetBrains Mono and IBM Plex Sans, self-hosted |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions (`withastro/action`, `actions/deploy-pages`) |

## Features

- Portuguese and English versions with localized routes (`/pt/projetos/`, `/en/projects/`) and `hreflang` links
- Project pages generated from Markdown files
- Résumé rendered from structured JSON data
- Sitemap, canonical URLs and Open Graph metadata
- Accessible markup: semantic HTML, skip link, visible focus states, reduced-motion support
- Responsive layout with no external runtime dependencies

## Project structure

```
src/
├── content/              Projects (Markdown) and résumé (JSON), one file per language
├── content.config.ts     Content schemas
├── i18n/ui.ts            Interface strings and localized routes
├── views/                Page templates (home, projects, project, résumé)
├── pages/                Route entry points for /pt and /en
├── components/           Navigation, footer, project list
├── layouts/Base.astro    Shared document head and layout
└── styles/global.css     Design tokens and base styles
```

## Development

Requires Node.js 22 or later.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve the production build locally
```

## Content

| Content | Location |
|---|---|
| Résumé and profile links | `src/content/cv/pt.json`, `src/content/cv/en.json` |
| Projects | `src/content/projects/pt/<slug>.md`, `src/content/projects/en/<slug>.md` |
| Interface text | `src/i18n/ui.ts` |

Each project uses the following front matter:

```yaml
title: Project name
summary: One-sentence description.
year: 2025
context: Course or organization        # optional
stack: [Python, Docker]
repo: https://github.com/Jp1823/repo   # optional
demo: https://example.com              # optional
featured: true                         # shown on the home page
order: 1                               # optional sort order
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. The repository's Pages source must be set to **GitHub Actions**.

## License

© João Abreu. All rights reserved.
