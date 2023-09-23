import { z } from "astro:content";

export const Tweet = z.object({
  body: z.string(),
  id: z.string(),
  ts: z.object({
    // Can't make this a z.coerce.date() otherwise the Fauna driver will complain
    isoString: z.string(),
  }),
});

export type Tweet = z.infer<typeof Tweet>;
