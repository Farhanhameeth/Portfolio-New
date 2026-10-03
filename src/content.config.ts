import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    summary: z.string(),
    year: z.string(),
    role: z.string(),
    kind: z.enum(['Team', 'Solo', 'Academic', 'Client']),
    status: z.enum(['Shipped', 'In progress', 'Archived']).default('Shipped'),
    stack: z.array(z.string()),
    highlights: z.array(z.string()).default([]),
    color: z.string().default('#ff5b2e'),
    /** Short mark shown on generated covers when there's no screenshot */
    mark: z.string().optional(),
    cover: z.string().optional(),
    repo: z.url().optional(),
    live: z.url().optional(),
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
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
