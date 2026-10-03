---
title: HRIS
tagline: Human resource information system
summary: A feature-rich HR information system front-end covering employees, attendance, leave, payroll, loans, KPIs, grievances, trainings and an interactive org chart.
year: '2025'
role: Front-end developer
kind: Team
stack: [React, Redux Toolkit, Material UI, Tailwind CSS, Chart.js, FullCalendar, Axios, Vite]
highlights:
  - 15+ modules — employees, attendance, leave, payroll, loans, KPIs, grievances, tickets, trainings and resources
  - Global state with Redux Toolkit and JWT-based auth via Axios interceptors
  - Interactive organisation chart, calendars and KPI charts
mark: HRIS
color: '#ff8a1f'
repo: https://github.com/Farhanhameeth/HRIS
featured: true
order: 2
---

## Overview

An HRIS brings every people-process in a company into one place. This front-end is built with **React** and **Redux Toolkit**, styled with **Material UI** and **Tailwind CSS**, and talks to a REST API through **Axios** with JWT authentication.

## Modules

- Dashboard with KPI and attendance charts (**Chart.js**)
- Employees, organisation structure (interactive org chart) and profiles
- Attendance, leave and a shared calendar (**FullCalendar**)
- Payroll, loans and reports
- Grievances, tickets, trainings and resources

## What I learned

Structuring a large React app by *feature* (each module owns its slice, API calls and pages) instead of by file type made it far easier to grow.
