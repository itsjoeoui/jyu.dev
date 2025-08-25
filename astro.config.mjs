import { defineConfig } from "astro/config";
// import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./src/utils/remarkReadingTime.ts";
import remarkUnwrapImages from "remark-unwrap-images";
import rehypeExternalLinks from "rehype-external-links";
import expressiveCode from "astro-expressive-code";
import { expressiveCodeOptions } from "./src/site.config";
import icon from "astro-icon";

import partytown from "@astrojs/partytown";

import sanity from "@sanity/astro";

import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://jyu.dev",

  integrations: [
    expressiveCode(expressiveCodeOptions),
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
  adapter: cloudflare({ imageService: "compile" }),

  vite: {
    resolve: {
      // NOTE: https://github.com/facebook/react/issues/31827
      // Use react-dom/server.edge instead of react-dom/server.browser for React 19.
      // Without this, MessageChannel from node:worker_threads needs to be polyfilled.
      alias: import.meta.env.PROD && {
        "react-dom/server": "react-dom/server.edge",
      },
    },
    plugins: [tailwindcss()],
  },
});

