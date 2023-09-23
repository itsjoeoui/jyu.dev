import { z } from "astro:content";

export const Post = z.object({
  title: z.string(),
  tags: z.array(z.string()),
  img: z.string().optional(),
  isDraft: z.boolean(),
  date: z.date(),
  author: z.string().default("Joey Yu"),
});

export type Post = z.infer<typeof Post>;
