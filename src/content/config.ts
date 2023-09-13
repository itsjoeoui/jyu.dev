import { defineCollection, z } from "astro:content";
import { Post } from "../types/post";

const postCollection = defineCollection({
  type: "content",
  schema: Post,
});

export const collections = {
  post: postCollection,
};
