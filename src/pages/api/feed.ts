import type { APIRoute } from "astro";

export const GET: APIRoute = ({ params, request }) => {
  const post = [
    {
      id: 1,
      content: "This is a post",
      date: "2021-09-01T00:00:00.000Z",
    },
  ];
  return new Response(JSON.stringify({ data: post }));
};
