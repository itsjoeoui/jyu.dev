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
  return (
    <div className="whitespace-nowrap">
      <div>{activity.name}</div>
      <div>{activity.details}</div>
      <div>{activity.state}</div>
      <div>{activity.timestamps?.start}</div>
    </div>
  );
}

export default DiscordStatus;
