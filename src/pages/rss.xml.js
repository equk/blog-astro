import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '@consts';
import createSlug from "@lib/createSlug";
import slugDate from "@lib/slugDate";

export async function get(context) {
  const posts = await getCollection('blog');
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      link: `/${slugDate(post.data.date.toISOString())}/${createSlug(post.data.title)}/`,
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.date),
    })),
  });
}
