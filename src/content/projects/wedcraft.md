---
title: WedCraft
tagline: Multi-tenant wedding invitation platform
summary: A SaaS platform where couples pick a template and add-ons, then get a live wedding-invitation website on its own subdomain, with a guest and RSVP dashboard and a local vendor marketplace included.
year: '2026'
role: Project lead & full-stack developer
kind: Team
status: In progress
stack: [Next.js, TypeScript, React, Supabase, PostgreSQL, Vercel, sharp]
highlights:
  - Multi-tenant by design, with every invitation served on its own subdomain (e.g. sara-and-ravi.wedcraft.lk) from one codebase
  - Template builder with a live, itemised add-on price total
  - Guest dashboard with personal RSVP links, live RSVP counts, CSV import/export and table assignment
  - Upload pipeline that cut photo sizes by about 92% (3.3 MB → 252 KB) to stay within free-tier storage
mark: W&
color: '#e86a92'
featured: true
order: 5
---

## The idea

Couples who want a digital wedding invitation usually have two bad options. They can use a generic template site they can't really customise, or pay a freelancer for a one-off build. Neither helps them manage guests, track RSVPs or find good local vendors.

**WedCraft** is a SaaS platform that fixes that. A couple (or a planner on their behalf) signs up, picks a template, toggles the add-ons they want and watches the price update live. Within minutes they get a live invitation website on its own subdomain.

I wrote the product proposal, technical specification and development guideline, and I'm building it with a five-person team.

## Four products, one backend

| Product | Who uses it | What it does |
| --- | --- | --- |
| **Builder / storefront** | Couples and planners | Choose a template and add-ons, see live pricing, check out, then fill in a content wizard |
| **Invitation site** | Wedding guests | A fast, mobile-first public site where guests RSVP with no account needed |
| **Guest & planning dashboard** | Couples (private) | Guest list, personal RSVP links, live counts, CSV import/export, seating, vendor directory |
| **Admin panel** | Platform operator | Templates, pricing, tenants, white-label partners and vendors |

## Architecture

- **Multi-tenancy.** Middleware reads the request host (a wildcard subdomain or a custom domain) and renders the matching invitation, so hundreds of sites run from one codebase.
- **Config-driven.** Templates and add-ons are admin-editable records, and each invitation's content is a validated JSON document, so new templates don't need schema migrations.
- **White-label ready.** Wedding planners can run a branded storefront on their own domain, with their own vendor network.
- **Vendor marketplace.** Every couple's dashboard recommends local hair and make-up artists, venues, photographers and caterers. This turns a one-off purchase into ongoing engagement and a second revenue stream.
- **Stack.** **Next.js** and **TypeScript** on **Vercel** (native wildcard subdomains and automatic TLS), with **Supabase** for PostgreSQL, auth and storage.

## A detail I'm proud of

Guests upload a lot of photos. Every image now goes through a **sharp** pipeline before it's stored:

- It's resized to fit 2000 px, EXIF orientation is respected and transparency is flattened, then it's re-encoded as JPEG.
- GIFs pass through untouched so their animation survives.

A real 3.3 MB upload came out at **252 KB**, a 92% reduction with no visible loss at gallery size. That keeps a typical wedding comfortably within Supabase's free tier.
