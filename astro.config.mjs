import { defineConfig } from "astro/config";
// import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./src/utils/remarkReadingTime.ts";
import remarkUnwrapImages from "remark-unwrap-images";
import rehypeExternalLinks from "rehype-external-links";
import expressiveCode from "astro-expressive-code";
import { expressiveCodeOptions } from "./src/site.config";
import icon from "astro-icon";
import vercel from "@astrojs/vercel";

import partytown from "@astrojs/partytown";

import sanity from "@sanity/astro";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://jyu.dev",
  integrations: [
    expressiveCode(expressiveCodeOptions),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    // mdx(),
    icon(),
    partytown({ config: { forward: ["dataLayer.push"] } }),
    sanity({
      projectId: "9zcu1jb0",
      dataset: "production",
      useCdn: false, // for static builds
      studioBasePath: "/admin",
    }),
    react(),
  ],
  markdown: {
    remarkPlugins: [remarkUnwrapImages, remarkReadingTime],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["nofollow, noopener, noreferrer"],
        },
      ],
    ],
    remarkRehype: {
      footnoteLabelProperties: {
        className: [""],
      },
    },
  },
  prefetch: true,
  output: "server",
  adapter: vercel(),
});

