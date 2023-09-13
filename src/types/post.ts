import { z } from "astro:content";

export const Post = z.object({
  title: z.string(),
  tags: z.array(z.string()),
  img: z.string().optional(),
  isDraft: z.boolean(),
  author: z.string().default("Joey Yu"),
  date: z.date(),
  // slug: z.string(),
});

export type Post = z.infer<typeof Post>;
