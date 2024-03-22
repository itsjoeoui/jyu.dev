import { useEffect, useState } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

type Props = {
  page: string;
};

const LikeButton = ({ page }: Props) => {
  const [fpHash, setFpHash] = useState("");

  // create and set the fingerprint as soon as
  // the component mounts
  useEffect(() => {
    const setFp = async () => {
      const fp = await FingerprintJS.load();

      const { visitorId } = await fp.get();

      setFpHash(visitorId);
    };

    setFp();
  }, []);

  return <div>LikeButton</div>;
};

export default LikeButton;
