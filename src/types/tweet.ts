import { z } from "astro:content";

export const Tweet = z.object({
  body: z.string(),
  id: z.string(),
  ts: z.object({
    isoString: z.string(),
  }),
});

export type Tweet = z.infer<typeof Tweet>;
