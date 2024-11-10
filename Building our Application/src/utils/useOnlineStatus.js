import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", (e) => setOnlineStatus(true));

    window.addEventListener("offline", (e) => setOnlineStatus(false));

    return () => {
      window.removeEventListener("online", (e) => setOnlineStatus(true));
      window.removeEventListener("offline", (e) => setOnlineStatus(false));
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
