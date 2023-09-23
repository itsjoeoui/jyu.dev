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
  console.log(response.data.data[0].ts.isoString);

  return new Response(JSON.stringify(response.data));
};
