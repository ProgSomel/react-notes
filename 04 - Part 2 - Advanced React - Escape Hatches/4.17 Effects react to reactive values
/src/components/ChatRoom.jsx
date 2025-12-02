import React, { useEffect } from "react";
import createConnection from "../utils/connection";

// const serverURL = "https://localhost:1234";

export default function ChatRoom({ roomId }) {
  useEffect(() => {
    //? synchronize with external chat server
    const connection = createConnection(serverURL, roomId);
    connection.connect();
    //? Cleanup
    return () => {
      connection.disconnect();
    };
  }, [roomId]);
  return <div>Welcome to the ${roomId} room!</div>;
}
