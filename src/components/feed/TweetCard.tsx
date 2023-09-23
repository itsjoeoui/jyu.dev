import type { Tweet } from "@/types/tweet";
import { getPrettyTime } from "@/utils/getPrettyTime";

type Props = {
  tweet: Tweet;
};

const TweetCard = ({ tweet }: Props) => {
  const date = new Date(tweet.ts.isoString);
  return (
    <div className="max-w-xl rounded-md border border-neutral-800 p-4 transition hover:bg-neutral-800">
      <div className="text-sm text-neutral-300">{tweet.body}</div>

      <div className="py-0.5"></div>

      <div className="text-sm text-neutral-400">{getPrettyTime(date)}</div>
    </div>
  );
};

export default TweetCard;
