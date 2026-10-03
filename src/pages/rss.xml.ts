import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../lib/utils';
import { site } from '../data/site';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `${site.name} — Writing`,
    description: 'Notes on full-stack development, computer science and building things.',
    site: context.site!,
    items: posts.filter((p) => !p.data.draft).map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      categories: p.data.tags,
      link: `/blog/${p.id}/`,
    })),
  });
}
