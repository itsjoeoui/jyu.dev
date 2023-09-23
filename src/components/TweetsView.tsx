import { useEffect, useState } from "react";
import { z } from "astro:content";

import { Tweet } from "../types/tweet";

type Props = {};

const TweetView = (props: Props) => {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    const fetchTweet = async () => {
      const response = await fetch("/api/feed");
      const data = await response.json();
      console.log(data);
      const parsedData = z.array(Tweet).parse(data["data"]);

      setTweets(parsedData);
    };

    console.log("BRUH");
    fetchTweet();
  }, []);

  return (
    <div>
      {tweets.map((post) => {
        return <div key={post.id}>{post.body}</div>;
      })}
    </div>
  );
};

export default TweetView;
