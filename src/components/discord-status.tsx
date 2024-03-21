import { useEffect, useState } from "react";
import { useLanyard, type Activity } from "react-use-lanyard";

type Props = {
  userId: string;
};

const DiscordStatus = ({ userId }: Props) => {
  const { loading, status } = useLanyard({ userId, socket: true });

  if (
    loading ||
    !status ||
    !status.activities ||
    status.activities.length === 0
  ) {
    return;
  }

  return (
    <div className="text-muted-foreground">
      {status.activities.map((activity) => (
        <ActivityDisplay activity={activity} key={activity.name} />
      ))}
    </div>
  );
};

function ActivityDisplay({ activity }: { activity: Activity }) {
  const [elapsedTime, setElapsedTime] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (!activity.timestamps?.start) return;
    const difference = Date.now() - activity.timestamps?.start;
    setElapsedTime(difference);

    const interval = setInterval(() => {
      if (!activity.timestamps?.start) return;
      const difference = Date.now() - activity.timestamps?.start;
      setElapsedTime(difference);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="whitespace-nowrap">
      <div>{activity.name}</div>
      <div>{activity.details}</div>
      <div>{activity.state}</div>
      {elapsedTime && <div>{convertMilisecondsToHMS(elapsedTime)} elapsed</div>}
    </div>
  );
}

function convertMilisecondsToHMS(milliseconds: number) {
  var totalSeconds = Math.floor(milliseconds / 1000);
  var hours = Math.floor(totalSeconds / 3600);
  var minutes = Math.floor((totalSeconds % 3600) / 60);
  var remainingSeconds = totalSeconds % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export default DiscordStatus;
