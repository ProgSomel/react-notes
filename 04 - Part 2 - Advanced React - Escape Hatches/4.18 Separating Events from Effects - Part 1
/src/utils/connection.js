export default function createConnection(serverURL, roomId) {
  return {
    connect: () => {
      console.log(`Connected ${serverURL} to room ${roomId}`);
    },
    disconnect: () => {
      console.log(`Disconnected ${serverURL} from room ${roomId}`);
    },
  };
}
