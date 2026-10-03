---
title: HDO Platform
tagline: Website & custom CMS for a Sri Lankan NGO
summary: A freelance revamp of the website for the Human Development Organization (HDO), a Kandy-based human-rights NGO founded in 1990. I'm building a trilingual Next.js site with a custom, block-based CMS so HDO's staff can run it themselves.
year: '2026'
role: Freelance full-stack developer
kind: Freelance
status: In progress
stack: [Next.js 15, React 19, TypeScript, PostgreSQL, Drizzle ORM, sharp]
highlights:
  - Trilingual (English, Tamil, Sinhala) with locale-routed URLs and graceful English fallback
  - Custom block-based CMS with 20+ section types, so staff can compose pages without a developer
  - Privacy-first media pipeline that strips EXIF/GPS data from every upload
  - Role-based admin (JWT + bcrypt); vacancy CVs stored privately and downloadable only from the admin
mark: HDO
color: '#2f6fd6'
featured: true
order: 6
---

## The client

The **Human Development Organization (HDO)** is a Sri Lankan NGO founded in 1990 by university students and plantation workers. It works on human rights, peace education and the rights of the Malaiyaga Tamil plantation community. Its old WordPress site was hard to update and didn't reflect its work, so HDO hired me to rebuild it. The revamp runs in phases: wireframes first, then the front-end and a custom CMS.

> Not live yet. The new site is in development ahead of launch.

## What I'm building

A modern website and a **bespoke content-management system**, built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Drizzle ORM** and **PostgreSQL**.

- **Three languages, one content model.** Every piece of editorial text is stored as English, Tamil and Sinhala together. Pages are served at `/en`, `/ta` and `/si` with hreflang tags, and fall back to English wherever a translation is still pending. Layouts are built for Tamil and Sinhala text, which runs longer than English.
- **A block-based page composer.** Pages, programme write-ups and stories are made of blocks (hero, timeline, image grid, stats, downloads, video grid, live collections and more), so HDO's team can build and edit pages themselves.
- **Living content.** "Collection" blocks pull live projects, stories and team members into pages, so the home page stays current without a developer.
- **Media done properly.** Uploads go through **sharp**: re-encoded, resized and **stripped of EXIF/GPS metadata**, with a colour placeholder while loading. It already hosts over 200 gallery photos and 70+ campaign materials.
- **Secure admin.** JWT sessions with bcrypt and admin/editor roles. CVs submitted through the vacancies page are stored privately and can only be downloaded from inside the admin.
- **Built from the design.** I wrote scripts that pull HDO's own wording straight from the approved design files into the database, so the copy stays verbatim instead of being retyped.

## Highlights

- 14 programmes across 5 areas of work, publications, news, gallery, campaign tools, partners and vacancies
- The *Malayagam 200* campaign page, with the declaration in all three languages, editable in the CMS
- Self-hosted fonts and no third-party trackers
