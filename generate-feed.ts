import type { FeedOptions, Item } from 'feed'
import { Feed } from 'feed'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
import fs from 'fs/promises'
import fg from 'fast-glob'
import matter from 'gray-matter'
import { siteConfig } from '~/config'
import createSlug from '~/lib/createSlug'
import slugDate from '~/lib/slugDate'

const year = +new Date().getFullYear()

const markdown = MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
})

/*
 * Main Feed Options
 */

const output_dir = './dist/'

const options: FeedOptions = {
  title: siteConfig.title,
  description: siteConfig.description,
  id: siteConfig.url + '/',
  link: siteConfig.url + '/',
  language: 'en',
  copyright: `copyright ${year} equk.co.uk all rights reserved`,
  author: {
    name: siteConfig.author.name,
    link: siteConfig.url,
  },
  favicon: siteConfig.url + '/favicon.svg',
  feedLinks: {
    atom: siteConfig.url + '/atom.xml',
  },
}

/*
 * Build Feed From Posts
 */

async function buildBlogFeed() {
  // Start time for cli stats
  const start = +new Date()
  // Find markdown files in blog
  const files = await fg('src/content/blog/*.md')
  // Map over array of blog post files
  const posts: any[] = await Promise.all(
    files.map(async (file_in) => {
      const source = await fs.readFile(file_in, 'utf-8')
      const { data, content } = matter(source)
      const date = new Date(data.date)
      const slugLink = `/${slugDate(date.toISOString())}${createSlug(
        data.title
      )}/`
      // Generate excerpt from content
      const excerpt = sanitizeHtml(
        markdown
          .render(content)
          .replace('src="/', `src="${siteConfig.url}/`)
          .replace('href="/', `href="${siteConfig.url}/`)
          .split(' ')
          .slice(0, 80)
          .join(' ')
      )
      // Return data + add extra fields
      return {
        ...data,
        date: new Date(data.date),
        id: siteConfig.url + slugLink,
        link: siteConfig.url + slugLink,
        description: excerpt,
      }
    })
  )
  // Sort posts
  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date))
  // Generate feed
  const feed = new Feed(options)
  // Add post items
  posts.forEach((item: Item) => feed.addItem(item))
  // Check output directory exists
  await fs.access(output_dir)
  // Write output file
  await fs.writeFile(`${output_dir}atom.xml`, feed.atom1(), 'utf-8')
  // Show cli stats
  const end = +new Date()
  console.log(`\n    ${output_dir}atom.xml created (+${end - start}ms)\n`)
}

/*
 * Run Main Function
 */

buildBlogFeed().catch((error) => {
  console.error(error)
  // quit if error (eg: if output_dir does not exist)
  process.exit(1)
})
