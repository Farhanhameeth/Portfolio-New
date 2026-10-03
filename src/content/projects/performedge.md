---
title: PerformEdge
tagline: HR analytics & workforce intelligence
summary: A full-stack HR analytics platform that turns raw employee, attendance and performance data into live dashboards — headcount, attendance trends, latecomers, service-year and gender analysis, and more.
year: '2026'
role: Full-stack developer (team project)
kind: Team
status: In progress
stack: [React, TypeScript, Tailwind CSS, Framer Motion, Chart.js, FastAPI, Python, MySQL, Vitest, Pytest]
highlights:
  - 20+ FastAPI analytics endpoints — attendance trends, latecomers, age, gender, contract-type and location-wise staff distribution
  - Role-based dashboards for managers and employees with JWT auth, notifications and messaging
  - Tested on both sides of the stack with Vitest (front-end) and Pytest (back-end)
color: '#e5484d'
cover: /images/projects/performedge.webp
repo: https://github.com/Farhanhameeth/PerformEdge
featured: true
order: 1
---

## The problem

HR teams sit on a mountain of data — attendance logs, leave records, contracts, performance reviews — but most of it lives in spreadsheets. Getting a simple answer like *"which branch has the most late arrivals this month?"* means hours of manual work.

## What we built

PerformEdge is a workforce-intelligence dashboard. A **FastAPI** back-end exposes focused analytics endpoints over a **MySQL** database, and a **React + TypeScript** front-end turns them into interactive charts with **Chart.js** and smooth motion with **Framer Motion**.

- **Manager dashboard** — headcount, new hires, on-leave and overtime at a glance, plus gender, age and employee-type breakdowns.
- **Employee dashboard** — personal attendance, leave balance, performance and team directory.
- **Analytics modules** — attendance trends, latecomers, no-pay, service-year analysis, upcoming birthdays and location-wise staff distribution.
- **Auth** — sign-up, login and password reset with JWT.

## What I learned

Splitting a big dashboard into many small, single-purpose API routers kept a team of developers out of each other's way — and made each endpoint easy to test in isolation.
