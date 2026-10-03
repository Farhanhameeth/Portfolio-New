import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// The CMS (/admin) can save an emptied optional field as "" or null; treat that as "not set"
// so a blank URL or status never fails the build.
const opt = <T extends z.ZodType>(schema: T) =>
  z.preprocess((v) => (v === '' || v === null ? undefined : v), schema.optional());

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    summary: z.string(),
    year: z.string(),
    role: z.string(),
    /** Company the work was done at, if any */
    company: opt(z.string()),
    kind: z.enum(['Professional', 'Freelance', 'Research', 'Team', 'Solo', 'Academic']),
    status: opt(z.enum(['Shipped', 'In progress', 'Archived'])),
    /** Early/student work is shown in a separate, smaller section */
    early: z.boolean().default(false),
    stack: z.array(z.string()),
    highlights: z.array(z.string()).default([]),
    color: z.string().default('#ff5b2e'),
    /** Short mark shown on generated covers when there's no screenshot */
    mark: opt(z.string()),
    cover: opt(z.string()),
    repo: opt(z.url()),
    live: opt(z.url()),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: opt(z.coerce.date()),
    tags: z.array(z.string()).default([]),
    cover: opt(z.string()),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
