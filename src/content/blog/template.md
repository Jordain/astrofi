---
author: Jordain Perreault-Joyce
pubDate: 2023-09-20T09:30:00Z
title: Template
postSlug: automatic1111-qr-code-monster-tutorial
featured: true
draft: true
tags:
  - Template
heroImage: "/itemPreview.png"
description:
  Template Description.
---
Here are some rules/recommendations, tips & ticks for creating new posts in AstroPaper blog theme.

## Table of contents

## Frontmatter

Frontmatter is the main place to store some important information about the post (article). Frontmatter lies at the top of the article and is written in YAML format. Read more about frontmatter and its usage in [astro documentation](https://docs.astro.build/en/guides/markdown-content/).

Here is the list of frontmatter property for each post.

| Property          | Description                                                                     | Remark                                        |
| ----------------- | ------------------------------------------------------------------------------- | --------------------------------------------- |
| **_title_**       | Title of the post. (h1)                                                         | required<sup>\*</sup>                         |
| **_description_** | Description of the post. Used in post excerpt and site description of the post. | required<sup>\*</sup>                         |
| **_pubDatetime_** | Published datetime in ISO 8601 format.                                          | required<sup>\*</sup>                         |
| **_author_**      | Author of the post.                                                             | default = SITE.author                         |
| **_postSlug_**    | Slug for the post. Will automatically be slugified.                             | default = slugified title                     |
| **_featured_**    | Whether or not display this post in featured section of home page               | default = false                               |
| **_draft_**       | Mark this post 'unpublished'.                                                   | default = false                               |
| **_tags_**        | Related keywords for this post. Written in array yaml format.                   | default = others                              |
| **_heroImage_**     | OG image of the post. Useful for social media sharing and SEO.                  | default = SITE.ogImage or generated SVG image |

Only `title`, `description` and `pubDatetime` fields in frontmatter must be specified.

Title and description (excerpt) are important for search engine optimization (SEO) and thus AstroPaper encourages to include these in blog posts.

`slug` is the unique identifier of the url. Thus, `slug` must be unique and different from other posts. The whitespace of `slug` needs to be separated with `-` or `_` but `-` is recommended. However, even if you don't write the correct slug, AstroPaper will automatically slugify your incorrect slug. If slug is not specified, the slugified title of the post will be used as slug.

If you omit `tags` in a blog post (in other words, if no tag is specified), the default tag `others` will be used as a tag for that post. You can set the default tag in the `/src/content/_schemas.ts` file.

```ts
// src/contents/_schemas.ts
export const blogSchema = z.object({
  // ---
  // replace "others" with whatever you want
  tags: z.array(z.string()).default(["others"]),
  ogImage: z.string().optional(),
  description: z.string(),
});
```

### Sample Frontmatter

Here is the sample frontmatter for a post.

```yaml
# src/contents/sample-post.md
---
title: The title of the post
author: your name
pubDatetime: 2022-09-21T05:17:19Z
postSlug: the-title-of-the-post
featured: true
draft: false
tags:
  - some
  - example
  - tags
ogImage: ""
description: This is the example description of the example post.
---
```

## Adding table of contents

By default, a post (article) does not include any table of contents (toc). To include toc, you have to specify it in a specific way.

Write `Table of contents` in h2 format (## in markdown) and place it where you want it to be appeared on the post.

For instance, if you want to place your table of contents just under the intro paragraph (like I usually do), you can do that in the following way.

```md
---
# some frontmatter
---

Here are some recommendations, tips & ticks for creating new posts in AstroPaper blog theme.

## Table of contents

<!-- the rest of the post -->
```

## Headings

There's one thing to note about headings. The AstroPaper blog posts use title (title in the frontmatter) as the main heading of the post. Therefore, the rest of the heading in the post should be using h2 \~ h6.

This rule is not mandatory, but highly recommended for visual, accessibility and SEO purposes.

## Bonus

### Image compression

When you put images in the blog post, it is recommended that the image is compressed. This will affect the overall performance of the website.

My recommendation for image compression sites.

- [TinyPng](https://tinypng.com/)
- [TinyJPG](https://tinyjpg.com/)

### heroImage

The default OG image will be placed if a post does not specify the OG image. Though not required, OG image related to the post should be specify in the frontmatter. The recommended size for OG image is **_1200 X 640_** px.

> Since AstroPaper v1.4.0, OG images will be generated automatically if not specified. Check out [the announcement](https://astro-paper.pages.dev/posts/dynamic-og-image-generation-in-astropaper-blog-posts/).





Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Vitae ultricies leo integer
malesuada nunc vel risus commodo viverra. Adipiscing enim eu turpis egestas
pretium. Euismod elementum nisi quis eleifend quam adipiscing. In hac habitasse
platea dictumst vestibulum. Sagittis purus sit amet volutpat. Netus et malesuada
fames ac turpis egestas. Eget magna fermentum iaculis eu non diam phasellus
vestibulum lorem. Varius sit amet mattis vulputate enim. Habitasse platea
dictumst quisque sagittis. Integer quis auctor elit sed vulputate mi. Dictumst
quisque sagittis purus sit amet.

Morbi tristique senectus et netus. Id semper risus in hendrerit gravida rutrum
quisque non tellus. Habitasse platea dictumst quisque sagittis purus sit amet.
Tellus molestie nunc non blandit massa. Cursus vitae congue mauris rhoncus.
Accumsan tortor posuere ac ut. Fringilla urna porttitor rhoncus dolor. Elit
ullamcorper dignissim cras tincidunt lobortis. In cursus turpis massa tincidunt
dui ut ornare lectus. Integer feugiat scelerisque varius morbi enim nunc.
Bibendum neque egestas congue quisque egestas diam. Cras ornare arcu dui vivamus
arcu felis bibendum. Dignissim suspendisse in est ante in nibh mauris. Sed
tempus urna et pharetra pharetra massa massa ultricies mi.

Mollis nunc sed id semper risus in. Convallis a cras semper auctor neque. Diam
sit amet nisl suscipit. Lacus viverra vitae congue eu consequat ac felis donec.
Egestas integer eget aliquet nibh praesent tristique magna sit amet. Eget magna
fermentum iaculis eu non diam. In vitae turpis massa sed elementum. Tristique et
egestas quis ipsum suspendisse ultrices. Eget lorem dolor sed viverra ipsum. Vel
turpis nunc eget lorem dolor sed viverra. Posuere ac ut consequat semper viverra
nam. Laoreet suspendisse interdum consectetur libero id faucibus. Diam phasellus
vestibulum lorem sed risus ultricies tristique. Rhoncus dolor purus non enim
praesent elementum facilisis. Ultrices tincidunt arcu non sodales neque. Tempus
egestas sed sed risus pretium quam vulputate. Viverra suspendisse potenti nullam
ac tortor vitae purus faucibus ornare. Fringilla urna porttitor rhoncus dolor
purus non. Amet dictum sit amet justo donec enim.

Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Tortor posuere ac ut
consequat semper viverra. Tellus mauris a diam maecenas sed enim ut sem viverra.
Venenatis urna cursus eget nunc scelerisque viverra mauris in. Arcu ac tortor
dignissim convallis aenean et tortor at. Curabitur gravida arcu ac tortor
dignissim convallis aenean et tortor. Egestas tellus rutrum tellus pellentesque
eu. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Ut enim
blandit volutpat maecenas volutpat blandit aliquam etiam. Id donec ultrices
tincidunt arcu. Id cursus metus aliquam eleifend mi.

Tempus quam pellentesque nec nam aliquam sem. Risus at ultrices mi tempus
imperdiet. Id porta nibh venenatis cras sed felis eget velit. Ipsum a arcu
cursus vitae. Facilisis magna etiam tempor orci eu lobortis elementum. Tincidunt
dui ut ornare lectus sit. Quisque non tellus orci ac. Blandit libero volutpat
sed cras. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida.
Egestas integer eget aliquet nibh praesent tristique magna.
