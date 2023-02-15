---
slug: ''
title: 'Generating Slug Using Published Date In Astro'
description: ''
date: 2023-02-02T15:31:23.725Z
draft: true
author: equilibriumuk
tags:
heroImage: '/placeholder-hero.jpg'
---

This is an extension to 📝 [Generating Slug From Title In Astro](/2023/02/02/generating-slug-from-title-in-astro/)

The changes are similar to the previous article but will require an additional library to format the timestamp from frontmatter.

- [x] date formatter library (eg: `moment`)
- [x] `slugDate` function
- [x] add `slugDate` to slug generation referencing `title`
- [x] link to blog posts using `slugDate`

## slugDate function

First install moment

```sh
pnpm add moment
```

Next create a new function in `src/lib/slugDate.ts`

```ts
import { default as moment } from 'moment'

export default function (date: string) {
  const m = moment(date)
  date = `${m.format('YYYY')}/${m.format('MM')}/${m.format('DD')}/`
  return date
}
```

## slug generation

Call `slugDate` referencing `post.data.date` aswell as `createSlug` referencing `post.data.title`.

_`toISOString` is required to change date to a string for types._

```diff
// src/pages/blog/[...slug].astro
export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
-    params: { slug: createSlug(post.data.title) },
+    params: {
+      slug:
+        slugDate(post.data.date.toISOString()) +
+        createSlug(post.data.title),
+    },
    props: post,
  }));
}
type Props = CollectionEntry<"blog">;
```

## blog post links

Similar to above call `slugDate` referencing `post.data.date` aswell as `createSlug` referencing `post.data.title`

```diff
// src/pages/blog/index.astro
-  <a href={`/blog/${createSlug(post.data.title)}/`}>
+  <a href={`/blog/${slugDate(post.data.date.toISOString())}
+  ${createSlug(post.data.title)}/`}>
    {post.data.title}
  </a>
```

## bonus

Now all blog posts are using `YYYY/MM/DD/title` there is no need for `/blog/` so it is now possible to move `src/pages/blog/[...slug].astro` to `src/pages/[...slug].astro` as all blog posts will have unique slugs.

This cleans up urls a bit & is the same setup I have on my gatsby site.
