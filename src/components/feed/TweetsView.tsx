import { useEffect, useState } from "react";
import { z } from "astro:content";

import { Tweet } from "@/types/tweet";
import TweetCard from "./TweetCard";

const TweetView = () => {
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    const fetchTweet = async () => {
      const response = await fetch("/api/feed");
      const data = await response.json();
      const parsedData = z.array(Tweet).parse(data["data"]);

      setTweets(parsedData);
    };

    fetchTweet();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {tweets.map((tweet, idx) => {
        return <TweetCard key={idx} tweet={tweet} />;
      })}
      {tweets.length === 0 && (
        <div className="text-neutral-300 text-center">
          Something is not right!
        </div>
      )}
    </div>
  );
};

export default TweetView;
