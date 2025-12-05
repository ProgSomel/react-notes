import useOnlineStatus from "../hooks/useOnlineStatus";

export default function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleClick() {
    console.log("Your data is saved!");
  }

  return (
    <button onClick={handleClick} disabled={!isOnline}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}
