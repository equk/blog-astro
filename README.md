# Astro Starter Kit: Blog

## Changelog

* moved blogposts to base dir as they should now be unique as they use pubDate
* added date to slug generation for blog posts using slugDate
* created function slugDate for formatting date to be used in slug
* added moment dependency for date formatting
* moved heroImage below post title & added date formatting
* added newpost command to package.json
* added newpost script using content schema of site
* updated README with info relating to blog slug generation
* generate slugs from frontmatter title using createSlug script
* created new script to help with generating slugs from title
* added astro generated types to gitignore
* install astro 2.0.2 & related packages
* update astro components to use content collection
* updated README with info relating to getCollection
* update astro to 2.0.2
* move location of posts in order to use new contenc collections in astro
* move location of config to consts
* move all blog posts from src/pages/blog to content/posts
* initial commit from withastro blog

---

```
npm create astro@latest -- --template blog
```
Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

- [x] Blog post slug is generated from date & title
- [x] Blog posts url format: `/YYYY/MM/DD/TITLE`

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

## Blog Posts

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

