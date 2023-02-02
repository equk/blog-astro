---
slug: ""
title: "Generating Slug From Title In Astro"
description: ""
date: 2023-02-02T15:03:12.984Z
draft: true
author: equilibriumuk
tags:
heroImage: "/placeholder-hero.jpg"
---

By default astro generates slug using filenames.

There are a few changes needed in order to generate the slug from the title field in frontmatter.

- [x] `createSlug` function
- [x] add `createSlug` to slug generation referencing `title`
- [x] link to blog posts using `createSlug`

## createSlug function

This is a simple function which formats the title into a slug.

```ts
// src/lib/createSlug.ts
export default function (title: string) {
    return title
        // remove leading & trailing whitespace
        .trim()
        // remove special characters
        .replace(/[^A-Za-z0-9 ]/g, "")
        // replace spaces
        .replace(/\s+/g, "-")
        // remove leading & trailing separtors
        .replace(/^-+|-+$/g, '')
        // output lowercase
        .toLowerCase();
}
```

## slug generation

Instead of referencing `post.slug` we need to call `createSlug` referencing `post.data.title`.

```diff
// src/pages/blog/[...slug].astro
export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
-    params: { slug: post.slug },
+    params: { slug: createSlug(post.data.title) },
    props: post,
  }));
}
type Props = CollectionEntry<"blog">;
```

## blog post links

Similar to above reference `post.data.title` using `createSlug` instead of `post.slug`

```diff
-  <a href={`/blog/${post.slug}/`}>{post.data.title}</a>
+  <a href={`/blog/${createSlug(post.data.title)}/`}>
+    {post.data.title}
+  </a>
```