import type { APIRoute } from "astro";
import { Client, fql } from "fauna";
import type { Tweet } from "@/types/tweet";

const client = new Client({ secret: import.meta.env.FAUNA_SECRET });

export const GET: APIRoute = async ({ params, request }) => {
  const id = params.id!;
  const query = (id: string) => fql`
  tweets.byId(${id})
`;

  const response = await client.query<Tweet>(query(id));

  return new Response(JSON.stringify(response.data));
};
