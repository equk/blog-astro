import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { siteConfig } from '~/config'
import createSlug from '~/lib/createSlug'
import slugDate from '~/lib/slugDate'
import sanitizeHtml from 'sanitize-html'
import MarkdownIt from 'markdown-it'

const markdown = MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
})

export async function get(context) {
  const posts = await getCollection('blog')
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site,
    items: posts.map((post) => ({
      link: `/${slugDate(post.data.date.toISOString())}/${createSlug(
        post.data.title
      )}/`,
      title: post.data.title,
      description: post.data.description,
      content: sanitizeHtml(markdown.render(post.body)),
      pubDate: new Date(post.data.date),
    })),
  })
}
