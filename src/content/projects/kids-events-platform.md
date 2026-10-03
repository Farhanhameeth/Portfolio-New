---
title: Kids' Events Platform
tagline: Kids' events app for iOS & Android
summary: A mobile platform where parents discover and register their children for events run by hosts. I built the Flutter app for iOS and Android and the React admin panel and CMS behind it, at Innovation Quotient.
year: '2026'
role: Mobile & admin-panel developer
company: Innovation Quotient
kind: Professional
stack: [Flutter, Dart, React, Supabase, Google Maps, iOS, Android]
highlights:
  - One Flutter codebase shipping to both iOS (via TestFlight) and Android
  - Separate parent and host portals, each with its own sign-up, OTP verification and login
  - Child and event profiles, map-based event discovery, add-to-calendar and Sign in with Apple
  - React admin panel and CMS for managing events, hosts and content
  - Card-payment integration with a bank payment gateway, including 3-D Secure
mark: Kids
color: '#7c5cff'
featured: true
order: 0.5
---

## Overview

A mobile platform that connects parents with events and activities for their children. **Hosts** list events, and **parents** create profiles for their children, discover events nearby and register them.

At **Innovation Quotient** I built the **mobile app in Flutter**, one codebase shipped to both **iOS and Android**, and the **React admin panel and CMS** the team uses to run the platform.

## The mobile app

- **Two portals in one app.** Parents and hosts each get their own sign-up, OTP verification and login flows.
- **Profiles.** Parents add child profiles and hosts create event profiles, with photos from the camera or library.
- **Discovery.** Events appear on **Google Maps** based on the user's location, and can be added to the phone's calendar in one tap.
- **Sign in with Apple** on iOS, alongside email sign-up.
- **Backend.** **Supabase** handles authentication, data and storage.
- **Release.** I prepared the app for the App Store: privacy permission prompts, versioning, and builds distributed through **TestFlight**.

## Polishing the details

Small layout bugs matter on phones. I fixed login screens that overflowed on shorter devices or larger text sizes by making them scroll properly, and buttons that clipped the descenders of letters like "g" by switching from fixed to minimum heights.

## Admin panel & CMS

A **React** web panel for the team to manage events, hosts and app content, so day-to-day operations don't need a developer.

## Payments

I worked on integrating card payments through a bank payment gateway: card details go from the device straight to the gateway, 3-D Secure challenges run inside the app, and a server-side service verifies every payment and blocks duplicate charges.

> Client work under NDA. The product name, source code and screenshots are confidential.
