import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://astrofy-template.netlify.app',
  integrations: [mdx(), sitemap(), tailwind(),]
  ,
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  vite: {
    // ... other Vite configurations
    resolve: {
      alias: {
        '@assets': '/src/assets',
      },
    },
  },
});
