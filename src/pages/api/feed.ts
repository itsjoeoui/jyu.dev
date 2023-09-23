import type { APIRoute } from "astro";
import { Client, fql } from "fauna";

const client = new Client({ secret: import.meta.env.FAUNA_SECRET });

type Tweet = {
  body: string;
  id: string;
  ts: {
    isoString: string;
  };
};

export const GET: APIRoute = async ({ params, request }) => {
  const query = fql`
    tweets.all().reverse()
  `;

  const response = await client.query<{ data: Tweet[] }>(query);

  return new Response(JSON.stringify(response.data));
};
