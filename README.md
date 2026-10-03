# farhanhameeth.me

Personal site of **Farhan Hameeth**, a full-stack developer and CS undergraduate at IIT, Colombo.

Built with [Astro](https://astro.build). It's a static site with no framework runtime, and the interactive parts use small vanilla TypeScript modules.

## What's inside

| Feature | Where |
| --- | --- |
| Particle portrait hero (cursor repels, click = shockwave, scroll = dissolve) | `src/components/ParticleField.astro` |
| ⌘K / Ctrl K / `/` command palette, `T` to toggle theme, Konami-code easter egg | `src/components/CommandPalette.astro` |
| Physics "skills playground" you can grab and throw (matter-js, lazy-loaded) | `src/components/SkillPlayground.astro` |
| Scroll-pinned horizontal project reel, scroll-lit intro text, counters, magnetic buttons, tilt cards | `src/scripts/interactions.ts` |
| Custom cursor, intro preloader, view-transition page changes, light/dark theme | `src/components/*`, `src/layouts/Base.astro` |
| Blog with tags, search, reading time, table of contents, reading-progress bar, RSS | `src/pages/blog/*` |
| Project case studies with filters | `src/pages/projects/*` |
| SEO: Open Graph image, JSON-LD, sitemap, RSS, robots.txt | `src/layouts/Base.astro`, `public/` |

Animations respect `prefers-reduced-motion`.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the build
```

## Update your details

Personal information (bio facts, timeline, skills, grades, certifications, socials) lives in **`src/data/site.ts`**. Edit it there and the change shows up everywhere on the site.

**CV button:** put your CV at `public/cv.pdf` and a "Download CV" button appears on the About page.

## Write a blog post

```bash
npm run new:post -- "What I learned building PerformEdge"
```

This creates `src/content/blog/what-i-learned-building-performedge.md`:

```md
---
title: "What I learned building PerformEdge"
description: One sentence that sums the post up.
date: 2026-10-03
tags: [react, fastapi]
draft: true        # drafts show in `npm run dev` but are hidden in production
cover: /images/blog/my-cover.webp   # optional
---

Write in Markdown…
```

Set `draft: false`, commit and push, and the post goes live. Images go in `public/images/blog/`.

## Add a project

Create `src/content/projects/<slug>.md`:

```md
---
title: My Project
tagline: Short one-liner
summary: Two-sentence description shown on cards and in search results.
year: '2026'
role: Full-stack developer
kind: Solo            # Solo | Team | Academic | Client
status: Shipped       # Shipped | In progress | Archived
stack: [React, Spring Boot, MySQL]
highlights:
  - A bullet shown in the sidebar
color: '#2f81f7'      # accent colour for the card
cover: /images/projects/my-project.webp   # optional screenshot; omit for a generated poster
mark: MP              # optional letters for the generated poster
repo: https://github.com/…
live: https://…
featured: true        # show in the home-page reel
order: 7              # sort order
---

## The case study in Markdown…
```

## Contact form

By default the contact form opens the visitor's email app with the message filled in. To receive messages without that step, create a free [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) form, then set its endpoint at build time:

```bash
PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxx npm run build
```

## Deploy

**GitHub Pages:** `.github/workflows/deploy.yml` builds and deploys on every push to `main`. Turn it on in the repo under *Settings → Pages → Source: GitHub Actions*. The site expects to be served from the domain root, so add the custom domain `farhanhameeth.me` in the same settings page.

**Vercel / Netlify / Cloudflare Pages:** import the repo. Use build command `npm run build` and output directory `dist`.

If you change domains, update `site` in `astro.config.mjs` and the sitemap line in `public/robots.txt`.
