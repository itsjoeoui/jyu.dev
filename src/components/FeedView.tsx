import { z } from "astro:content";
import { useEffect, useState } from "react";

type Props = {};

const Post = z.object({
  id: z.number(),
  content: z.string(),
  date: z.coerce.date(),
});

type Post = z.infer<typeof Post>;

const FeedView = (props: Props) => {
  const [feedPost, setFeedPost] = useState<Post[]>([]);

  useEffect(() => {
    const fetchFeed = async () => {
      const response = await fetch("/api/feed");
      const data = await response.json();
      console.log(data);
      const parsedData = z.array(Post).parse(data["data"]);

      setFeedPost(parsedData);
    };

    console.log("BRUH");
    fetchFeed();
  }, []);

  return (
    <div>
      {feedPost.map((post) => {
        return <div key={post.id}>{post.content}</div>;
      })}
    </div>
  );
};

export default FeedView;
