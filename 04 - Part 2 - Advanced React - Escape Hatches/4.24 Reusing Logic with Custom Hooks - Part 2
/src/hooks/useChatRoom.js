import { useEffect, useEffectEvent } from "react";
import { createConnection } from "../utils/Chat";

export default function useChatRoom({ serverUrl, roomId, onReceiveMessage }) {
  const onMessage = useEffectEvent(onReceiveMessage);
  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };
    const connection = createConnection(options);
    connection.on("message", onMessage);
    connection.connect();

    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);
}
