#!/usr/bin/env node
// Usage: npm run new:post -- "My post title"
// Creates src/content/blog/<slug>.md with frontmatter ready to fill in.
import { writeFileSync, existsSync } from 'node:fs';

const title = process.argv.slice(2).join(' ').trim();
if (!title) {
  console.error('Usage: npm run new:post -- "My post title"');
  process.exit(1);
}
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const file = `src/content/blog/${slug}.md`;
if (existsSync(file)) {
  console.error(`${file} already exists.`);
  process.exit(1);
}
const today = new Date().toISOString().slice(0, 10);
writeFileSync(file, `---
title: ${JSON.stringify(title)}
description: One sentence that sums the post up.
date: ${today}
tags: []
draft: true
---

Start writing here. Markdown works: **bold**, *italic*, [links](https://example.com), lists, code blocks and images.

## A section heading

Headings like this one show up in the "On this page" sidebar.
`);
console.log(`Created ${file} (draft — set draft: false to publish)`);
