import { getCollection, type CollectionEntry } from 'astro:content';
import projectOrder from '../data/content/project-order.json';

export const formatDate = (d: Date, style: 'long' | 'short' = 'long') =>
  d.toLocaleDateString('en-GB', style === 'long' ? { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' } : { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' });

export const readingTime = (body = '') => Math.max(1, Math.round(body.trim().split(/\s+/).length / 220));

export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export async function getPosts() {
  return (await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

/**
 * Projects in the order set on the CMS "Project order" page (drag and drop).
 * Projects missing from that list follow afterwards, sorted by their own `order` number,
 * so a newly added project still shows up before anyone reorders it.
 */
export async function getProjects() {
  const rank = new Map(projectOrder.order.map((id, i) => [id, i]));
  const pos = (p: CollectionEntry<'projects'>) => rank.get(p.id) ?? Infinity;
  return (await getCollection('projects')).sort((a, b) => pos(a) - pos(b) || a.data.order - b.data.order);
}

export type Post = CollectionEntry<'blog'>;
export type Project = CollectionEntry<'projects'>;
