# Astro Blog :: equk.co.uk

<br />

<p align="center">
<img src="./public/media/logos/typescript.svg" alt="typescript-logo" width="80px">
<img src="./public/media/logos/astro.svg" width="80px" alt="astro">
<img src="./public/media/logos/zod.svg" width="80px" alt="zod">
<img src="./public/media/logos/vite.svg" width="80px" alt="vite">
</p>

## Features

- [x] OpenGraph & Twitter Meta Tags
- [x] Sitemap Generation
- [x] Markdown & MDX
- [x] Tailwind & PostCSS
- [x] Prism code highlighting (using `nordtheme`)
- [x] Dark mode (`prefers-color-scheme` & `localStorage`)
- [x] Custom typography styles (override tailwindcss typography)
- [x] Pagination of blog feed
- [x] Blog post slug is generated from date & title
- [x] Blog posts url format: `/YYYY/MM/DD/TITLE`
- [x] Site config `src/config.ts`
- [x] Syndication Feed Generation (`atom`)
- [x] OpenGraph Image
- [x] Hero Image Optimization

### Site Config

- [x] Site Title
- [x] Site Description
- [x] Menu Items
- [x] Site Author
- [x] Author Social Media
- [x] Posts Per Page
- [x] Recent Posts

Setting menu items creates links in Header & Footer components

Setting social media within author sets links in Header & Footer components

## Development Features

- [x] ESLint
- [x] Prettier

---

Based on `Astro Starter Kit: Blog` template

```
npm create astro@latest -- --template blog
```
