import type { SanityDocument } from "@sanity/client";
import { sanityClient } from "sanity:client";

/** Note: this function filters out draft posts based on the environment */
export async function getAllPosts() {
  const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, tags, isDraft}`;

  return await sanityClient.fetch<SanityDocument[]>(POSTS_QUERY);
}

export function sortMDByDate(posts: SanityDocument[]) {
  return posts.sort((a, b) => {
    const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf();
    const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf();
    return bDate - aDate;
  });
}

/** Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so. */
export function getAllTags(posts: SanityDocument[]) {
  console.log(posts);
  return posts.flatMap((post) => [...post.tags]);
}

/** Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so. */
export function getUniqueTags(posts: SanityDocument[]) {
  return [...new Set(getAllTags(posts))];
}

/** Note: This function doesn't filter draft posts, pass it the result of getAllPosts above to do so. */
export function getUniqueTagsWithCount(
  posts: SanityDocument[],
): Array<[string, number]> {
  return [
    ...getAllTags(posts).reduce(
      (acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
      new Map<string, number>(),
    ),
  ].sort((a, b) => b[1] - a[1]);
}
