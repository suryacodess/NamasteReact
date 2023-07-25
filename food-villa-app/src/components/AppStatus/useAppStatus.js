import { useEffect, useState } from "react";

export default function AppStatus() {
  const [appStatus, setAppStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setAppStatus(true);
    });
    window.addEventListener("offline", () => {
      setAppStatus(false);
    });
  });

  return appStatus;
}
